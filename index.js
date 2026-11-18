/* =========================================================
   MERCEDES-BENZ PREMIUM LANDING PAGE — SCRIPT.JS
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  // ---------------------------------------------------------
  // 1. MA'LUMOTLAR BAZASI (MODELLAR, GALEREYA, FIKRLAR)
  // ---------------------------------------------------------
  const fallbackImage =
    'data:image/svg+xml;charset=UTF-8,' +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
        <rect width="800" height="500" fill="#14171f"/>
        <circle cx="400" cy="220" r="56" fill="none" stroke="#c8cfd8" stroke-width="3"/>
        <polygon points="400,168 407,215 448,246 400,226 352,246 393,215" fill="#c8cfd8"/>
        <text x="400" y="325" fill="#e5e9f0" font-family="sans-serif" font-size="22" text-anchor="middle" letter-spacing="4">MERCEDES-BENZ</text>
      </svg>`
    );

  const modelsData = [
    {
      id: 's-class',
      name: 'Mercedes-Benz S-Class',
      category: 'sedan',
      categoryLabel: 'Hashamatli Sedan',
      shortDesc: 'Avtomobilsozlikning mutlaq flagmani. Birinchi darajali qulaylik va intellektual xavfsizlik.',
      engine: '4.0L V8 Biturbo + EQ',
      hp: 503,
      speed: 250,
      accel: '4.4',
      gearbox: '9G-TRONIC Avtomat',
      fuel: 'Benzin / Mild-Hybrid',
      price: 128000,
      image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=1200&q=85',
      details:
        'Mercedes-Benz S-Class — MBUX 3D raqamli paneli, orqa g‘ildiraklar burilish tizimi, E-ACTIVE BODY CONTROL faol osma va Burmester® 4D ovoz tizimi bilan jihozlangan oliy toifadagi biznes-sedan.'
    },
    {
      id: 'e-class',
      name: 'Mercedes-Benz E-Class',
      category: 'sedan',
      categoryLabel: 'Biznes Sedan',
      shortDesc: 'Zamonaviy biznes-klass etaloni: nafis dizayn, raqamli kokpit va dinamik boshqaruv.',
      engine: '3.0L I6 Turbo + EQ',
      hp: 381,
      speed: 250,
      accel: '4.5',
      gearbox: '9G-TRONIC Avtomat',
      fuel: 'Benzin / Mild-Hybrid',
      price: 78500,
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=85',
      details:
        'Yangi avlod E-Class MBUX Superscreen panoramali displeyi, intellektual iqlim nazorati va kundalik safarlarni maksimal darajada yengillashtiruvchi avtopilot yordamchilariga ega.'
    },
    {
      id: 'c-class',
      name: 'Mercedes-Benz C-Class',
      category: 'sedan',
      categoryLabel: 'Sport Sedan',
      shortDesc: 'S-Class texnologiyalarini ixcham va sportcha kuzovda mujassam etgan zamonaviy sedan.',
      engine: '2.0L I4 Turbo + EQ',
      hp: 258,
      speed: 250,
      accel: '6.0',
      gearbox: '9G-TRONIC Avtomat',
      fuel: 'Benzin / Mild-Hybrid',
      price: 56000,
      image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=1200&q=85',
      details:
        'Mercedes-Benz C-Class shahar ichida chaqqonlik, tejamkor gibrid dvigatel va haydovchiga yo‘naltirilgan ergonomik salon bilan ajralib turadi.'
    },
    {
      id: 'g-class',
      name: 'Mercedes-Benz G-Class',
      category: 'suv',
      categoryLabel: 'Afsonaviy SUV',
      shortDesc: 'O‘zgarmas xarakter, 3 ta differensial blokirovkasi va AMG V8 quvvatiga ega afsonaviy yo‘ltanlamas.',
      engine: '4.0L V8 Biturbo AMG',
      hp: 585,
      speed: 220,
      accel: '4.5',
      gearbox: 'AMG SPEEDSHIFT TCT 9G',
      fuel: 'Benzin (AI-98)',
      price: 185000,
      image: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&w=1200&q=85',
      details:
        '1979-yildan beri o‘zining ikonaviy ko‘rinishini saqlab kelayotgan G-Class har qanday ekstremal yo‘lsizlik sharoitida ham hashamatli salon qulayligini ta’minlaydi.'
    },
    {
      id: 'gls',
      name: 'Mercedes-Benz GLS',
      category: 'suv',
      categoryLabel: 'Flagman SUV',
      shortDesc: 'Yo‘ltanlamaslar orasidagi S-Class: 7 o‘rinli keng salon va benuqson pnevmatik yurish.',
      engine: '4.0L V8 Biturbo + EQ',
      hp: 557,
      speed: 250,
      accel: '4.2',
      gearbox: '9G-TRONIC Avtomat',
      fuel: 'Benzin / Mild-Hybrid',
      price: 142000,
      image: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&w=1200&q=85',
      details:
        'Mercedes-Benz GLS uzoq oilaviy va biznes sayohatlar uchun yaratilgan bo‘lib, barcha qator o‘rindiqlarda isitish, shamollatish va multimedia boshqaruvini taklif qiladi.'
    },
    {
      id: 'amg-gt',
      name: 'Mercedes-Benz AMG GT',
      category: 'sport',
      categoryLabel: 'Supercar / AMG',
      shortDesc: 'Affalterbax muhandislarining poyga treklari uchun yaratilgan eng tezkor sport kupesi.',
      engine: '4.0L V8 Biturbo + E-Motor',
      hp: 843,
      speed: 316,
      accel: '2.9',
      gearbox: 'AMG SPEEDSHIFT MCT 9G',
      fuel: 'Plug-in Performance Hybrid',
      price: 198000,
      image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=85',
      details:
        'Formula 1 texnologiyalari asosida yaratilgan AMG GT 63 S E Performance 843 ot kuchi va 1400 Nm aylanish momenti bilan 100 km/soat tezlikka atigi 2.9 soniyada chiqadi.'
    }
  ];

  const galleryData = [
    {
      src: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1400&q=85',
      caption: 'Mercedes-Benz AMG GT — Aerodinamik mukammallik va tungi estetika'
    },
    {
      src: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&w=1400&q=85',
      caption: 'Mercedes-Benz G-Class — Mutlaq kuch va o‘zgarmas klassik siluet'
    },
    {
      src: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=1400&q=85',
      caption: 'Mercedes-Benz S-Class — Hashamatli sedanlarning jahon etaloni'
    },
    {
      src: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1400&q=85',
      caption: 'Mercedes-AMG Coupe — Sport xarakteri va yuqori aniqlikdagi boshqaruv'
    },
    {
      src: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1400&q=85',
      caption: 'Mercedes-Benz — Har bir detalda nemis muhandislik san’ati'
    },
    {
      src: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=1400&q=85',
      caption: 'Mercedes-Benz C-Class — Zamonaviy shahar dinamikasi'
    }
  ];

  const reviewsData = [
    {
      stars: '★★★★★',
      text: '“S-Class boshqaruvidagi sokinlik va pnevmatik osmaning yumshoqligi boshqa hech bir avtomobilda uchramaydi. Har bir safar haqiqiy dam olishga aylanadi.”',
      author: 'Jamshid Rahimov',
      car: 'Mercedes-Benz S 580 egasi'
    },
    {
      stars: '★★★★★',
      text: '“AMG G 63 — ham shaharda nufuz, ham tog‘li hududlarda ishonchli hamroh. V8 dvigatel ovozi va salon sifati kutilganidan ham yuqori.”',
      author: 'Bekzod Alimov',
      car: 'Mercedes-AMG G 63 egasi'
    },
    {
      stars: '★★★★★',
      text: '“E-Class MBUX tizimi va tungi yoritish texnologiyalari uzoq yo‘lda charchoqni umuman sezdirmaydi. Xizmat ko‘rsatish madaniyati ham mukammal.”',
      author: 'Dilnoza Karimova',
      car: 'Mercedes-Benz E 450 egasi'
    }
  ];

  // Rasm yuklanmasa fallback qo'llash yordamchisi
  function attachImageFallback(imgElement) {
    imgElement.addEventListener('error', () => {
      if (imgElement.src !== fallbackImage) {
        imgElement.src = fallbackImage;
      }
    });
  }

  document.querySelectorAll('img').forEach(attachImageFallback);

  // ---------------------------------------------------------
  // 2. MOBIL HAMBURGER MENYU VA STICKY HEADER
  // ---------------------------------------------------------
  const header = document.getElementById('header');
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  hamburger.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // ---------------------------------------------------------
  // 3. FAOL MENYU HOLATI VA HEADER SCROLL EFFEKTI
  // ---------------------------------------------------------
  const sections = document.querySelectorAll('main section[id]');

  function handleScroll() {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    let currentId = 'bosh-sahifa';
    sections.forEach((sec) => {
      const top = sec.offsetTop - 140;
      if (window.scrollY >= top) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
    });
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // ---------------------------------------------------------
  // 4 & 5. MODELLARNI RENDER QILISH, FILTRLASH VA MODAL OYNA
  // ---------------------------------------------------------
  const modelsGrid = document.getElementById('models-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const modal = document.getElementById('model-modal');
  const modalBody = document.getElementById('modal-body');
  const modalClose = document.getElementById('modal-close');
  const modalBackdrop = document.getElementById('modal-backdrop');

  function renderModels(category = 'all') {
    const filtered =
      category === 'all' ? modelsData : modelsData.filter((m) => m.category === category);

    modelsGrid.innerHTML = filtered
      .map(
        (car) => `
        <article class="model-card">
          <div class="model-img-box">
            <img src="${car.image}" alt="${car.name}" loading="lazy" />
            <span class="model-cat-badge">${car.categoryLabel}</span>
          </div>
          <div class="model-body">
            <h3 class="model-title">${car.name}</h3>
            <p class="model-desc">${car.shortDesc}</p>
            <div class="model-specs-mini">
              <div class="mini-spec">
                <span>Dvigatel</span>
                <strong>${car.engine.split('+')[0].trim()}</strong>
              </div>
              <div class="mini-spec">
                <span>Quvvat</span>
                <strong>${car.hp} o.k.</strong>
              </div>
              <div class="mini-spec">
                <span>Maks. tezlik</span>
                <strong>${car.speed} km/soat</strong>
              </div>
            </div>
            <div class="model-footer">
              <span class="model-price">$${car.price.toLocaleString()} dan</span>
              <button type="button" class="btn btn-outline btn-details" data-id="${car.id}">
                Batafsil
              </button>
            </div>
          </div>
        </article>
      `
      )
      .join('');

    modelsGrid.querySelectorAll('img').forEach(attachImageFallback);

    modelsGrid.querySelectorAll('.btn-details').forEach((btn) => {
      btn.addEventListener('click', () => openModelModal(btn.dataset.id));
    });
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      renderModels(btn.dataset.filter);
    });
  });

  function openModelModal(modelId) {
    const car = modelsData.find((item) => item.id === modelId);
    if (!car) return;

    modalBody.innerHTML = `
      <img class="modal-img" src="${car.image}" alt="${car.name}" />
      <span class="section-tag">${car.categoryLabel}</span>
      <h3 id="modal-title" class="model-title">${car.name}</h3>
      <p class="about-text">${car.details}</p>
      <div class="modal-specs">
        <div class="spec-card"><span class="spec-label">Dvigatel</span><strong class="spec-value">${car.engine}</strong></div>
        <div class="spec-card"><span class="spec-label">Quvvat</span><strong class="spec-value">${car.hp} ot kuchi</strong></div>
        <div class="spec-card"><span class="spec-label">Maksimal tezlik</span><strong class="spec-value">${car.speed} km/soat</strong></div>
        <div class="spec-card"><span class="spec-label">0–100 km/soat</span><strong class="spec-value">${car.accel} soniya</strong></div>
        <div class="spec-card"><span class="spec-label">Uzatmalar qutisi</span><strong class="spec-value">${car.gearbox}</strong></div>
        <div class="spec-card"><span class="spec-label">Boshlang‘ich narx</span><strong class="spec-value">$${car.price.toLocaleString()}</strong></div>
      </div>
      <a href="#test-drayv" class="btn btn-primary btn-full" id="modal-td-btn">Ushbu modelda test-drayvga yozilish</a>
    `;

    attachImageFallback(modalBody.querySelector('img'));

    const modalTdBtn = document.getElementById('modal-td-btn');
    modalTdBtn.addEventListener('click', () => {
      const tdModelSelect = document.getElementById('td-model');
      if (tdModelSelect) tdModelSelect.value = car.name;
      closeModelModal();
    });

    modal.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function closeModelModal() {
    modal.hidden = true;
    document.body.style.overflow = '';
  }

  modalClose.addEventListener('click', closeModelModal);
  modalBackdrop.addEventListener('click', closeModelModal);

  renderModels('all');

  // ---------------------------------------------------------
  // 6 & 7. GALEREYA VA LIGHTBOX
  // ---------------------------------------------------------
  const galleryGrid = document.getElementById('gallery-grid');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxBackdrop = document.getElementById('lightbox-backdrop');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');

  let currentGalleryIndex = 0;

  galleryGrid.innerHTML = galleryData
    .map(
      (item, idx) => `
      <div class="gallery-item" role="button" tabindex="0" data-index="${idx}" aria-label="${item.caption}">
        <img src="${item.src}" alt="${item.caption}" loading="lazy" />
      </div>
    `
    )
    .join('');

  galleryGrid.querySelectorAll('img').forEach(attachImageFallback);

  function showLightbox(index) {
    currentGalleryIndex = (index + galleryData.length) % galleryData.length;
    const item = galleryData[currentGalleryIndex];
    lightboxImg.src = item.src;
    lightboxImg.alt = item.caption;
    lightboxCaption.textContent = item.caption;
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.hidden = true;
    document.body.style.overflow = '';
  }

  galleryGrid.querySelectorAll('.gallery-item').forEach((el) => {
    const idx = Number(el.dataset.index);
    el.addEventListener('click', () => showLightbox(idx));
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        showLightbox(idx);
      }
    });
  });

  lightboxPrev.addEventListener('click', () => showLightbox(currentGalleryIndex - 1));
  lightboxNext.addEventListener('click', () => showLightbox(currentGalleryIndex + 1));
  lightboxClose.addEventListener('click', closeLightbox);
  lightboxBackdrop.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (!modal.hidden) closeModelModal();
      if (!lightbox.hidden) closeLightbox();
    }
    if (!lightbox.hidden) {
      if (e.key === 'ArrowLeft') showLightbox(currentGalleryIndex - 1);
      if (e.key === 'ArrowRight') showLightbox(currentGalleryIndex + 1);
    }
  });

  // ---------------------------------------------------------
  // 8, 9, 10. INTERAKTIV KONFIGURATOR VA TEXNIK XUSUSIYATLAR
  // ---------------------------------------------------------
  const modelSelect = document.getElementById('config-model-select');
  const swatches = document.querySelectorAll('.swatch');
  const trimBtns = document.querySelectorAll('.trim-btn');
  const selectedColorName = document.getElementById('selected-color-name');
  const stageGlow = document.getElementById('stage-glow');
  const configCarImg = document.getElementById('config-car-img');
  const stageTrimBadge = document.getElementById('stage-trim-badge');
  const configSummaryTitle = document.getElementById('config-summary-title');
  const configPrice = document.getElementById('config-price');

  const specEngine = document.getElementById('spec-engine');
  const specHp = document.getElementById('spec-hp');
  const specSpeed = document.getElementById('spec-speed');
  const specAccel = document.getElementById('spec-accel');
  const specGearbox = document.getElementById('spec-gearbox');
  const specFuel = document.getElementById('spec-fuel');

  let configState = {
    modelId: 's-class',
    colorName: 'Obsidian Qora Metallik',
    colorHex: '#0f1115',
    trim: 'Progressive',
    hpBonus: 0,
    priceAdd: 0
  };

  function animateValue(el, endValue) {
    const startValue = Number(el.textContent) || 0;
    const duration = 350;
    const startTime = performance.now();

    function step(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const current = Math.round(startValue + (endValue - startValue) * progress);
      el.textContent = current;
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  function updateConfigurator() {
    const car = modelsData.find((m) => m.id === configState.modelId) || modelsData[0];
    const totalHp = car.hp + configState.hpBonus;
    const totalPrice = car.price + configState.priceAdd;

    configCarImg.src = car.image;
    configCarImg.alt = `${car.name} — ${configState.colorName}`;
    stageGlow.style.background = `radial-gradient(circle at 70% 30%, ${configState.colorHex}55, rgba(7, 8, 10, 0.78))`;
    stageTrimBadge.textContent = configState.trim.toUpperCase();

    configSummaryTitle.textContent = `${car.name} • ${configState.trim}`;
    configPrice.textContent = `$${totalPrice.toLocaleString()}`;

    specEngine.textContent = car.engine;
    animateValue(specHp, totalHp);
    animateValue(specSpeed, car.speed);
    specAccel.textContent = car.accel;
    specGearbox.textContent = car.gearbox;
    specFuel.textContent = car.fuel;
  }

  modelSelect.addEventListener('change', (e) => {
    configState.modelId = e.target.value;
    updateConfigurator();
  });

  swatches.forEach((swatch) => {
    swatch.addEventListener('click', () => {
      swatches.forEach((s) => s.classList.remove('active'));
      swatch.classList.add('active');
      configState.colorName = swatch.dataset.color;
      configState.colorHex = swatch.dataset.hex;
      selectedColorName.textContent = configState.colorName;
      updateConfigurator();
    });
  });

  trimBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      trimBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      configState.trim = btn.dataset.trim;
      configState.hpBonus = Number(btn.dataset.hpBonus);
      configState.priceAdd = Number(btn.dataset.priceAdd);
      updateConfigurator();
    });
  });

  updateConfigurator();

  // ---------------------------------------------------------
  // 11, 12, 15. FORMALAR VALIDATSIYASI (TEST-DRAYV VA ALOQA)
  // ---------------------------------------------------------
  const tdDateInput = document.getElementById('td-date');
  if (tdDateInput) {
    tdDateInput.min = new Date().toISOString().split('T')[0];
  }

  function setFieldError(inputEl, errEl, message) {
    if (message) {
      inputEl.classList.add('invalid');
      errEl.textContent = message;
      return false;
    }
    inputEl.classList.remove('invalid');
    errEl.textContent = '';
    return true;
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  }

  function isValidPhone(phone) {
    const digits = phone.replace(/\D/g, '');
    return digits.length >= 9 && digits.length <= 15;
  }

  // Test-drayv formasi
  const testdriveForm = document.getElementById('testdrive-form');
  const tdStatus = document.getElementById('td-status');

  testdriveForm.addEventListener('submit', (e) => {
    e.preventDefault();
    tdStatus.className = 'form-status';
    tdStatus.textContent = '';

    const nameEl = document.getElementById('td-name');
    const phoneEl = document.getElementById('td-phone');
    const emailEl = document.getElementById('td-email');
    const modelEl = document.getElementById('td-model');
    const dateEl = document.getElementById('td-date');

    const v1 = setFieldError(
      nameEl,
      document.getElementById('err-td-name'),
      nameEl.value.trim().length < 3 ? 'Kamida 3 ta harfdan iborat ism-familiya kiriting.' : ''
    );
    const v2 = setFieldError(
      phoneEl,
      document.getElementById('err-td-phone'),
      !isValidPhone(phoneEl.value) ? 'To‘g‘ri telefon raqamini kiriting (masalan: +998 90 123 45 67).' : ''
    );
    const v3 = setFieldError(
      emailEl,
      document.getElementById('err-td-email'),
      !isValidEmail(emailEl.value) ? 'Amaldagi elektron pochta manzilini kiriting.' : ''
    );
    const v4 = setFieldError(
      modelEl,
      document.getElementById('err-td-model'),
      !modelEl.value ? 'Iltimos, avtomobil modelini tanlang.' : ''
    );
    const v5 = setFieldError(
      dateEl,
      document.getElementById('err-td-date'),
      !dateEl.value ? 'Test-drayv sanasini tanlang.' : ''
    );

    if (v1 && v2 && v3 && v4 && v5) {
      tdStatus.className = 'form-status success';
      tdStatus.textContent = `Demo rejim: Rahmat, ${nameEl.value.trim()}! ${modelEl.value} uchun ${dateEl.value} sanasiga test-drayv so‘rovingiz qabul qilindi.`;
      testdriveForm.reset();
    }
  });

  // Aloqa formasi
  const contactForm = document.getElementById('contact-form');
  const ctStatus = document.getElementById('ct-status');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    ctStatus.className = 'form-status';
    ctStatus.textContent = '';

    const nameEl = document.getElementById('ct-name');
    const emailEl = document.getElementById('ct-email');
    const msgEl = document.getElementById('ct-message');

    const v1 = setFieldError(
      nameEl,
      document.getElementById('err-ct-name'),
      nameEl.value.trim().length < 2 ? 'Ismingizni kiriting.' : ''
    );
    const v2 = setFieldError(
      emailEl,
      document.getElementById('err-ct-email'),
      !isValidEmail(emailEl.value) ? 'To‘g‘ri elektron pochta manzilini kiriting.' : ''
    );
    const v3 = setFieldError(
      msgEl,
      document.getElementById('err-ct-message'),
      msgEl.value.trim().length < 10 ? 'Xabar matni kamida 10 ta belgidan iborat bo‘lsin.' : ''
    );

    if (v1 && v2 && v3) {
      ctStatus.className = 'form-status success';
      ctStatus.textContent = `Demo rejim: Xabaringiz qabul qilindi, ${nameEl.value.trim()}. Tez orada siz bilan bog‘lanamiz.`;
      contactForm.reset();
    }
  });

  // ---------------------------------------------------------
  // 13. MIJOZLAR FIKRI SLAYDERI
  // ---------------------------------------------------------
  const reviewStars = document.getElementById('review-stars');
  const reviewText = document.getElementById('review-text');
  const reviewAuthor = document.getElementById('review-author');
  const reviewCar = document.getElementById('review-car');
  const prevReviewBtn = document.getElementById('prev-review');
  const nextReviewBtn = document.getElementById('next-review');
  const reviewDots = document.getElementById('review-dots');

  let currentReview = 0;

  reviewDots.innerHTML = reviewsData
    .map(
      (_, i) =>
        `<button type="button" class="dot-btn ${i === 0 ? 'active' : ''}" data-idx="${i}" aria-label="${i + 1}-fikrga o‘tish"></button>`
    )
    .join('');

  function renderReview(index) {
    currentReview = (index + reviewsData.length) % reviewsData.length;
    const item = reviewsData[currentReview];
    reviewStars.textContent = item.stars;
    reviewText.textContent = item.text;
    reviewAuthor.textContent = item.author;
    reviewCar.textContent = item.car;

    reviewDots.querySelectorAll('.dot-btn').forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentReview);
    });
  }

  prevReviewBtn.addEventListener('click', () => renderReview(currentReview - 1));
  nextReviewBtn.addEventListener('click', () => renderReview(currentReview + 1));

  reviewDots.querySelectorAll('.dot-btn').forEach((dot) => {
    dot.addEventListener('click', () => renderReview(Number(dot.dataset.idx)));
  });

  // ---------------------------------------------------------
  // 14. FAQ ACCORDION
  // ---------------------------------------------------------
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      faqItems.forEach((other) => {
        other.classList.remove('open');
        other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('open');
        questionBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // ---------------------------------------------------------
  // 16 & 17. SCROLL ANIMATSIYALARI VA YUQORIGA QAYTISH
  // ---------------------------------------------------------
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

  const backToTopBtn = document.getElementById('back-to-top');
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}); 