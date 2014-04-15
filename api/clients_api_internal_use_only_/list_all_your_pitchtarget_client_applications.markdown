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
Authorization: OAuth siuothjvz7ld7wu1g0c2dypqcy2e7o3
Host: example.org
Cookie: 

{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/clients" -X GET \
	-H "Accept: application/json" \
	-H "Authorization: OAuth siuothjvz7ld7wu1g0c2dypqcy2e7o3"
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
ETag: "a0b377212166b58cbf6b69455fa814b4"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 7ae58e85-d993-4edf-826f-a2011cb8a988
X-Runtime: 0.009911
Content-Length: 288
{% endhighlight %}

#### Body

{% highlight json %}
{
  "clients": [
    {
      "id": 4944,
      "name": "first",
      "redirect_uri": "http://btask.cloudapp.net",
      "client_id": "nedlha6brl8job8wwmno69vd28nuq2q",
      "client_secret": null
    },
    {
      "id": 4945,
      "name": "second",
      "redirect_uri": "http://btask.cloudapp.net",
      "client_id": "nohqgsbb6ysqcug1xeee8dluqsv958z",
      "client_secret": null
    }
  ]
}
{% endhighlight %}

