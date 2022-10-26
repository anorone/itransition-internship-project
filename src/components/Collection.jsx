import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Image, Statistic, Button } from 'antd';

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
      <Button 
        className="coll__link" 
        type="link" 
        size="large" 
        shape="round"
      >
        <FormattedMessage id="main.collections.link" />
      </Button>
    </Link>
  </div>
);

export default Collection;
