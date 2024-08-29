import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ExperienceService } from '../services/experience.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  login!: FormGroup;
  message!: String;
  ngOnInit(): void {
    this.login = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }
  islogin() {
    return this.dataService.isAuthenticated();
  }
  constructor(private dataService: AuthService, private router: Router) {}
  onSumbit() {
    console.log(this.login.value);
    this.dataService
      .login(this.login)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          console.log(err);
          this.message = err.error.message || 'Something went wrong';
        },
      });
      this.message="";
  }
}
