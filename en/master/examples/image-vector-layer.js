(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{289:function(e,n,t){"use strict";t.r(n);var o,a=t(2),r=t(3),i=t(36),c=t(220),w=t(21),u=t(13),g=t(14),l=t(24),s=t(19),f=t(73),d=new g.c({fill:new l.a({color:"rgba(255, 255, 255, 0.6)"}),stroke:new s.a({color:"#319FD3",width:1}),text:new f.a}),m=new a.a({layers:[new c.a({imageRatio:2,source:new u.a({url:"data/geojson/countries.geojson",format:new i.a}),style:function(e){return d.getText().setText(e.get("name")),d}})],target:"map",view:new r.a({center:[0,0],zoom:1})}),p=new w.a({source:new u.a,map:m,style:new g.c({stroke:new s.a({color:"#f00",width:1}),fill:new l.a({color:"rgba(255,0,0,0.1)"})})}),v=function(e){var n=m.forEachFeatureAtPixel(e,function(e){return e}),t=document.getElementById("info");t.innerHTML=n?n.getId()+": "+n.get("name"):"&nbsp;",n!==o&&(o&&p.getSource().removeFeature(o),n&&p.getSource().addFeature(n),o=n)};m.on("pointermove",function(e){if(!e.dragging){var n=m.getEventPixel(e.originalEvent);v(n)}}),m.on("click",function(e){v(e.pixel)})}},[[289,0]]]);
//# sourceMappingURL=image-vector-layer.js.map