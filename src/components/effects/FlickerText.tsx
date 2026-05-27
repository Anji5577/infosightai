import { useEffect, useRef, useState } from 'react';

interface FlickerTextProps {
  text: string;
  className?: string;
  as?: 'span' | 'div' | 'p' | 'h1' | 'h2' | 'h3';
  flickerInterval?: number;
  glitchChance?: number;
}

const CHARS = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export default function FlickerText({
  text,
  className = '',
  as: Tag = 'span',
  flickerInterval = 3000,
  glitchChance = 0.3,
}: FlickerTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const triggerGlitch = () => {
      if (Math.random() > glitchChance) {
        setDisplayText(text);
        return;
      }

      const chars = text.split('');
      const glitchCount = Math.floor(Math.random() * 2) + 1;
      
      for (let i = 0; i < glitchCount; i++) {
        const idx = Math.floor(Math.random() * chars.length);
        if (chars[idx] !== ' ' && chars[idx] !== '{' && chars[idx] !== '}') {
          chars[idx] = CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }
      
      setDisplayText(chars.join(''));
      
      setTimeout(() => {
        setDisplayText(text);
      }, 80 + Math.random() * 120);
    };

    intervalRef.current = setInterval(triggerGlitch, flickerInterval + Math.random() * 2000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text, flickerInterval, glitchChance]);

  return (
    <Tag className={`${className} flicker-text`} data-flicker-text="">
      {displayText}
    </Tag>
  );
}
