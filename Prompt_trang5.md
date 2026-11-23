Bạn là lập trình viên front-end kiêm nhà thiết kế giao diện cho hệ thống quản lý đồ án DeadLine Hub. Hãy lập trình riêng Trang 5 – Chấm điểm & nhận xét, dành cho giảng viên. Trang phải mở được trực tiếp bằng trình duyệt và dùng được ngay với dữ liệu mẫu.

1. Sản phẩm cần bàn giao

Tạo thư mục Trang5_Hoang gồm đúng ba tệp: index_TRANG5.html, style.css và script.js. Dùng HTML5, CSS3 và JavaScript thuần. Toàn bộ giao diện dùng tiếng Việt có dấu. Phạm vi công việc chỉ gồm Trang 5.

2. Bố cục và giao diện

- Thanh điều hướng cao 64 px, cố định khi cuộn, có logo chữ DeadLine Hub, các mục Bài nộp, Chấm điểm, Tiêu chí và tên giảng viên.
- Tiêu đề chính là “Chấm điểm & nhận xét”, bên dưới ghi “Chấm bài nộp theo từng mốc báo cáo”.
- Từ 1100 px trở lên, bố trí ba vùng từ trái sang phải. Cột danh sách bài nộp rộng 320 px. Hai thẻ Thông tin bài nộp và Chấm điểm chia đều phần còn lại.
- Dưới 1100 px, xếp ba vùng theo chiều dọc và chuyển thanh điều hướng thành menu mở từ bên trái. Trang phải dùng được ở chiều rộng 375 px mà không cuộn ngang.
- Dùng xanh đậm #00008B làm màu chính, nền #F3F5FB, thẻ trắng bo góc 12 px và font Be Vietnam Pro, dự phòng Segoe UI. Mọi trạng thái phải có nhãn chữ rõ ràng.
- Có giao diện sáng tối, đổi từ nèn #F3F5FB thành nền #0B1020

3. Quy trình chấm bài

- Giảng viên tìm sinh viên theo họ tên hoặc MSSV, rồi lọc Tất cả, Chờ chấm hoặc Đã chấm. Mỗi bộ lọc hiển thị tổng số bài tương ứng.
- Mỗi dòng đại diện cho một sinh viên tại một mốc báo cáo. Nếu sinh viên nộp lại cùng mốc, hiển thị lần nộp mới nhất. Ưu tiên bài chờ chấm, sau đó sắp theo thời gian nộp mới nhất. Khi mở trang, chọn sẵn bài chờ chấm đầu tiên.
- Khi chọn bài, hiển thị họ tên, MSSV, nhóm, tên đồ án, mốc báo cáo, thời điểm nộp, đường dẫn và ghi chú. So thời điểm nộp với hạn báo cáo để hiện “Đã nộp” hoặc “Trễ hạn”. Một bài trễ hạn vẫn có thể đang chờ chấm.
- Chỉ cho mở đường dẫn HTTP hoặc HTTPS hợp lệ. Nếu thiếu giao thức, hiển thị nguyên văn đường dẫn cùng nhãn “Link không hợp lệ”.
- Phiếu chấm gồm điểm từ 0 đến 10 theo bước 0,25 và nhận xét từ 10 đến 500 ký tự sau khi bỏ khoảng trắng hai đầu. Có bộ đếm ký tự. Nếu nhập sai, hiện lỗi ngay dưới trường và đưa con trỏ đến trường sai đầu tiên.
- Nút “Lưu điểm” lưu cả điểm lẫn nhận xét, cập nhật danh sách và bộ đếm, rồi thông báo tên sinh viên vừa được chấm. Nút “Hủy” khôi phục kết quả đã lưu của bài đang chọn. Khi bộ lọc làm ẩn bài đang chọn, đóng phiếu chấm để tránh nhập nhầm.

4. Dữ liệu và tiêu chí

- Dùng localStorage với hai khóa pm_students và pm_milestones. Chỉ tạo dữ liệu mẫu khi khóa chưa tồn tại. Giữ nguyên mảng rỗng nếu người dùng đã lưu.
- Lưu kết quả vào student.grades[milestoneId] theo cấu trúc { score: 8.25, comment: "Nhận xét của giảng viên" }. Trước khi lưu, đọc lại dữ liệu mới nhất và chỉ sửa kết quả của đúng sinh viên tại đúng mốc. Nếu ghi thất bại, giữ nội dung đang nhập và báo lỗi.
- Tạo dữ liệu mẫu gồm 6 sinh viên, 4 mốc báo cáo và 7 bài nộp, trong đó có 2 bài chờ chấm và 5 bài đã chấm. Bài chờ chấm đầu tiên là Báo cáo 2 của Nguyễn Văn An, MSSV 125000101.
- Cuối trang hiển thị bốn tiêu chí tham khảo: Giao diện 3 điểm, Chức năng 4 điểm, Code 2 điểm, Trình bày 1 điểm. Giảng viên nhập một điểm tổng.

5. Kiểm tra trước khi bàn giao

Tìm MSSV 125000101, chọn Báo cáo 2, nhập 8.25 và nhận xét “Bố cục rõ ràng, cần bổ sung mô tả cho liên kết.” Sau khi lưu, số bài chờ chấm phải giảm từ 2 xuống 1 và số bài đã chấm tăng từ 5 lên 6. Tải lại trang và mở đúng bài để xác nhận điểm cùng nhận xét vẫn còn. Kiểm tra thêm điểm 0, điểm 10, điểm sai bước 7.1 và thao tác Hủy.

Trả về đầy đủ mã nguồn của cả ba tệp, ghi rõ tên từng tệp và kết thúc bằng hướng dẫn mở Trang5_Hoang/index_trang5.html.