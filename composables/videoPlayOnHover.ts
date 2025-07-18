export const playVideoOnMouseOver = (video) => {
    video.play();
}

export const pauseVideoOnMouseLeave = (video) => {
    video.pause();
    video.currentTime = 0;
}