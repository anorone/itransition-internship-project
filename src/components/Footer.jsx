import { FormattedMessage } from 'react-intl';
import { GithubFilled } from '@ant-design/icons';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__inner">
        <a href="https://github.com/anorone/itransition-internship-project" target="blank">
          <GithubFilled className="footer__icon"/>
        </a>
        <p className="footer__quote">
          <FormattedMessage id="footer.quote" />
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
