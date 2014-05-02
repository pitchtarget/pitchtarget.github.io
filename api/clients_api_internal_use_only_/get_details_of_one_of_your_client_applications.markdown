---
layout: default
title: Clients API (INTERNAL USE ONLY) API
---

# Clients API (INTERNAL USE ONLY) API

## Get details of one of your client applications

### GET /clients/:id



### Request

{% highlight http %}
GET /clients/7546 HTTP/1.1
Accept: application/json
Authorization: OAuth o3as4zl39vgieiilabw4069ip3oigaj
Host: example.org
Cookie: 

{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/clients/7546" -X GET \
	-H "Accept: application/json" \
	-H "Authorization: OAuth o3as4zl39vgieiilabw4069ip3oigaj"
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
ETag: "023e2e52cb9050bb1de439d3d2bedf17"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 9ee36eb8-bcdb-41ae-a5c1-d227131fcfbd
X-Runtime: 0.004979
Content-Length: 147
{% endhighlight %}

#### Body

{% highlight json %}
{
  "client": {
    "id": 7546,
    "name": "first",
    "redirect_uri": "http://btask.cloudapp.net",
    "client_id": "t3tu3xls7k6tthgkntfl3mfoneam65n",
    "client_secret": null
  }
}
{% endhighlight %}

