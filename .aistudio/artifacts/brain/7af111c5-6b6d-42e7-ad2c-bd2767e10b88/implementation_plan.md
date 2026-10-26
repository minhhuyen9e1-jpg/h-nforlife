# Tra Cứu & Theo Dõi Tiến Trình Hồ Sơ Tình Nguyện Viên H&N

Hệ thống cho phép người đăng ký chủ động tra cứu tình trạng hồ sơ / vé của mình bằng Số điện thoại (Zalo) hoặc Mã hồ sơ, theo dõi thời gian phản hồi từ ban điều phối và mở khóa xem lịch trình chi tiết 4 tuần thực chiến sau khi được xác nhận.

## User Review & Critical Decisions

> [!IMPORTANT]
> **Các quyết định đã được xác nhận từ người dùng qua phỏng vấn:**
> 1. **Phương thức tra cứu:** Tra cứu nhanh chóng bằng **Số điện thoại** hoặc **Mã hồ sơ** (không bắt buộc tạo tài khoản mật khẩu rườm rà, phù hợp trải nghiệm sinh viên).
> 2. **Lộ trình hiển thị sau xác nhận:** Hiển thị **Lịch trình 4 tuần chi tiết**, kèm **Điểm đón xe 29 chỗ** tại Đà Nẵng và danh bạ **Local Buddy 24/7** cùng hotline hỗ trợ khẩn cấp.
> 3. **Tích hợp thanh Header & Modal:** Bổ sung nút "Tra Cứu Hồ Sơ" trực quan trên thanh Menu Header và mở rộng màn hình hoàn tất sau khi nộp đơn để người dùng có thể tra cứu ngay lập tức.

---

## 1. Overview & Core Concept

- **Mục tiêu:** Xóa bỏ sự mơ hồ cho tình nguyện viên sau khi đăng ký, tạo sự tin cậy tuyệt đối (đúng định vị thương hiệu: pháp lý bảo hộ 2 chiều, chu đáo chuẩn quốc tế).
- **Đối tượng:** Ứng viên sinh viên (18–24 tuổi) đã nộp đơn đăng ký tham gia các Wave thuộc EduTrack, EcoTrack, hoặc HeritageTrack.
- **Tiến trình 4 bước chuẩn minh bạch:**
  1. **Bước 1: Tiếp nhận hồ sơ** — Mã hồ sơ được sinh tự động (ví dụ: `HN-2026-001`), hiển thị thời gian nộp đơn chính xác.
  2. **Bước 2: Ban điều phối xử lý (Cam kết trong 24h)** — Trạng thái đếm ngược hoặc thông báo thời gian điều phối viên gọi Zalo phỏng vấn định hướng.
  3. **Bước 3: Đã liên hệ & Phỏng vấn thành công** — Xác nhận giữ slot chính thức, mở khóa xem Lịch trình chi tiết 4 tuần, điểm tập kết xe 29 chỗ và Local Buddy phụ trách.
  4. **Bước 4: Ký hợp đồng điện tử 2 chiều & Kích hoạt bảo hiểm** — Đảm bảo pháp lý an toàn tuyệt đối trước ngày khởi hành.

---

## 2. User Experience & Visual Design

### 2.1. Điểm Chạm Giao Diện (User Touchpoints)
1. **Nút "Tra Cứu Hồ Sơ" trên Header:** Nằm ở vị trí trực quan cạnh nút "Đăng Ký Slot", giúp người dùng tra cứu bất kỳ lúc nào.
2. **Modal Tra Cứu Nhanh (Tracking Modal):**
   - Ô nhập tìm kiếm linh hoạt: Cho phép nhập Số điện thoại (ví dụ: `0905123456`) hoặc Mã hồ sơ (ví dụ: `HN-2026-001`).
   - Gợi ý sẵn các hồ sơ mẫu để người dùng thử nghiệm tính năng ngay lập tức.
3. **Thẻ Tiến Trình Tình Trạng (Status Stepper):**
   - Thanh tiến độ 4 mốc (Đã gửi đơn → Đang xử lý / Chờ gọi → Đã xác nhận → Hoàn tất ký HĐ).
   - Màu sắc nhận diện trạng thái:
     - *Chờ gọi (Cần gọi ngay):* Màu xanh da trời + biểu tượng đồng hồ đếm ngược 24h.
     - *Đã liên hệ:* Màu xanh lục ngọc + nhãn "Đã phỏng vấn xác nhận".
     - *Đã duyệt:* Huy hiệu bảo hộ pháp lý + link tải mẫu hợp đồng.
4. **Khu Vực Lịch Trình Chi Tiết 4 Tuần (Được mở khóa sau khi xác nhận):**
   - **Thông tin đón xe:** Điểm tập kết xe khách 29 chỗ tại Trung tâm TP. Đà Nẵng (Giờ xuất bến, bác tài, hotline).
   - **Lịch trình tuần 1 - Tuần 4:** Phân bổ chuẩn 65% cống hiến chuyên môn & 35% giao lưu văn hóa/chữa lành cho Wave cụ thể.
   - **Local Buddy 24/7:** Tên, chức danh và số Zalo liên hệ của người bản địa đồng hành.

---

## 3. Key Product Decisions & Trade-Offs

- **Tra cứu không cần đăng nhập tài khoản (Zero-friction Lookup):**
  - *Lựa chọn:* Tra cứu trực tiếp theo SĐT/Mã đơn thay vì yêu cầu tạo tài khoản mật khẩu.
  - *Lý do:* Thân thiện tối đa với sinh viên, trải nghiệm nhanh gọn tương tự tra cứu mã vận đơn hoặc mã đặt vé máy bay/tàu xe.
- **Lưu trữ dữ liệu đồng bộ (Client & Server):**
  - *Lựa chọn:* Khi người dùng đăng ký mới, hệ thống tự động lưu vào state và gửi lên `/api/leads` của máy chủ. Cả hồ sơ nộp mới và hồ sơ có sẵn trong hệ thống đều tra cứu được ngay lập tức.
- **Tự động lưu mã hồ sơ cục bộ (Recent Search Memory):**
  - Lưu mã hồ sơ vừa đăng ký vào `localStorage` để khi bấm nút "Tra Cứu Hồ Sơ", hệ thống tự động điền sẵn và hiển thị kết quả mà không cần gõ lại.

---

## 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────────────────────┐
│                        H&N MIỀN TRUNG - TRACKING FLOW                  │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
       ┌────────────────────────────┴───────────────────────────┐
       ▼                                                        ▼
┌───────────────────────────────┐              ┌───────────────────────────────┐
│     Header / Post-Register    │              │       Coordinator Portal      │
│     [Nút Tra Cứu Hồ Sơ]       │              │    (Cập nhật trạng thái lead) │
└──────────────┬────────────────┘              └───────────────┬───────────────┘
               │                                               │
               ▼                                               ▼
┌───────────────────────────────┐              ┌───────────────────────────────┐
│     TrackingModal.tsx         │◄────────────►│       /api/leads (GET)        │
│  - Input: Phone / Lead ID     │              │     (Tra cứu & đồng bộ trạng  │
│  - Timeline 4 Giai Đoạn       │              │      thái thời gian thực)     │
│  - Chi Tiết Lịch Trình 4 Tuần │              └───────────────────────────────┘
│  - Điểm Đón Xe & Local Buddy  │
└───────────────────────────────┘
```

### 4.1. Cấu Trúc Dữ Liệu Bổ Sung (`LeadTrackingDetails`)
Bổ sung trường dữ liệu chi tiết cho đợt Wave của hồ sơ khi được xác nhận:
- `pickupLocation`: Điểm đón xe 29 chỗ (ví dụ: Ga Đà Nẵng / Đại học Đà Nẵng).
- `pickupTime`: Giờ tập trung khởi hành.
- `localBuddies`: Danh sách người đồng hành bản địa kèm chức vụ.
- `weekByWeekPlan`: Lịch trình 4 tuần chi tiết (Tuần 1: Nhập môn & First Day of Work; Tuần 2-3: Cống hiến 65%; Tuần 4: Debrief Space & Bàn giao).

### 4.2. Các Thành Phần Code Cần Triển Khai
1. **`src/components/TrackingModal.tsx`**: Component modal tra cứu chuyên dụng với giao diện tra cứu nhanh, thanh tiến độ 4 bước và tab Lịch trình chi tiết 4 tuần.
2. **`src/components/Header.tsx`**: Bổ sung nút **"Tra Cứu Hồ Sơ"** với icon tra cứu bên cạnh nút Đăng ký.
3. **`src/components/RegistrationModal.tsx`**: Sau khi đăng ký thành công, hiển thị nút **"Xem Tiến Trình Hồ Sơ Ngay"** chuyển thẳng sang modal tra cứu với mã vừa tạo.
4. **`src/App.tsx`**: Quản lý state mở/đóng modal tra cứu và truyền dữ liệu hồ sơ liên kết.
5. **Kiểm thử biên dịch:** Chạy `compile_applet` và `lint_applet` để đảm bảo hệ thống build ổn định 100%.
