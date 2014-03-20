---
layout: default
title: Users API API
---

# Users API API

## Authenticating an existing user

### POST /oauth/authorize


### Parameters

Name | Description |
-----|-------------|
`username` (required) | Username |
`password` (required) | Password |
`grant_type` (required) | Grant type |
`client_id` (required) | Client app id |

### Request

{% highlight http %}
POST /oauth/authorize HTTP/1.1
Accept: application/json
Content-Type: application/json
Host: example.org
Cookie: 

{% endhighlight %}

#### Body

{% highlight json %}
{
  "username": "user_1",
  "password": "password",
  "grant_type": "password",
  "client_id": "hytkzlrwf50sj4kmi8x8g7bxi5lesv3"
}
{% endhighlight %}

#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/oauth/authorize" -X POST \
	-H "Accept: application/json" \
	-H "Content-Type: application/json" -d '{"username":"user_1","password":"password","grant_type":"password","client_id":"hytkzlrwf50sj4kmi8x8g7bxi5lesv3"}'
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
Cache-Control: no-store
Content-Type: application/json
ETag: "f21b62652b8079e9c026f710ae131b04"
X-Request-Id: 2ab91498-c5c4-4410-b846-290d79ca4564
X-Runtime: 0.097446
Content-Length: 50
{% endhighlight %}

#### Body

{% highlight json %}
{
  "access_token": "2n58s4lg5mleqe8r3vy86zmvkmczobw"
}
{% endhighlight %}

