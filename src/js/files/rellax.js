import Rellax from 'rellax';

var rellax = new Rellax('.rellax', {
  speed: 4,
  center: true,
  vertical: true,
  horizontal: false,
});

var rellaxP = new Rellax('.rellax-p', {
  speed: 4,
  center: true,
  vertical: true,
  horizontal: false,
});

var rellaxW = new Rellax('.rellax-w', {
  speed: 4,
  center: true,
  vertical: true,
  horizontal: false,
});

if (window.innerWidth <= 500) {
  rellaxP.destroy();
  rellaxW.destroy();
}