import { ShellFactory } from "./components/shell/shell.factory";
import { AppState } from "./definitions/app.interface";

export class AppFactory {
    public static buildAppState(): AppState {
        return {
            shell: ShellFactory.buildState()
        }
    }
}
