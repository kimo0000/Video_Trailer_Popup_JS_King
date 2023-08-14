const bodyEl = document.querySelector('body');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    const el = document.createElement('div');
    el.classList.add('popup');

    const video = document.createElement('video');
    video.src = `imgs/bg_video.mp4`;
    video.controls = true;
    // video.autoplay = true;
    video.classList.add("video");

    const closeBtn = document.createElement("btn");
    closeBtn.classList.add('close_Btn');
    closeBtn.appendChild(document.createTextNode('X'));

    el.append(video, closeBtn);

    bodyEl.appendChild(el);

    closeBtn.addEventListener('click', () => {
        closeBtn.parentElement.remove();
    })

})