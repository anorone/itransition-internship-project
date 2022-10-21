import { List } from 'antd';
import Collection from './Collection';

const collections = [
  {
    id: 2,
    name: 'Марки',
    description: 'Марки - классика коллекционирования.',
    type: 'Печатные издания',
    url: '/files/stamps.jpg',
    volume: 1073
  },
  {
    id: 4,
    name: 'Balloons',
    description: 'Такая вот забава.',
    type: 'Игры и развлечения',
    url: '/files/balloons.jpg',
    volume: 69
  },
  {
    id: 3,
    name: 'Elite French cognac',
    description: 'Никогда не открывал - нравится ощущение обладания.',
    type: 'Алкогольные напитки',
    url: '/files/cognac.webp',
    volume: 11
  },
  {
    id: 1,
    name: 'Книги Альбера Камю',
    description: 'Пока прочел только одну.',
    type: 'Книги',
    url: '/files/book.jpg',
    volume: 3,
  },
  {
    id: 5,
    name: 'Носки',
    description: 'В каждом коллекционере дремлет психопат. (Цитата из фильма)',
    type: 'Одежда и аксессуары',
    url: '/files/socks.jpg',
    volume: 2,
  },
];

const Collections = () => (
  <section className="section">
    <h2 className="heading heading_size_s">Largest collections</h2>
    <div className="section__inner">
      <List
        className="colls-list"
        grid={{ gutter: 15, xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 5 }}
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

export default Collections;
