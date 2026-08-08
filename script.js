// ---------- Skills data ----------
const skills = [
  { name: 'HTML', pct: 95, color: '#e34f26' },
  { name: 'CSS', pct: 90, color: '#2965f1' },
  { name: 'JavaScript', pct: 85, color: '#e8b323' },
  { name: 'WordPress', pct: 90, color: '#3858e9' },
  { name: 'Shopify', pct: 85, color: '#5fb85a' },
  { name: 'Wix', pct: 75, color: '#7c4dff' },
  { name: 'Webflow', pct: 75, color: '#4b6bfb' },
  { name: 'Framer', pct: 70, color: '#b8b8b8' },
  { name: 'GoHighLevel', pct: 95, color: '#ff2e3d' },
  { name: 'Klaviyo', pct: 80, color: '#25c15c' },
  { name: 'Voice AI Agent', pct: 85, color: '#c04dff' },
  { name: 'Chatbot', pct: 85, color: '#2fc4b2' },
  { name: 'Automation', pct: 90, color: '#ff9130' },
  { name: 'Sales Funnel', pct: 85, color: '#ff5f8f' },
  { name: 'Make.com', pct: 90, color: '#6d00cc' },
  { name: 'Zapier', pct: 85, color: '#ff4a00' },
];

function initials(name) {
  return name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
}

const skillsGrid = document.getElementById('skillsGrid');
skills.forEach(s => {
  const row = document.createElement('div');
  row.className = 'skill-row';
  row.innerHTML = `
    <div class="skill-top">
      <span class="skill-icon" style="background:${s.color}">${initials(s.name)}</span>
      <span class="skill-name">${s.name}</span>
      <span class="skill-pct">${s.pct}%</span>
    </div>
    <div class="skill-bar"><div class="skill-bar-fill" data-pct="${s.pct}"></div></div>
  `;
  skillsGrid.appendChild(row);
});

// Animate skill bars when scrolled into view
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.dataset.pct + '%';
      barObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.skill-bar-fill').forEach(el => barObserver.observe(el));

// ---------- Web Development projects ----------
// To add a real screenshot for any project: save the image inside the assets
// folder and add an "img" property with its path, e.g. img: 'assets/tracking-me.jpg'
// Projects without an "img" property will keep showing the styled placeholder.
const webdevProjects = [
  { name: 'Tracking.me', url: 'https://www.tracking.me/', desc: 'Shipment tracking platform website.', tag: 'Website', img: '' },
  { name: 'Livixa AI', url: 'https://livixa.ai/', desc: 'AI-powered product website.', tag: 'Website', img: '' },
  { name: 'Umrah Rafeeqi', url: 'https://umrah.rafeeqi.com/', desc: 'Umrah services booking website.', tag: 'Website', img: '' },
  { name: 'Facility Apps', url: 'https://www.facilityapps.com/', desc: 'Facility management software website.', tag: 'Website', img: '' },
  { name: 'Genx Aminos', url: 'https://genxaminos.com/', desc: 'Supplement brand website.', tag: 'Website', img: '' },
  { name: 'Pure Medical Spa', url: 'https://puremedicalspaidaho.com/', desc: 'Med spa & aesthetics clinic website.', tag: 'Website', img: '' },
  { name: 'Newage Cables', url: 'https://newagecables.com/', desc: 'Cable manufacturing company website.', tag: 'Website', img: '' },
  { name: 'Haven Compliance', url: 'https://havencompliance.com.au/', desc: 'Window safety compliance company website.', tag: 'Website', img: '' },
  { name: 'Murcot Auto', url: 'https://blanchedalmond-chamois-946816.hostingersite.com/', desc: 'Vehicle purchase & trade-in website.', tag: 'Website', pending: true, img: '' },
  { name: 'Qareeb', url: 'https://qareeb.com/', desc: 'Shopify store.', tag: 'Shopify', img: '' },
  { name: 'Surmer', url: 'https://surmer.com/', desc: 'Shopify store.', tag: 'Shopify', img: '' },
  { name: 'Soap Sage', url: 'https://soapsage.pk/', desc: 'Shopify store.', tag: 'Shopify', img: '' },
  { name: 'Luxe Auto Spa', url: 'https://luxeautospa.pk/', desc: 'Shopify store.', tag: 'Shopify', img: '' },
  { name: 'CNC Electric', url: 'https://www.cncelectric.pk/', desc: 'Shopify store.', tag: 'Shopify', img: '' },
];

const webdevGrid = document.getElementById('webdevGrid');
webdevProjects.forEach(p => {
  const domain = p.url.replace(/^https?:\/\//, '').replace(/\/$/, '');
  const card = document.createElement('div');
  card.className = 'project-card';
  const thumbHtml = p.img
    ? `<img src="${p.img}" alt="${p.name} screenshot">`
    : `<div class="thumb-browser">
         <div class="thumb-browser-bar"><span></span><span></span><span></span></div>
         <div class="thumb-browser-body">${p.name}</div>
       </div>`;
  card.innerHTML = `
    <div class="project-thumb">
      ${thumbHtml}
    </div>
    <div class="project-body">
      <div class="project-badges">
        <span class="badge ${p.tag === 'Shopify' ? 'badge-shopify' : ''}">${p.tag}</span>
        ${p.pending ? '<span class="badge badge-pending">Not live yet</span>' : ''}
      </div>
      <div class="project-title">${p.name}</div>
      <div class="project-desc">${p.desc}</div>
      ${p.pending
        ? `<span class="project-link disabled">Site in progress</span>`
        : `<a class="project-link" href="${p.url}" target="_blank" rel="noopener">Visit site
             <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg>
           </a>`
      }
    </div>
  `;
  webdevGrid.appendChild(card);
});

// ---------- AI Automation projects (GHL case studies) ----------
const automationProjects = [
  { name: 'Haven Compliance', img: 'assets/card_thumb_Haven_Compliance.jpg', desc: 'End-to-end compliance operations engine — booking, payments, CRM, invoicing and field inspections in one automated pipeline.', url: 'https://havencompliance.com.au/' },
  { name: 'PURE Medical Spa', img: 'assets/card_thumb_PURE_Medical_Spa.jpg', desc: 'Full-funnel CRM and marketing automation connecting the website, booking system and ad channels.', url: 'https://puremedicalspaidaho.com/' },
  { name: 'Murcot Auto', img: 'assets/card_thumb_Murcot_Auto.jpg', desc: 'Custom VIN decode plugin and CRM automation carrying every vehicle lead to a scheduled pickup.', url: 'https://blanchedalmond-chamois-946816.hostingersite.com/', pending: true },
  { name: 'Me2Dental', img: 'assets/card_thumb_Me2Dental.jpg', desc: 'Lead-to-credentialing automation engine moving dental practices from intake to full credentialing.' },
  { name: 'Capitalize Labs', img: 'assets/card_thumb_Capitalize_Labs.jpg', desc: 'Fully automated enrollment engine — signup, scored qualification, LMS registration and payment.' },
];

const automationGrid = document.getElementById('automationGrid');
automationProjects.forEach(p => {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.innerHTML = `
    <div class="project-thumb"><img src="${p.img}" alt="${p.name} case study"></div>
    <div class="project-body">
      <div class="project-badges">
        <span class="badge">Automation</span>
        ${p.pending ? '<span class="badge badge-pending">Site not live</span>' : ''}
      </div>
      <div class="project-title">${p.name}</div>
      <div class="project-desc">${p.desc}</div>
      ${p.url && !p.pending
        ? `<a class="project-link" href="${p.url}" target="_blank" rel="noopener">Visit site
             <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg>
           </a>`
        : `<span class="project-link disabled">Case study</span>`
      }
    </div>
  `;
  automationGrid.appendChild(card);
});

// ---------- Tabs ----------
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');
tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    tabPanels.forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});

// ---------- Mobile nav toggle ----------
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});
mainNav.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => mainNav.classList.remove('open'));
});
