import { IDataProvider } from "../interfaces/IDataProvider";
import { Input } from "../classes/Input";
import { Output } from "../classes/Output";
import { EnumConnectionState } from "../enum/EnumConnectionState";

export abstract class DataProvider<TClient> implements IDataProvider {
  // Properties
  ConnectionSettings: JSON;
  Client?: TClient;

  // Template Methods
  protected abstract ExecuteSelect<TOutput>(
    command: Input
  ): Output<TOutput> | undefined;
  protected abstract ExecuteCustomCommand<TOutput>(
    command: Input
  ): Output<TOutput> | undefined;
  protected abstract ExecuteAdd(command: Input): Output<boolean> | undefined;
  public abstract GetConnectionState(): EnumConnectionState;
  public abstract Connect(): boolean;
  public abstract Disconnect(): boolean;

  // Interface 'IDataProvider' implementation
  constructor(_configFile: string, private _cliente: new () => TClient) {
    this.ConnectionSettings = JSON.parse(_configFile);
    this.Client = new this._cliente();
  }

  public Select<TOutput>(command: Input): Output<TOutput> | undefined {
    if (this.Connect()) {
      let returnList: Output<TOutput> | undefined;
      returnList = this.ExecuteSelect(command);

      if (!this.Disconnect()) {
        throw new Error("ERROR trying to disconnect the data repository");
      }

      return returnList;
    }

    return;
  }

  public Add(command: Input): Output<boolean> | undefined {
    if (this.Connect()) {
      let returnObj: Output<boolean> | undefined;
      returnObj = this.ExecuteAdd(command);

      if (!this.Disconnect()) {
        throw new Error("ERROR trying to disconnect the data repository");
      }

      return returnObj;
    } else {
      return;
    }
  }

  public CustomCommand<TOutput>(command: Input): Output<TOutput> | undefined {
    if (this.Connect()) {
      let output: Output<TOutput> | undefined;
      output = this.ExecuteCustomCommand(command);

      if (!this.Disconnect()) {
        throw new Error("ERROR trying to disconnect the data repository");
      }

      return output;
    } else {
      return;
    }
  }
}
