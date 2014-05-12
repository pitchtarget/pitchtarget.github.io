---
layout: default
title: Audience API API
---

# Audience API API

## Create a new website custom audience

### POST /custom_audiences


### Parameters

Name | Description |
-----|-------------|
`subtype` (required) | The subtype for the custom audience |
`fb_ad_account_id` (required) | Facebook ID of the Ad Account to use |
`name` (required) | The name for the website custom audience |
`retention_days` (required) | Number of days to keep the user in this cluster (between 1 and 180 days) |
`rule` (required) | A JSON object representing audience rules to be applied on the referrer URL |

### Request

{% highlight http %}
POST /custom_audiences HTTP/1.1
Accept: application/json
Authorization: OAuth hnojm1bmyoidsp82a86cv8as9d1i0b1
Content-Type: application/json
Host: example.org
Cookie: 

{% endhighlight %}

#### Body

{% highlight json %}
{
  "subtype": "WEBSITE",
  "fb_ad_account_id": "28",
  "name": "Users that put items in the cart",
  "retention_days": 15,
  "rule": "{\"url\":{\"i_contains\":\"cart\"}}"
}
{% endhighlight %}

#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/custom_audiences" -X POST \
	-H "Accept: application/json" \
	-H "Authorization: OAuth hnojm1bmyoidsp82a86cv8as9d1i0b1" \
	-H "Content-Type: application/json" -d '{"subtype":"WEBSITE","fb_ad_account_id":"28","name":"Users that put items in the cart","retention_days":15,"rule":"{\"url\":{\"i_contains\":\"cart\"}}"}'
{% endhighlight %}

### Response

{% highlight http %}
HTTP/1.1 201 Created
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: POST, PUT, DELETE, GET, OPTIONS
Access-Control-Request-Method: *
Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization, Content-Disposition
Content-Type: application/json; charset=utf-8
ETag: "b9dc15f4281ef6a523faa641be43c8eb"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 8efe41c6-8752-407f-821f-b89ddf3b0e91
X-Runtime: 0.014799
Content-Length: 183
{% endhighlight %}

#### Body

{% highlight json %}
{
  "fb_custom_audience": {
    "id": 90,
    "name": "Users that put items in the cart",
    "fb_id": "6006183285954",
    "subtype": "WEBSITE",
    "rule": "{\"url\":{\"i_contains\":\"cart\"}}",
    "retention_days": 15
  }
}
{% endhighlight %}

