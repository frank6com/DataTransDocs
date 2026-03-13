# 导入器 trait Importer

## 介绍

> Importer 是 DataTrans 插件中的一个 trait，提供了数据导入功能的核心方法和逻辑。通过使用 Importer trait，可以轻松实现不同控制器对导入操作的支持。

## 主要功能实现

- **核心导入方法**：提供了 `doImport` 方法，GET 请求默认加载 `common/import` 模板，POST 请求则执行数据导入操作。
