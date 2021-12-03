var mlopsChart = document.querySelector('.mlops-stack-interactive-chart');
if (mlopsChart) {

  // querySelectorAll utility
  var getEls = function getEls(elmement) {
    var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
    return parent.querySelectorAll(elmement);
  };

  // querySelector utility
  var getEl = function getEl(elmement) {
    var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
    return parent.querySelector(elmement);
  };

  //   map range utility
  Number.prototype.map = function (in_min, in_max, out_min, out_max) {
    return ((this - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };

  // get all selector elements
  var selectors = getEls(".option");

  // set gradient stop offsets
  var setStops = function setStops(stops) {
    stops.forEach(function (stop, i) {
      const s = i.map(0, stops.length - 1, 0, 1);
      stop.setAttribute("offset", s);
    });
  };

  // add or remove gradient stops and set gradient color
  var paint = function paint(target, color, add) {
    var paintTargets = getEls(".".concat(target));
    paintTargets.forEach(function (el) {
      if (add) {
        el.innerHTML += "<stop class=\"stop-".concat(target, "\" stop-color=\"").concat(color, "\"/>");
      } else {
        el.removeChild(getEl(".stop-".concat(target), el));
      }

      // get current gradients stops
      var stops = getEls("stop", el);

      // set current gradients stops
      setStops(stops);
    });
  };

  // click toggle tech-stack fills
  selectors.forEach(function (selector) {
    // set check colors for active state
    var color = selector.dataset.color;
    var check = selector.querySelector(".check");
    check.style.color = color;
    var target = "paint-".concat(selector.dataset.attr);
    selector.addEventListener("click", function () {
      var add = true;

      if (selector.classList.contains("active")) {
        add = false;
        selector.classList.remove("active");
      } else {
        selector.classList.add("active");
      }

      paint(target, color, add);
    });
  });
}