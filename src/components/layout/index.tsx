import React, {ReactNode} from "react"

import {Nullable} from "../../types";

import {GlobalHeader, LanguageButtonWrapper} from "./controls";

type LayoutProps = {
    languageButton?: Nullable<ReactNode>
    header?: Nullable<ReactNode>;
    children: ReactNode;
    location: Location;
}

const Index = ({ location, languageButton, header, children }: LayoutProps) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
          <div className="global-wrapper" data-is-root-path={isRootPath}>
              <GlobalHeader>
                  {header}
                  <LanguageButtonWrapper>
                      {languageButton}
                  </LanguageButtonWrapper>
              </GlobalHeader>
              <main>{children}</main>
      </div>
  )
}

export default Index
