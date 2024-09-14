modalAnimationStartSubscribe = () => 
  document.addEventListener('animationstart', function (e) {
  if (e.animationName === 'fade-in') {
    e.target.classList.add('faded');
  }
});

modalAnimationEndSubscribe = () => 
  document.addEventListener('animationend', function (e) {
  if (e.animationName === 'fade-out') {
    e.target.classList.remove('faded');
  }
});

modalAnimationStartSubscribe();
modalAnimationEndSubscribe();