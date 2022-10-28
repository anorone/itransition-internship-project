import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Radio, Input, Button } from 'antd';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

const Banner = () => {
  const [authType, setAuthType] = useState('signup');

  const handleLinkClick = (e) => {
    e.preventDefault();
    setAuthType('login');
  };

  const handleRadioChange = (e) => setAuthType(e.target.value);

  return (
    <form className="auth-form banner__auth-form" method="post" action={authType}>
      <p className="auth-form__message">
        <FormattedMessage id="main.banner.form-message.start" />
        <a href="/signup" onClick={handleLinkClick}>
          <FormattedMessage id="main.banner.form-message.link" />
        </a>
        <FormattedMessage id="main.banner.form-message.end" />
      </p>

      <Radio.Group
        className="auth-form__radio-group"
        name="auth-type"
        value={authType}
        buttonStyle="solid"
        size="small"
        onChange={handleRadioChange}
      >
        <Radio.Button value="signup">
          <FormattedMessage id="main.banner.auth-form.signup"/>
        </Radio.Button>
        <Radio.Button value="login">
          <FormattedMessage id="main.banner.auth-form.login"/>
        </Radio.Button>
      </Radio.Group>

      <Input
        placeholder="user_name"
        required
        size="large"
        prefix={<UserOutlined />}
      />

      <Input.Password
        required
        minLength={9}
        size="large"
        prefix={<LockOutlined />}
      />

      <Button type="primary" htmlType="submit" size="large" block>
        <FormattedMessage id={`main.banner.auth-form.${authType}`} />
      </Button>
    </form>
  );
};

export default Banner;
