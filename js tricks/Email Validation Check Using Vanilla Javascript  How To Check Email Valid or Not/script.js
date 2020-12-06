function validation() {
    let form = document.querySelector('#form');
    let email = document.querySelector('#email').value;
    let text = document.querySelector('#text');
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
    } else {
        form.classList.remove("valid");
        form.classList.add("invalid");
    }
}