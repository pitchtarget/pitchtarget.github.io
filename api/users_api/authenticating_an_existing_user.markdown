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
  "client_id": "h35r5rva6loew5lelyt2aczq7z6lm34"
}
{% endhighlight %}

#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/oauth/authorize" -X POST \
	-H "Accept: application/json" \
	-H "Content-Type: application/json" -d '{"username":"user_7","password":"password","grant_type":"password","client_id":"h35r5rva6loew5lelyt2aczq7z6lm34"}'
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
ETag: "70dff5b64768e109703a15cef91a05b9"
X-Request-Id: 871ec201-c33f-45bf-a935-25413db37d3d
X-Runtime: 0.076314
Content-Length: 50
{% endhighlight %}

#### Body

{% highlight json %}
{
  "access_token": "oo5nuhhhe4cjsa6nek9qt8x1deysi1u"
}
{% endhighlight %}

