const hewan = {
  nama: "Kambing Etawa",
  warna: "Putih",
  makan() {
    return "Alhamdulillah";
  },
};

// const namaHewan = hewan.nama;
// const warnaHewan = hewan.warna;
// const methodHewan = hewan.makan()

const { nama, warna, makan } = hewan;

console.log(nama);
