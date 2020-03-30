import React from 'react';

export interface SvgProps {
  size?: number;
  color?: string;
  className?: string;
}

export const ArrowLeft: React.FC<SvgProps> = ({
  size,
  color,
  className,
}: SvgProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
    <path
      d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"
      fill={color}
    />
  </svg>
);
