import { KngHeaderNavState } from "./definitions/kng-header-nav.interface";

export class KngHeaderNavFactory {
    public static buildState(): KngHeaderNavState {
        return {
            mobilePanelIsOpen: false,
            menu: []
        }
    }
}