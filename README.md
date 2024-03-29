# Gulp4 工作流配置(Gulp4 workflow config)

## 简介(Introduction)

简单实用的前端自动化工作流配置，基于 Gulp4.x
Simple and practical front-end automated workflow configuration based on Gulp4.x

## 特性(Features)
* SASS (CSS preprocessor)
* 图像压缩和转Base64 (Images compress & save base64 image)
* JS压缩 (JavaScript compressor)
* 热加载 (Hot reload)
* 一套环境多项目共存 (Multi-Project Builds)

## 目录结构(Directory structure)
```
+ project_file_name                 // Project folder(Example)
    + Build                         // Production folder(Output floder)
        - etc...
    + dist                          // Pevelopment folder(Output floder)
        - etc...
    + dist__test                    // Test folder(Output floder)
        - etc...
    + src                           // Source code
        - images                    // Image folder
        - js                        // Script folder
        - lib                       // CSS/JS library
        - scss                      // Style folder
        - project.config.js         // Project custom config
- .gitignore                        // Exclude files from git
- gulp.config.js                    // Gulp custom config
- gulpfile.js                       // Gulp config
- package.json                      // Dependency & Module list
- README.md                         // Documentation
- yarn.lock                         // Yarn
```

## 环境要求(Pre Required)

如果你已经全局安装了 gulp 请先删除旧版本后再安装
If you've previously installed gulp globally, please remove the old version
```bash
$ npm rm --global gulp
# or
$ yarn global remove gulp
```

全局安装 gulp-cli
Install the gulp command line utility
```bash
$ npm install --global gulp-cli
# or
$ yarn global add gulp-cli
```

## 安装方式(Installation)

```bash
# 安装 - Using npm or yarn
$ npm i ublue-gulp-config
# or
$ yarn add ublue-gulp-config
```

```bash
# 安装依赖 - Install dependency
$ npm install
# or
$ yarn install
```

## 使用方法(Used)

```bash
# 第一种
# 1.项目初始化 - Project initialization
$ gulp init
# 2.环境启动 - Start it
$ gulp

# 第二种
# 项目初始化 和 启动
$ npm run dev
```

##环境切换(Using environment variables)

```bash
# 发布测试环境 - Build for test environment
$ gulp init --test

# 发布生产环境 - Build for production environment
$ gulp init --build
$ npm run build

# 清理生产目录 - Clean up development or production
$ gulp clean

# 清理指定环境目录 - Clean up the specified environment directory
$ gulp clean --test
```
