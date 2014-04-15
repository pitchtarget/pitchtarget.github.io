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
  "username": "user_37",
  "password": "password",
  "grant_type": "password",
  "client_id": "86in02mzugcc1d3up3gb4bryttqk3j4"
}
{% endhighlight %}

#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/oauth/authorize" -X POST \
	-H "Accept: application/json" \
	-H "Content-Type: application/json" -d '{"username":"user_37","password":"password","grant_type":"password","client_id":"86in02mzugcc1d3up3gb4bryttqk3j4"}'
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
ETag: "d7233d1d654f267460de64f90a9bec53"
X-Request-Id: b2fd2be7-d9fc-4065-9524-9fa294b0d852
X-Runtime: 0.088874
Content-Length: 50
{% endhighlight %}

#### Body

{% highlight json %}
{
  "access_token": "qikn4vepmog9qjtdl5sx176p6kcspx0"
}
{% endhighlight %}

