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
  "username": "user_10",
  "password": "password",
  "grant_type": "password",
  "client_id": "3yzsdiwwh570pz8zycmctcz0cnkx8bw"
}
{% endhighlight %}

#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/oauth/authorize" -X POST \
	-H "Accept: application/json" \
	-H "Content-Type: application/json" -d '{"username":"user_10","password":"password","grant_type":"password","client_id":"3yzsdiwwh570pz8zycmctcz0cnkx8bw"}'
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
ETag: "2600c68aa0f78b32547e82a264716431"
X-Request-Id: b32b7414-4dd2-4178-a435-4c4b5b4e1cac
X-Runtime: 0.080732
Content-Length: 50
{% endhighlight %}

#### Body

{% highlight json %}
{
  "access_token": "mr16x0xtvk5sv1k8152pwbft7xq3yqf"
}
{% endhighlight %}

