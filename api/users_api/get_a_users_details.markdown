---
layout: default
title: Users API API
---

# Users API API

## Get a user&#39;s details

### GET /users/:id



### Request

{% highlight http %}
GET /users/18753 HTTP/1.1
Accept: application/json
Authorization: OAuth q5rb51zoxzz3t7c7mn7es4yvh3v5mhu
Host: example.org
Cookie: 

{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/users/18753" -X GET \
	-H "Accept: application/json" \
	-H "Authorization: OAuth q5rb51zoxzz3t7c7mn7es4yvh3v5mhu"
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
ETag: "6eda3eb8254d9af59e5a63f6c8a5904a"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 79f50b23-3197-4a38-b176-5f59a567ee9a
X-Runtime: 0.008111
Content-Length: 141
{% endhighlight %}

#### Body

{% highlight json %}
{
  "user": {
    "id": 18753,
    "username": "user_42",
    "fb_id": "43",
    "fb_ad_accounts": [
      {
        "id": 29598,
        "name": "AD Account Bar",
        "currency": "EUR",
        "fb_id": "64"
      }
    ]
  }
}
{% endhighlight %}

