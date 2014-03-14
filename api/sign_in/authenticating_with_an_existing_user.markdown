---
layout: default
title: Sign in API
---

# Sign in API

## Authenticating with an existing user

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
  "client_id": "plgfshsuiyjmaojsitsgir88pvsn8f5"
}
{% endhighlight %}

#### cURL

{% highlight sh %}
curl "pitchtarget.com/oauth/authorize" -X POST \
	-H "Accept: application/json" \
	-H "Content-Type: application/json" -d '{"username":"user_1","password":"password","grant_type":"password","client_id":"plgfshsuiyjmaojsitsgir88pvsn8f5"}'
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
ETag: "40e15bce34795b8abde8c3149314382c"
X-Request-Id: 95f3bc1a-8523-42ff-9666-2ce243821c3d
X-Runtime: 0.132614
Content-Length: 50
{% endhighlight %}

#### Body

{% highlight json %}
{
  "access_token": "88602j62fa6hgy1twtp6r4aw857v3fk"
}
{% endhighlight %}

