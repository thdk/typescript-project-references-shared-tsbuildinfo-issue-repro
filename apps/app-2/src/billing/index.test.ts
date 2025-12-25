import { expect, test } from "vitest";
import { greet } from "./index.js";

test("sample test", () => {
  expect(greet("bar")).toBe("Hello, bar!");
});
