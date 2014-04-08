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
  "username": "user_7",
  "password": "password",
  "grant_type": "password",
  "client_id": "3d0rhizeusacd3nconbo6os6r2hv1i1"
}
{% endhighlight %}

#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/oauth/authorize" -X POST \
	-H "Accept: application/json" \
	-H "Content-Type: application/json" -d '{"username":"user_7","password":"password","grant_type":"password","client_id":"3d0rhizeusacd3nconbo6os6r2hv1i1"}'
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
ETag: "c099bb7c7fa479cba25e0863a59a8bac"
X-Request-Id: 7ef0d9e9-726c-4974-9d0e-755068577f0b
X-Runtime: 0.132385
Content-Length: 50
{% endhighlight %}

#### Body

{% highlight json %}
{
  "access_token": "sj56uxll27syir0vup4xi4r0op8pk1q"
}
{% endhighlight %}

