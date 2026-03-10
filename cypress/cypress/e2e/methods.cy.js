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

describe('example with methods', () => {
  it("without methods success", () => {
    expect(true).to.equal(true);
  });

  it("without methods failed", () => {
    expect(true).to.equal(false);
  });

  it("displayName method success", () => {
    const tms = getTestRuntime();

    tms.addDisplayName("displayName method success DisplayName");

    expect(true).to.equal(true);
  });

  it("displayName method failed", () => {
    const tms = getTestRuntime();

    tms.addDisplayName("displayName method failed DisplayName");

    expect(true).to.equal(false);
  });

  it("title method success", () => {
    const tms = getTestRuntime();

    tms.addTitle("title method success");

    expect(true).to.equal(true);
  });

  it("title method failed", () => {
    const tms = getTestRuntime();
    
    tms.addTitle("title method failed");

    expect(true).to.equal(false);
  });

  it("decription method success", () => {
    const tms = getTestRuntime();

    tms.addDescription("decription method success");

    expect(true).to.equal(true);
  });

  it("decription method failed", () => {
    const tms = getTestRuntime();
    
    tms.addDescription("decription method failed");

    expect(true).to.equal(false);
  });

  it("labels method success", () => {
    const tms = getTestRuntime();

    tms.addLabels('label1', 'label2');

    expect(true).to.equal(true);
  });

  it("labels method failed", () => {
    const tms = getTestRuntime();
    
    tms.addLabels('label3', 'label4');

    expect(true).to.equal(false);
  });

  it("tags method success", () => {
    const tms = getTestRuntime();

    tms.addTags('tag1', 'tag2');

    expect(true).to.equal(true);
  });

  it("tags method failed", () => {
    const tms = getTestRuntime();
    
    tms.addTags('tag3', 'tag4');

    expect(true).to.equal(false);
  });

  it("links method success", () => {
    const tms = getTestRuntime();

    tms.addLinks(
      {
        url: "https://tracker.company.com/ABC-3",
        title: "Example03",
        description: "Example03 description",
        type: "Issue",
      },
      {
        url: "https://tracker.company.com/ABC-4",
        title: "Example04",
        description: "Example04 description",
        type: "Issue",
      }
    );

    expect(true).to.equal(true);
  });

  it("links method failed", () => {
    const tms = getTestRuntime();
    
    tms.addLinks(
      {
      url: "https://tracker/ABC-3",
      title: "Example03",
      description: "Example03 description",
      type: "Issue",
      },
      {
      url: "https://tracker/ABC-4",
      title: "Example04",
      description: "Example04 description",
      type: "Issue",
      },
    );

    expect(true).to.equal(false);
  });

  it("workItemIds method success", () => {
    const tms = getTestRuntime();

    tms.addWorkItemIds('5105', '321');

    expect(true).to.equal(true);
  });

  it("workItemIds method failed", () => {
    const tms = getTestRuntime();
    
    tms.addWorkItemIds('123', '333');

    expect(true).to.equal(false);
  });

  it("attachments method success", () => {
    const tms = getTestRuntime();

    tms.addAttachments(
      "debug.json",
      JSON.stringify({ foo: "bar" }),
      { contentType: "application/json" }
    );
    tms.addAttachmentsFromPath(
      "file02.txt",
      join(__dirname, "attachments/file02.txt"),
      { contentType: "text/plain" }
    );

    expect(true).to.equal(true);
  });

  it("attachments method failed", () => {
    const tms = getTestRuntime();

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

  it("message method success", () => {
    const tms = getTestRuntime();

    tms.addMessage("message method success Message");

    expect(true).to.equal(true);
  });

  it("message method failed", () => {
    const tms = getTestRuntime();
    
    tms.addMessage("message method failed Message");

    expect(true).to.equal(false);
  });

  it("nameSpace method success", () => {
    const tms = getTestRuntime();

    tms.addNameSpace("nameSpace method success");

    expect(true).to.equal(true);
  });

  it("nameSpace method failed", () => {
    const tms = getTestRuntime();
    
    tms.addNameSpace("nameSpace method failed");

    expect(true).to.equal(false);
  });

  it("className method success", () => {
    const tms = getTestRuntime();

    tms.addClassName("className method success");

    expect(true).to.equal(true);
  });

  it("className method failed", () => {
    const tms = getTestRuntime();
    
    tms.addClassName("className method failed");

    expect(true).to.equal(false);
  });

  it("with All methods success", () => {
    const tms = getTestRuntime();

    tms.addDisplayName("with All methods success DisplayName");
    tms.addTitle("with All methods success Title");
    tms.addDescription("with All methods success Description");
    tms.addTags("tag1", "tag2");
    tms.addLinks(
      {
      url: "https://tracker/ABC-1",
      title: "Example01",
      description: "Example01 description",
      type: "Issue",
      },
      {
      url: "https://tracker/ABC-2",
      title: "Example02",
      description: "Example02 description",
      type: "Issue",
      },
    );
    tms.addWorkItemIds("5105", "123");
    tms.addAttachments(
      "debug.json",
      JSON.stringify({ foo: "bar" }),
      { contentType: "application/json" }
    );
    tms.addAttachmentsFromPath(
      "file02.txt",
      join(__dirname, "attachments/file02.txt"),
      { contentType: "text/plain" }
    );
    tms.addMessage("with All methods success Message");
    tms.addNameSpace("with All methods success nameSpace");
    tms.addClassName("with All methods success className");

    expect(true).to.equal(true);
  });

  it("with All methods failed", () => {
    const tms = getTestRuntime();

    tms.addDisplayName("with All methods failed DisplayName");
    tms.addTitle("with All methods failed Title");
    tms.addDescription("with All methods failed Description");
    tms.addTags("tag3", "tag4");
    tms.addLinks(
      {
      url: "https://tracker/ABC-3",
      title: "Example03",
      description: "Example03 description",
      type: "Issue",
      },
      {
      url: "https://tracker/ABC-4",
      title: "Example04",
      description: "Example04 description",
      type: "Issue",
      },
    );
    tms.addWorkItemIds("321", "333");
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
    tms.addMessage("with All methods failed Message");
    tms.addNameSpace("with All methods failed nameSpace");
    tms.addClassName("with All methods failed className");

    expect(true).to.equal(false);
  });

  const tests = [2, 3, "string", false];

  tests.forEach((value) => {
    it(`parameterized test: 3 is ${value}`, () => {
      const tms = getTestRuntime();

      tms.addParameter("name", value);

      expect(3).to.equal(value);
    });
  });
});
