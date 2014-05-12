---
layout: default
title: Campaigns API API
---

# Campaigns API API

## Creating a new POST_ENGAGEMENT campaign using the story ID

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
`object_story_id` (required) | Object story id |
`url_tags`  | URL tags |

### Request

{% highlight http %}
POST /campaigns HTTP/1.1
Accept: application/json
Content-Type: application/json
Authorization: OAuth sfbwrhwzsiyp8ekr7so6kb7zuckyz48
Host: example.org
Cookie: 

{% endhighlight %}

#### Body

{% highlight json %}
{
  "fb_ad_account_id": "47",
  "objective": "POST_ENGAGEMENT",
  "name": "foo",
  "bid_type": "ABSOLUTE_OCPM",
  "bid_info": "{\"ACTIONS\":100}",
  "max_bid": 100,
  "budget_type": "daily",
  "budget_amount": 100000,
  "start_time": 1399908455,
  "targets": "[{\"name\":\"Mobile Games fans\",\"specs\":{\"age_min\":18,\"age_max\":35,\"geo_locations\":{\"countries\":[\"US\"]},\"interests\":[{\"name\":\"Video games\",\"id\":6003940339466},{\"name\":\"Browser games\",\"id\":6003434373937},{\"name\":\"Casual game\",\"id\":6003102728434}]}}]",
  "object_story_id": "238193529614918_465257143575221",
  "url_tags": "track=yes&shop_id=184367"
}
{% endhighlight %}

#### cURL

{% highlight sh %}
curl "api.pitchtarget.com/campaigns" -X POST \
	-H "Accept: application/json" \
	-H "Content-Type: application/json" \
	-H "Authorization: OAuth sfbwrhwzsiyp8ekr7so6kb7zuckyz48" -d '{"fb_ad_account_id":"47","objective":"POST_ENGAGEMENT","name":"foo","bid_type":"ABSOLUTE_OCPM","bid_info":"{\"ACTIONS\":100}","max_bid":100,"budget_type":"daily","budget_amount":100000,"start_time":1399908455,"targets":"[{\"name\":\"Mobile Games fans\",\"specs\":{\"age_min\":18,\"age_max\":35,\"geo_locations\":{\"countries\":[\"US\"]},\"interests\":[{\"name\":\"Video games\",\"id\":6003940339466},{\"name\":\"Browser games\",\"id\":6003434373937},{\"name\":\"Casual game\",\"id\":6003102728434}]}}]","object_story_id":"238193529614918_465257143575221","url_tags":"track=yes\u0026shop_id=184367"}'
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
ETag: "8315cd9b780279eac3761b345786c25a"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: fcdb34dc-917a-44a6-b014-5d1e61aa6532
X-Runtime: 0.042353
Content-Length: 888
{% endhighlight %}

#### Body

{% highlight json %}
{
  "campaign": {
    "id": 328,
    "budget_type": "daily",
    "budget_amount": 100000,
    "bid_type": "ABSOLUTE_OCPM",
    "max_bid": 100,
    "start_time": "2014-05-12T15:27:35.000Z",
    "end_time": null,
    "objective": "POST_ENGAGEMENT",
    "status": null,
    "name": "foo",
    "fb_app_icon": null,
    "offsite_pixel_id": null,
    "creatives": [
      {
        "id": 214,
        "creative_images": [

        ],
        "creative_texts": [

        ]
      }
    ],
    "fb_targets": [
      {
        "id": 125,
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
      "id": 1618,
      "name": "AD Account Bar",
      "currency": "EUR",
      "fb_id": "47"
    },
    "fb_ad_campaigns": [

    ]
  }
}
{% endhighlight %}

