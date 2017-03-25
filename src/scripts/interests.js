import interests from '../data/interests.json';

for (let i = 0; i < 3; i++) {
  $('#interests').append(`<div class="input-field col s4">`);
}

interests.sports.forEach((interest, i) => {
  $('#interests').children().eq(i % 3).append(`
    <p>
      <input type="checkbox" class="filled-in" id="filled-in-box-${i}" checked="checked" />
      <label for="filled-in-box-${i}">${interest}</label>
    </p>
  `);
});
