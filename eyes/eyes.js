var DrawEye = function(eyecontainer, pupil, eyeposx, eyeposy){
    // Initialise core variables
    var r = document.getElementById(pupil).clientWidth/2;

    var center = {
        x: document.getElementById(eyecontainer).clientWidth/2 - r,
        y: document.getElementById(eyecontainer).clientHeight/2 - r
    };

    var distanceThreshold = document.getElementById(eyecontainer).clientWidth/2 - r;
    var mouseX = 0;
    var mouseY = 0;

    // Listen for mouse movement
    document.addEventListener("mousemove", function(event){
        var d = {
            x: event.clientX - r - document.getElementById(eyecontainer).getBoundingClientRect().left - center.x,
            y: event.clientY - r - document.getElementById(eyecontainer).getBoundingClientRect().top - center.y
        };

        var boundingRect = document.getElementById(eyecontainer).getBoundingClientRect();

        var distance = Math.sqrt(d.x*d.x + d.y*d.y);
        if (distance < distanceThreshold) {
            mouseX = event.clientX - eyeposx - r;
            mouseY = event.clientY - eyeposy - r;
        }
        else {
            mouseX = d.x / distance * distanceThreshold + center.x;
            mouseY = d.y / distance * distanceThreshold + center.y;
        }
    });

    // Update pupil location
    var pupil = document.getElementById(pupil);
    var xp = 0, yp = 0;
    var loop = setInterval(
        function(){
            // change 1 to alter damping/momentum - higher is slower
            xp += (mouseX - xp) / 1;
            yp += (mouseY - yp) / 1;
            pupil.style.left = xp + "px";
            pupil.style.top = yp + "px";
        },
    1);
};

// var pariseye1 = new DrawEye("#eyeleft", "#pupilleft", 213, 72);
// var pariseye2 = new DrawEye("#eyeright", "#pupilright", 50, 130);
//
// var chihuahuaeye1 = new DrawEye("#dogeyeleft", "#dogpupilleft", 175, 261);
// var chihuahuaeye2 = new DrawEye("#dogeyeright", "#dogpupilright", 210, 259);

var rabbitEyeLeft = new DrawEye("rabbit-eye-left", "rabbit-eye-left-pupil", 0, 10);
var rabbitEyeRight = new DrawEye("rabbit-eye-right", "rabbit-eye-right-pupil", 10, 10);
