import { FormattedMessage } from 'react-intl';

const Item = ({ props: { id, name, description, url, collection, owner, createdOn }}) => (
  <div className="item">
    <h3 className="item__name">{name}</h3>
    <a className="item__link" href={`/items?id=${id}`}>
      <img className="item__image" src={url} alt={description} width="180" height="180" />
    </a>
    <a className="item__collection" href={`/collections/id=${collection.id}`}>
      {collection.name}
    </a>
    <p className="item__info">
      <FormattedMessage id="main.items.info.start" /> '{owner}'
      <br />
      <FormattedMessage id="main.items.info.end" /> {createdOn}
    </p>
  </div>
);

export default Item;
