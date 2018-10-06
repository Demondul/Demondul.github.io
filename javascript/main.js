const Home = document.getElementById('Home');
const third = document.getElementById('Third');
const fifth = document.getElementById('Fifth');
const seventh = document.getElementById('Seventh');

window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
    Home.style.backgroundPositionY = offset * -0.25 + "px";
});

window.addEventListener("scroll", function (){
    let offset = window.pageYOffset - 2000;
    third.style.backgroundPositionY = offset * -0.25 + "px";
});

window.addEventListener("scroll", function (){
    let offset = window.pageYOffset - 3500;
    fifth.style.backgroundPositionY = offset * -0.25 + "px";
});

window.addEventListener("scroll", function (){
    let offset = window.pageYOffset - 5500;
    seventh.style.backgroundPositionY = offset * -0.25 + "px";
});

function openNav() {
    document.getElementById("mySidenav").style.width = "150px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

window.scroll({
    top: 2500, 
    left: 0, 
    behavior: 'smooth' 
  });