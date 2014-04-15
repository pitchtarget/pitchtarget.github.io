---
layout: default
title: Campaigns API API
---

# Campaigns API API

## Get data for offsite pixel 6014360342904

### GET /offsitepixels/:pixel_id



### Request

{% highlight http %}
GET /offsitepixels/6014360342904 HTTP/1.1
Accept: application/json
Authorization: OAuth d9eexfox0bdnfeis3gi92fnawidcjl9
Host: example.org
Cookie: 

{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/offsitepixels/6014360342904" -X GET \
	-H "Accept: application/json" \
	-H "Authorization: OAuth d9eexfox0bdnfeis3gi92fnawidcjl9"
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
X-Request-Id: 2529c93c-a1ab-405e-9277-8f124e1eea5e
X-Runtime: 0.005879
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

