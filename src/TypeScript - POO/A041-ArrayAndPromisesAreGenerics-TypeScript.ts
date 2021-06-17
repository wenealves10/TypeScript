type MyType = number;

const arrayNumber: Array<number> = [1, 2, 3, 5, 6, 45, 4];
console.log(arrayNumber);

async function promise() {
  return 1;
}

async function myPromise(): Promise<MyType> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

promise().then((result) => console.log(result + 1));
myPromise().then((result) => console.log(result + 1));
