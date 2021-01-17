const aws = require('aws-sdk');
const fs = require('fs');

let secrets;
if (process.env.NODE_ENV == 'production') {
    secrets = process.env;
} else {
    secrets = require('../../secrets');
}

const s3 = new aws.S3({
    accessKeyId: secrets.AWS_KEY,
    secretAccessKey: secrets.AWS_SECRET
});

module.exports.upload = (req, res, next) => {
    console.log('req.file: ', req.file);
    if (!req.file) {
        res.sendStatus(500);
        return;
    }
    const { filename, mimetype, size, buffer } = req.file;
    s3
        .putObject({
            Bucket: 'alsimageuniverse',
            ACL: 'public-read',
            Key: filename,
            Body: fs.createReadStream(buffer),
            ContentType: mimetype,
            ContentLength: size
        })
        .promise()
        .then(response => {
            console.log("upload to bucket was successful: ", response);
            next();
        })
        .catch(err => {
            console.log("upload to AWS bucket was unsuccessful", err);
            res.sendStatus(500);
        });
};