# Week 1: POSIX Systems
## 1.System Administration
### 1.1 Secure Shell
安全外壳 (SSH) 是一种允许您远程登录另一台计算机（例如实验室机器）的协议。几乎每个使用 SSH 的人都使用免费的 OpenSSH 实现
![](2024-02-25-175235.png)
![](2024-01-25-20-30-17.png)
![](2024-01-25-20-31-28.png)
![](2024-01-25-21-15-02.png)
1. 连接到实验室
```uname -a```这个命令通常用于显示操作系统的名称
```whoami```
```ssh -J```jump through this host,跳板连接是一种通过一个中间主机（跳板主机）来连接目标主机的方法，通常用于通过内部网络或防火墙访问无法直接连接的主机。
2. 设置 ssh 密钥
 something you know (password or PIN),something you have (physical key, digital key, ID card, passport)
 something you are (biometrics)
 ![](2024-01-25-21-18-34.png)
 这一节就是讲keys，keys需要密码，而且本身也是一个文件，所以是双重登陆
 ![](2024-01-25-21-20-56.png)
 使用的密钥是一对，一个private一个public

 创建：ssh keygen
 ![](2024-01-25-21-24-07.png)
 /home/if23696/.ssh/id_ed25519

所以本地有三个东西：一个秘钥，一个公钥，一个known_hosts（ OpenSSH 中用于存储远程主机的公钥信息的文件。当你首次连接到一个远程主机时，OpenSSH会将该主机的公钥信息保存在你的 ~/.ssh/known_hosts 文件中。这样，下次连接到相同的主机时，OpenSSH 将检查该主机的公钥是否与 known_hosts 文件中存储的相匹配。）
3. 在 SEIS 上设置密钥访问


ssh -A -J USERNAME@seis.bris.ac.uk USERNAME@rd-mvb-linuxlab.bristol.ac.uk
4. 设置配置文件
```scp```-secret copys:用于在 Unix-like 操作系统之间安全地复制文件的命令。它是基于 SSH 协议的，因此提供了加密的数据传输和身份验证。scp 的名称代表 "Secure Copy Protocol"
![](2024-02-25-173923.png)
![](2024-02-25-173952.png)
如果有:这个东西，说明是另一个主机的地址
复制以过去之后将内容复制到authoriz_key文件中
![](2024-02-25-174528.png)
chmod 600->八进制->110 000 000-> rw- --- ---
### 1.2 Vagrant
虚拟机
![](2024-02-25-175101.png)
需要有一个Vagrantfile
![](2024-02-25-175123.png)
ssh默认使用的是**22**端口，但是ssh默认使用的是**2222**端口
Vagrant Box有默认的private key和secret key，一个新的默认更新一个
### 1.3 System administration
```apt```advanced package tool
![](2024-02-25-181846.png)
* -V:选项用于显示详细的搜索结果，包括软件包的详细信息
* -d 选项用于显示每个软件包的详细描述
* -a:显示所有版本的信息，感觉是all
* -I:而 -I 是一个选项，用于显示已安装软件包的详细信息，包括版本号、架构等
单独的

```sudo apt update```只是下载最新的package的清单，但是不安装任何东西
```sudo apt upgrade```将所有已安装的package更新到最新版本
```sudo apt install PACAKGE PACKAGE```安装

```dpkg-query -S /bin/bash```Debian系统及其衍生系统（
![](2024-02-25-182636.png)
![](2024-02-25-184420.png)

然后给你讲一下linux系统
```ls /```列出根目录的东西
```/bin```binary，都是各种系统指令，![](2024-02-25-185628.png)
小小的提了一嘴```which```:用于查找并显示指定命令的绝对路径。具体而言，它会告诉你系统中关于某个命令的执行文件所在的位置。一般都是系统层面的指令，比如说mv，ls这种最基本的
比如说```which ls```
和```pwd```不同的是，pwd主要是当前所在位置，find是查找文件，然后which是查找指令
![](2024-02-25-185649.png)
```/usr```存放用户安装软件以及系统共享资源的重要目录。和用户相关，但是基本都是只读文件
提到了绿色的是可执行文件，蓝色的是指向其他文件的soft link
![](2024-02-25-190226.png)
![](2024-02-25-190327.png)
![](2024-02-25-190343.png)
所以这里提到了软连接和硬链接
**inode**：inode 是文件系统中的一个概念，用于表示文件或目录的元数据信息。每个文件或目录在文件系统中都与一个唯一的 inode 相关联。inode 记录了文件或目录的诸多属性，但不包括文件名或路径。

```/etc```系统层面的configuration file，然后基本是只有root用户可以更改
```/lib```dynamic-libraries，比如windows的```.dll```,linux系统的```.so```
```/home```用户的home文件夹
```/sbin```system binaries，只有root用户能用？
```/tmp```系统文件，但是在RAM里不在disk上，所以重开机的时候会消失
```/var```logs，caches，这种存在很久的文件
```/dev``` ```/sys``` ```/proc```虚拟文件系统？“虚拟”是指 /dev、/sys 和 /proc 这些目录并非存储在硬盘上，而是在内存中动态生成的，它们是内核为用户和应用程序提供的一种抽象
![](2024-02-25-192535.png)

## 2.POSIX Shell
### 2.1 The Shell
#### Slides
Shell：CMD？Powershell？
![](2024-01-30-15-07-22.png)
prompt：用户输入提示
但实际上
![](2024-01-30-15-07-46.png)
```$确实是Linux相关的```
![](2024-01-30-15-27-14.png)
```>:在‘’中换行```
![](2024-01-30-15-32-15.png)

**builtin commands:**
![](2024-01-30-15-36-00.png)
which cd是

![](2024-01-30-15-36-42.png)
一些flag什么的
-l：长格式显示信息
-a：显示所有文件，包括一些```.``` ```..``` 是隐藏文件
![](2024-01-30-15-39-25.png)
会列出各种flag代表什么意思
**Manuals：**
![](2024-01-30-15-41-08.png)
实际上是查看手册
![](2024-02-25-193338.png)
**Shell Expansions:**
1. ```*```:匹配零个或多个字符
比如说：```ls *.txt```匹配所有.txt开头的文件
```ls *abc```匹配所有abc开头的文件
（所以*的位置和开头结尾有关）
2. ```?```匹配一个字符
    ![](2024-01-30-15-51-52.png)
    有点不确定字符的意思，可以是任何？
3. ```[ab]```单个字符范围匹配
    ![](2024-01-30-15-51-07.png)
4. ```$```变量
    ```C
    my_variable="Hello"
    echo $my_variable
    ```
**Shell Quoting**
```"Double Quotes"```字符被原样输出，特殊字符被解释
```'single Quotes'```turn Off everything：所有东西都会被原样输出
```\* \? \[ \$```Do not treat as pattern
特殊字符不作为特殊字符处理
![](2024-01-30-15-55-11.png)

**cp mv find echo**
cp: copy
![](2024-01-30-15-58-14.png)
mv:move
![](2024-01-30-15-58-25.png)
find:search
![](2024-01-30-15-59-11.png)

echo:print
![](2024-01-30-15-46-31.png)
![](2024-01-30-15-57-24.png)


#### Exercise
**whitespace:**
![](2024-01-30-16-01-21.png)
意思就是，只有在“”里面，space也算
**Pattern matching:**
![](2024-01-30-16-05-27.png)
列出所有的文件
![](2024-01-30-16-06-20.png)
只显示了*，"empty" 文件夹为空，因此 ../arguments * 命令在该文件夹中执行时，shell 将 * 视为一个参数，而不是展开为文件名列表。

find three different ways to get the program to produce the following output:
```
Argument #0: [./arguments]
Argument #1: [*] 
```
![](2024-01-30-16-11-35.png)
**Files with spaces in their names**
![](2024-01-26-16-11-50.png)
![](2024-01-26-16-12-23.png)
touch "Silly named file"->创建一个文件夹？
touch Silly named file->创建3个文件 Silly named file
ls sill+tab：
![](2024-01-30-16-19-40.png)

rm:
```rm sill+tab```
或者
```rm "silly named file"```

**Shell variables**
注意：
![](2024-01-30-16-24-19.png)
![](2024-01-30-16-24-26.png)
上面那个无法编译，因为被视作silly, name.c
意思就是，在program赋值和后续调用的时候都需要用到```“”```

### 2.2 Pipes

#### Slides
其实还是讲过unix philosophy的：
![](2024-02-26-144938.png)
1.每个program都应该do one thing well
2.programs 可以联合起来完成更大的tasks
3.universal interface shoulder be a text stream（文本流，是一种将文本数据视为连续流动的概念。Unix系统的设计哲学之一是将简单的工具通过标准输入（stdin）和标准输出（stdout）连接起来，形成一个数据处理管道。）
讲下标准输入和标准输出：
![](2024-01-30-16-33-21.png)
![](2024-01-30-16-33-31.png)
在计算机科学中，管道（Pipe）是一种用于在两个进程之间传递数据的机制。它允许一个进程的输出（stdout）直接成为另一个进程的输入（stdin），从而使这两个进程协同工作。
![](2024-02-26-150307.png)
```pipe```是将一个文件的输出变成另一个文件的输入
```>``` ```>>``` ```<```这些重定向（redirection）是将输出等追加到文件或者作为输入

**错误输出**
```COMMAND > FILE 2> FILE2```将COMMAND的标准输出到FILE，然后错误输出到FILE2
```COMMAND>FILE 2>&1```COMMAND的标准输出定向到FILE，然后错误也定向到```&1```所在的文件
```COMMAND >>FILE 2>&1```COMMAND指令的标准输出和标准输入都到FILE中，但是不覆盖

但是，这个是错的```COMMAND 2>&1>FILE```没有先规定1到哪，所以是从左到右顺序（？
```COMMAND > /dev/null```ignore output

**FILES and STREAMS**
```PROGRAM > FILE``` 标准输出到FILE
```PROGRAM >> FILE```标注输出到FILE但是不覆盖
```PROGRAM <FILE```FILE作为标准input给COMMAND执行
```PROGRAM 2> FILE```标准错误输出到FILE
还有一个subshell：
```COMMAND $(SOMETHING)```
![](2024-02-26-152926.png)

**Pipes**


![](2024-01-30-16-33-51.png)
列出头/尾巴
```ls -1 | head```从头开始列
```ls -1| head -n 6```从头开始列，列6个结束
```ls -1 | tail```
![](2024-01-30-16-35-25.png)
**grep sort uniq**
1. grep：文本搜索 "global regular expression parser"
![](2024-01-30-17-15-29.png)
1. sort： read all lines into buffer, sort, output
    ![](2024-01-30-17-16-56.png)
    ![](2024-01-30-17-17-31.png)
默认：字母顺序
![](2024-01-30-17-17-51.png)
1. uniq
    remove duplicates immediately following
    best used as: command | sort | uni
    ![](2024-01-30-17-18-36.png)
    ![](2024-01-30-17-18-50.png)
    ![](2024-01-30-17-18-56.png)

**tee**
![](2024-02-26-152417.png)
感觉像是又保存到另一个文件夹里，又print到屏幕上
**less**
在shell中打开某个文本
**sed**
替换替换
用表达式s/ONE/TWO/[g]
没有g只是替换第一个匹配到的，有了g就是全局替换
**subshell**

#### Exercise

1. **cat**:打开文件
    cat 命令用于将一个或多个文件的内容输出到标准输出。
例如：cat file1.txt file2.txt 将显示 "file1.txt" 和 "file2.txt" 的内容。
1. **tail**:显示末尾 head:显示头
head 命令用于显示文件的开头部分，默认显示前 10 行。
例如：head -n 20 file.txt 将显示文件 "file.txt" 的前 20 行。
tail 命令用于显示文件的末尾部分，默认显示最后 10 行。
例如：tail -n 30 file.txt 将显示文件 "file.txt" 的后 30 行。
1. **sort**:排序
sort 命令用于对文本进行排序，默认按字典顺序排序。
例如：sort file.txt 将对文件 "file.txt" 的内容进行排序。
1. **uniq**:删除重复行
uniq 命令用于删除或显示文本中的重复行。
例如：sort file.txt | uniq 可以用来删除文件 "file.txt" 中的重复行。
1. **grep**:搜索匹配
grep 命令用于在文本中搜索匹配的行。
例如：grep "pattern" file.txt 将显示文件 "file.txt" 中包含 "pattern" 的所有行。
1.**sed**:编辑
sed 命令用于对文本进行流编辑，根据指定的命令进行转换。
例如：sed 's/old/new/' file.txt 将把文件 "file.txt" 中的每个匹配到的 "old" 替换为 "new"。
1. **wc**:统计
wc 命令用于计算文件或标准输入中的字数、行数和字符数。
例如：wc -l file.txt 将显示文件 "file.txt" 中的行数。

**If English is not your native language, ignore the guessing part - it is not assessed.**

1. The first word in the file. Can you guess what it will be?
打开文件：cat | 找头:head
cat words | head -n 1
![](2024-01-26-16-40-14.png)
1. The last word in the file. Can you guess this one?
cat words | tail -n 1
![](2024-01-26-16-41-03.png)
1. The number of words in the words file - there is one word per line.
cat words | wc -l
统计：wc
![](2024-01-26-16-42-50.png)
1. The 6171st word in the file. Can you read my mind and guess this word directly?
搜索：grep(为什么是sed？)
```sed -n '6171p' words```
![](2024-01-31-19-34-15.png)
![](2024-01-26-16-45-00.png)
1. All words containing the letter Q, capitalised. (A regular expression containing a string of one or more letters matches all strings that contain the expression as a substring.)
替换：sed
```sed 's/q/Q/g' words```
```sed -i 's/q/Q/g' your_file.txt```
不像显示打印就是这样
![](2024-01-26-16-54-52.png)
1. All words starting with the letter X. The regular expression X would match an X anywhere in the word, but ^X matches an X only at the start of the string.
查找：grep 
```grep '^X' words```
```sed -n '/^X/p' words```
```-n```指只打印匹配行
```-i```指不显示打印
```s/[]/[]/g```s：替换; g：全局替换(global)
```/^[]/p```^：是指开头是什么；p：打印(printf)
![](2024-01-26-16-55-30.png)
1. All words ending in j. (The expression 'j$' matches a j only at the end of the string, but you have to single-quote it to stop the shell from interpreting the dollar sign).
查找：grep
```grep 'j$' words```
```sed -n /j'$'/p words```
![](2024-01-26-16-56-02.png)
1. The number of words containing the letter Q, ignoring case (e.g. capitalised or not).
查找：grep | 统计：wc
```grep -i 'q' words|wc -l```
```-i``` 忽略大小写ignore
```-o``` 仅输出匹配部分only
![](2024-01-26-16-59-02.png)
1. The first five words containing the letter sequence cl.
查找：grep
```grep 'cl' words|head -n 5```
1.  All words containing the sequence "kp", but not "ckp". Can you guess any of these?
感觉是正则表达式

![](2024-01-26-16-59-49.png)
查找：grep
```grep 'kp' words|grep -v 'ckp'```
```-v```代表反向匹配（指排除？）
1.  The last 15 words of exactly two letters. The expression . (period) matches a single character, and '^...$' for example would match all strings of the format exactly three characters between start and end of string. You need to quote it because of the dollar sign.
```grep '^..$'|tail -n 15```
![](2024-01-31-20-04-18.png)
一个.代表一个字符
1.  All words from the first 100 words on the list, which contain the letter y.
```cat words|head -n 100|grep 'y'```
```cat words|head -n 100|grep 'y'```
1.  The first five words that are among the last 100 words on the list, and contain the letter y (whether capitalised or not).
```tail -n 100|grep -i 'y'|head -n 5```
```tail -n 100 words | grep -i 'y' | head -n 5```
1. All three-letter words with no vowels (aeiou).The regular expression '[aeiou]' matches any string that contains one of the bracketed characters; you need quotes to stop the shell from interpreting the brackets. Remember to exclude words with capitalised vowels as well. There are 343 of these.
```grep '^...$' |grep -g -v `[aeiou]` words|wc -l```
![](2024-01-31-20-16-37.png)----22
```grep -i -w -v '[aeiouy]' words | grep -w '^...$'|wc -l```----536 ?????????
```grep -Ei ^[^aeiou]{3}$ words```


1.  All words of exactly 7 letters, where the third one is an e and the word ends "-ded". This kind of search is really useful for crosswords. There are 14 words of this form, can you guess them?
```grep -i '^..e.ded$' words```-------4?????
```grep -iE ^[a-z]{2}e[a-z]{1}ded$ words```
```-E```是扩展正则表达式
### 2.2 Regular expressions

1. Study the documentation for the -w option. Contrive a file such that grep PATTERN FILE returns two different lines but grep -w PATTERN FILE returns only one line.
![](2024-01-31-20-26-15.png)
![](2024-01-31-20-26-56.png)
就是 -w 是完全匹配，不加是部分匹配的意思

2. You'll have seen beforehand that you can count the results of a search with grep PATTERN FILE | wc -l. However, grep also has a -c option which counts matches. Can you find the situation where the wc -l approach and the -c approach produce different results? Can you explain why?
```-c```
```wc -l```统计的是行数
![](2024-01-31-20-39-58.png)
![](2024-01-31-20-40-26.png)

![](2024-01-31-20-40-55.png)
(????)但是实际输出是一样的哦
3. Some words have different spelling between British English and American English. For example, 'encyclopaedia' is valid in British English but not American. Can you write a regular expression that would match both of these words, but nothing else? How about matching both 'color' (American) and 'colour' (British)?
```grep -E 'colou?r' ex3```
```grep -E 'encyclop(e|ea)dia' ex3
```

4. UK postcodes follow a general schema of two letters followed by one number, followed by an optional space, then another number, followed by two more letters. Can you write a regular expression that would match such sequences?
```^[A-Z]{2}\d{1,2} ?\d[A-Z]{2}$ ```
![](2024-01-31-20-54-09.png)
5. In practice, the above is a simplified version of the system, and a better UK postcode validator regex is known to be``` ^(([A-Z]{1,2}[0-9][A-Z0-9]?|ASCN|STHL|TDCU|BBND|[BFS]IQQ|PCRN|TKCA) ?[0-9][A-Z]{2}|BFPO ?[0-9]{1,4}|(KY[0-9]|MSR|VG|AI)[ -]?[0-9]{4}|[A-Z]{2} ?[0-9]{2}|GE ?CX|GIR ?0A{2}|SAN ?TA1)$. ```Try breaking apart this monster to understand what is being tested, and find an example that would match the schema described for the fourth question but fail to match this expression.
```

^(
  ([A-Z]{1,2}[0-9][A-Z0-9]?|ASCN|STHL|TDCU|BBND|[BFS]IQQ|PCRN|TKCA) ?[0-9][A-Z]{2}
  |BFPO ?[0-9]{1,4}
  |(KY[0-9]|MSR|VG|AI)[ -]?[0-9]{4}
  |[A-Z]{2} ?[0-9]{2}
  |GE ?CX|GIR ?0A{2}|SAN ?TA1
)$


```
![](2024-02-13-19-25-47.png)
![](2024-02-13-19-30-24.png)
https://regexone.com/lesson/nested_groups
总之可以玩玩这个
![](2024-02-26-163039.png)
# Week 2：Version Control
## 3.Git

### Slides
git我个人理解大概就是一个版本控制的东西大概分为以下几类
#### 1.个人本地仓库
一般是```git init```初始化，```git add```之后 ```git commit```一下
然后查看```git status```状态，和```git log```查看版本控制日志
```git checkout HASH```退回版本
```git tag```name specific commits,只是给commits打上tag，但是不修改commits内容
**commits相关内容**
```git checkout HEAD -- hello.c```
放弃对文件的修改，回到上一个head的地方
```git reset --hard HEAD```
```git clean -dfx```
这一系列命令将工作目录重置为与 HEAD 提交相匹配的状态，放弃所有更改（包括暂存和未暂存的更改），并删除未跟踪的文件。
```reset```有三种形式```--soft```\默认\ ```--hard```
![](2024-02-29-160027.png)
暂存区(staging area/index)：git add . 之后文件就会放在staging area
工作目录：工作目录的改变就是，比如我用vscode修改了某个代码，然后我用git reset --hard ，实际上我vscode里面的代码也会变回去，这个就是工作目录
reset和checkout的区别就在于修改的是什么东西
![](2024-02-29-160448.png)
```git checkout HEAD~1```
是HEAD的上个，同理如果是HEAD~2的话就是上上个
```git revert HEAD```
![](2024-02-29-160823.png)对于远程仓库更加安全？

![](2024-02-29-160602.png)
所以status和log是这个意思
#### 2.branch的意思
一般有main/master这种主枝干和branch这类分支，更像是团队合作的东西
```git branch NAME```（创建一个新的分支）
```git branch NEW main```从main当前HEAD分一条branch出来
```git checkout NAME``` （切换到这个分支）

```git cherry-pick [hashcode]```
![](2024-02-29-165253.png)

#### 3.和远程仓库链接
```git clone```本身是本地文件拷贝
然后ppt大概讲了下本地修改的两种方法：Bob下载了Alice的文件，并进行修改
Bob'end:```git format-patch origin/main \--to=alice@bristol.ac.uk 0001-Fixes-spelling-mistake.patch```
Alice's end:```git am ../bob/0001-Fixes-spelling-mistake.patch```
```git log --oneline```
这个其实我觉得不重要...主要是后面远程仓库
```git remote add origin <远程仓库地址>```连接到远程仓库
```git remote -v```验证链接
```git push -u origin main```推送到远程仓库，然后-u简化以后的push和pull

![](2024-02-29-162325.png)
#### 4.branch的合并
其实昨天大概看到了```git merge```和```git rebase```的区别
![](2024-02-29-145637.png)
![](2024-02-29-145651.png)
rebase是找到相交的地方点

```git merge --no-ff bob/main```
将Bob/main中的修改合并到当前分支，主要是```--no-ff```是什么呢
首先是ff：fast-forward：
![](2024-02-29-163317.png)
![](2024-02-29-163753.png)
一般喜欢使用no-fastforward的意思就是可以保留branch上的分支记录
![](2024-02-29-163945.png)


#### Exercise

**老三套**
```git init```初始化
```git status```检查状态
创建一个file```.gitignore```将想忽略的扔进去
![](2024-02-02-14-18-30.png)
```git add .```将所有变动的地方加到master branch里
```git commit -m "Initial commit"```添加comments
```git log```检查状态
![](2024-02-02-14-26-35.png)
```git log|less```记下退回状态的的hash数字
```git checkout HASH```
![](2024-02-02-14-33-15.png)
确实退回去了(?!!)这就是版本控制
```git checkout master```to return to the latest version of your files, and git will set up the HEAD pointer again ready to accept new commits
**Part 2: Git forges**
ssh
```git clone SSH```
**Practice the push workflow**
```rebase```
```merge``` 会有merge request 什么的
**Resolve a fake conflict, part one**

**Fake conflicts, part two**

**Resolving a real conflict**

![](2024-02-02-16-34-43.png)
实际上
```git checkout -b NAME```执行了两个操作，创建branch并且切换到对应的地方
更好记的话应该是 ```git branch```
![](2024-02-07-19-27-09.png)

同时，```git push -u origin NAME```将branch和远程联系起来，但是更好记（
之后就可以美美```git push```和 ```git pull```了

# Week 3：Shell Scripting & Build Tools

## 4.Shell Scripting
### 4.1 File permissions
![](2024-02-12-23-00-19.png)
一开始是root：
![](2024-02-12-23-00-57.png)
大概讲了下group、owner和others的东西，还有密码储存的位置

![](2024-02-12-23-05-04.png)
![](2024-02-12-23-06-17.png)
![](2024-02-12-23-07-12.png)
![](2024-02-12-23-12-35.png)
所以这个755是这么来的
**weird bit**
它上面提到过sticky point
![](2024-02-12-23-14-51.png)

**韩顺平：**
1. 文件有三个文件模型：owners，group，others
2. 创建用户，是下面的那种
3. 创建一个文件并且修改权限：
![](2024-02-15-18-44-30.png)
4. 改变用户所在组
![](2024-02-15-18-51-52.png)
1. bits(rwx)
![](2024-02-15-18-54-06.png)
![](2024-02-15-18-54-22.png)
1. 修改权限
   ![](2024-02-15-19-09-29.png)
   ![](2024-02-15-19-11-26.png)
chmod u=rwx,g=rx,o=rx abc
chmod u-x,g+w abc
chmod a+r abc
或者用数字来
read（4） write（2） execute（1）（bit）
所以才有什么chmod 755 file（owner（4+2+1），group（4+1），others（4+1）
1. 修改文件所有人-chown
![](chown%20newowner%20.png)
修改文件or目录所在组-chgrp
![](2024-02-15-19-14-29.png)

**栗子**
![](2024-02-15-20-05-14.png)
sudo groupadd police
sudo groupadd bandit
sudo useradd jack
sudo useradd  jerry
sudo useradd  xh
sudo useradd xq
sudo usermod -aG police jack
sudo usermod -aG police jerry
或者这样：
![](2024-02-15-20-10-00.png)
修改权限就是usermod
![](2024-02-15-20-12-54.png)


**小总结**
```useradd```添加用户
```groupadd```添加组
```usermod -g groupname username```用户添加到组里
```usermod -d reponame username```用户初始登录文件位置
```passwd```设置用户密码

```chgrp 组名 文件名```修改文件所在的组
```chmod 权限 文件```修改权限
```chown newowner file/repo```改变文件或者目录的所有者


#### Exercise
直接用unix系统做，需要在lab上跑一遍
vagrant up ->vagrant ssh
**Create a user and a group**
```sudo adduser NAME```加名字
![](2024-02-13-12-14-26.png)
创立新的user，设置密码，切换到该user下面
```su ADA```切换到ADA user下面
```pwd```检查确实在user/home/下面
```exit```回到host
然后再次创建一个，并添加到一个组里面
```sudo addgroup USER```添加组USER（反正addgroup和groupadd总有一个）
![](2024-02-13-12-37-52.png)将ADA和brian扔到组里
![](2024-02-13-12-37-30.png)这样就是一个组里了

**Explore file permissions**
![](2024-02-13-12-33-22.png)
![](2024-02-13-12-44-10.png)
![](2024-02-13-12-45-04.png)
这个做的我好烦躁（

### 4.2 Shell Scripting
#### Slides
![](2024-02-15-12-25-21.png)
还讲了一下环境变量的东西，但是我觉得不一定是重点，考都没考x
**shellcheck**
vim xxx.sh
ctrl+v:vision mode
光标选择+d

**变量**
![](2024-02-13-22-56-43.png)
unset是取消赋值
其他的比如```$?```是exit code，检查和输出错误信息
![](2024-02-26-173758.png)
这个就是，0其实表示success，而大于0的是错误信息？
![](2024-02-13-22-59-50.png)
![](2024-02-15-12-26-06.png)
**标准变量**
![](2024-02-13-22-55-18.png)
![](2024-02-15-12-27-43.png)
![](2024-02-15-12-28-24.png)
**if 判断语句**
```if [[condition]]; then 
执行语句
fi
```
**for 循环语句**
![](2024-02-27-134904.png)
```
for i in { };do
    执行语句
done
```
**case 跳转语句**
![](2024-02-27-134855.png)
![](2024-02-15-12-29-09.png)

**Basename and Dirname**
* basename：提取文件的名字
![](2024-02-27-135718.png)
去除后缀名字实际上也说了？
![](2024-02-27-135905.png)
这个的意思就是，找到所有后缀为```.jpg```的文件，然后去除后缀，加上.png
convert是一个库ImageMagick里面内置的东西x
* dirname：提取目录的名字
![](2024-02-27-135736.png)

**Extra Pipes**
给了第一个例子：
```ps -A | grep -i firefox```
```ps```是查看进程，```-A```是显示全部
![](2024-02-27-140317.png)
然后如果太多了，就加上：
```ps -A | grep -i firefox | awk '{print $1,$5}'```仅显示第一列和第五列
![](2024-02-27-140324.png)
![](2024-02-27-141237.png)
```ps -A | grep -i firefox | awk '{print $1,$5}' | ghead -n -1```
去掉最后一个的grep进程（
```ps -A | grep -i firefox | awk '{print $1, $5}' | ghead -n -1 | wc -l```
只是想知道进程数量

![](2024-02-27-140625.png)
又对pipe进行一个总结
```|```standard output used as another ones' standard input，标准输出作为另一个指令的标准输入
```>```standard output stored in a file将标准输出输出到一个文件中
```>>```append the standard output to a file but not overwritten the previous content将标准输出添加到一个文件的后面，但是不覆盖文件本来的内容
```<```read a file used as standard input读一个文件并将其作为标准输入
```<<<```将一个字符串传递给标准输入
![](2024-02-27-140952.png)


#### Exercise
https://missing-semester-cn.github.io/2020/shell-tools/
参考一下这个
![](2024-02-13-16-12-29.png)
![](2024-02-13-16-12-45.png)

![](2024-02-13-16-08-04.png)
写一个脚本called b
1.在各种shell里都通用的
2.compile NAME 一个C文件，同时接受hello.c 和hello
3.如果该文件不存在，则报错
4.run NAME
5.build NAME
6.COMMAND 或者./b 打印手册
```py
#!/bin/sh

if [ $# -eq 0 ]; then
    echo "Usage: $0 COMMAND [NAME]"
    echo "Commands: compile, run, build"
    exit 1
fi

command="$1"
name="$2"

case "$command" in
    compile)
        if [ -z "$name" ]; then
            echo "Error: Missing filename for compile command."
            exit 1
        fi

        if [ ! -f "$name" ]; then
            if [ -f "$name.c" ]; then
                name="$name.c"
            else
                echo "Error: Source file '$name' not found."
                exit 1
            fi
        fi

        gcc -Wall -std=c11 -g "$name" -o "${name%%.*}"
        ;;
    run)
        if [ -z "$name" ]; then
            echo "Error: Missing program name for run command."
            exit 1
        fi

        if [ ! -x "$name" ]; then
            if [ -x "$name.c" ]; then
                name="$name.c"
            else
                echo "Error: Program '$name' not found."
                exit 1
            fi
        fi

        ./"$name"
        ;;
    build)
        if [ -z "$name" ]; then
            echo "Error: Missing filename for build command."
            exit 1
        fi

        ./b compile "$name"
        if [ $? -eq 0 ]; then
            ./b run "${name%%.*}"
        fi
        ;;
    *)
        echo "Usage: $0 COMMAND [NAME]"
        echo "Commands: compile, run, build"
        exit 1
        ;;
esac

exit 0
```
这个主要看cheat sheet 写也可以？？？
**Strict Mode**
这里提到了一个叫Strict Mode的东西
就是类似C里面那个所有warning都当error处理
```set -euo pipefail```就是shell scriptig的严格模式
下面就是给你大概解释一下每个指令都是干什么的
对了shell scripting就是 return 0代表正确执行（
```set -e```强制退出，如果指令（return non-zero)
```set -u```任何没有未被定义的variable就当是错误的
```set -o pipefail```如果pipeline中command错误（return non-zero）直接跳到exit code

## 5.Building Tools
这个我看都是在教安装（
考过一道题，makefile的，就是因为用过（
比如说如果make之后没有显示出任何东西，就说明没有新更新的内容
就算新更新的东西，也只会显示更新的那个东西里面（？？？

dialects：
BSD Make：更老式，POSIX（什么是POSIX？一个操作系统接口标准，目的是使不同UNIX系统之间的软件可移植性更强。它定义了一组标准接口和命令，以确保应用程序在符合POSIX标准的不同UNIX和UNIX-like操作系统上能够一致运行）
GNU Make：default on Linux，一般来说用的是GNU Make

这里也提到过make的使用：
1. Makefiles
会递归调用
![](2024-02-27-143738.png)
![](2024-02-27-143743.png)
2. Making Changes
如果只改变了hello.c
![](2024-02-27-143936.png)
只会改变含有hello.c的
3. Phony Targets（虚拟目标）
![](2024-02-27-144438.png)
![](2024-02-27-144501.png)
意思就是被认为是.phony的目标会被强制执行？ 声明的目标不受文件系统中是否存在同名文件的影响，它们将被强制执行
4. Pattern Rules
![](2024-02-27-144809.png)
前面规定了C的编译器，和flag
然后是虚拟目标强制执行all clean
all、clean、hello
然后下面的意思是：
![](2024-02-27-144924.png)
总体来说，这个的意思是
```$@``` 表示目标文件，```$<``` 表示第一个依赖文件。这个规则用于链接每个 .c 文件生成可执行文件
但是C本来就有：
![](2024-02-27-145116.png)
所以直接这样就可以了
![](2024-02-27-145134.png)
甚至可以直接这样

**automate building**
![](2024-02-27-145230.png)

举的例子是Maven：
![](2024-02-27-145311.png)
![](2024-02-27-145426.png)
所以修改的方案是：
![](2024-02-27-145452.png)
![](2024-02-27-145458.png)

![](2024-02-27-145605.png)

![](2024-02-27-145622.png)

![](2024-02-27-145354.png)
# Week 4: DEBUGGING
主要是GDB，这里直接看PPT来着
**gdb**
1. compile 的时候就要加入-g
![](2024-02-27-152046.png)
2. gdb，启动！
 ![](2024-02-27-153501.png)
3. ![](2024-02-27-153546.png)
**strace**
跟踪程序系统调用的工具，它在Linux和类Unix系统上广泛使用。它的主要作用是捕获和记录一个进程的系统调用以及接收和发送的信号
![](2024-02-27-153646.png)
考过这个execve
call的是```./journal2```
**ltrace**
检查library的？就是查看用了哪些library，然后那些function被哪个library用了，是dyanamic library track
![](2024-02-29-143530.png)
**valgrind**
这个主要是内存相关的，检查内存是否泄露吧

## Exercise
来人，直接上卷子
**past paper1**
![](2024-02-29-143927.png)
![](2024-02-29-143939.png)
这里直接说的```“cd”```,所以是B？
![](2024-02-29-144004.png)
strace是一个跟踪系统调用的东西，然后能搞出那么一堆所以是shell script，选B
![](2024-02-29-144401.png)
看这个，所以是D

**past paper2**
![](2024-02-29-144436.png)
A.
为什么这道题不是上面那个cd，是因为ls是一个external command，类似的还有：
![](2024-02-29-144844.png)
![](2024-02-29-144912.png)
![](2024-02-29-144448.png)
因为是```/home```而不是```/hmoe```
![](2024-02-29-144518.png)
A.ltrace的概念
# Week 5: SQL
## Slides
![](2024-03-05-223819.png)
**什么时候选择什么数据库呢**
1. 给钱就用数据库，没给就用表格
2. 是否需要远程储存数据？
server-style database(MySQL/MariaDB)
没有的话就是SQLite
3. 数据很小
用数据库或者plain text data storage(CSV)
4. 数据特别大！
可以用非SQL的database（Redit）那种吗
5. 是否有recursive类型的数据
Prolog，或者Datalog这类

**Primary Key & Foreign Key**
**主键：**
* 主键的值必须是唯一的，且不能为空（即不允许NULL值）。
* 在数据库中，每个表只能有一个主键，它用来确保表中的每一行都能被唯一标识。
* 主键通常用于建立表与表之间的关系，作为其他表的外键参考。

**外键：**
* 外键创建了两个表之间的引用关系，通过外键，可以在一个表中引用另一个表中的数据。

Primary Key有两个属性：唯一&非空
**SQL basics**


## Basic
**SELECT**
选择多少列
```AS```
```SQL
SELECT * FROM album
LIMIT 5;
```
**FROM**
从哪个
**WHERE**
一个条件语句，标准日期是"YYYY-MM-DD"
```AND``` ```OR``` ```NOT```
```BETWEEN```:AND多项选择
```IN```:OR多项选择
```SQL
USE sql_store;

SELECT *
FROM customers
WHERE quantity IN (49,38,72)
```
```LIKE``` %：无论有多少个
```REGEXP```使用正则表达式
```SQL
SELECT artist.name AS artist
FROM album
JOIN artist
ON album.aritistid=artist.artistid
WHERE album.title LIKE '%Rock%'
LIMIT 5;
```
就是title带rock的，然后限制5个

**ORDER BY**
```ORDER BY albums DESC```降序
```ORDER BY albums```升序
**LIMIT**
```SQL
USE sql_store;

SELECT *
FROM customers
WHERE customer_id=1
ORDER BY first_name
```
**GROUP BY**
```SQL
SELECT artist.name AS artist,
COUNT(album.title) as albums
FROM album
JOIN artist
ON album.artistid=artist.artistid
WHERE album.title LIKE '%Rock%'
GROUP BY artist
LIMIT 5;
```
这里的count，然后GROUP BY和 HAVING

**NULL**
```SELECT * FROM fruit WHERE fruit IS NULL;```
```SELECT * FROM fruit WHERE fruit IS NOT NULL;```

## Join
```SQL
SELECT column1, column2, ...
FROM table1
JOIN table2 ON condition;
```
INNER JOIN：如果表中有至少一个匹配，则返回行
LEFT JOIN：即使右表中没有匹配，也从左表返回所有的行
RIGHT JOIN：即使左表中没有匹配，也从右表返回所有的行
FULL JOIN：只要其中一个表中存在匹配，则返回行
```SQL
SELECT *
FROM fruit
FULL OUTER NATURAL JOIN recipes;
```
![](2024-03-06-110006.png)
即使是NULL也给你全返回咯
**Statistic**
```COUNT()```
```AVG()```
```SUM()```
```SQRT()```
![](2024-03-06-112740.png)
![](2024-03-06-115049.png)s
哦！对应这道题！1.0*用了浮点数所以是对的

**内连接**
1. 跨数据库连接：
```SQL
USE sql_store;

SELECT *
FROM order_items oi
JOIN sql_inventory.products p
	ON oi.product_id=p.product_id
```
2. 自链接
使用不同的别名
```SQL
USE sql_hr;
SELECT e.employee_id,
		e.first_name,
        m.first_name AS manager
FROM employees e
JOIN employees m
	ON e.reports_to=m.employee_id
```
3. 多表链接

```SQL
USE sql_store;

SELECT 
	o.order_id,
    o.order_date,
    c.first_name,
    c.last_name,
    os.name AS status
FROM orders o
JOIN customers c
	ON o.customer_id=c.customer_id
JOIN order_statuses os
	ON o.status=os.order_status_id
```
注意这里的链接condintion，做了exercise才发现有哪里不对= =

还有一个natural join：就是让数据库自己检测
cross join：第一个表的所有，和第二个表的所有
```SQL
    SELECT 
        c.first_name AS customers
        p.name AS product
    FROM customers c
    CROSS JOIN prodcuts p
    ORDER BY c.first_name
```
4. Unions

```SQL
USE sql_store;
SELECT 
	order_id,
    order_date,
    'Active' AS status
FROM orders
WHERE order_date >'2019-01-01'
UNION
SELECT 
	order_id,
    order_date,
    'Archived' AS status
FROM orders
WHERE order_date <='2019-01-01';
```
UNION：MySQL UNION 操作符用于连接两个以上的 SELECT 语句的结果组合到一个结果集合，并去除重复的行。
UNION 操作符必须由两个或多个 SELECT 语句组成，每个 SELECT 语句的列数和对应位置的数据类型必须相同

## Column
```INT``` ```VARCHAR``` ```DATE``` ```CHAR```
PK:primary key
NN:not NULL(选了就是不允许有null)
AI:自动增递
default/expression：NULL或者'0'
![](2024-02-20-17-16-08.png)

1.插入单行
```SQL
INSERT INTO cutomers(
    first_name,
    last_name,
    birth_date,
    address,
    city,
    state
)
VALUE(
'Hannah',
'Smith',
'address',
'city',
'CA')
```
是有DEFAULT这个东西的,但是如果上面不写的话，实际上是可以去掉的，如果上面是这样的话
2. 插入多行
```SQL
INSERT INTO shippers(name)
VALUES ('shippers'),
    ('shippers2'),
    ('shippers3')
```
3. 插入分层行
在多张表中插入行
parent-child relationship
```LAST_INSERT_ID()```
![](2024-02-20-19-37-30.png)
4. 创建表复制
```SQL
INSERT INTO orders_archived
--archived是一个新的表

SELECT *
FROM orders
WHERE order_date < '2019-01-01'
```

5. 更新
```SQL
UPDATE invoices
SET payment_total=10,
payment_date='2019-03-01'
WHERE invoice_id=1
```

6. 删除
```DELETE FROM invoices
WHERE invoice_id = 
      (SELECT *
      FROM clients
      WHERE name='Myworks')
```

到他的第五章了，之后在慢慢看，现在开始做school的内容

## School Tutorial

![](2024-02-21-17-48-16.png)
```SQL
CREATE TABLE IF NOT EXISTS student(
    name TEXT NOT NULL,
    number TEXT NOT NULL,
    PRIMARY KEY(number)
);

CREATE TABLE IF NOT EXISTS unit(
    name TEXT NOT NULL,
    number TEXT NOT NULL,
    PRIMARY KEY(number)
);

CREATE TABLE IF NOT EXISTS unit(
    name TEXT NOT NULL,
    number TEXT NOT NULL,
    PRIMARY KEY(number)
);
```
![](2024-02-21-19-43-25.png)
![](2024-02-21-19-43-34.png)
但是打下来会报错是因为number作为主键没有设置大小）
![](2024-03-05-232957.png)
**删除表格**
![](2024-03-05-230219.png)
**数据类型**
![](2024-03-05-230422.png)
但是实际上SQLite会直接
![](2024-03-05-230447.png)
**Table constraints**
![](2024-03-05-230538.png)
CHECK：在创建表格的时候就对数据有一个约束
```SQL
CREATE TABLE employee (
    id INTEGER PRIMARY KEY,
    age INTEGER CHECK (age >= 18),
    salary REAL CHECK (salary >= 0),
    name TEXT
);
```
**add constraints later**
![](2024-03-05-232902.png)
```USE <database>;```切换到该数据库
```SHOW TABLE;```显示表格
```DESCRIBE <TABLE>;```查看具体类型
![](2024-02-21-19-49-23.png)
**PRIMARY KEY**：
**UNI KEY**唯一约束：
唯一约束确保一列或一组列中的所有值都是唯一的。
与主键不同，唯一约束允许包含NULL值（除非在受约束的列或列组中）
```SQL
CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    email VARCHAR(255) UNIQUE,
    department_id INT
);

```
**MUL**外键
外键是一个表中一列或一组列，它引用另一张表的主键。
它建立了两个表之间的链接，创建了一种关系。
它确保引用完整性，意味着外键列中的值必须与引用表的主键匹配。

```SQL
CREATE TABLE courses (
    course_id INT PRIMARY KEY,
    course_name VARCHAR(255)
);

CREATE TABLE enrollments (
    enrollment_id INT PRIMARY KEY,
    student_id INT,
    course_id INT,
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (course_id) REFERENCES courses(course_id)
);
```
## Normal Forms
1. 第一范式（1NF）：
* 表中的每一列都包含不可再分的原子数据（即每个单元格中的数据不可再分）。
* 确保每个单元格中的数据是原子的，没有包含集合、数组或其他非原子的数据类型。
  ![](2024-03-06-113357.png) 因为所选课程是文本，而不是集合、数组
  ![](2024-03-06-113441.png)
2. 第二范式（2NF）：
* 必须符合第一范式。
* 所有非主键列完全依赖于整个主键，而不是仅依赖于主键的一部分。
* 确保表中的每一列都直接与主键相关，而不是间接与主键相关。
  ![](2024-03-06-113523.png)
  ![](2024-03-06-113800.png)这个就是符合的
3. 第三范式（3NF）：
* 必须符合第二范式。
* 非主键列之间不存在传递依赖关系。换句话说，如果 A → B 且 B → C，则不能存在 A → C。
* 确保表中的非主键列之间没有冗余的传递依赖关系。
* ![](2024-03-06-113857.png)
4. 巴斯-科德范式（Boyce-Codd Normal Form，BCNF）：
* 是第三范式的一种强化形式。
* 要求表中的每一个非主键列完全依赖于主键，而不是依赖于主键的某一部分。
* 主要用于解决多候选键引起的问题，确保每一个非主键列都完全依赖于候选键。
5. 第3.5范式：
不是一个正式的范式，通常用于描述在某些情况下对表结构进行进一步优化的技术。
可以包括分解关系、使用视图等方法，以最大程度地减少冗余和提高查询性能。
![](2024-03-06-114058.png)
第一范式->第二范式：消除部分依赖（比如AB->C,AB推导出C，到2NF就是A也能直接推导出C）
第二范式->第三范式：消除传递依赖（传递依赖就是A->B




## Exercise
### election

1. List the names of all parties that stood in the election, ordered alphabetically by name.
![](2024-02-21-19-57-15.png)
2. List the names of all parties that stood in the Bedminster ward.
![](2024-02-21-20-10-26.png)
SELECT DISTINCT 是不列重复项的意思
把party、ward对应的数字变成对应的name，然后查找Ward.name是bedminister的
```SQL
SELECT * FROM Candidate
JOIN Party ON Party.id=Candidate.party
JOIN Ward ON Ward.id=Candidate.ward
WHERE Ward.name='Bedminster';
```
Simplify:
```SQL
SELECT Party.name FROM Candidate
JOIN Party ON Party.id=Candidate.party
JOIN Ward ON Ward.id=Candidate.ward
WHERE Ward.name='Bedminster';
```
1. How many votes did Labour get in the Stockwood ward?
![](2024-02-21-20-16-48.png)
要的是votes，所以在Candidate里面选择votes
然后两个子查询：
条件1是：Party是Labour->Candidate的都是id，所以要在Party里面找 name='Labour'，并且返回对应的id
条件2是：Ward是Stockwood->Candidate的都是id，所以要在Ward里面找 name='Stockwood'，并且返回对应的id
2. List the names, parties and number of votes obtained for all candidates in the Southville ward. Order the candidates by number of votes obtained descending (winner comes first).

还没扔进去看
```SQL
SELECT Candidate.name, Party.name,Candidate.votes AS name,party,votes
FROM Candidate
JOIN Ward ON Ward.id=Candidate.ward
JOIN Party ON Party.id=Candidate.party
WHERE Ward.name='Southville'
ORDER BY Candidate.votes DESC;
```

3. List the name, party and number of votes obtained for the winner only in the Knowle ward. (Hint: apart from changing the ward name, you only need one small modification to the statement from the last question. You may assume no ties.)
还没扔进去看x
```SQL
SELECT Candidate.name, Party.name,Candidate.votes AS name,party,votes
FROM Candidate
JOIN Ward ON Ward.id=Candidate.ward
JOIN Party ON Party.id=Candidate.party
WHERE Ward.name='Knowle'
ORDER BY Candidate.votes DESC
LIMIT 1;
```

![](2024-02-21-19-55-32.png)

### The 2011 UK Census
![](2024-02-21-20-38-25.png)
1. The university of Bristol is situated in the Cabot ward (ward names are not always distinct, but this one is). Find the names and codes of the CLU, region and country containing the Cabot ward (CLU = county level unit = "row in County table").


2. If you used multiple SQL queries for the last question, do it in one single query now. (In other words, find a join strategy for the tables you need.)


3. Find the number of women in occupation class 1 (managers etc.) in the Cabot ward. You may use ward code for Cabot that you found in the first query and the occupation id 1 directly - you do not need any JOINs for this query.


4. For the Stoke Bishop ward (E05002003), list the 9 occupation class names and the number of men in each occupation. Your table should have two columns called name and number. You can use the provided ward code, you do not need to join on the ward name.

### Intermediate SQL
**Election**
1. How many votes were cast in all of Bristol in the 2014 elections?
2. How many votes were cast in the 'Windmill Hill' ward and what percentage of the electorate in this ward does this represent? Your statement should produce a table with one row and two columns called 'votes' and 'percentage'.
3. List the names, parties and percentage of votes obtained for all candidates in the Southville ward. Order the candidates by percentage of votes obtained descending.
4. How successful (in % of votes cast) was the Conservative party in each ward?
5. Which rank did Labour end up in the 'Whitchurch Park' ward? Your statement should produce a table with a single row and column containing the answer as a number. You can assume no ties.
6. What is the total number of votes that each party got in the elections? Your result should be a table with two columns party, votes.
7. Find all wards where the Green party beat Labour and create a table with two columns ward, difference where the difference column is the number of Green votes minus the number of Labour votes. Your table should be ordered by difference, with the highest one first.
**Census**
1. How many women work in sales and customer service occupations and live in the Cabot ward of Bristol (E05001979)?
2. How many people work in sales and customer service occupations and live in the Cabot ward of Bristol (E05001979)?
3. How many people work in caring, leisure and other service occupations (occupation class 6) in all of the City of Bristol CLU (E06000023)?
4. In the Cabot ward (E05001979), produce a table listing the names of the 9 occupation classes and the number of people in each of the classes in this ward.
5. Find the working population, ward name and CLU name for the smallest ward (by working population) in the 2011 census.
6. The same as the last question, but now produce a table with two rows, one for the smallest and one for the largest ward. There's no quicker way than repeating the last query twice, the question is how to stick the two "copies" together.
7. Find the average size of a ward's working population in the London (E12000007) region.
The same as the last question but now for every region - your query should produce a table with one row per region. The intention here is not to repeat the above query 9 times.
8. Produce a table that lists, for each of the 9 regions of England, the percentage of people in managerial (class 1) occupations who are women.
9. For all CLUs in the London (E12000007) region, produce a table with three columns called CLU, occupation and count such that:
CLU is the CLU name.
count is the number of people of the occupation class in question in the given CLU.
occupation is the name of the occupation class.
Only rows with count >= 10000 appear in the table.
The table is sorted by count ascending.
1. Create a table with three columns occupation, women and men and one row per occupation class. The occupation column should list the occupation class names. The women and men columns in each row should list the total number of women resp. men in the row's occupation class in the whole dataset. The intention here is not to have to copy-paste a subquery 9 times.
1. The same as question 9, but now with a 10th row in the table listing the value for all of England. You can use the string 'England' for the region column.

## JDBC




# Mid-Term
1. shell
2. git
3. 





## Undergrad paper 1
### Q3
```
$ git fetch
ssh: Could not resolve hostname github.com: no address associated with name
fatal: Could not read from remote repository.
Please make sure you have the correct access rights
and the repository exists.
What is the issue?
A. Their public key has not been correctly set up on Github.
B. The repository doesn’t exist; they need to create it before they can pull;
C. There is a merge conflict
D. Their network is down or misconfigured.
```
The answer is D. Maybe because it has something to do with SSH
A. fatal: repository 'repository_url' not found
B. Permission denied (publickey).
C. CONFLICT (content): Merge conflict in filename
### Q5 
```
When running a command into their favourite pager more (so they can scroll it on the
terminal) Alice notices the following unusual output. What is going on, and what are the
weird ESC[01;34m bits?
$ ls --color=always | more
ESC[0mESC[01;34mBackupsESC[0m
ESC[01;34mDesktopESC[0m
ESC[01;34mDocumentsESC[0m
ESC[01;36mDownloadsESC[0m
ESC[01;34mMailESC[0m
ESC[01;34mMusicESC[0m
ESC[01;36mNotesESC[0m
ESC[01;34mPicturesESC[0m
ESC[01;34mReposESC[0m
ESC[01;34mVideosESC[0m
mbox
- (END)
```
I don't think that is is concluded in the class.
### Q6
```
Bob has the following id:
$ id
uid=1000(bob) gid=800(users) groups=800(users)
The passwd program has the following permissions:
$ ls -l `command -v passwd`
-r-sr-sr-x 1 root bin 21112 Feb 12 00:27 /usr/bin/passwd
What user and group will it run as?
A. uid=root, gid=bin
B. uid=root, gid=users
C. uid=bob, gid=users
D. uid=bob, gid=bin
```
A.
* 用户权限中的 Setuid（s）: 以所有者的权限执行。
* 组权限中的 Setgid（s）: 以组的权限执行。
* 其他权限中的粘滞位（s）（目录）: 限制删除到文件所有者。

The permission string -r-sr-sr-x for the file /usr/bin/passwd indicates that the setuid (set user ID) bit is set for the owner (root) and the setgid (set group ID) bit is set for the group (bin).
because the user=root, group=bin
so the file will be run as root and bin
### Q9
```
Alice has the following Makefile. Since the last build, they have made some updates to
main.c. Which rules will be run when next typing make?
main: main.c interface.o analysis.o
docs.html: main.c interface.c analysis.c library.c
documentation-generator main.c interface.c analysis.c library.c -o $@
interface.o: interface.c config.c
analysis.o: analysis.c library.o
library.o: library.c
A. main
B. main interface.o analysis.o
C. main docs.html
D. main interface.o analysis.o docs.html
```
because on the main.c has been changed, so the things within main.c is run too.
Makefile in C
### Q10
```
Alice has created a new program in Java using the Maven buildsystem.
$ mvn test
[INFO] Scanning for projects...
[INFO]
[INFO] ----------------------< com.mycompany.app:my-app >----------------------
[INFO] Building my-app 1.0-SNAPSHOT
[INFO] --------------------------------[ jar ]---------------------------------
[INFO]
[INFO] --- maven-resources-plugin:3.0.2:resources (default-resources) @ my-app ---
[INFO] Using 'UTF-8' encoding to copy filtered resources.
[INFO] skip non existing resourceDirectory /tmp/test/my-app/my-app/src/main/resources
[INFO]
[INFO] --- maven-compiler-plugin:3.8.0:compile (default-compile) @ my-app ---
[INFO] Nothing to compile - all classes are up to date
[INFO]
[INFO] --- maven-resources-plugin:3.0.2:testResources (default-testResources) @
my-app ---
[INFO] Using 'UTF-8' encoding to copy filtered resources.
[INFO] skip non existing resourceDirectory /tmp/test/my-app/my-app/src/test/resources
[INFO]
[INFO] --- maven-compiler-plugin:3.8.0:testCompile (default-testCompile) @ my-app ---
[INFO] Changes detected - recompiling the module!
[INFO] Compiling 1 source file to /tmp/test/my-app/my-app/target/test-classes
[INFO] -------------------------------------------------------------
Page 7 of 29
Turn Over/Qu. continues ...(cont.)
[ERROR] COMPILATION ERROR :
[INFO] -------------------------------------------------------------
[ERROR] /tmp/test/my-app/my-app/src/test/java/com/mycompany/app/AppTest.java:[3,24]
package org.junit does not exist
[ERROR] /tmp/test/my-app/my-app/src/test/java/com/mycompany/app/AppTest.java:[3,1]
static import only from classes and interfaces
[ERROR] /tmp/test/my-app/my-app/src/test/java/com/mycompany/app/AppTest.java:[5,17]
package org.junit does not exist
[ERROR] /tmp/test/my-app/my-app/src/test/java/com/mycompany/app/AppTest.java:[15,6]
cannot find symbol
symbol: class Test
location: class com.mycompany.app.AppTest
[ERROR] /tmp/test/my-app/my-app/src/test/java/com/mycompany/app/AppTest.java:[18,9]
cannot find symbol
symbol: method assertTrue(boolean)
location: class com.mycompany.app.AppTest
[INFO] 5 errors
[INFO] -------------------------------------------------------------
[INFO] ------------------------------------------------------------------------
[INFO] BUILD FAILURE
[INFO] ------------------------------------------------------------------------
[INFO] Total time: 0.917 s
[INFO] Finished at: 2023-02-14T15:42:26Z
[INFO] ------------------------------------------------------------------------
[ERROR] Failed to execute goal
org.apache.maven.plugins:maven-compiler-plugin:3.8.0:testCompile
(default-testCompile) on project my-app: Compilation failure: Compilation
failure:
[ERROR] /tmp/test/my-app/my-app/src/test/java/com/mycompany/app/AppTest.java:[3,24]
package org.junit does not exist
[ERROR] /tmp/test/my-app/my-app/src/test/java/com/mycompany/app/AppTest.java:[3,1]
static import only from classes and interfaces
[ERROR] /tmp/test/my-app/my-app/src/test/java/com/mycompany/app/AppTest.java:[5,17]
package org.junit does not exist
[ERROR] /tmp/test/my-app/my-app/src/test/java/com/mycompany/app/AppTest.java:[15,6]
cannot find symbol
[ERROR] symbol: class Test
[ERROR] location: class com.mycompany.app.AppTest
[ERROR] /tmp/test/my-app/my-app/src/test/java/com/mycompany/app/AppTest.java:[18,9]
cannot find symbol
[ERROR] symbol: method assertTrue(boolean)
[ERROR] location: class com.mycompany.app.AppTest
[ERROR] -> [Help 1]
[ERROR]
[ERROR] To see the full stack trace of the errors, re-run Maven with the -e switch.
[ERROR] Re-run Maven using the -X switch to enable full debug logging.
[ERROR]
[ERROR] For more information about the errors and possible solutions, please read
the following articles:
[ERROR] [Help 1]
What has gone wrong?
A. The Java compiler version is incorrect
B. The pom.xml is syntactically incorrect
C. The syntax of the mvn comand is wrong
D. A dependency is missing
```
A. it did not said error about the version
B. the errors are pointing to 
```
because the error messages specifically point to missing packages (org.junit) and symbols related to JUnit.
```
C. The error messages are related to compilation issues and missing dependencies, not an incorrect Maven command
```
Failed to execute goal
org.apache.maven.plugins:maven-compiler-plugin:3.8.0:testCompile
(default-testCompile) on project my-app: Compilation failure: Compilation
```
So it is D.the absence of the JUnit dependency(In the context of Maven and Java projects, a dependency is an external library or module that your project relies on. )

### Q11
```
Bob wants to store a table containing students answers in an SQL database. The table
should have 3 attributes:
• student (an 8 digit number which references the id attribute of the student table)
• question (a 2 digit number which references the id attribute of the question table)
• answer (text containing their answer)
What SQL command would create the most appropriate table?
A. CREATE TABLE answers(student VARCHAR(8), question INTEGER, answer
TEXT, FOREIGN KEY student REFERENCES student(id), FOREIGN KEY question
REFERENCES question(id), PRIMARY KEY (answer));
B. CREATE TABLE answers(student VARCHAR(8), question INTEGER, answer
TEXT UNIQUE, FOREIGN KEY student REFERENCES student(id), FOREIGN KEY
question REFERENCES question(id), PRIMARY KEY (student, question));
C. INSERT INTO answers(student, question, answer) VALUES ("0607970",
10, "C");
D. CREATE TABLE answers(student VARCHAR(8), question INTEGER, answer
TEXT, FOREIGN KEY student REFERENCES student(id), FOREIGN KEY question
REFERENCES question(id), PRIMARY KEY (student, question));
```
 ```primary key```:A primary key is a column or a set of columns in a table that uniquely identifies each row or record in that table.
```foregin key``` :A foreign key is a column or a set of columns in a table that refers to the primary key of another table. It establishes a link between the two tables.
C is definitely wrong,so select among ABD
BD's primary key is (student, question)
because the pair of one student and one question is unique, kinds of like map?
answer TEXT UNIQUE: wrong ,answer is randomly among ABCD?
```
GROUP BY

AVG()
COUNT()
SUM()

HAVING 
```

### Q13
```
The FOREIGN KEY constraint implies which other constraints (if any)?
A. NOT NULL, UNIQUE
B. NOT NULL
C. UNIQUE
D. No other constraints
```
D.
BTW, the PRIMARY KEY should be NOT NULL,UNIQUE

### Q14

```
      Bob is trying to run a command but it isn’t working. To debug their issue they run their
      command with strace. What command are they trying to run?

execve("/usr/bin/cd", ["cd", "/home/jhl8636"], 0x7fff0476de18 /* 28 vars */) = 0s

open("/usr/share/locale/en.utf8/LC_MESSAGES/bash.mo", O_RDONLY) = -1 ENOENT (No such
file or directory)
open("/usr/share/locale/en/LC_MESSAGES/bash.mo", O_RDONLY) = -1 ENOENT (No such file
or directory)
write(2, "/usr/bin/cd: line 2: cd: /home/j"..., 66/usr/bin/cd: line 2: cd:
/home/jhl8636: No such file or directory
) = 66
read(255, "", 26)
= 0
exit_group(1)
= ?
+++ exited with 1 +++


    A. bash
    B. cd
    C. execve
    D. /etc/ld.so.preload
    [1 mark]
    Q15. Bob is trying to run a command but it still isn’t working. Using the trace from before:
    what type of program does strace try and run, in the first instance?
    A. A compiled binary command
    B. A shell script
    C. A shell builtin command
    D. Impossible to say
    [1 mark]
    Q16. Bob is trying to run a command but it still isn’t working. Using the trace from before:
    what’s the problem?
    A. The command they’ve tried to run doesn’t exist
    B. The permissions are set to prevent their command running
    C. The filesystem and it’s inodes are corrupt.
    D. A folder they’ve tried to access doesn’t exist
```
14. execve:checks for the command: so it is CD
15. using man strace because there is too many results that one command can't be done
So it is shell script
16. "No such file or directory"

### Q18
```
Alice is trying to set up key-based login on a service she currently accesses via using ssh
and entering her password. Here are listings of her .ssh directory on her local machine:

        There’s a problem evident with her current setup. Identify which file’s presence, absence or
        visible details indicates the problem.
        A. The problem lies with ‘authorized_keys’ on the local machine.
        B. The problem lies with ‘known_hosts’ on the server.
        C. The problem lies with ‘id_rsa’ on the local machine.
        D. The problem lies with ‘id_rsa.pub’ on the server.
```
C Because there should be a private key on the local machine

### Q19
```
Which of the below would redirect both standard output and standard error from myprogram
to log.txt?
A. ./myprogram > log.txt 1> log.txt
B. ./myprogram 1> log.txt 2>&1
C. ./myprogram 2>&1 > log.txt
D. ./myprogram 2&1> log.txt
```
    
1> redirects standard output to the specified file (log.txt).
2>&1 redirects standard error to the same location as standard output, which is log.txt.

So, option B ensures that both standard output and standard error are redirected to the file log.txt

D. & here doesn't means ```AND```, so the correct version should be ```/myprogram 2>&1 > log.txt```

### Q20
```
If command2 ignores standard input and will only work with a file passed as an argument,
how can we redirect the output of command1 to be used by command2?
A. command1 > command2
B. command2 $(command1)
C. command1 | command2
D. command2 <(command1)
```
D.<() is called process substitution in Bash.
It allows the output of command1 to be treated as if it were a file, and this "file" is then passed as an argument to command2

A. command1 > command2
the output of command1 will be put into a FILE named command2
B. use the output of command1 to be the argument of command2
C. command2 's standards output is not ignored.

### Q21
because the whole file is empty, so there is no file called '*' and 'cp'...

## Undergrads paper 2
### Q1
```
Alice wishes to rebase the bugfix bugfix branch so that instead of being based on the
release-1.0 branch, it is based on the release-1.1 branch. Which commands should
they run?
A. git checkout bugfix; git rebase release-1.1
B. git checkout bugfix; git merge release-1.1
C. git checkout release-1.1; git rebase bugfix
D. git checkout checkout release-1.1; git pull bug-fix
```
这个考了rebase，就是和merge不一样
merge是如果要把A merge到main上，应该先跳转到main分支，然后merge A
rebase是要看base是什么，如果based是release-1.1，那么就需要先去bugfix再rebase，这样bugfix是再release-1.1的顶部了
### Q12
```SQL
Bob wants to find what their mean soup ranking is.
Which SQL query will not tell them what they want?
A. SELECT SUM(ranking)/COUNT(ranking) FROM soupranking;
B. SELECT AVG(ranking) FROM soupranking;
C. SELECT (1.0*SUM(ranking))/COUNT(ranking) FROM soupranking;
D. SELECT SUM(ranking)/(1.0*COUNT(ranking)) FROM soupranking;
```
这个在PPT上提到过，实际上就是浮点数的处理问题
A.
### Q14
```SQL
Alice says Bob’s code is dangerous. Bob says it isn’t. The code doesn’t seem to crash and
compiles. Who is right and why?
final String query = "SELECT password FROM users WHERE user LIKE "+username;
A. Alice is probably right: it looks like it may be vulnerable to SQL injection.
B. Bob is probably right: it doesn’t crash
C. Alice is probably right: there is a buffer overflow
D. Bob is probably right: they have used prepared statements
```
A.很容易被注入，为了防止注入，应用程序应该使用参数化查询或预处理语句
![](2024-03-06-162150.png)
### Q18
![](2024-03-06-162853.png)
这个还是考的本地和server SSH的问题
缺少authorized_keys
### Q19
```SQL
Q19. Which of the below would redirect both standard output and standard error from the command noisy to /dev/null?
A. noisy > /dev/null 1> /dev/null
B. noisy 2&1> /dev/null
C. noisy 1> /dev/null 2> /dev/null
D. noisy 2>&1 > /dev/null
```
需要redirect，B的语法错误，A是指数除了standard output
D也是错的，应该是先1，再有2>&1
所以最后选C
```SQL
If command2 needs to be given a string argument that comes from the output of command1,
how can we capture the output of command1 to be used by command2?
A. command1 > command2
B. command2 $(command1)
C. command1 | command2
D. command2 <(command1)
```
string output->as arguments,所以是B
A是将command1的结果输出到一个名为command2的filezhong
C.是将command1的输出作为command2的管道输入，而不是argument？
D.是重定向



## past paper

