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
Authorization: OAuth ovi7roolhxe9m80btugi8werxiyjm90
Host: example.org
Cookie: 
q: ita
type: adcountry
{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/search?q=ita&type=adcountry" -X GET \
	-H "Accept: application/json" \
	-H "Authorization: OAuth ovi7roolhxe9m80btugi8werxiyjm90"
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
X-Request-Id: 8ac143a6-32ea-46a8-9fc4-bec029cd0a88
X-Runtime: 0.009256
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

