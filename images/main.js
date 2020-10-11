'use strict';

const prev = document.getElementById('panel-head');
const next = document.getElementsByClassName('panel-add');

prev.addEventListener('click' , function() {
  if (next == true) {
    prev.classList.remove("panel-add");
    // prev.classList.abb("fa - angle - up")
  } else {
    let a = document.getElementById('panel-head');
    a.classList.add("panel-add");
  }
});
