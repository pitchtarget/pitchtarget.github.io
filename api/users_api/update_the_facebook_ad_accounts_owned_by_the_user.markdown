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
Authorization: OAuth mpm42vxfv8zyx4t4vnvk79cb0nbn5gb
Host: example.org
Content-Type: application/x-www-form-urlencoded
Cookie: 

{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/fb_ad_accounts" -X PUT \
	-H "Accept: application/json" \
	-H "Authorization: OAuth mpm42vxfv8zyx4t4vnvk79cb0nbn5gb" \
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
ETag: "032b691847a903f7ae524c2285ca3fa4"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: aea6d89f-e7e9-49a4-b96a-4ac25a0d28c2
X-Runtime: 0.011467
Content-Length: 162
{% endhighlight %}

#### Body

{% highlight json %}
{
  "fb_ad_accounts": [
    {
      "id": 1426,
      "name": "AD Account Bar",
      "currency": "EUR",
      "fb_id": "35"
    },
    {
      "id": 1428,
      "name": "My new account",
      "currency": "EUR",
      "fb_id": "638109674309"
    }
  ]
}
{% endhighlight %}

