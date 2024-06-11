import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../material/material.module';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, MaterialModule {
  constructor() {}

  ngOnInit(): void {}
}
