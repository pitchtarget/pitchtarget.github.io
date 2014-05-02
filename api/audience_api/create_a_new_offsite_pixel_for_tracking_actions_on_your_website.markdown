---
layout: default
title: Audience API API
---

# Audience API API

## Create a new offsite pixel for tracking actions on your website

### POST /offsite_pixels


### Parameters

Name | Description |
-----|-------------|
`fb_ad_account_id` (required) | Facebook ID of the Ad Account for the current user |
`name` (required) | Name of the offsite pixel |
`tag` (required) | Tag of the offsite pixel. It must one of: CHECKOUT, REGISTRATION, LEAD, KEY_PAGE_VIEW, ADD_TO_CART, OTHER |

### Request

{% highlight http %}
POST /offsite_pixels HTTP/1.1
Accept: application/json
Authorization: OAuth ihfpxwn6gb2gywtcjtewiy40pb27190
Host: example.org
Content-Type: application/x-www-form-urlencoded
Cookie: 

{% endhighlight %}

#### Body

{% highlight text %}
fb_ad_account_id=10&name=Shoes+purchase&tag=CHECKOUT
{% endhighlight %}

#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/offsite_pixels" -X POST \
	-H "Accept: application/json" \
	-H "Authorization: OAuth ihfpxwn6gb2gywtcjtewiy40pb27190" \
	-H "Content-Type: application/x-www-form-urlencoded" -d 'fb_ad_account_id=10&name=Shoes+purchase&tag=CHECKOUT'
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
ETag: "4a6f58b6c7b13fc4413ac76a7451b604"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 3ab060c2-206c-4c4a-a5e0-078d43a47ff0
X-Runtime: 0.011196
Content-Length: 29
{% endhighlight %}

#### Body

{% highlight json %}
{
  "id": {
    "id": "6014360342904"
  }
}
{% endhighlight %}

