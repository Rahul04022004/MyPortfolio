
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { TERMINAL_PHILOSOPHY } from '../constants';

const BlinkingCursor: React.FC = () => (
  <span className="w-2 h-5 bg-neutral-200 inline-block align-middle" style={{ animation: 'blink 1s step-end infinite' }}></span>
);

interface TerminalProps {
    onClose?: () => void;
}

const CommandPrefix: React.FC = () => (
  <>
    <span className="text-green-400">rahul@portfolio</span>
    <span className="text-neutral-400">:</span>
    <span className="text-blue-400">~</span>
    <span className="text-neutral-400">$ </span>
  </>
);

const OutputPrefix: React.FC = () => (
    <span className="text-neutral-400 mr-2">&gt;</span>
);

const Terminal: React.FC<TerminalProps> = ({ onClose }) => {
  const [lines, setLines] = useState<{ text: string; isCommand?: boolean; color?: string }[]>([]);
  const [currentTypingLine, setCurrentTypingLine] = useState('');
  const scriptIndex = useRef(0);
  const charIndex = useRef(0);
  const timeoutRef = useRef<number | null>(null);
  const terminalContentRef = useRef<HTMLDivElement>(null);

  const script = [
    { text: 'boot_portfolio.sh', isCommand: true, delay: 100 },
    { text: '[INFO] Initializing virtual environment...', isCommand: false, delay: 150 },
    { text: '[INFO] Loading core modules...', isCommand: false, delay: 100 },
    { text: '[OK] Core modules loaded successfully.', isCommand: false, color: 'text-green-400', delay: 150 },
    { text: '[INFO] Establishing connection to neural-net...', isCommand: false, delay: 200 },
    { text: '[OK] Connection established.', isCommand: false, color: 'text-green-400', delay: 150 },
    { text: 'cat ./my_philosophy.txt', isCommand: true, delay: 400 },
    ...TERMINAL_PHILOSOPHY.map(p => ({ text: p, isCommand: false, color: 'text-cyan-300', delay: 80 })),
    { text: '\n[SUCCESS] Welcome to my portfolio.', isCommand: false, color: 'text-green-400', delay: 200 },
    { text: 'All systems nominal. Ready for interaction.', isCommand: false, color: 'text-white', delay: 200 },
  ];

  const typeLine = useCallback(() => {
    if (scriptIndex.current >= script.length) return;

    const currentLineInfo = script[scriptIndex.current];
    const textToType = currentLineInfo.text;

    if (charIndex.current < textToType.length) {
      setCurrentTypingLine(prev => prev + textToType[charIndex.current]);
      charIndex.current++;
      timeoutRef.current = window.setTimeout(typeLine, 15); // Faster typing speed
    } else {
      // FIX: Use textToType directly instead of stale currentTypingLine from closure
      setLines(prev => [...prev, { text: textToType, ...currentLineInfo }]);
      setCurrentTypingLine('');
      charIndex.current = 0;
      scriptIndex.current++;
      
      const nextLine = script[scriptIndex.current];
      const delay = nextLine?.delay || 100;

      timeoutRef.current = window.setTimeout(typeLine, delay);
    }
  }, []);

  useEffect(() => {
    timeoutRef.current = window.setTimeout(typeLine, 500);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [typeLine]);

  useEffect(() => {
    if (terminalContentRef.current) {
      terminalContentRef.current.scrollTop = terminalContentRef.current.scrollHeight;
    }
  }, [lines, currentTypingLine]);

  return (
    <div className="bg-neutral-900/80 border border-neutral-700 rounded-lg shadow-xl backdrop-blur-md w-full mx-auto">
      <div className="flex items-center h-8 px-3 bg-neutral-800/80 rounded-t-lg">
        <div className="flex space-x-2">
          <button aria-label="Close terminal" onClick={onClose} className="w-3 h-3 bg-red-500 rounded-full focus:outline-none focus:ring-2 focus:ring-red-400"></button>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="flex-1 text-center text-xs text-neutral-400">bash -- 1280x720</span>
      </div>
      <div ref={terminalContentRef} className="p-4 font-mono text-sm text-neutral-200 h-[60vh] max-h-[720px] overflow-y-auto whitespace-pre-wrap">
        {lines.map((line, index) => (
          <div key={index}>
            {line.isCommand ? <CommandPrefix /> : <OutputPrefix />}
            <span className={line.color || ''}>{line.text}</span>
          </div>
        ))}
        {scriptIndex.current < script.length ? (
            <div>
              {script[scriptIndex.current].isCommand ? <CommandPrefix /> : <OutputPrefix />}
              <span>{currentTypingLine}</span>
              <BlinkingCursor />
            </div>
        ) : (
            <div>
              <CommandPrefix />
              <BlinkingCursor />
            </div>
        )}
      </div>
       <style>{`
          @keyframes blink { from, to { opacity: 1 } 50% { opacity: 0 } }
          /* Custom scrollbar for webkit browsers */
          .overflow-y-auto::-webkit-scrollbar { width: 8px; }
          .overflow-y-auto::-webkit-scrollbar-track { background: transparent; }
          .overflow-y-auto::-webkit-scrollbar-thumb { background-color: #4a4a4a; border-radius: 20px; border: 2px solid transparent; background-clip: content-box; }
          .overflow-y-auto::-webkit-scrollbar-thumb:hover { background-color: #6a6a6a; }
        `}</style>
    </div>
  );
};

export default Terminal;
