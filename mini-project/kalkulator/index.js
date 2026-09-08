function hitung() {
    const angka1 = Number(document.getElementById("angka1").value);
    const angka2 = Number(document.getElementById("angka2").value);
    const operator = document.getElementById("operator").value;

    let hasil;

    if (operator === "+") {
        hasil = angka1 + angka2;
    } else if (operator === "-") {
        hasil = angka1 - angka2;
    } else if (operator === "*") {
        hasil = angka1 * angka2;
    } else if (operator === "/") {
        if (angka2 === 0) {
            hasil = "Tidak bisa dibagi 0";
        } else {
            hasil = angka1 / angka2;
        }
    }

    document.getElementById("hasil").textContent = hasil;
}