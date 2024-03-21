const { test, expect } = require("@playwright/test");
const { postsUrl, commentsUrl } = require("../config/urls.config");
const { validateJsonSchema, getResponseJsonByUrl } = require("../utilities/api.utilities");
const postsSchema = require("../resource/json.schemas/posts.response.schema.json");
const commentsSchema = require("../resource/json.schemas/comments.response.schema.json");

test.describe("JsonPlaceholder.Typicode API Responses Matching Schema Tests", () => {

  test("Verify that GET /posts has correct format", {
    tag: ["@POSITIVE", "@GET"]
  }, async () => {
    const postsJson = await getResponseJsonByUrl(postsUrl);
    const isMatching = await validateJsonSchema(postsJson, postsSchema);
    expect(isMatching, "JSON data should match schema").toBe(true);
  });

  test("Verify that GET /comments has correct format", {
    tag: ["@POSITIVE", "@GET"]
  }, async () => {
    const commentsJson = await getResponseJsonByUrl(commentsUrl);
    const isMatching = await validateJsonSchema(commentsJson, commentsSchema);
    expect(isMatching, "JSON data should match schema").toBe(true);
  });
});
