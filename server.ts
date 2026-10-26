import express from 'express';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// In-memory initial leads dataset for H&N operations coordinator
let leads = [
  {
    id: 'HN-2026-001',
    name: 'Nguyễn Thảo Linh',
    phone: '0905123456',
    email: 'thaolinh.dn@gmail.com',
    track: 'EduTrack',
    wave: 'Wave 01 - Nam Giang (Khởi hành 15/11/2026)',
    waveDate: '2026-11-15',
    status: 'Cần gọi ngay',
    note: 'Sinh viên Sư phạm Anh năm 3 ĐH Ngoại ngữ ĐN. Muốn dạy tiếng Anh phản xạ cho trẻ Cơ Tu, cần tư vấn lịch học trùng lặp.',
    university: 'ĐH Ngoại ngữ - ĐH Đà Nẵng',
    skills: 'IELTS 7.0, dạy học tương tác, guitar',
    createdAt: '2026-10-12T08:30:00Z',
    priority: 'Khẩn cấp'
  },
  {
    id: 'HN-2026-002',
    name: 'Trần Minh Quân',
    phone: '0988776655',
    email: 'quan.tran.ecotech@gmail.com',
    track: 'EcoTrack',
    wave: 'Wave 03 - Biển Đảo Xanh - Cù Lao Chàm (Khởi hành 05/12/2026)',
    waveDate: '2026-12-05',
    status: 'Đã liên hệ',
    note: 'Đam mê lặn biển và sinh thái biển. Có chứng chỉ lặn Open Water PADI, muốn hỗ trợ rạn san hô.',
    university: 'ĐH Bách Khoa ĐN',
    skills: 'Bơi lặn, làm phim tư liệu ngắn, sơ cấp cứu',
    createdAt: '2026-10-12T14:15:00Z',
    priority: 'Cao'
  },
  {
    id: 'HN-2026-003',
    name: 'Lê Hoàng Yến Vy',
    phone: '0935889900',
    email: 'yenvy.designer@gmail.com',
    track: 'HeritageTrack',
    wave: 'Wave 05 - Gốm & Thổ Cẩm Cơ Tu (Khởi hành 20/12/2026)',
    waveDate: '2026-12-20',
    status: 'Đã duyệt',
    note: 'Chuyên ngành Marketing & Graphic Design. Muốn số hóa câu chuyện nghệ nhân và dựng gian hàng TikTok Shop.',
    university: 'ĐH Kinh tế - ĐH Đà Nẵng',
    skills: 'Nhiếp ảnh sản phẩm, Canva/Photoshop, TikTok Shop setup',
    createdAt: '2026-10-11T19:00:00Z',
    priority: 'Trung bình'
  },
  {
    id: 'HN-2026-004',
    name: 'Phạm Đức Huy',
    phone: '0912345987',
    email: 'duchuy.it@gmail.com',
    track: 'EduTrack',
    wave: 'Wave 01 - Nam Giang (Khởi hành 15/11/2026)',
    waveDate: '2026-11-15',
    status: 'Cần gọi ngay',
    note: 'Cần tư vấn hợp đồng bảo hộ pháp lý 2 chiều gấp do phụ huynh muốn xem trước điều khoản bảo hiểm.',
    university: 'ĐH FPT Đà Nẵng',
    skills: 'Lập trình tin học cơ bản, thiết kế slide giảng dạy',
    createdAt: '2026-10-13T02:10:00Z',
    priority: 'Khẩn cấp'
  },
  {
    id: 'HN-2026-005',
    name: 'Hoàng Mai Phương',
    phone: '0977665544',
    email: 'maiphuong.biology@gmail.com',
    track: 'EcoTrack',
    wave: 'Wave 03 - Biển Đảo Xanh - Cù Lao Chàm (Khởi hành 05/12/2026)',
    waveDate: '2026-12-05',
    status: 'Đã liên hệ',
    note: 'Sinh viên Môi trường. Quan tâm đến chiến dịch phân loại rác nhựa và tour giáo dục dưới tán rừng.',
    university: 'ĐH Sư phạm - ĐH Đà Nẵng',
    skills: 'Nghiên cứu sinh thái, tổ chức trò chơi tập thể',
    createdAt: '2026-10-13T04:45:00Z',
    priority: 'Cao'
  }
];

// Calculate lead priority based on wave proximity and urgent note
function calculatePriority(waveDateStr: string, noteStr: string): string {
  const isUrgentNote = /gấp|khẩn|hợp đồng|phụ huynh|bảo hiểm|gọi ngay|sớm/i.test(noteStr);
  const waveTime = new Date(waveDateStr).getTime();
  const now = new Date('2026-10-13T05:44:00Z').getTime();
  const diffDays = Math.ceil((waveTime - now) / (1000 * 60 * 60 * 24));

  if (isUrgentNote || diffDays <= 35) {
    return 'Khẩn cấp';
  }
  if (diffDays <= 60) {
    return 'Cao';
  }
  return 'Trung bình';
}

const H_AND_N_SYSTEM_PROMPT = `
BẠN LÀ HỆ THỐNG TRÍ TUỆ NHÂN TẠO ĐIỀU HÀNH & TƯ VẤN CỦA "H&N - HỆ THỐNG ĐIỀU PHỐI DỊCH VỤ DU LỊCH TÌNH NGUYỆN NỘI ĐỊA KHU VỰC MIỀN TRUNG".

Khẩu hiệu thương hiệu: "It’s not 4 weeks in a life, it’s a life in 4 weeks” – Trải nghiệm bản địa, đọng lại giá trị.
Định vị cạnh tranh: Chuẩn mực quốc tế tối ưu chi phí & thời gian - Chi phí sinh viên - Pháp lý bảo hộ 2 chiều an toàn tuyệt đối.
Ngôn ngữ hỗ trợ: Song ngữ Tiếng Việt (VI) & English (EN). Tự động nhận diện ngôn ngữ của câu hỏi hoặc phản hồi theo ngôn ngữ được yêu cầu.

CƠ CẤU GÓI & GIÁ DỊCH VỤ:
1. Mức phí trọn gói (All-inclusive Fee): 2.790.000 VNĐ / EP / 30 ngày (tương đương ~93.000 VNĐ/ngày).
2. Thời lượng & Lịch làm việc: 30 ngày (4 tuần) trọn vẹn tại hiện trường; lịch làm việc 6h/ngày (Thứ Hai – Thứ Bảy; Chủ Nhật nghỉ).
3. Cơ chế hợp tác B2B2C MOU đôi bên cùng có lợi:
   - Đối tác địa phương (OPs): Tài trợ 100% chỗ ở an toàn (phòng riêng nam/nữ, an ninh, điện nước, mạng) và 03 bữa ăn/ngày.
   - Tình nguyện viên (EPs): Tự túc chi phí di chuyển (vé xe/tàu/máy bay) đến điểm tập kết trung tâm TP. Đà Nẵng. H&N bố trí xe hợp đồng đón/trả về điểm dự án.
   - Quyền lợi H&N chi trả trong gói 2.790.000 VNĐ:
     * Bảo hiểm tai nạn du lịch nội địa PVI / Bảo Việt (hạn mức 30.000.000 – 50.000.000 VNĐ/vụ).
     * Bộ Kit EP & Giáo cụ dự án (02 áo đồng phục, thẻ đeo, sổ tay TNV, tài liệu giảng dạy/truyền thông).
     * Đội ngũ Local Buddy thường trực hiện trường 24/7.
     * Hợp đồng dịch vụ bảo hộ pháp lý 2 chiều.
     * Chứng nhận Certificate of Social Leadership & Community Impact Certificate (4 phẩm chất: Self-Aware, Solution-Oriented, Empowering Others, World Citizen).

QUY MÔ, MẠNG LƯỚI ĐỐI TÁC & VẬN HÀNH 75 NGÀY:
- Quy mô mỗi đợt (Cohort): Giới hạn nghiêm ngặt từ 04 – 08 EPs/đợt để đảm bảo chiều sâu trải nghiệm và an toàn.
  * Điểm hòa vốn (BEP): 1.87 EPs (~02 EPs/đợt).
  * Ngưỡng xuất phát chuẩn: 06 – 08 EPs/đợt.
- Địa bàn & Đối tác chiến lược:
  * EduTrack (SDG 4): Hi-5 Home, Nature House, Funny English, Honey and Bee (Đà Nẵng, Hòa Vang, Thừa Thiên Huế).
  * EcoTrack (SDGs 14 & 15): Hestia Farm, D'hami Farm, Boro Campsite, Toom Sara, Ben Farmstay, Khu bảo tồn biển Cù Lao Chàm.
  * HeritageTrack (SDG 8): Làng gốm Thanh Hà, Làng rau Trà Quế, Hợp tác xã dệt thổ cẩm Cơ Tu, GoMee Collective, Làng nghề truyền thống Huế.
- Lịch trình theo mùa & Quản trị rủi ro thời tiết (SLA >= 50%):
  * Tháng 1 – Tháng 9 (Mùa khô): Chạy song song cả 3 Track với tần suất 02 đợt/tháng.
  * Tháng 10 – Tháng 12 (Mùa mưa bão miền Trung): DỪNG TOÀN BỘ tuyến biển đảo (Cù Lao Chàm, Lý Sơn); chuyển 100% công suất sang tuyến EduTrack và HeritageTrack số hóa trong nhà tại các đô thị kiên cố (Đà Nẵng, Tam Kỳ, Hội An).
- Vòng đời 75 ngày (5 giai đoạn):
  * T-45 đến T-30: Thẩm định đối tác 3 tầng & Ký MOU.
  * T-30 đến T-20: Mở đơn tuyển chọn & Phỏng vấn sàng lọc (Lead time duyệt hồ sơ <= 48h).
  * T-20 đến T-15: Ký hợp đồng pháp lý & Thu 100% phí dịch vụ (2.790.000 VNĐ).
  * T-07 đến D-Day: Hội thảo định hướng IPS & Mua bảo hiểm du lịch PVI/Bảo Việt.
  * D-Day đến Day 30: Thực thi dự án tại hiện trường (30 ngày; 6h/ngày; Mon–Sat) & Closing Showcase.

CHÍNH SÁCH HOÀN HỦY, BẢO LƯU & ĐỀN BÙ MINH BẠCH:
1. Lỗi từ phía H&N / OP vi phạm nghiêm trọng cam kết an toàn/chỗ ở: Hoàn 100% phí dịch vụ (2.790.000 VNĐ) + Bồi hoàn 10% chi phí chuẩn bị của EP (279.000 VNĐ) trong vòng 05 ngày làm việc.
2. Bất khả kháng (Thiên tai bão lũ cấp 3+, dịch bệnh, lý do y tế/gia đình khẩn cấp): Hoàn 80% phí dịch vụ (2.232.000 VNĐ) HOẶC bảo lưu 100% giá trị trong 12 tháng sang bất kỳ Wave nào khác.
3. EP tự ý hủy đơn vì lý do cá nhân:
   - Trước khởi hành >= 15 ngày: Hoàn 50% phí dịch vụ (1.395.000 VNĐ) HOẶC hỗ trợ chuyển nhượng suất cho ứng viên khác (phí hành chính 200.000 VNĐ).
   - Trong vòng 14 ngày trước khởi hành hoặc tự ý bỏ cuộc giữa chừng: Không hoàn phí (0%).

CƠ CHẾ PHẢN HỒI THEO 2 CHẾ ĐỘ:
1. KHI TƯƠNG TÁC VỚI KHÁCH HÀNG / ỨNG VIÊN (USER MODE):
- Giọng văn: Năng động, truyền cảm hứng, chuyên nghiệp, ấm áp. Có thể trả lời bằng Tiếng Việt hoặc English tùy theo ngôn ngữ câu hỏi của người dùng.
- Nhiệm vụ cốt lõi:
  * Giúp ứng viên định hướng chọn đúng Track dựa trên thế mạnh cá nhân.
  * Nhấn mạnh mức giá trọn gói 2.790.000 VNĐ (~93.000 VNĐ/ngày cho 30 ngày hiện trường), có hợp đồng bảo hộ pháp lý 2 chiều minh bạch, bảo hiểm PVI/Bảo Việt 30-50M, OP lo 100% ăn ở và chứng chỉ lãnh đạo quốc tế.
  * Kêu gọi hành động: Giữ slot đợt Wave (mỗi đợt chỉ 4-8 EPs để đảm bảo chiều sâu).

2. KHI TƯƠNG TÁC VỚI QUẢN TRỊ VIÊN / BAN ĐIỀU HÀNH (ADMIN MODE):
- Xuất dữ liệu theo bảng hoặc cấu trúc JSON chuẩn.
- Báo cáo chỉ số: BEP 1.87 EPs, ngưỡng xuất phát chuẩn 6-8 EPs, quy trình 75 ngày, SLA thời tiết mùa mưa bão.
`;

// Helper for local mock responses if Gemini API key is missing or quota limited
function generateFallbackResponse(userPrompt: string, mode: 'user' | 'admin', currentLeads: typeof leads) {
  const lower = userPrompt.toLowerCase();
  const isAdmin = mode === 'admin' || lower.includes('báo cáo') || lower.includes('thống kê') || lower.includes('phân tích') || lower.includes('admin') || lower.includes('danh sách');

  // Multi-language detection (Bilingual Vietnamese & English)
  const isEnglish = lower.includes('hello') || lower.includes('hi ') || lower.includes('fee') || lower.includes('cost') || lower.includes('track') || lower.includes('schedule') || lower.includes('price') || lower.includes('how much') || lower.includes('what is');

  if (isAdmin) {
    const total = currentLeads.length;
    const needCall = currentLeads.filter(l => l.status === 'Cần gọi ngay').length;
    const contacted = currentLeads.filter(l => l.status === 'Đã liên hệ').length;
    const approved = currentLeads.filter(l => l.status === 'Đã duyệt').length;
    const urgent = currentLeads.filter(l => l.priority === 'Khẩn cấp').length;

    const tableRows = currentLeads.map(l => 
      `| ${l.name} | ${l.phone} | ${l.email} | ${l.track} | ${l.wave.split(' - ')[0]} | ${l.status} | ${l.note.substring(0, 45)}... |`
    ).join('\n');

    return `### [BAN ĐIỀU PHỐI H&N] BÁO CÁO ĐIỀU HÀNH & VẬN HÀNH 75 NGÀY

**Chỉ số tài chính & tuyển sinh:**
- Mức phí dịch vụ niêm yết: **2.790.000 VNĐ / EP / 30 ngày** (~93.000 VNĐ/ngày)
- Điểm hòa vốn (BEP): **1.87 EPs/đợt** (~02 EPs). Ngưỡng xuất phát chuẩn: **06 – 08 EPs/đợt**.
- Tổng hồ sơ đã tiếp nhận: **${total} ứng viên**
- Cần gọi ngay (Ưu tiên <= 48h): **${needCall} đơn** (trong đó **${urgent} đơn** khẩn cấp)
- Đã liên hệ / Đang phỏng vấn: **${contacted} đơn**
- Đã duyệt & ký hợp đồng (Đã thu 2.790k): **${approved} đơn**

**Cảnh báo rủi ro thời tiết:** Hiện đang áp dụng chính sách SLA >= 50%. Các tuyến biển đảo Cù Lao Chàm / Lý Sơn được giám sát chặt chẽ; trong mùa mưa bão (T10 - T12) sẽ tự động chuyển 100% công suất sang tuyến EduTrack & HeritageTrack đô thị tại Đà Nẵng, Tam Kỳ và Hội An.

---

#### 1. DANH SÁCH ỨNG VIÊN THEO ĐỊNH DẠNG CHUẨN:

| Tên | SĐT/Zalo | Email | Gói Track | Đợt Wave | Trạng thái | Ghi chú nhu cầu |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
${tableRows}

---

#### 2. DỮ LIỆU ĐIỀU PHỐI JSON (CẤU TRÚC CHUẨN H&N):
\`\`\`json
${JSON.stringify(currentLeads.map(l => ({
  ten: l.name,
  sdt_zalo: l.phone,
  email: l.email,
  goi_track: l.track,
  dot_wave: l.wave,
  trang_thai: l.status,
  muc_uu_tien: l.priority,
  ghi_chu: l.note
})), null, 2)}
\`\`\`

---

#### 3. KHUYẾN NGHỊ ĐIỀU PHỐI:
1. Đảm bảo quy mô mỗi đợt nghiêm ngặt từ **04 - 08 EPs** để đảm bảo chất lượng và an toàn.
2. Với các đơn cần duyệt, hoàn tất phỏng vấn trong SLA <= 48h và hướng dẫn ký hợp đồng bảo hộ 2 chiều.`;
  }

  // User Mode - Bilingual Response (English or Vietnamese)
  if (isEnglish) {
    return `Hello! Welcome to **H&N Central Vietnam** 🌿
Our motto: *"It’s not 4 weeks in a life, it’s a life in 4 weeks”*.

✨ **Program Overview & All-inclusive Package:**
- **All-inclusive Fee:** **2,790,000 VNĐ / EP / 30 days** (~93,000 VNĐ/day).
- **Duration & Schedule:** 30 full days on-site; 6 hours/day (Monday – Saturday; Sunday off).
- **B2B2C MOU Structure:** Local Partners (OPs) sponsor 100% secure accommodation (separate male/female rooms, Wi-Fi) and 3 meals/day.
- **H&N Package Benefits:** PVI / Bao Viet travel accident insurance (coverage 30M–50M VNĐ/case), EP Kit (2 official t-shirts, badge, handbook), 24/7 on-site Local Buddy, legally binding contract, and **Certificate of Social Leadership** endorsing 4 core competencies (Self-Aware, Solution-Oriented, Empowering Others, World Citizen).
- **Cohort Size:** Strictly limited to 04–08 EPs/wave for maximum depth and safety.

Which track are you interested in: **EduTrack**, **EcoTrack**, or **HeritageTrack**? Leave your name, phone/WhatsApp, and desired wave to reserve your slot!`;
  }

  // Vietnamese User Mode
  if (lower.includes('chi phí') || lower.includes('giá') || lower.includes('bao nhiêu') || lower.includes('2.790') || lower.includes('2.490')) {
    return `Chào bạn! Rất vui được chia sẻ cùng bạn về chính sách quyền lợi và mức phí trọn gói tại **H&N Miền Trung**. 

Với mô hình hợp tác B2B2C đôi bên cùng có lợi, mức phí được chuẩn hóa trọn gói là **2.790.000 VNĐ / EP / 30 ngày** (tương đương **~93.000 VNĐ/ngày**), cam kết không phát sinh bất kỳ khoản phụ phí ẩn nào!

✨ **Cơ chế phân bổ quyền lợi rõ ràng:**
1. 🏡 **Đối tác địa phương (OPs) tài trợ 100%:** Chỗ ở an toàn (phòng riêng nam/nữ, an ninh, điện nước mạng) & 03 bữa ăn tiêu chuẩn mỗi ngày.
2. 🚌 **Xe hợp đồng đón/trả:** H&N bố trí xe hợp đồng đón/trả khép kín 2 chiều từ trung tâm TP. Đà Nẵng về tận điểm dự án.
3. 🛡️ **Bảo hiểm tai nạn du lịch nội địa PVI / Bảo Việt:** Hạn mức bảo vệ từ 30.000.000 – 50.000.000 VNĐ/vụ.
4. 🎒 **Bộ Kit EP & Giáo cụ:** 02 áo đồng phục H&N, thẻ đeo TNV bảo hộ, sổ tay Leader Diary và tài liệu giảng dạy/truyền thông.
5. 🤝 **Đội ngũ Local Buddy thường trực 24/7:** Đồng hành hướng dẫn văn hóa và an toàn mọi lúc mọi nơi.
6. ⚖️ **Hợp đồng dịch vụ bảo hộ pháp lý 2 chiều:** Minh bạch quyền lợi và chính sách hoàn hủy đền bù rõ ràng.
7. 📜 **Chứng nhận kép:** Certificate of Social Leadership & Community Impact Certificate ghi nhận 4 phẩm chất lãnh đạo (Self-Aware, Solution-Oriented, Empowering Others, World Citizen).

👉 Mỗi đợt Wave giới hạn nghiêm ngặt chỉ từ **04 – 08 EPs/đợt** để đảm bảo chiều sâu trải nghiệm. Bạn có thể để lại **Họ tên, SĐT/Zalo và Đợt Wave** dự kiến để mình hỗ trợ giữ slot sớm nhất nhé!`;
  }

  if (lower.includes('hoàn') || lower.includes('hủy') || lower.includes('đền bù') || lower.includes('bảo lưu')) {
    return `Chào bạn! H&N áp dụng chính sách **Hoàn hủy, Bảo lưu & Đền bù minh bạch 4 tầng** nhằm bảo vệ tối đa quyền lợi của EP:

1. **Lỗi từ phía H&N / OP vi phạm cam kết:** Hoàn **100% phí dịch vụ (2.790.000 VNĐ)** + Bồi hoàn **10% chi phí chuẩn bị (279.000 VNĐ)** trong vòng 05 ngày làm việc.
2. **Sự kiện Bất khả kháng (Thiên tai bão lũ cấp 3+, y tế/gia đình khẩn cấp):** Hoàn **80% (2.232.000 VNĐ)** HOẶC **bảo lưu 100% giá trị trong 12 tháng** sang bất kỳ Wave nào khác.
3. **EP tự ý hủy đơn trước >= 15 ngày:** Hoàn **50% (1.395.000 VNĐ)** HOẶC hỗ trợ **chuyển nhượng suất** cho người khác (phí hành chính 200.000 VNĐ).
4. **EP hủy trong vòng 14 ngày hoặc bỏ dở:** Không hoàn phí (0%), để bù đắp chi phí bảo hiểm đã kích hoạt, Kit EP và giữ chỗ với OP.`;
  }

  return `Chào bạn! Mình là Trí tuệ Nhân tạo Điều hành & Tư vấn của **H&N Miền Trung**. 🌿

Khẩu hiệu của chúng mình là: *"It’s not 4 weeks in a life, it’s a life in 4 weeks” – Trải nghiệm bản địa, đọng lại giá trị.*

Đến với H&N, bạn sẽ được trải nghiệm chương trình tình nguyện chuẩn quốc tế với mức phí sinh viên trọn gói **2.790.000 VNĐ / 30 ngày** (~93.000 VNĐ/ngày), lịch làm việc 6h/ngày (Thứ Hai – Thứ Bảy), đối tác địa phương tài trợ 100% ăn ở, bảo hiểm PVI/Bảo Việt (30M–50M), bảo hộ pháp lý 2 chiều an toàn tuyệt đối và Local Buddy đồng hành 24/7.

Hiện chúng mình đang mở đăng ký cho 3 gói:
- **EduTrack (SDG 4):** Hi-5 Home, Nature House, Funny English, Honey and Bee (Dạy Tiếng Anh phản xạ & Kỹ năng số)
- **EcoTrack (SDG 14 & 15):** Hestia Farm, Khu bảo tồn Cù Lao Chàm, Boro Campsite (Bảo tồn biển & Nông trại sinh thái)
- **HeritageTrack (SDG 8):** Làng gốm Thanh Hà, Làng rau Trà Quế, Dệt thổ cẩm Cơ Tu (Số hóa làng nghề & E-commerce)

Mỗi đợt chỉ tuyển từ 04 – 08 EPs để đảm bảo trải nghiệm tốt nhất. Bạn muốn mình tư vấn chọn Track phù hợp hay hỗ trợ thủ tục đăng ký giữ slot? Cứ nhắn cho mình nhé!`;
}

// API endpoint for Leads
app.get('/api/leads', (_req, res) => {
  res.json({ success: true, leads });
});

// Dedicated Applicant Tracking Endpoint (Search by phone or application ID)
app.get('/api/leads/track', (req, res) => {
  const rawQ = String(req.query.q || '').trim();
  if (!rawQ) {
    res.status(400).json({ success: false, message: 'Vui lòng nhập Số điện thoại hoặc Mã hồ sơ.' });
    return;
  }

  const cleanQuery = rawQ.toLowerCase().replace(/[\s.-]/g, '');
  
  const matched = leads.find((l) => {
    const cleanId = l.id.toLowerCase().replace(/[\s.-]/g, '');
    const cleanPhone = l.phone.toLowerCase().replace(/[\s.-]/g, '');
    return (
      cleanId === cleanQuery ||
      cleanPhone === cleanQuery ||
      cleanPhone.endsWith(cleanQuery) ||
      (cleanQuery.length >= 7 && (cleanPhone.includes(cleanQuery) || cleanId.includes(cleanQuery)))
    );
  });

  if (!matched) {
    res.status(404).json({
      success: false,
      message: 'Không tìm thấy hồ sơ với thông tin "' + rawQ + '". Vui lòng kiểm tra lại số điện thoại hoặc mã đơn.'
    });
    return;
  }

  res.json({ success: true, lead: matched });
});

app.post('/api/leads', (req, res) => {
  const { name, phone, email, track, wave, waveDate, note, university, skills } = req.body;
  if (!name || !phone || !email || !track || !wave) {
    res.status(400).json({ success: false, message: 'Vui lòng cung cấp đầy đủ thông tin bắt buộc.' });
    return;
  }

  const newId = `HN-2026-00${leads.length + 1}`;
  const priority = calculatePriority(waveDate || '2026-12-01', note || '');

  const newLead = {
    id: newId,
    name,
    phone,
    email,
    track,
    wave,
    waveDate: waveDate || '2026-12-01',
    status: 'Cần gọi ngay',
    note: note || 'Đăng ký trực tiếp qua cổng thông tin trực tuyến.',
    university: university || 'Chưa cập nhật',
    skills: skills || 'Chưa cập nhật',
    createdAt: new Date().toISOString(),
    priority
  };

  leads.unshift(newLead);
  res.status(201).json({ success: true, lead: newLead, message: 'Đăng ký thành công! Ban điều phối sẽ liên hệ trong 24h.' });
});

app.patch('/api/leads/:id', (req, res) => {
  const { id } = req.params;
  const { status, note, priority } = req.body;
  const lead = leads.find(l => l.id === id);
  if (!lead) {
    res.status(404).json({ success: false, message: 'Không tìm thấy hồ sơ.' });
    return;
  }

  if (status) lead.status = status;
  if (note !== undefined) lead.note = note;
  if (priority) lead.priority = priority;

  res.json({ success: true, lead });
});

// AI Chatbot Endpoint
const chatHandler = async (req: any, res: any) => {
  const { messages, prompt, mode = 'user' } = req.body;
  const userMessage = prompt || (messages && messages.length > 0 ? messages[messages.length - 1].content : '');

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
    // Graceful fallback with rich authentic knowledge base
    const fallbackText = generateFallbackResponse(userMessage, mode, leads);
    res.json({ reply: fallbackText });
    return;
  }

  try {
    const ai = new GoogleGenAI({ apiKey: apiKey });
    // Build conversation context
    const conversationHistory = (messages || []).map((m: any) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }]
    }));

    if (conversationHistory.length === 0 && userMessage) {
      conversationHistory.push({
        role: 'user',
        parts: [{ text: userMessage }]
      });
    }

    // Inject current leads context if in admin mode or asking for reports
    const extraAdminContext = mode === 'admin' 
      ? `\n\n[DỮ LIỆU HIỆN TẠI TỪ DATABASE CỦA H&N]:\n${JSON.stringify(leads, null, 2)}`
      : '';

    const systemInstruction = H_AND_N_SYSTEM_PROMPT + extraAdminContext;

    const timeoutPromise = new Promise<never>((_, reject) => 
      setTimeout(() => reject(new Error('Gemini API timeout')), 6000)
    );

    const generatePromise = ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: conversationHistory,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    const response = await Promise.race([generatePromise, timeoutPromise]);
    const reply = response.text || generateFallbackResponse(userMessage, mode, leads);
    res.json({ reply });
  } catch (error: any) {
    console.warn('Gemini generate fallback used:', error?.message || error);
    const fallbackText = generateFallbackResponse(userMessage, mode, leads);
    res.json({ reply: fallbackText });
  }
};

app.post('/api/chat', chatHandler);
app.post('/api/ai/advisor', chatHandler);

// Vite Middleware Integration for Development / Production
async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });
}

startServer();
