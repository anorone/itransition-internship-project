import { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { List } from 'antd';
import getData from '../utils/fetch';
import Collection from './Collection';

const Collections = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    getData('/.netlify/functions/index?from=colls&limit=5', setCollections);
  }, []);

  return (
    <section className="section">
      <h2 className="heading heading_size_s">
        <FormattedMessage id="main.collections.heading" />
      </h2>
      <div className="section__inner">
        <List
          className="colls-list"
          grid={{ gutter: 15, xs: 2, sm: 3, md: 4, lg: 5, xl: 5, xxl: 5 }}
          dataSource={collections}
          renderItem={(collection) => (
            <List.Item>
              <Collection props={collection} />
            </List.Item>
          )}
        />
      </div>
    </section>
  );
};

export default Collections;
