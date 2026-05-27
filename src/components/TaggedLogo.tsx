import { cn } from '@/lib/utils';

type TaggedLogoProps = {
  className?: string;
  variant?: 'nav' | 'footer';
};

export default function TaggedLogo({ className, variant = 'nav' }: TaggedLogoProps) {
  const isFooter = variant === 'footer';

  return (
    <img
      src="/logo.png"
      alt="InfosightAI"
      className={cn(
        'block object-contain transition-opacity duration-300',
        isFooter ? 'h-4 w-auto' : 'h-8 w-auto max-w-[min(50vw,260px)] group-hover:opacity-80',
        className
      )}
    />
  );
}
