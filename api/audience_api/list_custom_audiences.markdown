---
layout: default
title: Audience API API
---

# Audience API API

## List custom audiences

### GET /custom_audiences


### Parameters

Name | Description |
-----|-------------|
`fb_ad_account_id` (required) | Facebook ID of the Ad Account for the current user |

### Request

{% highlight http %}
GET /custom_audiences?fb_ad_account_id=47 HTTP/1.1
Accept: application/json
Authorization: OAuth 44ef970ga6px5ztagc0d1c23lo4tfqz
Host: example.org
Cookie: 
fb_ad_account_id: 47
{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/custom_audiences?fb_ad_account_id=47" -X GET \
	-H "Accept: application/json" \
	-H "Authorization: OAuth 44ef970ga6px5ztagc0d1c23lo4tfqz"
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
ETag: "39c8989b54013bda8e22d8cbe62440d9"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 1f1a9f3f-5ded-40fe-a032-594c223109d5
X-Runtime: 0.010183
Content-Length: 51
{% endhighlight %}

#### Body

{% highlight json %}
{
  "custom_audiences": [

  ],
  "meta": {
    "page": 1,
    "total": 0
  }
}
{% endhighlight %}

