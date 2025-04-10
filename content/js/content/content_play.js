import { btn_zero,btn_zerof } from './blocks/block_zero.js';
import { btn_one,L1UT1 } from './blocks/lesson_one.js';
import { btn_two,L2UT1 } from './blocks/lesson_two.js';
import { logoutUser } from "../persistent.js";

// const databasename = "usersid";
const takeoffpage = "./learnerdata.html";
const landpage = "./login.html";
/****************************************************************************************************************/
let contentcontainer;
let topicname;
let listVideo;
let mainVideo;
let eleframe;
let youtube;

document.addEventListener('DOMContentLoaded', () => {
  contentcontainer = document.querySelector('.container .main-video');
  topicname = document.querySelector('.main-video .topicname');
  listVideo = document.querySelectorAll('.contentlist .vid'); 
  mainVideo = document.getElementById("lessonVideo");
  eleframe = document.querySelector('.container .eleframe');
  youtube = document.querySelector('.container .youtube');

  mainVideo.controls=false;
  const buttonsArray = Array.from(document.querySelectorAll('.dropdown-item'));
  buttonsArray.push(...btn_zero);
  setupButtonListeners(buttonsArray);
});
/*************************************youtube******************************************/
const videoContainer = document.getElementById('youtube');
let vplay = false;
let player;
/*************************************youtube******************************************/
let youtubesrc ="";
function showYoutube(url) {
  youtubesrc = url;
  addyoutube();
  youtube.classList.remove('hidden');
  youtube.classList.add('show');
  vplay = true;
}

function addyoutube() {
    if (!videoContainer.querySelector('iframe')) {
        const iframe = document.createElement('iframe');
        iframe.id = 'youtube-video';
        iframe.width = "800";
        iframe.height = "600";
        iframe.src = youtubesrc;
        iframe.frameBorder = '0';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;
        videoContainer.appendChild(iframe);
        loadYouTubeAPI();
    } else {
        videoContainer.querySelector('iframe').src = youtubesrc;
    }
}
let youtubeAPIAdded = false;
function loadYouTubeAPI() {
    if (!youtubeAPIAdded) {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        youtubeAPIAdded = true;
    }
}
// `onYouTubeIframeAPIReady` must be accessible globally
  window.onYouTubeIframeAPIReady = function () {
  player = new YT.Player('youtube-video');
  };

  /*************************************remove******************************************/
function hiddenele() {
  // Remove YouTube iframe if it's there
  const ytIframe = videoContainer.querySelector('iframe');
  if (ytIframe && vplay === true) {
      ytIframe.remove();
      vplay = false;
  }

  // Remove eleframe iframe (assumes it has id="formFrame")
  const formIframe = eleframe.querySelector('iframe');
  if (formIframe) {
      formIframe.remove();
  }

  // Hide eleframe if it was shown
  if (eleframe.classList.contains('show')) {
      eleframe.classList.add('hidden');
      eleframe.classList.remove('show');
  }

  // Hide YouTube container if it was shown
  if (youtube.classList.contains('show')) {
      youtube.classList.add('hidden');
      youtube.classList.remove('show');
  }

  // Hide main video container if it was shown
  if (contentcontainer.classList.contains('show')) {
      mainVideo.pause();
      contentcontainer.classList.add('close');
      contentcontainer.classList.remove('show');
  }
}


/*************************************events ele******************************************/
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

function setupButtonListeners(buttonsArray) {
  buttonsArray.forEach((button) => {
      button.addEventListener("click", () => {
          console.log(`Clicked ${button.id}`);
          buttonsArray.forEach(btn => btn.classList.remove('playing'));
          button.classList.add('playing');
          handleButtonClick(button);
      });
  });
}

const handleButtonClick = debounce((button) => {
  console.log(`Debounced handler for ${button.id}`);
  listVideo.forEach(vid => vid.classList.remove('active'));
  hiddenele();
    if (button.id.charAt(0) === "0") {btn_zerof(button);foundelement(button)}
    else if (button.id.charAt(0) === "1") {btn_one(button); foundelement(button)}
    else if (button.id.charAt(0) === "2") {btn_two(button);foundelement(button)}
  }, 300);

  function foundelement(button)
  {
    if (button.id==="1you1"){showYoutube(L1UT1)}
    if (button.id==="2you1"){showYoutube(L2UT1)}
    //if (button.id.charAt(2) === "a") {console.log(123456)}
  }

/****************************************************************************************************************/
document.getElementById("out-btn").addEventListener("click", goout);
function goout() {
  logoutUser();  
  window.location.href =landpage;
 }

document.getElementById("learner-base").addEventListener("click",learnerdata);
function learnerdata() {
  window.location.href = takeoffpage; 
}

  export{hiddenele};
  