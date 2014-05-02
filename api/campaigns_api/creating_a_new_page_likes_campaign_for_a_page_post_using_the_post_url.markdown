---
layout: default
title: Campaigns API API
---

# Campaigns API API

## Creating a new PAGE_LIKES campaign for a page post using the post URL

### POST /campaigns


### Parameters

Name | Description |
-----|-------------|
`fb_ad_account_id` (required) | Facebook ID of the Ad Account for the current user |
`objective` (required) | Campaign objective |
`name` (required) | Campaign name |
`bid_type`  | Bid type |
`bid_info`  | Bid info |
`max_bid`  | Max bid |
`budget_type`  | Budget type |
`budget_amount`  | Budget amount |
`start_time`  | Start time |
`end_time`  | End time |
`targets`  | Targets |
`page_url`  | Page post URL |

### Request

{% highlight http %}
POST /campaigns HTTP/1.1
Accept: application/json
Content-Type: application/json
Authorization: OAuth mk2etah124ik016ijab0tmzowfs7vll
Host: example.org
Cookie: 

{% endhighlight %}

#### Body

{% highlight json %}
{
  "fb_ad_account_id": "69",
  "objective": "PAGE_LIKES",
  "name": "foo",
  "bid_type": "ABSOLUTE_OCPM",
  "bid_info": "{\"ACTIONS\":100}",
  "max_bid": 100,
  "budget_type": "daily",
  "budget_amount": 100000,
  "start_time": 1399020652,
  "targets": "[{\"name\":\"Mobile Games fans\",\"specs\":{\"age_min\":18,\"age_max\":35,\"geo_locations\":{\"countries\":[\"US\"]},\"interests\":[{\"name\":\"Video games\",\"id\":6003940339466},{\"name\":\"Browser games\",\"id\":6003434373937},{\"name\":\"Casual game\",\"id\":6003102728434}]}}]",
  "page_url": "https://www.facebook.com/PlaceCommander/posts/465257143575221?stream_ref=10"
}
{% endhighlight %}

#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/campaigns" -X POST \
	-H "Accept: application/json" \
	-H "Content-Type: application/json" \
	-H "Authorization: OAuth mk2etah124ik016ijab0tmzowfs7vll" -d '{"fb_ad_account_id":"69","objective":"PAGE_LIKES","name":"foo","bid_type":"ABSOLUTE_OCPM","bid_info":"{\"ACTIONS\":100}","max_bid":100,"budget_type":"daily","budget_amount":100000,"start_time":1399020652,"targets":"[{\"name\":\"Mobile Games fans\",\"specs\":{\"age_min\":18,\"age_max\":35,\"geo_locations\":{\"countries\":[\"US\"]},\"interests\":[{\"name\":\"Video games\",\"id\":6003940339466},{\"name\":\"Browser games\",\"id\":6003434373937},{\"name\":\"Casual game\",\"id\":6003102728434}]}}]","page_url":"https://www.facebook.com/PlaceCommander/posts/465257143575221?stream_ref=10"}'
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
ETag: "787ccb9a269377d4ef47c2c3edfd0f53"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: a22b79ec-b022-4c46-8685-f1a8aedabb62
X-Runtime: 0.055802
Content-Length: 911
{% endhighlight %}

#### Body

{% highlight json %}
{
  "campaign": {
    "id": 6312,
    "budget_type": "daily",
    "budget_amount": 100000,
    "bid_type": "ABSOLUTE_OCPM",
    "max_bid": 100,
    "start_time": "2014-05-02T08:50:52.000Z",
    "end_time": null,
    "objective": "PAGE_LIKES",
    "status": null,
    "name": "foo",
    "fb_app_icon": null,
    "creatives": [
      {
        "id": 4030,
        "creative_images": [

        ],
        "creative_texts": [
          {
            "id": 1588,
            "title": null,
            "name": null,
            "body": null
          }
        ]
      }
    ],
    "fb_targets": [
      {
        "id": 2352,
        "name": "Mobile Games fans",
        "favorite": false,
        "geo_locations": {
          "countries": [
            "US"
          ]
        },
        "excluded_geo_locations": null,
        "genders": null,
        "age_min": 18,
        "age_max": 35,
        "languages": null,
        "interested_in": null,
        "broad_age": null,
        "interests": [
          {
            "name": "Video games",
            "id": 6003940339466
          },
          {
            "name": "Browser games",
            "id": 6003434373937
          },
          {
            "name": "Casual game",
            "id": 6003102728434
          }
        ],
        "user_adclusters": null,
        "excluded_user_adclusters": null,
        "parent_fb_target": null
      }
    ],
    "fb_ad_account": {
      "id": 45398,
      "name": "AD Account Bar",
      "currency": "EUR",
      "fb_id": "69"
    },
    "fb_ad_campaigns": [

    ]
  }
}
{% endhighlight %}

