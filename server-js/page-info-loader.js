function pageInfoLoader(req, res, next) {
	let pageInfo = res.locals.pageInfo = res.locals.pageInfo || {}
    const protocol = req.protocol;
    const host = req.hostname;
    const url = req.originalUrl;
    const port = process.env.PORT || PORT;
  
    const fullUrl = `${protocol}://${host}:${port}${url}`
	pageInfo.reqURL = fullUrl
	next()
}

module.exports = pageInfoLoader
