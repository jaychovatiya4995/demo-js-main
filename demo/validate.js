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
    debugger
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

function check_address(){
    var status = document.getElementById('address');
    var country = document.getElementsByName('country');
    var state = document.getElementsByName('state');
    var city = document.getElementsByName('cities');

    if(country.value == "" || country.value != "Select Country"){
        setError(status, "Please select a country.")
    }else{
        setSuccess(country)
    }

    if(state.value == '' || state.value == 'Select Country First'){
        setError(status, "Please Select state.")
    }else{
        setSuccess(state)
    }

    if(city.value == '' || city.value == 'Select State First'){
        setError(status, "Please Select City.")
    }else{
        setSuccess(city)
    }
}