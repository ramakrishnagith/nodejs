import { KngSwatchState } from "./definitions";

export class KngSwatchFactory {
    public static build(): KngSwatchState {
        return {
            code: 'black',
            tone: null
        };
    }
}