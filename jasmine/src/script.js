function validateName(name) {
    var nameReg = /^[A-Za-z ]+$/;

    if(name == ""){
        $('#nameLabel').after('<span class="error"> Please enter your name</span>');
        return false;
    } else if(name.replace(/\s+/g, ' ') == " ") {
        $('#subjectLabel').after('<span class="error"> Please enter a Subject for your message</span>');
        return false;
    } else if(!nameReg.test(name)){
        $('#nameLabel').after('<span class="error"> Letters only</span>');
        return false;
    } else { return true; }
}

function validateEmail(email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

    if(email == ""){
        $('#emailLabel').after('<span class="error"> Please enter your email</span>');
        return false;
    } 
    else if(!emailReg.test(email)){
        $('#emailLabel').after('<span class="error"> Please enter a valid email address</span>');
        return false;
    } else { return true; }
}

function validateSubject(subject) {
    var subjectReg = /^[A-Za-z0-9 ]+$/;

    if(subject == ""){
        $('#subjectLabel').after('<span class="error"> Please enter a Subject for your message</span>');
        return false;
    }  else if(subject.replace(/\s+/g, ' ') == " ") {
        $('#subjectLabel').after('<span class="error"> Please enter a Subject for your message</span>');
        return false;
    } else if(!subjectReg.test(subject)){
        $('#subjectLabel').after('<span class="error"> Letters or numbers only</span>');
        return false;
    } else { return true; }
}

function validateMessage(message) {
    if(message == ""){
        $('#messageLabel').after('<span class="error"> Please enter your message</span>');
        return false;
    } else if(message.replace(/\s+/g, ' ') == " ") {
        $('#subjectLabel').after('<span class="error"> Please enter your message. Cannot read spaces alone!</span>');
        return false;
    } else { return true; }
}