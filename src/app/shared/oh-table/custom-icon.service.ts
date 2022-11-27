import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})

export class CustomIconService {

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
  }

  register() {

    this.matIconRegistry.addSvgIcon(
      'file-excel',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/images/svg/file-excel.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'file-pdf',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/images/svg/file-pdf.svg')
    );
  }
}
