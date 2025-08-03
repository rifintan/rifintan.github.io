function enterSite() {
  const opening = document.getElementById('opening-screen');
  const main = document.getElementById('main-content');
  const music = document.getElementById('bg-music');

  opening.classList.add('fade-out');

  setTimeout(() => {
    opening.style.display = 'none';
    main.style.display = 'block';
    setTimeout(() => {
      main.classList.add('fade-in');
    }, 50);

    music.volume = 1.0;
    music.play().catch(() => {});
    document.body.classList.add('no-scrollbar');
  }, 1000);
}

window.addEventListener('DOMContentLoaded', () => {
  let progress = 0;
  const interval = setInterval(() => {
    progress += 2;
    document.getElementById('progress').textContent = progress + '%';
    document.getElementById('fill-bar').style.width = progress + '%';
    if (progress >= 100) {
      clearInterval(interval);
      const open = document.getElementById('opening-screen');
      document.getElementById('loader').style.display = 'none';
      open.style.display = 'flex';
      setTimeout(() => {
        open.style.opacity = 1;
      }, 50);
    }
  }, 50);
});

gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll('.wrapper').forEach((section) => {
  const box = section.querySelector('.center-box');
  const mediaElements = section.querySelectorAll('img, video');

  if (box) {
    gsap.fromTo(box, { opacity: 0, y: 100 }, {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: section,
        start: 'top center',
        end: 'bottom top',
        scrub: true
      }
    });
  }

  mediaElements.forEach((media, index) => {
    const offset = 50 * (index + 1);
    gsap.fromTo(media, { y: offset, opacity: 0 }, {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'center center',
        scrub: true
      }
    });
  });
});

const toggle = document.getElementById('toggle-music');
const music = document.getElementById('bg-music');
toggle.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    toggle.textContent = '⏸';
  } else {
    music.pause();
    toggle.textContent = '▶️';
  }
});
