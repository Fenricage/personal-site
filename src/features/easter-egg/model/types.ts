import type { Ref } from 'react';

import type { Nullable } from '@/shared/lib/types';

export type EastEggProps = {
  y: Nullable<number>;
  wrapperRef?: Ref<HTMLElement>;
};
