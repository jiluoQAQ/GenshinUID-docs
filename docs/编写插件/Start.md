# 简单介绍<Badge type="tip" text="简单" />

::: tip

借助适配器、`gsuid_core`的插件将同时适配全平台

但是`gsuid_core`本身并不支持高级的`Bot`功能，例如缺失**分步对话**、戳一戳等消息类型的缺失

:::

### GsCore插件的优势

- 适配大部分平台（QQ、QQ频道、微信、TG、KOOK、飞书、QQ群官方机器人、Red协议），未来还会加入更多支持
- 适配大部分Bot（NoneBot2，HoshinoBot、yunzai-bot、Koishi、ZeroBot）
- 一次编写，便可在以上平台 & Bot中畅快运行，转换平台时无需修改代码
- 支持插件用简单的方式，向网页控制台添加配置、映射数据表，便于Bot管理数据

### GsCore插件不支持的

- 平台特性相关：戳一戳、撤回、表情、红包等动作（仅支持**收发信息**）

