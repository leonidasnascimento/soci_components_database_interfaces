export class Output<TExecutionResult> {
  KeyFound: boolean;
  RepositoryFound: boolean;
  WasQuerySuccessfullyExecuted: boolean;
  ExecutionMessage: string;
  ExecutionResult?: TExecutionResult;

  constructor(private _execResult: new () => TExecutionResult | undefined) {
    this.KeyFound = false;
    this.RepositoryFound = false;
    this.WasQuerySuccessfullyExecuted = false;
    this.ExecutionMessage = "";
    this.ExecutionResult = new _execResult();
  }
}
