import { createCustomButtons } from './blocks/block_zero.js';
import { lesson_one } from './blocks/lesson_one.js';
import { lesson_two } from './blocks/lesson_two.js';

/**********************************************container******************************************************/
// Select the container
const contentDiv = document.getElementById("content_list");

/**********************************************dividline******************************************************/
const dividline = [...Array(5)].map(() => {
  const divider = document.createElement("hr");
  divider.style.borderBottom = '1px solid #ccc';
  divider.style.paddingTop = '2px';
  divider.style.paddingBottom = '2px';
  return divider;
});

/****************************************************************************************************/
// Group buttons into categories
const lesson1 = " الأمن الفكري";
const lesson2 = "الأمن الثقافي والديني والاجتماعي";
const lesson3 = "الأمن السياسي والاقتصادي";
const lesson4 = "الأمن الفكري التربوي";
const lesson5 = "الأمن الفكري الرقمي";
const lesson6 = "";

const categories = {
  [lesson1]: [],
  [lesson2]: [],
  [lesson3]: [],
  [lesson4]: [],
  [lesson5]: [],
  [lesson6]: []
};
/****************************************add btn before lessons************************************************************/
// Append the button before the first dropdown
    contentDiv.appendChild(createCustomButtons(1));
    //contentDiv.appendChild(createCustomButtons(2));
    contentDiv.appendChild(dividline[0]);

/********************************************add dropdown***************************************************/
lesson_one.forEach(item => {
categories[lesson1].push(item);
});

lesson_two.forEach(item => {
  categories[lesson2].push(item);
});

lesson_two.forEach(item => {
  categories[lesson3].push(item);
});

lesson_two.forEach(item => {
  categories[lesson4].push(item);
});

lesson_two.forEach(item => {
  categories[lesson5].push(item);
});
/******************************************create a dropdown*****************************************************/
// Function to create a dropdown
function createDropdown(categoryName, items) {
  const dropdownDiv = document.createElement("div");
  dropdownDiv.classList.add("dropdown", "mb-3");

  const button = document.createElement("button");
  button.classList.add("btn", "btn-gray", "dropdown-toggle", "w-100", "fs-5");
  button.setAttribute("data-bs-toggle", "dropdown");

  // Set the button HTML with the book icon before the category name
  button.innerHTML = `<i class="bi bi-book"></i> ${categoryName}`;

  const menu = document.createElement("ul");
  menu.classList.add("dropdown-menu", "w-100");

  items.forEach(item => {
    const listItem = document.createElement("li");
    const link = document.createElement("button");

    link.classList.add("dropdown-item", "fs-5", "text-wrap");
    link.style.whiteSpace = "normal";
    link.style.textAlign = "right";
    link.setAttribute("dir", "rtl");
    link.setAttribute("data-text", item.text);
    link.id = item.id;
    link.innerHTML = `<i class="${item.icon}"></i> ${item.text}`;

            // Add time span if the item has a time
    if (item.time) {
      const timeSpan = document.createElement("span");
      timeSpan.textContent = item.time;
      timeSpan.style.color = "darkblue";
      timeSpan.style.marginLeft = "auto";  // Push to opposite side  
      link.appendChild(timeSpan);
  }


    // Prevent dropdown from closing & highlight selected item
    link.addEventListener("click", function(event) {
      event.stopPropagation();
      document.querySelectorAll(".dropdown-item").forEach(item => item.classList.remove("active"));
      this.classList.add("active");
    });

    listItem.appendChild(link);
    menu.appendChild(listItem);
  });

  dropdownDiv.appendChild(button);
  dropdownDiv.appendChild(menu);
  contentDiv.appendChild(dropdownDiv);
}

// Create dropdowns for each category
Object.entries(categories).forEach(([category, items]) => {
  if (items.length > 0) {
    createDropdown(category, items);
  }
});
/****************************************add btn after lessons************************************************************/
contentDiv.appendChild(dividline[1]);
contentDiv.appendChild(createCustomButtons(3));
contentDiv.appendChild(createCustomButtons(4));
//contentDiv.appendChild(createCustomButtons(5));
//contentDiv.appendChild(createCustomButtons(6));

/****************************************add btn after lessons************************************************************/

