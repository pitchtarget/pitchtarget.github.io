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
  "client_id": "3bfoavv2nbsdy66geu7fgtzxbskag4z"
}
{% endhighlight %}

#### cURL

{% highlight sh %}
curl "pitchtarget.com/sign-up" -X POST \
	-H "Accept: application/json" \
	-H "Content-Type: application/json" -d '{"username":"username","password":"password","client_id":"3bfoavv2nbsdy66geu7fgtzxbskag4z"}'
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
ETag: "3c2ea1190e047f33dd8b873b58394da3"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: fd027953-d2cc-4543-8f50-33c167f2c0b9
X-Runtime: 0.113684
Content-Length: 814
{% endhighlight %}

#### Body

{% highlight json %}
{
  "user": {
    "id": 749,
    "first_name": null,
    "last_name": null,
    "name": null,
    "username": "username",
    "email": null,
    "password": "$2a$10$OuXv4zhbZmYh9sLUYADMoORSblGL44RXTumd2pOO7KF8Cc6rrhfmq",
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
    "created_at": "2014-03-14T10:30:25.094Z",
    "updated_at": "2014-03-14T10:30:25.094Z",
    "role": null,
    "mailchimp_token": null,
    "client_id": "3bfoavv2nbsdy66geu7fgtzxbskag4z"
  },
  "access_token": "haongikjcl24xqokrmhdobc7r4fydbw"
}
{% endhighlight %}

