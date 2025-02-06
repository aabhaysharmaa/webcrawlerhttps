const { normalizeURL, getUrlsFromHtml, getRelativeUrlsFromHtml } = require("./crawel.js");
const { test, expect } = require("@jest/globals");

test("normalizeURL", () => {
    const input = 'https://blog.boot.dev/path';
    const actual = normalizeURL(input);
    const expected = 'blog.boot.dev/path';
    expect(actual).toEqual(expected)
})
test("normalizeURL strip protocol", () => {
    const input = 'https://blog.boot.dev/path/';
    const actual = normalizeURL(input);
    const expected = 'blog.boot.dev/path';
    expect(actual).toEqual(expected)
})
test("normalizeURL strip remove lash", () => {
    const input = 'https://blog.boot.dev/path/';
    const actual = normalizeURL(input);
    const expected = 'blog.boot.dev/path';
    expect(actual).toEqual(expected)
})
test("normalizeURL Capital", () => {
    const input = 'https://BLOG.boot.dev/path/';
    const actual = normalizeURL(input);
    const expected = 'blog.boot.dev/path';
    expect(actual).toEqual(expected)
})
test("normalizeURL http", () => {
    const input = 'http://BLOG.boot.dev/path/';
    const actual = normalizeURL(input);
    const expected = 'blog.boot.dev/path';
    expect(actual).toEqual(expected)
})
test("getUrlsFromHtml", () => {
    const input = 'http://BLOG.boot.dev/path/';
    const actual = normalizeURL(input);
    const expected = 'blog.boot.dev/path';
    expect(actual).toEqual(expected)
})


test("getUrlsFromHtml absolute", () => {
    const htmlBody = `
    <html>
    <body>
      <a href="https://blog.boot.dev/path/"></a>
    </body>
    </html>
    `
    const baseUrl = "https://blog.boot.dev/path/";
    const actual = getUrlsFromHtml(htmlBody, baseUrl);
    const expected = ["https://blog.boot.dev/path/"]
    expect(actual).toEqual(expected)
})

test("getUrlsFromHtml relative", () => {
    const htmlBody = `
    <html>
    <body>
      <a href="/path/"></a>
    </body>
    </html>`
    const baseUrl = "https://blog.boot.dev";
    const actual = getRelativeUrlsFromHtml(htmlBody, baseUrl);
    const expected = ["https://blog.boot.dev/path/"]
    expect(actual).toEqual(expected)
})  

test("getUrlsFromHtmle Both", () => {
    const htmlBody = `
    <html>
    <body>
      <a href="/path1/"></a>
      <a href="/path2/"></a>
      <a href="/path3/"></a>
    </body>
    </html>`
    const baseUrl = "https://blog.boot.dev";
    const actual = getRelativeUrlsFromHtml(htmlBody, baseUrl);
    const expected = ["https://blog.boot.dev/path1/", "https://blog.boot.dev/path2/", "https://blog.boot.dev/path3/"]
    expect(actual).toEqual(expected)
})


test("getUrlsFromHtmle Both", () => {
    const htmlBody = `
    <html>
    <body>
      <a href="invalid"></a>
    </body>
    </html>`
    const baseUrl = "https://blog.boot.dev";
    const actual = getRelativeUrlsFromHtml(htmlBody, baseUrl);
    const expected = []
    expect(actual).toEqual(expected)
})

