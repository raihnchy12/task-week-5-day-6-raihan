const produk = {
  nama: "Laptop Gaming",
  hargaSatuan: 14000000,
  kategori: "Elektronik"
};

let jumlahBeli = 3;
const TARIF_PAJAK = 0.11;

let subtotal = produk.hargaSatuan * jumlahBeli;
let pajak = subtotal * TARIF_PAJAK;
let totalAkhir = subtotal + pajak;

console.log("=== DETAIL TRANSAKSI (3 Unit) ===");
console.log("Nama Produk  :", produk.nama);
console.log("Kategori     :", produk.kategori);
console.log("Harga Satuan : Rp", produk.hargaSatuan);
console.log("Jumlah Beli  :", jumlahBeli);
console.log("Subtotal     : Rp", subtotal);
console.log("Pajak (11%)  : Rp", pajak);
console.log("Total Akhir  : Rp", totalAkhir);


jumlahBeli = 5;

// Hitung ulang transaksi setelah jumlah Beli diubah
subtotal = produk.hargaSatuan * jumlahBeli;
pajak = subtotal * TARIF_PAJAK;
totalAkhir = subtotal + pajak;

console.log("\n=== DETAIL TRANSAKSI BARU (5 Unit) ===");
console.log("Jumlah Beli Baru :", jumlahBeli);
console.log("Total Akhir Baru : Rp", totalAkhir);

// Memeriksa tipe data dari totalAkhir menggunakan typeof
console.log("\nTipe data dari totalAkhir:", typeof totalAkhir);