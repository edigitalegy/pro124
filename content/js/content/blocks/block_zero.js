import {hiddenele} from "../content_play.js";
/*************************************var******************************************/
let eleframe = document.querySelector('.container .eleframe');

let contentcontainer = document.querySelector('.container .main-video');

let mainVideo = document.getElementById("lessonVideo");
let L0UT1 ="";
/*************************************elements******************************************/
const btn_zero=[]; 

function createCustomButtons(option) {
  const buttonData = {
      1: { id: "0btnpretest", icon: "bi-clipboard-check", text: "الاختبار القبلي" ,time:""},
      2: { id: "0btnvrcompetency", icon: "bi-clipboard-check", text: "محكاة مقياس الكفاءة",time:"" },
      3: { id: "0btnposttest", icon: "bi-clipboard-check", text: "الاختبار البعدي",time:""},
      4: { id: "0chat", icon: "bi-chat-dots", text: "غرفة الدردشة" ,time:""},
      5: { id: "0aibutton", icon: "bi-robot", text: "المساعد الآلي",time:"" },
      6: { id: "0selflearning", icon: "bi-person-workspace", text: "التعلم الفردي",time:"" }
  };

  const data = buttonData[option];
  if (!data) {
      console.warn("Invalid option passed to createCustomButtons:", option);
      return document.createElement("button"); // empty fallback button
  }

  const button = document.createElement("button");
  button.classList.add("btn", "btn-gray", "fs-5");
  button.style.minWidth = "100%";
  button.id = data.id;
  button.setAttribute("data-text", data.text);
  button.innerHTML = `<i class="bi ${data.icon}"></i> ${data.text} `;

  if (data.time) {
    const timeSpan = document.createElement("span");
    timeSpan.textContent = data.time;
    timeSpan.style.color = "darkblue";
    timeSpan.style.marginLeft = "auto";  // Push to opposite side  
    button.appendChild(timeSpan);
}
  btn_zero .push(button);
  return button;
}


function btn_zerof(button)
{
  if(button.id === "0btnpretest"){ loadForm('https://forms.gle/8RsbRtcLqNJzsuis5'); }
  if(button.id === "0btnposttest"){ loadForm('https://forms.gle/c6MGWhvL9nhGWjeMA');}
  if(button.id === "0aibutton"){loadForm('./chatbot/index.html'); }
  if(button.id === "0chat"){loadForm('./chat/chat.html'); }
}
/*************************************finctions ele******************************************/
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
}
/*************************************finctions ele******************************************/
export {btn_zero,btn_zerof,createCustomButtons};

