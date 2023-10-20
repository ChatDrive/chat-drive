# chat-drive
A cloud storage platform

- .commitlintrc.json
``` 
module.exports = {
  extends: ["@commitlint/config-conventional"],
  // 定义规则类型
  rules: {
    // type 类型定义，表示 git 提交的 type 必须在以下类型范围内
    "type-enum": [
      2,
      "always",
      [
        "feat✨", // 特性: 一个新的特性
        "fix🐞", //  修复: 修复一个Bug
        "docs📚", // 文档: 变更的只有文档
        "style💅", // 格式: 空格, 分号等格式修复
        "refactor🛠", // 重构: 代码重构，注意和特性、修复区分开
        "perf🐎", // 性能: 提升性能
        "test🏁", // 测试: 添加一个测试
        "revert⏪", // 回滚: 代码回退
        "chore🗯", // 工具:开发工具变动(构建、脚手架工具等)
        "merge⌛", // 合并:合并代码
        "build📦", // 打包: 打包发布
        "ci🔧", // 集成: 持续集成
        "release🚀", // 发布: 发布新版本
        "other🌈", // 其他: 其他改动，比如构建流程, 依赖管理
      ],
    ],
    // subject 大小写不做校验
    "subject-case": [0],
  },
};

```