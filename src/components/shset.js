// import React from 'react'

export default function set() {
  document.getElementsByTagName("html")[0].style.height = "auto";
  document.getElementsByTagName("html")[0].style.minHeight = "auto";
  document.getElementsByTagName("body")[0].style.height = "auto";
  document.getElementsByTagName("body")[0].style.minHeight = "auto";
  document.getElementById("root").style.height = "auto";

  let eh = document.getElementById("root").getBoundingClientRect().height;
  let sh = window.screen.height;
  if (sh > eh) {
    document.getElementsByTagName("html")[0].style.height = "100%";
    document.getElementsByTagName("html")[0].style.minHeight = "100%";
    document.getElementsByTagName("body")[0].style.height = "100%";
    document.getElementsByTagName("body")[0].style.minHeight = "100%";
    document.getElementById("root").style.height = "100%";
  }
}
