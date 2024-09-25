function timeConversion(s) {
    const [hh, mm, ssPeriod] = s.split(":");
    const period = ssPeriod.slice(2).trim(); // Extract AM/PM
    const ss = ssPeriod.slice(0, 2); // Extract seconds

    // Handle the hour conversion based on AM/PM
    let HH = parseInt(hh, 10);
    if (period === "PM" && HH !== 12) {
        HH += 12; // Convert PM hour to 24-hour format, except for 12 PM
    } else if (period === "AM" && HH === 12) {
        HH = 0; // Convert 12 AM to 00 in 24-hour format
    }

    // Format hours to two digits
    const formattedHH = HH.toString().padStart(2, '0');
        return `${formattedHH}:${mm}:${ss}`;
     }

// 2. 
function timeConversion(s) {
    const [hh, mm, ssPeriod] = s.split(":");
    const period = ssPeriod.slice(2); // Extract AM/PM
    const ss = ssPeriod.slice(0, 2); // Extract seconds

    let HH = parseInt(hh, 10);
    if (period === "PM" && HH !== 12) HH += 12;
    if (period === "AM" && HH === 12) HH = 0;

    return `${HH.toString().padStart(2, '0')}:${mm}:${ss}`;
}

// Test cases
console.log(timeConversion("12:00:00PM")); // 12:00:00
console.log(timeConversion("07:05:45PM")); // 19:05:45
console.log(timeConversion("12:00:00AM")); // 00:00:00
console.log(timeConversion("12:45:54PM")); // 12:45:54
console.log(timeConversion("06:40:03AM")); // 06:40:03

// 3. 