# Week6: The Web
## 6.1 HTTP
### HTTP
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

### Internet
![](2024-03-08-213444.png)
从上往下依次是 应用层、传输层、网络层、硬件接口


![](2024-03-08-214317.png)

问了chatgpt这些都是计算机网络中不同的协议：

1. HTTP（Hypertext Transfer Protocol）-应用层：
* HTTP是一种**应用层**协议，用于在客户端和服务器之间传输超文本文档，通常用于Web浏览器与Web服务器之间的通信。
HTTP使用TCP协议作为其传输层协议，使用TCP保证可靠传输
2. TLS（Transport *Layer* Security）-传输层：
* TLS是一种**安全协议**，用于在通信过程中加密数据，确保数据传输的机密性和完整性。TLS通常在传输层使用，提供对数据的加密和认证功能。
就是有一个证书（certificate agency）
![](2024-04-04-20-15-08.png)

3. TCP（Transmission *Control* Protocol）-传输层：
* TCP是一种**传输层**协议，负责在网络上可靠地传输数据。它提供错误检测、流量控制和顺序传输等功能。HTTP和TLS通常运行在TCP之上。
* 建立连接：三次握手
* 终端连接：四次握手

* 保证传输：
这张图的意思是，message过大给他五马分尸，然后都通过IP协议发送
![](2024-04-04-19-48-18.png)
* 错误检测：
比如说上图的4重复了，那么header和server就会通过TCP协议进行检测
  * Sequence Number：header中的，用于标识每个数据包的唯一序号。接收方通过序列号来确定数据包的顺序，并且检测和丢弃重复的数据包。如果接收方收到一个已经接收过的数据包，它会根据序列号进行比较，如果发现重复，就会丢弃这个数据包，以确保数据的一致性。
  * Checksum：校验和（Checksum）字段，校验和用于检测数据包在传输过程中是否发生了错误或损坏。通过对数据包中的数据进行计算得出一个校验值，并将这个校验值添加到数据包中。发送方在发送数据包时会计算校验和，并将其添加到数据包的头部；接收方在接收到数据包后也会重新计算校验和，并将其与数据包中的校验和进行比较。如果两者不匹配，则表示数据包在传输过程中发生了错误或损坏

  * ```ACK 101``` ```100 data```是一对搭配，表示数据包的确认和数据的传输
      接收方已经成功接收了序列号为 100 的数据包，并且期望接收下一个序列号为 101 的数据包
      100就是上面说的sequence number
![](2024-04-04-19-57-21.png)
* 约定俗称的ports（一般0-1023是众所周知的），比如 HTTP 服务（端口号 80）、FTP 服务（端口号 21）、SSH 服务（端口号 22）

4. IP（Internet Protocol）-网络层：
* IP是一种**网络层**协议，负责在网络上标识和定位设备。它通过IP地址标识网络上的主机，并确保数据正确地从源主机传输到目标主机。
是互联网核心协议，为TCP
![](2024-04-04-19-40-54.png)
* Path：一般从网络到主机需要经过很多路由器、交换器、网络等
* Router（路由器）：用于在不同网络中转发数据包（一个数据包如果所示，包含着data、source address、destination address）路由器通常用于连接不同的网络段，它们具有将数据包从一个网络传输到另一个网络的能力
* 其中所谓的```137.222.0.38```:
  1. ```137```Network ID，网络号指示了数据包应该通过哪个网络传输
  2. ```222```Subnet ID，子网号用于将一个网络划分成多个子网，以实现更有效的网络管理和资源分配
  3. ```0```通常用于标识特定的子网内的主机或设备。它可能表示子网内的某个特定主机，也可能是网络中的其他设备
  4. ```38```Host ID,标识了特定网络中的主机或设备


总结：
* HTTP 是应用层协议，用于传输超文本；
* TLS 是传输层安全协议，用于保护通信的安全性；
* TCP 是传输层协议，负责建立可靠的数据传输通道；
* IP 是网络层协议，负责在网络中传输数据包






### URLs
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
   ```ftp://username:password@ftp.example.com/path/to/directory/file.txt```
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

### Exercise
#### Exploring HTTP
1. ```wget localhost:8000```:工具从本地主机的端口 8000 获取内容。wget 是一个用于从网络下载文件的命令行工具，您提供的命令表示要从本地主机上运行的 Web 服务器（通常在端口 8000 上）下载内容
```netstat -tan```:这个命令用于显示系统的网络连接情况。netstat 是一个用于显示网络连接、路由表和网络接口信息的工具，而 -tan 选项是一组参数，表示：
-t：仅显示 TCP 连接。
-a：显示所有的连接和监听端口。
-n：显示 IP 地址和端口号，而不进行 DNS 解析。
因此，netstat -tan 命令将显示系统上所有的 TCP 连接，包括其 IP 地址和端口号，以及连接状态等信息
2. 基础server和client
```nc -l -p 8000 < http-response```:network cat and tells it to listen on TCP port 8000 (-l -p 8000), e.g. to run a server there启动一个network cat让其在端口8000 run一个server
![](2024-04-04-21-41-21.png)
![](2024-04-04-21-41-40.png)
3. Connect to a web browser
   ![](2024-04-04-21-52-14.png)
4. A web server in C
   这台电脑没有C= = 先不做了大概
#### HTTP/URL research exercises
* The fragment part of a URL
  就是#之后的部分啦！用于标识文档中的特定部分，通常是文档的特定节或位置，页面加载时自动滚动到指定的部分
  比如说```https://example.com/page.html#section1```，当用户访问这个 URL 时，浏览器会请求 page.html 页面，然后自动滚动到文档中 section1 部分的位置。

* The Accept header sent by the HTTP client
  用于指示客户端可以接受的内容类型。它告诉服务器客户端可以接受哪些媒体类型的响应。
  ```Accept: text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8```客户端表示它可以接受 HTML、XHTML 和 XML 格式的内容，并且给出了每种类型的优先级权重。通配符 */* 表示客户端接受任意类型的内容
* The User-agent header sent by the HTTP client
  通过检查 "User-Agent" 头，服务器可以根据客户端的类型和版本来适应性地提供服务，例如，可以根据不同的客户端类型提供不同的页面布局或功能
  ```User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36```User-Agent 字段告诉服务器，发送请求的客户端是运行在 Windows 10 操作系统上的 Chrome 浏览器的版本号为 97.0.4692.99
* How do you encode a path that contains a space in an URL? Which other characters are "special" and need to be treated this way in paths?
* Which web server is the University of Bristol using for www.bristol.ac.uk, according to the headers? Read up online on this server and the organisation of the same name that maintains it.
#### A server in Java
用到了Spring：![](2024-04-05-08-09-13.png)这是一个configuration，让server在8000端口上跑x
里面就一个这个东西：![](2024-04-05-08-29-29.png)
源代码：
* Model-View-Controller（MVC）是一个设计模式，constroller是负责用户输入和请求的，大概是一个中间人
* Spring是用@来作为class分类的：
  * ```@SpringBootApplication```-在main class里面x表明这个是main函数
  * ```@RestController```告诉Spring 这个主要是和HTTP请求有关的，this class contains methods to deal with HTTP requests. 用REST命名主要because spring has libraries to make implementing the REST principles particularly easy.（REST是那个principle）
  *  ```@AutoWired```自动装配（注入）依赖关系，将需要的 Bean 注入到目标类中。on a field tells spring that this field is spring's responsibility to set up when the application starts
  *  ```@GetMapping(PATH)``` this method should be called to reply to a HTTP GET request for the provided path (there is of course also a @PostMapping and so on).
  ![](2024-04-05-08-25-11.png)

* ```mainPage```: load ```localhost：8000```的时候就被调用，HTTP请求的是最基本的回复：
  * set up header，returns ResponseEntity
  * Response 包含三个部分：the HTTP body of the response to return (this will be shown in your browser), the HTTP headers to set, and the response code which is 200 (OK) here.
![](2024-04-05-08-30-24.png)
* ```htmlPage```： 对于```localhost：8000/html```的回复，要serve a file锁用了resource loader
  * 第二种方法builder来return ResponseEntity
  ![](2024-04-05-08-34-05.png)
  
结果：
* 第一种：
![](2024-04-05-08-41-06.png)
![](2024-04-05-08-43-14.png)
* 第二种：
![](2024-04-05-08-44-15.png)
![](2024-04-05-08-46-28.png)

![](2024-04-05-08-47-20.png)
* 写一个 http://localhost:8000/bad
```java
    @GetMapping("/bad")
    public ResponseEntity<String> notFoundPage() {
        String errorMessage = "404 Not Found: The requested page was not found.";
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.TEXT_PLAIN);
        return ResponseEntity
                .status(HttpStatus.NOT_FOUND)
                .headers(headers)
                .body(errorMessage);
    }
}
  ```
  ![](2024-04-05-08-52-52.png)

## 6.2 HTML5

### Basics:
  * ```<p>my cat</p>```
  * attribute:``` attributeName="attribute Value"```
  ```HTML
  <p class="editor-note">my cat</p>
  ```
  这里的这个就是所谓的属性，class大概就是给一个identifier很快的target过来（类似于索引？）
  * nested:
  ```HTML
  <p>my <stong>cat</strong></p>
  ```
  * Void elements:
  ```html
  <img src="images/firefox-icon.png" alt="My test image" />
  ```
  这个没有</img>也没有内部信息，This is because an image element doesn't wrap content to affect it. Its purpose is to embed an image in the HTML page in the place it appears.
  src：source； alt：无法加载时的信息
* Anatomy of an HTML document
```HTML
<!-- 有点类似于latex，有一个开头和结尾<HEAD> </HEAD>    -->
<!DOCTYPE html>
<html lang="en"><!-- language的意思   -->
<head><!-- 包含所有不想显示的信息   -->
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--ensures the page renders at the width of viewport -->
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
* lists:
有两种类型：<ul>unordered list，<ol>ordered lists(1,2,3这种吧)
```html
    <ul> <!-- changed to list in the tutorial -->
      <li>technologists</li>
      <li>thinkers</li>
      <li>builders</li>
    </ul>
```
![](2024-04-05-09-14-07.png)

#### HTML text fundamentals
倒不如说很多东西前面讲过啦
就是讲讲分段、heading之类的东西
* span：  
```html
<span style="font-size: 32px; margin: 21px 0; display: block;">
  Is this a top level heading?
</span>
```
  改改大小字号什么的，和CSS和JavaScript一起用
  margin: 21px 0; 设置了文本的上下边距为 21 像素，左右边距为 0
  display: block; 将 <span> 元素的显示属性设置为块级元素，使得它会在页面上单独占据一行，并且上下都有一定的空间
* 上面两个list相关的
* Emphasis和Strong
```html
        <!-- ctrl+B，粗体  -->
        <strong> </strong>
        <!-- 斜体，emphasis  -->
        <em> </em>
```
![](2024-04-05-17-09-48.png)
#### Creating hyperlinks
* 就是前面的那个href
主要就是```<a href="https://www.mozilla.org/en-US/">the Mozilla homepage</a>.```
* Document fragments
  可以先这样
  ```<h2 id="Mailing_address">Mailing address</h2>```
  然后再
  ```<p>
  Want to write us a letter? Use our
  <a href="contacts.html#Mailing_address">mailing address</a>.
  </p>
  ```
  * Absolute versus relative URLs
  相对和绝对地址嘛
  ![](2024-04-05-17-52-00.png)
  "/courses"：相对于网站根目录的路径
  "courses"：该文件夹下的另一个文件
  "../courses"
#### Document and website structure
* HTML for structuring content
![](2024-04-05-17-10-08.png)
* HTML layout elements in more detail
  * ```<main>```content unique to this page一页只能用一次，一般放在```<body>```里面也没有nested的内容
  * ```<article>```元素用于表示页面中独立、完整、可独立分配的内容块，通常是一篇新闻、一篇博客文章、一段论文
  * ```<section>```元素用于将页面内容组织成主题性的节(section)，通常用于将相关的内容块进行分组。
  * ```<aside>```provide additional information 
  * ```<header>```
  * ```<nav>```
  * ```<footer>```
* Non-semantic wrappers
  * ```<span>```反正是和CSS JAVAscript一起搞文字样式的
  ![](2024-04-05-17-49-11.png)
  * ```<div>```用作容器，分别用来包裹页面的整体内容和页面的主要内容区域。然后通过 CSS 样式对这些区块进行了布局和样式化
  ![](2024-04-05-17-49-29.png)
* Line breaks and horizontal rules
  * ```<br>```: the line break element
  换行
  ![](2024-04-05-17-50-57.png)
  * ```<hr>```: the thematic break element
  分行符
  ![](2024-04-05-17-50-46.png)
#### The HTML5 input types
* Forms
  ![](2024-04-05-18-01-27.png)
  forms就是给服务器提交东西的
  ```html
  <form method="post" action="/comment">
  <!--提交为post方法，数据作为HTTP request的一部分发送到server-->
  <!--指定了数据提交的目标 URL，即表单数据将发送到 /comment 路径对应的服务器端处理程序-->
  <p>
    <label for="name">Name:</label>
    <input id="name" name="name"/>
  </p>
  <p>
    <button type="submit">OK</button>
  </p>
</form>
```

* Validation
  ```html

  <input required type="number">
  ```
  规定必须是数字![](2024-04-05-18-05-55.png)
* Autocomplete
```
  <input type="text" 
autocomplete="name">
```
* input Types
* Select
  ![](2024-04-05-18-09-17.png)
* Tables
  ![](2024-04-05-18-09-49.png)
```
<table>
  <thead>
    <tr><th>Name</th><th>ID</th></tr>
  </thead>
  <tbody>
    <tr><td>Sarah</td><td>100</td></tr>
    <tr><td>Jon</td><td>101</td></tr>
  </tbody>
</table>
```
或者有：
```html
<table border="1">
  <tr>
    <th>列1</th>
    <th>列2</th>
    <th>列3</th>
  </tr>
  <tr>
    <td>数据1</td>
    <td>数据2</td>
    <td>数据3</td>
  </tr>
</table>
```
结果就是
```
+------+------+------+
| 列1   | 列2   | 列3   |
+------+------+------+
| 数据1 | 数据2 | 数据3 |
+------+------+------+

```

### Exercises
#### Basic HTML5
```html
<!DOCTYPE html>
<html lang="en">
 <head> 
   <meta charset="utf-8" />
   <title>A web page</title>
 </head>
 <body>
    <h1>COMS10012 Software Tools</h1>
    <p><strong>This unit teaches you the basics of web development.</strong></p>

    <h2>Content</h2>
    <p>Content is a combination of video lectures and reading assignments from the <em>Mozilla Developer Network.</em></p>
    <p>You can find the unit page on <a href='https://cs-uob.github.io/COMSM0085/'>on github</a>.</p>

    <h2>Learning Outcomes</h2>
    <p>After completing this unit, you will be able to use the following:</p>
    <ul>
      <li>HTML5</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
 </body>
</html>
```
#### Templating
先不做了！
# Week 7: CSS
## CSS
### 基本语法
  ![](2024-04-06-05-49-13.png)
  * inline Style
    没有选择器![](2024-04-06-06-01-47.png)
  * Internal Style：写到head里面
  ![](2024-04-06-06-02-09.png)
  * External Style：指定外部文件
  ![](2024-04-06-06-03-51.png)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        h1{
            color:blue;
        }
    </style>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1 style="color: red;">First</h1>
    <h2>external</h2>
    <h1>Second</h1>
    <h1>Third</h1>
</body>
</html>
```
### 选择器Selector
除了常用的那个
## CSS grids

# Week 8: Javascript
## JavaScript: Basics
## JS Objects (incl. JSON)
## Object Oriented Programming 
## Asynchronous JavaScript

# Week 9: Web Scraping