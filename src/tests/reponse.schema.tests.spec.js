const { test, expect } = require("@playwright/test");
const { postsUrl } = require("../config/urls.config");
const { validateJsonSchema, getResponseJsonByUrl } = require("../utilities/api.utilities");
const postsSchema = require("../resource/json.schemas/posts.response.schema.json");

test.describe("JsonPlaceholder.Typicode API Responses Matching Schema Tests", () => {

  test("Verify that GET /posts has correct format", {
    tag: ["@POSITIVE", "@GET"]
  }, async () => {
    const postsJson = await getResponseJsonByUrl(postsUrl);
    const isMatching = await validateJsonSchema(postsJson, postsSchema);
    expect(isMatching, "JSON data should match schema").toBe(true);
  });
});
