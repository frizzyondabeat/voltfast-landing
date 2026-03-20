import { cn } from 'lib/utils';
import * as React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  ref?: React.Ref<HTMLElement>;
}

export function Section({ className, ref, ...props }: SectionProps) {
  return (
    <section
      ref={ref}
      className={cn(
        'relative flex w-full flex-col items-center border-b border-white/5',
        className
      )}
      {...props}
    />
  );
}

interface SectionContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  ref?: React.Ref<HTMLDivElement>;
}

export function SectionContainer({
  className,
  ref,
  ...props
}: SectionContainerProps) {
  return (
    <div
      ref={ref}
      className={cn(
        'relative flex w-full max-w-[1440px] flex-col items-center border-x border-white/5',
        className
      )}
      {...props}
    />
  );
}
