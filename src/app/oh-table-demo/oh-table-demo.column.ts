import { MvOhTableColumn } from '../shared/oh-table/oh-table/oh-table.model';

export const gridColumns: MvOhTableColumn[] = [
    {
        "name": "action",
        "display": "Actions",
        "type": "action",
        "actionIcon": "queue",
        "sticky": true,
    },
    {
        "name": "sn",
        "display": "SN",
        "type": "sn",
        "sticky": true,
        "minWidth": 50
    },
    {
        "name": "name",
        "display": "Name",
        "type": "text",
        "minWidth": 200
    },
    {
        "name": "gender",
        "display": "Gender",
        "type": "template",
        "minWidth": 80
    },
    {
        "name": "company",
        "display": "Company",
        "type": "text",
        "minWidth": 200
    },
    {
        "name": "age",
        "display": "Age",
        "type": "number",
        "minWidth": 200
    },
    {
        "name": "country",
        "display": "Country",
        "type": "text",
        "minWidth": 200
    },
    {
        "name": "state",
        "display": "State",
        "type": "text",
        "minWidth": 200
    },
    {
        "name": "phone",
        "display": "Phone",
        "type": "text",
        "minWidth": 200
    },
    {
        "name": "salary",
        "display": "Salary",
        "type": "money",
        "prefix":"$",
        "minWidth": 200
    },
    {
        "name": "salary1",
        "display": "Salary1",
        "type": "money",
        "prefix":"$",
        "minWidth": 200
    },
    {
        "name": "salary2",
        "display": "Salary2",
        "type": "money",
        "prefix":"$",
        "minWidth": 200
    },
    {
        "name": "salary3",
        "display": "Salary3",
        "type": "money",
        "prefix":"$",
        "minWidth": 200
    },
    {
        "name": "salary4",
        "display": "Salary4",
        "type": "money",
        "prefix":"$",
        "minWidth": 200
    },
    {
        "name": "salary5",
        "display": "Salary5",
        "type": "money",
        "prefix":"$",
        "minWidth": 200
    },
    {
        "name": "salary6",
        "display": "Salary6",
        "type": "money",
        "prefix":"$",
        "minWidth": 200
    },
];