function hitung() {
    let a = Number(document.getElementById("jarijari").value);
    let pi = 3.14;
    let keliling = 2 * pi * a;
    let luas = pi * a **2;
    document.getElementById("klingkaran").value=keliling;
    document.getElementById("bulat").value=luas;
}
