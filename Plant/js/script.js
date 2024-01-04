const btn_user = document.querySelector(".btn_user");
const Page_User = document.querySelector(".Page_User")

btn_user.addEventListener('click', () => {
    if (Page_User.classList.length != 2) {
        Page_User.style.transform = "translateX(-100%)";
        Page_User.classList.add("active");
    } else {
        Page_User.style.transform = "translateY(-200%)";
        Page_User.classList.remove("active");
    }
});

Page_User.addEventListener('click', () => {
    Page_User.style.transform = "translateY(-200%)";
    Page_User.classList.remove("active");
})