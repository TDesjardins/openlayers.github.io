(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{402:function(t,i,e){"use strict";e.r(i);var r=e(2),a=e(3),o=e(6),s=e(70),n=e(11),h=e(143),c=e(23),u=e(7),p=e(10),g=e(1),_=e(12),l=e(99),m=e(109),d=function(t){function i(i){var e=i||{};t.call(this,{attributions:e.attributions,projection:e.projection,resolutions:e.resolutions}),this.crossOrigin_=void 0!==e.crossOrigin?e.crossOrigin:null,this.hidpi_=void 0===e.hidpi||e.hidpi,this.url_=e.url,this.imageLoadFunction_=void 0!==e.imageLoadFunction?e.imageLoadFunction:l.b,this.params_=e.params||{},this.image_=null,this.imageSize_=[0,0],this.renderedRevision_=0,this.ratio_=void 0!==e.ratio?e.ratio:1.5}return t&&(i.__proto__=t),i.prototype=Object.create(t&&t.prototype),i.prototype.constructor=i,i.prototype.getParams=function(){return this.params_},i.prototype.getImageInternal=function(t,i,e,r){if(void 0===this.url_)return null;i=this.findNearestResolution(i),e=this.hidpi_?e:1;var a=this.image_;if(a&&this.renderedRevision_==this.getRevision()&&a.getResolution()==i&&a.getPixelRatio()==e&&Object(g.g)(a.getExtent(),t))return a;var o={F:"image",FORMAT:"PNG32",TRANSPARENT:!0};Object(_.a)(o,this.params_);var s=((t=t.slice())[0]+t[2])/2,n=(t[1]+t[3])/2;if(1!=this.ratio_){var c=this.ratio_*Object(g.E)(t)/2,l=this.ratio_*Object(g.A)(t)/2;t[0]=s-c,t[1]=n-l,t[2]=s+c,t[3]=n+l}var m=i/e,d=Math.ceil(Object(g.E)(t)/m),v=Math.ceil(Object(g.A)(t)/m);t[0]=s-m*d/2,t[2]=s+m*d/2,t[1]=n-m*v/2,t[3]=n+m*v/2,this.imageSize_[0]=d,this.imageSize_[1]=v;var O=this.getRequestUrl_(t,this.imageSize_,e,r,o);return this.image_=new h.a(t,i,e,O,this.crossOrigin_,this.imageLoadFunction_),this.renderedRevision_=this.getRevision(),Object(u.a)(this.image_,p.a.CHANGE,this.handleImageChange,this),this.image_},i.prototype.getImageLoadFunction=function(){return this.imageLoadFunction_},i.prototype.getRequestUrl_=function(t,i,e,r,a){var o=r.getCode().split(":").pop();a.SIZE=i[0]+","+i[1],a.BBOX=t.join(","),a.BBOXSR=o,a.IMAGESR=o,a.DPI=Math.round(90*e);var s=this.url_,n=s.replace(/MapServer\/?$/,"MapServer/export").replace(/ImageServer\/?$/,"ImageServer/exportImage");return n==s&&Object(c.a)(!1,50),Object(m.a)(n,a)},i.prototype.getUrl=function(){return this.url_},i.prototype.setImageLoadFunction=function(t){this.image_=null,this.imageLoadFunction_=t,this.changed()},i.prototype.setUrl=function(t){t!=this.url_&&(this.url_=t,this.image_=null,this.changed())},i.prototype.updateParams=function(t){Object(_.a)(this.params_,t),this.image_=null,this.changed()},i}(l.a),v=[new o.a({source:new n.b}),new s.a({source:new d({ratio:1,params:{},url:"https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Specialty/ESRI_StateCityHighway_USA/MapServer"})})];new r.a({layers:v,target:"map",view:new a.a({center:[-10997148,4569099],zoom:4})})}},[[402,0]]]);
//# sourceMappingURL=arcgis-image.js.map