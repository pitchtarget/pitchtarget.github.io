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
  "client_id": "hy1923nflzvka8io4sjbt9k5jpjfp84"
}
{% endhighlight %}

#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/sign-up" -X POST \
	-H "Accept: application/json" \
	-H "Content-Type: application/json" -d '{"username":"username","password":"password","client_id":"hy1923nflzvka8io4sjbt9k5jpjfp84"}'
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
Content-Type: application/json; charset=utf-8
ETag: "30e0b4dc280dd1df48e6232e6fab77c6"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 64eea224-5f1e-43ec-bf17-9ac4a4e71d16
X-Runtime: 0.136865
Content-Length: 125
{% endhighlight %}

#### Body

{% highlight json %}
{
  "user": {
    "id": 18749,
    "username": "username",
    "fb_id": null,
    "fb_ad_accounts": [

    ]
  },
  "access_token": "i4wpzegswwad4efgcz4v9lfydxzksc0"
}
{% endhighlight %}

