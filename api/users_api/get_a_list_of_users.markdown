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
Authorization: OAuth 3999612w9pzdy25kh7ant1u9bwd5sau
Host: example.org
Cookie: 
%7B%7D: 
{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/users" -X GET \
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
ETag: "3405a4b9b8648678e4eb3f2f7301cbed"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: e0ba5442-0408-4a5d-b43a-b41dc96ba919
X-Runtime: 0.013922
Content-Length: 169
{% endhighlight %}

#### Body

{% highlight json %}
{
  "users": [
    {
      "id": 506,
      "username": "user_10",
      "fb_id": "10",
      "fb_ad_accounts": [
        {
          "id": 1338,
          "name": "AD Account Bar",
          "currency": "EUR",
          "fb_id": "35"
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

