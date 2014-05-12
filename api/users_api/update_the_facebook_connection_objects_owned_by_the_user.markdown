---
layout: default
title: Users API API
---

# Users API API

## Update the Facebook connection objects owned by the user

### PUT /fb_connection_objects


### Parameters

Name | Description |
-----|-------------|
`fb_ad_account_id` (required) | Facebook ID of the Ad Account for the current user |

### Request

{% highlight http %}
PUT /fb_connection_objects HTTP/1.1
Accept: application/json
Authorization: OAuth my94675yyp9lzdxg38080ulwkfls9c9
Host: example.org
Content-Type: application/x-www-form-urlencoded
Cookie: 

{% endhighlight %}

#### Body

{% highlight text %}
fb_ad_account_id=2
{% endhighlight %}

#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/fb_connection_objects" -X PUT \
	-H "Accept: application/json" \
	-H "Authorization: OAuth my94675yyp9lzdxg38080ulwkfls9c9" \
	-H "Content-Type: application/x-www-form-urlencoded" -d 'fb_ad_account_id=2'
{% endhighlight %}

### Response

{% highlight http %}
HTTP/1.1 204 No Content
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: POST, PUT, DELETE, GET, OPTIONS
Access-Control-Request-Method: *
Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization, Content-Disposition
Cache-Control: no-cache
X-Request-Id: 249e028c-c512-47f4-abd9-69f9496bfa0a
X-Runtime: 0.039050
{% endhighlight %}


