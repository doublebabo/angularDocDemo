window.onload = addLoadEvent;

addLoadEvent(initImgs);
addLoadEvent(countBodyChildren);
addLoadEvent(initBox);

function addLoadEvent(func) {
  let oldLoad = window.onload;
  if (typeof window.onload !== 'function') {
    window.onload = func;
  } else {
    window.onload = function (ev) {
      oldLoad();
      func();
    }
  }
}

function initImgs() {
  let gallery = document.getElementById("gallery");
  let links = gallery.getElementsByTagName("a");
  for (let i = 0; i < links.length; i++) {
    let link = links[i];
    link.onclick = function () {
      // alert(showPic(this));
      return !showPic(this);
      // return !initImg();
    };
  }
}

function initBox() {
  let img = document.createElement("img");
  img.setAttribute('id', "placeholder");
  img.setAttribute("src", "imgs/01.jpg");
  img.setAttribute("alt", "my image gallery");
  let desc = document.createElement("p");
  desc.setAttribute("id","description");
  let desctext = document.createTextNode("Choose an image");
  desc.appendChild(desctext);
  let gallery = document.getElementById("gallery");
  // gallery.parentNode.insertBefore(img, gallery);
  // gallery.parentNode.insertBefore(desc, gallery);
  insertAfter(img, gallery);
  insertAfter(desc, img);
}

function showPic(whichPic) {
  let placeholder = document.getElementById("placeholder");
  if (!placeholder) return false;
  let src = whichPic.getAttribute("href");
  placeholder.setAttribute("src", src);
  let description = document.getElementById("description");
  description.firstChild.nodeValue = whichPic.getAttribute("title");
  return true;
}

function countBodyChildren() {
  let bodyChildren = document.getElementsByTagName("body")[0];
  alert(bodyChildren.childNodes.length);
}

function insertAfter(newEle, targetEle) {
  let parent = targetEle.parentNode;
  if (parent.lastChild === targetEle) {
    targetEle.appendChild(newEle);
  }else {
    parent.insertBefore(newEle, targetEle.nextSibling);
  }
}
