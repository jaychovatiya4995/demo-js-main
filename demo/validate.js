$(function () {
    var dt_today = new Date();

    var month = dt_today.getMonth() + 1;
    var day = dt_today.getDate();
    var year = dt_today.getFullYear();

    if (month < 10)
        month = '0' + month.toString();
    if (day < 10)
        day = '0' + day.toString();

    var max_date = year + '-' + month + '-' + day;
    $('.birthdate').attr('max', max_date);
    // document.getElementById('txtDate').setAttribute("max", max_date);
    // document.getElementsByName('birthday').setAttribute("max", max_date);
});

const set_error = (element, message) => {
    // debugger
    const input_control = element.parentElement;
    const error_display = input_control.querySelector('.error');

    error_display.innerText = message;
    input_control.classList.add('error');
    // input_control.classList.remove('success')
}

const set_success = element => {
    const input_control = element.parentElement;
    const error_display = input_control.querySelector('.error');

    error_display.innerText = '';
    // input_control.classList.add('success');
    input_control.classList.remove('error');
};

function check_name() {
    var reg_name = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var name = document.getElementsByName('username')[0];
    if (!reg_name.test(name.value)) {
        set_error(name, 'Please enter your full name (first & last name) And You can not use special charectur and numeric value.');
        return false;
    } else {
        set_success(name);
        return true;
    }
}

function check_email() {
    var email = document.getElementsByName('useremail')[0];
    var reg_email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (!reg_email.test(email.value)) {
        set_error(email, 'Enter valid email must be include "@" and "." ');
        return false;
    } else {
        set_success(email);
        return true;
    }
}

function check_birthdate() {
    var birthdate = document.getElementsByName('birthday')[0];
    if (birthdate.value == "") {
        set_error(birthdate, 'Please select a birthdate');
        return false;
    } else {
        set_success(birthdate);
        return true;
    }
}

function check_hobby() {
    var hobby = document.getElementsByName('hobby');
    hobby_message = document.getElementsByName('hobby_message')[0];

    if (!hobby[0].checked && !hobby[1].checked && !hobby[2].checked) {
        set_error(hobby_message, "You must select at least one option");
        return false;
    } else {
        set_success(hobby_message);
        return true;
    }
}

function check_gender() {
    var gender_value = document.getElementsByName('gender');
    var message_gender = document.getElementsByName("gender_message")[0];

    if (!gender_value[0].checked && !gender_value[1].checked && !gender_value[2].checked) {
        set_error(message_gender, "You must select at least one option");
        return false;
    } else {
        set_success(message_gender);
        return true;
    }
}

function check_country() {
    var country = document.getElementsByName('country')[0];
    var message_country = document.getElementsByName("country_message")[0];

    if (country.options[country.selectedIndex].value == "" || country.options[country.selectedIndex].text == "Select Country") {
        set_error(message_country, "Please select a country.");
        return false;
    } else {
        set_success(message_country);
        return true;
    }
}

function check_state() {
    var state = document.getElementsByName('state')[0];
    var message_state = document.getElementsByName("state_message")[0];

    if (state.options[state.selectedIndex].value == "" || state.options[state.selectedIndex].text == 'Select Country First') {
        set_error(message_state, "Please select state.(If you can not select country, then select country first.)");
        return false;
    } else {
        set_success(message_state);
        return true;
    }

}

function check_city() {
    var city = document.getElementsByName('cities')[0];
    var message_city = document.getElementsByName("city_message")[0];

    if (city.options[city.selectedIndex].value == "" || city.options[city.selectedIndex].text == 'Select State First') {
        set_error(message_city, "Please select city.(If you can't select country or state, then select country or state first.)");
        return false;
    } else {
        set_success(message_city)
        return true;
    }

}

function validate_from() {
    check_name()
    check_email()
    check_birthdate()
    check_gender()
    check_hobby()
    check_country()
    check_state()
    check_city()
    if (check_name() == true && check_email() == true && check_birthdate() == true && check_gender() == true && check_hobby() == true && check_country() == true && check_state() == true && check_city() == true) {
        _add()
    }
}       