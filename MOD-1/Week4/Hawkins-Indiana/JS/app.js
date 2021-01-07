// $('#submit-btn').on('click', () => {
//     console.log('$(#input-box').val();
// });


$('form').on('submit', (event) => { 
    console.log($('#input-box').val());
    event.preventDefault();
});


























// // console.log("Stanger things are coming!!!");
// // $(() => () {}
// // const addH2 = () => {
// //     let $h2 = $('<h2>').text("Just getting started");
// //     $('body').append($h2);
// // }


// // addH2();

// $.ajax({
//     url: 'http://www.omdbapi.com/?apikey'
// })