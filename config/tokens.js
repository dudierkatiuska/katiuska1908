'use strict'
var jwt = require('jsonwebtoken')

async function checkToken(token)
{
    var result = ''
    jwt.verify(token, 'Gotmy2019', function(err, user) {
        if (err) {
            result = 'Token inválido'
        } else if (user != undefined) {
            result = user
        }
    })
    return result
}

module.exports.checkToken = checkToken