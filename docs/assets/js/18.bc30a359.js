(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{118:function(t,a,e){"use strict";e.d(a,"a",(function(){return s}));var n=e(128),r=e.n(n);function s(t){return null!==t&&r()(String(t),{smartypants:!0,gfm:!0,breaks:!0})}},155:function(t,a,e){},195:function(t,a,e){"use strict";var n=e(155);e.n(n).a},220:function(t,a,e){"use strict";e.r(a);var n={name:"BlogPost",methods:{markdown:e(118).a}},r=(e(195),e(9)),s=Object(r.a)(n,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"post"},[t.$page.frontmatter.image?e("ImageHelper",{attrs:{image:t.$page.frontmatter.image,imageAltText:t.$page.frontmatter.imageAltText}}):t._e(),t._v(" "),e("h1",{staticClass:"post__title"},[t._v(t._s(t.$page.frontmatter.title))]),t._v(" "),e("div",{staticClass:"post__excerpt",domProps:{innerHTML:t._s(t.markdown(t.$page.frontmatter.excerpt))}}),t._v(" "),e("div",[t._v(t._s(t.$page.frontmatter.publish_date))]),t._v(" "),t._l(t.$page.frontmatter.authors,(function(a){return e("div",[e("div",{staticClass:"post__author"},[t._v(t._s(a))])])})),t._v(" "),e("div",{staticClass:"post__content text",domProps:{innerHTML:t._s(t.markdown(t.$page.frontmatter.content))}}),t._v(" "),t.$page.frontmatter.tags?e("div",t._l(t.$page.frontmatter.tags,(function(a){return e("span",{staticClass:"tag"},[t._v("\n      "+t._s(a)+"\n    ")])})),0):t._e()],2)}),[],!1,null,null,null);a.default=s.exports}}]);