type Documents = {
  title: string;
  text: string;
  date?: Date;
};

const documents: Documents = {
  title: 'The Title Book',
  text: 'I really like of read books',
  // date: new Date()
};

console.log(documents.date?.toDateString() ?? 'There is no date for this book');
console.log(undefined ?? '2-There is no date for this book');
console.log(null ?? '3-There is no date for this book');
console.log(false ?? '4-There is no date for this book');
console.log(0 ?? '5-There is no date for this book');
console.log('' ?? '6-There is no date for this book');
console.log({} ?? '7-There is no date for this book');
