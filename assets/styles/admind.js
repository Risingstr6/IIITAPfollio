const body = document.querySelector("body"),
      modeToggle = body.querySelector(".mode-toggle");
      sidebar = body.querySelector("nav");
      sidebarToggle = body.querySelector(".sidebar-toggle");

let getMode = localStorage.getItem("mode");
if(getMode && getMode ==="dark"){
    body.classList.toggle("dark");
}

let getStatus = localStorage.getItem("status");
if(getStatus && getStatus ==="close"){
    sidebar.classList.toggle("close");
}

modeToggle.addEventListener("click", () =>{
    body.classList.toggle("dark");
    if(body.classList.contains("dark")){
        localStorage.setItem("mode", "dark");
    }else{
        localStorage.setItem("mode", "light");
    }
});

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if(sidebar.classList.contains("close")){
        localStorage.setItem("status", "close");
    }else{
        localStorage.setItem("status", "open");
    }
})

function openValidate(){
    var popup=document.getElementById("popup");
    var blurBack=document.getElementById("toBlur");
    blurBack.classList.toggle("blur")
    popup.classList.remove("scale-out-center")
    popup.classList.toggle("scale-in-center")
    popup.style.display="block";  
  }

  function openDecline(){
    var popup=document.getElementById("popup1");
    var blurBack=document.getElementById("toBlur");
    blurBack.classList.toggle("blur")
    popup.classList.remove("scale-out-center")
    popup.classList.toggle("scale-in-center")
    popup.style.display="block";
  }

  function openSearch(){
    var popup=document.getElementById("popup2");
    var blurBack=document.getElementById("toBlur");
    blurBack.classList.toggle("blur")
    popup.classList.remove("scale-out-center")
    popup.classList.toggle("scale-in-center")
    popup.style.display="block";
  }

  function closeValidate(){
    var popup=document.getElementById("popup");
    var blurBack=document.getElementById("toBlur");
    blurBack.classList.toggle("blur")
    popup.classList.toggle("scale-in-center")
    popup.classList.toggle("scale-out-center")
  }

  function closeDecline(){
    var popup=document.getElementById("popup1");
    var blurBack=document.getElementById("toBlur");
    blurBack.classList.toggle("blur")
    popup.classList.toggle("scale-in-center")
    popup.classList.toggle("scale-out-center")
  }

  function closeSearch(){
    var popup=document.getElementById("popup2");
    var blurBack=document.getElementById("toBlur");
    blurBack.classList.toggle("blur")
    popup.classList.toggle("scale-in-center")
    popup.classList.toggle("scale-out-center")
  }

  function submitValidate(){
    document.getElementById("v-form").submit();
  }

  function submitDecline(){
    document.getElementById("d-form").submit();
  }

  function submitSearch(){
    document.getElementById("s-form").submit();
  }