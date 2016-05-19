// felhasználó kollektció kezelése

var db,
  Users;
// adatbázishoz kapcsolódás
function setConnection(mongodb) {
  db = mongodb;
  setModell();
}

function setModell() {
  Users = db.model('users', {
    name: String,
    email: String,
    phone: String,
    address: String,
    role: Number,
    meta: {
      birthday: Date,
      hobby: String,
    }
  }, 'users');
}
// új dokumentum beszúrása a kollekcióba
function create(document, callBack) {
  var user = new Users(document);
  user.save(function (err) {
    if (err) {
      console.error(err);
      callBack({});
    } else {
      callBack(user);
    }
  });

}
// feltételnek megfelelő rekordok kiolvasása
function read(where, callBack) {
  Users.find(where, function (err, data) {
    if (err) {
      console.error("Hiba a lekérésben");
      callBack({});
    } else {
      callBack(data);
    }
  });
}
//Publikus elemek
module.export = {
  setConnection: setConnection,
  read: read,
  create: create
};