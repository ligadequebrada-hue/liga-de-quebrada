import { teamLogos } from '@/lib/data';

const teams = [
  { id: 1, name: 'Estrela da Norte', initials: 'EN', logo: teamLogos.santaCana },
  { id: 2, name: 'União da Sul', initials: 'US', logo: teamLogos.realMaster },
  { id: 3, name: 'Favela United', initials: 'FU', logo: teamLogos.milionarios },
  { id: 4, name: 'Ajax do Morro', initials: 'AM', logo: teamLogos.neblina },
  { id: 5, name: 'Vila Real F.C.', initials: 'VR', logo: teamLogos.onix },
  { id: 6, name: 'Dragões do Asfalto', initials: 'DA', logo: teamLogos.redStar },
  { id: 7, name: 'Rastro de Fogo', initials: 'RF', logo: teamLogos.realBarcelia },
  { id: 8, name: 'Poder da Laje', initials: 'PL', logo: teamLogos.tirandoOnda },
];

export default function TeamMarquee() {
  const marqueeTeams = [...teams, ...teams, ...teams];

  return (
    <div className="bg-[#0A0A0B] py-10" aria-hidden="true">
      <div className="max-w-7xl mx-auto relative overflow-hidden">
        <div className="animate-marquee-teams flex items-center gap-20 px-10">
          {marqueeTeams.map((team, index) => (
            <div
              key={`${team.id}-${index}`}
              className="flex flex-col items-center gap-4 opacity-40 hover:opacity-100 transition-opacity duration-500 cursor-pointer group"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center transition-all">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={team.logo} alt={team.name} className="w-10 h-10 object-contain" />
              </div>
              <span className="text-[10px] font-black text-gray-500 tracking-[3px] uppercase">
                {team.initials}
              </span>
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0A0A0B] to-transparent z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0A0A0B] to-transparent z-10"></div>
      </div>
    </div>
  );
}
