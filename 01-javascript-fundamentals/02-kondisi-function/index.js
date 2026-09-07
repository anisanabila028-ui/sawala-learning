const nilai = 85;

if (nilai >= 75) {
  console.log("Lulus");
} else {
  console.log("Tidak Lulus");
}

function sapa(nama) {
  console.log("Halo, " + nama + "!");
}

sapa("Annisa");
sapa("Budi");

function cekNilai(nilai) {
  if (nilai >= 75) {
    console.log("Nilai " + nilai + ": Lulus");
  } else {
    console.log("Nilai " + nilai + ": Tidak Lulus");
  }
}

cekNilai(90);
cekNilai(60);