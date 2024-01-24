AFRAME.registerComponent('olive-mover', {
  init: function() {
    let el = this.el;
    let oliveClickSound = document.querySelector('#olive-click');
    let maxWalks = 4;
    let walks = 0;

    this.animateMove = function() {
      if (walks < maxWalks) {
        let currPosition = el.getAttribute('position');
        let params = {
          property: 'position',
          to: {
            x: currPosition.x + 1,
            y: currPosition.y,
            z: currPosition.z
          },
          dur: 5000,
          easing: 'easeInOutElastic'
        };
        el.setAttribute('animation', params);
        oliveClickSound.play();
        walks++;
      }
    }

    this.el.addEventListener('click', this.animateMove);
  },
  remove: function() {
    this.el.removeEventListener('click', this.animateMove);
  }
});
