import { navigate } from 'gatsby';
import type { MouseEvent, ReactNode } from 'react';
import React from 'react';

import Button from '@/shared/ui/Button';

type LinkButtonProps = {
  to: string;
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  color?: string;
};

const LinkButton = ({ to, onClick, ...rest }: LinkButtonProps) => {
  return (
    <Button
      {...rest}
      onClick={(event) => {
        onClick?.(event);
        navigate(to);
      }}
    />
  );
};

export default LinkButton;
