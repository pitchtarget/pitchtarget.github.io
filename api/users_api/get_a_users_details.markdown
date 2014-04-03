---
layout: default
title: Users API API
---

# Users API API

## Get a user&#39;s details

### GET /users/:id



### Request

{% highlight http %}
GET /users/492 HTTP/1.1
Accept: application/json
Authorization: OAuth 6kj89cqk0snfzm39t9nscig0vbsuq81
Host: example.org
Cookie: 

{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/users/492" -X GET \
	-H "Accept: application/json" \
	-H "Authorization: OAuth 6kj89cqk0snfzm39t9nscig0vbsuq81"
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
ETag: "cc9aa83fe2ba49607559061569952f0e"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 7d709d2f-45eb-4299-93bd-749ee4eebf9c
X-Runtime: 0.083073
Content-Length: 135
{% endhighlight %}

#### Body

{% highlight json %}
{
  "user": {
    "id": 492,
    "username": "user_2",
    "fb_id": "2",
    "fb_ad_accounts": [
      {
        "id": 1322,
        "name": "AD Account Bar",
        "currency": "EUR",
        "fb_id": "2"
      }
    ]
  }
}
{% endhighlight %}

