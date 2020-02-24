import { ICustomCommand } from "./ICustomCommand";
import { EnumConnectionState } from "../enum/EnumConnectionState"

export interface IDataProvider {
    // Properties
    ConnectionSettings: JSON;

    // Methods
    Read(customCommand: ICustomCommand): [];
    Command(customCommand: ICustomCommand): boolean;
    Connect(): boolean;
    Disconnect(): boolean;
    GetConnectionState(): EnumConnectionState;
}