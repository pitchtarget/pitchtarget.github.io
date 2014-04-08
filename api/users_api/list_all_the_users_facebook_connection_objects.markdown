---
layout: default
title: Users API API
---

# Users API API

## List all the user&#39;s Facebook connection objects

### GET /fb_connection_objects


### Parameters

Name | Description |
-----|-------------|
`page`  | Page number (each page contains 10 Facebook connection objects) |
`type`  | An integer representing the type of the Facebook object |

### Request

{% highlight http %}
GET /fb_connection_objects HTTP/1.1
Accept: application/json
Authorization: OAuth 2pd565tfodhbukvosnelj6we9zfkkap
Host: example.org
Cookie: 

{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/fb_connection_objects" -X GET \
	-H "Accept: application/json" \
	-H "Authorization: OAuth 2pd565tfodhbukvosnelj6we9zfkkap"
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
ETag: "285f93777e90f54f5362b169f4974fef"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 6dce8af6-c9f4-41b2-9465-4bd759fbad03
X-Runtime: 0.033663
Content-Length: 56
{% endhighlight %}

#### Body

{% highlight json %}
{
  "fb_connection_objects": [

  ],
  "meta": {
    "page": 1,
    "total": 0
  }
}
{% endhighlight %}

