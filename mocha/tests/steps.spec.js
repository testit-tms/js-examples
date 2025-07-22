"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
before("Add namespace", function () {
    this.namespace = "Test adapter mocha";
});
it("Add steps with title", function () {
    this.addSteps("Step01");
    this.addSteps("Step02");
    assert_1.default.equal(true, true);
});
it("Add steps with title and description", function () {
    this.addSteps("Step01", (step) => {
        step.description = "Description01";
    });
    this.addSteps("Step02", (step) => {
        step.description = "Description02";
    });
    assert_1.default.equal(true, true);
});
it("Add steps with attachments", function () {
    this.addSteps("Step01", (step) => {
        step.description = "Description";
        this.addAttachments("Step 1", "step1.txt");
    });
    assert_1.default.equal(true, true);
});
it("Add step with parameters", function () {
    this.addSteps("Add parameters", (step) => {
        step.description = "Description";
        step.parameters = {
            login: "login",
            password: "password",
        };
    });
});
it("Add step with all annotation", function () {
    this.addSteps("Step title", (step) => {
        step.description = "Step Description";
        step.parameters = {
            login: "login",
            password: "password",
        };
        this.addAttachments("Attachment", "step.txt");
    });
});
