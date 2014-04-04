---
layout: default_with_nav
title: Objective-based Campaigns
section: Campaigns API
nav: nav_campaigns_api.md
---

## {{page.title}}

### Create a new obective-based Campaign
When you create an objective-based Campaign, you need to specify the objective you want to achieve. An objective is a conversion goal, such as checkouts, registrations, or website clicks.

You may need to format your request with different paramters depending on your request. In the following paragraphs we will cover all the objectives, and we will also provide sample requests and responses for a typical usage.

### Drive conversions to your website
Use these parameters to set up a campaign and optimise it to obtain more conversions in your website. A conversion can be any action, such as checkouts or registrations.

| Name | Required? | Description |
|------|-----------|-------------|
`fb_account_id` | Yes | Your Facebook Account ID |
`fb_ad_account_id` | Yes | The Facebook Ad Account ID in which the campaign will be created |
`objective` | Yes | The campaign objective. See `objective` below for more details. |
`name` | Yes | The name that identifies this campaign among others in the same account. |
`bid_type` | No | Bid type. Can be `CPC`, `CPM`, `OCPM`. |
`bid_info`  |  Only when `bid_type` == `OCPM` | JSON object with key-value pairs that describes the value you place on the objective. See the `bid_info` section below for more details. |
`max_bid`  | Only when `bid_type` is not `OCPM` | How much are you willing to pay for a clic on this ad (if your `bid_type` is `CPC`), or a thousand impressions (if `bid_type` is `CPM`). Specify this amount in cents. |
`budget_amount`  | No | Your budget amount, in cents. |
`budget_type`  | No |  Budget type. Specify `daily` if you want to spend `budget_amount` every day. Specify `lifetime` if you want to spend `budget_amount` from the start to end time. See the `budget_type` section below for more details. |
`start_time`  | No | Start time (UNIX timestamp). Specifies when your campaign will start. |
`end_time`  | No | End time (UNIX timestamp). Specifies when your campaign will end. |
`targets`  | No | Targets. See the `targets` section below for more details. |
`offsite_pixel_tag` | No | The ID of your conversion tracking pixel. This pixel will report conversions back to Facebook in order to optimise your ad spend and delivery. |
`offsite_pixel_name`  | No | The name of your conversion pixel. |
`call_to_action_type`  | No | Call to action type. See `call_to_action_type` below for more details. |
`creative_texts`  | No | The body (text) of your creative. If you specify more than one body, Campaigns API will create different ads in your campaign. |
`creative_images`  | No | The image of your creative. If you specify more than one creative, Campaigns API will create different ads in your campaign. |

### Drive clicks to your website
Use these parameters when you need to generate traffic and clicks towards your website outside Facebook.

| Name | Required? | Description |
|------|-----------|-------------|
`fb_account_id` | Yes | Your Facebook Account ID |
`fb_ad_account_id` | Yes | The Facebook Ad Account ID in which the campaign will be created |
`objective` | Yes | The campaign objective. In this case, `WEBSITE_CLICKS`. |
`name` | Yes | The name that identifies this campaign among others in the same account. |
`bid_type` | No | Bid type. Can be `CPC`, `CPM`, `OCPM`. |
`bid_info`  |  Only when `bid_type` == `OCPM` | JSON object with key-value pairs that describes the value you place on the objective. See the `bid_info` section below for more details. |
`max_bid`  | Only when `bid_type` is not `OCPM` | How much are you willing to pay for a clic on this ad (if your `bid_type` is `CPC`), or a thousand impressions (if `bid_type` is `CPM`). Specify this amount in cents. |
`budget_amount`  | No | Your budget amount, in cents. |
`budget_type`  | No |  Budget type. Specify `daily` if you want to spend `budget_amount` every day. Specify `lifetime` if you want to spend `budget_amount` from the start to end time. See the `budget_type` section below for more details. |
`start_time`  | No | Start time (UNIX timestamp). Specifies when your campaign will start. |
`end_time`  | No | End time (UNIX timestamp). Specifies when your campaign will end. |
`targets`  | No | Targets. See the `targets` section below for more details. |
`object_url` | Yes | URL to your website. |
`object_id` | No | The ID of a related page. Use this if you want to display social context below your ad. |
`creative_texts`  | No | The body (text) of your creative. If you specify more than one body, Campaigns API will create different ads in your campaign. |
`creative_images`  | No | The image of your creative. If you specify more than one creative, Campaigns API will create different ads in your campaign. |

### Drive engagement towards a Page Post
Use these parameters when your goal is to increase interaction with a Page. Driving engagement towards a Page Post means that Facebook will optimise your campaign to drive more Likes, Comments and Shares.

| Name | Required? | Description |
|------|-----------|-------------|
`fb_account_id` | Yes | Your Facebook Account ID |
`fb_ad_account_id` | Yes | The Facebook Ad Account ID in which the campaign will be created |
`objective` | Yes | The campaign objective. In this case, `POST_ENGAGEMENT`. |
`name` | Yes | The name that identifies this campaign among others in the same account. |
`object_story_id` | Yes | The ID of a related page. Use this if you want to display social context below your ad. |
`bid_type` | No | Bid type. Can be `CPC`, `CPM`, `OCPM`. |
`bid_info`  |  Only when `bid_type` == `OCPM` | JSON object with key-value pairs that describes the value you place on the objective. See the `bid_info` section below for more details. |
`max_bid`  | Only when `bid_type` is not `OCPM` | How much are you willing to pay for a clic on this ad (if your `bid_type` is `CPC`), or a thousand impressions (if `bid_type` is `CPM`). Specify this amount in cents. |
`budget_amount`  | No | Your budget amount, in cents. |
`budget_type`  | No |  Budget type. Specify `daily` if you want to spend `budget_amount` every day. Specify `lifetime` if you want to spend `budget_amount` from the start to end time. See the `budget_type` section below for more details. |
`start_time`  | No | Start time (UNIX timestamp). Specifies when your campaign will start. |
`end_time`  | No | End time (UNIX timestamp). Specifies when your campaign will end. |
`targets`  | No | Targets. See the `targets` section below for more details. |
`url_tags`  | No | URL tracking tags. Use this then you need to append tracking parameters, such as Google Analytics tags. |

### Drive Likes to your Page
Use these parameters when you want to get more Likes for your page. This setting is particularly useful when you want to increase your fanbase.

| Name | Required? | Description |
|------|-----------|-------------|
`fb_account_id` | Yes | Your Facebook Account ID |
`fb_ad_account_id` | Yes | The Facebook Ad Account ID in which the campaign will be created |
`objective` | Yes | The campaign objective. In this case, `PAGE_LIKES`. |
`name` | Yes | The name that identifies this campaign among others in the same account. |
`page_url` | Yes | The URL of your page, for instance, https://facebook.com/my_fan_page |
`bid_type` | No | Bid type. Can be `CPC`, `CPM`, `OCPM`. |
`bid_info`  |  Only when `bid_type` == `OCPM` | JSON object with key-value pairs that describes the value you place on the objective. See the `bid_info` section below for more details. |
`max_bid`  | Only when `bid_type` is not `OCPM` | How much are you willing to pay for a clic on this ad (if your `bid_type` is `CPC`), or a thousand impressions (if `bid_type` is `CPM`). Specify this amount in cents. |
`budget_amount`  | No | Your budget amount, in cents. |
`budget_type`  | No |  Budget type. Specify `daily` if you want to spend `budget_amount` every day. Specify `lifetime` if you want to spend `budget_amount` from the start to end time. See the `budget_type` section below for more details. |
`start_time`  | No | Start time (UNIX timestamp). Specifies when your campaign will start. |
`end_time`  | No | End time (UNIX timestamp). Specifies when your campaign will end. |
`targets`  | No | Targets. See the `targets` section below for more details. |


### Request

{% highlight http %}
POST /api/campaigns HTTP/1.1
Accept: application/json
Content-Type: multipart/form-data; boundary=----------XnJLe9ZIbbGUYtzPQJ16u1
Authorization: OAuth cp8s7ehw620ncg14f2m5gr305vu6ubk
Host: example.org
Cookie:

{% endhighlight %}

#### Body

##### `fb_account_id`

{% highlight text %}
749
{% endhighlight %}

##### `fb_ad_account_id`

{% highlight text %}
1272
{% endhighlight %}

##### `objective`

{% highlight text %}
WEBSITE_CONVERSIONS
{% endhighlight %}

##### `name`

{% highlight text %}
foo
{% endhighlight %}

##### `bid_type`

{% highlight text %}
OCPM
{% endhighlight %}

##### `bid_info`
Use `bid_info` to establish the value of your objectives for OCPM. When you do so, you are optimising towards some goals. Facebook allows you to specify the value of these goals:

| Goal name | Description |
|-----------|-------------|
| `CLICKS` | Optimise to receive more clicks |
| `REACH` | Optimise to receive more impressions |
| `SOCIAL` | Optimise to deliver the ad to friends of people that are already connected with what you are promoting |
| `ACTIONS` | Optimise to receive more actions or conversions |

For more details, refer to [Optimized CPM](https://developers.facebook.com/docs/reference/ads-api/optimizedcpm/) on Facebook Developers.

In the following example, we will bid USD 5 towards actions. We suggest to bid strongly on `ACTIONS` when you are driving Installs or Engagement to Desktop App Installs.

{% highlight json %}
{
  "CLICKS": 0,
  "REACH": 0,
  "SOCIAL": 0,
  "ACTIONS": 500
}
{% endhighlight %}

##### `max_bid`

{% highlight text %}
100
{% endhighlight %}

##### `budget_type`
Specify if `budget_amount` should be considered as a daily or lifetime value.

| Value | Description |
|-------|-------------|
| `daily` | You will spend `budget_amount` every day. For instance, if your `budget_amount` is 5000, you will spend USD 50 every day. |
| `lifetime`| You will spend `budget_amount` from `start_time` to `end_time`. For instance, if your `budget_amount` is 5000, it means that you will have USD 50 until `end_time`. |

{% highlight text %}
daily
{% endhighlight %}

##### `budget_amount`

{% highlight text %}
100000
{% endhighlight %}

##### `start_time`

{% highlight text %}
1394793024
{% endhighlight %}

##### `end_time`

{% highlight text %}
1394997030
{% endhighlight %}

##### `url_tags`

{% highlight text %}
utm_source=fb_canvas_ad&campaign=test
{% endhighlight %}

##### `targets`
This fields accepts targeting options based on Facebook's Targeting Specs. For more details on the targeting options available, refer to [Ads API targeting](https://developers.facebook.com/docs/ads-api/targeting) on Facebook Developers.

{% highlight json %}
[
  {
    "name": "FbTarget 7",
    "specs": {
      "age_min": 18,
      "age_max": 25,
      "genders": [
        "2"
      ],
      "geo_locations": {
        "countries": [
          "IT",
          "US"
        ]
      },
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
      "languages": [
        "EN"
      ],
      "broad_age": false,
      "interested_in": [
        "2"
      ]
    },
    "favorite": false
  }
]
{% endhighlight %}

##### `offsite_pixel_tag`

{% highlight text %}
CHECKOUT
{% endhighlight %}

##### `offsite_pixel_name`

{% highlight text %}
Purchase completed
{% endhighlight %}

##### `creative_texts`

{% highlight json %}
[
  {
    "title": "Music Deals",
    "body": "Discover extra discounts in our Classic Rock section."
  }
]
{% endhighlight %}


#### cURL

{% highlight sh %}
curl "{{site.base_url}}/api/campaigns" -X POST \
	-H "Accept: application/json" \
	-H "Authorization: OAuth cp8s7ehw620ncg14f2m5gr305vu6ubk" \
	-F 'fb_account_id=749' \
	-F 'fb_ad_account_id=1272' \
	-F 'objective=WEBSITE_CONVERSIONS' \
	-F 'name=foo' \
	-F 'bid_type=OCPM' \
	-F 'bid_info={"ACTIONS":"5000"}' \
	-F 'budget_type=daily' \
	-F 'budget_amount=100000' \
	-F 'start_time=1394793024' \
	-F 'targets=[{"name":"FbTarget 7","specs":{"age_min":18,"age_max":25,"genders":["2"],"geo_locations":{"countries":["IT","US"]},"interests":[{"id":"1","name":"playstation"},{"id":"2","name":"videogame"},{"id":"3","name":"xbox"}],"user_adclusters":[{"id":"1","name":"HTC"},{"id":"2","name":"Motorola"},{"id":"3","name":"Samsung"}],"languages":["EN"],"broad_age":false,"interested_in":["2"]},"favorite":false}]' \
	-F 'offsite_pixel_tag=CHECKOUT' \
	-F 'offsite_pixel_name=Purchase completed' \
	-F 'creative_texts=[{"title":"Music Deals","body":"Discover extra discounts in our Classic Rock section."}]' \
	-F 'creative_images[]=@1200x864.jpg;type=text/plain'
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
ETag: "e24e60705c6e4a83ad26303acf9444a5"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: d804b11a-7f19-4012-8b89-2ec22f3201c2
X-Runtime: 0.109061
Content-Length: 1008
{% endhighlight %}

#### Body

{% highlight json %}
{
  "campaign": {
    "id": 248,
    "budget_type": "daily",
    "budget_amount": 100000,
    "bid_type": "OCPM",
    "max_bid": 100,
    "start_time": "2014-03-14T10:30:24.000Z",
    "end_time": null,
    "objective": "WEBSITE_CONVERSIONS",
    "status": null,
    "name": "foo",
    "fb_app_icon": null,
    "creatives": [
      {
        "id": 192,
        "creative_images": [
          {
            "id": 119,
            "image": "/uploads/ad_image/image/142/1200x864.jpg"
          }
        ],
        "creative_texts": [
          {
            "id": 119,
            "title": "foo",
            "name": null,
            "body": "bar"
          }
        ]
      }
    ],
    "fb_targets": [
      {
        "id": 156,
        "name": "FbTarget 7",
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
      "id": 1272,
      "name": "AD Account Bar",
      "currency": "EUR",
      "fbid": "14"
    },
    "fb_ad_campaigns": [

    ]
  }
}
{% endhighlight %}

