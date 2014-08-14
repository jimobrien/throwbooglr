class Throwboogler.Models.App extends Backbone.Model
	initialize: -> 
		@set 'sites', sites = new Throwboogler.Collections.Sites()

		@on 'input:search', ($target) ->
			sites.add $target.val()
		, @
			