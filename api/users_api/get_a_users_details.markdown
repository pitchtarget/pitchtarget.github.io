---
layout: default
title: Users API API
---

# Users API API

## Get a user&#39;s details

### GET /users/:id



### Request

{% highlight http %}
GET /users/692 HTTP/1.1
Accept: application/json
Authorization: OAuth 7xnlx24wgszrj4ls7ibr9dy7lx5lho7
Host: example.org
Cookie: 

{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/users/692" -X GET \
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
ETag: "be450429248c059de3ccdb0186a89e05"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: a8610483-d45f-4685-b1e5-3eefd044297e
X-Runtime: 0.008475
Content-Length: 138
{% endhighlight %}

#### Body

{% highlight json %}
{
  "user": {
    "id": 692,
    "username": "user_18",
    "fb_id": "19",
    "fb_ad_accounts": [
      {
        "id": 1607,
        "name": "AD Account Bar",
        "currency": "EUR",
        "fb_id": "36"
      }
    ]
  }
}
{% endhighlight %}

