function printreport(pages) {
    console.log("==========")
    console.log("REPORTING")
    console.log("==========")
    const sortedPages = sortPages(pages)
    for (const sortedPage of sortedPages) {
        const url = sortedPage[0];
        const hits = sortedPage[1];
        console.log(`Found ${hits} links to page : ${url}`)
    }
    console.log("==========")
    console.log("END REPORT")
    console.log("==========")
}


function sortPages(page) {
    const pagesArr = Object.entries(page)
    pagesArr.sort((a, b) => {
        aHits = a[1]
        bHits = b[1]
        return b[1] - a[1]
    })
    return pagesArr
}

module.exports = {
    sortPages,
    printreport
}