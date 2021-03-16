import { CssBaseline, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
    root: {
        width: '300px',
        backgroundColor: '#EBECF0',
        marginLeft: theme.spacing(2),
    },
}));

const List = () => {
    const classes = useStyle();
    return ( 
        <div>
            <Paper className={classes.root}>
                <CssBaseline />
                <Typography> Todo </Typography>
            </Paper>
        </div>
     );
}
 
export default List;