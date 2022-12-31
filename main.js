// preloader script............
var audio = document.getElementById("audioPlayer");
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
})

// preloader script ends here.........

// switch for setting
function settingtoggle(){
  document.getElementById("setting-container").classList.toggle('settingactivate');
  document.getElementById("visualmodetogglebuttoncontainer").classList.toggle('visualmodeshow');
  document.getElementById("soundtogglebuttoncontainer").classList.toggle('soundmodeshow');
}
function playpause() {
  if (document.getElementById('switchforsound').checked == false) {
    audio.pause();
   }

 else{
     audio.play();
 }
  }

  function visualmode(){
    document.body.classList.toggle('light-mode');
    document.getElementById('labelforsound').classList.toggle('invertsoundlabel');
    document.querySelector('.about-heading-article').classList.toggle('heading-article-light');
    document.querySelector('.aboutHeadingP').classList.toggle('heading-article-light');

    document.querySelector('.skills-heading-article').classList.toggle('heading-article-light');
    document.querySelector('.skillsHeadingP').classList.toggle('heading-article-light');

    document.querySelector('.projects-heading-article').classList.toggle('heading-article-light');
    document.querySelector('.projectsHeadingP').classList.toggle('heading-article-light');
   
    document.querySelector('.frontend-dev-heading').classList.toggle('heading-article-light');
    document.querySelector('.designing-heading').classList.toggle('heading-article-light');
    document.querySelector('.languages-heading').classList.toggle('heading-article-light');

    document.getElementById('html').classList.toggle('language-gradient-class');
    document.getElementById('css').classList.toggle('language-gradient-class');
    document.getElementById('bootstrap').classList.toggle('language-gradient-class');
    document.getElementById('react').classList.toggle('language-gradient-class');
    document.getElementById('js').classList.toggle('language-gradient-class');
    document.getElementById('ap').classList.toggle('language-gradient-class');
    document.getElementById('canva').classList.toggle('language-gradient-class');
    document.getElementById('ai').classList.toggle('language-gradient-class');
    document.getElementById('c').classList.toggle('language-gradient-class');
    document.getElementById('cpp').classList.toggle('language-gradient-class');
    document.getElementById('project-box1').classList.toggle('language-gradient-class');
    document.getElementById('project-box2').classList.toggle('language-gradient-class');
  }
let emptyArea = document.getElementById("emptyarea");
 let mobileTogglemenu = document.getElementById("mobiletogglemenu");
// toggle menu by clicking on hamburger
function hamburgerMenu() {
    document.body.classList.toggle("stopscrolling");
 document.getElementById("mobiletogglemenu").classList.toggle("show-toggle-menu");
 document.getElementById("emptyarea").classList.toggle("blur-class");
document.getElementById("burger-bar1").classList.toggle("hamburger-animation1");
document.getElementById("burger-bar2").classList.toggle("hamburger-animation2");
document.getElementById("burger-bar3").classList.toggle("hamburger-animation3");
}
// close mobile toggle menu by clicking on LI
function hidemenubyli(){
document.body.classList.toggle("stopscrolling");
document.getElementById("mobiletogglemenu").classList.remove("show-toggle-menu");
document.getElementById("emptyarea").classList.remove("blur-class");
document.getElementById("burger-bar1").classList.remove("hamburger-animation1");
document.getElementById("burger-bar2").classList.remove("hamburger-animation2");
document.getElementById("burger-bar3").classList.remove("hamburger-animation3");
}

// close Mobile hamburger toggle menu while clicking in empty area
emptyArea.addEventListener('click',hidetogglemenu);
function hidetogglemenu(){
document.body.classList.remove("stopscrolling");
document.getElementById("mobiletogglemenu").classList.remove("show-toggle-menu");
document.getElementById("emptyarea").classList.remove("blur-class");
document.getElementById("burger-bar1").classList.remove("hamburger-animation1");
document.getElementById("burger-bar2").classList.remove("hamburger-animation2");
document.getElementById("burger-bar3").classList.remove("hamburger-animation3");
}

const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.navbar .navbar-tabs .navbar-tabs-ul a li');
const mobilenavLi = document.querySelectorAll('.mobiletogglemenu .mobile-navbar-tabs-ul a li');

window.addEventListener('scroll', ()=>{
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if(pageYOffset >= (sectionTop - 500)){
      current = section.getAttribute('id');
    }
  })

  mobilenavLi.forEach( li => {
    li.classList.remove('activeThismobiletab');
    if(li.classList.contains(current)){
      li.classList.add('activeThismobiletab')
    }
  })
navLi.forEach( li => {
  li.classList.remove('activeThistab');
  if(li.classList.contains(current)){
    li.classList.add('activeThistab')
  }
})
})
console.log('%c Designed and Developed by Vinod Jangid ', 'background: #000; color: green; padding:20px;');
