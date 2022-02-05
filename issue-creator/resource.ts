export const sampleCode = (children?: string) => `(() => {\n${children === undefined ? "" : children}\n})();`
export const createFilePath = "issues"