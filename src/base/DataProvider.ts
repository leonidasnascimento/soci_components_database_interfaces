import { IDataProvider } from "../interfaces/IDataProvider"
import { ICustomCommand } from "../interfaces/ICustomCommand"
import { EnumConnectionState } from "../enum/EnumConnectionState"

export abstract class DataProvider implements IDataProvider {
    // Properties
    ConnectionSettings: JSON;

    // Template Methods 
    public abstract ExecuteRead(customCommand: ICustomCommand): [];
    public abstract ExecuteCommand(customCommand: ICustomCommand): boolean;
    public abstract GetConnectionState(): EnumConnectionState;
    public abstract Connect(): boolean;
    public abstract Disconnect(): boolean;

    // Interface 'IDataProvider' implementation 
    constructor(_configFile: JSON) {
        this.ConnectionSettings = _configFile;
    }

    public Read(customCommand: ICustomCommand): [] {
        if (this.Connect()) {

            let returnList: [];
            returnList = this.ExecuteRead(customCommand);

            if (!this.Disconnect()) {
                throw new Error("ERROR trying to disconnect the data repository")
            }

            return returnList;
        } else {
            return []
        }
    }

    public Command(customCommand: ICustomCommand): boolean {
        if (this.Connect()) {

            let commandExecuted: boolean;
            commandExecuted = this.ExecuteCommand(customCommand);

            if (!this.Disconnect()) {
                throw new Error("ERROR trying to disconnect the data repository")
            }

            return commandExecuted;
        } else {
            return false;
        }
    }
}