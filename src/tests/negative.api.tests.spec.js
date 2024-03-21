const { test, expect } = require("@playwright/test");
const { urlsConfig, erroneousPostsUrl } = require("../config/urls.config");
const { getRequest, getResponseJson, putRequest } = require("../utilities/api.utilities");
const { responseStatus } = require("../utilities/response.status");
const { putRequestData } = require("../utilities/request.data");

test.describe("JsonPlaceholder Negative API Tests", () => {

  test("Negative (error in URL) GET /post", async () => {
    const response = await getRequest(erroneousPostsUrl);
    const posts = await getResponseJson(response);
    expect(response.status()).toBe(responseStatus.getNegative);
    expect(posts).toEqual({});
  });

  test("Negative (error in ID) GET /posts/{id}", async () => {
    const postByIdUrl = urlsConfig(101).postById;
    const response = await getRequest(postByIdUrl);
    const post = await getResponseJson(response);
    expect(response.status()).toBe(responseStatus.getNegative);
    expect(post).toEqual({});
  });

  test("Negative (error in URL) GET /posts/{id}/comment", async () => {
    const commentByPostIdUrl = urlsConfig(1).erroneousCommentByPostId;
    const response = await getRequest(commentByPostIdUrl);
    const comment = await getResponseJson(response);
    expect(response.status()).toBe(responseStatus.getNegative);
    expect(comment).toEqual({});
  });

  test("Negative (error in ID) GET /comments?postId={id}", async () => {
    const httpCommentsByPostIdUrl = urlsConfig(999).httpCommentsByPostId;
    const response = await getRequest(httpCommentsByPostIdUrl);
    const comments = await getResponseJson(response);
    expect(response.status()).toBe(responseStatus.getPositive);
    expect(comments).toEqual([]);
  });

  test('Negative (error in ID) PUT /posts/{id}', async () => {
    const postByIdUrl = urlsConfig(999).postById;
    const response = await putRequest(postByIdUrl, putRequestData);
    expect(response.status()).toBe(responseStatus.putNegative);
  });
});
