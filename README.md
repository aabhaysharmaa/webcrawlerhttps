# Web Crawler

## Description
A simple web crawler built with JavaScript that takes a website URL from the command line, crawls the site, collects all links from its pages, and generates a report on how many links each page contains.

## Features
- Crawls a given website starting from the provided URL.
- Extracts and collects all links from each visited page.
- Generates a report showing the number of links found on each page.
- Uses Node.js with libraries like Puppeteer, Axios, or Cheerio for efficient crawling.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/web-crawler.git
   cd web-crawler
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

Example:
```sh
node crawler.js https://example.com
```

## Output
The crawler will output a report with a list of pages and the number of links found on each page:
```
Crawling: https://example.com
--------------------------------------
https://example.com - 15 links found
https://example.com/about - 8 links found
https://example.com/contact - 5 links found
...
```

## Technologies Used
- Node.js
- vanila JavaScript

## License
This project is open-source and available under the MIT License.

## Contributions
Feel free to submit issues or pull requests to improve the crawler.

## Author
[abhay-sharma]

