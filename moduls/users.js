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
        order: {
            date: Date,
            amount: Number,
            status: String,
            product: String
        }
    }, 'users');
}
// új dokumentum beszúrása a kollekcióba
function creat(document) {
    var user = new Users(document);
    user.save();
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
    read: read
}