---
layout: default_with_nav
title: Unpublished Page Posts
section: Campaigns API
nav: nav_campaigns_api.md
---

## {{page.title}}
An Unpublished Page Post is a Page Post that does not receive organic distribution. In other words, your users can create a Post that belongs to a Page but does not appear neither on News Feed nor on the Page itself. Such Posts are created with to be boosted as ads without intefering with other content or brand activity of the Page.

Users can use Unpublished Page Posts with any Campaigns API endpoints that supports `object_id` or `post_url`.

Your users must be either Manager or Content Creator of one or more Pages and they also must accept Facebook permissions prior to create an Unpublished Page Post. For more details, refer to [Login Flow].

### Create an Unpublished Page Post

`POST /unpublished_page_posts`

Name | Required? | Description |
-----|-----------|-------------|
`page_id` | Yes | The Facebook Page ID |
`message` | No | The body of the post |
`link` | No | The post&#39;s link |
`actions` | No | The action links attached to the post |
`tag` | No | Comma-separated list of user IDs of people tagged in this post |
`object_attachment` | No | Facebook ID for an existing picture in the person&#39;s photo albums to use as the thumbnail image |
`targeting` | No | Object that limits the audience for this content. For more details, refer to [Targeting](#targeting). |
`feed_targeting` | No | Object that controls News Feed targeting for this content. For more details, refer to [Targeting](#targeting). |

#### Targeting
Your users may choose to limit the audience of a Post to specific countries or locales. In order to do so, you must provide a JSON object in the `targeting` field. The JSON object accepts the following fields:

Name | Required? | Type | Description |
-----|-----------|------|-------------|
`countries` | No | `string[]` | ISO 3166 (2 characters) country code. |
`locales` | No | `int[]` | Each value is an ID of the locale according to Facebook's [Ad Locales](https://developers.facebook.com/docs/graph-api/reference/targeting/). |

Your users may also choose to limit distribution of a Post so that it will more like appear on News Feed to people that belong to a specified group. In order to specify such distribution rules, you must provide a JSON object in the `feed_targeting` field. For more details on the available fields, please refer to the Publish section of the [Feed Endpoint] reference on Facebook Developers.


#### Request
{% highlight sh %}
curl "{{site.base_url}}/unpublished_page_posts" -X POST \
  -H "Accept: application/json" \
  -H "Authorization: OAuth eucivw4wab46ggunec0dzgi7vx0aloa" \
  -H "Content-Type: application/x-www-form-urlencoded" -d 'page_id=205530782989409&link=http%3A%2F%2Fexample.com'
{% endhighlight %}


#### Response

{% highlight json %}
{
  "id": "205530782989409_10152407579852577"
}
{% endhighlight %}

### Obtain all promotable posts

This endpoint will return a list of every Page Post (published and unpublished) eligible for paid distribution.

`GET /promotable_posts`

Name | Required? | Description |
-----|-----------|-------------|
`page_id` | Yes | The Facebook Page ID |

#### Request
{% highlight sh %}
curl "{{site.base_url}}/promotable_posts?page_id=205530782989409" -X GET \
  -H "Accept: application/json" \
  -H "Authorization: OAuth eucivw4wab46ggunec0dzgi7vx0aloa"
{% endhighlight %}


#### Response
{% highlight json %}
[
  {
    "id": "205530782989409_206938602848627",
    "from": {
      "category": "Just for fun",
      "name": "Vodka Tonic",
      "id": "205530782989409"
    },
    "story": "Vodka Tonic added a new photo.",
    "story_tags": {
      "0": [
        {
          "id": "205530782989409",
          "name": "Vodka Tonic",
          "offset": 0,
          "length": 11,
          "type": "page"
        }
      ]
    },
    "picture": "https://fbcdn-photos-c-a.akamaihd.net/hphotos-ak-prn2/t1.0-0/1798536_206938576181963_100275456_s.jpg",
    "link": "https://www.facebook.com/ilvodkatonic/photos/a.205532639655890.1073741827.205530782989409/206938576181963/?type=1&relevant_count=1",
    "icon": "https://fbstatic-a.akamaihd.net/rsrc.php/v2/yx/r/og8V99JVf8G.gif",
    "actions": [
      {
        "name": "Comment",
        "link": "https://www.facebook.com/205530782989409/posts/206938602848627"
      },
      {
        "name": "Like",
        "link": "https://www.facebook.com/205530782989409/posts/206938602848627"
      }
    ],
    "privacy": {
      "description": "Public",
      "value": "EVERYONE",
      "friends": "",
      "networks": "",
      "allow": "",
      "deny": ""
    },
    "type": "photo",
    "status_type": "added_photos",
    "object_id": "206938576181963",
    "created_time": "2014-03-21T23:47:43+0000",
    "updated_time": "2014-03-21T23:47:43+0000",
    "is_published": true,
    "likes": {
      "data": [
        {
          "id": "687292576",
          "name": "Matt Eo"
        }
      ],
      "paging": {
        "cursors": {
          "after": "Njg3MjkyNTc2",
          "before": "Njg3MjkyNTc2"
        }
      }
    }
  },
  {
    "id": "205530782989409_205532642989223",
    "from": {
      "category": "Just for fun",
      "name": "Vodka Tonic",
      "id": "205530782989409"
    },
    "story": "Vodka Tonic added a new photo.",
    "story_tags": {
      "0": [
        {
          "id": "205530782989409",
          "name": "Vodka Tonic",
          "offset": 0,
          "length": 11,
          "type": "page"
        }
      ]
    },
    "picture": "https://fbcdn-photos-h-a.akamaihd.net/hphotos-ak-prn2/t1.0-0/1187116_205532586322562_2056609002_s.jpg",
    "link": "https://www.facebook.com/ilvodkatonic/photos/a.205532639655890.1073741827.205530782989409/205532586322562/?type=1&relevant_count=1",
    "icon": "https://fbstatic-a.akamaihd.net/rsrc.php/v2/yx/r/og8V99JVf8G.gif",
    "actions": [
      {
        "name": "Comment",
        "link": "https://www.facebook.com/205530782989409/posts/205532642989223"
      },
      {
        "name": "Like",
        "link": "https://www.facebook.com/205530782989409/posts/205532642989223"
      }
    ],
    "privacy": {
      "description": "Public",
      "value": "EVERYONE",
      "friends": "",
      "networks": "",
      "allow": "",
      "deny": ""
    },
    "type": "photo",
    "status_type": "added_photos",
    "object_id": "205532586322562",
    "created_time": "2014-03-16T16:59:59+0000",
    "updated_time": "2014-03-16T16:59:59+0000",
    "is_published": true,
    "likes": {
      "data": [
        {
          "id": "687292576",
          "name": "Matt Eo"
        }
      ],
      "paging": {
        "cursors": {
          "after": "Njg3MjkyNTc2",
          "before": "Njg3MjkyNTc2"
        }
      }
    }
  },
  {
    "id": "205530782989409_205530799656074",
    "from": {
      "category": "Just for fun",
      "name": "Vodka Tonic",
      "id": "205530782989409"
    },
    "story": "Vodka Tonic joined Facebook.",
    "story_tags": {
      "0": [
        {
          "id": "205530782989409",
          "name": "Vodka Tonic",
          "offset": 0,
          "length": 11,
          "type": "page"
        }
      ]
    },
    "actions": [
      {
        "name": "Comment",
        "link": "https://www.facebook.com/205530782989409/posts/205530799656074"
      },
      {
        "name": "Like",
        "link": "https://www.facebook.com/205530782989409/posts/205530799656074"
      }
    ],
    "privacy": {
      "value": ""
    },
    "type": "status",
    "application": {
      "name": "Reviews",
      "id": "6261817190"
    },
    "created_time": "2014-03-16T16:50:36+0000",
    "updated_time": "2014-03-16T16:50:36+0000",
    "is_published": true
  }
]
{% endhighlight %}

{% include links.md %}
