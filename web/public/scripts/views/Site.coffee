class Throwboogler.Views.Site extends Backbone.View
  tagName: 'li'

  className: 'new-item'

  template: _.template '<a href="<%= url %>" class="livepreview"> <%= date %> </a>'

  initialize: ->
    @render()

  render: ->
    model = @model.toJSON()
    model = 
      date: new Date(Object.keys(model)[0]).toLocaleDateString()
      url: model[Object.keys(model)[0]]
    
    @$el.html @template model
    @