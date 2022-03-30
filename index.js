const themeSwitch = document.getElementById("Themeswitch");
const innerThemeSwitch = document.getElementById("innerThemeswitch");

themeSwitch.addEventListener("change", function(){
    if(themeSwitch.checked){
        document.body.classList.add("dark");
        innerThemeSwitch.checked = true;
    }else{
        document.body.classList.remove("dark");
        innerThemeSwitch.checked = false;
    }
});