export const site = {
  name: "偏航记录",
  label: "AI FIELD NOTES",
  issue: "ISSUE 026",
  date: "2026.08.20",
  readingTime: "6 分钟",
  title: "今天值得知道的，不只是又发布了什么",
  intro:
    "从每天的 AI 新闻里，留下真正会改变产品、工作方式和个人选择的信号。每条记录都给出判断、影响与原始来源。",
};

export type LeadStory = {
  id: string;
  eyebrow: string;
  title: string;
  summary: string;
  signal: string;
  uncertainty: string;
  tags: string[];
  source: { label: string; publisher: string; url: string };
};

export const leadStories: LeadStory[] = [
  {
    id: "01",
    eyebrow: "平台治理",
    title: "训练数据的选择权，正在从条款藏到产品设置里",
    summary:
      "Twitch 新增生成式 AI 训练选项，频道内容可能被用于亚马逊模型训练。真正值得关注的不是某一个开关，而是平台正把“默认加入、主动退出”变成新的数据治理范式。",
    signal:
      "创作者需要定期检查平台的数据设置；面向创作者的产品也应把授权状态做成可见、可追溯的功能。",
    uncertainty:
      "公开说明仍没有完全回答历史数据是否会保留，以及退出前的数据是否已经进入现有模型。",
    tags: ["创作者", "数据权利", "默认设置"],
    source: {
      label: "Twitch is Mining Peoples' Streams to Train Amazon's AI",
      publisher: "404 Media",
      url: "https://www.404media.co/twitch-training-amazon-ai-models-how-to-opt-out-setting/",
    },
  },
  {
    id: "02",
    eyebrow: "人机交互",
    title: "当手语成为系统输入，AI 的入口才真正开始变宽",
    summary:
      "Google 把美国手语输入能力带进移动端产品。它提示我们：多模态不只等于摄像头识物，也意味着让过去被键盘和语音排除的人拥有原生入口。",
    signal:
      "设计 AI 产品时，应把输入方式当作核心能力，而不是上线后的无障碍补丁。",
    uncertainty:
      "支持设备、语言范围与复杂场景下的准确度，仍决定这项能力能否跨过演示阶段。",
    tags: ["多模态", "无障碍", "移动端"],
    source: {
      label: "Putting sign language AI into users’ hands",
      publisher: "Google DeepMind",
      url: "https://deepmind.google/blog/putting-sign-language-ai-into-users-hands/",
    },
  },
  {
    id: "03",
    eyebrow: "端侧模型",
    title: "更小的模型，可能比更强的模型更快进入现实世界",
    summary:
      "Needle 2 把工具调用模型压缩到可以在低成本设备离线运行的尺寸。对穿戴设备、家庭硬件和机器人来说，延迟、隐私与成本往往比排行榜名次更重要。",
    signal:
      "端侧 AI 的产品机会，会优先出现在任务边界清晰、动作集合有限、需要即时反馈的场景。",
    uncertainty:
      "小模型在长任务、异常输入和跨工具协作中的可靠性，还需要更多真实部署数据。",
    tags: ["小模型", "离线", "硬件"],
    source: {
      label: "Needle 2",
      publisher: "Cactus Compute",
      url: "https://cactuscompute.com/needle",
    },
  },
];

export const quickSignals = [
  {
    id: "04",
    title: "AI agent 的竞争开始转向任务完成率，而非对话体验",
    note: "观察谁能稳定完成跨网站、多步骤、可恢复的真实工作。",
  },
  {
    id: "05",
    title: "语音会成为默认输入，但屏幕共享才是上下文入口",
    note: "用户不想描述屏幕上的问题，他们更愿意直接把现场交给模型。",
  },
  {
    id: "06",
    title: "AI 原生公司的估值很热，工作流改造的证据更重要",
    note: "优先记录节省时间、降低错误率和新增收入，而不是融资数字。",
  },
];
