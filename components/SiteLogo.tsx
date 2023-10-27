import * as React from 'react'
import siteConfig from 'site.config';

const Logo = () => {
  return (
    <a href={siteConfig.rootNotionPageId}><img src={siteConfig.logoSrc} height="20rem" alt="Logo" /></a>
  );
}

export default Logo;