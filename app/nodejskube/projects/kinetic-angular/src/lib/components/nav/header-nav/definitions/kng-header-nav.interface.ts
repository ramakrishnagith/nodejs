export interface KngHeaderNav {
    state: KngHeaderNavState;
}
export interface KngHeaderNavState {
    mobilePanelIsOpen: boolean;
    menu: Array<KngHeaderNavMenuOption>;
}
export interface KngHeaderNavMenuOption {
    id: string;
    isSelected: boolean;
    label: string;
    icon: KngHeaderNavMenuOptionIcon | null;
    subMenu: Array<KngHeaderNavMenuOption>;
    clickOn: (event: Event) => void;
}
export interface KngHeaderNavMenuOptionIcon {
    label: string;
    id: string;
}