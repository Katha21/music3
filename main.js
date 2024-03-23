music1 = " ";
leftx = 0;
lefty = 0;
rightx = 0;
righty = 0;

function preload(){
    music1 = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    camera = createCapture(VIDEO);
    camera.hide();

    pose1 = ml5.poseNet(camera, modelLoaded);
    pose1.on("pose", gotPoses);
}

function draw(){
    image(camera,0,0,600,500);
}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }

    leftx = results[0].pose.leftWrist.x;
    lefty = results[0].pose.leftWrist.y;
    console.log("Left X = " + leftx + "Left Y = " + lefty);
    rightx = results[0].pose.rightWrist.x;
    righty = results[0].pose.rightWrist.y;
    console.log("Right X = " + rightx + "Right Y = " + righty);
}