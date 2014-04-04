---
layout: default_with_nav
title: Working with Offsite Conversion Pixels
section: Campaigns API
nav: nav_campaigns_api.md
---

## {{page.title}}

Use the Offsite Conversion Pixel to keep track of conversions (such as registrations or purchases) that are happening inside your website.

### Create a new Offsite Pixel

`POST /offsitepixels`

#### Parameters

Name | Required? | Description |
-----|-----------|-------------|
`fb_ad_account_id` | Yes | Facebook ID of the Ad Account for the current user |
`name` | Yes | Name of the offsite pixel. The name must be unique. In other words, you cannot have two pixels with the same name in the same Ad Account. |
`tag`  | Yes | Tag of the offsite pixel. It must one of: `CHECKOUT`, `REGISTRATION`, `LEAD`, `KEY_PAGE_VIEW`, `ADD_TO_CART`, `OTHER` |

#### Request

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
curl "{{site.base_url}}/offsitepixels" -X POST \
  -H "Accept: application/json" \
  -H "Authorization: OAuth eucivw4wab46ggunec0dzgi7vx0aloa" \
  -H "Content-Type: application/x-www-form-urlencoded" -d 'fb_ad_account_id=9&name=Shoes+purchase&tag=CHECKOUT'
{% endhighlight %}


#### Body

{% highlight json %}
{
  "id": "6014360342904"
}
{% endhighlight %}

### List all Offsite Pixels

`GET /offsitepixels`

#### Parameters
Name | Required? | Description |
-----|-----------|-------------|
`fb_ad_account_id` | Yes | Facebook ID of the Ad Account for the current user |

#### Request

{% highlight http %}
GET /offsitepixels?fb_ad_account_id=8 HTTP/1.1
Accept: application/json
Authorization: OAuth eucivw4wab46ggunec0dzgi7vx0aloa
Host: example.org
Cookie:
fb_ad_account_id: 8
{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/offsitepixels?fb_ad_account_id=8" -X GET \
  -H "Accept: application/json" \
  -H "Authorization: OAuth eucivw4wab46ggunec0dzgi7vx0aloa"
{% endhighlight %}

#### Response

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
ETag: "5b5c6d08a075901a72ee320c8c66c183"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: bd9d699e-0965-4188-afbd-dbaa61a0437e
X-Runtime: 0.009078
Content-Length: 852
{% endhighlight %}

#### Body

{% highlight json %}
[
  {
    "id": "6014360342904",
    "name": "CV uploaded",
    "tag": "registration",
    "status": "Inactive",
    "creator": "101501213229501506 (John Doe)",
    "js_pixel": "<!-- Facebook Conversion Code for CV uploaded -->\n<script type=\"text/javascript\">\nvar fb_param = {};\nfb_param.pixel_id = '6014360342904';\nfb_param.value = '0.01';\nfb_param.currency = 'GBP';\n(function(){\n  var fpw = document.createElement('script');\n  fpw.async = true;\n  fpw.src = '//connect.facebook.net/en_US/fp.js';\n  var ref = document.getElementsByTagName('script')[0];\n  ref.parentNode.insertBefore(fpw, ref);\n})();\n</script>\n<noscript><img height=\"1\" width=\"1\" alt=\"\" style=\"display:none\" src=\"https://www.facebook.com/offsite_event.php?id=6014360342904&amp;value=0.01&amp;currency=GBP\" /></noscript>"
  }
]
{% endhighlight %}

