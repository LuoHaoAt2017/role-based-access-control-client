# role-based-access-control-client
会话追踪

- 登录网站，选择商品放入购物车后关闭浏览器。再次打开时，发现又要重新登录。
- 登录网站，在一个页面逗留了很久，终于决定要买了，却提示你重新登录。

https://www.zhihu.com/question/19786827
https://zhuanlan.zhihu.com/p/42918845
https://github.com/auth0/express-jwt
https://github.com/expressjs/cookie-session
https://github.com/js-cookie/js-cookie

HTTP必须保持无状态
为什么HTTP必须保持无状态

HTTP是一种无状态协议。什么叫无状态？
客户端第二次来访时，服务器根本不知道这个客户端以前是否来访过，Web服务器本身不能识别出哪些请求是同一个浏览器发出的。
即：浏览器的每一次请求都是完全孤立的。

当服务器无法断定客户端时，一次会话就结束了！
服务器什么情况下无法断定一个客户端？无非两种情况：
- 服务器不行了（session失效）
- 客户端不行了（cookie失效）
会话的基本原则：双方共存（cookie与session同在）

会话跟踪常用的有两种技术：Cookie和Session，并且Session底层依赖于Cookie。
如果Cookie被禁用，也可以通过URL重写等手段实现。

会话机制的目的是什么：标识用户，跟踪状态。

Cookie其实是一份小数据，是服务器响应给客户端，并且存储在客户端的一份小数据。
下次客户端访问服务器时，会自动带上这个Cookie。服务器通过Cookie就可以区分客户端。

Cookie的两种类型
- 会话Cookie (Session Cookie)
- 持久性Cookie (Persistent Cookie)
