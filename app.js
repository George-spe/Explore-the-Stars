// 多语言支持
const translations = {
    en: {
        connectWallet: "Connect Wallet",
        airdrop: "Airdrop",
        rewards: "Invite Rewards",
        ecosystem: "Ecosystem",
        contact: "Contact Us",
        heroTitle: "Explore the Interstellar Web3 Universe",
        heroSubtitle: "Join the PLANET ecosystem and be part of the decentralized future",
        exploreBtn: "Begin Exploration",
        airdropTitle: "PLANET Airdrop",
        airdropText: "Pay 0.0015 BNB to receive 10,000 PLANET tokens",
        claimAirdrop: "Claim Airdrop",
        rewardsTitle: "Invitation Rewards",
        rewardsText1: "1st Generation: 10% of each airdrop amount",
        rewardsText2: "2nd Generation: 5% of each airdrop amount",
        rewardsText3: "Rewards are triggered when the invited user successfully claims the airdrop.",
        rewardsText4: "You can claim your rewards at any time.",
        rewardsBalance: "Your Rewards Balance:",
        claimRewards: "Claim Rewards",
        contactTitle: "Contact Us",
        sendMessage: "Send Message",
        emailText: "Or email us directly at:",
        crossChain: "Cross-Chain Interoperability",
        governance: "Interstellar Governance",
        transactions: "Light-Speed Transactions",
        gaming: "Interstellar Chain Games",
        crossChainContent: {
            title: "Cross-Chain Interoperability",
            desc: "Our cross-chain technology allows seamless asset and data transfer between different blockchains, creating a truly interconnected Web3 universe.",
            points: [
                "Bridge assets between Ethereum, BSC, Polygon and more",
                "Decentralized cross-chain communication protocol",
                "Secure and trustless interoperability"
            ]
        },
        governanceContent: {
            title: "Interstellar Governance",
            desc: "A decentralized governance system that allows PLANET holders to vote on ecosystem development and decisions.",
            points: [
                "On-chain voting with PLANET tokens",
                "Proposal submission and discussion platform",
                "Transparent and tamper-proof governance records"
            ]
        },
        transactionsContent: {
            title: "Light-Speed Transactions",
            desc: "Our proprietary consensus algorithm enables near-instant transaction finality with minimal fees.",
            points: [
                "Sub-second transaction confirmation",
                "Micro-fee structure",
                "Scalable to millions of TPS"
            ]
        },
        gamingContent: {
            title: "Interstellar Chain Games",
            desc: "A metaverse of blockchain-based games where assets are truly owned by players and can be traded across games.",
            points: [
                "NFT-based game assets",
                "Play-to-earn mechanics",
                "Cross-game asset interoperability"
            ]
        },
        connectWalletFirst: 'Please connect your wallet first!',
        insufficientBalance: 'Insufficient BNB balance for the airdrop fee!',
        airdropSuccess: 'Airdrop claimed successfully! 10,000 PLANET tokens have been sent to your wallet.',
        airdropError: 'Error claiming airdrop: ',
        rewardsSuccess: 'Rewards claimed successfully!',
        rewardsError: 'Error claiming rewards: ',
        formSuccess: 'Thank you for your message! We will contact you soon.',
        formError: 'Please fill in all fields!',
        copied: 'Copied!',
        referralDetected: 'You were referred by {address}',
        connectWalletError: 'Please install MetaMask or another Web3 wallet to connect!',
        cooldownActive: 'Airdrop cooldown active. Please wait {time} before claiming again.',
        emailSuccess: 'Your message has been sent successfully!',
        nextClaimTime: 'Next claim available in: {time}',
        referralLinkText: 'Your Referral Link',
        referralShareText: 'Share this link to earn 10% from 1st generation and 5% from 2nd generation airdrops'
    },
    ja: {
        connectWallet: "ウォレット接続",
        airdrop: "エアドロップ",
        rewards: "招待報酬",
        ecosystem: "エコシステム",
        contact: "お問い合わせ",
        heroTitle: "星間Web3宇宙を探索",
        heroSubtitle: "PLANETエコシステムに参加し、分散型未来の一部になりましょう",
        exploreBtn: "探索を開始",
        airdropTitle: "PLANETエアドロップ",
        airdropText: "0.0015 BNBを支払って10,000 PLANETトークンを獲得",
        claimAirdrop: "エアドロップを請求",
        rewardsTitle: "招待報酬",
        rewardsText1: "1世代目: 各エアドロップ金額の10%",
        rewardsText2: "2世代目: 各エアドロップ金額の5%",
        rewardsText3: "招待したユーザーがエアドロップを請求すると報酬が発生します。",
        rewardsText4: "報酬はいつでも請求できます。",
        rewardsBalance: "報酬残高:",
        claimRewards: "報酬を請求",
        contactTitle: "お問い合わせ",
        sendMessage: "メッセージを送信",
        emailText: "または直接メールで:",
        crossChain: "クロスチェーン相互運用性",
        governance: "星間ガバナンス",
        transactions: "光速取引",
        gaming: "星間チェーンゲーム",
        crossChainContent: {
            title: "クロスチェーン相互運用性",
            desc: "私たちのクロスチェーン技術により、異なるブロックチェーン間でシームレスな資産とデータ転送が可能になり、真に相互接続されたWeb3宇宙が実現します。",
            points: [
                "Ethereum、BSC、Polygonなど間の資産ブリッジ",
                "分散型クロスチェーン通信プロトコル",
                "安全で信頼不要な相互運用性"
            ]
        },
        governanceContent: {
            title: "星間ガバナンス",
            desc: "PLANET保有者が生態系の開発と意思決定に投票できる分散型ガバナンスシステム。",
            points: [
                "PLANETトークンを使用したオンチェーン投票",
                "提案提出と議論のプラットフォーム",
                "透明で改ざん防止されたガバナンス記録"
            ]
        },
        transactionsContent: {
            title: "光速取引",
            desc: "私たち独自のコンセンサスアルゴリズムにより、最小限の手数料でほぼ瞬時の取引確定が可能になります。",
            points: [
                "1秒未満の取引確認",
                "マイクロ手数費構造",
                "数百万TPSにスケーラブル"
            ]
        },
        gamingContent: {
            title: "星間チェーンゲーム",
            desc: "資産がプレイヤーによって真に所有され、ゲーム間で取引可能なブロックチェーンベースのゲームのメタバース。",
            points: [
                "NFTベースのゲーム資産",
                "プレイトゥアーンメカニクス",
                "ゲーム間資産相互運用性"
            ]
        },
        connectWalletFirst: 'まずウォレットを接続してください！',
        insufficientBalance: 'エアドロップ手数料のBNB残高が不足しています！',
        airdropSuccess: 'エアドロップの請求に成功しました！10,000 PLANETトークンがウォレットに送信されました。',
        airdropError: 'エアドロップ請求エラー: ',
        rewardsSuccess: '報酬の請求に成功しました！',
        rewardsError: '報酬請求エラー: ',
        formSuccess: 'メッセージを送信しました！すぐにご連絡いたします。',
        formError: 'すべてのフィールドに入力してください！',
        copied: 'コピーしました！',
        referralDetected: 'あなたは {address} から紹介されました',
        connectWalletError: '接続するにはMetaMaskまたは他のWeb3ウォレットをインストールしてください！',
        cooldownActive: 'エアドロップのクールダウン中です。再度請求する前に{time}お待ちください。',
        emailSuccess: 'メッセージが正常に送信されました！',
        nextClaimTime: '次回請求可能まで: {time}',
        referralLinkText: 'あなたの紹介リンク',
        referralShareText: 'このリンクを共有して、1世代目から10%、2世代目から5%のエアドロップを獲得しましょう'
    },
    ko: {
        connectWallet: "지갑 연결",
        airdrop: "에어드랍",
        rewards: "초대 보상",
        ecosystem: "생태계",
        contact: "문의하기",
        heroTitle: "성간 Web3 우주 탐험",
        heroSubtitle: "PLANET 생태계에 참여하여 탈중앙화 미래의 일부가 되세요",
        exploreBtn: "탐험 시작",
        airdropTitle: "PLANET 에어드랍",
        airdropText: "0.0015 BNB를 지불하고 10,000 PLANET 토큰을 받으세요",
        claimAirdrop: "에어드랍 받기",
        rewardsTitle: "초대 보상",
        rewardsText1: "1세대: 각 에어드랍 금액의 10%",
        rewardsText2: "2세대: 각 에어드랍 금액의 5%",
        rewardsText3: "초대한 사용자가 에어드랍을 성공적으로 받으면 보상이 발생합니다.",
        rewardsText4: "보상은 언제든지 받을 수 있습니다.",
        rewardsBalance: "보상 잔액:",
        claimRewards: "보상 받기",
        contactTitle: "문의하기",
        sendMessage: "메시지 보내기",
        emailText: "또는 이메일로 직접 문의:",
        crossChain: "크로스체인 상호운용성",
        governance: "성간 거버넌스",
        transactions: "광속 거래",
        gaming: "성간 체인 게임",
        crossChainContent: {
            title: "크로스체인 상호운용성",
            desc: "우리의 크로스체인 기술은 서로 다른 블록체인 간의 원활한 자산 및 데이터 전송을 가능하게 하여 진정으로 상호 연결된 Web3 우주를 만듭니다。",
            points: [
                "이더리움, BSC, 폴리곤 등 간의 자산 브리지",
                "탈중앙화 크로스체인 통신 프로토콜",
                "안전하고 신뢰할 필요 없는 상호운용성"
            ]
        },
        governanceContent: {
            title: "성간 거버넌스",
            desc: "PLANET 보유자가 생태계 개발 및 결정에 투표할 수 있는 탈중앙화 거버넌스 시스템.",
            points: [
                "PLANET 토큰을 사용한 온체인 투표",
                "제안 제출 및 토론 플랫폼",
                "투명하고 변조 방지된 거버넌스 기록"
            ]
        },
        transactionsContent: {
            title: "광속 거래",
            desc: "우리의 독점적인 합의 알고리즘은 최소한의 수수료로 거의 즉시 거래 최종성을 가능하게 합니다.",
            points: [
                "1초 미만의 거래 확인",
                "마이크로 수수료 구조",
                "수백만 TPS로 확장 가능"
            ]
        },
        gamingContent: {
            title: "성간 체인 게임",
            desc: "자산이 플레이어가 진정으로 소유하고 게임 간에 거래할 수 있는 블록체인 기반 게임의 메타버스.",
            points: [
                "NFT 기반 게임 자산",
                "플레이 투 언 메커니즘",
                "게임 간 자산 상호운용성"
            ]
        },
        connectWalletFirst: '먼저 지갑을 연결해 주세요!',
        insufficientBalance: '에어드랍 수수료에 대한 BNB 잔액이 부족합니다!',
        airdropSuccess: '에어드랍을 성공적으로 받았습니다! 10,000 PLANET 토큰이 지갑으로 전송되었습니다.',
        airdropError: '에어드랍 받기 오류: ',
        rewardsSuccess: '보상을 성공적으로 받았습니다!',
        rewardsError: '보상 받기 오류: ',
        formSuccess: '메시지를 보내 주셔서 감사합니다! 곧 연락드리겠습니다.',
        formError: '모든 필드를 채워 주세요!',
        copied: '복사되었습니다!',
        referralDetected: '{address} 님에게서 추천을 받았습니다',
        connectWalletError: '연결하려면 MetaMask 또는 다른 Web3 지갑을 설치하세요!',
        cooldownActive: '에어드랍 쿨다운이 활성화되었습니다. 다시 받기 전에 {time} 기다려 주세요.',
        emailSuccess: '메시지가 성공적으로 전송되었습니다!',
        nextClaimTime: '다음 요청 가능 시간: {time}',
        referralLinkText: '추천 링크',
        referralShareText: '이 링크를 공유하여 1세대에서 10%, 2세대에서 5%의 에어드랍을 획득하세요'
    },
    zh: {
        connectWallet: "连接钱包",
        airdrop: "领取空投",
        rewards: "邀请奖励",
        ecosystem: "社区生态",
        contact: "联系我们",
        heroTitle: "探索星际Web3宇宙",
        heroSubtitle: "加入PLANET生态系统，成为去中心化未来的一部分",
        exploreBtn: "开始探索",
        airdropTitle: "PLANET空投",
        airdropText: "支付0.0015 BNB可获得10,000枚PLANET代币",
        claimAirdrop: "领取空投",
        rewardsTitle: "邀请奖励",
        rewardsText1: "一代奖励: 每次空投额度的10%",
        rewardsText2: "二代奖励: 每次空投额度的5%",
        rewardsText3: "当被邀请人成功领取空投时，奖励才会触发。",
        rewardsText4: "您可以随时领取您的奖励。",
        rewardsBalance: "您的奖励余额:",
        claimRewards: "领取奖励",
        contactTitle: "联系我们",
        sendMessage: "发送消息",
        emailText: "或直接发送邮件至:",
        crossChain: "跨链互操作",
        governance: "星际治理",
        transactions: "光速交易",
        gaming: "星际链游",
        crossChainContent: {
            title: "跨链互操作",
            desc: "我们的跨链技术允许在不同区块链之间无缝传输资产和数据，创建一个真正互联的Web3宇宙。",
            points: [
                "在以太坊、BSC、Polygon等之间桥接资产",
                "去中心化的跨链通信协议",
                "安全且无需信任的互操作性"
            ]
        },
        governanceContent: {
            title: "星际治理",
            desc: "一个去中心化的治理系统，允许PLANET持有者对生态系统发展和决策进行投票。",
            points: [
                "使用PLANET代币进行链上投票",
                "提案提交和讨论平台",
                "透明且防篡改的治理记录"
            ]
        },
        transactionsContent: {
            title: "光速交易",
            desc: "我们专有的共识算法能够以最低费用实现近乎即时的交易最终性。",
            points: [
                "亚秒级交易确认",
                "微费用结构",
                "可扩展至数百万TPS"
            ]
        },
        gamingContent: {
            title: "星际链游",
            desc: "一个基于区块链的游戏元宇宙，其中资产真正由玩家拥有并可在游戏间交易。",
            points: [
                "基于NFT的游戏资产",
                "边玩边赚机制",
                "跨游戏资产互操作性"
            ]
        },
        connectWalletFirst: '请先连接您的钱包！',
        insufficientBalance: '空投费用BNB余额不足！',
        airdropSuccess: '成功领取空投！10,000枚PLANET代币已发送到您的钱包。',
        airdropError: '领取空投错误：',
        rewardsSuccess: '成功领取奖励！',
        rewardsError: '领取奖励错误：',
        formSuccess: '感谢您的留言！我们会尽快与您联系。',
        formError: '请填写所有字段！',
        copied: '已复制！',
        referralDetected: '您被{address}推荐',
        connectWalletError: '请安装MetaMask或其他Web3钱包进行连接！',
        cooldownActive: '空投冷却时间激活。请在{time}后再次领取。',
        emailSuccess: '您的消息已成功发送！',
        nextClaimTime: '下次可领取时间: {time}',
        referralLinkText: '您的推荐链接',
        referralShareText: '分享此链接可获得一级10%和二级5%的空投奖励'
    }
};

// 合约地址和ABI
const CONTRACT_ADDRESS = '0x1082a622c64f21bccb9885a469b0B84CbE4f2083';
const CONTRACT_ABI = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "AirdropClaimed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "user",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "RewardsClaimed",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "AIRDROP_FEE",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "referrer",
                "type": "address"
            }
        ],
        "name": "claimAirdrop",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "claimRewards",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "user",
                "type": "address"
            }
        ],
        "name": "getUserInfo",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "rewards",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "lastAirdropTime",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "canClaimAirdrop",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

let currentLanguage = 'en';
let currentWalletAddress = null;
let referralLink = '';
let contract;
let web3;
let cooldownInterval;
let nextClaimInterval;

// 自定义通知弹窗
function showAlert(title, message, isError = false) {
    const alert = document.getElementById('custom-alert');
    const alertTitle = document.getElementById('custom-alert-title');
    const alertMessage = document.getElementById('custom-alert-message');
    const alertConfirm = document.getElementById('custom-alert-confirm');
    
    if (!alert || !alertTitle || !alertMessage || !alertConfirm) return;
    
    alertTitle.textContent = title;
    alertMessage.textContent = message;
    alertConfirm.textContent = translations[currentLanguage].copied === 'Copied!' ? 'OK' : translations[currentLanguage].copied.replace('!', '');
    
    if (isError) {
        alertTitle.style.color = '#ff6b6b';
    } else {
        alertTitle.style.color = '#8f94fb';
    }
    
    alert.style.display = 'flex';
    
    // 关闭按钮事件
    document.getElementById('custom-alert-close').onclick = function() {
        alert.style.display = 'none';
    };
    
    // 确认按钮事件
    alertConfirm.onclick = function() {
        alert.style.display = 'none';
    };
    
    // 点击外部关闭
    alert.onclick = function(e) {
        if (e.target === alert) {
            alert.style.display = 'none';
        }
    };
}

// 初始化语言 - 增强TP钱包支持
function initLanguage() {
    // 尝试从本地存储获取语言设置
    try {
        const savedLanguage = localStorage.getItem('planetLanguage');
        if (savedLanguage && translations[savedLanguage]) {
            currentLanguage = savedLanguage;
        }
    } catch (e) {
        console.log('LocalStorage access denied, using default language');
    }
    
    // 检查URL参数中的语言设置
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const langParam = urlParams.get('lang');
        if (langParam && translations[langParam]) {
            currentLanguage = langParam;
            localStorage.setItem('planetLanguage', currentLanguage);
        }
    } catch (e) {
        console.log('Error checking language from URL params');
    }
    
    // TP钱包DApp浏览器特殊处理
    if (window.tp && window.tp.getAppConfig) {
        window.tp.getAppConfig().then(config => {
            const tpLang = config.language || 'en';
            const shortLang = tpLang.substring(0, 2);
            if (translations[shortLang]) {
                currentLanguage = shortLang;
                localStorage.setItem('planetLanguage', currentLanguage);
                updateLanguageUI();
            }
        }).catch(err => {
            console.log('Error getting TP wallet config:', err);
        });
    }
    
    // 设置语言选择器的值
    updateLanguageUI();
}

// 更新语言UI
function updateLanguageUI() {
    const languageSelect = document.getElementById('language-select');
    if (languageSelect) {
        languageSelect.value = currentLanguage;
    }
    updateLanguage();
}

// 更新页面语言
function updateLanguage() {
    const lang = translations[currentLanguage];
    if (!lang) return;
    
    // 更新导航
    const btnText = document.querySelector('.btn-text');
    if (btnText) btnText.textContent = lang.connectWallet;
    
    const elementsToUpdate = {
        '#airdrop-link': lang.airdrop,
        '#rewards-link': lang.rewards,
        '#ecosystem-link': lang.ecosystem,
        '#contact-link': lang.contact,
        '.hero-title': lang.heroTitle,
        '.hero-subtitle': lang.heroSubtitle,
        '#explore-btn': lang.exploreBtn,
        '#airdrop-modal h2': lang.airdropTitle,
        '#airdrop-modal p': lang.airdropText,
        '#claim-airdrop': lang.claimAirdrop,
        '#rewards-modal h2': lang.rewardsTitle,
        '#rewards-modal .rewards-balance h3': lang.rewardsBalance,
        '#claim-rewards': lang.claimRewards,
        '#contact-modal h2': lang.contactTitle,
        '#contact-modal button[type="submit"]': lang.sendMessage,
        '#contact-modal .email-contact p': `${lang.emailText} <span id="contact-email">explore.the.stars1@gmail.com</span>`,
        '#referral-section h3': lang.referralLinkText,
        '#referral-section p': lang.referralShareText
    };
    
    Object.entries(elementsToUpdate).forEach(([selector, text]) => {
        const element = document.querySelector(selector);
        if (element) {
            if (selector === '#contact-modal .email-contact p') {
                element.innerHTML = text;
            } else {
                element.textContent = text;
            }
        }
    });
    
    // 更新奖励信息
    const rewardsTexts = document.querySelectorAll('#rewards-modal .rewards-info p');
    if (rewardsTexts.length >= 4) {
        rewardsTexts[0].textContent = lang.rewardsText1;
        rewardsTexts[1].textContent = lang.rewardsText2;
        rewardsTexts[2].textContent = lang.rewardsText3;
        rewardsTexts[3].textContent = lang.rewardsText4;
    }
    
    // 更新生态系统标签
    const tabBtns = document.querySelectorAll('.ecosystem-tabs .tab-btn');
    if (tabBtns.length >= 4) {
        tabBtns[0].textContent = lang.crossChain;
        tabBtns[1].textContent = lang.governance;
        tabBtns[2].textContent = lang.transactions;
        tabBtns[3].textContent = lang.gaming;
    }
    
    // 更新生态系统内容
    updateEcosystemContent(lang);
    
    // 更新RTL支持
    const rtlLanguages = ['ar', 'he', 'fa'];
    document.body.setAttribute('dir', rtlLanguages.includes(currentLanguage) ? 'rtl' : 'ltr');
    
    // 通知TP钱包语言变化
    if (window.tp && window.tp.setLanguage) {
        window.tp.setLanguage(currentLanguage).catch(err => {
            console.log('Error setting TP wallet language:', err);
        });
    }
}

// 更新生态系统内容
function updateEcosystemContent(lang) {
    const tabs = {
        'cross-chain': lang.crossChainContent,
        'governance': lang.governanceContent,
        'transactions': lang.transactionsContent,
        'gaming': lang.gamingContent
    };

    Object.keys(tabs).forEach(tabId => {
        const tab = document.getElementById(tabId);
        if (tab) {
            const content = tabs[tabId];
            const title = tab.querySelector('h3');
            const desc = tab.querySelector('p');
            const points = tab.querySelectorAll('ul li');
            
            if (title) title.textContent = content.title;
            if (desc) desc.textContent = content.desc;
            
            content.points.forEach((point, index) => {
                if (points[index]) {
                    points[index].textContent = point;
                }
            });
        }
    });
}

// 改进的语言切换事件处理 - 针对TP钱包优化
function initLanguageSwitcher() {
    const languageSelect = document.getElementById('language-select');
    if (!languageSelect) return;
    
    // 设置当前语言
    languageSelect.value = currentLanguage;
    
    // 语言变更处理函数
    function handleLanguageChange(newLanguage) {
        if (translations[newLanguage] && newLanguage !== currentLanguage) {
            currentLanguage = newLanguage;
            
            try {
                localStorage.setItem('planetLanguage', currentLanguage);
            } catch (e) {
                console.log('Failed to save language preference to localStorage');
            }
            
            updateLanguage();
            
            // TP钱包特殊处理
            if (window.tp && window.tp.setLanguage) {
                window.tp.setLanguage(currentLanguage).then(() => {
                    console.log('TP wallet language set to:', currentLanguage);
                }).catch(err => {
                    console.log('Error setting TP wallet language:', err);
                });
            }
        }
    }
    
    // 基础change事件
    languageSelect.addEventListener('change', function() {
        handleLanguageChange(this.value);
    });
    
    // TP钱包特殊处理
    if (window.tp) {
        // 监听TP钱包语言变化
        window.addEventListener('tp-language-change', function(e) {
            try {
                const lang = e.detail?.language || e.detail?.lang;
                if (lang && translations[lang]) {
                    currentLanguage = lang;
                    languageSelect.value = currentLanguage;
                    updateLanguage();
                }
            } catch (error) {
                console.error('Error processing TP language change:', error);
            }
        });
    }
}

// 初始化粒子背景
function initParticles() {
    if (typeof particlesJS !== 'function') return;
    
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#ffffff"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000"
                },
                polygon: {
                    nb_sides: 5
                }
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#4e54c8",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "grab"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    });
}

// 初始化Web3和合约
async function initWeb3() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            web3 = new Web3(window.ethereum);
            contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
            
            // 检查合约是否可用
            try {
                await contract.methods.AIRDROP_FEE().call();
                console.log('Contract initialized successfully');
            } catch (error) {
                console.error('Contract initialization error:', error);
                showAlert(
                    translations[currentLanguage].connectWalletError.split(':')[0],
                    translations[currentLanguage].connectWalletError,
                    true
                );
                return;
            }
            
            // 请求账户访问
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            currentWalletAddress = accounts[0];
            updateWalletButton();
            generateReferralLink(currentWalletAddress);
            checkReferral();
            updateUserInfo();
        } catch (error) {
            console.error('User rejected request:', error);
        }
    } else {
        console.log('Please install MetaMask or another Web3 wallet to connect!');
    }
}

// 钱包连接功能
function initWallet() {
    const connectBtn = document.getElementById('connect-wallet');
    if (!connectBtn) return;
    
    connectBtn.addEventListener('click', async () => {
        if (typeof window.ethereum !== 'undefined') {
            try {
                // 请求账户访问
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                currentWalletAddress = accounts[0];
                
                // 更新按钮显示
                updateWalletButton();
                
                // 生成推广链接
                generateReferralLink(currentWalletAddress);
                
                // 检查URL中的推荐参数
                checkReferral();
                
                // 更新用户信息
                updateUserInfo();
                
            } catch (error) {
                console.error('User rejected request:', error);
                showAlert(
                    translations[currentLanguage].connectWalletError.split(':')[0],
                    translations[currentLanguage].connectWalletError,
                    true
                );
            }
        } else {
            showAlert(
                translations[currentLanguage].connectWalletError.split(':')[0],
                translations[currentLanguage].connectWalletError,
                true
            );
        }
    });
    
    // 监听账户变化
    if (typeof window.ethereum !== 'undefined') {
        window.ethereum.on('accountsChanged', (accounts) => {
            if (accounts.length === 0) {
                // 用户断开连接
                currentWalletAddress = null;
                connectBtn.innerHTML = '<i class="fas fa-wallet"></i> <span class="btn-text">' + translations[currentLanguage].connectWallet + '</span>';
            } else {
                // 账户变化
                currentWalletAddress = accounts[0];
                updateWalletButton();
                
                // 生成新的推广链接
                generateReferralLink(currentWalletAddress);
                
                // 检查新的推荐关系
                checkReferral();
                
                // 更新用户信息
                updateUserInfo();
            }
        });
    }
}

// 更新钱包按钮显示
function updateWalletButton() {
    const connectBtn = document.getElementById('connect-wallet');
    if (!connectBtn || !currentWalletAddress) return;
    
    const shortenedAddress = `${currentWalletAddress.substring(0, 6)}...${currentWalletAddress.substring(currentWalletAddress.length - 4)}`;
    connectBtn.innerHTML = `<i class="fas fa-wallet"></i> ${shortenedAddress}`;
}

// 生成推广链接
function generateReferralLink(walletAddress) {
    if (!walletAddress) return;
    
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set('ref', walletAddress);
    referralLink = currentUrl.toString();
    
    // 显示推广链接部分
    const referralSection = document.getElementById('referral-section');
    if (referralSection) {
        referralSection.style.display = 'block';
        const referralInput = document.getElementById('referral-link');
        if (referralInput) referralInput.value = referralLink;
    }
}

// 检查URL中的推荐参数
function checkReferral() {
    const urlParams = new URLSearchParams(window.location.search);
    const referrer = urlParams.get('ref');
    
    if (referrer && currentWalletAddress && referrer.toLowerCase() !== currentWalletAddress.toLowerCase()) {
        console.log('Referral detected:', referrer);
        
        const shortRef = `${referrer.substring(0, 6)}...${referrer.substring(referrer.length - 4)}`;
        showAlert(
            translations[currentLanguage].referralDetected.split(':')[0],
            translations[currentLanguage].referralDetected.replace('{address}', shortRef)
        );
    }
}

// 初始化复制推广链接功能
function initCopyReferral() {
    const copyBtn = document.getElementById('copy-referral');
    if (!copyBtn) return;
    
    copyBtn.addEventListener('click', () => {
        const referralInput = document.getElementById('referral-link');
        if (!referralInput) return;
        
        referralInput.select();
        document.execCommand('copy');
        
        // 显示复制成功提示
        const originalText = copyBtn.textContent;
        copyBtn.textContent = translations[currentLanguage].copied;
        
        // 3秒后恢复原始文本
        setTimeout(() => {
            copyBtn.textContent = originalText;
        }, 3000);
    });
}

// 更新用户信息
async function updateUserInfo() {
    if (!currentWalletAddress || !contract) return;
    
    try {
        // 检查合约是否已初始化
        if (!contract.methods.getUserInfo) {
            console.error('Contract method getUserInfo not found');
            return;
        }
        
        const userInfo = await contract.methods.getUserInfo(currentWalletAddress).call();
        
        // 更新奖励余额显示
        const rewardsElement = document.getElementById('rewards-amount');
        if (rewardsElement) {
            rewardsElement.textContent = `${web3.utils.fromWei(userInfo.rewards.toString(), 'ether')} PLANET`;
        }
        
        // 更新冷却时间显示
        updateCooldownTimer(userInfo.lastAirdropTime);
        
        // 更新下次领取时间显示
        updateNextClaimTimer(userInfo.lastAirdropTime);
        
    } catch (error) {
        console.error('Error fetching user info:', error);
        showAlert(
            translations[currentLanguage].airdropError.split(':')[0],
            translations[currentLanguage].airdropError + error.message,
            true
        );
    }
}

// 更新冷却时间计时器
function updateCooldownTimer(lastAirdropTime) {
    const cooldownTimer = document.getElementById('cooldown-timer');
    if (!cooldownTimer) return;
    
    // 清除现有计时器
    if (cooldownInterval) {
        clearInterval(cooldownInterval);
    }
    
    // 如果没有上次领取时间，隐藏计时器
    if (!lastAirdropTime || lastAirdropTime === '0') {
        cooldownTimer.style.display = 'none';
        return;
    }
    
    // 显示计时器
    cooldownTimer.style.display = 'block';
    
    // 计算冷却时间剩余
    function updateTimer() {
        const now = Math.floor(Date.now() / 1000);
        const lastTime = parseInt(lastAirdropTime);
        const cooldown = 12 * 60 * 60; // 12小时冷却时间
        const remaining = lastTime + cooldown - now;
        
        if (remaining <= 0) {
            cooldownTimer.style.display = 'none';
            clearInterval(cooldownInterval);
            return;
        }
        
        const hours = Math.floor(remaining / 3600);
        const minutes = Math.floor((remaining % 3600) / 60);
        const seconds = remaining % 60;
        
        cooldownTimer.textContent = translations[currentLanguage].cooldownActive
            .replace('{time}', `${hours}h ${minutes}m ${seconds}s`);
    }
    
    // 立即更新一次
    updateTimer();
    
    // 设置定时器每秒更新
    cooldownInterval = setInterval(updateTimer, 1000);
}

// 更新下次领取时间计时器
function updateNextClaimTimer(lastAirdropTime) {
    const nextClaimTimer = document.getElementById('next-claim-timer');
    if (!nextClaimTimer) return;
    
    // 清除现有计时器
    if (nextClaimInterval) {
        clearInterval(nextClaimInterval);
    }
    
    // 如果没有上次领取时间，隐藏计时器
    if (!lastAirdropTime || lastAirdropTime === '0') {
        nextClaimTimer.style.display = 'none';
        return;
    }
    
    // 显示计时器
    nextClaimTimer.style.display = 'block';
    
    // 计算下次领取时间
    function updateTimer() {
        const now = Math.floor(Date.now() / 1000);
        const lastTime = parseInt(lastAirdropTime);
        const cooldown = 12 * 60 * 60; // 12小时冷却时间
        const remaining = lastTime + cooldown - now;
        
        if (remaining <= 0) {
            nextClaimTimer.style.display = 'none';
            clearInterval(nextClaimInterval);
            return;
        }
        
        const hours = Math.floor(remaining / 3600);
        const minutes = Math.floor((remaining % 3600) / 60);
        const seconds = remaining % 60;
        
        nextClaimTimer.textContent = translations[currentLanguage].nextClaimTime
            .replace('{time}', `${hours}h ${minutes}m ${seconds}s`);
    }
    
    // 立即更新一次
    updateTimer();
    
    // 设置定时器每秒更新
    nextClaimInterval = setInterval(updateTimer, 1000);
}

// 空投功能 - 修复了错误处理
function initAirdrop() {
    const claimBtn = document.getElementById('claim-airdrop');
    if (!claimBtn) return;
    
    claimBtn.addEventListener('click', async () => {
        if (typeof window.ethereum === 'undefined') {
            showAlert(
                translations[currentLanguage].connectWalletFirst.split(':')[0],
                translations[currentLanguage].connectWalletFirst,
                true
            );
            return;
        }
        
        try {
            const accounts = await window.ethereum.request({ method: 'eth_accounts' });
            if (accounts.length === 0) {
                showAlert(
                    translations[currentLanguage].connectWalletFirst.split(':')[0],
                    translations[currentLanguage].connectWalletFirst,
                    true
                );
                return;
            }
            
            const recipient = accounts[0];
            
            // 检查合约是否已初始化
            if (!contract || !contract.methods.getUserInfo) {
                throw new Error('Contract not initialized properly');
            }
            
            // 检查用户是否可以领取空投
            const userInfo = await contract.methods.getUserInfo(recipient).call();
            if (!userInfo.canClaimAirdrop) {
                const lastTime = parseInt(userInfo.lastAirdropTime);
                const now = Math.floor(Date.now() / 1000);
                const cooldown = 12 * 60 * 60; // 12小时冷却时间
                const remaining = lastTime + cooldown - now;
                
                if (remaining > 0) {
                    const hours = Math.floor(remaining / 3600);
                    const minutes = Math.floor((remaining % 3600) / 60);
                    const seconds = remaining % 60;
                    
                    showAlert(
                        translations[currentLanguage].cooldownActive.split(':')[0],
                        translations[currentLanguage].cooldownActive
                            .replace('{time}', `${hours}h ${minutes}m ${seconds}s`),
                        true
                    );
                    return;
                }
            }
            
            // 检查BNB余额是否足够
            const balance = await web3.eth.getBalance(recipient);
            const requiredAmount = await contract.methods.AIRDROP_FEE().call();
            
            if (Number(balance) < Number(requiredAmount)) {
                showAlert(
                    translations[currentLanguage].insufficientBalance.split(':')[0],
                    translations[currentLanguage].insufficientBalance,
                    true
                );
                return;
            }
            
            // 获取推荐人地址
            const urlParams = new URLSearchParams(window.location.search);
            const referrer = urlParams.get('ref');
            
            // 发送空投交易
            await contract.methods.claimAirdrop(referrer || '0x0000000000000000000000000000000000000000')
                .send({
                    from: recipient,
                    value: requiredAmount
                });
            
            showAlert(
                translations[currentLanguage].airdropSuccess.split(':')[0],
                translations[currentLanguage].airdropSuccess
            );
            
            // 更新用户信息
            updateUserInfo();
            
        } catch (error) {
            console.error('Airdrop error:', error);
            
            let errorMessage = translations[currentLanguage].airdropError + error.message;
            
            // 检查特定错误类型
            if (error.message.includes('revert')) {
                if (error.message.includes('Cooldown period not over')) {
                    errorMessage = translations[currentLanguage].cooldownActive
                        .replace('{time}', '12 hours');
                } else if (error.message.includes('Insufficient BNB')) {
                    errorMessage = translations[currentLanguage].insufficientBalance;
                } else if (error.message.includes('empty reader set')) {
                    errorMessage = translations[currentLanguage].airdropError + 'Transaction failed. Please try again later.';
                }
            }
            
            showAlert(
                translations[currentLanguage].airdropError.split(':')[0],
                errorMessage,
                true
            );
        }
    });
}

// 奖励领取功能
function initRewards() {
    const claimBtn = document.getElementById('claim-rewards');
    if (!claimBtn) return;
    
    claimBtn.addEventListener('click', async () => {
        if (typeof window.ethereum === 'undefined') {
            showAlert(
                translations[currentLanguage].connectWalletFirst.split(':')[0],
                translations[currentLanguage].connectWalletFirst,
                true
            );
            return;
        }
        
        try {
            const accounts = await window.ethereum.request({ method: 'eth_accounts' });
            if (accounts.length === 0) {
                showAlert(
                    translations[currentLanguage].connectWalletFirst.split(':')[0],
                    translations[currentLanguage].connectWalletFirst,
                    true
                );
                return;
            }
            
            const recipient = accounts[0];
            
            // 检查合约是否已初始化
            if (!contract || !contract.methods.claimRewards) {
                throw new Error('Contract not initialized properly');
            }
            
            // 发送领取奖励交易
            await contract.methods.claimRewards().send({
                from: recipient
            });
            
            showAlert(
                translations[currentLanguage].rewardsSuccess.split(':')[0],
                translations[currentLanguage].rewardsSuccess
            );
            
            // 更新用户信息
            updateUserInfo();
            
        } catch (error) {
            console.error('Claim rewards error:', error);
            showAlert(
                translations[currentLanguage].rewardsError.split(':')[0],
                translations[currentLanguage].rewardsError + error.message,
                true
            );
        }
    });
}

// 移动菜单功能
function initMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    if (!mobileMenu || !navMenu) return;
    
    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    
    // 点击菜单项后关闭菜单
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

// 联系表单功能
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        
        if (!name || !email || !message) return;
        
        const nameValue = name.value.trim();
        const emailValue = email.value.trim();
        const messageValue = message.value.trim();
        
        if (!nameValue || !emailValue || !messageValue) {
            showAlert(
                translations[currentLanguage].formError.split(':')[0],
                translations[currentLanguage].formError,
                true
            );
            return;
        }
        
        try {
            console.log('Form submitted:', { name: nameValue, email: emailValue, message: messageValue });
            
            const response = await fetch('https://formspree.io/f/explore.the.stars1@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: nameValue,
                    email: emailValue,
                    message: messageValue,
                    _language: currentLanguage
                }),
            });
            
            if (response.ok) {
                showAlert(
                    translations[currentLanguage].emailSuccess.split(':')[0],
                    translations[currentLanguage].emailSuccess
                );
                
                contactForm.reset();
            } else {
                throw new Error('Failed to send email');
            }
            
        } catch (error) {
            console.error('Form submission error:', error);
            showAlert(
                translations[currentLanguage].formError.split(':')[0],
                translations[currentLanguage].formError,
                true
            );
        }
    });
}

// 模态框功能
function initModals() {
    const modals = {
        'airdrop-link': 'airdrop-modal',
        'rewards-link': 'rewards-modal',
        'ecosystem-link': 'ecosystem-modal',
        'contact-link': 'contact-modal'
    };
    
    Object.keys(modals).forEach(linkId => {
        const trigger = document.getElementById(linkId);
        const modal = document.getElementById(modals[linkId]);
        
        if (trigger && modal) {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                
                if (modals[linkId] === 'rewards-modal') {
                    updateUserInfo();
                }
            });
            
            const closeBtn = modal.querySelector('.close');
            if (closeBtn) {
                closeBtn.addEventListener('click', () => {
                    modal.style.display = 'none';
                    document.body.style.overflow = '';
                });
            }
        }
    });
    
    window.addEventListener('click', (e) => {
        document.querySelectorAll('.modal').forEach(modal => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    });
    
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            
            tabBtns.forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            btn.classList.add('active');
            const tabContent = document.getElementById(tabId);
            if (tabContent) {
                tabContent.classList.add('active');
            }
        });
    });
}

// 探索按钮功能
function initExploreButton() {
    const exploreBtn = document.getElementById('explore-btn');
    if (!exploreBtn) return;
    
    exploreBtn.addEventListener('click', () => {
        const ecosystemLink = document.getElementById('ecosystem-link');
        if (ecosystemLink) {
            ecosystemLink.click();
        }
    });
}

// 页面加载完成后初始化所有功能
document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initLanguageSwitcher();
    initParticles();
    initWeb3();
    initWallet();
    initCopyReferral();
    initAirdrop();
    initRewards();
    initMobileMenu();
    initContactForm();
    initModals();
    initExploreButton();
    
    const rtlLanguages = ['ar', 'he', 'fa'];
    document.body.setAttribute('dir', rtlLanguages.includes(currentLanguage) ? 'rtl' : 'ltr');
});