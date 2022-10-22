import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Radio, Input, Button } from 'antd';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

const Banner = () => {
  const [authType, setAuthType] = useState('login');

  const handleLinkClick = (e) => {
    e.preventDefault();
    setAuthType('signup');
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
        <Radio.Button value="login">Sign in</Radio.Button>
        <Radio.Button value="signup">Sign up</Radio.Button>
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
        {authType === 'login' ? 'Sign in' : 'Sign up'}
      </Button>
    </form>
  );
};

export default Banner;
