import {hiddenele} from "../content_play.js";
/*************************************var******************************************/
let eleframe = document.querySelector('.container .eleframe');
let contentcontainer = document.querySelector('.container .main-video');
let topicname = document.querySelector('.main-video .topicname');
let btn_txt="";
let mainVideo = document.getElementById("lessonVideo");
let L2UT1 ="";
/*************************************elements******************************************/

const lesson_two = [
  { type: "button", id: "2vid0", text: "الأهداف", icon: "bi bi-camera-video" },
  { type: "button", id: "2intro", text: "تمهيد", icon: "bi bi-lightbulb" },
  { type: "button", id: "2act1", text: "نشاط", icon: "bi bi-gear" },
  { type: "button", id: "2vid1", text: "الأمن الاقتصادي", icon: "bi bi-camera-video" },
  { type: "button", id: "2act2", text: "نشاط", icon: "bi bi-gear" },
  { type: "button", id: "2act3", text: "نشاط", icon: "bi bi-gear" },
  { type: "button", id: "2vid2", text: "ربط الأمن الاقتصادي بالأمن الفكري ", icon: "bi bi-camera-video" },
  { type: "button", id: "2act4", text: "نشاط", icon: "bi bi-gear" },
  { type: "button", id: "2act5", text: "نشاط", icon: "bi bi-gear" },
  { type: "button", id: "2vid3", text: "أهمية الأمن الاقتصادي", icon: "bi bi-camera-video" },
  { type: "button", id: "2act6", text: "نشاط", icon: "bi bi-gear" },
  { type: "button", id: "2act7", text: "نشاط", icon: "bi bi-gear" },
  { type: "button", id: "2vid4", text: "تأثير العوامل الاقتصادية على الأمن الفكري", icon: "bi bi-camera-video" },
  { type: "button", id: "2act8", text: "نشاط", icon: "bi bi-gear" },
  { type: "button", id: "2act9", text: "نشاط", icon: "bi bi-gear" },
  { type: "button", id: "2vid5", text: "مفهوم الأمن الاجتماعي", icon: "bi bi-camera-video" },
  { type: "button", id: "2act10", text: "نشاط", icon: "bi bi-gear" },
  { type: "button", id: "2act11", text: "نشاط", icon: "bi bi-gear" },
  { type: "button", id: "2vid6", text: "  تأثير العوامل الاجتماعية على الأمن الفكري ", icon: "bi bi-camera-video" },
  { type: "button", id: "2vid7", text: "  العلاقة بين الأمن الاجتماعي والأمن الفكري", icon: "bi bi-camera-video" },
  { type: "button", id: "2act12", text: "نشاط", icon: "bi bi-gear" },
  { type: "button", id: "2act13", text: "نشاط", icon: "bi bi-gear" },
  { type: "button", id: "2vid8", text: "  أهمية الأمن الاجتماعي كأحد أبعاد الأمن الفكري", icon: "bi bi-camera-video" },
  { type: "button", id: "2act14", text: "نشاط", icon: "bi bi-gear" },
  { type: "button", id: "2act15", text: "نشاط", icon: "bi bi-gear" },
  { type: "button", id: "2act16", text: "التقويم", icon: "bi bi-clipboard-check" },
  { type: "button", id: "2act17", text: "محكات الأداء ", icon: "bi bi-clipboard-check" },
  

];
/**************************************************************************/
function btn_two(button)
{
let num =lesson_two.findIndex(b => b.id === button.id);
btn_txt=lesson_two[num].text;

switch (button.id) {
  case "2vid0": mainVideo.src = "./media/vid2/vid0.mp4"; mainVideo.controls = true; break;
  case "2vid1": mainVideo.src = "./media/vid2/vid1.mp4"; mainVideo.controls = true; break;
  case "2vid2": mainVideo.src = "./media/vid2/vid2.mp4"; mainVideo.controls = true; break;
  case "2vid3": mainVideo.src = "./media/vid2/vid3.mp4"; mainVideo.controls = true; break;
  case "2vid4": mainVideo.src = "./media/vid2/vid4.mp4"; mainVideo.controls = true; break;
  case "2vid5": mainVideo.src = "./media/vid2/vid5.mp4"; mainVideo.controls = true; break;
  case "2vid6": mainVideo.src = "./media/vid2/vid6.mp4"; mainVideo.controls = true; break;
  case "2vid7": mainVideo.src = "./media/vid2/vid7.mp4"; mainVideo.controls = true; break;
  case "2vid8": mainVideo.src = "./media/vid2/vid8.mp4"; mainVideo.controls = true; break;
  case "2vid9": mainVideo.src = "./media/vid2/vid9.mp4"; mainVideo.controls = true; break;


  case "2intro": loadForm('https://forms.gle/bsx9xSFFSdkzXotC8'); break;
  case "2act1": loadForm('https://forms.gle/BVigb1TzK5iXUsqa8'); break;
  case "2act2": loadForm('https://forms.gle/K81TzDbNmuSaYhEt7'); break;
  case "2act3": loadForm('https://forms.gle/uaZKfKnL5WZ5sEAT8'); break;
  case "2act4": loadForm('https://forms.gle/aMUrzX8zp9vQ3Say6'); break;
  case "2act5": loadForm('https://forms.gle/xEmkxqzpigVZvJiVA'); break;
  case "2act6": loadForm('https://forms.gle/VuyhptDEPoU8DWxQ8'); break;
  case "2act7": loadForm('https://forms.gle/PUpDNbWWA6MxvmKe8'); break;
  case "2act8": loadForm('https://forms.gle/gdq91v8sJNGrkNBV9'); break;
  case "2act9": loadForm('https://forms.gle/VYJ2jGhhJhJHc4pMA'); break;
  case "2act10": loadForm('https://forms.gle/3YqEkDxbrVxycZJS7'); break;
  case "2act11": loadForm('https://forms.gle/pGWtRTQU7HSoafEz8'); break;
  case "2act12": loadForm('https://forms.gle/Jd7eyyABuw1AduLBA'); break;
  case "2act13": loadForm('https://forms.gle/5vfQTvN5j4h5ee6B9'); break;
  case "2act14": loadForm('https://forms.gle/iVnVdwxVWHDACAabA'); break;
  case "2act15": loadForm('https://forms.gle/vkxsXeaKkiPtVGMc7'); break;
  case "2act16": loadForm('https://forms.gle/3PzC5b9fFS6sS8nc8'); break;
  case "2act17": loadForm('https://forms.gle/jDqAj98VNwXJiKct8'); break;


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

export {lesson_two,btn_two,L2UT1};

