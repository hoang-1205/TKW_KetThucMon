// ===== 1. DỮ LIỆU MẪU =====
const SAMPLE_ACCOUNTS = [
  { id: "SV01", name: "Nguyễn Văn An", email: "an.nv@st.lhu.edu.vn", password: "123456", role: "student" },
  { id: "SV02", name: "Trần Thị Bích Ngọc", email: "ngoc.ttb@st.lhu.edu.vn", password: "123456", role: "student" },
  { id: "GV01", name: "ThS. Nguyễn Văn Minh", email: "minh.nv@lhu.edu.vn", password: "123456", role: "teacher" }
];

const SAMPLE_MILESTONES = [
  { id: 1, name: "Báo cáo 1 - Phân tích đề & thiết kế UX", deadline: "2026-11-10T23:59:00",
    tasks: ["Phân tích đề 2.1.4", "Vẽ user flow 7 trang", "Wireframe và bảng màu"] },
  { id: 2, name: "Báo cáo 2 - Giao diện HTML5 & CSS3", deadline: "2026-11-24T23:59:00",
    tasks: ["HTML5 semantic cho 7 trang", "CSS3 responsive mobile first", "Timeline dùng ::before, ::after"] },
  { id: 3, name: "Báo cáo 3 - Xử lý JavaScript", deadline: "2026-12-08T23:59:00",
    tasks: ["Form nộp link, kiểm tra URL", "Đếm ngược đến ngày báo cáo", "Lưu dữ liệu bằng localStorage"] },
  { id: 4, name: "Báo cáo 4 - Hoàn thiện & bảo vệ đồ án", deadline: "2026-12-22T23:59:00",
    tasks: ["Kiểm thử trên 3 kích thước màn hình", "Đưa lên GitHub Pages", "Slide và video báo cáo"] }
];

const SAMPLE_STUDENTS = [
  {
    id: "SV01", name: "Nguyễn Văn An", mssv: "125000101", className: "25CT111",
    email: "an.nv@st.lhu.edu.vn", phone: "0901 234 567", major: "Công nghệ thông tin",
    project: { name: "Phân hệ Quản lý Đồ án & Tiến độ Báo cáo", desc: "Timeline mốc deadline, badge trạng thái, form nộp link và đếm ngược.",
      tech: ["HTML5", "CSS3", "JavaScript"], repo: "https://github.com/nhom1/project-milestone", group: "Nhóm 1",
      members: ["Nguyễn Văn An (Trưởng nhóm)", "Lê Thị Hoa", "Trần Quốc Bảo"] },
    submissions: [
      { milestoneId: 1, link: "https://github.com/nhom1/project-milestone/tree/bc1", date: "2026-11-08T20:15:00", note: "" },
      { milestoneId: 2, link: "https://github.com/nhom1/project-milestone/tree/bc2", date: "2026-11-22T21:30:00", note: "" }
    ],
    grades: { 1: { score: 8.5, comment: "Phân tích đề rõ ràng, wireframe timeline hợp lý." } }
  },
  {
    id: "SV02", name: "Trần Thị Bích Ngọc", mssv: "125000102", className: "25CT111",
    email: "ngoc.ttb@st.lhu.edu.vn", phone: "0912 345 678", major: "Công nghệ thông tin",
    project: { name: "Phân hệ Đánh giá & Phản hồi khách hàng", desc: "Star Rating bằng CSS thuần, progress bar tỷ lệ đánh giá, gửi đánh giá không tải lại trang.",
      tech: ["HTML5", "CSS3", "JavaScript"], repo: "https://github.com/nhom2/review-system", group: "Nhóm 2",
      members: ["Trần Thị Bích Ngọc (Trưởng nhóm)", "Phạm Văn Đức", "Võ Thị Mai"] },
    submissions: [
      { milestoneId: 1, link: "https://github.com/nhom2/review-system/tree/bc1", date: "2026-11-12T09:00:00", note: "" }
    ],
    grades: { 1: { score: 7.0, comment: "Nộp trễ 2 ngày. Thiếu luồng gửi đánh giá." } }
  },
  {
    id: "SV03", name: "Lê Minh Khang", mssv: "125000103", className: "25CT112",
    email: "khang.lm@st.lhu.edu.vn", phone: "0923 456 789", major: "Công nghệ thông tin",
    project: { name: "Phân hệ Giỏ hàng & Thanh toán", desc: "Thêm, xóa, cập nhật số lượng sản phẩm, tự tính tổng tiền và kiểm tra form thanh toán.",
      tech: ["HTML5", "CSS3", "JavaScript"], repo: "https://github.com/nhom3/gio-hang", group: "Nhóm 3",
      members: ["Lê Minh Khang (Trưởng nhóm)", "Đặng Thu Trang"] },
    submissions: [
      { milestoneId: 1, link: "https://github.com/nhom3/gio-hang/tree/bc1", date: "2026-11-09T18:00:00", note: "" },
      { milestoneId: 2, link: "https://github.com/nhom3/gio-hang/tree/bc2", date: "2026-11-20T19:10:00", note: "" }
    ],
    grades: { 1: { score: 9.0, comment: "Phân tích đề đầy đủ, rõ luồng thanh toán." } }
  },
  {
    id: "SV04", name: "Phạm Gia Huy", mssv: "125000104", className: "25CT112",
    email: "huy.pg@st.lhu.edu.vn", phone: "0934 567 890", major: "Công nghệ thông tin",
    project: { name: "Phân hệ Quản lý Đồ án & Tiến độ Báo cáo", desc: "Quản lý mốc báo cáo theo timeline, nhận xét của giảng viên và thống kê tỷ lệ nộp bài.",
      tech: ["HTML5", "CSS3", "JavaScript"], repo: "https://github.com/nhom4/project-milestone", group: "Nhóm 4",
      members: ["Phạm Gia Huy (Trưởng nhóm)", "Ngô Thanh Tùng", "Bùi Khánh Linh", "Hồ Minh Tuấn"] },
    submissions: [
      { milestoneId: 1, link: "github.com/nhom4/project-milestone/tree/bc1", date: "2026-11-05T14:20:00", note: "" }
    ],
    grades: { 1: { score: 6.0, comment: "Link thiếu https://, cần nộp lại đúng định dạng." } }
  },
  {
    id: "SV05", name: "Võ Thanh Tâm", mssv: "125000105", className: "25CT113",
    email: "tam.vt@st.lhu.edu.vn", phone: "0945 678 901", major: "Công nghệ thông tin",
    project: { name: "Phân hệ Tìm kiếm & Lọc sản phẩm", desc: "Tìm kiếm theo từ khóa, lọc theo giá và danh mục, sắp xếp kết quả ngay trên trang.",
      tech: ["HTML5", "CSS3", "JavaScript"], repo: "https://github.com/nhom5/tim-kiem-loc", group: "Nhóm 5",
      members: ["Võ Thanh Tâm (Trưởng nhóm)", "Lý Gia Bảo", "Trịnh Hồng Nhung"] },
    submissions: [],
    grades: {}
  },
  {
    id: "SV06", name: "Đỗ Ngọc Hân", mssv: "125000106", className: "25CT113",
    email: "han.dn@st.lhu.edu.vn", phone: "0956 789 012", major: "Công nghệ thông tin",
    project: { name: "Phân hệ Đánh giá & Phản hồi khách hàng", desc: "Chọn số sao, nhập bình luận, hiển thị đánh giá mới ngay và lịch sử đánh giá.",
      tech: ["HTML5", "CSS3", "JavaScript"], repo: "https://github.com/nhom6/review-feedback", group: "Nhóm 6",
      members: ["Đỗ Ngọc Hân (Trưởng nhóm)", "Châu Minh Phát", "Kiều Anh Thư"] },
    submissions: [
      { milestoneId: 1, link: "https://github.com/nhom6/review-feedback/tree/bc1", date: "2026-11-10T22:00:00", note: "" }
    ],
    grades: { 1: { score: 8.0, comment: "Đúng yêu cầu học phần." } }
  }
];

const DEMO_USERS = {
  student: { id: "SV01", name: "Nguyễn Văn An", role: "student" },
  teacher: { id: "GV01", name: "ThS. Nguyễn Văn Minh", role: "teacher" }
};

const NAV_LINKS = {
  student: [
    { page: "trang1", text: "Trang chủ", href: "../index.html" },
    { page: "trang2", text: "Timeline", href: "../Trang 2/index_trang2.html" },
    { page: "trang3", text: "Nộp đồ án", href: "../Trang3_Hieu/index_trang3.html" },
    { page: "trang4", text: "Điểm & nhận xét", href: "../Trang 4/index_trang4.html" }
  ],
  teacher: [
    { page: "trang1", text: "Trang chủ", href: "../index.html" },
    { page: "trang5", text: "Chấm điểm", href: "../Trang5_Hoang/index_trang5.html" },
    { page: "trang6", text: "Sinh viên", href: "../Trang6_Nhu/index_trang6.html" }
  ]
};

// ===== 2. ĐỌC / GHI localStorage =====
function loadData(key, sample) {
  try {
    const saved = localStorage.getItem(key);
    if (saved) return JSON.parse(saved);
    localStorage.setItem(key, JSON.stringify(sample));
  } catch (e) {
    console.warn("Không đọc được localStorage:", e);
  }
  return JSON.parse(JSON.stringify(sample));
}

function saveData(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.warn("Không lưu được localStorage:", e);
  }
}

const milestones = loadData("pm_milestones", SAMPLE_MILESTONES);
const students = loadData("pm_students", SAMPLE_STUDENTS);
const accounts = loadData("pm_accounts", SAMPLE_ACCOUNTS);
const pageRole = document.body.dataset.role;

function getCurrentUser() {
  let user = null;
  try {
    user = JSON.parse(localStorage.getItem("pm_user"));
  } catch (e) {
    user = null;
  }
  if (!user) {
    user = pageRole === "teacher" ? DEMO_USERS.teacher : DEMO_USERS.student;
  }
  return user;
}

// ===== 3. HÀM TÍNH TOÁN =====
function getLatest(student, milestoneId) {
  const list = student.submissions.filter(s => s.milestoneId === milestoneId);
  if (list.length === 0) return null;
  return list.sort((a, b) => new Date(b.date) - new Date(a.date))[0];
}

function getStatus(student, milestone) {
  const sub = getLatest(student, milestone.id);
  const deadline = new Date(milestone.deadline);
  if (sub) {
    return new Date(sub.date) <= deadline ? "done" : "late";
  }
  return new Date() > deadline ? "late" : "pending";
}

function getStatusText(status) {
  switch (status) {
    case "done": return "Đã nộp";
    case "late": return "Trễ hạn";
    default: return "Chưa nộp";
  }
}

function badge(status) {
  return `<span class="badge ${status}">${getStatusText(status)}</span>`;
}

function countStatus(student, status) {
  return milestones.filter(m => getStatus(student, m) === status).length;
}

function countSubmitted(student) {
  return milestones.filter(m => getLatest(student, m.id) !== null).length;
}

function isValidUrl(link) {
  const value = link.trim();
  if (value === "" || value.includes(" ")) return false;
  if (!value.startsWith("http://") && !value.startsWith("https://")) return false;
  const host = value.split("://")[1].split("/")[0];
  return host.includes(".") && !host.startsWith(".") && !host.endsWith(".");
}

function formatDate(str) {
  const d = new Date(str);
  const pad = n => String(n).padStart(2, "0");
  return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function timeAgo(str) {
  const minutes = Math.floor((new Date() - new Date(str)) / 60000);
  if (minutes < 1) return "Vừa xong";
  if (minutes < 60) return minutes + " phút trước";
  if (minutes < 1440) return Math.floor(minutes / 60) + " giờ trước";
  return Math.floor(minutes / 1440) + " ngày trước";
}

function getAverage(student) {
  const scores = Object.values(student.grades).map(g => g.score);
  if (scores.length === 0) return null;
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return Math.round(sum / scores.length * 10) / 10;
}

function scoreText(score) {
  return score === null || score === undefined ? "--" : Number(score).toFixed(1);
}

function scoreTag(score) {
  if (score === null || score === undefined) return '<span class="score none">Chưa chấm</span>';
  let level = "low";
  if (score >= 8) level = "high";
  else if (score >= 6.5) level = "mid";
  return `<span class="score ${level}">${scoreText(score)}</span>`;
}

function getNextMilestone() {
  return milestones.find(m => new Date(m.deadline) > new Date()) || null;
}

function initials(name) {
  const words = name.replace("ThS. ", "").trim().split(" ");
  if (words.length === 1) return words[0][0].toUpperCase();
  return (words[words.length - 2][0] + words[words.length - 1][0]).toUpperCase();
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

// ===== 4. ĐẾM NGƯỢC =====
const timers = {};

function startCountdown(deadline, elementId) {
  clearInterval(timers[elementId]);
  const box = document.getElementById(elementId);
  if (!box) return;
  const labels = ["Ngày", "Giờ", "Phút", "Giây"];

  function tick() {
    const diff = new Date(deadline) - new Date();
    if (diff <= 0) {
      clearInterval(timers[elementId]);
      box.innerHTML = '<p class="countdown-over">Đã hết hạn</p>';
      return;
    }
    const values = [
      Math.floor(diff / 86400000),
      Math.floor(diff / 3600000) % 24,
      Math.floor(diff / 60000) % 60,
      Math.floor(diff / 1000) % 60
    ];
    let html = "";
    for (let i = 0; i < values.length; i++) {
      html += `<div class="cd-box"><b>${String(values[i]).padStart(2, "0")}</b><span>${labels[i]}</span></div>`;
    }
    box.innerHTML = html;
  }

  tick();
  timers[elementId] = setInterval(tick, 1000);
}

// ===== 5. THÔNG BÁO NHỎ (TOAST) =====
function showToast(message, type) {
  const toast = document.createElement("div");
  toast.className = "toast" + (type === "error" ? " error" : "");
  toast.setAttribute("role", "status");
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add("hide"), 2700);
  setTimeout(() => toast.remove(), 3000);
}

// ===== 6. BONG BÓNG THÔNG BÁO NỘP BÀI =====
function getRecentSubmissions() {
  const list = [];
  students.forEach(student => {
    student.submissions.forEach(sub => {
      const milestone = milestones.find(m => m.id === sub.milestoneId);
      list.push({ name: student.name, group: student.project.group, milestone: milestone ? milestone.name.split(" - ")[0] : "", date: sub.date });
    });
  });
  return list.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);
}

function startNotifications() {
  if (!document.getElementById("navbar")) return;
  const stack = document.createElement("div");
  stack.className = "notify-stack";
  stack.setAttribute("aria-live", "polite");
  document.body.appendChild(stack);

  const list = getRecentSubmissions();
  let index = 0;
  const timer = setInterval(() => {
    if (index >= list.length) {
      clearInterval(timer);
      return;
    }
    const item = list[index];
    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.innerHTML = `<div class="avatar">${initials(item.name)}</div>
      <div><b>${escapeHtml(item.name)}</b> (${item.group}) đã nộp ${item.milestone}<span class="time">${timeAgo(item.date)}</span></div>`;
    stack.appendChild(bubble);
    if (stack.children.length > 3) stack.firstElementChild.remove();
    setTimeout(() => bubble.classList.add("out"), 4000);
    setTimeout(() => bubble.remove(), 4400);
    index++;
  }, 1000);
}

// ===== 7. NAVBAR, CHẾ ĐỘ SÁNG / TỐI & MENU HAMBURGER =====
const MOON_ICON = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
const SUN_ICON = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;

function getTheme() {
  try {
    return localStorage.getItem("pm_theme") || "light";
  } catch (e) {
    return "light";
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  document.body.setAttribute("data-theme", theme);
  const icon = theme === "dark" ? SUN_ICON : MOON_ICON;
  const label = theme === "dark" ? "Chuyển sang chế độ sáng" : "Chuyển sang chế độ tối";
  document.querySelectorAll(".theme-toggle").forEach(btn => {
    btn.innerHTML = icon;
    btn.setAttribute("title", label);
    btn.setAttribute("aria-label", label);
  });
}

function toggleTheme() {
  const current = getTheme();
  const next = current === "dark" ? "light" : "dark";
  try {
    localStorage.setItem("pm_theme", next);
  } catch (e) {}
  applyTheme(next);

  // Hiệu ứng click nảy và phát sáng viền cho nút chuyển đổi
  const buttons = document.querySelectorAll(".theme-toggle");
  buttons.forEach(btn => {
    btn.classList.remove("theme-clicked");
    void btn.offsetWidth; // ép reflow để kích hoạt lại animation ở mỗi lần click
    btn.classList.add("theme-clicked");
    setTimeout(() => {
      btn.classList.remove("theme-clicked");
    }, 450);
  });
}

function renderNavbar() {
  const header = document.getElementById("navbar");
  if (!header) return;
  const user = getCurrentUser();
  const role = pageRole === "both" ? user.role : pageRole;
  const name = user.role === role ? user.name : DEMO_USERS[role].name;
  const roleText = role === "teacher" ? "Giảng viên" : "Sinh viên";
  const page = document.body.dataset.page;
  const links = NAV_LINKS[role]
    .map(link => `<a href="${link.href}" class="${link.page === page ? "active" : ""}">${link.text}</a>`)
    .join("");

  const currentTheme = getTheme();
  const themeIcon = currentTheme === "dark" ? SUN_ICON : MOON_ICON;
  const themeLabel = currentTheme === "dark" ? "Chuyển sang chế độ sáng" : "Chuyển sang chế độ tối";

  header.innerHTML = `
    <a href="../index.html" class="logo">DeadLine Hub</a>
    <nav class="nav-links" aria-label="Menu chính">${links}</nav>
    <div class="user-box">
      <button type="button" class="theme-toggle" id="themeToggle" aria-label="${themeLabel}" title="${themeLabel}">
        ${themeIcon}
      </button>
      <span class="role-tag">${roleText}</span>
      <span>${escapeHtml(name)}</span>
      <a href="../Trang7_Truc/index_trang7.html" class="logout" data-logout>Đăng xuất</a>
    </div>
    <div class="nav-right-actions">
      <button type="button" class="theme-toggle mobile-theme-toggle" id="mobileThemeToggle" aria-label="${themeLabel}" title="${themeLabel}">
        ${themeIcon}
      </button>
      <button class="hamburger" id="hamburgerBtn" type="button" aria-label="Mở menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>`;

  const menu = document.createElement("aside");
  menu.className = "mobile-menu";
  menu.id = "mobileMenu";
  menu.setAttribute("aria-label", "Menu điện thoại");
  menu.innerHTML = `
    <div class="mobile-user">
      <div class="avatar">${initials(name)}</div>
      <div><b>${escapeHtml(name)}</b><p>${roleText}</p></div>
      <button type="button" class="theme-toggle" style="margin-left:auto;" aria-label="${themeLabel}" title="${themeLabel}">
        ${themeIcon}
      </button>
    </div>
    <nav>${links}</nav>
    <a href="../Trang7_Truc/index_trang7.html" class="btn btn-outline" data-logout>Đăng xuất</a>`;
  const overlay = document.createElement("div");
  overlay.className = "menu-overlay";
  document.body.append(menu, overlay);

  header.querySelectorAll(".theme-toggle").forEach(btn => {
    btn.addEventListener("click", toggleTheme);
  });
  menu.querySelectorAll(".theme-toggle").forEach(btn => {
    btn.addEventListener("click", toggleTheme);
  });

  const button = document.getElementById("hamburgerBtn");
  function toggleMenu(open) {
    button.classList.toggle("open", open);
    menu.classList.toggle("open", open);
    overlay.classList.toggle("show", open);
    button.setAttribute("aria-expanded", open);
    button.setAttribute("aria-label", open ? "Đóng menu" : "Mở menu");
  }
  button.addEventListener("click", () => toggleMenu(!menu.classList.contains("open")));
  overlay.addEventListener("click", () => toggleMenu(false));
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") toggleMenu(false);
  });

  document.querySelectorAll("[data-logout]").forEach(link => {
    link.addEventListener("click", () => {
      try {
        localStorage.removeItem("pm_user");
      } catch (e) {}
    });
  });
}

// ===== 8. MÀN HÌNH LOADING KHI CHUYỂN TRANG =====
function initLoader() {
  const loader = document.getElementById("pageLoader");
  if (!loader) return;
  const hide = () => loader.classList.add("hide");
  window.addEventListener("load", () => setTimeout(hide, 400));
  setTimeout(hide, 2000);
  window.addEventListener("pageshow", e => {
    if (e.persisted) hide();
  });

  document.addEventListener("click", e => {
    const link = e.target.closest("a");
    if (!link) return;
    const href = link.getAttribute("href");
    if (!href || href.startsWith("#") || href.startsWith("http") || link.target === "_blank") return;
    e.preventDefault();
    loader.classList.remove("hide");
    setTimeout(() => {
      location.href = href;
    }, 450);
  });
}

// ===== 9. LẬT THẺ =====
function initFlipCards() {
  document.addEventListener("click", e => {
    const card = e.target.closest(".flip-card");
    if (card && !e.target.closest("a")) card.classList.toggle("flipped");
  });
  document.addEventListener("keydown", e => {
    const card = e.target.closest ? e.target.closest(".flip-card") : null;
    if (card && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      card.classList.toggle("flipped");
    }
  });
}

// ===== 10. TAB =====
function initTabs(container) {
  const tabs = container.querySelectorAll(".tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
        document.getElementById(t.dataset.tab).classList.remove("active");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      document.getElementById(tab.dataset.tab).classList.add("active");
    });
  });
}

// ===== 11. HIỆN DẦN KHI CUỘN (scroll reveal) =====
function initScrollReveal() {
  if (!("IntersectionObserver" in window)) return;
  document.documentElement.classList.add("scroll-on");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("in-view");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  function scan() {
    document.querySelectorAll(".reveal:not(.in-view)").forEach(el => io.observe(el));
  }
  scan();
  // bắt cả các khối được tạo thêm bằng JS
  new MutationObserver(scan).observe(document.body, { childList: true, subtree: true });
}

applyTheme(getTheme());
renderNavbar();
initLoader();
initFlipCards();
startNotifications();
initScrollReveal();

// ===== CODE RIÊNG CỦA TRANG =====

const user = getCurrentUser();
let me = students.find(s => s.id === user.id);
if (!me) {
  me = { id: user.id, name: user.name, mssv: "", className: "", email: "", phone: "", major: "Công nghệ thông tin",
    project: { name: "Chưa đặt tên đồ án", desc: "", tech: [], repo: "", group: "Chưa có nhóm", members: [user.name] },
    submissions: [], grades: {} };
  students.push(me);
}

const select = document.getElementById("milestoneSelect");
const linkInput = document.getElementById("linkInput");
const noteInput = document.getElementById("noteInput");

function getDefaultMilestone() {
  const param = Number(new URLSearchParams(location.search).get("moc"));
  if (milestones.some(m => m.id === param)) return param;
  const open = milestones.find(m => !getLatest(me, m.id) && new Date(m.deadline) > new Date());
  if (open) return open.id;
  const notDone = milestones.find(m => !getLatest(me, m.id));
  return notDone ? notDone.id : milestones[0].id;
}

function fillSelect() {
  select.innerHTML = '<option value="">-- Chọn mốc báo cáo --</option>' +
    milestones.map(m => `<option value="${m.id}">${m.name} (hạn ${formatDate(m.deadline)})</option>`).join("");
  select.value = getDefaultMilestone();
  updateFormCountdown();
}

function updateFormCountdown() {
  const milestone = milestones.find(m => m.id === Number(select.value));
  const title = document.getElementById("formDeadline");
  if (!milestone) {
    title.textContent = "Chọn mốc để xem thời gian còn lại";
    document.getElementById("formCountdown").innerHTML = "";
    return;
  }
  title.textContent = "Hạn nộp: " + formatDate(milestone.deadline);
  startCountdown(milestone.deadline, "formCountdown");
}

function setError(input, errorId, message) {
  document.getElementById(errorId).textContent = message;
  input.classList.toggle("invalid", message !== "");
}

function validateForm() {
  let ok = true;
  if (select.value === "") {
    setError(select, "milestoneError", "Vui lòng chọn mốc báo cáo");
    ok = false;
  } else {
    setError(select, "milestoneError", "");
  }

  const link = linkInput.value.trim();
  if (link === "") {
    setError(linkInput, "linkError", "Vui lòng nhập link đồ án");
    ok = false;
  } else if (!isValidUrl(link)) {
    setError(linkInput, "linkError", "Link không hợp lệ. Link phải bắt đầu bằng http:// hoặc https://");
    ok = false;
  } else {
    setError(linkInput, "linkError", "");
  }

  if (noteInput.value.length > 200) {
    setError(noteInput, "noteError", "Ghi chú tối đa 200 ký tự");
    ok = false;
  } else {
    setError(noteInput, "noteError", "");
  }
  return ok;
}

let currentViewingSub = null;

function renderLatest(sub) {
  const box = document.getElementById("latestSubmission");
  if (!box) return;
  if (!sub) {
    box.innerHTML = `
      <div class="detail-empty">
        <div class="empty-icon-wrap">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <line x1="10" y1="9" x2="8" y2="9"></line>
          </svg>
        </div>
        <h3 class="empty-title">Chưa chọn bài nộp</h3>
        <p class="empty-desc">Bấm nút "Xem chi tiết" ở mục Lịch sử nộp bài bên dưới để xem thông tin chi tiết.</p>
      </div>`;
    return;
  }
  const milestone = milestones.find(m => m.id === sub.milestoneId);
  const milestoneName = milestone ? milestone.name : ("Mốc " + sub.milestoneId);
  const deadline = milestone ? milestone.deadline : sub.date;
  const status = new Date(sub.date) <= new Date(deadline) ? "done" : "late";
  box.innerHTML = `
    <div class="latest-detail-card">
      <div class="latest-head">
        <h3>${escapeHtml(me.project.name)}</h3>
        ${badge(status)}
      </div>
      <dl class="info-list">
        <dt>Nhóm</dt><dd>${escapeHtml(me.project.group)}</dd>
        <dt>Mốc</dt><dd>${escapeHtml(milestoneName)}</dd>
        <dt>Link</dt><dd><a href="${escapeHtml(sub.link)}" target="_blank" rel="noopener noreferrer">${escapeHtml(sub.link)}</a>
          ${isValidUrl(sub.link) ? '<span class="url-ok">✓ Link hợp lệ</span>' : '<span class="url-bad">✗ Link không hợp lệ</span>'}</dd>
        <dt>Thời gian</dt><dd><time datetime="${sub.date}">${formatDate(sub.date)}</time></dd>
        <dt>Ghi chú</dt><dd>${sub.note ? escapeHtml(sub.note) : "Không có"}</dd>
      </dl>
    </div>`;
}

function viewSubmission(milestoneId, date) {
  const sub = me.submissions.find(s => s.milestoneId === milestoneId && s.date === date);
  if (!sub) return;
  currentViewingSub = sub;
  renderLatest(sub);
  renderHistory();
  const target = document.getElementById("latestSubmission");
  if (target) {
    target.closest(".card")?.scrollIntoView({ behavior: "smooth" });
  }
}

function deleteSubmission(milestoneId, date) {
  if (!confirm("Bạn có chắc muốn xóa bài nộp này không? Dữ liệu phía giảng viên cũng sẽ bị xóa.")) {
    return;
  }
  const idx = me.submissions.findIndex(s => s.milestoneId === milestoneId && s.date === date);
  if (idx !== -1) {
    me.submissions.splice(idx, 1);
  }
  saveData("pm_students", students);
  if (currentViewingSub && currentViewingSub.milestoneId === milestoneId && currentViewingSub.date === date) {
    currentViewingSub = null;
    renderLatest(null);
  }
  renderHistory();
  showToast("Đã xóa bài nộp thành công");
}

window.viewSubmission = viewSubmission;
window.deleteSubmission = deleteSubmission;

function renderHistory() {
  const list = [...me.submissions].sort((a, b) => new Date(b.date) - new Date(a.date));
  const body = document.getElementById("historyBody");
  if (!body) return;
  if (list.length === 0) {
    body.innerHTML = '<tr><td colspan="6" class="empty">Chưa có lần nộp nào</td></tr>';
    return;
  }
  body.innerHTML = list.map((s, i) => {
    const m = milestones.find(x => x.id === s.milestoneId);
    const mName = m ? m.name.split(" - ")[0] : ("Mốc " + s.milestoneId);
    const deadline = m ? m.deadline : s.date;
    const status = new Date(s.date) <= new Date(deadline) ? "done" : "late";
    const isActive = currentViewingSub && currentViewingSub.milestoneId === s.milestoneId && currentViewingSub.date === s.date;
    return `<tr class="${isActive ? "row-active" : ""}">
      <td>${i + 1}</td>
      <td>${mName}</td>
      <td><a href="${escapeHtml(s.link)}" target="_blank">${escapeHtml(s.link)}</a></td>
      <td>${formatDate(s.date)}</td>
      <td>${badge(status)}</td>
      <td>
        <div class="table-actions">
          <button type="button" class="btn btn-primary btn-sm" onclick="viewSubmission(${s.milestoneId}, '${s.date}')">Xem chi tiết</button>
          <button type="button" class="btn btn-outline btn-sm btn-danger-outline" onclick="deleteSubmission(${s.milestoneId}, '${s.date}')">Xóa</button>
        </div>
      </td>
    </tr>`;
  }).join("");
}

function renderAll() {
  renderLatest(currentViewingSub);
  renderHistory();
}

select.addEventListener("change", () => {
  updateFormCountdown();
  setError(select, "milestoneError", "");
});
linkInput.addEventListener("input", () => setError(linkInput, "linkError", ""));
noteInput.addEventListener("input", () => {
  document.getElementById("noteCounter").textContent = noteInput.value.length + "/200";
});

document.getElementById("submitForm").addEventListener("submit", e => {
  e.preventDefault();
  if (!validateForm()) {
    showToast("Vui lòng sửa các lỗi trong form", "error");
    return;
  }
  me.submissions.push({
    milestoneId: Number(select.value),
    link: linkInput.value.trim(),
    date: new Date().toISOString(),
    note: noteInput.value.trim()
  });
  saveData("pm_students", students);
  showToast("Nộp đồ án thành công");
  linkInput.value = "";
  noteInput.value = "";
  document.getElementById("noteCounter").textContent = "0/200";
  renderAll();
});

fillSelect();
renderAll();
