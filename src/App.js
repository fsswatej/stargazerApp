import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Container,
    makeStyles,
    CssBaseline
} from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import ScrollTop from "./components/common/ScrollTop";
import TopicBaseComponent from "./components/topics";


const useStyles = makeStyles((theme) => ({
    appBar: {
        maxHeight: '50px',
        justifyContent: 'center'
    },
    container: {
        marginTop: '10px',
        maxWidth: 1200,
        padding: theme.spacing(2),
    }
}));

const appTheme = () => createMuiTheme({
    palette: {
        primary: {
            main: '#041E42'
        }
    }
});

function App() {

    const classes = useStyles();
    return (
        <React.Fragment>
            <ThemeProvider theme={createMuiTheme()}>
                <ThemeProvider theme={appTheme} >
                    <CssBaseline />
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <Typography variant="h6" primary>
                                GIT Stargazers App
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Container className={classes.container}>
                        <TopicBaseComponent />
                    </Container>
                </ThemeProvider>
            </ThemeProvider>
            <ScrollTop />
        </React.Fragment>
    );
}

export default App;
