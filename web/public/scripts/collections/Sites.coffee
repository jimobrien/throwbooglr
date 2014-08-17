class Throwboogler.Collections.Sites extends Backbone.Collection
  model: Throwboogler.Models.Site

  url: '/sites'

  parse: (data) ->
    results = []

    for key of data 
      if key != 'site'
        result = {}
        result[key] = data[key]
        results.push result

    results

  initialize: ->

    @on 'search', (site) ->
      site = name: site
      # @reset site # for testing offline
      @fetch( data: site, reset: true ) #.success( (data) -> console.log data, '<- FROM SERVER')
    , @
