$(()=>{
    const team1 = new Team('team1', $('#team1')).setup();
    const team2 = new Team('team2', $('#team2')).setup();
    const team3 = new Team('team3', $('#team3')).setup();
    console.log(team1.$el); //confirm the element is working
    
    const $tiles = $('.tile').on('click', (event)=>{
      $(event.currentTarget).toggleClass('active')  
      //step 1 - - Change the value with the tile that's clicked on. 
      console.log($(event.currentTarget).text().split(/\s+/)[1].slice(1));
      const currentTileValue = Number($(event.currentTarget).text().split(/\s+/)[1].slice(1));
      // -Number- > Treat it like a number
      
      //step 2 - - change the ckick handler
      team1.increaseBy = currentTileValue;
      team2.increaseBy = currentTileValue;
      team3.increaseBy = currentTileValue;

    })
})


class Team {
    constructor(name, $el){
        this.name = name;
        this.score = 0;
        //lets assign the element to each Team instance
        this.$el = $el;
        this.increaseBy = 100;
        
    }
    //what does the score board do?
    //it increases the score based on pointvalue
    increaseScore(pointValue){
     // this.score = this.score + pointValue;
     this.score += pointValue;
     //this will now allow us to grab the 1st element and input the score as the text
     //what is eq? it stands for equals and selects children in arry
     // the first child is the h1
     this.$el.children().eq(0).text(this.score);
    }

    decreaseScore(pointValue){
        this.score -= pointValue;
        this.$el.children().eq(0).text(this.score);
    }
    setup(){
        //select your 2nd child because thats your btn
        this.$el.children().eq(1).on('click', () => {
            //the pt value should be imported from another class
            this.increaseScore(this.increaseBy)

        })
        this.$el.children().eq(2).on('click', () => {
            this.decreaseScore(this.increaseBy)
            
        })
        //remember to call these methods when you instantiate the class
        return this;
    }

}
