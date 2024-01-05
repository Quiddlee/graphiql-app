import ghIcon from '@assets/Github.svg';
import rsLogo from '@assets/rs_school_js.svg';

const Footer = () => {
  return (
    <footer className="flex h-fit flex-col items-center justify-center">
      <div className="flex gap-3">
        <a href="https://github.com/Quiddlee" className="flex gap-[7px]">
          <img src={ghIcon} alt="" />
          <span>Quiddle</span>
        </a>
        <a href="https://github.com/Tedzury" className="flex gap-[7px]">
          <img src={ghIcon} alt="" />
          <span>Tedzury</span>
        </a>
        <a href="https://github.com/barrydilan" className="flex gap-[7px]">
          <img src={ghIcon} alt="" />
          <span>Barrydilan</span>
        </a>
      </div>
      <div className="mt-[6px] flex items-center gap-3">
        <span>2023</span>
        <a href="https://rs.school/">
          <img src={rsLogo} alt="" className="block w-[50px]" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
