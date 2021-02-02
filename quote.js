const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
// res.send("Hello Quotes!");
const quotes = [
    "Kegagalan adalah awal dari kehancuran, jangan menyerah sampai hancur",
    "Makan hanya untuk orang lemah",
    "Payah kang sate",
    "Sa ae cubluk",
    "Sa ae kang indomie",
    "Sa ae jagung",
    "Sa ae kupluk",
    "Keep in si ketimun laut",
    "Melendoy",
    "Swadikap",
    "Makanya, kalau ada kotak amal diisi, jangan dilewatin doang",
    "Ajab kurang amal",
    "Tragedy jekuei",
    "Namanya umur gada yang tau",
    "Sudoku dan Boggle is my enemy",
    "Asada, samalo, semua",
    "Toy, letoy letoy letoy",
    "Matamu"
    ];
    const randNumber = Math.floor(Math.random() * quotes.length-1);
    res.status(200).json(quotes[randNumber]);
});
app.listen(port, () => {
console.log(`Server is running on port ${port}`);
});