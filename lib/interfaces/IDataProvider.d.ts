import { IConnectionSettings } from "./IConnectionSettings";
import { ICustomCommand } from "./ICustomCommand";
export interface IDataProvider {
    ConnectionSettings: IConnectionSettings;
    Read(customCommand: ICustomCommand): [];
    ExecuteCommand(customCommand: ICustomCommand): boolean;
}
