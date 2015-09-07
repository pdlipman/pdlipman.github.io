## UrizaAngular
#### AngularJS Test App
A Markdown blog with syntax highlighting using marked.js and highlight.js.

Components:

* Bootstrap
* marked.js
* highlight.js - ir_black.css theme

Update: Changed it to a directive.

Example Use:
```html
<div markdown='post.content'></div>
```

```javascript
'use strict';

angular.module('urizaAngularApp')
    .directive('markdown', ['$compile', '$window', function ($compile, $window) {

        var marked = $window.marked;
        var hljs = $window.hljs;

        var md = (function () {
            marked.setOptions({
                gfm:true,
                pedantic:false,
                sanitize:true,
                // callback for code highlighter
                highlight:function (code, lang) {
                    var highlightString;
                    if (lang !== undefined) {
                        highlightString = hljs.highlight(lang, code).value;
                    }
                    else {
                        highlightString = hljs.highlightAuto(code).value;
                    }
                    return '<hljs>' + highlightString + '</hljs>';
                }
            });

            var toHtml = function (markdown) {
                if (markdown === undefined) {
                    return '';
                }

                return marked(markdown);
            };

            hljs.tabReplace = '    ';

            return {
                toHtml:toHtml
            };
        }());

        return {
            restrict: 'A',
            replace: true,
            link: function (scope, element, attrs) {
                scope.$watch(attrs.markdown, function(content) {
                    var markdown = content;
                    var html = md.toHtml(markdown);
                    element.html(html);
                    element.find('code').addClass('hljs');
                    $compile(element.contents())(scope);
                });
            }
        };
    }]);

```
