import { KngModalBlockState } from "./definitions";

export class KngModalBlockFactory {
    public static buildState(): KngModalBlockState {
        return {
            hidden: true
        }
    }
}
