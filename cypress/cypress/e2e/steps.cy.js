/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

import { join } from "path";
import { getTestRuntime } from "testit-adapter-cypress/runtime";

describe('example with steps', () => {
  it("with steps success", () => {
    const tms = getTestRuntime();

    tms.step("step title", () => {
      tms.step("inner step title", () => {
        expect(true).to.equal(true);
      });
    });
  });

  it("with steps failed", () => {
    const tms = getTestRuntime();

    tms.step("step title", () => {
      tms.step("inner step title", () => {
        expect(true).to.equal(false);
      });
    });
  });

  it("with steps with attachment success", () => {
    const tms = getTestRuntime();

    tms.step("step title", () => {
      tms.step("inner step title", () => {
      tms.addAttachments(
        "debug.json",
        JSON.stringify({ foo: "bar" }),
        { contentType: "application/json" }
      );
      tms.addAttachmentsFromPath(
        "file03.txt",
        join(__dirname, "attachments/file02.txt"),
        { contentType: "text/plain" }
      );

        expect(true).to.equal(true);
      });
    });
  });

  it("with steps with attachment failed", () => {
    const tms = getTestRuntime();
    
    tms.step("step title", () => {
      tms.step("inner step title", () => {
      tms.addAttachments(
        "debug.json",
        JSON.stringify({ foo: "bar" }),
        { contentType: "application/json" }
      );
      tms.addAttachmentsFromPath(
        "file03.txt",
        join(__dirname, "attachments/file03.txt"),
        { contentType: "text/plain" }
      );

        expect(true).to.equal(false);
      });
    });
  });
});
