export class Input {
  public Query: string;
  public ObjectKey: object;
  public RepositoryName: string;
  public ListOfObjects: [];

  constructor(_query: string, _objKey: object, _repoName: string, _lstObj: []) {
    this.Query = _query;
    this.ObjectKey = _objKey;
    this.ListOfObjects = _lstObj;
    this.RepositoryName = _repoName;
  }
}
