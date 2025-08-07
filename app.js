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
        }
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
        }
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
        }
    },
    es: {
        connectWallet: "Conectar Billetera",
        airdrop: "Airdrop",
        rewards: "Recompensas por Invitación",
        ecosystem: "Ecosistema",
        contact: "Contáctenos",
        heroTitle: "Explora el Universo Web3 Interestelar",
        heroSubtitle: "Únete al ecosistema PLANET y sé parte del futuro descentralizado",
        exploreBtn: "Comenzar Exploración",
        airdropTitle: "Airdrop PLANET",
        airdropText: "Paga 0.0015 BNB para recibir 10,000 tokens PLANET",
        claimAirdrop: "Reclamar Airdrop",
        rewardsTitle: "Recompensas por Invitación",
        rewardsText1: "1ra Generación: 10% de cada cantidad de airdrop",
        rewardsText2: "2da Generación: 5% de cada cantidad de airdrop",
        rewardsText3: "Las recompensas se activan cuando el usuario invitado reclama el airdrop con éxito.",
        rewardsText4: "Puedes reclamar tus recompensas en cualquier momento.",
        rewardsBalance: "Saldo de Recompensas:",
        claimRewards: "Reclamar Recompensas",
        contactTitle: "Contáctenos",
        sendMessage: "Enviar Mensaje",
        emailText: "O envíenos un correo electrónico directamente a:",
        crossChain: "Interoperabilidad entre Cadenas",
        governance: "Gobernanza Interestelar",
        transactions: "Transacciones a Velocidad de la Luz",
        gaming: "Juegos de Cadena Interestelares",
        crossChainContent: {
            title: "Interoperabilidad entre Cadenas",
            desc: "Nuestra tecnología entre cadenas permite la transferencia perfecta de activos y datos entre diferentes blockchains, creando un universo Web3 verdaderamente interconectado.",
            points: [
                "Puente de activos entre Ethereum, BSC, Polygon y más",
                "Protocolo de comunicación entre cadenas descentralizado",
                "Interoperabilidad segura y sin confianza"
            ]
        },
        governanceContent: {
            title: "Gobernanza Interestelar",
            desc: "Un sistema de gobernanza descentralizado que permite a los titulares de PLANET votar sobre el desarrollo y las decisiones del ecosistema.",
            points: [
                "Votación en cadena con tokens PLANET",
                "Plataforma de presentación y discusión de propuestas",
                "Registros de gobernanza transparentes e inalterables"
            ]
        },
        transactionsContent: {
            title: "Transacciones a Velocidad de la Luz",
            desc: "Nuestro algoritmo de consenso patentado permite una finalización de transacciones casi instantánea con tarifas mínimas.",
            points: [
                "Confirmación de transacciones en menos de un segundo",
                "Estructura de microtarifas",
                "Escalable a millones de TPS"
            ]
        },
        gamingContent: {
            title: "Juegos de Cadena Interestelares",
            desc: "Un metaverso de juegos basados en blockchain donde los activos son verdaderamente propiedad de los jugadores y pueden intercambiarse entre juegos.",
            points: [
                "Activos de juego basados en NFT",
                "Mecánicas de jugar para ganar",
                "Interoperabilidad de activos entre juegos"
            ]
        }
    },
    fr: {
        connectWallet: "Connecter le Portefeuille",
        airdrop: "Airdrop",
        rewards: "Récompenses d'Invitation",
        ecosystem: "Écosystème",
        contact: "Nous Contacter",
        heroTitle: "Explorez l'Univers Web3 Interstellaire",
        heroSubtitle: "Rejoignez l'écosystème PLANET et faites partie de l'avenir décentralisé",
        exploreBtn: "Commencer l'Exploration",
        airdropTitle: "Airdrop PLANET",
        airdropText: "Payez 0.0015 BNB pour recevoir 10 000 jetons PLANET",
        claimAirdrop: "Réclamer l'Airdrop",
        rewardsTitle: "Récompenses d'Invitation",
        rewardsText1: "1ère Génération: 10% de chaque montant d'airdrop",
        rewardsText2: "2ème Génération: 5% de chaque montant d'airdrop",
        rewardsText3: "Les récompensas sont déclenchées lorsque l'utilisateur invité réclame l'airdrop avec succès.",
        rewardsText4: "Vous pouvez réclamer vos récompensas à tout moment.",
        rewardsBalance: "Votre Solde de Récompensas:",
        claimRewards: "Réclamer les Récompenses",
        contactTitle: "Nous Contacter",
        sendMessage: "Envoyer un Message",
        emailText: "Ou envoyez-nous directement un email à:",
        crossChain: "Interopérabilité Multi-Chaîne",
        governance: "Gouvernance Interstellaire",
        transactions: "Transactions à la Vitesse de la Lumière",
        gaming: "Jeux sur Chaîne Interstellaires",
        crossChainContent: {
            title: "Interopérabilité Multi-Chaîne",
            desc: "Notre technologie inter-chaînes permet un transfert transparent d'actifs et de données entre différentes blockchains, créant un univers Web3 véritablement interconnecté.",
            points: [
                "Pont d'actifs entre Ethereum, BSC, Polygon et plus",
                "Protocole de communication inter-chaînes décentralisé",
                "Interopérabilité sécurisée et sans confiance"
            ]
        },
        governanceContent: {
            title: "Gouvernance Interstellaire",
            desc: "Un système de gouvernance décentralisé qui permet aux détenteurs de PLANET de voter sur le développement et les décisions de l'écosystème.",
            points: [
                "Vote sur chaîne avec des jetons PLANET",
                "Plataforma de soumission et de discussion de propositions",
                "Enregistrements de gouvernance transparents et inviolables"
            ]
        },
        transactionsContent: {
            title: "Transactions à la Vitesse de la Lumière",
            desc: "Notre algorithme de consensus propriétaire permet une finalité de transaction quasi instantanée avec des frais minimes.",
            points: [
                "Confirmation de transaction en moins d'une seconde",
                "Structure de micro-frais",
                "Évolutif à des millions de TPS"
            ]
        },
        gamingContent: {
            title: "Jeux sur Chaîne Interstellaires",
            desc: "Un métaverse de jeux basés sur la blockchain où les actifs sont véritablement possédés par les joueurs et peuvent être échangés entre les jeux.",
            points: [
                "Actifs de jeu basés sur NFT",
                "Mécaniques de jeu pour gagner",
                "Interopérabilité des actifs entre les jeux"
            ]
        }
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
        }
    }
};

let currentLanguage = 'en';
let currentWalletAddress = null;
let referralLink = '';

// 初始化语言 - 优化版本
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
    
    // 新增: 检查URL参数中的语言设置（支持通过URL直接指定语言）
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const langParam = urlParams.get('lang');
        if (langParam && translations[langParam]) {
            currentLanguage = langParam;
            // 同时保存到本地存储
            localStorage.setItem('planetLanguage', currentLanguage);
        }
    } catch (e) {
        console.log('Error checking language from URL params');
    }
    
    // 设置语言选择器的值
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
        '#contact-modal .email-contact p': `${lang.emailText} <span id="contact-email">[您的邮箱地址]</span>`
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

// 改进的语言切换事件处理 - 针对DAPP浏览器优化
function initLanguageSwitcher() {
    const languageSelect = document.getElementById('language-select');
    if (!languageSelect) return;
    
    // 设置当前语言
    languageSelect.value = currentLanguage;
    
    // 新增: 强制触发一次渲染，确保初始状态正确
    setTimeout(() => {
        languageSelect.value = currentLanguage;
    }, 100);
    
    // 语言变更处理函数
    function handleLanguageChange(newLanguage) {
        if (translations[newLanguage] && newLanguage !== currentLanguage) {
            currentLanguage = newLanguage;
            
            // 尝试保存到本地存储
            try {
                localStorage.setItem('planetLanguage', currentLanguage);
            } catch (e) {
                console.log('Failed to save language preference to localStorage');
            }
            
            // 立即更新UI
            updateLanguage();
            
            // 新增: 强制更新选择器显示
            languageSelect.value = currentLanguage;
            
            // 针对DAPP浏览器的特殊处理
            if (window.ReactNativeWebView) {
                window.ReactNativeWebView.postMessage(JSON.stringify({
                    type: 'languageChange',
                    language: currentLanguage
                }));
            }
            
            // 新增: 针对不同钱包的特殊处理
            if (typeof window.ethereum !== 'undefined' && window.ethereum.isTrust) {
                console.log('Trust Wallet language updated to:', currentLanguage);
            }
        }
    }
    
    // 基础change事件
    languageSelect.addEventListener('change', function() {
        handleLanguageChange(this.value);
    });
    
    // 新增: 点击事件处理
    languageSelect.addEventListener('click', function(e) {
        e.stopPropagation();
        // 某些浏览器需要手动触发焦点
        this.focus();
    });
    
    // 增强: 移动端触摸事件
    languageSelect.addEventListener('touchend', function(e) {
        e.stopPropagation();
        // 直接使用当前值，应对某些浏览器的事件延迟
        handleLanguageChange(this.value);
    });
    
    // 新增: 键盘事件支持
    languageSelect.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.click();
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
            // 允许键盘导航后更新语言
            setTimeout(() => {
                handleLanguageChange(this.value);
            }, 100);
        }
    });
    
    // 新增: 失去焦点时检查
    languageSelect.addEventListener('blur', function() {
        handleLanguageChange(this.value);
    });
    
    // 防止冒泡到文档
    document.addEventListener('click', function(e) {
        if (!languageSelect.contains(e.target)) {
            languageSelect.blur();
        }
    });
    
    // 针对DAPP浏览器的消息监听
    if (window.ReactNativeWebView) {
        document.addEventListener('message', function(e) {
            try {
                const data = JSON.parse(e.data);
                if (data.type === 'languageChange') {
                    currentLanguage = data.language;
                    languageSelect.value = currentLanguage;
                    updateLanguage();
                }
            } catch (error) {
                console.error('Error processing message:', error);
            }
        });
    }
    
    // 新增: 针对TP钱包的特殊处理
    if (typeof window.tp !== 'undefined') {
        console.log('TP Wallet detected, enhancing language support');
        
        // 添加自定义事件监听器
        languageSelect.addEventListener('input', function() {
            handleLanguageChange(this.value);
        });
        
        // 添加触摸事件监听器
        languageSelect.addEventListener('touchstart', function(e) {
            e.stopPropagation();
            this.focus();
        });
        
        // 添加长按事件监听器
        languageSelect.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            this.focus();
        });
        
        // 添加选择变化监听
        languageSelect.addEventListener('select', function() {
            handleLanguageChange(this.value);
        });
        
        // 强制显示下拉箭头（通过样式）
        const style = document.createElement('style');
        style.textContent = `
            #language-select {
                appearance: auto !important;
                -webkit-appearance: auto !important;
                -moz-appearance: auto !important;
                padding-right: 25px !important;
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E") !important;
                background-repeat: no-repeat !important;
                background-position: right 5px center !important;
            }
        `;
        document.head.appendChild(style);
        
        // 添加TP钱包特定的语言切换处理
        window.addEventListener('tp-language-change', function(e) {
            try {
                if (translations[e.detail.language]) {
                    currentLanguage = e.detail.language;
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
                const shortenedAddress = `${currentWalletAddress.substring(0, 6)}...${currentWalletAddress.substring(currentWalletAddress.length - 4)}`;
                connectBtn.innerHTML = `<i class="fas fa-wallet"></i> ${shortenedAddress}`;
                
                // 生成推广链接
                generateReferralLink(currentWalletAddress);
                
                // 检查URL中的推荐参数
                checkReferral();
                
            } catch (error) {
                console.error('User rejected request:', error);
            }
        } else {
            alert(translations[currentLanguage].connectWalletError || 'Please install MetaMask or another Web3 wallet to connect!');
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
                const shortenedAddress = `${currentWalletAddress.substring(0, 6)}...${currentWalletAddress.substring(currentWalletAddress.length - 4)}`;
                connectBtn.innerHTML = `<i class="fas fa-wallet"></i> ${shortenedAddress}`;
                
                // 生成新的推广链接
                generateReferralLink(currentWalletAddress);
                
                // 检查新的推荐关系
                checkReferral();
            }
        });
    }
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
    
    if (referrer && currentWalletAddress) {
        // 如果有推荐参数且钱包已连接，可以在这里处理推荐逻辑
        console.log('Referral detected:', referrer);
        // 实际项目中，这里应该将推荐关系存储在智能合约或数据库中
        
        // 显示提示信息
        alert(translations[currentLanguage].referralDetected || `You were referred by ${referrer.substring(0, 6)}...${referrer.substring(referrer.length - 4)}`);
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
        copyBtn.textContent = translations[currentLanguage].copied || 'Copied!';
        
        // 3秒后恢复原始文本
        setTimeout(() => {
            copyBtn.textContent = originalText;
        }, 3000);
    });
}

// 空投功能
function initAirdrop() {
    const claimBtn = document.getElementById('claim-airdrop');
    if (!claimBtn) return;
    
    claimBtn.addEventListener('click', async () => {
        if (typeof window.ethereum === 'undefined') {
            alert(translations[currentLanguage].connectWalletFirst || 'Please connect your wallet first!');
            return;
        }
        
        try {
            const accounts = await window.ethereum.request({ method: 'eth_accounts' });
            if (accounts.length === 0) {
                alert(translations[currentLanguage].connectWalletFirst || 'Please connect your wallet first!');
                return;
            }
            
            const web3 = new Web3(window.ethereum);
            const recipient = accounts[0];
            
            // 检查BNB余额是否足够
            const balance = await web3.eth.getBalance(recipient);
            const requiredAmount = web3.utils.toWei('0.0015', 'ether');
            
            if (Number(balance) < Number(requiredAmount)) {
                alert(translations[currentLanguage].insufficientBalance || 'Insufficient BNB balance for the airdrop fee!');
                return;
            }
            
            // 这里应该是与您的智能合约交互的代码
            // 以下是示例代码，实际实现需要替换为您的合约ABI和地址
            
            /*
            const contractAddress = 'YOUR_CONTRACT_ADDRESS';
            const contractABI = [...]; // 您的合约ABI
            
            const contract = new web3.eth.Contract(contractABI, contractAddress);
            
            // 发送交易
            await contract.methods.claimAirdrop().send({
                from: recipient,
                value: requiredAmount
            });
            
            alert(translations[currentLanguage].airdropSuccess || 'Airdrop claimed successfully! 10,000 PLANET tokens have been sent to your wallet.');
            */
            
            // 临时模拟成功
            alert(translations[currentLanguage].airdropSuccess || 'Airdrop claimed successfully! 10,000 PLANET tokens have been sent to your wallet.');
            
        } catch (error) {
            console.error('Airdrop error:', error);
            alert((translations[currentLanguage].airdropError || 'Error claiming airdrop: ') + error.message);
        }
    });
}

// 奖励领取功能
function initRewards() {
    const claimBtn = document.getElementById('claim-rewards');
    if (!claimBtn) return;
    
    claimBtn.addEventListener('click', async () => {
        if (typeof window.ethereum === 'undefined') {
            alert(translations[currentLanguage].connectWalletFirst || 'Please connect your wallet first!');
            return;
        }
        
        try {
            const accounts = await window.ethereum.request({ method: 'eth_accounts' });
            if (accounts.length === 0) {
                alert(translations[currentLanguage].connectWalletFirst || 'Please connect your wallet first!');
                return;
            }
            
            const web3 = new Web3(window.ethereum);
            const recipient = accounts[0];
            
            // 这里应该是与您的智能合约交互的代码
            // 以下是示例代码，实际实现需要替换为您的合约ABI和地址
            
            /*
            const contractAddress = 'YOUR_REWARDS_CONTRACT_ADDRESS';
            const contractABI = [...]; // 您的奖励合约ABI
            
            const contract = new web3.eth.Contract(contractABI, contractAddress);
            
            // 发送交易
            await contract.methods.claimRewards().send({
                from: recipient
            });
            
            alert(translations[currentLanguage].rewardsSuccess || 'Rewards claimed successfully!');
            */
            
            // 临时模拟成功
            alert(translations[currentLanguage].rewardsSuccess || 'Rewards claimed successfully!');
            
        } catch (error) {
            console.error('Claim rewards error:', error);
            alert((translations[currentLanguage].rewardsError || 'Error claiming rewards: ') + error.message);
        }
    });
    
    // 模拟更新奖励余额（实际项目中应从合约获取）
    updateRewardsBalance();
}

// 更新奖励余额显示
function updateRewardsBalance() {
    // 这里应该是从智能合约获取用户奖励余额
    // 以下是模拟数据
    const rewardsAmount = "0"; // 替换为从合约获取的实际值
    const rewardsElement = document.getElementById('rewards-amount');
    if (rewardsElement) {
        rewardsElement.textContent = `${rewardsAmount} PLANET`;
    }
}

// 移动菜单功能
function initMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    if (!mobileMenu || !navMenu) return;
    
    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // 防止滚动穿透
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
        
        // 简单验证
        if (!nameValue || !emailValue || !messageValue) {
            alert(translations[currentLanguage].formError || 'Please fill in all fields!');
            return;
        }
        
        // 这里应该是将表单数据发送到后端或邮件服务的代码
        // 以下是模拟发送
        
        try {
            // 模拟API调用
            console.log('Form submitted:', { name: nameValue, email: emailValue, message: messageValue });
            
            // 显示成功消息
            alert(translations[currentLanguage].formSuccess || 'Thank you for your message! We will contact you soon.');
            
            // 重置表单
            contactForm.reset();
            
        } catch (error) {
            console.error('Form submission error:', error);
            alert(translations[currentLanguage].formError || 'There was an error sending your message. Please try again later.');
        }
    });
}

// 模态框功能
function initModals() {
    // 获取所有模态框和触发按钮
    const modals = {
        'airdrop-link': 'airdrop-modal',
        'rewards-link': 'rewards-modal',
        'ecosystem-link': 'ecosystem-modal',
        'contact-link': 'contact-modal'
    };
    
    // 为每个模态框添加打开/关闭逻辑
    Object.keys(modals).forEach(linkId => {
        const trigger = document.getElementById(linkId);
        const modal = document.getElementById(modals[linkId]);
        
        if (trigger && modal) {
            // 打开模态框
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
            
            // 关闭模态框
            const closeBtn = modal.querySelector('.close');
            if (closeBtn) {
                closeBtn.addEventListener('click', () => {
                    modal.style.display = 'none';
                    document.body.style.overflow = '';
                });
            }
        }
    });
    
    // 点击模态框外部关闭
    window.addEventListener('click', (e) => {
        document.querySelectorAll('.modal').forEach(modal => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    });
    
    // 生态系统标签切换
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            
            // 移除所有活动状态
            tabBtns.forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // 添加当前活动状态
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
        // 滚动到生态系统部分
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
    initWallet();
    initCopyReferral();
    initAirdrop();
    initRewards();
    initMobileMenu();
    initContactForm();
    initModals();
    initExploreButton();
    
    // 添加RTL语言检测
    const rtlLanguages = ['ar', 'he', 'fa'];
    document.body.setAttribute('dir', rtlLanguages.includes(currentLanguage) ? 'rtl' : 'ltr');
});

// 添加多语言错误消息
translations.en.connectWalletFirst = 'Please connect your wallet first!';
translations.en.insufficientBalance = 'Insufficient BNB balance for the airdrop fee!';
translations.en.airdropSuccess = 'Airdrop claimed successfully! 10,000 PLANET tokens have been sent to your wallet.';
translations.en.airdropError = 'Error claiming airdrop: ';
translations.en.rewardsSuccess = 'Rewards claimed successfully!';
translations.en.rewardsError = 'Error claiming rewards: ';
translations.en.formSuccess = 'Thank you for your message! We will contact you soon.';
translations.en.formError = 'Please fill in all fields!';
translations.en.copied = 'Copied!';
translations.en.referralDetected = 'You were referred by {address}';

// 为其他语言添加相同的错误消息
Object.keys(translations).forEach(lang => {
    if (lang !== 'en') {
        translations[lang].connectWalletFirst = translations[lang].connectWalletFirst || translations.en.connectWalletFirst;
        translations[lang].insufficientBalance = translations[lang].insufficientBalance || translations.en.insufficientBalance;
        translations[lang].airdropSuccess = translations[lang].airdropSuccess || translations.en.airdropSuccess;
        translations[lang].airdropError = translations[lang].airdropError || translations.en.airdropError;
        translations[lang].rewardsSuccess = translations[lang].rewardsSuccess || translations.en.rewardsSuccess;
        translations[lang].rewardsError = translations[lang].rewardsError || translations.en.rewardsError;
        translations[lang].formSuccess = translations[lang].formSuccess || translations.en.formSuccess;
        translations[lang].formError = translations[lang].formError || translations.en.formError;
        translations[lang].copied = translations[lang].copied || translations.en.copied;
        translations[lang].referralDetected = translations[lang].referralDetected || translations.en.referralDetected;
    }
});