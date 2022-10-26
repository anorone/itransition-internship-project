import { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { List } from 'antd';
import getData from '../utils/fetch';
import Item from './Item';

const Items = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getData('/.netlify/functions/index?from=items&limit=3', setItems);
  }, []);

  return (
    <section className="section">
      <h2 className="heading heading_size_s">
        <FormattedMessage id="main.items.heading" />
      </h2>
      <div className="section__inner">
        <List
          className="items-list"
          grid={{ gutter: 20, xs: 1, sm: 1, md: 2, lg: 2, xl: 3, xxl: 3 }}
          dataSource={items}
          renderItem={(item) => (
            <List.Item>
              <Item props={item} />
            </List.Item>
          )}
        />
      </div>
    </section>
  );
}

export default Items;
