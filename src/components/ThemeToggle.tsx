import React, { useState, useRef, useEffect } from 'react';
import { useTheme, AccentColor } from '../context/ThemeContext';
import { Sun, Moon, Palette, Check } from 'lucide-react';

export const ThemeToggle: React.FC = () => {
  const { themeMode, accentColor, toggleThemeMode, setAccentColor } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const colors: { id: AccentColor; label: string; colorDot: string }[] = [
    { id: 'blue', label: 'Sapphire Blue', colorDot: '#2563eb' },
    { id: 'violet', label: 'Royal Violet', colorDot: '#9333ea' },
    { id: 'teal', label: 'Ocean Teal', colorDot: '#0d9488' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200/90 dark:border-slate-700/80 shadow-2xs">
        {/* Dark/Light Toggle */}
        <button
          onClick={toggleThemeMode}
          title={themeMode === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          className="p-1.5 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-700 transition-colors cursor-pointer"
          aria-label="Toggle theme mode"
        >
          {themeMode === 'dark' ? (
            <Sun className="w-4 h-4 text-amber-400" />
          ) : (
            <Moon className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
          )}
        </button>

        {/* Accent Palette Dropdown Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          title="Customize Theme Accent Color"
          className="p-1.5 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-700 transition-colors cursor-pointer flex items-center gap-1"
          aria-label="Customize accent color"
        >
          <Palette className="w-4 h-4 text-slate-600 dark:text-slate-300" />
          <span 
            className="w-2.5 h-2.5 rounded-full ring-1 ring-white/50" 
            style={{ backgroundColor: colors.find(c => c.id === accentColor)?.colorDot || '#4f46e5' }}
          />
        </button>
      </div>

      {/* Palette Popover */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-52 p-3 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200/90 dark:border-slate-800 z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="flex items-center justify-between mb-2.5 px-1">
            <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Accent Palette
            </span>
            <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
              {colors.find(c => c.id === accentColor)?.label.split(' ')[0]}
            </span>
          </div>

          <div className="space-y-1">
            {colors.map((c) => (
              <button
                key={c.id}
                onClick={() => {
                  setAccentColor(c.id);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  accentColor === c.id
                    ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span 
                    className="w-3.5 h-3.5 rounded-full shadow-xs shrink-0" 
                    style={{ backgroundColor: c.colorDot }}
                  />
                  <span>{c.label}</span>
                </div>
                {accentColor === c.id && (
                  <Check className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

