function changeIframe(source) {
  var iframe = document.getElementById("content");
  iframe.src = source;
}

function resizeIframe(obj) {
  obj.style.height = obj.contentWindow.document.body.scrollHeight + 50 + 'px';
  source = obj.src.substr(obj.src.length - 13, obj.src.length);
  if (source == "mainPage.html") {
    obj.style.height = "300vh";
  }
  if (source == "boration.html") {
    obj.style.height = "80vh";
  }
  if (source == "/contact.html") {
    
    obj.style.height = "80vh";
  }
}

function popUpPhoto(obj) {
  lightbox = parent.document.getElementById("lightboxripoff");
  srcName = obj.src;
  var newSrc;
  if (obj == obj.parentNode.firstElementChild) {
    parent.document.getElementById("left-arr").style.display = 'none';
  }
  else {
    parent.document.getElementById("left-arr").style.display = 'block';
  }
  if (obj == obj.parentNode.lastElementChild) {
    parent.document.getElementById("right-arr").style.display = 'none';
  }
  else {
    parent.document.getElementById("right-arr").style.display = 'block';
  }
  if (srcName.charAt(srcName.length - 7) == '-') {
    newSrc = srcName.substr(0, srcName.length - 7) + '-fs' + srcName.substr(srcName.length - 7, srcName.length);
  }
  else if (srcName.charAt(srcName.length - 6) == '-') {
    newSrc = srcName.substr(0, srcName.length - 6) + '-fs' + srcName.substr(srcName.length - 6, srcName.length);
  }
  parent.document.getElementById("main-photo").src = newSrc;
  lightbox.style.display = "flex";
}

function quitPhoto() {
  document.getElementById("lightboxripoff").style.display = "none";
}