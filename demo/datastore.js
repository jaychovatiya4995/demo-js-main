$(document).ready(function () {
console.log('data')
all_data = [
        {
            current_time : ['January 6, 2022'],
            name : ['abhi'],
            email : ['abhi@gmail.com'],
            birthdate : ['14-01-2000'],
            gender : ['male'],
            hobby : ['reading'],
            country : ['India'],
            state : ['Gujarat'],
            city : ['Surat'] 
        },
        {
            current_time : ['January 6, 2022'],
            name : ['abhi'],
            email : ['abhi@gmail.com'],
            birthdate : ['14-01-2001'],
            gender : ['male'],
            hobby : ['reading'],
            country : ['India'],
            state : ['Gujarat'],
            city : ['Surat'] 
        },
    ]

// data show in table view
data = all_data

function _calculateAge(yy,mm,dd) { // birthday is a date
    var birthdate = new Date(yy,mm,dd)
    var ageDifMs = Date.now() - birthdate.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}


var myTable= "<table class='table mt-4 table-bordered table-striped table-hover table-dark'>"; 
    myTable+= "<tr>"; 
        myTable+= "<td style='width: 100px; color: red; text-align: right;'>Name</td>";
        myTable+="<td style='width: 100px; color: red; text-align: right;'>Email</td>";
        myTable+="<td style='width: 100px; color: red;'>Age</td>";
        myTable+="<td style='width: 100px; color: red;'>Gender</td>";
        myTable+="<td style='width: 100px; color: red;'>Hobby</td>";
        myTable+="<td style='width: 100px; color: red;'>Country</td>";
        myTable+="<td style='width: 100px; color: red;'>State</td>";
        myTable+="<td style='width: 100px; color: red;'>City</td>";
        myTable+="<td style='width: 200px; color: red;'>Action</td>";
    myTable+="</tr>";
    
  for (var key in data) {
    birthday = String(data[key].birthdate)
    yy = birthday.slice(6)
    mm = birthday.slice(3,5)
    dd = birthday.slice(0,2)
    
    age = _calculateAge(yy,mm,dd)

    myTable+="<tr>";
        myTable+="<td style='width: 100px;'>" + data[key].name + " </td>";
        myTable+="<td style='width: 100px; text-align: right;'>" + data[key].email + "</td>";
        myTable+="<td style='width: 100px; text-align: right;'>" + age + "</td>";
        myTable+="<td style='width: 100px; text-align: right;'>" + data[key].gender + "</td>";
        myTable+="<td style='width: 100px; text-align: right;'>" + data[key].hobby + "</td>";
        myTable+="<td style='width: 100px; text-align: right;'>" + data[key].country + "</td>";
        myTable+="<td style='width: 100px; text-align: right;'>" + data[key].state + "</td>";
        myTable+="<td style='width: 100px; text-align: right;'>" + data[key].city + "</td>";
        myTable+="<td style='width: 200px; text-align: center;'>" +
            "<button type='button' id='edit' class='btn btn-outline-primary'>Edit</button>" +
            "<button type='button' id='delete' class='btn btn-outline-danger m-1'>Delete</button>" +
        "</td>"

    myTable+="</tr>";
  }  
   myTable+="</table>";

 document.getElementById("v").innerHTML = (myTable);

});

// delete record
function _delete(){
    console.log('clear')
}


// data add into all_data using ajax
// $('#send').submit('click',function(){
//     console.log('Add function');
//     var current_time = new Date().getTime(),
//         name = $('#name').val(),
//         email = $('#email').val(),
//         brithdate = $('#txtDate').val(),
//         gender = $("input[type='radio'][name='gender']:checked").val(),
//         hobby = document.querySelector('.messageCheckbox:checked').value,
//         country = $('#countySel').val(),
//         state = $('#stateSel').val(),
//         city = $('#districtSel').val();
    
//     console.log(current_time,name,email,brithdate,gender,hobby,country,state,city);
// });

function add(){
    console.log('Add function');
    var current_time  = new Date().getTime();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var brithdate = document.getElementById('txtDate');
    var gender =  $("input[type='radio'][name='gender']:checked").val();
    // if (document.getElementById('gender').checked) {
    //     gender = document.getElementById('gender').value;
    //   } 
    var hobby = document.getElementsByClassName('.messageCheckbox:checked').value;
    var country = document.getElementById('countySel').value;
    var state = document.getElementById('stateSel').value;
    var city = document.getElementById('districtSel').value;

    // console.log(current_time,name,email,brithdate,gender,hobby,country,state,city)
}