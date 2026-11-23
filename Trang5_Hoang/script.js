"use strict";

const SAMPLE_MILESTONES = [
  { id: 1, name: "Báo cáo 1 - Phân tích đề & thiết kế UX", deadline: "2026-11-10T23:59:00+07:00" },
  { id: 2, name: "Báo cáo 2 - Giao diện HTML5 & CSS3", deadline: "2026-11-24T23:59:00+07:00" },
  { id: 3, name: "Báo cáo 3 - Xử lý JavaScript", deadline: "2026-12-08T23:59:00+07:00" },
  { id: 4, name: "Báo cáo 4 - Hoàn thiện & bảo vệ đồ án", deadline: "2026-12-22T23:59:00+07:00" }
];

const SAMPLE_STUDENTS = [
  {
    id: "SV01", name: "Nguyễn Văn An", mssv: "125000101",
    project: { name: "Quản lý đồ án & tiến độ báo cáo", group: "Nhóm 1" },
    submissions: [
      { milestoneId: 1, date: "2026-11-08T20:15:00+07:00", link: "https://github.com/nhom1/project-milestone/tree/bc1", note: "" },
      { milestoneId: 2, date: "2026-11-22T21:30:00+07:00", link: "https://github.com/nhom1/project-milestone/tree/bc2", note: "Em đã cập nhật giao diện các mốc báo cáo và bố cục trên điện thoại." }
    ],
    grades: { 1: { score: 8.5, comment: "Phân tích đề rõ ràng, bố cục các mốc báo cáo hợp lý." } }
  },
  {
    id: "SV02", name: "Trần Thị Bích Ngọc", mssv: "125000102",
    project: { name: "Đánh giá & phản hồi khách hàng", group: "Nhóm 2" },
    submissions: [
      { milestoneId: 1, date: "2026-11-12T09:00:00+07:00", link: "https://github.com/nhom2/review-system/tree/bc1", note: "Em gửi bản phân tích và sơ đồ chức năng." },
      { milestoneId: 2, date: "2026-11-20T18:00:00+07:00", link: "https://github.com/nhom2/review-system/tree/bc2", note: "Em đã bổ sung màn hình chỉnh sửa đánh giá." }
    ],
    grades: {
      1: { score: 7, comment: "Cần bổ sung các bước gửi và chỉnh sửa đánh giá." },
      2: { score: 9, comment: "Giao diện gửi và chỉnh sửa đánh giá rõ ràng, dễ thao tác." }
    }
  },
  {
    id: "SV03", name: "Lê Minh Khang", mssv: "125000103",
    project: { name: "Giỏ hàng & thanh toán", group: "Nhóm 3" },
    submissions: [],
    grades: {}
  },
  {
    id: "SV04", name: "Phạm Gia Huy", mssv: "125000104",
    project: { name: "Theo dõi tiến độ đồ án", group: "Nhóm 4" },
    submissions: [
      { milestoneId: 1, date: "2026-11-05T14:20:00+07:00", link: "github.com/nhom4/project-milestone/tree/bc1", note: "" },
      { milestoneId: 2, date: "2026-11-21T16:40:00+07:00", link: "https://github.com/nhom4/project-milestone/tree/bc2", note: "Em đã sửa đường dẫn và hoàn thiện giao diện theo dõi tiến độ." }
    ],
    grades: {
      1: { score: 6, comment: "Cần bổ sung giao thức cho đường dẫn đến bài nộp." },
      2: { score: 8, comment: "Các màn hình theo dõi tiến độ đáp ứng yêu cầu của mốc này." }
    }
  },
  {
    id: "SV05", name: "Võ Thanh Tâm", mssv: "125000105",
    project: { name: "Tìm kiếm & lọc sản phẩm", group: "Nhóm 5" },
    submissions: [
      { milestoneId: 1, date: "2026-11-12T08:45:00+07:00", link: "https://github.com/nhom5/tim-kiem-loc/tree/bc1", note: "Em nộp muộn bản phân tích và sơ đồ luồng tìm kiếm." }
    ],
    grades: {}
  },
  {
    id: "SV06", name: "Đỗ Ngọc Hân", mssv: "125000106",
    project: { name: "Đánh giá & phản hồi khách hàng", group: "Nhóm 6" },
    submissions: [],
    grades: {}
  }
];

const STUDENTS_KEY = "pm_students";
const MILESTONES_KEY = "pm_milestones";
const byId = (id) => document.getElementById(id);
const list = byId("submissionList");
const form = byId("gradeForm");
const scoreInput = byId("scoreInput");
const commentInput = byId("commentInput");
const smallScreen = window.matchMedia("(width < 1100px)");
const viDate = new Intl.DateTimeFormat("vi-VN", { timeZone: "Asia/Ho_Chi_Minh", day: "2-digit", month: "2-digit", year: "numeric" });
const viTime = new Intl.DateTimeFormat("vi-VN", { timeZone: "Asia/Ho_Chi_Minh", hour: "2-digit", minute: "2-digit", hourCycle: "h23" });
const viScore = new Intl.NumberFormat("vi-VN", { maximumFractionDigits: 2 });

let rows = [];
let overdueStudents = [];
let selectedKey = null;
let selectedAttempt = null;
let filter = "all";
let dirty = false;
let saving = false;
let toastTimer;

// Chỉ trường hợp getItem() trả về null mới được khởi tạo dữ liệu mẫu.
class DataIssue extends Error {}

function readArray(key, label, seed) {
  const raw = localStorage.getItem(key);
  if (raw === null) {
    if (seed === undefined) throw new DataIssue("Dữ liệu " + label + " đã thay đổi. Hãy tải lại trang.");
    localStorage.setItem(key, JSON.stringify(seed));
    return seed;
  }
  let value;
  try { value = JSON.parse(raw); }
  catch { throw new DataIssue("Dữ liệu " + label + " đã lưu bị lỗi định dạng. Hãy kiểm tra lại dữ liệu."); }
  if (!Array.isArray(value)) throw new DataIssue("Dữ liệu " + label + " phải là một danh sách.");
  return value;
}

function readData(seedMissing = false) {
  return {
    students: readArray(STUDENTS_KEY, "sinh viên", seedMissing ? SAMPLE_STUDENTS : undefined),
    milestones: readArray(MILESTONES_KEY, "mốc báo cáo", seedMissing ? SAMPLE_MILESTONES : undefined)
  };
}

function timestamp(value, deadline = false) {
  if (typeof value !== "string" || !value.trim()) return null;
  let iso = value.trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(iso)) iso += deadline ? "T23:59:59.999" : "T00:00:00";
  // Dữ liệu cũ của dự án dùng giờ Việt Nam, chưa kèm múi giờ.
  if (/^\d{4}-\d{2}-\d{2}[ T]\d{2}:\d{2}(:\d{2}(\.\d+)?)?$/.test(iso)) iso = iso.replace(" ", "T") + "+07:00";
  const time = Date.parse(iso);
  return Number.isFinite(time) ? time : null;
}

function formatTime(time) {
  return time === null ? "Chưa có thông tin" : viDate.format(time) + " · " + viTime.format(time);
}

function buildRows({ students, milestones }) {
  const milestonesById = new Map(milestones.filter(m => m?.id != null).map(m => [String(m.id), m]));
  const result = [];
  students.forEach((student, index) => {
    if (!student || (student.id ?? student.mssv) == null || !Array.isArray(student.submissions)) return;
    const latest = new Map();
    for (const submission of student.submissions) {
      if (submission?.milestoneId == null) continue;
      const id = String(submission.milestoneId);
      const milestone = milestonesById.get(id);
      if (!milestone) continue;
      const time = timestamp(submission.date);
      const previous = latest.get(id);
      if (previous && (previous.time ?? -Infinity) > (time ?? -Infinity)) continue;
      const grade = student.grades?.[id];
      const graded = grade?.score != null && String(grade.score).trim() !== "" && Number.isFinite(Number(grade.score));
      latest.set(id, {
        key: JSON.stringify([String(student.id ?? student.mssv), id]),
        student, milestone, submission, time, tone: index % 6, grade: graded ? grade : null
      });
    }
    result.push(...latest.values());
  });
  return result.sort((a, b) => Number(!!a.grade) - Number(!!b.grade)
    || (b.time ?? -Infinity) - (a.time ?? -Infinity) || a.key.localeCompare(b.key, "vi"));
}

function normalized(value) {
  return String(value ?? "").toLocaleLowerCase("vi").normalize("NFD").replace(/\p{M}/gu, "").replace(/đ/g, "d").trim().replace(/\s+/g, " ");
}

function matchesStudent(student, query) {
  return normalized(student.name).includes(query) || normalized(student.mssv).includes(query);
}

function updateLists(data) {
  rows = buildRows(data);
  const now = Date.now();
  const expired = data.milestones
    .filter(m => m?.id != null)
    .map(m => ({ id: String(m.id), name: m.name || String(m.id), due: timestamp(m.deadline, true) }))
    .filter(m => m.due !== null && m.due < now)
    .sort((a, b) => a.due - b.due);
  overdueStudents = [];
  data.students.forEach((student, index) => {
    if (!student || (student.id ?? student.mssv) == null) return;
    const attempts = Array.isArray(student.submissions) ? student.submissions : [];
    const submitted = new Set(attempts.map(attempt => String(attempt?.milestoneId)));
    const missing = expired.filter(m => !submitted.has(m.id));
    if (missing.length) overdueStudents.push({ student, tone: index % 6, missing });
  });
  renderQueue();
}

function renderOverdue(query) {
  const visible = overdueStudents.filter(row => matchesStudent(row.student, query));
  const listItems = document.createDocumentFragment();
  for (const row of visible) {
    const item = byId("overdueTemplate").content.firstElementChild.cloneNode(true);
    setAvatar(item.querySelector(".avatar"), row);
    item.querySelector("strong").textContent = row.student.name || "Sinh viên chưa có tên";
    item.querySelector(".overdue-meta").textContent = "MSSV " + (row.student.mssv ?? "chưa có");
    for (const milestone of row.missing) {
      const line = document.createElement("li");
      const due = document.createElement("span");
      due.textContent = "Hạn nộp " + formatTime(milestone.due);
      line.append(document.createTextNode(milestone.name), due);
      item.querySelector("ul").append(line);
    }
    listItems.append(item);
  }
  byId("overdueList").replaceChildren(listItems);
  byId("overdueCount").textContent = visible.length + " sinh viên";
  byId("overdueJump").hidden = !visible.length;
  byId("overdueJumpCount").textContent = visible.length;
  byId("overdueEmpty").hidden = visible.length > 0;
  byId("overdueEmpty").textContent = query ? "Không tìm thấy sinh viên quá hạn khớp với từ khóa." : "Hiện không có sinh viên nào quá hạn mà chưa nộp bài.";
}

function icon(id) {
  const ns = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(ns, "svg");
  svg.setAttribute("class", "icon");
  svg.setAttribute("aria-hidden", "true");
  const use = document.createElementNS(ns, "use");
  use.setAttribute("href", "#i-" + id);
  svg.append(use);
  return svg;
}

const statuses = {
  wait: ["clock", "Chờ chấm"], done: ["check", "Đã chấm"],
  ontime: ["check", "Đã nộp"], late: ["clock", "Trễ hạn"],
  unknown: ["info", "Chưa rõ hạn nộp"], invalid: ["alert", "Link không hợp lệ"]
};

function setBadge(node, status) {
  const [symbol, label] = statuses[status];
  node.classList.remove("wait", "done", "ontime", "late", "unknown");
  node.classList.add("badge", status === "invalid" ? "late" : status);
  node.replaceChildren(icon(symbol), document.createTextNode(label));
}

function setAvatar(node, row) {
  const parts = String(row.student.name || "Sinh viên").trim().split(/\s+/);
  node.textContent = (parts[0].charAt(0) + (parts.length > 1 ? parts.at(-1).charAt(0) : "")).toLocaleUpperCase("vi");
  node.dataset.tone = row.tone;
}

function renderQueue() {
  const done = rows.filter(row => row.grade).length;
  const all = rows.length;
  const percent = all ? Math.round(done * 100 / all) : 0;
  byId("countAll").textContent = all;
  byId("countWait").textContent = all - done;
  byId("countDone").textContent = done;
  byId("progressRing").style.setProperty("--progress", percent + "%");
  byId("progressPercent").textContent = percent + "%";
  byId("progressText").textContent = done + "/" + all + " bài đã chấm";

  const query = normalized(byId("searchInput").value);
  renderOverdue(query);
  const visible = rows.filter(({ student, grade }) => {
    return matchesStudent(student, query) && (filter === "all" || (filter === "done") === Boolean(grade));
  });
  if (selectedKey !== null && !visible.some(row => row.key === selectedKey)) openRow(null);
  const items = document.createDocumentFragment();
  for (const row of visible) {
    const item = byId("rowTemplate").content.firstElementChild.cloneNode(true);
    const button = item.querySelector("button");
    button.dataset.key = row.key;
    button.setAttribute("aria-pressed", String(row.key === selectedKey));
    setAvatar(item.querySelector(".row-avatar"), row);
    item.querySelector(".row-name").textContent = row.student.name || "Sinh viên chưa có tên";
    const milestone = String(row.milestone.name || row.milestone.id).split(/\s+[-–—]\s+/)[0];
    item.querySelector(".row-meta").textContent = (row.student.mssv ?? "Chưa có MSSV") + " · " + milestone;
    setBadge(item.querySelector(".row-status"), row.grade ? "done" : "wait");
    if (row.grade) item.querySelector(".row-score").textContent = viScore.format(row.grade.score) + "/10";
    items.append(item);
  }
  list.replaceChildren(items);
  list.hidden = visible.length === 0;
  byId("listEmpty").hidden = visible.length > 0;
}

function httpUrl(raw) {
  const text = raw.trim();
  if (!/^https?:\/\/[^/?#\\\s]/i.test(text) || /[\s\\\u0000-\u001f\u007f]/u.test(text)) return null;
  try {
    const url = new URL(text);
    const host = url.hostname.replace(/\.$/, "");
    if (host.startsWith("[")) return url; // URL đã kiểm tra cú pháp địa chỉ IPv6.
    const validLabel = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/i;
    return host.length <= 253 && host.split(".").every(label => validLabel.test(label)) ? url : null;
  } catch { return null; }
}

function showLink(raw, studentId, milestoneId) {
  const box = byId("submissionLink");
  const text = String(raw ?? "");
  const samplePage = new URL("../Trang 2/index_trang2.html", location.href);
  const prefix = studentId === "SV01" ? "" : studentId + "-";
  samplePage.searchParams.set("mau", prefix + "moc-" + milestoneId);
  const isSample = text === samplePage.href;
  const url = isSample ? samplePage : httpUrl(text);
  box.replaceChildren();
  if (url) {
    const link = document.createElement("a");
    link.href = url.href;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = isSample ? "Xem tài liệu minh họa" : text;
    box.append(link);
  } else {
    const original = document.createElement("p");
    original.textContent = text || "Chưa có đường dẫn";
    const badge = document.createElement("span");
    setBadge(badge, "invalid");
    box.append(original, badge);
  }
}

function showDetails(row) {
  const { student, milestone, submission, time, grade } = row;
  setAvatar(byId("detailAvatar"), row);
  byId("studentName").textContent = student.name || "Sinh viên chưa có tên";
  byId("studentCode").textContent = student.mssv ?? "Chưa có";
  byId("studentGroup").textContent = student.project?.group || "Chưa có";
  byId("projectName").textContent = student.project?.name || "Chưa có";
  byId("milestoneName").textContent = milestone.name || milestone.id;
  byId("submittedAt").textContent = formatTime(time);
  if (time !== null) byId("submittedAt").dateTime = new Date(time).toISOString();
  else byId("submittedAt").removeAttribute("datetime");
  const due = timestamp(milestone.deadline, true);
  byId("deadline").textContent = formatTime(due);
  const delivery = time === null || due === null ? "unknown" : time > due ? "late" : "ontime";
  setBadge(byId("deliveryBadge"), delivery);
  setBadge(byId("gradeBadge"), grade ? "done" : "wait");
  showLink(submission.link, student.id, milestone.id);
  byId("submissionNote").textContent = String(submission.note ?? "").trim() || "Không có";
}

function attemptVersion(row) {
  const { date, link, note } = row.submission;
  return JSON.stringify([date, link, note]);
}

function commentLength() {
  return Array.from(commentInput.value.trim().normalize("NFC")).length;
}

function updateCounter() {
  byId("commentCounter").textContent = commentLength() + "/500";
}

function setMessage(id, message) {
  const box = byId(id);
  box.textContent = message;
  box.hidden = !message;
}

function openRow(row) {
  const returnToSearch = !row && form.contains(document.activeElement);
  selectedKey = row?.key ?? null;
  selectedAttempt = row ? attemptVersion(row) : null;
  dirty = false;
  for (const button of list.querySelectorAll("button")) {
    button.setAttribute("aria-pressed", String(button.dataset.key === selectedKey));
  }
  byId("infoEmpty").hidden = !!row;
  byId("gradeEmpty").hidden = !!row;
  byId("submissionInfo").hidden = !row;
  byId("gradeBadge").hidden = !row;
  form.hidden = !row;
  scoreInput.value = row?.grade ? String(row.grade.score) : "";
  commentInput.value = row?.grade?.comment ?? "";
  for (const input of [scoreInput, commentInput]) {
    input.removeAttribute("aria-invalid");
    byId(input.name + "Error").textContent = "";
  }
  setMessage("saveError", "");
  updateCounter();
  if (row) showDetails(row);
  if (returnToSearch) byId("searchInput").focus({ preventScroll: true });
}

function scoreProblem(raw) {
  const value = raw.trim().replace(",", ".");
  if (!value) return "Vui lòng nhập điểm tổng.";
  if (!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)$/.test(value)) return "Vui lòng nhập một số từ 0 đến 10.";
  const score = Number(value);
  if (!Number.isFinite(score) || score < 0 || score > 10) return "Điểm phải nằm trong khoảng từ 0 đến 10.";
  const fraction = (value.split(".")[1] || "").replace(/0+$/, "");
  if (!["", "25", "5", "75"].includes(fraction)) return "Điểm phải theo bước 0,25, ví dụ 7,25 hoặc 7,5.";
  return "";
}

function validateField(input) {
  let message = "";
  if (input === scoreInput) message = scoreProblem(input.value);
  else if (commentLength() < 10 || commentLength() > 500) message = "Nhận xét cần từ 10 đến 500 ký tự sau khi bỏ khoảng trắng ở hai đầu.";
  input.setAttribute("aria-invalid", String(Boolean(message)));
  byId(input.name + "Error").textContent = message;
  return !message;
}

function announce(message) {
  const toast = byId("toast");
  clearTimeout(toastTimer);
  toast.replaceChildren(icon("check"), document.createTextNode(message));
  toastTimer = setTimeout(() => toast.replaceChildren(), 4800);
}

// Một lượt đọc–sửa–ghi đồng bộ, chỉ thay kết quả ở đúng sinh viên và mốc.
function commitGrade(key, version, grade) {
  const data = readData();
  const fresh = buildRows(data).find(row => row.key === key);
  if (!fresh) throw new DataIssue("Bài nộp đã thay đổi. Hãy chọn lại bài trong danh sách.");
  if (attemptVersion(fresh) !== version) throw new DataIssue("Có lượt nộp mới cho bài này. Bấm Hủy để xem lại trước khi chấm.");
  const previous = fresh.student.grades;
  if (previous != null && (typeof previous !== "object" || Array.isArray(previous))) {
    throw new DataIssue("Dữ liệu điểm của sinh viên bị lỗi định dạng. Hãy kiểm tra lại trước khi lưu.");
  }
  fresh.student.grades = { ...previous, [fresh.milestone.id]: grade };
  localStorage.setItem(STUDENTS_KEY, JSON.stringify(data.students));
  return { data, name: fresh.student.name || "sinh viên" };
}

async function storeGrade(key, version, grade) {
  let enteredLock = false;
  try {
    if (navigator.locks?.request) {
      return await navigator.locks.request("deadlinehub-pm_students", () => {
        enteredLock = true;
        return commitGrade(key, version, grade);
      });
    }
  } catch (error) {
    // Một số trình duyệt cho file HTML lưu dữ liệu nhưng giới hạn Web Locks.
    if (enteredLock || !["SecurityError", "NotSupportedError"].includes(error.name)) throw error;
  }
  return commitGrade(key, version, grade);
}

async function saveGrade(event) {
  event.preventDefault();
  if (selectedKey === null || saving) return;
  const scoreOK = validateField(scoreInput);
  const commentOK = validateField(commentInput);
  if (!scoreOK || !commentOK) {
    (scoreOK ? commentInput : scoreInput).focus();
    return;
  }
  const key = selectedKey;
  const version = selectedAttempt;
  const grade = { score: Number(scoreInput.value.trim().replace(",", ".")), comment: commentInput.value.trim() };
  saving = true;
  byId("saveBtn").disabled = true;
  scoreInput.readOnly = commentInput.readOnly = true;
  try {
    const result = await storeGrade(key, version, grade);
    updateLists(result.data);
    if (selectedKey === key) openRow(rows.find(row => row.key === key));
    setMessage("dataError", "");
    announce("Đã lưu điểm cho " + result.name + ".");
  } catch (error) {
    const message = error instanceof DataIssue ? error.message : "Chưa lưu được điểm. Hãy kiểm tra quyền lưu trữ hoặc dung lượng của trình duyệt rồi thử lại.";
    setMessage(selectedKey === key ? "saveError" : "dataError", message);
  } finally {
    saving = false;
    byId("saveBtn").disabled = false;
    scoreInput.readOnly = commentInput.readOnly = false;
  }
}

function refreshData({ initial = false, discard = false } = {}) {
  try {
    updateLists(readData(initial));
    const row = rows.find(item => item.key === selectedKey);
    if (initial) openRow(rows[0]);
    else if (row) {
      if (discard || !dirty) openRow(row);
      else {
        showDetails(row);
        if (attemptVersion(row) !== selectedAttempt) setMessage("saveError", "Có lượt nộp mới. Bấm Hủy để xem lại bài trước khi chấm.");
      }
    }
    setMessage("dataError", "");
    return true;
  } catch (error) {
    setMessage("dataError", error instanceof DataIssue ? error.message : "Không thể truy cập dữ liệu. Hãy cho phép trình duyệt lưu dữ liệu rồi tải lại trang.");
    if (initial) { renderQueue(); openRow(null); }
    return false;
  }
}

list.addEventListener("click", event => {
  const button = event.target.closest("button[data-key]");
  if (!button) return;
  const row = rows.find(item => item.key === button.dataset.key);
  if (!row) return;
  if (row.key !== selectedKey) openRow(row);
  if (smallScreen.matches) {
    byId("thong-tin").focus({ preventScroll: true });
    byId("thong-tin").scrollIntoView({ block: "start" });
  }
});
byId("searchInput").addEventListener("input", renderQueue);
document.querySelector(".filters").addEventListener("click", event => {
  const target = event.target.closest("button[data-filter]");
  if (!target) return;
  filter = target.dataset.filter;
  document.querySelectorAll("[data-filter]").forEach(button => button.setAttribute("aria-pressed", String(button === target)));
  renderQueue();
});
for (const input of [scoreInput, commentInput]) {
  input.addEventListener("input", () => {
    dirty = true;
    if (input === commentInput) updateCounter();
    validateField(input);
  });
  input.addEventListener("blur", () => { if (dirty) validateField(input); });
}
form.addEventListener("submit", saveGrade);
byId("cancelBtn").addEventListener("click", () => {
  if (refreshData({ discard: true }) && selectedKey !== null) announce("Đã khôi phục phiếu chấm.");
});
window.addEventListener("storage", event => {
  if (event.key === null || event.key === STUDENTS_KEY || event.key === MILESTONES_KEY) refreshData();
});

const drawer = byId("mobileMenu");
const menuButton = byId("openMenu");
const themeButtons = document.querySelectorAll("[data-theme-toggle]");
const themeKey = "pm_theme";

function applyTheme(value) {
  const dark = value === "dark";
  document.documentElement.dataset.theme = dark ? "dark" : "light";
  document.querySelector('meta[name="theme-color"]').setAttribute("content", dark ? "#0D1538" : "#00008B");
  for (const button of themeButtons) {
    button.setAttribute("aria-pressed", String(dark));
    button.title = dark ? "Chuyển sang giao diện sáng" : "Chuyển sang giao diện tối";
  }
}

for (const button of themeButtons) {
  button.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(next);
    try { localStorage.setItem(themeKey, next); }
    catch { announce("Đã đổi giao diện cho lần mở này. Trình duyệt chưa cho lưu lựa chọn."); }
  });
}
applyTheme(document.documentElement.dataset.theme);

menuButton.addEventListener("click", () => { drawer.showModal(); menuButton.setAttribute("aria-expanded", "true"); });
byId("closeMenu").addEventListener("click", () => drawer.close());
drawer.addEventListener("close", () => menuButton.setAttribute("aria-expanded", "false"));
drawer.addEventListener("click", event => {
  if (event.target.closest("a") || (event.target === drawer && event.clientX >= drawer.getBoundingClientRect().right)) drawer.close();
});
smallScreen.addEventListener("change", () => { if (!smallScreen.matches && drawer.open) drawer.close(); });
function currentAccount() {
  try { return JSON.parse(localStorage.getItem("pm_user")); }
  catch { return null; }
}

function showTeacherName() {
  const user = currentAccount();
  const name = user?.role === "teacher" && typeof user.name === "string" && user.name.trim()
    ? user.name.trim() : "ThS. Nguyễn Văn Minh";
  document.querySelectorAll("[data-teacher-name]").forEach(label => { label.textContent = name; });
}

function isStandaloneDemo() {
  return document.querySelector("body").dataset.mode === "standalone" && !currentAccount()?.role;
}

function showProjectDestination(title, path, message) {
  if (drawer.open) drawer.close();
  byId("projectNoticeTitle").textContent = title;
  byId("projectNoticeText").textContent = message;
  byId("projectPath").textContent = path;
  byId("projectLink").href = path;
  byId("projectNotice").showModal();
}

document.querySelectorAll("[data-destination]").forEach(link => {
  link.addEventListener("click", event => {
    if (!isStandaloneDemo()) return;
    event.preventDefault();
    showProjectDestination(link.dataset.destination, link.getAttribute("href"),
      "Đây là Trang 5 độc lập. Bạn có thể mở mục này khi thư mục tương ứng nằm cạnh thư mục Trang5_Hoang.");
  });
});
document.querySelectorAll("[data-logout]").forEach(button => {
  button.addEventListener("click", () => {
    const loginPage = "../Trang7_Truc/index_trang7.html";
    if (isStandaloneDemo()) {
      showProjectDestination("Đăng xuất", loginPage, "Bạn đang dùng tài khoản mẫu. Trang đăng nhập nằm trong bộ DeadLine Hub đầy đủ.");
      return;
    }
    try { localStorage.removeItem("pm_user"); }
    catch {
      if (drawer.open) drawer.close();
      setMessage("dataError", "Chưa thể đăng xuất. Hãy kiểm tra quyền lưu trữ của trình duyệt rồi thử lại.");
      byId("dataError").scrollIntoView({ block: "center" });
      return;
    }
    location.assign(loginPage);
  });
});
window.addEventListener("storage", event => {
  if (event.key === "pm_user" || event.key === null) showTeacherName();
  if (event.key === themeKey || event.key === null) applyTheme(event.newValue);
});
window.addEventListener("pageshow", showTeacherName);
showTeacherName();
refreshData({ initial: true });
