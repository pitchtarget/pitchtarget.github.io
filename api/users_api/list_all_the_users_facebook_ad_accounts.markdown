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
Authorization: OAuth 99coivr2cg5lhoarpgldvubgm5b7acl
Host: example.org
Cookie: 

{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/fb_ad_accounts" -X GET \
	-H "Accept: application/json" \
	-H "Authorization: OAuth 99coivr2cg5lhoarpgldvubgm5b7acl"
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
ETag: "9b1b03f4e43b98c829724e2e68018bc5"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 54cda166-349c-4509-b120-f01f4bd26540
X-Runtime: 0.010527
Content-Length: 152
{% endhighlight %}

#### Body

{% highlight json %}
{
  "fb_ad_accounts": [
    {
      "id": 1603,
      "name": "AD Account Bar",
      "currency": "EUR",
      "fb_id": "33"
    },
    {
      "id": 1604,
      "name": "AD Account Bar",
      "currency": "EUR",
      "fb_id": "34"
    }
  ]
}
{% endhighlight %}

