import Plugin from 'src/plugin-system/plugin.class';
import DomAccess from 'src/helper/dom-access.helper';
import DeviceDetection from 'src/helper/device-detection.helper';

export default class CollapseFooter extends Plugin {
    init() {
        this._uncollapseFooterIcon = DomAccess.querySelector(document, '.uncollapse-footer-icon');
        this._collapseFooterIcon = DomAccess.querySelector(document, '.collapse-footer-icon');

        this.registerEvents()
    }

    registerEvents() {
        if (DeviceDetection.isTouchDevice()) {
            this._uncollapseFooterIcon.addEventListener('click', this._uncollapseFooter.bind(this));
            this._collapseFooterIcon.addEventListener('click', this._collapseFooter.bind(this));

            /* for (this._uncollapseFooterIcon of this._uncollapseFooterIcons) {
                this._uncollapseFooterIcon.addEventListener('click', this._uncollapseFooter.bind(this));
            }
            for (this._collapseFooterIcon of this._collapseFooterIcons) {
                this._collapseFooterIcon.addEventListener('click', this._collapseFooter.bind(this));
            } */
        }
    }

    _uncollapseFooter() {
        this._footerBlockContent = DomAccess.querySelector(document, '.footer-block-content');

        this._footerBlockContent.classList.remove('d-none');

        this._uncollapseFooterIcon.classList.add('d-none');
        this._uncollapseFooterIcon.classList.remove('d-flex');

        this._collapseFooterIcon.classList.add('d-flex');
        this._collapseFooterIcon.classList.remove('d-none');
    }

    _collapseFooter() {
        this._footerBlockContent.classList.add('d-none');

        this._collapseFooterIcon.classList.add('d-none');
        this._collapseFooterIcon.classList.remove('d-flex');

        this._uncollapseFooterIcon.classList.add('d-flex');
        this._uncollapseFooterIcon.classList.remove('d-none');
    }
}
