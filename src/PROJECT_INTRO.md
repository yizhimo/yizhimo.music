# yzm.music

用 React 仿写的网易云音乐 Web 端。

## 技术栈

| 类别       | 技术                              |
| ---------- | --------------------------------- |
| 框架       | React 17                          |
| 状态管理   | Redux + Redux Thunk + Immutable.js |
| 路由       | React Router 5 (react-router-config) |
| UI 组件库  | Ant Design 4 + @ant-design/icons  |
| 样式       | styled-components                 |
| HTTP 请求  | axios                             |
| 构建工具   | Create React App + CRACO          |

## 项目结构

```
src/
├── pages/           # 页面模块
│   ├── discover/    # 发现音乐页
│   ├── friend/      # 朋友页
│   ├── mine/        # 我的音乐页
│   └── player/      # 播放器页
├── components/      # 通用组件
│   ├── album-cover/       # 专辑封面
│   ├── app-header/        # 顶部导航
│   ├── app-footer/        # 底部播放栏
│   ├── songs-cover/       # 歌曲封面
│   ├── theme-header-rcm/  # 推荐主题头
│   └── top-ranking/       # 排行榜
├── router/          # 路由配置
├── store/           # Redux store
├── services/        # API 请求封装
├── utils/           # 工具函数
├── common/          # 公共常量/配置
└── assets/          # 静态资源
```

## 主要功能模块

- **发现音乐** — 推荐、排行榜、歌单浏览
- **播放器** — 歌曲播放控制
- **朋友** — 社交功能页面
- **我的** — 个人音乐管理
