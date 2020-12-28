//Window onload
$(() => {
  //Listener for add button below Things to Do.
  $('form').on('submit', function (e) { // e for Empty form
    //Prevented the form from submitting
    e.preventDefault();  // Stops the object from dissapearing after the input text is entered. 
    //Created a list to store the todo items
    let $createdList = $(`
                <li>
                <p>${$('#input-box').val()}</p>
                
                </li>
            `);
    // Makes the "task to complete"  #8ac926 
    $createdList.css('background-color', '#8ac926');
    //Reset the input box to clear the content so you can add more todo items
    $(e.currentTarget).trigger('reset');
    //Add edthe remove button to the todo list item
    let remove = $(Remove()).click(
      //Anonymous function to allow you to target the parent of the input which is the the current todo list item
      function () {
        let list = $(this).parent();
        list.fadeOut(function () {
          list.remove();
        });
      }
    );
    //Added an input button to remove the completed task and add the pink style
    let complete = $(
      "<input type='submit' value='COMPLETED' id='completed'class='btn btn-secondary'/>"
    ).click(function () {
      var list2 = $(this).parent();
      list2.fadeOut(function () {
        $createdList.css('background-color', '#3d405b');
        $('#complete').append(list2);
        $createdList.append(remove);
        list2.fadeIn();
      });
      $(this).remove();
    });
    //Added the completed list item to the list
    $createdList.append(complete);
    //Added the created list item to the todo list
    $('#todo').append($createdList);
  });
});
function Remove() {
  return "<input type='submit' value='REMOVE' id='remove'class='btn btn-secondary'/>";
}

