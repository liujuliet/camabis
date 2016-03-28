var diseaseClassifier = function (cv, fileName, num_plants) {
  cv.readImage(fileName, function(err, im) {
    //DEFINE CONSTANTS
    var mu_h = 0.00052982; //with 20: 0.0016;
    var sigma_h = 0.00050781; //with 20: 0.0013;
    var mu_uh = 0.0126;
    var sigma_uh = 0.0029;

    //Set up variables
    var class_yellow = [];
    var class_green = [];
    var class_other = [];
    var ratio = 0;
    var px_h;
    var px_uh;

    var hsv_image = im.copy();
    hsv_image.convertHSVscale();

    console.log(hsv_image);

    return hsv_image;

  //   var h = hsv_image[0];
  //   var s = hsv_image[1];
  //   var v = hsv_image[2];

  //   for (i=0; i<h[0].length; i++) {
  //     for(j=0; j<h[1].length; j++) {
  //       if (h[i][j] >= 25 && h[i][j] <= 65 && s[i][j]  > 0.3 && v[i][j]  > 0.3 ) { //orange to yellow
  //           class_yellow.push(h[i][j]);
  //       }
  //       else if (h[i][j] >= 66 && h[i][j]  <= 165) { //chartreuse green to spring green
  //           class_green.push(h[i][j]);
  //       }
  //       else {
  //           class_other.push(h[i][j]);
  //       }
  //     }
  //   }

  //   ratio = class_yellow.length() / class_green.length / num_plants;

  //   px_h = (1/(sigma_h*Math.sqrt(2*Math.PI)))*(Math.E^((-(ratio-mu_h)^2)/(2*sigma_h^2)));
  //   px_uh = (1/(sigma_uh*Math.sqrt(2*Math.PI)))*(Math.E^((-(ratio-mu_uh)^2)/(2*sigma_uh^2)));

  //   if (px_h > px_uh) {
  //       status = 0; // 0 is healthy
  //   }
  //   else {
  //     status = 1; // 1 is unhealthy
  //   }
  });
};

module.exports.diseaseClassifier = diseaseClassifier;
