let timeInputEl = document.getElementById('timeInput');
let convertBtnEl = document.getElementById('convertBtn');

convertBtnEl.addEventListener('click', function () {
  let time = timeInputEl.value;

  function convertTo24hrs(time) {
    let hrs = time.slice(0, 2);
    let mins = time.slice(3, 5);
    let M = time.slice(5, 8);
    if (M === 'PM') {
      let newHrs = parseInt(hrs);
      let convertedTime = 12 + newHrs;
      if (convertedTime >= 24) {
        convertedTime = '12';
      }
      document.getElementById('output').innerHTML = `${convertedTime}:${mins}`;
    } else {
      let newHrs = parseInt(hrs);
      if (newHrs === 12) {
        hrs = '00';
      }
      document.getElementById('output').innerHTML = `${hrs}:${mins}`;
    }
  }

  convertTo24hrs(time);
});
