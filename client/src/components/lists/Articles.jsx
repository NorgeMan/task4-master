import React from 'react';
import {getBooks} from "../../actions/book";
import {useDispatch, useSelector} from "react-redux";
import MaterialTable, {MTableToolbar} from "material-table";
import { forwardRef } from 'react';
import {
    AddBox, ArrowDownward,
    Check, ChevronLeft,
    ChevronRight, Clear,
    DeleteOutline,
    Edit,
    FilterList,
    FirstPage,
    LastPage, Remove,
    SaveAlt, Search, ViewColumn
} from "@material-ui/icons";

const Articles = () => {
    const dispatch = useDispatch()
    const book_list = useSelector(state => state.books);
    if (!book_list) {
        dispatch(getBooks());
    }
    console.log(book_list);

    const tableIcons = {
        Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
        DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
        Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
        ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
        ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
    };

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
    if (book_list) {
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
                           icons ={tableIcons}
                           options={{search: true, paging: true, exportButton: true}}
                           onRowClick={(event, rowData) => rowClickedHandler(rowData)}/>
        </div>
    );
}

function rowClickedHandler(rowData) {
    console.log("/book/" + rowData._id);
}

export default Articles;
