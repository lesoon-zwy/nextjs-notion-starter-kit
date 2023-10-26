import siteConfig from 'site.config';

const LogoElement = () => {
  return (
    <img src={siteConfig.logoSrc} alt="Logo" />
  );
}

export default LogoElement;
