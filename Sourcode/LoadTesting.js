import http from 'k6/http';
import { check, sleep } from 'k6';

// Konfigurasi opsi pengujian
export let options = {
    stages: [
        { duration: '1s', target: 10 }, // ramp up ke 10 pengguna selama 10 detik
        { duration: '2s', target: 10 }, // tetap pada 10 pengguna selama 20 detik
        { duration: '1s', target: 0 },  // ramp down ke 0 pengguna selama 10 detik
    ],
};

// Fungsi utama yang akan dieksekusi oleh setiap virtual user
export default function () {
    // Melakukan request HTTP GET ke URL target
    let res = http.get('https://ppmb.ibik.ac.id/');

    // Melakukan pengecekan terhadap response
    check(res, {
        'status was 200': (r) => r.status == 200, // Memastikan status response adalah 200
    });

    // Menambahkan jeda selama 1 detik sebelum melakukan request berikutnya
    sleep(1);
}
