import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import {useDispatch, useSelector} from "react-redux";
import {getBookImageUrl, getBooks} from "../../actions/book";
import GridListTileBar from "@material-ui/core/GridListTileBar";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 1000,
        height: 450,
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

const WelcomePageCatalog = () => {
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
            <GridList cellHeight={160} className={classes.gridList} cols={6}>
                {tileData.map((tile) => (
                    <GridListTile key={tile.img} cols={tile.cols || 1}>
                        <a href={"/book/" + tile._id}>
                            <img src={getBookImageUrl(tile)} alt={tile.title}
                                 style={{height: '100%', width: '100%'}}/>
                        </a>
                        <GridListTileBar
                            title={tile.title}
                            classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}
                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}
export default WelcomePageCatalog;