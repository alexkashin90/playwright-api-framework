const { test, expect } = require('@playwright/test');
const { postsUrl, urlsConfig } = require('../config/urls.config');
const { getRequest, getResponseJson, postRequest, putRequest, patchRequest, deleteRequest } = require('../utilities/api.utilities');
const { responseStatus } = require('../utilities/response.status');
const { postRequestData, putRequestData, patchRequestData } = require('../utilities/request.data');

test.describe('JsonPlaceholder Positive API Tests', () => {

  test('GET /posts', async () => {
    const response = await getRequest(postsUrl);
    const posts = await getResponseJson(response);
    expect(response.status()).toBe(responseStatus.getPositive);
    expect(posts.length).toBeGreaterThan(0);
  });

  test('GET /posts/{id}', async () => {
    const postByIdUrl = urlsConfig(1).postById;
    const response = await getRequest(postByIdUrl);
    const post = await getResponseJson(response);
    expect(response.status()).toBe(responseStatus.getPositive);
    expect(post.userId).toBe(1);
  });

  test('GET /posts/{id}/comments', async () => {
    const commentsByPostIdUrl = urlsConfig(1).commentsByPostId;
    const response = await getRequest(commentsByPostIdUrl);
    const comments = await getResponseJson(response);
    expect(response.status()).toBe(responseStatus.getPositive);
    expect(comments.length).toBeGreaterThan(0);
  });

  test('GET /comments?postId={id}', async () => {
    const httpCommentsByPostIdUrl = urlsConfig(1).httpCommentsByPostId;
    const response = await getRequest(httpCommentsByPostIdUrl);
    const comments = await getResponseJson(response);
    expect(response.status()).toBe(responseStatus.getPositive);
    expect(comments.length).toBeGreaterThan(0);
  });

  test('POST /posts', async () => {
    const response = await postRequest(postsUrl, postRequestData);
    expect(response.status()).toBe(responseStatus.postPositive);
  });

  test('PUT /posts/{id}', async () => {
    const postByIdUrl = urlsConfig(1).postById;
    const response = await putRequest(postByIdUrl, putRequestData);
    expect(response.status()).toBe(responseStatus.putPositive);
  });

  test('PATCH /posts/{id}', async () => {
    const postByIdUrl = urlsConfig(1).postById;
    const response = await patchRequest(postByIdUrl, patchRequestData);
    expect(response.status()).toBe(responseStatus.patchPositive);
  });

  test('DELETE /posts/{id}', async () => {
    const postByIdUrl = urlsConfig(1).postById;
    const response = await deleteRequest(postByIdUrl);
    expect(response.status()).toBe(responseStatus.deletePositive);
  });
});