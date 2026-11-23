# DeadLine Hub — Hệ thống Quản lý Đồ án & Tiến độ Báo cáo

**Đề 2.1.4 (Phân hệ Quản lý Đồ án & Tiến độ Báo cáo — Project Milestone)**. Dự án được xây dựng hoàn toàn bằng **HTML5, CSS3 và JavaScript thuần** (không sử dụng framework), hỗ trợ phân quyền theo vai trò **Sinh viên** và **Giảng viên**, đồng bộ dữ liệu trực tiếp qua `localStorage`.

## 1. Đáp ứng yêu cầu Đề 2.1.4

* **HTML5 Semantic:** Xây dựng dòng thời gian (Timeline) các mốc deadline bằng cấu trúc thẻ lồng nhau chuẩn ngữ nghĩa (`ol.timeline > li > article > header`) kết hợp thẻ `<time datetime="...">`.
* **CSS3:**
  * Sử dụng CSS Pseudo-elements (`::before`, `::after`) để vẽ trục và đường nối trạng thái trên Timeline.
  * Thiết kế hệ thống **Badge trạng thái**: **Đã nộp** (xanh lá), **Chưa nộp** (vàng), **Trễ hạn** (đỏ, có hiệu ứng nhấp nháy cảnh báo).
  * Giao diện **Responsive Mobile-First**: thanh điều hướng ngang cố định trên máy tính và menu Hamburger trượt từ bên trái trên điện thoại/tablet.
  * Hiệu ứng giao diện phong phú: màn hình loading chuyển trang, hiện dần khi cuộn (`IntersectionObserver`), bong bóng thông báo nộp bài mới mỗi 1 giây, thẻ nổi (`card-hover`), lật thẻ 3D (`flip-card`), biểu đồ tròn/cột bằng CSS thuần và thông báo `toast`.
* **JavaScript (Vanilla JS):**
  * Xử lý form nộp link đồ án, **kiểm tra định dạng URL hợp lệ** (`http://` hoặc `https://`, không chứa khoảng trắng, tên miền hợp lệ).
  * **Đồng hồ đếm ngược (Countdown)** thời gian thực đến hạn nộp của từng mốc báo cáo.
  * Quản lý phiên đăng nhập, đăng ký, nộp bài và chấm điểm đồng bộ xuyên suốt 7 trang bằng `localStorage`.

## 2. Công nghệ sử dụng

* **Ngôn ngữ:** HTML5, CSS3, JavaScript (ES6+) thuần.
* **Font chữ:** Google Fonts (`Be Vietnam Pro`).
* **Lưu trữ dữ liệu:** Web Storage API (`localStorage`) với các key dùng chung: `pm_milestones`, `pm_students`, `pm_accounts`, `pm_user`.
* **Design System:** Sử dụng biến CSS (`:root`) thống nhất toàn bộ 7 trang với tông màu chủ đạo xanh đậm `#00008B`.

## 3. Phân công thành viên & Danh sách 7 trang

| Trang | Tên chức năng | Đối tượng sử dụng (Web) | Thành viên phụ trách | Thư mục |
| ----- | ----- | ----- | ----- | ----- |
| **1** | Trang chủ: thẻ thống kê, đồng hồ đếm ngược, biểu đồ tròn & biểu đồ cột | Sinh viên & Giảng viên | **Trúc (Trưởng nhóm)** | `Trang1_Truc/` |
| **2** | Timeline dự án, lọc trạng thái, thanh tiến độ & thẻ lật yêu cầu từng mốc | Sinh viên | Cường | `Trang2_Cuong/` |
| **3** | Nộp đồ án, kiểm tra URL, xem chi tiết bài vừa nộp, sai sót & lịch sử nộp | Sinh viên | Hiếu | `Trang3_Hieu/` |
| **4** | Xem điểm trung bình, lật thẻ xem nhận xét & bảng điểm tổng hợp | Sinh viên | Cường | `Trang4_Cuong/` |
| **5** | Danh sách bài nộp (tìm kiếm, lọc chờ chấm/đã chấm), chấm điểm & nhận xét | Giảng viên | Hoàng | `Trang5_Hoang/` |
| **6** | Xem hồ sơ sinh viên, bảng điểm, tiến độ & timeline chi tiết đồ án | Giảng viên | Như | `Trang6_Nhu/` |
| **7** | Đăng nhập, Đăng ký tài khoản mới & nút điền nhanh tài khoản Demo | Sinh viên & Giảng viên | **Trúc (Trưởng nhóm)** | `Trang7_Truc/` |

## 4. Luồng hoạt động (User Flow)

```text
Mở website (index.html)
   └──> Trang 7: Đăng nhập / Đăng ký
           └──> Trang 1: Trang chủ (tự động hiển thị theo vai trò)
                   ├── [Sinh viên]  ──> Trang 2 (Timeline) ──> Trang 3 (Nộp đồ án) ──> Trang 4 (Xem điểm & nhận xét) ──> Đăng xuất (Trang 7)
                   └── [Giảng viên] ──> Trang 5 (Chấm điểm) ──> Trang 6 (Thông tin & chi tiết sinh viên) ────────────────> Đăng xuất (Trang 7)
```

**Luồng đồng bộ dữ liệu:**

* Sinh viên nộp link bài mới ở **Trang 3** -> dữ liệu lưu vào `pm_students` -> bài nộp xuất hiện ngay tại danh sách chờ chấm của Giảng viên ở **Trang 5** và timeline của **Trang 6**.
* Giảng viên chấm điểm & lưu nhận xét ở **Trang 5** -> điểm và nhận xét hiển thị ngay cho Sinh viên ở **Trang 4** và hồ sơ ở **Trang 6**.

## 5. Cấu trúc thư mục dự án

```text
DeadLine-Hub/
├── index.html             # Màn hình chờ & tự động chuyển hướng vào Trang 7
├── README.md              # Tài liệu mô tả dự án
├── Trang1_Truc/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── Trang2_Cuong/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── Trang3_Hieu/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── Trang4_Cuong/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── Trang5_Hoang/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── Trang6_Nhu/
│   ├── index.html
│   ├── style.css
│   └── script.js
└── Trang7_Truc/
    ├── index.html
    ├── style.css
    └── script.js
```

> Mỗi thư mục trang đều độc lập gồm 3 file (`index.html`, `style.css`, `script.js`), trong đó `style.css` và `script.js` chứa phần dùng chung ở đầu file và phần xử lý riêng của trang ở bên dưới.

## 6. Hướng dẫn chạy & Kiểm thử

### Cách chạy dự án

1. Clone repository về máy:
   ```bash
   git clone https://github.com/hoang-1205/TKW_KetThucMon.git
   cd TKW_KetThucMon
   ```
2. Mở file `index.html` ở thư mục gốc bằng trình duyệt (hoặc chạy bằng extension **Live Server** trên VS Code).

### Tài khoản Demo có sẵn

Mật khẩu mặc định cho tất cả tài khoản demo là **`123456`**:

| Vai trò | Họ và tên | Email đăng nhập | Mật khẩu |
| ----- | ----- | ----- | ----- |
| **Sinh viên** | Nguyễn Văn An | `an.nv@st.lhu.edu.vn` | `123456` |
| **Sinh viên** | Trần Thị Bích Ngọc | `ngoc.ttb@st.lhu.edu.vn` | `123456` |
| **Giảng viên** | ThS. Nguyễn Văn Minh | `minh.nv@lhu.edu.vn` | `123456` |

### Số liệu kiểm tra dữ liệu mẫu (mặc định)

* **Trang 1 (vai trò Giảng viên):**
  * Thống kê: `6` sinh viên, `4` mốc báo cáo, `7` bài đã nộp, `2` lượt trễ hạn.
  * Biểu đồ tỷ lệ toàn lớp: **Đã nộp** `6` (`25%`), **Chưa nộp** `16` (`67%`), **Trễ hạn** `2` (`8%`).
* **Trang 5 (Chấm điểm):** Tổng `7` bài nộp, trong đó `2` bài chờ chấm và `5` bài đã chấm.

### Khôi phục lại dữ liệu mẫu ban đầu

Nếu muốn xóa các bài nộp/điểm đã test để quay về dữ liệu mẫu ban đầu:

1. Nhấn **F12** mở DevTools -> chọn tab **Console**.
2. Gõ lệnh `localStorage.clear()` rồi nhấn **Enter**.
3. Tải lại trang (**F5**).

## 7. Quy ước làm việc nhóm (Git Workflow)

* Mỗi thành viên làm việc trên nhánh riêng của mình và chỉ đẩy đúng thư mục trang được phân công.
* Không thêm file `README.md` thừa trong các nhánh thành viên khi tạo Pull Request để tránh xung đột khi gộp nhánh.
* Sau khi hoàn thành và kiểm tra không có lỗi đỏ trên Console (**F12**), tạo **Pull Request** về nhánh `main` và **không tự ý Merge** (Hoàng phụ trách review và gộp bài trên GitHub).

© 2026 **DeadLine Hub** — Dự án môn Thiết kế Web / Lập trình Front-end.