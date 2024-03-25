const { test, expect } = require("@playwright/test");
const { urlsConfig } = require("../config/urls.config");
const { getRequest, putRequest, getResponseJsonByUrl } = require("../utilities/api.utilities");
const { responseStatus } = require("../resource/response.status");
const { putRequestData } = require("../resource/request.data");
const { emptyObject, emptyArray, incorrectPostId, incorrectCommentId } = require("../resource/test.data");

test.describe("JsonPlaceholder.Typicode Negative API Tests", () => {

  test(`Verify that GET request to "/posts/{id}" URL with error in ID returns status ${responseStatus.getNegative}`, {
    tag: ["@NEGATIVE", "@GET", "@REGRESSION"]
  }, async () => {
    const postByIdUrl = urlsConfig(incorrectPostId).postById;
    const response = await getRequest(postByIdUrl);
    expect(response.status()).toBe(responseStatus.getNegative);
  });

  test("Verify that GET request to \"/posts/{id}\" URL with error in ID returns empty object", {
    tag: ["@NEGATIVE", "@GET", "@REGRESSION"]
  }, async () => {
    const postByIdUrl = urlsConfig(incorrectPostId).postById;
    const postData = await getResponseJsonByUrl(postByIdUrl);
    expect(postData).toEqual(emptyObject);
  });

  test("Verify that GET request to \"/comments?postId={id}\" URL with error in ID returns empty array", {
    tag: ["@NEGATIVE", "@GET", "@REGRESSION"]
  }, async () => {
    const httpCommentsByPostIdUrl = urlsConfig(incorrectCommentId).httpCommentsByPostId;
    const comments = await getResponseJsonByUrl(httpCommentsByPostIdUrl);
    expect(comments).toEqual(emptyArray);
  });

  test(`Verify that PUT request to "/posts/{id}" URL with error in ID returns status ${responseStatus.putNegative}`, {
    tag: ["@NEGATIVE", "@PUT", "@REGRESSION"]
  }, async () => {
    const postByIdUrl = urlsConfig(incorrectPostId).postById;
    const response = await putRequest(postByIdUrl, putRequestData);
    expect(response.status()).toBe(responseStatus.putNegative);
  });
});
