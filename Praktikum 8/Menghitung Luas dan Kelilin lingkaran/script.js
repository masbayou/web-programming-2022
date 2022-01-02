function hitung() {
    let a = Number(document.getElementById("jariJari").value);
    let pi = 3.14;
    let keliling = 2 * pi * a;
    let luas = pi * a **2;
    document.getElementById("klingkaran").value=keliling;
    document.getElementById("Llingkaran").value=luas;
}