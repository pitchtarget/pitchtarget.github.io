---
layout: default
title: Audience API API
---

# Audience API API

## List all offsite pixels

### GET /offsite_pixels


### Parameters

Name | Description |
-----|-------------|
`fb_ad_account_id` (required) | Facebook ID of the Ad Account for the current user |

### Request

{% highlight http %}
GET /offsite_pixels?fb_ad_account_id=13 HTTP/1.1
Accept: application/json
Authorization: OAuth aweihh10ilbsddrb4j5sza51jqx54by
Host: example.org
Cookie: 
fb_ad_account_id: 13
{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/offsite_pixels?fb_ad_account_id=13" -X GET \
	-H "Accept: application/json" \
	-H "Authorization: OAuth aweihh10ilbsddrb4j5sza51jqx54by"
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
ETag: "bca1653f9b813db024e8a62e0d2e7684"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 9ea021cd-6856-4455-a4e9-07a2f634e308
X-Runtime: 0.013150
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
    "creator": "10150121399501506 (Daniele Bernardi)",
    "js_pixel": "<!-- Facebook Conversion Code for CV uploaded -->\n<script type=\"text/javascript\">\nvar fb_param = {};\nfb_param.pixel_id = '6014360342904';\nfb_param.value = '0.01';\nfb_param.currency = 'GBP';\n(function(){\n  var fpw = document.createElement('script');\n  fpw.async = true;\n  fpw.src = '//connect.facebook.net/en_US/fp.js';\n  var ref = document.getElementsByTagName('script')[0];\n  ref.parentNode.insertBefore(fpw, ref);\n})();\n</script>\n<noscript><img height=\"1\" width=\"1\" alt=\"\" style=\"display:none\" src=\"https://www.facebook.com/offsite_event.php?id=6014360342904&amp;value=0.01&amp;currency=GBP\" /></noscript>"
  }
]
{% endhighlight %}

