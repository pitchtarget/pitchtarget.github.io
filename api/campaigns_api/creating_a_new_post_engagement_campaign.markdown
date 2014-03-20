---
layout: default
title: Campaigns API API
---

# Campaigns API API

## Creating a new POST_ENGAGEMENT campaign

### POST /campaigns


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
`end_time`  | End time |
`targets`  | Targets |
`object_story_id` (required) | Object story id |
`url_tags`  | URL tags |

### Request

{% highlight http %}
POST /campaigns HTTP/1.1
Accept: application/json
Content-Type: application/json
Authorization: OAuth 94vdpx5uhcqtpyhsict4jtwthy668jg
Host: example.org
Cookie: 

{% endhighlight %}

#### Body

{% highlight json %}
{
  "fb_account_id": 922,
  "fb_ad_account_id": 1512,
  "objective": "POST_ENGAGEMENT",
  "name": "foo",
  "bid_type": "OCPM",
  "bid_info": "{\"foo\":\"bar\"}",
  "max_bid": 100,
  "budget_type": "daily",
  "budget_amount": 100000,
  "start_time": 1395337153,
  "targets": "[{\"name\":\"FbTarget 8\",\"specs\":{\"age_min\":18,\"age_max\":25,\"genders\":[\"2\"],\"geo_locations\":{\"countries\":[\"IT\",\"US\"]},\"interests\":[{\"id\":\"1\",\"name\":\"playstation\"},{\"id\":\"2\",\"name\":\"videogame\"},{\"id\":\"3\",\"name\":\"xbox\"}],\"user_adclusters\":[{\"id\":\"1\",\"name\":\"HTC\"},{\"id\":\"2\",\"name\":\"Motorola\"},{\"id\":\"3\",\"name\":\"Samsung\"}],\"languages\":[\"EN\"],\"broad_age\":false,\"interested_in\":[\"2\"]},\"favorite\":false}]",
  "object_story_id": "foo",
  "url_tags": "bar"
}
{% endhighlight %}

#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/campaigns" -X POST \
	-H "Accept: application/json" \
	-H "Content-Type: application/json" \
	-H "Authorization: OAuth 94vdpx5uhcqtpyhsict4jtwthy668jg" -d '{"fb_account_id":922,"fb_ad_account_id":1512,"objective":"POST_ENGAGEMENT","name":"foo","bid_type":"OCPM","bid_info":"{\"foo\":\"bar\"}","max_bid":100,"budget_type":"daily","budget_amount":100000,"start_time":1395337153,"targets":"[{\"name\":\"FbTarget 8\",\"specs\":{\"age_min\":18,\"age_max\":25,\"genders\":[\"2\"],\"geo_locations\":{\"countries\":[\"IT\",\"US\"]},\"interests\":[{\"id\":\"1\",\"name\":\"playstation\"},{\"id\":\"2\",\"name\":\"videogame\"},{\"id\":\"3\",\"name\":\"xbox\"}],\"user_adclusters\":[{\"id\":\"1\",\"name\":\"HTC\"},{\"id\":\"2\",\"name\":\"Motorola\"},{\"id\":\"3\",\"name\":\"Samsung\"}],\"languages\":[\"EN\"],\"broad_age\":false,\"interested_in\":[\"2\"]},\"favorite\":false}]","object_story_id":"foo","url_tags":"bar"}'
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
ETag: "e364e10119fc9ad58244a9947fe784cf"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 7943a8ae-7147-45a7-bfd3-d0195c0a1013
X-Runtime: 0.029846
Content-Length: 895
{% endhighlight %}

#### Body

{% highlight json %}
{
  "campaign": {
    "id": 272,
    "budget_type": "daily",
    "budget_amount": 100000,
    "bid_type": "OCPM",
    "max_bid": 100,
    "start_time": "2014-03-20T17:39:13.000Z",
    "end_time": null,
    "objective": "POST_ENGAGEMENT",
    "status": null,
    "name": "foo",
    "fb_app_icon": null,
    "creatives": [
      {
        "id": 204,
        "creative_images": [

        ],
        "creative_texts": [

        ]
      }
    ],
    "fb_targets": [
      {
        "id": 118,
        "name": "FbTarget 8",
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
      "id": 1512,
      "name": "AD Account Bar",
      "currency": "EUR",
      "fb_id": "28"
    },
    "fb_ad_campaigns": [

    ]
  }
}
{% endhighlight %}

