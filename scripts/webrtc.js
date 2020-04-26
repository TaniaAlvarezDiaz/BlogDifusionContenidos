window.onload = function() {
    //Variables
    const IMAGES = [
        "./images/webrtc_server_case_login.JPG",
        "./images/webrtc_server_case_offer.JPG",
        "./images/webrtc_server_case_answer.JPG",
        "./images/webrtc_server_case_candidate.JPG",
        "./images/webrtc_server_case_leave.JPG"
    ]

    const ALTS = [
        "Evento 'message', mensaje 'login'",
        "Evento 'message', mensaje 'offer'",
        "Evento 'message', mensaje 'answer'",
        "Evento 'message', mensaje 'candidate'",
        "Evento 'message', mensaje 'leave'"
    ]

    const FIGCAPTIONS = [
        "Evento <b>message</b> - Mensaje <b>login</b>",
        "Evento <b>message</b> - Mensaje <b>offer</b>",
        "Evento <b>message</b> - Mensaje <b>answer</b>",
        "Evento <b>message</b> - Mensaje <b>candidate</b>",
        "Evento <b>message</b> - Mensaje <b>leave</b>",
    ]

    let currentPosition = 0;
    let previousButton = document.querySelector('#previousButton');
    let nextButton = document.querySelector('#nextButton');
    let image = document.querySelector('#image');
    let figcaption = this.document.querySelector('#figcaptionCarrusel');

    //Events
    nextButton.addEventListener('click', nextImage);
    previousButton.addEventListener('click', backImage);

    //Start
    previousButton.style.visibility = 'hidden';
    renderImage();
    
    //Functions
    /**
     * Function that changes the photo in the next position
     */
    function nextImage() {
        currentPosition++;

        //Do visible previusButton
        if (previousButton.style.visibility == 'hidden') {
            previousButton.style.visibility = 'visible'
        }

        //If last position, disable nextButton
        if (currentPosition >= IMAGES.length - 1) {
            nextButton.style.visibility = 'hidden';
        }

        renderImage();
    }

    /**
     * Function that changes the photo in the previous position
     */
    function backImage() {
        currentPosition--;

        //Do visible nextButton
        if (nextButton.style.visibility == 'hidden') {
            nextButton.style.visibility = 'visible'
        }

        //If first position, disable previousButton
        if(currentPosition <= 0)  {
            previousButton.style.visibility = 'hidden'
        }

        renderImage();
    }

    /**
     * Function that updates the image image depending on current position
     */
    function renderImage() {
        image.style.backgroundImage = `url(${IMAGES[currentPosition]})`;
        image.alt = ALTS[currentPosition];
        figcaption.innerHTML = FIGCAPTIONS[currentPosition];
    }
}