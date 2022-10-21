import { List } from 'antd';
// import Item from './Item';

const items = [];

const Items = () => (
  <section className="section">
    <h2 className="heading heading_size_s">Recently added</h2>
    <div className="section__inner">
      <List
        className="items-list"
        grid={{ gutter: 20, xs: 1, sm: 2, md: 3, }}
        dataSource={items}
        renderItem={(item) => (
          <List.Item>
            {/* <Item props={item} /> */}
          </List.Item>
        )}
      />
    </div>
  </section>
);

export default Items;
