---
layout: default
title: Campaigns API API
---

# Campaigns API API

## List all custom audiences

### GET /custom_audiences


### Parameters

Name | Description |
-----|-------------|
`fb_ad_account_id` (required) | Facebook ID of the Ad Account for the current user |

### Request

{% highlight http %}
GET /custom_audiences?fb_ad_account_id=4 HTTP/1.1
Accept: application/json
Authorization: OAuth bi8pskhwqqjr9owpb6k7xnxj7s9n2kd
Host: example.org
Cookie: 
fb_ad_account_id: 4
{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/custom_audiences?fb_ad_account_id=4" -X GET \
	-H "Accept: application/json" \
	-H "Authorization: OAuth bi8pskhwqqjr9owpb6k7xnxj7s9n2kd"
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
X-Request-Id: a4e7a6c5-ae7f-4d0f-8b87-209239c6e876
X-Runtime: 0.029010
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

