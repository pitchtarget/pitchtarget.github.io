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
PUT /clients/7536 HTTP/1.1
Accept: application/json
Authorization: OAuth 1nbt9iysrk2cpznkn06ykl19b7uxiuh
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
curl "api.pitchtarget.com/clients/7536" -X PUT \
	-H "Accept: application/json" \
	-H "Authorization: OAuth 1nbt9iysrk2cpznkn06ykl19b7uxiuh" \
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
ETag: "9ca96037c5b7b0c9c36c87221a27ae0f"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: f054f01e-b5fc-4917-bc79-91cedbee9cd7
X-Runtime: 0.016581
Content-Length: 151
{% endhighlight %}

#### Body

{% highlight json %}
{
  "client": {
    "id": 7536,
    "name": "My new client",
    "redirect_uri": "http://my.example.com",
    "client_id": "aib66kr2a7qutoskfg1qiki5gfvca6q",
    "client_secret": null
  }
}
{% endhighlight %}

