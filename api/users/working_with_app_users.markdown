---
layout: default_with_nav
title: Working with your App Users
section: Users API
nav: nav_users_api.md
---

## Working with your app users
In Pitchtarget, each user is direcly mapped to a Facebook user. Such users are connected to one or more Facebook Ad Accounts.

An Ad Account contains all the objects related to creating and managing a marketing campaign, including the account's billing currency and time zone. Ad Accounts can belong to one or more users and each user may have one or more Advertising Accounts.

### List Facebook Accounts for the current user

#### `GET /fb_accounts`
Returns the Facebook Accounts.

#### Parameters
This request does not accept parameters.

#### Request

{% highlight http %}
GET /fb_accounts HTTP/1.1
Accept: application/json
Authorization: OAuth cljf2ervs3rf5iwb1c6x9jbiqmiaeno
Host: example.org
Cookie:

{% endhighlight %}


#### cURL

{% highlight sh %}
curl "{{site.base_url}}/fb_accounts" -X GET \
  -H "Accept: application/json" \
  -H "Authorization: OAuth cljf2ervs3rf5iwb1c6x9jbiqmiaeno"
{% endhighlight %}

#### Response

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

### Obtain details for a single User

#### `GET /fb_accounts/:id/ad_accounts`
Returns every Advertising Account that the current user can access.

#### Parameters
This request does not accept parameters.

#### Request

{% highlight http %}
GET /fb_accounts/913/ad_accounts HTTP/1.1
Accept: application/json
Authorization: OAuth cljf2ervs3rf5iwb1c6x9jbiqmiaeno
Host: example.org
Cookie:

{% endhighlight %}


#### cURL

{% highlight sh %}
curl "{{site.base_url}}/fb_accounts/913/ad_accounts" -X GET \
  -H "Accept: application/json" \
  -H "Authorization: OAuth cljf2ervs3rf5iwb1c6x9jbiqmiaeno"
{% endhighlight %}

#### Response

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
ETag: "c8de67bd5c1302f36f3aeac00a469039"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: c0d9f926-797e-48cf-8ecd-8a6305cc6290
X-Runtime: 0.008316
Content-Length: 183
{% endhighlight %}

#### Body

{% highlight json %}
{
  "ad_accounts": [
    {
      "id": 1494,
      "fb_id": "10",
      "name": "AD Account Bar",
      "currency": "EUR",
      "created_at": "2014-03-20T17:39:11.744Z",
      "updated_at": "2014-03-20T17:39:11.744Z",
      "fb_account_id": 913
    }
  ]
}
{% endhighlight %}

