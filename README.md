# Pear

Pear 是基于 [Peach](https://github.com/peach-mitao/peach) 改造的单人自托管漫画阅读器，面向图片文件夹漫画库，可部署到 Docker 和 NAS。

运行源码需要 Python 3.14 或更高版本。[简体中文说明](README.zh-CN.md)。

## 漫画阅读

- 扫描目录，将直接包含支持图片的文件夹登记为一本漫画。
- 使用竖版封面浏览馆藏，支持紧凑模式、搜索、作者和标签筛选。
- 支持单页、双页阅读和续读，记录每次显示的页码及换书顺序。
- 可喜欢整本漫画或单独的页；双页模式下，两页各自保留喜欢状态。
- 「喜欢」汇总留下喜欢标记的漫画，「统计」展示馆藏、阅读和喜欢的本数与页数。
- 阅读痕迹按日期查询，列表限高、每批加载 200 条，可点击记录回到起始页。
- 沉浸阅读按标签口味、作者偏好和阅读间隔推荐漫画，下一本从推荐作品第一页开始。

| 快捷键 | 操作 |
| --- | --- |
| A / D、左右方向键 | 左右翻页 |
| B | 切换单页和双页 |
| S / Z | 喜欢或取消喜欢当前显示的页 |
| 空格 | 按推荐打开下一本 |
| Esc | 关闭阅读器或信息面板 |

输入框和输入法正在组词时，字母快捷键会暂停响应。

## 标签和推荐

可在封面上直接编辑标签，也可在详情页填写来源网页、作者、标签和匹配说明。AI 使用 Ego 浏览器查找来源后提交待审核资料，由使用者复核后生效。操作见[漫画来源标签](docs/COMIC_TAGGING.md)。

推荐默认权重为标签相关性 60%、作者偏好 15%、阅读间隔 20%、探索 5%。整本喜欢、单页喜欢和高潮反馈建立口味，普通翻页影响阅读间隔。推荐采用反馈封顶、近期阅读靠后和作者分散规则。

重复检测按正文名与作者列出可能重复的配对，忽略方括号内容，保留卷话数字，供人工核对。

## Docker / NAS

当前提供本地构建和导入 tar 的使用方式。镜像按 Linux amd64 构建，导入时使用实际取得的镜像标签。

    docker load -i pear-image.tar

创建 Compose 项目，将存储位置选为项目目录。将下面的 image 替换为导入的标签，漫画路径替换为 NAS 实际目录。

    services:
      pear:
        image: pear:your-imported-tag
        pull_policy: never
        container_name: pear
        restart: unless-stopped
        ports:
          - "18900:8900"
        volumes:
          - ./data:/data
          - /path/to/comics:/media:ro
        logging:
          driver: json-file
          options:
            max-size: "20m"
            max-file: "1"

容器以 UID/GID 1000 运行，宿主机 data 目录需要允许该用户读写。部分 NAS 在创建或重建容器后会重置属主，出现 /data/state 权限错误时，在创建容器后修复专用数据目录权限。

    mkdir -p ./data
    sudo chown 1000:1000 ./data
    docker compose up -d

访问宿主机映射端口，完成初始化，将扫描路径设为 /media。应用数据保存在 /data，漫画目录只读挂载。升级前备份整个 data 目录，再更新镜像标签并重新部署。健康检查路径为 /healthz。

源码构建使用仓库 Dockerfile。前端修改后先在 frontend 目录执行 npm ci 和 npm run build，再运行 docker build -t pear:local .。开发环境与测试入口见[测试文档](docs/TESTING.md)和[运行文档](docs/OPERATIONS.md)。

## 数据与限制

阅读痕迹从启用该功能后开始积累，早期仅保存的续读位置无法还原完整翻页历史。目录重扫保留仍存在的页的身份。漫画扫描采用图片目录识别，需要将扫描范围指向漫画库。

漫画版收起了部分视频和 AV 专属入口，仓库仍包含继承的底层模块和旧文档。已验证范围以对应 PR 和实际镜像为准。网页来源需要自行满足登录、验证和访问条件。

## 反馈与许可

通过 [Issues](https://github.com/Chalous/pear/issues) 反馈问题，附上版本、操作步骤和脱敏错误信息。

基于 Peach 开发，沿用 [AGPL-3.0-or-later](LICENSE)。第三方组件保留各自许可，相关复用见[复用清单](docs/REUSE.md)。仅管理有权使用的漫画资料，公开反馈请使用合规演示内容并遮盖私有路径和凭据。
