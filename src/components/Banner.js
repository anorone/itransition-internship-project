import { FormattedMessage } from 'react-intl';
import AuthenticationForm from './AuthenticationForm';

const Banner = () => (
  <section className="banner">
    <h1 className="sr-only">
      Collection Manager - your ultimate solution for managing favorite collections.
    </h1>
    <h2 className="heading heading_size_l">
      <FormattedMessage id="main.banner.heading-size-l" />
    </h2>
    <p className="heading heading_size_m">
      <FormattedMessage id="main.banner.heading-size-m" />
    </p>
    <AuthenticationForm />
  </section>
);

export default Banner;
