/*start for control coading*/
var addBtn=document.querySelector("#add-btn");
var modal= document.querySelector(".modal");
var closeBtn=document.querySelector(".close-icon")
addBtn.onclick=function(){
   modal.classList.add("active");
}
closeBtn.addEventListener("click",()=>{
  modal.classList.remove("active") 
})

/*start all global variable*/

var userData=[];
var idEl=document.getElementById("id");
var nameEl = document.querySelector("#Name"); // Corrected ID selection
var l_nameEl = document.getElementById("l_name"); // Corrected ID selection
var officeEl = document.querySelector("#office-code");
var emailEl = document.querySelector("#email");
var jobTitleEl = document.querySelector("#job-title");
var registerBtn = document.querySelector("#register-btn");
var registerForm = document.querySelector("#register-form");

/*end all global variable*/

/*start register coading*/

registerBtn.onclick = function(e) {
    e.preventDefault();
    registrationData();
    getDataFromLocal();
    registerForm.reset('');
    closeBtn.click();   
}
if (localStorge.getItem("userData") != null)
{userData= JSON.parse(localStorage.getItem("userData"));
}


function registrationData(){
   userData.push({  
      id : idEl.value,
      name : nameEl.value,
      l_name : l_nameEl.value,
      email : emailEl.value,
      officecode :  officeEl.value,
      jobtitle : jobTitleEl.value,
   });
   var userString=JSON.stringify(userData);
   localStorage.setItem("userData",userString);

}
// start returning data on page from localstorage
var tableData=document.querySelector("#table-data");
const getDataFromLocal = () =>{
   tableData.innerHTML = "";
   userData.forEach (( data, index)=>{
     tableData.innerHTML += `
     <tr>
            <td>hello</td>
            <td>hello</td>
            <td>hello</td>
            <td>hello</td>
            <td>hello</td>
            <td>hello</td>
            <td>hello</td>
            <td>hello</td>
            <td>
                <button ><i class="fa fa-eye"></i></button>
                <button style="background-color: #ee534f;"><i class="fa fa-trash"></i></button>
            </td>

        </tr>
     
     `;
   })
}
getDataFromLocal();


