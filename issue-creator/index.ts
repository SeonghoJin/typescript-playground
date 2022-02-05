import yargs from "yargs";
import { IssueCreateCommand } from "./IssueCreateCommand";

yargs
    .scriptName('issue-creator')
    .command(new IssueCreateCommand())
    .argv