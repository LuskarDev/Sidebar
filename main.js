const menu = document.getElementById('menu')

const texta = document.querySelectorAll("nav ul li p")

const section = document.querySelector('section')

const NameCargo = document.querySelector(".name-cargo")

const ImgLogo = document.querySelector(".opacity")

const ImgUser = document.getElementById("user")




function showSidebar() {
    ImgLogo.classList.toggle("showOpacity")
    ImgUser.classList.toggle("showUser")
    NameCargo.classList.toggle("ShowCargo")
    section.classList.toggle("showSidebar");
   for (const P of texta) {
            P.classList.toggle("showP");
        }
        

}
 