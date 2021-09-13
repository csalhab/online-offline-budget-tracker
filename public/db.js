let db;
// create a new db request for a "BudgetDB" database.
const request = window.indexedDB.open("BudgetDB", 1);

//Create schema
request.onupgradeneeded = function (event) {
  db = event.target.result;
  // create object store called "BudgetStore" and set autoIncrement to true
  const BudgetStore = db.createObjectStore("BudgetStore", {
    autoIncrement: true,
  });
  //create budgets that we can query on their transactions
  BudgetStore.createIndex("budgets", "transactions");
};

//opens a transaction, access the BudgetStore objectStore and
request.onsuccess = function (event) {
  db = event.target.result;

  if (navigator.onLine) {
    checkDatabase();
  }
};

request.onerror = function (event) {
  // log error here
  console.log("there was an error, more info follows:");
  console.log(event.target.errorCode);
};

function saveRecord(record) {
  // create a transaction on the pending db with readwrite access
  const transaction = db.transaction(["BudgetStore"], "readwrite");
  // access your pending object store
  const objectStore = transaction.objectStore("BudgetStore");
  // add record to your store with add method.
  objectStore.add(record);
}

function checkDatabase() {
  // open a transaction on your pending db
  // access your pending object store
  // get all records from store and set to a variable
  const transaction = db.transaction(["BudgetStore"], "readwrite");
  const budgetStore = transaction.objectStore("BudgetStore");
  const getAll = budgetStore.getAll();

  getAll.onsuccess = function () {
    if (getAll.result.length > 0) {
      fetch("/api/transaction/bulk", {
        method: "POST",
        body: JSON.stringify(getAll.result),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then(() => {
          // if successful, open a transaction on your pending db
          // access your pending object store
          // clear all items in your store
          const transaction = db.transaction(["BudgetStore"], "readwrite");
          const budgetStore = transaction.objectStore("BudgetStore");
          budgetStore.clear();
        });
    }
  };
}

// listen for app coming back online
window.addEventListener("online", checkDatabase);
