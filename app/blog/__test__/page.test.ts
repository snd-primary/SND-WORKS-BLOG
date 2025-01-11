import { join } from "node:path";
import { describe, expect, it } from "vitest";

describe("BlogPage", () => {
	it("MDX格納フォルダがしゅとくできているか", () => {
		const expectedPath = join(process.cwd(), "/app/content");
		const acctualPath = join(process.cwd(), "/app/content");

		expect(acctualPath).toBe(expectedPath);

		expect(acctualPath).toContain("/app/content");

		expect(acctualPath.startsWith("/")).toBe(true);
	});
});
