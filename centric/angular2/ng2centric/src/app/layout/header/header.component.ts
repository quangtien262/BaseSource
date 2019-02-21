import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';

import { SettingsService } from '../../shared/settings/settings.service';
import { PagetitleService } from '../../core/pagetitle/pagetitle.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss', './header.menu-links.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

    sidebarVisible: true;
    sidebarOffcanvasVisible: boolean;

    constructor(public settings: SettingsService, public pt: PagetitleService) { }

    ngOnInit() {
    }

    toggleSidebarOffcanvasVisible() {
        this.settings.app.sidebar.offcanvasVisible = !this.settings.app.sidebar.offcanvasVisible;
    }

    toggleSidebar(state = null) {
        //  state === true -> open
        //  state === false -> close
        //  state === null -> toggle
        this.settings.app.sidebar.visible = state !== null ? state : !this.settings.app.sidebar.visible;
    }

    openModalSearch() {

    }

    openModalBar() {

    }

}
