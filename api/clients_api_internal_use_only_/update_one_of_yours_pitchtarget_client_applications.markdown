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
PUT /clients/379 HTTP/1.1
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
curl "api.pitchtarget.com/clients/379" -X PUT \
	-H "Accept: application/json" \
	-H "Authorization: OAuth 1c3h8zbyfn3jzp80r6ft8yz5bp5yiav" \
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
ETag: "8ddb0f028a2182c761b13542e77b8efe"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 907b8291-35d4-4061-a80c-2d0d41d91f4e
X-Runtime: 0.008471
Content-Length: 150
{% endhighlight %}

#### Body

{% highlight json %}
{
  "client": {
    "id": 379,
    "name": "My new client",
    "redirect_uri": "http://my.example.com",
    "client_id": "982rt4vnu1pms5uwivlm9wq60db3tgc",
    "client_secret": null
  }
}
{% endhighlight %}

