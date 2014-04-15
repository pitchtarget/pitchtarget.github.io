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
Authorization: OAuth cy80i6j8dk0uqsdczhqdq43l7n045hx
Host: example.org
Cookie: 
%7B%7D: 
{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/users" -X GET \
	-H "Accept: application/json" \
	-H "Authorization: OAuth cy80i6j8dk0uqsdczhqdq43l7n045hx"
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
ETag: "6e063c17ca21426066ed68de39c38b16"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 1b22bc92-2584-4cb5-87ab-08d1a44ef76c
X-Runtime: 0.013381
Content-Length: 172
{% endhighlight %}

#### Body

{% highlight json %}
{
  "users": [
    {
      "id": 18751,
      "username": "user_40",
      "fb_id": "41",
      "fb_ad_accounts": [
        {
          "id": 29596,
          "name": "AD Account Bar",
          "currency": "EUR",
          "fb_id": "62"
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

