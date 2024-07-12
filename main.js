var typed= new Typed(".text",{
    strings:["Frontend Developer" , "Graphic Designer","UX/UI Designer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
// Function to animate progress bars when they come into view
function animateProgressBars() {
    const bars = document.querySelectorAll('.progress-line span');

    bars.forEach(bar => {
        const barWidth = bar.style.width;
        bar.style.width = 0;
        setTimeout(() => {
            bar.style.width = barWidth;
        }, 500);
    });
}

// Function to animate radial bars
function animateRadialBars() {
    const radialBars = document.querySelectorAll('.progress-bar');

    radialBars.forEach(radialBar => {
        const percentage = radialBar.parentNode.querySelector('.percentage').innerText.replace('%', '');
        const circumference = 2 * Math.PI * radialBar.getAttribute('r');
        const offset = circumference * (1 - (percentage / 100));
        
        radialBar.style.strokeDasharray = circumference;
        radialBar.style.strokeDashoffset = circumference;
        
        setTimeout(() => {
            radialBar.style.strokeDashoffset = offset;
        }, 500);
    });
}

// Function to check if an element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll event and animate elements in viewport
function handleScroll() {
    const bars = document.querySelectorAll('.progress-line span');
    const radialBars = document.querySelectorAll('.progress-bar');

    bars.forEach(bar => {
        if (isInViewport(bar)) {
            animateProgressBars();
        }
    });

    radialBars.forEach(radialBar => {
        if (isInViewport(radialBar)) {
            animateRadialBars();
        }
    });
}

// Event listener for scroll events
window.addEventListener('scroll', handleScroll);

// Initial check on page load
document.addEventListener('DOMContentLoaded', () => {
    handleScroll();
});