const { test, expect } = require("@playwright/test");
const { postsUrl, urlsConfig } = require("../config/urls.config");
const { getResponseJsonByUrl } = require("../utilities/api.utilities");
const { correctPostId, correctCommentId } = require("../resource/test.data");

test.describe("JsonPlaceholder.Typicode Positive API Tests", () => {

  test("Verify  that GET request to \"/posts\" URL returns not empty data", {
    tag: ["@SMOKE", "@GET", "@REGRESSION"]
  }, async () => {
    const postsData = await getResponseJsonByUrl(postsUrl);
    expect(postsData.length).toBeGreaterThan(0);
  });

  test("Verify  that GET request to \"/posts/{id}\" URL returns not empty data", {
    tag: ["@SMOKE", "@GET", "@REGRESSION"]
  }, async () => {
    const postByIdUrl = urlsConfig(correctPostId).postById;
    const postData = await getResponseJsonByUrl(postByIdUrl);
    expect(postData.userId).toBe(correctPostId);
  });

  test("Verify  that GET request to \"/posts/{id}/comments\" URL returns not empty data", {
    tag: ["@SMOKE", "@GET", "@REGRESSION"]
  }, async () => {
    const commentsByPostIdUrl = urlsConfig(correctPostId).commentsByPostId;
    const comments = await getResponseJsonByUrl(commentsByPostIdUrl);
    expect(comments.length).toBeGreaterThan(0);
  });


  test("Verify  that GET request to \"/comments?postId={id}\" URL returns not empty data", {
    tag: ["@SMOKE", "@GET", "@REGRESSION"]
  }, async () => {
    const httpCommentsByPostIdUrl = urlsConfig(correctCommentId).httpCommentsByPostId;
    const comments = await getResponseJsonByUrl(httpCommentsByPostIdUrl);
    expect(comments.length).toBeGreaterThan(0);
  });
});
