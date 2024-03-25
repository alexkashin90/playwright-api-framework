const { test, expect } = require("@playwright/test");
const { postsUrl, urlsConfig } = require("../config/urls.config");
const { getRequest, postRequest, putRequest, patchRequest, deleteRequest } = require("../utilities/api.utilities");
const { responseStatus } = require("../resource/response.status");
const { postRequestData, putRequestData, patchRequestData } = require("../resource/request.data");
const { correctPostId, correctCommentId } = require("../resource/test.data");

test.describe("JsonPlaceholder.Typicode Positive API Tests", () => {

  test(`Verify  that GET request to "/posts" URL returns status ${responseStatus.getPositive}`, {
    tag: ["@SMOKE", "@GET", "@REGRESSION"]
  }, async () => {
    const response = await getRequest(postsUrl);
    expect(response.status()).toBe(responseStatus.getPositive);
  });

  test(`Verify  that GET request to "/posts/{id}" URL returns status ${responseStatus.getPositive}`, {
    tag: ["@SMOKE", "@GET", "@REGRESSION"]
  }, async () => {
    const postByIdUrl = urlsConfig(correctPostId).postById;
    const response = await getRequest(postByIdUrl);
    expect(response.status()).toBe(responseStatus.getPositive);
  });

  test(`Verify  that GET request to "/posts/{id}/comments" URL returns status ${responseStatus.getPositive}`, {
    tag: ["@SMOKE", "@GET", "@REGRESSION"]
  }, async () => {
    const commentsByPostIdUrl = urlsConfig(correctPostId).commentsByPostId;
    const response = await getRequest(commentsByPostIdUrl);
    expect(response.status()).toBe(responseStatus.getPositive);
  });

  test(`Verify  that GET request to "/comments?postId={id}" URL returns status ${responseStatus.getPositive}`, {
    tag: ["@SMOKE", "@GET", "@REGRESSION"]
  }, async () => {
    const httpCommentsByPostIdUrl = urlsConfig(correctCommentId).httpCommentsByPostId;
    const response = await getRequest(httpCommentsByPostIdUrl);
    expect(response.status()).toBe(responseStatus.getPositive);
  });

  test(`Verify  that POST request to "/posts" URL returns status ${responseStatus.postPositive}`, {
    tag: ["@SMOKE", "@POST", "@REGRESSION"]
  }, async () => {
    const response = await postRequest(postsUrl, postRequestData);
    expect(response.status()).toBe(responseStatus.postPositive);
  });

  test(`Verify  that POST request to "/posts/{id}" URL returns status ${responseStatus.putPositive}`, {
    tag: ["@SMOKE", "@PUT", "@REGRESSION"]
  }, async () => {
    const postByIdUrl = urlsConfig(correctPostId).postById;
    const response = await putRequest(postByIdUrl, putRequestData);
    expect(response.status()).toBe(responseStatus.putPositive);
  });

  test(`Verify  that PATCH request to "/posts/{id}" URL returns status ${responseStatus.patchPositive}`, {
    tag: ["@SMOKE", "@PATCH", "@REGRESSION"]
  }, async () => {
    const postByIdUrl = urlsConfig(correctPostId).postById;
    const response = await patchRequest(postByIdUrl, patchRequestData);
    expect(response.status()).toBe(responseStatus.patchPositive);
  });

  test(`Verify  that DELETE request to "/posts/{id}" URL returns status ${responseStatus.deletePositive}`, {
    tag: ["@SMOKE", "@DELETE", "@REGRESSION"]
  }, async () => {
    const postByIdUrl = urlsConfig(correctPostId).postById;
    const response = await deleteRequest(postByIdUrl);
    expect(response.status()).toBe(responseStatus.deletePositive);
  });
});
