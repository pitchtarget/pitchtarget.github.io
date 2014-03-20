---
layout: default
title: Fb Accounts API
---

# Fb Accounts API

## List all Facebook account

### GET /api/fb_accounts



### Request

{% highlight http %}
GET /api/fb_accounts HTTP/1.1
Accept: application/json
Authorization: OAuth cx1k3nvq1deuzprg02me60btfn8gr5j
Host: example.org
Cookie: 

{% endhighlight %}


#### cURL

{% highlight sh %}
curl "pitchtarget.com/api/fb_accounts" -X GET \
	-H "Accept: application/json" \
	-H "Authorization: OAuth cx1k3nvq1deuzprg02me60btfn8gr5j"
{% endhighlight %}

### Response

{% highlight http %}
HTTP/1.1 200 OK
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
X-UA-Compatible: chrome=1
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: POST, PUT, DELETE, GET, OPTIONS
Access-Control-Request-Method: *
Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization, Content-Disposition
Content-Type: application/json; charset=utf-8
ETag: "4bfe70cd4b15c24534a2bcb4595e17be"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: e9164a38-2d07-4662-9606-7f3160912df6
X-Runtime: 0.013425
Content-Length: 369
{% endhighlight %}

#### Body

{% highlight json %}
{
  "fb_accounts": [
    {
      "id": 932,
      "token": "foo",
      "fb_ad_accounts": [
        {
          "id": 1540,
          "name": "AD Account Bar",
          "currency": "EUR",
          "fb_id": "22"
        },
        {
          "id": 1538,
          "name": "AD Account Bar",
          "currency": "EUR",
          "fb_id": "21"
        }
      ]
    },
    {
      "id": 934,
      "token": "foo",
      "fb_ad_accounts": [
        {
          "id": 1543,
          "name": "AD Account Bar",
          "currency": "EUR",
          "fb_id": "25"
        },
        {
          "id": 1541,
          "name": "AD Account Bar",
          "currency": "EUR",
          "fb_id": "24"
        }
      ]
    }
  ]
}
{% endhighlight %}

