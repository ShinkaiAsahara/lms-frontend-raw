// dropdown functionality
document.addEventListener("DOMContentLoaded", function() {
    const coursesDropdown = document.getElementById('courses-level');

    function updateDisplay(selectedValue) {

        const categories = document.querySelectorAll('.m-c-container');
        const categoryTitles = document.querySelectorAll('.category-title');

        categories.forEach(category => {
            category.classList.remove('visible');
        });

        categoryTitles.forEach(title => {
            title.style.display = 'none'; 
        });

  
        if (selectedValue === "College") {
            categories.forEach(category => {
                category.classList.add('visible');
            });
            categoryTitles.forEach(title => {
                title.style.display = 'block'; 
            });
        } else {
            const selectedCategoryContainer = document.getElementById(selectedValue + '-container');
            const selectedCategoryTitle = document.getElementById(selectedValue);
            
            if (selectedCategoryContainer) {
                selectedCategoryContainer.classList.add('visible'); 
                selectedCategoryTitle.style.display = 'block'; 
            }
        }
    }

    coursesDropdown.addEventListener('change', function() {
        const selectedValue = this.value;
        updateDisplay(selectedValue);
    });

    updateDisplay(coursesDropdown.value);
});


// side nav functions
    function openNav() {
        document.getElementById("mySidenav").style.width = "210px"; 
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0"; 
    }

    // notification bell functionality
    document.addEventListener("DOMContentLoaded", function() {
        const bellIcon = document.querySelector('.h-bell');
        const notificationPanel = document.getElementById('notificationPanel');

        bellIcon.addEventListener('click', function() {
            if (notificationPanel.style.display === 'none' || notificationPanel.style.display === '') {
                notificationPanel.style.display = 'block';
            } else {
                notificationPanel.style.display = 'none';
            }
        });
    });

// left right moving picture

    const images = document.querySelectorAll('.collage-image');
    const dots = document.querySelectorAll('.dot');
    const leftArrow = document.getElementById('left-arrow');
    const rightArrow = document.getElementById('right-arrow');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.remove('active');
            if (i === index) {
                img.classList.add('active');
            }
        });

        // Highlight the corresponding dot
        dots.forEach((dot, i) => {
            dot.classList.remove('active');
            if (i === index) {
                dot.classList.add('active');
            }
        });
    }

    leftArrow.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        showImage(currentIndex);
    });

    rightArrow.addEventListener('click', () => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        showImage(currentIndex);
    });