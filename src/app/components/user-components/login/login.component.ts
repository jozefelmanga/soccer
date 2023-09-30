import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private formbuilder: FormBuilder, private router: Router) {}
  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
    });
  }
  login() {
    let savedUser = JSON.parse(localStorage.getItem('user') || 'null');
    if (
      savedUser &&
      savedUser.username === this.loginForm.get('username')?.value &&
      savedUser.password === this.loginForm.get('password')?.value
    ) {
      savedUser.connected = true;
      localStorage.setItem('user', JSON.stringify(savedUser));
      this.router.navigateByUrl('/');
    } else {
      alert('Invalid username or password');
    }
  }
}
