import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';

const screenfull = require('screenfull');
const browser = require('jquery.browser');
declare var $: any;

import { SettingsService } from './settings.service';
import { TranslatorService } from '../../core/translator/translator.service';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SettingsComponent implements OnInit {

    @ViewChild('fsbutton') fsbutton;
    @ViewChild('settingsModal') public settingsModal: ModalDirective;

    constructor(public settings: SettingsService, public translator: TranslatorService) { }

    ngOnInit() { }

    updateTheme(theme) {
        $('body')
            .removeClass((index, css) => (css.match(/(^|\s)theme-\S+/g) || []).join(' '))
            .addClass(this.settings.getSetting('theme'));
    }

    toggleFullScreen() {

        if (screenfull.enabled) {
            screenfull.toggle();
        }

    }

}
