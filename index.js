var pg = require('pg');
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();

var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/testdb';
app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist'));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/dist/index.html');
});

router.get('/concerns', function(req, res) {
  var results = [];
  pg.connect(connectionString, function(err, client, done) {
    client.query('SELECT * FROM concerns;', function(err, result) {
      done();

      res.json(result.rows);
    });
  });
});

// all the routes will be prefixed with /api
app.use('/api', router);

// router.get('/db/concerns', function (request, response) {
//   var results = [];

//   pg.connect(connectionString, function(conn_err, client, done) {
//     if (conn_err) {
//       done();
//       console.log(conn_err);
//       response.status(500).json({ success: false, data: conn_err});
//     }

//     var query = client.query('SELECT * FROM concerns ORDER BY date DESC;');

//     query.on('row', function(row) {
//       console.log(row);
//       results.push(row);
//     });

//     query.on('end', function() {
//       done();
//       response.json(results);
//     });
//     // client.query('SELECT * FROM concerns;', function(err, result) {
//     //   done();
//     //   if (err) {
//     //     console.error("query didnt work");
//     //     return response.send("Error " + err);
//     //   }
//     //   else {
//     //     console.log(result.rows);
//     //     results = result.rows;
//     //     return response.json(results);
//     //   }
//     // });
//   })
// });

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
