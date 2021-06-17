type FilterCallBack<U> = (value: U, index?: number, array?: U[]) => boolean;

export function myFilter<T>(array: T[], callbackfn: FilterCallBack<T>): T[] {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

const array = [1, 2, 3, 4, 9, 8, 3, 5, 4, 5, 6, 45];

const arrayFilterSystem = array.filter((value) => value < 5);
console.log(arrayFilterSystem);

const arrayFilterMy = myFilter(array, (value) => value < 5);
// const arrayFilterMy = myFilter<number>(array, (value) => value < 5);
console.log(arrayFilterMy);
