const { test, expect } = require("@playwright/test");
const { postsUrl, urlsConfig } = require("../config/urls.config");
const { getRequest, getResponseJson, postRequest, putRequest, patchRequest, deleteRequest } = require("../utilities/api.utilities");
const { responseStatus } = require("../resource/response.status");
const { postRequestData, putRequestData, patchRequestData } = require("../resource/request.data");

test.describe("JsonPlaceholder.Typicode Positive API Tests", () => {

  test("GET /posts", {
    tag: ["@SMOKE", "@POSITIVE", "@GET"]
  }, async () => {
    const response = await getRequest(postsUrl);
    const posts = await getResponseJson(response);
    expect(response.status()).toBe(responseStatus.getPositive);
    expect(posts.length).toBeGreaterThan(0);
  });

  test("GET /posts/{id}", {
    tag: ["@SMOKE", "@POSITIVE", "@GET"]
  }, async () => {
    const postByIdUrl = urlsConfig(1).postById;
    const response = await getRequest(postByIdUrl);
    const post = await getResponseJson(response);
    expect(response.status()).toBe(responseStatus.getPositive);
    expect(post.userId).toBe(1);
  });

  test("GET /posts/{id}/comments", {
    tag: ["@SMOKE", "@POSITIVE", "@GET"]
  }, async () => {
    const commentsByPostIdUrl = urlsConfig(1).commentsByPostId;
    const response = await getRequest(commentsByPostIdUrl);
    const comments = await getResponseJson(response);
    expect(response.status()).toBe(responseStatus.getPositive);
    expect(comments.length).toBeGreaterThan(0);
  });

  test("GET /comments?postId={id}", {
    tag: ["@SMOKE", "@POSITIVE", "@GET"]
  }, async () => {
    const httpCommentsByPostIdUrl = urlsConfig(1).httpCommentsByPostId;
    const response = await getRequest(httpCommentsByPostIdUrl);
    const comments = await getResponseJson(response);
    expect(response.status()).toBe(responseStatus.getPositive);
    expect(comments.length).toBeGreaterThan(0);
  });

  test("POST /posts", {
    tag: ["@SMOKE", "@POSITIVE", "@POST"]
  }, async () => {
    const response = await postRequest(postsUrl, postRequestData);
    expect(response.status()).toBe(responseStatus.postPositive);
  });

  test("PUT /posts/{id}", {
    tag: ["@SMOKE", "@POSITIVE", "@PUT"]
  }, async () => {
    const postByIdUrl = urlsConfig(1).postById;
    const response = await putRequest(postByIdUrl, putRequestData);
    expect(response.status()).toBe(responseStatus.putPositive);
  });

  test("PATCH /posts/{id}", {
    tag: ["@SMOKE", "@POSITIVE", "@PATCH"]
  }, async () => {
    const postByIdUrl = urlsConfig(1).postById;
    const response = await patchRequest(postByIdUrl, patchRequestData);
    expect(response.status()).toBe(responseStatus.patchPositive);
  });

  test("DELETE /posts/{id}", {
    tag: ["@SMOKE", "@POSITIVE", "@DELETE"]
  }, async () => {
    const postByIdUrl = urlsConfig(1).postById;
    const response = await deleteRequest(postByIdUrl);
    expect(response.status()).toBe(responseStatus.deletePositive);
  });
});
