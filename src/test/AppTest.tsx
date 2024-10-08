function myPromiseAll(promises: Promise[]) {
  return new Promise((resolve, reject) => {
    if (!promises.length) {
      resolve([]);
    }
    const result = [];
    let promiseCount = 0;

    promises.forEach((promise, index) => {
      promise
        .then((res) => {
          result[index] = res;
          promiseCount++;

          if (promiseCount === result.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}
