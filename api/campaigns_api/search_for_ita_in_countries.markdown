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
Authorization: OAuth eucivw4wab46ggunec0dzgi7vx0aloa
Host: example.org
Cookie: 
q: ita
type: adcountry
{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/search?q=ita&type=adcountry" -X GET \
	-H "Accept: application/json" \
	-H "Authorization: OAuth eucivw4wab46ggunec0dzgi7vx0aloa"
{% endhighlight %}

### Response

{% highlight http %}
HTTP/1.1 200 OK
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
X-UA-Compatible: chrome=1
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: POST, PUT, DELETE, GET, OPTIONS
Access-Control-Request-Method: *
Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization, Content-Disposition
Content-Type: application/json; charset=utf-8
ETag: "ceb6ce5a01598672c46c36f643618ec4"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 61ca969c-8847-4e9c-8e96-08577ce1f05a
X-Runtime: 0.061716
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

