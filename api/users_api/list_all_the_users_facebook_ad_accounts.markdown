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
Authorization: OAuth qz515kidmcjcm2xcrz2wxbb5okua0pb
Host: example.org
Cookie: 

{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/fb_ad_accounts" -X GET \
	-H "Accept: application/json" \
	-H "Authorization: OAuth qz515kidmcjcm2xcrz2wxbb5okua0pb"
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
ETag: "237934affd731319d031c0c0404539aa"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 191168bf-a7b5-40e9-81b2-706ee916d883
X-Runtime: 0.006514
Content-Length: 150
{% endhighlight %}

#### Body

{% highlight json %}
{
  "fb_ad_accounts": [
    {
      "id": 1308,
      "name": "AD Account Bar",
      "currency": "EUR",
      "fb_id": "6"
    },
    {
      "id": 1310,
      "name": "AD Account Bar",
      "currency": "EUR",
      "fb_id": "7"
    }
  ]
}
{% endhighlight %}

