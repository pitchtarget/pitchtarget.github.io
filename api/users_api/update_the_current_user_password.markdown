---
layout: default
title: Users API API
---

# Users API API

## Update the current user password

### PUT /users


### Parameters

Name | Description |
-----|-------------|
`password`  | The new password for the user |

### Request

{% highlight http %}
PUT /users HTTP/1.1
Accept: application/json
Authorization: OAuth 7xnlx24wgszrj4ls7ibr9dy7lx5lho7
Host: example.org
Content-Type: application/x-www-form-urlencoded
Cookie: 

{% endhighlight %}

#### Body

{% highlight text %}
password=secretpassword
{% endhighlight %}

#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/users" -X PUT \
	-H "Accept: application/json" \
	-H "Authorization: OAuth 7xnlx24wgszrj4ls7ibr9dy7lx5lho7" \
	-H "Content-Type: application/x-www-form-urlencoded" -d 'password=secretpassword'
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
ETag: "ba783b84bfe21afa2b5d9e3480a582f4"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 38e9b2c7-40f3-40f0-9a94-0fd202434489
X-Runtime: 0.072144
Content-Length: 138
{% endhighlight %}

#### Body

{% highlight json %}
{
  "user": {
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
}
{% endhighlight %}

