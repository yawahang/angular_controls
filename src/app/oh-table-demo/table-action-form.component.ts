import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData { 
    data:any;
}

@Component({
    selector: 'table-action-form',
    templateUrl: 'table-action-form.component.html',
})
export class TableActionFormDialog {
    constructor(
        public dialogRef: MatDialogRef<TableActionFormDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ) { }

    onClose(): void {
        this.dialogRef.close();
    }
}
