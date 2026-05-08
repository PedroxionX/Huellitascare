import { useNavigate } from 'react-router';
import { ArrowLeft, ChevronRight, ChevronLeft } from 'lucide-react';
import { WF } from './wf';

interface WireShellProps {
  title: string;
  screenNum: number;
  totalScreens?: number;
  persona: 'angel' | 'paola' | 'vet';
  backPath: string;
  nextPath?: string;
  prevPath?: string;
  userStory?: string;
  hmw?: string;
  children: React.ReactNode;
}

export function WireShell({
  title,
  screenNum,
  totalScreens = 8,
  persona,
  backPath,
  nextPath,
  prevPath,
  userStory,
  hmw,
  children,
}: WireShellProps) {
  const navigate = useNavigate();
  const accent = persona === 'angel' ? WF.angel : persona === 'paola' ? WF.paola : WF.vet;
  const label = persona === 'angel' ? 'Ángel' : persona === 'paola' ? 'Paola' : 'Angélica';

  return (
    <div className="flex flex-col min-h-full" style={{ backgroundColor: WF.bg }}>
      {/* Top bar */}
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{ backgroundColor: WF.header }}
      >
        <button
          onClick={() => navigate(backPath)}
          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}
        >
          <ArrowLeft size={16} className="text-white" />
        </button>
        <div className="flex-1 min-w-0">
          <p className="text-white truncate" style={{ fontSize: '0.9rem', fontWeight: 700 }}>
            {title}
          </p>
        </div>
      </div>

      {/* Persona tag */}
      <div
        className="flex items-center gap-2 px-4 py-2 border-b"
        style={{ backgroundColor: persona === 'angel' ? WF.angelLight : persona === 'paola' ? WF.paolaLight : WF.vetLight, borderColor: WF.border }}
      >
        <span
          className="text-xs px-2 py-0.5 rounded-full font-semibold"
          style={{ backgroundColor: accent, color: '#fff' }}
        >
          {label}
        </span>
        {userStory && (
          <p className="text-xs truncate" style={{ color: WF.textSec }}>
            {userStory}
          </p>
        )}
      </div>

      {/* Screen content */}
      <div className="flex-1 overflow-auto">{children}</div>

      {/* Bottom nav arrows */}
      <div
        className="flex items-center justify-between px-4 py-3 border-t"
        style={{ borderColor: WF.border, backgroundColor: WF.card }}
      >
        <button
          onClick={() => prevPath && navigate(prevPath)}
          disabled={!prevPath}
          className="flex items-center gap-1 text-sm px-3 py-2 rounded-xl disabled:opacity-30"
          style={{ backgroundColor: WF.bg, color: WF.textSec }}
        >
          <ChevronLeft size={14} />
          Anterior
        </button>

        {hmw && (
          <p className="text-xs text-center px-2 flex-1" style={{ color: WF.muted }}>
            {hmw}
          </p>
        )}

        <button
          onClick={() => nextPath && navigate(nextPath)}
          disabled={!nextPath}
          className="flex items-center gap-1 text-sm px-3 py-2 rounded-xl disabled:opacity-30 font-semibold"
          style={{ backgroundColor: nextPath ? accent : WF.bg, color: nextPath ? '#fff' : WF.textSec }}
        >
          Siguiente
          <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}
