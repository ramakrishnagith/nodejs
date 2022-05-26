import { KngContentState } from "../../content";
import { KngFooterState } from "../../footer/definitions";
import { KngModalBlockState } from "../../modal";
import { KngHeaderNavState } from "../../nav/header-nav/definitions";

export interface KngShell {
    state: KngShellState | null;
}
export interface KngShellState {
    header: KngHeaderNavState
    content: KngContentState;
    footer: KngFooterState;
    modal: KngModalBlockState;
}