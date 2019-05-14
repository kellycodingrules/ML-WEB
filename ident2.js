// Copyright (c) 2018 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Real time Object Detection using YOLO and p5.js
=== */
//v3
var db = firebase.firestore();
let video;
let yolo;
let status;
let objects = [];

function setup() {
  createCanvas(320, 240);
  video = createCapture(VIDEO);
  video.size(320, 240);
console.log("staged")
  // Create a YOLO method
  yolo = ml5.YOLO(video, startDetecting);

  // Hide the original video
  video.hide();
  status = select('#status');
}
/*
function draw() {

  image(video, 0, 0, width, height);
  for (let i = 0; i < objects.length; i++) {
    noStroke();
    fill(0, 255, 0);
    text(objects[i].className, objects[i].x * width, objects[i].y * height - 5);
    noFill();
    strokeWeight(4);
    stroke(0, 255, 0);
    rect(objects[i].x * width, objects[i].y * height, objects[i].w * width, objects[i].h * height);

  }
}
*/
function startDetecting() {
  status.html('Model loaded!');
}
var yo = 0;
function detect() {
  console.log("staged2")
  yolo.detect(function(err, results) {
    console.log("staged3")
      console.log("staged4")
    localStorage.setItem("log", results)
   // window.location.assign("webstorage.html");
     var username = document.getElementById("username").value
    db.collection("users").doc("username").set({
    first: "Ada",
    last: "Lovelace",
    profile: "Not implemented",
    passcode: results
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
    
    detect();
  });
}

