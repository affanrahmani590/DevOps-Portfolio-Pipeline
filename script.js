/* =============================================
   AFFAN RAHMANI — PORTFOLIO
   script.js (Clean Scroll Control)
   ============================================= */

/* ---------- PAGE IDs IN ORDER ---------- */
const PAGE_ORDER = ['profile', 'about', 'resume', 'portfolio', 'contact'];

/* ---------- SCROLL TO SECTION ---------- */
function scrollToSection(id, btn) {
  const target = document.getElementById('page-' + id);
  if (!target) return;

  // Smooth scroll logic
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });

  // Update nav active state
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  
  if (btn) {
    btn.classList.add('active');
  } else {
    // Find matching nav button based on function attribute
    const allBtns = document.querySelectorAll('.nav-btn');
    allBtns.forEach(b => {
      const clickAttr = b.getAttribute('onclick');
      if (clickAttr && clickAttr.includes("'" + id + "'")) {
        b.classList.add('active');
      }
    });
  }
}
