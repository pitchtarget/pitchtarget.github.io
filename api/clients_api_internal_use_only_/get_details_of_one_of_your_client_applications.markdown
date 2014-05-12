---
layout: default
title: Clients API (INTERNAL USE ONLY) API
---

# Clients API (INTERNAL USE ONLY) API

## Get details of one of your client applications

### GET /clients/:id



### Request

{% highlight http %}
GET /clients/373 HTTP/1.1
Accept: application/json
Authorization: OAuth 1c3h8zbyfn3jzp80r6ft8yz5bp5yiav
Host: example.org
Cookie: 

{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/clients/373" -X GET \
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
ETag: "a788db1332fe606f9340c6d519d99bfc"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 1c4ede7e-3d7b-4aff-bf1e-40ec92fb8cde
X-Runtime: 0.005192
Content-Length: 146
{% endhighlight %}

#### Body

{% highlight json %}
{
  "client": {
    "id": 373,
    "name": "first",
    "redirect_uri": "http://btask.cloudapp.net",
    "client_id": "nbufky2edcb0529c1j23u9b8vruhthh",
    "client_secret": null
  }
}
{% endhighlight %}

