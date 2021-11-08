let date = new Date();
let hour = date.getHours();

if (hour < 11) {
    console.log('breakfast');
} else {                    // hour >= 11
    if (hour < 15) {        // 11 <= hour < 15
        console.log('lunch');
    } else {
        console.log('dinner');
    }
}
