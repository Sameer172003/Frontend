let btn=document.querySelector("button");

btn.addEventListener("click",function(event){
    event.preventDefault();

    let user=document.querySelector("#user");
    let pass=document.querySelector("#pass");
    
    console.log(user.value);
    console.log(pass.value);

    alert(`Hi ${user.value}, your password is ${pass.value}`);
})