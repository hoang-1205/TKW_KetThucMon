# PROMPT TRANG 3 — NỘP ĐỒ ÁN (`Trang3_Hieu/`)

> Tài liệu đặc tả & câu lệnh tạo **Trang 3 (Nộp đồ án)** thuộc hệ thống **DeadLine Hub** (Đề 2.1.4 — Phân hệ Quản lý Đồ án & Tiến độ Báo cáo). Dán toàn bộ nội dung file này vào AI (Antigravity, ChatGPT, Claude, Gemini...) để tạo hoặc cập nhật hoàn chỉnh thư mục `Trang3_Hieu/`.

---

## MỤC 1 — LỆNH CHO AI & CẤU TRÚC THƯ MỤC

Bạn là lập trình viên Front-end. Hãy xây dựng **duy nhất** thư mục `Trang3_Hieu/` cho website tĩnh **DeadLine Hub** bằng **HTML5, CSS3, JavaScript thuần** (không dùng framework, chỉ dùng Google Fonts `Be Vietnam Pro`).

1. **Cấu trúc bắt buộc** (chỉ gồm 3 file, không tạo thêm trang khác hay file `README.md`):
   - `Trang3_Hieu/index.html`
   - `Trang3_Hieu/style.css` (gồm CSS dùng chung của hệ thống + CSS riêng của Trang 3)
   - `Trang3_Hieu/script.js` (gồm JS dùng chung của hệ thống + JS riêng của Trang 3)
2. **Tuân thủ đề bài 2.1.4 & Luồng hệ thống:**
   - Thuộc luồng **Sinh viên**: Trang 1 (Trang chủ) $\rightarrow$ Trang 2 (Timeline) $\rightarrow$ **Trang 3 (Nộp đồ án)** $\rightarrow$ Trang 4 (Điểm & nhận xét).
   - Đáp ứng yêu cầu kỹ thuật: Form nộp link đồ án, kiểm tra định dạng URL hợp lệ (`http://` hoặc `https://`), đồng hồ đếm ngược (Countdown) đến hạn báo cáo, badge trạng thái (`Đã nộp`, `Chưa nộp`, `Trễ hạn`), lưu trữ và đồng bộ dữ liệu qua `localStorage`.
   - Kiểm thử không có lỗi đỏ trên Console (F12), hiển thị chuẩn Responsive trên Desktop, Tablet và Mobile (menu hamburger trượt từ trái).

---

## MỤC 2 — DESIGN SYSTEM, CHẾ ĐỘ SÁNG/TỐI & HIỆU ỨNG HEADER

### 1. Bảng biến màu Sáng (`:root`) & Tối (`[data-theme="dark"]`)
Hỗ trợ chuyển đổi Sáng/Tối mượt mà và lưu trạng thái vào `localStorage` với key `"pm_theme"` (`"light"` hoặc `"dark"`):

| Thành phần | Biến CSS | Chế độ Sáng (`:root`) | Chế độ Tối (`[data-theme="dark"]`) |
|---|---|---|---|
| Nền trang | `--bg` | `#F3F5FB` | `#0B1020` |
| Nền Card / Surface | `--card` | `#FFFFFF` | `#141D33` |
| Nền Navbar | `--nav-bg` | `#00008B` | `#0D1538` |
| Màu thương hiệu chính | `--primary` | `#00008B` | `#00008B` |
| Nền nhấn phụ (icon, hover) | `--primary-light` | `#E8E8FA` | `#1E2B4D` |
| Chữ chính | `--text` | `#1F2937` | `#F1F5F9` |
| Chữ phụ | `--text-sub` | `#6B7280` | `#A8B4C7` |
| Màu nhấn chữ / tiêu đề | `--accent-text` | `#00008B` | `#60A5FA` |
| Viền (Border) | `--border` | `#E5E7EB` | `#293754` |
| Thành công (Đã nộp) | `--success` / `--success-bg` | `#16A34A` / `#DCFCE7` | `#4ADE80` / `rgba(22, 163, 74, 0.2)` |
| Cảnh báo (Chưa nộp) | `--warning` / `--warning-bg` | `#D97706` / `#FEF3C7` | `#FBBF24` / `rgba(217, 119, 6, 0.22)` |
| Trễ hạn / Lỗi | `--danger` / `--danger-bg` | `#DC2626` / `#FEE2E2` | `#F87171` / `rgba(220, 38, 38, 0.22)` |
| Nút chính Hover / Active | `--primary-hover` | `#000066` | `#1D4ED8` (Active: `#2563EB`) |
| Nền Countdown | `--countdown-bg` | `#00008B` | `linear-gradient(135deg, #0D1A52, #172B78)` |

### 2. Thanh điều hướng (Header `.navbar`) & Nút Sáng/Tối
- **Bố cục Header:** Logo `DeadLine Hub` bên trái; menu ngang ở giữa (`Trang chủ`, `Timeline`, `Nộp đồ án` active, `Điểm & nhận xét`); cụm `.user-box` bên phải gồm:
  1. Nút tròn chuyển chế độ Sáng/Tối (`#themeToggle`, kích thước `36x36px`, `border-radius: 50%`, nền `rgba(255,255,255,0.18)`, viền trắng mảnh, icon SVG Mặt trăng/Mặt trời).
  2. Tag vai trò `Sinh viên`.
  3. Tên sinh viên đang đăng nhập.
  4. Nút `Đăng xuất` (xóa `pm_user` và chuyển về `../Trang7_Truc/index.html`).
- **Hiệu ứng Hover & Click trên Header:**
  - Khi di chuột (`:hover`) vào các link menu, nút `#themeToggle`, nút `Đăng xuất`, `.hamburger` hoặc `.logo`: phần tử nảy nhẹ lên (`transform: translateY(-2px)`) với chuyển động đàn hồi `cubic-bezier(0.34, 1.56, 0.64, 1)` và phát sáng viền trắng dịu xung quanh (`box-shadow`).
  - Khi click vào nút `#themeToggle`: kích hoạt animation `@keyframes themeClickBounce` giúp nút nảy lên, phát sáng viền xanh trắng rực rỡ và xoay nhẹ icon SVG bên trong.

---

## MỤC 3 — BỐ CỤC & CHỨC NĂNG CHI TIẾT 3 PHẦN TRANG 3

Trang được chia thành hàng trên (2 cột bằng chiều cao nhau) và hàng dưới (1 khung rộng toàn chiều ngang):

### Phần 1 (Cột trái): Form nộp đồ án
- **Hộp đếm ngược (`#formCountdown`):** Hiển thị hạn nộp và đồng hồ đếm ngược thời gian thực (`Ngày`, `Giờ`, `Phút`, `Giây`) tự động cập nhật mỗi khi thay đổi mốc báo cáo.
- **Các trường nhập liệu (`#submitForm`):**
  - `Mốc báo cáo` (`#milestoneSelect` - bắt buộc): Lấy danh sách từ `pm_milestones`, mặc định chọn mốc theo tham số URL `?moc=` (nếu đi từ Trang 2 sang) hoặc mốc chưa nộp gần nhất.
  - `Link đồ án` (`#linkInput` - bắt buộc): Kiểm tra bằng hàm `isValidUrl()` (không rỗng, không chứa khoảng trắng, bắt đầu bằng `http://` hoặc `https://`, tên miền hợp lệ). Báo lỗi đỏ ngay bên dưới nếu sai.
  - `Ghi chú` (`#noteInput` - không bắt buộc, tối đa 200 ký tự): Có bộ đếm ký tự trực tiếp `0/200`.
- **Xử lý khi bấm "Nộp đồ án":**
  - Lưu bản ghi mới `{ milestoneId, link, date: new Date().toISOString(), note }` vào mảng `me.submissions` và ghi đè vào `localStorage` (`saveData("pm_students", students)`).
  - Reset form, cập nhật lại bảng Lịch sử nộp bài và hiện thông báo `showToast("Nộp đồ án thành công")`.

### Phần 2 (Cột phải): Chi tiết đồ án & Các bước nộp bài
- **Cân bằng chiều cao 2 cột:** Cột phải (`.side`) kéo giãn cao bằng 100% cột trái (`.grid-2` dùng `align-items: stretch`), card **Chi tiết đồ án** dùng `flex: 1` để đẩy card **Các bước nộp bài** nằm ngang bằng chính xác với đáy của **Form nộp đồ án**.
- **Card "Chi tiết đồ án" (`#latestSubmission`):**
  - **Trạng thái mặc định (khi mới mở trang hoặc chưa chọn bài):** KHÔNG tự động hiển thị bài nộp. Hiển thị khung Empty State (`.detail-empty` viền nét đứt, icon tài liệu trong vòng tròn nhấn, tiêu đề `"Chưa chọn bài nộp"` và hướng dẫn `"Bấm nút 'Xem chi tiết' ở mục Lịch sử nộp bài bên dưới để xem thông tin chi tiết."`).
  - **Khi người dùng bấm "Xem chi tiết" ở Phần 3:** Hiển thị đầy đủ thông tin của bài nộp được chọn: Tên đồ án, Badge trạng thái (`Đã nộp` / `Trễ hạn`), Nhóm, Mốc báo cáo, Link (kèm nhãn xanh `✓ Link hợp lệ` hoặc đỏ `✗ Link không hợp lệ`), Thời gian nộp, và Ghi chú; đồng thời cuộn mượt lên khu vực Chi tiết đồ án.
- **Card "Các bước nộp bài":** Danh sách đánh số 4 bước hướng dẫn sinh viên quy trình nộp bài.

### Phần 3 (Hàng dưới): Lịch sử nộp bài
- Bảng danh sách toàn bộ các lần nộp của sinh viên hiện tại (sắp xếp mới nhất lên trên), gồm 6 cột: `STT`, `Mốc`, `Link`, `Thời gian nộp`, `Trạng thái`, và `Thao tác`.
- **Cột `Thao tác` có 2 nút trên mỗi dòng:**
  1. **Nút `Xem chi tiết`:** Nạp dữ liệu của đúng bài nộp dòng đó lên hiển thị ở Phần 2 và đánh dấu dòng đang xem.
  2. **Nút `Xóa` (màu đỏ `--danger`):**
     - Hiện hộp thoại xác nhận: `"Bạn có chắc muốn xóa bài nộp này không? Dữ liệu phía giảng viên cũng sẽ bị xóa."`
     - Khi xác nhận: Xóa chính xác bài nộp đó khỏi `me.submissions` (đối chiếu theo `milestoneId` và `date`), lưu ngay lại vào `localStorage` (`saveData("pm_students", students)`) để đồng bộ dữ liệu sang Trang 5 (Chấm điểm) và Trang 6 (Thông tin sinh viên) của Giảng viên.
     - Nếu bài vừa xóa đang mở xem ở Phần 2 thì tự động đưa Phần 2 về lại trạng thái trống ban đầu.
     - Cập nhật lại bảng lịch sử và hiện `showToast("Đã xóa bài nộp thành công")`.
- Nút điều hướng cuối trang: `Xem điểm & nhận xét` trỏ tới `../Trang4_Cuong/index.html`.

---

## MỤC 4 — DỮ LIỆU & HÀM DÙNG CHUNG CẦN GIỮ NGUYÊN

- **Keys `localStorage`:** `pm_milestones`, `pm_students`, `pm_accounts`, `pm_user`, `pm_theme`.
- **Các thành phần hệ thống bắt buộc có:** Màn hình loading (`#pageLoader`), bong bóng thông báo nộp bài tự động góc trái dưới (`.notify-stack`), hiệu ứng hiện dần khi cuộn (`.reveal` + `IntersectionObserver`), thông báo nhanh (`.toast`), và menu trượt mobile (`#mobileMenu`).