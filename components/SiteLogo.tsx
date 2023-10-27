import * as React from 'react'
import siteConfig from 'site.config';

const Logo = () => {
  return (
    //<a pageID={siteConfig.rootNotionPageId}>
    <img src={siteConfig.logoSrc} height="20rem" alt="Logo" />
  );
}

export default Logo;