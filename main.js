// ========== DATA ==========
const PRODUCTS = [
  {
    id: 1,
    category: "accessories",
    name: "سوار ذهبي فاخر",
    price: 149,
    oldPrice: 200,
    image:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80",
    images: [
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80",
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80",
    ],
    description:
      "سوار ذهبي عيار 18 مصنوع بدقة عالية، مناسب للمناسبات والسهرات الراقية. متوفر بأحجام متعددة.",
    available: true,
    badge: "الأكثر مبيعاً",
  },
  {
    id: 2,
    category: "accessories",
    name: "قلادة لؤلؤ طبيعي",
    price: 220,
    oldPrice: null,
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&q=80",
    ],
    description:
      "قلادة لؤلؤ طبيعي أصلي من أعماق البحر، تصميم كلاسيكي أنيق يناسب كل إطلالة.",
    available: true,
    badge: null,
  },
  {
    id: 3,
    category: "accessories",
    name: "خاتم ألماس ستانلس",
    price: 89,
    oldPrice: 120,
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80",
    ],
    description: "خاتم ستانلس ستيل عالي الجودة مرصع بحجر ألماس اصطناعي لامع.",
    available: true,
    badge: "عرض",
  },
  {
    id: 4,
    category: "perfumes",
    name: "عطر عود الملوك",
    price: 350,
    oldPrice: 450,
    image: "img/1.jfif",
    images: ["img/1.jfif", "img/2.jpg"],
    description:
      "عطر عود خشبي فاخر من قلب الشرق، رائحة تدوم طويلاً تعكس الأصالة والفخامة. 100ml.",
    available: true,
    badge: "الأكثر مبيعاً",
  },
  {
    id: 5,
    category: "perfumes",
    name: "برفان روز دو مارك",
    price: 280,
    oldPrice: null,
    image:
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&q=80",
    images: [
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=600&q=80",
      "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=600&q=80",
    ],
    description:
      "عطر نسائي بعبق الورود المغربية الأصيلة، تركيبة فرنسية حصرية. 75ml.",
    available: true,
    badge: null,
  },
  {
    id: 6,
    category: "perfumes",
    name: "مسك أبيض فاخر",
    price: 195,
    oldPrice: 240,
    image:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400&q=80",
    images: [
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&q=80",
    ],
    description:
      "مسك أبيض نقي برائحة هادئة ومميزة، مناسب للاستخدام اليومي. 50ml.",
    available: false,
    badge: null,
  },
  {
    id: 7,
    category: "herbs",
    name: "شيبة مغربية أصلية",
    price: 45,
    oldPrice: null,
    image:
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400&q=80",
    images: [
      "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=600&q=80",
      "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=600&q=80",
    ],
    description:
      "شيبة مغربية طبيعية 100% مجففة يدوياً من جبال الأطلس، غنية بالزيوت العطرية. 200g.",
    available: true,
    badge: null,
  },
  {
    id: 8,
    category: "herbs",
    name: "زعتر جبلي طبيعي",
    price: 35,
    oldPrice: null,
    image: "img/3.jfif",
    images: ["img/3.jfif", "img/4.jfif"],
    description:
      "زعتر جبلي طبيعي عضوي من مزارع شمال المغرب، يستخدم للطبخ والأعشاب الطبية. 150g.",
    available: true,
    badge: "جديد",
  },
  {
    id: 9,
    category: "other",
    name: "صابون بلدي أركان",
    price: 55,
    oldPrice: 70,
    image: "img/5.jfif",
    images: [
      "img/5.jfif",

      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&q=80",
    ],
    description:
      "صابون بلدي مغربي أصلي بزيت أركان النفيس، مرطب ومغذي للبشرة. 150g.",
    available: true,
    badge: "الأكثر مبيعاً",
  },
  {
    id: 10,
    category: "other",
    name: "غاسول طبيعي أصلي",
    price: 40,
    oldPrice: null,
    image:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&q=80",
    images: [
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&q=80",
    ],
    description:
      "غاسول مغربي أصلي من منطقة الريف، نقي 100% بدون إضافات كيميائية. 300g.",
    available: true,
    badge: null,
  },
];

const CATEGORIES = [
  { id: "accessories", label: "الإكسسوارات", icon: "💎" },
  { id: "perfumes", label: "العطور", icon: "🌸" },
  { id: "herbs", label: "الأعشاب", icon: "🌿" },
  { id: "other", label: "منتجات أخرى", icon: "✨" },
];

const WHATSAPP_NUMBER = "212661978081";

// ========== STATE ==========
let cart = [];
let previousPage = { name: "home", data: null };
let currentPage = { name: "home", data: null };
let confirmItem = null;
let quickViewProduct = null;
let orderCart = [];
let slideIndex = 0;
let slideInterval = null;
let toastTimeout = null;

// ========== NAVIGATION ==========
function getUrlPath(pageName, data) {
  // Professional URLs for Asala Shop
  if (pageName === "home") return "#/";
  if (pageName === "category") return `#/products/${data || "all"}`;
  if (pageName === "product") return `#/product/${data}`;
  if (pageName === "cart") return "#/cart";
  return "#/";
}

function navigate(pageName, data = null) {
  previousPage = { ...currentPage };
  currentPage = { name: pageName, data };
  const url = getUrlPath(pageName, data);
  window.location.hash = url;
  window.scrollTo({ top: 0, behavior: "smooth" });
  renderPage();
}

function parseUrlPath() {
  const hash = window.location.hash;

  if (!hash || hash === "#" || hash === "#/") {
    return { name: "home", data: null };
  }
  if (hash.startsWith("#/products/")) {
    const category = hash.replace("#/products/", "");
    return { name: "category", data: category === "all" ? null : category };
  }
  if (hash.startsWith("#/product/")) {
    const productId = parseInt(hash.replace("#/product/", ""));
    return { name: "product", data: productId };
  }
  if (hash === "#/cart") {
    return { name: "cart", data: null };
  }
  return { name: "home", data: null };
}

window.addEventListener("hashchange", () => {
  currentPage = parseUrlPath();
  window.scrollTo({ top: 0, behavior: "smooth" });
  renderPage();
});

function goBack() {
  if (previousPage.name !== currentPage.name) {
    currentPage = { ...previousPage };
    previousPage = { name: "home", data: null };
    window.location.hash = getUrlPath(currentPage.name, currentPage.data);
    window.scrollTo({ top: 0, behavior: "smooth" });
    renderPage();
  } else {
    navigate("home");
  }
}

// ========== LOCALSTORAGE UTILS ==========
function saveCartToStorage() {
  localStorage.setItem("asalaCart", JSON.stringify(cart));
}

function loadCartFromStorage() {
  const saved = localStorage.getItem("asalaCart");
  if (saved) {
    try {
      cart = JSON.parse(saved);
      updateCartBadge();
    } catch (e) {
      console.log("خطأ في تحميل السلة");
      cart = [];
    }
  }
}

function clearCartStorage() {
  localStorage.removeItem("asalaCart");
  cart = [];
}

// ========== CART UTILS ==========
function getCartCount() {
  return cart.reduce((s, i) => s + i.qty, 0);
}

function updateCartBadge() {
  const badge = document.getElementById("cart-badge");
  const count = getCartCount();
  if (count > 0) {
    badge.textContent = count;
    badge.style.display = "flex";
  } else {
    badge.style.display = "none";
  }
}

function addToCart(product) {
  const existing = cart.find((i) => i.id === product.id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  updateCartBadge();
  saveCartToStorage();
}

function updateQty(id, qty) {
  if (qty <= 0) {
    removeFromCart(id);
    return;
  }
  const item = cart.find((i) => i.id === id);
  if (item) item.qty = qty;
  updateCartBadge();
  saveCartToStorage();
  // re-render cart if on cart page
  if (currentPage.name === "cart") renderPage();
}

function removeFromCart(id) {
  cart = cart.filter((i) => i.id !== id);
  updateCartBadge();
  saveCartToStorage();
  if (currentPage.name === "cart") renderPage();
}

// ========== CONFIRM POPUP ==========
function handleAddToCart(product) {
  confirmItem = product;
  document.getElementById("confirm-text").innerHTML =
    `هل تريد إضافة <strong>${product.name}</strong> إلى السلة؟`;
  document.getElementById("confirm-popup").style.display = "flex";
}

function confirmAdd() {
  if (!confirmItem) return;
  addToCart(confirmItem);
  showToast(`تمت إضافة "${confirmItem.name}" إلى السلة`);
  confirmItem = null;
  document.getElementById("confirm-popup").style.display = "none";
}

function cancelConfirm() {
  confirmItem = null;
  document.getElementById("confirm-popup").style.display = "none";
}

// ========== ORDER MODAL ==========
function openOrderModal(items) {
  orderCart = items;
  // reset fields
  ["order-name", "order-phone", "order-address", "order-notes"].forEach(
    (id) => {
      document.getElementById(id).value = "";
    },
  );
  ["error-name", "error-phone", "error-address"].forEach((id) => {
    document.getElementById(id).textContent = "";
  });

  // Show order summary
  updateOrderSummaryPreview();

  document.getElementById("order-modal").style.display = "flex";
}

function updateOrderSummaryPreview() {
  const itemsHTML = orderCart
    .map((item) => {
      const product = PRODUCTS.find((p) => p.id === item.id);
      const itemTotal = (item.price * item.qty).toFixed(0);
      return `
    <div class="order-item">
      <div class="item-image">
        <img src="${product?.image || ""}" alt="${item.name}" />
      </div>
      <div class="item-details">
        <div class="item-name">${item.name}</div>
        <div class="item-info">
          <span class="item-price">${item.price} درهم</span>
          <span class="item-qty">× ${item.qty}</span>
        </div>
      </div>
      <div class="item-total">${itemTotal} درهم</div>
    </div>`;
    })
    .join("");

  const total = orderCart.reduce((s, i) => s + i.price * i.qty, 0);

  document.getElementById("order-items-preview").innerHTML = itemsHTML;
  document.getElementById("order-total-preview").innerHTML = `
    <div class="total-row">
      <span>💰 الإجمالي:</span>
      <span class="total-amount">${total.toFixed(0)} درهم</span>
    </div>
  `;
}

function closeOrderModal() {
  document.getElementById("order-modal").style.display = "none";
}

function handleOrderOverlayClick(e) {
  if (e.target === e.currentTarget) closeOrderModal();
}

// ========== QUICK VIEW MODAL ==========
function openQuickViewModal(productId) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  quickViewProduct = product;
  const imageHTML = product.images
    .map(
      (img, i) =>
        `<img src="${img}" alt="${product.name}" class="qv-img" onclick="setQuickViewImage(this)" />`,
    )
    .join("");

  document.getElementById("quickview-main-img").src = product.images[0];
  document.getElementById("quickview-images").innerHTML = imageHTML;
  document.getElementById("quickview-name").textContent = product.name;
  document.getElementById("quickview-price").textContent =
    product.price + " درهم";
  document.getElementById("quickview-old-price").style.display =
    product.oldPrice ? "block" : "none";
  if (product.oldPrice) {
    document.getElementById("quickview-old-price").textContent =
      product.oldPrice + " درهم";
  }
  document.getElementById("quickview-description").textContent =
    product.description;

  document.getElementById("quick-view-modal").style.display = "flex";
}

function closeQuickViewModal() {
  document.getElementById("quick-view-modal").style.display = "none";
  quickViewProduct = null;
}

function setQuickViewImage(imgElement) {
  document.getElementById("quickview-main-img").src = imgElement.src;
  document.querySelectorAll(".qv-img").forEach((img) => {
    img.classList.remove("active");
  });
  imgElement.classList.add("active");
}

function handleQuickViewOverlayClick(e) {
  if (e.target === e.currentTarget) closeQuickViewModal();
}

function handleOrderOverlayClick(e) {
  if (e.target === e.currentTarget) closeOrderModal();
}

function submitOrder() {
  const name = document.getElementById("order-name").value.trim();
  const phone = document.getElementById("order-phone").value.trim();
  const address = document.getElementById("order-address").value.trim();
  const notes = document.getElementById("order-notes").value.trim();

  let valid = true;
  document.getElementById("error-name").textContent = "";
  document.getElementById("error-phone").textContent = "";
  document.getElementById("error-address").textContent = "";

  if (!name) {
    document.getElementById("error-name").textContent = "الاسم مطلوب";
    valid = false;
  }
  if (!phone || !/^0\d{9}$/.test(phone)) {
    document.getElementById("error-phone").textContent = "رقم هاتف غير صحيح";
    valid = false;
  }
  if (!address) {
    document.getElementById("error-address").textContent = "العنوان مطلوب";
    valid = false;
  }

  if (!valid) return;

  // Build product list
  const itemsDetails = orderCart
    .map((i) => {
      const product = PRODUCTS.find((p) => p.id === i.id);
      const itemTotal = (i.price * i.qty).toFixed(0);
      return `*${i.name}*
السعر: ${i.price} درهم
الكمية: ${i.qty}
الإجمالي: ${itemTotal} درهم`;
    })
    .join("\n\n");

  const msg = `
📋 *طلب جديد*

👤 *اسم العميل:* ${name}
📱 *رقم الهاتف:* ${phone}
📍 *العنوان:* ${address}

📦 *المنتجات:*
${itemsDetails}
${notes ? `📝 *ملاحظات:* ${notes}\n` : ""}
✅ *الحالة:* في الانتظار
`;

  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
    "_blank",
  );
  closeOrderModal();
  clearCartStorage();
  updateCartBadge();
  showToast("تم إرسال طلبك بنجاح! سنتواصل معك قريباً ✅");
  if (currentPage.name === "cart") renderPage();
}

// ========== TOAST ==========
function showToast(message) {
  const el = document.getElementById("toast");
  el.innerHTML = `<span>✅</span><span>${message}</span>`;
  el.style.display = "flex";
  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    el.style.display = "none";
  }, 3000);
}

// ========== HERO SLIDER ==========
function startSlider(heroProducts) {
  if (slideInterval) clearInterval(slideInterval);
  slideIndex = 0;
  updateSlide(heroProducts);
  slideInterval = setInterval(() => {
    slideIndex = (slideIndex + 1) % heroProducts.length;
    updateSlide(heroProducts);
  }, 4000);
}

function updateSlide(heroProducts) {
  document.querySelectorAll(".slide").forEach((el, i) => {
    el.classList.toggle("active", i === slideIndex);
  });
  document.querySelectorAll(".dot").forEach((el, i) => {
    el.classList.toggle("active", i === slideIndex);
  });
}

function prevSlide(heroProducts) {
  slideIndex = (slideIndex - 1 + heroProducts.length) % heroProducts.length;
  updateSlide(heroProducts);
}

function nextSlide(heroProducts) {
  slideIndex = (slideIndex + 1) % heroProducts.length;
  updateSlide(heroProducts);
}

// ========== RENDER HELPERS ==========
function renderProductCard(p, onViewClick) {
  const priceText = `${p.price} درهم`;
  const badge = p.badge ? `باج: ${p.badge}` : "";
  const availability = p.available ? "المنتج متوفر" : "المنتج غير متوفر";
  const ariaLabel = `${p.name}، ${availability}، السعر: ${priceText}${badge ? `, ${badge}` : ""}`;

  // Optimize image for mobile vs desktop
  let imageUrl = p.image;
  if (window.innerWidth < 768) {
    // Mobile: use smaller, lower quality image
    imageUrl = imageUrl
      .replace("w=400", "w=250")
      .replace("w=600", "w=250")
      .replace("q=80", "q=50");
  }

  return `
    <article class="prod-card" aria-label="${ariaLabel}">
      <div class="prod-img-wrap" onclick="${onViewClick}" role="button" tabindex="0" onkeypress="if(event.key==='Enter' || event.key===' ') ${onViewClick}">
        <img src="${imageUrl}" alt="${p.name} - ${p.category}" class="prod-img" loading="lazy" decoding="async" />
        ${p.badge ? `<div class="prod-badge" aria-label="باج: ${p.badge}">${p.badge}</div>` : ""}
        ${!p.available ? `<div class="unavailable-overlay" aria-label="غير متوفر">غير متوفر</div>` : ""}
      </div>
      <div class="prod-info">
        <h3 class="prod-name" onclick="${onViewClick}" role="button" tabindex="0" onkeypress="if(event.key==='Enter' || event.key===' ') ${onViewClick}">${p.name}</h3>
        <div class="prod-price-row">
          <div class="prod-price" aria-label="السعر الحالي">${p.price} درهم</div>
          ${p.oldPrice ? `<div class="prod-old-price" aria-label="السعر الأصلي">${p.oldPrice} درهم</div>` : ""}
        </div>
        <div class="prod-buttons">
          <button 
            class="prod-btn" 
            ${!p.available ? "disabled" : ""} 
            onclick="navigate('product', ${p.id})"
            aria-label="عرض تفاصيل${" " + p.name}"
          >
            ${p.available ? "📋 عرض المنتج" : "غير متوفر"}
          </button>
          <button 
            class="prod-btn btn-order-now" 
            ${!p.available ? "disabled" : ""} 
            onclick="openOrderModal([{...PRODUCTS.find(x=>x.id===${p.id}), qty:1}])"
            aria-label="اطلب${" " + p.name + " الآن عبر واتساب"}"
          >
            ${p.available ? "📲 اطلب الآن" : "غير متوفر"}
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderFooter() {
  // <p class="footer-contact">📞 للتواصل: 0606050622 &nbsp;|&nbsp; 📲 WhatsApp متاح 24/7</p>
  return `
    <footer>
      <div class="footer-logo">Asala Shop</div>
      <p class="footer-sub">متجر إلكتروني مغربي متخصص في الإكسسوارات والعطور والأعشاب</p>
      <p class="footer-copy">© 2026 Asala Shop — جميع الحقوق محفوظة</p>
    </footer>
  `;
}

// ========== PAGE: HOME ==========
function renderHomePage() {
  const heroProducts = PRODUCTS.filter((p) => p.badge).slice(0, 4);
  const featured = PRODUCTS;

  const slidesHTML = heroProducts
    .map((p, i) => {
      // Optimize image size for mobile vs desktop
      let imageUrl = p.image;
      if (window.innerWidth < 768) {
        // Mobile: use smaller image
        imageUrl = imageUrl
          .replace("w=400", "w=300")
          .replace("w=600", "w=300")
          .replace("q=80", "q=60");
      }
      return `
    <div class="slide ${i === 0 ? "active" : ""}">
      <img src="${imageUrl}" alt="${p.name}" class="slide-img" loading="${i === 0 ? "eager" : "lazy"}" />
      <div class="slide-content">
        ${p.badge ? `<div class="slide-badge">${p.badge}</div>` : ""}
        <div class="slide-title">${p.name}</div>
        <div class="slide-price">${p.price} درهم</div>
        <div style="display:flex;gap:12px;flex-wrap:wrap;">
          <button class="btn-gold" onclick="navigate('product', ${p.id})">عرض المنتج</button>
          <button class="btn-whatsapp" onclick="openOrderModal([{...PRODUCTS.find(x=>x.id===${p.id}), qty:1}])">اطلب الآن</button>
        </div>
      </div>
    </div>`;
    })
    .join("");

  const dotsHTML = heroProducts
    .map(
      (_, i) =>
        `<button 
          class="dot ${i === 0 ? "active" : ""}" 
          onclick="slideIndex=${i};updateSlide(PRODUCTS.filter(p=>p.badge).slice(0,4))"
          aria-label="انتقل إلى الشريحة ${i + 1}"
          role="tab"
          aria-selected="${i === 0 ? "true" : "false"}"
        ></button>`,
    )
    .join("");

  const catsHTML = CATEGORIES.map((cat) => {
    const count = PRODUCTS.filter((p) => p.category === cat.id).length;
    return `
      <button 
        class="cat-card" 
        onclick="navigate('category', '${cat.id}')"
        role="listitem"
        aria-label="${cat.label}، ${count} منتج"
      >
        <div class="cat-icon" aria-hidden="true">${cat.icon}</div>
        <h3 class="cat-name">${cat.label}</h3>
        <div class="cat-count">${count} منتج</div>
      </button>
    `;
  }).join("");

  const featuredHTML = featured
    .map((p) => renderProductCard(p, `navigate('product', ${p.id})`))
    .join("");

  document.getElementById("app").innerHTML = `
    <section class="hero" id="hero-slider" role="region" aria-label="عرض المنتجات البارزة">
      ${slidesHTML}
      <button class="slide-arrow prev" onclick="prevSlide(PRODUCTS.filter(p=>p.badge).slice(0,4))" aria-label="الشريحة السابقة">›</button>
      <button class="slide-arrow next" onclick="nextSlide(PRODUCTS.filter(p=>p.badge).slice(0,4))" aria-label="الشريحة التالية">‹</button>
      <div class="slide-dots" role="tablist" aria-label="عرض الشرائح">${dotsHTML}</div>
    </section>

    <section class="section" aria-labelledby="categories-title">
      <h2 class="section-title" id="categories-title"><span aria-hidden="true">🏪</span> تصفح الأقسام</h2>
      <p class="section-sub">اكتشف مجموعتنا المتنوعة من المنتجات المختارة بعناية</p>
      <div class="cat-grid" role="list">${catsHTML}</div>
    </section>

    <section class="section" style="padding-top:0;" aria-labelledby="products-title">
      <h2 class="section-title" id="products-title"><span aria-hidden="true">🔥</span> منتجاتنا</h2>
      <p class="section-sub">جميع المنتجات المتاحة في متجرنا</p>
      <div class="prod-grid" role="list">${featuredHTML}</div>
    </section>

    ${renderFooter()}
  `;

  startSlider(heroProducts);
}

// ========== PAGE: CATEGORY ==========
function renderCategoryPage(categoryId) {
  const cat = CATEGORIES.find((c) => c.id === categoryId);
  const activeFilter = categoryId || "all";

  const filterBtns = [
    `<button class="filter-btn ${activeFilter === "all" ? "active" : ""}" onclick="renderCategoryPageWithFilter('all')">الكل</button>`,
    ...CATEGORIES.map(
      (c) =>
        `<button class="filter-btn ${activeFilter === c.id ? "active" : ""}" onclick="renderCategoryPageWithFilter('${c.id}')">${c.icon} ${c.label}</button>`,
    ),
  ].join("");

  const products =
    activeFilter === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeFilter);
  const prodsHTML = products
    .map((p) => renderProductCard(p, `navigate('product', ${p.id})`))
    .join("");

  // <div style="display: flex; align-items: center; gap: 12px;">
  //   <button class="back-btn" onclick="goBack()">← رجوع</button>
  //   <div>
  //     <h1>${cat ? `${cat.icon} ${cat.label}` : "جميع المنتجات"}</h1>
  //     <div class="breadcrumb" onclick="navigate('home')">
  //       الرئيسية &nbsp;›&nbsp; <span>${cat?.label || "المنتجات"}</span>
  //     </div>
  //   </div>
  // </div>
  document.getElementById("app").innerHTML = `
    <div class="page-header">
   
    </div>
    <div class="section">
      <div class="filter-bar">${filterBtns}</div>
      <div class="prod-grid">${prodsHTML}</div>
    </div>
    ${renderFooter()}
  `;
}

function renderCategoryPageWithFilter(filterId) {
  const cat = CATEGORIES.find((c) => c.id === filterId);
  currentPage.data = filterId === "all" ? null : filterId;

  const filterBtns = [
    `<button class="filter-btn ${filterId === "all" ? "active" : ""}" onclick="renderCategoryPageWithFilter('all')">الكل</button>`,
    ...CATEGORIES.map(
      (c) =>
        `<button class="filter-btn ${filterId === c.id ? "active" : ""}" onclick="renderCategoryPageWithFilter('${c.id}')">${c.icon} ${c.label}</button>`,
    ),
  ].join("");

  const products =
    filterId === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === filterId);
  const prodsHTML = products
    .map((p) => renderProductCard(p, `navigate('product', ${p.id})`))
    .join("");

  document.querySelector(".filter-bar").innerHTML = filterBtns;
  document.querySelector(".prod-grid").innerHTML = prodsHTML;
  document.querySelector(".page-header h1").textContent = cat
    ? `${cat.icon} ${cat.label}`
    : "جميع المنتجات";
}

// ========== PAGE: PRODUCT DETAIL ==========
let activeThumbIndex = 0;

function renderProductPage(productId) {
  const p = PRODUCTS.find((pr) => pr.id === productId);
  if (!p) {
    navigate("home");
    return;
  }
  activeThumbIndex = 0;

  const cat = CATEGORIES.find((c) => c.id === p.category);

  const thumbsHTML =
    p.images.length > 1
      ? `<div class="pd-thumbs" role="region" aria-label="معاينات الصور">${p.images.map((img, i) => `<button class="pd-thumb ${i === 0 ? "active" : ""}" onclick="setThumb(${i}, ${productId})" aria-label="صورة ${i + 1} من ${p.images.length}" aria-current="${i === 0 ? "true" : "false"}"><img src="${img}" alt="" /></button>`).join("")}</div>`
      : "";

  document.getElementById("app").innerHTML = `
    <div class="page-header">
      <div style="display: flex; align-items: center; gap: 12px;">
        <button class="back-btn" onclick="goBack()" aria-label="الرجوع للصفحة السابقة">← رجوع</button>
        <div>
          <h1 class="prod-title">${p.name}</h1>
          <nav class="breadcrumb" role="navigation" aria-label="مسار التنقل">
            <button onclick="navigate('home')" aria-label="الذهاب للرئيسية">الرئيسية</button>
            <span aria-hidden="true">&nbsp;›&nbsp;</span>
            <button onclick="navigate('category', '${p.category}')" aria-label="عرض جميع ${cat?.label || "المنتجات"}">${cat?.label || ""}</button>
            <span aria-hidden="true">&nbsp;›&nbsp;</span>
            <span aria-current="page">${p.name}</span>
          </nav>
        </div>
      </div>
    </div>
    <div class="pd-layout">
      <div class="pd-gallery">
        <img 
          src="${p.images[0]}" 
          alt="صورة رئيسية للمنتج: ${p.name}" 
          class="pd-main-img" 
          id="pd-main-img" 
          role="img"
        />
        ${thumbsHTML}
      </div>
      <div>
        <div class="pd-status ${p.available ? "in" : "out"}" role="status" aria-live="polite">
          ${p.available ? '<span aria-hidden="true">✅</span> متوفر في المخزون' : '<span aria-hidden="true">❌</span> غير متوفر حالياً'}
        </div>
        <h2 class="pd-name">${p.name}</h2>
        <div class="pd-price" aria-label="السعر">${p.price} درهم</div>
        ${p.oldPrice ? `<div class="pd-old-price" aria-label="السعر الأصلي">${p.oldPrice} درهم</div>` : ""}
        <div class="pd-desc">${p.description}</div>
        <div class="pd-actions">
          <button 
            class="btn-gold" 
            ${!p.available ? "disabled" : ""} 
            onclick="handleAddToCart(PRODUCTS.find(x=>x.id===${p.id}))"
            aria-label="أضف ${p.name} إلى السلة"
          >
            <span aria-hidden="true">🛒</span> إضافة إلى السلة
          </button>
          <button 
            class="btn-whatsapp" 
            ${!p.available ? "disabled" : ""} 
            onclick="openOrderModal([{...PRODUCTS.find(x=>x.id===${p.id}), qty:1}])"
            aria-label="اطلب ${p.name} الآن عبر واتساب"
          >
            <span aria-hidden="true">📲</span> اطلب الآن
          </button>
        </div>
      </div>
    </div>
    ${renderFooter()}
  `;
}

function setThumb(index, productId) {
  const p = PRODUCTS.find((pr) => pr.id === productId);
  if (!p) return;
  activeThumbIndex = index;
  document.getElementById("pd-main-img").src = p.images[index];
  document.getElementById("pd-main-img").alt =
    `صورة رئيسية للمنتج: ${p.name} - الصورة ${index + 1} من ${p.images.length}`;
  document.querySelectorAll(".pd-thumb").forEach((el, i) => {
    el.classList.toggle("active", i === index);
    el.setAttribute("aria-current", i === index ? "true" : "false");
  });
}

// ========== PAGE: CART ==========
function renderCartPage() {
  if (cart.length === 0) {
    document.getElementById("app").innerHTML = `
      <div class="page-header"><h1>سلة المشتريات</h1></div>
      <div class="empty">
        <div class="empty-icon" aria-hidden="true">🛒</div>
        <h2>السلة فارغة</h2>
        <p>لم تضف أي منتجات بعد</p>
        <button class="btn-gold" onclick="navigate('category', null)">تصفح المنتجات</button>
      </div>
      ${renderFooter()}
    `;
    return;
  }

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  const itemsHTML = cart
    .map(
      (item) => `
    <article class="cart-item" role="region" aria-label="منتج في السلة: ${item.name}">
      <img src="${item.image}" alt="${item.name} - صورة المنتج في السلة" class="cart-item-img" />
      <div>
        <h3 class="cart-item-name">${item.name}</h3>
        <div class="cart-item-price" aria-label="السعر">${item.price} درهم / قطعة</div>
        <div class="qty-ctrl" role="region" aria-label="التحكم في الكمية">
          <button 
            class="qty-btn" 
            onclick="updateQty(${item.id}, ${item.qty - 1})"
            aria-label="تقليل كمية ${item.name}"
            title="تقليل الكمية"
          >
            −
          </button>
          <span class="qty-val" aria-label="الكمية الحالية">${item.qty}</span>
          <button 
            class="qty-btn" 
            onclick="updateQty(${item.id}, ${item.qty + 1})"
            aria-label="زيادة كمية ${item.name}"
            title="زيادة الكمية"
          >
            +
          </button>
          <span style="font-size:13px;color:var(--gold-light);margin-right:8px;" aria-label="السعر الإجمالي للمنتج">= ${(item.price * item.qty).toFixed(0)} درهم</span>
        </div>
      </div>
      <button 
        class="del-btn" 
        onclick="removeFromCart(${item.id})"
        aria-label="حذف ${item.name} من السلة"
        title="حذف المنتج"
      >
        <span aria-hidden="true">🗑</span>
      </button>
    </article>
  `,
    )
    .join("");

  document.getElementById("app").innerHTML = `
    <div class="page-header">
      <h1>سلة المشتريات <span aria-label="عدد المنتجات">(${cart.length} منتجات)</span></h1>
    </div>
    <div class="cart-layout">
      <div role="list" aria-label="قائمة المنتجات في السلة">
        ${itemsHTML}
      </div>
      <section class="cart-summary" aria-labelledby="cart-total-label">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
          <span id="cart-total-label" style="font-size:18px;font-weight:700;">المجموع الإجمالي</span>
          <span class="cart-total" aria-label="المجموع الإجمالي للسلة">${total.toFixed(0)} درهم</span>
        </div>
        <button 
          class="btn-whatsapp" 
          style="width:100%;justify-content:center;" 
          onclick="openOrderModal([...cart])"
          aria-label="اطلب جميع المنتجات في السلة عبر واتساب"
        >
          <span aria-hidden="true">📲</span> اطلب الكل عبر واتساب
        </button>
      </section>
    </div>
    ${renderFooter()}
  `;
}

// ========== RENDER PAGE ==========
function renderPage() {
  if (slideInterval) clearInterval(slideInterval);

  switch (currentPage.name) {
    case "home":
      renderHomePage();
      break;
    case "category":
      renderCategoryPage(currentPage.data);
      break;
    case "product":
      renderProductPage(currentPage.data);
      break;
    case "cart":
      renderCartPage();
      break;
    default:
      renderHomePage();
  }
}

// ========== NAV CATEGORIES ==========
function renderNavCategories() {
  const container = document.getElementById("nav-categories");
  container.innerHTML = CATEGORIES.map(
    (cat) => `
    <button 
      class="nav-cat-btn" 
      onclick="navigate('category', '${cat.id}')"
      aria-label="${cat.label}"
      title="${cat.label}"
    >
      <span aria-hidden="true">${cat.icon}</span> ${cat.label}
    </button>
  `,
  ).join("");
}

// ========== MOBILE MENU ==========
function renderMobileMenu() {
  const container = document.getElementById("mobile-menu-content");
  const menuItems = [
    { icon: "🏠", label: "الرئيسية", action: "navigate('home')" },
    ...CATEGORIES.map((cat) => ({
      icon: cat.icon,
      label: cat.label,
      action: `navigate('category', '${cat.id}')`,
    })),
    { icon: "🛒", label: "سلة المشتريات", action: "navigate('cart')" },
  ];

  container.innerHTML = menuItems
    .map(
      (item) => `
    <div class="mobile-menu-item" onclick="${item.action}; closeMenu()">
      <span class="mobile-menu-item-icon">${item.icon}</span>
      <span>${item.label}</span>
    </div>
  `,
    )
    .join("");
}

// ========== INIT ==========
// Load cart from storage
loadCartFromStorage();

// Defer initial render to after fonts load for better performance
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initPage);
} else {
  initPage();
}

function initPage() {
  // Parse initial URL and set current page
  if (!window.location.hash) {
    window.location.hash = "#/";
  }
  const initialPath = parseUrlPath();
  currentPage = initialPath;

  renderNavCategories();
  renderMobileMenu();

  // Add mobile class for performance
  const isMobile = window.innerWidth < 768;
  if (isMobile) {
    document.documentElement.classList.add("mobile-device");
  }

  // Defer heavy rendering
  if (window.requestIdleCallback) {
    requestIdleCallback(() => {
      renderPage();
      // Enable animations after render
      if (isMobile) {
        setTimeout(() => {
          document.documentElement.classList.add("interactive");
        }, 500);
      }
    });
  } else {
    setTimeout(() => {
      renderPage();
      if (isMobile) {
        setTimeout(() => {
          document.documentElement.classList.add("interactive");
        }, 500);
      }
    }, 0);
  }
}
