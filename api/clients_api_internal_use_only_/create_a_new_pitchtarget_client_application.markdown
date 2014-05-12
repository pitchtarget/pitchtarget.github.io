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
Authorization: OAuth 1c3h8zbyfn3jzp80r6ft8yz5bp5yiav
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
	-H "Authorization: OAuth 1c3h8zbyfn3jzp80r6ft8yz5bp5yiav" \
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
ETag: "88c3ff1d32bcba9717da4d7f9ac35cdd"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: e8156230-61ce-4de9-a12b-95a5d4a0f0ca
X-Runtime: 0.138550
Content-Length: 179
{% endhighlight %}

#### Body

{% highlight json %}
{
  "client": {
    "id": 372,
    "name": "My new client",
    "redirect_uri": "http://my.example.com",
    "client_id": "6e3ppklhodo1dgintlwavxjzt4xq3cr",
    "client_secret": "cwhyrcvvyrcsbtkxun7ilw0yzjzhu6o"
  }
}
{% endhighlight %}

