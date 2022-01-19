
function add(){
    let inputName = document.getElementById("name").value;
    let inputClass = document.getElementById("class").value;
    let inputRoll = document.getElementById("roll").value;
    let tr = document.createElement('tr');

    let td1 = tr.appendChild(document.createElement('td'));
    let td2 = tr.appendChild(document.createElement('td'));
    let td3 = tr.appendChild(document.createElement('td'));
    let td4 = tr.appendChild(document.createElement('td'));

    td1.innerHTML = inputName;
    td2.innerHTML= inputClass;
    td3.innerHTML= inputRoll;
    td4.innerHTML= '<i class="fa fa-edit text" onclick="update(this)" style="font-size:36px; color:#ff4500"></i> &nbsp; <i class="fa fa-trash-o text" onclick="delet(this)" style="font-size:36px;color:#dc3545"></i>';
    document.getElementById('tbl').appendChild(tr);

    function clear(){
        document.getElementById("name").value='';
        document.getElementById("class").value='';
        document.getElementById("roll").value='';
        
    }
    clear();


}

function update(stud){
    let inputName = document.getElementById("name").value;
    let inputClass = document.getElementById("class").value;
    let inputRoll = document.getElementById("roll").value;
    var s = stud.parentNode.parentNode;
    let tr = document.createElement('tr');

    let td1 = tr.appendChild(document.createElement('td'));
    let td2 = tr.appendChild(document.createElement('td'));
    let td3 = tr.appendChild(document.createElement('td'));
    let td4 = tr.appendChild(document.createElement('td'));

    td1.innerHTML = '<input type="text"placeholder="Name"  id="name1" >';
    td2.innerHTML= '<input type="text"placeholder="Class" id="class1" >';
    td3.innerHTML= '<input type="text"placeholder="Roll" id="roll1">';
    td4.innerHTML= '<i class="fa fa-check text" onclick="addupdate(this)" style="font-size:36px; color:#198754"></i> &nbsp; <i class="fa fa-close text" onclick="delet(this)" style="font-size:36px;color:#dc3545"></i>';
    document.getElementById('tbl').replaceChild(tr,s);
}



function addupdate(stud){

    let inputName = document.getElementById("name1").value;
    let inputClass = document.getElementById("class1").value;
    let inputRoll = document.getElementById("roll1").value;
    var s = stud.parentNode.parentNode;
    let tr = document.createElement('tr');

    let td1 = tr.appendChild(document.createElement('td'));
    let td2 = tr.appendChild(document.createElement('td'));
    let td3 = tr.appendChild(document.createElement('td'));
    let td4 = tr.appendChild(document.createElement('td'));

    td1.innerHTML = inputName;
    td2.innerHTML= inputClass;
    td3.innerHTML= inputRoll;
    td4.innerHTML= '<i class="fa fa-edit text" onclick="update(this)" style="font-size:36px; color:#ff4500"></i> &nbsp; <i class="fa fa-trash-o text" onclick="delet(this)" style="font-size:36px;color:#dc3545"></i>';
    document.getElementById('tbl').replaceChild(tr,s);
}


function delet(stud){
    var s = stud.parentNode.parentNode;
    s.parentNode.removeChild(s);
}























