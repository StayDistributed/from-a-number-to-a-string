var fantas = new Fantas();

window.onload = function() {
  document.getElementById("input").addEventListener("keyup", function(e) {
    var num = parseFloat(e.target.value);
    document.getElementById("stringified").innerHTML = fantas.transform(num);
  });
};
