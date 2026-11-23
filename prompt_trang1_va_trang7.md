# Lịch sử toàn bộ câu lệnh — Trang 1 & Trang 7 (DeadLine Hub)

Tài liệu này tổng hợp theo trình tự thời gian toàn bộ các câu lệnh/yêu cầu người dùng đã gửi trong phiên làm việc xây dựng **Trang 1 (`Trang1_Truc/`)** và **Trang 7 (`Trang7_Truc/`)** của dự án **DeadLine Hub**.

---

## Prompt 1 — Khởi tạo & yêu cầu tổng thể cho Trang 1 và Trang 7
- **Thời gian:** `2026-11-23 13:21:44 +07:00`

```markdown
Bạn là Senior Frontend Developer, Senior UI/UX Designer và chuyên gia phát triển website bằng HTML5, CSS3, Vanilla JavaScript.

Tôi đang phát triển website **DeadLine Hub — Hệ thống Quản lý Đồ án & Tiến độ Báo cáo** trong một dự án nhóm gồm 7 trang.

Tôi chỉ phụ trách **Trang 1 (Dashboard)** và **Trang 7 (Đăng nhập/Đăng ký)**.

Mục tiêu: Tạo hai trang chuyên nghiệp, thẩm mỹ cao, có hiệu ứng tương tác, đúng yêu cầu môn Thiết kế Web và tích hợp được với 5 trang còn lại của nhóm.

## 1. ĐỌC TÀI LIỆU VÀ SKILL
Tôi cung cấp file `PROMPT_DeadLine_Hub.md`. Đây là tài liệu chuẩn của nhóm.
Trước khi viết code, BẮT BUỘC:
1. Đọc toàn bộ tài liệu chung.
2. Xác định chính xác CSS chung (Mục 3).
3. Xác định chính xác JavaScript chung (Mục 4).
4. Đọc toàn bộ phần `Trang1_Truc` và `Trang7_Truc` trong Mục 5.
5. Kiểm tra những file hiện đã có trong repository.
6. Sử dụng hai Global Agent Skills đã cài trong Antigravity: `frontend-design` (Anthropic) và `web-design-guidelines` (Vercel). Nếu skill đề xuất React, Tailwind, TypeScript, Node.js hay framework thì bỏ qua.

## 2. CÔNG NGHỆ BẮT BUỘC
- CHỈ SỬ DỤNG: HTML5, CSS3 thuần, Vanilla JavaScript ES6+, Inline SVG, CSS animations và CSS gradients (ngoại lệ Google Fonts cho Be Vietnam Pro).
- KHÔNG SỬ DỤNG: Node.js, npm, React, Vue, Angular, Next.js, Tailwind, Bootstrap, TypeScript, jQuery, Three.js, GSAP, Chart.js, backend/database hay thư viện UI/animation bên ngoài.
- Chạy trực tiếp file HTML trong Chrome không cần server; không tự cài package, chạy Terminal hay khởi động server.

## 3. CẤU TRÚC THƯ MỤC BẮT BUỘC
Làm việc trên repository `TKW_KetThucMon`. Chỉ tạo/sửa `Trang1_Truc/` (`index.html`, `style.css`, `script.js`) và `Trang7_Truc/` (`index.html`, `style.css`, `script.js`). Không tách CSS/JS chung thành file riêng; không sửa thư mục thành viên khác, README tổng, Git/cấu hình; không tự commit/push GitHub.

## 4. DESIGN SYSTEM CHUNG
- Thương hiệu: DeadLine Hub.
- Màu chính: Primary `#00008B`, Primary Hover `#000066`, Primary Light `#E8E8FA`, Background `#F3F5FB`, Card `#FFFFFF`, Text `#1F2937`, Text phụ `#6B7280`, Success `#16A34A`, Warning `#D97706`, Danger `#DC2626`.
- Font: Be Vietnam Pro.
- Navbar: menu NGANG trên desktop (`#00008B`), hamburger mở panel từ trái trên mobile/tablet.

## 5. TRANG 1 — DASHBOARD CHUNG
- Sinh viên & Giảng viên dùng chung một Dashboard xem thống kê tổng quan hệ thống; KHÔNG hiển thị thông tin cá nhân (điểm TB cá nhân, hồ sơ cá nhân, lịch sử nộp riêng, danh sách đồ án riêng của giảng viên).
- Thành phần bắt buộc: Header (Logo, Navbar, vai trò, điều hướng, đăng xuất), Thống kê tổng quan (Tổng số sinh viên, Tổng số mốc báo cáo, Tổng số lượt nộp, Tổng số lượt trễ hạn + giải thích khác biệt giữa "số đồ án" và "lượt nộp theo mốc"), Countdown (cập nhật mỗi giây, không âm), Biểu đồ tròn & Biểu đồ cột (thuần CSS/HTML, không dùng thư viện), Danh sách các mốc báo cáo.
- Quy tắc dữ liệu: Mỗi sinh viên 1 đồ án; 1 đồ án có thể nộp nhiều mốc/phiên bản; dùng `SAMPLE_STUDENTS`, `SAMPLE_MILESTONES`, giữ nguyên `NAV_LINKS`, `pm_user`, `pm_students`, `pm_milestones`.

## 6. TRANG 7 — ĐĂNG NHẬP/ĐĂNG KÝ (CINEMATIC HANGING LIGHT BULB — DEADLINE HUB)
- Bóng đèn treo từ đỉnh màn hình (inline SVG/CSS, không dùng đèn bàn đặt bên trái), có dây công tắc giật.
- Mặc định nền navy tối, bóng đèn tắt, lời hướng dẫn "Kéo dây để bật đèn", form vẫn đọc và thao tác được.
- Hiệu ứng giật dây dùng Pointer Events thuần (chuột & cảm ứng), hỗ trợ `Enter`/`Space`, `aria-label`, `aria-pressed`, có ngưỡng kéo chống kích hoạt nhầm, dây đàn hồi về vị trí cũ, ánh sáng neon xanh và spotlight chiếu xuống form; kéo lại để tắt đèn không làm mất dữ liệu form.
- Giữ ID/form chuẩn (`loginForm`, `loginEmail`, `loginPass`, `loginEmailError`, `loginPassError`, form đăng ký, hai tab, hai tài khoản demo, điều hướng về `../Trang1_Truc/index.html`). Ghi rõ chế độ demo tĩnh dùng `localStorage`, không tự cấp quyền giảng viên thật từ form đăng ký.

## 7. MOBILE FIRST & 8. ĐỒNG BỘ NHÓM & 9–10. KIỂM TRA CHẤT LƯỢNG
- Kiểm tra responsive tại `320px`, `375px`, `600px`, `768px`, `1100px`, `1440px` (breakpoint `600px` và `1100px`).
- Giữ đúng đường dẫn `../Trang1_Truc/index.html` … `../Trang7_Truc/index.html`; không tự xây Trang 2–6.
```

---

## Prompt 2 — Cung cấp tài liệu chuẩn `PROMPT_DeadLine_Hub.md`
- **Thời gian:** `2026-11-23 13:23:29 +07:00`
- **Nội dung đã cung cấp:** Toàn bộ tài liệu **PROMPT LỆNH CHUNG — WEBSITE DEADLINE HUB** gồm:
  - **Đề 2.1.4:** Quy ước HTML5 (`ol.timeline > li > article > header`, `<time>`), CSS3 (`::before`, `::after`, badge **Đã nộp / Chưa nộp / Trễ hạn**), JS (nộp link, kiểm tra URL, đếm ngược).
  - **Mục 1:** Quy tắc chép nguyên văn khối code chung, giữ tên class/id/hàm/màu/kích thước.
  - **Mục 2:** Bảng phân công 7 trang (`Trang1_Truc` đến `Trang7_Truc`) và luồng điều hướng.
  - **Mục 3:** Toàn bộ CSS chung (Design System, Reset, Loader, Navbar + Hamburger, Card/Grid, Form/Toast, Notify Stack/Bubble, Badge/Avatar/Progress/Score, Stat Card, Table, Countdown, Timeline, Flip Card, Tab, Scroll Reveal, Responsive `600px`/`1100px`).
  - **Mục 4:** Toàn bộ JS chung (`SAMPLE_ACCOUNTS`, `SAMPLE_MILESTONES`, `SAMPLE_STUDENTS`, `DEMO_USERS`, `NAV_LINKS`, `loadData`/`saveData`, các hàm tính toán, `startCountdown`, `showToast`, `startNotifications`, `renderNavbar`, `initLoader`, `initFlipCards`, `initTabs`, `initScrollReveal`).
  - **Mục 5:** Code mẫu riêng cho từng trang (`Trang1_Truc` – `Trang7_Truc`).
  - **Mục 6:** Code mẫu file `index.html` gốc.
  - **Mục 7:** Tài khoản demo (`an.nv@st.lhu.edu.vn` / `123456`, `minh.nv@lhu.edu.vn` / `123456`) và số liệu kiểm tra (`6` sinh viên, `4` mốc, `7` bài đã nộp, `2` trễ hạn; tỷ lệ `Đã nộp 6 (25%)`, `Chưa nộp 16 (67%)`, `Trễ hạn 2 (8%)`).
  - **Mục 8:** Hướng dẫn nộp bài theo nhánh trên repository nhóm.

---

## Prompt 3 — Đổi tên file sang hậu tố `_trang1` và `_trang7`
- **Thời gian:** `2026-11-23 13:32:02 +07:00`

```text
đổi tên file, giữ nguyên nội dung bên trong, index_trang1, script_trang1,.. tương tự, _trang để không bị nhầm lẫn
```

---

## Prompt 4 — Khóa form Trang 7 khi đèn tắt, mở khóa khi bật đèn
- **Thời gian:** `2026-11-23 13:38:43 +07:00`

```markdown
Hãy CHỈ chỉnh sửa Trang7_Truc của dự án DeadLine Hub theo các yêu cầu sau, giữ nguyên toàn bộ bố cục, màu sắc, hiệu ứng bóng đèn treo, dây giật, form đăng nhập/đăng ký và các chức năng hiện có nếu không bị yêu cầu thay đổi.

## MỤC TIÊU MỚI
Tôi muốn thay đổi hành vi của trang đăng nhập/đăng ký như sau:

### 1. Trạng thái mặc định khi mới vào trang
- Khi người dùng vừa mở Trang7_Truc/index.html, đèn phải ở trạng thái **TẮT**.
- Khi đèn đang tắt:
  - Toàn bộ khu vực form phải **tối hẳn hơn hiện tại**.
  - Form vẫn nhìn thấy được nhưng bị khóa tương tác.
  - Người dùng **không thể nhập liệu, không thể submit, không thể dùng tab Đăng nhập / Đăng ký, không thể bấm tài khoản demo, không thể bấm hiện/ẩn mật khẩu**.
  - Chỉ riêng khu vực **dây kéo đèn / công tắc đèn** là còn tương tác được.
  - Hiển thị cảm giác “chưa mở đèn thì chưa được sử dụng hệ thống”.

### 2. Khi kéo dây bật đèn
- Khi người dùng kéo dây công tắc đủ ngưỡng để bật đèn:
  - Đèn sáng lên.
  - Spotlight / ánh sáng xanh chiếu xuống như hiện tại.
  - Form sáng rõ hơn.
  - Toàn bộ input, button, tab và các nút liên quan được mở khóa để sử dụng.
  - Người dùng có thể nhập email, mật khẩu, chuyển tab Đăng nhập/Đăng ký, dùng tài khoản demo, submit form như bình thường.

### 3. Khi tắt đèn lại
- Nếu người dùng kéo dây thêm lần nữa để tắt đèn:
  - Form quay lại trạng thái tối.
  - Form bị khóa tương tác trở lại.
  - Giữ nguyên dữ liệu người dùng đã nhập trước đó, không reset form.
  - Chỉ khóa nhập liệu và thao tác, không xóa nội dung.

## YÊU CẦU KỸ THUẬT & TRIỂN KHAI CỤ THỂ
- Chỉ chỉnh sửa trong `Trang7_Truc/index.html`, `Trang7_Truc/style.css`, `Trang7_Truc/script.js` (tên file thực tế `_trang7`), không sửa Trang1_Truc hay các trang khác.
- Tạo trạng thái `body.light-off` / `body.light-on`; giảm sáng hoặc thêm lớp phủ mờ tối cho `.auth-card` nhưng vẫn đọc được; đặt `disabled = true` và `aria-disabled="true"` cho input, button trong form, tab, nút demo, nút hiện/ẩn mật khẩu; riêng dây kéo vẫn hoạt động.
- Thông báo gần đèn:
  - Khi đèn tắt: “Kéo dây để bật đèn và bắt đầu đăng nhập”
  - Khi đèn bật: “Đèn đã bật, bạn có thể đăng nhập hoặc đăng ký”
- Giữ nguyên animation dây kéo, thiết kế bóng đèn, validation, tài khoản demo và điều hướng sang Trang 1.
```

---

## Prompt 5 — Nâng cấp giao diện Trang 1 (Flip Card 3D, Mini Badges, Chuông thông báo)
- **Thời gian:** `2026-11-23 13:44:27 +07:00`

```markdown
# NÂNG CẤP GIAO DIỆN TRANG 1 — DEADLINE HUB

Bạn là Senior Frontend Developer và chuyên gia UI/UX, Animation Design.
Hãy sử dụng hai Agent Skills đã cài: `frontend-design`, `web-design-guidelines`.

## 1. HIỆU ỨNG LẬT THẺ 3D (FLIP CARD)
- Thêm hiệu ứng lật thẻ 3D cho KPI Card và card phù hợp (mặt trước số liệu, mặt sau giải thích ngắn, xoay 180° trục Y trong 0.5–0.6s, dùng `perspective`, `transform-style: preserve-3d`, `backface-visibility`, icon gợi ý "Nhấn để xem thêm", hỗ trợ Enter/Space, tái sử dụng `.flip-card` và `initFlipCards()`, không flip biểu đồ/nút điều hướng).

## 2. THÊM MINI BADGES
- Pill bo tròn nhỏ gọn ("Sắp đến hạn", "Đã nộp", "Chưa nộp", "Trễ hạn", "Đúng tiến độ", "Mốc tiếp theo") phản ánh dữ liệu thật, màu theo design system.

## 3. THAY THÔNG BÁO HIỆN TẠI BẰNG CHUÔNG THÔNG BÁO (FLOATING NOTIFICATION BELL)
- Chuông tròn cố định góc dưới phải (`#00008B`, icon trắng, có badge đếm chưa xem), không che hamburger/nội dung trên mobile.
- Cứ mỗi 2 giây phát 1 thông báo mới từ `getRecentSubmissions()`, rung chuông (`@keyframes`), hiện tối đa 1 popup (avatar, tên, nhóm, mốc, thời gian) rồi tự ẩn sau ~1.8 giây; dừng khi hết danh sách, tạm dừng khi tab ẩn (`visibilitychange`), bấm chuông xem lại lịch sử, có nút đóng; tắt cơ chế bong bóng xếp chồng cũ chỉ tại Trang 1.

## 4–7. MOBILE FIRST & GIỚI HẠN
- Kiểm tra `320px`, `375px`, `600px`, `768px`, `1100px`, `1440px`, hỗ trợ `prefers-reduced-motion`, chỉ sửa Trang 1 bằng HTML5/CSS3/Vanilla JS, không commit/push.
```

---

## Prompt 6 — Nâng cấp Dashboard Trang 1 với Light/Dark Mode & Glow Effects
- **Thời gian:** `2026-11-23 13:51:25 +07:00`

```markdown
# NÂNG CẤP DASHBOARD — LIGHT/DARK MODE & PREMIUM GLOW EFFECTS

Sử dụng `frontend-design` và `web-design-guidelines`, nâng cấp `Trang1_Truc` với 3 tính năng mới, giữ nguyên Flip Card 3D, Mini Badges, Chuông thông báo 2s, Biểu đồ, Countdown, Navbar/Hamburger và `#00008B`:

## 1. LIGHT MODE / DARK MODE
- Nút chuyển sáng/tối ở góc phải Navbar (mặt trời / mặt trăng, chuyển mượt 250–350ms).
- Light Mode mặc định (`#00008B`, `#F3F5FB`, `#FFFFFF`, `#1F2937`, `#E5E7EB`).
- Dark Mode (`#0B1020`, `#141D33`, `#F1F5F9`, `#A8B4C7`, `#293754`, nhấn xanh lam sáng tương phản tốt).
- Dùng CSS Variables + `data-theme="light"` / `data-theme="dark"`, lưu `localStorage` bằng key riêng (`dlh_theme`), triển khai riêng cho Trang 1.

## 2. GLOW BUTTON — HÀO QUANG NÚT BẤM
- Áp dụng hào quang xanh nhẹ, viền sáng, nâng ~2px khi hover/focus và thu nhẹ khi click cho các nút chính, chuông thông báo và theme toggle.

## 3. SOFT GLOW SECTION — CARD PHÁT SÁNG NHẸ
- Áp dụng cho KPI Cards, Countdown, Biểu đồ tròn, Biểu đồ cột và Section các mốc báo cáo; viền tinh tế, nâng ~3px khi hover, pseudo-element glow có `pointer-events: none` và không làm hỏng 3D Flip Card.

## 4–8. TƯƠNG THÍCH, MOBILE FIRST & KIỂM TRA
- Kiểm tra đầy đủ ở `375px`, `768px`, `1440px`, hỗ trợ `prefers-reduced-motion` và `:focus-visible`, chỉ sửa Trang 1, không commit/push.
```

---

## Prompt 7 — Gửi ảnh tham chiếu nút chuyển giao diện tròn trên Navbar
- **Thời gian:** `2026-11-23 13:57:16 +07:00`
- **Tệp đính kèm:** Ảnh chụp thanh Navbar mẫu (`media_1795417035866_7f64bdc0.png`), hiển thị nút hình tròn chứa icon mặt trăng trắng đặt ngay bên trái cụm vai trò / tên người dùng / Đăng xuất và menu căn giữa.

---

## Prompt 8 — Yêu cầu bo góc toàn bộ Navbar và tạo khoảng hở nổi
- **Thời gian:** `2026-11-23 14:01:15 +07:00`

```markdown
Hãy chỉnh sửa Navbar của `Trang1_Truc` theo ảnh tham chiếu.

Yêu cầu: Bo góc toàn bộ thanh Navbar giống ảnh đầu tiên, thay vì để Navbar hình chữ nhật vuông sát mép màn hình như ảnh thứ hai.
1. Navbar màu xanh `#00008B`, bo tròn 14–16px ở cả 4 góc.
2. Tạo khoảng cách khoảng 8–12px giữa Navbar và các mép màn hình desktop.
3. Thêm shadow xanh nhẹ để Navbar có cảm giác nổi.
4. Các mục menu active (nền trắng) bo góc 12px, có padding cân đối.
5. Các nút Dark/Light Mode, badge vai trò và Đăng xuất cũng bo góc mềm, đồng bộ.
6. Giữ Navbar theo dạng horizontal navigation và sticky khi cuộn.
7. Mobile First: Navbar bo góc phù hợp, hamburger menu vẫn hoạt động và không bị cắt bởi overflow.
8–10. Không tràn ngang, giữ nguyên kích thước chữ/chức năng, chỉ chỉnh CSS/HTML thật sự cần thiết.
```

---

## Prompt 9 — Yêu cầu chỉnh lại chỉ bo góc nhẹ Navbar theo ảnh Trang 6
- **Thời gian:** `2026-11-23 14:03:52 +07:00`

```markdown
Hãy chỉnh sửa **chỉ phần bo góc của Navbar** trong `Trang1_Truc` để giống ảnh Trang 6 của nhóm mà tôi cung cấp.

Yêu cầu:
1. Giữ nguyên màu nền Navbar `#00008B`.
2. Bo góc nhẹ cả 4 góc Navbar bằng `border-radius: 6px` hoặc `8px`.
3. Navbar gần sát mép màn hình, giống ảnh tham chiếu. Không tạo khoảng cách lớn bên ngoài.
4. Giữ nguyên chiều cao và bố cục ngang hiện tại.
5. Giữ nguyên logo bên trái, menu ở giữa và khu vực người dùng bên phải.
6. Giữ nguyên bo góc của mục menu đang active, nút chuyển sáng/tối, badge vai trò và nút Đăng xuất.
7. Không thêm hiệu ứng floating, shadow hoặc glow mới cho Navbar.
8. Giữ nguyên sticky Navbar và hamburger menu trên mobile.
9. Không gây tràn ngang hoặc tạo thêm thanh cuộn.
10. Chỉ chỉnh CSS cần thiết trong `Trang1_Truc/style.css`, không sửa JavaScript hay các trang khác.
```

---

## Prompt 10 — Gửi ảnh tham chiếu giao diện Trang 6
- **Thời gian:** `2026-11-23 14:04:23 +07:00`
- **Tệp đính kèm:** Ảnh chụp màn hình `Trang6_Nhu/index_trang6.html` trên trình duyệt Edge (`media_1795417457152_6d4bf70c.jpg`).

---

## Prompt 11 — Phản hồi hiển thị góc bo Navbar
- **Thời gian:** `2026-11-23 14:05:18 +07:00`

```text
nó chỉ bo góc trái bên trên thôi
```

---

## Prompt 12 — Chọn hướng để Navbar vuông sát mép giống Trang 6
- **Thời gian:** `2026-11-23 14:09:21 +07:00`

```text
Hướng 1
```

---

## Prompt 13 — Hỏi bảng mã màu của Dark Mode
- **Thời gian:** `2026-11-23 14:12:05 +07:00`

```text
mã màu của giao diện tối là gi
```

---

## Prompt 14 — Đổi màu icon mặt trời sang màu trắng
- **Thời gian:** `2026-11-23 14:13:36 +07:00`

```text
sửa cái mặt trời thành màu trắng
```

---

## Prompt 15 — Xuất lịch sử câu lệnh ra file Markdown
- **Thời gian:** `2026-11-23 14:18:18 +07:00`

```text
tạo cho tôi 1 file prompt_trang1_va_trang7.md chứa lịch sử tất cả câu lệnh
```
