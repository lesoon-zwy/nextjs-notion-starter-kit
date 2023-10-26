import * as React from 'react'
import siteConfig from 'site.config';

const Logo = () => {
  return (
    <img src={siteConfig.logoSrc} alt="Logo" />
  );
}

export default Logo;
