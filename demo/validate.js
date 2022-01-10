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
    $('#txtDate').attr('max', maxDate);
});

const setError = (element, message) => {
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
    var name = document.getElementById('name');
    if(!regName.test(name.value)){
        setError(name, 'Please enter your full name (first & last name) And You can not use Special Charectur and numeric value.');
    }else if(name.value == ""){
        setError(name, 'Username is required');
    }else{
        setSuccess(name);
    }

}

function check_email(){
    var email = document.getElementById('email');
    var regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(!regEmail.test(email.value)){
        setError(email, 'enter valid email must be include "@" and "." ');
    }else{
        setSuccess(email);
    }
}

function check_birthdate(){
    var birthdate = document.getElementById('txtDate');
    if(birthdate.value == ""){
        setError(birthdate,'Please Select a birthdate')
    }else{
        setSuccess(birthdate)
    }
}

function check_hobby(){
    var hobby = document.getElementById('hobby');
    var sport = document.getElementById('sport');
    var traveling = document.getElementById('traveling');
    var reading = document.getElementById('reading');
        
    if(!sport.checked && !traveling.checked && !reading.checked){
        setError(hobby, "You must select at least one option");
    }else{
        setSuccess(hobby);
    }
}

function check_gender(){
    var male = document.getElementById('male');
    var female = document.getElementById('female');
    var other = document.getElementById('other');
    
    if(!male.checked && !female.checked && !other.checked){
        setError(gender, "You must select at least one option");
    }else{
        setSuccess(gender)
    }
}

function check_country(){
    var country = document.getElementById('countySel');
    var message_country = document.getElementById("country");
    
    if(country.options[country.selectedIndex].value == "" || country.options[country.selectedIndex].text == "Select Country"){
        setError(message_country, "Please select a country.")
    }else{
        setSuccess(message_country)
    }
}

function check_state(){
    var state = document.getElementById('stateSel');
    var message_state = document.getElementById("state");

    if(state.options[state.selectedIndex].value == "" || state.options[state.selectedIndex].text == 'Select Country First'){
        setError(message_state, "Please Select state.(If you can not select country, then select country first.)")
    }else{
        setSuccess(message_state)
    }

}

function check_city(){
    var city = document.getElementById('districtSel');
    var message_city= document.getElementById("city");

    if(city.options[city.selectedIndex].value == "" || city.options[city.selectedIndex].text == 'Select State First'){
        setError(message_city, "Please Select City.(If you can't select country or state, then select country or state first.)")
    }else{
        setSuccess(message_city)
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
}