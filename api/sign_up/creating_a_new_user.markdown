---
layout: default
title: Sign up API
---

# Sign up API

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
  "client_id": "3yzq0ce5yibj2x5nxfupkcjiw6s6id9"
}
{% endhighlight %}

#### cURL

{% highlight sh %}
curl "pitchtarget.com/sign-up" -X POST \
	-H "Accept: application/json" \
	-H "Content-Type: application/json" \
	-H "Host: example.org" -d '{"username":"username","password":"password","client_id":"3yzq0ce5yibj2x5nxfupkcjiw6s6id9"}'
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
ETag: "1f92d1614c2a76ff4838d874ef10c7fc"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: a2d8f787-f1bb-41fc-aa03-045a40fd1adc
X-Runtime: 0.148470
Content-Length: 814
{% endhighlight %}

#### Body

{% highlight json %}
{
  "user": {
    "id": 688,
    "first_name": null,
    "last_name": null,
    "name": null,
    "username": "username",
    "email": null,
    "password": "$2a$10$wdcWJtECXHGdvjsPpeTm7e0V35mN.zbVffs0srLCqpcI5DaVHWKi6",
    "picture": null,
    "facebook_uid": null,
    "facebook_first_name": null,
    "facebook_last_name": null,
    "facebook_username": null,
    "facebook_picture": null,
    "facebook_gender": null,
    "facebook_birthday": null,
    "twitter_uid": null,
    "twitter_name": null,
    "twitter_username": null,
    "twitter_picture": null,
    "foursquare_uid": null,
    "foursquare_first_name": null,
    "foursquare_last_name": null,
    "foursquare_picture": null,
    "reset_pwd_token": null,
    "password_reset_sent_at": null,
    "created_at": "2014-03-13T17:35:42.841Z",
    "updated_at": "2014-03-13T17:35:42.841Z",
    "role": null,
    "mailchimp_token": null,
    "client_id": "3yzq0ce5yibj2x5nxfupkcjiw6s6id9"
  },
  "access_token": "br1gb1ejqjca4obf6hhu2k5av9zroky"
}
{% endhighlight %}

