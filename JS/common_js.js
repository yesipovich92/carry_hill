function question1() {
    var result=confirm("do you want to open the timetable?");
    if (result!=true) {
        event.preventDefault();
    }
}