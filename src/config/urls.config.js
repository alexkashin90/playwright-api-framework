export const baseUrl = "https://jsonplaceholder.typicode.com";

export const postsUrl = baseUrl + "/posts";
export const erroneousPostsUrl = baseUrl + "/post";

export function urlsConfig(id) {
    return {
        postById: postsUrl + `/${id}`,
        commentsByPostId:  postsUrl + `/${id}/comments`,
        erroneousCommentByPostId:  postsUrl + `/${id}/comment`,
        httpCommentsByPostId:  baseUrl + `/comments?postId=${id}`
    };
}