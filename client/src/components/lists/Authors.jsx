import React from 'react';
import {getAuthors} from "../../actions/author";
import {useDispatch, useSelector} from "react-redux";
import MaterialTable from "material-table";
import {MTableIcons} from "../../utils/MTableWrapper";

const Authors = () => {
    // const dispatch = useDispatch()
    // dispatch(getAuthors());
    // const authors_list = useSelector(state => state.authors);

    const dispatch = useDispatch()
    const authors_list = useSelector(state => state.authors);
    if (!authors_list) {
        dispatch(getAuthors());
    }

    console.log("2. found: ");
    console.log(authors_list);
    const tableIcons = MTableIcons();
    const columns = [
        {
            title: 'Author', field: 'first_name',
            render: rowData => {
                if (rowData.first_name) {
                    let url = "/author/" + rowData._id;
                    let authorName = rowData.first_name + " " + rowData.family_name;
                    return (<a href={url}>{authorName}</a>);
                }
                return (<a href='/authors'>..</a>);
            }
        }, {
            title: 'Date of birth', field: 'date_of_birth'
            // ,
            // render: rowData => {
            //     new Intl.DateTimeFormat("en-GB", {
            //         year: "numeric",
            //         month: "long",
            //         day: "2-digit"
            //     }).format(rowData.date_of_birth)
            // }
        }
    ];
    let rows = [];
    if (authors_list) {
        console.log("3. found: ");
        console.log(authors_list);

        rows = authors_list['authors'];

        console.log("4. found: ");
        console.log(rows);
    }
    return (
        <div style={{height: '100%', width: '100%'}}>
            <MaterialTable title="Authors" data={rows} columns={columns}
                           icons={tableIcons}
                           options={{search: true, paging: true, exportButton: true}}/>
        </div>
    );
}
export default Authors;