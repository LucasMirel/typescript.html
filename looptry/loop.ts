console.log("1st loop")
let starAmount = 0;

for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
        starAmount++;
        process.stdout.write("*");
    }
    process.stdout.write("\n");
}
console.log("Total stars: " + starAmount);

console.log("\n2nd loop")

let starAmount2 = 15;

for (let f = 5; f >= 1; f--) {
    for (let h = 1; h <= f; h++) {
        starAmount++;
        process.stdout.write("*");
    }
    process.stdout.write("\n");
}
console.log("Total stars: " + starAmount2);

console.log("\n3rd loop")

let starAmount3 = 0;

for (let a = 1; a <= 2; a++) {
    console.log("*".repeat(a));
    starAmount3 += a
}

for (let a = 3; a >= 1; a--) {
    console.log("*".repeat(a));
    starAmount3 += a

}
 console.log("total stars : "+starAmount3); 