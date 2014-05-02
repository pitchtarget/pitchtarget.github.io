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
GET /custom_audiences/remarketing_pixel?fb_ad_account_id=57 HTTP/1.1
Accept: application/json
Authorization: OAuth pd8m1zkmbmgpl3ufka778gzhrk8zno0
Host: example.org
Cookie: 
fb_ad_account_id: 57
{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/custom_audiences/remarketing_pixel?fb_ad_account_id=57" -X GET \
	-H "Accept: application/json" \
	-H "Authorization: OAuth pd8m1zkmbmgpl3ufka778gzhrk8zno0"
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
X-Request-Id: 9311883c-7d06-4533-bf49-295bb0831b00
X-Runtime: 0.011044
Content-Length: 36
{% endhighlight %}

#### Body

{% highlight json %}
{
  "js": "remarketing pixel code here"
}
{% endhighlight %}

