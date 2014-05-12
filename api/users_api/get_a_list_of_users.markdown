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
Authorization: OAuth 7xnlx24wgszrj4ls7ibr9dy7lx5lho7
Host: example.org
Cookie: 
%7B%7D: 
{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/users" -X GET \
	-H "Accept: application/json" \
	-H "Authorization: OAuth 7xnlx24wgszrj4ls7ibr9dy7lx5lho7"
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
ETag: "4473b5c6dfa815835f0d929b815888c4"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: ebaa0442-6c95-447a-973a-0ea30e7adffb
X-Runtime: 0.010510
Content-Length: 169
{% endhighlight %}

#### Body

{% highlight json %}
{
  "users": [
    {
      "id": 691,
      "username": "user_17",
      "fb_id": "18",
      "fb_ad_accounts": [
        {
          "id": 1606,
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

