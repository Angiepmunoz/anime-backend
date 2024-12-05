const anime = require("../data/animes");
const db = require("../db/dbConfig");

const getAllAnimes = async () => {
  try {
    const animes = await db.any("SELECT * FROM animes"); // .any returns an array of objects(rows of data )
    return animes;
  } catch (error) {
    return error;
  }
};

const getOneAnime = async (animeId) => {
  try {
    // SELECT * FROM animes WHERE id=2;
    const anime = await db.one(" SELECT * FROM animes WHERE id=$1", animeId);
    // .one() only returns an object 
        // if none or more rows are returned them promise is rejected 
    return anime;
  } catch (error) {
    return error;
  }
};

const createOneAnime = async ({name, description})=>{ // anime
    // const {name, description} = anime
    // anime.name 
    // anime.description  
    try {
        // INSERT INTO animes (name, description) VALUES ($1, $2)
        const newAnime = await db.one("INSERT INTO animes (name, description) VALUES ($1, $2) RETURNING *", [name, description])
        return newAnime;
    } catch (error) {
        return error;
    }
}

module.exports = {
  getAllAnimes,
  getOneAnime,
  createOneAnime
};
