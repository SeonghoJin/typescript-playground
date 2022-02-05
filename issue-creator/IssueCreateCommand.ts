import { ArgumentsCamelCase, Argv, CommandBuilder, CommandModule } from "yargs";
import fs from "fs";
import { createFilePath, sampleCode } from "./resource";

type IssueCreateCommandArgType = {
    num: number | undefined
}

export class IssueCreateCommand implements CommandModule<{}, IssueCreateCommandArgType>{

    command?: string | readonly string[] | undefined = "create"

    handler: (args: ArgumentsCamelCase<IssueCreateCommandArgType>) => void | Promise<void> = (args) => {
        if (args.num === undefined) {
            throw new Error("num is undefined. please set num");
        }

        const currentFolder = `${createFilePath}/#${args.num}`;

        if (fs.existsSync(currentFolder)) {
            throw new Error(`The current file exists`)
        }

        fs.mkdirSync(currentFolder, { recursive: true });
        fs.writeFileSync(`${currentFolder}/test.ts`, sampleCode());
        fs.writeFileSync(`${currentFolder}/README.md`, `${new Date()}\nhttps://github.com/microsoft/TypeScript/issues/${args.num}`);
        fs.writeFileSync(`${currentFolder}/index.ts`, sampleCode());
    }

    builder?: CommandBuilder<{}, IssueCreateCommandArgType> | undefined = (args: Argv) => {
        return args.option('num', {
            alias: 'n',
            default: undefined,
            describe: 'Enter the issue number to create'
        });
    }
}