import interests from '../data/interests.json';

let custom;
let title;

$('.interest').click(function () {
  $('#category').text(this.id[0].toUpperCase() + this.id.substring(1));
  custom = interests[this.id];

  for (let i = 0; i < 3; i++) {
    $('#interests').append(`<div class="input-field col s4">`);
  }

  custom.forEach((interest, i) => {
    $('#interests').children().eq(i % 3).append(`
      <p>
        <input type="checkbox" class="filled-in" id="filled-in-box-${i}" checked="checked" />
        <label for="filled-in-box-${i}">${interest}</label>
      </p>
    `);
  });
});
