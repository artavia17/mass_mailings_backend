const jwt = require('jsonwebtoken');

const generarJWT = async ( uid = '' ) => {

    return new Promise( (resolve, reject) => {

        const payload = { uid };

        jwt.sign( payload, process.env.SECRETORPRIVATEKEY, {
            expiresIn: '12h'
        }, ( err, token ) => {

            if ( err ) {
                reject( 'No se pudo generar el token' )
            } else {
                resolve( token );
            }
        })

    })

}


module.exports = {
    generarJWT
}