const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.main-nav a');
const header = document.querySelector('header');
const preloader = document.getElementById('preloader');
const heroSlides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;

function setHeroSlide(index) {
  heroSlides.forEach((slide, idx) => {
    slide.classList.toggle('active', idx === index);
  });
}

function cycleHeroSlides() {
  if (!heroSlides.length) return;
  currentSlide = (currentSlide + 1) % heroSlides.length;
  setHeroSlide(currentSlide);
}

if (heroSlides.length) {
  setHeroSlide(0);
  setInterval(cycleHeroSlides, 4000);
}

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const visible = nav.getAttribute('data-visible') === 'true';
    nav.setAttribute('data-visible', String(!visible));
    navToggle.setAttribute('aria-expanded', String(!visible));
  });
}

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (nav && nav.getAttribute('data-visible') === 'true') {
      nav.setAttribute('data-visible', 'false');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

window.addEventListener('scroll', () => {
  if (!header) return;
  header.style.background = window.scrollY > 50 ? '#2b0000' : '#4a0000';
});

const statisticsSection = document.querySelector('.statistics');
const counters = document.querySelectorAll('.counter');

function animateCounters() {
  counters.forEach(counter => {
    const target = parseFloat(counter.dataset.target);
    const isRating = counter.classList.contains('rating');
    const duration = 1400;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = isRating
        ? (progress * target).toFixed(1)
        : Math.floor(progress * target);

      counter.textContent = isRating ? value : value.toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        counter.textContent = isRating ? target.toFixed(1) : target.toLocaleString();
      }
    }

    requestAnimationFrame(update);
  });
}

if (statisticsSection && counters.length) {
  const counterObserver = new IntersectionObserver((entries, observer) => {
    if (entries[0].isIntersecting) {
      animateCounters();
      observer.disconnect();
    }
  }, { threshold: 0.55 });

  counterObserver.observe(statisticsSection);
}

window.addEventListener('load', () => {
  if (preloader) {
    preloader.classList.add('loaded');
    setTimeout(() => {
      preloader.remove();
    }, 700);
  }

  if (window.AOS) {
    AOS.init({ duration: 800, offset: 120, once: true });
  }
});