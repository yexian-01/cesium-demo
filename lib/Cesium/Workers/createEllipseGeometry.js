define(["./Matrix3-81054f0f","./defaultValue-f6d5e6da","./EllipseGeometry-6d8255c4","./Math-2ce22ee9","./Transforms-845c8fd8","./Matrix2-413c4048","./RuntimeError-9b4ce3fb","./combine-0c102d93","./ComponentDatatype-ab629b88","./WebGLConstants-7f557f93","./EllipseGeometryLibrary-547a3631","./GeometryAttribute-13894b50","./GeometryAttributes-1e4ddcd2","./GeometryInstance-0318e0cd","./GeometryOffsetAttribute-2579b8d2","./GeometryPipeline-14386f39","./AttributeCompression-48e336db","./EncodedCartesian3-5e2017ab","./IndexDatatype-d3db4e7d","./IntersectionTests-e917ad5d","./Plane-6add0ae1","./VertexFormat-fbdec922"],(function(e,t,r,n,i,o,s,a,l,m,c,p,u,y,d,G,f,b,E,C,x,A){"use strict";return function(n,i){return t.defined(i)&&(n=r.EllipseGeometry.unpack(n,i)),n._center=e.Cartesian3.clone(n._center),n._ellipsoid=e.Ellipsoid.clone(n._ellipsoid),r.EllipseGeometry.createGeometry(n)}}));