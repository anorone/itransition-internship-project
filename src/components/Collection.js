import { Image, Statistic, Button } from 'antd';
import { FormattedMessage } from 'react-intl';

const Collection = ({ props: { id, name, url, volume }}) => (
  <div className="coll">
    <h3 className="coll__name">{name}</h3>
    
    <Image className="coll__image" src={url} alt={name} width={160} height={160} />

    <Statistic className="coll__volume" title="Volume" value={volume} />

    <Button 
      className="coll__link" 
      href={`/collections/id=${id}`} 
      type="link" 
      size="large" 
      shape="round"
    >
      <FormattedMessage id="main.collections.link" />
    </Button>
  </div>
);

export default Collection;
