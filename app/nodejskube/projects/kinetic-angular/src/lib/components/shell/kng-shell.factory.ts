import { KngContentFactory } from "../content/kng-content.factory";
import { KngFooterFactory } from "../footer/kng-footer.factory";
import { KngModalBlockFactory } from "../modal/modal-block/kng-modal-block.factory";
import { KngHeaderNavFactory } from "../nav/header-nav/kng-header-nav.factory";
import { KngShellState } from "./definitions";

export class KngShellFactory {
    public static buildState(): KngShellState {
        return {
            header: KngHeaderNavFactory.buildState(),
            content: KngContentFactory.buildState(),
            footer: KngFooterFactory.buildState(),
            modal: KngModalBlockFactory.buildState()
        };
    }
}
