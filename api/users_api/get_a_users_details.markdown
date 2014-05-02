---
layout: default
title: Users API API
---

# Users API API

## Get a user&#39;s details

### GET /users/:id



### Request

{% highlight http %}
GET /users/28370 HTTP/1.1
Accept: application/json
Authorization: OAuth bzos0mm5mtd12nym43812vjajumwdzt
Host: example.org
Cookie: 

{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/users/28370" -X GET \
	-H "Accept: application/json" \
	-H "Authorization: OAuth bzos0mm5mtd12nym43812vjajumwdzt"
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
ETag: "dd3dfe4bc9ddee5851cde673babcf46e"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: d326d2b2-0cf9-4dd8-bea7-d4b209c25ee8
X-Runtime: 0.008385
Content-Length: 141
{% endhighlight %}

#### Body

{% highlight json %}
{
  "user": {
    "id": 28370,
    "username": "user_29",
    "fb_id": "30",
    "fb_ad_accounts": [
      {
        "id": 45365,
        "name": "AD Account Bar",
        "currency": "EUR",
        "fb_id": "36"
      }
    ]
  }
}
{% endhighlight %}

