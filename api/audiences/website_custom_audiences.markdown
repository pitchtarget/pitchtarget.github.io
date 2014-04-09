---
layout: default_with_nav
title: Website Custom Audiences
section: Audiences API
nav: nav_audiences_api.md
---

## {{page.title}}
Website Custom Audiences allow your users to retarget people based on their browsing behaviour on a wbesite. For instance, your users may choose to retarget people that browsed for items worth a certain amount or belonging to a specific section of a user's ecommerce.

In order to insert people in a Website Custom Audience, your user must integrate a Remarketing Pixel as the first element of their `<body>` in their website. Alternatively, users can piggyback the Remarketing Pixel into tag managers such as Google Tag Manager.

### Create a new Website Custom Audience
`POST /websitecustomaudiences`

#### Parameters

Name | Required? | Description |
-----|-----------|-------------|
`fb_ad_account_id` | Yes | ID of the Facebook Ad Account in which this Lookalike Audience will be created |
`name` | Yes | The name of this audience |
`retention_days` | Yes | Number of days to keep the user in this audience (between 1 and 180 days) |
`rule` | Yes | A JSON object representing audience rules to determine when users should be inserted into this audience. For more details, refer to [Audience Rules](#audience_rules). |

#### Audience Rules

The `rule` parameters allows you to specify a set of rules so that people can be added to this audiences when they match these rules. This endpoint accepts the same ruleset as Facebook. For more details about rules, please refer to the [Audience Rules](https://developers.facebook.com/docs/reference/ads-api/custom-audience-website#audiencerules) section of Facebook Developers.

#### Request

{% highlight sh %}
curl "{{site.base_url}}/websitecustomaudiences" -X POST \
  -H "Accept: application/json" \
  -H "Authorization: OAuth i8hihdbq03aa1zmcekcq67ku668tbhr" \
  -H "Content-Type: application/json" -d '{"fb_ad_account_id":"11","name":"Users that put items in the car","retention_days":15,"rule":"{\"url\":{\"i_contains\":\"cart\"}}"}'
{% endhighlight %}

#### Response
{% highlight json %}
{
  "id": "6006183285954"
}
{% endhighlight %}

### List all audiences

{% include custom_audience_get.md %}

### Delete an audience

{% include custom_audience_delete.md %}

### Obtain details about an audience

{% include custom_audience_get_id.md %}


### Obtain the Remarketing Pixel

`GET /remarketingpixel`

#### Parameters
Name | Required? | Description |
-----|-----------|-------------|
`fb_ad_account_id` | Yes | ID of the Facebook Ad Account to which the Remarketing Pixel belongs |

#### Request

{% highlight sh %}
curl "{{site.base_url}}/remarketingpixel?fb_ad_account_id=12" -X GET \
  -H "Accept: application/json" \
  -H "Authorization: OAuth i8hihdbq03aa1zmcekcq67ku668tbhr"
{% endhighlight %}

#### Response

{% highlight json %}
{
  "js": "<script>(function(){var _fbq=window._fbq||(window._fbq=[]);if(!_fbq.loaded){var fbds=document.createElement("script");fbds.async=true;fbds.src="//connect.facebook.net/en_US/fbds.js";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(fbds,s);_fbq.loaded=true}_fbq.push(["addPixelId","32978420702374"])})();window._fbq=window._fbq||[];window._fbq.push(["track","PixelInitialized",{}]);</script><noscript><img height="1" width="1" border="0" alt="" style="display:none" src="https://www.facebook.com/tr?id=32978420702374&amp;ev=NoScript" /></noscript>"
}
{% endhighlight %}

### Privacy, opt-out and Terms of Services

As for other Custom Audiences products, your users must make sure to accept the Facebook's Custom Audiences Terms of Services and they should also have a valid end user Privacy Policy that allows user retargeting. For more details, refer to [Custom Audiences](/api/audiences/custom_audiences.html).
