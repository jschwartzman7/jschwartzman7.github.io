let skateVideosContainer = document.getElementById("skateVideosContainer");
for (let skateVideo of skateVideosContainer.children) {
    skateVideo.addEventListener("click", function() {
        let pauseVideos = false;
        if(skateVideo.paused) {
            skateVideo.play();
            skateVideo.width = 800;
            pauseVideos = true;
        }
        else {
            skateVideo.pause();
            skateVideo.width = 300;
        }
        for (let skateVideo2 of skateVideosContainer.children) {
            if (skateVideo2 != skateVideo) {
                skateVideo2.pause();
                skateVideo2.width = 300;
            }
        }
    });
}