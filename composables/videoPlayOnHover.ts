const { $viewport } = useNuxtApp();

export const playVideoOnMouseOver = (video) => {
    if ($viewport.isLessOrEquals('tablet')) return;

    video.play();
}

export const pauseVideoOnMouseLeave = (video) => {
    if ($viewport.isLessOrEquals('tablet')) return;

    video.pause();
    video.currentTime = 0;
}