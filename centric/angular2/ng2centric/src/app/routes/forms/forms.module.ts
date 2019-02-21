import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FileUploadModule } from 'ng2-file-upload';
import { ColorPickerModule, ColorPickerService } from 'ngx-color-picker';
import { SelectModule } from 'ng2-select';

import { SharedModule } from '../../shared/shared.module';
import { ClassicComponent } from './classic/classic.component';
import { ValidationComponent } from './validation/validation.component';
import { AdvancedComponent } from './advanced/advanced.component';
import { MaterialComponent } from './material/material.component';
import { EditorsComponent } from './editors/editors.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
    { path: 'classic', component: ClassicComponent },
    { path: 'validation', component: ValidationComponent },
    { path: 'advanced', component: AdvancedComponent },
    { path: 'material', component: MaterialComponent },
    { path: 'editor', component: EditorsComponent },
    { path: 'upload', component: UploadComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
        FileUploadModule,
        SelectModule,
        ColorPickerModule
    ],
    providers: [
        ColorPickerService
    ],
    declarations: [
        ClassicComponent,
        ValidationComponent,
        AdvancedComponent,
        MaterialComponent,
        EditorsComponent,
        UploadComponent
    ],
    exports: [
        RouterModule
    ]
})
export class FormsModule { }