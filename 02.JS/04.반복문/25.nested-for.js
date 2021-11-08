let stars = '';

for (let i=1; i<=5; i++) {
    for (let k=0; k<i; k++) {
        stars += '*';
    }
    stars += '\n';
}
console.log(stars);

for (let i=1; i<=5; i++) {
    stars = '';
    for (let k=0; k<i; k++) {
        stars += '*';
    }
    console.log(stars);
}
console.log();

for (let i=1; i<=5; i++) {
    stars = '';
    for (let k=0; k<5-i; k++) {
        stars += ' ';
    }
    for (let k=0; k<i; k++) {
        stars += '*';
    }
    console.log(stars);
}