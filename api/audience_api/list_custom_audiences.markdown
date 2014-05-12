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
`page`  | Page number (each page contains 10 custom audiences) |
`subtype`  | The subtype for the custom audience |

### Request

{% highlight http %}
GET /custom_audiences?fb_ad_account_id=29 HTTP/1.1
Accept: application/json
Authorization: OAuth hnojm1bmyoidsp82a86cv8as9d1i0b1
Host: example.org
Cookie: 
fb_ad_account_id: 29
{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/custom_audiences?fb_ad_account_id=29" -X GET \
	-H "Accept: application/json" \
	-H "Authorization: OAuth hnojm1bmyoidsp82a86cv8as9d1i0b1"
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
X-Request-Id: d7bfc9f9-213c-4cb1-ac35-f41cd3b8090a
X-Runtime: 0.010323
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

