# 环境检查类

- checkRedis 检查Redis连接
- checkQueueWorker 检查目标队列Worker是否运行
- writeWorkerHeartbeat 写入Worker心跳（供队列Job调用）
- checkPhpExtensions 检查PHP扩展
- checkComposerPackages 检查Composer包是否安装（含版本号）
- checkAddons 检查FastAdmin插件安装情况（含版本号）
- checkConfig 检查配置项是否存在且值符合预期
- checkDirectoryPermissions 检查目录读写权限