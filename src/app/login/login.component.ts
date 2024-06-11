import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}
  @Input() UserPassArray: { Username: string; Password: string }[] = [];

  ngOnInit(): void {}

  onSubmit(LoginForm: any) {
    this.router.navigate(['/dashboard']);
  }
}
