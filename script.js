// フェードイン or スライドイン効果を付けるIntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, {
  threshold: 0.2
});

// 対象の要素にobserverを適用（.fade-in、.work など）
document.querySelectorAll('.fade-in, .work').forEach(el => {
  observer.observe(el);
});
