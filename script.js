
const playButtons = document.querySelectorAll('.play');

playButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const audio=button.parentElement.querySelector('audio');
    if (audio.paused) {
      audio.play();
      button.firstElementChild.style.transition="all 0.3s";
      button.firstElementChild.classList.remove('fa-play');
      button.firstElementChild.classList.add('fa-pause'); // Update the play button icon
    } else {
      audio.pause();
      button.firstElementChild.style.transition="none";
      button.firstElementChild.classList.remove('fa-pause'); 
      button.firstElementChild.classList.add('fa-play');// Update the play button icon
    }
  });
});
