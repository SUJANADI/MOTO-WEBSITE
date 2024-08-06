$(function() {


var mainVideo = $('#the-video');
var medQualVersionSrc = "assets/img/video/website video animation vertical.mp4";
var highQualVersionSrc = "assets/img/video/bg_video_website.mp4";
var medQualVersion = true; // Example condition, adjust as per your logic

if ($(window).width() < 1200 && medQualVersion) {
    mainVideo.append("<source type='video/mp4' src='" + medQualVersionSrc + "' />");
} else {
    mainVideo.append("<source type='video/mp4' src='" + highQualVersionSrc + "' />");
}

// Wait until sources are appended to call MediaElements.js
mainVideo.mediaelementplayer();

});
