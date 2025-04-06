let videosContainers = document.querySelectorAll(".videoContainer");
for (let videosContainer of videosContainers) {
    for (let video of videosContainer.children) {
        video.addEventListener("click", function() {
            if(video.paused) {
                video.play();
                video.width = 800;
                pauseOtherVideos(videosContainer, video);
            }
            else {
                video.pause();
                video.width = 300;
            }
        });
    }
}
function pauseOtherVideos(videosContainer, currentVideo) {
    for (let video of videosContainer.children) {
        if (video !== currentVideo) {
            video.pause();
        }
    }
}
