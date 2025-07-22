import { Context } from "testit-adapter-mocha";
import assert from "assert";

before("Add namespace", function (this: Context) {
  this.namespace = "Test adapter mocha";
});

it("Add steps with title", function (this: Context) {
  this.addSteps("Step01");
  this.addSteps("Step02");

  assert.equal(true, true);
});

it("Add steps with title and description", function (this: Context) {
  this.addSteps("Step01", (step) => {
    step.description = "Description01";
  });
  this.addSteps("Step02", (step) => {
    step.description = "Description02";
  });

  assert.equal(true, true);
});

it("Add steps with attachments", function (this: Context) {
  this.addSteps("Step01", (step) => {
    step.description = "Description";
    this.addAttachments("Step 1", "step1.txt");
  });

  assert.equal(true, true);
});

it("Add step with parameters", function (this: Context) {
  this.addSteps("Add parameters", (step) => {
    step.description = "Description";
    step.parameters = {
      login: "login",
      password: "password",
    };
  });
});

it("Add step with all annotation", function (this: Context) {
  this.addSteps("Step title", (step) => {
    step.description = "Step Description";
    step.parameters = {
      login: "login",
      password: "password",
    };
    this.addAttachments("Attachment", "step.txt");
  });
});
