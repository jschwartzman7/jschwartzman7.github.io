let videosContainers = document.querySelectorAll(".videosContainer");
let currentVideo = null;
for (let videosContainer of videosContainers) {
    for (let video of videosContainer.children) {
        video.addEventListener("click", function() {
            if(video.paused) {
                video.play();
                video.width = 800;
                video.controls = true;
                resetOtherVideos(video);
            }
            else {
                video.pause();
                video.controls = false;
                video.width = 300;
            }
        });
    }
}
function resetOtherVideos(currentVideo) {
    for (let videoContainer of videosContainers) {
        for (let video of videoContainer.children) {
            if (video !== currentVideo) {
                video.pause();
                video.controls = false;
                video.width = 300;
            }
        }
        
    }
}
