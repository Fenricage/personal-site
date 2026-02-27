import {Link} from "gatsby"
import React, {ReactNode} from "react"

import {Nullable} from "../../types";

import {GlobalHeader} from "./controls";

type LayoutProps = {
    title: Nullable<string>;
    languageButton?: Nullable<ReactNode>
    children: ReactNode;
    location: Location;
}

const Index = ({ location, languageButton, title, children }: LayoutProps) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header: ReactNode



  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }



  return (
          <div className="global-wrapper" data-is-root-path={isRootPath}>
              <GlobalHeader>
                  {header}
                  {languageButton}
              </GlobalHeader>
              <main>{children}</main>
      </div>
  )
}

export default Index
