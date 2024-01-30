"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const links = [
    { url: "https://test01.example", title: "Example01", description: "Example01 description", type: "Issue" },
    { url: "https://test02.example", title: "Example02", description: "Example02 description", type: "BlockedBy" },
    { url: "https://test03.example", title: "Example03", description: "Example03 description", type: "Requirement" },
    { url: "https://test04.example", title: "Example04", description: "Example04 description", type: "Defect" },
    { url: "https://test05.example", title: "Example05", description: "Example05 description", type: "Repository" },
];
describe("Check adding external id", function () {
    it("With external id annotation success", function () {
        this.externalId = "External id 01";
        assert_1.default.equal(true, true);
    });
    it("With external id annotation failed", function () {
        this.externalId = "External id 02";
        assert_1.default.equal(true, false);
    });
});
describe("Check adding display name", function () {
    it("With display name annotation success", function () {
        this.displayName = "Display name success";
        assert_1.default.equal(true, true);
    });
    it("With display name annotation failed", function () {
        this.displayName = "Display name failed";
        assert_1.default.equal(true, false);
    });
});
describe("Check adding title", function () {
    it("With title annotation success", function () {
        this.title = "title adding success";
        assert_1.default.equal(true, true);
    });
    it("With title annotation failed", function () {
        this.title = "title adding failed";
        assert_1.default.equal(true, false);
    });
});
describe("Check adding description", function () {
    it("With description annotation success", function () {
        this.description = "description adding success";
        assert_1.default.equal(true, true);
    });
    it("With description annotation failed", function () {
        this.description = "description adding failed";
        assert_1.default.equal(true, false);
    });
});
describe("Check adding links", function () {
    it("With links annotation success", function () {
        this.links = links;
        assert_1.default.equal(true, true);
    });
    it("With links annotation failed", function () {
        this.links = links;
        assert_1.default.equal(true, false);
    });
});
describe("Check adding labels", function () {
    it("With labels annotation success", function () {
        this.labels = ["Label1", "Label2"];
        assert_1.default.equal(true, true);
    });
    it("With labels annotation failed", function () {
        this.labels = ["Label1", "Label2"];
        assert_1.default.equal(true, false);
    });
});
describe("Check adding workItems", function () {
    it("With workItems annotation success 3", function () {
        this.workItemsIds = ["29276", "321"];
        assert_1.default.equal(true, true);
    });
    it("With workItems annotation failed 3", function () {
        this.workItemsIds = ["4268", "321"];
        assert_1.default.equal(true, false);
    });
});
function sum(args) {
    return args.reduce((prev, curr) => prev + curr, 0);
}
describe("Check adding object parameters", function () {
    const tests = [
        { args: [1, 2], expected: 3 },
        { args: [1, 2, 3], expected: 7 },
        { args: [1, 2, 3, 4], expected: "10" },
    ];
    tests.forEach(({ args, expected }) => {
        it(`correctly sum ${args} to ${expected}`, function () {
            this.parameters = {
                args: args.toString(),
                expected: expected.toString(),
            };
            assert_1.default.strictEqual(sum(args), expected);
        });
    });
});
describe("Check adding array parameters", function () {
    const tests = [2, 3, "string", false];
    tests.forEach((value) => {
        it(`3 is ${value}`, function () {
            this.parameters = {
                value: value.toString(),
            };
            assert_1.default.strictEqual(3, value);
        });
    });
});
describe("Check adding all annotations", function () {
    it("With all annotation success", function () {
        this.externalId = "External03";
        this.displayName = "Display name all annotations success";
        this.title = "title all annotations adding success";
        this.description = "description all annotations adding success";
        this.links = links;
        this.labels = ["Label3", "Label4"];
        this.workItemsIds = ["29277", "321"];
        assert_1.default.equal(true, true);
    });
    it("With all annotation failed", function () {
        this.externalId = "External04";
        this.displayName = "Display name all annotations failed";
        this.title = "title all annotations adding failed";
        this.description = "description all annotations adding failed";
        this.links = links;
        this.labels = ["Label5", "Label6"];
        this.workItemsIds = ["4268", "321"];
        assert_1.default.equal(true, false);
    });
});
