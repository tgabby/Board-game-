function shuffleArray(array) {
   for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
 }
}

$(document).ready(function(){
  var color_arry = ['black', 'orange', 'blue', 'red', 'yellow', 'green', 'pink', 'purple', 'black', 'orange', 'blue', 'red', 'yellow', 'green', 'pink', 'purple']; 
  var last_indx = 17; // Any number outside the array index limit 
  var even_click = 0; // To check if it is even (2nd/4th) click to be used to close the tiles.
  var total_clicks = 0; //To calculate the total clicks used.

  $('.newgame').click(function(){
    //Reset the game.
    $('.playbox').attr('class', 'playbox');
    shuffleArray(color_arry);
    last_indx = 17;
    even_click = 0;
  });

  $('.playbox').click(function(){
var indx = parseInt($(this).attr('id').substring(2)) - 1; //Box id starts with "pb1" while the array index from 0.
$(this).addClass(color_arry[indx]); //i added the color class to current element
    $(this).addClass('flipped'); //i added flipped class to identify how many tiles have flipped.
    //alert(last_indx + " - " + indx);
    if(last_indx != indx) { //Do not do any thing if current tile is clicked again.
      //alert(last_indx);
      if(last_indx != 17){
        if(color_arry[indx] != color_arry[last_indx]) {
        setTimeout(function(){
        $('#pb' + (last_indx + 1).toString()).attr('class', 'playbox');
        $('#pb' + (indx + 1).toString()).attr('class', 'playbox');
        last_indx = even_click == 0 ? indx : 17;
        }, 200);
    }
    else {
        last_indx = 17;
      if($('.playbox.flipped').length == 16)
        alert('Congrats! You found all the matched in ' + total_clicks + ' clicks!!')
    }
    }
    else {
        last_indx = indx;
    }
    even_click = even_click == 0 ? 1 : 0;
    total_clicks += 1;
  }
});

  $('.newgame').click();
});