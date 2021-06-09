var  GetUserName = prompt("Hello! Wo are you? Please provide your name: ");

console.log(GetUserName)

document.getElementById ("showusername").innerText = GetUserName;


//tooltip

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
