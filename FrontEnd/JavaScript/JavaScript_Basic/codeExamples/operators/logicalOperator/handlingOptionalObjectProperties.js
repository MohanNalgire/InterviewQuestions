const options= {};

options.timeout ??= 5000;   // Default to 5000 ms if timeout is null/undefined
options.retryCount ||=3;    // Default to 3 if retryCount is falsy e.g 0
options.isEnabled &&= false;    // Disable if isEnaled is already truthy

console.log(options);