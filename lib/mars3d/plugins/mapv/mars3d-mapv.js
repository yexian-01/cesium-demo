/**
 * Mars3D平台插件,结合mapv可视化功能插件  mars3d-mapv
 *
 * 版本信息：v3.5.0
 * 编译日期：2023-03-16 18:58:55
 * 版权所有：Copyright by 火星科技  http://mars3d.cn
 * 使用单位：免费公开版 ，2022-10-01
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, (window.mapv || require('mapv')), (window.mars3d || require('mars3d'))) :
  typeof define === 'function' && define.amd ? define(['exports', 'mapv', 'mars3d'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["mars3d-mapv"] = {}, global.mapv, global.mars3d));
})(this, (function (exports, mapv, mars3d) { 
'use strict';var _0x36ed85=_0x1d19;(function(_0xfd8bdc,_0x2aa026){var _0x528036={_0x1ad341:0x15f,_0x406d95:0x168,_0x1eaa4a:0x149,_0x1a4170:0x12d,_0x54906a:0x173},_0x872efa=_0x1d19,_0x193406=_0xfd8bdc();while(!![]){try{var _0x3735ef=parseInt(_0x872efa(_0x528036._0x1ad341))/0x1+parseInt(_0x872efa(0x17f))/0x2*(parseInt(_0x872efa(0x13d))/0x3)+-parseInt(_0x872efa(_0x528036._0x406d95))/0x4*(parseInt(_0x872efa(0x185))/0x5)+parseInt(_0x872efa(_0x528036._0x1eaa4a))/0x6*(-parseInt(_0x872efa(0x170))/0x7)+parseInt(_0x872efa(_0x528036._0x1a4170))/0x8+-parseInt(_0x872efa(_0x528036._0x54906a))/0x9*(parseInt(_0x872efa(0x17e))/0xa)+-parseInt(_0x872efa(0x11d))/0xb;if(_0x3735ef===_0x2aa026)break;else _0x193406['push'](_0x193406['shift']());}catch(_0x2392ac){_0x193406['push'](_0x193406['shift']());}}}(_0x5d9e,0x53953));function _interopNamespace(_0x1f8803){var _0x35cd21={_0x14d0e3:0x140},_0x2f4f27={_0x385796:0x12c},_0x36a02a=_0x1d19;if(_0x1f8803&&_0x1f8803['__esModule'])return _0x1f8803;var _0x240eef=Object['create'](null);return _0x1f8803&&Object['keys'](_0x1f8803)[_0x36a02a(_0x35cd21._0x14d0e3)](function(_0x98e75f){var _0x3980e5=_0x36a02a;if(_0x98e75f!=='default'){var _0x5a39a9=Object['getOwnPropertyDescriptor'](_0x1f8803,_0x98e75f);Object[_0x3980e5(_0x2f4f27._0x385796)](_0x240eef,_0x98e75f,_0x5a39a9[_0x3980e5(0x161)]?_0x5a39a9:{'enumerable':!![],'get':function(){return _0x1f8803[_0x98e75f];}});}}),_0x240eef['default']=_0x1f8803,_0x240eef;}var mapv__namespace=_interopNamespace(mapv),mars3d__namespace=_interopNamespace(mars3d);function _0x5d9e(){var _0x4cd72a=['start','width','MapVLayer','DataSet','getContext','_map','key','mousemove','_canvasUpdate','dataSet','all','Cesium','keys','2840365zATyqD','context','clearData','ymin','removeData','__proto__','Cannot\x20call\x20a\x20class\x20as\x20a\x20function','zIndex','COLOR_BUFFER_BIT','cameraMoveStart','off','configurable','Rectangle','resize','mapvFixedHeight','defineProperty','1520024RnjiUI','init','auto','_removedHook','addAnimatorEvent','_onMapClick','function','time','click','position','pointerEvents','Cartographic','0px','call','mapvDepthTest','isFormat','284853eKzVHr','mouseMove','initDevicePixelRatio','forEach','addData','updateData','style','BaseLayer','cameraMoveEnd','create','options','EventType','6QVyqRE','clear','mouseDown','_cache_event','render','Polygon','methods','height','concat','bindEvent','globalCompositeOperation','register','prototype','fromDegrees','bind','_mountedHook','LineString','push','_createCanvas','devicePixelRatio','set','animation','684564gaSRlW','canvas','get','isEnabledTime','getOwnPropertyDescriptor','add','getPrototypeOf','animatorMovestartEvent','xmin','31000bJizXv','_data','argCheck','mars3d-mapv','filter','_addedHook','postRender','getHeight','866383FGBXfQ','clearRect','cartesianToCanvasCoordinates','41787MqHqOZ','construct','getOwnPropertyDescriptors','scene','canvasLayer','Point','update','processData','LayerUtil','length','DomUtil','670NyzzYc','6ASJukN','_mapVRenderer','animator','draw','_reset','baiduMapLayer','80yYGlpC'];_0x5d9e=function(){return _0x4cd72a;};return _0x5d9e();}function ownKeys(_0x462845,_0xe533b7){var _0x189fd2={_0x16c5e8:0x11c},_0x289dd1=_0x1d19,_0x234165=Object[_0x289dd1(_0x189fd2._0x16c5e8)](_0x462845);if(Object['getOwnPropertySymbols']){var _0x5adab6=Object['getOwnPropertySymbols'](_0x462845);_0xe533b7&&(_0x5adab6=_0x5adab6['filter'](function(_0x8fd4f3){var _0xb6eb57=_0x289dd1;return Object[_0xb6eb57(0x163)](_0x462845,_0x8fd4f3)['enumerable'];})),_0x234165['push']['apply'](_0x234165,_0x5adab6);}return _0x234165;}function _objectSpread2(_0xccb734){var _0x3dca82={_0x30f15f:0x175,_0x2aba33:0x175},_0x11a39c=_0x1d19;for(var _0x4e00f5=0x1;_0x4e00f5<arguments[_0x11a39c(0x17c)];_0x4e00f5++){var _0x3bbc89=null!=arguments[_0x4e00f5]?arguments[_0x4e00f5]:{};_0x4e00f5%0x2?ownKeys(Object(_0x3bbc89),!0x0)['forEach'](function(_0xe04e2a){_defineProperty(_0xccb734,_0xe04e2a,_0x3bbc89[_0xe04e2a]);}):Object[_0x11a39c(_0x3dca82._0x30f15f)]?Object['defineProperties'](_0xccb734,Object[_0x11a39c(_0x3dca82._0x2aba33)](_0x3bbc89)):ownKeys(Object(_0x3bbc89))[_0x11a39c(0x140)](function(_0x48ade9){Object['defineProperty'](_0xccb734,_0x48ade9,Object['getOwnPropertyDescriptor'](_0x3bbc89,_0x48ade9));});}return _0xccb734;}function _classCallCheck(_0x447634,_0x400ec4){var _0x4b5523={_0x2f0c6a:0x123},_0x1814a9=_0x1d19;if(!(_0x447634 instanceof _0x400ec4))throw new TypeError(_0x1814a9(_0x4b5523._0x2f0c6a));}function _defineProperties(_0x27de38,_0xf0854f){var _0x163eaa={_0x1f1525:0x128},_0x31c592=_0x1d19;for(var _0x1ba753=0x0;_0x1ba753<_0xf0854f[_0x31c592(0x17c)];_0x1ba753++){var _0x10c783=_0xf0854f[_0x1ba753];_0x10c783['enumerable']=_0x10c783['enumerable']||![],_0x10c783[_0x31c592(_0x163eaa._0x1f1525)]=!![];if('value'in _0x10c783)_0x10c783['writable']=!![];Object['defineProperty'](_0x27de38,_0x10c783[_0x31c592(0x116)],_0x10c783);}}function _createClass(_0x1b0a37,_0x178d72,_0x1c2f2d){var _0x2321a4=_0x1d19;if(_0x178d72)_defineProperties(_0x1b0a37['prototype'],_0x178d72);if(_0x1c2f2d)_defineProperties(_0x1b0a37,_0x1c2f2d);return Object[_0x2321a4(0x12c)](_0x1b0a37,'prototype',{'writable':![]}),_0x1b0a37;}function _defineProperty(_0x1e4b46,_0xed9681,_0x567596){return _0xed9681 in _0x1e4b46?Object['defineProperty'](_0x1e4b46,_0xed9681,{'value':_0x567596,'enumerable':!![],'configurable':!![],'writable':!![]}):_0x1e4b46[_0xed9681]=_0x567596,_0x1e4b46;}function _inherits(_0x131c9b,_0x311c97){var _0x453c6c=_0x1d19;if(typeof _0x311c97!=='function'&&_0x311c97!==null)throw new TypeError('Super\x20expression\x20must\x20either\x20be\x20null\x20or\x20a\x20function');_0x131c9b[_0x453c6c(0x155)]=Object[_0x453c6c(0x146)](_0x311c97&&_0x311c97['prototype'],{'constructor':{'value':_0x131c9b,'writable':!![],'configurable':!![]}}),Object['defineProperty'](_0x131c9b,'prototype',{'writable':![]});if(_0x311c97)_setPrototypeOf(_0x131c9b,_0x311c97);}function _getPrototypeOf(_0x2d515c){return _getPrototypeOf=Object['setPrototypeOf']?Object['getPrototypeOf']:function _0x356705(_0x1ff376){var _0x82f764=_0x1d19;return _0x1ff376[_0x82f764(0x122)]||Object[_0x82f764(0x165)](_0x1ff376);},_getPrototypeOf(_0x2d515c);}function _setPrototypeOf(_0x46eaa3,_0x3f7424){return _setPrototypeOf=Object['setPrototypeOf']||function _0x5d7f3d(_0x1e50f8,_0x314255){return _0x1e50f8['__proto__']=_0x314255,_0x1e50f8;},_setPrototypeOf(_0x46eaa3,_0x3f7424);}function _isNativeReflectConstruct(){var _0x101561=_0x1d19;if(typeof Reflect==='undefined'||!Reflect['construct'])return![];if(Reflect[_0x101561(0x174)]['sham'])return![];if(typeof Proxy==='function')return!![];try{return Boolean[_0x101561(0x155)]['valueOf'][_0x101561(0x13a)](Reflect['construct'](Boolean,[],function(){})),!![];}catch(_0x9a32c3){return![];}}function _assertThisInitialized(_0x1589e6){if(_0x1589e6===void 0x0)throw new ReferenceError('this\x20hasn\x27t\x20been\x20initialised\x20-\x20super()\x20hasn\x27t\x20been\x20called');return _0x1589e6;}function _possibleConstructorReturn(_0x1b0a49,_0xb25e4f){var _0x8248bf=_0x1d19;if(_0xb25e4f&&(typeof _0xb25e4f==='object'||typeof _0xb25e4f===_0x8248bf(0x133)))return _0xb25e4f;else{if(_0xb25e4f!==void 0x0)throw new TypeError('Derived\x20constructors\x20may\x20only\x20return\x20object\x20or\x20undefined');}return _assertThisInitialized(_0x1b0a49);}function _createSuper(_0x3c8532){var _0x647e66={_0x18f2d2:0x174},_0x89189f=_isNativeReflectConstruct();return function _0x54400a(){var _0x46daa9=_0x1d19,_0x2c2a78=_getPrototypeOf(_0x3c8532),_0x1d7a9b;if(_0x89189f){var _0x2829c0=_getPrototypeOf(this)['constructor'];_0x1d7a9b=Reflect[_0x46daa9(_0x647e66._0x18f2d2)](_0x2c2a78,arguments,_0x2829c0);}else _0x1d7a9b=_0x2c2a78['apply'](this,arguments);return _possibleConstructorReturn(this,_0x1d7a9b);};}function _superPropBase(_0x43f76e,_0x2044b5){while(!Object['prototype']['hasOwnProperty']['call'](_0x43f76e,_0x2044b5)){_0x43f76e=_getPrototypeOf(_0x43f76e);if(_0x43f76e===null)break;}return _0x43f76e;}function _0x1d19(_0x1bb522,_0x164d59){var _0x5d9ea2=_0x5d9e();return _0x1d19=function(_0x1d19b1,_0x143f96){_0x1d19b1=_0x1d19b1-0x113;var _0xdc1841=_0x5d9ea2[_0x1d19b1];return _0xdc1841;},_0x1d19(_0x1bb522,_0x164d59);}function _get(){var _0x215a9a={_0x36604e:0x163,_0x5bdffb:0x17c},_0x30e760=_0x1d19;return typeof Reflect!=='undefined'&&Reflect['get']?_get=Reflect[_0x30e760(0x161)]:_get=function _0x2e2403(_0x79ecec,_0x672c11,_0x57a834){var _0xbb08d2=_0x30e760,_0x691252=_superPropBase(_0x79ecec,_0x672c11);if(!_0x691252)return;var _0x1de59a=Object[_0xbb08d2(_0x215a9a._0x36604e)](_0x691252,_0x672c11);if(_0x1de59a['get'])return _0x1de59a['get']['call'](arguments[_0xbb08d2(_0x215a9a._0x5bdffb)]<0x3?_0x79ecec:_0x57a834);return _0x1de59a['value'];},_get['apply'](this,arguments);}var Cesium$1=mars3d__namespace['Cesium'],baiduMapLayer=mapv__namespace?mapv__namespace[_0x36ed85(0x184)]:null,BaseLayer$1=baiduMapLayer?baiduMapLayer['__proto__']:Function,MapVRenderer=function(_0x5ece3d){var _0x2f964d={_0x4e1d26:0x131},_0x502660={_0x3501bd:0x181},_0x4797ec={_0x217327:0x171},_0xcc95b4={_0x9ddfe6:0x179},_0x3e9842={_0x22014f:0x15d,_0x4209d7:0x179},_0x4c5a35={_0x215c83:0x179},_0x39337b={_0xc9db54:0x162,_0x5475c9:0x150,_0x4c1e57:0x147,_0x163e38:0x125,_0x4c49c3:0x16c},_0x5e2088={_0x14402f:0x11e,_0x38bbb9:0x124},_0x316d2f={_0x5637fa:0x11e},_0x40eb2e={_0x3bec5b:0x186},_0x4ba106={_0x1f6a47:0x176,_0x2d087b:0x16a},_0x48cc14=_0x36ed85;_inherits(_0x5469fa,_0x5ece3d);var _0x7ac5f1=_createSuper(_0x5469fa);function _0x5469fa(_0x9f8496,_0x515838,_0x4f1d5a,_0x57ad88){var _0x2ce077=_0x1d19,_0x158f0d;_classCallCheck(this,_0x5469fa),_0x158f0d=_0x7ac5f1['call'](this,_0x9f8496,_0x515838,_0x4f1d5a);if(!BaseLayer$1)return _possibleConstructorReturn(_0x158f0d);return _0x158f0d['map']=_0x9f8496,_0x158f0d[_0x2ce077(_0x4ba106._0x1f6a47)]=_0x9f8496[_0x2ce077(0x176)],_0x158f0d['dataSet']=_0x515838,_0x4f1d5a=_0x4f1d5a||{},_0x158f0d[_0x2ce077(0x12e)](_0x4f1d5a),_0x158f0d[_0x2ce077(_0x4ba106._0x2d087b)](_0x4f1d5a),_0x158f0d['initDevicePixelRatio'](),_0x158f0d[_0x2ce077(0x177)]=_0x57ad88,_0x158f0d['stopAniamation']=!0x1,_0x158f0d[_0x2ce077(0x15e)]=_0x4f1d5a['animation'],_0x158f0d;}return _createClass(_0x5469fa,[{'key':'initDevicePixelRatio','value':function _0x5684e3(){var _0x571c35=_0x1d19;this['devicePixelRatio']=window[_0x571c35(0x15c)]||0x1;}},{'key':_0x48cc14(_0x2f964d._0x4e1d26),'value':function _0x1d8707(){}},{'key':'animatorMovestartEvent','value':function _0x204124(){var _0x5295c2=_0x48cc14,_0x258645=this['options']['animation'];this['isEnabledTime']()&&this[_0x5295c2(0x181)]&&(this['steps']['step']=_0x258645['stepsRange'][_0x5295c2(_0x40eb2e._0x3bec5b)]);}},{'key':'animatorMoveendEvent','value':function _0x5bd09b(){this['isEnabledTime']()&&this['animator'];}},{'key':_0x48cc14(0x114),'value':function _0x124139(){var _0xf3f6bd=_0x48cc14;return this[_0xf3f6bd(0x177)][_0xf3f6bd(0x160)][_0xf3f6bd(0x114)](this[_0xf3f6bd(_0x316d2f._0x5637fa)]);}},{'key':'init','value':function _0x1595f7(_0x3ea68c){var _0x24d158=_0x48cc14;this['options']=_0x3ea68c,this['initDataRange'](_0x3ea68c),this[_0x24d158(_0x5e2088._0x14402f)]=this['options']['context']||'2d',this['options'][_0x24d158(_0x5e2088._0x38bbb9)]&&this['canvasLayer']&&this['canvasLayer']['setZIndex']&&this['canvasLayer']['setZIndex'](this['options']['zIndex']),this['initAnimator']();}},{'key':_0x48cc14(0x118),'value':function _0x52aa47(_0x1bed09){var _0x5b39ba={_0xb66ef3:0x138,_0x57aa58:0x172},_0x5ce1f3=_0x48cc14,_0x1d507b=this['scene'];if(this['canvasLayer']&&!this['stopAniamation']){var _0xaa360a=this['options'][_0x5ce1f3(0x15e)],_0x59a180=this['getContext']();if(this[_0x5ce1f3(_0x39337b._0xc9db54)]()){if(void 0x0===_0x1bed09)return void this['clear'](_0x59a180);this[_0x5ce1f3(0x11e)]==='2d'&&(_0x59a180['save'](),_0x59a180[_0x5ce1f3(0x153)]='destination-out',_0x59a180['fillStyle']='rgba(0,\x200,\x200,\x20.1)',_0x59a180['fillRect'](0x0,0x0,_0x59a180['canvas']['width'],_0x59a180[_0x5ce1f3(0x160)][_0x5ce1f3(_0x39337b._0x5475c9)]),_0x59a180['restore']());}else this['clear'](_0x59a180);if(this[_0x5ce1f3(0x11e)]==='2d')for(var _0x38b398 in this['options']){_0x59a180[_0x38b398]=this[_0x5ce1f3(_0x39337b._0x4c1e57)][_0x38b398];}else _0x59a180[_0x5ce1f3(0x14a)](_0x59a180[_0x5ce1f3(_0x39337b._0x163e38)]);var _0x3e133d={'transferCoordinate':function _0x522d4e(_0x238950){var _0x3f1bbf=_0x5ce1f3,_0x3b7f5e=null,_0xb169d6=_0x1d507b[_0x3f1bbf(0x12b)];_0x1d507b['mapvAutoHeight']&&(_0xb169d6=_0x1d507b['globe'][_0x3f1bbf(0x16f)](Cesium$1[_0x3f1bbf(_0x5b39ba._0xb66ef3)]['fromDegrees'](_0x238950[0x0],_0x238950[0x1])));var _0x3702db=Cesium$1['Cartesian3']['fromDegrees'](_0x238950[0x0],_0x238950[0x1],_0xb169d6);if(!_0x3702db)return _0x3b7f5e;var _0x45fb0b=_0x1d507b[_0x3f1bbf(_0x5b39ba._0x57aa58)](_0x3702db);if(!_0x45fb0b)return _0x3b7f5e;if(_0x1d507b['mapvDepthTest']&&_0x1d507b['mode']===Cesium$1['SceneMode']['SCENE3D']){var _0x260eda=new Cesium$1['EllipsoidalOccluder'](_0x1d507b['globe']['ellipsoid'],_0x1d507b['camera']['positionWC']),_0x123b0e=_0x260eda['isPointVisible'](_0x3702db);if(!_0x123b0e)return _0x3b7f5e;}return[_0x45fb0b['x'],_0x45fb0b['y']];}};void 0x0!==_0x1bed09&&(_0x3e133d[_0x5ce1f3(_0x39337b._0x4c49c3)]=function(_0x2301e2){var _0x4e31e6=_0x5ce1f3,_0x46236d=_0xaa360a['trails']||0xa;return!!(_0x1bed09&&_0x2301e2[_0x4e31e6(0x134)]>_0x1bed09-_0x46236d&&_0x2301e2['time']<_0x1bed09);});var _0x1cc575=this[_0x5ce1f3(0x119)]['get'](_0x3e133d);this[_0x5ce1f3(0x17a)](_0x1cc575),this['options']['unit']==='m'&&this['options']['size'],this['options']['_size']=this['options']['size'];var _0x6df9db=_0x1d507b['cartesianToCanvasCoordinates'](Cesium$1['Cartesian3'][_0x5ce1f3(0x156)](0x0,0x0));if(!_0x6df9db)return;this['drawContext'](_0x59a180,new mapv__namespace['DataSet'](_0x1cc575),this['options'],_0x6df9db),this['options']['updateCallback']&&this['options']['updateCallback'](_0x1bed09);}}},{'key':_0x48cc14(0x142),'value':function _0x2791eb(_0x5cfa77,_0x48f40e){var _0x51dfcf=_0x48cc14,_0x35503c=_0x5cfa77;_0x35503c&&_0x35503c['get']&&(_0x35503c=_0x35503c['get']()),void 0x0!==_0x35503c&&this['dataSet']['set'](_0x35503c),_get(_getPrototypeOf(_0x5469fa['prototype']),_0x51dfcf(0x179),this)[_0x51dfcf(0x13a)](this,{'options':_0x48f40e});}},{'key':_0x48cc14(0x141),'value':function _0x312566(_0x3b1782,_0x4ce2d4){var _0x503100=_0x48cc14,_0x8096be=_0x3b1782;_0x3b1782&&_0x3b1782['get']&&(_0x8096be=_0x3b1782['get']()),this['dataSet'][_0x503100(0x164)](_0x8096be),this[_0x503100(_0x4c5a35._0x215c83)]({'options':_0x4ce2d4});}},{'key':'getData','value':function _0x327ed2(){return this['dataSet'];}},{'key':_0x48cc14(0x121),'value':function _0xdaddc0(_0x2dda1e){var _0x1fd175=_0x48cc14;if(this['dataSet']){var _0x709a1=this['dataSet']['get']({'filter':function _0x5571c7(_0x15d498){return _0x2dda1e==null||typeof _0x2dda1e!=='function'||!_0x2dda1e(_0x15d498);}});this['dataSet'][_0x1fd175(_0x3e9842._0x22014f)](_0x709a1),this[_0x1fd175(_0x3e9842._0x4209d7)]({'options':null});}}},{'key':_0x48cc14(0x11f),'value':function _0x2b8849(){var _0x1149f7=_0x48cc14;this['dataSet']&&this['dataSet'][_0x1149f7(0x14a)](),this[_0x1149f7(_0xcc95b4._0x9ddfe6)]({'options':null});}},{'key':'draw','value':function _0xaa5044(){var _0x3260a2=_0x48cc14;this[_0x3260a2(0x177)][_0x3260a2(0x182)]();}},{'key':'clear','value':function _0x5a9693(_0x33dfea){var _0x351b3a=_0x48cc14;_0x33dfea&&_0x33dfea['clearRect']&&_0x33dfea[_0x351b3a(_0x4797ec._0x217327)](0x0,0x0,_0x33dfea[_0x351b3a(0x160)][_0x351b3a(0x187)],_0x33dfea['canvas']['height']);}},{'key':'destroy','value':function _0x18f2bf(){var _0x4954c5=_0x48cc14;this['clear'](this['getContext']()),this['clearData'](),this['animator']&&this[_0x4954c5(_0x502660._0x3501bd)]['stop'](),this['animator']=null,this['canvasLayer']=null;}}]),_0x5469fa;}(BaseLayer$1);if(mapv__namespace!==null&&mapv__namespace!==void 0x0&&mapv__namespace['DataSet'])mapv__namespace[_0x36ed85(0x113)]['prototype']['transferCoordinate']=function(_0x30467e,_0x5988d3,_0x365e37,_0x24e22e){var _0xb6a492=_0x36ed85;_0x24e22e=_0x24e22e||'_coordinates',_0x365e37=_0x365e37||'coordinates';for(var _0xd02991=0x0;_0xd02991<_0x30467e['length'];_0xd02991++){var _0x2b8f02=_0x30467e[_0xd02991]['geometry'],_0x1dca9d=_0x2b8f02[_0x365e37];switch(_0x2b8f02['type']){case _0xb6a492(0x178):{var _0x3b0de3=_0x5988d3(_0x1dca9d);_0x3b0de3?_0x2b8f02[_0x24e22e]=_0x3b0de3:_0x2b8f02[_0x24e22e]=[-0x3e7,-0x3e7];}break;case _0xb6a492(0x159):{var _0x18fb39=[];for(var _0x1c934f=0x0;_0x1c934f<_0x1dca9d['length'];_0x1c934f++){var _0x2ef79d=_0x5988d3(_0x1dca9d[_0x1c934f]);_0x2ef79d&&_0x18fb39[_0xb6a492(0x15a)](_0x2ef79d);}_0x2b8f02[_0x24e22e]=_0x18fb39;}break;case'MultiLineString':case _0xb6a492(0x14e):{var _0x877fcd=_0x311fd1(_0x1dca9d);_0x2b8f02[_0x24e22e]=_0x877fcd;}break;case'MultiPolygon':{var _0x12f79b=[];for(var _0x30e198=0x0;_0x30e198<_0x1dca9d['length'];_0x30e198++){var _0x4ca32a=_0x311fd1(_0x1dca9d[_0x30e198]);_0x4ca32a['length']>0x0&&_0x12f79b[_0xb6a492(0x15a)](_0x4ca32a);}_0x2b8f02[_0x24e22e]=_0x12f79b;}break;}}function _0x311fd1(_0x495b71){var _0x202712=[];for(var _0x8a0712=0x0;_0x8a0712<_0x495b71['length'];_0x8a0712++){var _0x4f8013=_0x495b71[_0x8a0712],_0x27a652=[];for(var _0x21029e=0x0;_0x21029e<_0x4f8013['length'];_0x21029e++){var _0x5e03f6=_0x5988d3(_0x4f8013[_0x21029e]);_0x5e03f6&&_0x27a652['push'](_0x5e03f6);}_0x27a652['length']>0x0&&_0x202712['push'](_0x27a652);}return _0x202712;}return _0x30467e;};else throw new Error('请引入\x20mapv\x20库\x20');var Cesium=mars3d__namespace[_0x36ed85(0x11b)],BaseLayer=mars3d__namespace['layer'][_0x36ed85(0x144)],divId=0x0,MapVLayer=function(_0x3c2e5f){var _0x1921a7={_0x2d5a93:0x158,_0x954038:0x13f,_0xe25373:0x141,_0x28bf65:0x121,_0x5cacfb:0x14d,_0x206c5a:0x12a},_0x8051d9={_0x592092:0x14f},_0x1b9375={_0x1ffac0:0x147,_0x266327:0x135,_0x490d2f:0x132,_0x48d57e:0x13e,_0x3cbac6:0x14f},_0x5457ee={_0x1aeadc:0x14c},_0x91102={_0x2f4ada:0x14c},_0x5b38e3={_0x2e77d8:0x13c,_0x42957c:0x129,_0x50b92b:0x167},_0xcc777f={_0x3047de:0x160,_0x2274d4:0x143,_0x43ec36:0x143},_0x50f3d7={_0x379eb3:0x17d,_0x42c53b:0x147,_0x235886:0x136,_0x2da620:0x143,_0x27fa9a:0x12f,_0x208446:0x150},_0x1b880d={_0x7a1623:0x11f},_0x55bccf={_0x22b110:0x180},_0x3c57a7={_0x84979c:0x180,_0x5400cb:0x147},_0x45b835={_0x1f2862:0x115,_0x3baf20:0x16e},_0x16133e={_0x38c008:0x115,_0x52da9d:0x127,_0x2e66ac:0x145,_0x2a2b57:0x147,_0x5418cd:0x115,_0x543f25:0x132},_0x420d5a={_0xbf32b5:0x115,_0x39b442:0x132,_0x173da6:0x14f,_0x37b354:0x115},_0x4569c5={_0x54fc4a:0x119,_0x56beb0:0x151,_0x132b48:0x152},_0x1ec80e={_0x41697e:0x147},_0x431d63={_0xf39eda:0x160},_0xe18497={_0x433838:0x137},_0x1bf519={_0x35da76:0x147},_0x4a2dbb=_0x36ed85;_inherits(_0x13a4d,_0x3c2e5f);var _0x55eb54=_createSuper(_0x13a4d);function _0x13a4d(_0x4073b1,_0x406f6d){var _0x5cef12=_0x1d19,_0x4fcecd;return _classCallCheck(this,_0x13a4d),_0x4fcecd=_0x55eb54['call'](this,_0x4073b1),_0x4fcecd['_pointerEvents']=_0x4fcecd[_0x5cef12(_0x1bf519._0x35da76)]['pointerEvents'],_0x4fcecd['dataSet']=_0x406f6d||new mapv__namespace[(_0x5cef12(0x113))](_0x4073b1['data']),_0x4fcecd['canvas']=null,_0x4fcecd;}return _createClass(_0x13a4d,[{'key':'pointerEvents','get':function _0x17355f(){return this['_pointerEvents'];},'set':function _0x3e1e67(_0x1e95eb){var _0x42529b=_0x1d19;this['_pointerEvents']=_0x1e95eb,this['canvas']&&(_0x1e95eb?this['canvas']['style'][_0x42529b(_0xe18497._0x433838)]=_0x42529b(0x11a):this[_0x42529b(0x160)]['style'][_0x42529b(_0xe18497._0x433838)]='none');}},{'key':'_showHook','value':function _0x26b9cd(_0x3263a1){var _0x22b711=_0x1d19;_0x3263a1?this[_0x22b711(_0x431d63._0xf39eda)]['style']['display']='block':this['canvas'][_0x22b711(0x143)]['display']='none';}},{'key':_0x4a2dbb(_0x1921a7._0x2d5a93),'value':function _0x373501(){var _0x352f6a=_0x4a2dbb,_0x33951c,_0x59094d,_0x4f1e76;this[_0x352f6a(0x115)]['scene'][_0x352f6a(0x13b)]=(_0x33951c=this['options']['depthTest'])!==null&&_0x33951c!==void 0x0?_0x33951c:!![],this['_map'][_0x352f6a(0x176)]['mapvAutoHeight']=(_0x59094d=this[_0x352f6a(_0x1ec80e._0x41697e)]['clampToGround'])!==null&&_0x59094d!==void 0x0?_0x59094d:![],this['_map']['scene']['mapvFixedHeight']=(_0x4f1e76=this['options']['fixedHeight'])!==null&&_0x4f1e76!==void 0x0?_0x4f1e76:0x0;}},{'key':_0x4a2dbb(0x16d),'value':function _0x570d3b(){var _0x4756fe=_0x4a2dbb;this[_0x4756fe(0x119)]&&(!this[_0x4756fe(0x119)][_0x4756fe(0x169)]||this[_0x4756fe(_0x4569c5._0x54fc4a)][_0x4756fe(0x169)]['length']===0x0)&&(this['dataSet']['_data']=[][_0x4756fe(_0x4569c5._0x56beb0)](this['dataSet']['_dataCache'])),this['_mapVRenderer']=new MapVRenderer(this['_map'],this['dataSet'],this['options'],this),this['initDevicePixelRatio'](),this['canvas']=this['_createCanvas'](),this['render']=this[_0x4756fe(0x14d)]['bind'](this),this[_0x4756fe(_0x4569c5._0x132b48)](),this['_reset']();}},{'key':'_removedHook','value':function _0x48596e(){this['unbindEvent'](),this['_mapVRenderer']&&(this['_mapVRenderer']['destroy'](),this['_mapVRenderer']=null),this['canvas']['parentElement']['removeChild'](this['canvas']);}},{'key':_0x4a2dbb(_0x1921a7._0x954038),'value':function _0x2144f0(){var _0x980786=_0x4a2dbb;this[_0x980786(0x15c)]=window['devicePixelRatio']||0x1;}},{'key':_0x4a2dbb(0x152),'value':function _0x46f7f2(){var _0x2fb360=_0x4a2dbb,_0x1fe67e,_0x34b372,_0x16b174,_0x2f3551;this[_0x2fb360(_0x420d5a._0xbf32b5)]['on'](mars3d__namespace['EventType'][_0x2fb360(0x14b)],this['_onMoveStartEvent'],this),this['_map']['on'](mars3d__namespace['EventType'][_0x2fb360(0x126)],this['_onMoveStartEvent'],this),this['_map']['on'](mars3d__namespace['EventType']['cameraMoveEnd'],this['_onMoveEndEvent'],this),(_0x1fe67e=this['options'])!==null&&_0x1fe67e!==void 0x0&&(_0x34b372=_0x1fe67e['methods'])!==null&&_0x34b372!==void 0x0&&_0x34b372['click']&&this['_map']['on'](mars3d__namespace['EventType'][_0x2fb360(0x135)],this[_0x2fb360(_0x420d5a._0x39b442)],this),(_0x16b174=this['options'])!==null&&_0x16b174!==void 0x0&&(_0x2f3551=_0x16b174[_0x2fb360(_0x420d5a._0x173da6)])!==null&&_0x2f3551!==void 0x0&&_0x2f3551['mousemove']&&this[_0x2fb360(_0x420d5a._0x37b354)]['on'](mars3d__namespace['EventType']['mouseMove'],this['_onMapMouseMove'],this);}},{'key':'unbindEvent','value':function _0x191d93(){var _0x258def=_0x4a2dbb,_0x37fe31,_0x5bf34a,_0x25a467,_0x54da68;this[_0x258def(_0x16133e._0x38c008)]['off'](mars3d__namespace[_0x258def(0x148)][_0x258def(0x14b)],this['_onMoveStartEvent'],this),this['_map'][_0x258def(_0x16133e._0x52da9d)](mars3d__namespace['EventType']['cameraMoveStart'],this['_onMoveStartEvent'],this),this['_map']['off'](mars3d__namespace['EventType'][_0x258def(_0x16133e._0x2e66ac)],this['_onMoveEndEvent'],this),this['_map']['off'](mars3d__namespace['EventType']['postRender'],this['_reset'],this),(_0x37fe31=this[_0x258def(_0x16133e._0x2a2b57)])!==null&&_0x37fe31!==void 0x0&&(_0x5bf34a=_0x37fe31[_0x258def(0x14f)])!==null&&_0x5bf34a!==void 0x0&&_0x5bf34a['click']&&this[_0x258def(_0x16133e._0x5418cd)][_0x258def(_0x16133e._0x52da9d)](mars3d__namespace[_0x258def(0x148)][_0x258def(0x135)],this[_0x258def(_0x16133e._0x543f25)],this),(_0x25a467=this['options'])!==null&&_0x25a467!==void 0x0&&(_0x54da68=_0x25a467['methods'])!==null&&_0x54da68!==void 0x0&&_0x54da68['mousemove']&&this['_map']['off'](mars3d__namespace['EventType']['mouseMove'],this['_onMapMouseMove'],this);}},{'key':'_onMoveStartEvent','value':function _0x121989(){var _0x7b5bd4=_0x4a2dbb;this['_mapVRenderer']&&(this['_mapVRenderer'][_0x7b5bd4(0x166)](),this[_0x7b5bd4(0x115)]['off'](mars3d__namespace['EventType']['postRender'],this['_reset'],this),this['_map']['on'](mars3d__namespace['EventType'][_0x7b5bd4(0x16e)],this['_reset'],this));}},{'key':'_onMoveEndEvent','value':function _0x141685(){var _0x5b7262=_0x4a2dbb;this['_mapVRenderer']&&(this[_0x5b7262(_0x45b835._0x1f2862)]['off'](mars3d__namespace['EventType'][_0x5b7262(_0x45b835._0x3baf20)],this['_reset'],this),this['_mapVRenderer']['animatorMoveendEvent'](),this['_reset']());}},{'key':'_setOptionsHook','value':function _0x102d7a(_0x294004,_0x3dc2ea){var _0x56a150=_0x4a2dbb;this[_0x56a150(0x130)](),this['_addedHook']();}},{'key':_0x4a2dbb(_0x1921a7._0xe25373),'value':function _0x5255e3(_0x4a66bd){var _0x3252de=_0x4a2dbb;this[_0x3252de(_0x3c57a7._0x84979c)]&&this['_mapVRenderer'][_0x3252de(0x141)](_0x4a66bd,this[_0x3252de(_0x3c57a7._0x5400cb)]);}},{'key':'updateData','value':function _0xcc743f(_0x4b8fbe){var _0x594808=_0x4a2dbb;this['_mapVRenderer']&&this['_mapVRenderer']['updateData'](_0x4b8fbe,this[_0x594808(0x147)]);}},{'key':'getData','value':function _0x347b9b(){return this['_mapVRenderer']&&(this['dataSet']=this['_mapVRenderer']['getData']()),this['dataSet'];}},{'key':_0x4a2dbb(_0x1921a7._0x28bf65),'value':function _0x5b8457(_0x2613e1){var _0x2b2f74=_0x4a2dbb;this[_0x2b2f74(_0x55bccf._0x22b110)]&&this['_mapVRenderer']['removeData'](_0x2613e1);}},{'key':'removeAllData','value':function _0x19f807(){var _0x23b5a5=_0x4a2dbb;this['_mapVRenderer']&&this['_mapVRenderer'][_0x23b5a5(_0x1b880d._0x7a1623)]();}},{'key':_0x4a2dbb(0x15b),'value':function _0x4a738a(){var _0x261a94=_0x4a2dbb,_0x1df9e5=mars3d__namespace[_0x261a94(_0x50f3d7._0x379eb3)]['create'](_0x261a94(0x160),_0x261a94(0x16b),this['_map']['container']);_0x1df9e5['id']=this[_0x261a94(_0x50f3d7._0x42c53b)]['layerid']||'mapv'+divId++,_0x1df9e5['style'][_0x261a94(_0x50f3d7._0x235886)]='absolute',_0x1df9e5['style']['top']='0px',_0x1df9e5[_0x261a94(_0x50f3d7._0x2da620)]['left']=_0x261a94(0x139),_0x1df9e5['style']['pointerEvents']=this['_pointerEvents']?_0x261a94(_0x50f3d7._0x27fa9a):'none',_0x1df9e5['style']['zIndex']=this[_0x261a94(0x147)]['zIndex']||0x64,_0x1df9e5['width']=parseInt(this['_map']['canvas']['width']),_0x1df9e5[_0x261a94(_0x50f3d7._0x208446)]=parseInt(this['_map']['canvas']['height']),_0x1df9e5['style']['width']=this['_map']['canvas']['style']['width'],_0x1df9e5['style']['height']=this['_map']['canvas']['style']['height'];if(this['options']['context']==='2d'){var _0x48c445=this[_0x261a94(0x15c)];_0x1df9e5['getContext'](this['options']['context'])['scale'](_0x48c445,_0x48c445);}return _0x1df9e5;}},{'key':_0x4a2dbb(0x183),'value':function _0x962655(){this['resize'](),this['render']();}},{'key':'draw','value':function _0x21a80a(){this['_reset']();}},{'key':'remove','value':function _0xb53375(){var _0x5df909=_0x4a2dbb;this[_0x5df909(0x180)]&&(this['_mapVRenderer']['destroy'](),this['_mapVRenderer']=null),this['canvas']['parentElement']['removeChild'](this['canvas']);}},{'key':_0x4a2dbb(_0x1921a7._0x5cacfb),'value':function _0x5c94a6(){this['_mapVRenderer']['_canvasUpdate']();}},{'key':_0x4a2dbb(_0x1921a7._0x206c5a),'value':function _0x398f7f(){var _0xf4d319=_0x4a2dbb;if(this[_0xf4d319(_0xcc777f._0x3047de)]){var _0x4ead66=this[_0xf4d319(0x160)];_0x4ead66[_0xf4d319(_0xcc777f._0x2274d4)]['position']='absolute',_0x4ead66[_0xf4d319(0x143)]['top']='0px',_0x4ead66[_0xf4d319(0x143)]['left']='0px',_0x4ead66['width']=parseInt(this[_0xf4d319(0x115)][_0xf4d319(0x160)]['width']),_0x4ead66['height']=parseInt(this['_map'][_0xf4d319(_0xcc777f._0x3047de)]['height']),_0x4ead66['style']['width']=this[_0xf4d319(0x115)]['canvas'][_0xf4d319(_0xcc777f._0x43ec36)]['width'],_0x4ead66['style']['height']=this['_map'][_0xf4d319(_0xcc777f._0x3047de)]['style'][_0xf4d319(0x150)];}}},{'key':'getRectangle','value':function _0x4fbe5a(_0x254493){var _0x1240ce=_0x4a2dbb;if(!this['dataSet']||!this['dataSet']['_data'])return;var _0x182284=mars3d__namespace['Util']['getExtentByGeoJSON']({'type':'FeatureCollection','features':this['dataSet'][_0x1240ce(0x169)]});if(!_0x182284)return;return _0x254493!==null&&_0x254493!==void 0x0&&_0x254493[_0x1240ce(_0x5b38e3._0x2e77d8)]?_0x182284:Cesium[_0x1240ce(_0x5b38e3._0x42957c)][_0x1240ce(0x156)](_0x182284[_0x1240ce(_0x5b38e3._0x50b92b)],_0x182284[_0x1240ce(0x120)],_0x182284['xmax'],_0x182284['ymax']);}},{'key':'_onMapClick','value':function _0x4f2d21(_0x53fa04){var _0x55ae5d=_0x4a2dbb;this[_0x55ae5d(_0x91102._0x2f4ada)]=_0x53fa04,this['_mapVRenderer']&&this[_0x55ae5d(0x180)]['clickEvent'](_0x53fa04['windowPosition'],_0x53fa04);}},{'key':'_onMapMouseMove','value':function _0x4a4ba0(_0x3e5aa1){var _0x468224=_0x4a2dbb;this[_0x468224(_0x5457ee._0x1aeadc)]=_0x3e5aa1,this['_mapVRenderer']&&this[_0x468224(0x180)]['mousemoveEvent'](_0x3e5aa1['windowPosition'],_0x3e5aa1);}},{'key':'on','value':function _0x16d7a8(_0x36c1bf,_0x2b3b67,_0x145bbc){var _0x2dd04e=_0x4a2dbb,_0x5f4f34=this;this[_0x2dd04e(_0x1b9375._0x1ffac0)][_0x2dd04e(0x14f)]=this['options']['methods']||{};if(_0x36c1bf===mars3d__namespace['EventType']['click'])this['options'][_0x2dd04e(0x14f)][_0x2dd04e(0x135)]=function(_0x50b34a){_0x50b34a&&_0x2b3b67['bind'](_0x145bbc)(_objectSpread2(_objectSpread2({},_0x5f4f34['_cache_event']),{},{'layer':_0x5f4f34,'data':_0x50b34a}));},this['_map']['on'](mars3d__namespace['EventType'][_0x2dd04e(_0x1b9375._0x266327)],this[_0x2dd04e(_0x1b9375._0x490d2f)],this);else _0x36c1bf===mars3d__namespace['EventType'][_0x2dd04e(_0x1b9375._0x48d57e)]&&(this[_0x2dd04e(0x147)][_0x2dd04e(_0x1b9375._0x3cbac6)]['mousemove']=function(_0xf59cdf){var _0x58beee=_0x2dd04e;_0xf59cdf&&_0x2b3b67[_0x58beee(0x157)](_0x145bbc)(_objectSpread2(_objectSpread2({},_0x5f4f34['_cache_event']),{},{'layer':_0x5f4f34,'data':_0xf59cdf}));},this[_0x2dd04e(0x115)]['on'](mars3d__namespace['EventType']['mouseMove'],this['_onMapMouseMove'],this));return this;}},{'key':'off','value':function _0x22860c(_0x41087e,_0x25db4e){var _0x5d90ba=_0x4a2dbb;if(_0x41087e==='click'){var _0x54e81c;this['_map'][_0x5d90ba(0x127)](_0x41087e,this['_onMapClick'],this),(_0x54e81c=this['options']['methods'])!==null&&_0x54e81c!==void 0x0&&_0x54e81c['mousemove']&&delete this['options'][_0x5d90ba(_0x8051d9._0x592092)]['click'];}else{if(_0x41087e==='mouseMove'){var _0x54194f;this['_map']['off'](_0x41087e,this['_onMapMouseMove'],this),(_0x54194f=this[_0x5d90ba(0x147)][_0x5d90ba(0x14f)])!==null&&_0x54194f!==void 0x0&&_0x54194f[_0x5d90ba(0x117)]&&delete this[_0x5d90ba(0x147)]['methods']['mousemove'];}}return this;}}]),_0x13a4d;}(BaseLayer);mars3d__namespace[_0x36ed85(0x17b)][_0x36ed85(0x154)]('mapv',MapVLayer),mars3d__namespace['layer']['MapVLayer']=MapVLayer,exports[_0x36ed85(0x188)]=MapVLayer,Object['keys'](mapv)[_0x36ed85(0x140)](function(_0x4a35d8){if(_0x4a35d8!=='default'&&!exports['hasOwnProperty'](_0x4a35d8))Object['defineProperty'](exports,_0x4a35d8,{'enumerable':!![],'get':function(){return mapv[_0x4a35d8];}});}),Object['defineProperty'](exports,'__esModule',{'value':!![]});
}));