import styles from "./styles.module.scss";

const html = `
<p>Với chủ đề tập trung về sự bay bổng, Milan Design Week 2022 mang đến nhiều cảm hứng thiết kế nội thất mới đáng để học hỏi. Bằng cách sử dụng chất liệu cao cấp mềm mại, những món đồ trở nên thanh thoát và bắt mắt, dễ nhìn hơn. Nếu muốn thay đổi, nâng cấp không gian sống đơn điệu theo phong cách bay bổng, lãng mạn và mộng mơ, hãy học hỏi những xu hướng thiết kế mới tại Milan Design Week 2022 qua bài viết dưới đây!</p>
<h2>Chủ Đề Về “Sự Bay Bổng” tại Milan Design Week 2022</h2>
<img src="/wallpaper.jpg" alt="Image" />
<p>Quay trở lại sau thời gian dịch bệnh, Milan Design Week 2022 nảy lên ý tưởng giới thiệu các sản phẩm theo chủ đề “sự bay bổng”.</p>
<br />
<p>Muốn làm nổi bật nội dung chính, Hermes đã sử dụng chất liệu mềm mại che giấu đi những nét thô cứng, đơn điệu của các món đồ. Những sản phẩm như ghế mây đan, khăn trải bàn có họa tiết đặc sắc được tận dụng và khai thác triệt để.</p>
<p>Trong hành trình phác họa sự bay bổng, Hermes còn thiết kế thành 4 không gian trưng bày khác nhau để hóa thân thành những vật dụng thân thuộc trong cuộc sống. Ấn tượng nhất là công trình tháp nước làm từ gỗ và giấy màu. Sự kết hợp này mang đến một không gian nhiều màu sắc, mở ra thế giới quan rộng mở để các nghệ sĩ thỏa sức sáng tạo, mộng mơ.</p>
<br />
<p>Với sự kiện lớn như Milan Design Week 2022, Hermes không quên quảng bá thương hiệu bằng cách thể hiện 3 kỹ thuật chế tác cashmere độc quyền. Những miếng vá đắp, thêu sọc kẻ nối và phân đoạn được phô diễn điêu nghệ qua các món đồ nội thất. Toàn bộ quá trình thêu dệt, nhuộm đều là thủ công càng toát lên giá trị, sự tinh tế của từng sản phẩm.</p>
<h2>Những Xu Hướng Thiết Kế Nội Thất Mới Tại Milan Design Week 2022 Nên Học Hỏi</h2>
<p>Tuần Lễ Thiết Kế Milan 2022 năm nay là một sự kiện thành công với rất nhiều sản phẩm độc đáo. Chương trình cũng là bước đệm, tạo ra những xu hướng thiết kế nội thất mới lạ cho thị trường Việt Nam và quốc tế. Qua quá trình theo dõi, tìm hiểu, VDBC đã tổng hợp một số điểm nhấn đặc biệt như:</p>
`;
export default function _View() {
  return (
    <div className={styles.container}>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    </div>
  );
}
