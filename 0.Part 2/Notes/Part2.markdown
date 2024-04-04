# Week6: The Web
## 6.1 HTTP
**HTTP**
1. HTTP中的P就是protocal，协议，主要是由client和server之间的互动
   ![](2024-03-08-212318.png)
   请求报文就是：Header
   Client Header
   ![](2024-03-08-212613.png)
   Server Header
   ![](2024-03-08-212749.png)
   ![](2024-03-08-212704.png)
   * Methods有```GET```(提取信息) ```HEAD``` ```POST```（传输信息） ```PUT``` ```DELETE```
   * Response codes:
     ![](2024-03-08-213012.png)
   * Content Type:
     ![](2024-03-08-213034.png)
2. Cookies
   一开始http的设计是无状态的，但是后来有了用户登录，为了保持登陆状态才有了cookies
   ![](2024-03-08-213713.png)
   Cookie protocol
   ![](2024-03-08-213123.png)
   ![](2024-03-08-213144.png)

**Internet**
![](2024-03-08-213444.png)
![](2024-03-08-214317.png)
1. HTTP（Hypertext Transfer Protocol）：
* HTTP是一种应用层协议，用于在客户端和服务器之间传输超文本文档，通常用于Web浏览器与Web服务器之间的通信。HTTP是基于TCP协议的。
1. TLS（Transport Layer Security）：
* TLS是一种安全协议，用于在通信过程中加密数据，确保数据传输的机密性和完整性。TLS通常在传输层使用，提供对数据的加密和认证功能。
1. TCP（Transmission Control Protocol）：
* TCP是一种传输层协议，负责在网络上可靠地传输数据。它提供错误检测、流量控制和顺序传输等功能。HTTP和TLS通常运行在TCP之上。
1. IP（Internet Protocol）：
* IP是一种网络层协议，负责在网络上标识和定位设备。它通过IP地址标识网络上的主机，并确保数据正确地从源主机传输到目标主机。


![](2024-03-08-224358.png)






**URLs**
![](2024-03-08-224513.png)
* 总体组成部分：
  1. 协议（Protocol）： 指定访问资源所使用的协议或规范，例如 HTTP、HTTPS、FTP 等。
  2. 主机名（Host）： 标识托管资源的服务器的域名或IP地址。
  3. 端口号（Port）： 指定用于访问资源的端口号。如果未指定，默认使用协议的默认端口（如HTTP的默认端口是80）。
  4. 路径（Path）： 标识服务器上资源的具体位置或路径。
  5. 查询参数（Query Parameters）： 传递给服务器的附加参数，通常以键值对的形式出现，用于定制请求。
  6. 片段标识符（Fragment Identifier）： 标识资源中的特定部分，通常用于指定文档中的锚点或特定位置。
  ```协议://主机名[:端口号]/路径?查询参数#片段标识符```
  ```https://www.example.com:443/path/to/resource?param1=value1&param2=value2#section1```
  Protocol:HTTPS
  Host:www.example.com
  Port: 443
  Path:/path/to/resource
  查询参数:param1=value1和param2=value2,就是图下面说的query吧，有```？```标识符
  ![](2024-03-08-224535.png)
* URI Schemes
  1. 定义：URI schemes（统一资源标识符方案）是用于标识和定位资源的命名方案或协议的一部分。在一个 URI 中，scheme 通常是 URI 的第一部分，后面跟着一个冒号（:）。URI schemes 指定了用于访问或定位资源的协议或协议族
  2. 常用的有：
     1. HTTP（用于在 Web 上传输超文本的协议，通常用于访问网页）
    ```http://www.example.com/```
     2. HTTPS（在 HTTP 的基础上通过加密（TLS/SSL）提供安全传输的协议）
   ```http://www.example.com/```
     3. FTP（File Transfer Protocol）：用于在网络上传输文件的协议
   ```http://www.example.com/```
     4. File：用于访问本地文件系统中的文件
   ```http://www.example.com/```
     5. mailto：用于发送电子邮件的协议。
   ```mailto:info@example.com```
     6. tel：用于拨打电话的协议
   ```tel:+123456789```
     7. data：用于内嵌数据，通常用于图像或其他小型数据。
   ```http://www.example.com/```
     8. telnet：用于在远程主机上执行命令的协议。
   ```http://www.example com/```
   3. PPT的详细解释
        1. ftp://ftp.is.co.za/rfc/rfc1808.txt：
        使用 FTP 协议访问资源，指向了一个文本文件 rfc1808.txt。
        2. http://www.ietf.org/rfc/rfc2396.txt：使用 HTTP 协议访问资源，指向了一个文本文件 rfc2396.txt  
        3. ldap://[2001:db8::7]/c=GB?objectClass?one：使用 LDAP（Lightweight Directory Access Protocol）协议，访问了一个位于 IPv6 地址 [2001:db8::7] 的 LDAP 目录，并使用查询参数 c=GB?objectClass?one。(Lightweight Directory Access Protocol（轻量级目录访问协议）。它是一种用于在网络上访问和维护分层目录信息的协议。LDAP通常用于组织和存储有关用户、计算机、网络资源等信息的目录服务)
        3. mailto:John.Doe@example.com：使用 mailto 协议，表示一个电子邮件地址。
        4. news:comp.infosystems.www.servers.unix：使用新闻协议，指向了一个新闻组 comp.infosystems.www.servers.unix。
        5. tel:+1-816-555-1212：使用 tel 协议，表示一个电话号码 +1-816-555-1212。
        6. telnet://192.0.2.16:80/：使用 Telnet 协议，连接到了 IP 地址 192.0.2.16 的端口 80。
        7. urn:oasis:names:specification:docbook:dtd:xml:4.1.2：使用 URN（Uniform Resource Name）命名空间，表示一个 DocBook XML DTD 版本 4.1.2 的规范。(URN 代表 Uniform Resource Name（统一资源名称），是一种用于在互联网上唯一标识资源的命名方式。URN的目的是提供一个持久性的、位置无关的标识符，使得资源可以在不同的上下文中被唯一地识别)
   4. REST(Representational State Transfer)
        是一种设计原则和架构风格，用于构建分布式系统和网络应用程序。REST并非一种标准或协议，而是一组设计原则，旨在使网络通信更简单、可扩展和灵活。
        1. State goes in the request:
            表达了 REST 的无状态性。在 RESTful 系统中，每个来自客户端到服务器的请求应包含处理请求所需的所有信息。服务器不在请求之间存储客户端的状态，而是依赖于客户端在每个请求中提供必要的状态信息，例如身份验证信息或其他必要的数据。
        2. Resources have names (URLs):
            在 REST 中，资源通过 URI（Uniform Resource Identifier）标识，通常表示为 URL。每个资源，无论是物理实体还是抽象概念，都应该有一个唯一的名称或标识符，用于寻址和与之交互。URL 提供了一种命名和访问资源的方式
        3. Use HTTP verbs as intended:
               RESTful 服务应该充分利用标准的 HTTP 方法（GET、POST、PUT、DELETE 等），并按照这些方法的原始设计意图使用它们。每个 HTTP 方法在 REST 中都有特定的语义含义：
            GET： 获取资源的表示。
            POST： 创建新资源或提交要处理的数据。
            PUT： 更新资源或在不存在时创建资源。
            DELETE： 删除资源。
        ![](2024-03-08-232436.png)
        ![](2024-03-08-232532.png)
## 6.2 HTML5

```HTML
<!-- 有点类似于latex，有一个开头和结尾<HEAD> </HEAD>    -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- 这里才是主要显示内容得地方 -->
    <!-- h1 是标签，而且h1是最大的标签 -->
    <h1>HEAD LINE</h1>
    <h2>HEAD LINE</h2>
    <!-- 段落 -->
    <p>
        BALABLALABLALAALA
        <!-- 超链接 -->
        <a href="https://baidu.com"> getopen</a>
        <!-- ctrl+B，粗体  -->
        <strong> </strong>
        <!-- 斜体，emphasis  -->
        <em> </em>


    </p>
    
</body>
</html>
```

