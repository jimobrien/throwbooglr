class Throwboogler.Views.Site extends Backbone.View
	className: 'col-md-3 site-container'

	template: _.template '<object></object>'

	initialize: ->
		@render()

	render: ->
		model = @model.toJSON()
		console.log model, 'model'
		@$el.html @template
		$object = $(@$el.children()[0])
		
		$object.append(model.date)
		
		@