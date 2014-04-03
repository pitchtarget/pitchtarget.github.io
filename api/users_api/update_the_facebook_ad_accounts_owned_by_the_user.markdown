---
layout: default
title: Users API API
---

# Users API API

## Update the Facebook Ad Accounts owned by the user

### PUT /fb_ad_accounts



### Request

{% highlight http %}
PUT /fb_ad_accounts HTTP/1.1
Accept: application/json
Authorization: OAuth qz515kidmcjcm2xcrz2wxbb5okua0pb
Host: example.org
Content-Type: application/x-www-form-urlencoded
Cookie: 

{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/fb_ad_accounts" -X PUT \
	-H "Accept: application/json" \
	-H "Authorization: OAuth qz515kidmcjcm2xcrz2wxbb5okua0pb" \
	-H "Content-Type: application/x-www-form-urlencoded" -d ''
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
ETag: "0d9e4357b0e3dd80491ef66c10c5a8f9"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 24f465a3-33a8-46e9-b205-d12de5cdc3f2
X-Runtime: 0.014114
Content-Length: 161
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
      "id": 1309,
      "name": "My new account",
      "currency": "EUR",
      "fb_id": "638109674309"
    }
  ]
}
{% endhighlight %}

