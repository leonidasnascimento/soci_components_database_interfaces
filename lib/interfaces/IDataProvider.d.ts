import { ICustomCommand } from "./ICustomCommand";
import { EnumConnectionState } from "../enum/EnumConnectionState";
export interface IDataProvider {
    ConnectionSettings: JSON;
    Read(customCommand: ICustomCommand): [];
    Command(customCommand: ICustomCommand): boolean;
    Connect(): boolean;
    Disconnect(): boolean;
    GetConnectionState(): EnumConnectionState;
}
