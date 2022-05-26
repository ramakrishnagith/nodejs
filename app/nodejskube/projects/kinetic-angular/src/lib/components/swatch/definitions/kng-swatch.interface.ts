
export interface KngSwatch {
    state: KngSwatchState;
}
export interface KngSwatchState {
    code: KngSwatchCode;
    tone: KngSwatchTone
}
export type KngSwatchCode = 'darkest' | 'darker' | 'primary' | 'lighter' | 'lightest' | 'utility-darker' | 'utility-lighter' |'utility-lightest' | 'black' | 'white';
export type KngSwatchTone = 'main' | 'secondary' | 'tertiary' | null;
