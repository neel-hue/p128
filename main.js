lws=0;
rws=0;
rwx=0;
rwy=0;
lwx=0;
lwy=0;

a="bjiml.mp3";
b="Eminem-LoseYourSelf.mp3";
song = "";
function preload() {
    song = loadSound(a);
}

function c() {
    song.setVolume(0.5);
    song.rate(1);
    song.play();
}


function setup() {
    y = createCanvas(400, 400);
    y.position(565, 250);
    v = createCapture(VIDEO);
    v.hide();
    posenet = ml5.poseNet(v,modelLoaded);
    posenet.on('pose',gotResults);
}

function draw() {
    image(v, 0, 0, 400, 400);
}

function modelLoaded(){
    console.log("Model has been initialised.");
}

function gotResults(results){
    if(results.length>0){
    console.log(results);
    lws = results[0].pose.keypoints[9].score;
    rws = results[0].pose.keypoints[10].score;
    console.log("left wrist score : " + lws + " right wrist score : " + rws);
    lwx = results[0].pose.leftWrist.x;
    lwy = results[0].pose.leftWrist.y;
    rwx = results[0].pose.rightWrist.x;
    rwy = results[0].pose.rightWrist.y;
    console.log("left wrist x : " + lwx + " left wrist y : " + lwy);
    console.log("right wrist x : " + rwx + " right wrist y : " + rwy);
    }
}