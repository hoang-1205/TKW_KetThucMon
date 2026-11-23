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
    { page: "trang1", text: "Trang chủ", href: "../Trang1_Truc/index.html" },
    { page: "trang2", text: "Timeline", href: "../Trang2_Cuong/index.html" },
    { page: "trang3", text: "Nộp đồ án", href: "../Trang3_Hieu/index.html" },
    { page: "trang4", text: "Điểm & nhận xét", href: "../Trang4_Cuong/index.html" }
  ],
  teacher: [
    { page: "trang1", text: "Trang chủ", href: "../Trang1_Truc/index.html" },
    { page: "trang5", text: "Chấm điểm", href: "../Trang5_Hoang/index.html" },
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
    <a href="../Trang1_Truc/index.html" class="logo">DeadLine Hub</a>
    <nav class="nav-links" aria-label="Menu chính">${links}</nav>
    <div class="user-box">
      <span class="role-tag">${roleText}</span>
      <span>${escapeHtml(name)}</span>
      <a href="../Trang7_Truc/index.html" class="logout" data-logout>Đăng xuất</a>
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
    <a href="../Trang7_Truc/index.html" class="btn btn-outline" data-logout>Đăng xuất</a>`;
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

let currentId = null;

// mốc đang tới hạn gần nhất (hết hạn hết thì lấy mốc cuối)
function getCurrentMilestone() {
  return getNextMilestone() || milestones[milestones.length - 1];
}

// trạng thái tổng của sinh viên: có trễ hạn / chưa nộp mốc hiện tại / đầy đủ
function getOverall(student) {
  if (countStatus(student, "late") > 0) return "late";
  if (!getLatest(student, getCurrentMilestone().id)) return "pending";
  return "done";
}

function matchStatus(s, status) {
  const current = getCurrentMilestone();
  switch (status) {
    case "late": return countStatus(s, "late") > 0;
    case "missing": return !getLatest(s, current.id);
    case "none": return countSubmitted(s) === 0;
    case "done": return getOverall(s) === "done";
    default: return true;
  }
}

// ghi số lượng vào từng lựa chọn lọc
function updateFilterLabels() {
  const current = getCurrentMilestone();
  const short = current.name.split(" - ")[0];
  const labels = {
    all: "Tất cả trạng thái",
    late: "Có mốc trễ hạn",
    missing: "Chưa nộp " + short,
    none: "Chưa nộp bài nào",
    done: "Đã nộp đầy đủ"
  };
  document.querySelectorAll("#filterSelect option").forEach(o => {
    const n = students.filter(s => matchStatus(s, o.value)).length;
    o.textContent = labels[o.value] + " (" + n + ")";
  });
}

// đổ danh sách nhóm vào dropdown lọc
function fillGroupFilter() {
  const groups = [];
  students.forEach(s => {
    if (!groups.includes(s.project.group)) groups.push(s.project.group);
  });
  document.getElementById("groupFilter").innerHTML =
    '<option value="all">Tất cả nhóm</option>' +
    groups.map(g => `<option value="${g}">${g}</option>`).join("");
}

function renderList() {
  const keyword = document.getElementById("searchInput").value.trim().toLowerCase();
  const status = document.getElementById("filterSelect").value;
  const group = document.getElementById("groupFilter").value;

  const list = students.filter(s => {
    const matchText = s.name.toLowerCase().includes(keyword) || s.mssv.includes(keyword);
    const matchGroup = group === "all" || s.project.group === group;
    return matchText && matchGroup && matchStatus(s, status);
  });

  document.getElementById("studentCount").textContent = list.length;
  const box = document.getElementById("studentList");
  if (list.length === 0) {
    box.innerHTML = '<li class="empty">Không có sinh viên phù hợp bộ lọc</li>';
    return;
  }
  box.innerHTML = list.map(s => {
    const avg = getAverage(s);
    return `<li class="sv-item ${s.id === currentId ? "active" : ""}" data-id="${s.id}" tabindex="0" role="button">
      <div class="avatar">${initials(s.name)}</div>
      <div class="sv-text">
        <b>${escapeHtml(s.name)}</b>
        <span class="small">${s.mssv} · ${escapeHtml(s.project.group)}</span>
      </div>
      <div class="sv-right">
        ${avg === null ? '<span class="score none">--</span>' : scoreTag(avg)}
        <i class="dot ${getOverall(s)}" title="${getStatusText(getOverall(s))}"></i>
      </div>
    </li>`;
  }).join("");
}

function statCards(s) {
  const avg = getAverage(s);
  const cards = [
    { label: "Điểm trung bình", value: scoreText(avg) },
    { label: "Số mốc đã chấm", value: Object.keys(s.grades).length + "/" + milestones.length },
    { label: "Số mốc đã nộp", value: countSubmitted(s) + "/" + milestones.length, color: "green" },
    { label: "Mốc trễ hạn", value: countStatus(s, "late"), color: "red" }
  ];
  return cards.map(c => `<article class="stat-card ${c.color || ""}"><p>${c.label}</p><h3>${c.value}</h3></article>`).join("");
}

function showStudent(id) {
  const s = students.find(x => x.id === id);
  if (!s) return;
  currentId = id;
  const avg = getAverage(s);
  const done = countSubmitted(s);
  const percent = Math.round(done / milestones.length * 100);

  // ----- Banner -----
  document.getElementById("banner").innerHTML = `
    <div class="avatar big">${initials(s.name)}</div>
    <div class="banner-info">
      <p>Hồ sơ sinh viên</p>
      <h2>${escapeHtml(s.name)}</h2>
      <div class="chips">
        <span>MSSV: ${s.mssv}</span>
        <span>Lớp: ${s.className}</span>
        <span>${escapeHtml(s.project.group)}</span>
      </div>
    </div>
    <div class="banner-side">
      <div class="banner-score"><b>${scoreText(avg)}</b><span>Điểm TB</span></div>
      <div class="banner-score"><b>${done}/${milestones.length}</b><span>Đã nộp</span></div>
    </div>`;

  // ----- Tab 1: Hồ sơ -----
  document.getElementById("profileStats").innerHTML = statCards(s);
  const info = [
    ["Họ và tên", s.name, "👤"], ["MSSV", s.mssv, "🎓"], ["Lớp", s.className, "🏫"],
    ["Ngành", s.major, "💻"], ["Email", s.email, "✉"], ["Số điện thoại", s.phone, "☎"]
  ];
  document.getElementById("profileGrid").innerHTML = info.map(i =>
    `<div class="info-item"><p>${i[0]}</p><b>${escapeHtml(i[1])}</b></div>`).join("");
  document.getElementById("studyGrid").innerHTML = [
    ["Học phần", "Lập trình Front-end"], ["Nhóm", s.project.group], ["Giảng viên hướng dẫn", "ThS. Nguyễn Văn Minh"]
  ].map(i => `<div class="info-item"><p>${i[0]}</p><b>${escapeHtml(i[1])}</b></div>`).join("");

  // ----- Tab 2: Xem điểm (thống kê + biểu đồ cột + bảng) -----
  document.getElementById("gradeStats").innerHTML = statCards(s);
  document.getElementById("scoreChart").innerHTML = milestones.map(m => {
    const g = s.grades[m.id];
    const h = g ? Math.round(g.score / 10 * 160) : 0;
    let cls = "mid";
    if (g && g.score >= 8) cls = "high";
    else if (g && g.score < 6.5) cls = "low";
    return `<div class="chart-col">
      <span class="chart-value">${g ? g.score.toFixed(1) : "-"}</span>
      <div class="chart-bar ${g ? cls : "empty-bar"}" style="height:${h}px"></div>
      <span class="chart-label">Mốc ${m.id}</span>
    </div>`;
  }).join("");
  document.getElementById("gradeBody").innerHTML = milestones.map((m, i) => {
    const g = s.grades[m.id];
    return `<tr>
      <td>${i + 1}</td>
      <td>${m.name}</td>
      <td>${badge(getStatus(s, m))}</td>
      <td>${g ? scoreTag(g.score) : scoreTag(null)}</td>
      <td>${g ? escapeHtml(g.comment) : '<span class="small">Chưa có nhận xét</span>'}</td>
    </tr>`;
  }).join("") +
  `<tr class="total-row"><td colspan="3">Điểm trung bình</td><td>${avg === null ? scoreTag(null) : scoreTag(avg)}</td><td></td></tr>`;

  // ----- Tab 3: Chi tiết đồ án -----
  document.getElementById("projectInfo").innerHTML = `
    <div class="project-head">
      <div class="project-icon">${s.project.group.replace("Nhóm ", "N")}</div>
      <div>
        <h3 class="project-name">${escapeHtml(s.project.name)}</h3>
        <p class="small">${escapeHtml(s.project.desc)}</p>
        <div class="tags">${s.project.tech.map(t => `<span class="tag">${t}</span>`).join("")}</div>
      </div>
    </div>
    <dl class="info-list">
      <dt>Repository</dt><dd><a href="${escapeHtml(s.project.repo)}" target="_blank">${escapeHtml(s.project.repo)}</a></dd>
      <dt>Tiến độ</dt><dd>
        <div class="progress-head"><span>Đã nộp ${done}/${milestones.length} mốc</span><b>${percent}%</b></div>
        <div class="progress"><div style="width:${percent}%"></div></div>
      </dd>
    </dl>
    <p class="members-label">Thành viên nhóm</p>
    <div class="members">${s.project.members.map(name => {
      const leader = name.includes("(Trưởng nhóm)");
      const clean = name.replace(" (Trưởng nhóm)", "");
      return `<button type="button" class="member ${leader ? "leader" : ""}" data-name="${escapeHtml(clean)}" title="Xem hồ sơ ${escapeHtml(clean)}"><span class="avatar">${initials(clean)}</span>${escapeHtml(clean)}${leader ? ' <span class="leader-tag">Trưởng nhóm</span>' : ""}</button>`;
    }).join("")}</div>`;

  // đếm ngược đến mốc tiếp theo
  const next = getNextMilestone();
  document.getElementById("nextName").textContent = next
    ? next.name + " · hạn " + formatDate(next.deadline)
    : "Đã hết hạn tất cả các mốc báo cáo";
  if (next) startCountdown(next.deadline, "countdown");
  else document.getElementById("countdown").innerHTML = '<p class="countdown-over">Đã hết hạn tất cả các mốc</p>';

  // timeline (yêu cầu đề: thẻ lồng nhau + ::before/::after + badge + kiểm tra URL)
  document.getElementById("timeline").innerHTML = milestones.map(m => {
    const status = getStatus(s, m);
    const sub = getLatest(s, m.id);
    const g = s.grades[m.id];
    let detail = "<p>Chưa nộp bài cho mốc này.</p>";
    if (sub) {
      detail = `<p>Ngày nộp: <b><time datetime="${sub.date}">${formatDate(sub.date)}</time></b></p>
        <p>Link: <a href="${escapeHtml(sub.link)}" target="_blank">${escapeHtml(sub.link)}</a>
          ${isValidUrl(sub.link)
            ? '<span class="url-ok">✓ Link hợp lệ</span>'
            : '<span class="url-bad">✗ Link không hợp lệ</span>'}</p>`;
    }
    const comment = g ? `<div class="tl-comment"><b>Điểm ${g.score.toFixed(1)}</b> · ${escapeHtml(g.comment)}</div>` : "";
    return `<li class="tl-item ${status}">
      <article class="tl-box">
        <header class="tl-head"><h3>${m.name}</h3>${badge(status)}</header>
        <p>Hạn nộp: <b><time datetime="${m.deadline}">${formatDate(m.deadline)}</time></b></p>
        ${detail}${comment}
      </article>
    </li>`;
  }).join("");

  try {
    history.replaceState(null, "", "?id=" + id);
  } catch (e) {}
  renderList();
}

document.getElementById("searchInput").addEventListener("input", renderList);
document.getElementById("filterSelect").addEventListener("change", renderList);
document.getElementById("groupFilter").addEventListener("change", renderList);
document.getElementById("studentList").addEventListener("click", e => {
  const item = e.target.closest(".sv-item");
  if (item) showStudent(item.dataset.id);
});
document.getElementById("studentList").addEventListener("keydown", e => {
  const item = e.target.closest(".sv-item");
  if (item && (e.key === "Enter" || e.key === " ")) {
    e.preventDefault();
    showStudent(item.dataset.id);
  }
});

// hồ sơ các thành viên nhóm (không phải trưởng nhóm)
const MEMBER_PROFILES = {
  "Lê Thị Hoa": { mssv: "125000107", email: "hoa.lt@st.lhu.edu.vn", phone: "0961 111 201", task: "Thiết kế giao diện, CSS responsive" },
  "Trần Quốc Bảo": { mssv: "125000108", email: "bao.tq@st.lhu.edu.vn", phone: "0961 111 202", task: "JavaScript: đếm ngược, kiểm tra URL" },
  "Phạm Văn Đức": { mssv: "125000109", email: "duc.pv@st.lhu.edu.vn", phone: "0961 111 203", task: "Star Rating bằng CSS thuần" },
  "Võ Thị Mai": { mssv: "125000110", email: "mai.vt@st.lhu.edu.vn", phone: "0961 111 204", task: "Form gửi đánh giá, kiểm tra dữ liệu" },
  "Đặng Thu Trang": { mssv: "125000111", email: "trang.dt@st.lhu.edu.vn", phone: "0961 111 205", task: "Giỏ hàng, tính tổng tiền" },
  "Ngô Thanh Tùng": { mssv: "125000112", email: "tung.nt@st.lhu.edu.vn", phone: "0961 111 206", task: "Timeline ::before, ::after" },
  "Bùi Khánh Linh": { mssv: "125000113", email: "linh.bk@st.lhu.edu.vn", phone: "0961 111 207", task: "Badge trạng thái, bảng điểm" },
  "Hồ Minh Tuấn": { mssv: "125000114", email: "tuan.hm@st.lhu.edu.vn", phone: "0961 111 208", task: "Lưu dữ liệu localStorage" },
  "Lý Gia Bảo": { mssv: "125000115", email: "bao.lg@st.lhu.edu.vn", phone: "0961 111 209", task: "Ô tìm kiếm theo từ khóa" },
  "Trịnh Hồng Nhung": { mssv: "125000116", email: "nhung.th@st.lhu.edu.vn", phone: "0961 111 210", task: "Bộ lọc giá, danh mục" },
  "Châu Minh Phát": { mssv: "125000117", email: "phat.cm@st.lhu.edu.vn", phone: "0961 111 211", task: "Danh sách đánh giá, sắp xếp" },
  "Kiều Anh Thư": { mssv: "125000118", email: "thu.ka@st.lhu.edu.vn", phone: "0961 111 212", task: "Progress bar tỷ lệ đánh giá" }
};

// thẻ thông tin cho thành viên chưa có hồ sơ riêng
function openMemberCard(name) {
  const s = students.find(x => x.id === currentId);
  const leader = s.project.members.find(m => m.includes("(Trưởng nhóm)")).replace(" (Trưởng nhóm)", "");
  const avg = getAverage(s);
  const modal = document.getElementById("memberModal");
  const info = MEMBER_PROFILES[name] || { mssv: "Chưa cập nhật", email: "Chưa cập nhật", phone: "Chưa cập nhật", task: "Chưa phân công" };
  modal.querySelector(".modal-body").innerHTML = `
    <div class="modal-head">
      <div class="avatar big">${initials(name)}</div>
      <div><h3>${escapeHtml(name)}</h3><p class="small">Thành viên · ${escapeHtml(s.project.group)}</p></div>
    </div>
    <p class="modal-section">Thông tin cá nhân</p>
    <div class="modal-grid">
      <div class="info-item"><p>MSSV</p><b>${info.mssv}</b></div>
      <div class="info-item"><p>Lớp</p><b>${s.className}</b></div>
      <div class="info-item"><p>Ngành</p><b>${s.major}</b></div>
      <div class="info-item"><p>Số điện thoại</p><b>${info.phone}</b></div>
      <div class="info-item full"><p>Email</p><b>${info.email}</b></div>
    </div>
    <p class="modal-section">Trong nhóm</p>
    <dl class="info-list">
      <dt>Phụ trách</dt><dd>${escapeHtml(info.task)}</dd>
      <dt>Đồ án</dt><dd>${escapeHtml(s.project.name)}</dd>
      <dt>Trưởng nhóm</dt><dd>${escapeHtml(leader)}</dd>
      <dt>Điểm nhóm</dt><dd>${avg === null ? scoreTag(null) : scoreTag(avg)}</dd>
      <dt>Tiến độ</dt><dd>Đã nộp ${countSubmitted(s)}/${milestones.length} mốc</dd>
    </dl>
    <p class="modal-note">Điểm tính theo nhóm, trưởng nhóm là người nộp bài.</p>
    <button type="button" class="btn btn-primary btn-block" data-back="${s.id}">Xem hồ sơ trưởng nhóm</button>`;
  modal.hidden = false;
  modal.querySelector(".modal-close").focus();
}

function closeMemberCard() {
  document.getElementById("memberModal").hidden = true;
}

document.getElementById("memberModal").addEventListener("click", e => {
  if (e.target.id === "memberModal" || e.target.closest(".modal-close")) closeMemberCard();
  const back = e.target.closest("[data-back]");
  if (back) {
    closeMemberCard();
    document.querySelector('#detailTabs .tab[data-tab="tabProfile"]').click();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeMemberCard();
});

// bấm vào thành viên nhóm để chuyển sang hồ sơ người đó
document.getElementById("projectInfo").addEventListener("click", e => {
  const chip = e.target.closest(".member");
  if (!chip) return;
  const target = students.find(x => x.name === chip.dataset.name);
  if (!target) {
    openMemberCard(chip.dataset.name);
    return;
  }
  if (target.id === currentId) {
    showToast("Đang xem hồ sơ của " + target.name);
    return;
  }
  showStudent(target.id);
  document.querySelector('#detailTabs .tab[data-tab="tabProfile"]').click();
  window.scrollTo({ top: 0, behavior: "smooth" });
  showToast("Đã chuyển sang hồ sơ " + target.name);
});

initTabs(document.getElementById("detailTabs"));
fillGroupFilter();
updateFilterLabels();
const startId = new URLSearchParams(location.search).get("id");
renderList();
showStudent(students.some(s => s.id === startId) ? startId : students[0].id);

// ===== GIAO DIỆN SÁNG / TỐI =====
const ICON_SUN = `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>`;
const ICON_MOON = `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;

function setTheme(theme) {
  document.body.classList.toggle("dark", theme === "dark");
  document.querySelectorAll(".theme-btn").forEach(btn => {
    btn.innerHTML = theme === "dark" ? ICON_SUN : ICON_MOON;
    btn.title = theme === "dark" ? "Chuyển sang giao diện sáng" : "Chuyển sang giao diện tối";
    btn.setAttribute("aria-label", btn.title);
  });
  try {
    localStorage.setItem("pm_theme", theme);
  } catch (e) {}
}

function initTheme() {
  const navbar = document.getElementById("navbar");
  const places = [navbar.querySelector(".user-box"), navbar];
  places.forEach(place => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "theme-btn";
    if (place === navbar) navbar.insertBefore(btn, document.getElementById("hamburgerBtn"));
    else place.insertBefore(btn, place.firstChild);
    btn.addEventListener("click", () => {
      const next = document.body.classList.contains("dark") ? "light" : "dark";
      setTheme(next);
      showToast(next === "dark" ? "Đã bật giao diện tối" : "Đã bật giao diện sáng");
    });
  });
  let saved = "light";
  try {
    saved = localStorage.getItem("pm_theme") || "light";
  } catch (e) {}
  setTheme(saved);
}

initTheme();
