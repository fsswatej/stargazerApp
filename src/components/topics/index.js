import React from 'react';
import { Grid } from '@material-ui/core';
import useTopics from '../../services/hooks/useTopics';
import { makeStyles } from "@material-ui/core/styles";
import ItemSearch from "./ItemSearch";
import ScrollTop from "../common/ScrollTop";
import ListComponent from './ListComponent';
import ModalComponent from './ModalComponent';
import { getIn } from 'immutable';

const useStyles = makeStyles(() => ({
      listContainer: {
            padding: '10px',
            justifyContent: 'center'
      }
}));

const TopicBaseComponent = () => {
      const classes = useStyles();

      const [userInput, setUserInput] = React.useState('');
      const [selectedTopic, setSelectedTopic] = React.useState(null);
      const [relatedList, setRelatedList] = React.useState(false);

      const { loading, error, topics } = useTopics(userInput);

      const onClickTopic = (topic) => {
            setRelatedList(true);
            setSelectedTopic(topic);
      }

      return (
            <React.Fragment>
                  <ItemSearch input={userInput} setInputValue={setUserInput} />
                  <Grid container className={classes.listContainer}>
                        <ListComponent
                              isLoading={loading}
                              hasError={error}
                              list={topics}
                              onClickTopic={onClickTopic}
                        />
                  </Grid>
                  <ModalComponent
                        openPopup={relatedList}
                        relatedTopicsList={getIn(selectedTopic, ['relatedTopics'])}
                        onClose={() => {
                              setRelatedList(false)
                              setSelectedTopic(null)
                        }}
                  />

                  <ScrollTop />
            </ React.Fragment>
      );
};

export default TopicBaseComponent;
