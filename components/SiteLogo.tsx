import * as React from 'react'
import siteConfig from 'site.config';

const Logo = () => {
  return (
    <img src={siteConfig.logoSrc} height="20rem" href={siteConfig.domain} alt="Logo"><a href={siteConfig.domain} /></img>
  );
}

export default Logo;