---
layout: default
title: Campaigns API API
---

# Campaigns API API

## Get data for custom audience 6013451248234

### GET /custom_audiences/:fb_id



### Request

{% highlight http %}
GET /custom_audiences/6013451248234 HTTP/1.1
Accept: application/json
Authorization: OAuth bi8pskhwqqjr9owpb6k7xnxj7s9n2kd
Host: example.org
Cookie: 

{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/custom_audiences/6013451248234" -X GET \
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
ETag: "ef30351b9d61d03d948e4a70fddf07a9"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 419bfe63-bf19-4d25-af3c-58fb8f5f18d2
X-Runtime: 0.012269
Content-Length: 662
{% endhighlight %}

#### Body

{% highlight json %}
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
{% endhighlight %}

