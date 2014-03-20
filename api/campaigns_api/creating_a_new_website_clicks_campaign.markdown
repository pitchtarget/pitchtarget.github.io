---
layout: default
title: Campaigns API API
---

# Campaigns API API

## Creating a new WEBSITE_CLICKS campaign

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
`end_time`  | End time |
`targets`  | Targets |
`object_url`  | Object URL |
`object_id`  | Object id |
`call_to_action_type`  | Call to action type |
`creative_texts`  | Creative texts |
`creative_images`  | Creative images |

### Request

{% highlight http %}
POST /api/campaigns HTTP/1.1
Accept: application/json
Content-Type: multipart/form-data; boundary=----------XnJLe9ZIbbGUYtzPQJ16u1
Authorization: OAuth 28l4093p63b85azll124m3qp4vqgrrv
Host: example.org
Cookie: 

{% endhighlight %}

#### Body

##### `fb_account_id`

{% highlight text %}
926
{% endhighlight %}

##### `fb_ad_account_id`

{% highlight text %}
1527
{% endhighlight %}

##### `objective`

{% highlight text %}
WEBSITE_CLICKS
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

{% highlight json %}
{
  "foo": "bar"
}
{% endhighlight %}

##### `max_bid`

{% highlight text %}
100
{% endhighlight %}

##### `budget_type`

{% highlight text %}
daily
{% endhighlight %}

##### `budget_amount`

{% highlight text %}
100000
{% endhighlight %}

##### `start_time`

{% highlight text %}
1395328870
{% endhighlight %}

##### `targets`

{% highlight json %}
[
  {
    "name": "FbTarget 5",
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

##### `object_url`

{% highlight text %}
http://www.example.com
{% endhighlight %}

##### `object_id`

{% highlight text %}
foo
{% endhighlight %}

##### `call_to_action_type`

{% highlight text %}
foo
{% endhighlight %}

##### `creative_texts`

{% highlight json %}
[
  {
    "title": "foo",
    "body": "bar"
  }
]
{% endhighlight %}


#### cURL

{% highlight sh %}
curl "pitchtarget.com/api/campaigns" -X POST \
	-H "Accept: application/json" \
	-H "Authorization: OAuth 28l4093p63b85azll124m3qp4vqgrrv" \
	-F 'fb_account_id=926' \
	-F 'fb_ad_account_id=1527' \
	-F 'objective=WEBSITE_CLICKS' \
	-F 'name=foo' \
	-F 'bid_type=OCPM' \
	-F 'bid_info={"foo":"bar"}' \
	-F 'max_bid=100' \
	-F 'budget_type=daily' \
	-F 'budget_amount=100000' \
	-F 'start_time=1395328870' \
	-F 'targets=[{"name":"FbTarget 5","specs":{"age_min":18,"age_max":25,"genders":["2"],"geo_locations":{"countries":["IT","US"]},"interests":[{"id":"1","name":"playstation"},{"id":"2","name":"videogame"},{"id":"3","name":"xbox"}],"user_adclusters":[{"id":"1","name":"HTC"},{"id":"2","name":"Motorola"},{"id":"3","name":"Samsung"}],"languages":["EN"],"broad_age":false,"interested_in":["2"]},"favorite":false}]' \
	-F 'object_url=http://www.example.com' \
	-F 'object_id=foo' \
	-F 'call_to_action_type=foo' \
	-F 'creative_texts=[{"title":"foo","body":"bar"}]' \
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
ETag: "012e608913d5d6cc9f825a99344b5391"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 5a86feca-b06f-47d0-8b50-181edff83776
X-Runtime: 0.093484
Content-Length: 1004
{% endhighlight %}

#### Body

{% highlight json %}
{
  "campaign": {
    "id": 289,
    "budget_type": "daily",
    "budget_amount": 100000,
    "bid_type": "OCPM",
    "max_bid": 100,
    "start_time": "2014-03-20T15:21:10.000Z",
    "end_time": null,
    "objective": "WEBSITE_CLICKS",
    "status": null,
    "name": "foo",
    "fb_app_icon": null,
    "creatives": [
      {
        "id": 221,
        "creative_images": [
          {
            "id": 103,
            "image": "/uploads/ad_image/image/151/1200x864.jpg"
          }
        ],
        "creative_texts": [
          {
            "id": 103,
            "title": "foo",
            "name": null,
            "body": "bar"
          }
        ]
      }
    ],
    "fb_targets": [
      {
        "id": 135,
        "name": "FbTarget 5",
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
      "id": 1527,
      "name": "AD Account Bar",
      "currency": "EUR",
      "fb_id": "10"
    },
    "fb_ad_campaigns": [

    ]
  }
}
{% endhighlight %}

