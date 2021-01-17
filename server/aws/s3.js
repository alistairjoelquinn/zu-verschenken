const aws = require('aws-sdk');
const { v4 } = require('uuid');

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
    if (!req.file) {
        res.sendStatus(500);
        return;
    }
    const { mimetype, size, buffer } = req.file;
    const extension = mimetype.split('/')[1];
    req.body.imageName = `${v4()}.${extension}`;
    s3
        .putObject({
            Bucket: 'alsimageuniverse',
            ACL: 'public-read',
            Key: req.body.imageName,
            Body: buffer,
            ContentType: mimetype,
            ContentLength: size
        })
        .promise()
        .then(() => {
            next();
        })
        .catch(err => {
            console.log("upload to AWS bucket was unsuccessful", err);
            res.sendStatus(500);
        });
};