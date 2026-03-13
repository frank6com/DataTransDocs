# 安装与配置

## 环境要求

- Redis 5.0 及以上版本
- Php 7.4 及以上版本，并安装以下扩展：
  - redis
  - pdo_mysql
- MySQL 5.7 及以上版本
- FastAdmin 任意版本并安装 Think-Queue 插件

## 安装步骤

### 1. 配置 Redis 参数

请确保在 FastAdmin 的配置文件中正确配置 Redis 参数，

### 2. 配置 Think-Queue



### 3. 安装 DataTrans 插件



### 4. 运行队列监听器

```bash
php think queue:listen --queue=datatrans --timeout=0
```

### 5. 运行环境检查验证安装情况

### 6. 推荐配置 Supervisor 管理队列监听器，确保其在后台持续运行并自动重启。

## 常见安装问题

可通过[GitHub Issues](https://github.com/frank6com/DataTransDocs/issues)提交功能建议和问题反馈，帮助我们改进 DataTrans 插件。

