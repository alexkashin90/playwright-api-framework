import { request  } from "@playwright/test";

export async function getRequest(url) {
    const context = await request.newContext();
    return await context.get(url);
}

export async function getResponseJson(response) {
    return await response.json();
}

export async function postRequest(url, testData) {
    const context = await request.newContext();
    return await context.post(url, testData);
}

export async function putRequest(url, testData) {
    const context = await request.newContext();
    return await context.put(url, testData);
}

export async function patchRequest(url, testData) {
    const context = await request.newContext();
    return await context.patch(url, testData);
}

export async function deleteRequest(url) {
    const context = await request.newContext();
    return await context.delete(url);
}
