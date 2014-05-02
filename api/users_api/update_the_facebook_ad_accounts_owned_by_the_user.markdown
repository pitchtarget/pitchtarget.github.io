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
Authorization: OAuth e0yfhcn450fn4fynhlp2tzrurewwwuw
Host: example.org
Content-Type: application/x-www-form-urlencoded
Cookie: 

{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/fb_ad_accounts" -X PUT \
	-H "Accept: application/json" \
	-H "Authorization: OAuth e0yfhcn450fn4fynhlp2tzrurewwwuw" \
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
ETag: "b2829984a07ddaecd68244c6bf153d2e"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 151d1f8e-f807-411c-9656-39e6fa046548
X-Runtime: 0.025283
Content-Length: 164
{% endhighlight %}

#### Body

{% highlight json %}
{
  "fb_ad_accounts": [
    {
      "id": 45344,
      "name": "AD Account Bar",
      "currency": "EUR",
      "fb_id": "16"
    },
    {
      "id": 45345,
      "name": "My new account",
      "currency": "EUR",
      "fb_id": "638109674309"
    }
  ]
}
{% endhighlight %}

