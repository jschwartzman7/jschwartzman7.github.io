let videosContainers = document.querySelectorAll(".videosContainer");
let currentVideo = null;
let thumbnailWidth = 300;
let videoWidth = 700;

for (let videosContainer of videosContainers) {
    for (let video of videosContainer.children) {
        video.addEventListener("click", function() {
            if(video.paused) {
                video.play();
                video.width = videoWidth;
                resetOtherVideos(video);
            }
            else {
                resetOtherVideos(null);
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
                video.width = thumbnailWidth;
            }
        }
        
    }
}
