import { FormattedMessage } from 'react-intl';
import { List, Comment, Avatar } from 'antd';

const Comments = ({ comments }) => (
  <List
    className="item-section__comments comments-list"
    header={(
      <span>
        <FormattedMessage id="main.item.comments.count" />: {comments.length}
      </span>
    )}
    dataSource={comments}
    renderItem={(comment) => (
      <li>
        <Comment
          className="comments-list__item"
          author={(<FormattedMessage id="main.item.comments.author" />)}
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="User avatar." />}
          content={comment}
        />
      </li>
    )}
  />
)

export default Comments;
