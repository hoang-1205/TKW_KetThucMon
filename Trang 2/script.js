// ===== 1. DỮ LIỆU MẪU =====
const SAMPLE_ACCOUNTS = [
  { id: "SV01", name: "Nguyễn Văn An", email: "an.nv@st.lhu.edu.vn", password: "123456", role: "student" },
  { id: "SV02", name: "Trần Thị Bích Ngọc", email: "ngoc.ttb@st.lhu.edu.vn", password: "123456", role: "student" },
  { id: "GV01", name: "ThS. Nguyễn Văn Minh", email: "minh.nv@lhu.edu.vn", password: "123456", role: "teacher" }
];

const SAMPLE_MILESTONES = [
  {
    "id": 1,
    "name": "Mốc 1 - Đăng ký đề tài",
    "deadline": "2026-11-10T23:59:00",
    "tasks": [
      "Ghi tên đề tài và tên thành viên.",
      "Nêu vấn đề muốn tìm hiểu.",
      "Trình bày kết quả dự kiến."
    ]
  },
  {
    "id": 2,
    "name": "Mốc 2 - Nộp đề cương",
    "deadline": "2026-11-24T23:59:00",
    "tasks": [
      "Nêu mục tiêu và phạm vi thực hiện.",
      "Mô tả cách thu thập thông tin.",
      "Lập kế hoạch và phân công công việc."
    ]
  },
  {
    "id": 3,
    "name": "Mốc 3 - Báo cáo tiến độ",
    "deadline": "2026-12-08T23:59:00",
    "tasks": [
      "Tóm tắt phần việc đã hoàn thành.",
      "Đính kèm kết quả bước đầu.",
      "Ghi khó khăn và kế hoạch tiếp theo."
    ]
  },
  {
    "id": 4,
    "name": "Mốc 4 - Nộp đồ án hoàn chỉnh",
    "deadline": "2026-12-22T23:59:00",
    "tasks": [
      "Nộp báo cáo hoàn chỉnh.",
      "Đính kèm sản phẩm và phụ lục nếu có.",
      "Kiểm tra tên nhóm và quyền xem tài liệu."
    ]
  }
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
    grades: { 1: { score: 8.5, comment: "Đề tài khảo sát có phạm vi rõ ràng. Trong đề cương, nhóm cần ghi cụ thể số sinh viên dự kiến tham gia." } }
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
    grades: { 1: { score: 7.0, comment: "Nhóm nộp trễ hai ngày. Cần bổ sung mục tiêu cụ thể của đề tài." } }
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
    grades: { 1: { score: 9.0, comment: "Mục tiêu rõ ràng, kế hoạch thực hiện phù hợp với thời gian của học kỳ." } }
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
    { page: "trang2", text: "Tiến độ nộp bài", href: "../Trang 2/index_trang2.html" },
    { page: "trang3", text: "Nộp đồ án", href: "../Trang3_Hieu/index.html" },
    { page: "trang4", text: "Điểm & nhận xét", href: "../Trang 4/index_trang4.html" }
  ],
  teacher: [
    { page: "trang1", text: "Trang chủ", href: "../Trang1_Truc/index.html" },
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
// Chỉ cập nhật tên và nhận xét của bộ dữ liệu minh họa phiên bản trước.
const originalNames = [
  "Báo cáo 1 - Phân tích đề & thiết kế UX",
  "Báo cáo 2 - Giao diện HTML5 & CSS3",
  "Báo cáo 3 - Xử lý JavaScript",
  "Báo cáo 4 - Hoàn thiện & bảo vệ đồ án"
];
const originalComments = {
  "Phân tích đề rõ ràng, wireframe timeline hợp lý.": "Đề tài khảo sát có phạm vi rõ ràng. Trong đề cương, nhóm cần ghi cụ thể số sinh viên dự kiến tham gia.",
  "Nộp trễ 2 ngày. Thiếu luồng gửi đánh giá.": "Nhóm nộp trễ hai ngày. Cần bổ sung mục tiêu cụ thể của đề tài.",
  "Phân tích đề đầy đủ, rõ luồng thanh toán.": "Mục tiêu rõ ràng, kế hoạch thực hiện phù hợp với thời gian của học kỳ."
};
let milestonesChanged = false;
for (const milestone of milestones) {
  const template = SAMPLE_MILESTONES.find(item => item.id === milestone.id);
  if (template && milestone.name === originalNames[template.id - 1]) {
    Object.assign(milestone, {name: template.name, tasks: [...template.tasks]});
    milestonesChanged = true;
  }
}
if (milestonesChanged) saveData("pm_milestones", milestones);

function documentLink(id, milestoneId) {
  const file = id === "SV01" ? "moc-" + milestoneId : id + "-moc-" + milestoneId;
  return new URL("../Trang 2/tai-lieu/" + file + ".txt", location.href).href;
}

// Giữ dữ liệu người dùng, chỉ đổi đúng bài mẫu cũ.
let studentsChanged = false;
for (const student of students) {
  const sample = SAMPLE_STUDENTS.find(item => item.id === student.id);
  for (const sub of student.submissions || []) {
    if (sample?.submissions.some(old => old.link === sub.link && old.date === sub.date && old.milestoneId === sub.milestoneId)) {
      sub.link = documentLink(student.id, sub.milestoneId);
      studentsChanged = true;
    }
  }
  for (const [id, grade] of Object.entries(student.grades || {})) {
    if (Object.hasOwn(originalComments, grade.comment)) {
      grade.comment = originalComments[grade.comment];
      studentsChanged = true;
    }
    const versions = student.submissions.filter(sub => String(sub.milestoneId) === id);
    if (!grade.submissionDate && versions.length === 1) {
      grade.submissionDate = versions[0].date;
      studentsChanged = true;
    }
  }
}
if (studentsChanged) saveData("pm_students", students);
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
  return Date.now() >= deadline.getTime() ? "late" : "pending";
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
  return score === null || score === undefined ? "--" : Number(score).toLocaleString("vi-VN", {maximumFractionDigits: 10});
}

function scoreTag(score) {
  if (score === null || score === undefined) return '<span class="score none">Chưa chấm</span>';
  let level = "low";
  if (score >= 8) level = "high";
  else if (score >= 6.5) level = "mid";
  return `<span class="score ${level}">${scoreText(score)}</span>`;
}

function getNextMilestone() {
  return milestones.filter(m => !getLatest(me, m.id) && new Date(m.deadline) > Date.now())
    .sort((a, b) => new Date(a.deadline) - new Date(b.deadline))[0] || null;
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
    const now = Date.now();
    updateMilestoneClocks(now);
    const remaining = secondsUntil(deadline, now);
    if (remaining === 0) {
      clearInterval(timers[elementId]);
      renderTimeline();
      renderFlipCards();
      renderSide();
      return;
    }
    const values = [
      Math.floor(remaining / 86400),
      Math.floor(remaining / 3600) % 24,
      Math.floor(remaining / 60) % 60,
      remaining % 60
    ];
    let html = "";
    for (let i = 0; i < values.length; i++) {
      html += `<div class="cd-box"><b>${String(values[i]).padStart(2, "0")}</b><span>${labels[i]}</span></div>`;
    }
    box.innerHTML = html;
  }

  timers[elementId] = setInterval(tick, 1000);
  tick();
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
    <div class="nav-actions">
    <button id="themeToggle" class="theme-toggle" type="button" aria-label="Chế độ tối" aria-pressed="false">
      <svg class="theme-moon" aria-hidden="true" viewBox="0 0 24 24"><path d="M20 14.5A8.6 8.6 0 0 1 9.5 4a8.6 8.6 0 1 0 10.5 10.5Z"/></svg>
      <svg class="theme-sun" aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.6"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M19 5l-1.5 1.5m-11 11L5 19"/></svg>
    </button>
    <div class="user-box">
      <span class="role-tag">${roleText}</span>
      <span>${escapeHtml(name)}</span>
      <a href="../Trang7_Truc/index.html" class="logout" data-logout>Đăng xuất</a>
    </div>
    <button class="hamburger" id="hamburgerBtn" type="button" aria-label="Mở menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button></div>`;

  const toggle = document.getElementById("themeToggle");
  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    toggle.setAttribute("aria-pressed", String(theme === "dark"));
    toggle.title = theme === "dark" ? "Chuyển sang giao diện sáng" : "Chuyển sang giao diện tối";
  }
  applyTheme(document.documentElement.dataset.theme);
  toggle.addEventListener("click", () => {
    const theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(theme);
    try { localStorage.setItem("pm_theme", theme); } catch {}
  });
  window.addEventListener("storage", event => {
    if (event.key === "pm_theme" && ["light", "dark"].includes(event.newValue)) applyTheme(event.newValue);
  });
  const menu = document.createElement("aside");
  menu.className = "mobile-menu";
  menu.id = "mobileMenu";
  menu.inert = true;
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
    menu.inert = !open;
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


}

// ===== 9. LẬT THẺ =====
function initFlipCards() {
  function flip(card) {
    const back = card.classList.toggle("flipped");
    card.setAttribute("aria-pressed", String(back));
    card.querySelector(".flip-front").setAttribute("aria-hidden", String(back));
    card.querySelector(".flip-back").setAttribute("aria-hidden", String(!back));
    card.setAttribute("aria-description", (back ? card.querySelector(".flip-back") : card.querySelector(".flip-front")).innerText);
  }
  document.addEventListener("click", e => {
    const card = e.target.closest(".flip-card");
    if (card && !e.target.closest("a")) flip(card);
  });
  document.addEventListener("keydown", e => {
    const card = e.target.closest ? e.target.closest(".flip-card") : null;
    if (card && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      if (!e.repeat) flip(card);
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

// Chỉ hiện các trang đồng đội khi chúng có mặt trong bản ghép.
async function groupPageExists(path) {
  if (location.protocol === "file:") return false;
  try {
    const result = await fetch(path);
    if (!result.ok) return false;
    const number = path.match(/Trang(\d+)_/)[1];
    return (await result.text()).includes('data-page="trang' + number + '"');
  } catch {
    return false;
  }
}
const groupPages = {};
for (const key of ["Trang1_Truc", "Trang3_Hieu", "Trang7_Truc"]) {
  groupPages[key] = groupPageExists("../" + key + "/index.html");
}
renderNavbar();
for (const [key, available] of Object.entries(groupPages)) {
  available.then(exists => {
    if (exists) return;
    for (const link of document.querySelectorAll('a[href^="../' + key + '/"]')) {
      if (link.classList.contains("logo")) link.href = "../Trang 2/index_trang2.html";
      else link.hidden = true;
    }
  });
}
window.addEventListener("pageshow", event => { if (event.persisted) location.reload(); });
window.addEventListener("storage", event => {
  if (["pm_students", "pm_milestones", "pm_user"].includes(event.key)) location.reload();
});
initLoader();
initFlipCards();
startNotifications();
initScrollReveal();

// ===== CODE RIÊNG CỦA TRANG =====

const user = getCurrentUser();
const me = students.find(s => s.id === user.id) || { submissions: [], grades: {} };

function renderTimeline() {
  const filter = document.getElementById("statusFilter").value;
  const list = milestones.filter(m => filter === "all" || getStatus(me, m) === filter);
  const box = document.getElementById("timeline");

  if (list.length === 0) {
    box.innerHTML = '<li class="empty">Không có mốc phù hợp</li>';
    return;
  }

  box.innerHTML = list.map(m => {
    const status = getStatus(me, m);
    const sub = getLatest(me, m.id);
    let detail = "<p>Chưa nộp bài cho mốc này.</p>";
    if (sub) {
      detail = `<p>Ngày nộp: <b><time datetime="${sub.date}">${formatDate(sub.date)}</time></b></p>
        <p>Bài đã gửi: ${submissionLink(sub)}</p>`;
    }
    return `<li class="tl-item ${status}">
      <article class="tl-box">
        <header class="tl-head">
          <h3>${m.name}</h3>
          ${badge(status)}
        </header>
        <p>Hạn nộp: <b><time datetime="${m.deadline}">${formatDate(m.deadline)}</time></b></p>
        ${sub ? "" : status === "late" ? '<p class="deadline-state">Đã quá hạn nộp bài</p>'
          : '<p class="deadline-state">Còn <time data-remaining="' + m.id + '"></time> để nộp</p>'}
        ${detail}
        <div class="tl-actions">
          <button type="button" class="btn btn-outline" data-submit="${m.id}">${sub ? "Nộp lại" : "Nộp bài"}</button>
        </div>
      </article>
    </li>`;
  }).join("");
  updateMilestoneClocks();
}

function secondsUntil(deadline, now) {
  return Math.max(0, Math.ceil((new Date(deadline) - now) / 1000));
}
function updateMilestoneClocks(now = Date.now()) {
  for (const clock of document.querySelectorAll("[data-remaining]")) {
    const milestone = milestones.find(item => String(item.id) === clock.dataset.remaining);
    const seconds = secondsUntil(milestone.deadline, now);
    const days = Math.floor(seconds / 86400);
    const time = [Math.floor(seconds / 3600) % 24, Math.floor(seconds / 60) % 60, seconds % 60]
      .map(value => String(value).padStart(2, "0")).join(":");
    clock.dateTime = "PT" + seconds + "S";
    clock.textContent = days + " ngày " + time;
  }
}

function renderSide() {
  const next = getNextMilestone();
  if (next) {
    document.getElementById("nextName").textContent = next.name;
    document.getElementById("nextDate").textContent = "Hạn nộp: " + formatDate(next.deadline);
    startCountdown(next.deadline, "countdown");
  } else {
    clearInterval(timers.countdown);
    document.getElementById("nextDate").textContent = "";
    document.getElementById("countdown").replaceChildren();
    document.getElementById("nextName").textContent = countSubmitted(me) === milestones.length
      ? "Bạn đã nộp đủ các mốc." : "Các mốc chưa nộp đều đã quá hạn.";
  }

  const done = countSubmitted(me);
  const percent = Math.round(done / (milestones.length || 1) * 100);
  document.getElementById("progressText").textContent = `Đã nộp ${done}/${milestones.length} mốc`;
  document.getElementById("progressPercent").textContent = percent + "%";
  document.getElementById("progressBar").style.width = percent + "%";
}

function renderFlipCards() {
  document.getElementById("taskCards").innerHTML = milestones.map(m => `
    <div class="flip-card" tabindex="0" role="button" aria-pressed="false" aria-label="Lật thẻ ${m.name}">
      <div class="flip-inner">
        <div class="flip-front">
          <span class="flip-label">MỐC ${m.id}</span>
          <h3>${m.name.split(" - ")[1]}</h3>
          <p class="small">Hạn: ${formatDate(m.deadline)}</p>
          ${badge(getStatus(me, m))}
          <span class="flip-hint">Bấm để xem yêu cầu ↻</span>
        </div>
        <div class="flip-back" aria-hidden="true">
          <span class="flip-label">YÊU CẦU NỘP</span>
          <ul>${m.tasks.map(t => `<li>${t}</li>`).join("")}</ul>
          <span class="flip-hint">Bấm để lật lại ↻</span>
        </div>
      </div>
    </div>`).join("");
}

document.getElementById("statusFilter").addEventListener("change", renderTimeline);
renderTimeline();
renderSide();
renderFlipCards();

function safeProtocol(value) {
  try { return new URL(value).protocol; } catch { return ""; }
}

function submissionLink(sub) {
  const isDemoDocument = sub.link === documentLink(user.id, sub.milestoneId);
  if (!isDemoDocument && !['https:', 'http:'].includes(safeProtocol(sub.link))) return 'Liên kết chưa hợp lệ';
  const a = document.createElement('a');
  a.href = sub.link;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  a.textContent = isDemoDocument ? 'Xem tài liệu minh họa' : 'Mở bài đã nộp';
  return a.outerHTML;
}

const dialog = document.querySelector('#submitDialog');
const field = document.querySelector('#workUrl');
let selectedMilestone;
document.querySelector('#timeline').addEventListener('click', async event => {
  const button = event.target.closest('[data-submit]');
  if (!button) return;
  selectedMilestone = milestones.find(item => item.id === Number(button.dataset.submit));
  if (await groupPages.Trang3_Hieu) {
    location.href = "../Trang3_Hieu/index.html?moc=" + encodeURIComponent(selectedMilestone.id);
    return;
  }
  document.querySelector('#submitTitle').textContent = selectedMilestone.name;
  field.value = '';
  field.setCustomValidity('');
  dialog.showModal();
  field.focus();
});
document.querySelector('#cancelWork').onclick = () => dialog.close();
field.oninput = () => field.setCustomValidity('');
document.querySelector('#sendWork').onsubmit = event => {
  event.preventDefault();
  const link = field.value.trim();
  if (!['http:', 'https:'].includes(safeProtocol(link))) {
    field.setCustomValidity('Hãy dùng liên kết bắt đầu bằng https:// hoặc http://.');
    field.reportValidity();
    return;
  }
  try {
    const records = JSON.parse(localStorage.getItem('pm_students')) || students;
    const record = records.find(item => item.id === user.id);
    if (!record) throw new Error('missing student');
    record.submissions.push({milestoneId:selectedMilestone.id, link, date:new Date().toISOString(), note:''});
    localStorage.setItem('pm_students', JSON.stringify(records));
    me.submissions = record.submissions;
  } catch {
    showToast('Chưa lưu được bài. Hãy kiểm tra tài khoản và thử lại.', 'error');
    return;
  }
  dialog.close();
  renderTimeline();
  renderSide();
  renderFlipCards();
  showToast('Đã ghi nhận bài nộp.');
};
