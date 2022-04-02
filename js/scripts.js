feather.replace()

function ShowAllVideos() {
    document.getElementById("muscle1").style.display='inline';
    document.getElementById("muscle2").style.display='inline';
    document.getElementById("cardio1").style.display='inline';
    document.getElementById("cardio2").style.display='inline';
}

function ShowMuscleVideos() {
    document.getElementById("muscle1").style.display='inline';
    document.getElementById("muscle2").style.display='inline';
    document.getElementById("cardio1").style.display='none';
    document.getElementById("cardio2").style.display='none';
}

function ShowCardioVideos() {
    document.getElementById("muscle1").style.display='none';
    document.getElementById("muscle2").style.display='none';
    document.getElementById("cardio1").style.display='inline';
    document.getElementById("cardio2").style.display='inline';
}