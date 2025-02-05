export const questions = [
    {
        question: "您是否经常感到需要移动双腿，尤其是在尝试入睡或休息时？",
        symptom: "强烈的活动腿的欲望",
        options: [
            { label: "几乎每天", weight: 1.0 },
            { label: "每周几次", weight: 0.75 },
            { label: "偶尔", weight: 0.5 },
            { label: "很少或从未", weight: 0.0 }
        ]
    },
    {
        question: "当您处于静止状态时（如坐着或躺在床上），您是否会发现活动腿的欲望增加？",
        symptom: "夜间和静止时症状加重",
        options: [
            { label: "总是如此", weight: 1.0 },
            { label: "经常如此", weight: 0.75 },
            { label: "有时如此", weight: 0.5 },
            { label: "几乎从不", weight: 0.0 }
        ]
    },
    {
        question: "在白天活动或进行体育锻炼后，您是否注意到腿部不适感有所缓解？",
        symptom: "白天和运动时症状减轻",
        options: [
            { label: "明显改善", weight: 1.0 },
            { label: "有些改善", weight: 0.75 },
            { label: "没有明显变化", weight: 0.5 },
            { label: "症状加剧", weight: 0.0 }
        ]
    },
    {
        question: "您是否有过腿部感觉异常的经历，比如刺痛、蠕动感或其他不舒服的感觉？",
        symptom: "腿部感觉异常",
        options: [
            { label: "非常常见", weight: 1.0 },
            { label: "偶尔", weight: 0.75 },
            { label: "很少", weight: 0.5 },
            { label: "从未", weight: 0.0 }
        ]
    },
    {
        question: "您是否发现自己很难获得连续的高质量睡眠？",
        symptom: "睡眠紊乱",
        options: [
            { label: "总是", weight: 1.0 },
            { label: "经常", weight: 0.75 },
            { label: "有时候", weight: 0.5 },
            { label: "几乎没有", weight: 0.0 }
        ]
    },
    {
        question: "您的睡眠模式是否有明显的昼夜变化规律？",
        symptom: "昼夜变化规律",
        options: [
            { label: "是的，晚上睡眠更差", weight: 1.0 },
            { label: "是的，白天小憩能改善晚上睡眠", weight: 0.75 },
            { label: "没有明显的规律", weight: 0.5 },
            { label: "不确定", weight: 0.0 }
        ]
    },
    {
        question: "您是否有其他的睡眠问题，例如难以入睡或在夜间频繁醒来？",
        symptom: "其他睡眠障碍",
        options: [
            { label: "是的，经常遇到这些问题", weight: 1.0 },
            { label: "偶尔遇到这些问题", weight: 0.75 },
            { label: "很少遇到这些问题", weight: 0.5 },
            { label: "完全没有这些问题", weight: 0.0 }
        ]
    },
    {
        question: "您是否被告知在睡眠中有过呼吸暂停的情况？",
        symptom: "呼吸暂停",
        options: [
            { label: "经常被指出", weight: 1.0 },
            { label: "偶尔被指出", weight: 0.75 },
            { label: "很少被指出", weight: 0.5 },
            { label: "从未被指出", weight: 0.0 }
        ]
    },
    {
        question: "您在白天是否经常感到极度困倦，甚至在不应该感到疲倦的时候？",
        symptom: "日间嗜睡",
        options: [
            { label: "几乎总是", weight: 1.0 },
            { label: "经常", weight: 0.75 },
            { label: "有时候", weight: 0.5 },
            { label: "几乎从不", weight: 0.0 }
        ]
    },
    {
        question: "您是否经常在夜间醒来，导致第二天感到疲惫？",
        symptom: "夜间频繁醒来",
        options: [
            { label: "几乎每晚", weight: 1.0 },
            { label: "每周几次", weight: 0.75 },
            { label: "偶尔", weight: 0.5 },
            { label: "很少", weight: 0.0 }
        ]
    },
    {
        question: "您认为自己的睡眠质量如何？",
        symptom: "睡眠质量差",
        options: [
            { label: "非常差", weight: 1.0 },
            { label: "较差", weight: 0.75 },
            { label: "一般", weight: 0.5 },
            { label: "较好", weight: 0.25 },
            { label: "非常好", weight: 0.0 }
        ]
    },
    {
        question: "您早上醒来时是否经常感到头痛？",
        symptom: "晨起头痛",
        options: [
            { label: "几乎每天", weight: 1.0 },
            { label: "每周几次", weight: 0.75 },
            { label: "偶尔", weight: 0.5 },
            { label: "很少或从未", weight: 0.0 }
        ]
    },
    {
        question: "您是否经常打鼾，或者有人告诉过您在睡觉时打鼾？",
        symptom: "打鼾",
        options: [
            { label: "几乎每晚", weight: 1.0 },
            { label: "每周几次", weight: 0.75 },
            { label: "偶尔", weight: 0.5 },
            { label: "几乎从不", weight: 0.0 }
        ]
    },
    {
        question: "您是否觉得自己的情绪波动较大，容易感到焦虑或抑郁？",
        symptom: "情绪问题",
        options: [
            { label: "经常如此", weight: 1.0 },
            { label: "有时如此", weight: 0.75 },
            { label: "很少如此", weight: 0.5 },
            { label: "几乎从不", weight: 0.0 }
        ]
    },
    {
        question: "您是否有过与心脏或血压相关的健康问题？",
        symptom: "心血管问题",
        options: [
            { label: "是的，有相关问题", weight: 1.0 },
            { label: "曾经有过，但现在控制住了", weight: 0.75 },
            { label: "没有这些问题", weight: 0.5 },
            { label: "不清楚", weight: 0.0 }
        ]
    },
    {
        question: "您是否经历过体重突然增加或减少等代谢问题？",
        symptom: "代谢问题",
        options: [
            { label: "经常", weight: 1.0 },
            { label: "有时", weight: 0.75 },
            { label: "很少", weight: 0.5 },
            { label: "从未", weight: 0.0 }
        ]
    },
    {
        question: "您是否感觉到记忆力减退、注意力集中困难或思维速度变慢？",
        symptom: "认知功能下降",
        options: [
            { label: "经常", weight: 1.0 },
            { label: "有时", weight: 0.75 },
            { label: "很少", weight: 0.5 },
            { label: "从未", weight: 0.0 }
        ]
    },
    {
        question: "您在白天是否经常感到非常困倦，即使前一晚睡得很好？",
        symptom: "过度日间嗜睡",
        options: [
            { label: "几乎总是", weight: 1.0 },
            { label: "经常", weight: 0.75 },
            { label: "有时", weight: 0.5 },
            { label: "几乎从不", weight: 0.0 }
        ]
    },
    {
        question: "您在白天是否经常感到难以保持清醒？",
        symptom: "难以保持清醒",
        options: [
            { label: "几乎总是", weight: 1.0 },
            { label: "经常", weight: 0.75 },
            { label: "有时", weight: 0.5 },
            { label: "几乎从不", weight: 0.0 }
        ]
    },
    {
        question: "您是否曾因强烈的情绪反应而突然失去肌肉张力或摔倒？",
        symptom: "猝倒",
        options: [
            { label: "经常", weight: 1.0 },
            { label: "有时", weight: 0.75 },
            { label: "很少", weight: 0.5 },
            { label: "从未", weight: 0.0 }
        ]
    },
    {
        question: "您是否经常感到自己的睡眠很浅，容易被外界声音打扰？",
        symptom: "睡眠不深",
        options: [
            { label: "几乎总是", weight: 1.0 },
            { label: "经常", weight: 0.75 },
            { label: "有时", weight: 0.5 },
            { label: "几乎从不", weight: 0.0 }
        ]
    },
    {
        question: "您的每晚睡眠时间是否比以前更长？",
        symptom: "睡眠时间延长",
        options: [
            { label: "经常", weight: 1.0 },
            { label: "有时", weight: 0.75 },
            { label: "很少", weight: 0.5 },
            { label: "从未", weight: 0.0 }
        ]
    },
    {
        question: "您是否曾经在刚入睡或即将醒来时感到身体无法动弹？",
        symptom: "睡眠瘫痪",
        options: [
            { label: "经常", weight: 1.0 },
            { label: "有时", weight: 0.75 },
            { label: "很少", weight: 0.5 },
            { label: "从未", weight: 0.0 }
        ]
    },
    {
        question: "您是否在入睡或醒来时看到或听到不存在的事物？",
        symptom: "幻觉",
        options: [
            { label: "经常", weight: 1.0 },
            { label: "有时", weight: 0.75 },
            { label: "很少", weight: 0.5 },
            { label: "从未", weight: 0.0 }
        ]
    },
    {
        question: "您是否在半睡半醒的状态下做出过无意识的行为，比如走到厨房或打开电脑？",
        symptom: "自动行为",
        options: [
            { label: "经常", weight: 1.0 },
            { label: "有时", weight: 0.75 },
            { label: "很少", weight: 0.5 },
            { label: "从未", weight: 0.0 }
        ]
    },
    {
        question: "您是否在夜间遇到过入睡困难、频繁醒来或早醒等问题？",
        symptom: "夜间睡眠障碍",
        options: [
            { label: "经常", weight: 1.0 },
            { label: "有时", weight: 0.75 },
            { label: "很少", weight: 0.5 },
            { label: "从未", weight: 0.0 }
        ]
    },
    {
        question: "您是否在睡眠中出现过无意识的肢体运动？",
        symptom: "无意识的肢体运动",
        options: [
            { label: "经常", weight: 1.0 },
            { label: "有时", weight: 0.75 },
            { label: "很少", weight: 0.5 },
            { label: "从未", weight: 0.0 }
        ]
    },
    {
        question: "您是否经常难以入睡？",
        symptom: "入睡困难",
        options: [
            { label: "几乎每晚", weight: 1.0 },
            { label: "每周几次", weight: 0.75 },
            { label: "偶尔", weight: 0.5 },
            { label: "很少", weight: 0.0 }
        ]
    },
    {
        question: "您是否经常在夜间醒来多次？",
        symptom: "频繁觉醒",
        options: [
            { label: "几乎每晚", weight: 1.0 },
            { label: "每周几次", weight: 0.75 },
            { label: "偶尔", weight: 0.5 },
            { label: "很少", weight: 0.0 }
        ]
    },
    {
        question: "您是否经常比预期时间早醒，并且难以再次入睡？",
        symptom: "早醒",
        options: [
            { label: "几乎每晚", weight: 1.0 },
            { label: "每周几次", weight: 0.75 },
            { label: "偶尔", weight: 0.5 },
            { label: "很少", weight: 0.0 }
        ]
    },
    {
        question: "您在白天是否经常感到困倦？",
        symptom: "白天困倦",
        options: [
            { label: "几乎总是", weight: 1.0 },
            { label: "经常", weight: 0.75 },
            { label: "有时", weight: 0.5 },
            { label: "几乎从不", weight: 0.0 }
        ]
    },
    {
        question: "您是否觉得自己即使睡了很长时间，睡眠质量仍然很低？",
        symptom: "睡眠质量低",
        options: [
            { label: "几乎总是", weight: 1.0 },
            { label: "经常", weight: 0.75 },
            { label: "有时", weight: 0.5 },
            { label: "几乎从不", weight: 0.0 }
        ]
    },
    {
        question: "您在白天是否经常感到疲劳？",
        symptom: "日间疲劳",
        options: [
            { label: "几乎总是", weight: 1.0 },
            { label: "经常", weight: 0.75 },
            { label: "有时", weight: 0.5 },
            { label: "几乎从不", weight: 0.0 }
        ]
    },
    {
        question: "您是否发现自己在注意力、记忆力或思维能力方面存在问题？",
        symptom: "认知功能障碍",
        options: [
            { label: "经常", weight: 1.0 },
            { label: "有时", weight: 0.75 },
            { label: "很少", weight: 0.5 },
            { label: "从未", weight: 0.0 }
        ]
    },
    {
        question: "您是否经常难以入睡？",
        symptom: "入睡困难",
        options: [
            { label: "几乎每晚", weight: 1.0 },
            { label: "每周几次", weight: 0.75 },
            { label: "偶尔", weight: 0.5 },
            { label: "很少", weight: 0.0 }
        ]
    },
    {
        question: "您是否经常感到早晨很难醒来？",
        symptom: "醒来困难",
        options: [
            { label: "几乎总是", weight: 1.0 },
            { label: "经常", weight: 0.75 },
            { label: "有时", weight: 0.5 },
            { label: "几乎从不", weight: 0.0 }
        ]
    },
    {
        question: "您在白天是否经常感到非常困倦？",
        symptom: "白天嗜睡",
        options: [
            { label: "几乎总是", weight: 1.0 },
            { label: "经常", weight: 0.75 },
            { label: "有时", weight: 0.5 },
            { label: "几乎从不", weight: 0.0 }
        ]
    },
    {
        question: "您每晚的平均睡眠时间是否接近推荐的7到9小时？",
        symptom: "睡眠时间正常",
        options: [
            { label: "是的，接近这个范围", weight: 1.0 },
            { label: "通常多于这个范围", weight: 0.75 },
            { label: "通常少于这个范围", weight: 0.5 },
            { label: "完全不确定", weight: 0.0 }
        ]
    },
    {
        question: "您的睡眠周期（包括浅睡、深睡和REM睡眠）是否较为正常？",
        symptom: "睡眠结构较正常",
        options: [
            { label: "我认为是正常的", weight: 1.0 },
            { label: "我不确定", weight: 0.75 },
            { label: "我认为不正常", weight: 0.5 },
            { label: "我没有关注过这个问题", weight: 0.0 }
        ]
    },
    {
        question: "您是否经常感到焦虑或抑郁？",
        symptom: "焦虑或抑郁情绪",
        options: [
            { label: "经常", weight: 1.0 },
            { label: "有时", weight: 0.75 },
            { label: "很少", weight: 0.5 },
            { label: "从未", weight: 0.0 }
        ]
    },
    {
        question: "您是否在夜间容易醒来，并且难以再次入睡？",
        symptom: "夜间易醒",
        options: [
            { label: "经常", weight: 1.0 },
            { label: "有时", weight: 0.75 },
            { label: "很少", weight: 0.5 },
            { label: "从未", weight: 0.0 }
        ]
    },
    {
        question: "您是否曾在梦中做出动作，甚至起床执行某些活动？",
        symptom: "梦中行为再现",
        options: [
            { label: "经常", weight: 1.0 },
            { label: "有时", weight: 0.75 },
            { label: "很少", weight: 0.5 },
            { label: "从未", weight: 0.0 }
        ]
    },
    {
        question: "您是否在睡眠中表现出攻击性或暴力行为？",
        symptom: "睡眠中的暴力行为",
        options: [
            { label: "经常", weight: 1.0 },
            { label: "有时", weight: 0.75 },
            { label: "很少", weight: 0.5 },
            { label: "从未", weight: 0.0 }
        ]
    },
    {
        question: "您是否有过神经系统的症状，如手脚麻木、刺痛等？",
        symptom: "神经系统症状",
        options: [
            { label: "经常", weight: 1.0 },
            { label: "有时", weight: 0.75 },
            { label: "很少", weight: 0.5 },
            { label: "从未", weight: 0.0 }
        ]
    },
    {
        question: "您是否发现自己比平时更早感到困倦并提前入睡？",
        symptom: "提前入睡",
        options: [
            { label: "几乎总是", weight: 1.0 },
            { label: "经常", weight: 0.75 },
            { label: "有时", weight: 0.5 },
            { label: "几乎从不", weight: 0.0 }
        ]
    },
    {
        question: "您的睡眠时间和醒来时间是否与大多数人的不同，例如夜间工作或经常跨时区旅行？",
        symptom: "生物钟失调",
        options: [
            { label: "是的，我的作息时间与众不同", weight: 1.0 },
            { label: "有时会有所不同", weight: 0.75 },
            { label: "大多数时候与大多数人一致", weight: 0.5 },
            { label: "完全一致", weight: 0.0 }
        ]
    },
    {
        question: "您是否曾有过梦游的经历，即在睡梦中起床并进行活动？",
        symptom: "梦游行为",
        options: [
            { label: "经常", weight: 1.0 },
            { label: "有时", weight: 0.75 },
            { label: "很少", weight: 0.5 },
            { label: "从未", weight: 0.0 }
        ]
    },
    {
        question: "您是否注意到自己的记忆力有所下降？",
        symptom: "记忆力减退",
        options: [
            { label: "经常", weight: 1.0 },
            { label: "有时", weight: 0.75 },
            { label: "很少", weight: 0.5 },
            { label: "从未", weight: 0.0 }
        ]
    },
    {
        question: "您在白天是否经常感到非常困倦，即使前一晚睡得很好？",
        symptom: "白天过度困倦",
        options: [
            { label: "几乎总是", weight: 1.0 },
            { label: "经常", weight: 0.75 },
            { label: "有时", weight: 0.5 },
            { label: "几乎从不", weight: 0.0 }
        ]
    },
    {
        question: "您认为自己的睡眠质量如何？",
        symptom: "睡眠质量差",
        options: [
            { label: "非常差", weight: 1.0 },
            { label: "较差", weight: 0.75 },
            { label: "一般", weight: 0.5 },
            { label: "较好", weight: 0.25 },
            { label: "非常好", weight: 0.0 }
        ]
    },
    {
        question: "您是否发现自己需要比以前更多的睡眠时间才能感到精神饱满？",
        symptom: "长时间睡眠",
        options: [
            { label: "经常", weight: 1.0 },
            { label: "有时", weight: 0.75 },
            { label: "很少", weight: 0.5 },
            { label: "从未", weight: 0.0 }
        ]
    },
    {
        question: "即使您睡了足够的时间，是否仍然感到没有充分休息？",
        symptom: "非恢复性睡眠",
        options: [
            { label: "经常", weight: 1.0 },
            { label: "有时", weight: 0.75 },
            { label: "很少", weight: 0.5 },
            { label: "从未", weight: 0.0 }
        ]
    },
    {
        question: "您是否在半睡半醒的状态下做出过无意识的行为，比如走到厨房或打开电脑？",
        symptom: "自动行为",
        options: [
            { label: "经常", weight: 1.0 },
            { label: "有时", weight: 0.75 },
            { label: "很少", weight: 0.5 },
            { label: "从未", weight: 0.0 }
        ]
    },
    {
        question: "您在白天是否经常感到极度困倦，甚至影响日常生活？",
        symptom: "白天过度嗜睡",
        options: [
            { label: "几乎总是", weight: 1.0 },
            { label: "经常", weight: 0.75 },
            { label: "有时", weight: 0.5 },
            { label: "几乎从不", weight: 0.0 }
        ]
    },
    {
        question: "您是否在早晨醒来后感到昏昏沉沉，需要一段时间才能完全清醒？",
        symptom: "睡眠惯性",
        options: [
            { label: "经常", weight: 1.0 },
            { label: "有时", weight: 0.75 },
            { label: "很少", weight: 0.5 },
            { label: "从未", weight: 0.0 }
        ]
    },
    {
        question: "您是否在夜间遇到过入睡困难、频繁醒来或早醒等问题？",
        symptom: "夜间睡眠障碍",
        options: [
            { label: "经常", weight: 1.0 },
            { label: "有时", weight: 0.75 },
            { label: "很少", weight: 0.5 },
            { label: "从未", weight: 0.0 }
        ]
    },
    {
        question: "您是否经常在早晨醒来时感到头痛？",
        symptom: "头痛",
        options: [
            { label: "几乎每天", weight: 1.0 },
            { label: "每周几次", weight: 0.75 },
            { label: "偶尔", weight: 0.5 },
            { label: "很少或从未", weight: 0.0 }
        ]
    },
    {
        question: "您的饮食习惯是否有所改变，例如食欲增加或减少？",
        symptom: "食欲改变",
        options: [
            { label: "经常", weight: 1.0 },
            { label: "有时", weight: 0.75 },
            { label: "很少", weight: 0.5 },
            { label: "从未", weight: 0.0 }
        ]
    },
    {
        question: "您是否经常在早晨醒来时感到喉咙干燥？",
        symptom: "喉咙干燥",
        options: [
            { label: "几乎每天", weight: 1.0 },
            { label: "每周几次", weight: 0.75 },
            { label: "偶尔", weight: 0.5 },
            { label: "很少或从未", weight: 0.0 }
        ]
    },
    {
        question: "您是否在睡眠中或试图入睡时，经常进行重复的、有节奏的运动（如摇头、晃动身体等）？",
        symptom: "重复的、有节奏的运动",
        options: [
            { label: "几乎每晚", weight: 1.0 },
            { label: "每周几次", weight: 0.75 },
            { label: "偶尔", weight: 0.5 },
            { label: "几乎从不", weight: 0.0 }
        ]
    },
    {
        question: "您是否在睡眠中或试图入睡时，经常发出声音或说话？",
        symptom: "声音和言语",
        options: [
            { label: "几乎每晚", weight: 1.0 },
            { label: "每周几次", weight: 0.75 },
            { label: "偶尔", weight: 0.5 },
            { label: "几乎从不", weight: 0.0 }
        ]
    }
];