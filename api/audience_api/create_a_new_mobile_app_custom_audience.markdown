---
layout: default
title: Audience API API
---

# Audience API API

## Create a new mobile app custom audience

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
  "subtype": "APP",
  "fb_ad_account_id": "21",
  "name": "Example mobile app custom audience",
  "retention_days": 14,
  "rule": "{\"_application\":\"55064006\",\"_eventName\":\"fb_mobile_purchase\"}"
}
{% endhighlight %}

#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/custom_audiences" -X POST \
	-H "Accept: application/json" \
	-H "Authorization: OAuth hnojm1bmyoidsp82a86cv8as9d1i0b1" \
	-H "Content-Type: application/json" -d '{"subtype":"APP","fb_ad_account_id":"21","name":"Example mobile app custom audience","retention_days":14,"rule":"{\"_application\":\"55064006\",\"_eventName\":\"fb_mobile_purchase\"}"}'
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
ETag: "9d81f200567db0b7566cf7d8abef2c2b"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 8b0142b1-f806-4971-ba37-abc17402ef9d
X-Runtime: 0.035266
Content-Length: 116
{% endhighlight %}

#### Body

{% highlight json %}
{
  "fb_custom_audience": {
    "id": 84,
    "name": "Example mobile app custom audience",
    "fb_id": "6006183285954",
    "subtype": "APP"
  }
}
{% endhighlight %}

