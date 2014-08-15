class Throwboogler.Views.Site extends Backbone.View
	className: 'col-md-3 site-container'

	template: _.template '<object  width="100%" height="100%" data="<%= url %>"></object>'

	initialize: ->
		@render()

	render: ->
		model = @model.toJSON()
		model = 
			url: model[Object.keys(model)[0]]

		@$el.html @template model

		console.log @$el
		# @$el.ready( () =>
				# console.log this
        # @contents().find('body').html('Hey, i`ve changed content of <body>! Yay!!!')
		# )
		@