$(() => {

/* Exercise Begin */
// Grabbing About the game button
const $openBtn = $('#openModal');

// Grabbing modal element
const $modal = $('#modal');

// Grabbing close button
const $closeBtn = $('#close');

// Event Hhandler to open the modal
const openModal = () => {
    $modal.css('display', 'block')
}

// Adding Event Listener
$openBtn.on('click', openModal);



/* Exercise End */

}); 