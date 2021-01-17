const multer = require('multer');

const multerOptions = {
    storage: multer.memoryStorage(),
    fileFilter(req, file, next) {
        const isImage = file.mimetype.startsWith('image/');
        if (isImage) {
            next(null, true);
        } else {
            next({ message: 'File type not supported' }, false);
        }
    }
};

module.exports.uploader = multer(multerOptions);