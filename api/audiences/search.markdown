---
layout: default_with_nav
title: Search
section: Audiences API
nav: nav_audiences_api.md
---

## {{page.title}}
Use this endpoint to search for interests, keywords and countries just like you would do using the [Search endpoint](https://developers.facebook.com/docs/reference/ads-api/get-autocomplete-data) on Facebook.

### Search for targeting options

`GET /search`

#### Parameters
This endpoint accepts the same parameters as the Facebook [Search endpoint](https://developers.facebook.com/docs/reference/ads-api/get-autocomplete-data).

#### Request

{% highlight sh %}
curl "{{site.base_url}}/search?q=ita&type=adcountry" -X GET \
  -H "Accept: application/json" \
  -H "Authorization: OAuth eucivw4wab46ggunec0dzgi7vx0aloa"
{% endhighlight %}

#### Response

{% highlight json %}
[
  {
    "country_code": "IT",
    "name": "Italy",
    "supports_region": "false",
    "supports_city": "true"
  }
]
{% endhighlight %}
