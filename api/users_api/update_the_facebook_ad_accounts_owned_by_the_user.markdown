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
Authorization: OAuth 99coivr2cg5lhoarpgldvubgm5b7acl
Host: example.org
Content-Type: application/x-www-form-urlencoded
Cookie: 

{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/fb_ad_accounts" -X PUT \
	-H "Accept: application/json" \
	-H "Authorization: OAuth 99coivr2cg5lhoarpgldvubgm5b7acl" \
	-H "Content-Type: application/x-www-form-urlencoded" -d ''
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
ETag: "e174fedabf2275b3c648b0e93ed28b7e"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: ad3b7f3a-b215-41f7-ba01-12a395a646d4
X-Runtime: 0.022730
Content-Length: 162
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
      "id": 1605,
      "name": "My new account",
      "currency": "EUR",
      "fb_id": "638109674309"
    }
  ]
}
{% endhighlight %}

