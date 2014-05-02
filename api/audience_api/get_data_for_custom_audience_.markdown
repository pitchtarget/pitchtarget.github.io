---
layout: default
title: Audience API API
---

# Audience API API

## Get data for custom audience 465257143575221

### GET /custom_audiences/:fb_id



### Request

{% highlight http %}
GET /custom_audiences/465257143575221 HTTP/1.1
Accept: application/json
Authorization: OAuth tovvo6uh22j3xo7s813la8ay5r6ytyu
Host: example.org
Cookie: 

{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/custom_audiences/465257143575221" -X GET \
	-H "Accept: application/json" \
	-H "Authorization: OAuth tovvo6uh22j3xo7s813la8ay5r6ytyu"
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
ETag: "790652af8840e7d2159159231218e164"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: a0a8daf2-c690-43b7-b9ec-d82f95a018ae
X-Runtime: 0.010748
Content-Length: 204
{% endhighlight %}

#### Body

{% highlight json %}
{
  "fb_custom_audience": {
    "id": 1242,
    "name": "Spending users",
    "fb_id": "465257143575221",
    "subtype": "CUSTOM",
    "description": "Users who bought something on my site",
    "opt_out_link": "http://www.myshop.com/opt_out"
  }
}
{% endhighlight %}

