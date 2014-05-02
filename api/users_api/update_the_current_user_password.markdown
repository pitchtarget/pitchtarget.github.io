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
Authorization: OAuth 16a3ex4f0zggwhnwnh07n46orjshxww
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
	-H "Authorization: OAuth 16a3ex4f0zggwhnwnh07n46orjshxww" \
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
ETag: "c54458b06a96d155f38ba9b202a923d9"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: dfb15229-9e7d-459a-b2ad-0222f8ab42ea
X-Runtime: 0.075588
Content-Length: 141
{% endhighlight %}

#### Body

{% highlight json %}
{
  "user": {
    "id": 28368,
    "username": "user_27",
    "fb_id": "28",
    "fb_ad_accounts": [
      {
        "id": 45363,
        "name": "AD Account Bar",
        "currency": "EUR",
        "fb_id": "34"
      }
    ]
  }
}
{% endhighlight %}

