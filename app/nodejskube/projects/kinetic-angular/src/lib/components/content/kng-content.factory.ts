import { KngFooterFactory } from "../footer/kng-footer.factory";
import { KngContentState } from "./definitions";

export class KngContentFactory {
    public static buildState(): KngContentState  {
        return {
            windowed: false,
            footer: KngFooterFactory.buildState()
        }
    }
}