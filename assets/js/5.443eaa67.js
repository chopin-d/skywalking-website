(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{251:function(t,e,s){t.exports=s.p+"assets/img/1.cc12d454.jpg"},252:function(t,e,s){t.exports=s.p+"assets/img/2.4b1066dc.jpg"},253:function(t,e,s){t.exports=s.p+"assets/img/3.2483e9e9.jpg"},254:function(t,e,s){t.exports=s.p+"assets/img/4.98f6143b.jpg"},255:function(t,e,s){t.exports=s.p+"assets/img/5.2b41eb41.jpg"},256:function(t,e,s){t.exports=s.p+"assets/img/6.2f409e9d.jpg"},257:function(t,e,s){t.exports=s.p+"assets/img/7.c5abfd41.jpg"},258:function(t,e,s){t.exports=s.p+"assets/img/8.6fe9271d.jpg"},259:function(t,e,s){t.exports=s.p+"assets/img/9.dc08fe20.jpg"},260:function(t,e,s){t.exports=s.p+"assets/img/10.2f58e27e.jpg"},261:function(t,e,s){t.exports=s.p+"assets/img/11.ddd6d7c5.jpg"},262:function(t,e,s){t.exports=s.p+"assets/img/12.997ce7c6.jpg"},263:function(t,e,s){t.exports=s.p+"assets/img/13.46b5172c.jpg"},306:function(t,e,s){"use strict";s.r(e);var n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("IP")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("用途")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("备注")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("10.193.78.1")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("oap-server")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("skywalking 的oap服务（或者说collector所在的服务器）")])]),t._v(" "),s("tr",[s("td",[t._v("10.193.78.2")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("agent")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("skywalking agent运行所在的服务器")])]),t._v(" "),s("tr",[s("td",[t._v("10.193.78.0")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("IDE")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("你自己装IDE也就是IntelliJ IDEA的机器")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("首要条件，下载源码后，先用maven 打包编译。然后使用Idea打开源码的父目录，整体结构大致如下图\n"),e("img",{attrs:{src:s(251),alt:"IMAGE"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(252),alt:"IMAGE"}}),this._v("\n点击Edit Configurations\n在弹出窗口中依次找到（红色线框的部分）并点击\n"),e("img",{attrs:{src:s(253),alt:"IMAGE"}}),this._v(" "),e("img",{attrs:{src:s(254),alt:"IMAGE"}}),this._v("\n打开的界面如下\n"),e("img",{attrs:{src:s(255),alt:"IMAGE"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("然后找到Use module classpath 选择 apm-agent\n最终的结果如下：\n"),e("img",{attrs:{src:s(256),alt:"IMAGE"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("然后点击Apply，并找到如下内容，并且复制待用\n"),e("img",{attrs:{src:s(257),alt:"IMAGE"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("找到agent配置的脚本，并打开，找到配置agent的地方，\n"),e("img",{attrs:{src:s(258),alt:"IMAGE"}}),this._v("\n就这个地方，在这个后边加上刚才复制的内容\n最终的结果如下\n"),e("img",{attrs:{src:s(259),alt:"IMAGE"}}),this._v("\n提供一个我配置的weblogic的配置（仅供参考）\n"),e("img",{attrs:{src:s(260),alt:"IMAGE"}}),this._v("\n然后重启应用（agent）")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("回到Idea中找到这个地方，并点击debug按钮，你没看错，就是红色圈住的地方\n"),e("img",{attrs:{src:s(261),alt:"IMAGE"}}),this._v("\n然后控制台如果出现以下字样：\n"),e("img",{attrs:{src:s(262),alt:"IMAGE"}}),this._v("\n那么恭喜你，可以愉快的加断点调试了。\nps:需要注意的是agent的、\nservice instance的注册可能不能那么愉快的调试。因为这个注册比较快，而且是在agent启动的时候就发生的，\n而远程调试也需要agent打开后才可以调试，所以，如果你手快当我没说这句话。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(263),alt:"IMAGE"}})])}],a=s(0),i=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"skywalking的远程调试"}},[t._v("Skywalking的远程调试")]),t._v(" "),s("p",[t._v("ps:本文仅写给菜鸟，以及不知道如何远程调试的程序员，并且仅仅适用skywalking的远程调试")]),t._v(" "),s("p",[t._v("##概述\n远程调试的目的是为了解决代码或者说程序包部署在服务器上运行，只能通过log来查看问题，以及不能跟在本地IDE运行debug那样查找问题，观看程序运行流程...\n想想当你的程序运行在服务器上，你在本地的IDE随时debug，是不是很爽的感觉。")]),t._v(" "),s("p",[t._v("好了不废话，切入正题。")]),t._v(" "),s("h2",{attrs:{id:"环境篇"}},[t._v("环境篇")]),t._v(" "),s("p",[t._v("IDE：推荐 "),s("a",{attrs:{href:"https://www.jetbrains.com/idea/",target:"_blank",rel:"noopener noreferrer"}},[t._v("IntelliJ IDEA"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("开发语言: 本文仅限于java，其他语言请自行询问google爸爸或者baidu娘娘")]),t._v(" "),s("p",[t._v("源代码：自行从github下载，并且确保你运行的skywalking包也源代码的一致，（也就是说你自己从源代码编译打包运行，虽然不一样也可以调试，但是你想想你在本地开发，更改完代码，没有重新运行，debug出现的诡异情况）")]),t._v(" "),s("h2",{attrs:{id:"场景篇"}},[t._v("场景篇")]),t._v(" "),s("p",[t._v("假定有如下三台机器")]),t._v(" "),t._m(0),t._v(" "),s("p",[t._v("以上环境，场景请自行安装好，并确认正常运行。本文不在赘述")]),t._v(" "),s("p",[t._v("废话终于说完了")]),t._v(" "),s("h2",{attrs:{id:"操作篇"}},[t._v("操作篇")]),t._v(" "),t._m(1),t._v(" "),s("h3",{attrs:{id:"_1-agent调试"}},[t._v("1 :agent调试")]),t._v(" "),s("h4",{attrs:{id:"_1-idea-配置部分"}},[t._v("1)Idea 配置部分")]),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("修改Name值，自己随意，好记即可\n然后Host输入10.193.78.2 Port默认或者其他的，重要的是这个端口在10.193.78.2上没有被占用")]),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("注意选择目标agent运行的jdk版本，很重要")]),t._v(" "),t._m(4),t._v(" "),s("h4",{attrs:{id:"_2）agent配置部分"}},[t._v("2）agent配置部分")]),t._v(" "),t._m(5),t._v(" "),s("h4",{attrs:{id:"_3）调试"}},[t._v("3）调试")]),t._v(" "),t._m(6),t._v(" "),s("h3",{attrs:{id:"_2-oap-server的调试（也就是collector的调试）"}},[t._v("2 :oap-server的调试（也就是collector的调试）")]),t._v(" "),s("p",[t._v("具体过程不在赘述，和上一步的agent调试大同小异，不同的是\nUse module classpath需要选择oap-server")]),t._v(" "),t._m(7)])},n,!1,null,null,null);e.default=i.exports}}]);