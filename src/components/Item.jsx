import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const Item = ({ props: { id, name, description, url, collection, owner, createdOn }}) => (
  <div className="item">
    <h3 className="item__name">{name}</h3>
    <Link className="item__link" to={`/item/${id}`}>
      <img className="item__image" src={url} alt={description} width="180" height="180" />
    </Link>
    <Link className="item__collection" to={`/collection/${collection.id}`}>
      {collection.name}
    </Link>
    <p className="item__info">
      <FormattedMessage id="main.items.info.start" />
      <span> '{collection.owner}'</span>
      <br />
      <FormattedMessage id="main.items.info.end" />
      <time dateTime={createdOn}>{createdOn}</time>
    </p>
  </div>
);

export default Item;
