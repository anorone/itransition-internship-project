import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const Spinner = (
  <div className="loading">
    <Spin
      indicator={<LoadingOutlined className="loading__icon" />}
      spin
    />
  </div>
);

export default Spinner;
