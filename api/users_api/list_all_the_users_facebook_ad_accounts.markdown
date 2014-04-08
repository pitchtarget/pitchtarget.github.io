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
Authorization: OAuth mpm42vxfv8zyx4t4vnvk79cb0nbn5gb
Host: example.org
Cookie: 

{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/fb_ad_accounts" -X GET \
	-H "Accept: application/json" \
	-H "Authorization: OAuth mpm42vxfv8zyx4t4vnvk79cb0nbn5gb"
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
ETag: "3a916e3f9f49e47443f579a04f134f6a"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 42936ce0-5a1d-439b-a287-c5ac730cfe7a
X-Runtime: 0.007922
Content-Length: 152
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
      "id": 1427,
      "name": "AD Account Bar",
      "currency": "EUR",
      "fb_id": "36"
    }
  ]
}
{% endhighlight %}

