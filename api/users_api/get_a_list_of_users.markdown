---
layout: default
title: Users API API
---

# Users API API

## Get a list of users

### GET /users


### Parameters

Name | Description |
-----|-------------|
`page`  | Page number (each page contains 10 users) |

### Request

{% highlight http %}
GET /users HTTP/1.1
Accept: application/json
Authorization: OAuth cthfqzhvymz9m7q11a3bsa2p0mnxyaz
Host: example.org
Cookie: 
%7B%7D: 
{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/users" -X GET \
	-H "Accept: application/json" \
	-H "Authorization: OAuth cthfqzhvymz9m7q11a3bsa2p0mnxyaz"
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
ETag: "95bc2b6dc53ab4a78058448912e8678d"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 5c1e7676-f243-488e-a777-a5189786f7bb
X-Runtime: 0.052007
Content-Length: 166
{% endhighlight %}

#### Body

{% highlight json %}
{
  "users": [
    {
      "id": 522,
      "username": "user_1",
      "fb_id": "1",
      "fb_ad_accounts": [
        {
          "id": 1392,
          "name": "AD Account Bar",
          "currency": "EUR",
          "fb_id": "1"
        }
      ]
    }
  ],
  "meta": {
    "page": 1,
    "total": 1
  }
}
{% endhighlight %}

