// JavaScript for Tabs and Search Functionality
const tabs = document.querySelectorAll('.tab');
const courses = document.querySelectorAll('.course-card');
const searchBar = document.querySelector('.search-bar');

// Function to filter courses by category
function filterCourses(category) {
  courses.forEach(course => {
    const courseCategory = course.getAttribute('data-category');
    course.style.display = (category === 'all' || courseCategory === category) ? 'block' : 'none';
  });
}

// Add click event listeners to tabs
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active class from all tabs
    tabs.forEach(t => t.classList.remove('active'));
    // Add active class to the clicked tab
    tab.classList.add('active');

    // Filter courses based on selected category
    const category = tab.getAttribute('data-category');
    filterCourses(category);
  });
});

// Search functionality
searchBar.addEventListener('input', (event) => {
  const query = event.target.value.toLowerCase();
  courses.forEach(course => {
    const title = course.querySelector('h3').textContent.toLowerCase();
    const description = course.querySelector('p').textContent.toLowerCase();
    // Show course if query matches title or description
    course.style.display = (title.includes(query) || description.includes(query)) ? 'block' : 'none';
  });
});
