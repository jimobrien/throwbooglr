class Throwboogler.Views.Site extends Backbone.View
	tagName: 'li'

	className: ''

	template: _.template '<a href="<%= url %>" class="livepreview"> <%= date %> </a>'

	initialize: ->
		@render()

	render: ->
		model = @model.toJSON()
		console.log model, 'MODEL LOG'
		model = 
			date: new Date(Object.keys(model)[1]).toLocaleDateString()
			url: model[Object.keys(model)[1]]
		
		@$el.html @template model
		@