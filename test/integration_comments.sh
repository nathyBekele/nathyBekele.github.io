#!/usr/bin/env bash
set -euo pipefail

tmp_dir="$(mktemp -d)"
tmp_override="${tmp_dir}/comments-test-override.yml"
tmp_site="${tmp_dir}/site"

created_giscus_post=""
created_disqus_post=""
cleanup() {
  rm -rf "${tmp_dir}"
  [ -n "${created_giscus_post}" ] && rm -f "${created_giscus_post}"
  [ -n "${created_disqus_post}" ] && rm -f "${created_disqus_post}"
}
trap cleanup EXIT

if [ ! -f "_posts/2022-02-01-giscus-comments.md" ]; then
  created_giscus_post="_posts/2022-02-01-giscus-comments.md"
  cat >"${created_giscus_post}" <<'YAML'
---
layout: post
title: giscus comments
date: 2022-02-01 00:00:00
giscus_comments: true
---
Comments test post.
YAML
fi

if [ ! -f "_posts/2015-10-20-disqus-comments.md" ]; then
  created_disqus_post="_posts/2015-10-20-disqus-comments.md"
  cat >"${created_disqus_post}" <<'YAML'
---
layout: post
title: disqus comments
date: 2015-10-20 00:00:00
disqus_comments: true
---
Disqus test post.
YAML
fi

cat >"${tmp_override}" <<'YAML'
giscus:
  repo: alshedivat/al-folio
  repo_id: R_kgDOExample
  category: Comments
  category_id: DIC_kwDOExample
YAML

bundle exec jekyll build --config "_config.yml,${tmp_override}" -d "${tmp_site}" >/dev/null

giscus_page="${tmp_site}/blog/2022/giscus-comments/index.html"
disqus_page="${tmp_site}/blog/2015/disqus-comments/index.html"

grep -q 'https://giscus.app/client.js' "${giscus_page}"
if grep -q 'giscus comments misconfigured' "${giscus_page}"; then
  echo "unexpected giscus misconfiguration warning in ${giscus_page}" >&2
  exit 1
fi

grep -q 'id="disqus_thread"' "${disqus_page}"
grep -q '.disqus.com/embed.js' "${disqus_page}"

echo "comments integration checks passed"
