import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { CardsComponent } from './cards/cards.component';

const routes: Routes = [
    { path: '', component: CardsComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [CardsComponent],
    exports: [
        RouterModule
    ]
})
export class CardsModule { }
