import ChangeSearchBar from "./scripts/header/change-search-bar";
import StickyHeader from "./scripts/header/sticky-header";
import CollapseFooter from "./scripts/footer/collapse-footer";

const pluginManager = window.PluginManager;

pluginManager.register("ChangeSearchBar", ChangeSearchBar, '[data-search-form]')
pluginManager.register("StickyHeader", StickyHeader, '[data-sticky-header]', {
    showOnScrollPosition: 2000,
})
pluginManager.register("CollapseFooter", CollapseFooter, '[data-collapse-footer]')
