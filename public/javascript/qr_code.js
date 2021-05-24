const QRCode = require('qrcode');
const chalk = require('chalk');
const router = require('express').Router();

const qr = (concert) => {
  QRCode.toFile(`../assets/images/${concert}.png`, `${concert}`, {
    color: {
      dark: '#00F',  // Blue dots
      light: '#0000' // Transparent background
    }
  }, function (err) {
    if (err) throw err
    console.log(chalk.yellowBright('done'))
  });
}

module.exports = qr();
