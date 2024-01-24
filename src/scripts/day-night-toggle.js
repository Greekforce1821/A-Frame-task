AFRAME.registerComponent('day-night-toggle', {
  init: function() {
    this.el.sceneEl.addEventListener('loaded', () => {
      this.el.addEventListener('click', this.toggleDayNight);
    });
  },
  toggleDayNight: function() {
    var sceneEl = document.querySelector('a-scene');
    var environment = sceneEl.components.environment; 

    if (environment) {
      var currentPreset = environment.attrValue.preset;

      if(currentPreset === 'default' || currentPreset === 'none') {
        sceneEl.setAttribute('environment', 'preset: starry');
      } else {
        sceneEl.setAttribute('environment', 'preset: default');
      }
    } else {
      console.error('Environment component is not found on the scene.');
    }
  }
});
