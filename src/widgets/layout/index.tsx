import React, { ReactNode, Ref } from 'react';

import type { Nullable } from '@/shared/lib/types';

import { GlobalHeader, LanguageButtonWrapper } from './controls';

type LayoutProps = {
  languageButton?: Nullable<ReactNode>;
  header?: Nullable<ReactNode>;
  children: ReactNode;
  location: Location;
  headerRef?: Ref<HTMLElement>;
};

const Layout = ({
  location,
  languageButton,
  header,
  children,
  headerRef,
}: LayoutProps) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <GlobalHeader ref={headerRef}>
        {header}
        <LanguageButtonWrapper>{languageButton}</LanguageButtonWrapper>
      </GlobalHeader>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
