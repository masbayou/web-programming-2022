function cekValidasi() {

    // get all input
    var nama = document.getElementById('nama').value;
    var email = document.getElementById('email').value;
    var jam = document.getElementById('jam').value;
    var tujuan = document.getElementById('tujuan').value;
    var tiket = document.getElementById('tiket').value;

    var tombol = document.getElementById('kirim').value;


    if (tombol == 'kirim') {

        function validateEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }

        var err1 = document.getElementById('err1');
        var err1_2 = document.getElementById('err1_2');
        var err2 = document.getElementById('err2');
        var err2_2 = document.getElementById('err2_2');
        var err3 = document.getElementById('err3');
        var err3_2 = document.getElementById('err3_2');
        var err4 = document.getElementById('err4');
        var err5 = document.getElementById('err5');
        var err5_2 = document.getElementById('err5_2');

        var h_1 = document.getElementById('h_1');
        var h_2 = document.getElementById('h_2');
        var h_3 = document.getElementById('h_3');
        var h_4 = document.getElementById('h_4');
        var h_5 = document.getElementById('h_5');



        const batasJam = 24.00;
        const batasNama = 30;
        const batasTiket = 10;

        var errorNama = [];
        if (nama.length > 30) {
            console.log('nama lebih dari 30 karakter');
            errorNama[0] = err1_2.style.display = 'block';
        }
        if (nama == "") {
            console.log('nama wajib diisi!');
            errorNama[1] = err1.style.display = 'block';
        }

        var errorEmail = [];
        if (!validateEmail(email)) {
            console.log('email gak sesuai format!')
            errorEmail[0] = err2_2.style.display = 'block';
        }
        if (email == '') {
            console.log('email wajib diisi!');
            errorEmail[1] = err2.style.display = 'block';
        }

        var errorJam = [];
        if (jam > batasJam) {
            console.log('jam melebihi 24.00!');
            errorJam[0] = err3_2.style.display = 'block';
        }
        if (jam == '') {
            console.log('jam wajib diisi!');
            errorJam[1] = err3.style.display = 'block';
        }

        var errorTiket = [];
        if (tiket > batasTiket) {
            console.log('tiket melebihi 10!');
            errorTiket[0] = err5_2.style.display = 'block';
        }
        if (tiket == '') {
            console.log('tiket wajib diisi!');
            errorTiket[1] = err5.style.display = 'block';
        }

        var errorTujuan = [];
        if (tujuan == "") {
            console.log('anda tidak punya tujuan!')
            errorTujuan[0] = err4.style.display = 'block';
        }


        if (nama != '' && (email != '' && validateEmail(email)) && jam != '' && tujuan != '' && tiket != '') {
            // window.location.href = "ridho.html";

            h_1.innerHTML = nama;
            h_2.innerHTML = email;
            h_3.innerHTML = jam;
            h_4.innerHTML = tujuan;
            h_5.innerHTML = tiket;

            var w1 = document.getElementById('wrap1');
            var w2 = document.getElementById('wrap2');

            w1.style.display = 'none';
            w2.style.display = 'grid';

        }


        // window.location.href = "bayu.html";
    }
}