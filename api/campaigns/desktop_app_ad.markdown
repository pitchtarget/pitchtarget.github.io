---
layout: default_with_nav
title: Desktop App Ads
section: Campaigns API
nav: nav_campaigns_api.md
---

## {{page.title}}
Use these parameters when you need to drive installs and usage of your Desktop App on Facebook.

Name | Required? | Description |
-----|-----------|-------------|
`fb_account_id` | Yes | Your Facebook Account ID |
`fb_ad_account_id` | Yes | The Facebook Ad Account ID in which the campaign will be created |
`objective` | Yes | The campaign objective, in this case, `CANVAS_APP_INSTALL` |
`name` | Yes | The name that identifies this campaign among others in the same account. |
`bid_type` | No | Bid type. Can be `CPC`, `CPM`, `OCPM`. |
`bid_info`  |  Only when `bid_type` == `OCPM` | JSON object with key-value pairs that describes the value you place on the objective. See the `bid_info` section below for more details. |
`max_bid`  | Only when `bid_type` is not `OCPM` | How much are you willing to pay for a clic on this ad (if your `bid_type` is `CPC`), or a thousand impressions (if `bid_type` is `CPM`). Specify this amount in cents. |
`budget_amount`  | No | Your budget amount, in cents. |
`budget_type`  | No |  Budget type. Specify `daily` if you want to spend `budget_amount` every day. Specify `lifetime` if you want to spend `budget_amount` from the start to end time. See the `budget_type` section below for more details. |
`start_time`  | No | Start time (UNIX timestamp). Specifies when your campaign will start. |
`end_time`  | No | End time (UNIX timestamp). Specifies when your campaign will end. |
`targets`  | No | Targets. See the `targets` section below for more details. |
`fb_app_id` | Yes | The ID of the Facebook App you are promoting. |
`link_url`  | No | URL to a page inside the Facebook App you are promoting. Use this when you need to deep link inside your app. |
`url_tags`  | No | URL tags. Use this then you need to append tracking parameters, such as Google Analytics tags. |
`creative_texts`  | No | The body (text) of your creative. If you specify more than one body, Campaigns API will create different ads in your campaign. |
`creative_images`  | No | The image of your creative. If you specify more than one creative, Campaigns API will create different ads in your campaign. |

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
748
{% endhighlight %}

##### `fb_ad_account_id`

{% highlight text %}
1270
{% endhighlight %}

##### `objective`

{% highlight text %}
CANVAS_APP_INSTALLS
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

##### `targets`
This fields accepts targeting options based on Facebook's Targeting Specs. For more details on the targeting options available, refer to [Ads API targeting](https://developers.facebook.com/docs/ads-api/targeting) on Facebook Developers.

{% highlight json %}
[
  {
    "name": "FbTarget 6",
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

##### `fb_app_id`

{% highlight text %}
177665754284193
{% endhighlight %}

##### `link_url`

{% highlight text %}
http://www.example.com/canvas/deep_link/page.html
{% endhighlight %}

##### `url_tags`

{% highlight text %}
utm_source=fb_canvas_ad&campaign=test
{% endhighlight %}

##### `creative_texts` and `creative_images`
Specify a JSON encoded array of objects. Each object will contain two properties.

| Property | Description |
|----------|-------------|
| `title` | Title of the ad |
| `body` | Body of the ad |

When you specify more than one creative, Campaigns API will prepare different combinations of the ad. For instance, if you specify 3 creative texts and 2 images, Campaigns API will prepare 6 different ads.

Please note that if your `budget_amount` is low, Facebook will give little or no delivery to some ads.

{% highlight json %}
[
  {
    "title": "Octopus's Garden",
    "body": "A little octopus is hiding somewhere. Will you find it?"
  }
]
{% endhighlight %}


#### cURL

{% highlight sh %}
curl "{{site.base_url}}/campaigns" -X POST \
  -H "Accept: application/json" \
  -H "Authorization: OAuth cp8s7ehw620ncg14f2m5gr305vu6ubk" \
  -F 'fb_account_id=748' \
  -F 'fb_ad_account_id=1270' \
  -F 'objective=CANVAS_APP_INSTALLS' \
  -F 'name=foo' \
  -F 'bid_type=OCPM' \
  -F 'bid_info={"foo":"bar"}' \
  -F 'max_bid=100' \
  -F 'budget_type=daily' \
  -F 'budget_amount=100000' \
  -F 'start_time=1394793024' \
  -F 'targets=[{"name":"FbTarget 6","specs":{"age_min":18,"age_max":25,"genders":["2"],"geo_locations":{"countries":["IT","US"]},"interests":[{"id":"1","name":"playstation"},{"id":"2","name":"videogame"},{"id":"3","name":"xbox"}],"user_adclusters":[{"id":"1","name":"HTC"},{"id":"2","name":"Motorola"},{"id":"3","name":"Samsung"}],"languages":["EN"],"broad_age":false,"interested_in":["2"]},"favorite":false}]' \
  -F 'fb_app_id=foo' \
  -F 'link_url=http://www.example.com' \
  -F 'url_tags=foo=bar&bar=foo' \
  -F 'creative_texts=[{"title":"Find The Octopus","body":"A little octopus is hiding somewhere. Will you find it?"}]' \
  -F 'creative_images[]=@1200x627.jpg;type=text/plain'
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
ETag: "81915da493bc3540e0ba23e2245b1e0a"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 7d0c6c2c-fc19-4347-af9e-10506c7a62d8
X-Runtime: 0.056105
Content-Length: 1008
{% endhighlight %}

#### Body

{% highlight json %}
{
  "campaign": {
    "id": 247,
    "budget_type": "daily",
    "budget_amount": 100000,
    "bid_type": "OCPM",
    "max_bid": 100,
    "start_time": "2014-03-14T10:30:24.000Z",
    "end_time": null,
    "objective": "CANVAS_APP_INSTALLS",
    "status": null,
    "name": "foo",
    "fb_app_icon": null,
    "creatives": [
      {
        "id": 191,
        "creative_images": [
          {
            "id": 118,
            "image": "/uploads/ad_image/image/141/1200x627.jpg"
          }
        ],
        "creative_texts": [
          {
            "id": 118,
            "title": "foo",
            "name": null,
            "body": "bar"
          }
        ]
      }
    ],
    "fb_targets": [
      {
        "id": 155,
        "name": "FbTarget 6",
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
      "id": 1270,
      "name": "AD Account Bar",
      "currency": "EUR",
      "fbid": "12"
    },
    "fb_ad_campaigns": [

    ]
  }
}
{% endhighlight %}

