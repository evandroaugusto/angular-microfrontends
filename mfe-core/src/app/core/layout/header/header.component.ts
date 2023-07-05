import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

enum MFE {
  HOST = '4100',
  PRODUCTS = '4001'
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: []
})
export class HeaderComponent implements OnInit {
  MFE = MFE;
  mfeActive = this.document?.location?.port || MFE.HOST;

  constructor(
    @Inject(DOCUMENT) private document: any
  ) { }

  ngOnInit(): void {
  }
}
