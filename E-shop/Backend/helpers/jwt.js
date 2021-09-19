const expressJwt = require("express-jwt");

function authJwt() {
    const secret = process.env.SECRET;
    const api = process.env.API_URL;
    return expressJwt({
        secret,
        algorithms: ["HS256"],
        isRevoked: isRevoked
    }).unless({
        path: [
            `${api}/users/login`,
            `${api}/users/register`,
            { url: /\/api\/v1\/products(.*)/, method: ["GET", "OPTIONS"] },
            { url: /\/api\/v1\/categories(.*)/, method: ["GET", "OPTIONS"] },
        ],
    });
}

async function isRevoked(req, playload, done) {
    if (!playload.isAdmin) {
        done(null, true);
    }
    done();
}

module.exports = authJwt;
