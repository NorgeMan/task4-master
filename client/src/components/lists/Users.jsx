import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import MaterialTable from "material-table";
import {MTableIcons} from "../../utils/MTableWrapper";
import {getUsers} from "../../actions/user";

const Users = () => {
    const dispatch = useDispatch();
    const user_list = useSelector(state => state.users);
    if (!user_list) {
        dispatch(getUsers());
    }

    console.log("1. user_list " + user_list);
    console.log(user_list);

    const tableIcons = MTableIcons();
    const columns = [
        {
            title: 'id', field: 'ID',
            render: rowData => {
                if (rowData.email) {
                    let url = "/user/" + rowData._id;
                    let name = rowData.email;
                    return (<a href={url}>{name}</a>);
                }
                return (<a href='/users'>..</a>);
            }
        },
        {title: 'email', field: 'Email'}
    ];

    let rows = [];
    if (user_list) {
        console.log(user_list);
        rows = user_list['users'];
        console.log(rows);
    }
    return (
        <div style={{height: '100%', width: '100%'}}>
            <MaterialTable title="Users" data={rows} columns={columns}
                           icons={tableIcons}
                           options={{search: true, paging: true, exportButton: true}}/>
        </div>
    );
}
export default Users;