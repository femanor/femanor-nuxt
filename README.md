# Femanor - Nuxt.js

> 由 [Nuxt.js](https://nuxt.com) 及其生态构建的偏个人博客项目

## 构建项目的初衷

### 为什么选择 Nuxt.js 来构建项目？

- 如果你是 Vue 技术栈开发者，用 Nuxt.js 来构建全栈项目是作为前端开发者的最优选择。
- 相比于传统的前后端分离项目，大大降低前端开发者的心智负担。
- 我一直认为学习一门技术最有效的方式就是，边学习边实践，而不是一味的看文档，文档是用来查阅的，遇到相关的知识点，就去查看官方文档，看是否有对应的解决方案。

### 选择 Nuxt.js 构建项目的优势？

- 像 Nuxt.js、Next.js 这种前端上层框架，是未来发展的必然趋势，如果要构建一个全栈的项目，首要的就是选择这种全栈框架，一是，它们都为我们封装好很多的功能，免去我们使用纯前端框架开发时，进行的一系列的配置，如路由配置、接口请求配置、构建工具配置等等。二是，它们都有自己的生态，我们可以通过它们来快速搭建一个全栈的项目，无论是写前端页面，还是后端逻辑，我们统统可以搞定。

## 技术栈

- UI : [NuxtUI](https://ui3.nuxt.dev)、[Element Plus](https://element-plus.org/zh-CN/guide/quickstart.html)
- CSS : [tailwindcss](https://tailwindcss.com)
- Icon : [icones](https://icones.js.org/)
- ORM : [Prisma](https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/prisma-nuxt-module?utm_source=nuxt.com&utm_medium=aside-module&utm_campaign=nuxt.com)、[@prisma/nuxt](https://nuxt.com/modules/prisma)
- 编辑器：[TipTap](https://tiptap.dev/docs)
- auth : [@sidebase/nuxt-auth](https://nuxt.com/modules/sidebase-auth)

## 常见问题

### 1. Github 无法访问

> Windows 系统下的 hosts 文件路径为 `C:\Windows\System32\drivers\etc\hosts`，Mac 系统下的 hosts 文件路径为 `/etc/hosts`

- 访问[站长工具](https://tool.chinaz.com/dns/github.com) DNS 查询 `github.com` 找到 TTL 值小的，复制对应的 ip 地址
- 把赋值的 ip 地址添加到 hosts 文件中，例如：`140.82.114.4 github.com`
- Windows 系统下，在 cmd 中运行 `ipconfig/flushdns` 命令，Mac 系统下，在终端中运行 `sudo killall -HUP mDNSResponder` 命令

亦或参考如下网址

- [GitHub520](https://gitee.com/klmahuaw/GitHub520)
- [GitHub Host Start](https://gitlab.com/ineo6/hosts/-/raw/master/next-hosts)

## 快速开始

### 安装依赖

```bash
# pnpm
pnpm install
```

### 生成 Prisma Client
```bash
# pnpm
pnpx prisma generate
```

### 启动项目
```bash
# pnpm
pnpm dev
```
