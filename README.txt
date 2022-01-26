    webhandle.pageServer.preRun.push(require('@dankolz/social-head-attributes/server-js/page-info-loader'))
	
	or
	
    webhandle.routers.primary.use(require('@dankolz/social-head-attributes/server-js/page-info-loader'))
	
	
 webhandle.addTemplateDir(path.join(webhandle.projectRoot, 'node_modules/@dankolz/social-head-attributes/views'))
	