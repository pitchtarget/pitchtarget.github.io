---
layout: default
title: Audience API API
---

# Audience API API

## Get the remarketing pixel code

### GET /remarketingpixel


### Parameters

Name | Description |
-----|-------------|
`fb_ad_account_id` (required) | Facebook ID of the Ad Account to use |

### Request

{% highlight http %}
GET /remarketingpixel?fb_ad_account_id=68 HTTP/1.1
Accept: application/json
Authorization: OAuth ccwg118l6rlr4oq4nnhrbycdzd2xycx
Host: example.org
Cookie: 
fb_ad_account_id: 68
{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/remarketingpixel?fb_ad_account_id=68" -X GET \
	-H "Accept: application/json" \
	-H "Authorization: OAuth ccwg118l6rlr4oq4nnhrbycdzd2xycx"
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
ETag: "c5ae20609ad1b7865899799896dd1de3"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 4d541ff6-675b-4679-a5f9-f05db44a9164
X-Runtime: 0.010636
Content-Length: 36
{% endhighlight %}

#### Body

{% highlight json %}
{
  "js": "remarketing pixel code here"
}
{% endhighlight %}

