var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

const DBSOURCE = "database.sqlite"

let database = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message);
    throw err;
  } else{
    console.log('[[linja e poki nimi a]]')
    database.run(`CREATE TABLE user (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      date TEXT DEFAULT CURRENT_TIMESTAMP,
      username text,  
      password text,
      banner text,
      description text
      )`,
    (err) => {
      if (err) {
      } else{
        // var insert = 'INSERT INTO user (username, password) VALUES (?,?)'
        // users.run(insert, ["admin","admin@example.com",md5("admin123456")])
        // users.run(insert, ["user","user@example.com",md5("user123456")])
      }
    });
    database.run(`CREATE TABLE image (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      date TEXT DEFAULT CURRENT_TIMESTAMP,
      username TEXT,  
      file TEXT,
      title TEXT,
      description TEXT
      )`,
    (err) => {
      if (err) {
      }
    })
    database.run(`CREATE TABLE tags (
      id INTEGER,
      tag TEXT
      )`,
    (err) => {
      if (err) {
      }
    })
  }
});


module.exports = database