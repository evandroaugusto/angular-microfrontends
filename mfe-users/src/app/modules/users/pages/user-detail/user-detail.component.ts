import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  constructor(@Inject('uiService') private uiService: any) { }

  ngOnInit(): void {
    console.log('THIS =>', this.uiService.getFullName());
    this.uiService.setFullName("Danilo Augusto")
  }

}
