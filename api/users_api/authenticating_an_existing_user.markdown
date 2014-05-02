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
  "username": "user_22",
  "password": "password",
  "grant_type": "password",
  "client_id": "g3g2s8yz34ukz4gk0re2fpqj62estyq"
}
{% endhighlight %}

#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/oauth/authorize" -X POST \
	-H "Accept: application/json" \
	-H "Content-Type: application/json" -d '{"username":"user_22","password":"password","grant_type":"password","client_id":"g3g2s8yz34ukz4gk0re2fpqj62estyq"}'
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
Cache-Control: no-store
Content-Type: application/json
ETag: "042bceaa14f3863673beb027939071aa"
X-Request-Id: 2d031065-d193-4b20-ae82-b3f778d8b740
X-Runtime: 0.144738
Content-Length: 50
{% endhighlight %}

#### Body

{% highlight json %}
{
  "access_token": "2ofokdve65meojnrhx2xi3r7mjim6bg"
}
{% endhighlight %}

