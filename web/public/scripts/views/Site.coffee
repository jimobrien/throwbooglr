class Throwboogler.Views.Site extends Backbone.View
	tagName: 'li'

	className: ''

	template: _.template '<a href="<%= url %>"> <%= date %> </a>'

	initialize: ->
		@render()

	render: ->
		model = @model.toJSON()
		console.log model, 'MODEL LOG'
		model = 
			date: Object.keys(model)[1]
			url: model[Object.keys(model)[1]]
		
		@$el.html @template model
		@