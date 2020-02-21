import  { IConnectionSettings } from  "./IConnectionSettings";
import { ICustomCommand } from "./ICustomCommand";

export interface IDataProvider {
    // Properties
    ConnectionSettings: IConnectionSettings;

    // Methods
    Read(customCommand: ICustomCommand): [];
    ExecuteCommand(customCommand: ICustomCommand): boolean;
}