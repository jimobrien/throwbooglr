class Throwboogler.Views.Sites extends Backbone.View
  className: 'row sites-container hidden'

  template: '<div class="col-md-offset-3 col-md-6">
              <h5> ARCHIVES </h5>
              <ul class="sites list-unstyled"></ul>
             </div>'


  initialize: ->
    @collection.on 'reset', () ->
      @render()
    , @

  render: ->
    @$el.html @template
    @$('.sites').append ( 
      @collection.map (site) -> 
        new Throwboogler.Views.Site( model: site ).$el
      )
    @$(".livepreview").livePreview offset: 0
    $('#loader').addClass('hidden')
    $('.sites-container').removeClass('hidden')
    @
