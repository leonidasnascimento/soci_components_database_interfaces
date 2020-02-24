import { Input } from "../classes/Input";
import { Output } from "../classes/Output";
import { EnumConnectionState } from "../enum/EnumConnectionState";

export interface IDataProvider {
  // Methods
  Select<TOutput>(command: Input): Output<TOutput> | undefined;
  Add(command: Input): Output<boolean> | undefined;
  CustomCommand<TOutput>(command: Input): Output<TOutput> | undefined;
  Connect(): boolean;
  Disconnect(): boolean;
  GetConnectionState(): EnumConnectionState;
}
