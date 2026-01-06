// Basic year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle?.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

// Close menu on link click (mobile)
navMenu?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    if (navMenu.classList.contains("open")) {
      navMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
});

// Schedule filter
const dayFilter = document.getElementById("dayFilter");
const scheduleTable = document.getElementById("scheduleTable");

dayFilter?.addEventListener("change", (e) => {
  const value = e.target.value;
  const rows = scheduleTable.querySelectorAll("tbody tr");
  rows.forEach(row => {
    const day = row.getAttribute("data-day");
    row.style.display = (value === "all" || value === day) ? "" : "none";
  });
});

// Reservation via email (simple mailto template)
const reserveBtn = document.getElementById("reserveBtn");
const CONTACT_EMAIL = "youremail@example.com"; // <-- change this
const BRAND = "Adults-Only Soccer Practices";

reserveBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  const subject = encodeURIComponent(`Reserve a spot - ${BRAND}`);
  const body = encodeURIComponent(
`Hi! I'd like to reserve a spot.

Name:
Preferred day/time:
Location:
Skill level (optional):

I confirm I'm 18+.

Thanks!`
  );
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
});

// Contact form -> mailto
const contactForm = document.getElementById("contactForm");
contactForm?.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(contactForm);
  const name = (formData.get("name") || "").toString().trim();
  const email = (formData.get("email") || "").toString().trim();
  const message = (formData.get("message") || "").toString().trim();

  const subject = encodeURIComponent(`Message - ${BRAND} (${name})`);
  const body = encodeURIComponent(
`Name: ${name}
Email: ${email}

Message:
${message}

(Adults-only: user should be 18+)`
  );

  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
});
