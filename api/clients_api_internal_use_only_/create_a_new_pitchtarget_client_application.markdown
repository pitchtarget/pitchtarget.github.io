---
layout: default
title: Clients API (INTERNAL USE ONLY) API
---

# Clients API (INTERNAL USE ONLY) API

## Create a new PitchTarget client application

### POST /clients


### Parameters

Name | Description |
-----|-------------|
`name` (required) | The name of the new PitchTarget client application |
`redirect_uri` (required) | The URI of your application. This is used to validate redirect_uri when connecting to our Facebook App |

### Request

{% highlight http %}
POST /clients HTTP/1.1
Accept: application/json
Authorization: OAuth luo1m43fm6cmzqpt0eg1fwpjc622g8s
Host: example.org
Content-Type: application/x-www-form-urlencoded
Cookie: 

{% endhighlight %}

#### Body

{% highlight text %}
name=My+new+client&redirect_uri=http%3A%2F%2Fmy.example.com
{% endhighlight %}

#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/clients" -X POST \
	-H "Accept: application/json" \
	-H "Authorization: OAuth luo1m43fm6cmzqpt0eg1fwpjc622g8s" \
	-H "Content-Type: application/x-www-form-urlencoded" -d 'name=My+new+client&redirect_uri=http%3A%2F%2Fmy.example.com'
{% endhighlight %}

### Response

{% highlight http %}
HTTP/1.1 201 Created
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: POST, PUT, DELETE, GET, OPTIONS
Access-Control-Request-Method: *
Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization, Content-Disposition
Content-Type: application/json; charset=utf-8
ETag: "3c01d7d6f129b4cf340c98343d591005"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 8aba1b4a-221c-426a-9ca6-8f3d519879e8
X-Runtime: 0.138547
Content-Length: 180
{% endhighlight %}

#### Body

{% highlight json %}
{
  "client": {
    "id": 4953,
    "name": "My new client",
    "redirect_uri": "http://my.example.com",
    "client_id": "4jsks4tjb325v43ri1yj1kxf9b39wrj",
    "client_secret": "1yd8jhlq83haqtmwc8muv2sjd4xfbyo"
  }
}
{% endhighlight %}

