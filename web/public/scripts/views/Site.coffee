class Throwboogler.Views.Site extends Backbone.View
	tagName: 'li'

	className: ''

	template: _.template '<a href="<%= url %>"> <%= url %> </a>'
	# template: _.template '<object type="text/html" width="100%" height="100%" data="<%= url %>"></object>'

	initialize: ->
		@render()

	render: ->
		model = @model.toJSON()
		model = 
			url: model[Object.keys(model)[0]]
		

		@$el.html @template model
		# setTimeout( () => @$el.removeClass 'offscreen', 500)
		@