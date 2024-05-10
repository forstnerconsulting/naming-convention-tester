
const resultservice = document.getElementById("resultservice");
const resultusergroup = document.getElementById("resultusergroup");
const BU = new RegExp("^[A-Z]{4}$")
const LOC = new RegExp("^[A-Z]{3}$")
const Section = new RegExp("^(?=.{2,8}$)[A-Za-z0-9]+-?[A-Za-z0-9]+$")
const Branch = new RegExp("^(?=.{1,8}$)[A-Za-z0-9]+-?[A-Za-z0-9]+$")
const Business = new RegExp("^(?=.{1,32}$)[A-Za-z0-9][A-Za-z0-9-]*$")
const Language = new RegExp("^[A-Z]{2}$")
const AgentLevel = new RegExp("^[0-9]$|^[1]0$")
const TeamNumber = new RegExp("^[0-9][0-9]?$")

var service = null;
var usergroup = null;



function checkServiceName(){

    service = document.getElementById("service").value;
    usergroup = document.getElementById("usergroup").value;

    let arrservice = service.split("_")
    resExec = BU.exec(arrservice[0])
    console.log(resExec)
    resultservice.innerHTML = '';
    if (!resExec) { resultservice.insertAdjacentHTML("beforeend", '<div class="invalid">BU: ' + arrservice[0] + ' is not valid!</div>')}
    else   {
        resultservice.insertAdjacentHTML("beforeend",'<div class="valid">BU: ' + arrservice[0] + ' is valid!</div>')
    }
    
    resExec = LOC.exec(arrservice[1])
    console.log(resExec)
    if (!resExec) { resultservice.insertAdjacentHTML("beforeend", '<div class="invalid">Location: ' + arrservice[1] + ' is not valid!</div>')}
    else   {
        resultservice.insertAdjacentHTML("beforeend",'<div class="valid">Location: ' + arrservice[1] + ' is valid!</div>')
    }
  
    resExec = Section.exec(arrservice[2])
    console.log(resExec)
    if (!resExec) { resultservice.insertAdjacentHTML("beforeend", '<div class="invalid">Section: ' + arrservice[2] + ' is not valid!</div>')}
    else   {
        resultservice.insertAdjacentHTML("beforeend",'<div class="valid">Section: ' + arrservice[2] + ' is valid!</div>')
    }
  
    resExec = Branch.exec(arrservice[3])
    console.log(resExec)
    if (!resExec) { resultservice.insertAdjacentHTML("beforeend", '<div class="invalid">Branch: ' + arrservice[3] + ' is not valid!</div>')}
    else   {
        resultservice.insertAdjacentHTML("beforeend",'<div class="valid">Branch: ' + arrservice[3] + ' is valid!</div>')
    }
  
    resExec = Business.exec(arrservice[4])
    console.log(resExec)
    if (!resExec) { resultservice.insertAdjacentHTML("beforeend", '<div class="invalid">Business: ' + arrservice[4] + ' is not valid!</div>')}
    else   {
        resultservice.insertAdjacentHTML("beforeend",'<div class="valid">Business: ' + arrservice[4] + ' is valid!</div>')
    }
  
    resExec = Language.exec(arrservice[5])
    console.log(resExec)
    if (!resExec) { resultservice.insertAdjacentHTML("beforeend", '<div class="invalid">Language: ' + arrservice[5] + ' is not valid!</div>')}
    else   {
        resultservice.insertAdjacentHTML("beforeend",'<div class="valid">Language: ' + arrservice[5] + ' is valid!</div>')
    }

    resExec = AgentLevel.exec(arrservice[6])
    console.log(resExec)
    if (!resExec) { resultservice.insertAdjacentHTML("beforeend", '<div class="invalid">Agent Level: ' + arrservice[6] + ' is not valid!</div>')}
    else   {
        resultservice.insertAdjacentHTML("beforeend",'<div class="valid">Agent Level: ' + arrservice[6] + ' is valid!</div>')
    }

}



function checkUserGroupName(){
    usergroup = document.getElementById("usergroup").value;

    let arrservice = usergroup.split("_")
    resExec = BU.exec(arrservice[0])
    console.log(resExec)
    resultusergroup.innerHTML = '';
    if (!resExec) { resultusergroup.insertAdjacentHTML("beforeend", '<div class="invalid">BU: ' + arrservice[0] + ' is not valid!</div>')}
    else   {
        resultusergroup.insertAdjacentHTML("beforeend",'<div class="valid">BU: ' + arrservice[0] + ' is valid!</div>')
    }
    
    resExec = LOC.exec(arrservice[1])
    console.log(resExec)
    if (!resExec) { resultusergroup.insertAdjacentHTML("beforeend", '<div class="invalid">Location: ' + arrservice[1] + ' is not valid!</div>')}
    else   {
        resultusergroup.insertAdjacentHTML("beforeend",'<div class="valid">Location: ' + arrservice[1] + ' is valid!</div>')
    }
  
    resExec = Section.exec(arrservice[2])
    console.log(resExec)
    if (!resExec) { resultusergroup.insertAdjacentHTML("beforeend", '<div class="invalid">Section: ' + arrservice[2] + ' is not valid!</div>')}
    else   {
        resultusergroup.insertAdjacentHTML("beforeend",'<div class="valid">Section: ' + arrservice[2] + ' is valid!</div>')
    }
  
    resExec = Branch.exec(arrservice[3])
    console.log(resExec)
    if (!resExec) { resultusergroup.insertAdjacentHTML("beforeend", '<div class="invalid">Branch: ' + arrservice[3] + ' is not valid!</div>')}
    else   {
        resultusergroup.insertAdjacentHTML("beforeend",'<div class="valid">Branch: ' + arrservice[3] + ' is valid!</div>')
    }
  
    resExec = TeamNumber.exec(arrservice[4])
    console.log(resExec)
    if (!resExec) { resultusergroup.insertAdjacentHTML("beforeend", '<div class="invalid">Team Number: ' + arrservice[4] + ' is not valid!</div>')}
    else   {
        resultusergroup.insertAdjacentHTML("beforeend",'<div class="valid">Team Number: ' + arrservice[4] + ' is valid!</div>')
    }

}