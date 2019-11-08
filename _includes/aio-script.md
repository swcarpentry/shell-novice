{% comment %}
As a maintainer, you don't need to edit this file.
If you notice that something doesn't work, please
open an issue: https://github.com/carpentries/styles/issues/new
{% endcomment %}

{% include manual_episode_order.html %}

{% for lesson_episode in lesson_episodes %}

{% if site.episode_order %}
  {% assign e = site.episodes | where: "slug", lesson_episode | first %}
{% else %}
  {% assign e = lesson_episode %}
{% endif %}

<h1 id="{{ e.title | slugify }}" class="maintitle">{{ e.title }}</h1>

{% include episode_overview.html teaching_time=e.teaching exercise_time=e.exercises episode_questions=e.questions episode_objectives=e.objectives %}

{{ e.content }}

{% include episode_keypoints.html episode_keypoints=e.keypoints %}
<hr />
{% endfor %}
