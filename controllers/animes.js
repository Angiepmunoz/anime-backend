const express = require("express");
const animes = express.Router(); // express.Router allows us to have almost a mini-app for one resource in one place, insted of having them all in the same place
// const animesArr = require("../data/animes");
const {
  getAllAnimes
} = require("../queries/animes")


animes.get("/", async (req, res) => {
  try {
    const animes = await getAllAnimes();
    res.status(200).json({payload: animes})
  } catch(error){
    res.status(404).json({payload: error})
  }
})


/*
// get All Anime : "/animes"
animes.get("/", (request, response) => {
  // console.log(animesArr);
  response.status(200).json(animesArr);
});

// get One Anime: "/animes/:id"
// :id is a parameter in out path
animes.get("/:id", (request, response) => {
  try {
    // use request.params to access path parameter
    // whatever you name your path parameters, that is going to be the key in your request.params object
    console.log(request.params);
    // const id = request.params.id
    const { id } = request.params; // since request.params is an obj, we can destructure the id
    const anime = animesArr.find((anime) => anime.id === Number(id)); // using .find to find the element that matches the id from our req
    if (anime) {
      response.status(200).json(anime);
    } else {
      throw "anime could not be found";
    }
  } catch (error) {
    response.status(404).json({ error: error });
  }
});

// Create one anime: "/animes"
animes.post("/", (request, response) => {
  try {
    // console.log(request.body)
    const anime = request.body;
    anime.id = animesArr.length + 1;
    if (anime.name && anime.description) {
      //if data exist add to animes arr and send back successful response
      animesArr.push(anime);
      response.status(201).json(animesArr[animesArr.length - 1]);
    } else {
      // otherwise trigger an error
      throw "could not create anime. Please provide data.";
    }
  } catch (error) {
    response.status(400).json({ error: error });
  }
});

// delete One anime: "/animes/:id"
animes.delete("/:id", (request, response) => {
  try {
    const { id } = request.params;
    const index = animesArr.findIndex((anime) => anime.id === Number(id)); // findIndex will return the index or -1
    if (index !== -1) {
      // if the index is found
      animesArr.splice(index, 1); // removing the anime
      response.status(200).json(animesArr); // responding with the updated array
    } else {
      //otherwise trigger an error
      throw "could not find anime";
    }
  } catch (error) {
    response.status(404).json({ error: error });
  }
});

//update One Anime: "/anines/:id"

animes.put("/:id", (request, response) => {
  try {
    const { id } = request.params; // desctructuring id for the anime we're updating
    const anime = request.body; // req.body provides the anime with the updates
    const index = animesArr.findIndex((anime) => Number(id) === anime.id); // we're using the id to find the index
    if (index !== -1) {
      animesArr.splice(index, 1, anime); // replace the anime with the updated anime object
      response.status(201).json(animesArr);
    } else {
      throw "could not update anime"; // triggering an error
    }
  } catch (error) {
    response.status(400).json({ error });
  }
});
*/

module.exports = animes;

// orders
// products
// users
