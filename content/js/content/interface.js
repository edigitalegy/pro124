/*************************************interface button******************************************/
const expandcontentlist =document.getElementById("expandcontentlist");
const contentlist = document.querySelector('.container .contentlist');

const expandadminlist =document.getElementById("expandadminlist");
const adminlist = document.querySelector('.container .adminlist');
/*************************************contentlist******************************************/
expandcontentlist.addEventListener("click", function() {
  const menuWidth = contentlist.offsetWidth ; // Get the actual width of menu-list
  expandcontentlist.style.setProperty("--menu-width", `${menuWidth}px`); // Update CSS variable
  if (expandcontentlist.classList.contains('show')) 
    {
      expandcontentlist.classList.toggle('close');
      expandcontentlist.classList.remove('show');
      contentlist.classList.remove('show');
      contentlist.classList.toggle('close');

    }
    else
    {
      expandcontentlist.classList.toggle('show');
      expandcontentlist.classList.remove('close');
      contentlist.classList.remove('close');
      contentlist.classList.toggle('show');

    }
});

/*************************************adminlist******************************************/
expandadminlist.addEventListener("click", function() {
  const adminWidth = adminlist.offsetWidth ; // Get the actual width of menu-list
  expandadminlist.style.setProperty("--menu-width", `${adminWidth}px`); // Update CSS variable
  if (expandadminlist.classList.contains('show')) 
    {
      expandadminlist.classList.toggle('close');
      expandadminlist.classList.remove('show');
      adminlist.classList.remove('show');
      adminlist.classList.toggle('close');

    }
    else
    {
      expandadminlist.classList.toggle('show');
      expandadminlist.classList.remove('close');
      adminlist.classList.remove('close');
      adminlist.classList.toggle('show');
    }
});
/*************************************resizw window******************************************/
function updateMenuWidth() {

  // Check for different screen widths and apply changes
  if (
    window.matchMedia("(max-width: 1200px)").matches ||  // Large screens
    window.matchMedia("(max-width: 991px)").matches ||   // Medium screens
    window.matchMedia("(max-width: 768px)").matches ||   // Small screens
    window.matchMedia("(max-width: 576px)").matches      // Extra small screens
  ) {
    const menuWidth = contentlist.offsetWidth; // Get the actual width of contentlist
    expandcontentlist.style.setProperty("--menu-width", `${menuWidth}px`);

    const adminWidth = adminlist.offsetWidth ; // Get the actual width of menu-list
    expandadminlist.style.setProperty("--menu-width", `${adminWidth}px`); // Update CSS variable
  }
}

// Run the function when the page loads
updateMenuWidth();

// Run the function whenever the window resizes
window.addEventListener("resize", updateMenuWidth);

/*********************************scroll*******************************************/
function checkScrollbar() {
  if (contentlist.classList.contains('show')) 
    {
      if (contentlist.scrollHeight > contentlist.clientHeight) {
          contentlist.style.overflowY = "scroll"; // Enable scroll if needed
      } else {
          contentlist.style.overflowY = "hidden"; // Hide scroll if not needed
      }
      const menuWidth = contentlist.offsetWidth; // Get the actual width of contentlist
      expandcontentlist.style.setProperty("--menu-width", `${menuWidth}px`);
  }
  if (adminlist.classList.contains('show')) 
    {
      if (adminlist.scrollHeight > adminlist.clientHeight) {
        adminlist.style.overflowY = "scroll"; // Enable scroll if needed
    } else {
      adminlist.style.overflowY = "hidden"; // Hide scroll if not needed
    }
    const adminWidth = adminlist.offsetWidth ; // Get the actual width of menu-list
    expandadminlist.style.setProperty("--menu-width", `${adminWidth}px`); // Update CSS variable
    
  }
}

adminlist.addEventListener("click", checkScrollbar);
expandadminlist.addEventListener("click", checkScrollbar);
contentlist.addEventListener("click", checkScrollbar);
expandcontentlist.addEventListener("click", checkScrollbar);
window.addEventListener("load", checkScrollbar);
window.addEventListener("resize", checkScrollbar);


