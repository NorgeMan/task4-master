import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {useDispatch, useSelector} from "react-redux";
import {getBookImageUrl, getBooks} from "../../actions/book";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
         // color: theme.palette.primary.light,
         color: 'white',
         fontWeight: 'bold',
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
}));

const WelcomePagePopular = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const bookState = useSelector(state => state.books);
    if (!bookState) {
        dispatch(getBooks());
    }
    let tileData = [];
    if (bookState) {
        tileData = bookState['books'];
    }

    return (
        <div className={classes.root}>
            <GridList className={classes.gridList} cols={2.5}>
                {
                    tileData.map((tile) => (
                        <GridListTile key={getBookImageUrl(tile)}>
                            <a href={"/book/" + tile._id}>
                                <img src={getBookImageUrl(tile)} alt={tile.title}
                                     style={{height: '100%', width: '100%'}}/>
                            </a>
                            <GridListTileBar
                                title={tile.title}
                                subtitle={tile.summary}
                                classes={{
                                    root: classes.titleBar,
                                    title: classes.title,
                                }}
                                actionIcon={
                                    <IconButton aria-label={`star ${tile.title}`}>
                                        <StarBorderIcon className={classes.title}/>
                                    </IconButton>
                                }
                            />
                        </GridListTile>
                    ))}
            </GridList>
        </div>
    );
}
export default WelcomePagePopular;