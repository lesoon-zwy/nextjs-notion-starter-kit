import * as React from 'react'
import siteConfig from 'site.config';

const Logo = () => {
  return (
    <img src={siteConfig.logoSrc} height="20rem" alt="Logo"><a url={siteConfig.domain} /></img>
  );
}

export default Logo;