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
        // 新增生态系统内容翻译
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
        // 新增生态系统内容翻译
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
                "マイクロ手数料構造",
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
        // 新增生态系统内容翻译
        crossChainContent: {
            title: "크로스체인 상호운용성",
            desc: "우리의 크로스체인 기술은 서로 다른 블록체인 간의 원활한 자산 및 데이터 전송을 가능하게 하여 진정으로 상호 연결된 Web3 우주를 만듭니다.",
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
        // 新增生态系统内容翻译
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
        // 新增生态系统内容翻译
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
                "Plateforme de soumission et de discussion de propositions",
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
        // 新增生态系统内容翻译
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

// 初始化语言
function initLanguage() {
    const savedLanguage = localStorage.getItem('planetLanguage');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
    }
    updateLanguage();
}

// 更新页面语言
function updateLanguage() {
    document.getElementById('language-select').value = currentLanguage;
    const lang = translations[currentLanguage];
    
    // 更新导航
    document.querySelector('.btn-text').textContent = lang.connectWallet;
    document.getElementById('airdrop-link').textContent = lang.airdrop;
    document.getElementById('rewards-link').textContent = lang.rewards;
    document.getElementById('ecosystem-link').textContent = lang.ecosystem;
    document.getElementById('contact-link').textContent = lang.contact;
    
    // 更新英雄区域
    document.querySelector('.hero-title').textContent = lang.heroTitle;
    document.querySelector('.hero-subtitle').textContent = lang.heroSubtitle;
    document.getElementById('explore-btn').textContent = lang.exploreBtn;
    
    // 更新模态框
    document.querySelector('#airdrop-modal h2').textContent = lang.airdropTitle;
    document.querySelector('#airdrop-modal p').textContent = lang.airdropText;
    document.getElementById('claim-airdrop').textContent = lang.claimAirdrop;
    
    document.querySelector('#rewards-modal h2').textContent = lang.rewardsTitle;
    const rewardsTexts = document.querySelectorAll('#rewards-modal .rewards-info p');
    rewardsTexts[0].textContent = lang.rewardsText1;
    rewardsTexts[1].textContent = lang.rewardsText2;
    rewardsTexts[2].textContent = lang.rewardsText3;
    rewardsTexts[3].textContent = lang.rewardsText4;
    document.querySelector('#rewards-modal .rewards-balance h3').textContent = lang.rewardsBalance;
    document.getElementById('claim-rewards').textContent = lang.claimRewards;
    
    document.querySelector('#contact-modal h2').textContent = lang.contactTitle;
    document.querySelector('#contact-modal button[type="submit"]').textContent = lang.sendMessage;
    document.querySelector('#contact-modal .email-contact p').innerHTML = `${lang.emailText} <span id="contact-email">[您的邮箱地址]</span>`;
    
    // 更新生态系统标签
    const tabBtns = document.querySelectorAll('.ecosystem-tabs .tab-btn');
    tabBtns[0].textContent = lang.crossChain;
    tabBtns[1].textContent = lang.governance;
    tabBtns[2].textContent = lang.transactions;
    tabBtns[3].textContent = lang.gaming;
    
    // 更新生态系统内容
    updateEcosystemContent(lang);
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
            tab.querySelector('h3').textContent = content.title;
            tab.querySelector('p').textContent = content.desc;
            
            const points = tab.querySelectorAll('ul li');
            content.points.forEach((point, index) => {
                if (points[index]) {
                    points[index].textContent = point;
                }
            });
        }
    });
}

// 语言切换事件
document.getElementById('language-select').addEventListener('change', function() {
    currentLanguage = this.value;
    localStorage.setItem('planetLanguage', currentLanguage);
    updateLanguage();
});

// 初始化粒子背景
function initParticles() {
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

// 模态框功能
function initModals() {
    // 获取所有模态框和触发按钮
    const modals = {
        airdrop: document.getElementById('airdrop-modal'),
        rewards: document.getElementById('rewards-modal'),
        ecosystem: document.getElementById('ecosystem-modal'),
        contact: document.getElementById('contact-modal')
    };
    
    const triggers = {
        airdrop: document.getElementById('airdrop-link'),
        rewards: document.getElementById('rewards-link'),
        ecosystem: document.getElementById('ecosystem-link'),
        contact: document.getElementById('contact-link'),
        explore: document.getElementById('explore-btn')
    };
    
    // 为每个触发按钮添加点击事件
    Object.keys(triggers).forEach(key => {
        triggers[key].addEventListener('click', (e) => {
            e.preventDefault();
            if (key === 'explore') {
                modals.airdrop.style.display = 'block';
            } else {
                modals[key].style.display = 'block';
            }
        });
    });
    
    // 为每个关闭按钮添加点击事件
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            document.querySelectorAll('.modal').forEach(modal => {
                modal.style.display = 'none';
            });
        });
    });
    
    // 点击模态框外部关闭
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            document.querySelectorAll('.modal').forEach(modal => {
                modal.style.display = 'none';
            });
        }
    });
    
    // 生态系统标签切换
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            
            // 移除所有active类
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // 添加active类到当前按钮和内容
            btn.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// 钱包连接功能
function initWallet() {
    const connectBtn = document.getElementById('connect-wallet');
    
    connectBtn.addEventListener('click', async () => {
        if (typeof window.ethereum !== 'undefined') {
            try {
                // 请求账户访问
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                const walletAddress = accounts[0];
                
                // 更新按钮显示
                const shortenedAddress = `${walletAddress.substring(0, 6)}...${walletAddress.substring(walletAddress.length - 4)}`;
                connectBtn.innerHTML = `<i class="fas fa-wallet"></i> ${shortenedAddress}`;
                
                // 可以在这里添加更多钱包连接后的逻辑
                console.log('Connected wallet:', walletAddress);
                
                // 检查推荐关系
                checkReferral();
                
            } catch (error) {
                console.error('User rejected request:', error);
            }
        } else {
            alert('Please install MetaMask or another Web3 wallet to connect!');
        }
    });
    
    // 监听账户变化
    if (typeof window.ethereum !== 'undefined') {
        window.ethereum.on('accountsChanged', (accounts) => {
            if (accounts.length === 0) {
                // 用户断开连接
                connectBtn.innerHTML = '<i class="fas fa-wallet"></i> <span class="btn-text">Connect Wallet</span>';
            } else {
                // 账户变化
                const shortenedAddress = `${accounts[0].substring(0, 6)}...${accounts[0].substring(accounts[0].length - 4)}`;
                connectBtn.innerHTML = `<i class="fas fa-wallet"></i> ${shortenedAddress}`;
                
                // 检查新的推荐关系
                checkReferral();
            }
        });
    }
}

// 检查URL中的推荐参数
function checkReferral() {
    const urlParams = new URLSearchParams(window.location.search);
    const referrer = urlParams.get('ref');
    
    if (referrer && typeof window.ethereum !== 'undefined') {
        // 如果有推荐参数且钱包已连接，可以在这里处理推荐逻辑
        console.log('Referral detected:', referrer);
        // 实际项目中，这里应该将推荐关系存储在智能合约或数据库中
    }
}

// 空投功能
function initAirdrop() {
    const claimBtn = document.getElementById('claim-airdrop');
    
    claimBtn.addEventListener('click', async () => {
        if (typeof window.ethereum === 'undefined') {
            alert('Please connect your wallet first!');
            return;
        }
        
        try {
            const accounts = await window.ethereum.request({ method: 'eth_accounts' });
            if (accounts.length === 0) {
                alert('Please connect your wallet first!');
                return;
            }
            
            const web3 = new Web3(window.ethereum);
            const recipient = accounts[0];
            
            // 这里应该是与您的智能合约交互的代码
            // 以下是示例代码，实际实现需要替换为您的合约ABI和地址
            
            /*
            const contractAddress = 'YOUR_CONTRACT_ADDRESS';
            const contractABI = [...]; // 您的合约ABI
            
            const contract = new web3.eth.Contract(contractABI, contractAddress);
            
            // 发送交易
            await contract.methods.claimAirdrop().send({
                from: recipient,
                value: web3.utils.toWei('0.0015', 'ether')
            });
            
            alert('Airdrop claimed successfully! 10,000 PLANET tokens have been sent to your wallet.');
            */
            
            // 临时模拟成功
            alert('Airdrop claimed successfully! 10,000 PLANET tokens have been sent to your wallet.');
            
        } catch (error) {
            console.error('Airdrop error:', error);
            alert('Error claiming airdrop: ' + error.message);
        }
    });
}

// 奖励领取功能
function initRewards() {
    const claimBtn = document.getElementById('claim-rewards');
    
    claimBtn.addEventListener('click', async () => {
        if (typeof window.ethereum === 'undefined') {
            alert('Please connect your wallet first!');
            return;
        }
        
        try {
            const accounts = await window.ethereum.request({ method: 'eth_accounts' });
            if (accounts.length === 0) {
                alert('Please connect your wallet first!');
                return;
            }
            
            const web3 = new Web3(window.ethereum);
            const recipient = accounts[0];
            
            // 这里应该是与您的智能合约交互的代码
            // 以下是示例代码，实际实现需要替换为您的合约ABI和地址
            
            /*
            const contractAddress = 'YOUR_CONTRACT_ADDRESS';
            const contractABI = [...]; // 您的合约ABI
            
            const contract = new web3.eth.Contract(contractABI, contractAddress);
            
            // 获取奖励金额
            const rewards = await contract.methods.getRewards(recipient).call();
            document.getElementById('rewards-amount').textContent = rewards + ' PLANET';
            
            if (rewards <= 0) {
                alert('You have no rewards to claim!');
                return;
            }
            
            // 发送交易领取奖励
            await contract.methods.claimRewards().send({
                from: recipient,
                value: web3.utils.toWei('0.0015', 'ether')
            });
            
            alert('Rewards claimed successfully!');
            */
            
            // 临时模拟成功
            document.getElementById('rewards-amount').textContent = '500 PLANET';
            alert('Rewards claimed successfully! 500 PLANET tokens have been sent to your wallet.');
            
        } catch (error) {
            console.error('Rewards error:', error);
            alert('Error claiming rewards: ' + error.message);
        }
    });
}

// 移动菜单切换
function initMobileMenu() {
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// 联系表单提交
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // 这里应该是表单提交的逻辑，比如发送到服务器或邮件服务
        console.log('Contact form submitted:', { name, email, message });
        alert('Thank you for your message! We will get back to you soon.');
        
        // 重置表单
        contactForm.reset();
        
        // 关闭模态框
        document.getElementById('contact-modal').style.display = 'none';
    });
}

// 初始化所有功能
document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initLanguage();
    initModals();
    initWallet();
    initAirdrop();
    initRewards();
    initMobileMenu();
    initContactForm();
});