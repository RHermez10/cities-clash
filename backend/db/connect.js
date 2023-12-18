const { MongoClient } = require("mongodb");

const Db = process.env.ATLAS_URI;
console.log("ATLAS_URI:", Db);

const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let _db;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (err) {
        console.error("Error connecting to MongoDB:", err);
        return callback(err);
      }

      // Check if we received a valid db object
      if (db) {
        _db = db.db("HamstersDB");
        console.log("Connection successful");
      } else {
        console.error("Invalid db object received");
      }

      return callback(null);
    });
  },
  getDb: function () {
    return _db;
  },
};
