export type TrackType = 'EduTrack' | 'EcoTrack' | 'HeritageTrack';
export type LanguageType = 'vi' | 'en';

export interface StrategicPartner {
  name: string;
  type: string;
  location: string;
  sdg: string;
}

export interface TrackInfo {
  id: TrackType;
  name: string;
  code: string;
  sdg: string;
  sdgNumber: string;
  tagline: string;
  locations: string[];
  strategicPartners?: string[];
  description: string;
  tasks: string[];
  idealCandidate: string[];
  timeAllocation: {
    service: number; // 65%
    culture: number; // 35%
  };
  weeklyHours: string; // 6h/ngày (Thứ Hai – Thứ Bảy; Chủ Nhật nghỉ)
  color: {
    primary: string;
    bgSubtle: string;
    border: string;
    badgeBg: string;
    badgeText: string;
    accent: string;
  };
  deliverables: string[];
}

export interface WaveInfo {
  id: string;
  code: string;
  name: string;
  trackId: TrackType;
  trackName: string;
  destination: string;
  partnerHost?: string;
  startDate: string;
  endDate: string;
  duration: string; // 30 ngày (4 tuần)
  totalSlots: number; // 4 - 8 EPs
  registeredCount: number;
  breakEvenTarget: number; // 1.87 EPs (~2 EPs)
  standardThreshold: number; // 6 - 8 EPs
  seasonType?: 'Mùa khô (Chạy tiêu chuẩn)' | 'Mùa mưa bão (Ưu tiên trong nhà)';
  status: 'Đang mở đơn' | 'Gần đủ slot' | 'Đã khởi hành';
  localBuddies: string[];
  highlight: string;
}

export interface ItineraryWeek {
  weekNumber: number;
  title: string;
  focus: string;
  ratio: string;
  activities: string[];
}

export interface ApplicantItinerary {
  trackId: TrackType;
  trackName: string;
  waveName: string;
  destination: string;
  startDate: string;
  endDate: string;
  weeks: ItineraryWeek[];
  pickupPoint: {
    location: string;
    vehicleType: string;
    departureTime: string;
    gatherTime: string;
    driverNote: string;
    mapNote: string;
  };
  accommodation: {
    name: string;
    type: string;
    address: string;
    standards: string[];
    mealsIncluded: string;
  };
  localBuddy: {
    name: string;
    role: string;
    phone: string;
    zalo: string;
    community: string;
    bio: string;
  };
  kitStatus: {
    items: string[];
    deliveryMethod: string;
  };
  insuranceStatus: {
    provider: string;
    policyNumber: string;
    coverage: string;
    status: 'Đã kích hoạt' | 'Đang xử lý';
  };
}

export interface LeadItem {
  id: string;
  name: string;
  phone: string;
  email: string;
  track: string;
  wave: string;
  waveDate: string;
  status: 'Cần gọi ngay' | 'Đã liên hệ' | 'Đã duyệt' | 'Hủy';
  note: string;
  university?: string;
  skills?: string;
  createdAt: string;
  priority: 'Khẩn cấp' | 'Cao' | 'Trung bình';
  lastFeedbackTime?: string;
  confirmedAt?: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    track: TrackType;
    rationale: string;
  }[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  isPriorityAlert?: boolean;
}
