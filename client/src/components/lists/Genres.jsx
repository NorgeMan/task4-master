import React from 'react';
import {getGenres} from "../../actions/genre";
import {useDispatch, useSelector} from "react-redux";
import MaterialTable, {MTableToolbar} from "material-table";
import {MTableIcons} from "../../utils/MTableWrapper";

const Genres = () => {
    const dispatch = useDispatch()
    const genreState = useSelector(state => state.genres);
    if (!genreState) {
        dispatch(getGenres());
    }
    const tableIcons = MTableIcons();
    const columns = [
        {
            title: 'Title', field: 'name',
            render: rowData => {
                if (rowData.name) {
                    let url = "/genre/" + rowData._id;
                    return (<a href={url}>{rowData.name}</a>);
                }
                return (<a href='/genres'>..</a>);
            }
        }

    ];
    let rows = [];
    if (genreState) {
        rows = genreState['genres'];
        if (rows) {
            rows.sort(function (a, b) {
                    let textA = a.name.toUpperCase();
                    let textB = b.name.toUpperCase();
                    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
                }
            );
        }
    }
    return (
        <div style={{height: '100%', width: '100%'}}>
            <MaterialTable title="Genres" data={rows} columns={columns}
                           icons={tableIcons}
                           options={{search: true, paging: true, pageSize: 10, exportButton: true}}
            />
        </div>
    );
}
export default Genres;