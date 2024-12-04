const db = require("../db/dbConfig")


const getAllAnimes = async () => {
    try {
        const animes = await db.any("SELECT * FROM animes"); // .any returns an array of objects(rows of data )
        return animes;
    }catch(error){
        return error;
    }
}

module.exports = {
    getAllAnimes
}