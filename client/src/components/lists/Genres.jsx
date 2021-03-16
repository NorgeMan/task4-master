import React from 'react';
import {useEffect} from "react/cjs/react.production.min";
import {getGenres} from "../../actions/genre";
import {useDispatch, useSelector} from "react-redux";
import MaterialTable from "material-table";

const Genres = () => {
    const dispatch = useDispatch()
    dispatch(getGenres());

    const genres_list = useSelector(state => state.genres);
    console.log("2. found: ");
    console.log(genres_list);

    const columns = [
        {title: 'Title', field: 'name'},
        {title: 'ID', field: '_id'}
    ];
    let rows = [];
    if (genres_list) {
        console.log("3. found:");
        console.log(genres_list);
        rows = genres_list['genres'];
        /*if (rows) {
            rows.sort(function (a, b) {
                    let textA = a.title.toUpperCase();
                    let textB = b.title.toUpperCase();
                    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
                }
            );
        }*/
        console.log("4. found:");
        console.log(rows);
    }
    return (
        <div style={{height: '100%', width: '100%'}}>
            <MaterialTable title="Genres" data={rows} columns={columns}
                           options={{search: true, paging: true, filtering: false, exportButton: true}}/>
        </div>
    );
}
export default Genres;