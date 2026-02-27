import {Link} from "gatsby"
import React, {ReactNode} from "react"

import {useLanguage} from "../../features/i18n/useLanguage";
import {Nullable} from "../../types";

import {GlobalHeader} from "./controls";

type LayoutProps = {
    title: Nullable<string>;
    children: ReactNode;
    location: Location;
}


const Index = ({ location, title, children }: LayoutProps) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header: ReactNode

    const {language, onClickLanguage} = useLanguage()


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
                  <button onClick={onClickLanguage}>{language.toUpperCase()}</button>
              </GlobalHeader>
              <main>{children}</main>
      </div>
  )
}

export default Index
