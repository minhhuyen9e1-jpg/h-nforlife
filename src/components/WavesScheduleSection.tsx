import React, { useState } from 'react';
import { Calendar, MapPin, Users, ArrowRight, ShieldCheck } from 'lucide-react';
import { WAVES_DATA } from '../data/mockData';
import { WaveInfo, TrackType } from '../types';
import { useLanguage } from '../i18n/LanguageContext';

interface WavesScheduleSectionProps {
  onSelectWave: (wave: WaveInfo) => void;
}

export const WavesScheduleSection: React.FC<WavesScheduleSectionProps> = ({
  onSelectWave
}) => {
  const { t, lang } = useLanguage();
  const [selectedTrackFilter, setSelectedTrackFilter] = useState<'all' | TrackType>('all');

  const filteredWaves = selectedTrackFilter === 'all'
    ? WAVES_DATA
    : WAVES_DATA.filter((w) => w.trackId === selectedTrackFilter);

  const getTrackBadgeStyle = (trackId: TrackType) => {
    switch (trackId) {
      case 'EduTrack':
        return 'bg-sky-100 text-sky-800 border-sky-200';
      case 'EcoTrack':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'HeritageTrack':
        return 'bg-amber-100 text-amber-800 border-amber-200';
    }
  };

  return (
    <section id="waves" className="py-16 sm:py-20 bg-slate-50/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-800 tracking-wide uppercase mb-2">
              <span>{t.waves.kicker}</span>
              <span aria-hidden="true">·</span>
              <span>3 Tracks</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
              {t.waves.title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              {t.waves.subtitle}
            </p>
          </div>

          <div className="shrink-0 text-xs text-slate-500 font-mono-num flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-2 rounded-lg shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>{t.waves.tagPill}</span>
          </div>
        </div>

        {/* Track Filter Tab Segmented Control */}
        <div className="flex flex-wrap items-center gap-2 mb-8 p-1.5 bg-slate-200/70 rounded-xl w-fit">
          <button
            onClick={() => setSelectedTrackFilter('all')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              selectedTrackFilter === 'all'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {t.waves.filterAll}
          </button>
          <button
            onClick={() => setSelectedTrackFilter('EduTrack')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              selectedTrackFilter === 'EduTrack'
                ? 'bg-white text-sky-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            EduTrack
          </button>
          <button
            onClick={() => setSelectedTrackFilter('EcoTrack')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              selectedTrackFilter === 'EcoTrack'
                ? 'bg-white text-emerald-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            EcoTrack
          </button>
          <button
            onClick={() => setSelectedTrackFilter('HeritageTrack')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              selectedTrackFilter === 'HeritageTrack'
                ? 'bg-white text-amber-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            HeritageTrack
          </button>
        </div>

        {/* Waves Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWaves.map((wave) => {
            const progressPercent = Math.min(100, Math.round((wave.registeredCount / wave.totalSlots) * 100));
            const remainingSlots = wave.totalSlots - wave.registeredCount;

            return (
              <div
                key={wave.id}
                className="bg-white rounded-2xl border border-slate-200 hover:border-slate-300 transition-all duration-200 p-6 flex flex-col justify-between shadow-xs hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono font-bold text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200">
                      {wave.code}
                    </span>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded border ${getTrackBadgeStyle(wave.trackId)}`}>
                      {wave.trackName}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 font-display mb-2">
                    {wave.name}
                  </h3>

                  <div className="space-y-2 mb-5 text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{wave.destination}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{wave.startDate} — {wave.endDate} ({lang === 'en' ? '30 days / 4 weeks' : wave.duration})</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 mb-5">
                    <span className="font-semibold text-slate-900">{lang === 'en' ? 'Highlight:' : 'Điểm nhấn:'}</span> {wave.highlight}
                  </div>

                  {/* Local Buddy assigned */}
                  <div className="mb-5 text-xs">
                    <span className="text-slate-500 font-medium block mb-1">
                      {t.waves.buddyLabel}
                    </span>
                    <div className="text-slate-800 font-medium">
                      {wave.localBuddies.join(' · ')}
                    </div>
                  </div>

                  {/* Slots Progress Bar */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between text-xs mb-1.5 font-mono-num">
                      <span className="text-slate-700 font-medium flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-slate-500" />
                        <span>
                          {t.waves.slotsRegistered}: <strong>{wave.registeredCount}</strong> / {wave.totalSlots}
                        </span>
                      </span>
                      <span className={remainingSlots <= 2 ? 'text-amber-700 font-semibold' : 'text-emerald-700 font-medium'}>
                        {remainingSlots > 0 
                          ? `${t.waves.slotsRemaining.replace('{count}', String(remainingSlots))}`
                          : t.waves.slotsFull}
                      </span>
                    </div>

                    <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-2 rounded-full transition-all duration-300 ${
                          wave.registeredCount >= wave.totalSlots ? 'bg-amber-500' : 'bg-sky-600'
                        }`}
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-900 font-mono-num">
                    2.790.000 đ <span className="text-slate-400 font-normal">/ EP / 30 {lang === 'en' ? 'days' : 'ngày'}</span>
                  </span>

                  <button
                    onClick={() => onSelectWave(wave)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-lg transition-colors cursor-pointer shadow-sm"
                  >
                    <span>{t.waves.btnApplyWave}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
