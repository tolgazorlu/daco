require('dotenv').config();

module.exports = {
    app: {
        name: 'Daco',
    },
    port: process.env.PORT || 8080,
    database: {
        url: process.env.MONGO_URI
    }
};