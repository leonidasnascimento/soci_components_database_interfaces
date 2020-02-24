import { IDataProvider } from "../interfaces/IDataProvider";
import { EnumDataProviders } from "../enum/EnumDataProviders";

export interface IDataProviderFactory {
  GetDataProvider(provider: EnumDataProviders): IDataProvider;
}
