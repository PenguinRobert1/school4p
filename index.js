function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}



(function() {
  const galaxyElement = document.getElementById('galaxy');
  galaxyElement.style.position = 'absolute';
  galaxyElement.style.top = '0px';
  galaxyElement.style.left = '0px';
})();

    (function() {
      const mainElement = document.getElementById('main');
      mainElement.style.position = 'absolute';
      mainElement.style.top = '7px';
      mainElement.style.left = '10px';
    })();