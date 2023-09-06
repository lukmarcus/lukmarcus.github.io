window.onload = function () {
  window.parent.postMessage(
    { type: "size", height: document.body.scrollHeight, width: document.body.scrollWidth },
    "*"
  );
};
