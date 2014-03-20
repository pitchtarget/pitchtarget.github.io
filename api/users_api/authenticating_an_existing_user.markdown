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
  "client_id": "k7mkz8yg0iek0zoi7yl0nx0g49g5b93"
}
{% endhighlight %}

#### cURL

{% highlight sh %}
curl "pitchtarget.com/oauth/authorize" -X POST \
	-H "Accept: application/json" \
	-H "Content-Type: application/json" -d '{"username":"user_1","password":"password","grant_type":"password","client_id":"k7mkz8yg0iek0zoi7yl0nx0g49g5b93"}'
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
ETag: "9f6ed3e69fdb2cf4d831e66128c3e0a7"
X-Request-Id: 95cd6cc4-bb3d-4364-b255-ed4bb90ca009
X-Runtime: 0.093894
Content-Length: 50
{% endhighlight %}

#### Body

{% highlight json %}
{
  "access_token": "3g26e0grn641t8sttnd52x8i3w6wois"
}
{% endhighlight %}

