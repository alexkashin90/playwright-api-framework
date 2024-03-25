const { test, expect } = require("@playwright/test");
const { postsUrl, commentsUrl, albumsUrl, photosUrl, todosUrl, usersUrl } = require("../config/urls.config");
const { getResponseLength } = require("../utilities/api.utilities");
const { numberOfElements } = require("../resource/test.data");

test.describe("JsonPlaceholder.Typicode API Responses Data Tests", () => {

  test(`Verify that number of posts is ${numberOfElements.posts}`, {
    tag: ["@GET", "@REGRESSION"]
  }, async () => {
    const numberOfComments = await getResponseLength(postsUrl);
    expect(numberOfComments).toEqual(numberOfElements.posts);
  });

  test(`Verify that number of comments is ${numberOfElements.comments}`, {
    tag: ["@GET", "@REGRESSION"]
  }, async () => {
    const numberOfComments = await getResponseLength(commentsUrl);
    expect(numberOfComments).toEqual(numberOfElements.comments);
  });

  test(`Verify that number of albums is ${numberOfElements.albums}`, {
    tag: ["@GET", "@REGRESSION"]
  }, async () => {
    const numberOfAlbums = await getResponseLength(albumsUrl);
    expect(numberOfAlbums).toEqual(numberOfElements.albums);
  });

  test(`Verify that number of photos is ${numberOfElements.photos}`, {
    tag: ["@GET", "@REGRESSION"]
  }, async () => {
    const numberOfPhotos = await getResponseLength(photosUrl);
    expect(numberOfPhotos).toEqual(numberOfElements.photos);
  });

  test(`Verify that number of todos is ${numberOfElements.todos}`, {
    tag: ["@GET", "@REGRESSION"]
  }, async () => {
    const numberOfTodos = await getResponseLength(todosUrl);
    expect(numberOfTodos).toEqual(numberOfElements.todos);
  });

  test(`Verify that number of users is ${numberOfElements.users}`, {
    tag: ["@GET", "@REGRESSION"]
  }, async () => {
    const numberOfUsers = await getResponseLength(usersUrl);
    expect(numberOfUsers).toEqual(numberOfElements.users);
  });
});
