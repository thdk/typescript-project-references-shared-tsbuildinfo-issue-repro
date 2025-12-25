import { expect, test } from "vitest";
import { greet } from "./greet.js";

test("sample test", () => {
  expect(greet("bar")).toBe("Hello, bar!");
});
