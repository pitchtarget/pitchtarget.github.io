---
layout: default
title: Clients API (INTERNAL USE ONLY) API
---

# Clients API (INTERNAL USE ONLY) API

## Update one of yours PitchTarget client applications

### PUT /clients/:id


### Parameters

Name | Description |
-----|-------------|
`name`  | The name of the new PitchTarget client application |
`redirect_uri`  | The URI of your application. This is used to validate redirect_uri when connecting to our Facebook App |

### Request

{% highlight http %}
PUT /clients/4947 HTTP/1.1
Accept: application/json
Authorization: OAuth 72vg41ropgeje89fdc22g051gh084cm
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
curl "api.pitchtarget.com/clients/4947" -X PUT \
	-H "Accept: application/json" \
	-H "Authorization: OAuth 72vg41ropgeje89fdc22g051gh084cm" \
	-H "Content-Type: application/x-www-form-urlencoded" -d 'name=My+new+client&redirect_uri=http%3A%2F%2Fmy.example.com'
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
ETag: "8bd38ee93004096604f847bb2b2328c9"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 493adadf-9e2b-4d33-a636-7a11db752611
X-Runtime: 0.010803
Content-Length: 151
{% endhighlight %}

#### Body

{% highlight json %}
{
  "client": {
    "id": 4947,
    "name": "My new client",
    "redirect_uri": "http://my.example.com",
    "client_id": "mj4rbze5cplhg36b6dq60qvqmbcwoxr",
    "client_secret": null
  }
}
{% endhighlight %}

