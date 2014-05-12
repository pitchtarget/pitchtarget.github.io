---
layout: default
title: Clients API (INTERNAL USE ONLY) API
---

# Clients API (INTERNAL USE ONLY) API

## List all your PitchTarget client applications

### GET /clients



### Request

{% highlight http %}
GET /clients HTTP/1.1
Accept: application/json
Authorization: OAuth 1c3h8zbyfn3jzp80r6ft8yz5bp5yiav
Host: example.org
Cookie: 

{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/clients" -X GET \
	-H "Accept: application/json" \
	-H "Authorization: OAuth 1c3h8zbyfn3jzp80r6ft8yz5bp5yiav"
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
ETag: "6778c5324194dbf0da0f529d38eaec74"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: e6d48821-c65c-4c4c-9a8c-dadda312878b
X-Runtime: 0.010369
Content-Length: 286
{% endhighlight %}

#### Body

{% highlight json %}
{
  "clients": [
    {
      "id": 366,
      "name": "first",
      "redirect_uri": "http://btask.cloudapp.net",
      "client_id": "d5a52qcdac1lftfd2kp8tosugc9i59k",
      "client_secret": null
    },
    {
      "id": 367,
      "name": "second",
      "redirect_uri": "http://btask.cloudapp.net",
      "client_id": "aar1zopbnudw8w7u5hoiujggyz9d353",
      "client_secret": null
    }
  ]
}
{% endhighlight %}

