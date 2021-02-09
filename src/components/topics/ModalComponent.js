import { Dialog, DialogTitle, Grid, Typography, makeStyles } from '@material-ui/core';
import ListComponent from './ListComponent';

const useStyles = makeStyles(() => ({
    modalListContainer: {
        padding: '10px',
        justifyContent: 'center'
    }
}));

const ModalComponent = (props) => {
    const { openPopup, relatedTopicsList, onClose } = props;

    const classes = useStyles();

    return <Dialog
        open={openPopup}
        onClose={onClose}
        fullWidth
    >
        <DialogTitle disableTypography>
            <Typography variant="h4">Related Topics</Typography>
        </DialogTitle>
        <Grid container className={classes.modalListContainer}>
            <Grid item xs={12}>
                <ListComponent list={relatedTopicsList} isRelated />
            </Grid>
        </Grid>
    </Dialog>
}


export default ModalComponent;
