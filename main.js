mustacheY=0;
mustacheX=0;

function preload(){
    mustache= loadImage("https://i.postimg.cc/mZwbSmp2/png-clipart-moustache-moustache-removebg-preview.png");
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center(); 
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet =ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Initialized');
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        mustacheX = results[0].pose.nose.x;
        mustacheY = results[0].pose.nose.y;
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
    mustacheX=mustacheX-1
    mustacheY=mustacheY-1
    image(mustache, mustacheX, mustacheY, 50, 50);
}

function take_snapshot(){
    save('myFilterImage.png');
}