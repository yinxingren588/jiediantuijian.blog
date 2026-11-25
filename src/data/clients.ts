export interface ClientItem {
  id: string;
  name: string;
  os: string;
  osLabel: string;
  badge: string;
  desc: string;
  protocolSupport: string[];
  recommendedNode: string;
  tutorialUrl: string;
}

export const CLIENT_LIST: ClientItem[] = [
  {
    id: 'clash-verge-rev',
    name: 'Clash Verge Rev',
    os: 'windows-mac',
    osLabel: 'Windows / macOS / Linux',
    badge: 'PC桌面端主流标杆',
    desc: '基于 Tauri 框架打造的现代化新一代 Clash 客户端，内存占用极低，原生支持 Clash.Meta (Mihomo) 内核，界面美观易用，支持订阅一键更新与 TUN 模式。',
    protocolSupport: ['Shadowsocks', 'Vmess', 'Trojan', 'VLESS-Reality', 'Hysteria 2'],
    recommendedNode: '隐形人、暮光加速、微风网络',
    tutorialUrl: '/tutorials/clash-guide'
  },
  {
    id: 'shadowrocket',
    name: 'Shadowrocket（小火箭）',
    os: 'ios',
    osLabel: 'iOS / iPadOS / tvOS',
    badge: '苹果设备装机必备',
    desc: 'iOS 平台上保有量最高、功能最全面的科学上网工具，支持扫码导入订阅、智能分流、节点延迟快速批量测速与 TikTok 免拔卡模块重写。',
    protocolSupport: ['Shadowsocks', 'Trojan', 'Vmess', 'VLESS', 'Hysteria 2', 'WireGuard'],
    recommendedNode: '隐形人、飞猫云、光年梯',
    tutorialUrl: '/tutorials/shadowrocket'
  },
  {
    id: 'sing-box',
    name: 'Sing-box',
    os: 'all',
    osLabel: '全平台 (Win/Mac/iOS/Android)',
    badge: '次世代极客首选',
    desc: '采用现代化纯 Go 开发的新一代通用网络代理框架，规则性能超群，对新兴协议（如 VLESS-Reality、Hysteria 2、ShadowTLS、TUIC）支持最前沿。',
    protocolSupport: ['全协议支持', 'VLESS-Reality', 'Hysteria 2', 'ShadowTLS', 'TUIC'],
    recommendedNode: '大佬云、边缘节点、跨界云',
    tutorialUrl: '/tutorials/sing-box'
  },
  {
    id: 'clash-meta-android',
    name: 'Clash Meta for Android',
    os: 'android',
    osLabel: 'Android 手机 / 平板 / 电视TV',
    badge: '安卓与电视大屏首选',
    desc: '专为 Android 及 Android TV 电视盒子优化的 Clash Meta 客户端，支持分应用代理、遥控器适配、绕过局域网及后台省电稳定保活。',
    protocolSupport: ['Shadowsocks', 'Trojan', 'Vmess', 'VLESS', 'Hysteria 2'],
    recommendedNode: '飞猫云、微风网络、星岛梦',
    tutorialUrl: '/tutorials/android-tv'
  },
  {
    id: 'openwrt-router',
    name: 'OpenWrt (Passwall / ShellCrash)',
    os: 'router',
    osLabel: '软路由 / 硬路由全屋网关',
    badge: '全屋设备零配置透明代理',
    desc: '部署在家中 N100/R2S 软路由或支持刷机的路由器中，局域网内所有电脑、Apple TV、游戏主机无需安装客户端即可共用 1 台设备额度无缝加速。',
    protocolSupport: ['Shadowsocks 2022', 'Trojan', 'VLESS-Reality', 'Hysteria 2'],
    recommendedNode: '隐形人、暮光加速、微风网络',
    tutorialUrl: '/tutorials/router-openwrt'
  }
];
