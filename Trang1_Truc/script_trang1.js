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
// startNotifications() được thay bằng Floating Notification Bell riêng cho Trang 1
initScrollReveal();

// ===== CODE RIÊNG CỦA TRANG =====
const user = getCurrentUser();
const THEME_STORAGE_KEY = "dlh_theme";

function initThemeToggle() {
  const navbar = document.getElementById("navbar");
  const userBox = navbar ? navbar.querySelector(".user-box") : null;
  const hamburger = document.getElementById("hamburgerBtn");
  const anchorNode = userBox || hamburger;
  if (!navbar || !anchorNode) return;

  const themeMeta = document.querySelector('meta[name="theme-color"]');
  let currentTheme = "light";
  try {
    if (localStorage.getItem(THEME_STORAGE_KEY) === "dark") {
      currentTheme = "dark";
    }
  } catch (e) {}

  const btn = document.createElement("button");
  btn.type = "button";
  btn.id = "themeToggleBtn";
  btn.className = "theme-toggle";
  btn.innerHTML = `
    <span class="theme-icon moon" aria-hidden="true">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
      </svg>
    </span>
    <span class="theme-icon sun" aria-hidden="true">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="4"/>
        <path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/>
        <path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>
      </svg>
    </span>`;

  function applyTheme(theme, persist) {
    const nextTheme = theme === "dark" ? "dark" : "light";
    currentTheme = nextTheme;
    document.documentElement.dataset.theme = nextTheme;

    const isDark = nextTheme === "dark";
    btn.setAttribute("aria-pressed", String(isDark));
    btn.setAttribute("aria-label", isDark ? "Chuyển sang giao diện sáng" : "Chuyển sang giao diện tối");
    btn.title = isDark ? "Giao diện sáng" : "Giao diện tối";

    if (themeMeta) {
      themeMeta.setAttribute("content", isDark ? "#0B1020" : "#00008B");
    }

    if (persist) {
      try {
        localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
      } catch (e) {}
    }
  }

  navbar.insertBefore(btn, anchorNode);
  applyTheme(currentTheme, false);

  btn.addEventListener("click", () => {
    applyTheme(currentTheme === "dark" ? "light" : "dark", true);
  });
}

const KPI_ICONS = {
  students: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  milestones: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  submitted: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  late: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
  flip: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/><path d="M3 21v-5h5"/></svg>`
};

function renderMiniBadge(text, variant) {
  return `<span class="mini-badge ${variant}"><i class="mini-dot" aria-hidden="true"></i>${text}</span>`;
}

function renderStats() {
  let submitted = 0;
  let late = 0;
  let doneOnTime = 0;
  let totalVersions = 0;

  students.forEach(s => {
    submitted += countSubmitted(s);
    late += countStatus(s, "late");
    doneOnTime += countStatus(s, "done");
    totalVersions += s.submissions.length;
  });

  const totalSlots = students.length * milestones.length;
  const upcomingCount = milestones.filter(m => new Date(m.deadline) > new Date()).length;
  const submitRate = totalSlots === 0 ? 0 : Math.round(submitted / totalSlots * 100);
  const lateRate = totalSlots === 0 ? 0 : Math.round(late / totalSlots * 100);
  const activeProjects = students.filter(s => s.submissions.length > 0).length;

  const cards = [
    {
      label: "Tổng số sinh viên",
      value: students.length,
      icon: KPI_ICONS.students,
      badge: renderMiniBadge(`${students.length} đồ án`, "info"),
      backTitle: "QUY ƯỚC ĐỒ ÁN",
      backDesc: `Mỗi sinh viên phụ trách 1 đồ án duy nhất. Hiện có ${activeProjects}/${students.length} đồ án đã phát sinh bài nộp.`,
      backMeta: `${students.length} SV = ${students.length} đồ án`
    },
    {
      label: "Tổng số mốc báo cáo",
      value: milestones.length,
      icon: KPI_ICONS.milestones,
      badge: renderMiniBadge(upcomingCount > 0 ? `${upcomingCount} mốc sắp tới` : "Đã hết hạn", upcomingCount > 0 ? "info" : "pending"),
      backTitle: "PHÂN BỔ MỐC NỘP",
      backDesc: `Với ${students.length} đồ án qua ${milestones.length} mốc báo cáo, hệ thống theo dõi tổng cộng ${totalSlots} lượt mốc toàn lớp.`,
      backMeta: `${totalSlots} lượt mốc toàn lớp`
    },
    {
      label: "Tổng số lượt nộp",
      value: submitted,
      icon: KPI_ICONS.submitted,
      badge: renderMiniBadge(`Đã nộp · ${submitRate}%`, "done"),
      color: "green",
      backTitle: "CHI TIẾT LƯỢT NỘP",
      backDesc: `Gồm ${doneOnTime} lượt nộp đúng hạn và ${Math.max(0, submitted - doneOnTime)} lượt nộp sau hạn (${totalVersions} bản ghi nộp).`,
      backMeta: `${submitted}/${totalSlots} lượt (${submitRate}%)`
    },
    {
      label: "Tổng số lượt trễ hạn",
      value: late,
      icon: KPI_ICONS.late,
      badge: renderMiniBadge(late > 0 ? "Trễ hạn" : "Đúng tiến độ", late > 0 ? "late" : "done"),
      color: "red",
      backTitle: "CẢNH BÁO TRỄ HẠN",
      backDesc: late > 0
        ? "Bao gồm các lượt nộp sau thời hạn và các mốc đã qua hạn nhưng chưa có bài nộp."
        : "Toàn bộ các đồ án hiện không có lượt nào bị trễ hạn.",
      backMeta: `${late}/${totalSlots} lượt (${lateRate}%)`
    }
  ];

  document.getElementById("statCards").innerHTML = cards.map((c, i) => `
    <article
      class="flip-card kpi-flip reveal d${i} ${c.color || ""}"
      tabindex="0"
      role="button"
      aria-pressed="false"
      aria-label="${c.label}: ${c.value}. Nhấn để xem thêm"
    >
      <div class="flip-inner">
        <div class="flip-front kpi-front">
          <div class="kpi-front-main">
            <div class="stat-top">
              <p class="kpi-label">${c.label}</p>
              <span class="stat-icon">${c.icon}</span>
            </div>
            <h3 class="kpi-value">${c.value}</h3>
          </div>
          <div class="kpi-front-foot">
            ${c.badge}
            <span class="flip-cue">${KPI_ICONS.flip}<span>Nhấn để xem thêm</span></span>
          </div>
        </div>
        <div class="flip-back kpi-back">
          <span class="kpi-back-title">${c.backTitle}</span>
          <p class="kpi-back-desc">${c.backDesc}</p>
          <span class="kpi-back-meta">${c.backMeta}</span>
          <span class="flip-cue">${KPI_ICONS.flip}<span>Nhấn để quay lại</span></span>
        </div>
      </div>
    </article>`).join("");

  const noteText = document.getElementById("dataNoteText");
  if (noteText) {
    noteText.innerHTML = `Quy ước dữ liệu: Hệ thống hiện có <b>${students.length} sinh viên</b> tương ứng <b>${students.length} đồ án</b> (mỗi sinh viên quản lý 1 đồ án). Qua <b>${milestones.length} mốc báo cáo</b> có tổng <b>${totalSlots} lượt mốc</b> toàn lớp; mỗi đồ án có thể nộp nhiều mốc hoặc nhiều phiên bản nên tổng lượt nộp theo mốc hiện là <b>${submitted}</b>.`;
  }
}

function initKpiFlipSync() {
  const statGrid = document.getElementById("statCards");
  if (!statGrid) return;

  function syncCardState(card) {
    if (!card) return;
    card.setAttribute("aria-pressed", String(card.classList.contains("flipped")));
  }

  statGrid.addEventListener("click", e => {
    syncCardState(e.target.closest(".kpi-flip"));
  });
  statGrid.addEventListener("keydown", e => {
    if (e.key !== "Enter" && e.key !== " ") return;
    syncCardState(e.target.closest(".kpi-flip"));
  });
}

function renderNext() {
  const next = getNextMilestone();
  const nextNameEl = document.getElementById("nextName");
  const nextDateEl = document.getElementById("nextDate");
  const countdownEl = document.getElementById("homeCountdown");
  const badgesEl = document.getElementById("countdownBadges");

  if (!next) {
    nextNameEl.textContent = "Đã hết hạn tất cả các mốc báo cáo";
    nextDateEl.textContent = "Không còn mốc nào sắp đến hạn";
    countdownEl.innerHTML = '<p class="countdown-over">00 Ngày · 00 Giờ · 00 Phút · 00 Giây</p>';
    if (badgesEl) {
      badgesEl.innerHTML = '<span class="mini-badge on-dark danger">Đã quá hạn</span>';
    }
    return;
  }

  if (badgesEl) {
    badgesEl.innerHTML = '<span class="mini-badge on-dark">Mốc tiếp theo</span><span class="mini-badge on-dark warn">Sắp đến hạn</span>';
  }
  nextNameEl.textContent = next.name;
  nextDateEl.textContent = "Hạn nộp: " + formatDate(next.deadline);
  startCountdown(next.deadline, "homeCountdown");
}

function renderPie() {
  let done = 0;
  let pending = 0;
  let late = 0;

  students.forEach(s => {
    done += countStatus(s, "done");
    pending += countStatus(s, "pending");
    late += countStatus(s, "late");
  });

  const total = done + pending + late;
  const pieChart = document.getElementById("pieChart");
  const pieTotal = document.getElementById("pieTotal");
  const pieBadge = document.getElementById("pieStatusBadge");

  if (total === 0) {
    pieChart.style.background = "var(--border)";
    pieTotal.textContent = "0";
    if (pieBadge) pieBadge.innerHTML = renderMiniBadge("Chưa nộp", "pending");
    document.getElementById("pieLegend").innerHTML = '<li class="empty">Chưa có dữ liệu mốc báo cáo</li>';
    return;
  }

  const a = Math.round(done / total * 100);
  const b = Math.round(pending / total * 100);
  const c = 100 - a - b;

  pieChart.style.background =
    `conic-gradient(var(--success) 0 ${a}%, var(--warning) ${a}% ${a + b}%, var(--danger) ${a + b}% 100%)`;
  pieChart.setAttribute(
    "aria-label",
    `Biểu đồ tỷ lệ nộp bài toàn lớp: Đã nộp ${done} (${a}%), Chưa nộp ${pending} (${b}%), Trễ hạn ${late} (${c}%)`
  );
  pieTotal.textContent = total;
  if (pieBadge) {
    pieBadge.innerHTML = late === 0
      ? renderMiniBadge("Đúng tiến độ", "done")
      : renderMiniBadge(`Trễ hạn · ${c}%`, "late");
  }

  const rows = [
    { name: "Đã nộp", count: done, percent: a, color: "var(--success)" },
    { name: "Chưa nộp", count: pending, percent: b, color: "var(--warning)" },
    { name: "Trễ hạn", count: late, percent: c, color: "var(--danger)" }
  ];

  document.getElementById("pieLegend").innerHTML = rows.map(r => `
    <li><i style="background:${r.color}" aria-hidden="true"></i><span>${r.name}</span><b>${r.count} · ${r.percent}%</b></li>`).join("");
}

function renderBars() {
  const max = students.length;
  const barChart = document.getElementById("barChart");
  const summaryParts = [];

  barChart.innerHTML = milestones.map(m => {
    const count = students.filter(s => getLatest(s, m.id) !== null).length;
    const height = max === 0 ? 0 : Math.round(count / max * 190);
    summaryParts.push(`Mốc ${m.id}: ${count}/${max}`);
    return `<div class="bar-col">
      <span class="bar-value">${count}</span>
      <div class="bar" style="height:${height}px" title="Mốc ${m.id}: ${count}/${max} bài nộp"></div>
      <span class="bar-label">Mốc ${m.id}</span>
    </div>`;
  }).join("");

  barChart.setAttribute("aria-label", "Biểu đồ cột số bài nộp theo mốc: " + summaryParts.join(", "));
}

function getMilestonePhaseBadge(milestone, nextId) {
  if (new Date(milestone.deadline) < new Date()) {
    return '<span class="badge late">Đã qua hạn</span>';
  }
  if (nextId !== null && milestone.id === nextId) {
    return '<span class="badge pending">Sắp đến hạn</span>';
  }
  return '<span class="badge done">Đang mở</span>';
}

function renderMilestones() {
  const next = getNextMilestone();
  const nextId = next ? next.id : null;
  const summaryEl = document.getElementById("milestoneSummary");
  if (summaryEl) {
    summaryEl.textContent = `${milestones.length} mốc · ${students.length} sinh viên`;
  }

  document.getElementById("milestoneList").innerHTML = milestones.map(m => {
    const count = students.filter(s => getLatest(s, m.id) !== null).length;
    const phaseBadge = getMilestonePhaseBadge(m, nextId);
    return `<li class="ms-item">
      <div class="ms-main">
        <h3>${escapeHtml(m.name)}</h3>
        <p class="small">Hạn nộp: <time datetime="${m.deadline}">${formatDate(m.deadline)}</time></p>
      </div>
      <div class="ms-meta">
        <span class="badge info">${count}/${students.length} đã nộp</span>
        ${phaseBadge}
      </div>
    </li>`;
  }).join("");

  const nextStep = document.getElementById("nextStep");
  if (user.role === "teacher") {
    nextStep.innerHTML = `
      <a href="../Trang5_Hoang/index.html" class="btn btn-primary">Bắt đầu chấm điểm</a>
      <a href="../Trang6_Nhu/index.html" class="btn btn-outline">Xem Timeline &amp; hồ sơ sinh viên</a>`;
  } else {
    nextStep.innerHTML = `<a href="../Trang2_Cuong/index.html" class="btn btn-primary">Xem Timeline dự án</a>`;
  }
}

function initNotificationBell() {
  const wrap = document.getElementById("notifBellWrap");
  const bellBtn = document.getElementById("notifBellBtn");
  const countEl = document.getElementById("notifCount");
  const popupEl = document.getElementById("notifPopup");
  const drawerEl = document.getElementById("notifDrawer");
  const drawerList = document.getElementById("notifDrawerList");
  const drawerClose = document.getElementById("notifDrawerClose");

  if (!wrap || !bellBtn || !popupEl || !drawerEl || !drawerList) return;

  const items = getRecentSubmissions();
  const INTERVAL_MS = 2000;
  const POPUP_DURATION = 1800;

  let index = 0;
  let unread = 0;
  let intervalId = null;
  let hideTimer = null;
  let removeTimer = null;
  let ringTimer = null;

  function renderDrawerItems() {
    if (items.length === 0) {
      drawerList.innerHTML = '<li class="empty">Chưa có thông báo nộp bài</li>';
      return;
    }
    drawerList.innerHTML = items.map(item => `
      <li class="notif-drawer-item">
        <div class="avatar">${initials(item.name)}</div>
        <div>
          <b>${escapeHtml(item.name)}</b> (${escapeHtml(item.group)}) đã nộp ${escapeHtml(item.milestone)}
          <span class="notif-time">${timeAgo(item.date)} · ${formatDate(item.date)}</span>
        </div>
      </li>`).join("");
  }

  function updateCount(n) {
    unread = n;
    if (!countEl) return;
    if (unread > 0) {
      countEl.textContent = String(unread);
      countEl.hidden = false;
    } else {
      countEl.textContent = "0";
      countEl.hidden = true;
    }
  }

  function hidePopupImmediate() {
    clearTimeout(hideTimer);
    clearTimeout(removeTimer);
    popupEl.classList.remove("is-hiding");
    popupEl.hidden = true;
    popupEl.innerHTML = "";
  }

  function triggerBellRing() {
    clearTimeout(ringTimer);
    bellBtn.classList.remove("is-ringing");
    requestAnimationFrame(() => {
      bellBtn.classList.add("is-ringing");
      ringTimer = setTimeout(() => bellBtn.classList.remove("is-ringing"), 760);
    });
  }

  function showNextNotification() {
    if (document.hidden) return;
    if (index >= items.length) {
      stopAutoFeed();
      return;
    }

    const item = items[index];
    index++;

    triggerBellRing();
    if (drawerEl.hidden) {
      updateCount(unread + 1);
    }

    clearTimeout(hideTimer);
    clearTimeout(removeTimer);
    popupEl.classList.remove("is-hiding");
    popupEl.innerHTML = `
      <div class="notif-popup-row">
        <div class="avatar">${initials(item.name)}</div>
        <div class="notif-popup-body">
          <b>${escapeHtml(item.name)}</b> (${escapeHtml(item.group)}) đã nộp ${escapeHtml(item.milestone)}
          <span class="notif-time">${timeAgo(item.date)} · ${formatDate(item.date)}</span>
        </div>
        <button type="button" class="notif-close" id="notifPopupClose" aria-label="Đóng thông báo">×</button>
      </div>`;
    popupEl.hidden = false;

    const closeBtn = document.getElementById("notifPopupClose");
    if (closeBtn) {
      closeBtn.addEventListener("click", hidePopupImmediate);
    }

    if (drawerEl.hidden === false) {
      hidePopupImmediate();
    } else {
      hideTimer = setTimeout(() => {
        popupEl.classList.add("is-hiding");
        removeTimer = setTimeout(hidePopupImmediate, 240);
      }, POPUP_DURATION);
    }

    if (index >= items.length) {
      stopAutoFeed();
    }
  }

  function startAutoFeed() {
    if (intervalId !== null || index >= items.length || document.hidden) return;
    intervalId = setInterval(showNextNotification, INTERVAL_MS);
  }

  function stopAutoFeed() {
    if (intervalId !== null) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  function setDrawerOpen(open) {
    drawerEl.hidden = !open;
    bellBtn.setAttribute("aria-expanded", String(open));
    bellBtn.setAttribute("aria-label", open ? "Đóng thông báo nộp bài" : "Mở thông báo nộp bài");
    if (open) {
      hidePopupImmediate();
      updateCount(0);
    }
  }

  bellBtn.addEventListener("click", () => {
    setDrawerOpen(drawerEl.hidden);
  });

  if (drawerClose) {
    drawerClose.addEventListener("click", () => setDrawerOpen(false));
  }

  document.addEventListener("click", e => {
    if (!drawerEl.hidden && !wrap.contains(e.target)) {
      setDrawerOpen(false);
    }
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      if (!drawerEl.hidden) setDrawerOpen(false);
      if (!popupEl.hidden) hidePopupImmediate();
    }
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopAutoFeed();
    } else {
      startAutoFeed();
    }
  });

  renderDrawerItems();
  startAutoFeed();
}

document.getElementById("welcome").textContent = "Tổng quan tiến độ đồ án";
initThemeToggle();
renderStats();
initKpiFlipSync();
renderNext();
renderPie();
renderBars();
renderMilestones();
initNotificationBell();
