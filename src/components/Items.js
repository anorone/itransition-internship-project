import { FormattedMessage } from 'react-intl';
import { List } from 'antd';
import Item from './Item';

const items = [
  {
    id: 3,
    name: 'Чума',
    description: 'Роман французского писателя Альбера Камю.',
    url: '/files/peste.jpg',
    collection: { id: 1, name: 'Книги Альбера Камю' },
    owner: 'superuser',
    createdOn: '19-10-2022',
  },
  {
    id: 2,
    name: 'Посторонний',
    description: 'Дебютный роман Альбера Камю.',
    url: '/files/etranger.jpg',
    collection: { id: 1, name: 'Книги Альбера Камю' },
    owner: 'superuser',
    createdOn: '19-10-2022',
  },
  {
    id: 1,
    name: 'Первый человек',
    description: 'Неоконченный автобиографический роман Альбера Камю.',
    url: '/files/premier.jpg',
    collection: { id: 1, name: 'Книги Альбера Камю' },
    owner: 'superuser',
    createdOn: '14-10-2022',
  },
];

const Items = () => (
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

export default Items;
