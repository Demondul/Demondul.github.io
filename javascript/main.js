const Home = document.getElementById('Home');
const About = document.getElementById('About');
const third = document.getElementById('Third');
const Skills = document.getElementById('Skills');
const fifth = document.getElementById('Fifth');
const Projects = document.getElementById('Projects');
const seventh = document.getElementById('Seventh');
const Contact = document.getElementById('Contact')

window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    Home.style.backgroundPositionY = offset * -0.25 + "px";
});

window.addEventListener("scroll", function (){
    if(Home.offsetWidth>420){
        let offset = window.pageYOffset - (Home.offsetHeight + About.offsetHeight);
        third.style.backgroundPositionY = offset * -0.25 + "px";
    }
});

window.addEventListener("scroll", function (){
    if(Home.offsetWidth>420){
        let offset = window.pageYOffset - (Home.offsetHeight + About.offsetHeight + third.offsetHeight + Skills.offsetHeight);
        fifth.style.backgroundPositionY = offset * -0.25 + "px";
    }
});

window.addEventListener("scroll", function (){
    if(Home.offsetWidth>420){
        let offset = window.pageYOffset - (Home.offsetHeight + About.offsetHeight + third.offsetHeight + Skills.offsetHeight + fifth.offsetHeight + Projects.offsetHeight);
        seventh.style.backgroundPositionY = offset * -0.25 + "px";
    }
});

function openNav() {
    document.getElementById("mySidenav").style.width = "175px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth' 
  });