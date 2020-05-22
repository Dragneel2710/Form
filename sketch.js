var form;

var database;

function setup() {
  createCanvas(800,400);
  database = firebase.database();
  form = new Form();
}

function draw() {
  background(255,255,255);  
  form.display();
}