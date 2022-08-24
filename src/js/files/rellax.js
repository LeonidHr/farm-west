import Rellax from 'rellax';

var rellax = new Rellax('.rellax', {
  breakpoints:[480, 768, 1201],
  speed: 4,
  center: true,
  round: true,
  vertical: true,
  horizontal: false,
});

var rellaxIc = new Rellax('.rellax-ic', {});