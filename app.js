// function add(){
//     let inputName = document.getElementById("name").value;
//     let inputClass = document.getElementById("class").value;
    
//     let tr = document.createElement('tr');

//     let td1 = tr.appendChild(document.createElement('td'));
//     let td2 = tr.appendChild(document.createElement('td'));

//     td1.innerHTML = inputName;
//     td2.innerHTML= inputClass;
//     document.getElementById('tbl').appendChild(tr);
// }


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
    td4.innerHTML= '<i class="fa fa-edit text" style="font-size:36px; color:#ff4500"></i> &nbsp; <i class="fa fa-trash-o text" onclick="delet(this)" style="font-size:36px;color:#dc3545"></i>';
    document.getElementById('tbl').appendChild(tr);


}
function delet(){
    console.log("j")
}























