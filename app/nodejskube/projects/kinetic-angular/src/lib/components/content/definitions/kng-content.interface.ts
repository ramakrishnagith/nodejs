import { KngFooterState } from "../../footer/definitions/footer.interface";

export interface KngContent {
    state: KngContentState;
}
export interface KngContentState {
    windowed: boolean;
    footer: KngFooterState
}