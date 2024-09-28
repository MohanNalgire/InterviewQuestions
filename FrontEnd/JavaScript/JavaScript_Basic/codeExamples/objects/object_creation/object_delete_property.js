/* create a object by any way of object creation and delete the property from it. For this write function.
*/
function deleteProperty(obj, prop) {
    // Check if the property exists directly on the object
    if (obj.hasOwnProperty(prop)) {
        delete obj[prop];
    } else if (Object.getPrototypeOf(obj).hasOwnProperty(prop)) {
        // Check if the property exists on the prototype
        delete Object.getPrototypeOf(obj)[prop];
    } else {
        console.log(`Property "${prop}" does not exist on the object or its prototype.`);
    }
}