import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { CheckCircle2, Copy, AlertCircle, Info, X } from 'lucide-react';

export interface ToastOptions {
  id?: string;
  title: string;
  message?: string;
  type?: 'success' | 'info' | 'error' | 'copy';
  duration?: number;
}

interface ToastContextType {
  showToast: (options: ToastOptions) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<(ToastOptions & { id: string })[]>([]);

  const showToast = useCallback(({ title, message, type = 'success', duration = 3000 }: ToastOptions) => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
    setToasts((prev) => [...prev, { id, title, message, type, duration }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, duration);
  }, []);

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      
      {/* Toast Notification Container */}
      <div 
        id="toast-container" 
        className="fixed bottom-5 left-5 z-[9999] flex flex-col gap-2.5 max-w-sm pointer-events-none"
        aria-live="polite"
      >
        {toasts.map((toast) => {
          const isSuccess = toast.type === 'success';
          const isCopy = toast.type === 'copy';
          const isError = toast.type === 'error';

          return (
            <div
              key={toast.id}
              className={`pointer-events-auto flex items-start gap-3 p-3.5 rounded-2xl shadow-xl border text-xs transition-all duration-300 transform translate-y-0 backdrop-blur-md animate-in fade-in slide-in-from-bottom-3 ${
                isSuccess
                  ? 'bg-emerald-900/95 text-white border-emerald-700/80 shadow-emerald-950/30'
                  : isCopy
                  ? 'bg-indigo-900/95 text-white border-indigo-700/80 shadow-indigo-950/30'
                  : isError
                  ? 'bg-rose-900/95 text-white border-rose-700/80 shadow-rose-950/30'
                  : 'bg-slate-900/95 text-white border-slate-700/80 shadow-slate-950/30'
              }`}
            >
              <div className="mt-0.5 shrink-0">
                {isCopy ? (
                  <Copy className="w-4 h-4 text-indigo-300" />
                ) : isSuccess ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                ) : isError ? (
                  <AlertCircle className="w-4 h-4 text-rose-300" />
                ) : (
                  <Info className="w-4 h-4 text-blue-300" />
                )}
              </div>

              <div className="flex-1 min-w-0 pr-1">
                <p className="font-bold text-white text-xs leading-snug">{toast.title}</p>
                {toast.message && (
                  <p className="text-slate-200/90 text-[11px] mt-0.5 leading-tight truncate">
                    {toast.message}
                  </p>
                )}
              </div>

              <button
                onClick={() => removeToast(toast.id)}
                className="text-slate-400 hover:text-white transition-colors p-0.5 rounded-lg shrink-0 cursor-pointer"
                title="Dismiss"
                aria-label="Dismiss toast notification"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
