import React from 'react';
import { Play } from './svg/Play';
import { ArrowLeft } from './svg/ArrowLeft';

export interface IconProps {
  name: string;
  size?: number;
  color?: string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = '#fff',
  className = undefined,
}: IconProps) => {
  switch (name) {
    case 'arrowLeft':
      return <ArrowLeft size={size} color={color} className={className} />;
    case 'play':
    default:
      return <Play size={size} color={color} className={className} />;
  }
};
