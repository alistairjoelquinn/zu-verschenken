const multer = require('multer');

const multerOptions = {
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 2097152
    }
};

module.exports.uploader = multer(multerOptions);