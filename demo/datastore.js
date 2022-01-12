$(document).ready(function () {

show_recordes();

});


var all_data = [
        {
            current_time : 'January 6, 2022',
            name : 'abhi',
            email : 'abhi@gmail.com',
            birthdate : '2000-01-14',
            gender : 'male',
            hobby : ['reading'],
            country : 'India',
            state : 'Gujarat',
            city : 'Surat' 
        },
        {
            current_time : 'January 6, 2022',
            name : 'abhishek savaliya',
            email : 'abhi@gmail.com',
            birthdate : '2006-01-14',
            gender : 'male',
            hobby : ['reading'],
            country : 'India',
            state : 'Gujarat',
            city : 'Surat'
        }
    ];


function show_recordes(){
// data show in table view
    data = all_data
    console.log(data);
    function _calculateAge(yy,mm,dd) { // birthday is as date
        var birthdate = new Date(yy,mm,dd)
        var ageDifMs = Date.now() - birthdate.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

   


    var myTable= "<table name='mytable' class='table mt-4 table-bordered table-striped table-hover table-dark'>"; 
        myTable+= "<tr>"; 
        
        header_name = ['Name','Email','Age','Gender','Hobby','Country','State','City','Action']
            for(i=0; i < header_name.length; i++){
            myTable+= "<td style='width: 100px; color: red; text-align: center;'>" + header_name[i] + "</td>";
            }

        myTable+="</tr>";
        
    for (var key in data) {
        birthday = String(data[key].birthdate)
        yy = birthday.slice(0,4)
        mm = birthday.slice(5,7)
        dd = birthday.slice(8)
    
        age = _calculateAge(yy,mm,dd)

        myTable+="<tr>";
            myTable+="<td name='g_name' style='width: 100px;'>" + data[key].name + " </td>";
            myTable+="<td name='g_email' style='width: 100px; text-align: right;'>" + data[key].email + "</td>";
            myTable+="<td name='g_age' style='width: 100px; text-align: right;'>" + age + "</td>";
            myTable+="<td name='g_gender' style='width: 100px; text-align: right;'>" + data[key].gender + "</td>";
            myTable+="<td name='g_hobby' style='width: 100px; text-align: right;'>" + data[key].hobby + "</td>";
            myTable+="<td name='g_country' style='width: 100px; text-align: right;'>" + data[key].country + "</td>";
            myTable+="<td name='g_state' style='width: 100px; text-align: right;'>" + data[key].state + "</td>";
            myTable+="<td name='g_city' style='width: 100px; text-align: right;'>" + data[key].city + "</td>";
            myTable+="<td style='width: 200px; text-align: center;'>" +
                "<button type='button' id='edit' onclick='edit(this)' class='btn btn-outline-primary'>Edit</button>" +
                "<button type='button' id='delete' onclick='_delete(this)' class='btn btn-outline-danger m-1'>Delete</button>" +
            "</td>"

        myTable+="</tr>";
    }  
    myTable+="</table>";

    document.getElementById("v").innerHTML = (myTable);
}

// delete record
function _delete(x){
    // console.log('delete')
    cell = x.closest('td')
    row = cell.closest('tr')
    _rowIndex = row.rowIndex - 1;
    all_data.splice(_rowIndex, 1);
    show_recordes();
}

function _clear(){
    // console.log('clear');
    clear = document.getElementsByName('clear')[0]
    if(clear.value == 'Clear'){
    document.querySelector('form').reset();
    }else{
        document.querySelector('form').reset();

        document.getElementsByName('save')[0].value = 'Save'
        document.getElementsByName('clear')[0].value = 'Clear'
    }
}

function add(){
    save_update = document.getElementsByName('save')[0];

    var current_time  = new Date().getTime();
    var name = document.getElementsByName('username')[0].value;
    var email = document.getElementsByName('useremail')[0].value;
    var brithdate = document.getElementById('txtDate').value;
    var gender =  $("input[type='radio'][name='gender']:checked").val();
    // if (document.getElementById('gender').checked) {
    //     gender = document.getElementById('gender').value;
    //   } 

    // var hobby = document.getElementsByName('hobby').values;
    var hobby = document.querySelectorAll('.form-check-input:checked');
    selected_hobby = []
    for(let i = 0; i < hobby.length; i++){
        selected_hobby[i] = hobby[i].value;
    }
    // var hobby = document.querySelectorAll('input[name=hobby]:checked').val();   
    var country = document.getElementsByName('country')[0].value;
    var state = document.getElementsByName('state')[0].value;
    var city = document.getElementsByName('cities')[0].value;

    record = ({'current_time':current_time,
                    'name':name,
                    'email':email,
                    'birthdate':brithdate,
                    'gender':gender,
                    'hobby':selected_hobby,
                    'country':country,
                    'state':state,
                    'city':city});

    if(save_update.value == 'Save'){
        all_data.push(record);
    }else{
        all_data[_rowIndex] = record;
    }
    
    show_recordes();
    _clear();
}

function edit(x){
    cell = x.closest('td')
    row = cell.closest('tr');
    _rowIndex = row.rowIndex - 1;
    
    document.getElementsByName('save')[0].value = "Update"
    document.getElementsByName('clear')[0].value = "Cancle"

    get_name = document.getElementsByName('g_name')[_rowIndex].innerText;
    document.getElementsByName('username')[0].value = get_name;

    get_email = document.getElementsByName('g_email')[_rowIndex].innerText;
    document.getElementsByName('useremail')[0].value = get_email;

    // get_age = document.getElementsByName('g_age')[_rowIndex].innerText;
    // get_birthdate = document.querySelector('input[type="date"][name="birthday"]');
    get_birthdate = all_data[_rowIndex].birthdate
    document.querySelector('input[type="date"][name="birthday"]').value = get_birthdate;

    
    get_gender = document.getElementsByName('g_gender')[_rowIndex].innerText;
    gender = document.getElementsByName('gender');
    if(gender[0].value == get_gender){
        gender[0].checked = true;
    }else if(gender[1].value == get_gender){
        gender[1].checked = true;
    }else{
        gender[2].checked =true;
    }


    get_hobby = document.getElementsByName('g_hobby')[_rowIndex].innerText;
    hobby = document.getElementsByName('hobby');
    hobby_array = get_hobby.split(",")
    if(hobby[0].value == hobby_array[0]){
        hobby[0].checked = true;
    }
    if(hobby[1].value == hobby_array[1]){
        hobby[1].checked = true;
    }
    if(hobby[2].value == hobby_array[2]){
        hobby[2].checked = true;
    }


    get_country = document.getElementsByName('g_country')[_rowIndex].innerText;
    document.getElementsByName('country')[0].value = get_country;

    get_state = document.getElementsByName('g_state')[_rowIndex].innerText;
    countySel.onchange();
    document.getElementsByName('state')[0].value = get_state;
    
    // document.querySelector('select[name="state"]').value = get_state;

    get_city = document.getElementsByName('g_city')[_rowIndex].innerText;
    stateSel.onchange();
    document.getElementsByName('cities')[0].value = get_city;
}

function search(){
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementsByName("search")[0];
    filter = input.value.toUpperCase();
    table = document.getElementById("mytable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
        txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}