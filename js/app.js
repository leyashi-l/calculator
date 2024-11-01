if (window.jQuery) {
  let result = $(".calculate .result");
  $( ".nums li" ).on( "click", function() {
    console.log("work", this);
    let clickedText = $(this).text();
    let number = Number(clickedText);
    if (!isNaN(number) ||clickedText == "." ) {
      $(result).text($(result).text() + clickedText);
    }
    console.log(result);
  } );
} else {
  var Nk = 'neok';
  console.log(Nk);
}
