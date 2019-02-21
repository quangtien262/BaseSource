import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { ColumnsComponent } from './columns/columns.component';
import { OverlapComponent } from './overlap/overlap.component';
import { BoxedComponent } from './boxed/boxed.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabhomeComponent } from './tabs/tabhome/tabhome.component';
import { TabprofileComponent } from './tabs/tabprofile/tabprofile.component';
import { TabmessageComponent } from './tabs/tabmessage/tabmessage.component';
import { ContainersComponent } from './containers/containers.component';

const routes: Routes = [
    { path: 'columns', component: ColumnsComponent },
    { path: 'overlap', component: OverlapComponent },
    { path: 'boxed', component: BoxedComponent },
    {
        path: 'tabs', component: TabsComponent,
        children: [
            { path: '', redirectTo: 'home' },
            { path: 'home', component: TabhomeComponent },
            { path: 'profile', component: TabprofileComponent },
            { path: 'message', component: TabmessageComponent }
        ]
    },
    { path: 'containers', component: ContainersComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        ColumnsComponent,
        OverlapComponent,
        BoxedComponent,
        TabsComponent,
        TabhomeComponent,
        TabprofileComponent,
        TabmessageComponent,
        ContainersComponent
    ],
    exports: [
        RouterModule
    ]
})
export class LayoutsModule { }