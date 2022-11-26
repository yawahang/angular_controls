import { MvOhTableColumn } from '../shared/oh-table/oh-table/oh-table.model';

 
export const gridColumns: MvOhTableColumn[] = [
    {
        "name": "action",
        "display": "Actions",
        "type": "action",
        "sticky": true
    },
    {
        "name": "name",
        "display": "Name",
        "type": "text"
    },
    {
        "name": "description",
        "display": "Description",
        "type": "text"
    }, 
    {
        "name": "quantity",
        "display": "Quantity",
        "type": "number"
    },
    {
        "name": "office",
        "display": "Office",
        "type": "text"
    },
    {
        "name": "modifiedDate",
        "display": "Modified Date",
        "type": "dateTime"
    },
    {
        "name": "modifiedBy",
        "display": "Modified By",
        "type": "text"
    }
];