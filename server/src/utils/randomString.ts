const randomString = (length: number) => {
    return require('crypto').randomBytes(length).toString('hex');
}

module.exports = { randomString }