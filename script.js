const leftContent = document.querySelector('.left-content');

const magicButton = document.getElementById('magic-button');

magicButton.addEventListener('click', () => {
  if (leftContent.style.backgroundImage === 'url("./image-bad.jpeg")') {
    document.getElementsByClassName('left-content')[0].style.backgroundImage =
      'url("./image-good.jpeg")';
    document.getElementById('damla').src = 'damla-good.svg';
    document.getElementById('damla-title').textContent = 'animeci zammuro';
  } else {
    document.getElementsByClassName('left-content')[0].style.backgroundImage =
      'url("/image-bad.jpeg")';
    document.getElementById('damla').src = 'damla-bad.svg';
    document.getElementById('damla-title').textContent = 'hamuri zammuro';
  }
});
