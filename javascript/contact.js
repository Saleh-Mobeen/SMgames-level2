//send



(function () {
    emailjs.init({
        publicKey: "_Y4uc1pofjA9f3pEW",
    });
})();

const submit = document.getElementById('submit')



function sendEmail() {
    emailjs.send("service_irnsb7c", "template_f1ytmzs", { name: formValues.name, email: formValues.email, subject: formValues.subject, message: formValues.message }).then(function (response) {

        submit.value = "sent ✔"
        submit.style.pointerEvents = 'none'

        console.log(response);
    }, function (error) {

        submit.value = "message can't be sent"
        submit.style.pointerEvents = 'none'

        setTimeout(() => {
            submit.value = "send"
            submit.style.pointerEvents = 'all'
        }, 3000)

        console.log(error);
    });
}


const form = document.getElementById('form')
let formValues = {};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    submit.value = "sending..."
    submit.style.pointerEvents = "none"
    const inputs = form.querySelectorAll('input, textarea');


    for (var i = 0; i < inputs.length; i++) {
        formValues[inputs[i].name] = inputs[i].value;
    }

    console.log(formValues);
    sendEmail()
})








