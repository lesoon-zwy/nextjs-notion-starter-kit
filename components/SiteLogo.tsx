import * as React from 'react'
import siteConfig from 'site.config';

const Logo = () => {
  return (
    <img src={siteConfig.logoSrc} height="20rem" url={siteConfig.domain} alt="Logo" />
  );
}

export default Logo;