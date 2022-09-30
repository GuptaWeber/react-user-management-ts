const Footer = ({company}) => {
  return (
    <footer>
      Copyright {company} {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
