import { IDataProvider } from "../interfaces/IDataProvider";
import { ICustomCommand } from "../interfaces/ICustomCommand";
import { EnumConnectionState } from "../enum/EnumConnectionState";

export abstract class DataProvider implements IDataProvider {
  // Properties
  ConnectionSettings: JSON;

  // Template Methods
  protected abstract ExecuteRead(customCommand: ICustomCommand): [];
  protected abstract ExecuteCommand(customCommand: ICustomCommand): boolean;
  public abstract GetConnectionState(): EnumConnectionState;
  public abstract Connect(): boolean;
  public abstract Disconnect(): boolean;

  // Interface 'IDataProvider' implementation
  constructor(_configFile: string) {
    this.ConnectionSettings = JSON.parse(_configFile);
  }

  public Read(customCommand: ICustomCommand): [] {
    if (this.Connect()) {
      let returnList: [];
      returnList = this.ExecuteRead(customCommand);

      if (!this.Disconnect()) {
        throw new Error("ERROR trying to disconnect the data repository");
      }

      return returnList;
    } else {
      return [];
    }
  }

  public Command(customCommand: ICustomCommand): boolean {
    if (this.Connect()) {
      let commandExecuted: boolean;
      commandExecuted = this.ExecuteCommand(customCommand);

      if (!this.Disconnect()) {
        throw new Error("ERROR trying to disconnect the data repository");
      }

      return commandExecuted;
    } else {
      return false;
    }
  }
}
