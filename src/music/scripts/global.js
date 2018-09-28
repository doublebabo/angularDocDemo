window.onload = addEventLoad;
addEventLoad(highLightPage);

function addEventLoad(ev) {
  let oldLoad = window.onload;
  if (typeof oldLoad !== 'function') {
    window.onload = oldLoad;
  } else {
    window.onload = function () {
      oldLoad();
      ev();
    }
  }
}

function insertAfter(newEle,targetEle) {
  let parent = targetEle.parentNode;
  if (parent.lastChild === targetEle) {
    parent.appendChild(newEle);
  }else {
    parent.insertBefore(newEle,targetEle.nextSibling)
  }
}

function addClass(ele,val) {
  if (ele.className) {
    ele.className = val;
  }else {
    newClassName  = ele.className;
    newClassName += " ";
    newClassName += val;
    ele.className = newClassName
  }
}

function highLightPage() {
  let headers = document.getElementsByTagName("header")[0];
  let nav = headers.getElementsByTagName("nav")[0];
  let links = nav.getElementsByTagName("a");
  for (let i = 0; i < links.length; i++) {
    const link = links[i];
    if (window.location.href.indexOf(link.getAttribute("href")) !== -1) {
      link.className="here";
      document.body.setAttribute("id", link.lastChild.nodeValue.toLowerCase());
    }
  }
}
