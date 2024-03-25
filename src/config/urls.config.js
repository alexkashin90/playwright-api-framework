export const baseUrl = "https://jsonplaceholder.typicode.com";

export const postsUrl = baseUrl + "/posts";
export const commentsUrl = baseUrl + "/comments";
export const albumsUrl = baseUrl + "/albums";
export const photosUrl = baseUrl + "/photos";
export const todosUrl = baseUrl + "/todos";
export const usersUrl = baseUrl + "/users";

export function urlsConfig(id) {
    return {
        postById: postsUrl + `/${id}`,
        commentsByPostId:  postsUrl + `/${id}/comments`,
        httpCommentsByPostId:  baseUrl + `/comments?postId=${id}`
    };
}