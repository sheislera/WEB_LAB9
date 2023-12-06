function print_pib() {
    var input_course = document.getElementById("course");
    var input_group = document.getElementById("group");
    var input_surname = document.getElementById("surname");
    var course = parseInt(input_course.value);
    var group = input_group.value;
    var surname = input_surname.value;
    var is_equal, output;
    is_equal = parseInt(group.toString().charAt(0)) === course;
    if (is_equal) {
        output = "Студент(-ка) " + surname + " , група " + group + " , " + course + " курс.";
    } else {
        output = "Курс не відповідає групі";
    }
    var html = "";
    html = html + "<p>" + output + "</p>"
    document.getElementById('result_pib').innerHTML = html;
}


function clear_all() {

    var html = "<p> </p>"
    document.getElementById('result_pib').innerHTML = html;
}


