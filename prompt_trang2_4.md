# Prompt Trang 2 – Tiến độ nộp đồ án

Bạn là lập trình viên Front-end. Hãy tạo Trang 2 của Cường cho website DeadLine Hub, đề 2.1.4 «Quản lý Đồ án & Tiến độ Báo cáo». Sinh viên mở trang này để biết đã nộp gì, còn bao lâu đến hạn và cần nộp gì tiếp theo.

## Đầu ra

Tạo đúng ba tệp trong thư mục `Trang 2/`: `index_trang2.html`, `style.css`, `script.js`. Nếu trả lời bằng văn bản, xuất đầy đủ ba khối mã và ghi đúng tên tệp. Menu «Điểm & nhận xét» dẫn tới `../Trang 4/index_trang4.html`.

## Giao diện và dữ liệu

Dùng HTML5, CSS3 và JavaScript thuần. Viết giao diện bằng tiếng Việt cho sinh viên. Thanh điều hướng có logo DeadLine Hub bên trái, menu ngang trên máy tính và menu thu gọn trên điện thoại. Đặt nút sáng/tối hình tròn trước thông tin sinh viên. Vẽ trăng khuyết và mặt trời bằng nét trắng. Khi rê chuột, nút nhấc nhẹ và viền sáng lên. Hỗ trợ bàn phím và chế độ giảm chuyển động. Lưu lựa chọn giao diện vào localStorage với khóa `pm_theme`.

Dùng xanh thương hiệu `#00008B`. Trong chế độ tối, dùng nền `#0B1020`, nền thẻ `#141D33`, navbar `#0D1538`, viền `#293754`, nền nhấn phụ `#1E2B4D`, chữ chính `#F1F5F9`, chữ phụ `#A8B4C7`, tiêu đề và số liệu `#60A5FA`. Nút đang chọn dùng `#2563EB`, khi rê dùng `#1D4ED8`. Trạng thái đã nộp dùng `#4ADE80` trên `rgba(22,163,74,.2)`, chưa nộp dùng `#FBBF24` trên `rgba(217,119,6,.22)`, trễ hạn dùng `#F87171` trên `rgba(220,38,38,.22)`. Luôn ghi rõ trạng thái bằng chữ.

Đọc dữ liệu nhóm từ `pm_user`, `pm_students` và `pm_milestones`. Mỗi mốc có `id, name, deadline, tasks`; mỗi sinh viên có `id, submissions, grades`. Chỉ khởi tạo dữ liệu mẫu khi chưa có dữ liệu. Dùng bốn mốc: Đăng ký đề tài, Nộp đề cương, Báo cáo tiến độ, Nộp đồ án hoàn chỉnh. Nội dung minh họa là đề tài khảo sát thói quen tự học của sinh viên.

## Chức năng phải hoàn thành

1. Dựng timeline theo cấu trúc `ol.timeline > li > article > header`. Mỗi mốc hiển thị tên, hạn nộp trong thẻ `time` có `datetime`, trạng thái và nút «Nộp bài» hoặc «Nộp lại». Dùng CSS `::before` và `::after` vẽ đường nối và điểm mốc.
2. Phân loại theo lần nộp mới nhất. Nộp trước hoặc đúng hạn là «Đã nộp». Chưa nộp và còn hạn là «Chưa nộp». Nộp sau hạn hoặc quá hạn mà chưa nộp là «Trễ hạn». Cho phép lọc theo cả ba trạng thái hoặc xem tất cả. Khi danh sách rỗng, hiển thị thông báo phù hợp.
3. Tính tiến độ theo số mốc riêng biệt đã nộp. Với bài đã nộp, hiện thời điểm và liên kết bài mới nhất. Với bài chưa nộp còn hạn, hiện thời gian còn lại theo ngày, giờ, phút, giây. Đồng hồ lớn chọn hạn gần nhất trong những bài còn phải nộp. Hai đồng hồ dùng cùng thời điểm và cách làm tròn. Khi hết giờ, tự đổi trạng thái và chọn hạn kế tiếp. Dùng gradient đồng hồ từ `#0D1A52` đến `#172B78`; thanh tiến độ từ `#60A5FA` đến `#2563EB`.
4. Trong bản ghép, bấm nộp sẽ chuyển sang `../Trang3_Hieu/index.html?moc=<id>`. Khi chạy riêng hai trang của Cường, dùng hộp thoại nhận liên kết HTTP/HTTPS, báo lỗi ngay tại ô nhập và lưu lần nộp mới gồm `milestoneId, link, date, note`. Giữ lịch sử khi nộp lại.
5. Tạo thẻ lật cho từng mốc để sinh viên xem yêu cầu. Hỗ trợ nhấp chuột, Enter, Space và thông báo trạng thái lật cho trình đọc màn hình. Nếu có tài liệu minh họa, đặt nội dung trong ba tệp đã yêu cầu.

## Kiểm tra trước khi trả mã

Với sinh viên đã nộp mốc 1 và 2, tiến độ phải là 2/4, tương ứng 50%. Nộp lại mốc 2 vẫn là 50%; nộp lần đầu mốc 3 phải lên 75%. Thử thêm trường hợp đã nộp đủ, bộ lọc rỗng, liên kết sai và đồng hồ vừa qua hạn. Kiểm tra bố cục trên điện thoại và máy tính.

---

# Prompt Trang 4 – Điểm và nhận xét

Bạn là lập trình viên Front-end. Hãy tạo Trang 4 của Cường cho website DeadLine Hub, đề 2.1.4 «Quản lý Đồ án & Tiến độ Báo cáo». Sinh viên mở trang này để biết giảng viên đã chấm mốc nào, chấm lần nộp nào và yêu cầu sửa gì.

## Đầu ra

Tạo đúng ba tệp trong thư mục `Trang 4/`: `index_trang4.html`, `style.css`, `script.js`. Nếu trả lời bằng văn bản, xuất đầy đủ ba khối mã và ghi đúng tên tệp. Menu «Tiến độ nộp bài» dẫn tới `../Trang 2/index_trang2.html`.

## Giao diện và dữ liệu

Dùng HTML5, CSS3 và JavaScript thuần. Viết giao diện bằng tiếng Việt cho sinh viên. Thanh điều hướng có logo DeadLine Hub bên trái, menu ngang trên máy tính và menu thu gọn trên điện thoại. Đặt nút sáng/tối hình tròn trước thông tin sinh viên. Vẽ trăng khuyết và mặt trời bằng nét trắng. Khi rê chuột, nút nhấc nhẹ và viền sáng lên. Hỗ trợ bàn phím và chế độ giảm chuyển động. Lưu lựa chọn giao diện vào localStorage với khóa `pm_theme`.

Dùng xanh thương hiệu `#00008B`. Trong chế độ tối, dùng nền `#0B1020`, nền thẻ `#141D33`, navbar `#0D1538`, viền `#293754`, nền nhấn phụ `#1E2B4D`, chữ chính `#F1F5F9`, chữ phụ `#A8B4C7`, tiêu đề và số liệu `#60A5FA`. Nút đang chọn dùng `#2563EB`, khi rê dùng `#1D4ED8`. Trạng thái đã nộp dùng `#4ADE80` trên `rgba(22,163,74,.2)`, chưa nộp dùng `#FBBF24` trên `rgba(217,119,6,.22)`, trễ hạn dùng `#F87171` trên `rgba(220,38,38,.22)`. Luôn ghi rõ trạng thái bằng chữ.

Đọc dữ liệu nhóm từ `pm_user`, `pm_students` và `pm_milestones`. Mỗi mốc có `id, name, deadline, tasks`; mỗi sinh viên có `id, submissions, grades`. Chỉ khởi tạo dữ liệu mẫu khi chưa có dữ liệu. Dùng bốn mốc: Đăng ký đề tài, Nộp đề cương, Báo cáo tiến độ, Nộp đồ án hoàn chỉnh. Nội dung minh họa là đề tài khảo sát thói quen tự học của sinh viên.

## Chức năng phải hoàn thành

1. Hiển thị bốn số liệu của sinh viên đang xem: điểm trung bình, số mốc đã chấm, số mốc đã nộp và số mốc trễ hạn. Tính điểm trung bình từ các mốc đã chấm và làm tròn một chữ số thập phân. Giữ nguyên độ chính xác của từng điểm thành phần và hiển thị dấu phẩy thập phân tiếng Việt.
2. Tạo một thẻ cho mỗi mốc. Mặt trước có tên mốc, điểm và trạng thái nộp; mặt sau có nhận xét. Nếu chưa chấm, hiện «Chưa chấm». Nếu chưa có bài, hiện «Chưa có bài nộp». Gradient mặt sau trong chế độ tối đi từ `#12215C` đến `#0C153A`. Thẻ lật được bằng chuột, Enter hoặc Space; cập nhật trạng thái tiếp cận và ẩn mặt khuất khỏi trình đọc màn hình.
3. Bên dưới các thẻ, tạo bảng có STT, mốc báo cáo, trạng thái, điểm và nhận xét; dòng cuối là điểm trung bình. Dùng cùng nguồn dữ liệu cho bảng và thẻ. Trên điện thoại, cho phép cuộn ngang riêng trong vùng bảng.
4. Đối chiếu `grades[milestoneId].submissionDate` với `date` của từng lần nộp để xác định bản đã chấm. Nếu lần 1 đã có điểm và lần 2 đang chờ, hiển thị cả hai trạng thái. Nếu lần 2 đã chấm, hiển thị điểm lần 2 và cho xem điểm, nhận xét cũ khi lần nộp trước có `mark`. Với dữ liệu cũ có nhiều lần nộp nhưng thiếu thông tin liên kết điểm, ghi rõ chưa xác định được lần đã chấm. Hiển thị nhận xét dưới dạng văn bản an toàn.
5. Đây là trang xem kết quả dành cho sinh viên. Phần nhập điểm thuộc trang giảng viên. Đọc kết quả đã lưu để dữ liệu hai vai trò thống nhất.

## Kiểm tra trước khi trả mã

Thử các điểm 0, 8,25 và 8,75. Với một điểm 8,5 và ba mốc chưa chấm, trung bình phải là 8,5. Thử luồng lần 1 được 8,25 → nộp lại → lần 2 được 8,75; kiểm tra nhãn lần nộp, điểm và nhận xét tương ứng. Kiểm tra chế độ tối sau khi tải lại và khi chuyển về Trang 2.
