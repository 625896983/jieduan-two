// JavaScript Document
require.config({
//	配置模块的基础目录
//	baseUrl:"module3",
//	设置模块的别名
//	paths:{
//		diyigemokuai:"mA",
//		diergemokuai:"mB",
//		jq:"../libs/jquery"
//	}
})


require([/*"jq","diyigemokuai","diergemokuai",*/"mA"],(a)=>{
	console.log("所有模块加载完成");
//	
//	console.log(asd);
//	console.log(qwe);
//	
//	asd.show(qwe.data);
//	qwe.show(asd.data);
//	
//	asd.get$();
	
	/*var t = */new a.list()/*c.t(qwe.data)*/;
//	t.init();
});