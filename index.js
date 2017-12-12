// Write your solution in this file!
function nondestructivelyUpdateObject(oldDriver, driverAdditions) {
  return Object.assign({}, oldDriver, driverChanges);
}

const driver = {
  name: 'Sam'
};

const newDriver = nondestructivelyUpdateObject(driver, 'address', '11 Broadway')
