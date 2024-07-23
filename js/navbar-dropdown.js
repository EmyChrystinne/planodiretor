function toggleDropdown() {
  var dropdown = document.getElementById("dropdown");
  if (dropdown.style.display === "block" || dropdown.style.display === "flex") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}

// Fecha o dropdown se o usuário clicar fora dele
window.onclick = function(event) {
  if (!event.target.matches('.temasemergentes p')) {
    var dropdowns = document.getElementsByClassName("dropdown");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.style.display === "block" || openDropdown.style.display === "flex") {
        openDropdown.style.display = "none";
      }
    }
  }
}