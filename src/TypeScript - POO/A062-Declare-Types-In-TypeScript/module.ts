import _ from 'lodash';

_.mult = function (array: number[]): number {
  return array.reduce((total, actual) => total * actual, 1);
};

global.MYGLOBAL = 'MY GLOBAL';

export default _;
