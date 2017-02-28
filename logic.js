/**
 * Created by sophia on 2/27/17.
 */
document.addEventListener("DOMContentLoaded", function () {

  const controls = document.querySelectorAll('input');

  function onChange() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.title}`, this.value + suffix);
  }

  controls.forEach(function(input) {
    input.addEventListener('change', onChange);
    input.addEventListener('mousemove', onChange);
  })

});