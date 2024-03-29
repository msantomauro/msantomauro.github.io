
const numOfNavItems = 5;
const navItemHeight = calculateNavItemHeight();
const navItemHalfHeight = navItemHeight / 2;

$( document ).ready(setUpNav);


function setUpNav() {
  addItemToNav("projects", "navItem1", "html/projects.html");
  addItemToNav("experience", "navItem2", "html/underDev.html");
  addItemToNav("about", "navItem3", "html/underDev.html");
  addItemToNav("resume", "navItem4", "Mia_Santomauro_Resume.pdf");
  addItemToNav("contact", "navItem5", "html/contact.html");
}

function addItemToNav(displayName, id, filepath) {
  const newElt = `<div class="navItem" id=${id}><span>${displayName}</span></div>`;
  $(".navigation").append(newElt);
  setUpNavItem($("#" + id), filepath);
}

function calculateNavItemHeight() {
  const windowHeight = $(window).height();
  return windowHeight / numOfNavItems;
}

function setUpNavItem(navItem, filepath) {
  $(navItem).hover(hoverInHandler, hoverOutHandler);
  $(navItem).click(function(){clickHandler(filepath)});
  $(navItem).css("height", navItemHeight);

  const borderRadString = `0  ${navItemHalfHeight}px ${navItemHalfHeight}px 0`
  $(navItem).css("border-radius", borderRadString);
}

function hoverInHandler() {

  // sets cursor to grab
  $(this).css("cursor", "pointer");

  $(this).animate({
    width: "60vw",
    opacity: ".7",
    letterSpacing: "15px"
  });
}

function hoverOutHandler() {

  // sets cursor to default
  $(this).css("cursor", "default");

  $(this).animate({
    width: "30vw",
    opacity: "1",
    letterSpacing: "2px"
  });
}

function clickHandler(filepath) {
  document.location.href = filepath;
}
