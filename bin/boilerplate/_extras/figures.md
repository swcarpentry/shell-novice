---
title: Figures
---

{% include base_path.html %}
{% include manual_episode_order.html %}

<script>
  window.onload = function() {
    var lesson_episodes = [
    {% for lesson_episode in lesson_episodes %}
      {% if site.episode_order %}
        {% assign episode = site.episodes | where: "slug", lesson_episode | first %}
      {% else %}
        {% assign episode = lesson_episode %}
      {% endif %}
    "{{ episode.url }}"{% unless forloop.last %},{% endunless %}
    {% endfor %}
    ];

    var xmlHttp = [];  /* Required since we are going to query every episode. */
    for (i=0; i < lesson_episodes.length; i++) {

      xmlHttp[i] = new XMLHttpRequest();
      xmlHttp[i].episode = lesson_episodes[i];  /* To enable use this later. */
      xmlHttp[i].onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {
          var parser = new DOMParser();
          var htmlDoc = parser.parseFromString(this.responseText,"text/html");
          var htmlDocArticle = htmlDoc.getElementsByTagName("article")[0];

          var article_here = document.getElementById(this.episode);
          var images = htmlDocArticle.getElementsByTagName("img");

          if (images.length > 0) {
            var h1text = htmlDocArticle.getElementsByTagName("h1")[0].innerHTML;

            var htitle = document.createElement('h2');
            htitle.innerHTML = h1text;
            article_here.appendChild(htitle);

            var image_num = 0;
            for (let image of images) {
              image_num++;

              var title = document.createElement('p');
              title.innerHTML = "<strong>Figure " + image_num + ".</strong> " + image.alt;
              article_here.appendChild(title);

              article_here.appendChild(image.cloneNode(false));

              if (image_num < images.length) {
                var hr = document.createElement('hr');
                article_here.appendChild(hr);
              }
            }
          }
        }
      }
      episode_url = "{{ relative_root_path }}" + lesson_episodes[i];
      xmlHttp[i].open("GET", episode_url);
      xmlHttp[i].send(null);
    }
  }
</script>

{% comment %} Create anchor for each one of the episodes.  {% endcomment %}

{% for lesson_episode in lesson_episodes %}
  {% if site.episode_order %}
    {% assign episode = site.episodes | where: "slug", lesson_episode | first %}
  {% else %}
    {% assign episode = lesson_episode %}
  {% endif %}
<article id="{{ episode.url }}" class="figures"></article>
{% endfor %}

{% include links.md %}
