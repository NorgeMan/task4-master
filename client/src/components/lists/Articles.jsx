import React from 'react';
import {useEffect} from "react/cjs/react.production.min";
import {getBooks} from "../../actions/book";
import {useDispatch, useSelector} from "react-redux";
import MaterialTable from "material-table";

const Articles = () => {
    const dispatch = useDispatch()
    dispatch(getBooks());

    const book_list = useSelector(state => state.books);
    console.log("2. found: ");
    console.log(book_list);

    const columns = [
        {title: 'Title', field: 'title'},
        {title: 'Author', field: 'author.first_name'},
        {title: 'ID', field: '_id'},
        {title: 'Avatar',
            field: 'author.first_name',
            render: rowData => "<a href='/api/catalog/book/{rowData.id}'>{rowData.title}</a>"
        }
    ];
    let rows = [];
    if (book_list) {
        console.log("3. found:");
        console.log(book_list);
        rows = book_list['books'];
        if (rows) {
            rows.sort(function (a, b) {
                    let textA = a.title.toUpperCase();
                    let textB = b.title.toUpperCase();
                    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
                }
            );
        }
        console.log("4. found:");
        console.log(rows);
    }
    return (
        <div style={{height: '100%', width: '100%'}}>
            <MaterialTable title="Articles" data={rows} columns={columns}
                           options={{search: true, paging: true, filtering: false, exportButton: true}}/>
        </div>
    );
}
export default Articles;