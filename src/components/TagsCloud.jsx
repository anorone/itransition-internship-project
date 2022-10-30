import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Tag } from 'antd';
import { shuffle, uniq } from 'lodash';
import getData from '../utils/fetch';

const TagsCloud = () => {
  const [tags, setTags] = useState([]);

  const setUniqueTags = (items) => {
    const tags = items
      .flatMap((item) => item.tags)
      .map((tag) => tag.toLowerCase());
    const uniqueTags = uniq(tags);
    setTags(uniqueTags);
  };

  useEffect(() => {
    getData('/.netlify/functions/index?from=items', setUniqueTags);
  }, []);

  const tagsList = shuffle(tags).map((tag, i) => (
    <Link to={`/search?query=${tag}`} key={i}>
      <Tag className="tags-cloud__tag" color="#8b8b8b">#{tag}</Tag>
    </Link>
  ));

  return (
    <section className="section tags-cloud">
      {tagsList}
    </section>
  );
}

export default TagsCloud;
