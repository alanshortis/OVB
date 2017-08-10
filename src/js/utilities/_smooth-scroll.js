function scroll(element, duration, topOffSet) {
  topOffSet = (!topOffSet) ? 0 : topOffSet;
	var startingY = window.pageYOffset,
      elementY = (window.pageYOffset + document.querySelector(element).getBoundingClientRect().top) - topOffSet,
	    diff = elementY - startingY,
      easing = function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 },
      start;

  if (diff <= 0.5 && diff >= -0.5)
    return;

	window.requestAnimationFrame(function step(timestamp) {
    if (!start) {
      start = timestamp;
    }

    var time = timestamp - start,
        percent = easing(Math.min(time / duration, 1));

    window.scrollTo(0, startingY + diff * percent)
    if (time < duration) {
      window.requestAnimationFrame(step)
    }
  });
}


module.exports = {
  scroll: scroll
};
