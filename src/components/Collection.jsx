import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Image, Statistic } from 'antd';

const Collection = ({ props: { id, name, url, volume }}) => (
  <div className="coll">
    <h3 className="coll__name">{name}</h3>
    
    <Image className="coll__image" src={url} alt={name} width={160} height={160} />

    <Statistic
      className="coll__volume"
      title=<FormattedMessage id="main.collections.stat" />
      value={volume}
    />

    <Link to={`/collection/${id}`} >
      <span className="ant-btn ant-btn-round ant-btn-link ant-btn-lg coll__link">
        <FormattedMessage id="main.collections.link" />
      </span>
    </Link>
  </div>
);

export default Collection;
