const promiseOne = new Promise((resolve, reject) => {
  //eventually completion or failure of async task
  setTimeout(() => {
    console.log("async task is compeleted");
    resolve(); //task is completed and the promise is consumed
  }, 1000);
});
promiseOne.then(() => {
  console.log("promise consumed");
});
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("COMPLETION");
    resolve();
  }, 1000);
}).then(() => {
  console.log("promise consumed");
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ user: "himansu", gmail: "himansu@gmail.com" });
  }, 1000);
});
promiseThree.then((user) => {
  console.log(user);
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "himansu", gmail: "himansu@gmail.com" });
    } else {
      reject("getting error");
    }
  }, 1000);
});
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => console.log("promise either resolved or rejected"));

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "himansu", gmail: "himansu@gmail.com" });
    } else {
      reject("js error");
    }
  }, 1000);
});
async function consumedPromise() {
  // async directly cant handle the error

  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumedPromise();
