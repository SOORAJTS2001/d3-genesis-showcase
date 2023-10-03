document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const base64ImageData = urlParams.get('image');

    if (base64ImageData) {
        const vrSky = document.getElementById('vrSky');
        vrSky.setAttribute('src', base64ImageData);
    }
});
