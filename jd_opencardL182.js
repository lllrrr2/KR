/*
6.9-6.30 安佳 邀新有礼


1.开1张卡
2.已开卡的不算有效人数

活动规则：
邀请1人积分，邀请3人20豆子，邀请5人50豆子

最多可以获取10次机会，最大化收入：20*10

领取一次算一次机会，并扣除邀请人数，所以就不限制多少自动停脚本了。

目前只有3人20豆，50的已经被换完了。

第一个账号助力作者 其他依次助力CK1
第一个CK失效会退出脚本

————————————————
入口：[ 6.9-6.30 安佳 邀新有礼 ]

请求太频繁会被黑ip
过10分钟再执行

cron:11 23 9-30 6 *
============Quantumultx===============
[task_local]
#6.9-6.30 安佳 邀新有礼
11 23 9-30 6 * jd_opencardL182.js, tag=6.9-6.30 安佳 邀新有礼, enabled=true

*/

const $ = new Env('6.9-6.30 安佳 邀新有礼');
var _0xodR = 'jsjiami.com.v6', _0xodR_ = ['_0xodR'],
    _0x323b = [_0xodR, '\x69\x73\x4e\x6f\x64\x65', '\x2e\x2f\x6a\x64\x43\x6f\x6f\x6b\x69\x65\x2e\x6a\x73', '\x2e\x2f\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79', '\x6b\x65\x79\x73', '\x66\x6f\x72\x45\x61\x63\x68', '\x70\x75\x73\x68', '\x65\x6e\x76', '\x4a\x44\x5f\x44\x45\x42\x55\x47', '\x66\x61\x6c\x73\x65', '\x6c\x6f\x67', '\x67\x65\x74\x64\x61\x74\x61', '\x43\x6f\x6f\x6b\x69\x65\x4a\x44', '\x43\x6f\x6f\x6b\x69\x65\x4a\x44\x32', '\x43\x6f\x6f\x6b\x69\x65\x73\x4a\x44', '\x6d\x61\x70', '\x63\x6f\x6f\x6b\x69\x65', '\x66\x69\x6c\x74\x65\x72', '\x68\x6f\x74\x46\x6c\x61\x67', '\x6f\x75\x74\x46\x6c\x61\x67', '\x61\x63\x74\x69\x76\x69\x74\x79\x45\x6e\x64', '\x6d\x73\x67', '\x6e\x61\x6d\x65', '\u3010\u63d0\u793a\u3011\u8bf7\u5148\u83b7\u53d6\x63\x6f\x6f\x6b\x69\x65\x0a\u76f4\u63a5\u4f7f\u7528\x4e\x6f\x62\x79\x44\x61\u7684\u4eac\u4e1c\u7b7e\u5230\u83b7\u53d6', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x62\x65\x61\x6e\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f', '\x0a\u8bf7\u81ea\u884c\u53bb\u6d3b\u52a8\u9875\u9762\u5151\u6362\u5bf9\u5e94\u7684\u5956\u52b1\x0a\u6ca1\u5f00\u8fc7\u5361\u7684\u624d\u80fd\u52a9\u529b\u6210\u529f\x0a\u4ee5\u6d3b\u52a8\u9875\u9762\u4e3a\u51c6\uff0c\u811a\u672c\u663e\u793a\u6709\u8bef\u5dee\x0a\u5f00\u5361\u706b\u7206\u91cd\u65b0\u8fd0\u884c\u4e00\u6b21', '\x61\x73\x73\x69\x73\x74\x53\x74\x61\x74\x75\x73', '\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64', '\x32\x31\x30\x34\x31\x30\x30\x30\x30\x31\x34\x34\x38\x36\x31\x34', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x6b\x69\x6e\x67\x72\x61\x6e\x2e\x63\x6f\x64\x69\x6e\x67\x2e\x6e\x65\x74\x2f\x70\x2f\x79\x71\x2e\x6a\x73\x6f\x6e\x2f\x64\x2f\x73\x68\x61\x72\x65\x43\x6f\x64\x65\x73\x2f\x67\x69\x74\x2f\x72\x61\x77\x2f\x6d\x61\x73\x74\x65\x72\x2f\x61\x6a\x79\x71\x2e\x6a\x73\x6f\x6e', '\x73\x68\x61\x72\x65\x55\x75\x69\x64', '\x66\x6c\x6f\x6f\x72', '\x72\x61\x6e\x64\x6f\x6d', '\x6c\x65\x6e\x67\x74\x68', '\u5165\u53e3\x3a\x0a\x68\x74\x74\x70\x73\x3a\x2f\x2f\x6c\x7a\x6b\x6a\x64\x7a\x2d\x69\x73\x76\x2e\x69\x73\x76\x6a\x63\x6c\x6f\x75\x64\x2e\x63\x6f\x6d\x2f\x77\x78\x2f\x61\x6e\x63\x68\x6f\x72\x2f\x69\x6e\x76\x69\x74\x65\x4a\x75\x6e\x65\x2f\x61\x63\x74\x69\x76\x69\x74\x79\x3f\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3d', '\x26\x49\x6e\x76\x69\x74\x65\x55\x75\x69\x64\x3d', '\x55\x73\x65\x72\x4e\x61\x6d\x65', '\x6d\x61\x74\x63\x68', '\x69\x6e\x64\x65\x78', '\x62\x65\x61\x6e', '\x6e\x69\x63\x6b\x4e\x61\x6d\x65', '\x0a\x0a\x2a\x2a\x2a\x2a\x2a\x2a\u5f00\u59cb\u3010\u4eac\u4e1c\u8d26\u53f7', '\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x0a', '\x77\x61\x69\x74', '\x61\x63\x74\x6f\x72\x55\x75\x69\x64', '\x68\x61\x73\x45\x6e\x64', '\u6b64\x69\x70\u5df2\u88ab\u9650\u5236\uff0c\u8bf7\u8fc7\x31\x30\u5206\u949f\u540e\u518d\u6267\u884c\u811a\u672c', '\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79', '\x63\x61\x74\x63\x68', '\x6c\x6f\x67\x45\x72\x72', '\x66\x69\x6e\x61\x6c\x6c\x79', '\x64\x6f\x6e\x65', '\x61\x73\x73\x69\x73\x74\x43\x6f\x75\x6e\x74', '\x65\x6e\x64\x54\x69\x6d\x65', '\x54\x6f\x6b\x65\x6e', '\x50\x69\x6e', '\x69\x73\x76\x4f\x62\x66\x75\x73\x63\x61\x74\x6f\x72', '\u83b7\u53d6\x5b\x74\x6f\x6b\x65\x6e\x5d\u5931\u8d25\uff01', '\u83b7\u53d6\x63\x6f\x6f\x6b\x69\x65\u5931\u8d25', '\u6d3b\u52a8\u7ed3\u675f', '\u6b64\x69\x70\u5df2\u88ab\u9650\u5236\uff0c\u8bf7\u8fc7\x31\x30\u5206\u949f\u540e\u518d\u6267\u884c\u811a\u672c\x0a', '\x67\x65\x74\x53\x69\x6d\x70\x6c\x65\x41\x63\x74\x49\x6e\x66\x6f\x56\x6f', '\x67\x65\x74\x53\x68\x6f\x70\x49\x6e\x66\x6f\x56\x4f', '\x67\x65\x74\x4d\x79\x50\x69\x6e\x67', '\u83b7\u53d6\x5b\x50\x69\x6e\x5d\u5931\u8d25\uff01', '\x61\x63\x63\x65\x73\x73\x4c\x6f\x67\x57\x69\x74\x68\x41\x44', '\x61\x63\x74\x69\x76\x69\x74\x79\x43\x6f\x6e\x74\x65\x6e\x74', '\u83b7\u53d6\u4e0d\u5230\x5b\x61\x63\x74\x6f\x72\x55\x75\x69\x64\x5d\u9000\u51fa\u6267\u884c\uff0c\u8bf7\u91cd\u65b0\u6267\u884c', '\x70\x72\x69\x7a\x65\x49\x74\x65\x6d', '\x6a\x6f\x69\x6e\x56\x65\x6e\x64\x65\x72\x49\x64', '\u6b21\x20\u91cd\u65b0\u5f00\u5361', '\x65\x72\x72\x6f\x72\x4a\x6f\x69\x6e\x53\x68\x6f\x70', '\x69\x6e\x64\x65\x78\x4f\x66', '\u6d3b\u52a8\u592a\u706b\u7206\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5', '\u5f00\u5361\u5931\u8d25\u274c\x20\uff0c\u91cd\u65b0\u6267\u884c\u811a\u672c', '\x6a\x6f\x69\x6e\x53\x74\x61\x74\x75\x73', '\x68\x65\x6c\x70\x53\x74\x61\x74\x75\x73', '\u52a9\u529b\u6210\u529f', '\u672a\u52a9\u529b', '\u5df2\u5f00\u5361\x20\u65e0\u6cd5\u52a9\u529b', '\u672a\u77e5\x2d', '\x68\x65\x6c\x70\x43\x6f\x75\x6e\x74', '\u3010\u8d26\u53f7', '\u3011\u53ef\u9886\u53d6\u5956\u54c1\x0a\u7b2c\u4e00\u6863\u5956\u54c1\u53ef\u9886\u53d6\uff1a', '\x66\x6c\x61\x67\x31', '\x20\u6b21\x0a\u7b2c\u4e8c\u6863\u5956\u54c1\u53ef\u9886\u53d6\uff1a', '\x66\x6c\x61\x67\x32', '\x20\u6b21\x0a\u7b2c\u4e09\u6863\u5956\u54c1\u53ef\u9886\u53d6\uff1a', '\x66\x6c\x61\x67\x33', '\x20\u6b21\x0a\u8870\u4ed4\uff0c\u8bf7\u524d\u5f80\u6d3b\u52a8\u9875\u9762\u9886\u53d6\uff0c\u5148\u5230\u5148\u5f97\u3002', '\u3011\u52a9\u529b\u4eba\u6570\uff1a', '\x20\u3010\u8d26\u53f7\x31\u3011\u52a9\u529b\u4eba\u6570\uff1a', '\u5f53\u524d\u52a9\u529b\x3a', '\u540e\u9762\u7684\u53f7\u90fd\u4f1a\u52a9\u529b\x3a', '\u4f11\u606f\u4e00\u4e0b\uff0c\u522b\u88ab\u9ed1\x69\x70\u4e86\x0a\u53ef\u6301\u7eed\u53d1\u5c55', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x6c\x7a\x6b\x6a\x64\x7a\x2d\x69\x73\x76\x2e\x69\x73\x76\x6a\x63\x6c\x6f\x75\x64\x2e\x63\x6f\x6d', '\x50\x4f\x53\x54', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x63\x6c\x69\x65\x6e\x74\x2e\x61\x63\x74\x69\x6f\x6e\x3f\x66\x75\x6e\x63\x74\x69\x6f\x6e\x49\x64\x3d\x69\x73\x76\x4f\x62\x66\x75\x73\x63\x61\x74\x6f\x72', '\x62\x6f\x64\x79\x3d\x25\x37\x42\x25\x32\x32\x75\x72\x6c\x25\x32\x32\x25\x33\x41\x25\x32\x32\x68\x74\x74\x70\x73\x25\x33\x41\x2f\x2f\x6c\x7a\x6b\x6a\x64\x7a\x2d\x69\x73\x76\x2e\x69\x73\x76\x6a\x63\x6c\x6f\x75\x64\x2e\x63\x6f\x6d\x25\x32\x32\x25\x32\x43\x25\x32\x32\x69\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x25\x32\x32\x25\x37\x44\x26\x75\x75\x69\x64\x3d\x39\x61\x37\x39\x31\x33\x33\x38\x35\x35\x65\x34\x65\x64\x34\x32\x65\x38\x33\x63\x64\x61\x36\x63\x35\x38\x62\x35\x31\x38\x38\x31\x63\x34\x35\x31\x39\x32\x33\x36\x26\x63\x6c\x69\x65\x6e\x74\x3d\x61\x70\x70\x6c\x65\x26\x63\x6c\x69\x65\x6e\x74\x56\x65\x72\x73\x69\x6f\x6e\x3d\x31\x30\x2e\x31\x2e\x34\x26\x73\x74\x3d\x31\x36\x34\x37\x32\x36\x33\x31\x34\x38\x32\x30\x33\x26\x73\x76\x3d\x31\x30\x32\x26\x73\x69\x67\x6e\x3d\x35\x33\x65\x65\x30\x32\x61\x35\x39\x64\x65\x63\x65\x33\x63\x34\x38\x30\x65\x33\x66\x63\x62\x30\x36\x37\x63\x34\x39\x39\x35\x34', '\x2f\x63\x75\x73\x74\x6f\x6d\x65\x72\x2f\x67\x65\x74\x4d\x79\x50\x69\x6e\x67', '\x74\x6f\x6b\x65\x6e\x3d', '\x26\x66\x72\x6f\x6d\x54\x79\x70\x65\x3d\x41\x50\x50\x26\x75\x73\x65\x72\x49\x64\x3d\x31\x30\x30\x30\x30\x31\x34\x34\x38\x36\x26\x26\x70\x69\x6e\x3d', '\x2f\x63\x75\x73\x74\x6f\x6d\x65\x72\x2f\x67\x65\x74\x53\x69\x6d\x70\x6c\x65\x41\x63\x74\x49\x6e\x66\x6f\x56\x6f', '\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3d', '\x2f\x63\x6f\x6d\x6d\x6f\x6e\x2f\x61\x63\x63\x65\x73\x73\x4c\x6f\x67', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x6c\x7a\x6b\x6a\x64\x7a\x2d\x69\x73\x76\x2e\x69\x73\x76\x6a\x63\x6c\x6f\x75\x64\x2e\x63\x6f\x6d\x2f\x77\x78\x2f\x61\x6e\x63\x68\x6f\x72\x2f\x69\x6e\x76\x69\x74\x65\x4a\x75\x6e\x65\x2f\x61\x63\x74\x69\x76\x69\x74\x79\x3f\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3d', '\x76\x65\x6e\x64\x65\x72\x49\x64\x3d\x31\x30\x30\x30\x30\x31\x34\x34\x38\x36\x26\x26\x63\x6f\x64\x65\x3d\x32\x35\x26\x70\x69\x6e\x3d', '\x26\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3d', '\x26\x70\x61\x67\x65\x55\x72\x6c\x3d', '\x26\x73\x75\x62\x54\x79\x70\x65\x3d\x61\x70\x70', '\x67\x65\x74\x55\x73\x65\x72\x49\x6e\x66\x6f', '\x2f\x77\x78\x41\x63\x74\x69\x6f\x6e\x43\x6f\x6d\x6d\x6f\x6e\x2f\x67\x65\x74\x55\x73\x65\x72\x49\x6e\x66\x6f', '\x70\x69\x6e\x3d', '\x2f\x77\x78\x2f\x61\x6e\x63\x68\x6f\x72\x2f\x69\x6e\x76\x69\x74\x65\x4a\x75\x6e\x65\x2f\x75\x70\x64\x61\x74\x65\x49\x6e\x76\x69\x74\x65\x49\x64', '\x26\x70\x69\x6e\x3d', '\x2f\x77\x78\x41\x63\x74\x69\x6f\x6e\x43\x6f\x6d\x6d\x6f\x6e\x2f\x67\x65\x74\x53\x68\x6f\x70\x49\x6e\x66\x6f\x56\x4f', '\x75\x73\x65\x72\x49\x64\x3d\x31\x30\x30\x30\x30\x31\x34\x34\x38\x36', '\x2f\x77\x78\x2f\x61\x6e\x63\x68\x6f\x72\x2f\x69\x6e\x76\x69\x74\x65\x4a\x75\x6e\x65\x2f\x70\x72\x69\x7a\x65\x49\x74\x65\x6d', '\x26\x61\x63\x74\x6f\x72\x55\x75\x69\x64\x3d', '\x70\x6f\x73\x74', '\x73\x74\x61\x74\x75\x73\x43\x6f\x64\x65', '\x75\x6e\x64\x65\x66\x69\x6e\x65\x64', '\x74\x6f\x53\x74\x72', '\x20\x41\x50\x49\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u7f51\u8def\u91cd\u8bd5', '\x64\x72\x61\x77\x43\x6f\x6e\x74\x65\x6e\x74', '\x70\x61\x72\x73\x65', '\x20\u6267\u884c\u4efb\u52a1\u5f02\u5e38', '\x72\x75\x6e\x46\x61\x6c\x61\x67', '\x6f\x62\x6a\x65\x63\x74', '\x65\x72\x72\x63\x6f\x64\x65', '\x74\x6f\x6b\x65\x6e', '\x6d\x65\x73\x73\x61\x67\x65', '\x69\x73\x76\x4f\x62\x66\x75\x73\x63\x61\x74\x6f\x72\x20', '\x72\x65\x73\x75\x6c\x74', '\x64\x61\x74\x61', '\x73\x65\x63\x72\x65\x74\x50\x69\x6e', '\x6e\x69\x63\x6b\x6e\x61\x6d\x65', '\x65\x72\x72\x6f\x72\x4d\x65\x73\x73\x61\x67\x65', '\x73\x69\x64', '\x73\x68\x6f\x70\x49\x64', '\x75\x73\x65\x72\x49\x64', '\x76\x65\x6e\x64\x65\x72\x49\x64', '\x65\x6e\x74\x65\x72\x53\x74\x61\x74\x75\x73', '\x6f\x70\x65\x6e\x53\x74\x61\x74\x75\x73', '\x69\x6e\x76\x69\x74\x65\x64\x4e\x75\x6d\x62\x65\x72', '\x73\x65\x6e\x64\x42\x65\x61\x6e\x4e\x75\x6d', '\u3011\u83b7\u5f97', '\x67\x65\x74\x4f\x70\x65\x6e\x43\x61\x72\x64\x53\x74\x61\x74\x75\x73\x57\x69\x74\x68\x4f\x75\x74\x53\x65\x6c\x66', '\x69\x73\x4f\x6b', '\x61\x6c\x6c\x4f\x70\x65\x6e\x43\x61\x72\x64', '\x6f\x70\x65\x6e\x43\x61\x72\x64', '\x67\x65\x74\x44\x72\x61\x77\x52\x65\x63\x6f\x72\x64\x48\x61\x73\x43\x6f\x75\x70\x6f\x6e', '\u6211\u7684\u5956\u54c1\uff1a', '\u88ab\u9080\u8bf7', '\u901b\u5e97\u94fa', '\x64\x72\x61\x77\x49\x64', '\x64\x61\x79\x53\x68\x61\x72\x65\x42\x65\x61\x6e\x73', '\x69\x6e\x66\x6f\x4e\x61\x6d\x65', '\x72\x65\x70\x6c\x61\x63\x65', '\x69\x6e\x66\x6f\x54\x79\x70\x65', '\x76\x61\x6c\x75\x65', '\u9080\u8bf7\u597d\u53cb\x28', '\x67\x65\x74\x53\x68\x61\x72\x65\x52\x65\x63\x6f\x72\x64', '\x53\x68\x61\x72\x65\x43\x6f\x75\x6e\x74', '\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x20\u4f60\u9080\u8bf7\u4e86\x3a', '\x2d\x3e\x20', '\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e', '\x67\x7a\x69\x70\x2c\x20\x64\x65\x66\x6c\x61\x74\x65\x2c\x20\x62\x72', '\x7a\x68\x2d\x63\x6e', '\x6b\x65\x65\x70\x2d\x61\x6c\x69\x76\x65', '\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x78\x2d\x77\x77\x77\x2d\x66\x6f\x72\x6d\x2d\x75\x72\x6c\x65\x6e\x63\x6f\x64\x65\x64', '\x58\x4d\x4c\x48\x74\x74\x70\x52\x65\x71\x75\x65\x73\x74', '\x52\x65\x66\x65\x72\x65\x72', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x6c\x7a\x6b\x6a\x64\x7a\x2d\x69\x73\x76\x2e\x69\x73\x76\x6a\x63\x6c\x6f\x75\x64\x2e\x63\x6f\x6d\x2f\x77\x78\x2f\x61\x6e\x63\x68\x6f\x72\x2f\x69\x6e\x76\x69\x74\x65\x4a\x75\x6e\x65\x2f\x61\x63\x74\x69\x76\x69\x74\x79\x3f\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3d\x32\x32\x30\x33\x31\x30\x30\x30\x30\x30\x31\x37\x38\x32\x30\x32\x2f\x3f\x68\x65\x6c\x70\x55\x75\x69\x64\x3d', '\x43\x6f\x6f\x6b\x69\x65', '\x41\x55\x54\x48\x5f\x43\x5f\x55\x53\x45\x52\x3d', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x6c\x7a\x6b\x6a\x64\x7a\x2d\x69\x73\x76\x2e\x69\x73\x76\x6a\x63\x6c\x6f\x75\x64\x2e\x63\x6f\x6d\x2f\x77\x78\x2f\x61\x6e\x63\x68\x6f\x72\x2f\x69\x6e\x76\x69\x74\x65\x4a\x75\x6e\x65\x2f\x61\x63\x74\x69\x76\x69\x74\x79\x3f\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3d\x32\x31\x30\x34\x31\x30\x30\x30\x30\x31\x34\x34\x38\x36\x31\x34\x26\x49\x6e\x76\x69\x74\x65\x55\x75\x69\x64\x3d', '\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e\x2c\x20\x74\x65\x78\x74\x2f\x70\x6c\x61\x69\x6e\x2c\x20\x2a\x2f\x2a', '\x67\x65\x74', '\x20\x63\x6f\x6f\x6b\x69\x65\x20\x41\x50\x49\u8bf7\u6c42\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u7f51\u8def\u91cd\u8bd5', '\u6d3b\u52a8\u5df2\u7ed3\u675f', '\x68\x65\x61\x64\x65\x72\x73', '\x73\x65\x74\x2d\x63\x6f\x6f\x6b\x69\x65', '\x53\x65\x74\x2d\x43\x6f\x6f\x6b\x69\x65', '\x73\x70\x6c\x69\x74', '\x74\x72\x69\x6d', '\x4c\x5a\x5f\x54\x4f\x4b\x45\x4e\x5f\x4b\x45\x59\x3d', '\x4c\x5a\x5f\x54\x4f\x4b\x45\x4e\x5f\x56\x41\x4c\x55\x45\x3d', '\x6c\x7a\x5f\x6a\x64\x70\x69\x6e\x5f\x74\x6f\x6b\x65\x6e\x3d', '\x6a\x64\x61\x70\x70\x3b\x69\x50\x68\x6f\x6e\x65\x3b\x31\x30\x2e\x31\x2e\x34\x3b\x31\x33\x2e\x31\x2e\x32\x3b', '\x3b\x6e\x65\x74\x77\x6f\x72\x6b\x2f\x77\x69\x66\x69\x3b\x6d\x6f\x64\x65\x6c\x2f\x69\x50\x68\x6f\x6e\x65\x38\x2c\x31\x3b\x61\x64\x64\x72\x65\x73\x73\x69\x64\x2f\x32\x33\x30\x38\x34\x36\x30\x36\x31\x31\x3b\x61\x70\x70\x42\x75\x69\x6c\x64\x2f\x31\x36\x37\x38\x31\x34\x3b\x6a\x64\x53\x75\x70\x70\x6f\x72\x74\x44\x61\x72\x6b\x4d\x6f\x64\x65\x2f\x30\x3b\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x69\x50\x68\x6f\x6e\x65\x3b\x20\x43\x50\x55\x20\x69\x50\x68\x6f\x6e\x65\x20\x4f\x53\x20\x31\x33\x5f\x31\x5f\x32\x20\x6c\x69\x6b\x65\x20\x4d\x61\x63\x20\x4f\x53\x20\x58\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x36\x30\x35\x2e\x31\x2e\x31\x35\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x4d\x6f\x62\x69\x6c\x65\x2f\x31\x35\x45\x31\x34\x38\x3b\x73\x75\x70\x70\x6f\x72\x74\x4a\x44\x53\x48\x57\x4b\x2f\x31', '\x61\x62\x63\x64\x65\x66\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39', '\x63\x68\x61\x72\x41\x74', '\x73\x68\x6f\x70\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64', '\x2c\x22\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x22\x3a', '\x7b\x22\x76\x65\x6e\x64\x65\x72\x49\x64\x22\x3a\x22', '\x22\x2c\x22\x73\x68\x6f\x70\x49\x64\x22\x3a\x22', '\x22\x2c\x22\x62\x69\x6e\x64\x42\x79\x56\x65\x72\x69\x66\x79\x43\x6f\x64\x65\x46\x6c\x61\x67\x22\x3a\x31\x2c\x22\x72\x65\x67\x69\x73\x74\x65\x72\x45\x78\x74\x65\x6e\x64\x22\x3a\x7b\x7d\x2c\x22\x77\x72\x69\x74\x65\x43\x68\x69\x6c\x64\x46\x6c\x61\x67\x22\x3a\x30', '\x2c\x22\x63\x68\x61\x6e\x6e\x65\x6c\x22\x3a\x34\x30\x36\x7d', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x63\x6c\x69\x65\x6e\x74\x2e\x61\x63\x74\x69\x6f\x6e\x3f\x61\x70\x70\x69\x64\x3d\x6a\x64\x5f\x73\x68\x6f\x70\x5f\x6d\x65\x6d\x62\x65\x72\x26\x66\x75\x6e\x63\x74\x69\x6f\x6e\x49\x64\x3d\x62\x69\x6e\x64\x57\x69\x74\x68\x56\x65\x6e\x64\x65\x72\x26\x62\x6f\x64\x79\x3d', '\x26\x63\x6c\x69\x65\x6e\x74\x56\x65\x72\x73\x69\x6f\x6e\x3d\x39\x2e\x32\x2e\x30\x26\x63\x6c\x69\x65\x6e\x74\x3d\x48\x35\x26\x75\x75\x69\x64\x3d\x38\x38\x38\x38\x38\x26\x68\x35\x73\x74\x3d', '\x2a\x2f\x2a', '\x7a\x68\x2d\x43\x4e\x2c\x7a\x68\x3b\x71\x3d\x30\x2e\x39\x2c\x65\x6e\x2d\x55\x53\x3b\x71\x3d\x30\x2e\x38\x2c\x65\x6e\x3b\x71\x3d\x30\x2e\x37', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x73\x68\x6f\x70\x6d\x65\x6d\x62\x65\x72\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f', '\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x4d\x61\x63\x69\x6e\x74\x6f\x73\x68\x3b\x20\x49\x6e\x74\x65\x6c\x20\x4d\x61\x63\x20\x4f\x53\x20\x58\x20\x31\x30\x5f\x31\x35\x5f\x37\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x35\x33\x37\x2e\x33\x36\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x43\x68\x72\x6f\x6d\x65\x2f\x39\x39\x2e\x30\x2e\x34\x38\x34\x34\x2e\x35\x31\x20\x53\x61\x66\x61\x72\x69\x2f\x35\x33\x37\x2e\x33\x36', '\x74\x6f\x4f\x62\x6a', '\x73\x75\x63\x63\x65\x73\x73', '\x67\x69\x66\x74\x49\x6e\x66\x6f', '\x67\x69\x66\x74\x4c\x69\x73\x74', '\u5165\u4f1a\u83b7\u5f97\x3a', '\x64\x69\x73\x63\x6f\x75\x6e\x74\x53\x74\x72\x69\x6e\x67', '\x70\x72\x69\x7a\x65\x4e\x61\x6d\x65', '\x73\x65\x63\x6f\x6e\x64\x4c\x69\x6e\x65\x44\x65\x73\x63', '\x22\x2c\x22\x63\x68\x61\x6e\x6e\x65\x6c\x22\x3a\x34\x30\x36\x2c\x22\x70\x61\x79\x55\x70\x53\x68\x6f\x70\x22\x3a\x74\x72\x75\x65\x7d', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x63\x6c\x69\x65\x6e\x74\x2e\x61\x63\x74\x69\x6f\x6e\x3f\x61\x70\x70\x69\x64\x3d\x6a\x64\x5f\x73\x68\x6f\x70\x5f\x6d\x65\x6d\x62\x65\x72\x26\x66\x75\x6e\x63\x74\x69\x6f\x6e\x49\x64\x3d\x67\x65\x74\x53\x68\x6f\x70\x4f\x70\x65\x6e\x43\x61\x72\x64\x49\x6e\x66\x6f\x26\x62\x6f\x64\x79\x3d', '\u5165\u4f1a\x3a', '\x73\x68\x6f\x70\x4d\x65\x6d\x62\x65\x72\x43\x61\x72\x64\x49\x6e\x66\x6f', '\x76\x65\x6e\x64\x65\x72\x43\x61\x72\x64\x4e\x61\x6d\x65', '\x69\x6e\x74\x65\x72\x65\x73\x74\x73\x52\x75\x6c\x65\x4c\x69\x73\x74', '\x69\x6e\x74\x65\x72\x65\x73\x74\x73\x49\x6e\x66\x6f', '\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x69\x50\x68\x6f\x6e\x65\x3b\x20\x43\x50\x55\x20\x69\x50\x68\x6f\x6e\x65\x20\x4f\x53\x20\x31\x33\x5f\x32\x5f\x33\x20\x6c\x69\x6b\x65\x20\x4d\x61\x63\x20\x4f\x53\x20\x58\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x36\x30\x35\x2e\x31\x2e\x31\x35\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x56\x65\x72\x73\x69\x6f\x6e\x2f\x31\x33\x2e\x30\x2e\x33\x20\x4d\x6f\x62\x69\x6c\x65\x2f\x31\x35\x45\x31\x34\x38\x20\x53\x61\x66\x61\x72\x69\x2f\x36\x30\x34\x2e\x31\x20\x45\x64\x67\x2f\x38\x37\x2e\x30\x2e\x34\x32\x38\x30\x2e\x38\x38', '\x73\x74\x72\x69\x6e\x67', '\u8bf7\u52ff\u968f\u610f\u5728\x42\x6f\x78\x4a\x73\u8f93\u5165\u6846\u4fee\u6539\u5185\u5bb9\x0a\u5efa\u8bae\u901a\u8fc7\u811a\u672c\u53bb\u83b7\u53d6\x63\x6f\x6f\x6b\x69\x65', '\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39', '\x6e\x6f\x77', '\x73\x6c\x69\x63\x65', '\x46\x6f\x72\x6d\x61\x74', '\x79\x79\x79\x79\x4d\x4d\x64\x64\x68\x68\x6d\x6d\x73\x73\x53\x53\x53', '\x3b\x65\x66\x37\x39\x61\x3b\x74\x6b\x30\x32\x77\x39\x32\x36\x33\x31\x62\x66\x61\x31\x38\x6e\x68\x44\x34\x75\x62\x66\x33\x51\x66\x4e\x69\x55\x38\x45\x44\x32\x50\x49\x32\x37\x30\x79\x67\x73\x6e\x2b\x76\x61\x6d\x75\x42\x51\x68\x30\x6c\x56\x45\x36\x76\x37\x55\x41\x77\x63\x6b\x7a\x33\x73\x32\x4f\x74\x6c\x46\x45\x66\x74\x68\x35\x4c\x62\x51\x64\x57\x4f\x50\x4e\x76\x50\x45\x59\x48\x75\x55\x32\x54\x77\x3b\x62\x30\x31\x63\x37\x63\x34\x66\x39\x39\x61\x38\x66\x66\x62\x32\x62\x35\x65\x36\x39\x32\x38\x32\x66\x34\x35\x61\x31\x34\x65\x31\x62\x38\x37\x63\x39\x30\x61\x39\x36\x32\x31\x37\x30\x30\x36\x33\x31\x31\x61\x65\x34\x63\x66\x64\x63\x62\x64\x31\x61\x39\x33\x32\x3b\x33\x2e\x30\x3b', '\x3b\x31\x36\x39\x66\x31\x3b\x74\x6b\x30\x32\x77\x63\x30\x66\x39\x31\x63\x38\x61\x31\x38\x6e\x76\x57\x56\x4d\x47\x72\x51\x4f\x31\x69\x46\x6c\x70\x51\x72\x65\x32\x53\x68\x32\x6d\x47\x74\x4e\x72\x6f\x31\x6c\x30\x55\x70\x5a\x71\x47\x4c\x52\x62\x48\x69\x79\x71\x66\x61\x55\x51\x61\x50\x79\x36\x34\x57\x54\x37\x75\x7a\x37\x45\x2f\x67\x75\x6a\x47\x41\x42\x35\x30\x6b\x79\x4f\x37\x68\x77\x42\x79\x57\x4b\x3b\x37\x37\x63\x38\x61\x30\x35\x65\x36\x61\x36\x36\x66\x61\x65\x65\x64\x30\x30\x65\x34\x65\x32\x38\x30\x61\x64\x38\x63\x34\x30\x66\x61\x62\x36\x30\x37\x32\x33\x62\x35\x62\x35\x36\x31\x32\x33\x30\x33\x38\x30\x65\x62\x34\x30\x37\x65\x31\x39\x33\x35\x34\x66\x37\x3b\x33\x2e\x30\x3b', '\x70\x72\x6f\x74\x6f\x74\x79\x70\x65', '\x67\x65\x74\x4d\x6f\x6e\x74\x68', '\x67\x65\x74\x44\x61\x74\x65', '\x67\x65\x74\x48\x6f\x75\x72\x73', '\x67\x65\x74\x4d\x69\x6e\x75\x74\x65\x73', '\x67\x65\x74\x53\x65\x63\x6f\x6e\x64\x73', '\x67\x65\x74\x44\x61\x79', '\x67\x65\x74\x4d\x69\x6c\x6c\x69\x73\x65\x63\x6f\x6e\x64\x73', '\x74\x65\x73\x74', '\x63\x6f\x6e\x63\x61\x74', '\x67\x65\x74\x46\x75\x6c\x6c\x59\x65\x61\x72', '\x73\x75\x62\x73\x74\x72', '\x30\x30\x30', '\x6a\x73\x6a\x41\x54\x64\x69\x58\x61\x6b\x6d\x51\x69\x2e\x52\x44\x54\x4b\x5a\x4b\x63\x79\x6f\x6d\x52\x2e\x76\x51\x36\x50\x4b\x3d\x3d'];

function _0x1691(_0x53a92a, _0x4e90de) {
    _0x53a92a = ~~'0x'['concat'](_0x53a92a['slice'](0x0));
    var _0x1a64d5 = _0x323b[_0x53a92a];
    return _0x1a64d5;
};(function (_0x3f7909, _0x262574) {
    var _0x37a3a0 = 0x0;
    for (_0x262574 = _0x3f7909['shift'](_0x37a3a0 >> 0x2); _0x262574 && _0x262574 !== (_0x3f7909['pop'](_0x37a3a0 >> 0x3) + '')['replace'](/[ATdXkQRDTKZKyRQPK=]/g, ''); _0x37a3a0++) {
        _0x37a3a0 = _0x37a3a0 ^ 0xecf40;
    }
}(_0x323b, _0x1691));
const jdCookieNode = $[_0x1691('0')]() ? require(_0x1691('1')) : '';
const notify = $[_0x1691('0')]() ? require(_0x1691('2')) : '';
let cookiesArr = [], cookie = '';
if ($[_0x1691('0')]()) {
    Object[_0x1691('3')](jdCookieNode)[_0x1691('4')](_0x14f178 => {
        cookiesArr[_0x1691('5')](jdCookieNode[_0x14f178]);
    });
    if (process[_0x1691('6')][_0x1691('7')] && process[_0x1691('6')][_0x1691('7')] === _0x1691('8')) console[_0x1691('9')] = () => {
    };
} else {
    cookiesArr = [$[_0x1691('a')](_0x1691('b')), $[_0x1691('a')](_0x1691('c')), ...jsonParse($[_0x1691('a')](_0x1691('d')) || '\x5b\x5d')[_0x1691('e')](_0x8196ed => _0x8196ed[_0x1691('f')])][_0x1691('10')](_0x3f8b6f => !!_0x3f8b6f);
}
allMessage = '';
message = '';
$[_0x1691('11')] = ![];
$[_0x1691('12')] = ![];
$[_0x1691('13')] = ![];
let lz_jdpin_token_cookie = '';
let activityCookie = '';
!(async () => {
    if (!cookiesArr[0x0]) {
        $[_0x1691('14')]($[_0x1691('15')], _0x1691('16'), _0x1691('17'), {'open-url': _0x1691('17')});
        return;
    }
    console[_0x1691('9')](_0x1691('18'));
    $[_0x1691('19')] = ![];
    $[_0x1691('1a')] = _0x1691('1b');
    authorCodeList = ['93574d27d99d4952bc745cbda41ef00f','752fd6dc11a24e35be86ddbad14647fa','bcd19cf68cd34c76a1b612433d0a6d0b'];
    console[_0x1691('9')](_0x1691('21') + $[_0x1691('1a')] + _0x1691('22') + $[_0x1691('1d')]);
    for (let _0x15dd0f = 0x0; _0x15dd0f < cookiesArr[_0x1691('20')]; _0x15dd0f++) {
    $[_0x1691('1d')] = authorCodeList[Math[_0x1691('1e')](Math[_0x1691('1f')]() * authorCodeList[_0x1691('20')])];
        cookie = cookiesArr[_0x15dd0f];
        if (cookie) {
            $[_0x1691('23')] = decodeURIComponent(cookie[_0x1691('24')](/pt_pin=([^; ]+)(?=;?)/) && cookie[_0x1691('24')](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
            $[_0x1691('25')] = _0x15dd0f + 0x1;
            message = '';
            $[_0x1691('26')] = 0x0;
            $[_0x1691('11')] = ![];
            $[_0x1691('27')] = '';
            console[_0x1691('9')](_0x1691('28') + $[_0x1691('25')] + '\u3011' + ($[_0x1691('27')] || $[_0x1691('23')]) + _0x1691('29'));
            await getUA();
            await run();
            await $[_0x1691('2a')](0xdac);
            if (_0x15dd0f == 0x0 && !$[_0x1691('2b')]) break;
            if ($[_0x1691('12')] || $[_0x1691('13')]) break;
            if ($[_0x1691('2c')]) break;
        }
    }
    if ($[_0x1691('12')]) {
        let _0x264b39 = _0x1691('2d');
        $[_0x1691('14')]($[_0x1691('15')], '', '' + _0x264b39);
        if ($[_0x1691('0')]()) await notify[_0x1691('2e')]('' + $[_0x1691('15')], '' + _0x264b39);
    }
    if (allMessage) {
        $[_0x1691('14')]($[_0x1691('15')], '', '' + allMessage);
    }
})()[_0x1691('2f')](_0x352c17 => $[_0x1691('30')](_0x352c17))[_0x1691('31')](() => $[_0x1691('32')]());

async function run() {
    try {
        $[_0x1691('33')] = 0x0;
        $[_0x1691('34')] = 0x0;
        lz_jdpin_token_cookie = '';
        $[_0x1691('35')] = '';
        $[_0x1691('36')] = '';
        let _0x2b924f = ![];
        await takePostRequest(_0x1691('37'));
        if ($[_0x1691('35')] == '') {
            console[_0x1691('9')](_0x1691('38'));
            return;
        }
        await getCk();
        if (activityCookie == '') {
            console[_0x1691('9')](_0x1691('39'));
            return;
        }
        if ($[_0x1691('13')] === !![]) {
            console[_0x1691('9')](_0x1691('3a'));
            return;
        }
        if ($[_0x1691('12')]) {
            console[_0x1691('9')](_0x1691('3b'));
            return;
        }
        await takePostRequest(_0x1691('3c'));
        await takePostRequest(_0x1691('3d'));
        await takePostRequest(_0x1691('3e'));
        if (!$[_0x1691('36')]) {
            console[_0x1691('9')](_0x1691('3f'));
            return;
        }
        await takePostRequest(_0x1691('40'));
        await takePostRequest(_0x1691('41'));
        if ($[_0x1691('11')]) return;
        if (!$[_0x1691('2b')]) {
            console[_0x1691('9')](_0x1691('42'));
            return;
        }
        await takePostRequest(_0x1691('43'));
        console[_0x1691('9')]($[_0x1691('2b')]);
        $[_0x1691('44')] = 0x3b9b0296;
        await getshopactivityId();
        for (let _0x546bf6 = 0x0; _0x546bf6 < Array(0x5)[_0x1691('20')]; _0x546bf6++) {
            if (_0x546bf6 > 0x0) console[_0x1691('9')]('\u7b2c' + _0x546bf6 + _0x1691('45'));
            await joinShop();
            await $[_0x1691('2a')](parseInt(Math[_0x1691('1f')]() * 0x7d0 + 0x1f4, 0xa));
            if ($[_0x1691('46')][_0x1691('47')](_0x1691('48')) == -0x1) {
                break;
            }
        }
        if ($[_0x1691('46')][_0x1691('47')](_0x1691('48')) > -0x1) {
            console[_0x1691('9')](_0x1691('49'));
        } else {
            $[_0x1691('4a')] = !![];
        }
        await takePostRequest(_0x1691('41'));
        console[_0x1691('9')]($[_0x1691('4b')] === '\x32' ? _0x1691('4c') : $[_0x1691('4b')] === '\x30' ? _0x1691('4d') : $[_0x1691('4b')] === '\x31' ? _0x1691('4e') : _0x1691('4f') + $[_0x1691('4b')]);
        if ($[_0x1691('25')] == 0x1) {
            $[_0x1691('50')] = $[_0x1691('33')];
            console[_0x1691('9')](_0x1691('51') + $[_0x1691('25')] + _0x1691('52') + $[_0x1691('53')] + _0x1691('54') + $[_0x1691('55')] + _0x1691('56') + $[_0x1691('57')] + _0x1691('58'));
        } else if ($[_0x1691('4b')] == 0x2) {
            $[_0x1691('50')]++;
        }
        console[_0x1691('9')](_0x1691('51') + $[_0x1691('25')] + _0x1691('59') + $[_0x1691('33')] + ($[_0x1691('25')] != 0x1 && _0x1691('5a') + $[_0x1691('50')] || ''));
        if ($[_0x1691('50')] >= 0x32) $[_0x1691('2c')] = !![];
        await $[_0x1691('2a')](parseInt(Math[_0x1691('1f')]() * 0x7d0 + 0x7d0, 0xa));
        console[_0x1691('9')]($[_0x1691('2b')]);
        console[_0x1691('9')](_0x1691('5b') + $[_0x1691('1d')]);

        if ($[_0x1691('25')] % 0x3 == 0x0) console[_0x1691('9')](_0x1691('5d'));
        if ($[_0x1691('25')] % 0x3 == 0x0) await $[_0x1691('2a')](parseInt(Math[_0x1691('1f')]() * 0xfa0 + 0xfa0, 0xa));
    } catch (_0xe0bf42) {
        console[_0x1691('9')](_0xe0bf42);
    }
}

async function takePostRequest(_0x37b26c) {
    if ($[_0x1691('12')]) return;
    let _0x32d7d7 = _0x1691('5e');
    let _0x35fa7e = '';
    let _0x3e632e = _0x1691('5f');
    let _0x373f69 = '';
    switch (_0x37b26c) {
        case _0x1691('37'):
            url = _0x1691('60');
            _0x35fa7e = _0x1691('61');
            break;
        case _0x1691('3e'):
            url = _0x32d7d7 + _0x1691('62');
            _0x35fa7e = _0x1691('63') + $[_0x1691('35')] + _0x1691('64');
            break;
        case _0x1691('3c'):
            url = _0x32d7d7 + _0x1691('65');
            _0x35fa7e = _0x1691('66') + $[_0x1691('1a')];
            break;
        case _0x1691('40'):
            url = _0x32d7d7 + _0x1691('67');
            let _0x344278 = _0x1691('68') + $[_0x1691('1a')] + _0x1691('22') + $[_0x1691('1d')];
            _0x35fa7e = _0x1691('69') + encodeURIComponent($[_0x1691('36')]) + _0x1691('6a') + $[_0x1691('1a')] + _0x1691('6b') + encodeURIComponent(_0x344278) + _0x1691('6c');
            break;
        case _0x1691('6d'):
            url = _0x32d7d7 + _0x1691('6e');
            _0x35fa7e = _0x1691('6f') + encodeURIComponent($[_0x1691('36')]);
            break;
        case _0x1691('41'):
            url = _0x32d7d7 + _0x1691('70');
            _0x35fa7e = _0x1691('66') + $[_0x1691('1a')] + _0x1691('71') + encodeURIComponent($[_0x1691('36')]) + _0x1691('22') + $[_0x1691('1d')];
            break;
        case _0x1691('3d'):
            url = _0x32d7d7 + _0x1691('72');
            _0x35fa7e = _0x1691('73');
            break;
        case _0x1691('43'):
            url = _0x32d7d7 + _0x1691('74');
            _0x35fa7e = _0x1691('66') + $[_0x1691('1a')] + _0x1691('75') + $[_0x1691('2b')];
            break;
        default:
            console[_0x1691('9')]('\u9519\u8bef' + _0x37b26c);
    }
    let _0x84ef1c = getPostRequest(url, _0x35fa7e, _0x3e632e);
    return new Promise(async _0x3e569b => {
        $[_0x1691('76')](_0x84ef1c, (_0xdfcf32, _0x245325, _0x1e162c) => {
            try {
                setActivityCookie(_0x245325);
                if (_0xdfcf32) {
                    if (_0x245325 && typeof _0x245325[_0x1691('77')] != _0x1691('78')) {
                        if (_0x245325[_0x1691('77')] == 0x1ed) {
                            console[_0x1691('9')](_0x1691('3b'));
                            $[_0x1691('12')] = !![];
                        }
                    }
                    console[_0x1691('9')]('' + $[_0x1691('79')](_0xdfcf32, _0xdfcf32));
                    console[_0x1691('9')](_0x37b26c + _0x1691('7a'));
                } else {
                    dealReturn(_0x37b26c, _0x1e162c);
                }
            } catch (_0x131579) {
                console[_0x1691('9')](_0x131579, _0x245325);
            } finally {
                _0x3e569b();
            }
        });
    });
}

async function dealReturn(_0x386074, _0x241587) {
    let _0x45cd22 = '';
    try {
        if (_0x386074 != _0x1691('40') || _0x386074 != _0x1691('7b')) {
            if (_0x241587) {
                _0x45cd22 = JSON[_0x1691('7c')](_0x241587);
            }
        }
    } catch (_0x573f4f) {
        console[_0x1691('9')](_0x386074 + _0x1691('7d'));
        console[_0x1691('9')](_0x241587);
        $[_0x1691('7e')] = ![];
    }
    try {
        switch (_0x386074) {
            case _0x1691('37'):
                if (typeof _0x45cd22 == _0x1691('7f')) {
                    if (_0x45cd22[_0x1691('80')] == 0x0) {
                        if (typeof _0x45cd22[_0x1691('81')] != _0x1691('78')) $[_0x1691('35')] = _0x45cd22[_0x1691('81')];
                    } else if (_0x45cd22[_0x1691('82')]) {
                        console[_0x1691('9')](_0x1691('83') + (_0x45cd22[_0x1691('82')] || ''));
                    } else {
                        console[_0x1691('9')](_0x241587);
                    }
                } else {
                    console[_0x1691('9')](_0x241587);
                }
                break;
            case _0x1691('3e'):
                if (typeof _0x45cd22 == _0x1691('7f')) {
                    if (_0x45cd22[_0x1691('84')] && _0x45cd22[_0x1691('84')] === !![]) {
                        if (_0x45cd22[_0x1691('85')] && typeof _0x45cd22[_0x1691('85')][_0x1691('86')] != _0x1691('78')) $[_0x1691('36')] = _0x45cd22[_0x1691('85')][_0x1691('86')];
                        if (_0x45cd22[_0x1691('85')] && typeof _0x45cd22[_0x1691('85')][_0x1691('87')] != _0x1691('78')) $[_0x1691('87')] = _0x45cd22[_0x1691('85')][_0x1691('87')];
                    } else if (_0x45cd22[_0x1691('88')]) {
                        console[_0x1691('9')](_0x386074 + '\x20' + (_0x45cd22[_0x1691('88')] || ''));
                    } else {
                        console[_0x1691('9')](_0x386074 + '\x20' + _0x241587);
                    }
                } else {
                    console[_0x1691('9')](_0x386074 + '\x20' + _0x241587);
                }
                break;
            case _0x1691('3d'):
                if (typeof _0x45cd22 == _0x1691('7f')) {
                    if (_0x45cd22[_0x1691('84')] && _0x45cd22[_0x1691('84')] === !![]) {
                        if (typeof _0x45cd22[_0x1691('85')][_0x1691('89')] != _0x1691('78')) $[_0x1691('8a')] = _0x45cd22[_0x1691('85')][_0x1691('89')];
                        if (typeof _0x45cd22[_0x1691('85')][_0x1691('8b')] != _0x1691('78')) $[_0x1691('8c')] = _0x45cd22[_0x1691('85')][_0x1691('8b')];
                    } else if (_0x45cd22[_0x1691('88')]) {
                        console[_0x1691('9')](_0x386074 + '\x20' + (_0x45cd22[_0x1691('88')] || ''));
                    } else {
                        console[_0x1691('9')](_0x386074 + '\x20' + _0x241587);
                    }
                } else {
                    console[_0x1691('9')](_0x386074 + '\x20' + _0x241587);
                }
                break;
            case _0x1691('43'):
            case _0x1691('3c'):
                if (typeof _0x45cd22 == _0x1691('7f')) {
                    if (_0x45cd22[_0x1691('84')] && _0x45cd22[_0x1691('84')] === !![]) {
                    } else if (_0x45cd22[_0x1691('88')]) {
                        console[_0x1691('9')](_0x386074 + '\x20' + (_0x45cd22[_0x1691('88')] || ''));
                    } else {
                        console[_0x1691('9')](_0x386074 + '\x20' + _0x241587);
                    }
                } else {
                    console[_0x1691('9')](_0x386074 + '\x20' + _0x241587);
                }
                break;
            case _0x1691('41'):
                if (typeof _0x45cd22 == _0x1691('7f')) {
                    if (_0x45cd22[_0x1691('84')] && _0x45cd22[_0x1691('84')] === !![]) {
                        $[_0x1691('53')] = _0x45cd22[_0x1691('85')][_0x1691('53')] || '';
                        $[_0x1691('2b')] = _0x45cd22[_0x1691('85')][_0x1691('2b')] || '';
                        $[_0x1691('57')] = _0x45cd22[_0x1691('85')][_0x1691('57')] || '';
                        $[_0x1691('55')] = _0x45cd22[_0x1691('85')][_0x1691('55')] || '';
                        $[_0x1691('8d')] = _0x45cd22[_0x1691('85')][_0x1691('8d')] || 0x0;
                        $[_0x1691('4b')] = _0x45cd22[_0x1691('85')][_0x1691('8e')];
                        $[_0x1691('33')] = _0x45cd22[_0x1691('85')][_0x1691('8f')] || 0x0;
                        if (_0x45cd22[_0x1691('85')][_0x1691('90')]) {
                            console[_0x1691('9')]('\u83b7\u5f97' + _0x45cd22[_0x1691('85')][_0x1691('90')] + '\u8c46');
                            allMessage += _0x1691('51') + $[_0x1691('25')] + _0x1691('91') + _0x45cd22[_0x1691('85')][_0x1691('90')] + '\u8c46\x0a';
                        }
                    } else if (_0x45cd22[_0x1691('88')]) {
                        if (_0x45cd22[_0x1691('88')][_0x1691('47')]('\u7ed3\u675f') > -0x1) $[_0x1691('13')] = !![];
                        console[_0x1691('9')](_0x386074 + '\x20' + (_0x45cd22[_0x1691('88')] || ''));
                    } else {
                        console[_0x1691('9')](_0x386074 + '\x20' + _0x241587);
                    }
                } else {
                    console[_0x1691('9')](_0x386074 + '\x20' + _0x241587);
                }
                break;
            case _0x1691('92'):
                if (typeof _0x45cd22 == _0x1691('7f')) {
                    if (_0x45cd22[_0x1691('93')]) {
                        $[_0x1691('94')] = _0x45cd22[_0x1691('95')] || ![];
                    } else if (_0x45cd22[_0x1691('88')] || _0x45cd22[_0x1691('14')]) {
                        console[_0x1691('9')](_0x386074 + '\x20' + (_0x45cd22[_0x1691('88')] || _0x45cd22[_0x1691('14')] || ''));
                    } else {
                        console[_0x1691('9')](_0x386074 + '\x20' + _0x241587);
                    }
                } else {
                    console[_0x1691('9')](_0x386074 + '\x20' + _0x241587);
                }
                break;
            case _0x1691('96'):
                if (typeof _0x45cd22 == _0x1691('7f')) {
                    if (_0x45cd22[_0x1691('84')] && _0x45cd22[_0x1691('84')] === !![]) {
                        console[_0x1691('9')](_0x1691('97'));
                        let _0x1c5fe2 = 0x0;
                        let _0x2ebea3 = 0x0;
                        let _0xc5c35f = {
                            'dayShareBeans': '\u9080\u8bf7',
                            'dayBeSharedBeans': _0x1691('98'),
                            'openCardBeans': '\u5f00\u5361',
                            'saveTaskBeans23': '\u5173\u6ce8',
                            'saveTaskBeans12': _0x1691('99'),
                            'saveTaskBeans21': '\u52a0\u8d2d'
                        };
                        for (let _0x91aa89 in _0x45cd22[_0x1691('85')]) {
                            let _0x44aa74 = _0x45cd22[_0x1691('85')][_0x91aa89];
                            if (_0x44aa74[_0x1691('9a')] == _0x1691('9b')) {
                                _0x1c5fe2++;
                                _0x2ebea3 = _0x44aa74[_0x1691('9c')][_0x1691('9d')]('\u4eac\u8c46', '');
                            } else {
                                console[_0x1691('9')]('' + (_0x44aa74[_0x1691('9e')] != 0xa && _0x44aa74[_0x1691('9a')] && (_0xc5c35f[_0x44aa74[_0x1691('9a')]] || _0x44aa74[_0x1691('9a')]) + '\x3a' || _0x44aa74[_0x1691('9f')] && _0x44aa74[_0x1691('9f')] + '\x3a' || '') + _0x44aa74[_0x1691('9c')]);
                            }
                        }
                        if (_0x1c5fe2 > 0x0) console[_0x1691('9')](_0x1691('a0') + _0x1c5fe2 + '\x29\x3a' + (_0x1c5fe2 * parseInt(_0x2ebea3, 0xa) || 0x1e) + '\u4eac\u8c46');
                    } else if (_0x45cd22[_0x1691('88')]) {
                        console[_0x1691('9')](_0x386074 + '\x20' + (_0x45cd22[_0x1691('88')] || ''));
                    } else {
                        console[_0x1691('9')](_0x386074 + '\x20' + _0x241587);
                    }
                } else {
                    console[_0x1691('9')](_0x386074 + '\x20' + _0x241587);
                }
                break;
            case _0x1691('a1'):
                if (typeof _0x45cd22 == _0x1691('7f')) {
                    if (_0x45cd22[_0x1691('84')] && _0x45cd22[_0x1691('84')] === !![] && _0x45cd22[_0x1691('85')]) {
                        $[_0x1691('a2')] = _0x45cd22[_0x1691('85')][_0x1691('20')];
                        $[_0x1691('9')](_0x1691('a3') + _0x45cd22[_0x1691('85')][_0x1691('20')] + '\u4e2a');
                    } else if (_0x45cd22[_0x1691('88')]) {
                        console[_0x1691('9')](_0x386074 + '\x20' + (_0x45cd22[_0x1691('88')] || ''));
                    } else {
                        console[_0x1691('9')](_0x386074 + '\x20' + _0x241587);
                    }
                } else {
                    console[_0x1691('9')](_0x386074 + '\x20' + _0x241587);
                }
                break;
            case _0x1691('40'):
            case _0x1691('7b'):
                break;
            default:
                console[_0x1691('9')](_0x386074 + _0x1691('a4') + _0x241587);
        }
        if (typeof _0x45cd22 == _0x1691('7f')) {
            if (_0x45cd22[_0x1691('88')]) {
                if (_0x45cd22[_0x1691('88')][_0x1691('47')]('\u706b\u7206') > -0x1) {
                    $[_0x1691('11')] = !![];
                }
            }
        }
    } catch (_0x2d0b4f) {
        console[_0x1691('9')](_0x2d0b4f);
    }
}

function getPostRequest(_0x3f7895, _0x45aabf, _0x2c826b = _0x1691('5f')) {
    let _0x3a5aea = {
        'Accept': _0x1691('a5'),
        'Accept-Encoding': _0x1691('a6'),
        'Accept-Language': _0x1691('a7'),
        'Connection': _0x1691('a8'),
        'Content-Type': _0x1691('a9'),
        'Cookie': cookie,
        'User-Agent': $['\x55\x41'],
        'X-Requested-With': _0x1691('aa')
    };
    if (_0x3f7895[_0x1691('47')](_0x1691('5e')) > -0x1) {
        _0x3a5aea[_0x1691('ab')] = _0x1691('ac') + $[_0x1691('1d')];
        _0x3a5aea[_0x1691('ad')] = '' + (lz_jdpin_token_cookie && lz_jdpin_token_cookie || '') + ($[_0x1691('36')] && _0x1691('ae') + $[_0x1691('36')] + '\x3b' || '') + activityCookie;
    }
    return {
        '\x75\x72\x6c': _0x3f7895,
        '\x6d\x65\x74\x68\x6f\x64': _0x2c826b,
        '\x68\x65\x61\x64\x65\x72\x73': _0x3a5aea,
        '\x62\x6f\x64\x79': _0x45aabf,
        '\x74\x69\x6d\x65\x6f\x75\x74': 0x7530
    };
}

function getCk() {
    return new Promise(_0x502715 => {
        let _0x581d8e = {
            '\x75\x72\x6c': _0x1691('af'),
            '\x68\x65\x61\x64\x65\x72\x73': {
                'Accept': _0x1691('b0'),
                'Accept-Encoding': _0x1691('a6'),
                'Accept-Language': _0x1691('a7'),
                'Connection': _0x1691('a8'),
                'Content-Type': _0x1691('a9'),
                'Cookie': cookie,
                'Referer': _0x1691('af'),
                'User-Agent': $['\x55\x41']
            },
            '\x74\x69\x6d\x65\x6f\x75\x74': 0x7530
        };
        $[_0x1691('b1')](_0x581d8e, async (_0x1d173f, _0x4b3363, _0x30a69d) => {
            try {
                if (_0x1d173f) {
                    if (_0x4b3363 && typeof _0x4b3363[_0x1691('77')] != _0x1691('78')) {
                        if (_0x4b3363[_0x1691('77')] == 0x1ed) {
                            console[_0x1691('9')](_0x1691('3b'));
                            $[_0x1691('12')] = !![];
                        }
                    }
                    console[_0x1691('9')]('' + $[_0x1691('79')](_0x1d173f));
                    console[_0x1691('9')]($[_0x1691('15')] + _0x1691('b2'));
                } else {
                    let _0x276558 = _0x30a69d[_0x1691('24')](/(活动已经结束)/) && _0x30a69d[_0x1691('24')](/(活动已经结束)/)[0x1] || '';
                    if (_0x276558) {
                        $[_0x1691('13')] = !![];
                        console[_0x1691('9')](_0x1691('b3'));
                    }
                    setActivityCookie(_0x4b3363);
                }
            } catch (_0xb4cb89) {
                $[_0x1691('30')](_0xb4cb89, _0x4b3363);
            } finally {
                _0x502715();
            }
        });
    });
}

function setActivityCookie(_0xf91ecd) {
    let _0x3c659e = '';
    let _0xeadc0c = '';
    let _0x54674f = '';
    let _0x246152 = _0xf91ecd && _0xf91ecd[_0x1691('b4')] && (_0xf91ecd[_0x1691('b4')][_0x1691('b5')] || _0xf91ecd[_0x1691('b4')][_0x1691('b6')] || '') || '';
    let _0x460a36 = '';
    if (_0x246152) {
        if (typeof _0x246152 != _0x1691('7f')) {
            _0x460a36 = _0x246152[_0x1691('b7')]('\x2c');
        } else _0x460a36 = _0x246152;
        for (let _0x2cf02c of _0x460a36) {
            let _0x2eece2 = _0x2cf02c[_0x1691('b7')]('\x3b')[0x0][_0x1691('b8')]();
            if (_0x2eece2[_0x1691('b7')]('\x3d')[0x1]) {
                if (_0x2eece2[_0x1691('47')](_0x1691('b9')) > -0x1) _0x3c659e = _0x2eece2[_0x1691('9d')](/ /g, '') + '\x3b';
                if (_0x2eece2[_0x1691('47')](_0x1691('ba')) > -0x1) _0xeadc0c = _0x2eece2[_0x1691('9d')](/ /g, '') + '\x3b';
                if (_0x2eece2[_0x1691('47')](_0x1691('bb')) > -0x1) _0x54674f = '' + _0x2eece2[_0x1691('9d')](/ /g, '') + '\x3b';
            }
        }
    }
    if (_0x3c659e && _0xeadc0c) activityCookie = _0x3c659e + '\x20' + _0xeadc0c;
    if (_0x54674f) lz_jdpin_token_cookie = _0x54674f;
}

async function getUA() {
    $['\x55\x41'] = _0x1691('bc') + randomString(0x28) + _0x1691('bd');
}

function randomString(_0x36d6ca) {
    _0x36d6ca = _0x36d6ca || 0x20;
    let _0x374181 = _0x1691('be'), _0xae81df = _0x374181[_0x1691('20')], _0xb8ffcb = '';
    for (i = 0x0; i < _0x36d6ca; i++) _0xb8ffcb += _0x374181[_0x1691('bf')](Math[_0x1691('1e')](Math[_0x1691('1f')]() * _0xae81df));
    return _0xb8ffcb;
}

async function joinShop() {
    if (!$[_0x1691('44')]) return;
    return new Promise(async _0x55ea97 => {
        $[_0x1691('46')] = _0x1691('48');
        let _0x41ea29 = '';
        if ($[_0x1691('c0')]) _0x41ea29 = _0x1691('c1') + $[_0x1691('c0')];
        let _0x344980 = _0x1691('c2') + $[_0x1691('44')] + _0x1691('c3') + $[_0x1691('44')] + _0x1691('c4') + _0x41ea29 + _0x1691('c5');
        let _0x6340d8 = await geth5st();
        const _0x150e9f = {
            '\x75\x72\x6c': _0x1691('c6') + _0x344980 + _0x1691('c7') + _0x6340d8,
            '\x68\x65\x61\x64\x65\x72\x73': {
                'accept': _0x1691('c8'),
                'accept-encoding': _0x1691('a6'),
                'accept-language': _0x1691('c9'),
                'cookie': cookie,
                'origin': _0x1691('ca'),
                'user-agent': _0x1691('cb')
            }
        };
        $[_0x1691('b1')](_0x150e9f, async (_0x387ca2, _0x12fa0a, _0x3a2bee) => {
            try {
                _0x3a2bee = _0x3a2bee && _0x3a2bee[_0x1691('24')](/jsonp_.*?\((.*?)\);/) && _0x3a2bee[_0x1691('24')](/jsonp_.*?\((.*?)\);/)[0x1] || _0x3a2bee;
                let _0x4b3a37 = $[_0x1691('cc')](_0x3a2bee, _0x3a2bee);
                if (_0x4b3a37 && typeof _0x4b3a37 == _0x1691('7f')) {
                    if (_0x4b3a37 && _0x4b3a37[_0x1691('cd')] === !![]) {
                        console[_0x1691('9')](_0x4b3a37[_0x1691('82')]);
                        $[_0x1691('46')] = _0x4b3a37[_0x1691('82')];
                        if (_0x4b3a37[_0x1691('84')] && _0x4b3a37[_0x1691('84')][_0x1691('ce')]) {
                            for (let _0x4e1b5b of _0x4b3a37[_0x1691('84')][_0x1691('ce')][_0x1691('cf')]) {
                                console[_0x1691('9')](_0x1691('d0') + _0x4e1b5b[_0x1691('d1')] + _0x4e1b5b[_0x1691('d2')] + _0x4e1b5b[_0x1691('d3')]);
                            }
                        }
                    } else if (_0x4b3a37 && typeof _0x4b3a37 == _0x1691('7f') && _0x4b3a37[_0x1691('82')]) {
                        $[_0x1691('46')] = _0x4b3a37[_0x1691('82')];
                        console[_0x1691('9')]('' + (_0x4b3a37[_0x1691('82')] || ''));
                    } else {
                        console[_0x1691('9')](_0x3a2bee);
                    }
                } else {
                    console[_0x1691('9')](_0x3a2bee);
                }
            } catch (_0x4b1038) {
                $[_0x1691('30')](_0x4b1038, _0x12fa0a);
            } finally {
                _0x55ea97();
            }
        });
    });
}

async function getshopactivityId() {
    return new Promise(async _0x57d763 => {
        let _0x5f3f6f = _0x1691('c2') + $[_0x1691('44')] + _0x1691('d4');
        let _0x1c779e = await geth5st();
        const _0x18570d = {
            '\x75\x72\x6c': _0x1691('d5') + _0x5f3f6f + _0x1691('c7') + _0x1c779e,
            '\x68\x65\x61\x64\x65\x72\x73': {
                'accept': _0x1691('c8'),
                'accept-encoding': _0x1691('a6'),
                'accept-language': _0x1691('c9'),
                'cookie': cookie,
                'origin': _0x1691('ca'),
                'user-agent': _0x1691('cb')
            }
        };
        $[_0x1691('b1')](_0x18570d, async (_0x3131e8, _0x21bfd1, _0x4e3dd1) => {
            try {
                _0x4e3dd1 = _0x4e3dd1 && _0x4e3dd1[_0x1691('24')](/jsonp_.*?\((.*?)\);/) && _0x4e3dd1[_0x1691('24')](/jsonp_.*?\((.*?)\);/)[0x1] || _0x4e3dd1;
                let _0x2640a6 = $[_0x1691('cc')](_0x4e3dd1, _0x4e3dd1);
                if (_0x2640a6 && typeof _0x2640a6 == _0x1691('7f')) {
                    if (_0x2640a6 && _0x2640a6[_0x1691('cd')] == !![]) {
                        console[_0x1691('9')](_0x1691('d6') + (_0x2640a6[_0x1691('84')][_0x1691('d7')][_0x1691('d8')] || ''));
                        $[_0x1691('c0')] = _0x2640a6[_0x1691('84')][_0x1691('d9')] && _0x2640a6[_0x1691('84')][_0x1691('d9')][0x0] && _0x2640a6[_0x1691('84')][_0x1691('d9')][0x0][_0x1691('da')] && _0x2640a6[_0x1691('84')][_0x1691('d9')][0x0][_0x1691('da')][_0x1691('1a')] || '';
                    }
                } else {
                    console[_0x1691('9')](_0x4e3dd1);
                }
            } catch (_0x46f0dd) {
                $[_0x1691('30')](_0x46f0dd, _0x21bfd1);
            } finally {
                _0x57d763();
            }
        });
    });
}

function getAuthorCodeList(_0x2d010e) {
    return new Promise(_0x4bd01c => {
        const _0x165baa = {
            '\x75\x72\x6c': _0x2d010e + '\x3f' + new Date(),
            'timeout': 0x2710,
            '\x68\x65\x61\x64\x65\x72\x73': {'User-Agent': _0x1691('db')}
        };
        $[_0x1691('b1')](_0x165baa, async (_0x255082, _0x47b916, _0x567422) => {
            try {
                if (_0x255082) {
                    $[_0x1691('9')](_0x255082);
                } else {
                    if (_0x567422) _0x567422 = JSON[_0x1691('7c')](_0x567422);
                }
            } catch (_0x43be77) {
                $[_0x1691('30')](_0x43be77, _0x47b916);
                _0x567422 = null;
            } finally {
                _0x4bd01c(_0x567422);
            }
        });
    });
}

function jsonParse(_0x55e49f) {
    if (typeof _0x55e49f == _0x1691('dc')) {
        try {
            return JSON[_0x1691('7c')](_0x55e49f);
        } catch (_0x410b2e) {
            console[_0x1691('9')](_0x410b2e);
            $[_0x1691('14')]($[_0x1691('15')], '', _0x1691('dd'));
            return [];
        }
    }
}

function generateFp() {
    let _0x1d3817 = _0x1691('de');
    let _0xa17410 = 0xd;
    let _0xba602f = '';
    for (; _0xa17410--;) _0xba602f += _0x1d3817[Math[_0x1691('1f')]() * _0x1d3817[_0x1691('20')] | 0x0];
    return (_0xba602f + Date[_0x1691('df')]())[_0x1691('e0')](0x0, 0x10);
}

function geth5st() {
    let _0x4a0e38 = Date[_0x1691('df')]();
    let _0x1da3d1 = generateFp();
    let _0x13bce2 = new Date(_0x4a0e38)[_0x1691('e1')](_0x1691('e2'));
    let _0x2749d7 = [_0x1691('e3'), _0x1691('e4')];
    let _0x36b01e = _0x2749d7[random(0x0, _0x2749d7[_0x1691('20')])];
    return encodeURIComponent(_0x13bce2 + '\x3b' + _0x1da3d1 + _0x36b01e + Date[_0x1691('df')]());
}

Date[_0x1691('e5')][_0x1691('e1')] = function (_0x39a25e) {
    var _0x38a559, _0x400245 = this, _0x31baaf = _0x39a25e, _0x590889 = {
        'M+': _0x400245[_0x1691('e6')]() + 0x1,
        'd+': _0x400245[_0x1691('e7')](),
        'D+': _0x400245[_0x1691('e7')](),
        'h+': _0x400245[_0x1691('e8')](),
        'H+': _0x400245[_0x1691('e8')](),
        'm+': _0x400245[_0x1691('e9')](),
        's+': _0x400245[_0x1691('ea')](),
        'w+': _0x400245[_0x1691('eb')](),
        'q+': Math[_0x1691('1e')]((_0x400245[_0x1691('e6')]() + 0x3) / 0x3),
        'S+': _0x400245[_0x1691('ec')]()
    };
    /(y+)/i[_0x1691('ed')](_0x31baaf) && (_0x31baaf = _0x31baaf[_0x1691('9d')](RegExp['\x24\x31'], ''[_0x1691('ee')](_0x400245[_0x1691('ef')]())[_0x1691('f0')](0x4 - RegExp['\x24\x31'][_0x1691('20')])));
    for (var _0x5dbe4c in _0x590889) {
        if (new RegExp('\x28'[_0x1691('ee')](_0x5dbe4c, '\x29'))[_0x1691('ed')](_0x31baaf)) {
            var _0x121e56, _0x6b4a65 = '\x53\x2b' === _0x5dbe4c ? _0x1691('f1') : '\x30\x30';
            _0x31baaf = _0x31baaf[_0x1691('9d')](RegExp['\x24\x31'], 0x1 == RegExp['\x24\x31'][_0x1691('20')] ? _0x590889[_0x5dbe4c] : (''[_0x1691('ee')](_0x6b4a65) + _0x590889[_0x5dbe4c])[_0x1691('f0')](''[_0x1691('ee')](_0x590889[_0x5dbe4c])[_0x1691('20')]));
        }
    }
    return _0x31baaf;
};

function random(_0x3db637, _0x1b8974) {
    return Math[_0x1691('1e')](Math[_0x1691('1f')]() * (_0x1b8974 - _0x3db637)) + _0x3db637;
};_0xodR = 'jsjiami.com.v6';


// prettier-ignore
function Env(t, e) {
    "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);

    class s {
        constructor(t) {
            this.env = t
        }

        send(t, e = "GET") {
            t = "string" == typeof t ? {url: t} : t;
            let s = this.get;
            return "POST" === e && (s = this.post), new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s)
                })
            })
        }

        get(t) {
            return this.send.call(this.env, t)
        }

        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }

    return new class {
        constructor(t, e) {
            this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`)
        }

        isNode() {
            return "undefined" != typeof module && !!module.exports
        }

        isQuanX() {
            return "undefined" != typeof $task
        }

        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }

        isLoon() {
            return "undefined" != typeof $loon
        }

        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }

        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }

        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i) try {
                s = JSON.parse(this.getdata(t))
            } catch {
            }
            return s
        }

        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }

        getScript(t) {
            return new Promise(e => {
                this.get({url: t}, (t, s, i) => e(i))
            })
        }

        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"), n = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {script_text: t, mock_type: "cron", timeout: r},
                    headers: {"X-Key": o, Accept: "*/*"}
                };
                this.post(n, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }

        loaddata() {
            if (!this.isNode()) return {};
            {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e);
                if (!s && !i) return {};
                {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }

        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }

        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i) if (r = Object(r)[t], void 0 === r) return s;
            return r
        }

        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }

        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
                if (r) try {
                    const t = JSON.parse(r);
                    e = t ? this.lodash_get(t, i, "") : e
                } catch (t) {
                    e = ""
                }
            }
            return e
        }

        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i),
                    h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
                }
            } else s = this.setval(t, e);
            return s
        }

        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }

        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }

        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }

        get(t, e = (() => {
        })) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1})), $httpClient.get(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {hints: !1})), $task.fetch(t).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                try {
                    if (t.headers["set-cookie"]) {
                        const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                        s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
                    }
                } catch (t) {
                    this.logErr(t)
                }
            }).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => {
                const {message: s, response: i} = t;
                e(s, i, i && i.body)
            }))
        }

        post(t, e = (() => {
        })) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1})), $httpClient.post(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {hints: !1})), $task.fetch(t).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => e(t)); else if (this.isNode()) {
                this.initGotEnv(t);
                const {url: s, ...i} = t;
                this.got.post(s, i).then(t => {
                    const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                    e(null, {status: s, statusCode: i, headers: r, body: o}, o)
                }, t => {
                    const {message: s, response: i} = t;
                    e(s, i, i && i.body)
                })
            }
        }

        time(t, e = null) {
            const s = e ? new Date(e) : new Date;
            let i = {
                "M+": s.getMonth() + 1,
                "d+": s.getDate(),
                "H+": s.getHours(),
                "m+": s.getMinutes(),
                "s+": s.getSeconds(),
                "q+": Math.floor((s.getMonth() + 3) / 3),
                S: s.getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
            return t
        }

        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t) return t;
                if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {"open-url": t} : this.isSurge() ? {url: t} : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"];
                        return {openUrl: e, mediaUrl: s}
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl;
                        return {"open-url": e, "media-url": s}
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {url: e}
                    }
                }
            };
            if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
                let t = ["", "==============📣系统通知📣=============="];
                t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t)
            }
        }

        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
        }

        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t)
        }

        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }

        done(t = {}) {
            const e = (new Date).getTime(), s = (e - this.startTime) / 1e3;
            this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }(t, e)
}

