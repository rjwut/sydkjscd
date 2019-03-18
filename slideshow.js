$(() => {
  var slideIndex = 0;
  $(document).on('keydown', (ev) => {
    if (ev.keyCode === 39) { // right
      next();
    } else if (ev.keyCode === 37) { // left
      prev();
    }
  });

  function next() {
    hide(slideIndex++);
    show(slideIndex);
  }

  function prev() {
    hide(slideIndex--);
    show(slideIndex);
  }

  function show(index) {
    var $s = $slide(index);
    $s.addClass('visible');
    setTimeout(() => {
      $s.addClass('fadeIn');
    }, 1);
  }

  function hide(index) {
    var $s = $slide(index);
    $s.removeClass('fadeIn');
    setTimeout(() => {
      $s.removeClass('visible');
    }, 1500);
  }

  function $slide(index) {
    return $('article > section').eq(index);
  }
});
