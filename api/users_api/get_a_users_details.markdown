---
layout: default
title: Users API API
---

# Users API API

## Get a user&#39;s details

### GET /users/:id



### Request

{% highlight http %}
GET /users/507 HTTP/1.1
Accept: application/json
Authorization: OAuth 3999612w9pzdy25kh7ant1u9bwd5sau
Host: example.org
Cookie: 

{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/users/507" -X GET \
	-H "Accept: application/json" \
	-H "Authorization: OAuth 3999612w9pzdy25kh7ant1u9bwd5sau"
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
ETag: "f88c947e42a4b0db2e14272a39bfa4c0"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 7c927605-4a23-47a9-9182-c1503f6c332f
X-Runtime: 0.009292
Content-Length: 138
{% endhighlight %}

#### Body

{% highlight json %}
{
  "user": {
    "id": 507,
    "username": "user_11",
    "fb_id": "11",
    "fb_ad_accounts": [
      {
        "id": 1339,
        "name": "AD Account Bar",
        "currency": "EUR",
        "fb_id": "36"
      }
    ]
  }
}
{% endhighlight %}

