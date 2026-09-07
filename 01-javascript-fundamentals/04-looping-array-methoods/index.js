

const angka = [10, 20, 30, 40, 50];

for (let i = 0; i < angka.length; i++) {
  console.log("Angka:", angka[i]);
}



angka.forEach(function (angka) {
  console.log("forEach:", angka);
});


const angkaBaru = angka.map(function (angka) {
  return angka * 2;
});

console.log("Hasil map:", angkaBaru);



const angkaBesar = angka.filter(function (angka) {
  return angka >= 30;
});

console.log("Angka >= 30:", angkaBesar);