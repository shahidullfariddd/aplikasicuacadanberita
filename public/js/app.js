const weatherform = document.querySelector('form');
const search = document.querySelector('input');
const pesanSatu = document.querySelector('#pesan-1');
const pesanDua = document.querySelector('#pesan-2');

// Ketika form disubmit
weatherform.addEventListener('submit', (e) => {
    e.preventDefault(); // Mencegah reload halaman
    const location = search.value; // Ambil nilai dari input
    pesanSatu.textContent = 'Sedang mencari lokasi ..';
    pesanDua.textContent = '';

    // Lakukan fetch untuk mendapatkan data cuaca
    fetch('/infoCuaca?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                pesanSatu.textContent = data.error; // Tampilkan error jika ada
            } else {
                pesanSatu.textContent = data.lokasi; // Tampilkan lokasi
                pesanDua.textContent = data.prediksiCuaca; // Tampilkan prediksi cuaca
            }
        });
    });
});
