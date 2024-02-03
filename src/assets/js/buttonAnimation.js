const CLASS_MOUSEOUT_BUTTON = 'active';
const spans = document.querySelectorAll('.button-link span');

spans.forEach(span => {

  span.addEventListener('mouseout', function() {
    span.classList.add(CLASS_MOUSEOUT_BUTTON);
  });

  span.addEventListener('mouseover', function() {
    span.classList.remove(CLASS_MOUSEOUT_BUTTON);
  });

});
