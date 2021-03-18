import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import MaterialTable from "material-table";
import {MTableIcons} from "../../utils/MTableWrapper";
import {getUsers} from "../../actions/user";

const Users = () => {
    const dispatch = useDispatch();
    const userState = useSelector(state => state.user);
    if (!userState) {
        dispatch(getUsers());
    }

    const tableIcons = MTableIcons();
    const columns = [
        {
            title: 'id', field: '_id',
            render: rowData => {
                if (rowData.email) {
                    let url = "/user/" + rowData._id;
                    let name = rowData.email;
                    return (<a href={url}>{name}</a>);
                }
                return (<a href='/users'>..</a>);
            }
        },
        {title: 'Email', field: 'email'}
    ];

    let rows = [];
    if (userState) {
        rows = userState['users'];
    }
    return (
        <div style={{height: '100%', width: '100%'}}>
            <MaterialTable title="Users" data={rows} columns={columns}
                           icons={tableIcons}
                           options={{search: true, paging: true, pageSize: 10, exportButton: true}}
            />
        </div>
    );
}
export default Users;