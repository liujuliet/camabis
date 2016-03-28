var pg = require('pg');
var http = require('http');
var express = require('express');
var app = express();
// var bodyParser = require('body-parser');
var cors = require('cors');
var cv = require( 'opencv');
var imgProc = require('./imageProcessing.js');
var router = express.Router();
var multer = require('multer');
var async = require('async');
var fs = require('fs');

var uploading = multer({
  dest : __dirname + '/dist/img/'
});

var connectionString = 'postgres://localhost:5432/testdb'; // process.env.DATABASE_URL
app.set('port', (process.env.PORT || 5000));

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(express.static(__dirname + '/dist'));
app.use(cors());

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/dist/index.html');
});

router.get('/api/concerns', function(req, res) {
  var results = [];
  pg.connect(connectionString, function(err, client, done) {
    client.query('SELECT * FROM concerns;', function(err, result) {
      done();

      res.json(result.rows);
    });
  });
});

router.post('/api/photo', uploading.single('userPhoto'), function(req, res, next) {
  var filename = req.file.path;
  // DEFINE CONSTANTS
  var mu_h = 0.00052982; //with 20: 0.0016;
  var sigma_h = 0.00050781; //with 20: 0.0013;
  var mu_uh = 0.0126;
  var sigma_uh = 0.0029;

  // Set up variables
  // var class_yellow = 0;
  // var class_green = 0;
  // var class_other = 0;
  var ratio = 0;
  var px_h;
  var px_uh;
  var status = false;
  var low_yellow = [25, 10, 10];
  var high_yellow = [65, 255, 255];
  var low_green = [66, 10, 10];
  var high_green = [165, 255, 255];

  async.waterfall([
    function(callback) {
      console.log(filename);
      cv.readImage(filename, callback);
    },
    function(im, callback) {
      console.log(im);
      var hsv_image = im.copy();
      var channs;
      hsv_image.convertHSVscale();

      var hsv = im.split(hsv_image, channs);

      var h = hsv[0];
      var s = hsv[1];
      var v = hsv[2];

      var y_copy = hsv.copy();
      var g_copy = hsv.copy();

      // console.log(y_copy.countNonZero());
      // console.log(g_copy.countNonZero());

      y_copy.inRange(low_yellow, high_yellow);
      g_copy.inRange(low_green, high_green);

      var image_size = h.cols()*h.rows();
      var yellow_ratio = y_copy.countNonZero()/image_size;
      var green_ratio = g_copy.countNonZero()/image_size;
      var yellow_green_ratio = yellow_ratio/green_ratio;
    }
  ], function(error, image) {
    if (error) {
      return res.end('Error occured' + error.message);
    }

    console.log('Done Asyncccc');
    return res.end('Last callback');
  });

  //imgProc.diseaseClassifier(cv, req.file.path, 6);
  // res.end('File is uploaded!!! ^_^');
});

fs.readdir(__dirname + '/dist/img', function (err, data) {
  if (err) {console.log('couldnt read img folder from server ' + err); return;}
  console.log('************* readdir ********************');
  console.log(data);
});

// all the routes will be prefixed with /api
app.use('/', router);


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
  console.log('Camabis app is running on port', app.get('port'));
});
