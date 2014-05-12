---
layout: default
title: Campaigns API API
---

# Campaigns API API

## Search for &#39;ita&#39; in countries

### GET /search


### Parameters

Name | Description |
-----|-------------|
`q`  | The query |
`type`  | The Facebook object type |

### Request

{% highlight http %}
GET /search?q=ita&amp;type=adcountry HTTP/1.1
Accept: application/json
Authorization: OAuth ajtfbilkbl0no01n0fxye87k3c4i82h
Host: example.org
Cookie: 
q: ita
type: adcountry
{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/search?q=ita&type=adcountry" -X GET \
	-H "Accept: application/json" \
	-H "Authorization: OAuth ajtfbilkbl0no01n0fxye87k3c4i82h"
{% endhighlight %}

### Response

{% highlight http %}
HTTP/1.1 200 OK
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: POST, PUT, DELETE, GET, OPTIONS
Access-Control-Request-Method: *
Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization, Content-Disposition
Content-Type: application/json; charset=utf-8
ETag: "ceb6ce5a01598672c46c36f643618ec4"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 5542c424-8f16-4aab-a2e4-5f8d6852e814
X-Runtime: 0.007231
Content-Length: 87
{% endhighlight %}

#### Body

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

