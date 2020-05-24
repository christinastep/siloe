document.addEventListener("DOMContentLoaded", function(event) {
  let windowHeight=document.windowHeight;
  let headerLinks=document.querySelectorAll(".header a");
  let headerLogo=document.querySelector(".header__logo");
  let header=document.querySelector(".header");

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