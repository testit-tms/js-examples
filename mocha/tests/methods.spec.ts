import assert from "assert";
import { Context } from "testit-adapter-mocha";
import { join } from "path";

describe("Check adding attachments", function () {
  it("Add attachments success", function (this: Context) {
    this.addAttachments("test add attachments from mocha adapter");
    this.addAttachments("test add attachments from mocha adapter", "tms");

    const path = join(__dirname, "attachments/file02.txt");

    this.addAttachments([path]);

    const paths = [
      join(__dirname, "attachments/file03.txt"),
      join(__dirname, "attachments/file04.txt"),
      join(__dirname, "attachments/image.jpg")
    ];

    this.addAttachments(paths);

    assert.equal(true, true);
  });

  it("Add attachments failed", function (this: Context) {
    this.addAttachments("test add attachments from mocha adapter");
    this.addAttachments("test add attachments from mocha adapter", "tms");

    const path = join(__dirname, "attachments/file02.txt");

    this.addAttachments([path]);

    const paths = [
      join(__dirname, "attachments/file03.txt"),
      join(__dirname, "attachments/file04.txt"),
      join(__dirname, "attachments/image.jpg")
    ];

    this.addAttachments(paths);

    assert.equal(true, false);
  });
});

describe("Check adding links", function () {
  it("Add links success", function (this: Context) {
    this.addLinks([
      { url: "https://test01.example", title: "Example01", description: "Example01 description", type: "Issue" },
      { url: "https://test02.example", title: "Example02", description: "Example02 description", type: "Issue" },
    ]);

    assert.equal(true, true);
  });

  it("Add links failed", function (this: Context) {
    this.addLinks([
      { url: "https://test01.example", title: "Example01", description: "Example01 description", type: "Issue" },
      { url: "https://test02.example", title: "Example02", description: "Example02 description", type: "Issue" },
    ]);

    assert.equal(true, false);
  });
});

describe("Check adding message", function () {
  it("Add message success", function (this: Context) {
    this.addMessage("Message Success");
    assert.equal(true, true);
  });

  it("Add message failed", function (this: Context) {
    this.addMessage("Message Failed");
    assert.equal(true, false);
  });
});
