import { Component } from '@angular/core';
import { AuthService } from './pages/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'baby-company-client';
  constructor(private authService: AuthService, private router: Router) {
  }

  logout() {
    this.authService.logout();
      this.router.navigate(['/auth']);
  }

}
