document.addEventListener('DOMContentLoaded', function() {
    const videos = document.querySelectorAll('.video-player');
    let currentVideoIndex = 0;

    function showVideo(index) {
        // Hide all videos
        videos.forEach((video, i) => {
            video.classList.remove('active');
            video.pause();
            video.currentTime = 0; // Reset the video
        });

        // Show the selected video
        videos[index].classList.add('active');
        videos[index].play();
    }

    function nextVideo() {
        currentVideoIndex = (currentVideoIndex + 1) % videos.length;
        showVideo(currentVideoIndex);
    }

    function prevVideo() {
        currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
        showVideo(currentVideoIndex);
    }

    // Initially show the first video
    showVideo(currentVideoIndex);

    // Automatically change video every 3 seconds
    setInterval(nextVideo, 3000);

    // Export functions to global scope for buttons to use
    window.nextVideo = nextVideo;
    window.prevVideo = prevVideo;
});
