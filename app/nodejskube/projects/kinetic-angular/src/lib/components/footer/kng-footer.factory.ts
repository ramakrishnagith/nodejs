import { KngFooterState } from "./definitions/footer.interface";

export class KngFooterFactory {
    public static buildState(): KngFooterState {
        return {
            hidden: true,
            fixed: false
        }
    }
}
