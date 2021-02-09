import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        position: "fixed",
        bottom: theme.spacing(2),
        right: theme.spacing(2)
    }
}));
  
function ScrollTop() {
    const classes = useStyles();

    const handleClick = event => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            "#topicName0"
        );

        if (anchor) {
            anchor.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    };

    return (
        <div onClick={handleClick} role="presentation" className={classes.root}>
            <Fab color="primary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
            </Fab>
        </div>
    );
}

export default ScrollTop;
