// src/lib/utils.test.ts
import { expect, test } from "vitest";
import { cn } from "./utils";

test("cn should merge tailwind classes correctly", () => {
  // Test basic merging
  expect(cn("bg-red-500", "text-white")).toBe("bg-red-500 text-white");

  // Test overriding classes
  expect(cn("bg-red-500", "bg-blue-500")).toBe("bg-blue-500");

  // Test with conditional classes
  expect(cn("p-4", false && "m-4", "rounded-md")).toBe("p-4 rounded-md");

  // Test with conflicting classes from the same group
  expect(cn("p-2", "p-4")).toBe("p-4");
  expect(cn("m-2", "mx-4")).toBe("m-2 mx-4"); // m-2 is not fully overridden by mx-4
});
