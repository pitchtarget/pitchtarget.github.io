---
layout: default
title: Campaigns API API
---

# Campaigns API API

## Create a new offsite pixel for tracking actions on your website

### POST /offsitepixels


### Parameters

Name | Description |
-----|-------------|
`fb_ad_account_id` (required) | Facebook ID of the Ad Account for the current user |
`name` (required) | Name of the offsite pixel |
`tag`  | Tag of the offsite pixel. It must one of: CHECKOUT, REGISTRATION, LEAD, KEY_PAGE_VIEW, ADD_TO_CART, OTHER |

### Request

{% highlight http %}
POST /offsitepixels HTTP/1.1
Accept: application/json
Authorization: OAuth eucivw4wab46ggunec0dzgi7vx0aloa
Host: example.org
Content-Type: application/x-www-form-urlencoded
Cookie: 

{% endhighlight %}

#### Body

{% highlight text %}
fb_ad_account_id=9&name=Shoes+purchase&tag=CHECKOUT
{% endhighlight %}

#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/offsitepixels" -X POST \
	-H "Accept: application/json" \
	-H "Authorization: OAuth eucivw4wab46ggunec0dzgi7vx0aloa" \
	-H "Content-Type: application/x-www-form-urlencoded" -d 'fb_ad_account_id=9&name=Shoes+purchase&tag=CHECKOUT'
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
ETag: "ebe882d7e6beb78bc9308c5f53c5842c"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 1aab84ad-e579-4d32-9e27-bda7f6e8ea51
X-Runtime: 0.012443
Content-Length: 22
{% endhighlight %}

#### Body

{% highlight json %}
{
  "id": "6014360342904"
}
{% endhighlight %}

