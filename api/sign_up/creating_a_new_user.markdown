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
username (required) | Username |
password (required) | Password |
client_id (required) | Client app id |

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
  "client_id": "zpjfcgu8nqgrpwlsau30ycpl2mc9ox"
}
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
ETag: &quot;26b267132ed0c88e578c35f9cb06dd73&quot;
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 83061f5c-a061-4a3e-9221-158d89891284
X-Runtime: 0.126245
Content-Length: 813
{% endhighlight %}

#### Body

{% highlight json %}
{
  "user": {
    "id": 483,
    "first_name": null,
    "last_name": null,
    "name": null,
    "username": "username",
    "email": null,
    "password": "$2a$10$gahAP/yIpPsmBhl1YhDJfuTca3lciyvL8HO5fChF1lDKgV6PgtJ5O",
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
    "created_at": "2014-03-11T14:28:08.951Z",
    "updated_at": "2014-03-11T14:28:08.951Z",
    "role": null,
    "mailchimp_token": null,
    "client_id": "zpjfcgu8nqgrpwlsau30ycpl2mc9ox"
  },
  "access_token": "ocmclwo05ufm43xdycfc6urgu7vw96q"
}
{% endhighlight %}

