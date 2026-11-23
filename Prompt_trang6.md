Bạn là lập trình viên front-end kiêm nhà thiết kế giao diện cho hệ thống quản lý đồ án DeadLine Hub (đề 2.1.4 – Phân hệ Quản lý Đồ án & Tiến độ Báo cáo). Hãy lập trình riêng Trang 6 – Thông tin sinh viên, chi tiết đồ án, dành cho giảng viên. Trang phải mở được trực tiếp bằng trình duyệt và dùng được ngay với dữ liệu mẫu.

1. Sản phẩm cần bàn giao

Tạo thư mục Trang6_Nhu gồm đúng ba tệp: index_trang6.html, style.css và script.js. Dùng HTML5, CSS3 và JavaScript thuần, không dùng framework, chỉ dùng Google Fonts. Toàn bộ giao diện dùng tiếng Việt có dấu. Phạm vi công việc chỉ gồm Trang 6. Giữ nguyên phần CSS chung và JS chung trong PROMPT_DeadLine_Hub.md của nhóm, code riêng của Trang 6 viết nối tiếp phía sau.

2. Vị trí trong luồng

Mở website → Đăng nhập / Đăng ký → Trang chủ → (Giảng viên) Chấm điểm, nhận xét (Trang 5) → Thông tin sinh viên, chi tiết đồ án (Trang 6) → Đăng xuất → quay về Đăng nhập. Trang 5 có nút “Xem hồ sơ sinh viên” mở Trang 6 kèm ?id=SV01 để chọn sẵn sinh viên đó. Điểm và nhận xét giảng viên lưu ở Trang 5 phải hiện ngay ở Trang 6.

3. Bố cục và giao diện

- Thanh điều hướng cao 64 px, cố định khi cuộn, nền #00008B, có logo chữ DeadLine Hub, các mục Trang chủ, Chấm điểm, Sinh viên (đang chọn), nhãn “Giảng viên”, tên giảng viên và nút Đăng xuất.
- Dưới 1100 px, thanh điều hướng chuyển thành nút hamburger, bấm vào menu trượt ra từ bên trái, đóng bằng nút X, bấm ra ngoài hoặc phím Esc.
- Tiêu đề chính là “Thông tin sinh viên”, bên dưới ghi “Xem điểm, hồ sơ và chi tiết đồ án của từng sinh viên”.
- Từ 1100 px trở lên chia hai cột: cột trái 340 px là danh sách sinh viên, cột phải là phần chi tiết. Dưới 1100 px xếp dọc. Trang phải dùng được ở chiều rộng 375 px mà không cuộn ngang.
- Màu chính #00008B, nền #F3F5FB, thẻ trắng bo góc 12 px, font Be Vietnam Pro, dự phòng Segoe UI.
- Hiệu ứng: màn hình loading, hiện dần khi cuộn, bong bóng thông báo nộp bài 1 giây 1 cái, thẻ nổi khi rê chuột, toast thông báo.

4. Danh sách sinh viên (cột trái)

- Tiêu đề “Danh sách sinh viên” kèm số lượng đang hiển thị.
- Ô tìm theo họ tên hoặc MSSV.
- Lọc trạng thái: Tất cả trạng thái, Có mốc trễ hạn, Chưa nộp mốc hiện tại, Chưa nộp bài nào, Đã nộp đầy đủ. Mỗi lựa chọn ghi kèm số sinh viên tương ứng. “Mốc hiện tại” là mốc gần nhất chưa hết hạn.
- Lọc theo nhóm (Nhóm 1 đến Nhóm 6).
- Mỗi dòng có avatar chữ viết tắt, họ tên, MSSV · nhóm, điểm trung bình và chấm màu: xanh là đủ bài, vàng là chưa nộp mốc hiện tại, đỏ nhấp nháy là có mốc trễ hạn. Danh sách cao tối đa 440 px, có thanh cuộn.
- Bấm hoặc nhấn Enter vào một dòng để xem sinh viên đó. Dòng đang chọn có nền xanh đậm.
- Dưới danh sách có chú thích ba màu chấm.

5. Phần chi tiết (cột phải)

- Banner nền xanh đậm: avatar lớn, “Hồ sơ sinh viên”, họ tên, các nhãn MSSV, Lớp, Nhóm, bên phải là ô Điểm TB và ô số mốc đã nộp.
- Ba tab: Hồ sơ sinh viên, Xem điểm, Chi tiết đồ án.
- Tab Hồ sơ sinh viên: 4 thẻ thống kê (điểm trung bình, số mốc đã chấm, số mốc đã nộp, mốc trễ hạn); thẻ Thông tin cá nhân (họ tên, MSSV, lớp, ngành, email, số điện thoại); thẻ Thông tin học tập (học phần Lập trình Front-end, nhóm, giảng viên hướng dẫn ThS. Nguyễn Văn Minh...).
- Tab Xem điểm: 4 thẻ thống kê, biểu đồ cột điểm từng mốc (từ 8 trở lên màu xanh lá, dưới 6.5 màu đỏ, chưa chấm hiện thanh xám và dấu “-”), bảng điểm gồm STT, Mốc báo cáo, Trạng thái (badge), Điểm, Nhận xét và dòng điểm trung bình cuối bảng.
- Tab Chi tiết đồ án:
  - Thẻ Thông tin đồ án: biểu tượng nhóm, tên đồ án, mô tả, nhãn công nghệ HTML5 / CSS3 / JavaScript, repository, thanh tiến độ “Đã nộp x/4 mốc”, danh sách thành viên nhóm, trưởng nhóm có nhãn “Trưởng nhóm”.
  - Bấm vào tên thành viên: nếu là sinh viên có trong danh sách thì chuyển sang hồ sơ người đó và báo toast; nếu là người đang xem thì báo “Đang xem hồ sơ của…”; còn lại thì mở popup thông tin thành viên gồm MSSV, lớp, ngành, số điện thoại, email, phần việc phụ trách, đồ án, trưởng nhóm, điểm nhóm, tiến độ và nút “Xem hồ sơ trưởng nhóm”. Popup đóng bằng nút ×, bấm ra ngoài hoặc Esc.
  - Thẻ đếm ngược nền xanh đậm: tên mốc báo cáo tiếp theo, hạn nộp và 4 ô Ngày / Giờ / Phút / Giây cập nhật mỗi giây. Hết hạn tất cả thì ghi “Đã hết hạn tất cả các mốc”.
  - Timeline các mốc: dùng thẻ lồng nhau ol.timeline > li.tl-item > article > header, ngày giờ dùng thẻ time. Đường nối dọc và chấm tròn vẽ bằng ::before và ::after, đổi màu theo trạng thái. Mỗi mốc có badge Đã nộp / Chưa nộp / Trễ hạn, hạn nộp, ngày nộp, link kèm nhãn “✓ Link hợp lệ” hoặc “✗ Link không hợp lệ” (link phải bắt đầu bằng http:// hoặc https:// và tên miền có dấu chấm), và nhận xét của giảng viên nếu đã chấm.

6. Giao diện sáng / tối

- Thêm nút tròn viền trắng trên thanh điều hướng, dùng biểu tượng nét mảnh (SVG): đang sáng hiện mặt trăng, đang tối hiện mặt trời. Trên máy tính nút nằm cạnh nhãn “Giảng viên”, trên điện thoại nằm cạnh nút hamburger.
- Khi rê chuột vào nút: viền sáng lên, có quầng sáng trắng xanh, biểu tượng phát sáng và xoay nhẹ.
- Bấm nút đổi giao diện, hiện toast “Đã bật giao diện tối / sáng”, lưu lựa chọn vào localStorage khóa pm_theme để tải lại vẫn giữ.
- Bảng màu tối (đặt trong body.dark):
  - --bg #0B1020, --card #141D33, --nav-bg #0D1538
  - --primary #00008B, --primary-light #1E2B4D, --primary-hover #1D4ED8, nút / tab đang chọn #2563EB
  - --text #F1F5F9, --text-sub #A8B4C7, --accent-text #60A5FA (tiêu đề, link, số liệu), --border #293754
  - --success #4ADE80 / rgba(22, 163, 74, 0.2); --warning #FBBF24 / rgba(217, 119, 6, 0.22); --danger #F87171 / rgba(220, 38, 38, 0.22)
  - --countdown-bg từ #0D1A52 đến #172B78 (dùng cho thẻ đếm ngược và banner), --kpi-back-bg từ #12215C đến #0C153A, --bar-grad từ #60A5FA đến #2563EB (cột biểu đồ)
- Chỉ viết phần sáng tối trong code riêng của Trang 6, không sửa CSS chung của nhóm.

7. Dữ liệu

- Dùng localStorage với các khóa chung của nhóm: pm_students, pm_milestones, pm_accounts, pm_user. Chỉ tạo dữ liệu mẫu khi khóa chưa tồn tại.
- Dữ liệu mẫu: 6 sinh viên SV01–SV06 (Nhóm 1–6), 4 mốc báo cáo (10/11, 24/11, 08/12, 22/12/2026 lúc 23:59), 7 bài nộp. Điểm lưu ở student.grades[milestoneId] dạng { score, comment }.
- Trạng thái mốc: nộp trước hạn là Đã nộp; nộp sau hạn hoặc quá hạn mà chưa nộp là Trễ hạn; còn lại là Chưa nộp.
- Đọc tham số ?id= trên đường dẫn để chọn sẵn sinh viên; không có thì chọn sinh viên đầu tiên.

8. Kiểm tra trước khi bàn giao

- Mở index_trang6.html, Console (F12) không có lỗi đỏ.
- Tìm “125000104” chỉ còn Phạm Gia Huy. Lọc “Có mốc trễ hạn” ra 2 sinh viên, “Chưa nộp bài nào” ra 1 sinh viên.
- Chuyển đủ 3 tab, đồng hồ đếm ngược chạy từng giây, timeline của Phạm Gia Huy hiện “✗ Link không hợp lệ” ở Báo cáo 1.
- Bấm tên thành viên nhóm thấy chuyển hồ sơ hoặc mở popup.
- Thu nhỏ còn 375 px: không cuộn ngang, có nút hamburger, menu trượt từ trái.
- Bấm nút mặt trăng sang giao diện tối, tải lại trang vẫn giữ giao diện tối.

Trả về đầy đủ mã nguồn của cả ba tệp, ghi rõ tên từng tệp và kết thúc bằng hướng dẫn mở Trang6_Nhu/index_trang6.html.
