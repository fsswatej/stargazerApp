import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
      searchContainer: {
            height: '95px',
            position: 'sticky',
            top: 40,
            paddingTop: '40px',
            paddingBottom: '40px',
            zIndex: 5,
            background: '#fafafa'
      }
}));

const ItemSearch = (props) => {
      const classes = useStyles();

      const handleChange = ({ target }) => {
            const { value } = target;
            props.setInputValue(value);
      };

      return (
            <Grid container justify='center' className={classes.searchContainer}>
                  <Grid item md={8} xs={12} sm={10}>
                        <TextField
                              id="topic-search"
                              type="text"
                              label="Search Topic"
                              variant="outlined"
                              fullWidth
                              name="userInput"
                              placeholder="Search for a topic"
                              value={props.input}
                              onChange={handleChange}
                        />
                  </Grid>
            </ Grid>
      );
};

export default ItemSearch;
