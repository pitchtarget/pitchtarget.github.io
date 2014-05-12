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
  "client_id": "gmqz9cc1erbefpjegntvdfw3vyw31iy"
}
{% endhighlight %}

#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/sign-up" -X POST \
	-H "Accept: application/json" \
	-H "Content-Type: application/json" -d '{"username":"username","password":"password","client_id":"gmqz9cc1erbefpjegntvdfw3vyw31iy"}'
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
ETag: "1eb616e823f80dfada13acc9dff72f36"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: db731687-b7db-47dd-913c-574837eb47c9
X-Runtime: 0.080647
Content-Length: 123
{% endhighlight %}

#### Body

{% highlight json %}
{
  "user": {
    "id": 675,
    "username": "username",
    "fb_id": null,
    "fb_ad_accounts": [

    ]
  },
  "access_token": "pe009czkx7sgqwyyd4b0j71pmb1m1y1"
}
{% endhighlight %}

