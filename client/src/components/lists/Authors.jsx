import React from 'react';
import {getAuthors} from "../../actions/author";
import {useDispatch, useSelector} from "react-redux";
import MaterialTable from "material-table";
import {MTableIcons} from "../../utils/MTableWrapper";
import dateFormat from 'dateformat';
import {useTranslation} from 'react-i18next';

const Authors = () => {
    const {t} = useTranslation();
    const dispatch = useDispatch()
    const authorState = useSelector(state => state.authors);
    if (!authorState) {
        dispatch(getAuthors());
    }

    const tableIcons = MTableIcons();
    const columns = [
        {
            title: t('author.label'), field: 'first_name',
            render: rowData => {
                if (rowData.first_name) {
                    let url = "/author/" + rowData._id;
                    let authorName = rowData.first_name + " " + rowData.family_name;
                    return (<a href={url}>{authorName}</a>);
                }
                return (<a href='/authors'>..</a>);
            }
        }, {
            title: t('author.date.label'), field: 'date_of_birth',
            render: rowData => {
                return rowData.date_of_birth ? dateFormat(rowData.date_of_birth, "dd mmmm yyyy") : '';
            }
        }
    ];
    let rows = [];
    if (authorState) {
        rows = authorState['authors'];
    }
    return (
        <div style={{height: '100%', width: '100%'}}>
            <MaterialTable title={t('authors.label')} data={rows} columns={columns}
                           icons={tableIcons}
                           options={{search: true, paging: true, pageSize: 10, exportButton: true}}
            />
        </div>
    );
}
export default Authors;