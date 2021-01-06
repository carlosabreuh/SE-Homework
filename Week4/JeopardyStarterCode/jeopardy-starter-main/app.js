$(()=>{
    const $tiles = $('.tile').on('click', (event)=>{
      $(event.currentTarget).toggleClass('active')  
    })
})

