---
layout: default
title: Fb Accounts API
---

# Fb Accounts API

## List all Facebook account

### GET /fb_accounts



### Request

{% highlight http %}
GET /fb_accounts HTTP/1.1
Accept: application/json
Authorization: OAuth cljf2ervs3rf5iwb1c6x9jbiqmiaeno
Host: example.org
Cookie: 

{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/fb_accounts" -X GET \
	-H "Accept: application/json" \
	-H "Authorization: OAuth cljf2ervs3rf5iwb1c6x9jbiqmiaeno"
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
ETag: "82fbdf4663441389a83fa52d415b2339"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 6614ecaa-1ae5-49fc-8849-64b917f10ac1
X-Runtime: 0.012663
Content-Length: 365
{% endhighlight %}

#### Body

{% highlight json %}
{
  "fb_accounts": [
    {
      "id": 907,
      "token": "foo",
      "fb_ad_accounts": [
        {
          "id": 1487,
          "name": "AD Account Bar",
          "currency": "EUR",
          "fb_id": "2"
        },
        {
          "id": 1485,
          "name": "AD Account Bar",
          "currency": "EUR",
          "fb_id": "1"
        }
      ]
    },
    {
      "id": 909,
      "token": "foo",
      "fb_ad_accounts": [
        {
          "id": 1490,
          "name": "AD Account Bar",
          "currency": "EUR",
          "fb_id": "5"
        },
        {
          "id": 1488,
          "name": "AD Account Bar",
          "currency": "EUR",
          "fb_id": "4"
        }
      ]
    }
  ]
}
{% endhighlight %}

