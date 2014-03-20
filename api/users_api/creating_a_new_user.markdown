---
layout: default
title: Users API API
---

# Users API API

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
  "client_id": "q12mbfi1q4cbf0ncls4k9w6t5iysrrx"
}
{% endhighlight %}

#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/sign-up" -X POST \
	-H "Accept: application/json" \
	-H "Content-Type: application/json" -d '{"username":"username","password":"password","client_id":"q12mbfi1q4cbf0ncls4k9w6t5iysrrx"}'
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
ETag: "8da34044e8252687430ec0526d41b32c"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: d85fb1be-8a87-43e2-add3-7d07eacc813b
X-Runtime: 0.075292
Content-Length: 90
{% endhighlight %}

#### Body

{% highlight json %}
{
  "user": {
    "id": 901,
    "username": "username"
  },
  "access_token": "n7fh9tjyht468xwtmcrqa49blsnh76n"
}
{% endhighlight %}

