---
layout: default
title: Users API API
---

# Users API API

## Creating a new user

### POST /sign-up


### Parameters

Name | Description |
-----|-------------|
`username` (required) | Username |
`password` (required) | Password |
`client_id` (required) | Client app id |

### Request

{% highlight http %}
POST /sign-up HTTP/1.1
Accept: application/json
Content-Type: application/json
Host: example.org
Cookie: 

{% endhighlight %}

#### Body

{% highlight json %}
{
  "username": "username",
  "password": "password",
  "client_id": "odbgdd43gpklptffow5gnm848q8g4g8"
}
{% endhighlight %}

#### cURL

{% highlight sh %}
curl "pitchtarget.com/sign-up" -X POST \
	-H "Accept: application/json" \
	-H "Content-Type: application/json" -d '{"username":"username","password":"password","client_id":"odbgdd43gpklptffow5gnm848q8g4g8"}'
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
ETag: "d3479f40ae07035d293a8144a1b38f5a"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 86ec3e2d-e35f-4420-8b8c-4e3e8f0baedf
X-Runtime: 0.075360
Content-Length: 90
{% endhighlight %}

#### Body

{% highlight json %}
{
  "user": {
    "id": 902,
    "username": "username"
  },
  "access_token": "2mkuo8yqml0ygfaglghxvi48k4cu2s8"
}
{% endhighlight %}

