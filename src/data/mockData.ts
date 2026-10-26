import { TrackInfo, WaveInfo, LeadItem, QuizQuestion } from '../types';

export const BRAND_INFO = {
  name: 'H&N Miền Trung',
  fullName: 'Hệ thống điều phối dịch vụ du lịch tình nguyện nội địa khu vực Miền Trung',
  slogan: 'It’s not 4 weeks in a life, it’s a life in 4 weeks',
  subSlogan: 'Trải nghiệm bản địa, đọng lại giá trị',
  positioning: 'Chuẩn mực quốc tế tối ưu chi phí & thời gian - Chi phí sinh viên - Pháp lý bảo hộ 2 chiều an toàn tuyệt đối',
  price: '2.790.000 VNĐ',
  dailyPrice: '~93.000 VNĐ/ngày',
  duration: '30 ngày (4 tuần) tại hiện trường',
  schedule: '6h/ngày (Thứ Hai – Thứ Bảy; Chủ Nhật nghỉ)',
  cohortSize: '04 – 08 EPs/đợt',
  breakEvenThreshold: 1.87, // ~02 EPs/đợt
  standardThreshold: '06 – 08 EPs/đợt',
  weeklyHours: '6h/ngày (Thứ Hai – Thứ Bảy)',
  ratio: {
    service: '65% Cống hiến chuyên môn',
    culture: '35% Giao lưu văn hóa bản địa & chữa lành'
  }
};

export const STRATEGIC_PARTNERS = {
  EduTrack: [
    { name: 'Hi-5 Home', location: 'Đà Nẵng & Hòa Vang', type: 'Trung tâm kỹ năng & tiếng Anh cộng đồng' },
    { name: 'Nature House', location: 'Hòa Vang, Đà Nẵng', type: 'Mô hình giáo dục thiên nhiên thực nghiệm' },
    { name: 'Funny English', location: 'Đà Nẵng', type: 'Câu lạc bộ tiếng Anh phản xạ trẻ em' },
    { name: 'Honey and Bee', location: 'Thừa Thiên Huế', type: 'Không gian đọc sách & giáo dục phát triển sớm' }
  ],
  EcoTrack: [
    { name: 'Hestia Farm', location: 'Hòa Vang, Đà Nẵng', type: 'Nông trại sinh thái hữu cơ & giáo dục xanh' },
    { name: 'D’hami Farm', location: 'Quảng Nam', type: 'Vườn sinh thái trải nghiệm nông nghiệp bền vững' },
    { name: 'Boro Campsite', location: 'Đông Giang, Quảng Nam', type: 'Khu cắm trại & phục hồi rừng sinh thái' },
    { name: 'Toom Sara', location: 'Hòa Vang, Đà Nẵng', type: 'Làng sinh thái đồng bào Cơ Tu' },
    { name: 'Ben Farmstay', location: 'Quảng Nam', type: 'Khu lưu trú nông nghiệp thuận tự nhiên' },
    { name: 'Khu bảo tồn biển Cù Lao Chàm', location: 'Tân Hiệp, Hội An', type: 'Khu dự trữ sinh quyển thế giới UNESCO' }
  ],
  HeritageTrack: [
    { name: 'Làng gốm Thanh Hà', location: 'Hội An, Quảng Nam', type: 'Làng nghề di sản 500 năm tuổi' },
    { name: 'Làng rau Trà Quế', location: 'Hội An, Quảng Nam', type: 'Di sản văn hóa phi vật thể quốc gia' },
    { name: 'Hợp tác xã dệt thổ cẩm Cơ Tu', location: 'Đông Giang, Quảng Nam', type: 'Bảo tồn thổ cẩm truyền thống & trang phục dân tộc' },
    { name: 'GoMee Collective', location: 'Đà Nẵng & Hội An', type: 'Hợp tác xã sáng tạo & nghệ nhân trẻ' },
    { name: 'Làng nghề truyền thống Huế', location: 'Thừa Thiên Huế', type: 'Làng làm hương Thủy Xuân & làng nón lá Tây Hồ' }
  ]
};

export const TRACKS_DATA: TrackInfo[] = [
  {
    id: 'EduTrack',
    name: 'EduTrack - Giáo Dục Thực Chiến Vùng Cao',
    code: 'EDU-SDG4',
    sdg: 'SDG 4 – Quality Education',
    sdgNumber: '04',
    tagline: 'Mang tiếng Anh phản xạ & Kỹ năng số đến trẻ em non cao Quảng Nam - Thừa Thiên Huế',
    locations: ['Đà Nẵng', 'Hòa Vang', 'Nam Giang', 'Thừa Thiên Huế'],
    strategicPartners: ['Hi-5 Home', 'Nature House', 'Funny English', 'Honey and Bee'],
    description: 'Chương trình đưa tri thức hiện đại và sự tự tin đến học sinh đồng bào Cơ Tu, Tà Ôi và trẻ em ngoại thành. Tập trung vào tiếng Anh phản xạ không áp lực thi cử và tin học căn bản cho tương lai số.',
    tasks: [
      'Giảng dạy tiếng Anh phản xạ thực chiến qua trò chơi tương tác, bài hát và tình huống đời thường',
      'Phổ cập tin học văn phòng căn bản (Google Docs, Canva, gõ 10 ngón, an toàn mạng)',
      'Tổ chức Ngày hội Đọc sách & Hùng biện nhỏ khuyến khích sự tự tin của trẻ em vùng cao',
      'Hỗ trợ đối tác địa phương xây dựng kho tài liệu giảng dạy trực quan lâu dài'
    ],
    idealCandidate: [
      'Sinh viên chuyên ngành Sư phạm, Ngôn ngữ Anh hoặc có chứng chỉ IELTS/TOEIC giao tiếp tốt',
      'Sinh viên Công nghệ Thông tin, Thiết kế hoặc yêu thích truyền cảm hứng số',
      'Người kiên nhẫn, yêu mến trẻ nhỏ và sẵn sàng hòa mình cùng cuộc sống bản làng'
    ],
    timeAllocation: {
      service: 65,
      culture: 35
    },
    weeklyHours: '6h/ngày (Thứ Hai – Thứ Bảy; Chủ Nhật nghỉ)',
    color: {
      primary: '#0284c7', // Sky Blue
      bgSubtle: '#f0f9ff',
      border: '#bae6fd',
      badgeBg: '#e0f2fe',
      badgeText: '#0369a1',
      accent: '#0369a1'
    },
    deliverables: [
      'Báo cáo tiến bộ phản xạ của 60+ học sinh địa phương',
      'Kho 30 giáo án số hóa & trò chơi thực chiến bàn giao trường học/đối tác',
      'Chứng chỉ Leadership ghi nhận kỹ năng Empowering Others'
    ]
  },
  {
    id: 'EcoTrack',
    name: 'EcoTrack - Bảo Tồn Rạn San Hô & Rừng Biển Đảo',
    code: 'ECO-SDG14-15',
    sdg: 'SDG 14 & 15 – Life Below Water & On Land',
    sdgNumber: '14/15',
    tagline: 'Hành động vì biển xanh, rạn san hô nguyên sơ và rừng sinh thái nguyên sinh Miền Trung',
    locations: ['Cù Lao Chàm (Hội An)', 'Hestia Farm (Hòa Vang)', 'D’hami Farm', 'Boro Campsite & Toom Sara'],
    strategicPartners: ['Hestia Farm', 'D’hami Farm', 'Boro Campsite', 'Toom Sara', 'Ben Farmstay', 'Khu bảo tồn biển Cù Lao Chàm'],
    description: 'Hòa mình vào thiên nhiên biển đảo nguyên sơ và nông trại hữu cơ, tham gia các chiến dịch kiểm toán rác thải biển, phục hồi rạn san hô và thiết kế tuyến du lịch sinh thái bền vững dưới tán rừng.',
    tasks: [
      'Thu gom, phân loại và kiểm toán rác thải nhựa bãi biển theo tiêu chuẩn quốc tế',
      'Đồng hành cùng kiểm lâm và ngư dân bản địa giám sát bảo vệ rạn san hô non',
      'Tổ chức chiến dịch truyền thông cộng đồng "Nói Không Với Túi Nilon & Ống Hút Nhựa"',
      'Khảo sát nông nghiệp thuận tự nhiên và đồng thiết kế bản đồ trải nghiệm tour giáo dục rừng'
    ],
    idealCandidate: [
      'Sinh viên khối ngành Môi trường, Sinh học, Quản lý tài nguyên, Du lịch sinh thái',
      'Bạn trẻ yêu thích vận động ngoài trời, không ngại nắng gió biển đảo, biết bơi lặn cơ bản',
      'Tư duy giải pháp môi trường bền vững và khát khao bảo vệ hệ sinh thái Việt Nam'
    ],
    timeAllocation: {
      service: 65,
      culture: 35
    },
    weeklyHours: '6h/ngày (Thứ Hai – Thứ Bảy; Chủ Nhật nghỉ)',
    color: {
      primary: '#059669', // Emerald Green
      bgSubtle: '#ecfdf5',
      border: '#a7f3d0',
      badgeBg: '#d1fae5',
      badgeText: '#047857',
      accent: '#047857'
    },
    deliverables: [
      'Báo cáo kiểm toán 500+ kg rác thải biển và dữ liệu phân loại',
      'Tuyến tour giáo dục môi trường thử nghiệm cho cộng đồng và nông trại',
      'Chứng chỉ Leadership ghi nhận kỹ năng Solution-Oriented'
    ]
  },
  {
    id: 'HeritageTrack',
    name: 'HeritageTrack - Số Hóa Làng Nghề & Di Sản Sống',
    code: 'HRT-SDG8',
    sdg: 'SDG 8 – Decent Work & Economic Growth',
    sdgNumber: '08',
    tagline: 'Kết nối hồn cốt nghệ nhân Cơ Tu & Phố Hội với kỷ nguyên thương mại điện tử',
    locations: ['Làng gốm Thanh Hà (Hội An)', 'Làng rau Trà Quế (Hội An)', 'HTX Dệt thổ cẩm Cơ Tu (Đông Giang)', 'Huế'],
    strategicPartners: ['Làng gốm Thanh Hà', 'Làng rau Trà Quế', 'HTX Dệt thổ cẩm Cơ Tu', 'GoMee Collective', 'Làng nghề truyền thống Huế'],
    description: 'Trở thành cầu nối giữa di sản thủ công truyền thống và người tiêu dùng thế hệ mới. Ứng dụng kỹ năng sáng tạo nội dung, nhiếp ảnh và thương mại điện tử để tạo sinh kế bền vững cho nghệ nhân.',
    tasks: [
      'Chụp ảnh tư liệu, phỏng vấn và số hóa câu chuyện cuộc đời của các nghệ nhân cao tuổi',
      'Thiết lập và tối ưu gian hàng thương mại điện tử (Shopee, TikTok Shop, Etsy) cho hợp tác xã',
      'Xây dựng bộ nhận diện thương hiệu sản phẩm bản địa (Lookbook hình ảnh, câu chuyện bao bì)',
      'Hỗ trợ nghệ nhân thực hành livestream giới thiệu quy trình làm gốm vuốt tay và dệt sợi'
    ],
    idealCandidate: [
      'Sinh viên chuyên ngành Marketing, Truyền thông, Thiết kế Đồ họa, Kinh tế hoặc E-Commerce',
      'Người có mắt thẩm mỹ, kỹ năng quay chụp, dựng video ngắn hoặc viết storytelling',
      'Đam mê văn hóa dân tộc, tôn trọng tri thức bản địa và muốn tạo tác động kinh tế thực chất'
    ],
    timeAllocation: {
      service: 65,
      culture: 35
    },
    weeklyHours: '6h/ngày (Thứ Hai – Thứ Bảy; Chủ Nhật nghỉ)',
    color: {
      primary: '#d97706', // Warm Amber
      bgSubtle: '#fffbeb',
      border: '#fde68a',
      badgeBg: '#fef3c7',
      badgeText: '#b45309',
      accent: '#b45309'
    },
    deliverables: [
      'Kênh bán hàng số hoạt động hoàn chỉnh trên TikTok Shop/Shopee',
      'Bộ Lookbook tư liệu 100+ ảnh chất lượng cao về nghệ nhân và sản phẩm',
      'Chứng chỉ Leadership ghi nhận kỹ năng World Citizen & Self-Aware'
    ]
  }
];

export const B2B2C_MOU_INFO = {
  fee: '2.790.000 VNĐ / EP / 30 ngày',
  dailyEquivalent: '~93.000 VNĐ/ngày',
  schedule: '30 ngày trọn vẹn tại hiện trường · 6h/ngày (Thứ Hai – Thứ Bảy; Chủ Nhật nghỉ)',
  localPartnersContribution: {
    title: 'Đối tác địa phương (OPs) tài trợ 100%:',
    items: [
      '100% Chỗ ở an toàn: Phòng riêng biệt nam/nữ, an ninh bảo đảm, điện nước & mạng internet ổn định',
      '03 Bữa ăn tiêu chuẩn/ngày: Chế biến hợp khẩu vị, đảm bảo dinh dưỡng và an toàn vệ sinh thực phẩm'
    ]
  },
  volunteersContribution: {
    title: 'Tình nguyện viên (EPs) tự túc:',
    items: [
      'Chi phí di chuyển (vé xe/tàu/máy bay) cá nhân từ nơi cư trú đến điểm tập kết tại trung tâm TP. Đà Nẵng',
      'Chi tiêu cá nhân ngoài các hạng mục chương trình quy định'
    ]
  },
  hnCoverage: {
    title: 'Quyền lợi H&N chi trả trọn gói trong 2.790.000 VNĐ:',
    items: [
      'Xe hợp đồng đón/trả khép kín 2 chiều từ trung tâm Đà Nẵng về điểm dự án',
      'Bảo hiểm tai nạn du lịch nội địa PVI / Bảo Việt (hạn mức 30.000.000 – 50.000.000 VNĐ/vụ)',
      'Bộ Kit EP & Giáo cụ dự án: 02 áo đồng phục, thẻ đeo, sổ tay TNV, tài liệu giảng dạy/truyền thông',
      'Đội ngũ Local Buddy thường trực hiện trường 24/7 đồng hành',
      'Hợp đồng dịch vụ bảo hộ pháp lý 2 chiều minh bạch',
      'Chứng nhận Certificate of Social Leadership & Community Impact Certificate (4 phẩm chất: Self-Aware, Solution-Oriented, Empowering Others, World Citizen)'
    ]
  }
};

export const CANCELLATION_POLICY = {
  hnFault: {
    title: 'Lỗi từ phía H&N / OP vi phạm nghiêm trọng cam kết',
    terms: 'Hủy dự án hoặc OP vi phạm nghiêm trọng cam kết an toàn/chỗ ở',
    refundRate: 'Hoàn 100% (2.790.000 VNĐ) + Bồi hoàn 10% (279.000 VNĐ)',
    timeline: 'Chi trả trong vòng 05 ngày làm việc'
  },
  forceMajeure: {
    title: 'Sự kiện Bất khả kháng',
    terms: 'Thiên tai bão lũ cấp 3+, dịch bệnh, lý do y tế/gia đình khẩn cấp có xác nhận',
    refundRate: 'Hoàn 80% (2.232.000 VNĐ) HOẶC Bảo lưu 100% trong 12 tháng',
    note: 'Bảo lưu 100% giá trị sang bất kỳ Wave nào khác trong vòng 1 năm'
  },
  epSubjectiveEarly: {
    title: 'EP hủy đơn trước khởi hành >= 15 ngày',
    terms: 'Tự ý hủy vì lý do cá nhân thông báo trước 15 ngày',
    refundRate: 'Hoàn 50% (1.395.000 VNĐ) HOẶC Chuyển nhượng suất',
    adminFee: 'Phí hành chính chuyển nhượng suất: 200.000 VNĐ'
  },
  epSubjectiveLate: {
    title: 'EP hủy đơn trong vòng 14 ngày hoặc bỏ dở',
    terms: 'Hủy trong vòng 14 ngày trước D-Day hoặc tự ý rời bỏ dự án giữa chừng',
    refundRate: 'Không hoàn phí (0%)',
    rationale: 'Bù đắp chi phí bảo hiểm đã kích hoạt, Kit đồng phục đã in ấn và giữ chỗ với OP'
  }
};

export const WEATHER_RISK_POLICY = {
  slaTarget: 'SLA >= 50%',
  drySeason: {
    time: 'Tháng 1 – Tháng 9 (Mùa khô & Biển êm)',
    plan: 'Chạy song song cả 3 Track (biển đảo Cù Lao Chàm/Lý Sơn, sinh thái rừng, giáo dục, làng nghề) với tần suất 02 đợt/tháng.'
  },
  stormSeason: {
    time: 'Tháng 10 – Tháng 12 (Mùa mưa bão miền Trung)',
    action: 'DỪNG TOÀN BỘ tuyến biển đảo (Cù Lao Chàm, Lý Sơn)',
    fallback: 'Chuyển 100% công suất sang tuyến EduTrack và HeritageTrack số hóa trong nhà tại các đô thị kiên cố (Đà Nẵng, Tam Kỳ, Hội An).'
  }
};

export const FIVE_PHASES_75_DAYS = [
  {
    phase: 'Giai đoạn 01 (T-45 đến T-30)',
    title: 'Thẩm định Đối tác 3 Tầng & Ký MOU',
    duration: '15 ngày',
    timing: 'T-45 đến T-30',
    description: 'Khảo sát thực địa, kiểm tra an ninh cơ sở lưu trú, tiêu chuẩn 3 bữa ăn và ký kết biên bản ghi nhớ hợp tác MOU với OPs.'
  },
  {
    phase: 'Giai đoạn 02 (T-30 đến T-20)',
    title: 'Mở Đơn Tuyển Chọn & Phỏng Vấn Sàng Lọc',
    duration: '10 ngày',
    timing: 'T-30 đến T-20',
    description: 'Thu hút ứng viên, sơ loại hồ sơ và phỏng vấn ghép đội ngũ (Lead time duyệt hồ sơ <= 48h, đảm bảo quy mô 4-8 EPs/đợt).'
  },
  {
    phase: 'Giai đoạn 03 (T-20 đến T-15)',
    title: 'Ký Hợp Đồng Pháp Lý & Thu Phí Dịch Vụ',
    duration: '5 ngày',
    timing: 'T-20 đến T-15',
    description: 'Ký kết hợp đồng bảo hộ 2 chiều điện tử, thu 100% phí dịch vụ 2.790.000 VNĐ và khóa danh sách đoàn đi.'
  },
  {
    phase: 'Giai đoạn 04 (T-07 đến D-Day)',
    title: 'Hội Thảo Định Hướng IPS & Mua Bảo Hiểm',
    duration: '7 ngày',
    timing: 'T-07 đến D-Day',
    description: 'Tập huấn kỹ năng văn hóa bản địa IPS, kích hoạt bảo hiểm tai nạn du lịch nội địa PVI/Bảo Việt (30-50M VNĐ/vụ) và kết nối Local Buddy.'
  },
  {
    phase: 'Giai đoạn 05 (D-Day đến Day 30)',
    title: 'Thực Thi Tại Hiện Trường & Closing Showcase',
    duration: '30 ngày',
    timing: 'D-Day đến Day 30',
    description: 'Làm việc 6h/ngày (Thứ Hai – Thứ Bảy; Chủ Nhật nghỉ), cống hiến 65% chuyên môn + 35% văn hóa, kết thúc bằng lễ tổng kết Closing Showcase & cấp chứng nhận Certificate of Social Leadership.'
  }
];

export const THREE_PHASES = FIVE_PHASES_75_DAYS; // Backward compatibility alias

export const PACKAGE_BENEFITS = [
  {
    title: 'Mức phí trọn gói 2.790.000 VNĐ (~93.000đ/ngày)',
    desc: 'Trọn vẹn 30 ngày tại hiện trường; lịch làm việc 6h/ngày (Thứ Hai – Thứ Bảy; Chủ Nhật nghỉ) không phát sinh phụ phí ẩn.',
    icon: 'BadgePercent'
  },
  {
    title: '100% Chỗ ở an toàn & 3 bữa ăn/ngày từ OPs',
    desc: 'Đối tác địa phương tài trợ phòng riêng nam/nữ, an ninh bảo đảm, điện nước mạng ổn định và 03 bữa ăn đủ dinh dưỡng mỗi ngày.',
    icon: 'Home'
  },
  {
    title: 'Xe hợp đồng đưa đón 2 chiều khép kín',
    desc: 'H&N bố trí xe hợp đồng đón/trả EPs từ điểm tập kết trung tâm TP. Đà Nẵng đến tận thôn bản / bến tàu dự án an toàn tuyệt đối.',
    icon: 'Bus'
  },
  {
    title: 'Bảo hiểm du lịch nội địa PVI / Bảo Việt',
    desc: 'Hạn mức 30.000.000 – 50.000.000 VNĐ/vụ bảo hiểm tai nạn và viện phí khẩn cấp, kích hoạt trước ngày khởi hành.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Bộ Kit EP & Giáo cụ dự án chuẩn chỉnh',
    desc: 'Bao gồm 02 áo đồng phục H&N, thẻ đeo TNV bảo hộ, sổ tay TNV Leader Diary, cẩm nang văn hóa và tài liệu giảng dạy/truyền thông.',
    icon: 'PackageCheck'
  },
  {
    title: 'Đội ngũ Local Buddy thường trực 24/7',
    desc: 'Người bản địa giàu kinh nghiệm hỗ trợ thường trực hiện trường, đồng hành phiên dịch, y tế và gắn kết cộng đồng địa phương.',
    icon: 'Users'
  },
  {
    title: 'Hợp đồng bảo hộ pháp lý 2 chiều minh bạch',
    desc: 'Ký kết điện tử xác lập rõ quyền lợi, an toàn, hỗ trợ khẩn cấp và chính sách hoàn hủy đền bù minh bạch giữa H&N và EP.',
    icon: 'FileText'
  },
  {
    title: 'Certificate of Social Leadership & Impact',
    desc: 'Chứng nhận 4 phẩm chất lãnh đạo chuẩn quốc tế (Self-Aware, Solution-Oriented, Empowering Others, World Citizen) làm đẹp CV du học/việc làm.',
    icon: 'Award'
  }
];

export const WAVES_DATA: WaveInfo[] = [
  // 1. EduTrack (SDG 4) - 2 Waves
  {
    id: 'W-01',
    code: 'Wave 01',
    name: 'Khăn Ấm Non Cao - Hi-5 Home & Hòa Vang',
    trackId: 'EduTrack',
    trackName: 'EduTrack (SDG 4)',
    destination: 'Hi-5 Home & Nam Giang, Đà Nẵng - Quảng Nam',
    partnerHost: 'Hi-5 Home & Nature House',
    startDate: '15/11/2026',
    endDate: '15/12/2026',
    duration: '30 ngày (4 tuần)',
    totalSlots: 8,
    registeredCount: 6,
    breakEvenTarget: 1.87,
    standardThreshold: 6,
    seasonType: 'Mùa khô (Chạy tiêu chuẩn)',
    status: 'Gần đủ slot',
    localBuddies: ['Bling Thị Hợi (Hi-5 Home Lead)', 'Zơrâm Tuấn (Cán bộ đoàn)'],
    highlight: 'Dạy tiếng Anh phản xạ tương tác 6h/ngày & phổ cập tin học Canva cho trẻ em'
  },
  {
    id: 'W-02',
    code: 'Wave 02',
    name: 'Ánh Sáng Bản Làng - Honey and Bee Huế',
    trackId: 'EduTrack',
    trackName: 'EduTrack (SDG 4)',
    destination: 'Honey and Bee & A Lưới, Thừa Thiên Huế',
    partnerHost: 'Honey and Bee & Funny English',
    startDate: '10/01/2027',
    endDate: '09/02/2027',
    duration: '30 ngày (4 tuần)',
    totalSlots: 8,
    registeredCount: 5,
    breakEvenTarget: 1.87,
    standardThreshold: 6,
    seasonType: 'Mùa khô (Chạy tiêu chuẩn)',
    status: 'Đang mở đơn',
    localBuddies: ['Hồ Văn Thắng (Honey and Bee Coordinator)', 'Kăn Lương (Cán bộ văn hóa Tà Ôi)'],
    highlight: 'Xây dựng tủ sách cộng đồng & phổ cập kỹ năng số, tiếng Anh giao tiếp thanh thiếu niên'
  },

  // 2. EcoTrack (SDG 14 & 15) - 2 Waves
  {
    id: 'W-03',
    code: 'Wave 03',
    name: 'Biển Đảo Xanh - Khu Bảo Tồn Cù Lao Chàm',
    trackId: 'EcoTrack',
    trackName: 'EcoTrack (SDG 14 & 15)',
    destination: 'Bãi Làng & Bãi Hương, Cù Lao Chàm, Hội An',
    partnerHost: 'Khu bảo tồn biển Cù Lao Chàm & Ben Farmstay',
    startDate: '05/12/2026',
    endDate: '04/01/2027',
    duration: '30 ngày (4 tuần)',
    totalSlots: 8,
    registeredCount: 7,
    breakEvenTarget: 1.87,
    standardThreshold: 6,
    seasonType: 'Mùa khô (Chạy tiêu chuẩn)',
    status: 'Gần đủ slot',
    localBuddies: ['Lê Hữu Phúc (Ban Quản lý Khu Bảo tồn Biển)', 'Mai Thị Cúc (Chủ Homestay Bãi Làng)'],
    highlight: 'Kiểm toán rác thải biển, lặn khảo sát san hô & truyền thông giảm nhựa cộng đồng đảo'
  },
  {
    id: 'W-04',
    code: 'Wave 04',
    name: 'Rừng Sinh Thái Nông Trại - Hestia Farm & Boro',
    trackId: 'EcoTrack',
    trackName: 'EcoTrack (SDG 14 & 15)',
    destination: 'Hestia Farm (Hòa Vang) & Boro Campsite (Đông Giang)',
    partnerHost: 'Hestia Farm & Toom Sara & D’hami Farm',
    startDate: '15/01/2027',
    endDate: '14/02/2027',
    duration: '30 ngày (4 tuần)',
    totalSlots: 8,
    registeredCount: 5,
    breakEvenTarget: 1.87,
    standardThreshold: 6,
    seasonType: 'Mùa khô (Chạy tiêu chuẩn)',
    status: 'Đang mở đơn',
    localBuddies: ['Nguyễn Hữu Trí (Chủ trang trại Hestia Farm)', 'Bùi Văn Hải (Toom Sara Lead)'],
    highlight: 'Phục hồi rừng sinh thái, xây dựng vườn thuận tự nhiên & trải nghiệm du lịch xanh'
  },

  // 3. HeritageTrack (SDG 8) - 2 Waves
  {
    id: 'W-05',
    code: 'Wave 05',
    name: 'Sắc Màu Làng Nghề - Gốm Thanh Hà & Thổ Cẩm Cơ Tu',
    trackId: 'HeritageTrack',
    trackName: 'HeritageTrack (SDG 8)',
    destination: 'Làng gốm Thanh Hà (Hội An) & HTX Dệt Cơ Tu (Đông Giang)',
    partnerHost: 'Làng gốm Thanh Hà & HTX Dệt Cơ Tu',
    startDate: '20/12/2026',
    endDate: '19/01/2027',
    duration: '30 ngày (4 tuần)',
    totalSlots: 8,
    registeredCount: 6,
    breakEvenTarget: 1.87,
    standardThreshold: 6,
    seasonType: 'Mùa mưa bão (Ưu tiên trong nhà)',
    status: 'Đang mở đơn',
    localBuddies: ['Nguyễn Văn Nam (Nghệ nhân gốm thế hệ thứ 4)', 'Alăng Mái (Chủ nhiệm HTX Dệt Cơ Tu)'],
    highlight: 'Dựng shop TikTok, sản xuất Lookbook tư liệu & tổ chức triển lãm văn hóa sống trong nhà kiên cố'
  },
  {
    id: 'W-06',
    code: 'Wave 06',
    name: 'Hương Sắc Bản Địa - Làng Rau Trà Quế & GoMee Collective',
    trackId: 'HeritageTrack',
    trackName: 'HeritageTrack (SDG 8)',
    destination: 'Làng rau Trà Quế (Hội An) & GoMee Collective',
    partnerHost: 'Làng rau Trà Quế & GoMee & Làng nghề Huế',
    startDate: '01/02/2027',
    endDate: '03/03/2027',
    duration: '30 ngày (4 tuần)',
    totalSlots: 8,
    registeredCount: 4,
    breakEvenTarget: 1.87,
    standardThreshold: 6,
    seasonType: 'Mùa khô (Chạy tiêu chuẩn)',
    status: 'Đang mở đơn',
    localBuddies: ['Trần Thị Thảo (HTX Trà Quế)', 'Phan Thanh Nhã (GoMee Collective)'],
    highlight: 'Số hóa mô hình canh tác hữu cơ cổ truyền, thiết kế bao bì storytelling & kênh thương mại số'
  }
];

export const INITIAL_LEADS: LeadItem[] = [
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
    wave: 'Wave 05 - Sắc Màu Làng Nghề - Gốm & Thổ Cẩm (Khởi hành 20/12/2026)',
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
    wave: 'Wave 01 - Khăn Ấm Non Cao - Nam Giang (Khởi hành 15/11/2026)',
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

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Khi nghĩ về một kỳ nghỉ 4 tuần ý nghĩa, điều gì thôi thúc trái tim bạn mạnh mẽ nhất?',
    options: [
      {
        text: 'Đứng trên bục giảng gỗ giữa đại ngàn, thấy ánh mắt lấp lánh của các em nhỏ khi nói được câu tiếng Anh đầu tiên',
        track: 'EduTrack',
        rationale: 'Bạn có ngọn lửa sư phạm và khao khát nâng đỡ tri thức thế hệ trẻ!'
      },
      {
        text: 'Đắm mình trong làn nước biển trong vắt, lặn ngắm san hô và tự tay làm sạch từng mét bờ biển hoang sơ',
        track: 'EcoTrack',
        rationale: 'Bạn là chiến binh bảo vệ môi trường biển nhiệt huyết!'
      },
      {
        text: 'Ngồi bên bếp lửa nghe nghệ nhân kể chuyện dệt vải, cầm máy ảnh lưu lại những đường hoa văn nghìn năm',
        track: 'HeritageTrack',
        rationale: 'Bạn có tâm hồn nghệ thuật và niềm trân quý di sản văn hóa sâu sắc!'
      }
    ]
  },
  {
    id: 2,
    question: 'Kỹ năng nào bạn tự tin nhất và muốn mang ra "thực chiến" cống hiến cho xã hội?',
    options: [
      {
        text: 'Ngoại ngữ giao tiếp, tin học văn phòng, kỹ năng tương tác và truyền lửa cho học sinh',
        track: 'EduTrack',
        rationale: 'Rất hợp với vai trò giảng viên cộng đồng tại EduTrack!'
      },
      {
        text: 'Nghiên cứu thiên nhiên, phân loại rác thải, thể lực tốt, bơi lội và hoạt động bền bỉ ngoài trời',
        track: 'EcoTrack',
        rationale: 'Sức bền và ý thức môi trường cực kỳ chuẩn cho EcoTrack!'
      },
      {
        text: 'Sáng tạo nội dung số, chụp ảnh, thiết kế, dựng video ngắn hoặc bán hàng thương mại điện tử',
        track: 'HeritageTrack',
        rationale: 'Bạn chính là nhân tố số hóa mà các làng nghề truyền thống đang khát khao!'
      }
    ]
  },
  {
    id: 3,
    question: 'Bạn mong muốn nhận lại giá trị chuyển hóa lớn nhất nào sau 4 tuần trải nghiệm?',
    options: [
      {
        text: 'Năng lực "Empowering Others" - Biết cách truyền cảm hứng và trao quyền để người khác phát triển',
        track: 'EduTrack',
        rationale: 'EduTrack giúp bạn trở thành nhà lãnh đạo biết nâng đỡ người khác!'
      },
      {
        text: 'Năng lực "Solution-Oriented" - Đối mặt thực tế khó khăn và kiên định kiến tạo giải pháp sinh thái',
        track: 'EcoTrack',
        rationale: 'EcoTrack tôi luyện bản lĩnh hành động giải quyết vấn đề thực tế!'
      },
      {
        text: 'Năng lực "World Citizen & Self-Aware" - Hiểu sâu căn tính cội nguồn và kết nối văn hóa với thế giới số',
        track: 'HeritageTrack',
        rationale: 'HeritageTrack mở rộng lăng kính thế giới và trân quý giá trị bản địa!'
      }
    ]
  }
];

export const CONTRACT_PREVIEW_TERMS = [
  {
    article: 'Điều 1: Mục đích & Cơ cấu gói dịch vụ (2.790.000 VNĐ)',
    content: 'Chương trình là dịch vụ điều phối du lịch tình nguyện nội địa trải nghiệm bản địa kết hợp cống hiến chuyên môn công ích kéo dài 30 ngày (4 tuần) tại hiện trường; lịch làm việc 6h/ngày (Thứ Hai – Thứ Bảy; Chủ Nhật nghỉ). Mức phí trọn gói là 2.790.000 VNĐ / EP (~93.000 VNĐ/ngày).'
  },
  {
    article: 'Điều 2: Bảo hộ an toàn, Bảo hiểm & Trách nhiệm pháp lý H&N',
    content: 'H&N chịu trách nhiệm mua bảo hiểm tai nạn du lịch nội địa PVI / Bảo Việt (hạn mức 30.000.000 – 50.000.000 VNĐ/vụ); bố trí xe hợp đồng đón/trả khép kín 2 chiều từ trung tâm Đà Nẵng; cung cấp Bộ Kit EP & giáo cụ; chỉ định Local Buddy thường trực hiện trường 24/7.'
  },
  {
    article: 'Điều 3: Cơ chế hợp tác B2B2C & Cam kết của Tình nguyện viên',
    content: 'Đối tác địa phương (OPs) tài trợ 100% chỗ ở an toàn (phòng riêng nam/nữ) và 03 bữa ăn tiêu chuẩn/ngày. EPs tự túc chi phí di chuyển đến điểm tập kết Đà Nẵng, cam kết cống hiến 65% chuyên môn và tôn trọng văn hóa bản địa.'
  },
  {
    article: 'Điều 4: Quyền lợi chứng nhận Certificate of Social Leadership',
    content: 'Khi hoàn thành ít nhất 80% thời lượng và vượt qua phiên Closing Showcase / Debrief Space, EP được cấp chứng nhận "Certificate of Social Leadership" & "Community Impact Certificate" công nhận 4 năng lực lãnh đạo: Self-Aware, Solution-Oriented, Empowering Others, World Citizen.'
  },
  {
    article: 'Điều 5: Chính sách Hoàn hủy, Bảo lưu & Đền bù minh bạch',
    content: 'Lỗi từ H&N: Hoàn 100% (2.790.000 VNĐ) + bồi hoàn 10% (279.000 VNĐ) trong 05 ngày làm việc. Bất khả kháng: Hoàn 80% (2.232.000 VNĐ) hoặc bảo lưu 100% trong 12 tháng. EP tự hủy trước >=15 ngày: Hoàn 50% (1.395.000 VNĐ) hoặc chuyển nhượng phí 200.000 VNĐ. EP hủy trong vòng 14 ngày hoặc bỏ dở: 0% hoàn phí.'
  }
];

export const TRACK_ITINERARIES: Record<string, import('../types').ApplicantItinerary> = {
  EduTrack: {
    trackId: 'EduTrack',
    trackName: 'EduTrack - Giáo Dục Thực Chiến Vùng Cao',
    waveName: 'Wave 01 & Wave 02 - Non Cao Nam Giang & A Lưới',
    destination: 'Huyện Nam Giang, Tỉnh Quảng Nam (và A Lưới, TT-Huế)',
    startDate: '15/11/2026',
    endDate: '13/12/2026',
    weeks: [
      {
        weekNumber: 1,
        title: 'Nhập Môn & First Day of Work',
        focus: 'Ổn định lưu trú, hội kiến Già Làng & khảo sát năng lực học sinh',
        ratio: '50% Khảo sát sư phạm · 50% Hội nhập văn hóa Cơ Tu',
        activities: [
          'Di chuyển xe 29 chỗ từ Đà Nẵng lên Nam Giang, nhận phòng nội trú và gặp gỡ Local Buddy A Rất Min',
          'Lễ đón chào ấm cúng cùng Già làng, thưởng thức điệu múa Tung Tung Da Dá bên bếp lửa nhà Gươl',
          'Khảo sát phản xạ tiếng Anh và năng lực tin học của 60+ học sinh tại Trường PTDT Bán trú',
          'Phân chia tổ bộ môn (Tiếng Anh giao tiếp / Kỹ năng số Canva) và chuẩn bị giáo cụ trực quan'
        ]
      },
      {
        weekNumber: 2,
        title: 'Cống Hiến Thực Chiến Chuyên Môn',
        focus: 'Giảng dạy tiếng Anh phản xạ & Phổ cập tin học văn phòng',
        ratio: '65% Giảng dạy chuyên môn · 35% Văn hóa & Tắm suối thư giãn',
        activities: [
          'Tổ chức 28 giờ đứng lớp thực chiến: Phương pháp học qua kịch nghệ, flashcard đời thường và trò chơi vận động',
          'Phổ cập tin học căn bản cho học sinh khối 6-8: Kỹ năng gõ 10 ngón, làm thiệp tặng thầy cô qua Canva',
          'Buổi workshop hướng dẫn giáo viên địa phương xây dựng kho giáo án số hóa lâu dài',
          'Cuối tuần cùng Local Buddy trekking thác Grăng, hái rau rừng và giao lưu văn hóa thanh niên bản địa'
        ]
      },
      {
        weekNumber: 3,
        title: 'Ngày Hội Hùng Biện & Chữa Lành Non Cao',
        focus: 'Tổ chức Ngày Hội Đọc Sách, đánh giá tiến bộ & trải nghiệm đời sống nương rẫy',
        ratio: '65% Dự án cộng đồng · 35% Trải nghiệm sinh kế bản tộc',
        activities: [
          'Đăng cai tổ chức "Ngày Hội Sách & Tiếng Anh Em Vui 2026" với 5 trạm trò chơi phản xạ tự tin',
          'Trao 10 góc đọc sách thân thiện và 200 cuốn truyện song ngữ cho thư viện vùng cao',
          'Cùng bà con Cơ Tu lên nương rẫy thu hoạch sắn mì, học đan lát mây tre truyền thống',
          'Phiên họp Reflection giữa kỳ cùng ban điều phối H&N để tinh chỉnh chương trình tuần cuối'
        ]
      },
      {
        weekNumber: 4,
        title: 'Bàn Giao Bền Vững, Debrief Space & Trưởng Thành',
        focus: 'Bàn giao kho tư liệu, phản chiếu 4 phẩm chất lãnh đạo & Trao chứng nhận',
        ratio: '40% Bàn giao dự án · 60% Debrief Space & Tri ân',
        activities: [
          'Bàn giao kho 30 giáo án số hóa và bản báo cáo theo dõi tiến bộ từng học sinh cho nhà trường',
          'Lễ bế mạc xúc động, tặng quà lưu niệm handmade của học sinh và trao thư cảm ơn của UBND Xã',
          'Không gian Debrief Space: Phản chiếu 4 năng lực lãnh đạo (Self-Aware, Solution-Oriented, Empowering Others, World Citizen)',
          'Lễ tốt nghiệp trang trọng, cấp chứng nhận "Certificate of Social Leadership" và lên xe 29 chỗ trở về Đà Nẵng'
        ]
      }
    ],
    pickupPoint: {
      location: 'Cổng chính Ga Đà Nẵng (202 Hải Phòng, Q. Hải Châu) & VP H&N (34 Nguyễn Tri Phương, Đà Nẵng)',
      vehicleType: 'Xe khách chất lượng cao 29 chỗ (động cơ chuyên leo đèo dốc, điều hòa 2 chiều, bác tài kinh nghiệm)',
      departureTime: '06:30 Sáng (Ngày khởi hành của Wave)',
      gatherTime: '06:00 Sáng (Điểm danh, kiểm tra CCCD, nhận Volunteer Kit và ăn sáng nhẹ)',
      driverNote: 'Bác tài Lê Văn Thành (0905 334 221) - Có biển hiệu H&N Miền Trung đón tại sảnh',
      mapNote: 'Có bãi gửi xe máy dài hạn an toàn đối diện cổng Ga Đà Nẵng cho các bạn ở tỉnh xa.'
    },
    accommodation: {
      name: 'Homestay Bản Làng Cơ Tu & Nhà Công Vụ Giáo Viên Nam Giang',
      type: 'Homestay văn hóa & Phòng nội trú trường học đạt chuẩn an toàn an ninh thẩm định 2 chiều',
      address: 'Thôn Đắc Pring, Xã La Dêê, Huyện Nam Giang, Tỉnh Quảng Nam',
      standards: [
        'Nước sạch hợp vệ sinh và hệ thống bình nóng lạnh đầy đủ',
        'Phòng ngủ tập thể nam/nữ riêng biệt, đệm êm, màn chống côn trùng tiêu chuẩn y tế',
        'Nhà vệ sinh tự hoại khép kín, an ninh đảm bảo với lực lượng dân quân tự vệ hỗ trợ 24/7',
        'Không gian bếp ăn tập thể ấm cúng nấu 3 bữa cơm nóng hổi/ngày theo thực đơn dinh dưỡng'
      ],
      mealsIncluded: '3 bữa/ngày (Bữa sáng nóng + Bữa trưa & tối 4 món địa phương: rau rừng, thịt kho, canh cá mát non cao)'
    },
    localBuddy: {
      name: 'A Rất Min',
      role: 'Bí thư Đoàn xã La Dêê · Thổ địa văn hóa Cơ Tu phụ trách hỗ trợ TNV',
      phone: '0941 234 567',
      zalo: '0941 234 567',
      community: 'Đồng bào Cơ Tu huyện Nam Giang',
      bio: 'Người con của núi rừng Nam Giang, tốt nghiệp ĐH Sư phạm Đà Nẵng trở về quê hương cống hiến. Có 5 năm kinh nghiệm điều phối các đoàn tình nguyện quốc tế và trong nước.'
    },
    kitStatus: {
      items: ['02 Áo đồng phục H&N cotton thấm hút', 'Thẻ đeo TNV có mã QR bảo hộ 2 chiều', 'Sổ tay TNV Leader Diary & Bút tre', 'Tài liệu giảng dạy tiếng Anh & Tin học số', 'Mũ tai bèo bảo hộ dã ngoại'],
      deliveryMethod: 'Phát trực tiếp tại điểm danh tập trung lúc 06:00 sáng ngày khởi hành'
    },
    insuranceStatus: {
      provider: 'Bảo hiểm PVI / Bảo Việt - Gói Du Lịch Nội Địa Trọn Gói',
      policyNumber: 'HN-PVI-2026-VOLUNTEER',
      coverage: '30.000.000 – 50.000.000 VNĐ / vụ tai nạn hoặc viện phí khẩn cấp',
      status: 'Đã kích hoạt'
    }
  },

  EcoTrack: {
    trackId: 'EcoTrack',
    trackName: 'EcoTrack - Bảo Tồn Rạn San Hô & Rừng Biển Đảo',
    waveName: 'Wave 03 & Wave 04 - Biển Đảo Xanh Cù Lao Chàm & Lý Sơn',
    destination: 'Khu bảo tồn biển Cù Lao Chàm, Xã đảo Tân Hiệp, TP. Hội An, Quảng Nam',
    startDate: '05/12/2026',
    endDate: '02/01/2027',
    weeks: [
      {
        weekNumber: 1,
        title: 'Nhập Môn Sinh Thái & Kiểm Soát Rác Biển',
        focus: 'Tập huấn quy chuẩn kiểm toán rác thải biển quốc tế & kỹ năng an toàn bơi lặn',
        ratio: '50% Huấn luyện an toàn biển · 50% Khảo sát thực địa bãi biển',
        activities: [
          'Xe 29 chỗ đưa đoàn từ Đà Nẵng đến Cảng Cửa Đại, đi Cano cao tốc chuyên dụng sang Bãi Làng',
          'Tập huấn an toàn sông nước & kỹ năng lặn ống thở (snorkeling) cùng Kiểm lâm khu bảo tồn biển',
          'Khảo sát các điểm nóng rác thải trôi dạt tại Bãi Chồng, Bãi Bìm và Eo Gió Cù Lao Chàm',
          'Gặp gỡ ngư dân bản địa, lắng nghe những biến đổi khí hậu ảnh hưởng đến ngư trường đánh bắt'
        ]
      },
      {
        weekNumber: 2,
        title: 'Kiểm Toán Rác & Chiến Dịch Giảm Nhựa',
        focus: 'Thu gom, phân loại theo tiêu chuẩn quốc tế và tuyên truyền cộng đồng dân cư đảo',
        ratio: '65% Hoạt động bảo tồn thực chiến · 35% Lặn ngắm san hô & thư giãn',
        activities: [
          'Tổ chức 4 buổi ra quân dọn sạch 3km bờ biển hoang sơ, thu gom và phân loại hơn 500kg rác nhựa',
          'Nhập liệu bảng kiểm toán rác thải biển gửi Mạng lưới Hành động vì Môi trường Biển Việt Nam',
          'Triển khai chiến dịch "Đổi rác nhựa lấy làn tre đi chợ" cùng các tiểu thương chợ đêm Bãi Làng',
          'Lặn khảo sát vườn ươm san hô non tại Hòn Dài dưới sự giám sát trực tiếp của chuyên gia sinh vật biển'
        ]
      },
      {
        weekNumber: 3,
        title: 'Đồng Thiết Kế Tuyến Tour Giáo Dục Rừng',
        focus: 'Khảo sát sinh thái rừng nguyên sinh, cắm mốc tour học tập dưới tán cây di sản',
        ratio: '65% Thiết kế giải pháp sinh thái · 35% Trải nghiệm câu mực đêm cùng ngư dân',
        activities: [
          'Trekking tuyến đường rừng Bãi Hương - Cây Đa Nghìn Năm tuổi, ghi chép hệ thực vật thuốc quý',
          'Lắp đặt 10 biển chỉ dẫn sinh thái bằng gỗ tái chế nhắc nhở du khách không để lại rác',
          'Thiết kế cẩm nang số "Green Travel Guide to Cham Islands" dành cho du khách thế hệ mới',
          'Trải nghiệm câu mực đêm cùng gia đình ngư dân và nướng hải sản tươi tại bè nuôi cá bền vững'
        ]
      },
      {
        weekNumber: 4,
        title: 'Bàn Giao Dự Án Xanh & Chứng Nhận Solution-Oriented',
        focus: 'Báo cáo tác động môi trường, phiên Debrief Space & Trao chứng nhận',
        ratio: '40% Báo cáo nghiệm thu · 60% Debrief Space & Vinh danh',
        activities: [
          'Bàn giao báo cáo kiểm toán rác thải và sơ đồ tuyến tour giáo dục cho Ban Quản lý Khu bảo tồn',
          'Tổ chức đêm nhạc mộc Acoustic "Hát Cho Biển Xanh" cùng thanh niên địa phương trên bãi cát',
          'Debrief Space: Đúc kết năng lực Solution-Oriented - Dám đương đầu với những bài toán sinh thái gai góc',
          'Cấp chứng nhận song ngữ Certificate of Social Leadership và đi cano trở về đất liền'
        ]
      }
    ],
    pickupPoint: {
      location: 'Cổng số 2 Cung Thể Thao Tiên Sơn (Đường Phan Đăng Lưu, Đà Nẵng) & Bến tàu Cửa Đại (Hội An)',
      vehicleType: 'Xe khách 29 chỗ đưa đến bến + Cano cao tốc 36 chỗ sang đảo (đầy đủ áo phao cứu sinh)',
      departureTime: '06:45 Sáng',
      gatherTime: '06:15 Sáng (Điểm danh và cấp phát túi chống nước chuyên dụng)',
      driverNote: 'Điều phối viên Hải (0935 678 910) cầm cờ hiệu xanh H&N đón tại Cung Tiên Sơn',
      mapNote: 'Có bãi gửi xe máy dài hạn an toàn tại Cung Thể Thao Tiên Sơn.'
    },
    accommodation: {
      name: 'Homestay Sinh Thái Biển Xanh Bãi Làng',
      type: 'Homestay ven biển đạt chuẩn không rác thải nhựa của Khu Bảo Tồn',
      address: 'Thôn Bãi Làng, Xã đảo Tân Hiệp, Thành phố Hội An, Quảng Nam',
      standards: [
        'Vị trí sát bờ biển thoáng đãng, lộng gió tự nhiên, có quạt máy và nước ngọt dồi dào',
        'Phòng nghỉ sạch sẽ, giường đệm có rèm riêng tư, nhà vệ sinh tự hoại đạt chuẩn du lịch',
        'Cam kết 100% không sử dụng túi nilon hay đồ nhựa dùng một lần trong sinh hoạt',
        'Bếp ăn địa phương phong phú với hải sản tươi mua từ thuyền sớm và rau rừng Cù Lao Chàm'
      ],
      mealsIncluded: '3 bữa/ngày (Bữa sáng bánh mì/bún cá + Trưa và tối thực đơn hải sản tươi, rau rừng xào tỏi, canh chua)'
    },
    localBuddy: {
      name: 'Ngô Tấn Hải',
      role: 'Cán bộ Tuần tra Môi trường Khu Bảo Tồn Biển Cù Lao Chàm',
      phone: '0935 678 910',
      zalo: '0935 678 910',
      community: 'Cộng đồng cư dân đảo Tân Hiệp, Cù Lao Chàm',
      bio: 'Thợ lặn chuyên nghiệp PADI Divemaster, gắn bó 8 năm với công tác ươm san hô và giám sát bảo tồn rạn san hô biển miền Trung.'
    },
    kitStatus: {
      items: ['Áo thun đồng phục H&N xanh ngọc', 'Kính lặn ống thở cá nhân tiêu chuẩn', 'Găng tay dọn rác bảo hộ chuyên dụng', 'Bình nước kim loại giữ nhiệt 800ml', 'Túi chống nước Drybag 10L'],
      deliveryMethod: 'Phát trực tiếp tại điểm danh tập trung lúc 06:15 sáng ngày khởi hành'
    },
    insuranceStatus: {
      provider: 'Bảo hiểm Quân Đội (MIC) - Gói Du Lịch Biển Đảo Trọn Gói',
      policyNumber: 'HN-MIC-2026-ECO-OCEAN',
      coverage: '100.000.000 VNĐ / vụ tai nạn và bảo lãnh y tế cấp cứu biển',
      status: 'Đã kích hoạt'
    }
  },

  HeritageTrack: {
    trackId: 'HeritageTrack',
    trackName: 'HeritageTrack - Số Hóa Làng Nghề & Di Sản Sống',
    waveName: 'Wave 05 & Wave 06 - Sắc Màu Làng Nghề Thổ Cẩm & Gốm',
    destination: 'Làng dệt thổ cẩm Zơrâm (Đông Giang) & Làng gốm Thanh Hà (Hội An), Quảng Nam',
    startDate: '20/12/2026',
    endDate: '17/01/2027',
    weeks: [
      {
        weekNumber: 1,
        title: 'Nhập Môn Di Sản & Gặp Gỡ Nghệ Nhân',
        focus: 'Tìm hiểu quy trình thủ công truyền thống, phỏng vấn và thấu cảm đời sống nghệ nhân',
        ratio: '50% Tiếp cận văn hóa làng nghề · 50% Lập kế hoạch truyền thông số',
        activities: [
          'Xe 29 chỗ đưa đoàn đến làng nghề, ổn định chỗ ở tại homestay nhà sàn dệt truyền thống',
          'Lễ bái tổ nghề gốm / lễ đón khách bên khung cửi cổ truyền của các Mẹ và Nghệ nhân ưu tú',
          'Thực hành trải nghiệm vuốt gốm thủ công bằng tay và nhặt sợi vỏ cây nhuộm màu tự nhiên',
          'Lập danh mục các sản phẩm chủ lực cần số hóa và chụp ảnh thương mại điện tử'
        ]
      },
      {
        weekNumber: 2,
        title: 'Sáng Tạo Nội Dung & Lookbook Di Sản',
        focus: 'Chụp ảnh tư liệu, quay video ngắn storytelling và thiết kế bao bì nhận diện',
        ratio: '65% Sáng tạo số chuyên môn · 35% Thưởng thức ẩm thực và đi dạo phố cổ',
        activities: [
          'Thực hiện bộ ảnh tư liệu Lookbook 100+ ảnh nghệ thuật tôn vinh bàn tay vàng của nghệ nhân cao tuổi',
          'Quay và dựng 5 video ngắn TikTok/Reels kể câu chuyện kỳ công sau mỗi tấm khăn dệt hoa văn Cơ Tu',
          'Thiết kế tem nhãn truy xuất nguồn gốc QR Code và câu chuyện bao bì thân thiện môi trường',
          'Đêm lửa trại giao lưu ca hát dân ca cùng các bạn trẻ nghệ nhân thế hệ nối nghiệp'
        ]
      },
      {
        weekNumber: 3,
        title: 'Thiết Lập Gian Hàng Số & Thực Hành Livestream',
        focus: 'Đưa sản phẩm lên TikTok Shop / Shopee và hướng dẫn nghệ nhân bán hàng đa kênh',
        ratio: '65% Chuyên môn thương mại số · 35% Giao lưu văn hóa bản địa',
        activities: [
          'Khởi tạo và hoàn thiện gian hàng chính thức "Di Sản Bản Địa Miền Trung" trên TikTok Shop & Shopee',
          'Tối ưu SEO từ khóa sản phẩm, liên kết tài khoản ngân hàng và thiết lập đơn vị vận chuyển ViettelPost',
          'Tổ chức phiên thực hành Livestream đầu tiên cùng nghệ nhân, bán được những đơn hàng kỷ lục đầu đời',
          'Tập huấn cách đóng gói chống sốc và chăm sóc phản hồi khách hàng cho ban đại diện hợp tác xã'
        ]
      },
      {
        weekNumber: 4,
        title: 'Bàn Giao Kênh Số, Debrief Space & Tri Ân',
        focus: 'Chuyển giao quyền quản trị, đúc kết World Citizen & Trao chứng nhận',
        ratio: '40% Chuyển giao công nghệ · 60% Debrief Space & Vinh danh',
        activities: [
          'Bàn giao toàn bộ tài khoản kênh số, kho hình ảnh gốc và cẩm nang vận hành cho Hợp tác xã làng nghề',
          'Tổ chức triển lãm ảnh nhỏ "Những Bàn Tay Giữ Hồn Di Sản" ngay tại sân nhà văn hóa làng',
          'Phiên Debrief Space: Phản chiếu năng lực World Citizen & Self-Aware - Thấu hiểu giá trị cội nguồn',
          'Trao chứng nhận Certificate of Social Leadership và nhận quà kỷ niệm độc bản do chính nghệ nhân nặn tặng'
        ]
      }
    ],
    pickupPoint: {
      location: 'Cổng chính Nhà Hát Trưng Vương (35A Phan Châu Trinh, Q. Hải Châu, TP. Đà Nẵng)',
      vehicleType: 'Xe khách chất lượng cao 29 chỗ (ghế ngả êm ái, khoang hành lý rộng rãi chứa dụng cụ máy ảnh/laptop)',
      departureTime: '07:00 Sáng',
      gatherTime: '06:30 Sáng (Điểm danh, kiểm tra thiết bị cá nhân và phát thẻ TNV)',
      driverNote: 'Bác tài Nguyễn Văn Hưng (0914 556 789) có biển đón H&N Heritage',
      mapNote: 'Có điểm đón phụ tại Ngã ba Cây Cốc (Thăng Bình) cho các bạn đi từ phía Nam.'
    },
    accommodation: {
      name: 'Homestay Nhà Sàn Nghệ Nhân Briú Lan',
      type: 'Homestay văn hóa làng nghề truyền thống ấm cúng và đầy cảm hứng sáng tạo',
      address: 'Làng văn hóa Zơrâm, Xã Tà Lu, Huyện Đông Giang, Tỉnh Quảng Nam',
      standards: [
        'Không gian nhà sàn gỗ thoáng mát, có góc làm việc yên tĩnh nhìn ra thung lũng đồi chè',
        'Wifi cáp quang tốc độ cao phục vụ tải lên tư liệu ảnh/video chất lượng cao',
        'Phòng tắm nước nóng sạch sẽ, đệm ngủ riêng tư ấm áp theo nếp nhà đồng bào',
        'Bếp ăn gia đình đậm đà hương vị miền Trung: mì Quảng tôm thịt, cá suối nướng muối ớt'
      ],
      mealsIncluded: '3 bữa/ngày (Bữa sáng mì Quảng / xôi nếp cẩm + Trưa và tối cơm niêu với đặc sản rau dớn, thịt heo bản)'
    },
    localBuddy: {
      name: 'Briú Thị Lan',
      role: 'Đại diện thế hệ trẻ Hợp tác xã Dệt thổ cẩm Zơrâm · Cầu nối văn hóa',
      phone: '0905 891 234',
      zalo: '0905 891 234',
      community: 'Nghệ nhân Hợp tác xã làng nghề Đông Giang & Gốm Thanh Hà',
      bio: 'Người sáng lập dự án bảo tồn thổ cẩm kết hợp thời trang ứng dụng, am hiểu tường tận văn hóa dân tộc và thành thạo thương mại điện tử.'
    },
    kitStatus: {
      items: ['02 Áo đồng phục H&N màu hổ phách', 'Thẻ đeo TNV có mã QR bảo hộ 2 chiều', 'Sổ tay TNV Leader Diary', 'Tài liệu hướng dẫn thương mại số & storytelling', 'Túi tote vải Canvas'],
      deliveryMethod: 'Phát trực tiếp tại điểm danh tập trung lúc 06:30 sáng ngày khởi hành'
    },
    insuranceStatus: {
      provider: 'Bảo hiểm PVI / Bảo Việt - Gói Du Lịch Nội Địa Trọn Gói',
      policyNumber: 'HN-PVI-2026-HERITAGE-ART',
      coverage: '30.000.000 – 50.000.000 VNĐ / vụ tai nạn và viện phí khẩn cấp',
      status: 'Đã kích hoạt'
    }
  }
};

export function getItineraryForLead(trackIdOrName: string, _waveName?: string): import('../types').ApplicantItinerary {
  let key: 'EduTrack' | 'EcoTrack' | 'HeritageTrack' = 'EduTrack';
  const lower = (trackIdOrName || '').toLowerCase();
  if (lower.includes('eco') || lower.includes('biển') || lower.includes('san hô') || lower.includes('cù lao')) {
    key = 'EcoTrack';
  } else if (lower.includes('heritage') || lower.includes('di sản') || lower.includes('gốm') || lower.includes('thổ cẩm')) {
    key = 'HeritageTrack';
  } else {
    key = 'EduTrack';
  }
  return TRACK_ITINERARIES[key] || TRACK_ITINERARIES['EduTrack'];
}

