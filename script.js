// Menú hamburguesa
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Cerrar el menú al hacer clic en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Efecto de scroll suave para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Ajusta estos valores según tus preferencias
            const offset = 80; // Ajusta este valor para compensar el header fijo
            const duration = 1000; // Duración de la animación en milisegundos
            const start = window.pageYOffset;
            const target = targetElement.getBoundingClientRect().top + start - offset;
            const startTime = performance.now();
            
            function scrollAnimation(currentTime) {
                const elapsedTime = currentTime - startTime;
                const progress = Math.min(elapsedTime / duration, 1);
                
                // Función de easing (puedes cambiar esta función para diferentes efectos)
                const ease = t => t<.5 ? 2*t*t : -1+(4-2*t)*t;
                
                window.scrollTo(0, start + (target - start) * ease(progress));
                
                if (progress < 1) {
                    requestAnimationFrame(scrollAnimation);
                }
            }
            
            requestAnimationFrame(scrollAnimation);
        }
    });
});

// Efecto de aparición al hacer scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});

// Datos de ejemplo para la galería (reemplazar con imágenes reales)
const galleryImages = [
    {
        src: 'images/gallery/entrenamiento1.jpg',
        alt: 'Entrenamiento funcional',
        title: 'Entrenamiento Funcional'
    },
    {
        src: 'images/gallery/entrenamiento2.jpg',
        alt: 'Rutina de fuerza',
        title: 'Rutina de Fuerza'
    },
    {
        src: 'images/gallery/entrenamiento3.jpg',
        alt: 'Entrenamiento personalizado',
        title: 'Entrenamiento Personalizado'
    },
    {
        src: 'images/gallery/entrenamiento4.jpg',
        alt: 'Asesoramiento nutricional',
        title: 'Asesoramiento Nutricional'
    },
    {
        src: 'images/gallery/entrenamiento5.jpg',
        alt: 'Coaching motivacional',
        title: 'Coaching Motivacional'
    },
    {
        src: 'images/gallery/entrenamiento6.jpg',
        alt: 'Prevención de lesiones',
        title: 'Prevención de Lesiones'
    }
];

// Datos de ejemplo para los videos (reemplazar con videos reales)
const videos = [
    {
        title: 'Entrenamiento Funcional',
        url: 'https://www.youtube.com/embed/YNlRguGUtII?si=tAKGPm7tycYAAr8E',
        description: 'Aprende los fundamentos del entrenamiento funcional y cómo mejorar tu movilidad.'
    },
    {
        title: 'Rutina de Fuerza',
        url: 'https://www.youtube.com/embed/WuzTGQp-AOo?si=tftLDOaHqm1AwvdH',
        description: 'Rutina completa de fuerza para principiantes e intermedios.'
    },
    {
        title: 'Consejos de Nutrición',
        url: 'https://www.youtube.com/embed/77Xb_FztufI?si=e3i2cmevsNLv2IRn',
        description: 'Guía básica de nutrición para complementar tu entrenamiento.'
    },
    {
        title: 'Consejos de prevención de lesiones',
        url: 'https://www.youtube.com/embed/6P3hTZrpi2c?si=X6PN0OM1CCIb1QIw',
        description: 'Guía básica de prevención de lesiones.'
    }
];

// Función para cargar la galería
function loadGallery() {
    const galleryGrid = document.querySelector('.gallery-grid');
    galleryImages.forEach(image => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.alt;
        
        const titleElement = document.createElement('div');
        titleElement.className = 'gallery-title';
        titleElement.textContent = image.title;
        
        galleryItem.appendChild(imgElement);
        galleryItem.appendChild(titleElement);
        galleryGrid.appendChild(galleryItem);
    });
}

// Función para cargar los videos
function loadVideos() {
    const videoGrid = document.querySelector('.video-grid');
    videos.forEach(video => {
        const videoContainer = document.createElement('div');
        videoContainer.className = 'video-container';
        
        const iframe = document.createElement('iframe');
        iframe.src = video.url;
        iframe.title = video.title;
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;
        
        const videoInfo = document.createElement('div');
        videoInfo.className = 'video-info';
        
        const title = document.createElement('h3');
        title.textContent = video.title;
        
        const description = document.createElement('p');
        description.textContent = video.description;
        
        videoInfo.appendChild(title);
        videoInfo.appendChild(description);
        videoContainer.appendChild(iframe);
        videoContainer.appendChild(videoInfo);
        videoGrid.appendChild(videoContainer);
    });
}

// Cargar contenido cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    loadGallery();
    loadVideos();
});

// Botón de volver al inicio
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}); 