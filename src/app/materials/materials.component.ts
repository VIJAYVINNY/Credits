import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss']
})
export class MaterialsComponent implements OnInit {

  notifivation = 6;

  color: ThemePalette = 'primary';
  value = 50;

  constructor() { }
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  showSpinner = false;

  showData() {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 4000)

  }

  ngOnInit(): void {
  }

}
