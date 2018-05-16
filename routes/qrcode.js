var express = require('express');
var router = express.Router();
var QRCode = require('qrcode');

router.get('/', function (req, res, next) {
    var value = req.query.value;
    if (value) {
        QRCode.toDataURL(value, { version: 4 }, function (err, url) {
            var json = {
                description: 'please use browser to open the url',
                url: url
            };
            res.send(json);
        });
    } else {
        res.send('request format is: ./qrcode?value=xxx');
    }
});

module.exports = router;
