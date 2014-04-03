---
layout: default
title: Campaigns API API
---

# Campaigns API API

## List all custom audiences

### GET /customaudiences


### Parameters

Name | Description |
-----|-------------|
`fb_ad_account_id` (required) | Facebook ID of the Ad Account for the current user |

### Request

{% highlight http %}
GET /customaudiences?fb_ad_account_id=10 HTTP/1.1
Accept: application/json
Authorization: OAuth nqvcm96f8svtbyyq8wctfu4bw29uqk3
Host: example.org
Cookie: 
fb_ad_account_id: 10
{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/customaudiences?fb_ad_account_id=10" -X GET \
	-H "Accept: application/json" \
	-H "Authorization: OAuth nqvcm96f8svtbyyq8wctfu4bw29uqk3"
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
ETag: "a1e7b6cd58316ee1132acd2fb6ce0f5b"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 8be0760d-e7f3-4ca3-bf11-bcbd62d47d45
X-Runtime: 0.009679
Content-Length: 664
{% endhighlight %}

#### Body

{% highlight json %}
[
  {
    "id": "6013451248234",
    "account_id": "10150121399501707",
    "approximate_count": 1332900,
    "description": "My lookalike audience",
    "lookalike_spec": {
      "type": "custom_ratio",
      "ratio": 0.05,
      "country": "IT",
      "origin": [
        {
          "id": "6013433969324",
          "name": "Spending users",
          "type": "custom_audience"
        }
      ]
    },
    "name": "Spending users_Lookalike_IT_Reach",
    "origin_audience_id": 6013433969342,
    "origin_audience_name": "Spending users",
    "parent_audience_id": 0,
    "parent_category": "Custom",
    "status": "ready",
    "run_status": {
      "code": 0,
      "description": "This audience is ready to use."
    },
    "subtype": "LOOKALIKE",
    "type": 4,
    "type_name": "Advertiser Generated",
    "time_updated": 1392808117,
    "data_source": {
      "type": 3,
      "sub_type": 3001
    }
  }
]
{% endhighlight %}

