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
    { page: "trang1", text: "Trang chủ", href: "../Trang1_Truc/index_trang1.html" },
    { page: "trang2", text: "Timeline", href: "../Trang2_Cuong/index.html" },
    { page: "trang3", text: "Nộp đồ án", href: "../Trang3_Hieu/index.html" },
    { page: "trang4", text: "Điểm & nhận xét", href: "../Trang4_Cuong/index.html" }
  ],
  teacher: [
    { page: "trang1", text: "Trang chủ", href: "../Trang1_Truc/index_trang1.html" },
    { page: "trang5", text: "Chấm điểm", href: "../Trang5_Hoang/index.html" },
    { page: "trang6", text: "Sinh viên", href: "../Trang6_Nhu/index.html" }
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

// ===== 7. NAVBAR + MENU HAMBURGER =====
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

  header.innerHTML = `
    <a href="../Trang1_Truc/index_trang1.html" class="logo">DeadLine Hub</a>
    <nav class="nav-links" aria-label="Menu chính">${links}</nav>
    <div class="user-box">
      <span class="role-tag">${roleText}</span>
      <span>${escapeHtml(name)}</span>
      <a href="../Trang7_Truc/index_trang7.html" class="logout" data-logout>Đăng xuất</a>
    </div>
    <button class="hamburger" id="hamburgerBtn" type="button" aria-label="Mở menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>`;

  const menu = document.createElement("aside");
  menu.className = "mobile-menu";
  menu.id = "mobileMenu";
  menu.setAttribute("aria-label", "Menu điện thoại");
  menu.innerHTML = `
    <div class="mobile-user">
      <div class="avatar">${initials(name)}</div>
      <div><b>${escapeHtml(name)}</b><p>${roleText}</p></div>
    </div>
    <nav>${links}</nav>
    <a href="../Trang7_Truc/index_trang7.html" class="btn btn-outline" data-logout>Đăng xuất</a>`;
  const overlay = document.createElement("div");
  overlay.className = "menu-overlay";
  document.body.append(menu, overlay);

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

renderNavbar();
initLoader();
initFlipCards();
startNotifications();
initScrollReveal();

// ===== CODE RIÊNG CỦA TRANG =====
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LAMP_HINT_OFF = "Kéo dây để bật đèn và bắt đầu đăng nhập";
const LAMP_HINT_ON = "Đèn đã bật, bạn có thể đăng nhập hoặc đăng ký";

function setFormLocked(locked) {
  const isLocked = Boolean(locked);
  document.body.classList.toggle("light-off", isLocked);
  document.body.classList.toggle("light-on", !isLocked);

  const authCard = document.getElementById("authCard");
  if (!authCard) return;

  const lockState = String(isLocked);
  authCard.setAttribute("aria-disabled", lockState);

  const authTabsBox = authCard.querySelector(".auth-tabs");
  const loginFormEl = document.getElementById("loginForm");
  const registerFormEl = document.getElementById("registerForm");
  [authTabsBox, loginFormEl, registerFormEl].forEach(el => {
    if (el) el.setAttribute("aria-disabled", lockState);
  });

  authCard.querySelectorAll("input, button, select, textarea").forEach(control => {
    control.disabled = isLocked;
    control.setAttribute("aria-disabled", lockState);
  });

  if (isLocked && document.activeElement && authCard.contains(document.activeElement)) {
    document.activeElement.blur();
  }
}

/* ===== HIỆU ỨNG BÓNG ĐÈN GIẬT DÂY (POINTER EVENTS + KEYBOARD) ===== */
function initHangingLamp() {
  const mainEl = document.getElementById("mainContent");
  const backdropEl = document.getElementById("sceneBackdrop");
  const pullBtn = document.getElementById("pullCordBtn");
  const assembly = document.getElementById("pullCordAssembly");
  const cordString = document.getElementById("cordString");
  const hintEl = document.getElementById("pullHint");

  if (!mainEl || !pullBtn || !assembly || !cordString) return;

  const PULL_THRESHOLD = 28;
  const MAX_PULL = 56;
  const MAX_SWING = 14;
  const BASE_STRING_HEIGHT = 46;

  let isLampOn = false;
  let isDragging = false;
  let activePointerId = null;
  let startX = 0;
  let startY = 0;
  let maxDeltaY = 0;
  let toggledThisDrag = false;
  let hintTimeout = null;

  function setLampState(on) {
    isLampOn = Boolean(on);
    const state = isLampOn ? "on" : "off";
    mainEl.dataset.lamp = state;
    if (backdropEl) backdropEl.dataset.lamp = state;

    pullBtn.setAttribute("aria-pressed", String(isLampOn));
    pullBtn.setAttribute("aria-label", isLampOn ? "Kéo dây để tắt đèn" : "Kéo dây để bật đèn");

    if (hintEl) {
      hintEl.textContent = isLampOn ? LAMP_HINT_ON : LAMP_HINT_OFF;
    }
    setFormLocked(!isLampOn);
  }

  function applyCordTransform(dx, dy) {
    const clampedY = Math.max(0, Math.min(MAX_PULL, dy));
    const clampedX = Math.max(-MAX_SWING, Math.min(MAX_SWING, dx * 0.35));
    const scaleY = (BASE_STRING_HEIGHT + clampedY) / BASE_STRING_HEIGHT;

    cordString.style.transform = `scaleY(${scaleY.toFixed(3)})`;
    assembly.style.transform = `translate3d(${clampedX.toFixed(1)}px, ${(clampedY * 0.25).toFixed(1)}px, 0)`;
  }

  function releaseCord() {
    assembly.classList.add("is-releasing");
    cordString.style.transform = "scaleY(1)";
    assembly.style.transform = "translate3d(0, 0, 0)";
  }

  function nudgeHint() {
    if (!hintEl) return;
    hintEl.textContent = "Kéo xuống thêm để bật/tắt đèn";
    hintEl.classList.add("nudge");
    clearTimeout(hintTimeout);
    hintTimeout = setTimeout(() => {
      hintEl.classList.remove("nudge");
      hintEl.textContent = isLampOn ? LAMP_HINT_ON : LAMP_HINT_OFF;
    }, 1500);
  }

  pullBtn.addEventListener("pointerdown", e => {
    if (e.button !== 0 && e.pointerType === "mouse") return;
    e.preventDefault();
    isDragging = true;
    activePointerId = e.pointerId;
    startX = e.clientX;
    startY = e.clientY;
    maxDeltaY = 0;
    toggledThisDrag = false;

    pullBtn.classList.add("is-dragging");
    assembly.classList.remove("is-releasing");
    document.body.classList.add("is-dragging-cord");

    try {
      pullBtn.setPointerCapture(e.pointerId);
    } catch (err) {}
  });

  pullBtn.addEventListener("pointermove", e => {
    if (!isDragging || e.pointerId !== activePointerId) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    if (dy > maxDeltaY) maxDeltaY = dy;

    applyCordTransform(dx, dy);

    if (!toggledThisDrag && dy >= PULL_THRESHOLD) {
      toggledThisDrag = true;
      setLampState(!isLampOn);
    }
  });

  function finishDrag(e) {
    if (!isDragging || e.pointerId !== activePointerId) return;
    isDragging = false;
    activePointerId = null;

    pullBtn.classList.remove("is-dragging");
    document.body.classList.remove("is-dragging-cord");
    try {
      pullBtn.releasePointerCapture(e.pointerId);
    } catch (err) {}

    releaseCord();
    if (!toggledThisDrag && maxDeltaY < PULL_THRESHOLD) {
      nudgeHint();
    }
  }

  pullBtn.addEventListener("pointerup", finishDrag);
  pullBtn.addEventListener("pointercancel", finishDrag);

  pullBtn.addEventListener("keydown", e => {
    if (e.key !== "Enter" && e.key !== " ") return;
    e.preventDefault();
    assembly.classList.remove("is-releasing");
    applyCordTransform(0, PULL_THRESHOLD + 6);
    setLampState(!isLampOn);
    requestAnimationFrame(() => {
      setTimeout(releaseCord, 110);
    });
  });

  setLampState(false);
}

/* ===== XỬ LÝ FORM ĐĂNG NHẬP / ĐĂNG KÝ ===== */
function setError(inputId, message) {
  const errEl = document.getElementById(inputId + "Error");
  const inputEl = document.getElementById(inputId);
  if (errEl) errEl.textContent = message;
  if (inputEl) inputEl.classList.toggle("invalid", message !== "");
}

function goHome(user) {
  saveData("pm_user", { id: user.id, name: user.name, role: user.role });
  showToast("Xin chào " + user.name + "!");
  setTimeout(() => {
    document.getElementById("pageLoader").classList.remove("hide");
    setTimeout(() => {
      location.href = "../Trang1_Truc/index_trang1.html";
    }, 450);
  }, 600);
}

function switchTab(name, updateUrl) {
  const target = name === "register" ? "register" : "login";
  document.querySelectorAll(".auth-tabs .tab").forEach(t => {
    const active = t.dataset.tab === target;
    t.classList.toggle("active", active);
    t.setAttribute("aria-selected", String(active));
  });
  document.getElementById("loginForm").hidden = target !== "login";
  document.getElementById("registerForm").hidden = target !== "register";

  if (updateUrl) {
    try {
      const url = new URL(location.href);
      url.searchParams.set("tab", target);
      history.replaceState(null, "", url.toString());
    } catch (e) {}
  }
}

const authTabs = Array.from(document.querySelectorAll(".auth-tabs .tab"));
authTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    if (document.body.classList.contains("light-off")) return;
    switchTab(tab.dataset.tab, true);
  });
  tab.addEventListener("keydown", e => {
    if (document.body.classList.contains("light-off")) return;
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    e.preventDefault();
    const nextTab = authTabs[(index + (e.key === "ArrowRight" ? 1 : -1) + authTabs.length) % authTabs.length];
    switchTab(nextTab.dataset.tab, true);
    nextTab.focus();
  });
});

document.querySelectorAll(".toggle-pass").forEach(btn => {
  btn.addEventListener("click", () => {
    if (document.body.classList.contains("light-off")) return;
    const input = document.getElementById(btn.dataset.target);
    const show = input.type === "password";
    input.type = show ? "text" : "password";
    btn.textContent = show ? "Ẩn" : "Hiện";
    btn.setAttribute("aria-pressed", String(show));
    btn.setAttribute("aria-label", (show ? "Ẩn " : "Hiện ") + (btn.dataset.target === "loginPass" ? "mật khẩu đăng nhập" : "mật khẩu đăng ký"));
  });
});

document.querySelectorAll(".demo-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    if (document.body.classList.contains("light-off")) return;
    document.getElementById("loginEmail").value = btn.dataset.email;
    document.getElementById("loginPass").value = "123456";
    setError("loginEmail", "");
    setError("loginPass", "");
    document.getElementById("loginEmail").focus();
  });
});

["loginEmail", "loginPass", "regName", "regEmail", "regPass", "regPass2"].forEach(id => {
  const el = document.getElementById(id);
  if (el) {
    el.addEventListener("input", () => setError(id, ""));
  }
});

const teacherNotice = document.getElementById("teacherRoleNotice");
document.querySelectorAll('input[name="role"]').forEach(radio => {
  radio.addEventListener("change", () => {
    document.getElementById("regRoleError").textContent = "";
    if (teacherNotice) {
      teacherNotice.hidden = radio.value !== "teacher" || !radio.checked;
    }
  });
});

document.getElementById("loginForm").addEventListener("submit", e => {
  e.preventDefault();
  if (document.body.classList.contains("light-off")) return;
  const email = document.getElementById("loginEmail").value.trim().toLowerCase();
  const pass = document.getElementById("loginPass").value;
  let firstInvalid = null;

  if (email === "") {
    setError("loginEmail", "Vui lòng nhập email");
    firstInvalid = firstInvalid || "loginEmail";
  } else if (!EMAIL_REGEX.test(email)) {
    setError("loginEmail", "Email không đúng định dạng (ví dụ: ten@st.lhu.edu.vn)");
    firstInvalid = firstInvalid || "loginEmail";
  } else {
    setError("loginEmail", "");
  }

  if (pass === "") {
    setError("loginPass", "Vui lòng nhập mật khẩu");
    firstInvalid = firstInvalid || "loginPass";
  } else {
    setError("loginPass", "");
  }

  if (firstInvalid) {
    document.getElementById(firstInvalid).focus();
    return;
  }

  const user = accounts.find(a => a.email === email && a.password === pass);
  if (!user) {
    setError("loginPass", "Email hoặc mật khẩu không đúng");
    document.getElementById("loginPass").focus();
    return;
  }
  goHome(user);
});

document.getElementById("registerForm").addEventListener("submit", e => {
  e.preventDefault();
  if (document.body.classList.contains("light-off")) return;
  const name = document.getElementById("regName").value.trim();
  const email = document.getElementById("regEmail").value.trim().toLowerCase();
  const pass = document.getElementById("regPass").value;
  const pass2 = document.getElementById("regPass2").value;
  const roleInput = document.querySelector('input[name="role"]:checked');
  let firstInvalid = null;

  if (name.length < 2) {
    setError("regName", "Họ tên tối thiểu 2 ký tự");
    firstInvalid = firstInvalid || "regName";
  } else {
    setError("regName", "");
  }

  if (email === "") {
    setError("regEmail", "Vui lòng nhập email");
    firstInvalid = firstInvalid || "regEmail";
  } else if (!EMAIL_REGEX.test(email)) {
    setError("regEmail", "Email không đúng định dạng");
    firstInvalid = firstInvalid || "regEmail";
  } else if (accounts.some(a => a.email === email)) {
    setError("regEmail", "Email đã được đăng ký");
    firstInvalid = firstInvalid || "regEmail";
  } else {
    setError("regEmail", "");
  }

  if (pass.length < 6) {
    setError("regPass", "Mật khẩu tối thiểu 6 ký tự");
    firstInvalid = firstInvalid || "regPass";
  } else {
    setError("regPass", "");
  }

  if (pass2 !== pass || pass2 === "") {
    setError("regPass2", "Mật khẩu nhập lại không khớp");
    firstInvalid = firstInvalid || "regPass2";
  } else {
    setError("regPass2", "");
  }

  const regRoleError = document.getElementById("regRoleError");
  if (!roleInput) {
    regRoleError.textContent = "Vui lòng chọn vai trò Sinh viên";
    firstInvalid = firstInvalid || "roleStudent";
  } else if (roleInput.value === "teacher") {
    regRoleError.textContent = "Không thể tự cấp quyền Giảng viên từ form đăng ký. Vui lòng chọn Sinh viên hoặc dùng tài khoản demo Giảng viên.";
    if (teacherNotice) teacherNotice.hidden = false;
    firstInvalid = firstInvalid || "roleTeacher";
  } else {
    regRoleError.textContent = "";
  }

  if (firstInvalid) {
    const focusEl = document.getElementById(firstInvalid);
    if (focusEl && typeof focusEl.focus === "function") focusEl.focus();
    return;
  }

  const role = "student";
  let max = 0;
  accounts.forEach(a => {
    if (a.id.startsWith("SV")) max = Math.max(max, Number(a.id.slice(2)));
  });
  students.forEach(s => {
    if (s.id.startsWith("SV")) max = Math.max(max, Number(s.id.slice(2)));
  });

  const user = { id: "SV" + String(max + 1).padStart(2, "0"), name, email, password: pass, role };
  accounts.push(user);
  saveData("pm_accounts", accounts);

  students.push({
    id: user.id, name, mssv: "", className: "", email, phone: "", major: "Công nghệ thông tin",
    project: { name: "Chưa đặt tên đồ án", desc: "", tech: ["HTML5", "CSS3", "JavaScript"], repo: "", group: "Chưa có nhóm", members: [name + " (Trưởng nhóm)"] },
    submissions: [], grades: {}
  });
  saveData("pm_students", students);
  goHome(user);
});

initHangingLamp();
const params = new URLSearchParams(location.search);
switchTab(params.get("tab") === "register" ? "register" : "login", false);
