import React from 'react';

export interface SvgProps {
  size?: number;
  color?: string;
  className?: string;
}

export const Play: React.FC<SvgProps> = ({
  size,
  color,
  className,
}: SvgProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
    <path d="M8,5.14V19.14L19,12.14L8,5.14Z" fill={color} />
  </svg>
);
