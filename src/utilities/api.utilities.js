import { request  } from "@playwright/test";
const Ajv = require("ajv");

export async function getRequest(url) {
    const context = await request.newContext();
    return await context.get(url);
}

export async function getResponseJson(response) {
    return await response.json();
}

export async function getResponseJsonByUrl(url) {
    const context = await request.newContext();
    const response = await context.get(url);
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

export async function getResponseLength(url) {
    const context = await request.newContext();
    const response = await context.get(url);
    const respJson = await response.json();
    return respJson.length;
}

export async function validateJsonSchema(json, schema) {
    const ajv = new Ajv();
    const validate = ajv.compile(schema);
    return validate(json);
}
