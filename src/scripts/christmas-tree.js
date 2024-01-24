AFRAME.registerComponent('tree-interaction', {
    init: function() {
      let tree = this.el;
      let song = document.querySelector('#tree-horn');
      let isPlaying = false;
  
      this.toggleSoundAndAnimation = function() {
        if (isPlaying) {
          song.pause();
          song.currentTime = 0;
          tree.emit('stopAnimation');
          isPlaying = false;
        } else {
          song.play();
          tree.emit('startAnimation');
          isPlaying = true;
        }
      };
  
      this.el.addEventListener('click', this.toggleSoundAndAnimation);
    },
    remove: function() {
      this.el.removeEventListener('click', this.toggleSoundAndAnimation);
    }
  });
  