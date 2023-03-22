// Get the video player and poster container
const videoPlayer = document.getElementById('video-player');
const posterContainer = document.getElementById('poster-container');
// Get the function buttons
const previousButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');
const volumeButton = document.getElementById('volume-button');
const modeButton = document.getElementById('mode-button');
const posters = posterContainer.querySelectorAll('.poster-holder');


// Set the initial video source
videoPlayer.src = posterContainer.querySelector('.poster').getAttribute('data-trailer-src');

// Set the index of the current video
let currentVideoIndex = 0;
let currentPoster = 0;

// Function to play the selected video
function playVideo(event) {
  const poster = event.target;
  const video = poster.getAttribute('data-trailer-src');
  const posterSrc = poster.getAttribute('src');
  videoPlayer.src = video;
  videoPlayer.poster = posterSrc;
  videoPlayer.load();
  videoPlayer.play();
  // Update the current video index
  for (let i = 0; i < posters.length; i++) {
    if (posters[i] === poster) {
      currentVideoIndex = i;
      break;
    }
  }
}
// const posters = posterContainer.querySelectorAll('.poster');
posters.forEach((poster) => {
  poster.addEventListener("click", () => {
    const trailerSrc = poster.getAttribute("data-trailer-src");
    videoPlayer.src = trailerSrc;
    videoPlayer.play();
    // playPauseButton.innerHTML = "&#10074;&#10074;";
  });
  poster.addEventListener('click', () => {
    const title = poster.querySelector('.poster-title').textContent;
    const playing = document.querySelector('#playing p');
    playing.textContent = title;
  });
});

function showTitle() {
  const posterTitles = document.querySelectorAll(".poster-title");
  const currentPosterTitle = posterTitles[currentVideoIndex].textContent;
  const playingTitle = document.querySelector("#playing p");
  playingTitle.textContent = currentPosterTitle;
}
// Function to play the previous video
function playPreviousVideo() {
  const posters = posterContainer.querySelectorAll('.poster');
  currentVideoIndex = (currentVideoIndex - 1 + posters.length) % posters.length;
  const poster = posters[currentVideoIndex];
  playVideo({ target: poster });
  showTitle();
}

// Function to play the next video
function playNextVideo() {
  const posters = posterContainer.querySelectorAll('.poster');
  currentVideoIndex = (currentVideoIndex + 1) % posters.length;
  const poster = posters[currentVideoIndex];
  playVideo({ target: poster });
  showTitle();
}


// Event listeners for the function buttons
// Event listeners for the function buttons
previousButton.addEventListener('click', playPreviousVideo);
nextButton.addEventListener('click', playNextVideo);
// Function to toggle the volume on/off
function toggleVolume() {
    if (videoPlayer.muted) {
        videoPlayer.muted = false;
        volumeButton.textContent = 'Mute';
    } else {
        videoPlayer.muted = true;
        volumeButton.textContent = 'Volume';
    }
}

// Add click event listener to volume button
volumeButton.addEventListener('click', toggleVolume);

// Function to toggle the night mode on/off
function toggleMode() {
    if (document.body.classList.contains('night-mode')) {
        document.body.classList.remove('night-mode');
        modeButton.textContent = 'Turn off the light';
    } else {
        document.body.classList.add('night-mode');
        modeButton.textContent = 'Turn on the light';
    }
}

      // Get the progress bar element
const progressBar = document.querySelector('.progress-bar');

// Create a function to update the progress bar value
function updateProgressBar() {
  // Get the video element
  const video = document.querySelector('video');

  // Calculate the percentage of video played
  const percent = (video.currentTime / video.duration) * 100;

  // Update the width of the progress bar
  progressBar.style.width = `${percent}%`;
}

// Add an event listener to the video element to update the progress bar on timeupdate
document.querySelector('video').addEventListener('timeupdate', updateProgressBar);
const video = document.querySelector('video');
const volumeUpButton = document.querySelector('#volume-up-button');
const volumeDownButton = document.querySelector('#volume-down-button');

volumeUpButton.addEventListener('click', () => {
  if (video.volume < 1) {
    video.volume += 0.2;
  }
});

volumeDownButton.addEventListener('click', () => {
  if (video.volume > 0) {
    video.volume -= 0.2;
  }
});

// Add click event listener to mode button
modeButton.addEventListener('click', toggleMode);

const speedButton = document.getElementById('speed-button');
speedButton.addEventListener('click', () => {
  const videoPlayer = document.getElementById('video-player');
  const currentPlaybackRate = videoPlayer.playbackRate;
  const newPlaybackRate = currentPlaybackRate === 1.0 ? 1.5 : 1.0;
  videoPlayer.playbackRate = newPlaybackRate;
  speedButton.innerHTML = newPlaybackRate === 1.0 ? 'Speed' : `Speed (${newPlaybackRate}x)`;
});

//Add liked list
const likeButtons = document.querySelectorAll('.like-button');
const profileBtn = document.querySelector('.profile-btn');
const likedMovies = [];
likeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.toggle('active');
    const movieTitle = button.parentNode.querySelector('.poster-title').textContent;
    const index = likedMovies.indexOf(movieTitle);
  });
});
