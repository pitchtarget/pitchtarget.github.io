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
  "username": "user_2",
  "password": "password",
  "grant_type": "password",
  "client_id": "2bcdh81pru64o1abs5hvx0vybc6f011"
}
{% endhighlight %}

#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/oauth/authorize" -X POST \
	-H "Accept: application/json" \
	-H "Content-Type: application/json" -d '{"username":"user_2","password":"password","grant_type":"password","client_id":"2bcdh81pru64o1abs5hvx0vybc6f011"}'
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
ETag: "8ede08bbfabac1e5725a26ece5e2561b"
X-Request-Id: ed1f3260-f726-478b-9b52-f254b08b0a4e
X-Runtime: 0.082199
Content-Length: 50
{% endhighlight %}

#### Body

{% highlight json %}
{
  "access_token": "qikbd2kahzckrkrkxppq845111tvdhy"
}
{% endhighlight %}

