let tripartite = require('tripartite')

let templates = {}

let loadTemplates = function() {
	webhandle.templateLoaders.push((name, callback) => {
		callback(templates[name])
	})
	
	templates['summaryLargeImage'] = (data) => {
		return 'summary_large_image'
	}
	


}

module.exports = loadTemplates








