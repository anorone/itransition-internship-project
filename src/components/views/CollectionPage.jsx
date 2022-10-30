import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Table, Tag } from 'antd';
import getData from '../../utils/fetch';

const CollectionPage = () => {
  const [collection, setCollection] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getData(`/.netlify/functions/collection/${id}`, setCollection);
  }, [id]);

  const tableColumns = [
    {
      title: <FormattedMessage id="main.collection.table.col-1" />,
      dataIndex: 'name',
      key: 'name',
      render: (name, { id }) => <Link to={`/item/${id}`}>{name}</Link>,
      sorter: (a, b) => a.name > b.name,
    },
    {
      title: <FormattedMessage id="main.collection.table.col-2" />,
      dataIndex: 'tags',
      key: 'tags',
      render: (tags) => tags.map((tag) => (
        <Tag className="items-table__tag" color="#777" key={tag}>
          #{tag}
        </Tag>
      ))
    },
    {
      title: <FormattedMessage id="main.collection.table.col-3" />,
      dataIndex: 'createdOn',
      key: 'createdOn',
      render: (date) => <time dateTime={date}>{date}</time>,
      sorter: (a, b) => Date.parse(a.createdOn) - Date.parse(b.createdOn),
      defaultSortOrder: 'descend',
      filters: [
        {
          text: <FormattedMessage id="main.collection.table.filter.day" />,
          value: 'millisecondsPerDay',
        },
        {
          text: <FormattedMessage id="main.collection.table.filter.week" />,
          value: 'millisecondsPerWeek',
        },

        {
          text: <FormattedMessage id="main.collection.table.filter.month" />,
          value: 'millisecondsPerMonth',
        },
      ],
      onFilter: (value, record) => {
        const map = {
          millisecondsPerDay: 8.64e+7,
          millisecondsPerWeek: 6.048e+8,
          millisecondsPerMonth: 2.592e+9,
        };
        return (Date.now() - Date.parse(record.createdOn)) < map[value];
      },
    },
  ];

  return (
    <section className="section coll-section">
      <h1 className="coll-section__heading heading heading_size_m">{collection.name}</h1>
      <img className="coll-section__image" src={collection.url} alt={collection.name} height={320} />
      <span className="coll-section__author">
        <FormattedMessage id="main.collection.author" />: {collection.owner}
      </span>
      <span className="coll-section__category">
        <FormattedMessage id="main.collection.category" />: {collection.category}
      </span>
      <p>{collection.description}</p>
      <Table
        className="items-table"
        title={() => <FormattedMessage id="main.collection.table.title" />}
        dataSource={collection.items}
        columns={tableColumns}
      />
    </section>
  );
};

export default CollectionPage;
