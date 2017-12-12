// Write your solution in this file!
let driver = {
};

function updateDriverWithKeyAndValue(driver, key, value) {
  return driver.name = 'Sam';
};

let newDriver = updateDriverWithKeyAndValue(driver, 'name', 'Sam');

console.log(driver);

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign(driver, {name: "sam"}, {addres: "12 Broadway"})
};

function deleteFromDriverByKey(driver, key) {

};

function destructivelyDeleteFromDriverByKey(driver, key) {

};
