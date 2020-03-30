import React from 'react';
import { Icon } from '../../components';
import styles from './button.module.scss';

export interface ButtonProps {
  action?: VoidFunction;
  grower?: boolean;
  text: string;
  icon?: string;
}

export const Button: React.FC<ButtonProps> = ({
  action,
  grower = false,
  text,
  icon,
}: ButtonProps) => {
  const className = grower ? styles.buttonGrower : styles.button;

  const iconComponent = icon ? <Icon name={icon} size={20} /> : null;

  return (
    <div className={className} onClick={action}>
      {iconComponent}
      {text}
    </div>
  );
};
