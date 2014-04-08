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
  "client_id": "7e4xaop9we89aiw96vjdekogyaw0pux"
}
{% endhighlight %}

#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/sign-up" -X POST \
	-H "Accept: application/json" \
	-H "Content-Type: application/json" -d '{"username":"username","password":"password","client_id":"7e4xaop9we89aiw96vjdekogyaw0pux"}'
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
ETag: "36537a65873a3adc6ff1617d4112a631"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 74049523-e47b-419f-bf35-423b4dc7826e
X-Runtime: 0.133840
Content-Length: 123
{% endhighlight %}

#### Body

{% highlight json %}
{
  "user": {
    "id": 530,
    "username": "username",
    "fb_id": null,
    "fb_ad_accounts": [

    ]
  },
  "access_token": "nrk8t1auceo2hve2fa4e4grr7ef19u7"
}
{% endhighlight %}

