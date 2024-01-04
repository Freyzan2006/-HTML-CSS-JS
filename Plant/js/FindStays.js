const MAIN_left_GUI = document.querySelectorAll(".MAIN_left_GUI")
const MAIN_left_GUI_i = document.querySelectorAll(".MAIN_left_GUI_i")


MAIN_left_GUI.forEach(el => {
    el.addEventListener('click', () => {
            if (el.classList.length == 1) {
                el.classList.add("active");
                el.style.width = "100%";
                el.style.height = "200px";

                

            } else {
                el.classList.remove("active");
                el.style.width = "100%";
                el.style.height = "20px"; 
            }
        })
});
        
        
MAIN_left_GUI_i.forEach(el => {
    
});       
                
                   
   



