import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../actions/user";
import * as React from 'react';
import {DataGrid} from '@material-ui/data-grid';
import {useEffect} from "react";

const HomePage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUsers())
    }, [])

    const userList = useSelector(state => state.users)
    console.log("2. Get user-lists from state: " + userList)

    const columns = [
        {field: 'id', headerName: 'ID', width: 170},
        {field: 'email', headerName: 'Email', width: 270}
    ];

    const rows = [
        {id: 1, lastName: 'Snow', firstName: 'Jon', age: 35},
        {id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42},
        {id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45},
        {id: 4, lastName: 'Stark', firstName: 'Arya', age: 16},
        {id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null},
        {id: 6, lastName: 'Melisandre', firstName: null, age: 150},
        {id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44},
        {id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36},
        {id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65},
    ];

    const rows1 = (userList === undefined ? rows : Array.from(userList['users']));
    console.log(rows1)

    return (
        <div style={{height: 400, width: '100%'}}>
            <DataGrid rows={rows1} columns={columns} pageSize={5} checkboxSelection/>
        </div>
    );
}
export default HomePage;