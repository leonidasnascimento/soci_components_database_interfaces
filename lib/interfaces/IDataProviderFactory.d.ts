import { IDataProvider } from "./IDataProvider";
export interface IDataProviderFactory {
    GetDataProvider(provider: string): IDataProvider;
}
