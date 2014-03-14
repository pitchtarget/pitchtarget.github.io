---
layout: default
title: Campaigns API
---

# Campaigns API

## Creating a new POST_ENGAGEMENT campaign

### POST /api/campaigns


### Parameters

Name | Description |
-----|-------------|
`fb_account_id` (required) | FbAccount id |
`fb_ad_account_id` (required) | FbAdAccount id |
`objective` (required) | Campaign objective |
`name` (required) | Campaign name |
`bid_type`  | Bid type |
`bid_info`  | Bid info |
`max_bid`  | Max bid |
`budget_type`  | Budget type |
`budget_amount`  | Budget amount |
`start_time`  | Start time |
`targets`  | Targets |
`object_story_id` (required) | Object story id |
`url_tags`  | URL tags |

### Request

{% highlight http %}
POST /api/campaigns HTTP/1.1
Accept: application/json
Content-Type: application/json
Authorization: OAuth cp8s7ehw620ncg14f2m5gr305vu6ubk
Host: example.org
Cookie: 

{% endhighlight %}

#### Body

{% highlight json %}
{
  "fb_account_id": 744,
  "fb_ad_account_id": 1262,
  "objective": "POST_ENGAGEMENT",
  "name": "foo",
  "bid_type": "OCPM",
  "bid_info": "{\"foo\":\"bar\"}",
  "max_bid": 100,
  "budget_type": "daily",
  "budget_amount": 100000,
  "start_time": 1394793023,
  "targets": "[{\"name\":\"FbTarget 2\",\"specs\":{\"age_min\":18,\"age_max\":25,\"genders\":[\"2\"],\"geo_locations\":{\"countries\":[\"IT\",\"US\"]},\"interests\":[{\"id\":\"1\",\"name\":\"playstation\"},{\"id\":\"2\",\"name\":\"videogame\"},{\"id\":\"3\",\"name\":\"xbox\"}],\"user_adclusters\":[{\"id\":\"1\",\"name\":\"HTC\"},{\"id\":\"2\",\"name\":\"Motorola\"},{\"id\":\"3\",\"name\":\"Samsung\"}],\"languages\":[\"EN\"],\"broad_age\":false,\"interested_in\":[\"2\"]},\"favorite\":false}]",
  "object_story_id": "foo",
  "url_tags": "bar"
}
{% endhighlight %}

#### cURL

{% highlight sh %}
curl "pitchtarget.com/api/campaigns" -X POST \
	-H "Accept: application/json" \
	-H "Content-Type: application/json" \
	-H "Authorization: OAuth cp8s7ehw620ncg14f2m5gr305vu6ubk" -d '{"fb_account_id":744,"fb_ad_account_id":1262,"objective":"POST_ENGAGEMENT","name":"foo","bid_type":"OCPM","bid_info":"{\"foo\":\"bar\"}","max_bid":100,"budget_type":"daily","budget_amount":100000,"start_time":1394793023,"targets":"[{\"name\":\"FbTarget 2\",\"specs\":{\"age_min\":18,\"age_max\":25,\"genders\":[\"2\"],\"geo_locations\":{\"countries\":[\"IT\",\"US\"]},\"interests\":[{\"id\":\"1\",\"name\":\"playstation\"},{\"id\":\"2\",\"name\":\"videogame\"},{\"id\":\"3\",\"name\":\"xbox\"}],\"user_adclusters\":[{\"id\":\"1\",\"name\":\"HTC\"},{\"id\":\"2\",\"name\":\"Motorola\"},{\"id\":\"3\",\"name\":\"Samsung\"}],\"languages\":[\"EN\"],\"broad_age\":false,\"interested_in\":[\"2\"]},\"favorite\":false}]","object_story_id":"foo","url_tags":"bar"}'
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
ETag: "c7f3a61f8c64665166bd387b54ff9561"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: fb0c9802-4911-4398-a9ee-6f4b7ba870e6
X-Runtime: 0.048746
Content-Length: 893
{% endhighlight %}

#### Body

{% highlight json %}
{
  "campaign": {
    "id": 243,
    "budget_type": "daily",
    "budget_amount": 100000,
    "bid_type": "OCPM",
    "max_bid": 100,
    "start_time": "2014-03-14T10:30:23.000Z",
    "end_time": null,
    "objective": "POST_ENGAGEMENT",
    "status": null,
    "name": "foo",
    "fb_app_icon": null,
    "creatives": [
      {
        "id": 187,
        "creative_images": [

        ],
        "creative_texts": [

        ]
      }
    ],
    "fb_targets": [
      {
        "id": 151,
        "name": "FbTarget 2",
        "favorite": false,
        "geo_locations": {
          "countries": [
            "IT",
            "US"
          ]
        },
        "excluded_geo_locations": null,
        "genders": [
          "2"
        ],
        "age_min": 18,
        "age_max": 25,
        "languages": [
          "EN"
        ],
        "interested_in": [
          "2"
        ],
        "broad_age": false,
        "interests": [
          {
            "id": "1",
            "name": "playstation"
          },
          {
            "id": "2",
            "name": "videogame"
          },
          {
            "id": "3",
            "name": "xbox"
          }
        ],
        "user_adclusters": [
          {
            "id": "1",
            "name": "HTC"
          },
          {
            "id": "2",
            "name": "Motorola"
          },
          {
            "id": "3",
            "name": "Samsung"
          }
        ],
        "excluded_user_adclusters": null,
        "parent_fb_target": null
      }
    ],
    "fb_ad_account": {
      "id": 1262,
      "name": "AD Account Bar",
      "currency": "EUR",
      "fbid": "4"
    },
    "fb_ad_campaigns": [

    ]
  }
}
{% endhighlight %}

