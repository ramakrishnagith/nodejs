import { KngShellState } from 'kinetic-angular'

export interface App {
    state: AppState;
}
export interface AppState {
    shell: KngShellState;
}