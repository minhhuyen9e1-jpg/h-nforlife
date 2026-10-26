import React, { useState } from 'react';
import { BookOpen, Waves, Palette, MapPin, Clock, Check, ArrowRight, Sparkles, User, Award, Calendar, Users } from 'lucide-react';
import { TRACKS_DATA, WAVES_DATA } from '../data/mockData';
import { TrackInfo, TrackType, WaveInfo } from '../types';
import { useLanguage } from '../i18n/LanguageContext';

interface TracksSectionProps {
  onSelectTrack: (trackId: TrackType) => void;
  onSelectWave?: (wave: WaveInfo) => void;
  onOpenQuiz: () => void;
}

export const TracksSection: React.FC<TracksSectionProps> = ({
  onSelectTrack,
  onSelectWave,
  onOpenQuiz
}) => {
  const { t, lang } = useLanguage();
  const [selectedTrackDetail, setSelectedTrackDetail] = useState<TrackInfo | null>(null);

  const getTrackIcon = (id: TrackType) => {
    switch (id) {
      case 'EduTrack':
        return <BookOpen className="w-5 h-5 text-sky-600" />;
      case 'EcoTrack':
        return <Waves className="w-5 h-5 text-emerald-600" />;
      case 'HeritageTrack':
        return <Palette className="w-5 h-5 text-amber-600" />;
    }
  };

  const getTrackTranslation = (id: TrackType) => {
    switch (id) {
      case 'EduTrack':
        return t.tracks.edu;
      case 'EcoTrack':
        return t.tracks.eco;
      case 'HeritageTrack':
        return t.tracks.heritage;
    }
  };

  return (
    <section id="tracks" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-800 tracking-wide uppercase mb-2">
              <span>{t.tracks.kicker}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
              {t.tracks.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              {t.tracks.subtitle}
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={onOpenQuiz}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-sky-800 bg-sky-50 hover:bg-sky-100 rounded-lg transition-colors border border-sky-200 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-sky-600" />
              <span>{t.tracks.btnQuiz}</span>
            </button>
          </div>
        </div>

        {/* 3 Tracks Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TRACKS_DATA.map((track) => {
            const trackWaves = WAVES_DATA.filter((w) => w.trackId === track.id);
            const tr = getTrackTranslation(track.id);

            return (
              <div
                key={track.id}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 hover:border-slate-300 transition-all duration-200 bg-white hover:shadow-md p-6 sm:p-7 relative overflow-hidden"
              >
                {/* Top Accent Kicker */}
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2.5 rounded-xl bg-slate-100">
                        {getTrackIcon(track.id)}
                      </div>
                      <div>
                        <span className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider block">
                          {track.code}
                        </span>
                        <span className="text-xs font-medium text-slate-700">
                          {track.sdg}
                        </span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display mb-2">
                    {tr.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
                    {tr.tagline}
                  </p>

                  {/* Locations list */}
                  <div className="mb-5 pb-5 border-b border-slate-100">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-900 mb-2">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>Địa bàn / Locations:</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 text-xs text-slate-600">
                      {track.locations.map((loc, idx) => (
                        <span key={idx} className="bg-slate-100 px-2 py-1 rounded text-slate-700">
                          {loc}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Core Tasks */}
                  <div className="mb-6">
                    <div className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2.5">
                      {t.tracks.titles.tasks}:
                    </div>
                    <ul className="space-y-2 text-xs text-slate-600">
                      {tr.tasks.slice(0, 3).map((task, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Nested Waves Belonging to This Track */}
                  <div className="mb-6 pt-5 border-t border-slate-100">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-sky-700" />
                        <span>{t.tracks.titles.waves} ({trackWaves.length}):</span>
                      </div>
                      <span className="text-[11px] text-sky-700 font-semibold font-mono-num">
                        {t.tracks.cohortTag}
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      {trackWaves.map((wave) => (
                        <div
                          key={wave.id}
                          className="p-3 rounded-xl bg-slate-50/80 border border-slate-200/80 hover:border-slate-300 transition-all text-xs"
                        >
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <span className="font-mono font-bold text-sky-800 bg-sky-100 px-1.5 py-0.5 rounded text-[10px]">
                              {wave.code}
                            </span>
                            <span className="text-[11px] text-slate-500 font-mono-num">
                              {wave.startDate} — {wave.endDate}
                            </span>
                          </div>

                          <div className="font-semibold text-slate-900 mb-0.5 leading-snug">
                            {wave.name}
                          </div>

                          <div className="text-[11px] text-slate-600 mb-2 flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                            <span>{wave.destination}</span>
                          </div>

                          <div className="flex items-center justify-between pt-2 border-t border-slate-200/60 text-[11px]">
                            <span className="font-mono-num text-slate-600 flex items-center gap-1">
                              <Users className="w-3 h-3 text-slate-400" />
                              <span>{wave.registeredCount}/{wave.totalSlots} slot</span>
                            </span>

                            <button
                              onClick={() => onSelectWave ? onSelectWave(wave) : onSelectTrack(track.id)}
                              className="px-2.5 py-1 text-[11px] font-semibold text-sky-800 bg-white hover:bg-sky-50 border border-sky-200 rounded transition-colors cursor-pointer"
                            >
                              {lang === 'en' ? 'Reserve Wave Slot →' : 'Giữ Slot Wave Này →'}
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Card Controls */}
                <div className="pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{track.weeklyHours}</span>
                    </span>
                    <span>65% / 35%</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setSelectedTrackDetail(track)}
                      className="px-3 py-2 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors text-center cursor-pointer"
                    >
                      {lang === 'en' ? 'Track Details' : 'Chi Tiết Track'}
                    </button>

                    <button
                      onClick={() => onSelectTrack(track.id)}
                      className="px-3 py-2 text-xs font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <span>{t.tracks.btnApplyTrack}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Modal for Selected Track */}
        {selectedTrackDetail && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm animate-in fade-in">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200">
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-slate-100">
                    {getTrackIcon(selectedTrackDetail.id)}
                  </div>
                  <div>
                    <span className="text-xs font-mono font-semibold text-slate-500 uppercase">
                      {selectedTrackDetail.code} · {selectedTrackDetail.sdg}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 font-display">
                      {getTrackTranslation(selectedTrackDetail.id).name}
                    </h3>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedTrackDetail(null)}
                  className="text-slate-400 hover:text-slate-600 text-lg font-bold p-1 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="py-5 space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                    Tổng Quan Dự Án / Overview
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {getTrackTranslation(selectedTrackDetail.id).desc}
                  </p>
                </div>

                {/* Waves inside Modal */}
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-sky-700" />
                    <span>{t.tracks.titles.waves}</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {WAVES_DATA.filter(w => w.trackId === selectedTrackDetail.id).map(w => (
                      <div key={w.id} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="font-mono font-bold text-sky-800 bg-sky-100 px-1.5 py-0.5 rounded text-[10px]">
                              {w.code}
                            </span>
                            <span className="text-[11px] text-slate-500 font-mono-num">{w.startDate}</span>
                          </div>
                          <div className="font-bold text-slate-900 mb-1">{w.name}</div>
                          <div className="text-slate-600 mb-2">📍 {w.destination}</div>
                          <div className="text-[11px] text-slate-500 mb-3">Local Buddy: <strong>{w.localBuddies.join(', ')}</strong></div>
                        </div>

                        <button
                          onClick={() => {
                            setSelectedTrackDetail(null);
                            if (onSelectWave) onSelectWave(w);
                            else onSelectTrack(selectedTrackDetail.id);
                          }}
                          className="w-full py-1.5 text-center text-xs font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded transition-colors cursor-pointer"
                        >
                          Chọn Wave Này ({w.registeredCount}/{w.totalSlots} slot)
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                    Địa Bàn / Locations
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedTrackDetail.locations.map((loc, i) => (
                      <span key={i} className="text-xs bg-slate-100 text-slate-800 px-3 py-1.5 rounded-md font-medium">
                        📍 {loc}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                    {t.tracks.titles.tasks}
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                    {getTrackTranslation(selectedTrackDetail.id).tasks.map((task, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <User className="w-4 h-4 text-sky-700" />
                    <span>{t.tracks.titles.ideal}</span>
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                    {getTrackTranslation(selectedTrackDetail.id).ideal.map((cand, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-600 shrink-0 mt-2" />
                        <span>{cand}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-amber-600" />
                    <span>{t.tracks.titles.deliverables}</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {getTrackTranslation(selectedTrackDetail.id).deliverables.map((deliv, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-amber-600 font-bold">✓</span>
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedTrackDetail(null)}
                  className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-800 cursor-pointer"
                >
                  Đóng / Close
                </button>
                <button
                  onClick={() => {
                    const id = selectedTrackDetail.id;
                    setSelectedTrackDetail(null);
                    onSelectTrack(id);
                  }}
                  className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-lg shadow-sm cursor-pointer"
                >
                  {t.tracks.btnApplyTrack}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
