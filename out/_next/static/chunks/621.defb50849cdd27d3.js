(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[621],{3621:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return x}});var r,u,l=t(7437),a=t(2265);let o=(0,a.createContext)(null),i=o.Provider;var c=t(7691);function f(){return(f=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}let s=(0,a.forwardRef)(function({bounds:e,boundsOptions:n,center:t,children:r,className:u,id:l,placeholder:o,style:s,whenReady:p,zoom:d,...m},g){let[v]=(0,a.useState)({className:u,id:l,style:s}),[b,y]=(0,a.useState)(null);(0,a.useImperativeHandle)(g,()=>b?.map??null,[b]);let h=(0,a.useCallback)(r=>{if(null!==r&&null===b){let u=new c.Map(r,m);null!=t&&null!=d?u.setView(t,d):null!=e&&u.fitBounds(e,n),null!=p&&u.whenReady(p),y(Object.freeze({__version:1,map:u}))}},[]);(0,a.useEffect)(()=>()=>{b?.map.remove()},[b]);let x=b?a.createElement(i,{value:b},r):o??null;return a.createElement("div",f({},v,{ref:h}),x)});function p(e,n,t){return Object.freeze({instance:e,context:n,container:t})}function d(e,n){return null==n?function(n,t){let r=(0,a.useRef)();return r.current||(r.current=e(n,t)),r}:function(t,r){let u=(0,a.useRef)();u.current||(u.current=e(t,r));let l=(0,a.useRef)(t),{instance:o}=u.current;return(0,a.useEffect)(function(){l.current!==t&&(n(o,t,l.current),l.current=t)},[o,t,r]),u}}function m(e,n){let t=e.pane??n.pane;return t?{...e,pane:t}:e}function g(e){return function(n){var t;let r=function(){let e=(0,a.useContext)(o);if(null==e)throw Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return e}(),u=e(m(n,r),r);return!function(e,n){let t=(0,a.useRef)(n);(0,a.useEffect)(function(){n!==t.current&&null!=e.attributionControl&&(null!=t.current&&e.attributionControl.removeAttribution(t.current),null!=n&&e.attributionControl.addAttribution(n)),t.current=n},[e,n])}(r.map,n.attribution),!function(e,n){let t=(0,a.useRef)();(0,a.useEffect)(function(){return null!=n&&e.instance.on(n),t.current=n,function(){null!=t.current&&e.instance.off(t.current),t.current=null}},[e,n])}(u.current,n.eventHandlers),t=u.current,(0,a.useEffect)(function(){return(r.layerContainer??r.map).addLayer(t.instance),function(){r.layerContainer?.removeLayer(t.instance),r.map.removeLayer(t.instance)}},[r,t]),u}}t(4887);let v=(r=g(d(function({url:e,...n},t){return p(new c.TileLayer(e,m(n,t)),t)},function(e,n,t){!function(e,n,t){let{opacity:r,zIndex:u}=n;null!=r&&r!==t.opacity&&e.setOpacity(r),null!=u&&u!==t.zIndex&&e.setZIndex(u)}(e,n,t);let{url:r}=n;null!=r&&r!==t.url&&e.setUrl(r)})),(0,a.forwardRef)(function(e,n){let{instance:t}=r(e).current;return(0,a.useImperativeHandle)(n,()=>t),null})),b=(u=g(d(function({position:e,...n},t){var r;let u=new c.Marker(e,n);return p(u,(r={overlayContainer:u},Object.freeze({...t,...r})))},function(e,n,t){n.position!==t.position&&e.setLatLng(n.position),null!=n.icon&&n.icon!==t.icon&&e.setIcon(n.icon),null!=n.zIndexOffset&&n.zIndexOffset!==t.zIndexOffset&&e.setZIndexOffset(n.zIndexOffset),null!=n.opacity&&n.opacity!==t.opacity&&e.setOpacity(n.opacity),null!=e.dragging&&n.draggable!==t.draggable&&(!0===n.draggable?e.dragging.enable():e.dragging.disable())})),(0,a.forwardRef)(function(e,n){let{instance:t,context:r}=u(e).current;return(0,a.useImperativeHandle)(n,()=>t),null==e.children?null:a.createElement(i,{value:r},e.children)}));var y=t(4429),h=t.n(y);function x(){let[e,n]=(0,a.useState)({lat:-4.043477,lng:39.668205});return(0,l.jsx)("div",{className:h().map_container,children:(0,l.jsxs)(s,{center:e,zoom:9,className:h().map_container,children:[(0,l.jsx)(v,{attribution:'\xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",className:h().map_container}),location.loaded&&!location.error&&(0,l.jsx)(b,{position:[location.coordinates.lat,location.coordinates.lng]})]})})}t(966)},966:function(){}}]);