let stokBarang = 50; 
let barangTerjual = 12; 
let sisaStok = stokBarang - barangTerjual; 
let totalDenganTambahan = stokBarang + barangTerjual;


console.log(sisaStok); 
console.log(totalDenganTambahan); 

// 1. hasil console.log sebelum di perbaiki = sisaStok: 38  totalDenganTambahan: 5012 
// 2. Operator "-" memaksa pengubahan teks menjadi angka untuk menghitung selisih, sedangkan operator "+" mengutamakan penggabungan teks jika ada variabel bertipe string.
// 3. 