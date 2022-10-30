import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Tag, Image } from 'antd';
import getData from '../../utils/fetch';

const ItemPage = () => {
  const [item, setItem] = useState({});
  const [tags, setTags] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getData(`/.netlify/functions/item/${id}`, (item) => {
      setItem(item);
      setTags(item.tags);
    });
  }, [id]);

  const tagsList = tags.map((tag) => (
    <Tag className="item-section__tag" color="#4bb">#{tag}</Tag>
  ));

  return (
    <section className="section item-section">
      <div className="item-section__inner">
        <div className="item-section__info">
          <Link to={`/collection/${item.collection?.id}`}>
            <span className="item-section__coll-name">{item.collection?.name}</span>
          </Link>
          <h1 className="item-section__heading heading heading_size_m">{item.name}</h1>
          <div className="item-section__tags-list">{tagsList}</div>
          <p className="item-section__description">{item.description}</p>
          <p className="item-section__extra">
            <FormattedMessage id="main.item.info.start" />
            <time dateTime={item.createdOn}> {item.createdOn} </time>
            <FormattedMessage id="main.item.info.end" />
            <span> '{item.collection?.owner}' </span>
          </p>
        </div>
        <Image
          className="item-section__image"
          src={item.url}
          alt={item.description}
          height={560}
        />
      </div>
    </section>
  );
};

export default ItemPage;
