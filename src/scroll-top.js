var scrolltop = document.querySelector(".scrolltop");
var rootElement = document.documentElement;

function handleScroll() {
  // Do something on scroll
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  if (rootElement.scrollTop / scrollTotal > 0) {
    // Show button
    scrolltop.classList.add("showBtn");
  } else {
    // Hide button
    scrolltop.classList.remove("showBtn");
  }
}

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
scrolltop.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);
