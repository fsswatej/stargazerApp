import React from "react";
import { CircularProgress, List, makeStyles, Typography, Grid } from '@material-ui/core';
import ListElement from './ListElement';

const useStyles = makeStyles(theme => ({
      loaderContainer: {
            minHeight: 200,
            padding: theme.spacing(4),
            textAlign: "center"
      },
      listContainer: {
            width: '700px',
            marginTop: '25px'
      }
}))

const ListComponent = (props) => {

      const classes = useStyles();

      const { isLoading, hasError, list = [], isRelated, onClickTopic } = props;

      if (isLoading)
            return (
                  <div className={classes.loaderContainer}>
                        <CircularProgress data-testid="circular-progress" />
                  </div>
            );
      if (hasError) return `There is an error while fetching data: ${hasError}`;

      if (list.length === 0) {
            return <Typography
                  data-testid="empty-list"
                  color="secondary"
                  align="center"
                  variant="subtitle1"
            >
                  Couldn't find anything with the current search criteria.
            </Typography>
      }
      return <Grid className={isRelated ? '' : classes.listContainer} data-testid="list-container">
            <List>
                  {isRelated ?
                        list.map((topic, index) => (
                              <ListElement
                                    key={index}
                                    topic={topic}
                                    iterator={`${isRelated}${index}`}
                              />
                        )) : list.map(({ topic }, index) => (
                              <ListElement
                                    key={index}
                                    topic={topic}
                                    iterator={index}
                                    onClick={() => onClickTopic(topic)}
                              />
                        ))
                  }
            </List>
      </Grid>;
};

export default ListComponent;
