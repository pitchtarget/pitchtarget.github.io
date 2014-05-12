---
layout: default
title: Audience API API
---

# Audience API API

## Get the remarketing pixel code

### GET /custom_audiences/remarketing_pixel


### Parameters

Name | Description |
-----|-------------|
`fb_ad_account_id` (required) | Facebook ID of the Ad Account to use |

### Request

{% highlight http %}
GET /custom_audiences/remarketing_pixel?fb_ad_account_id=30 HTTP/1.1
Accept: application/json
Authorization: OAuth hnojm1bmyoidsp82a86cv8as9d1i0b1
Host: example.org
Cookie: 
fb_ad_account_id: 30
{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/custom_audiences/remarketing_pixel?fb_ad_account_id=30" -X GET \
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
ETag: "c5ae20609ad1b7865899799896dd1de3"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 0c854881-7ce3-4daa-b8d7-0a86a16905ec
X-Runtime: 0.010248
Content-Length: 36
{% endhighlight %}

#### Body

{% highlight json %}
{
  "js": "remarketing pixel code here"
}
{% endhighlight %}

