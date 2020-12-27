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

const closeModal = () => {
    $modal.css('display', 'none');
}

// Add event listener to About the Game button
$openBtn.on('click', openModal);

$closeBtn.on('click', closeModal);

setTimeout(openModal, 5000);
/* Exercise End */

}); 