---
layout: default
title: Sign up API
---

# Sign up API

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
  "client_id": "g7kj2axpf13umghr5m9xl6aiordknff"
}
{% endhighlight %}

#### cURL

{% highlight sh %}
curl "pitchtarget.com/sign-up" -X POST \
	-H "Accept: application/json" \
	-H "Content-Type: application/json" -d '{"username":"username","password":"password","client_id":"g7kj2axpf13umghr5m9xl6aiordknff"}'
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
ETag: "d9861ea6d4dcf291ebac090547f67da2"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 1441cf93-39c1-4c41-b4ac-a24cc6bd2913
X-Runtime: 0.114259
Content-Length: 41
{% endhighlight %}

#### Body

{% highlight json %}
{
  "user": {
    "id": 814,
    "username": "username"
  }
}
{% endhighlight %}

