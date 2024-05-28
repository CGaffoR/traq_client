import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularMaterialModule } from '../../angular-material/angular-material.module';
import { CommonModule } from '@angular/common';
import { QRCodeModule } from 'angularx-qrcode';
import { Router } from 'express';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, CommonModule, AngularMaterialModule, QRCodeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public qrcode: string;
  public isMenu: boolean = true;

  constructor() {
    this.qrcode = 'google.com';
  }
  toggleMenu() {
    this.isMenu = !this.isMenu;
    console.log('Menu is: ', this.isMenu);
  }
}
