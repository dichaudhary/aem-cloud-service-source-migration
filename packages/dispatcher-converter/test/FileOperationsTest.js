let folderOperations = require("../src/util/FolderOperations");
const { ConversionStep } = require("@adobe/aem-cs-source-migration-commons");
const fs = require("fs");

let testFolder = "test/newtest";

describe("FileOperations", function () {
    beforeEach(() => {
        if (!fs.existsSync(testFolder)) {
            fs.mkdirSync(testFolder);
        }
    });

    afterEach(function () {
        if (fs.existsSync(testFolder)) {
            let folderOperation = new folderOperations();
            folderOperation.deleteFolder(testFolder, new ConversionStep());
        }
    });
});
