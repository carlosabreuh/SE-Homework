const toDoList = [];


const completeButton = "<br> <button type = 'submit'> COMPLETE </button>";
const removeButton = "<br> <button type = 'submit'> REMOVE </button>";	


$('form').on('submit', (event) => {
  console.log( $('#input-box').val() );

  toDoList.push( $('#input-box').val() );

  event.preventDefault();
  $(event.currentTarget).trigger('reset');

  render("#toDoUL",toDoList);
});



const render = (listID,arrList)=>{
	arrLength = arrList.length - 1;
	console.log(arrLength);
    $(listID).append(`<li id = ${arrLength}> ${arrList[arrLength]} ${completeButton} </li>`);
    $('li').on('click', (event) =>{
    	$(event.currentTarget).css('text-decoration', 'line-through');
    });
}