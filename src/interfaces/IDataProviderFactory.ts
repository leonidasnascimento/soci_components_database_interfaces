import { DataProvider } from "../base/DataProvider";
import { EnumDataProviders } from "../enum/EnumDataProviders";

export interface IDataProviderFactory {
  GetDataProvider(provider: EnumDataProviders): DataProvider;
}
