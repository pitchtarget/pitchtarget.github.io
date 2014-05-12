---
layout: default
title: Audience API API
---

# Audience API API

## Get data for offsite pixel 6014360342904

### GET /offsite_pixels/:id



### Request

{% highlight http %}
GET /offsite_pixels/6014360342904 HTTP/1.1
Accept: application/json
Authorization: OAuth q4zn73ss1cii2pjjc6rduftcikefwcj
Host: example.org
Cookie: 

{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/offsite_pixels/6014360342904" -X GET \
	-H "Accept: application/json" \
	-H "Authorization: OAuth q4zn73ss1cii2pjjc6rduftcikefwcj"
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
ETag: "1ef1835c4c015c285b0e37468a73a8ba"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: d4705eeb-e981-46a4-9e96-127790d05725
X-Runtime: 0.006136
Content-Length: 850
{% endhighlight %}

#### Body

{% highlight json %}
{
  "id": "6014360342904",
  "name": "CV uploaded",
  "tag": "registration",
  "status": "Inactive",
  "creator": "10150121399501506 (Daniele Bernardi)",
  "js_pixel": "<!-- Facebook Conversion Code for CV uploaded -->\n<script type=\"text/javascript\">\nvar fb_param = {};\nfb_param.pixel_id = '6014360342904';\nfb_param.value = '0.01';\nfb_param.currency = 'GBP';\n(function(){\n  var fpw = document.createElement('script');\n  fpw.async = true;\n  fpw.src = '//connect.facebook.net/en_US/fp.js';\n  var ref = document.getElementsByTagName('script')[0];\n  ref.parentNode.insertBefore(fpw, ref);\n})();\n</script>\n<noscript><img height=\"1\" width=\"1\" alt=\"\" style=\"display:none\" src=\"https://www.facebook.com/offsite_event.php?id=6014360342904&amp;value=0.01&amp;currency=GBP\" /></noscript>"
}
{% endhighlight %}

