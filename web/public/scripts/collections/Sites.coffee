class Throwboogler.Collections.Sites extends Backbone.Collection
	model: Throwboogler.Models.Site

	url: 'http://10.4.11.249:3000/sites'

	initialize: ->

		@on 'search', (site) ->
			site = name: site
			@reset site # for testing offline
			# @fetch( data: site, reset: true ).success( (data) => 
			# 	# @.trigger('render:site-history', data)
			# )
		, @

		@on 'add reset', (site) ->
			console.log 'added site to collection: ', site