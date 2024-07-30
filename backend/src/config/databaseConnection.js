const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => {
    console.log("Veritabanı Başarı ile Bağlandı");
  })
  .catch((err) => {
    console.log("Veritabanı Bağlanamadı: " + err);
  });
