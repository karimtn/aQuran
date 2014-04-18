!function(){"use strict";var e=angular.module("pasvaz.bindonce",[]);e.directive("bindonce",function(){var e=function(e){if(e&&0!==e.length){var t=angular.lowercase(""+e);e=!("f"===t||"0"===t||"false"===t||"no"===t||"n"===t||"[]"===t)}else e=!1;return e},t=parseInt((/msie (\d+)/.exec(angular.lowercase(navigator.userAgent))||[])[1],10);isNaN(t)&&(t=parseInt((/trident\/.*; rv:(\d+)/.exec(angular.lowercase(navigator.userAgent))||[])[1],10));var r={restrict:"AM",controller:["$scope","$element","$attrs","$interpolate",function(r,a,n,i){var c=function(t,r,a){var n="show"===r?"":"none",i="hide"===r?"":"none";t.css("display",e(a)?n:i)},o=function(e,t){if(angular.isObject(t)&&!angular.isArray(t)){var r=[];angular.forEach(t,function(e,t){e&&r.push(t)}),t=r}t&&e.addClass(angular.isArray(t)?t.join(" "):t)},s={watcherRemover:void 0,binders:[],group:n.boName,element:a,ran:!1,addBinder:function(e){this.binders.push(e),this.ran&&this.runBinders()},setupWatcher:function(e){var t=this;this.watcherRemover=r.$watch(e,function(e){void 0!==e&&(t.removeWatcher(),t.runBinders())},!0)},removeWatcher:function(){void 0!==this.watcherRemover&&(this.watcherRemover(),this.watcherRemover=void 0)},runBinders:function(){for(;this.binders.length>0;){var r=this.binders.shift();if(!this.group||this.group==r.group){var a=r.scope.$eval(r.interpolate?i(r.value):r.value);switch(r.attr){case"boIf":e(a)&&r.transclude(r.scope.$new(),function(e){var t=r.element.parent(),a=r.element&&r.element[r.element.length-1],n=t&&t[0]||a&&a.parentNode,i=a&&a.nextSibling||null;angular.forEach(e,function(e){n.insertBefore(e,i)})});break;case"boSwitch":var n,s=r.controller[0];(n=s.cases["!"+a]||s.cases["?"])&&(r.scope.$eval(r.attrs.change),angular.forEach(n,function(e){e.transclude(r.scope.$new(),function(t){var r=e.element.parent(),a=e.element&&e.element[e.element.length-1],n=r&&r[0]||a&&a.parentNode,i=a&&a.nextSibling||null;angular.forEach(t,function(e){n.insertBefore(e,i)})})}));break;case"boSwitchWhen":var l=r.controller[0];l.cases["!"+r.attrs.boSwitchWhen]=l.cases["!"+r.attrs.boSwitchWhen]||[],l.cases["!"+r.attrs.boSwitchWhen].push({transclude:r.transclude,element:r.element});break;case"boSwitchDefault":var l=r.controller[0];l.cases["?"]=l.cases["?"]||[],l.cases["?"].push({transclude:r.transclude,element:r.element});break;case"hide":case"show":c(r.element,r.attr,a);break;case"class":o(r.element,a);break;case"text":r.element.text(a);break;case"html":r.element.html(a);break;case"style":r.element.css(a);break;case"src":r.element.attr(r.attr,a),t&&r.element.prop("src",a);break;case"attr":angular.forEach(r.attrs,function(e,t){var a,n;t.match(/^boAttr./)&&r.attrs[t]&&(a=t.replace(/^boAttr/,"").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),n=r.scope.$eval(r.attrs[t]),r.element.attr(a,n))});break;case"href":case"alt":case"title":case"id":case"value":r.element.attr(r.attr,a)}}}this.ran=!0}};return s}],link:function(e,t,r,a){var n=r.bindonce?e.$eval(r.bindonce):!0;void 0!==n?n.then&&"function"==typeof n.then?n.then(function(){a.runBinders()}):a.runBinders():(a.setupWatcher(r.bindonce),t.bind("$destroy",a.removeWatcher))}};return r}),angular.forEach([{directiveName:"boShow",attribute:"show"},{directiveName:"boHide",attribute:"hide"},{directiveName:"boClass",attribute:"class"},{directiveName:"boText",attribute:"text"},{directiveName:"boBind",attribute:"text"},{directiveName:"boHtml",attribute:"html"},{directiveName:"boSrcI",attribute:"src",interpolate:!0},{directiveName:"boSrc",attribute:"src"},{directiveName:"boHrefI",attribute:"href",interpolate:!0},{directiveName:"boHref",attribute:"href"},{directiveName:"boAlt",attribute:"alt"},{directiveName:"boTitle",attribute:"title"},{directiveName:"boId",attribute:"id"},{directiveName:"boStyle",attribute:"style"},{directiveName:"boValue",attribute:"value"},{directiveName:"boAttr",attribute:"attr"},{directiveName:"boIf",transclude:"element",terminal:!0,priority:1e3},{directiveName:"boSwitch",require:"boSwitch",controller:function(){this.cases={}}},{directiveName:"boSwitchWhen",transclude:"element",priority:800,require:"^boSwitch"},{directiveName:"boSwitchDefault",transclude:"element",priority:800,require:"^boSwitch"}],function(t){var r=200;return e.directive(t.directiveName,function(){var e={priority:t.priority||r,transclude:t.transclude||!1,terminal:t.terminal||!1,require:["^bindonce"].concat(t.require||[]),controller:t.controller,compile:function(e,r,a){return function(e,r,n,i){var c=i[0],o=n.boParent;if(o&&c.group!==o){var s=c.element.parent();c=void 0;for(var l;9!==s[0].nodeType&&s.length;){if((l=s.data("$bindonceController"))&&l.group===o){c=l;break}s=s.parent()}if(!c)throw new Error("No bindonce controller: "+o)}c.addBinder({element:r,attr:t.attribute||t.directiveName,attrs:n,value:n[t.directiveName],interpolate:t.interpolate,group:o,transclude:a,controller:i.slice(1),scope:e})}}};return e})})}();
"use strict";!function(){function e(e){return["$rootScope","$window",function(n,o){for(var a,r,t,l=o[e]||(console.warn("This browser does not support Web Storage!"),{}),u={$default:function(e){for(var n in e)angular.isDefined(u[n])||(u[n]=e[n]);return u},$reset:function(e){for(var n in u)"$"===n[0]||delete u[n];return u.$default(e)}},g=0;g<l.length;g++)(t=l.key(g))&&"ngStorage-"===t.slice(0,10)&&(u[t.slice(10)]=angular.fromJson(l.getItem(t)));return a=angular.copy(u),n.$watch(function(){r||(r=setTimeout(function(){if(r=null,!angular.equals(u,a)){angular.forEach(u,function(e,n){angular.isDefined(e)&&"$"!==n[0]&&l.setItem("ngStorage-"+n,angular.toJson(e)),delete a[n]});for(var e in a)l.removeItem("ngStorage-"+e);a=angular.copy(u)}},100))}),"localStorage"===e&&o.addEventListener&&o.addEventListener("storage",function(e){"ngStorage-"===e.key.slice(0,10)&&(e.newValue?u[e.key.slice(10)]=angular.fromJson(e.newValue):delete u[e.key.slice(10)],a=angular.copy(u),n.$apply())}),u}]}angular.module("ngStorage",[]).factory("$localStorage",e("localStorage")).factory("$sessionStorage",e("sessionStorage"))}();
angular.module("mediaPlayer",["mediaPlayer.helpers"]).constant("playerDefaults",{currentTrack:0,ended:void 0,network:void 0,playing:!1,seeking:!1,tracks:0,formatDuration:"00:00",formatTime:"00:00",loadPercent:0}).directive("mediaPlayer",["$rootScope","$interpolate","$timeout","throttle","playerDefaults",function(e,t,n,a,r){function i(e){return function(t,a){var r,i=null;if(e.$attachPlaylist(t),void 0===t&&void 0!==a)return e.pause();if(e.currentTrack){r=a?a[e.currentTrack-1]:-1;for(var o=0;o<t.length;o++)if(angular.equals(t[o],r)){i=o;break}null!==i?(e.currentTrack=i+1,e.tracks=t.length):(e.pause(),t.length?n(function(){e.$clearSourceList(),e.$addSourceList(t[0]),e.load(),e.tracks=t.length}):e.reset())}else t.length?(e.$clearSourceList(),e.$addSourceList(t[0]),e.load(),e.tracks=t.length):e.reset()}}var o={load:function(e,t){"boolean"==typeof e?(t=e,e=null):"object"==typeof e&&(this.$clearSourceList(),this.$addSourceList(e)),this.$domEl.load(),this.ended=void 0,t&&this.$element.one("canplay",this.play.bind(this))},reset:function(e){angular.extend(this,r),this.$clearSourceList(),this.load(this.$playlist,e)},play:function(e,t){return"boolean"==typeof e&&(t=e,e=void 0),t&&(this.$selective=!0),this.$playlist.length>e?(this.currentTrack=e+1,this.load(this.$playlist[e],!0)):(!this.currentTrack&&this.$domEl.readyState&&this.currentTrack++,void(this.ended?this.load(!0):this.$domEl.play()))},playPause:function(e,t){"boolean"==typeof e&&(t=e,e=void 0),t&&(this.$autoplay=!0),"number"==typeof e&&e+1!==this.currentTrack?this.play(e):this.playing?this.pause():this.play()},pause:function(){this.$domEl.pause()},stop:function(){this.reset()},toggleMute:function(){this.muted=this.$domEl.muted=!this.$domEl.muted},next:function(e){var t=this;if(t.currentTrack&&t.currentTrack<t.tracks){var a=e||t.playing;t.pause(),n(function(){t.$clearSourceList(),t.$addSourceList(t.$playlist[t.currentTrack]),t.load(a),t.currentTrack++})}},prev:function(e){var t=this;if(t.currentTrack&&t.currentTrack-1){var a=e||t.playing;t.pause(),n(function(){t.$clearSourceList(),t.$addSourceList(t.$playlist[t.currentTrack-2]),t.load(a),t.currentTrack--})}},setPlaybackRate:function(e){this.$domEl.playbackRate=e},setVolume:function(e){this.$domEl.volume=e},seek:function(e){var t,n=0;return"string"!=typeof e?this.$domEl.currentTime=e:(t=e.split(":"),n+=parseInt(t.pop(),10),t.length&&(n+=60*parseInt(t.pop(),10)),t.length&&(n+=3600*parseInt(t.pop(),10)),isNaN(n)?void 0:this.$domEl.currentTime=n)},on:function(e,t){return this.$element.on(e,t)},off:function(e,t){return this.$element.off(e,t)},one:function(e,t){return this.$element.one(e,t)},$addSourceList:function(e){var t=this;if(angular.isArray(e))angular.forEach(e,function(e){var n=document.createElement("SOURCE");angular.forEach(e,function(e,t){n.setAttribute(t,e)}),t.$element.append(n)});else if(angular.isObject(e)){var n=document.createElement("SOURCE");angular.forEach(e,function(e,t){n.setAttribute(t,e)}),t.$element.append(n)}},$clearSourceList:function(){this.$element.contents().remove()},$formatTime:function(e){if(1/0===e)return"∞";var t,n=parseInt(e/3600,10)%24,a=parseInt(e/60,10)%60,r=parseInt(e%60,10),i=(10>a?"0"+a:a)+":"+(10>r?"0"+r:r);return t=n>0?(10>n?"0"+n:n)+":"+i:i},$attachPlaylist:function(e){void 0===e||null===e?this.playlist=[]:this.$playlist=e}},u=function(e,t,n){var r={playing:function(){e.$apply(function(e){e.playing=!0,e.ended=!1})},pause:function(){e.$apply(function(e){e.playing=!1})},ended:function(){!e.$selective&&e.currentTrack<e.tracks?e.next(!0):e.$apply(function(e){e.ended=!0,e.playing=!1})},timeupdate:a(1e3,!1,function(){e.$apply(function(e){e.currentTime=t.currentTime,e.formatTime=e.$formatTime(e.currentTime)})}),loadedmetadata:function(){e.$apply(function(e){e.currentTrack||e.currentTrack++,e.duration=t.duration,e.formatDuration=e.$formatTime(e.duration),t.buffered.length&&(e.loadPercent=parseInt(t.buffered.end(t.buffered.length-1)/e.duration*100,10))})},progress:function(){e.$domEl.buffered.length&&e.$apply(function(e){e.loadPercent=parseInt(t.buffered.end(t.buffered.length-1)/e.duration*100,10),e.network="progress"})},volumechange:function(){e.$apply(function(e){e.volume=t.volume,e.muted=t.muted})},seeked:function(){e.$apply(function(e){e.seeking=!1})},seeking:function(){e.$apply(function(e){e.seeking=!0})},ratechange:function(){e.$apply(function(e){e.playbackRate=t.playbackRate})},stalled:function(){e.$apply(function(e){e.network="stalled"})},suspend:function(){e.$apply(function(e){e.network="suspend"})}};angular.forEach(r,function(e,t){n.on(t,e)})},l=function(t){var n=angular.extend(e.$new(!0),{$element:t,$domEl:t[0],$playlist:void 0,buffered:t[0].buffered,played:t[0].played,seekable:t[0].seekable},r,o);return u(n,t[0],t),n};return{scope:!1,link:function(e,t,n){var a=n.playlist,r=n.mediaPlayer||n.playerControl,o=new l(t),u=e[a];if(u=void 0===a?[]:void 0===e[a]?e[a]=[]:e[a],void 0!==r&&(e[r]=o),"AUDIO"!==t[0].tagName&&"VIDEO"!==t[0].tagName)return new Error("player directive works only when attached to an <audio>/<video> type tag");var c=[],s=t.find("source");1===s.length?u.unshift({src:s[0].src,type:s[0].type,media:s[0].media}):s.length>1&&(angular.forEach(s,function(e){c.push({src:e.src,type:e.type,media:e.media})}),u.unshift(c)),void 0===a?o.$attachPlaylist(u):u.length?(i(o)(u,void 0,e),e.$watch(a,i(o),!0)):e.$watch(a,i(o),!0),e.$on("$destroy",o.$destroy)}}}]),angular.module("mediaPlayer.helpers",[]).factory("throttle",["$timeout",function(e){return function(t,n,a,r){var i,o=0;"boolean"!=typeof n&&(r=a,a=n,n=void 0);var u=function(){var u=this,l=+new Date-o,c=arguments,s=function(){o=+new Date,a.apply(u,c)},d=function(){i=void 0};r&&!i&&s(),i&&e.cancel(i),void 0===r&&l>t?s():n!==!0&&(i=e(r?d:s,void 0===r?t-l:t))};return u}}]);