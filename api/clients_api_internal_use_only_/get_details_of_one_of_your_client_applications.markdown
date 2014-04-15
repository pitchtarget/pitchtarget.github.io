---
layout: default
title: Clients API (INTERNAL USE ONLY) API
---

# Clients API (INTERNAL USE ONLY) API

## Get details of one of your client applications

### GET /clients/:id



### Request

{% highlight http %}
GET /clients/4954 HTTP/1.1
Accept: application/json
Authorization: OAuth qov6dkppqrcwde9j5r955tc3idrputp
Host: example.org
Cookie: 

{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/clients/4954" -X GET \
	-H "Accept: application/json" \
	-H "Authorization: OAuth qov6dkppqrcwde9j5r955tc3idrputp"
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
ETag: "836adb757a4f927b79e15a97dd3c2081"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 150aba04-b9cb-404e-a02c-aa55dfb60314
X-Runtime: 0.005092
Content-Length: 147
{% endhighlight %}

#### Body

{% highlight json %}
{
  "client": {
    "id": 4954,
    "name": "first",
    "redirect_uri": "http://btask.cloudapp.net",
    "client_id": "e8x3x25eabj8m3slo3cto824hpgtxi9",
    "client_secret": null
  }
}
{% endhighlight %}

