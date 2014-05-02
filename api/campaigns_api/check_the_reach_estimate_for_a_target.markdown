---
layout: default
title: Campaigns API API
---

# Campaigns API API

## Check the reach estimate for a target

### GET /reach_estimate


### Parameters

Name | Description |
-----|-------------|
`fb_ad_account_id` (required) | Facebook ID of the Ad Account for the current user |
`targeting_spec`  | The Facebook target spec |

### Request

{% highlight http %}
GET /reach_estimate?fb_ad_account_id=31&amp;targeting_spec=%7B%22geo_locations%22%3A%7B%22countries%22%3A%5B%22IT%22%5D%7D%7D HTTP/1.1
Accept: application/json
Authorization: OAuth 126bwibn13ax88xhuyajmkq37u8g0b2
Host: example.org
Cookie: 
fb_ad_account_id: 31
targeting_spec: {"geo_locations":{"countries":["IT"]}}
{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/reach_estimate?fb_ad_account_id=31&targeting_spec=%7B%22geo_locations%22%3A%7B%22countries%22%3A%5B%22IT%22%5D%7D%7D" -X GET \
	-H "Accept: application/json" \
	-H "Authorization: OAuth 126bwibn13ax88xhuyajmkq37u8g0b2"
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
ETag: "a2d9c607c08c8286ecb2752857ef3409"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: e1dd3de3-150a-4059-add3-675dde4ac6fb
X-Runtime: 0.011350
Content-Length: 486
{% endhighlight %}

#### Body

{% highlight json %}
{
  "users": 26000000,
  "bid_estimations": [
    {
      "unsupported": false,
      "location": 3,
      "cpa_min": 35,
      "cpa_median": 71,
      "cpa_max": 101,
      "cpc_min": 13,
      "cpc_median": 20,
      "cpc_max": 25,
      "cpm_min": 1,
      "cpm_median": 4,
      "cpm_max": 29
    }
  ],
  "estimate_ready": true,
  "imp_estimates": [

  ],
  "data": {
    "users": 26000000,
    "bid_estimations": [
      {
        "unsupported": false,
        "location": 3,
        "cpa_min": 35,
        "cpa_median": 71,
        "cpa_max": 101,
        "cpc_min": 13,
        "cpc_median": 20,
        "cpc_max": 25,
        "cpm_min": 1,
        "cpm_median": 4,
        "cpm_max": 29
      }
    ],
    "estimate_ready": true,
    "imp_estimates": [

    ]
  }
}
{% endhighlight %}

