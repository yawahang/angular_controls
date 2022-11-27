import { MvOhTableColumn } from '../shared/oh-table/oh-table/oh-table.model';

export const gridColumns: MvOhTableColumn[] = [
    {
        "name": "action",
        "display": "Actions",
        "type": "action",
        "actionIcon": "queue",
        "sticky": true
    },
    {
        "name": "sn",
        "display": "SN",
        "type": "sn",
        "sticky": true
    },
    {
        "name": "name",
        "display": "Name",
        "type": "text"
    },
    {
        "name": "gender",
        "display": "Gender",
        "type": "text"
    },
    {
        "name": "company",
        "display": "Company",
        "type": "text"
    },
    {
        "name": "age",
        "display": "Age",
        "type": "number"
    },
];