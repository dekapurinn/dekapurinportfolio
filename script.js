// IntersectionObserverでfade-in + zoom表示
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in, .work').forEach(el => {
  fadeObserver.observe(el);
});
