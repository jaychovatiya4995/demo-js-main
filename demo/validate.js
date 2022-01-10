$(function(){
    var dtToday = new Date();

    var month = dtToday.getMonth() + 1;
    var day = dtToday.getDate();
    var year = dtToday.getFullYear();

    if(month < 10)
        month = '0' + month.toString();
    if(day < 10)
        day = '0' + day.toString();

    var maxDate = year + '-' + month + '-' + day;    
    // $('#txtDate').attr('max', maxDate);
    document.getElementById('txtDate').setAttribute("max", maxDate);
    // document.getElementsByName('birthday').setAttribute("max", maxDate);
});

const setError = (element, message) => {
    // debugger
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

function check_name(){
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var name = document.getElementsByName('username')[0];
    if(!regName.test(name.value)){
        setError(name, 'Please enter your full name (first & last name) And You can not use Special Charectur and numeric value.');
        return false;
    }else if(name.value == ""){
        setError(name, 'Username is required');
        return false;
    }else{
        setSuccess(name);
        return true;
    }

}

function check_email(){
    var email = document.getElementsByName('useremail')[0];
    var regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(!regEmail.test(email.value)){
        setError(email, 'enter valid email must be include "@" and "." ');
        return false;
    }else{
        setSuccess(email);
        return true;
    }
}

function check_birthdate(){
    var birthdate = document.getElementsByName('birthday')[0];
    if(birthdate.value == ""){
        setError(birthdate,'Please Select a birthdate');
        return false;
    }else{
        setSuccess(birthdate);
        return true;
    }
}

function check_hobby(){
    var hobby = document.getElementsByName('hobby');
    // var sport = document.getElementById('sport');
    // var traveling = document.getElementById('traveling');
    // var reading = document.getElementById('reading');
    hobby_message = document.getElementsByName('hobby_message')[0];
        
    if(!hobby[0].checked && !hobby[1].checked && !hobby[2].checked){
        setError(hobby_message, "You must select at least one option");
        return false;
    }else{
        setSuccess(hobby_message);
        return true;
    }
}

function check_gender(){
    // var male = document.getElementById('male');
    // var female = document.getElementById('female');
    // var other = document.getElementById('other');
    var gender_value= document.getElementsByName('gender');
    
    if(!gender_value[0].checked && !gender_value[1].checked && !gender_value[2].checked){
        setError(gender, "You must select at least one option");
        return false;
    }else{
        setSuccess(gender);
        return true;
    }
}

function check_country(){
    // var country = document.getElementById('countySel');
    var country = document.getElementsByName('country')[0];
    var message_country = document.getElementsByName("country_message")[0];
    
    if(country.options[country.selectedIndex].value == "" || country.options[country.selectedIndex].text == "Select Country"){
        setError(message_country, "Please select a country.");
        return false;
    }else{
        setSuccess(message_country);
        return true;
    }
}

function check_state(){
    // var state = document.getElementById('stateSel');
    var state = document.getElementsByName('state')[0];
    var message_state = document.getElementsByName("state_message")[0];

    if(state.options[state.selectedIndex].value == "" || state.options[state.selectedIndex].text == 'Select Country First'){
        setError(message_state, "Please Select state.(If you can not select country, then select country first.)");
        return false;
    }else{
        setSuccess(message_state);
        return true;
    }

}

function check_city(){
    var city = document.getElementsByName('cities')[0];
    var message_city= document.getElementsByName("city_message")[0];

    if(city.options[city.selectedIndex].value == "" || city.options[city.selectedIndex].text == 'Select State First'){
        setError(message_city, "Please Select City.(If you can't select country or state, then select country or state first.)");
        return false;
    }else{
        setSuccess(message_city)
        return true;
    }

}

function validate_from(){
    check_name()
    check_email()
    check_birthdate()
    check_gender()
    check_hobby()
    check_country()
    check_state()
    check_city()
    if(check_name() == true && check_email() == true && check_birthdate() == true && check_gender() == true && check_hobby() == true && check_country() == true && check_state() == true && check_city() == true){
        add()
    }
}       