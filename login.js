const potan = document.querySelector('.login');
const hidepopup = document.querySelector('.pop-up .close')
const pupop = document.querySelector(".pop-up");
const links =document.querySelectorAll(".box .link a");

potan.addEventListener("click", () =>{
    document.body.classList.toggle("real-popup");        //new chiz sikhi hai ye mene
pupop.classList.remove("showup");
});

hidepopup.addEventListener("click",() => potan.click());

links.forEach(link => {
    link.addEventListener("click", (e) =>{
        e.preventDefault();
        pupop.classList[link.id === "signup-link" ? 'add' : 'remove']("showup")
    });
});

