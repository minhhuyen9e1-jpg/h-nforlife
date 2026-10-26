import React, { useState } from 'react';
import { QUIZ_QUESTIONS, TRACKS_DATA } from '../data/mockData';
import { TrackType } from '../types';
import { Sparkles, ArrowRight, RotateCcw, Check } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface TrackFinderQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTrack: (track: TrackType) => void;
}

export const TrackFinderQuizModal: React.FC<TrackFinderQuizModalProps> = ({
  isOpen,
  onClose,
  onSelectTrack
}) => {
  const { t, lang } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState<Record<TrackType, number>>({
    EduTrack: 0,
    EcoTrack: 0,
    HeritageTrack: 0
  });
  const [resultTrack, setResultTrack] = useState<TrackType | null>(null);

  if (!isOpen) return null;

  const handleOptionSelect = (track: TrackType) => {
    const updated = {
      ...scores,
      [track]: scores[track] + 1
    };
    setScores(updated);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate top track
      let bestTrack: TrackType = 'EduTrack';
      let maxScore = -1;
      (Object.keys(updated) as TrackType[]).forEach((t) => {
        if (updated[t] > maxScore) {
          maxScore = updated[t];
          bestTrack = t;
        }
      });
      setResultTrack(bestTrack);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setScores({ EduTrack: 0, EcoTrack: 0, HeritageTrack: 0 });
    setResultTrack(null);
  };

  const matchedTrackInfo = resultTrack 
    ? TRACKS_DATA.find(t => t.id === resultTrack) 
    : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-sky-100 text-sky-700">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display">
                {t.modals.quiz.title}
              </h3>
              <span className="text-xs text-slate-500">
                {t.modals.quiz.subtitle}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 text-lg font-bold p-1 cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Content Body */}
        <div className="py-6">
          {!resultTrack ? (
            <div>
              <div className="flex items-center justify-between text-xs text-slate-500 mb-3 font-mono">
                <span>
                  {lang === 'en' 
                    ? `Question ${currentStep + 1} / ${QUIZ_QUESTIONS.length}`
                    : `Câu hỏi ${currentStep + 1} / ${QUIZ_QUESTIONS.length}`}
                </span>
                <span>{Math.round(((currentStep) / QUIZ_QUESTIONS.length) * 100)}% {lang === 'en' ? 'completed' : 'hoàn thành'}</span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-100 rounded-full h-1.5 mb-6">
                <div
                  className="bg-sky-700 h-1.5 rounded-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                />
              </div>

              <h4 className="text-base font-bold text-slate-900 mb-5 leading-snug">
                {QUIZ_QUESTIONS[currentStep].question}
              </h4>

              <div className="space-y-3">
                {QUIZ_QUESTIONS[currentStep].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOptionSelect(opt.track)}
                    className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-sky-600 hover:bg-sky-50/50 transition-all text-xs sm:text-sm text-slate-800 font-medium cursor-pointer flex items-start gap-3 group"
                  >
                    <span className="w-5 h-5 rounded-full border border-slate-300 group-hover:border-sky-600 group-hover:bg-sky-600 group-hover:text-white flex items-center justify-center shrink-0 text-xs text-slate-500 font-mono transition-colors">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="leading-relaxed">{opt.text}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-2 animate-in zoom-in-95">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-3">
                <Check className="w-6 h-6" />
              </div>

              <span className="text-xs font-mono font-bold text-sky-700 uppercase tracking-wider">
                {t.modals.quiz.resultTitle}
              </span>
              <h4 className="text-xl font-extrabold text-slate-900 font-display mt-1 mb-2">
                {matchedTrackInfo?.name}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed mb-6">
                {matchedTrackInfo?.description}
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs mb-6 space-y-2">
                <div className="font-bold text-slate-900">
                  {lang === 'en' ? 'Why this track is the perfect match for you:' : 'Vì sao Track này sinh ra dành cho bạn:'}
                </div>
                <div className="text-slate-600">
                  {lang === 'en' 
                    ? `Based on your answers, you have a strong passion for ${matchedTrackInfo?.sdg}, ready to commit 6h/day to create meaningful social impact in ${matchedTrackInfo?.locations.join(', ')}.`
                    : `Phản chiếu từ các câu trả lời của bạn, bạn có niềm đam mê mạnh mẽ với ${matchedTrackInfo?.sdg}, sẵn sàng làm việc 6h/ngày để mang lại giá trị thực tế cho cộng đồng tại ${matchedTrackInfo?.locations.join(', ')}.`}
                </div>
              </div>

              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={handleReset}
                  className="px-4 py-2.5 text-xs font-medium text-slate-600 hover:text-slate-800 flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{t.modals.quiz.btnRestart}</span>
                </button>
                <button
                  onClick={() => {
                    onClose();
                    onSelectTrack(resultTrack);
                  }}
                  className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-lg flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>{lang === 'en' ? `Choose ${matchedTrackInfo?.code} & Register` : `Chọn ${matchedTrackInfo?.code} & Đăng Ký`}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
