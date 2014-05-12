---
layout: default
title: Campaigns API API
---

# Campaigns API API

## Get report stats for a given Facebook Campaign. See https://developers.facebook.com/docs/reference/ads-api/adreportstats for a complete list of valid parameters.

### GET /report_stats


### Parameters

Name | Description |
-----|-------------|
`fb_ad_account_id` (required) | Facebook ID of the Ad Account for the current user |
`date_preset`  | Facebook predefined time range |
`data_columns`  | Data to be included in the report |
`campaign_group_id`  | Facebook ID of the Ad Campaign |

### Request

{% highlight http %}
GET /report_stats?fb_ad_account_id=6&amp;data_columns=%5B%22adgroup_id%22%2C%22actions%22%2C%22spend%22%5D&amp;campaign_group_id=6013476312167189 HTTP/1.1
Accept: application/json
Authorization: OAuth ajtfbilkbl0no01n0fxye87k3c4i82h
Host: example.org
Cookie: 
fb_ad_account_id: 6
data_columns: ["adgroup_id","actions","spend"]
campaign_group_id: 6013476312167189
{% endhighlight %}


#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/report_stats?fb_ad_account_id=6&data_columns=%5B%22adgroup_id%22%2C%22actions%22%2C%22spend%22%5D&campaign_group_id=6013476312167189" -X GET \
	-H "Accept: application/json" \
	-H "Authorization: OAuth ajtfbilkbl0no01n0fxye87k3c4i82h"
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
ETag: "320f0bc3c6d315166b12f21bbf09ba9c"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 94a4b4c8-46c2-41b8-b749-1ac41091fa71
X-Runtime: 0.076421
Content-Length: 606
{% endhighlight %}

#### Body

{% highlight json %}
[
  {
    "adgroup_id": 6013637505104,
    "date_start": "2014-02-25",
    "date_stop": "2014-02-25",
    "time_start": 1393286400,
    "time_stop": 1393372800,
    "actions": 0,
    "spend": 0,
    "cpc": 0,
    "cpm": 0,
    "cpp": 0,
    "ctr": 0,
    "frequency": 1.348623853211,
    "impressions": 588,
    "reach": 436,
    "campaign_id": 6013636423904
  },
  {
    "adgroup_id": 6013637416104,
    "date_start": "2014-02-25",
    "date_stop": "2014-02-25",
    "time_start": 1393286400,
    "time_stop": 1393372800,
    "actions": 0,
    "spend": 0.26,
    "cpc": 0.086666666666667,
    "cpm": 0.0089276516842358,
    "cpp": 0.019469821776247,
    "ctr": 0.010301136558734,
    "frequency": 2.1808446907294,
    "impressions": 29123,
    "reach": 13354,
    "campaign_id": 6013636423904
  }
]
{% endhighlight %}

