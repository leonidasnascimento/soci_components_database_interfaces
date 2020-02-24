import { IDataProvider } from "./IDataProvider";
import { EnumDataProviders } from "../enum/EnumDataProviders";
export interface IDataProviderFactory {
    GetDataProvider(provider: EnumDataProviders): IDataProvider;
}
