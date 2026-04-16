const express = require("express");

const app = express();

// Middleware giúp đọc dữ liệu JSON mà Zalo gửi về
app.use(express.json());

// Đây là đường dẫn Webhook bạn sẽ điền vào Zalo Mini App Dashboard
app.post("/webhook", (req, res) => {
  console.log("=== NHẬN ĐƯỢC THÔNG BÁO TỪ ZALO ===");
  console.log("Dữ liệu chi tiết:", req.body);

  // Ở đây bạn có thể viết code để:
  // - Lưu dữ liệu vào Database
  // - Bắn thông báo nội bộ
  // - Cập nhật trạng thái đơn hàng...

  // BẮT BUỘC: Phải trả về status 200 để Zalo biết bạn đã nhận thành công,
  // nếu không Zalo sẽ tưởng lỗi và gửi lại liên tục.
  res.status(200).send("OK");
});

// Một đường dẫn kiểm tra xem server có đang chạy không (khi bạn mở bằng trình duyệt)
app.get("/", (req, res) => {
  res.send("Máy chủ Webhook Zalo đang hoạt động tốt!");
});

// Render sẽ tự động gán PORT, nếu chạy ở máy tính thì dùng port 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server đang chạy tại Port: ${PORT}`);
});
