/* =========================================
   WEDDING COUNTDOWN
========================================= */

const weddingDate = new Date("October 23, 2026 15:00:00").getTime();


function updateCountdown() {

    const now = new Date().getTime();

    const difference = weddingDate - now;


    if (difference <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;

    }


    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );


    const minutes = Math.floor(
        (difference % (1000 * 60 * 60))
        / (1000 * 60)
    );


    const seconds = Math.floor(
        (difference % (1000 * 60))
        / 1000
    );


    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");

}


updateCountdown();

setInterval(updateCountdown, 1000);


/* =========================================
   RSVP
========================================= */

const rsvpForm = document.getElementById("rsvpForm");

const rsvpSuccess = document.getElementById("rsvpSuccess");


rsvpForm.addEventListener("submit", function(event) {

    event.preventDefault();


    /*
       TEMPORARY:

       This currently shows the confirmation
       message without sending the information
       anywhere.

       In the next step we will connect this form
       to Google Sheets.
    */


    rsvpForm.style.display = "none";

    rsvpSuccess.style.display = "block";


    rsvpSuccess.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});