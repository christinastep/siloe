document.addEventListener("DOMContentLoaded", function(event) {
  let windowHeight=document.windowHeight;
  let headerLinks=document.querySelectorAll(".header a");
  let headerLogo=document.querySelector(".header__logo");
  let header=document.querySelector(".header");

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  var openContact = document.querySelectorAll('[data-contact="open"]');
  var contactContainer =document.querySelector(".contact")

  var buttonContact= document.querySelector(".button--close");
  for (let i = 0; i < openContact.length; i++) {
    const openContactButton = openContact[i];

    openContactButton.addEventListener("click",function(){
      contactContainer.style.transform="translateY(0)";
    })
    buttonContact.addEventListener("click",function(){
      contactContainer.style.transform="translateY(-100%)"
    })
  }

  for (let i = 0; i < headerLinks.length; i++) {
    const headerLink = headerLinks[i];
    headerLink.addEventListener("click",function(){
      header.style.padding="10px 20px 10px 20px";
      console.log(headerLink.getAttribute("data-link"));
      clickCounter =0;
      if(headerLink.getAttribute("data-link"!="contact")){
        contactContainer.style.transform="translateY(-100%)";
      }
      linkContainer.style.transform="translateY(-100%)";
      
      headerLogo.style.stroke="#000";
      header.style.backgroundColor="#fff";
      for (let i = 0; i < headerLinks.length; i++) {
        const headerLink = headerLinks[i];
        headerLink.style.color="#000"
      }
    })
    
  }

  let linkButton = document.querySelector(".button--link");
  let linkContainer = document.querySelector(".linkSection");
  let clickCounter =0;

  linkButton.addEventListener("click",function(){

      console.log(clickCounter);
    
    if(clickCounter===0){
      linkContainer.style.transform="translateY(0)";
      clickCounter=1;
      console.log("premiere click");
    }else if(clickCounter===1){
      linkContainer.style.transform="translateY(-100%)";
      clickCounter=0;
      console.log("secont click");
    }
  });


  if(!!window.IntersectionObserver){

    let options = {
      rootMargin: "0% 0px -100% 0px"
    };

    let observer = new IntersectionObserver((entries, observer) => { 
      entries.forEach(entry => {
      if(entry.isIntersecting){
        console.log(entry.target);

        let headerColor=entry.target.getAttribute('data-logo')
        if(headerColor==="main"){
          for (let i = 0; i < headerLinks.length; i++) {
            const headerLink = headerLinks[i];
            headerLink.style.color="#000"
          }
          headerLogo.style.stroke="#000";
          header.style.backgroundColor="#fff";
          header.style.padding="10px 20px 10px 20px"
        }else if(headerColor==="intro"){
          for (let i = 0; i < headerLinks.length; i++) {
            const headerLink = headerLinks[i];
            headerLink.style.color="#fff"
          }
          headerLogo.style.stroke="#fff";
          header.style.backgroundColor="transparent";
          header.style.padding="20px"
          
        }
      }
      });
    },options);
    document.querySelectorAll('[data-logo]').forEach(img => { observer.observe(img) });
  }

  else document.querySelector('#warning').style.display = 'block';

});