var f = document.getElementById('feet');
var i = document.getElementById('inches');

f.addEventListener('input', function () {
  var j = this.value;
  i.value = j * 12;
});
i.addEventListener('input', function () {
  var j = this.value;
  f.value = j/12;
});