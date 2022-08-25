import Rellax from 'rellax';

var rellax = new Rellax('.rellax', {
  speed: 4,
  center: true,
  vertical: true,
  horizontal: false,
});

var rellaxIc = new Rellax('.rellax-ic', {});

if (window.innerWidth <= 500) {
  rellax.destroy();
}