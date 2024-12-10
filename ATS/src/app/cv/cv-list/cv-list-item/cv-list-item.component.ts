import { Component } from '@angular/core';
import * as mockdata from './.././../../../assets/mock-data.json';

@Component({
  selector: 'app-cv-list-item',
  templateUrl: './cv-list-item.component.html',
  styleUrl: './cv-list-item.component.scss'
})
export class CvListItemComponent {
  filename: string = ""
  cvs: any[] = []

  ngOnInit(): void {
    this.cvs = mockdata.cv
  }
}
