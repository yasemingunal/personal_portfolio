var message = document.getElementById('contact-message');

message.style.height="75px";


function goResume(){
    window.location="assets/resume.pdf";
}

function goLinkedin(){
    window.location="https://www.linkedin.com/in/yasemin-gunal/";
}

function goPoster(){
    window.location="assets/FinalPosterPDF.pdf";
}

function goEPLGitHub(){
    window.location = "https://github.com/yasemingunal/premier_league_data_analysis";
}

function goGaleGitHub(){
    window.location = "https://github.com/yasemingunal/ReachGaleProject";
}


document.querySelector("#submit_button").addEventListener("click", function(){
    console.log("Selected a button on projects page");
    window.alert("You are about to submit this form. Press 'OK' to continue");
})
