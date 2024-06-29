// src/app/app.routes.ts
import { Routes } from "@angular/router";
import { UserService } from "./core/auth/services/user.service";
import { RegisterComponent } from "./features/users/components/register/register.component";
import { SettingsComponent } from "./features/users/components/settings/settings.component";
import { ProfileComponent } from "./features/users/components/profile/profile.component";
import { LoginPageComponent } from "./core/auth/components/login-page/login-page.component";
import { authGuard } from "./core/auth/guards/auth.guard";

export const routes: Routes = [
  // { path: 'protected-route', component: ProtectedComponent, canActivate: [authGuard] }, // to guard any route use canactivate as here.
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [authGuard]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [authGuard]
  },
  // Add other routes here
];