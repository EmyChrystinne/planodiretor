document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.menu ul');
  const dropdowns = document.querySelectorAll('.dropdown');

  // Menu Toggle for Mobile
  menuToggle.addEventListener('click', function () {
      const isActive = navMenu.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', isActive);
      menuToggle.classList.toggle('active');
  });

  // Dropdown Toggle for Desktop and Mobile
  dropdowns.forEach(dropdown => {
      const dropbtn = dropdown.querySelector('.dropbtn');

      dropbtn.addEventListener('click', function (e) {
          e.preventDefault();
          const dropdownContent = dropdown.querySelector('.dropdown-content');

          // Toggle the visibility of the dropdown
          dropdownContent.classList.toggle('show');

          // Close other open dropdowns
          dropdowns.forEach(otherDropdown => {
              if (otherDropdown !== dropdown) {
                  otherDropdown.querySelector('.dropdown-content').classList.remove('show');
              }
          });
      });
  });

  // Close dropdowns if clicking outside
  document.addEventListener('click', function (e) {
      dropdowns.forEach(dropdown => {
          if (!dropdown.contains(e.target)) {
              dropdown.querySelector('.dropdown-content').classList.remove('show');
          }
      });
  });
});
