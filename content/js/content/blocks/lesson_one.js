import {hiddenele} from "../content_play.js";
/*************************************var******************************************/
let eleframe = document.querySelector('.container .eleframe');
let contentcontainer = document.querySelector('.container .main-video');
let topicname = document.querySelector('.main-video .topicname');
let btn_txt="";
let mainVideo = document.getElementById("lessonVideo");
let L1UT1 ="";
/*************************************elements******************************************/
const lesson_one = [
  { type: "button", id: "1vid0", text: "الأهداف", icon: "bi bi-camera-video" ,time:""},
  { type: "button", id: "1intro", text: "تمهيد", icon: "bi bi-lightbulb" },
  { type: "button", id: "1act1", text: "نشاط", icon: "bi bi-gear" },
  { type: "button", id: "1vid1", text: "الأمن الفكري", icon: "bi bi-camera-video" },
  { type: "button", id: "1vid2", text: "تعريف الأمن الفكري", icon: "bi bi-camera-video" },
  { type: "button", id: "1act2", text: "نشاط", icon: "bi bi-gear" },
  { type: "button", id: "1vid3", text: "أهداف الأمن الفكري ", icon: "bi bi-camera-video" },
  { type: "button", id: "1act3", text: "نشاط", icon: "bi bi-gear" },
  { type: "button", id: "1vid4", text: "مقومات تحقيق الأمن الفكري", icon: "bi bi-camera-video" },
  { type: "button", id: "1act4", text: "نشاط", icon: "bi bi-gear" },
  { type: "button", id: "1vid5", text: " سمات الأمن الفكري", icon: "bi bi-camera-video" },
  { type: "button", id: "1vid6", text: " أهمية الأمن الفكري", icon: "bi bi-camera-video" },
  { type: "button", id: "1act5", text: "نشاط", icon: "bi bi-gear" },
  { type: "button", id: "1vid7", text: " الآثار الإيجابية للأمن الفكري", icon: "bi bi-camera-video" },
  { type: "button", id: "1act6", text: "نشاط", icon: "bi bi-gear" },
  { type: "button", id: "1vid8", text: " دور معلم اللغة العربية في تعزيز الأمن الفكري", icon: "bi bi-camera-video" },
  { type: "button", id: "1act7", text: "نشاط", icon: "bi bi-gear" },
  { type: "button", id: "1vid9", text: " أساليب معلم اللغة العربية لتنمية الأمن الفكري", icon: "bi bi-camera-video" },
  { type: "button", id: "1act8", text: "نشاط", icon: "bi bi-gear" },
  { type: "button", id: "1act9", text: "التقويم", icon: "bi bi-clipboard-check" },
  { type: "button", id: "1act10", text: "محكات الأداء الخاصة بمهارات التخطيط ", icon: "bi bi-clipboard-check" },

];

function btn_one(button) {
  let num = lesson_one.findIndex(b => b.id === button.id);
  if (num !== -1) {
      btn_txt = lesson_one[num].text;
  }

  switch (button.id) {
      case "1vid0": mainVideo.src = "./media/vid1/vid0.mp4"; mainVideo.controls = true; break;
      case "1vid1": mainVideo.src = "./media/vid1/vid1.mp4"; mainVideo.controls = true; break;
      case "1vid2": mainVideo.src = "./media/vid1/vid2.mp4"; mainVideo.controls = true; break;
      case "1vid3": mainVideo.src = "./media/vid1/vid3.mp4"; mainVideo.controls = true; break;
      case "1vid4": mainVideo.src = "./media/vid1/vid4.mp4"; mainVideo.controls = true; break;
      case "1vid5": mainVideo.src = "./media/vid1/vid5.mp4"; mainVideo.controls = true; break;
      case "1vid6": mainVideo.src = "./media/vid1/vid6.mp4"; mainVideo.controls = true; break;
      case "1vid7": mainVideo.src = "./media/vid1/vid7.mp4"; mainVideo.controls = true; break;
      case "1vid8": mainVideo.src = "./media/vid1/vid8.mp4"; mainVideo.controls = true; break;
      case "1vid9": mainVideo.src = "./media/vid1/vid9.mp4"; mainVideo.controls = true; break;


      case "1intro": loadForm('https://forms.gle/tatb7HCzycXsY4dL6'); break;
      case "1act1": loadForm('https://forms.gle/wdZQdR85GPJGpCyt8'); break;
      case "1act2": loadForm('https://forms.gle/aGrSTRcZi6veCG1v5'); break;
      case "1act3": loadForm('https://forms.gle/wYbsUnaZTivM4i979'); break;
      case "1act4": loadForm('https://forms.gle/GAcS6qNpiAq9T4vd9'); break;
      case "1act5": loadForm('https://forms.gle/vM3rXeKC9wLJ9UGW9'); break;
      case "1act6": loadForm('https://forms.gle/YUPdi18NnsdL41yBA'); break;
      case "1act7": loadForm('https://forms.gle/WW96vnMD45pLX2DM6'); break;
      case "1act8": loadForm('https://forms.gle/884Ejy7SExhRuEWV8'); break;
      case "1act9": loadForm('https://forms.gle/SUJmtyte8mdzKJ8r6'); break;
      case "1act10": loadForm('https://forms.gle/3YqEkDxbrVxycZJS7'); break;
  }

  if (mainVideo.src) {
      videorun(); // Ensure videorun() exists
  }
}

/*************************************events ele******************************************/

function loadForm(url,id) {
  // First, clean up any existing form iframe
  const oldIframe = document.getElementById('formFrame');
  if (oldIframe) oldIframe.remove();

  // Create a new iframe
  const newIframe = document.createElement('iframe');
  newIframe.id = 'formFrame';
  newIframe.src = url;
  newIframe.width = '100%';
  newIframe.height = '100%';
  newIframe.style.border = 'none';  // Optional

  // Append new iframe to `eleframe`
  eleframe.appendChild(newIframe);

  // Show the container
  eleframe.classList.remove('hidden');
  eleframe.classList.add('show');
}



function videorun() {
  contentcontainer.classList.remove('close');
  contentcontainer.classList.toggle('show');
  topicname.innerHTML=btn_txt;
}
/*************************************events ele******************************************/
export {lesson_one, btn_one,L1UT1};
