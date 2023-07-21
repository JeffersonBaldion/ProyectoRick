var myFavorites = [];

function postFav(req, res) {
  myFavorites.push(req.body);
  return res.json(myFavorites);
}

function deleteFav(req, res) {
  const {id} = req.params;
  const noDelete = myFavorites.filter((pj) => pj.id !== Number(id));
  myFavorites = noDelete;

  return res.json(myFavorites);
}

function getFav(req, res) {
  return res.json(myFavorites);
}

module.exports = {
  myFavorites,
  postFav,
  deleteFav,
  getFav,
};
