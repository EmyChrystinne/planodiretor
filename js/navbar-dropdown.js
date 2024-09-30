function toggleMenu() {
  var navbar = document.querySelector('.navbar');
  navbar.style.display = (navbar.style.display === 'flex' || navbar.style.display === '') ? 'none' : 'flex';
}

function toggleDropdown(dropdownId) {
  var dropdown = document.getElementById(dropdownId);
  var isDisplayed = dropdown.style.display === 'block';

  var dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(function(dropdown) {
      dropdown.style.display = 'none';
      var trigger = dropdown.previousElementSibling;
      trigger.setAttribute('aria-expanded', 'false');
  });

  if (!isDisplayed) {
      dropdown.style.display = 'block';
      var trigger = dropdown.previousElementSibling;
      trigger.setAttribute('aria-expanded', 'true');
  }
}

window.addEventListener('click', function(event) {
  if (!event.target.closest('.temasemergentes')) {
      var dropdowns = document.querySelectorAll('.dropdown');
      dropdowns.forEach(function(dropdown) {
          dropdown.style.display = 'none';
          var trigger = dropdown.previousElementSibling;
          trigger.setAttribute('aria-expanded', 'false');
      });
  }
});
