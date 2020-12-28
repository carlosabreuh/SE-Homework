let key = '53aa2cd6'
let movieTitle = 'Mad Max: Fury Road'

$(() => {
   $("button").click( (e) => {
       $("tbody#callData").empty();
       e.preventDefault()
       const userInput = $('input[type="text"]').val()
       const promise = $.ajax({
        url: "https://data.cityofnewyork.us/resource/erm2-nwe9.json"
       })
       
       promise.then(
           (data) => {
               console.log(data)
               $('#title').html(data.Title)
               $('#year').html(data.Year)
               $('#rated').html(data.Rated)
           },
           () => {
               console.log('bad request')
           }
       )
   })
})