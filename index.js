document.addEventListener("DOMContentLoaded", function () {
  var roleElement = document.querySelector(".role");
  var colors = ["#AA0000", "#002244", "#007791", "#452c63", "#FF3800"];
  var currentColorIndex = 0;

  var typeData = new Typed(".role", {
    strings: [
      "Full Stack Developer",
      "Web Developer",
      "UI-UX Designer",
      "Backend Developer",
      "Coder",
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
    preStringTyped: (arrayPos) => {
      roleElement.style.color = colors[currentColorIndex];
    },
    onStringTyped: (arrayPos) => {
      currentColorIndex = (currentColorIndex + 1) % colors.length;
    },
  });

  var changeColorBtn = document.getElementById("btn");
  var projectsSection = document.getElementById("projects");
  changeColorBtn.addEventListener("click", function () {
    projectsSection.style.backgroundColor = getRandomColor();
  });
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});
