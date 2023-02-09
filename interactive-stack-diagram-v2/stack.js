// querySelectorAll utility
const getEls = (elmement, parent = document) =>
  parent.querySelectorAll(elmement);

// querySelector utility
const getEl = (elmement, parent = document) => parent.querySelector(elmement);

//   map range utility
Number.prototype.map = function (in_min, in_max, out_min, out_max) {
  return ((this - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

// get all selector elements
// todo: make these check-boxes or buttons in HTML
const selectors = getEls(".option");

// set gradient stop offsets
const setStops = (stops) => {
  stops.forEach((stop, i) => {
    const s = i.map(0, stops.length - 1, 0, 1);
    stop.setAttribute("offset", s);
  });
};

// add or remove gradient stops and set gradient color
const paint = (target, color, add) => {
  const paintTargets = getEls(`.${target}`);
  paintTargets.forEach((el) => {
    if (add) {
      el.innerHTML += `<stop class="stop-${target}" stop-color="${color}"/>`;
    } else {
      el.removeChild(getEl(`.stop-${target}`, el));
    }

    // get current gradients stops
    const stops = getEls("stop", el);
    // set current gradients stops
    setStops(stops);
  });
};

// click toggle tech-stack fills
selectors.forEach((selector) => {
  // set check colors for active state
  const color = selector.dataset.color;
  const check = selector.querySelector(".check");
  check.style.color = color;
  const target = `paint-${selector.dataset.attr}`;

  if (selector.classList.contains("active")) {
    paint(target, color, true);
  }

  selector.addEventListener("click", () => {
    let add = true;
    if (selector.classList.contains("active")) {
      add = false;
      selector.classList.remove("active");
    } else {
      selector.classList.add("active");
    }

    paint(target, color, add);
  });
});
