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
Authorization: OAuth ludmcqr1nc9qrczdh9n7cwn69n2hmvz
Host: example.org
Cookie: 
%7B%7D: 
{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/users" -X GET \
	-H "Accept: application/json" \
	-H "Authorization: OAuth ludmcqr1nc9qrczdh9n7cwn69n2hmvz"
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
ETag: "9c28dfe29562d3db259d2524ce626283"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: a44bba29-637a-4e47-a87b-82f450f3426b
X-Runtime: 0.009603
Content-Length: 172
{% endhighlight %}

#### Body

{% highlight json %}
{
  "users": [
    {
      "id": 28371,
      "username": "user_30",
      "fb_id": "31",
      "fb_ad_accounts": [
        {
          "id": 45366,
          "name": "AD Account Bar",
          "currency": "EUR",
          "fb_id": "37"
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

