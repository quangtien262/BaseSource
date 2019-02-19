import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataTableModule } from "angular2-datatable";

import { SharedModule } from '../../shared/shared.module';
import { ClassicComponent } from './classic/classic.component';
import { DatatablesComponent } from './datatables/datatables.component';
import { DataFilterPipe } from './datatables/datafilter.pipe';


const routes: Routes = [
    { path: 'classic', component: ClassicComponent },
    { path: 'datatables', component: DatatablesComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        DataTableModule
    ],
    declarations: [
        ClassicComponent,
        DatatablesComponent,
        DataFilterPipe
    ],
    providers: [
        DataFilterPipe
    ],
    exports: [
        RouterModule
    ]
})
export class TablesModule { }