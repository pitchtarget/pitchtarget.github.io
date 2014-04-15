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
`tag` (required) | Tag of the offsite pixel. It must one of: CHECKOUT, REGISTRATION, LEAD, KEY_PAGE_VIEW, ADD_TO_CART, OTHER |

### Request

{% highlight http %}
POST /offsitepixels HTTP/1.1
Accept: application/json
Authorization: OAuth 18vxz9x7pdrhi1upiv2001supxf4exo
Host: example.org
Content-Type: application/x-www-form-urlencoded
Cookie: 

{% endhighlight %}

#### Body

{% highlight text %}
fb_ad_account_id=39&name=Shoes+purchase&tag=CHECKOUT
{% endhighlight %}

#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/offsitepixels" -X POST \
	-H "Accept: application/json" \
	-H "Authorization: OAuth 18vxz9x7pdrhi1upiv2001supxf4exo" \
	-H "Content-Type: application/x-www-form-urlencoded" -d 'fb_ad_account_id=39&name=Shoes+purchase&tag=CHECKOUT'
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
X-Request-Id: e911c045-65c1-4ec0-b5be-a9badda0e4e6
X-Runtime: 0.012476
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

