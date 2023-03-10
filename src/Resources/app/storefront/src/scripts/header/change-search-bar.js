import Plugin from 'src/plugin-system/plugin.class';
import DomAccess from 'src/helper/dom-access.helper';
import DeviceDetection from 'src/helper/device-detection.helper';
export default class ChangeSearchBar extends Plugin {

    init() {
        this._searchBarBtnIcon = DomAccess.querySelector(document, '.search-bar-btn-icon');
        this._touchSearchBarBtnIcon = DomAccess.querySelector(document, '.touch-search-bar-btn-icon');
        this._touchSearchBarBtn = DomAccess.querySelector(document, '.touch-search-bar-btn');

        this.setTouchSearchBarIcons();
        this._touchSearchBarBtnIcon.addEventListener('click', this.clickedSearchBarBtn.bind(this));
    }

    clickedSearchBarBtn() {
        if (!this._touchSearchBarBtn.classList.contains('clicked-search-bar-btn')) {
            this._touchSearchBarBtn.classList.add('clicked-search-bar-btn');
        } else {
            this._touchSearchBarBtn.classList.remove('clicked-search-bar-btn');
        }
    }

    setTouchSearchBarIcons() {
        if (DeviceDetection.isTouchDevice()) {
            this._searchBarBtnIcon.setAttribute('src', 'https://i.ibb.co/M5R1PxP/personaladvice.png');
            this._touchSearchBarBtnIcon.setAttribute('src', 'https://i.ibb.co/M5R1PxP/personaladvice.png');
        }
    }
}
