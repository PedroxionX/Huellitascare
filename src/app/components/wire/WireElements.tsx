import { Image } from 'lucide-react';
import { WF } from './wf';

// Gray placeholder box for images
export function ImgPlaceholder({ h = 80, label = 'Foto' }: { h?: number; label?: string }) {
  return (
    <div
      className="w-full flex flex-col items-center justify-center gap-1 rounded-xl"
      style={{ height: h, backgroundColor: WF.placeholder }}
    >
      <Image size={20} style={{ color: WF.placeholderDark }} />
      <span className="text-xs" style={{ color: WF.textSec }}>{label}</span>
    </div>
  );
}

// Section divider with label
export function WireSection({ label }: { label: string }) {
  return (
    <div className="px-4 pt-4 pb-1">
      <p className="text-xs uppercase tracking-widest font-semibold" style={{ color: WF.muted }}>
        {label}
      </p>
    </div>
  );
}

// Card wrapper
export function WireCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-2xl border mx-4 mb-3 overflow-hidden ${className}`}
      style={{ backgroundColor: WF.card, borderColor: WF.border }}
    >
      {children}
    </div>
  );
}

// CTA button
export function WireBtn({
  label,
  icon,
  color = WF.text,
  variant = 'solid',
  onClick,
  full = true,
}: {
  label: string;
  icon?: React.ReactNode;
  color?: string;
  variant?: 'solid' | 'outline' | 'ghost';
  onClick?: () => void;
  full?: boolean;
}) {
  const styles: Record<string, React.CSSProperties> = {
    solid: { backgroundColor: color, color: '#fff', border: 'none' },
    outline: { backgroundColor: 'transparent', color: color, border: `2px solid ${color}` },
    ghost: { backgroundColor: WF.bg, color: WF.textSec, border: `1px solid ${WF.border}` },
  };

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-sm ${full ? 'w-full' : ''}`}
      style={styles[variant]}
    >
      {icon}
      {label}
    </button>
  );
}

// Input field wireframe
export function WireInput({ label, placeholder, type = 'text' }: { label: string; placeholder?: string; type?: string }) {
  return (
    <div className="mb-3">
      <label className="text-xs font-semibold mb-1 block" style={{ color: WF.textSec }}>
        {label}
      </label>
      <div
        className="w-full px-3 py-2.5 rounded-xl border text-sm"
        style={{ borderColor: WF.border, backgroundColor: WF.bg, color: WF.muted }}
      >
        {placeholder || '— — —'}
      </div>
    </div>
  );
}

// Row list item
export function WireRow({
  icon,
  title,
  sub,
  badge,
  badgeColor,
  arrow = false,
}: {
  icon?: React.ReactNode;
  title: string;
  sub?: string;
  badge?: string;
  badgeColor?: string;
  arrow?: boolean;
}) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 border-b last:border-b-0" style={{ borderColor: WF.border }}>
      {icon && (
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: WF.bg }}
        >
          {icon}
        </div>
      )}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold truncate" style={{ color: WF.text }}>{title}</p>
        {sub && <p className="text-xs truncate" style={{ color: WF.muted }}>{sub}</p>}
      </div>
      {badge && (
        <span
          className="text-xs px-2 py-0.5 rounded-full font-semibold flex-shrink-0"
          style={{ backgroundColor: badgeColor ? badgeColor + '22' : WF.bg, color: badgeColor || WF.textSec }}
        >
          {badge}
        </span>
      )}
      {arrow && <span style={{ color: WF.muted }}>›</span>}
    </div>
  );
}

// Tag/chip selector
export function WireTag({ label, selected = false, color = WF.text }: { label: string; selected?: boolean; color?: string }) {
  return (
    <span
      className="inline-block px-3 py-1.5 rounded-xl text-xs font-semibold border"
      style={{
        backgroundColor: selected ? color : WF.bg,
        color: selected ? '#fff' : WF.textSec,
        borderColor: selected ? color : WF.border,
      }}
    >
      {label}
    </span>
  );
}

// Metric / stat box
export function WireStat({ value, label, color }: { value: string; label: string; color?: string }) {
  return (
    <div
      className="flex-1 rounded-xl p-3 text-center border"
      style={{ backgroundColor: WF.card, borderColor: WF.border }}
    >
      <p className="font-bold" style={{ color: color || WF.text, fontSize: '1.2rem' }}>{value}</p>
      <p className="text-xs mt-0.5" style={{ color: WF.muted }}>{label}</p>
    </div>
  );
}

// Step item
export function WireStep({ num, text, done = false }: { num: number; text: string; done?: boolean }) {
  return (
    <div className="flex gap-3 items-start px-4 py-3 border-b last:border-b-0" style={{ borderColor: WF.border }}>
      <div
        className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5"
        style={{ backgroundColor: done ? WF.ok : WF.text, color: '#fff' }}
      >
        {done ? '✓' : num}
      </div>
      <p className="text-sm flex-1" style={{ color: done ? WF.muted : WF.text }}>{text}</p>
    </div>
  );
}
