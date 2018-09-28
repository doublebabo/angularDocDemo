var heigh = 'Don\'t ask me again';
// alert(heigh);
var arrays = Array(4);
arrays[0] = 'Mike';
arrays[1] = 'John';
arrays[2] = 'Ben';
arrays[3] = 2;
var beatles = [];
beatles[0] = arrays;
// alert(beatles[0][1] +','+ beatles);
// alert(arrays[3]+1);
var mood = 'I\'m very ';
var msg = mood + 'sad';
// alert(msg);
var a = false;
var b = '';
// if (a === b) {
//   alert('a equals b -1');
// }
// if (a == false) {
//   alert('a equals b -2');
// }
function square(num) {
  total = num * num;
  return total;
}
var total = 50;
var number = square(20);
// alert(total);

/////////////////////////////////////////
var shopping = document.getElementById('purchases');
// alert(typeof shopping);
// alert(document.getElementsByTagName("li").length);
var items = shopping.getElementsByTagName("li");
// for (var i = 0; i < items.length;i++){
//   alert(typeof items[i] );
// }
// alert(items.length);

var paras = document.getElementsByTagName("p");
