var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word) {
  return word.length;
});

function map (array, action) {
var output = [];

for (var i = 0; i < array.length; i++) {
  var result = action(array[i]);
  output.push(result)
  }
  console.log(output)
}

