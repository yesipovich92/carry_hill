function complete() {
    var Elem="Your first name: " + document.send.first.value +
        "\nYour last name: " + document.send.second.value +
        "\nYour email: " + document.send.email.value +
        "\nYour message " + document.send.question.value;
    var result=confirm(Elem);
    if (result!=true) {
        event.preventDefault();
    }
}