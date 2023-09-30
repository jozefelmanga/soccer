import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { mustMatch } from '../../../shared/confirmPWD';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(private formbuilder: FormBuilder, private router: Router) {}
  ngOnInit(): void {
    this.signupForm = this.formbuilder.group(
      {
        firstName: ['', [Validators.minLength(3), Validators.required]],
        lastName: ['', [Validators.minLength(3), Validators.required]],
        email: ['', [Validators.email, Validators.required]],
        password: ['', Validators.required],
        cpassword: ['', Validators.required],
      },
      {
        validators: mustMatch('password', 'cpassword'),
      }
    );
  }
  signup() {
    if (this.signupForm?.valid) {
      this.signupForm.value.connected = true;
      localStorage.setItem('user', JSON.stringify(this.signupForm.value));
      this.router.navigateByUrl('/');
    }
  }
}
