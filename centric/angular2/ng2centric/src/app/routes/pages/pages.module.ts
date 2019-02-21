import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { TimelineComponent } from './timeline/timeline.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FaqComponent } from './faq/faq.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';
import { ArticleComponent } from './article/article.component';
import { ProfileComponent } from './profile/profile.component';
import { GalleryComponent } from './gallery/gallery.component';
import { WallComponent } from './wall/wall.component';
import { SearchComponent } from './search/search.component';
import { MessagesComponent } from './messages/messages.component';
import { MessagenewComponent } from './messages/messagenew/messagenew.component';
import { MessageviewComponent } from './messages/messageview/messageview.component';

const routes: Routes = [
    { path: 'timeline', component: TimelineComponent },
    { path: 'invoice', component: InvoiceComponent },
    { path: 'pricing', component: PricingComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'article', component: ArticleComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'wall', component: WallComponent },
    { path: 'search', component: SearchComponent },
    { path: 'messages', component: MessagesComponent }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        TimelineComponent,
        InvoiceComponent,
        PricingComponent,
        ContactsComponent,
        FaqComponent,
        ProjectsComponent,
        BlogComponent,
        ArticleComponent,
        ProfileComponent,
        GalleryComponent,
        WallComponent,
        SearchComponent,
        MessagesComponent,
        MessagenewComponent,
        MessageviewComponent
    ],
    exports: [
        RouterModule
    ]
})
export class PagesModule { }
