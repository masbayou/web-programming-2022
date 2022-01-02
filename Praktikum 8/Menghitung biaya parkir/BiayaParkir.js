function hitungBayar(){
    let jmsuk = document.getElementById("jamMasuk").value;
    let jkel = document.getElementById("jamKeluar").value;
    let jumlah = parseInt(jkel) - parseInt(jmsuk);
    let bayar = 0;
    if(jumlah <= 2){
        bayar = 3000;
    }else{
        bayar = 3000 + (1000 * (jumlah - 2));
    }
    let total = document.getElementById("bayar").value=bayar;
}