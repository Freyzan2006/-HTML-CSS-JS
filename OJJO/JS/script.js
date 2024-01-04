const menu_search_inp = document.getElementById("menu_search_inp");
const menu_search_btn = document.getElementById("menu_search_btn");

menu_search_btn.onclick = () => {
    if(menu_search_inp.id != "menu_search_inp_active") {
        menu_search_inp.id = "menu_search_inp_active";
        return true;
    } else {
        menu_search_inp.id = "menu_search_inp";
        return true;
    }
}


