const siswa = [
    {
        nama: "Annisa",
        kelas: "XI RPL",
        nilai: 85
    },
    {
        nama: "Budi",
        kelas: "XI RPL",
        nilai: 70
    },
    {
        nama: "Citra",
        kelas: "XI RPL",
        nilai: 90
    },
    {
        nama: "Doni",
        kelas: "XI RPL",
        nilai: 65
    },
    {
        nama: "Eka",
        kelas: "XI RPL",
        nilai: 78
    }
];


// ================================
// FUNCTION MENENTUKAN STATUS
// ================================

function tentukanStatus(nilai) {
    if (nilai >= 75) {
        return "Lulus";
    } else {
        return "Tidak Lulus";
    }
}


// ================================
// MENAMPILKAN DATA SISWA
// ================================

function tampilkanSiswa(dataSiswa) {

    const tempatData = document.getElementById("dataSiswa");

    tempatData.innerHTML = "";

    dataSiswa.forEach((siswa) => {

        const status = tentukanStatus(siswa.nilai);

        const card = document.createElement("div");

        card.className = "siswa";

        card.innerHTML = `
      <span class="nama">${siswa.nama}</span>
      | Kelas: ${siswa.kelas}
      | Nilai: ${siswa.nilai}
      | Status:
      <span class="status ${status === "Lulus" ? "lulus" : "tidak-lulus"}">
        ${status}
      </span>
    `;

        tempatData.appendChild(card);
    });
}


// ================================
// FILTER BERDASARKAN OPTION
// ================================

const pilihan = document.getElementById("pilihan");

pilihan.addEventListener("change", function () {

    const nilaiPilihan = pilihan.value;

    let hasil;

    if (nilaiPilihan === "semua") {

        hasil = siswa;

    } else if (nilaiPilihan === "lulus") {

        hasil = siswa.filter((siswa) => siswa.nilai >= 75);

    } else if (nilaiPilihan === "tidakLulus") {

        hasil = siswa.filter((siswa) => siswa.nilai < 75);
    }

    tampilkanSiswa(hasil);
});


// ================================
// TAMPILKAN SEMUA DATA SAAT AWAL
// ================================

tampilkanSiswa(siswa);