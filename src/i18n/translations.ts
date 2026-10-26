export interface TranslationDictionary {
  header: {
    brandName: string;
    navTracks: string;
    navPricing: string;
    navWaves: string;
    navAi: string;
    btnTracking: string;
    btnAdmin: string;
    btnApply: string;
  };
  hero: {
    kicker: string;
    slogan: string;
    subSlogan: string;
    description: string;
    bullet1: string;
    bullet2: string;
    bullet3: string;
    bullet4: string;
    btnApply: string;
    btnQuiz: string;
    btnAi: string;
    badgeCohort: string;
    hubBadge: string;
    statPrice: string;
    statPriceSub: string;
    statRatio: string;
    statRatioSub: string;
    statHours: string;
    statHoursSub: string;
    statCohort: string;
    statCohortSub: string;
  };
  tracks: {
    kicker: string;
    title: string;
    subtitle: string;
    btnQuiz: string;
    cohortTag: string;
    btnApplyTrack: string;
    edu: {
      name: string;
      tagline: string;
      desc: string;
      tasks: string[];
      ideal: string[];
      deliverables: string[];
    };
    eco: {
      name: string;
      tagline: string;
      desc: string;
      tasks: string[];
      ideal: string[];
      deliverables: string[];
    };
    heritage: {
      name: string;
      tagline: string;
      desc: string;
      tasks: string[];
      ideal: string[];
      deliverables: string[];
    };
    titles: {
      tasks: string;
      ideal: string;
      deliverables: string;
      waves: string;
    };
  };
  pricing: {
    kicker: string;
    title: string;
    subtitle: string;
    mouTitle: string;
    opsTitle: string;
    opsItem1: string;
    opsItem2: string;
    hnTitle: string;
    hnItem1: string;
    hnItem2: string;
    hnItem3: string;
    hnItem4: string;
    epTitle: string;
    epItem1: string;
    epItem2: string;
    epItem3: string;
    feeTitle: string;
    feeDaily: string;
    feeSchedule: string;
    btnViewContract: string;
    btnViewCert: string;
    inclusionsTitle: string;
    inclusions: { title: string; desc: string }[];
    cohortNote: string;
    btnRegisterSlot: string;
    pipelineKicker: string;
    pipelineTitle: string;
    phases: { phase: string; duration: string; title: string; description: string }[];
    weatherTitle: string;
    weatherDesc: string;
    cancellationKicker: string;
    cancellationTitle: string;
    cancellationTag: string;
    cancelTiers: {
      t1Title: string;
      t1Desc: string;
      t1Rate: string;
      t1Time: string;
      t2Title: string;
      t2Desc: string;
      t2Rate: string;
      t2Time: string;
      t3Title: string;
      t3Desc: string;
      t3Rate: string;
      t3Time: string;
      t4Title: string;
      t4Desc: string;
      t4Rate: string;
      t4Time: string;
    };
  };
  waves: {
    kicker: string;
    title: string;
    subtitle: string;
    tagPill: string;
    filterAll: string;
    departureLabel: string;
    buddyLabel: string;
    slotsRegistered: string;
    slotsRemaining: string;
    slotsFull: string;
    btnApplyWave: string;
  };
  advisor: {
    kicker: string;
    title: string;
    subtitle: string;
    botRole: string;
    onlineStatus: string;
    userModeSubtitle: string;
    adminModeSubtitle: string;
    tabUser: string;
    tabAdmin: string;
    suggestLabel: string;
    inputPlaceholder: string;
    btnSend: string;
    loadingText: string;
    copySuccess: string;
    btnHoldSlot: string;
  };
  modals: {
    contract: {
      headerKicker: string;
      headerTitle: string;
      headerSub: string;
      footerNote: string;
      btnClose: string;
    };
    cert: {
      headerKicker: string;
      headerTitle: string;
      certSubtitle: string;
      certCertifies: string;
      certNamePlaceholder: string;
      certBody: string;
      q1: string;
      q2: string;
      q3: string;
      q4: string;
      btnClose: string;
    };
    register: {
      kicker: string;
      title: string;
      subtitle: string;
      labelName: string;
      labelPhone: string;
      labelEmail: string;
      labelTrack: string;
      labelWave: string;
      labelMajor: string;
      labelNotes: string;
      placeholderName: string;
      placeholderPhone: string;
      placeholderEmail: string;
      placeholderMajor: string;
      placeholderNotes: string;
      reassurance: string;
      btnCancel: string;
      btnSubmit: string;
      submitting: string;
      successTitle: string;
      successDesc: string;
      successTrackingNote: string;
      btnTrackNow: string;
      btnClose: string;
    };
    tracking: {
      title: string;
      subtitle: string;
      inputPlaceholder: string;
      btnSearch: string;
      tabStatus: string;
      tabItinerary: string;
      tabLogistics: string;
      stage1: string;
      stage2: string;
      stage3: string;
      stage4: string;
      notFoundTitle: string;
      notFoundDesc: string;
      btnCallHotline: string;
    };
    quiz: {
      title: string;
      subtitle: string;
      stepIndicator: string;
      btnBack: string;
      btnNext: string;
      btnSeeResult: string;
      resultTitle: string;
      btnChooseThis: string;
      btnRestart: string;
    };
  };
  footer: {
    desc: string;
    col1Title: string;
    col2Title: string;
    col3Title: string;
    trackingLink: string;
    rights: string;
  };
}

export const translations: Record<'vi' | 'en' | 'fr', TranslationDictionary> = {
  // ==========================================
  // TIẾNG VIỆT (VI)
  // ==========================================
  vi: {
    header: {
      brandName: 'H&N Miền Trung',
      navTracks: 'Gói Dịch Vụ',
      navPricing: 'Quyền Lợi (2.790k)',
      navWaves: 'Lịch Các Wave',
      navAi: 'Tư Vấn AI 24/7',
      btnTracking: 'Tra Cứu Vé',
      btnAdmin: 'Quản Trị',
      btnApply: 'Đăng Ký Slot (2.790k)',
    },
    hero: {
      kicker: 'Hệ thống điều phối du lịch tình nguyện nội địa · Khu vực Miền Trung',
      slogan: 'It’s not 4 weeks in a life, it’s a life in 4 weeks',
      subSlogan: 'Trải nghiệm bản địa, đọng lại giá trị',
      description: 'Mô hình du lịch tình nguyện tiên phong tại miền Trung kết hợp chuẩn mực quốc tế tối ưu chi phí & thời gian với mức phí sinh viên trọn gói 2.790.000 VNĐ / EP / 30 ngày (~93.000đ/ngày), lịch làm việc 6h/ngày (Thứ Hai – Thứ Bảy) và hợp đồng pháp lý bảo hộ 2 chiều an toàn tuyệt đối.',
      bullet1: '65% cống hiến chuyên môn & 35% giao lưu văn hóa, chữa lành',
      bullet2: 'Bảo hiểm tai nạn PVI/Bảo Việt (30M–50M) & Hợp đồng điện tử 2 chiều',
      bullet3: 'Local Buddy người bản địa đồng hành, hỗ trợ 24/7 tại địa phương',
      bullet4: 'Chứng nhận Certificate of Social Leadership chuẩn 4 phẩm chất quốc tế',
      btnApply: 'Đăng Ký Giữ Slot Ngay',
      btnQuiz: 'Làm Quiz Tìm Track',
      btnAi: 'Hỏi Trợ Lý AI 24/7',
      badgeCohort: 'Quy mô đợt: 04 – 08 EPs / đợt',
      hubBadge: 'Điểm tập kết TP. Đà Nẵng',
      statPrice: '2.790.000 đ',
      statPriceSub: 'Phí trọn gói 30 ngày (~93k/ngày)',
      statRatio: '65% / 35%',
      statRatioSub: '65% Chuyên môn · 35% Văn hóa',
      statHours: '6h / ngày',
      statHoursSub: 'Thứ Hai – Thứ Bảy · Buddy 24/7',
      statCohort: '04 – 08 EPs',
      statCohortSub: 'Giới hạn sĩ số tối đa chiều sâu',
    },
    tracks: {
      kicker: 'Chương Trình Chuyên Môn · Tỉ Lệ Vàng 65% / 35%',
      title: '3 Gói Dịch Vụ Mục Tiêu (Tracks)',
      subtitle: 'Thiết kế chuẩn hóa tỉ lệ vàng: 65% Cống hiến chuyên môn & 35% Giao lưu văn hóa bản địa và chữa lành tâm hồn.',
      btnQuiz: 'Chưa biết chọn gì? Làm Quiz Định Hướng',
      cohortTag: 'Sĩ số: 04 – 08 EPs',
      btnApplyTrack: 'Đăng Ký Gói Này',
      edu: {
        name: 'EduTrack - Giáo Dục Thực Chiến Vùng Cao',
        tagline: 'Thu hẹp khoảng cách tri thức & kỹ năng số cho học sinh đồng bào',
        desc: 'Giảng dạy tiếng Anh phản xạ thực chiến và phổ cập tin học số, kỹ năng số căn bản cho học sinh vùng cao Nam Giang, Đông Giang, A Lưới.',
        tasks: [
          'Dạy tiếng Anh giao tiếp phản xạ thực chiến thông qua trò chơi & kịch nghệ',
          'Phổ cập tin học văn phòng căn bản & an toàn mạng cho học sinh THCS',
          'Tổ chức ngày hội đọc sách và xây dựng tủ sách cộng đồng vùng cao',
          'Tập huấn kỹ năng mềm & định hướng nghề nghiệp sớm cho thanh thiếu niên'
        ],
        ideal: [
          'Sinh viên chuyên ngành Sư phạm, Ngôn ngữ Anh hoặc thành thạo tiếng Anh',
          'Sinh viên CNTT, Khoa học máy tính hoặc đam mê công nghệ số',
          'Có tình yêu thương trẻ em, kiên nhẫn và sẵn sàng thích nghi vùng cao'
        ],
        deliverables: [
          '100% học sinh tham gia tự tin giới thiệu bản thân bằng tiếng Anh',
          'Tủ sách cộng đồng với tối thiểu 300 đầu sách phân loại khoa học',
          'Bộ giáo án số hóa mở lưu trữ tại điểm trường địa phương'
        ]
      },
      eco: {
        name: 'EcoTrack - Bảo Tồn Rạn San Hô & Rừng Biển Đảo',
        tagline: 'Hành động vì đại dương xanh & bảo tồn đa dạng sinh học miền Trung',
        desc: 'Thu gom và tái chế rác thải biển đảo, ươm mầm san hô, phát triển mô hình nông nghiệp sinh thái và truyền thông giảm rác thải nhựa tại Cù Lao Chàm, Lý Sơn.',
        tasks: [
          'Thu gom, phân loại & kiểm toán rác thải nhựa dạt vào bờ biển/rạn san hô',
          'Hỗ trợ chuyên gia lặn biển giám sát và vệ sinh giá thể ươm dưỡng san hô',
          'Truyền thông mô hình "Nói không với túi nilon" tại các homestay đảo',
          'Khảo sát và ghi nhận dữ liệu đa dạng sinh học dưới tán rừng nhiệt đới'
        ],
        ideal: [
          'Sinh viên Môi trường, Sinh học, Quản lý tài nguyên hoặc yêu thiên nhiên',
          'Thể lực tốt, biết bơi lội căn bản (ưu tiên có chứng chỉ lặn biển PADI)',
          'Có kỹ năng chụp ảnh, quay video tài liệu môi trường thực tế'
        ],
        deliverables: [
          'Thu gom & xử lý tối thiểu 500kg rác thải nhựa đại dương mỗi Wave',
          'Số hóa bản đồ hiện trạng san hô khu vực bảo tồn biển Cù Lao Chàm',
          'Bộ cẩm nang du lịch xanh không rác thải nhựa cho du khách'
        ]
      },
      heritage: {
        name: 'HeritageTrack - Số Hóa Làng Nghề & Di Sản Sống',
        tagline: 'Bảo tồn tinh hoa nghề cổ & mở rộng sinh kế số cho nghệ nhân bản địa',
        desc: 'Chụp ảnh tư liệu, quay dựng video storytelling, thiết lập gian hàng thương mại số E-commerce cho nghệ nhân dệt thổ cẩm Cơ Tu, gốm Thanh Hà, rau Trà Quế.',
        tasks: [
          'Ghi chép và ghi hình quy trình sản xuất thủ công của các nghệ nhân cao niên',
          'Chụp ảnh sản phẩm chuyên nghiệp phục vụ thương mại số',
          'Thiết lập gian hàng số trên TikTok Shop, Shopee cho hợp tác xã làng nghề',
          'Xây dựng câu chuyện thương hiệu (Storytelling) cho từng sản phẩm truyền thống'
        ],
        ideal: [
          'Sinh viên Marketing, Truyền thông, Đồ họa, Nhiếp ảnh hoặc Kinh doanh số',
          'Say mê văn hóa dân tộc, làng nghề truyền thống và nghệ thuật dân gian',
          'Sáng tạo nội dung TikTok/Reels và có tư duy thẩm mỹ thị giác tốt'
        ],
        deliverables: [
          '01 Gian hàng số hoàn chỉnh với đầy đủ danh mục sản phẩm chuẩn SEO',
          'Bộ ảnh tư liệu di sản & 05 video ngắn đạt chuẩn truyền thông số',
          'Tài liệu hướng dẫn quản trị gian hàng bàn giao cho bà con làng nghề'
        ]
      },
      titles: {
        tasks: 'Nhiệm Vụ Chuyên Môn Trọng Tâm (65% Thời Lượng)',
        ideal: 'Chân Dung Ứng Viên Phù Hợp',
        deliverables: 'Sản Phẩm Đầu Ra Dự Án',
        waves: 'Các Wave Trực Thuộc'
      }
    },
    pricing: {
      kicker: 'Cơ Cấu Gói & Giá Dịch Vụ · Cơ Chế B2B2C Đôi Bên Cùng Có Lợi',
      title: '2.790.000 VNĐ Trọn Gói · Bảo Hộ Pháp Lý 2 Chiều',
      subtitle: 'H&N giải tỏa hoàn toàn nỗi lo chi phí và an toàn cho người trẻ với mô hình B2B2C hợp tác MOU chiến lược. Thời lượng 30 ngày (4 tuần) tại hiện trường; lịch làm việc 6h/ngày (Thứ Hai – Thứ Bảy; Chủ Nhật nghỉ) tương đương chỉ ~93.000 VNĐ/ngày.',
      mouTitle: 'Cơ Chế Phân Bổ Nguồn Lực Hợp Tác MOU (B2B2C)',
      opsTitle: 'Đối tác địa phương (OPs) tài trợ 100%:',
      opsItem1: '100% Chỗ ở: Phòng riêng biệt nam/nữ, an ninh bảo đảm, điện nước & mạng ổn định.',
      opsItem2: '03 Bữa ăn/ngày: Đậm đà bản vị địa phương, hợp vệ sinh và đủ dinh dưỡng.',
      hnTitle: 'Quyền lợi H&N chi trả trong 2.790.000 VNĐ:',
      hnItem1: 'Xe hợp đồng đón/trả khép kín 2 chiều từ trung tâm TP. Đà Nẵng.',
      hnItem2: 'Bảo hiểm tai nạn du lịch nội địa PVI / Bảo Việt (30M–50M VNĐ/vụ).',
      hnItem3: 'Bộ Kit EP (02 áo đồng phục, thẻ đeo, sổ tay, giáo cụ dự án).',
      hnItem4: 'Local Buddy 24/7 & Hợp đồng pháp lý bảo hộ 2 chiều.',
      epTitle: 'Tình nguyện viên (EPs) tự túc:',
      epItem1: 'Chi phí vé xe/tàu/máy bay cá nhân đến điểm tập kết tại TP. Đà Nẵng.',
      epItem2: 'Chi tiêu cá nhân ngoài các hạng mục chương trình quy định.',
      epItem3: 'Cam kết tinh thần cống hiến 65% chuyên môn và kỷ luật hiện trường.',
      feeTitle: 'Mức Phí Trọn Gói 30 Ngày Hiện Trường',
      feeDaily: '~93.000 VNĐ/ngày',
      feeSchedule: '30 ngày (4 tuần) · 6h/ngày (Thứ Hai – Thứ Bảy; Chủ Nhật nghỉ)',
      btnViewContract: 'Xem Hợp Đồng Mẫu',
      btnViewCert: 'Xem Chứng Chỉ',
      inclusionsTitle: '8 Quyền Lợi Đã Bao Gồm Trong Gói Phí 2.790.000 VNĐ:',
      inclusions: [
        { title: 'Tài Trợ Chỗ Ở & 03 Bữa Ăn/Ngày', desc: 'OPs tài trợ 100% phòng ở riêng nam/nữ an toàn, vệ sinh và 3 bữa ăn địa phương tươi ngon mỗi ngày.' },
        { title: 'Đưa Đón 2 Chiều Khép Kín', desc: 'Xe hợp đồng chất lượng cao đón/trả 2 chiều từ trung tâm TP. Đà Nẵng đến tận nơi dự án.' },
        { title: 'Bảo Hiểm Du Lịch PVI / Bảo Việt', desc: 'Bảo hiểm tai nạn du lịch nội địa trọn gói có hiệu lực trong suốt 30 ngày (30M–50M VNĐ/vụ).' },
        { title: 'Bộ Kit EP & Giáo Cụ Chuyên Nghiệp', desc: '02 áo đồng phục H&N, thẻ đeo bảo hộ có mã QR, sổ tay Leader Diary và toàn bộ giáo cụ chuyên môn.' },
        { title: 'Local Buddy Bản Địa Đồng Hành 24/7', desc: 'Người địa phương dẫn đường, kết nối ngôn ngữ và chăm sóc sức khỏe, an ninh cho tình nguyện viên.' },
        { title: 'Hợp Đồng Pháp Lý 2 Chiều Minh Bạch', desc: 'Ký kết điện tử bảo vệ quyền lợi hợp pháp của TNV, ràng buộc trách nhiệm bồi thường và hoàn phí.' },
        { title: 'Chứng Nhận Certificate of Social Leadership', desc: 'Chứng nhận năng lực lãnh đạo quốc tế (Self-Aware, Solution-Oriented, Empowering Others, World Citizen).' },
        { title: 'Cộng Đồng AlumNet & Cơ Hội Nghề Nghiệp', desc: 'Mạng lưới cựu TNV kết nối thực tập sinh và học bổng du học từ các đối tác giáo dục H&N.' }
      ],
      cohortNote: '⚡ Giới hạn nghiêm ngặt 04 – 08 EPs/đợt để bảo đảm chất lượng & an toàn tuyệt đối.',
      btnRegisterSlot: 'Đăng Ký Giữ Slot Ngay',
      pipelineKicker: 'Vòng Đời Dự Án 75 Ngày (5 Giai Đoạn)',
      pipelineTitle: 'Quy Trình Vận Hành Tiêu Chuẩn H&N',
      phases: [
        { phase: 'Giai đoạn 1', duration: 'T-45 đến T-30', title: 'Thẩm định & Ký MOU Đối Tác', description: 'Khảo sát hiện trường 3 tầng, ký kết MOU thỏa thuận tài trợ ăn ở cùng OPs.' },
        { phase: 'Giai đoạn 2', duration: 'T-30 đến T-20', title: 'Mở Đơn Tuyển Chọn & Phỏng Vấn', description: 'Tiếp nhận hồ sơ, hoàn tất phỏng vấn sàng lọc trong vòng 48h làm việc.' },
        { phase: 'Giai đoạn 3', duration: 'T-20 đến T-15', title: 'Ký Hợp Đồng & Thu Phí Dịch Vụ', description: 'Ký kết hợp đồng điện tử 2 chiều và đóng phí trọn gói 2.790.000 VNĐ.' },
        { phase: 'Giai đoạn 4', duration: 'T-07 đến D-Day', title: 'Tập Huấn IPS & Kích Hoạt Bảo Hiểm', description: 'Hội thảo định hướng văn hóa, phát Kit EP và kích hoạt bảo hiểm PVI.' },
        { phase: 'Giai đoạn 5', duration: 'D-Day đến Day 30', title: 'Thực Thi Tại Hiện Trường & Showcase', description: '30 ngày cống hiến 6h/ngày (Mon-Sat), phiên đúc kết Closing Showcase.' }
      ],
      weatherTitle: 'Quản Trị Rủi Ro Thời Tiết Miền Trung (SLA ≥ 50%)',
      weatherDesc: 'Tháng 10 – Tháng 12: Dừng toàn bộ tuyến biển đảo (Cù Lao Chàm, Lý Sơn); chuyển 100% công suất sang tuyến EduTrack và HeritageTrack số hóa trong nhà tại các đô thị kiên cố (Đà Nẵng, Tam Kỳ, Hội An).',
      cancellationKicker: 'Chính Sách Hoàn Hủy, Bảo Lưu & Đền Bù Minh Bạch 4 Tầng',
      cancellationTitle: 'Cam Kết Bảo Vệ Quyền Lợi Tài Chính Tuyệt Đối Cho Tình Nguyện Viên',
      cancellationTag: 'Quy định có trong hợp đồng điện tử',
      cancelTiers: {
        t1Title: '1. Lỗi Từ Phía H&N / OP',
        t1Desc: 'Vi phạm nghiêm trọng cam kết an toàn hoặc hủy đợt',
        t1Rate: 'Hoàn 100% (2.790.000đ) + Đền bù 10% (279.000đ)',
        t1Time: 'Hoàn tiền trong 05 ngày làm việc',
        t2Title: '2. Bất Khả Kháng',
        t2Desc: 'Thiên tai bão lũ cấp 3+, dịch bệnh, lý do y tế/gia đình',
        t2Rate: 'Hoàn 80% (2.232.000đ) HOẶC Bảo lưu 100%',
        t2Time: 'Bảo lưu giá trị 12 tháng sang bất kỳ Wave nào',
        t3Title: '3. EP Hủy Trước ≥ 15 Ngày',
        t3Desc: 'Hủy vì lý do cá nhân trước ngày khởi hành',
        t3Rate: 'Hoàn 50% (1.395.000đ) HOẶC Chuyển nhượng',
        t3Time: 'Phí chuyển nhượng danh tính: 200.000 VNĐ',
        t4Title: '4. EP Hủy Trong 14 Ngày',
        t4Desc: 'Hủy sát ngày hoặc tự ý bỏ cuộc giữa chừng',
        t4Rate: 'Không hoàn phí (0%)',
        t4Time: 'Để bù đắp bảo hiểm đã kích hoạt & giữ chỗ OP'
      }
    },
    waves: {
      kicker: 'Lịch Trình Chi Tiết Các Đợt Wave 2026-2027',
      title: 'Lịch Khởi Hành Từng Đợt Theo Track',
      subtitle: 'Mỗi đợt Wave kéo dài 30 ngày (4 tuần) tại hiện trường; lịch làm việc 6h/ngày (Thứ Hai – Thứ Bảy), quy mô giới hạn từ 04–08 EPs/đợt và cam kết Local Buddy 24/7 đồng hành.',
      tagPill: 'Quy mô đợt: 04–08 EPs · Giữ chỗ trực tuyến',
      filterAll: 'Tất Cả Các Wave',
      departureLabel: 'Khởi hành:',
      buddyLabel: 'Local Buddy:',
      slotsRegistered: 'Đã đăng ký:',
      slotsRemaining: 'Còn {count} suất trống',
      slotsFull: 'Đã đủ số lượng',
      btnApplyWave: 'Giữ Slot Đợt Này'
    },
    advisor: {
      kicker: 'Hệ Thống Trí Tuệ Nhân Tạo Điều Hành & Tư Vấn',
      title: 'Trợ Lý AI Trực Tuyến 24/7',
      subtitle: 'Hỏi đáp trực tiếp bằng Tiếng Việt, English hoặc Français về mức phí 2.790.000 VNĐ, quyền lợi ăn ở từ OPs, chính sách hoàn hủy đền bù và định hướng chọn Track phù hợp.',
      botRole: 'H&N AI Operating Coordinator',
      onlineStatus: 'Online 24/7',
      userModeSubtitle: 'Tư vấn ứng viên · Định hướng Track · Giải đáp học bổng & pháp lý',
      adminModeSubtitle: 'Chế độ Ban Điều Phối · Báo cáo leads & Điều hành 75 ngày',
      tabUser: 'Ứng Viên',
      tabAdmin: 'Điều Phối',
      suggestLabel: 'Gợi ý câu hỏi:',
      inputPlaceholder: 'Hỏi về mức phí 2.790.000 VNĐ, tài trợ ăn ở từ OPs, chính sách hoàn hủy...',
      btnSend: 'Gửi',
      loadingText: 'Trí tuệ Nhân tạo H&N đang phân tích & đối chiếu dữ liệu...',
      copySuccess: 'Đã sao chép câu trả lời',
      btnHoldSlot: 'Giữ Slot Wave Sớm Ngay'
    },
    modals: {
      contract: {
        headerKicker: 'CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM · Độc lập - Tự do - Hạnh phúc',
        headerTitle: 'HỢP ĐỒNG DỊCH VỤ ĐIỀU PHỐI DU LỊCH TÌNH NGUYỆN',
        headerSub: 'Cơ chế bảo hộ pháp lý 2 chiều: Đơn vị điều phối H&N & Tình nguyện viên (EP)',
        footerNote: '✓ Hợp đồng được ký kết bằng chữ ký điện tử xác thực OTP trước ngày khởi hành. Bảo hiểm tai nạn PVI / Bảo Việt (30M–50M VNĐ/vụ) được kích hoạt chính thức.',
        btnClose: 'Đã Hiểu & Đóng'
      },
      cert: {
        headerKicker: 'GLOBAL LEADERSHIP DEVELOPMENT FRAMEWORK',
        headerTitle: 'Certificate of Social Leadership & Community Impact',
        certSubtitle: 'H&N Central Vietnam Volunteer Coordination System',
        certCertifies: 'Hereby certifies that',
        certNamePlaceholder: '[TÊN TÌNH NGUYỆN VIÊN]',
        certBody: 'Has successfully completed the 30-day (4-week) volunteer expedition in Central Vietnam, committing over 140+ service hours (6h/day) and demonstrating 4 core social leadership qualities:',
        q1: '1. Self-Aware: Thấu hiểu giá trị và nội lực bản thân.',
        q2: '2. Solution-Oriented: Chủ động giải quyết vấn đề xã hội.',
        q3: '3. Empowering Others: Nâng đỡ và truyền cảm hứng cộng đồng.',
        q4: '4. World Citizen: Trách nhiệm công dân toàn cầu & bản địa.',
        btnClose: 'Đóng'
      },
      register: {
        kicker: 'Cổng Đăng Ký Tình Nguyện Viên Miền Trung',
        title: 'Đăng Ký Giữ Slot Tham Gia H&N',
        subtitle: 'Phí trọn gói: 2.790.000 VNĐ / 30 ngày (~93k/ngày) · 100% ăn ở từ OPs · Bảo hiểm PVI/Bảo Việt',
        labelName: 'Họ và Tên:',
        labelPhone: 'Số Điện Thoại (Zalo):',
        labelEmail: 'Địa Chỉ Email:',
        labelTrack: 'Gói Dịch Vụ Quan Tâm:',
        labelWave: 'Đợt Wave Dự Kiến:',
        labelMajor: 'Chuyên Ngành / Trường ĐH:',
        labelNotes: 'Ghi Chú Nhu Cầu / Câu Hỏi:',
        placeholderName: 'VD: Nguyễn Thảo Linh',
        placeholderPhone: 'VD: 0905 123 456',
        placeholderEmail: 'VD: thaolinh.dn@gmail.com',
        placeholderMajor: 'VD: Đại học Ngoại ngữ Đà Nẵng',
        placeholderNotes: 'Chia sẻ mong muốn hoặc thế mạnh của bạn...',
        reassurance: 'Thông tin được bảo mật và chuyển thẳng đến Ban Điều Phối H&N. Bạn chỉ đóng phí sau khi hoàn thành phỏng vấn định hướng và ký hợp đồng bảo hộ pháp lý 2 chiều.',
        btnCancel: 'Hủy',
        btnSubmit: 'Xác Nhận Đăng Ký Slot',
        submitting: 'Đang gửi đăng ký...',
        successTitle: 'Đăng Ký Slot Thành Công!',
        successDesc: 'Hệ thống H&N đã tiếp nhận thông tin của bạn. Điều phối viên sẽ liên hệ qua SĐT/Zalo trong vòng 48h để hướng dẫn bước tiếp theo.',
        successTrackingNote: 'Bạn có thể dùng Số điện thoại hoặc Mã hồ sơ trên để tra cứu lịch trình và tiến trình vé bất cứ lúc nào.',
        btnTrackNow: 'Tra Cứu Vé & Lịch Trình Ngay',
        btnClose: 'Đóng'
      },
      tracking: {
        title: 'Tra Cứu Hồ Sơ & Lịch Trình Tình Nguyện Viên',
        subtitle: 'Kiểm tra trạng thái hồ sơ, tiến trình hợp đồng, xe đưa đón và lịch trình 4 tuần',
        inputPlaceholder: 'Nhập Số điện thoại (Zalo) hoặc Mã hồ sơ (VD: 0905123456)...',
        btnSearch: 'Tra Cứu Tiến Độ',
        tabStatus: 'Tiến Trình 4 Bước',
        tabItinerary: 'Lịch Trình 4 Tuần',
        tabLogistics: 'Điểm Đón Xe & Local Buddy',
        stage1: '1. Tiếp Nhận Đơn & Cấp Mã Định Danh Slot',
        stage2: '2. Phỏng Vấn Định Hướng & Thẩm Định Track (≤48h)',
        stage3: '3. Ký Hợp Đồng Bảo Hộ 2 Chiều & Kích Hoạt Bảo Hiểm (2.790k)',
        stage4: '4. Tập Huấn IPS & Lên Xe Đưa Đón 2 Chiều Về Hiện Trường',
        notFoundTitle: 'Chưa Tìm Thấy Hồ Sơ Phù Hợp',
        notFoundDesc: 'Vui lòng kiểm tra lại số điện thoại hoặc mã hồ sơ đã nhập. Nếu bạn vừa đăng ký, dữ liệu có thể mất vài phút để cập nhật.',
        btnCallHotline: 'Gọi Hotline Hỗ Trợ: 0905 123 456'
      },
      quiz: {
        title: 'Quiz Định Hướng: Bạn Thuộc Về Track Nào?',
        subtitle: 'Trả lời 4 câu hỏi trắc nghiệm ngắn để hệ thống tìm ra cung đường và nhiệm vụ phù hợp nhất với thế mạnh của bạn.',
        stepIndicator: 'Câu {current} / {total}',
        btnBack: 'Quay Lại',
        btnNext: 'Tiếp Theo',
        btnSeeResult: 'Xem Kết Quả Định Hướng',
        resultTitle: 'Gói Dịch Vụ Phù Hợp Nhất Với Bạn:',
        btnChooseThis: 'Chọn Gói Này & Đăng Ký',
        btnRestart: 'Làm Lại Quiz'
      }
    },
    footer: {
      desc: 'Hệ thống điều phối dịch vụ du lịch tình nguyện nội địa khu vực Miền Trung. Mô hình chuẩn quốc tế tối ưu chi phí & thời gian, mức phí sinh viên trọn gói 2.790.000 VNĐ / EP / 30 ngày và hợp đồng bảo hộ pháp lý hai chiều an toàn tuyệt đối.',
      col1Title: 'Chương Trình & Dịch Vụ',
      col2Title: 'Trụ Sở Điều Phối',
      col3Title: 'Cam Kết Vận Hành',
      trackingLink: '🔍 Tra Cứu Tiến Trình Vé & Lịch Trình',
      rights: 'Bản quyền thuộc về H&N Miền Trung. Tất cả các quyền được bảo lưu.'
    }
  },

  // ==========================================
  // ENGLISH (EN)
  // ==========================================
  en: {
    header: {
      brandName: 'H&N Central Vietnam',
      navTracks: 'Tracks & Programs',
      navPricing: 'Package (2.790k)',
      navWaves: 'Wave Schedules',
      navAi: 'AI Advisor 24/7',
      btnTracking: 'Track Application',
      btnAdmin: 'Coordinator',
      btnApply: 'Apply Slot (2.790k)',
    },
    hero: {
      kicker: 'Domestic Volunteer Tourism Coordination System · Central Vietnam',
      slogan: 'It’s not 4 weeks in a life, it’s a life in 4 weeks',
      subSlogan: 'Local immersion, lasting value',
      description: 'A pioneering volunteer tourism model in Central Vietnam blending international standards with student-friendly pricing of 2,790,000 VNĐ / EP / 30 days (~93,000đ/day; 6h/day Mon–Sat) and 2-way legally binding protection.',
      bullet1: '65% Professional service contribution & 35% Cultural exchange & healing',
      bullet2: 'PVI/Bao Viet Travel Insurance (30M–50M VNĐ) & 2-Way legally binding contract',
      bullet3: 'Local Buddy from the native community providing 24/7 on-site guidance',
      bullet4: 'Certificate of Social Leadership endorsing 4 core global leadership qualities',
      btnApply: 'Apply For Your Slot Now',
      btnQuiz: 'Track Finder Quiz',
      btnAi: 'Ask AI Advisor 24/7',
      badgeCohort: 'Cohort size: 04 – 08 EPs / wave',
      hubBadge: 'Da Nang City Meeting Hub',
      statPrice: '2,790,000 đ',
      statPriceSub: 'All-inclusive 30 days (~93k/day)',
      statRatio: '65% / 35%',
      statRatioSub: '65% Pro Service · 35% Culture',
      statHours: '6h / day',
      statHoursSub: 'Monday – Saturday · Buddy 24/7',
      statCohort: '04 – 08 EPs',
      statCohortSub: 'Strict limit for maximum depth & safety',
    },
    tracks: {
      kicker: 'Professional Tracks · Golden Ratio 65% / 35%',
      title: '3 Target Tracks & Missions',
      subtitle: 'Standardized golden ratio: 65% Professional community service & 35% Local cultural immersion and inner healing.',
      btnQuiz: 'Not sure which to choose? Take our Quiz',
      cohortTag: 'Cohort: 04 – 08 EPs',
      btnApplyTrack: 'Apply For This Track',
      edu: {
        name: 'EduTrack - Highland Practical Education',
        tagline: 'Bridging the knowledge & digital gap for ethnic highland youth',
        desc: 'Teaching communicative practical English and foundational digital literacy to highland children in Nam Giang, Dong Giang, and A Luoi.',
        tasks: [
          'Teach practical conversational English through theater, games, and storytelling',
          'Introduce computer literacy & basic cybersecurity to junior high students',
          'Organize reading festivals and establish highland community libraries',
          'Conduct soft skills & early career guidance workshops for local youth'
        ],
        ideal: [
          'Education, English Linguistics majors or fluent English speakers',
          'Computer Science, IT students or technology enthusiasts',
          'Passionate about mentoring children, patient, adaptable to mountainous conditions'
        ],
        deliverables: [
          '100% of participating students confidently introduce themselves in English',
          'Community library with at least 300 scientifically cataloged books',
          'Digitalized curriculum repository handed over to the local community school'
        ]
      },
      eco: {
        name: 'EcoTrack - Coral Reefs & Marine Conservation',
        tagline: 'Action for blue oceans & marine biodiversity preservation',
        desc: 'Collecting marine debris, assisting coral nursery preservation, eco-farming, and plastic reduction advocacy in Cham Islands & Ly Son.',
        tasks: [
          'Collect, audit, and categorize marine plastic debris washed onto shores and reefs',
          'Assist marine biologists in monitoring and cleaning coral nursery substrates',
          'Promote plastic-free and green hospitality campaigns with island homestays',
          'Survey and record flora and fauna biodiversity data under tropical forest canopies'
        ],
        ideal: [
          'Environmental Science, Biology, Forestry majors or nature conservation enthusiasts',
          'Good physical fitness, able to swim (PADI scuba certification is a plus)',
          'Skills in documentary photography or videography for conservation storytelling'
        ],
        deliverables: [
          'Collect & properly process at least 500kg of marine plastic per Wave',
          'Digital map of coral health status in Cham Islands Marine Protected Area',
          'Zero-waste travel handbook distributed to eco-tourists and homestays'
        ]
      },
      heritage: {
        name: 'HeritageTrack - Craft Village Digitalization & Living Heritage',
        tagline: 'Preserving ancestral craftsmanship & empowering digital livelihoods',
        desc: 'Documentary photography, video storytelling, and setting up e-commerce stores for Co Tu brocade weavers, Thanh Ha pottery, and Tra Que herbs.',
        tasks: [
          'Document and film handcrafted techniques demonstrated by elderly master artisans',
          'Take high-quality product photos for digital catalogs and e-commerce stores',
          'Build online stores on TikTok Shop and Shopee for craft cooperatives',
          'Craft compelling brand storytelling for traditional craft products'
        ],
        ideal: [
          'Marketing, Communications, Graphic Design, Photography, or E-commerce majors',
          'Passionate about indigenous culture, traditional crafts, and folk arts',
          'Proficient in producing TikTok/Reels content with strong visual aesthetics'
        ],
        deliverables: [
          '01 Fully functional online store with SEO-optimized product listings',
          'Heritage archive portfolio & 05 short videos meeting digital media standards',
          'Simple management guide handed over to indigenous artisan cooperatives'
        ]
      },
      titles: {
        tasks: 'Core Professional Tasks (65% Working Hours)',
        ideal: 'Ideal Candidate Profile',
        deliverables: 'Target Project Deliverables',
        waves: 'Associated Waves'
      }
    },
    pricing: {
      kicker: 'Package Structure & Pricing · B2B2C Mutual Partnership',
      title: '2,790,000 VNĐ All-Inclusive · 2-Way Legal Protection',
      subtitle: 'H&N eliminates cost and safety concerns through strategic B2B2C MOU cooperation. 30 days (4 weeks) on-site; 6h/day (Monday–Saturday; Sunday off) equal to just ~93,000 VNĐ/day.',
      mouTitle: 'MOU Resource Allocation Framework (B2B2C)',
      opsTitle: 'Local Partners (OPs) sponsor 100%:',
      opsItem1: '100% Accommodation: Safe, separate male/female rooms, Wi-Fi, utilities.',
      opsItem2: '03 Meals/day: Nutritious, hygienic, local home-cooked meals.',
      hnTitle: 'Covered by H&N (2,790,000 VNĐ fee):',
      hnItem1: 'Round-trip chartered transportation from Da Nang city center.',
      hnItem2: 'PVI / Bao Viet domestic travel accident insurance (30M–50M VNĐ/case).',
      hnItem3: 'EP Kit (2 official shirts, badge, handbook, specialized tools).',
      hnItem4: '24/7 on-site Local Buddy & 2-way legally binding contract.',
      epTitle: 'Volunteers (EPs) self-fund:',
      epItem1: 'Personal travel tickets (flight/train/bus) to Da Nang meeting hub.',
      epItem2: 'Personal incidental expenses outside program activities.',
      epItem3: 'Commitment to 65% professional service and on-site code of conduct.',
      feeTitle: 'All-inclusive 30-Day On-Site Program Fee',
      feeDaily: '~93,000 VNĐ/day',
      feeSchedule: '30 days (4 weeks) · 6h/day (Monday – Saturday; Sunday off)',
      btnViewContract: 'View Sample Contract',
      btnViewCert: 'View Certificate',
      inclusionsTitle: '8 All-inclusive Benefits in the 2,790,000 VNĐ Fee:',
      inclusions: [
        { title: '100% Sponsoring Room & 3 Meals/Day', desc: 'OPs sponsor 100% safe, clean accommodation (separate rooms) and 3 delicious meals daily.' },
        { title: 'Round-Trip Chartered Transit', desc: 'High-quality chartered transit directly from Da Nang hub to the project community.' },
        { title: 'PVI / Bao Viet Travel Insurance', desc: 'Comprehensive domestic travel accident insurance valid across the entire 30 days.' },
        { title: 'EP Kit & Professional Tools', desc: '2 H&N t-shirts, QR protective badge, Leader Diary handbook, and all project teaching materials.' },
        { title: '24/7 On-Site Native Local Buddy', desc: 'Trained local guide handling navigation, language translation, safety, and health support.' },
        { title: '2-Way Legally Binding Contract', desc: 'Digital e-contract safeguarding volunteer rights, refund clauses, and mutual accountability.' },
        { title: 'Certificate of Social Leadership', desc: 'Certifying 4 leadership qualities: Self-Aware, Solution-Oriented, Empowering Others, World Citizen.' },
        { title: 'AlumNet & Career Opportunities', desc: 'Alumni network connecting volunteer leaders to internship and scholarship opportunities.' }
      ],
      cohortNote: '⚡ Strictly limited to 04 – 08 EPs/wave for maximum depth & safety.',
      btnRegisterSlot: 'Apply For Your Slot Now',
      pipelineKicker: '75-Day Project Lifecycle (5 Stages)',
      pipelineTitle: 'Standardized Operating Procedure',
      phases: [
        { phase: 'Phase 1', duration: 'T-45 to T-30', title: 'Partner Vetting & MOU Signing', description: '3-tier on-site assessment, signing bilateral room & board MOU agreements.' },
        { phase: 'Phase 2', duration: 'T-30 to T-20', title: 'Open Applications & Screening Interview', description: 'Receiving applications, conducting screening interviews within 48h SLA.' },
        { phase: 'Phase 3', duration: 'T-20 to T-15', title: 'Contract Signing & Fee Payment', description: 'Signing 2-way digital contracts and securing slot via 2,790,000 VNĐ payment.' },
        { phase: 'Phase 4', duration: 'T-07 to D-Day', title: 'IPS Orientation & Insurance Activation', description: 'Incoming Preparation Seminar, EP Kit distribution, activating PVI insurance.' },
        { phase: 'Phase 5', duration: 'D-Day to Day 30', title: 'Field Execution & Closing Showcase', description: '30-day service (6h/day, Mon–Sat) culminating in Debrief Space & Showcase.' }
      ],
      weatherTitle: 'Central Vietnam Weather Risk Management (SLA ≥ 50%)',
      weatherDesc: 'October – December (Storm Season): All island tracks (Cham Islands, Ly Son) are paused; 100% capacity shifts to indoor EduTrack & HeritageTrack in resilient urban hubs (Da Nang, Tam Ky, Hoi An).',
      cancellationKicker: 'Transparent 4-Tier Cancellation, Refund & Compensation Policy',
      cancellationTitle: 'Commitment to Protecting Volunteer Financial Interests',
      cancellationTag: 'Legally stipulated in the e-contract',
      cancelTiers: {
        t1Title: '1. H&N / OP Fault',
        t1Desc: 'Critical safety breach or wave cancellation by organizers',
        t1Rate: '100% Refund (2,790,000đ) + 10% Compensation (279,000đ)',
        t1Time: 'Processed within 05 business days',
        t2Title: '2. Force Majeure',
        t2Desc: 'Level 3+ natural disasters, epidemics, emergency medical',
        t2Rate: '80% Refund (2,232,000đ) OR 100% Reservation',
        t2Time: 'Credit reserved for 12 months for any wave',
        t3Title: '3. Volunteer Cancels ≥ 15 Days',
        t3Desc: 'Cancellation due to personal reasons before departure',
        t3Rate: '50% Refund (1,395,000đ) OR Transfer Slot',
        t3Time: 'Administrative slot transfer fee: 200,000 VNĐ',
        t4Title: '4. Volunteer Cancels < 14 Days',
        t4Desc: 'Last-minute cancellation or dropping out during field work',
        t4Rate: '0% Refund',
        t4Time: 'Offsets non-refundable insurance & host reservations'
      }
    },
    waves: {
      kicker: 'Detailed Wave Schedules 2026-2027',
      title: 'Departure Schedules by Track',
      subtitle: 'Each wave lasts 30 days (4 weeks) on-site; 6h/day (Monday – Saturday), strictly limited to 04–08 EPs with 24/7 Local Buddy support.',
      tagPill: 'Cohort: 04–08 EPs · Reserve online',
      filterAll: 'All Waves',
      departureLabel: 'Departure:',
      buddyLabel: 'Local Buddy:',
      slotsRegistered: 'Registered:',
      slotsRemaining: '{count} spots remaining',
      slotsFull: 'Fully booked',
      btnApplyWave: 'Apply For This Wave'
    },
    advisor: {
      kicker: 'AI Operational & Counseling System',
      title: '24/7 AI Volunteer Advisor',
      subtitle: 'Ask directly in English, French, or Vietnamese regarding the 2,790,000 VNĐ all-inclusive fee, room and board sponsorship, refund policies, and track recommendations.',
      botRole: 'H&N AI Operating Coordinator',
      onlineStatus: 'Online 24/7',
      userModeSubtitle: 'Applicant Advice · Track Guidance · Legal & Scholarship Q&A',
      adminModeSubtitle: 'Coordinator Mode · Lead Analytics & 75-Day Workflow',
      tabUser: 'Applicant',
      tabAdmin: 'Coordinator',
      suggestLabel: 'Suggested questions:',
      inputPlaceholder: 'Ask about the 2,790,000 VNĐ fee, free meals & housing, refund policy...',
      btnSend: 'Send',
      loadingText: 'H&N AI is analyzing and referencing project data...',
      copySuccess: 'Answer copied to clipboard',
      btnHoldSlot: 'Hold Slot Early'
    },
    modals: {
      contract: {
        headerKicker: 'SOCIALIST REPUBLIC OF VIETNAM · Independence - Freedom - Happiness',
        headerTitle: 'VOLUNTEER TOURISM COORDINATION SERVICE CONTRACT',
        headerSub: '2-Way Legal Protection Mechanism: H&N Coordinating Organization & Exchange Participant (EP)',
        footerNote: '✓ Contract signed digitally via OTP verification before departure. PVI / Bao Viet accident insurance (30M–50M VNĐ) is formally activated.',
        btnClose: 'Understood & Close'
      },
      cert: {
        headerKicker: 'GLOBAL LEADERSHIP DEVELOPMENT FRAMEWORK',
        headerTitle: 'Certificate of Social Leadership & Community Impact',
        certSubtitle: 'H&N Central Vietnam Volunteer Coordination System',
        certCertifies: 'Hereby certifies that',
        certNamePlaceholder: '[VOLUNTEER FULL NAME]',
        certBody: 'Has successfully completed the 30-day (4-week) volunteer expedition in Central Vietnam, committing over 140+ service hours (6h/day) and demonstrating 4 core social leadership qualities:',
        q1: '1. Self-Aware: Understanding personal values, strengths, and purpose.',
        q2: '2. Solution-Oriented: Proactively resolving social and community challenges.',
        q3: '3. Empowering Others: Mentoring, uplifting, and inspiring community members.',
        q4: '4. World Citizen: Global responsibility paired with local cultural humility.',
        btnClose: 'Close'
      },
      register: {
        kicker: 'Central Vietnam Volunteer Application Portal',
        title: 'Apply for Your H&N Volunteer Slot',
        subtitle: 'All-inclusive fee: 2,790,000 VNĐ / 30 days (~93k/day) · 100% room & board from OPs · PVI/Bao Viet insurance',
        labelName: 'Full Name:',
        labelPhone: 'Phone (WhatsApp/Zalo):',
        labelEmail: 'Email Address:',
        labelTrack: 'Interested Track:',
        labelWave: 'Desired Wave:',
        labelMajor: 'Major / University:',
        labelNotes: 'Questions / Special Requests:',
        placeholderName: 'e.g., Alex Johnson',
        placeholderPhone: 'e.g., +84 905 123 456',
        placeholderEmail: 'e.g., alex.johnson@email.com',
        placeholderMajor: 'e.g., International Relations / Business',
        placeholderNotes: 'Tell us about your background or motivation...',
        reassurance: 'Your information is confidential and sent directly to H&N Coordinators. You only pay after completing the interview and signing the 2-way legal protection contract.',
        btnCancel: 'Cancel',
        btnSubmit: 'Confirm & Submit Slot Application',
        submitting: 'Submitting application...',
        successTitle: 'Application Submitted Successfully!',
        successDesc: 'H&N Coordination has received your profile. Our team will contact you via Phone/WhatsApp within 48h to schedule your orientation.',
        successTrackingNote: 'You can use your Phone Number or Application ID to check your schedule and departure status anytime.',
        btnTrackNow: 'Track Application & Itinerary',
        btnClose: 'Close'
      },
      tracking: {
        title: 'Volunteer Application & Itinerary Tracker',
        subtitle: 'Check application status, contract progress, transit details, and 4-week field schedule',
        inputPlaceholder: 'Enter Phone (WhatsApp/Zalo) or Application ID (e.g., 0905123456)...',
        btnSearch: 'Search Status',
        tabStatus: '4-Step Progress',
        tabItinerary: '4-Week Itinerary',
        tabLogistics: 'Transit Hub & Local Buddy',
        stage1: '1. Application Received & Slot ID Issued',
        stage2: '2. Orientation Interview & Track Assessment (≤48h)',
        stage3: '3. 2-Way Legal Contract Signing & Insurance (2,790k)',
        stage4: '4. IPS Briefing & Departure Chartered Transit to Project Site',
        notFoundTitle: 'No Matching Profile Found',
        notFoundDesc: 'Please verify the phone number or application ID entered. If you just registered, please allow a few minutes for synchronization.',
        btnCallHotline: 'Hotline Support: +84 905 123 456'
      },
      quiz: {
        title: 'Track Finder Quiz: Where Do You Belong?',
        subtitle: 'Answer 4 quick multiple-choice questions to discover the project track matching your passions and skill set.',
        stepIndicator: 'Question {current} of {total}',
        btnBack: 'Back',
        btnNext: 'Next',
        btnSeeResult: 'See Recommended Track',
        resultTitle: 'Best Track Match For You:',
        btnChooseThis: 'Choose This Track & Apply',
        btnRestart: 'Retake Quiz'
      }
    },
    footer: {
      desc: 'Central Vietnam domestic volunteer tourism coordination system. International standards optimized for cost & time, all-inclusive student fee of 2,790,000 VNĐ / EP / 30 days and 2-way legal protection.',
      col1Title: 'Programs & Tracks',
      col2Title: 'Coordination Hub',
      col3Title: 'Operational Commitments',
      trackingLink: '🔍 Track Application & Departure Itinerary',
      rights: 'Copyright © H&N Central Vietnam. All rights reserved.'
    }
  },

  // ==========================================
  // FRANÇAIS (FR)
  // ==========================================
  fr: {
    header: {
      brandName: 'H&N Centre-Vietnam',
      navTracks: 'Programmes & Tracks',
      navPricing: 'Forfait (2.790k)',
      navWaves: 'Calendrier des Waves',
      navAi: 'Conseiller IA 24/7',
      btnTracking: 'Suivi Dossier',
      btnAdmin: 'Coordination',
      btnApply: 'Postuler (2.790k)',
    },
    hero: {
      kicker: 'Système de Coordination de Tourisme Solidaire · Centre-Vietnam',
      slogan: 'It’s not 4 weeks in a life, it’s a life in 4 weeks',
      subSlogan: 'Immersion locale, valeur durable',
      description: 'Modèle pionnier de tourisme solidaire au Centre-Vietnam combinant standards internationaux et tarif étudiant tout compris de 2.790.000 VNĐ / EP / 30 jours (~93.000đ/jour; 6h/j du lun au sam) avec protection juridique bilatérale.',
      bullet1: '65% Contribution professionnelle & 35% Échange culturel et bien-être',
      bullet2: 'Assurance voyage PVI/Bao Viet (30M–50M VNĐ) & Contrat bilatéral électronique',
      bullet3: 'Local Buddy originaire de la région accompagnant et soutenant 24h/24',
      bullet4: 'Certificat de Leadership Social attestant 4 compétences internationales',
      btnApply: 'Réserver ma place dès maintenant',
      btnQuiz: 'Quiz d’Orientation Track',
      btnAi: 'Consulter l’IA 24/7',
      badgeCohort: 'Cohorte: 04 – 08 volontaires / wave',
      hubBadge: 'Rassemblement: Centre de Da Nang',
      statPrice: '2.790.000 đ',
      statPriceSub: 'Forfait 30 jours (~93k/jour)',
      statRatio: '65% / 35%',
      statRatioSub: '65% Pro · 35% Culture',
      statHours: '6h / jour',
      statHoursSub: 'Lundi – Samedi · Buddy 24/7',
      statCohort: '04 – 08 EPs',
      statCohortSub: 'Effectif limité pour immersion & sécurité',
    },
    tracks: {
      kicker: 'Missions Professionnelles · Ratio d’Or 65% / 35%',
      title: '3 Parcours Ciblés (Tracks)',
      subtitle: 'Ratio d’or standardisé: 65% Service solidaire professionnel & 35% Immersion culturelle et ressourcement spirituel.',
      btnQuiz: 'Indécis? Faites le Quiz d’Orientation',
      cohortTag: 'Cohorte: 04 – 08 EPs',
      btnApplyTrack: 'Choisir ce Track',
      edu: {
        name: 'EduTrack - Éducation Pratique en Montagne',
        tagline: 'Réduire la fracture éducative et numérique des minorités des hauts-plateaux',
        desc: 'Enseignement de l’anglais communicatif et compétences numériques de base aux enfants des hauts-plateaux de Nam Giang, Dong Giang, A Luoi.',
        tasks: [
          'Enseigner l’anglais parlé par le jeu, le théâtre et l’expression orale',
          'Sensibiliser aux bases informatiques et à la cybersécurité pour collégiens',
          'Organiser des fêtes de la lecture et aménager des bibliothèques solidaires',
          'Animer des ateliers de compétences douces et d’orientation professionnelle'
        ],
        ideal: [
          'Étudiants en Sciences de l’éducation, Langues ou avec un bon niveau d’anglais',
          'Étudiants en Informatique ou passionnés de nouvelles technologies',
          'Patience, enthousiasme et adaptabilité aux conditions des villages de montagne'
        ],
        deliverables: [
          '100% des élèves capables de se présenter avec confiance en anglais',
          'Bibliothèque communautaire avec au moins 300 ouvrages catalogués',
          'Banque de ressources pédagogiques numérisées pour l’école du village'
        ]
      },
      eco: {
        name: 'EcoTrack - Récifs Coralliens & Écosystèmes Marins',
        tagline: 'Action pour les océans & préservation de la biodiversité du littoral',
        desc: 'Collecte de déchets marins, préservation des coraux, agroécologie et sensibilisation anti-plastique aux îles Cham et Ly Son.',
        tasks: [
          'Collecter, trier et auditer les déchets plastiques rejetés sur les plages et récifs',
          'Assister les biologistes dans le nettoyage et suivi des pépinières coralliennes',
          'Mener des campagnes "Zéro plastique à usage unique" auprès des gîtes insulaires',
          'Recenser les indicateurs de biodiversité sous la canopée tropicale'
        ],
        ideal: [
          'Étudiants en Écologie, Biologie, Gestion des ressources ou passionnés de nature',
          'Bonne condition physique, natation (certification de plongée PADI appréciée)',
          'Compétences en photographie documentaire ou réalisation vidéo écologique'
        ],
        deliverables: [
          'Au moins 500 kg de plastique marin collectés et triés par Wave',
          'Cartographie numérique de l’état de santé des récifs coralliens',
          'Guide pratique du voyageur éco-responsable distribué aux visiteurs'
        ]
      },
      heritage: {
        name: 'HeritageTrack - Digitalisation de l’Artisanat & Patrimoine Vivant',
        tagline: 'Sauvegarde des savoir-faire ancestraux & autonomisation numérique des artisans',
        desc: 'Photographie documentaire, storytelling vidéo et création de boutiques en ligne pour le tissage Co Tu, poterie Thanh Ha, Trà Quế.',
        tasks: [
          'Documenter en vidéo et récits les techniques artisanales des maîtres artisans',
          'Réaliser des séances photos professionnelles de mise en valeur des créations',
          'Ouvrir des boutiques numériques (TikTok Shop, Shopee) pour les coopératives',
          'Élaborer le storytelling et l’identité de marque des objets traditionnels'
        ],
        ideal: [
          'Étudiants en Marketing, Communication, Design graphique, Photo ou E-commerce',
          'Intérêt marqué pour le patrimoine immatériel et les cultures ethniques',
          'Sensibilité visuelle et maîtrise de la création de contenu vidéo court'
        ],
        deliverables: [
          '01 Boutique numérique opérationnelle avec fiches produits optimisées SEO',
          'Banque d’images du patrimoine & 05 courtes vidéos de communication',
          'Guide d’administration numérique simplifié remis aux coopératives locales'
        ]
      },
      titles: {
        tasks: 'Missions Professionnelles (65% du Temps)',
        ideal: 'Profil Recherché',
        deliverables: 'Livrables Concrets du Projet',
        waves: 'Waves Rattachées'
      }
    },
    pricing: {
      kicker: 'Structure Tarifaire & MOU Partenaires B2B2C',
      title: '2.790.000 VNĐ Tout Inclus · Protection Juridique Bilatérale',
      subtitle: 'H&N lève toutes les barrières financières et de sécurité grâce au partenariat stratégique MOU B2B2C. 30 jours sur place; 6h/j (lun–sam; dim repos) soit environ ~93.000 VNĐ/jour.',
      mouTitle: 'Répartition des Ressources Partenaires MOU (B2B2C)',
      opsTitle: 'Partenaires locaux (OPs) financent 100%:',
      opsItem1: '100% Logement: Chambres sécurisées non-mixtes, eau courante, électricité, Wi-Fi.',
      opsItem2: '03 Repas/jour: Cuisine locale saine, équilibrée et hygiénique.',
      hnTitle: 'Inclus dans le forfait H&N (2.790.000 VNĐ):',
      hnItem1: 'Transport privé aller-retour depuis le centre-ville de Da Nang.',
      hnItem2: 'Assurance accident voyage PVI / Bao Viet (30M–50M VNĐ/sinistre).',
      hnItem3: 'Kit Volontaire (2 t-shirts, badge, carnet de bord, matériel).',
      hnItem4: 'Local Buddy 24h/24 & Contrat de protection juridique bilatéral.',
      epTitle: 'À la charge des volontaires (EPs):',
      epItem1: 'Billets de voyage (avion/train/bus) vers le point de rendez-vous à Da Nang.',
      epItem2: 'Dépenses personnelles en dehors des activités du programme.',
      epItem3: 'Engagement à 65% de mission professionnelle et respect des consignes.',
      feeTitle: 'Forfait Tout Inclus 30 Jours sur Place',
      feeDaily: '~93.000 VNĐ/jour',
      feeSchedule: '30 jours (4 semaines) · 6h/j (Lundi – Samedi; Dimanche libre)',
      btnViewContract: 'Voir le Contrat Type',
      btnViewCert: 'Voir le Certificat',
      inclusionsTitle: '8 Avantages Inclus dans le Forfait de 2.790.000 VNĐ:',
      inclusions: [
        { title: 'Hébergement & 3 Repas/Jour Offerts', desc: 'Les partenaires locaux prennent en charge 100% du logement sécurisé et 3 repas complets par jour.' },
        { title: 'Navette Privée Aller-Retour', desc: 'Transport sécurisé aller-retour depuis le centre de Da Nang jusqu’au lieu de mission.' },
        { title: 'Assurance Voyage PVI / Bao Viet', desc: 'Couverture complète accidents corporels et hospitalisation d’urgence pendant 30 jours.' },
        { title: 'Kit Volontaire & Matériel Pro', desc: '2 t-shirts H&N, badge avec QR de sécurité, carnet Leader Diary et matériel de projet.' },
        { title: 'Local Buddy Présent 24h/24', desc: 'Accompagnateur local pour la langue, la sécurité, l’orientation et le bien-être.' },
        { title: 'Contrat Juridique Bilatéral', desc: 'Signature électronique protégeant vos droits et fixant clairement les engagements réciproques.' },
        { title: 'Certificate of Social Leadership', desc: 'Attestation de 4 compétences: Self-Aware, Solution-Oriented, Empowering Others, World Citizen.' },
        { title: 'Réseau AlumNet & Opportunités', desc: 'Réseau des anciens volontaires ouvrant vers des stages et bourses universitaires.' }
      ],
      cohortNote: '⚡ Cohorte strictement limitée à 04 – 08 volontaires pour une immersion de qualité.',
      btnRegisterSlot: 'Réserver ma place dès maintenant',
      pipelineKicker: 'Cycle de Projet de 75 Jours (5 Étapes)',
      pipelineTitle: 'Procédure Opérationnelle Standard',
      phases: [
        { phase: 'Étape 1', duration: 'J-45 à J-30', title: 'Audit de Sécurité & Signature MOU', description: 'Visite de terrain en 3 étapes, signature de l’accord hébergement & repas.' },
        { phase: 'Étape 2', duration: 'J-30 à J-20', title: 'Candidatures & Entretien de Sélection', description: 'Étude des dossiers et entretien individuel dans un délai de 48h maximum.' },
        { phase: 'Étape 3', duration: 'J-20 à J-15', title: 'Signature du Contrat & Règlement', description: 'Signature électronique du contrat et validation du forfait de 2.790.000 VNĐ.' },
        { phase: 'Étape 4', duration: 'J-07 au Jour J', title: 'Séminaire IPS & Activation Assurance', description: 'Atelier de préparation culturelle, remise du kit et activation de l’assurance PVI.' },
        { phase: 'Étape 5', duration: 'Jour J à J+30', title: 'Mission sur le Terrain & Showcase', description: '30 jours sur place (6h/j, lun–sam) conclus par le Closing Showcase.' }
      ],
      weatherTitle: 'Gestion des Risques Météorologiques (SLA ≥ 50%)',
      weatherDesc: 'Octobre à Décembre (Saison des typhons): Suspension des îles (Cham, Ly Son); report à 100% sur les missions intérieures EduTrack et HeritageTrack à Da Nang, Tam Ky, Hoi An.',
      cancellationKicker: 'Politique Transparente à 4 Niveaux: Annulation & Remboursement',
      cancellationTitle: 'Garantie de Protection Financière des Volontaires',
      cancellationTag: 'Stipulée dans le contrat de service',
      cancelTiers: {
        t1Title: '1. Faute de H&N / Partenaire',
        t1Desc: 'Manquement grave à la sécurité ou annulation de la wave',
        t1Rate: 'Remboursement 100% (2.790.000đ) + 10% Dédommagement (279.000đ)',
        t1Time: 'Effectué sous 05 jours ouvrés',
        t2Title: '2. Force Majeure',
        t2Desc: 'Typhon cat 3+, crise sanitaire, urgence médicale ou familiale',
        t2Rate: 'Remboursement 80% (2.232.000đ) OU Avoir 100%',
        t2Time: 'Avoir valable 12 mois sur toute autre Wave',
        t3Title: '3. Annulation Volontaire ≥ 15 Jours',
        t3Desc: 'Désistement pour convenance personnelle avant le départ',
        t3Rate: 'Remboursement 50% (1.395.000đ) OU Cession',
        t3Time: 'Frais de transfert de dossier: 200.000 VNĐ',
        t4Title: '4. Annulation < 14 Jours',
        t4Desc: 'Désistement de dernière minute ou abandon en cours de route',
        t4Rate: '0% Remboursement',
        t4Time: 'Couvre l’assurance activée et les réservations partenaires'
      }
    },
    waves: {
      kicker: 'Calendrier Détaillé des Départs 2026-2027',
      title: 'Calendrier des Départs par Track',
      subtitle: 'Chaque wave dure 30 jours (4 semaines) sur place; 6h/j (lundi – samedi), effectif limité à 04–08 volontaires avec soutien Local Buddy 24h/24.',
      tagPill: 'Cohorte: 04–08 volontaires · Réservation en ligne',
      filterAll: 'Toutes les Waves',
      departureLabel: 'Départ:',
      buddyLabel: 'Local Buddy:',
      slotsRegistered: 'Inscrits:',
      slotsRemaining: '{count} places restantes',
      slotsFull: 'Complet',
      btnApplyWave: 'Réserver cette Wave'
    },
    advisor: {
      kicker: 'Système d’Orientation & Coordination par IA',
      title: 'Conseiller IA Accessible 24/7',
      subtitle: 'Posez directement vos questions en français, anglais ou vietnamien sur le tarif de 2.790.000 VNĐ, le logement, les politiques d’annulation et le choix de votre Track.',
      botRole: 'H&N AI Operating Coordinator',
      onlineStatus: 'En ligne 24/7',
      userModeSubtitle: 'Conseil aux candidats · Choix de Track · Cadre légal',
      adminModeSubtitle: 'Mode Coordination · Suivi des candidatures & Cycle 75 jours',
      tabUser: 'Candidat',
      tabAdmin: 'Coordination',
      suggestLabel: 'Suggestions de questions:',
      inputPlaceholder: 'Posez votre question sur les frais, le logement, l’annulation...',
      btnSend: 'Envoyer',
      loadingText: 'L’IA de H&N analyse vos besoins et consulte le système...',
      copySuccess: 'Réponse copiée',
      btnHoldSlot: 'Réserver ma place'
    },
    modals: {
      contract: {
        headerKicker: 'RÉPUBLIQUE SOCIALISTE DU VIETNAM · Indépendance - Liberté - Bonheur',
        headerTitle: 'CONTRAT DE SERVICE DE COORDINATION DE TOURISME SOLIDAIRE',
        headerSub: 'Protection juridique bilatérale: Organisation H&N & Volontaire (EP)',
        footerNote: '✓ Contrat signé électroniquement par code OTP avant le départ. L’assurance voyage accident PVI / Bao Viet (30M–50M VNĐ) est formellement activée.',
        btnClose: 'J’ai compris & Fermer'
      },
      cert: {
        headerKicker: 'GLOBAL LEADERSHIP DEVELOPMENT FRAMEWORK',
        headerTitle: 'Certificate of Social Leadership & Community Impact',
        certSubtitle: 'H&N Central Vietnam Volunteer Coordination System',
        certCertifies: 'Hereby certifies that',
        certNamePlaceholder: '[NOM COMPLET DU VOLONTAIRE]',
        certBody: 'Has successfully completed the 30-day (4-week) volunteer expedition in Central Vietnam, committing over 140+ service hours (6h/day) and demonstrating 4 core social leadership qualities:',
        q1: '1. Self-Aware: Connaissance de soi et de ses valeurs.',
        q2: '2. Solution-Oriented: Résolution proactive des défis sociétaux.',
        q3: '3. Empowering Others: Transmission et inspiration pour autrui.',
        q4: '4. World Citizen: Responsabilité citoyenne mondiale et respect local.',
        btnClose: 'Fermer'
      },
      register: {
        kicker: 'Portail de Candidature Volontaire Centre-Vietnam',
        title: 'Inscription au Programme H&N',
        subtitle: 'Forfait tout compris: 2.790.000 VNĐ / 30 jours (~93k/j) · 100% hébergement & repas OPs · Assurance PVI/Bao Viet',
        labelName: 'Nom et Prénom:',
        labelPhone: 'Téléphone (WhatsApp/Zalo):',
        labelEmail: 'Adresse Email:',
        labelTrack: 'Parcours souhaité (Track):',
        labelWave: 'Session de départ (Wave):',
        labelMajor: 'Filière / Université:',
        labelNotes: 'Questions / Motivations:',
        placeholderName: 'ex: Julien Laurent',
        placeholderPhone: 'ex: +84 905 123 456',
        placeholderEmail: 'ex: julien.laurent@email.com',
        placeholderMajor: 'ex: Sciences Po / Tourisme durable',
        placeholderNotes: 'Parlez-nous de vos motivations ou atouts...',
        reassurance: 'Vos coordonnées sont strictement confidentielles. Aucun paiement n’est requis avant la réussite de l’entretien et la signature du contrat de protection juridique bilatéral.',
        btnCancel: 'Annuler',
        btnSubmit: 'Confirmer & Valider ma Candidature',
        submitting: 'Envoi en cours...',
        successTitle: 'Candidature Enregistrée avec Succès!',
        successDesc: 'L’équipe de coordination H&N a bien reçu votre dossier. Nous vous contacterons par WhatsApp/téléphone sous 48h pour planifier votre entretien.',
        successTrackingNote: 'Vous pouvez utiliser votre numéro de téléphone pour suivre l’état de votre dossier et votre itinéraire à tout moment.',
        btnTrackNow: 'Consulter mon Dossier & Itinéraire',
        btnClose: 'Fermer'
      },
      tracking: {
        title: 'Suivi de Candidature & Itinéraire Volontaire',
        subtitle: 'Consultez l’avancement de votre dossier, contrat, navette et itinéraire des 4 semaines',
        inputPlaceholder: 'Entrez votre numéro de téléphone (WhatsApp) ou code dossier...',
        btnSearch: 'Vérifier le Statut',
        tabStatus: 'Progression 4 Étapes',
        tabItinerary: 'Itinéraire 4 Semaines',
        tabLogistics: 'Point de Navette & Local Buddy',
        stage1: '1. Candidature Enregistrée & Attribution Code Dossier',
        stage2: '2. Entretien d’Orientation & Validation du Track (≤48h)',
        stage3: '3. Signature Contrat Bilatéral & Activation Assurance (2.790k)',
        stage4: '4. Séance d’Information IPS & Navette vers le Village Projet',
        notFoundTitle: 'Aucun Dossier Trouvé',
        notFoundDesc: 'Veuillez vérifier le numéro ou code saisi. Si vous venez de postuler, un court délai de synchronisation peut être nécessaire.',
        btnCallHotline: 'Assistance Téléphonique: +84 905 123 456'
      },
      quiz: {
        title: 'Quiz d’Orientation: Quel Track Vous Correspond?',
        subtitle: 'Répondez à 4 courtes questions pour identifier le parcours en accord parfait avec vos aspirations et compétences.',
        stepIndicator: 'Question {current} sur {total}',
        btnBack: 'Précédent',
        btnNext: 'Suivant',
        btnSeeResult: 'Découvrir mon Track Recommandé',
        resultTitle: 'Le Parcours Idéal pour Vous:',
        btnChooseThis: 'Choisir ce Track & Postuler',
        btnRestart: 'Recommencer le Quiz'
      }
    },
    footer: {
      desc: 'Système de coordination de tourisme solidaire au Centre-Vietnam. Standards internationaux optimisés en coût et durée, tarif étudiant tout compris de 2.790.000 VNĐ / EP / 30 jours et protection juridique bilatérale.',
      col1Title: 'Programmes & Tracks',
      col2Title: 'Centre de Coordination',
      col3Title: 'Engagements Opérationnels',
      trackingLink: '🔍 Suivi de Dossier & Itinéraire de Départ',
      rights: 'Tous droits réservés © H&N Centre-Vietnam.'
    }
  }
};
