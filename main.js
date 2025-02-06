
const { crawlPage } = require("./crawel")
async function main() {
    if (process.argv.length < 3) {
        console.log("No Website provided")
        process.exit(1)
    }
    else if (process.argv.length > 3) {
        console.log("Sorry Too many argvs")
        process.exit(1)
    }
    const baseURL = process.argv[2];
    console.log(`Starting crawl : ${baseURL}`)
   const pages = await crawlPage(baseURL, baseURL, {})

for(const page of Object.entries(pages)){ 
    console.log(page)
}
}

main()