### node  
v14.15.0

### 关于锁版本 package-lock.json

提交 package-lock.json 文件。有条件的情况下，
构造两个独立的 CI Pipeline，一个保留 lock 文件（A），一个去除 lock 文件（B），
如果 Pipeline B 上出现版本兼容问题（理论上只要 A 没挂 B 挂即是），定位出现兼容问题的依赖，建立对应的 Tech Debt 卡，同时将版本改为当前 lock 文件中的精确版本；修复兼容问题后，去除版本锁定，更新 lock 文件，两个 Pipeline 都能够通过，则可以关闭该卡；重复上面两个步骤。






