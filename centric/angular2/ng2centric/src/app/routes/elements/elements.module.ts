import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TreeModule } from 'angular-tree-component';

import { SharedModule } from '../../shared/shared.module';
import { BootstrapuiComponent } from './bootstrapui/bootstrapui.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ColorsComponent } from './colors/colors.component';
import { GridComponent } from './grid/grid.component';
import { IconsComponent } from './icons/icons.component';
import { ListsComponent } from './lists/lists.component';
import { NavtreeComponent } from './navtree/navtree.component';
import { NestableComponent } from './nestable/nestable.component';
import { SpinnersComponent } from './spinners/spinners.component';
import { SweetalertComponent } from './sweetalert/sweetalert.component';
import { TypographyComponent } from './typography/typography.component';
import { UtilitiesComponent } from './utilities/utilities.component';
import { WhiteframesComponent } from './whiteframes/whiteframes.component';

const routes: Routes = [
    { path: 'bootstrapui', component: BootstrapuiComponent },
    { path: 'buttons', component: ButtonsComponent },
    { path: 'colors', component: ColorsComponent },
    { path: 'grid', component: GridComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'lists', component: ListsComponent },
    { path: 'navtree', component: NavtreeComponent },
    { path: 'nestable', component: NestableComponent },
    { path: 'spinners', component: SpinnersComponent },
    { path: 'sweetalert', component: SweetalertComponent },
    { path: 'typography', component: TypographyComponent },
    { path: 'utilities', component: UtilitiesComponent },
    { path: 'whiteframes', component: WhiteframesComponent },
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        TreeModule
    ],
    declarations: [
        BootstrapuiComponent,
        ButtonsComponent,
        ColorsComponent,
        GridComponent,
        IconsComponent,
        ListsComponent,
        NavtreeComponent,
        NestableComponent,
        SpinnersComponent,
        SweetalertComponent,
        TypographyComponent,
        UtilitiesComponent,
        WhiteframesComponent
    ],
    exports: [
        RouterModule
    ]
})
export class ElementsModule { }
