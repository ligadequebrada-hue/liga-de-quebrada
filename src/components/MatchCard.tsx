'use client';

import { Star, CloudSun, MapPin } from 'lucide-react';
import type { Match } from '@/lib/data';

type MatchCardProps = Match & {
  accentColor?: string;
};

export default function MatchCard({
  league,
  date,
  time,
  home,
  away,
  homeLogo,
  awayLogo,
  round,
  weekday,
  homeStars = 4,
  homeReviews = 125,
  awayStars = 5,
  awayReviews = 89,
  accentColor = '#FF6B00',
  city,
}: MatchCardProps) {
  const weather = city ? { temp: 24, description: 'Ensolarado' } : null;

  const renderStars = (count: number) => (
    <div className="flex gap-0.5 justify-center" style={{ color: accentColor }}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={10}
          fill={i < count ? 'currentColor' : 'none'}
          className={i < count ? '' : 'text-gray-600'}
        />
      ))}
    </div>
  );

  return (
    <article
      className="bg-[#090909] border border-white/10 rounded-xl p-0 flex flex-col hover:bg-white/[0.02] transition-all group overflow-hidden relative w-[380px] shrink-0 h-full shadow-lg"
      onMouseEnter={(e) =>
        (e.currentTarget.style.boxShadow = `0 0 15px -5px ${accentColor}40`)
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.boxShadow = '0 10px 15px -3px rgb(0 0 0 / 0.1)')
      }
    >
      <div
        className="absolute top-0 left-0 bottom-0 w-1.5"
        style={{ backgroundColor: accentColor }}
      ></div>

      <div className="flex justify-between items-center p-3 bg-white/[0.02] pl-6 border-b border-white/5">
        <div className="flex items-center gap-2 text-[9px] font-bold text-white uppercase tracking-wider">
          <span>{league}</span>
          <span className="text-gray-500">•</span>
          <span>{time}</span>
          <span className="text-gray-500">•</span>
          <span>{date}</span>
        </div>
        <div
          className="text-[8px] font-black px-2 py-0.5 rounded uppercase tracking-wider"
          style={{ color: accentColor, backgroundColor: `${accentColor}1A` }}
        >
          {weekday}
        </div>
      </div>

      <div className="p-6 flex justify-between items-center pl-8 pr-4 flex-1">
        <div className="flex flex-col items-center gap-2 w-1/3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={homeLogo}
            alt={`Escudo ${home}`}
            className="w-16 h-16 object-contain drop-shadow-md transform group-hover:scale-110 transition-transform"
          />
          <span className="text-xs font-black text-white uppercase text-center leading-tight truncate w-full">
            {home}
          </span>
          {renderStars(homeStars)}
          <span className="text-[7px] font-bold text-gray-500 uppercase tracking-wide">
            AVALIAÇÕES ({homeReviews})
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="text-xl font-black italic text-[#4A4A4A]">VS</span>
        </div>
        <div className="flex flex-col items-center gap-2 w-1/3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={awayLogo}
            alt={`Escudo ${away}`}
            className="w-16 h-16 object-contain drop-shadow-md transform group-hover:scale-110 transition-transform"
          />
          <span className="text-xs font-black text-white uppercase text-center leading-tight truncate w-full">
            {away}
          </span>
          {renderStars(awayStars)}
          <span className="text-[7px] font-bold text-gray-500 uppercase tracking-wide">
            AVALIAÇÕES ({awayReviews})
          </span>
        </div>
      </div>

      <div className="flex justify-center items-center gap-[10px] my-[15px] text-[1.2rem] font-bold text-gray-400">
        {weather ? (
          <>
            <CloudSun size={24} className="text-gray-300" />
            <span>{Math.round(weather.temp)}°C</span>
            <span className="text-xs font-normal text-gray-500 ml-1">{weather.description}</span>
          </>
        ) : (
          <span className="text-xs text-gray-600 animate-pulse">Carregando clima...</span>
        )}
      </div>

      <div className="mt-auto p-3 flex justify-between items-center bg-white/[0.02] pl-6 border-t border-white/5">
        <span className="text-[9px] text-gray-500 font-bold uppercase tracking-wide">{round}</span>
        <button
          className="flex items-center gap-1 text-[9px] font-bold uppercase hover:underline transition-all"
          style={{ color: accentColor }}
        >
          <MapPin size={10} /> {city || 'LOCAL DO JOGO'}
        </button>
      </div>
    </article>
  );
}
