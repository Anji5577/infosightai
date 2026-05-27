import { useEffect, useRef, useCallback } from 'react';

interface ScrambleTextProps {
  text: string;
  className?: string;
  as?: 'span' | 'div' | 'p' | 'h1' | 'h2' | 'h3';
  scrambleDuration?: number;
  delay?: number;
  trigger?: boolean;
  onScrambleComplete?: () => void;
}

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/~`';

export default function ScrambleText({
  text,
  className = '',
  as: Tag = 'span',
  scrambleDuration = 1200,
  delay = 0,
  trigger = true,
  onScrambleComplete,
}: ScrambleTextProps) {
  const ref = useRef<HTMLElement>(null);
  const frameRef = useRef<number>(0);

  const scramble = useCallback(() => {
    if (!ref.current || !trigger) return;
    
    const el = ref.current;
    const originalText = text;
    const length = originalText.length;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / scrambleDuration, 1);

      let result = '';
      for (let i = 0; i < length; i++) {
        const charProgress = Math.max(0, Math.min(1, (progress * length - i)));
        if (charProgress >= 1 || originalText[i] === ' ') {
          result += originalText[i];
        } else {
          result += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }

      el.textContent = result;

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        el.textContent = originalText;
        onScrambleComplete?.();
      }
    };

    if (delay > 0) {
      setTimeout(() => {
        frameRef.current = requestAnimationFrame(animate);
      }, delay);
    } else {
      frameRef.current = requestAnimationFrame(animate);
    }

    return () => {
      cancelAnimationFrame(frameRef.current);
    };
  }, [text, scrambleDuration, delay, trigger, onScrambleComplete]);

  useEffect(() => {
    const cleanup = scramble();
    return () => {
      cancelAnimationFrame(frameRef.current);
      cleanup?.();
    };
  }, [scramble]);

  return (
    <Tag
      ref={ref as any}
      className={className}
      data-scramble-text=""
    >
      {text}
    </Tag>
  );
}
