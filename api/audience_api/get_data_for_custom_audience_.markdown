---
layout: default
title: Audience API API
---

# Audience API API

## Get data for custom audience 465257143575221

### GET /custom_audiences/:fb_id



### Request

{% highlight http %}
GET /custom_audiences/465257143575221 HTTP/1.1
Accept: application/json
Authorization: OAuth hnojm1bmyoidsp82a86cv8as9d1i0b1
Host: example.org
Cookie: 

{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/custom_audiences/465257143575221" -X GET \
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
ETag: "2d356f074b86e038072cec19505aabb8"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: b1db663b-639a-4c3e-94dd-ff48d303ccd1
X-Runtime: 0.009825
Content-Length: 202
{% endhighlight %}

#### Body

{% highlight json %}
{
  "fb_custom_audience": {
    "id": 91,
    "name": "Spending users",
    "fb_id": "465257143575221",
    "subtype": "CUSTOM",
    "description": "Users who bought something on my site",
    "opt_out_link": "http://www.myshop.com/opt_out"
  }
}
{% endhighlight %}

