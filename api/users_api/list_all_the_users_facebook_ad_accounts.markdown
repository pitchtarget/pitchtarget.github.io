---
layout: default
title: Users API API
---

# Users API API

## List all the user&#39;s Facebook Ad Accounts

### GET /fb_ad_accounts



### Request

{% highlight http %}
GET /fb_ad_accounts HTTP/1.1
Accept: application/json
Authorization: OAuth pafkav9qy0pqoxczfxw04lzylnmbon4
Host: example.org
Cookie: 

{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/fb_ad_accounts" -X GET \
	-H "Accept: application/json" \
	-H "Authorization: OAuth pafkav9qy0pqoxczfxw04lzylnmbon4"
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
ETag: "477b1bfc6a10789ae6b59d85893ed4b2"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 187d58e6-b06e-4e15-a5cd-3d3691323cac
X-Runtime: 0.008904
Content-Length: 154
{% endhighlight %}

#### Body

{% highlight json %}
{
  "fb_ad_accounts": [
    {
      "id": 29603,
      "name": "AD Account Bar",
      "currency": "EUR",
      "fb_id": "69"
    },
    {
      "id": 29604,
      "name": "AD Account Bar",
      "currency": "EUR",
      "fb_id": "70"
    }
  ]
}
{% endhighlight %}

