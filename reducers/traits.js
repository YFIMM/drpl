import produce from "immer";
import {v4} from 'uuid';

const borderColor = {
    1: "#888888",
    2: "#82a6e0",
    3: "#463fe0",
    4: "#ec10f0",
    5: "#f38b19",
};

export const initialState = {
    blademaster: [
        {
            id: v4(),
            imagePaths: "fiora.png",
            color: borderColor[1],
        },
        {
            id: v4(),
            imagePaths: "xayah.png",
            color: borderColor[1],
        },
        {
            id: v4(),
            imagePaths: "shen.png",
            color: borderColor[2],
        },
        {
            id: v4(),
            imagePaths: "yasuo.png",
            color: borderColor[2],
        },
        {
            id: v4(),
            imagePaths: "masteryi.png",
            color: borderColor[3],
        },
        {
            id: v4(),
            imagePaths: "irelia.png",
            color: borderColor[4],
        },
        {
            id: v4(),
            imagePaths: "kayle.png",
            color: borderColor[4],
        },
    ],
    chrono: [
        {
            id: v4(),
            imagePaths: "twistedfate.png",
            color: borderColor[1],
        },
        {
            id: v4(),
            imagePaths: "caitlyn.png",
            color: borderColor[1],
        },
        {
            id: v4(),
            imagePaths: "blitzcrank.png",
            color: borderColor[2],
        },
        {
            id: v4(),
            imagePaths: "shen.png",
            color: borderColor[2],
        },
        {
            id: v4(),
            imagePaths: "ezreal.png",
            color: borderColor[3],
        },
        {
            id: v4(),
            imagePaths: "wukong.png",
            color: borderColor[4],
        },
        {
            id: v4(),
            imagePaths: "thresh.png",
            color: borderColor[5],
        },
    ],
    sorcerer: [
        {
            id: v4(),
            imagePaths: "twistedfate.png",
            color: borderColor[1],
        },
        {
            id: v4(),
            imagePaths: "zoe.png",
            color: borderColor[1],
        },
        {
            id: v4(),
            imagePaths: "ahri.png",
            color: borderColor[2],
        },
        {
            id: v4(),
            imagePaths: "annie.png",
            color: borderColor[2],
        },
        {
            id: v4(),
            imagePaths: "lux.png",
            color: borderColor[3],
        },
        {
            id: v4(),
            imagePaths: "syndra.png",
            color: borderColor[3],
        },
        {
            id: v4(),
            imagePaths: "velkoz.png",
            color: borderColor[4],
        },
    ],
    rebel: [
        {
            id: v4(),
            imagePaths: "malphite.png",
            color: borderColor[1],
        },
        {
            id: v4(),
            imagePaths: "ziggs.png",
            color: borderColor[1],
        },
        {
            id: v4(),
            imagePaths: "sona.png",
            color: borderColor[2],
        },
        {
            id: v4(),
            imagePaths: "yasuo.png",
            color: borderColor[2],
        },
        {
            id: v4(),
            imagePaths: "masteryi.png",
            color: borderColor[3],
        },
        {
            id: v4(),
            imagePaths: "jinx.png",
            color: borderColor[4],
        },
        {
            id: v4(),
            imagePaths: "aurelionsol.png",
            color: borderColor[5],
        },
    ],
    cybernetic: [
        {
            id: v4(),
            imagePaths: "leona.png",
            color: borderColor[1],
        },
        {
            id: v4(),
            imagePaths: "fiora.png",
            color: borderColor[1],
        },
        {
            id: v4(),
            imagePaths: "lucian.png",
            color: borderColor[2],
        },
        {
            id: v4(),
            imagePaths: "vi.png",
            color: borderColor[3],
        },
        {
            id: v4(),
            imagePaths: "irelia.png",
            color: borderColor[4],
        },
        {
            id: v4(),
            imagePaths: "ekko.png",
            color: borderColor[5],
        },
    ],
    starGuardian: [
        {
            id: v4(),
            imagePaths: "poppy.png",
            color: borderColor[1],
        },
        {
            id: v4(),
            imagePaths: "zoe.png",
            color: borderColor[1],
        },
        {
            id: v4(),
            imagePaths: "ahri.png",
            color: borderColor[2],
        },
        {
            id: v4(),
            imagePaths: "neeko.png",
            color: borderColor[3],
        },
        {
            id: v4(),
            imagePaths: "syndra.png",
            color: borderColor[3],
        },
        {
            id: v4(),
            imagePaths: "soraka.png",
            color: borderColor[4],
        },
    ],
    darkStar: [
        {
            id: v4(),
            imagePaths: "jarvaniv.png",
            color: borderColor[1],
        },
        {
            id: v4(),
            imagePaths: "mordekaiser.png",
            color: borderColor[2],
        },
        {
            id: v4(),
            imagePaths: "lux.png",
            color: borderColor[3],
        },
        {
            id: v4(),
            imagePaths: "shaco.png",
            color: borderColor[3],
        },
        {
            id: v4(),
            imagePaths: "karma.png",
            color: borderColor[3],
        },
        {
            id: v4(),
            imagePaths: "jhin.png",
            color: borderColor[4],
        },
    ],
    celestial: [
        {
            id: v4(),
            imagePaths: "xayah.png",
            color: borderColor[1],
        },
        {
            id: v4(),
            imagePaths: "rakan.png",
            color: borderColor[2],
        },
        {
            id: v4(),
            imagePaths: "xinzhao.png",
            color: borderColor[2],
        },
        {
            id: v4(),
            imagePaths: "ashe.png",
            color: borderColor[3],
        },
        {
            id: v4(),
            imagePaths: "kassadin.png",
            color: borderColor[3],
        },
        {
            id: v4(),
            imagePaths: "lulu.png",
            color: borderColor[5],
        },
    ],
    vanguard: [
        {
            id: v4(),
            imagePaths: "leona.png",
            color: borderColor[1],
        },
        {
            id: v4(),
            imagePaths: "poppy.png",
            color: borderColor[1],
        },
        {
            id: v4(),
            imagePaths: "mordekaiser.png",
            color: borderColor[2],
        },
        {
            id: v4(),
            imagePaths: "jayce.png",
            color: borderColor[3],
        },
        {
            id: v4(),
            imagePaths: "wukong.png",
            color: borderColor[4],
        },
    ],
    infiltrator: [
        {
            id: v4(),
            imagePaths: "khazix.png",
            color: borderColor[1],
        },
        {
            id: v4(),
            imagePaths: "kaisa.png",
            color: borderColor[2],
        },
        {
            id: v4(),
            imagePaths: "shaco.png",
            color: borderColor[3],
        },
        {
            id: v4(),
            imagePaths: "fizz.png",
            color: borderColor[4],
        },
        {
            id: v4(),
            imagePaths: "ekko.png",
            color: borderColor[5],
        },
    ],
    blaster: [
        {
            id: v4(),
            imagePaths: "graves.png",
            color: borderColor[1],
        },
        {
            id: v4(),
            imagePaths: "lucian.png",
            color: borderColor[2],
        },
        {
            id: v4(),
            imagePaths: "ezreal.png",
            color: borderColor[3],
        },
        {
            id: v4(),
            imagePaths: "jinx.png",
            color: borderColor[4],
        },
        {
            id: v4(),
            imagePaths: "missfortune.png",
            color: borderColor[5],
        },
    ],
    spacePirate: [
        {
            id: v4(),
            imagePaths: "graves.png",
            color: borderColor[1],
        },
        {
            id: v4(),
            imagePaths: "darius.png",
            color: borderColor[2],
        },
        {
            id: v4(),
            imagePaths: "jayce.png",
            color: borderColor[3],
        },
        {
            id: v4(),
            imagePaths: "gangplank.png",
            color: borderColor[5],
        },
    ],
    protector: [
        {
            id: v4(),
            imagePaths: "jarvaniv.png",
            color: borderColor[1],
        },
        {
            id: v4(),
            imagePaths: "xinzhao.png",
            color: borderColor[2],
        },
        {
            id: v4(),
            imagePaths: "rakan.png",
            color: borderColor[2],
        },
        {
            id: v4(),
            imagePaths: "neeko.png",
            color: borderColor[3],
        },
    ],
    mystic: [
        {
            id: v4(),
            imagePaths: "sona.png",
            color: borderColor[2],
        },
        {
            id: v4(),
            imagePaths: "karma.png",
            color: borderColor[3],
        },
        {
            id: v4(),
            imagePaths: "soraka.png",
            color: borderColor[4],
        },
        {
            id: v4(),
            imagePaths: "lulu.png",
            color: borderColor[5],
        },
    ],
    brawler: [
        {
            id: v4(),
            imagePaths: "malphite.png",
            color: borderColor[1],
        },
        {
            id: v4(),
            imagePaths: "blitzcrank.png",
            color: borderColor[2],
        },
        {
            id: v4(),
            imagePaths: "vi.png",
            color: borderColor[3],
        },
        {
            id: v4(),
            imagePaths: "chogath.png",
            color: borderColor[4],
        },
    ],
    manaReaver: [
        {
            id: v4(),
            imagePaths: "darius.png",
            color: borderColor[2],
        },
        {
            id: v4(),
            imagePaths: "kassadin.png",
            color: borderColor[3],
        },
        {
            id: v4(),
            imagePaths: "irelia.png",
            color: borderColor[4],
        },
        {
            id: v4(),
            imagePaths: "thresh.png",
            color: borderColor[5],
        },
    ],
    Void: [
        {
            id: v4(),
            imagePaths: "khazix.png",
            color: borderColor[1],
        },
        {
            id: v4(),
            imagePaths: "velkoz.png",
            color: borderColor[4],
        },
        {
            id: v4(),
            imagePaths: "chogath.png",
            color: borderColor[4],
        },
    ],
    mechPilot: [
        {
            id: v4(),
            imagePaths: "annie.png",
            color: borderColor[2],
        },
        {
            id: v4(),
            imagePaths: "rumble.png",
            color: borderColor[3],
        },
        {
            id: v4(),
            imagePaths: "fizz.png",
            color: borderColor[4],
        },
    ],
    valkyrie: [
        {
            id: v4(),
            imagePaths: "kaisa.png",
            color: borderColor[2],
        },
        {
            id: v4(),
            imagePaths: "kayle.png",
            color: borderColor[4],
        },
        {
            id: v4(),
            imagePaths: "missfortune.png",
            color: borderColor[5],
        },
    ],
    sniper: [
        {
            id: v4(),
            imagePaths: "caitlyn.png",
            color: borderColor[1],
        },
        {
            id: v4(),
            imagePaths: "ashe.png",
            color: borderColor[3],
        },
        {
            id: v4(),
            imagePaths: "jhin.png",
            color: borderColor[4],
        },
    ],
    demolitionist: [
        {
            id: v4(),
            imagePaths: "ziggs.png",
            color: borderColor[1],
        },
        {
            id: v4(),
            imagePaths: "rumble.png",
            color: borderColor[3],
        },
        {
            id: v4(),
            imagePaths: "gangplank.png",
            color: borderColor[5],
        },
    ],
    mercenary: [
        {
            id: v4(),
            imagePaths: "gangplank.png",
            color: borderColor[5],
        },
        {
            id: v4(),
            imagePaths: "missfortune.png",
            color: borderColor[5],
        },
    ],
    starship: [
        {
            id: v4(),
            imagePaths: "aurelionsol.png",
            color: borderColor[5],
        },
    ],
    general: [
        {
            id: v4(),
            imagePaths: "dopa.png",
            color: borderColor[5],
        },
        {
            id: v4(),
            imagePaths: "ralo.png",
            color: borderColor[5],
        },
        {
            id: v4(),
            imagePaths: "paka.png",
            color: borderColor[5],
        },
        {
            id: v4(),
            imagePaths: "hokage.png",
            color: borderColor[5],
        },
    ],
    champNameToKOR: {
        fiora: "피오라",
        xayah: "자야",
        shen: "쉔",
        yasuo: "야스오",
        masteryi: "마스터이",
        irelia: "이렐리아",
        kayle: "케일",
        graves: "그레이브즈",
        lucian: "루시안",
        ezreal: "이즈리얼",
        jinx: "징크스",
        missfortune: "미스포차",
        malphite: "말파이트",
        blitzcrank: "블리츠크랭크",
        vi: "바이",
        chogath: "초가스",
        twistedfate: "트페",
        thresh: "쓰레쉬",
        rakan: "라칸",
        xinzhao: "신짜오",
        ashe: "애쉬",
        kassadin: "카사딘",
        lulu: "룰루",
        wukong: "오공",
        caitlyn: "케이틀린",
        leona: "레오나",
        ekko: "에코",
        jarvaniv: "자르반",
        mordekaiser: "모데카이저",
        lux: "럭스",
        shaco: "샤코",
        karma: "카르마",
        jhin: "진",
        ziggs: "직스",
        rumble: "럼블",
        gangplank: "갱플랭크",
        khazix: "카직스",
        kaisa: "카이사",
        fizz: "피즈",
        darius: "다리우스",
        annie: "애니",
        sona: "소나",
        soraka: "소라카",
        neeko: "니코",
        aurelionsol: "아우솔",
        zoe: "조이",
        ahri: "아리",
        syndra: "신드라",
        velkoz: "벨코즈",
        jayce: "제이스",
        poppy: "뽀삐",
        ralo: "랄로",
        paka: "파카",
        hokage: "이재석",
        dopa: "도파",
    },
    trait: {
        검사: 0,
        시공간: 0,
        마법사: 0,
        반군: 0,
        사이버네틱스: 0,
        별수호자: 0,
        암흑의별: 0,
        천상: 0,
        선봉대: 0,
        사황: 0,
        메카파일럿: 0,
        발키리: 0,
        공허: 0,
        저격수: 0,
        마나약탈자: 0,
        용병: 0,
        폭파광: 0,
        우주선: 0,
        잠입자: 0,
        총잽이: 0,
        우주해적: 0,
        수호자: 0,
        신비술사: 0,
        싸움꾼: 0,
        total: 0,
    },
};

export const PLUS_TRAIT = "PLUS_TRAIT";
export const MINUS_TRAIT = "MINUS_TRAIT";

export const PLUS_TOTAL = "PLUS_TOTAL";
export const MINUS_TOTAL = "MINUS_TOTAL";

export default (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case PLUS_TRAIT: {
                if (action.data) {
                    draft.trait[action.data] += 1;
                }
                break;
            }
            case MINUS_TRAIT: {
                if (action.data) {
                    if (draft.trait[action.data] > 0) {
                        draft.trait[action.data] -= 1;
                    }
                }
                break;
            }
            case PLUS_TOTAL: {
                draft.trait["total"] += 1;
                break;
            }
            case MINUS_TOTAL: {
                if (draft.trait["total"] > 0) {
                    draft.trait["total"] -= 1;
                }
                break;
            }
            default: {
                break;
            }
        }
    });
};