// password show / hide button 
const pw = document.querySelector('.pw');
const show_btn = document.querySelector('.show');

show_btn.addEventListener('click',function(){
    if(pw.type == "password"){
        pw.type = "text";
        show_btn.textContent = "Hide"
    }
    else{
        pw.type = "password";
        show_btn.innerHTML = "Show"
    }
})