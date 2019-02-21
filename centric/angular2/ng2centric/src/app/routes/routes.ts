import { LayoutComponent } from '../layout/layout.component';

import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { LockComponent } from './user/lock/lock.component';
import { RecoverComponent } from './user/recover/recover.component';

export const routes = [

    {
        path: '',
        component: LayoutComponent,
        children: [

            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'cards', loadChildren: './cards/cards.module#CardsModule' },
            { path: 'elements', loadChildren: './elements/elements.module#ElementsModule' },
            { path: 'layouts', loadChildren: './layouts/layouts.module#LayoutsModule' },
            { path: 'forms', loadChildren: './forms/forms.module#FormsModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'maps', loadChildren: './maps/maps.module#MapsModule' },
            { path: 'pages', loadChildren: './pages/pages.module#PagesModule' }

        ]
    },

    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'lock', component: LockComponent },
    { path: 'recover', component: RecoverComponent },

    // Not found
    { path: '**', redirectTo: 'dashboard' }

];
