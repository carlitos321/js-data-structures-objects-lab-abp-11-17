// Write your solution in this file!

function updateDriverWithKeyAndValue(driver, key, value) {
  return object.assign({}, driver, { [key]: value })
};

let driver = {
  name: 'Sam'
};

const newDriver = updateDriverWithKeyAndValue(driver, 'name', 'James');

console.log('newDriver');

function nondestructivelyUpdateObject(oldDriver, driverAdditions) {

};

function deleteFromDriverByKey(driver, key) {

};

function destructivelyDeleteFromDriverByKey(driver, key) {

};
