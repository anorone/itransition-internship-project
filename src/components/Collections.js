import { List } from 'antd';
// import Collection from './Collection';

const collections = [];

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
            {/* <Collection props={collection} /> */}
          </List.Item>
        )}
      />
    </div>
  </section>
);

export default Collections;
