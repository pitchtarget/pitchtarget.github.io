---
layout: default
title: Clients API (INTERNAL USE ONLY) API
---

# Clients API (INTERNAL USE ONLY) API

## Regenerate your PitchTarget client application secret

### PUT /clients/:id/reset_secret



### Request

{% highlight http %}
PUT /clients/7549/reset_secret HTTP/1.1
Accept: application/json
Authorization: OAuth ouxwwalhn2gobtj6pl9j6608nq32v1t
Host: example.org
Content-Type: application/x-www-form-urlencoded
Cookie: 

{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/clients/7549/reset_secret" -X PUT \
	-H "Accept: application/json" \
	-H "Authorization: OAuth ouxwwalhn2gobtj6pl9j6608nq32v1t" \
	-H "Content-Type: application/x-www-form-urlencoded" -d ''
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
ETag: "fcded12e67bb03ef26e1d54717a19480"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: ae2df65f-a742-45ad-b953-def3ef77974d
X-Runtime: 0.133953
Content-Length: 176
{% endhighlight %}

#### Body

{% highlight json %}
{
  "client": {
    "id": 7549,
    "name": "first",
    "redirect_uri": "http://btask.cloudapp.net",
    "client_id": "8wiszvsgzhzujb1bbwbdohgma8yb19a",
    "client_secret": "acjsn07mug001mgik235604wr6e3k0r"
  }
}
{% endhighlight %}

