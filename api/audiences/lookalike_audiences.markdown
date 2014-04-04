---
layout: default_with_nav
title: Lookalike Audiences
section: Audiences API
nav: nav_audiences_api.md
---

## {{page.title}}
A Lookalike Audience contains a target audience made of users that look like those in a seed Custom Audience. For more details about Custom Audiences, refer to [Custom Audiences](/api/audiences/custom_audiences.html).

### Create a Lookalike Audience

`POST /lookalikeaudiences`

#### Parameters

Name | Required? | Description |
-----|-----------|-------------|
`fb_ad_account_id` | Yes | ID of the Facebook Ad Account in which this Lookalike Audience will be created |
`name` | Yes | The name of this Lookalike Audience |
`origin_audience_id` | Yes | The ID of the seed Custom Audience |
`lookalike_spec` | Yes | A JSON object containing details about this Lookalike Audience. For more details, refer to [Lookalike Spec](#lookalike_spec). |

#### Lookalike Spec
Your users can create a Lookalike Audience by specifying a precision ratio and a target country. The lower the precision ratio is, the more precise the resulting audience will be. Specifically, Facebook will put the top users for the selected country in the resulting Lookalike Audience.

In order to specify ratio and country, you must provide the following fields in the `lookalike_spec` JSON object:

Field | Required? | Description |
------|-----------|-------------|
`ratio` | Yes | Between `0.01` and `0.20` with increments of `0.01`. For instance, if you use 0.10, you will have a Lookalike Audience of the top 10% users similar to the seed Custom Audience. |
`country` | Yes | 2 characters ISO country code, for instance, `US`. |

#### Request
{% highlight sh %}
curl "{{site.base_url}}/lookalikeaudiences" -X POST \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -H "Authorization: OAuth j5oofr8g2pv4tp4ymfnzxz0jswcqah9" -d '{"fb_ad_account_id":"4","name":"Boys Apparel_lookalike_US_Similarity","origin_audience_id":6006164557194,"lookalike_spec":{"type":"similarity","country":"US"}}'
{% endhighlight %}

#### Response
{% highlight json %}
{
  "id": "6006183285954"
}
{% endhighlight %}

### List all audiences
{% include custom_audience_get.md %}

### Obtain details about an audience
{% include custom_audience_get_id.md %}

### Delete a Lookalike Audience
{% include custom_audience_delete.md %}
