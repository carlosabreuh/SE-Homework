window.addEventListener('DOMContentLoaded', documentLoaded);

function documentLoaded() {
    document.getElementsByClassName("editable-in-place")[0].addEventListener("click", clicked);;
}

function clicked(evt) {
    // get the <input> and check if it is hidden
    var input = this.querySelector("input");
    var label = this.querySelector("div");

    if (evt.target === input) {
        // if user clicked on <input> do nothing, he is editing

    } else if (evt.target === label) {
        // <input> was hidden, make it visible
        input.classList.remove("hide");

        // and hide the label
        label.classList.add("hide");

        // fill the <input> with the text from the label
        input.value = label.innerHTML;

        // adicionar o listener para detectar o fim da edicao com "ENTER"
        input.addEventListener("keydown", function keydown(evt) {

            // 13 is the code for ENTER
            if (evt.keyCode === 13) {
                label.innerHTML = input.value;
                label.classList.remove("hide");
                input.classList.add("hide");

                // its important to remove the keydown listener, otherwise in a subsequent edit
                // we will end up with several keydown listeners running
                input.removeEventListener("keydown", keydown);
            }

        });
        input.focus();
    } else {
        // <input> was visible, hide it without modifying the value
        input.classList.add("hide");

        // show the label
        label.classList.remove("hide");
    }

}