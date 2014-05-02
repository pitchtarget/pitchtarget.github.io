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
Authorization: OAuth r1fcu3y6sjfqauft3xgqflygjhcrbdg
Host: example.org
Cookie: 

{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/clients" -X GET \
	-H "Accept: application/json" \
	-H "Authorization: OAuth r1fcu3y6sjfqauft3xgqflygjhcrbdg"
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
ETag: "cdaac6c9b360bc354bdcbef2b4626199"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: d0108a42-435f-416f-a40e-772bbbd372bc
X-Runtime: 0.007129
Content-Length: 288
{% endhighlight %}

#### Body

{% highlight json %}
{
  "clients": [
    {
      "id": 7539,
      "name": "first",
      "redirect_uri": "http://btask.cloudapp.net",
      "client_id": "o9vne3twfngc9wax6y8rd2k1mfjzq8q",
      "client_secret": null
    },
    {
      "id": 7540,
      "name": "second",
      "redirect_uri": "http://btask.cloudapp.net",
      "client_id": "8o48f1jqe83axxd4bfve7kzkqesc00y",
      "client_secret": null
    }
  ]
}
{% endhighlight %}

