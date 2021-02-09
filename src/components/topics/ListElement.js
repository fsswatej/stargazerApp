import { Chip, ListItem, ListItemText } from '@material-ui/core';
import { getIn } from 'immutable';

const ListElement = (props) => {
    const { topic, onClick, iterator } = props;
    return <ListItem
        data-testid={`topicName${iterator}`}
        onClick={onClick}
        button
        divider
    >
        <ListItemText
            id={`topicName${iterator}`}
            primary={getIn(topic, ['name'])}
        />
        <Chip
            color="primary"
            label={getIn(topic, ['stargazerCount'])}
        />
    </ListItem>
};

export default ListElement;