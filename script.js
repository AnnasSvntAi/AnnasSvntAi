// Membuat list dalam navBar terlihat menyala saat berada dalam section tertentu

window.addEventListener('load', () => {
    const loadingBar = document.querySelector('.loading-bar');
    loadingBar.style.width = '100%';
    setTimeout(() => {
        loadingBar.style.display = 'none';
    }, 1000);
});



// Reload event listener
window.addEventListener('beforeunload', () => {
    sessionStorage.setItem('scrollPosition', window.pageYOffset);
});

// Function to restore scroll position on page load
window.addEventListener('load', () => {
    const scrollPosition = sessionStorage.getItem('scrollPosition') || 0;
    window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });
});



// Start
// const sections = document.querySelectorAll('.section');
// const navLinks = document.querySelectorAll('.nav-link');

// window.addEventListener('scroll', () => {
//     let current = '';

//     sections.forEach(section => {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.clientHeight;
//         console.log(sectionTop, sectionHeight);
//         if (pageYOffset >= (sectionTop - sectionHeight / 2)) {
//             current = section.getAttribute('id');
//         }
//     });

//     navLinks.forEach(link => {
//         link.classList.remove('active');
//         if (link.getAttribute('href') === `#${current}`) {
//             link.classList.add('active');
//         }
//     });
// });
// End

const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

// Set active link on page load
document.addEventListener('DOMContentLoaded', () => {
    const firstSectionId = sections[0].getAttribute('id');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === `#${firstSectionId}`) {
            link.classList.add('active');
        }
    });
});

// Update active link while scrolling
window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 2)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});


// Typing text 
// Start
const typingText = document.getElementById('typingText');
const texts = ['Content Creator Soon', 'Web Developer Soon', 'Mobile Developer Soon', 'Designer Soon'];
let textIndex = 0, charIndex = 0;

function type() {
    if (charIndex < texts[textIndex].length) {
        typingText.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 1000);
    }
}

function erase() {
    if (charIndex > 0) {
        typingText.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(type, 100);
    }
}

type();
// End

// Scroll to section when clicking on navbar links
const scrollHalus = document.querySelectorAll('.nav-link');

scrollHalus.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});


// Showing Content
// Start
// const contentArticles = document.querySelectorAll('.showing-content');

// window.addEventListener('scroll', () => {
//     const windowHeight = window.innerHeight;
    
//     contentArticles.forEach(content => {
//         const contentRect = content.getBoundingClientRect();
//         if (contentRect.top < windowHeight && contentRect.bottom > 0) {
//             content.classList.add('show');
//         } else {
//             content.classList.remove('show');
//         }
//     });
// });
// End

const contentArticles = document.querySelectorAll('.showing-content');

// Function to update showing-content based on visibility
const updateShowingContent = () => {
    const windowHeight = window.innerHeight;
    
    contentArticles.forEach(content => {
        const contentRect = content.getBoundingClientRect();
        if (contentRect.top < windowHeight && contentRect.bottom > 0) {
            content.classList.add('show');
        } else {
            content.classList.remove('show');
        }
    });
};

// Set showing-content on page load
document.addEventListener('DOMContentLoaded', () => {
    updateShowingContent();
});

// Update showing-content while scrolling
window.addEventListener('scroll', () => {
    updateShowingContent();
});


//Whatsapp

const whatsappLink = document.getElementById('whatsapp-link');
const message = encodeURIComponent('Hi! Saya Annas Sovianto. Senang berkenalan dengan Anda. Jika Anda ingin tahu lebih banyak tentang saya atau memiliki pertanyaan, jangan ragu untuk menghubungi saya melalui nomor WhatsApp di atas. Senang berkenalan dengan Anda. Terima kasih!');

whatsappLink.href = `https://wa.me/62895363171090?text=${message}`;
