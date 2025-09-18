let currentUser = null;
let isAdmin = false;
let visitorsCount = 127;
let cart = [];
let menuItems = [];
let orders = [];
let customers = [];
let notifications = [];
let currentPaymentMethod = null;
let currentOrderData = null;
let filteredMenuItems = [];
let currentFilter = "all";
let searchQuery = "";

// Initialize default menu items
const defaultMenuItems = [
  {
    id: 1,
    name: "Nasi Goreng Spesial",
    price: 25000,
    image:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=300&h=200&fit=crop",
    description: "Nasi goreng dengan telur, ayam, dan sayuran segar",
    discount: 10,
    sold: 45,
    category: "food",
  },
  {
    id: 2,
    name: "Ayam Bakar Madu",
    price: 35000,
    image:
      "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=300&h=200&fit=crop",
    description: "Ayam bakar dengan bumbu madu spesial yang lezat",
    discount: 15,
    sold: 32,
    category: "food",
  },
  {
    id: 3,
    name: "Sate Kambing",
    price: 30000,
    image:
      "https://images.unsplash.com/photo-1529563021893-cc83c992d75d?w=300&h=200&fit=crop",
    description: "Sate kambing empuk dengan bumbu kacang khas",
    discount: 0,
    sold: 28,
    category: "food",
  },
  {
    id: 4,
    name: "Gado-Gado Jakarta",
    price: 20000,
    image: "makanan/4.jpg",
    description: "Gado-gado dengan sayuran segar dan bumbu kacang",
    discount: 5,
    sold: 38,
    category: "food",
  },
  {
    id: 5,
    name: "Rendang Daging",
    price: 45000,
    image: "makanan/5.jpg",
    description: "Rendang daging sapi dengan bumbu rempah tradisional",
    discount: 20,
    sold: 25,
    category: "food",
  },
  {
    id: 6,
    name: "Soto Betawi",
    price: 28000,
    image: "makanan/6.jpg",
    description: "Soto Betawi dengan daging dan jeroan yang gurih",
    discount: 0,
    sold: 35,
    category: "food",
  },
  {
    id: 7,
    name: "Nasi Gudeg Yogya",
    price: 22000,
    image: "makanan/7.jpg",
    description: "Soto Betawi dengan daging dan jeroan yang gurih",
    discount: 8,
    sold: 42,
    category: "food",
  },
  {
    id: 8,
    name: "Ikan Bakar Bumbu Rujak",
    price: 38000,
    image: "makanan/8.jpg",
    description: "Ikan segar bakar dengan bumbu rujak yang pedas",
    discount: 12,
    sold: 18,
    category: "food",
  },
  {
    id: 9,
    name: "Bakso Malang",
    price: 18000,
    image: "makanan/9.jpg",
    description: "Bakso daging sapi dengan kuah kaldu yang hangat",
    discount: 0,
    sold: 55,
    category: "food",
  },
  {
    id: 10,
    name: "Pecel Lele",
    price: 15000,
    image: "makanan/10.jpg",
    description: "Lele goreng crispy dengan sambal dan lalapan",
    discount: 5,
    sold: 48,
    category: "food",
  },
  {
    id: 11,
    name: "Es Teh Manis",
    price: 5000,
    image: "makanan/11.jpg",
    description: "Es teh manis segar untuk menemani makan",
    discount: 0,
    sold: 75,
    category: "drink",
  },
  {
    id: 12,
    name: "Es Jeruk Segar",
    price: 8000,
    image:
      "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&h=200&fit=crop",
    description: "Jus jeruk segar dengan es batu yang menyegarkan",
    discount: 10,
    sold: 52,
    category: "drink",
  },
  {
    id: 13,
    name: "Mie Ayam Bakso",
    price: 16000,
    image: "makanan/13.jpg",
    description: "Mie ayam dengan bakso dan pangsit yang lezat",
    discount: 0,
    sold: 65,
    category: "food",
  },
  {
    id: 14,
    name: "",
    price: 24000,
    image: "makanan/14.jpg",
    description: "Capcay goreng dengan sayuran segar dan daging",
    discount: 15,
    sold: 22,
    category: "food",
  },
  {
    id: 15,
    name: "Nasi Padang",
    price: 32000,
    image: "makanan/15.jpg",
    description: "Nasi padang dengan berbagai lauk khas Minang",
    discount: 10,
    sold: 38,
    category: "food",
  },
  {
    id: 16,
    name: "Sop Iga Sapi",
    price: 42000,
    image: "makanan/16.jpg",
    description: "Sup iga sapi dengan kuah bening yang hangat",
    discount: 18,
    sold: 15,
    category: "food",
  },
  {
    id: 17,
    name: "Kwetiau Goreng",
    price: 26000,
    image: "makanan/17.jpg",
    description: "Kwetiau goreng dengan tauge dan daging ayam",
    discount: 0,
    sold: 33,
    category: "food",
  },
  {
    id: 18,
    name: "Nasi Kebuli",
    price: 12000,
    image: "makanan/18.jpg",
    description: "Nasi kebuli dengan bumbu khas serta ayamnya yang gurih",
    discount: 8,
    sold: 44,
    category: "food",
  },
  {
    id: 19,
    name: "Sop Buntut",
    price: 48000,
    image: "makanan/19.jpg",
    description: "Sop buntut sapi dengan kuah kaldu yang kaya rasa",
    discount: 25,
    sold: 12,
    category: "food",
  },
  {
    id: 20,
    name: "Nasi Liwet",
    price: 19000,
    image: "makanan/20.jpg",
    description: "Nasi liwet dengan lauk pauk tradisional",
    discount: 5,
    sold: 36,
    category: "food",
  },
  {
    id: 21,
    name: "Bebek Goreng",
    price: 40000,
    image: "makanan/21.jpg",
    description: "Bebek goreng dengan sambal dan lalapan segar",
    discount: 12,
    sold: 20,
    category: "food",
  },
  {
    id: 22,
    name: "Rawon Surabaya",
    price: 29000,
    image: "makanan/22.jpg",
    description: "Rawon daging sapi khas Surabaya yang hitam legit",
    discount: 0,
    sold: 27,
    category: "food",
  },
  {
    id: 23,
    name: "Pisang Goreng",
    price: 8000,
    image: "makanan/23.jpg",
    description: "Pisang goreng crispy dengan taburan gula",
    discount: 0,
    sold: 62,
    category: "food",
  },
  {
    id: 24,
    name: "Es Campur",
    price: 12000,
    image: "makanan/24.jpg",
    description: "Es campur dengan berbagai topping segar",
    discount: 15,
    sold: 41,
    category: "drink",
  },
  {
    id: 25,
    name: "Kerak Telor",
    price: 14000,
    image: "makanan/25.jpg",
    description: "Kerak telor khas Betawi dengan kelapa parut",
    discount: 0,
    sold: 23,
    category: "food",
  },
  {
    id: 26,
    name: "soto mie bogor",
    price: 20000,
    image: "makanan/26.jpg",
    description: "soto mie yang enak dan gurih pak nardji",
    discount: 10,
    sold: 45,
    category: "food",
  },
  {
    id: 27,
    name: "sate padang jinji",
    price: 35000,
    image: "makanan/27.jpg",
    description:
      "sate padang khas padang yang empuk dibakar pake cpu computer yang overheat",
    discount: 15,
    sold: 32,
    category: "food",
  },
  {
    id: 28,
    name: "coto makassar",
    price: 20000,
    image: "makanan/28.jpg",
    description: "coto makacar yang enyak dan bergizyi dengan rempah special",
    discount: 0,
    sold: 28,
    category: "food",
  },
  {
    id: 29,
    name: "cappucino smooties",
    price: 29000,
    image: "minuman/29.jpg",
    description: "minuman cappucino dengan barista berpengalaman",
    discount: 5,
    sold: 38,
    category: "drink",
  },
  {
    id: 30,
    name: "milkshake caramel",
    price: 25000,
    image: "minuman/30.jpg",
    description: "milkshake caramel with foam europe",
    discount: 20,
    sold: 25,
    category: "drink",
  },
  {
    id: 31,
    name: "cappucino latte",
    price: 30000,
    image: "minuman/31.jpg",
    description: "cappucino with latte art",
    discount: 0,
    sold: 35,
    category: "drink",
  },
  {
    id: 32,
    name: "wine grape",
    price: 324000,
    image: "minuman/32.jpg",
    description: "wine anggur 0% alkohol",
    discount: 5,
    sold: 42,
    category: "drink",
  },
  {
    id: 33,
    name: "Milk Tea Boba",
    price: 15000,
    image: "minuman/33.jpg",
    description:
      "milk tea boba aseli dengan tingkat kemanisan seperti kamuuu :)",
    discount: 5,
    sold: 42,
    category: "drink",
  },
  {
    id: 34,
    name: "Thai tea",
    price: 24000,
    image: "minuman/34.jpg",
    description: "thai tea yang harum, WAJIB DICOBA",
    discount: 2,
    sold: 42,
    category: "drink",
  },
  {
    id: 35,
    name: "Jus Strawberry",
    price: 10000,
    image: "minuman/35.jpg",
    description: "jus strawberry yang enak di jus langsung di hutan",
    discount: 0,
    sold: 42,
    category: "drink",
  },
  {
    id: 36,
    name: "Aqua Botol",
    price: 10000,
    image: "minuman/36.jpg",
    description: "Aqua Botol 250ml",
    discount: 0,
    sold: 42,
    category: "drink",
  },
  {
    id: 37,
    name: "jus alpukat",
    price: 8000,
    image: "minuman/37.jpg",
    description: "Jus Alpukat Segar 1 Gelas",
    discount: 0,
    sold: 42,
    category: "drink",
  },
  {
    id: 38,
    name: "jus buah naga",
    price: 10000,
    image: "minuman/38.jpg",
    description: "jus buah naga dijus dengan blender",
    discount: 0,
    sold: 42,
    category: "drink",
  },
  {
    id: 39,
    name: "escream kelapa",
    price: 12000,
    image: "minuman/39.jpg",
    description: "Es cream kelapa muda segar",
    discount: 5,
    sold: 47,
    category: "drink",
  },
  {
    id: 40,
    name: "Teh Tarik",
    price: 15000,
    image: "minuman/40.jpg",
    description: "Teh tarik khas Malaysia dengan buih lembut",
    discount: 10,
    sold: 34,
    category: "drink",
  },
  {
    id: 41,
    name: "Es Cincau Hitam",
    price: 9000,
    image: "minuman/41.jpg",
    description: "Cincau hitam dengan gula merah dan santan",
    discount: 0,
    sold: 51,
    category: "drink",
  },
  {
    id: 42,
    name: "Wedang Jahe",
    price: 7000,
    image: "minuman/42.jpg",
    description: "Minuman jahe hangat yang menyegarkan badan",
    discount: 0,
    sold: 29,
    category: "drink",
  },
  {
    id: 43,
    name: "Jus Mangga",
    price: 11000,
    image: "minuman/43.jpg",
    description: "Jus mangga manis segar dari buah pilihan",
    discount: 5,
    sold: 33,
    category: "drink",
  },
  {
    id: 44,
    name: "Jus Wortel",
    price: 10000,
    image: "minuman/44.jpg",
    description: "Jus wortel sehat kaya vitamin A",
    discount: 0,
    sold: 27,
    category: "drink",
  },
  {
    id: 45,
    name: "Smoothie Pisang",
    price: 13000,
    image: "minuman/45.jpg",
    description: "Smoothie pisang lembut dan creamy",
    discount: 10,
    sold: 40,
    category: "drink",
  },
  {
    id: 46,
    name: "Lemon Tea",
    price: 9000,
    image: "minuman/46.jpg",
    description: "Teh lemon dingin dengan rasa asam manis segar",
    discount: 0,
    sold: 38,
    category: "drink",
  },
  {
    id: 47,
    name: "Kopi Tubruk",
    price: 8000,
    image: "minuman/47.jpg",
    description: "Kopi tubruk khas Indonesia dengan aroma kuat",
    discount: 5,
    sold: 43,
    category: "drink",
  },
  {
    id: 48,
    name: "Jus Melon",
    price: 9500,
    image: "minuman/48.jpg",
    description: "Jus melon dingin yang menyegarkan",
    discount: 3,
    sold: 36,
    category: "drink",
  },
  {
    id: 49,
    name: "Es Doger",
    price: 10000,
    image: "minuman/49.jpg",
    description:
      "Minuman tradisional dengan campuran santan, ketan hitam, dan tape",
    discount: 5,
    sold: 39,
    category: "drink",
  },
  {
    id: 50,
    name: "Jus Jambu Merah",
    price: 9000,
    image: "minuman/50.jpg",
    description: "Jus jambu merah segar, kaya vitamin C dan menyegarkan",
    discount: 0,
    sold: 44,
    category: "drink",
  },
];

// Initialize data
menuItems = [...defaultMenuItems];

// Initialize recent orders
orders = [
  {
    id: 1,
    customerName: "Rafael almeric situmeang",
    items: ["Nasi Goreng Spesial", "Es Teh Manis"],
    total: 30000,
    time: "2024-09-03 14:30:15",
    status: "completed",
  },
  {
    id: 2,
    customerName: "ade putra sanjaya",
    items: ["Rendang Daging", "Es Jeruk Segar"],
    total: 53000,
    time: "2024-09-03 13:42:18",
    status: "completed",
  },
  {
    id: 3,
    customerName: "M. Miftah",
    items: ["Ayam Bakar Madu", "Nasi Putih"],
    total: 40000,
    time: "2024-09-03 12:25:42",
    status: "completed",
  },
];

// DOM Elements
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const hamburger = document.getElementById("hamburger");
const pageTitle = document.getElementById("pageTitle");
const menuGrid = document.getElementById("menuGrid");
const cartSidebar = document.getElementById("cartSidebar");
const authModal = document.getElementById("authModal");
const themeToggle = document.getElementById("themeToggle");
const userMenu = document.getElementById("userMenu");
const userName = document.getElementById("userName");
const paymentModal = document.getElementById("paymentModal");
const qrisModal = document.getElementById("qrisModal");
const danaModal = document.getElementById("danaModal");
const cashModal = document.getElementById("cashModal");
const receiptModal = document.getElementById("receiptModal");

// Event Listeners
hamburger.addEventListener("click", toggleSidebar);
overlay.addEventListener("click", closeSidebar);
document.getElementById("cartClose").addEventListener("click", closeCart);
document.getElementById("authClose").addEventListener("click", closeAuth);
themeToggle.addEventListener("click", toggleTheme);
userMenu.addEventListener("click", handleUserMenuClick);
document
  .getElementById("paymentClose")
  .addEventListener("click", closePaymentModal);
document.getElementById("qrisClose").addEventListener("click", closeQrisModal);
document.getElementById("danaClose").addEventListener("click", closeDanaModal);
document.getElementById("cashClose").addEventListener("click", closeCashModal);
document
  .getElementById("receiptClose")
  .addEventListener("click", closeReceiptModal);

// Menu items click handlers
document.querySelectorAll(".menu-item").forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const section = e.currentTarget.dataset.section;
    showSection(section);
    closeSidebar();
  });
});

// Auth form handler
document.getElementById("authForm").addEventListener("submit", handleAuth);
document
  .getElementById("authSwitchLink")
  .addEventListener("click", toggleAuthMode);

// Add menu form handler
document
  .getElementById("addMenuForm")
  .addEventListener("submit", handleAddMenu);

// Functions
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const mainContent = document.querySelector(".main-content");
  const navbar = document.querySelector(".navbar");

  // Check if on mobile
  if (window.innerWidth <= 768) {
    // Mobile behavior - show/hide sidebar
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
  } else {
    // Desktop behavior - collapse/expand sidebar
    sidebar.classList.toggle("collapsed");
    mainContent.classList.toggle("collapsed");
    navbar.classList.toggle("collapsed");
  }
}

// Event listeners untuk search dan filter
function initMenuControls() {
  const searchInput = document.getElementById("menuSearch");
  const clearSearchBtn = document.getElementById("clearSearch");
  const filterBtns = document.querySelectorAll(".filter-btn");

  // Search functionality
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value.toLowerCase();
    clearSearchBtn.style.display = searchQuery ? "block" : "none";
    filterAndDisplayMenu();
  });

  // Clear search
  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    searchQuery = "";
    clearSearchBtn.style.display = "none";
    filterAndDisplayMenu();
  });

  // Filter buttons
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      filterBtns.forEach((b) => b.classList.remove("active"));
      // Add active class to clicked button
      btn.classList.add("active");

      currentFilter = btn.dataset.filter;
      filterAndDisplayMenu();
    });
  });
}

// Fungsi untuk filter dan search
function filterAndDisplayMenu() {
  filteredMenuItems = menuItems.filter((item) => {
    // Filter by category
    const matchesFilter =
      currentFilter === "all" || item.category === currentFilter;

    // Filter by search query
    const matchesSearch =
      searchQuery === "" ||
      item.name.toLowerCase().includes(searchQuery) ||
      item.description.toLowerCase().includes(searchQuery);

    return matchesFilter && matchesSearch;
  });

  displayFilteredMenu();
}

// Fungsi untuk menampilkan menu yang sudah difilter
function displayFilteredMenu() {
  const menuGrid = document.getElementById("menuGrid");

  if (filteredMenuItems.length === 0) {
    menuGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px;">
                <i class="fas fa-search" style="font-size: 48px; color: #bdc3c7; margin-bottom: 16px;"></i>
                <h3 style="color: var(--text-light); margin-bottom: 8px;">Tidak ada menu yang ditemukan</h3>
                <p style="color: #7f8c8d;">Coba gunakan kata kunci lain atau ubah filter</p>
            </div>
        `;
    return;
  }

  menuGrid.innerHTML = filteredMenuItems
    .map((item) => {
      const discountedPrice =
        item.discount > 0
          ? item.price - (item.price * item.discount) / 100
          : item.price;
      return `
            <div class="menu-card">
                ${
                  item.discount > 0
                    ? `<div class="discount-badge">-${item.discount}%</div>`
                    : ""
                }
                <img src="${item.image}" alt="${item.name}" class="menu-image">
                <div class="menu-content">
                    <div class="menu-title">${item.name}</div>
                    <div class="menu-description">${item.description}</div>
                    <div class="menu-footer">
                        <div>
                            ${
                              item.discount > 0
                                ? `<div class="menu-price discounted">Rp ${item.price.toLocaleString()}</div>
                                 <div class="discount-price">Rp ${discountedPrice.toLocaleString()}</div>`
                                : `<div class="menu-price">Rp ${item.price.toLocaleString()}</div>`
                            }
                        </div>
                        <button class="add-to-cart" onclick="addToCart(${
                          item.id
                        })">
                            <i class="fas fa-plus"></i> Tambah
                        </button>
                    </div>
                </div>
            </div>
        `;
    })
    .join("");
}

function closeSidebar() {
  // Only close on mobile
  if (window.innerWidth <= 768) {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  }
}

function closeCart() {
  cartSidebar.classList.remove("active");
  overlay.classList.remove("active");
}

function closeAuth() {
  authModal.classList.remove("active");
}

function toggleTheme() {
  const body = document.body;
  const icon = themeToggle.querySelector("i");

  if (body.hasAttribute("data-theme")) {
    body.removeAttribute("data-theme");
    icon.className = "fas fa-sun";
  } else {
    body.setAttribute("data-theme", "dark");
    icon.className = "fas fa-moon";
  }
}

function showSection(sectionName) {
  // If not admin and trying to access admin-only sections, redirect to home
  if (
    !isAdmin &&
    [
      "dashboard",
      "orders",
      "admin",
      "customers",
      "reports",
      "settings",
    ].includes(sectionName)
  ) {
    sectionName = "home";
  }
  // Hide all sections
  document.querySelectorAll(".content-section").forEach((section) => {
    section.classList.remove("active");
    section.style.display = "none";
  });

  if (sectionName === "home") {
    // Load featured menu when showing home
    setTimeout(() => {
      loadFeaturedMenu();
      initScrollAnimations();
    }, 100);
  }

  // Show selected section
  document.getElementById(sectionName + "-section").classList.add("active");

  // Update menu items`
  document.querySelectorAll(".menu-item").forEach((item) => {
    item.classList.remove("active");
  });

  const targetMenuItem = document.querySelector(
    `[data-section="${sectionName}"]`
  );
  if (targetMenuItem) {
    targetMenuItem.classList.add("active");
  }

  const targetSection = document.getElementById(sectionName + "-section");
  if (targetSection) {
    targetSection.classList.add("active");
    targetSection.style.display = "block"; // ← PAKSA SHOW
  }

  // Update page title
  // Update page title
  const titles = {
    home: "Beranda",
    resto: "Info Resto",
    dashboard: "Dashboard",
    menu: "Menu Makanan",
    orders: "Pesanan",
    admin: "Admin Panel",
    customers: "Pelanggan",
    reports: "Laporan",
    settings: "Pengaturan",
  };
  pageTitle.textContent = titles[sectionName] || "Menu Makanan";

  loadSectionData(sectionName);

  if (sectionName === "menu") {
    document.getElementById("menu-section").style.display = "block";
  }
}

function loadSectionData(sectionName) {
  switch (sectionName) {
    case "dashboard":
      updateDashboardStats();
      loadRecentOrders();
      break;
    case "menu":
      loadMenuItems();
      break;
    case "orders":
      loadAllOrders();
      break;
    case "customers":
      loadCustomers();
      break;
    case "admin":
      // Admin panel is static
      break;
    case "reports":
      updateReports();
      break;
    case "settings":
      // Settings are static
      break;
  }
}

function handleWindowResize() {
  const sidebar = document.getElementById("sidebar");
  const mainContent = document.querySelector(".main-content");
  const navbar = document.querySelector(".navbar");
  const overlay = document.getElementById("overlay");

  if (window.innerWidth > 768) {
    // Desktop mode
    sidebar.classList.remove("active");
    overlay.classList.remove("active");

    // Ensure desktop classes are applied
    if (!sidebar.classList.contains("collapsed")) {
      mainContent.classList.remove("collapsed");
      navbar.classList.remove("collapsed");
    }
  } else {
    // Mobile mode
    sidebar.classList.remove("collapsed");
    mainContent.classList.remove("collapsed");
    navbar.classList.remove("collapsed");
  }
}

// Add event listener for window resize
window.addEventListener("resize", handleWindowResize);

function updateDashboardStats() {
  document.getElementById("visitorsCount").textContent = visitorsCount;
  document.getElementById("customersCount").textContent = customers.length + 85;
  document.getElementById("transactionsCount").textContent = orders.length + 40;

  // Calculate profit percentage
  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
  const profitPercent = Math.min(
    95,
    Math.floor((totalRevenue / 1000000) * 100) + 78
  );
  document.getElementById("profitPercent").textContent = profitPercent + "%";
}

function loadRecentOrders() {
  const recentOrdersList = document.getElementById("recentOrdersList");
  const recentOrders = orders.slice(-5).reverse();

  recentOrdersList.innerHTML = recentOrders
    .map(
      (order) => `
                <div class="order-item">
                    <div class="order-avatar">${order.customerName.charAt(
                      0
                    )}</div>
                    <div class="order-info">
                        <div class="order-name">${order.customerName}</div>
                        <div class="order-time">Dine In • ${formatDate(
                          order.time
                        )}</div>
                    </div>
                    <div class="order-amount">Rp ${order.total.toLocaleString()}</div>
                </div>
            `
    )
    .join("");
}

function loadAllOrders() {
  const allOrdersList = document.getElementById("allOrdersList");
  allOrdersList.innerHTML = orders
    .map(
      (order) => `
                <div class="order-item">
                    <div class="order-avatar">${order.customerName.charAt(
                      0
                    )}</div>
                    <div class="order-info">
                        <div class="order-name">${order.customerName}</div>
                        <div class="order-time">Items: ${order.items.join(
                          ", "
                        )}</div>
                        <div class="order-time">Dine In • ${formatDate(
                          order.time
                        )}</div>
                    </div>
                    <div class="order-amount">Rp ${order.total.toLocaleString()}</div>
                </div>
            `
    )
    .join("");
}

function loadMenuItems() {
  // Initialize controls if not already done
  if (!document.getElementById("menuSearch").hasEventListeners) {
    initMenuControls();
    document.getElementById("menuSearch").hasEventListeners = true;
  }

  // Reset filters
  currentFilter = "all";
  searchQuery = "";
  document.getElementById("menuSearch").value = "";
  document.getElementById("clearSearch").style.display = "none";

  // Set active filter button
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.remove("active");
    if (btn.dataset.filter === "all") {
      btn.classList.add("active");
    }
  });

  // Display all menu items
  filterAndDisplayMenu();
}

function loadCustomers() {
  const customersList = document.getElementById("customersList");
  const allCustomers = [...new Set(orders.map((order) => order.customerName))];

  customersList.innerHTML = allCustomers
    .map((customerName) => {
      const customerOrders = orders.filter(
        (order) => order.customerName === customerName
      );
      const totalSpent = customerOrders.reduce(
        (sum, order) => sum + order.total,
        0
      );

      return `
                    <div class="order-item">
                        <div class="order-avatar">${customerName.charAt(
                          0
                        )}</div>
                        <div class="order-info">
                            <div class="order-name">${customerName}</div>
                            <div class="order-time">${
                              customerOrders.length
                            } pesanan • Total: Rp ${totalSpent.toLocaleString()}</div>
                        </div>
                        <div class="order-amount">
                            <button class="admin-btn" style="font-size: 12px; padding: 5px 10px;">Detail</button>
                        </div>
                    </div>
                `;
    })
    .join("");
}

function updateReports() {
  const totalRevenue =
    orders.reduce((sum, order) => sum + order.total, 0) + 2200000;
  const totalMenusSold = menuItems.reduce(
    (sum, item) => sum + (item.sold || 0),
    0
  );

  // Payment method statistics
  const paymentStats = {
    qris: orders.filter((o) => o.paymentMethod === "qris").length,
    dana: orders.filter((o) => o.paymentMethod === "dana").length,
    cash: orders.filter((o) => o.paymentMethod === "cash").length,
  };

  document.getElementById(
    "totalRevenue"
  ).textContent = `Rp ${totalRevenue.toLocaleString()}`;
  document.getElementById("totalMenusSold").textContent = totalMenusSold;

  // Add payment method stats if reports section is visible
  const reportsSection = document.getElementById("reports-section");
  if (reportsSection && reportsSection.classList.contains("active")) {
    // Check if payment stats already exist
    if (!document.getElementById("paymentStats")) {
      const paymentStatsHTML = `
                <div class="admin-section" id="paymentStats">
                    <h3><i class="fas fa-credit-card"></i> Statistik Metode Pembayaran</h3>
                    <div class="dashboard-stats">
                        <div class="stat-card">
                            <div class="stat-icon" style="background: #2c3e50;">
                                <i class="fas fa-qrcode"></i>
                            </div>
                            <div class="stat-info">
                                <h3>${paymentStats.qris}</h3>
                                <p>Pembayaran QRIS</p>
                            </div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-icon" style="background: #118EEA;">
                                <i class="fas fa-mobile-alt"></i>
                            </div>
                            <div class="stat-info">
                                <h3>${paymentStats.dana}</h3>
                                <p>Pembayaran DANA</p>
                            </div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-icon" style="background: var(--success-color);">
                                <i class="fas fa-money-bill-wave"></i>
                            </div>
                            <div class="stat-info">
                                <h3>${paymentStats.cash}</h3>
                                <p>Pembayaran Tunai</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
      reportsSection.insertAdjacentHTML("beforeend", paymentStatsHTML);
    } else {
      // Update existing stats
      const statsCards = document.querySelectorAll(
        "#paymentStats .stat-card h3"
      );
      if (statsCards.length >= 3) {
        statsCards[0].textContent = paymentStats.qris;
        statsCards[1].textContent = paymentStats.dana;
        statsCards[2].textContent = paymentStats.cash;
      }
    }
  }
}

function handleUserMenuClick() {
  if (!currentUser) {
    authModal.classList.add("active");
  } else {
    // Show user options or logout
    if (confirm("Logout dari akun?")) {
      logout();
    }
  }
}

function handleModalClicks() {
  const modals = [
    "paymentModal",
    "qrisModal",
    "danaModal",
    "cashModal",
    "receiptModal",
  ];

  modals.forEach((modalId) => {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          modal.classList.remove("active");
        }
      });
    }
  });
}

function handleAuth(e) {
  e.preventDefault();
  const email = document.getElementById("authEmail").value;
  const password = document.getElementById("authPassword").value;
  const name = document.getElementById("authName").value;
  const isLogin = document.getElementById("authTitle").textContent === "Login";

  if (isLogin) {
    // Simple login logic
    if (
      email === "admin@armindocafe.com" &&
      password === "markshinoyo1234567890987654321qwertyuiopasdfghjklzxcvbnm"
    ) {
      currentUser = { name: "Admin", email: email, isAdmin: true };
      isAdmin = true;
      // Enable admin mode
      document.body.classList.add("admin-mode");
      document.body.classList.remove("guest-mode");
      updateSidebarVisibility();
      showSection("dashboard");
    } else {
      currentUser = { name: email.split("@")[0], email: email, isAdmin: false };
      isAdmin = false;
      // Keep user mode
      document.body.classList.remove("admin-mode");
      document.body.classList.add("user-mode");
      updateSidebarVisibility();
      showSection("menu");
    }
  } else {
    // Register logic
    currentUser = { name: name, email: email, isAdmin: false };
    customers.push(currentUser);
    isAdmin = false;
    // Keep user mode
    document.body.classList.remove("admin-mode");
    document.body.classList.add("user-mode");
    updateSidebarVisibility();
    showSection("menu");
  }

  userName.textContent = currentUser.name;
  closeAuth();
  showNotification(
    isLogin ? "Login berhasil!" : "Registrasi berhasil!",
    "success"
  );

  // Update visitor count
  visitorsCount++;
  updateDashboardStats();
}

function toggleAuthMode(e) {
  e.preventDefault();
  const title = document.getElementById("authTitle");
  const submitBtn = document.getElementById("authSubmit");
  const switchText = document.getElementById("authSwitchText");
  const switchLink = document.getElementById("authSwitchLink");
  const nameGroup = document.getElementById("authNameGroup");

  if (title.textContent === "Login") {
    title.textContent = "Daftar";
    submitBtn.textContent = "Daftar";
    switchText.textContent = "Sudah punya akun?";
    switchLink.textContent = "Login di sini";
    nameGroup.style.display = "block";
  } else {
    title.textContent = "Login";
    submitBtn.textContent = "Login";
    switchText.textContent = "Belum punya akun?";
    switchLink.textContent = "Daftar di sini";
    nameGroup.style.display = "none";
  }
}

function logout() {
  currentUser = null;
  isAdmin = false;
  userName.textContent = "Guest";

  // Reset to guest mode
  document.body.classList.remove("admin-mode", "user-mode");
  document.body.classList.add("guest-mode");
  updateSidebarVisibility();
  showSection("menu");

  showNotification("Logout berhasil!", "success");
}

function goToMenu() {
  // Update sidebar active state
  document.querySelectorAll(".menu-item").forEach((item) => {
    item.classList.remove("active");
  });

  // Set menu item as active
  document.querySelector('[data-section="menu"]').classList.add("active");

  // Show menu section
  showSection("menu");

  // Smooth scroll ke atas
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function updateSidebarVisibility() {
  const adminMenuItems = document.querySelectorAll(".menu-item.admin-only");

  if (isAdmin) {
    // Show all menu items for admin
    adminMenuItems.forEach((item) => {
      item.style.display = "block";
      item.classList.remove("disabled");
    });
  } else {
    // Hide admin menu items for regular users
    adminMenuItems.forEach((item) => {
      item.style.display = "none";
    });

    // Make sure menu item is active for non-admin users
    document.querySelectorAll(".menu-item").forEach((item) => {
      item.classList.remove("active");
    });
    document.querySelector('[data-section="menu"]').classList.add("active");
  }
}

function addToCart(itemId) {
  if (!currentUser) {
    authModal.classList.add("active");
    return;
  }

  const item = menuItems.find((m) => m.id === itemId);
  if (!item) return;

  const existingItem = cart.find((c) => c.id === itemId);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({
      ...item,
      quantity: 1,
    });
  }

  updateCartDisplay();
  showNotification(`${item.name} ditambahkan ke keranjang`, "success");
}

function updateCartDisplay() {
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");

  if (cart.length === 0) {
    cartItems.innerHTML =
      '<p style="text-align: center; padding: 20px; color: #7f8c8d;">Keranjang kosong</p>';
    cartTotal.innerHTML = "";
    return;
  }

  cartItems.innerHTML = cart
    .map((item) => {
      const discountedPrice =
        item.discount > 0
          ? item.price - (item.price * item.discount) / 100
          : item.price;
      const totalPrice = discountedPrice * item.quantity;

      return `
                    <div class="cart-item">
                        <img src="${item.image}" alt="${
        item.name
      }" class="cart-item-image">
                        <div class="cart-item-info">
                            <div class="cart-item-name">${item.name}</div>
                            <div class="cart-item-price">Rp ${discountedPrice.toLocaleString()}</div>
                            <div class="quantity-control">
                                <button class="quantity-btn" onclick="updateQuantity(${
                                  item.id
                                }, -1)">-</button>
                                <span class="quantity-display">${
                                  item.quantity
                                }</span>
                                <button class="quantity-btn" onclick="updateQuantity(${
                                  item.id
                                }, 1)">+</button>
                            </div>
                        </div>
                        <div style="font-weight: 600; color: var(--accent-color);">
                            Rp ${totalPrice.toLocaleString()}
                        </div>
                    </div>
                `;
    })
    .join("");

  // Calculate totals
  const subtotal = cart.reduce((sum, item) => {
    const discountedPrice =
      item.discount > 0
        ? item.price - (item.price * item.discount) / 100
        : item.price;
    return sum + discountedPrice * item.quantity;
  }, 0);

  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  cartTotal.innerHTML = `
                <div class="total-row">
                    <span>Subtotal:</span>
                    <span>Rp ${subtotal.toLocaleString()}</span>
                </div>
                <div class="total-row">
                    <span>Pajak (10%):</span>
                    <span>Rp ${tax.toLocaleString()}</span>
                </div>
                <div class="total-row final">
                    <span>Total:</span>
                    <span>Rp ${total.toLocaleString()}</span>
                </div>
                <button class="checkout-btn" onclick="checkout()">
                    <i class="fas fa-credit-card"></i> Checkout
                </button>
            `;
}

function updateQuantity(itemId, change) {
  const item = cart.find((c) => c.id === itemId);
  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {
    cart = cart.filter((c) => c.id !== itemId);
  }

  updateCartDisplay();
}

function checkout() {
  if (cart.length === 0) return;

  const subtotal = cart.reduce((sum, item) => {
    const discountedPrice =
      item.discount > 0
        ? item.price - (item.price * item.discount) / 100
        : item.price;
    return sum + discountedPrice * item.quantity;
  }, 0);

  const total = subtotal * 1.1; // Include tax

  // Create new order
  const newOrder = {
    id: orders.length + 1,
    customerName: currentUser.name,
    items: cart.map((item) => `${item.name} (${item.quantity}x)`),
    total: Math.round(total),
    time: new Date().toISOString().replace("T", " ").substring(0, 19),
    status: "completed",
  };

  orders.unshift(newOrder);

  // Update menu sold counts
  cart.forEach((cartItem) => {
    const menuItem = menuItems.find((m) => m.id === cartItem.id);
    if (menuItem) {
      menuItem.sold = (menuItem.sold || 0) + cartItem.quantity;
    }
  });

  // Clear cart
  cart = [];
  updateCartDisplay();
  closeCart();

  showNotification("Pesanan berhasil! Terima kasih telah memesan.", "success");

  // Update stats
  updateDashboardStats();

  // Update transaction count
  const currentTransactions = parseInt(
    document.getElementById("transactionsCount").textContent
  );
  document.getElementById("transactionsCount").textContent =
    currentTransactions + 1;
}

function showCart() {
  cartSidebar.classList.add("active");
  overlay.classList.add("active");
  updateCartDisplay();
}

function handleAddMenu(e) {
  e.preventDefault();

  const name = document.getElementById("menuName").value;
  const price = parseInt(document.getElementById("menuPrice").value);
  const image = document.getElementById("menuImage").value;
  const description = document.getElementById("menuDescription").value;
  const discount = parseInt(document.getElementById("menuDiscount").value);

  const newMenuItem = {
    id: menuItems.length + 1,
    name: name,
    price: price,
    image: image,
    description: description,
    discount: discount,
    sold: 0,
  };

  menuItems.push(newMenuItem);

  // Reset form
  e.target.reset();

  showNotification("Menu baru berhasil ditambahkan!", "success");

  // Reload menu if currently viewing menu section
  if (document.getElementById("menu-section").classList.contains("active")) {
    loadMenuItems();
  }
}

function applyGlobalDiscount() {
  const discountPercent = parseInt(
    document.getElementById("globalDiscount").value
  );

  if (discountPercent < 0 || discountPercent > 100) {
    alert("Diskon harus antara 0-100%");
    return;
  }

  menuItems.forEach((item) => {
    item.discount = Math.max(item.discount, discountPercent);
  });

  showNotification(
    `Diskon ${discountPercent}% berhasil diterapkan ke semua menu!`,
    "success"
  );

  // Reload menu if currently viewing menu section
  if (document.getElementById("menu-section").classList.contains("active")) {
    loadMenuItems();
  }
}

function sendNotification() {
  const type = document.getElementById("notificationType").value;
  const message = document.getElementById("notificationMessage").value;

  if (!message.trim()) {
    alert("Pesan notifikasi tidak boleh kosong");
    return;
  }

  showNotification(message, type);

  // Clear form
  document.getElementById("notificationMessage").value = "";

  // Update notification badge
  const badge = document.getElementById("notificationBadge");
  const currentCount = parseInt(badge.textContent);
  badge.textContent = currentCount + 1;
}

function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.className = `notification-popup ${type}`;
  notification.innerHTML = `
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
                    <i class="fas ${
                      type === "success"
                        ? "fa-check-circle"
                        : type === "discount"
                        ? "fa-percent"
                        : "fa-info-circle"
                    }" 
                       style="color: ${
                         type === "success"
                           ? "var(--success-color)"
                           : type === "discount"
                           ? "var(--warning-color)"
                           : "var(--primary-color)"
                       };"></i>
                    <strong>${
                      type === "success"
                        ? "Berhasil"
                        : type === "discount"
                        ? "Diskon"
                        : "Info"
                    }</strong>
                </div>
                <p style="margin: 0; color: var(--text-light);">${message}</p>
            `;

  document.body.appendChild(notification);

  // Show notification
  setTimeout(() => notification.classList.add("show"), 100);

  // Hide and remove notification
  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => document.body.removeChild(notification), 300);
  }, 3000);
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

// Add cart button to navbar
function addCartButton() {
  const cartBtn = document.createElement("button");
  cartBtn.className = "notification-btn";
  cartBtn.innerHTML = `
                <i class="fas fa-shopping-cart"></i>
                <span class="notification-badge" id="cartBadge">0</span>
            `;
  cartBtn.onclick = showCart;

  const navbarRight = document.querySelector(".navbar-right");
  navbarRight.insertBefore(cartBtn, document.getElementById("userMenu"));
}

// Update cart badge
function updateCartBadge() {
  const badge = document.getElementById("cartBadge");
  if (badge) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    badge.textContent = totalItems;
    badge.style.display = totalItems > 0 ? "flex" : "none";
  }
}

// Add notification click handler
document.getElementById("notificationBtn").addEventListener("click", () => {
  showNotification(
    "Selamat datang Di Armindo CAFE! Nikmati diskon spesial hari ini.",
    "discount"
  );
});

// Initialize
function init() {
  // Set initial guest mode
  document.body.classList.add("guest-mode");
  updateSidebarVisibility();

  document.querySelectorAll(".menu-item").forEach((item) => {
    item.classList.remove("active");
  });
  document.querySelector('[data-section="home"]').classList.add("active");

  // Set initial desktop sidebar state
  if (window.innerWidth > 768) {
    const mainContent = document.querySelector(".main-content");
    const navbar = document.querySelector(".navbar");
    // Sidebar expanded by default on desktop
    mainContent.classList.remove("collapsed");
    navbar.classList.remove("collapsed");
  }

  // Add cart button
  addCartButton();

  // Show menu section by default
  showSection("home");

  // Load initial data
  updateDashboardStats();
  loadRecentOrders();
  filteredMenuItems = [...menuItems];

  // Show welcome notification after a short delay
  setTimeout(() => {
    showNotification(
      "Selamat datang di Armindo Cafe! Silakan login untuk mengakses fitur lengkap.",
      "info"
    );
  }, 1000);

  // Simulate some visitor activity
  setInterval(() => {
    visitorsCount += Math.floor(Math.random() * 3);
    if (
      isAdmin &&
      document.getElementById("dashboard-section").classList.contains("active")
    ) {
      updateDashboardStats();
    }
  }, 30000);

  // Handle initial window size
  handleWindowResize();
}
// Override cart update to also update badge
const originalUpdateCartDisplay = updateCartDisplay;
updateCartDisplay = function () {
  originalUpdateCartDisplay();
  updateCartBadge();
};

// Event Listeners
hamburger.addEventListener("click", toggleSidebar);
overlay.addEventListener("click", closeSidebar);
document.getElementById("cartClose").addEventListener("click", closeCart);
document.getElementById("authClose").addEventListener("click", closeAuth);
themeToggle.addEventListener("click", toggleTheme);
userMenu.addEventListener("click", handleUserMenuClick);

// Close modal when clicking outside the form
authModal.addEventListener("click", (e) => {
  if (e.target === authModal) {
    closeAuth();
  }
});

// Close modal with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (authModal.classList.contains("active")) {
      closeAuth();
    }
    if (cartSidebar.classList.contains("active")) {
      closeCart();
    }
  }
});

function animateCounters() {
  const counters = document.querySelectorAll(".stat-number");

  counters.forEach((counter) => {
    const target = parseInt(counter.getAttribute("data-target"));
    const increment = target / 100;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      counter.textContent = Math.floor(current);

      if (current >= target) {
        counter.textContent = target;
        clearInterval(timer);
      }
    }, 20);
  });
}

// Load featured menu items
function loadFeaturedMenu() {
  const featuredGrid = document.getElementById("featuredMenuGrid");

  // Get top 3 most sold items
  const featuredItems = menuItems
    .sort((a, b) => (b.sold || 0) - (a.sold || 0))
    .slice(0, 3);

  featuredGrid.innerHTML = featuredItems
    .map((item) => {
      const discountedPrice =
        item.discount > 0
          ? item.price - (item.price * item.discount) / 100
          : item.price;
      return `
            <div class="featured-menu-card">
                ${
                  item.discount > 0
                    ? `<div class="featured-menu-badge">-${item.discount}%</div>`
                    : ""
                }
                <img src="${item.image}" alt="${
        item.name
      }" class="featured-menu-image">
                <div class="featured-menu-content">
                    <div class="menu-title">${item.name}</div>
                    <div class="menu-description">${item.description}</div>
                    <div class="menu-footer">
                        <div>
                            ${
                              item.discount > 0
                                ? `<div class="menu-price discounted">Rp ${item.price.toLocaleString()}</div>
                                 <div class="discount-price">Rp ${discountedPrice.toLocaleString()}</div>`
                                : `<div class="menu-price">Rp ${item.price.toLocaleString()}</div>`
                            }
                        </div>
                        <button class="add-to-cart" onclick="addToCart(${
                          item.id
                        })">
                            <i class="fas fa-plus"></i> Tambah
                        </button>
                    </div>
                </div>
            </div>
        `;
    })
    .join("");
}

// Intersection Observer for animations
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("stats-section")) {
          animateCounters();
        }
      }
    });
  });

  const statsSection = document.querySelector(".stats-section");
  if (statsSection) {
    observer.observe(statsSection);
  }
}

function checkout() {
  if (cart.length === 0) return;

  const subtotal = cart.reduce((sum, item) => {
    const discountedPrice =
      item.discount > 0
        ? item.price - (item.price * item.discount) / 100
        : item.price;
    return sum + discountedPrice * item.quantity;
  }, 0);

  const tax = subtotal * 0.1; // 10% tax
  const total = Math.round(subtotal + tax);

  // Store order data
  currentOrderData = {
    items: [...cart],
    subtotal: subtotal,
    tax: tax,
    total: total,
    customerName: currentUser.name,
    orderNumber: `INV-${Date.now()}`,
    date: new Date(),
  };

  // Show payment modal
  showPaymentModal(total);
}

// Show Payment Modal
function showPaymentModal(total) {
  document.getElementById(
    "paymentTotal"
  ).textContent = `Total: Rp ${total.toLocaleString()}`;
  paymentModal.classList.add("active");
}

// Close Payment Modal
function closePaymentModal() {
  paymentModal.classList.remove("active");
}

// Select Payment Method
function selectPaymentMethod(method) {
  currentPaymentMethod = method;
  closePaymentModal();

  switch (method) {
    case "qris":
      showQrisModal();
      break;
    case "dana":
      showDanaModal();
      break;
    case "cash":
      showCashModal();
      break;
  }
}

// QRIS Modal Functions
function showQrisModal() {
  document.getElementById(
    "qrisTotal"
  ).textContent = `Total: Rp ${currentOrderData.total.toLocaleString()}`;
  qrisModal.classList.add("active");
}

function closeQrisModal() {
  qrisModal.classList.remove("active");
}

// DANA Modal Functions
function showDanaModal() {
  document.getElementById(
    "danaTotal"
  ).textContent = `Total: Rp ${currentOrderData.total.toLocaleString()}`;
  danaModal.classList.add("active");
}

function closeDanaModal() {
  danaModal.classList.remove("active");
}

function openDANATransfer() {
  // Create WhatsApp message for DANA transfer
  const message =
    `Halo, saya ingin transfer DANA untuk pesanan Armindo Cafe:%0A%0A` +
    `Nomor Pesanan: ${currentOrderData.orderNumber}%0A` +
    `Total: Rp ${currentOrderData.total.toLocaleString()}%0A%0A` +
    `Mohon konfirmasi setelah transfer berhasil. Terima kasih!`;

  window.open(`https://wa.me/6283813660206?text=${message}`, "_blank");
}

// Cash Modal Functions
function showCashModal() {
  document.getElementById(
    "cashTotal"
  ).textContent = `Total: Rp ${currentOrderData.total.toLocaleString()}`;
  cashModal.classList.add("active");
}

function closeCashModal() {
  cashModal.classList.remove("active");
}

// Confirm Payment
function confirmPayment(method) {
  // Close current modal
  switch (method) {
    case "qris":
      closeQrisModal();
      break;
    case "dana":
      closeDanaModal();
      break;
    case "cash":
      closeCashModal();
      break;
  }

  // Show confirmation dialog for digital payments
  if (method === "qris" || method === "dana") {
    const confirmed = confirm(
      `Apakah Anda sudah menyelesaikan pembayaran via ${method.toUpperCase()}?`
    );
    if (!confirmed) {
      // Show payment modal again
      switch (method) {
        case "qris":
          showQrisModal();
          break;
        case "dana":
          showDanaModal();
          break;
      }
      return;
    }
  }

  // Process payment
  processPayment(method);
}

// Process Payment
function processPayment(method) {
  // Create order
  const newOrder = {
    id: orders.length + 1,
    orderNumber: currentOrderData.orderNumber,
    customerName: currentOrderData.customerName,
    items: currentOrderData.items.map(
      (item) => `${item.name} (${item.quantity}x)`
    ),
    itemDetails: currentOrderData.items,
    subtotal: currentOrderData.subtotal,
    tax: currentOrderData.tax,
    total: currentOrderData.total,
    paymentMethod: method,
    time: new Date().toISOString().replace("T", " ").substring(0, 19),
    status: method === "cash" ? "pending" : "completed",
    date: currentOrderData.date,
  };

  // Add to orders
  orders.unshift(newOrder);

  // Update menu sold counts
  currentOrderData.items.forEach((cartItem) => {
    const menuItem = menuItems.find((m) => m.id === cartItem.id);
    if (menuItem) {
      menuItem.sold = (menuItem.sold || 0) + cartItem.quantity;
    }
  });

  // Show receipt
  showReceipt(newOrder);

  // Clear cart
  cart = [];
  updateCartDisplay();
  closeCart();

  // Update stats
  updateDashboardStats();
}

// Show Receipt
function showReceipt(order) {
  const receiptContent = document.getElementById("receiptContent");

  const paymentMethodNames = {
    qris: "QRIS",
    dana: "DANA",
    cash: "Tunai",
  };

  const statusText = order.status === "completed" ? "LUNAS" : "BELUM LUNAS";
  const statusColor =
    order.status === "completed"
      ? "var(--success-color)"
      : "var(--warning-color)";

  receiptContent.innerHTML = `
        <div style="border-bottom: 2px dashed #ddd; padding-bottom: 15px; margin-bottom: 15px;">
            <div class="receipt-item">
                <span>No. Pesanan:</span>
                <span>${order.orderNumber}</span>
            </div>
            <div class="receipt-item">
                <span>Tanggal:</span>
                <span>${formatDate(order.time)}</span>
            </div>
            <div class="receipt-item">
                <span>Pelanggan:</span>
                <span>${order.customerName}</span>
            </div>
            <div class="receipt-item">
                <span>Metode Bayar:</span>
                <span>${paymentMethodNames[order.paymentMethod]}</span>
            </div>
        </div>

        <div style="margin-bottom: 15px;">
            <strong style="color: var(--text-light);">Detail Pesanan:</strong>
            ${order.itemDetails
              .map((item) => {
                const discountedPrice =
                  item.discount > 0
                    ? item.price - (item.price * item.discount) / 100
                    : item.price;
                const totalItemPrice = discountedPrice * item.quantity;
                return `
                    <div class="receipt-item">
                        <div>
                            <div>${item.name}</div>
                            <small style="color: #7f8c8d;">${
                              item.quantity
                            }x @ Rp ${discountedPrice.toLocaleString()}</small>
                        </div>
                        <span>Rp ${totalItemPrice.toLocaleString()}</span>
                    </div>
                `;
              })
              .join("")}
        </div>

        <div style="border-top: 2px dashed #ddd; padding-top: 15px;">
            <div class="receipt-total">
                <span>Subtotal:</span>
                <span>Rp ${order.subtotal.toLocaleString()}</span>
            </div>
            <div class="receipt-total">
                <span>Pajak (10%):</span>
                <span>Rp ${order.tax.toLocaleString()}</span>
            </div>
            <div class="receipt-total final">
                <span>TOTAL:</span>
                <span>Rp ${order.total.toLocaleString()}</span>
            </div>
        </div>

        <div class="payment-status ${order.status}" style="margin-top: 20px;">
            <i class="fas ${
              order.status === "completed" ? "fa-check-circle" : "fa-clock"
            }"></i>
            <strong>Status: ${statusText}</strong>
            ${
              order.paymentMethod === "cash"
                ? "<br><small>Silahkan bayar di kasir</small>"
                : ""
            }
        </div>

        <div style="text-align: center; margin-top: 20px; padding-top: 15px; border-top: 2px dashed #ddd; color: #7f8c8d; font-size: 12px;">
            <p>Terima kasih telah memesan di Armindo Cafe!</p>
            <p>Jl. Mangga Besar VIII No. 15A, Jakarta Barat</p>
            <p>WhatsApp: +62 838 1366 0206</p>
        </div>
    `;

  receiptModal.classList.add("active");

  // Show success notification
  const paymentMethodText = paymentMethodNames[order.paymentMethod];
  const message =
    order.status === "completed"
      ? `Pembayaran via ${paymentMethodText} berhasil! Pesanan Anda sedang diproses.`
      : `Pesanan berhasil dibuat! Silahkan bayar di kasir sebesar Rp ${order.total.toLocaleString()}`;

  setTimeout(() => {
    showNotification(message, "success");
  }, 500);
}

// Print Receipt
function printReceipt() {
  window.print();
}

// Close Receipt Modal
function closeReceiptModal() {
  receiptModal.classList.remove("active");

  // Navigate back to appropriate section
  if (isAdmin) {
    showSection("orders");
  } else {
    showSection("menu");
  }
}

// Close modal when clicking outside
[paymentModal, qrisModal, danaModal, cashModal, receiptModal].forEach(
  (modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
      }
    });
  }
);

// Keyboard event listeners
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (paymentModal.classList.contains("active")) {
      closePaymentModal();
    }
    if (qrisModal.classList.contains("active")) {
      closeQrisModal();
    }
    if (danaModal.classList.contains("active")) {
      closeDanaModal();
    }
    if (cashModal.classList.contains("active")) {
      closeCashModal();
    }
    if (receiptModal.classList.contains("active")) {
      closeReceiptModal();
    }
  }
});

setTimeout(handleModalClicks, 100);

console.log('Payment system initialized successfully!');
// Start the application
init();
