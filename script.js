document.addEventListener('DOMContentLoaded', () => {
  const dot = document.getElementById('cursor');
  if (dot) {
    document.addEventListener('mousemove', e => {
      dot.style.left = e.clientX + 'px';
      dot.style.top = e.clientY + 'px';
    });
    document.querySelectorAll('a').forEach(el => {
      el.addEventListener('mouseenter', () => dot.classList.add('big'));
      el.addEventListener('mouseleave', () => dot.classList.remove('big'));
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});
