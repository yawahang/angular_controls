export interface MvOhTableConfig {
  columns: MvOhTableColumn[];
  dataSource: {
    data: any[];
    totalRows: number;
  };
  loading: boolean;
  rowTooltip?: string;
  rowActionOption?: MvOhTableRowActionOption;
  fileName: string; // excel export file name
  sheetName?: string; // excel export sheet name
  option: MvOhTableOption;
}

export interface MvOhTableOption {
  searchText?: string;
  filter?: any;
  offset?: number;
  pageSize?: number;
  sortBy?: string;
  sortOrder?: string;
  serverSide?: boolean;
}

export interface MvOhTablePaging {
  offset?: number;
  pageSize?: number;
  sortBy?: string;
  sortOrder?: string;
}

export interface MvOhTableRowActionOption {
  navigationId: number;
  dblClickNavigationAction: string;
}

export interface MvOhTableColumn {
  name: string; // column name
  display?: string; // column display name
  type: string; // Action (For grid inline row actions), Text, Number, Percent, Money, Date, DateTime, CheckBox, Template
  actionIcon?: string; // action column row icon class name (optional)
  templateColumns?: string[]; // TemplateColumn is the list of columns which is to be shown as template in current column
  /*
        Formats are added by default, use this property if custom format needed
        Defaults: AppConst.data.gridOptions.GridColumnOption.Format
    */
  format?: string;
  cellColor?: string; // change the color of cell text
  cellInfoText?: string; // pass information sentence if needed to show info icon with information in tooltip on hover
  sticky?: boolean; // sticky header - false by default (row Actions should always be sticky)
  disableSort?: boolean; // disable column sort - false by default
  /*
        Cell prefix like $ or Rs 
        Defaults: AppConst.data.gridOptions.GridColumnOption.Prefix
   */
  prefix?: string;
  /*
        Cell suffix like % 
        Defaults: AppConst.data.gridOptions.GridColumnOption.Suffix
   */
  suffix?: string;
  hidden?: boolean; // hidden columns
  minWidth?: number; // column min width in px
}
