// 1. What is the output
let obj = { count: 1 };
obj.count ||= 0;
obj.count &&= 5;
obj.count ??= 10;
console.log('1.=>',obj.count);


// 2. 
let a = 0;
a ||= 10;
console.log('2.=>',a);

// 3. 
let b = null;
b &&= 20;
console.log('3.=>',b);

// 4. 
let c =undefined;
let d = c;
c ??= 30;
d ||= 40;
console.log('4.=>',c,d);

// 5. 
let settings = { volume: 0, maxVolume: null };
settings.volume ||= 10;
settings.maxVolume ??= 50;
console.log('5.=>',settings);

//6.
let retries = 0;
// retries ||= 5; // Code Block 1
console.log('6.1.=>', retries);

retries ??= 5; // Code Block 2
console.log('6.2.=>', retries);