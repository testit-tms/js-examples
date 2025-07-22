"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const path_1 = require("path");
describe("Check adding attachments", function () {
    it("Add attachments success", function () {
        //this.addAttachments("test add attachments from mocha adapter");
        //this.addAttachments("test add attachments from mocha adapter", "tms");
        const path = (0, path_1.join)(__dirname, "attachments/file02.txt");
        this.addAttachments([path]);
        const paths = [
            (0, path_1.join)(__dirname, "attachments/file03.txt"),
            (0, path_1.join)(__dirname, "attachments/file04.txt"),
            (0, path_1.join)(__dirname, "attachments/image.jpg")
        ];
        this.addAttachments(paths);
        assert_1.default.equal(true, true);
    });
    it("Add attachments failed", function () {
        //this.addAttachments("test add attachments from mocha adapter");
        //this.addAttachments("test add attachments from mocha adapter", "tms");
        const path = (0, path_1.join)(__dirname, "attachments/file02.txt");
        this.addAttachments([path]);
        const paths = [
            (0, path_1.join)(__dirname, "attachments/file03.txt"),
            (0, path_1.join)(__dirname, "attachments/file04.txt"),
            (0, path_1.join)(__dirname, "attachments/image.jpg")
        ];
        this.addAttachments(paths);
        assert_1.default.equal(true, false);
    });
});
describe("Check adding links", function () {
    it("Add links success", function () {
        this.addLinks([
            { url: "https://test01.example", title: "Example01", description: "Example01 description", type: "Issue" },
            { url: "https://test02.example", title: "Example02", description: "Example02 description", type: "Issue" },
        ]);
        assert_1.default.equal(true, true);
    });
    it("Add links failed", function () {
        this.addLinks([
            { url: "https://test01.example", title: "Example01", description: "Example01 description", type: "Issue" },
            { url: "https://test02.example", title: "Example02", description: "Example02 description", type: "Issue" },
        ]);
        assert_1.default.equal(true, false);
    });
});
describe("Check adding message", function () {
    it("Add message success", function () {
        this.addMessage("Message Success");
        assert_1.default.equal(true, true);
    });
    it("Add message failed", function () {
        this.addMessage("Message Failed");
        assert_1.default.equal(true, false);
    });
});
