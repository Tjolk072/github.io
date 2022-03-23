---
layout: null
---
var pages = [{% assign firstPage = "yes" %}
{% for page in site.pages %}{% if page.title and page.hide_from_sitemap != true %}{% if firstPage == "no" %},{% else %}{% assign firstPage = "no" %}{% endif %}
{
"url":{{ page.url | jsonify }},
"title":{{ page.title | jsonify }},
"description":{{ page.description | jsonify }},
"keywords":{{ page.keywords | jsonify }}
}
{% endif %}{% endfor %}
]
