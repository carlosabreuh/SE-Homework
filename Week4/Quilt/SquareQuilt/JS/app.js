const generateSquares = (numberOfSquares) => {
    for (let i = 1; i <=numberOfSquares; i++) {
           console.log(i);
           const $square = $('<div>').addClass('square');
           $square.css('background-color', randColorRGB());
           //$square.text(i);
           $('body').append($square);
    }
}
      $(() => {
        generateSquares(1000);
 });

 const randColorRGB = ()=> {
   const red = Math.floor(Math.random() *256 );
   const green = Math.floor(Math.random() *256 );
   const blue = Math.floor(Math.random() *256 );
   console.log(red);
   console.log(green);
   console.log(blue);
   return "rgb(" + red+ ", " +green+ ", " +blue+ ")";

 }