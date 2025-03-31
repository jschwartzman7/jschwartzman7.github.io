let skateVideosContainer = document.querySelector(".videoContainer");
for (let skateVideo of skateVideosContainer.children) {
    skateVideo.addEventListener("click", function() {
        if(skateVideo.paused) {
            skateVideo.play();
            skateVideo.width = 800;
        }
        else {
            skateVideo.pause();
            skateVideo.width = 300;
        }
    });
}