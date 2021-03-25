import React from 'react';
import {getBooks} from "../../actions/book";
import {useDispatch, useSelector} from "react-redux";
import MaterialTable, {MTableToolbar} from "material-table";
import {MTableIcons} from "../../utils/MTableWrapper";


const Articles = () => {
    const dispatch = useDispatch()
    const bookState = useSelector(state => state.books);
    if (!bookState) {
        dispatch(getBooks());
    }
    const tableIcons = MTableIcons();
    const columns = [
        {
            title: 'Title', field: 'title',
            render: rowData => {
                let url = "/book/" + rowData._id;
                return (<a href={url}>{rowData.title}</a>);
            }
        },
        {
            title: 'Author', field: 'author.first_name',
            render: rowData => {
                if (rowData.author) {
                    let url = "/author/" + rowData.author._id;
                    let authorName = rowData.author.first_name + " " + rowData.author.family_name;
                    return (<a href={url}>{authorName}</a>);
                }
                return (<a href='/authors'>..</a>);
            }
        }
    ];
    let rows = [];
    if (bookState) {
        rows = bookState['books'];
        if (rows) {
            rows.sort(function (a, b) {
                    let textA = a.title.toUpperCase();
                    let textB = b.title.toUpperCase();
                    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
                }
            );
        }
    }
    return (
        <div style={{height: '100%', width: '100%'}}>
            <MaterialTable title="Articles" data={rows} columns={columns}
                           icons={tableIcons}
                           options={{search: true, paging: true, pageSize: 10, exportButton: true}}
                           onRowClick={(event, rowData) => rowClickedHandler(rowData)}
            />
        </div>
    );
}

function rowClickedHandler(rowData) {
    console.log("/book/" + rowData._id);
}

export default Articles;
