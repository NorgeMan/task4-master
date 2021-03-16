import React from 'react';
import {useEffect} from "react/cjs/react.production.min";
import {getAuthors} from "../../actions/author";
import {useDispatch, useSelector} from "react-redux";
import MaterialTable from "material-table";

const Authors = () => {
    const dispatch = useDispatch()
    dispatch(getAuthors());

    const authors_list = useSelector(state => state.authors);
    console.log("2. found: ");
    console.log(authors_list);

    const columns = [
        {title: 'Title', field: 'title'},
        {title: 'Author', field: 'author.first_name'},
        {title: 'ID', field: '_id'},
        {title: 'Avatar',
            field: 'author.first_name',
            render: rowData => "<a href='/api/catalog/author/{rowData.id}'>{rowData.title}</a>"
        }
    ];
    let rows = [];
    if (authors_list) {
        console.log("3. found:");
        console.log(authors_list);
        rows = authors_list['authors'];
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
            <MaterialTable title="Authors" data={rows} columns={columns}
                           options={{search: true, paging: true, filtering: false, exportButton: true}}/>
        </div>
    );
}
export default Authors;