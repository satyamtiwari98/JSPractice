const promise = new Promise((resolve, reject) => {
  //   resolve("success");
  reject("Errorr try again");
});

promise.then((res) => console.log(res)).catch((err) => console.log(err));
