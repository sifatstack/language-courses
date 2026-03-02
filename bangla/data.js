/**
 * Bangla Course Data — Bangladeshi Bangla
 * Used by app.js for progress tracking, flashcards, and quizzes
 */
window.COURSE_DATA = {
  id: "bangla",
  title: "Bangladeshi Bangla",
  nativeDir: "ltr",
  nativeFont: "Noto Sans Bengali",
  phases: [
    /* ===== PHASE 1: Survival Bangla (Weeks 1-3) ===== */
    {
      title: "Phase 1: Survival Bangla",
      subtitle: "Weeks 1-3 -- Greetings, Needs, Getting Around",
      weeks: [
        {
          id: "w1",
          title: "Week 1: Greetings, Introductions, and Social Basics",
          sections: [
            {
              id: "1.1", title: "Greetings",
              vocab: [
                { id: "v1.1.1", native: "আসসালামু আলাইকুম", pronunciation: "Assalamu Alaikum", meaning: "Peace be upon you (same as Arabic السلام عليكم)" },
                { id: "v1.1.2", native: "ওয়ালাইকুম আসসালাম", pronunciation: "Walaikum Assalam", meaning: "And upon you peace (same as Arabic وعليكم السلام)" },
                { id: "v1.1.3", native: "নমস্কার", pronunciation: "Nomoshkar", meaning: "Hello (Hindu/secular formal greeting)" },
                { id: "v1.1.4", native: "স্লামালকুম", pronunciation: "Slamalekum", meaning: "Casual shortened greeting (like quick Syrian سلامللكو)" },
                { id: "v1.1.5", native: "কী খবর?", pronunciation: "Ki khobor?", meaning: "What's the news? / What's up? (খবর from Arabic خبر)" },
                { id: "v1.1.6", native: "কেমন আছো?", pronunciation: "Kemon achho?", meaning: "How are you? (informal)" },
                { id: "v1.1.7", native: "কেমন আছেন?", pronunciation: "Kemon achhen?", meaning: "How are you? (formal/respectful)" },
                { id: "v1.1.8", native: "ভালো আছি", pronunciation: "Bhalo achhi", meaning: "I'm well" },
                { id: "v1.1.9", native: "আলহামদুলিল্লাহ, ভালো", pronunciation: "Alhamdulillah, bhalo", meaning: "Fine, praise God (from Arabic الحمد لله)" },
                { id: "v1.1.10", native: "এই চলতেছে", pronunciation: "Ei choltechhe", meaning: "Just getting by (like Arabic ماشي الحال)" },
                { id: "v1.1.11", native: "মোটামুটি", pronunciation: "Motamuti", meaning: "So-so / More or less (like Arabic هيك هيك)" },
                { id: "v1.1.12", native: "আল্লাহ হাফেজ", pronunciation: "Allah Hafez", meaning: "Goodbye (from Arabic الله حافظك)" },
                { id: "v1.1.13", native: "খোদা হাফেজ", pronunciation: "Khoda Hafez", meaning: "Goodbye (Persian-origin version)" },
                { id: "v1.1.14", native: "আসি তাহলে", pronunciation: "Ashi tahole", meaning: "I'll go then / I'll get going" },
                { id: "v1.1.15", native: "দেখা হবে", pronunciation: "Dekha hobe", meaning: "We'll see each other (like Arabic بشوفك)" },
                { id: "v1.1.16", native: "আবার দেখা হবে", pronunciation: "Abar dekha hobe", meaning: "We'll meet again" }
              ]
            },
            {
              id: "1.2", title: "The তুমি / আপনি / তুই Distinction",
              vocab: [
                { id: "v1.2.1", native: "তুই", pronunciation: "tui", meaning: "You (very intimate -- even more casual than Spanish tu; can be rude if misused)" },
                { id: "v1.2.2", native: "তুমি", pronunciation: "tumi", meaning: "You (informal -- like Spanish tu; default 'you' for friends, peers)" },
                { id: "v1.2.3", native: "আপনি", pronunciation: "apni", meaning: "You (formal -- like Spanish usted; for elders, strangers, authority)" },
                { id: "v1.2.4", native: "কেমন আছিস?", pronunciation: "Kemon achhis?", meaning: "How are you? (তুই intimate level)" },
                { id: "v1.2.5", native: "কেমন আছো?", pronunciation: "Kemon achho?", meaning: "How are you? (তুমি informal level)" },
                { id: "v1.2.6", native: "কেমন আছেন?", pronunciation: "Kemon achhen?", meaning: "How are you? (আপনি formal level)" }
              ]
            },
            {
              id: "1.3", title: "Introducing Yourself",
              vocab: [
                { id: "v1.3.1", native: "আমার নাম সারা", pronunciation: "Amar nam Sara", meaning: "My name is Sara" },
                { id: "v1.3.2", native: "আমি সিরিয়া থেকে এসেছি", pronunciation: "Ami Syria theke eshechhi", meaning: "I came from Syria" },
                { id: "v1.3.3", native: "আমি বাংলা শিখতেছি", pronunciation: "Ami Bangla shikhtechhi", meaning: "I'm learning Bangla" },
                { id: "v1.3.4", native: "আমি একটু একটু বাংলা বুঝি", pronunciation: "Ami ektu ektu Bangla bujhi", meaning: "I understand a little Bangla" },
                { id: "v1.3.5", native: "আমি বাংলা ভালো বলতে পারি না", pronunciation: "Ami Bangla bhalo bolte pari na", meaning: "I can't speak Bangla well" },
                { id: "v1.3.6", native: "আপনার নাম কী?", pronunciation: "Apnar nam ki?", meaning: "What is your name? (formal)" },
                { id: "v1.3.7", native: "তোমার নাম কী?", pronunciation: "Tomar nam ki?", meaning: "What is your name? (informal)" },
                { id: "v1.3.8", native: "আপনি কোথা থেকে?", pronunciation: "Apni kotha theke?", meaning: "Where are you from? (formal)" },
                { id: "v1.3.9", native: "আপনার সাথে দেখা হয়ে ভালো লাগলো", pronunciation: "Apnar shathe dekha hoye bhalo laglo", meaning: "Nice to meet you (like Arabic تشرّفنا)" }
              ]
            },
            {
              id: "1.4", title: "Essential Polite Words",
              vocab: [
                { id: "v1.4.1", native: "ধন্যবাদ", pronunciation: "Dhonnobad", meaning: "Thank you" },
                { id: "v1.4.2", native: "শুকরিয়া", pronunciation: "Shukriya", meaning: "Thank you (from Arabic شكراً)" },
                { id: "v1.4.3", native: "দয়া করে", pronunciation: "Doya kore", meaning: "Please (like Arabic لو سمحت)" },
                { id: "v1.4.4", native: "মাফ করবেন", pronunciation: "Maf korben", meaning: "Excuse me / Forgive me (মাফ from Arabic معفو)" },
                { id: "v1.4.5", native: "কোনো সমস্যা নাই", pronunciation: "Kono shomoshsha nai", meaning: "No problem (like Arabic ما في مشكلة)" },
                { id: "v1.4.6", native: "ঠিক আছে", pronunciation: "Thik achhe", meaning: "It's okay / Alright (like Arabic طيّب / ماشي)" }
              ]
            },
            {
              id: "1.5", title: "Dialogue Practice",
              vocab: [
                { id: "v1.5.1", native: "আপা", pronunciation: "apa", meaning: "Older sister (respectful address for women, like Arabic خالتو)" },
                { id: "v1.5.2", native: "ভাই", pronunciation: "bhai", meaning: "Brother (used for any man, like Arabic أخي)" },
                { id: "v1.5.3", native: "আমিও ভালো", pronunciation: "Amio bhalo", meaning: "I'm well too" }
              ]
            }
          ]
        },
        {
          id: "w2",
          title: "Week 2: Essential Needs -- Asking, Wanting, Having",
          sections: [
            {
              id: "2.1", title: "I want / I need -- চাই",
              vocab: [
                { id: "v2.1.1", native: "আমি … চাই", pronunciation: "Ami … chai", meaning: "I want … (works like Arabic بدّي)" },
                { id: "v2.1.2", native: "আমি পানি চাই", pronunciation: "Ami pani chai", meaning: "I want water" },
                { id: "v2.1.3", native: "আমি ভাত চাই", pronunciation: "Ami bhat chai", meaning: "I want rice" },
                { id: "v2.1.4", native: "আমি চা চাই", pronunciation: "Ami cha chai", meaning: "I want tea" },
                { id: "v2.1.5", native: "আমি একটা রিকশা চাই", pronunciation: "Ami ekta rickshaw chai", meaning: "I want a rickshaw" },
                { id: "v2.1.6", native: "আমি সাহায্য চাই", pronunciation: "Ami shahajjo chai", meaning: "I need help" },
                { id: "v2.1.7", native: "আমি চাই না", pronunciation: "Ami chai na", meaning: "I don't want" },
                { id: "v2.1.8", native: "আমি ভাত চাই না", pronunciation: "Ami bhat chai na", meaning: "I don't want rice" },
                { id: "v2.1.9", native: "আমাকে আর লাগবে না", pronunciation: "Amake ar lagbe na", meaning: "I don't need any more (like Arabic خلص، ما بدّي كمان)" },
                { id: "v2.1.10", native: "আপনি কী চান?", pronunciation: "Apni ki chan?", meaning: "What do you want? (formal)" },
                { id: "v2.1.11", native: "তুমি কী চাও?", pronunciation: "Tumi ki chao?", meaning: "What do you want? (informal)" }
              ]
            },
            {
              id: "2.2", title: "There is / There isn't -- আছে / নাই",
              vocab: [
                { id: "v2.2.1", native: "আছে", pronunciation: "achhe", meaning: "There is / Exists (like Arabic في)" },
                { id: "v2.2.2", native: "নাই", pronunciation: "nai", meaning: "There isn't / Doesn't exist (like Arabic ما في; BD marker)" },
                { id: "v2.2.3", native: "পানি আছে?", pronunciation: "Pani achhe?", meaning: "Is there water?" },
                { id: "v2.2.4", native: "হ্যাঁ, আছে", pronunciation: "Hae, achhe", meaning: "Yes, there is" },
                { id: "v2.2.5", native: "না, নাই", pronunciation: "Na, nai", meaning: "No, there isn't" },
                { id: "v2.2.6", native: "বাথরুম কোথায় আছে?", pronunciation: "Bathroom kothay achhe?", meaning: "Where is the bathroom?" },
                { id: "v2.2.7", native: "ডাক্তার আছে?", pronunciation: "Daktar achhe?", meaning: "Is there a doctor?" },
                { id: "v2.2.8", native: "সমস্যা নাই", pronunciation: "Shomoshsha nai", meaning: "No problem (like Arabic ما في مشكلة)" },
                { id: "v2.2.9", native: "টাকা নাই", pronunciation: "Taka nai", meaning: "No money (like Arabic ما في مصاري)" }
              ]
            },
            {
              id: "2.3", title: "Yes, No, and Basic Responses",
              vocab: [
                { id: "v2.3.1", native: "হ্যাঁ", pronunciation: "Hae", meaning: "Yes" },
                { id: "v2.3.2", native: "জি", pronunciation: "Ji", meaning: "Yes (polite/respectful -- use with আপনি-level people)" },
                { id: "v2.3.3", native: "জি না", pronunciation: "Ji na", meaning: "No (polite)" },
                { id: "v2.3.4", native: "না", pronunciation: "Na", meaning: "No" },
                { id: "v2.3.5", native: "হুঁ", pronunciation: "Hu", meaning: "Uh-huh / Yeah (casual, like Arabic مم)" },
                { id: "v2.3.6", native: "আচ্ছা", pronunciation: "Acchha", meaning: "Okay / I see (extremely versatile -- like Arabic طيّب)" },
                { id: "v2.3.7", native: "ঠিক আছে", pronunciation: "Thik achhe", meaning: "Okay / Fine (like Arabic ماشي)" },
                { id: "v2.3.8", native: "বুঝেছি", pronunciation: "Bujhechhi", meaning: "I understood / Got it (like Arabic فهمت)" },
                { id: "v2.3.9", native: "বুঝি নাই", pronunciation: "Bujhi nai", meaning: "I didn't understand (like Arabic ما فهمت)" }
              ]
            },
            {
              id: "2.4", title: "Numbers 1-100",
              vocab: [
                { id: "v2.4.1", native: "এক", pronunciation: "ek", meaning: "One (1)" },
                { id: "v2.4.2", native: "দুই", pronunciation: "dui", meaning: "Two (2)" },
                { id: "v2.4.3", native: "তিন", pronunciation: "tin", meaning: "Three (3)" },
                { id: "v2.4.4", native: "চার", pronunciation: "char", meaning: "Four (4)" },
                { id: "v2.4.5", native: "পাঁচ", pronunciation: "pach", meaning: "Five (5)" },
                { id: "v2.4.6", native: "ছয়", pronunciation: "chhoy", meaning: "Six (6)" },
                { id: "v2.4.7", native: "সাত", pronunciation: "shat", meaning: "Seven (7)" },
                { id: "v2.4.8", native: "আট", pronunciation: "at", meaning: "Eight (8)" },
                { id: "v2.4.9", native: "নয়", pronunciation: "noy", meaning: "Nine (9)" },
                { id: "v2.4.10", native: "দশ", pronunciation: "dosh", meaning: "Ten (10)" },
                { id: "v2.4.11", native: "বিশ", pronunciation: "bish", meaning: "Twenty (20)" },
                { id: "v2.4.12", native: "ত্রিশ", pronunciation: "trish", meaning: "Thirty (30)" },
                { id: "v2.4.13", native: "চল্লিশ", pronunciation: "chollish", meaning: "Forty (40)" },
                { id: "v2.4.14", native: "পঞ্চাশ", pronunciation: "ponchash", meaning: "Fifty (50)" },
                { id: "v2.4.15", native: "একশো", pronunciation: "eksho", meaning: "One hundred (100)" },
                { id: "v2.4.16", native: "কত?", pronunciation: "Koto?", meaning: "How much? / How many? (like Arabic قدّيش؟)" },
                { id: "v2.4.17", native: "কত টাকা?", pronunciation: "Koto taka?", meaning: "How much money? (taka = Bangladeshi currency)" },
                { id: "v2.4.18", native: "অনেক", pronunciation: "Onek", meaning: "Many / A lot (like Arabic كتير)" },
                { id: "v2.4.19", native: "একটু", pronunciation: "Ektu", meaning: "A little (like Arabic شوية)" },
                { id: "v2.4.20", native: "আর একটু", pronunciation: "Ar ektu", meaning: "A little more (like Arabic كمان شوية)" },
                { id: "v2.4.21", native: "যথেষ্ট", pronunciation: "Jotheshto", meaning: "Enough (like Arabic بس)" },
                { id: "v2.4.22", native: "বেশি", pronunciation: "Beshi", meaning: "Too much / More" },
                { id: "v2.4.23", native: "কম", pronunciation: "Kom", meaning: "Less" }
              ]
            },
            {
              id: "2.5", title: "Dialogue: At a Tea Stall",
              vocab: [
                { id: "v2.5.1", native: "চায়ের দোকান", pronunciation: "chayer dokan", meaning: "Tea stall (the social heart of Bangladesh)" },
                { id: "v2.5.2", native: "এক কাপ চা দেন", pronunciation: "ek kap cha den", meaning: "Give me one cup of tea" },
                { id: "v2.5.3", native: "চিনি দিবো?", pronunciation: "Chini dibo?", meaning: "Should I add sugar?" },
                { id: "v2.5.4", native: "আর কিছু লাগবে?", pronunciation: "Ar kichhu lagbe?", meaning: "Need anything else? (like Arabic بدّك شي تاني؟)" },
                { id: "v2.5.5", native: "একটা সিঙারা দেন", pronunciation: "Ekta shingara den", meaning: "Give me one singara (samosa)" },
                { id: "v2.5.6", native: "নেন", pronunciation: "Nen", meaning: "Here you go (handing something over)" }
              ]
            }
          ]
        },
        {
          id: "w3",
          title: "Week 3: Getting Around -- Transport, Directions, Bargaining",
          sections: [
            {
              id: "3.1", title: "Transport Vocabulary",
              vocab: [
                { id: "v3.1.1", native: "রিকশা", pronunciation: "rickshaw", meaning: "Cycle rickshaw (the iconic transport -- like a Damascus taxi)" },
                { id: "v3.1.2", native: "সিএনজি", pronunciation: "CNG", meaning: "Auto-rickshaw (like Arabic سرفيس but individual)" },
                { id: "v3.1.3", native: "বাস", pronunciation: "bas", meaning: "Bus" },
                { id: "v3.1.4", native: "ট্যাক্সি", pronunciation: "taxi", meaning: "Taxi (less common than rickshaw)" },
                { id: "v3.1.5", native: "নৌকা", pronunciation: "nouka", meaning: "Boat (Bangladesh has rivers everywhere)" },
                { id: "v3.1.6", native: "হেঁটে", pronunciation: "hete", meaning: "Walking / On foot" }
              ]
            },
            {
              id: "3.2", title: "Directions",
              vocab: [
                { id: "v3.2.1", native: "কোথায়?", pronunciation: "Kothay?", meaning: "Where? (like Arabic وين؟)" },
                { id: "v3.2.2", native: "এইখানে", pronunciation: "Eikhane", meaning: "Here (like Arabic هون)" },
                { id: "v3.2.3", native: "ওইখানে", pronunciation: "Oikhane", meaning: "There (like Arabic هونيك)" },
                { id: "v3.2.4", native: "ডানে", pronunciation: "Dane", meaning: "Right (like Arabic يمين)" },
                { id: "v3.2.5", native: "বামে", pronunciation: "Bame", meaning: "Left (like Arabic شمال)" },
                { id: "v3.2.6", native: "সোজা", pronunciation: "Shoja", meaning: "Straight ahead (like Arabic دغري)" },
                { id: "v3.2.7", native: "কাছে", pronunciation: "Kachhe", meaning: "Close / Near" },
                { id: "v3.2.8", native: "দূরে", pronunciation: "Dure", meaning: "Far" },
                { id: "v3.2.9", native: "পাশে", pronunciation: "Pashe", meaning: "Next to / Beside" },
                { id: "v3.2.10", native: "সামনে", pronunciation: "Shamne", meaning: "In front" },
                { id: "v3.2.11", native: "পেছনে", pronunciation: "Pechhone", meaning: "Behind" },
                { id: "v3.2.12", native: "মাফ করবেন, বাজার কোথায়?", pronunciation: "Maf korben, bazaar kothay?", meaning: "Excuse me, where is the bazaar?" },
                { id: "v3.2.13", native: "এইখান থেকে দূরে?", pronunciation: "Eikhan theke dure?", meaning: "Is it far from here?" }
              ]
            },
            {
              id: "3.3", title: "Bargaining",
              vocab: [
                { id: "v3.3.1", native: "কত?", pronunciation: "Koto?", meaning: "How much? (like Arabic قدّيش؟)" },
                { id: "v3.3.2", native: "অনেক বেশি!", pronunciation: "Onek beshi!", meaning: "Way too much! (like Arabic كتير غالي!)" },
                { id: "v3.3.3", native: "একটু কম করেন", pronunciation: "Ektu kom koren", meaning: "Lower the price a little (like Arabic نقّصلي شوية)" },
                { id: "v3.3.4", native: "শেষ দাম কত?", pronunciation: "Shesh dam koto?", meaning: "Final price? (like Arabic آخر سعر؟)" },
                { id: "v3.3.5", native: "ঠিক আছে, চলেন", pronunciation: "Thik achhe, cholen", meaning: "Okay, let's go (like Arabic طيّب، ماشي)" }
              ]
            },
            {
              id: "3.4", title: "Dialogue: Taking a Rickshaw",
              vocab: [
                { id: "v3.4.1", native: "রিকশাওয়ালা", pronunciation: "rickshawala", meaning: "Rickshaw driver" },
                { id: "v3.4.2", native: "গুলশান যাবেন?", pronunciation: "Gulshan jaben?", meaning: "Will you go to Gulshan?" },
                { id: "v3.4.3", native: "কত দিবেন?", pronunciation: "Koto diben?", meaning: "How much will you pay?" },
                { id: "v3.4.4", native: "আচ্ছা, আসেন", pronunciation: "Acchha, ashen", meaning: "Okay, come" },
                { id: "v3.4.5", native: "এইখানে নামাইয়েন", pronunciation: "Eikhane namayen", meaning: "Drop me here" }
              ]
            }
          ]
        }
      ]
    },

    /* ===== PHASE 2: Building Blocks (Weeks 4-8) ===== */
    {
      title: "Phase 2: Building Blocks",
      subtitle: "Weeks 4-8 -- Verbs, Tenses, Questions, Descriptions",
      weeks: [
        {
          id: "w4",
          title: "Week 4: Present Tense Verbs",
          sections: [
            {
              id: "4.1", title: "How Bangla Verbs Work",
              vocab: [
                { id: "v4.1.1", native: "সে", pronunciation: "she", meaning: "He / She (no gender distinction in Bangla!)" },
                { id: "v4.1.2", native: "আমি", pronunciation: "ami", meaning: "I" },
                { id: "v4.1.3", native: "আমরা", pronunciation: "amra", meaning: "We" },
                { id: "v4.1.4", native: "তারা", pronunciation: "tara", meaning: "They" }
              ]
            },
            {
              id: "4.2", title: "Present Simple (Habitual)",
              vocab: [
                { id: "v4.2.1", native: "করি", pronunciation: "kori", meaning: "I do (from করা / kora)" },
                { id: "v4.2.2", native: "খাই", pronunciation: "khai", meaning: "I eat (from খাওয়া / khaowa)" },
                { id: "v4.2.3", native: "যাই", pronunciation: "jai", meaning: "I go (from যাওয়া / jaowa)" },
                { id: "v4.2.4", native: "আসি", pronunciation: "ashi", meaning: "I come (from আসা / asha)" },
                { id: "v4.2.5", native: "বলি", pronunciation: "boli", meaning: "I say (from বলা / bola)" },
                { id: "v4.2.6", native: "দেখি", pronunciation: "dekhi", meaning: "I see (from দেখা / dekha)" },
                { id: "v4.2.7", native: "বুঝি", pronunciation: "bujhi", meaning: "I understand (from বুঝা / bujha)" },
                { id: "v4.2.8", native: "জানি", pronunciation: "jani", meaning: "I know (from জানা / jana)" },
                { id: "v4.2.9", native: "ঘুমাই", pronunciation: "ghumai", meaning: "I sleep (from ঘুমানো / ghumano)" },
                { id: "v4.2.10", native: "শিখি", pronunciation: "shikhi", meaning: "I learn (from শেখা / shekha)" },
                { id: "v4.2.11", native: "ভালোবাসি", pronunciation: "bhalobashi", meaning: "I love (from ভালোবাসা / bhalobasha)" }
              ]
            },
            {
              id: "4.3", title: "Present Continuous ('Right now')",
              vocab: [
                { id: "v4.3.1", native: "আমি খাইতেছি", pronunciation: "Ami khaitechhi", meaning: "I am eating right now (like Arabic عم باكل)" },
                { id: "v4.3.2", native: "সে কাজ করতেছে", pronunciation: "She kaj kortechhe", meaning: "He/She is working right now" },
                { id: "v4.3.3", native: "তুমি কী করতেছো?", pronunciation: "Tumi ki kortechho?", meaning: "What are you doing?" },
                { id: "v4.3.4", native: "আমি বাংলা শিখতেছি", pronunciation: "Ami Bangla shikhtechhi", meaning: "I'm learning Bangla" }
              ]
            },
            {
              id: "4.4", title: "Can / Can't -- পারা",
              vocab: [
                { id: "v4.4.1", native: "আমি বাংলা বলতে পারি", pronunciation: "Ami Bangla bolte pari", meaning: "I can speak Bangla" },
                { id: "v4.4.2", native: "আমি বুঝতে পারি না", pronunciation: "Ami bujhte pari na", meaning: "I can't understand" },
                { id: "v4.4.3", native: "আপনি কি সাহায্য করতে পারবেন?", pronunciation: "Apni ki shahajjo korte parben?", meaning: "Can you help?" },
                { id: "v4.4.4", native: "আবার বলতে পারবেন?", pronunciation: "Abar bolte parben?", meaning: "Can you say it again?" }
              ]
            }
          ]
        },
        {
          id: "w5",
          title: "Week 5: Past Tense",
          sections: [
            {
              id: "5.1", title: "Simple Past ('I did')",
              vocab: [
                { id: "v5.1.1", native: "করলাম", pronunciation: "korlam", meaning: "I did" },
                { id: "v5.1.2", native: "খেলাম", pronunciation: "khelam", meaning: "I ate" },
                { id: "v5.1.3", native: "গেলাম", pronunciation: "gelam", meaning: "I went" },
                { id: "v5.1.4", native: "আসলাম", pronunciation: "ashlam", meaning: "I came" },
                { id: "v5.1.5", native: "বললাম", pronunciation: "bollam", meaning: "I said" },
                { id: "v5.1.6", native: "দেখলাম", pronunciation: "dekhlam", meaning: "I saw" },
                { id: "v5.1.7", native: "কিনলাম", pronunciation: "kinlam", meaning: "I bought" },
                { id: "v5.1.8", native: "শিখলাম", pronunciation: "shikhlam", meaning: "I learned" },
                { id: "v5.1.9", native: "আমি যাই নাই", pronunciation: "Ami jai nai", meaning: "I didn't go (নাই after verb, opposite of Arabic ما before verb)" },
                { id: "v5.1.10", native: "আমি দেখি নাই", pronunciation: "Ami dekhi nai", meaning: "I didn't see / I haven't seen" },
                { id: "v5.1.11", native: "আমি খাই নাই", pronunciation: "Ami khai nai", meaning: "I didn't eat" },
                { id: "v5.1.12", native: "আমি বুঝি নাই", pronunciation: "Ami bujhi nai", meaning: "I didn't understand (like Arabic ما فهمت)" }
              ]
            },
            {
              id: "5.2", title: "Present Perfect ('I have done')",
              vocab: [
                { id: "v5.2.1", native: "আমি করেছি", pronunciation: "Ami korechhi", meaning: "I have done" },
                { id: "v5.2.2", native: "আমি খেয়েছি", pronunciation: "Ami kheyechhi", meaning: "I have eaten" },
                { id: "v5.2.3", native: "আমি দেখেছি", pronunciation: "Ami dekhechhi", meaning: "I have seen" }
              ]
            },
            {
              id: "5.3", title: "Dialogue: Catching Up with a Friend",
              vocab: [
                { id: "v5.3.1", native: "আমি তো ব্যস্ত ছিলাম", pronunciation: "Ami to bysto chhilam", meaning: "I was busy" },
                { id: "v5.3.2", native: "কেমন ছিলো?", pronunciation: "Kemon chhilo?", meaning: "How was it? (like Arabic كيف كانت؟)" },
                { id: "v5.3.3", native: "অনেক সুন্দর!", pronunciation: "Onek shundor!", meaning: "Very beautiful!" },
                { id: "v5.3.4", native: "মাশাআল্লাহ!", pronunciation: "Masha'Allah!", meaning: "How wonderful! (same as Arabic ماشاء الله)" }
              ]
            }
          ]
        },
        {
          id: "w6",
          title: "Week 6: Future Tense and Making Plans",
          sections: [
            {
              id: "6.1", title: "Simple Future ('I will')",
              vocab: [
                { id: "v6.1.1", native: "করবো", pronunciation: "korbo", meaning: "I will do" },
                { id: "v6.1.2", native: "যাবো", pronunciation: "jabo", meaning: "I will go (like Arabic رح روح)" },
                { id: "v6.1.3", native: "আমি বাজারে যাবো", pronunciation: "Ami bazare jabo", meaning: "I will go to the bazaar" },
                { id: "v6.1.4", native: "কাল কী করবা?", pronunciation: "Kal ki korba?", meaning: "What will you do tomorrow?" },
                { id: "v6.1.5", native: "আমি আসতে পারবো না", pronunciation: "Ami ashte parbo na", meaning: "I won't be able to come" }
              ]
            },
            {
              id: "6.2", title: "Let's... -- চলো / চল",
              vocab: [
                { id: "v6.2.1", native: "চলো যাই", pronunciation: "Cholo jai", meaning: "Let's go (like Arabic يلّا نروح)" },
                { id: "v6.2.2", native: "চলো খাই", pronunciation: "Cholo khai", meaning: "Let's eat (like Arabic يلّا ناكل)" },
                { id: "v6.2.3", native: "চলো বাংলা শিখি", pronunciation: "Cholo Bangla shikhi", meaning: "Let's learn Bangla" }
              ]
            },
            {
              id: "6.3", title: "Making Plans and Invitations",
              vocab: [
                { id: "v6.3.1", native: "তুমি কি আমার সাথে আসবা?", pronunciation: "Tumi ki amar shathe ashba?", meaning: "Will you come with me?" },
                { id: "v6.3.2", native: "চলো একটু ঘুরে আসি", pronunciation: "Cholo ektu ghure ashi", meaning: "Let's go for a walk" },
                { id: "v6.3.3", native: "আমাদের বাসায় আসেন", pronunciation: "Amader bashay ashen", meaning: "Come to our house (like Arabic تعالي عندنا)" },
                { id: "v6.3.4", native: "ইনশাআল্লাহ কাল", pronunciation: "Insha'Allah kal", meaning: "God willing, tomorrow (from Arabic إن شاء الله بكرا)" }
              ]
            },
            {
              id: "6.4", title: "Days of the Week",
              vocab: [
                { id: "v6.4.1", native: "শনিবার", pronunciation: "Shonibar", meaning: "Saturday" },
                { id: "v6.4.2", native: "রবিবার", pronunciation: "Robibar", meaning: "Sunday" },
                { id: "v6.4.3", native: "সোমবার", pronunciation: "Shombar", meaning: "Monday" },
                { id: "v6.4.4", native: "মঙ্গলবার", pronunciation: "Mongolbar", meaning: "Tuesday" },
                { id: "v6.4.5", native: "বুধবার", pronunciation: "Budhbar", meaning: "Wednesday" },
                { id: "v6.4.6", native: "বৃহস্পতিবার", pronunciation: "Brihoshpotibar", meaning: "Thursday" },
                { id: "v6.4.7", native: "শুক্রবার", pronunciation: "Shukrobar", meaning: "Friday (main weekend day, like Arabic الجمعة)" },
                { id: "v6.4.8", native: "আজকে", pronunciation: "Ajke", meaning: "Today (like Arabic اليوم)" },
                { id: "v6.4.9", native: "কাল", pronunciation: "Kal", meaning: "Tomorrow AND Yesterday (context makes it clear)" },
                { id: "v6.4.10", native: "আগামীকাল", pronunciation: "Agamikal", meaning: "Tomorrow (unambiguous)" },
                { id: "v6.4.11", native: "গতকাল", pronunciation: "Gotokal", meaning: "Yesterday (unambiguous)" },
                { id: "v6.4.12", native: "পরশু", pronunciation: "Porshu", meaning: "Day after tomorrow" },
                { id: "v6.4.13", native: "এই সপ্তাহে", pronunciation: "Ei shoptahe", meaning: "This week" },
                { id: "v6.4.14", native: "সকালে", pronunciation: "Shokale", meaning: "In the morning" },
                { id: "v6.4.15", native: "বিকেলে", pronunciation: "Bikele", meaning: "In the afternoon" },
                { id: "v6.4.16", native: "রাতে", pronunciation: "Rate", meaning: "At night" }
              ]
            }
          ]
        },
        {
          id: "w7",
          title: "Week 7: Questions & Week 8: Describing Things",
          sections: [
            {
              id: "7.1", title: "Question Words",
              vocab: [
                { id: "v7.1.1", native: "কী?", pronunciation: "ki?", meaning: "What? (like Arabic شو؟)" },
                { id: "v7.1.2", native: "কে?", pronunciation: "ke?", meaning: "Who? (like Arabic مين؟)" },
                { id: "v7.1.3", native: "কোথায়?", pronunciation: "kothay?", meaning: "Where? (like Arabic وين؟)" },
                { id: "v7.1.4", native: "কখন?", pronunciation: "kokhon?", meaning: "When? (like Arabic إيمتى؟)" },
                { id: "v7.1.5", native: "ক্যান?", pronunciation: "kaen?", meaning: "Why? (BD marker; like Arabic ليش؟)" },
                { id: "v7.1.6", native: "কিভাবে?", pronunciation: "kibhabe?", meaning: "How? (like Arabic كيف؟)" },
                { id: "v7.1.7", native: "কত?", pronunciation: "koto?", meaning: "How much? (like Arabic قدّيش؟)" },
                { id: "v7.1.8", native: "কোনটা?", pronunciation: "konta?", meaning: "Which one? (like Arabic أيّا؟)" }
              ]
            },
            {
              id: "7.2", title: "Yes/No Questions",
              vocab: [
                { id: "v7.2.1", native: "তুমি কি বাংলাদেশি?", pronunciation: "Tumi ki Bangladeshi?", meaning: "Are you Bangladeshi? (add কি to make a question)" },
                { id: "v7.2.2", native: "ভাত খাবা?", pronunciation: "Bhat khaba?", meaning: "Will you eat rice? (intonation only)" },
                { id: "v7.2.3", native: "চা খাবেন?", pronunciation: "Cha khaben?", meaning: "Will you have tea? (formal)" }
              ]
            },
            {
              id: "7.3", title: "Question Practice Sentences",
              vocab: [
                { id: "v7.3.1", native: "এই খাবারের নাম কী?", pronunciation: "Ei khabarer nam ki?", meaning: "What's the name of this food?" },
                { id: "v7.3.2", native: "ক্যান বাংলা বলো না?", pronunciation: "Kaen Bangla bolo na?", meaning: "Why don't you speak Bangla?" },
                { id: "v7.3.3", native: "কখন ফিরে আসবা?", pronunciation: "Kokhon fire ashba?", meaning: "When will you come back?" },
                { id: "v7.3.4", native: "কে বলছে?", pronunciation: "Ke bolchhe?", meaning: "Who said?" },
                { id: "v7.3.5", native: "কিভাবে জানো?", pronunciation: "Kibhabe jano?", meaning: "How do you know?" }
              ]
            },
            {
              id: "8.1", title: "Common Adjectives",
              vocab: [
                { id: "v8.1.1", native: "ভালো", pronunciation: "bhalo", meaning: "Good" },
                { id: "v8.1.2", native: "খারাপ", pronunciation: "kharap", meaning: "Bad" },
                { id: "v8.1.3", native: "বড়", pronunciation: "boro", meaning: "Big" },
                { id: "v8.1.4", native: "ছোট", pronunciation: "chhoto", meaning: "Small" },
                { id: "v8.1.5", native: "গরম", pronunciation: "gorom", meaning: "Hot" },
                { id: "v8.1.6", native: "ঠান্ডা", pronunciation: "thanda", meaning: "Cold" },
                { id: "v8.1.7", native: "নতুন", pronunciation: "notun", meaning: "New" },
                { id: "v8.1.8", native: "পুরাতন", pronunciation: "puraton", meaning: "Old (thing)" },
                { id: "v8.1.9", native: "মজা", pronunciation: "moja", meaning: "Delicious / Fun" },
                { id: "v8.1.10", native: "সুন্দর", pronunciation: "shundor", meaning: "Beautiful" },
                { id: "v8.1.11", native: "দামী", pronunciation: "dami", meaning: "Expensive" },
                { id: "v8.1.12", native: "সস্তা", pronunciation: "shosta", meaning: "Cheap" },
                { id: "v8.1.13", native: "দ্রুত", pronunciation: "druto", meaning: "Fast" },
                { id: "v8.1.14", native: "সহজ", pronunciation: "shohoj", meaning: "Easy" },
                { id: "v8.1.15", native: "কঠিন", pronunciation: "kothin", meaning: "Difficult" }
              ]
            },
            {
              id: "8.2", title: "Expressing Likes and Dislikes",
              vocab: [
                { id: "v8.2.1", native: "আমার ভালো লাগে", pronunciation: "Amar bhalo lage", meaning: "I like it (like Spanish me gusta and Arabic عاجبني)" },
                { id: "v8.2.2", native: "আমার ভালো লাগে না", pronunciation: "Amar bhalo lage na", meaning: "I don't like it" },
                { id: "v8.2.3", native: "আমি বাংলা খাবার ভালোবাসি", pronunciation: "Ami Bangla khabar bhalobashi", meaning: "I love Bangladeshi food" },
                { id: "v8.2.4", native: "অনেক মজা!", pronunciation: "Onek moja!", meaning: "So fun! / So delicious!" },
                { id: "v8.2.5", native: "খুব সুন্দর", pronunciation: "Khub shundor", meaning: "Very beautiful" }
              ]
            },
            {
              id: "8.3", title: "'Very' and Intensifiers",
              vocab: [
                { id: "v8.3.1", native: "অনেক", pronunciation: "Onek", meaning: "Very / A lot (like Arabic كتير)" },
                { id: "v8.3.2", native: "খুব", pronunciation: "Khub", meaning: "Very (like Arabic كتير)" },
                { id: "v8.3.3", native: "একদম", pronunciation: "Ekdom", meaning: "Absolutely / Totally" },
                { id: "v8.3.4", native: "সত্যি", pronunciation: "Shotti", meaning: "Really / Truly (like Arabic والله)" }
              ]
            }
          ]
        }
      ]
    },

    /* ===== PHASE 3: Real Conversation (Weeks 9-14) ===== */
    {
      title: "Phase 3: Real Conversation",
      subtitle: "Weeks 9-14 -- Food, Family, Feelings, Daily Life",
      weeks: [
        {
          id: "w9",
          title: "Week 9: Food and Eating",
          sections: [
            {
              id: "9.1", title: "Food Vocabulary",
              vocab: [
                { id: "v9.1.1", native: "ভাত", pronunciation: "bhat", meaning: "Rice (THE foundation of every meal -- like خبز in Syria)" },
                { id: "v9.1.2", native: "রুটি", pronunciation: "ruti", meaning: "Flatbread" },
                { id: "v9.1.3", native: "মাছ", pronunciation: "machh", meaning: "Fish (Bengalis LOVE fish)" },
                { id: "v9.1.4", native: "মাংস", pronunciation: "mangsho", meaning: "Meat (usually goat/beef)" },
                { id: "v9.1.5", native: "মুরগ", pronunciation: "murgi", meaning: "Chicken" },
                { id: "v9.1.6", native: "ডাল", pronunciation: "dal", meaning: "Lentil soup -- eaten daily with rice" },
                { id: "v9.1.7", native: "শাকসবজ", pronunciation: "shak-shobji", meaning: "Vegetables" },
                { id: "v9.1.8", native: "বিরিয়ানি", pronunciation: "biriyani", meaning: "Spiced rice with meat (like Syrian كبسة)" },
                { id: "v9.1.9", native: "কাচ্চি", pronunciation: "kachchi", meaning: "Dhaka-style biryani with raw-marinated meat" },
                { id: "v9.1.10", native: "হিলসা মাছ", pronunciation: "hilsha machh", meaning: "Hilsa fish -- the national fish of Bangladesh" },
                { id: "v9.1.11", native: "ভর্তা", pronunciation: "bhorta", meaning: "Mashed vegetable/fish dishes (like Arabic متبّل)" },
                { id: "v9.1.12", native: "সিঙারা", pronunciation: "shingara", meaning: "Samosa-like pastry (like Arabic سمبوسك)" },
                { id: "v9.1.13", native: "ফুচকা", pronunciation: "fuchka", meaning: "Crispy hollow balls with tangy water -- iconic street food" },
                { id: "v9.1.14", native: "পিঠা", pronunciation: "pitha", meaning: "Traditional rice cakes -- winter specialty" },
                { id: "v9.1.15", native: "মিষ্টি", pronunciation: "mishti", meaning: "Bengali sweets (milk-based)" },
                { id: "v9.1.16", native: "চা", pronunciation: "cha", meaning: "Tea (THE national drink)" },
                { id: "v9.1.17", native: "দুধ চা", pronunciation: "dudh cha", meaning: "Milk tea (default way tea is served)" },
                { id: "v9.1.18", native: "লাচ্ছি", pronunciation: "lachhi", meaning: "Yogurt drink (like Arabic عيران!)" },
                { id: "v9.1.19", native: "শরবত", pronunciation: "shorbot", meaning: "Sweet drink (from Arabic شربت!)" },
                { id: "v9.1.20", native: "পানি", pronunciation: "pani", meaning: "Water" }
              ]
            },
            {
              id: "9.2", title: "Eating Conversations",
              vocab: [
                { id: "v9.2.1", native: "বিসমিল্লাহ", pronunciation: "Bismillah", meaning: "In God's name -- said before eating (from Arabic بسم الله)" },
                { id: "v9.2.2", native: "খাওয়া হইছে?", pronunciation: "Khaowa hoichhe?", meaning: "Have you eaten? (common greeting, like Arabic أكلت؟)" },
                { id: "v9.2.3", native: "খান, খান!", pronunciation: "Khan, khan!", meaning: "Eat, eat! (host insisting -- like Arabic تفضّلي كولي!)" },
                { id: "v9.2.4", native: "খাবারটা অনেক মজা", pronunciation: "Khabarta onek moja", meaning: "The food is very delicious" },
                { id: "v9.2.5", native: "আপনার হাতের রান্না অসাধারণ", pronunciation: "Apnar hater ranna oshadharon", meaning: "Your cooking is extraordinary (like Arabic يسلمو إيديكِ)" },
                { id: "v9.2.6", native: "বাস, আর পারবো না", pronunciation: "Bash, ar parbo na", meaning: "Enough, I can't eat more (like Arabic خلص، شبعت)" },
                { id: "v9.2.7", native: "আলহামদুলিল্লাহ", pronunciation: "Alhamdulillah", meaning: "Praise God -- said after eating (from Arabic الحمد لله)" }
              ]
            },
            {
              id: "9.3", title: "Dialogue: Being a Guest",
              vocab: [
                { id: "v9.3.1", native: "বাড়ি তো তোমার বাড়ি", pronunciation: "Bari to tomar bari", meaning: "This house is your house (like Arabic البيت بيتك)" },
                { id: "v9.3.2", native: "কষ্ট করবেন না", pronunciation: "Koshto korben na", meaning: "Don't trouble yourself (like Arabic لا تتعبي حالك)" },
                { id: "v9.3.3", native: "খালাম্মা", pronunciation: "khalamma", meaning: "Auntie (respectful term for older women, like Arabic خالتو)" },
                { id: "v9.3.4", native: "চাচা", pronunciation: "chacha", meaning: "Uncle (for older men, like Arabic عمّو)" }
              ]
            }
          ]
        },
        {
          id: "w10",
          title: "Weeks 10-11: Family, Emotions, and Reactions",
          sections: [
            {
              id: "10.1", title: "Core Family Terms",
              vocab: [
                { id: "v10.1.1", native: "আব্বা / বাবা", pronunciation: "abba / baba", meaning: "Father (like Arabic بابا)" },
                { id: "v10.1.2", native: "আম্মা / মা", pronunciation: "amma / ma", meaning: "Mother (like Arabic ماما)" },
                { id: "v10.1.3", native: "ভাই / বড় ভাই", pronunciation: "bhai / boro bhai", meaning: "Brother / Elder brother" },
                { id: "v10.1.4", native: "আপা / বড় বোন", pronunciation: "apa / boro bon", meaning: "Elder sister" },
                { id: "v10.1.5", native: "ছোট ভাই", pronunciation: "chhoto bhai", meaning: "Younger brother" },
                { id: "v10.1.6", native: "ছোট বোন", pronunciation: "chhoto bon", meaning: "Younger sister" },
                { id: "v10.1.7", native: "ছেলে", pronunciation: "chhele", meaning: "Son" },
                { id: "v10.1.8", native: "মেয়ে", pronunciation: "meye", meaning: "Daughter" },
                { id: "v10.1.9", native: "স্বামী / জামাই", pronunciation: "shami / jamai", meaning: "Husband" },
                { id: "v10.1.10", native: "স্ত্রী / বউ", pronunciation: "stri / bou", meaning: "Wife" }
              ]
            },
            {
              id: "10.2", title: "Extended Family",
              vocab: [
                { id: "v10.2.1", native: "চাচা", pronunciation: "chacha", meaning: "Paternal uncle (like Arabic عمّ)" },
                { id: "v10.2.2", native: "মামা", pronunciation: "mama", meaning: "Maternal uncle (like Arabic خال)" },
                { id: "v10.2.3", native: "ফুফু", pronunciation: "fufu", meaning: "Paternal aunt (like Arabic عمّة)" },
                { id: "v10.2.4", native: "খালা", pronunciation: "khala", meaning: "Maternal aunt (SAME as Arabic خالة!)" },
                { id: "v10.2.5", native: "দাদা / নানা", pronunciation: "dada / nana", meaning: "Grandfather (paternal / maternal)" },
                { id: "v10.2.6", native: "দাদি / নানি", pronunciation: "dadi / nani", meaning: "Grandmother (paternal / maternal)" }
              ]
            },
            {
              id: "10.3", title: "Social Use of Kinship Terms",
              vocab: [
                { id: "v10.3.1", native: "ভাই", pronunciation: "bhai", meaning: "Brother -- to any man your age (like Arabic أخي)" },
                { id: "v10.3.2", native: "আপা", pronunciation: "apa", meaning: "Sister -- to any woman your age or slightly older" },
                { id: "v10.3.3", native: "চাচা", pronunciation: "chacha", meaning: "Uncle -- to any older man (like Arabic عمّو)" },
                { id: "v10.3.4", native: "খালাম্মা", pronunciation: "khalamma", meaning: "Auntie -- to any older woman (like Arabic خالتو)" },
                { id: "v10.3.5", native: "মা", pronunciation: "ma", meaning: "Dear (lit: mother) -- affectionate for a younger woman" },
                { id: "v10.3.6", native: "বাবা", pronunciation: "baba", meaning: "Dear (lit: father) -- affectionate for a younger man" }
              ]
            },
            {
              id: "11.1", title: "Expressing Emotions",
              vocab: [
                { id: "v11.1.1", native: "খুশি", pronunciation: "khushi", meaning: "Happy (like Arabic مبسوط)" },
                { id: "v11.1.2", native: "রাগ", pronunciation: "rag", meaning: "Angry (like Arabic زعلان)" },
                { id: "v11.1.3", native: "ক্লান্ত", pronunciation: "klanto", meaning: "Tired (like Arabic تعبان)" },
                { id: "v11.1.4", native: "ক্ষুধা লাগছে", pronunciation: "khudha lagchhe", meaning: "I'm hungry (like Arabic جوعان)" },
                { id: "v11.1.5", native: "তৃষ্ণা লাগছে", pronunciation: "trishna lagchhe", meaning: "I'm thirsty (like Arabic عطشان)" },
                { id: "v11.1.6", native: "ভয় লাগছে", pronunciation: "bhoy lagchhe", meaning: "I'm scared (like Arabic خايف)" },
                { id: "v11.1.7", native: "মনে পড়তেছে", pronunciation: "mone portechhe", meaning: "Missing someone (like Arabic مشتاق)" },
                { id: "v11.1.8", native: "বোরিং", pronunciation: "boring", meaning: "Bored (English loanword)" }
              ]
            },
            {
              id: "11.2", title: "Common Reactions and Exclamations",
              vocab: [
                { id: "v11.2.1", native: "সত্যি?", pronunciation: "Shotti?", meaning: "Really? (like Arabic عنجد؟ / والله؟)" },
                { id: "v11.2.2", native: "আরে বাবা!", pronunciation: "Are baba!", meaning: "Oh my! / Wow! (like Arabic يا الله!)" },
                { id: "v11.2.3", native: "মাশাআল্লাহ!", pronunciation: "Masha'Allah!", meaning: "How wonderful! (same as Arabic ماشاء الله)" },
                { id: "v11.2.4", native: "আল্লাহ!", pronunciation: "Allah!", meaning: "Oh God! (shock, like Arabic يا الله!)" },
                { id: "v11.2.5", native: "বেচারা!", pronunciation: "Bechara!", meaning: "Poor thing! (like Arabic يا حرام)" },
                { id: "v11.2.6", native: "আস্তাগফিরুল্লাহ!", pronunciation: "Astagfirullah!", meaning: "God forgive! (same as Arabic أستغفر الله)" },
                { id: "v11.2.7", native: "সুবহানাল্লাহ!", pronunciation: "Subhanallah!", meaning: "Glory to God! (same as Arabic سبحان الله)" },
                { id: "v11.2.8", native: "কী সুন্দর!", pronunciation: "Ki shundor!", meaning: "How beautiful! (like Arabic شو حلو!)" },
                { id: "v11.2.9", native: "বাস!", pronunciation: "Bash!", meaning: "Enough! / Stop! (like Arabic خلص!)" }
              ]
            }
          ]
        },
        {
          id: "w12",
          title: "Weeks 12-14: Connecting Ideas & Real Life",
          sections: [
            {
              id: "12.1", title: "Conjunctions and Connectors",
              vocab: [
                { id: "v12.1.1", native: "আর / এবং", pronunciation: "ar / ebong", meaning: "And (like Arabic و)" },
                { id: "v12.1.2", native: "কিন্তু / বাট", pronunciation: "kintu / bat", meaning: "But (like Arabic بس)" },
                { id: "v12.1.3", native: "কারণ", pronunciation: "karon", meaning: "Because (like Arabic لأنو)" },
                { id: "v12.1.4", native: "তারপর", pronunciation: "tarpor", meaning: "Then / After that (like Arabic بعدين)" },
                { id: "v12.1.5", native: "আগে", pronunciation: "age", meaning: "Before (like Arabic قبل ما)" },
                { id: "v12.1.6", native: "পরে", pronunciation: "pore", meaning: "After (like Arabic بعد ما)" },
                { id: "v12.1.7", native: "যখন", pronunciation: "jokhon", meaning: "When (like Arabic لمّا)" },
                { id: "v12.1.8", native: "যদি", pronunciation: "jodi", meaning: "If (like Arabic إذا)" },
                { id: "v12.1.9", native: "জন্য", pronunciation: "jonno", meaning: "For / In order to (like Arabic عشان)" },
                { id: "v12.1.10", native: "মানে", pronunciation: "mane", meaning: "I mean / Like (same filler as Arabic يعني!)" }
              ]
            },
            {
              id: "12.2", title: "The 'Used to' Form (Habitual Past)",
              vocab: [
                { id: "v12.2.1", native: "আমি স্কুলে যেতাম", pronunciation: "Ami skule jetam", meaning: "I used to go to school (like Arabic كنت بروح عالمدرسة)" },
                { id: "v12.2.2", native: "সে রেস্টুরেন্টে কাজ করতো", pronunciation: "She resturente kaj korto", meaning: "He used to work at a restaurant" },
                { id: "v12.2.3", native: "আমরা রাস্তায় খেলতাম", pronunciation: "Amra rastay kheltam", meaning: "We used to play in the street" }
              ]
            },
            {
              id: "12.3", title: "Mini Story Practice",
              vocab: [
                { id: "v12.3.1", native: "গতকাল আমি বাজারে গেলাম", pronunciation: "Gotokal ami bazare gelam", meaning: "Yesterday I went to the bazaar" },
                { id: "v12.3.2", native: "সবাই মিলে খেলাম", pronunciation: "Shobai mile khelam", meaning: "We all ate together" }
              ]
            },
            {
              id: "13.1", title: "At the Hospital / Doctor's Office",
              vocab: [
                { id: "v13.1.1", native: "আমার ডাক্তার লাগবে", pronunciation: "Amar daktar lagbe", meaning: "I need a doctor" },
                { id: "v13.1.2", native: "হাসপাতাল কোথায়?", pronunciation: "Hashpatal kothay?", meaning: "Where is the hospital?" },
                { id: "v13.1.3", native: "মাথা ব্যথা করতেছে", pronunciation: "Matha bytha kortechhe", meaning: "I have a headache" },
                { id: "v13.1.4", native: "পেটে ব্যথা", pronunciation: "Pete bytha", meaning: "Stomach ache" },
                { id: "v13.1.5", native: "জ্বর আছে", pronunciation: "Jor achhe", meaning: "I have a fever" },
                { id: "v13.1.6", native: "ওষুধ লাগবে", pronunciation: "Oshudh lagbe", meaning: "I need medicine" },
                { id: "v13.1.7", native: "ফার্মেসি কোথায়?", pronunciation: "Pharmacy kothay?", meaning: "Where is the pharmacy?" }
              ]
            },
            {
              id: "13.2", title: "Phone Conversations",
              vocab: [
                { id: "v13.2.1", native: "হ্যালো", pronunciation: "Hello", meaning: "Hello (phone)" },
                { id: "v13.2.2", native: "কে বলছেন?", pronunciation: "Ke bolchhen?", meaning: "Who is speaking?" },
                { id: "v13.2.3", native: "আমি সারা বলছি", pronunciation: "Ami Sara bolchhi", meaning: "This is Sara speaking" },
                { id: "v13.2.4", native: "পরে ফোন করবো", pronunciation: "Pore phone korbo", meaning: "I'll call later" },
                { id: "v13.2.5", native: "মেসেজ দেন", pronunciation: "Message den", meaning: "Send me a message" }
              ]
            },
            {
              id: "13.3", title: "Shopping at the বাজার (Bazaar)",
              vocab: [
                { id: "v13.3.1", native: "এইটা কত?", pronunciation: "Eita koto?", meaning: "How much is this?" },
                { id: "v13.3.2", native: "আপনার কাছে … আছে?", pronunciation: "Apnar kachhe … achhe?", meaning: "Do you have...?" },
                { id: "v13.3.3", native: "দেখতে চাই", pronunciation: "Dekhte chai", meaning: "I want to see/look" },
                { id: "v13.3.4", native: "অন্য রং আছে?", pronunciation: "Onno rong achhe?", meaning: "Is there another color?" },
                { id: "v13.3.5", native: "বড় হইছে", pronunciation: "Boro hoichhe", meaning: "It's too big" },
                { id: "v13.3.6", native: "ছোট হইছে", pronunciation: "Chhoto hoichhe", meaning: "It's too small" },
                { id: "v13.3.7", native: "এইটা নিবো", pronunciation: "Eita nibo", meaning: "I'll take this" },
                { id: "v13.3.8", native: "না ধন্যবাদ, শুধু দেখতেছি", pronunciation: "Na dhonnobad, shudhu dekhtechhi", meaning: "No thanks, just looking" }
              ]
            },
            {
              id: "13.4", title: "Emergency Phrases",
              vocab: [
                { id: "v13.4.1", native: "সাহায্য করেন!", pronunciation: "Shahajjo koren!", meaning: "Help!" },
                { id: "v13.4.2", native: "আগুন!", pronunciation: "Agun!", meaning: "Fire!" },
                { id: "v13.4.3", native: "চোর!", pronunciation: "Chor!", meaning: "Thief!" },
                { id: "v13.4.4", native: "অ্যাম্বুলেন্স ডাকেন", pronunciation: "Ambulance daken", meaning: "Call an ambulance" },
                { id: "v13.4.5", native: "পুলিশ ডাকেন", pronunciation: "Police daken", meaning: "Call the police" },
                { id: "v13.4.6", native: "আমি হারাইয়া গেছি", pronunciation: "Ami haraiya gechhi", meaning: "I'm lost" }
              ]
            }
          ]
        }
      ]
    },

    /* ===== PHASE 4: Fluency & Culture ===== */
    {
      title: "Phase 4: Fluency & Culture",
      subtitle: "Proverbs, Arabic Loanwords, Grammar Reference",
      weeks: [
        {
          id: "w15",
          title: "Proverbs, Arabic Loanwords, Grammar Reference",
          sections: [
            {
              id: "14.1", title: "Bangla Proverbs",
              vocab: [
                { id: "v14.1.1", native: "অতি চালাকের গলায় দড়ি", pronunciation: "Oti chalaker golay dori", meaning: "The rope ends up around the too-clever person's neck -- being too clever backfires" },
                { id: "v14.1.2", native: "গাছে কাঁঠাল গোঁফে তেল", pronunciation: "Gachhe kathal gophe tel", meaning: "Jackfruit still on tree but oil on mustache -- don't count your chickens" },
                { id: "v14.1.3", native: "যত গর্জে তত বর্ষে না", pronunciation: "Joto gorje toto borshe na", meaning: "The more it thunders the less it rains -- big talkers rarely deliver" },
                { id: "v14.1.4", native: "আপনি বাঁচলে বাপের নাম", pronunciation: "Apni bachle baper nam", meaning: "If you survive, your father's name lives on -- self-preservation first" },
                { id: "v14.1.5", native: "দশের লাঠি একের বোঝা", pronunciation: "Dosher lathi eker bojha", meaning: "Ten people's stick is one person's burden -- many hands make light work" }
              ]
            },
            {
              id: "14.2", title: "Arabic Loanwords in Bangla",
              vocab: [
                { id: "v14.2.1", native: "দুনিয়া", pronunciation: "duniya", meaning: "World (from Arabic دنيا)" },
                { id: "v14.2.2", native: "হিসাব", pronunciation: "hishab", meaning: "Account / Calculation (from Arabic حساب)" },
                { id: "v14.2.3", native: "খবর", pronunciation: "khobor", meaning: "News (from Arabic خبر)" },
                { id: "v14.2.4", native: "জবাব", pronunciation: "jobab", meaning: "Answer (from Arabic جواب)" },
                { id: "v14.2.5", native: "মাফ", pronunciation: "maf", meaning: "Forgiveness (from Arabic معفو)" },
                { id: "v14.2.6", native: "হক", pronunciation: "hok", meaning: "Right / Truth (from Arabic حق)" },
                { id: "v14.2.7", native: "ওয়াক্ত", pronunciation: "waqt", meaning: "Time (from Arabic وقت)" },
                { id: "v14.2.8", native: "শুকরিয়া", pronunciation: "shukriya", meaning: "Thanks (from Arabic شكراً)" },
                { id: "v14.2.9", native: "খালা", pronunciation: "khala", meaning: "Maternal aunt (from Arabic خالة)" },
                { id: "v14.2.10", native: "জানাজা", pronunciation: "janaja", meaning: "Funeral prayer (from Arabic جنازة)" },
                { id: "v14.2.11", native: "নিয়ম", pronunciation: "niyom", meaning: "Rule / System (from Arabic نظام)" },
                { id: "v14.2.12", native: "কবর", pronunciation: "kobor", meaning: "Grave (from Arabic قبر)" },
                { id: "v14.2.13", native: "তারিখ", pronunciation: "tarikh", meaning: "Date (from Arabic تاريخ)" },
                { id: "v14.2.14", native: "কিতাব", pronunciation: "kitab", meaning: "Book (religious) (from Arabic كتاب)" },
                { id: "v14.2.15", native: "মুশকিল", pronunciation: "mushkil", meaning: "Problem (from Arabic مشكلة)" },
                { id: "v14.2.16", native: "আজব", pronunciation: "ajob", meaning: "Strange / Wonderful (from Arabic عجيب)" },
                { id: "v14.2.17", native: "হালাল", pronunciation: "halal", meaning: "Halal (from Arabic حلال)" },
                { id: "v14.2.18", native: "হারাম", pronunciation: "haram", meaning: "Haram (from Arabic حرام)" },
                { id: "v14.2.19", native: "ইন্তেকাল", pronunciation: "intekal", meaning: "Death / Passing (from Arabic انتقال)" }
              ]
            },
            {
              id: "14.3", title: "Grammar Summary -- Negation at a Glance",
              vocab: [
                { id: "v14.3.1", native: "করি না", pronunciation: "kori na", meaning: "I don't do (present: verb + না)" },
                { id: "v14.3.2", native: "করতেছি না", pronunciation: "kortechhi na", meaning: "I'm not doing (continuous: verb + না)" },
                { id: "v14.3.3", native: "করি নাই", pronunciation: "kori nai", meaning: "I didn't do (past: verb + নাই -- BD marker)" },
                { id: "v14.3.4", native: "করবো না", pronunciation: "korbo na", meaning: "I won't do (future: verb + না)" },
                { id: "v14.3.5", native: "করতাম না", pronunciation: "kortam na", meaning: "I wouldn't do / I didn't used to (habitual past: verb + না)" },
                { id: "v14.3.6", native: "চিন্তা করো না", pronunciation: "chinta koro na", meaning: "Don't worry (imperative negative)" },
                { id: "v14.3.7", native: "বলতে পারি না", pronunciation: "bolte pari na", meaning: "I can't say (ability negative)" }
              ]
            },
            {
              id: "14.4", title: "Practice Strategy",
              vocab: [
                { id: "v14.4.1", native: "শুভকামনা!", pronunciation: "Shubhokamona!", meaning: "Best wishes!" },
                { id: "v14.4.2", native: "ভালো থাকবেন", pronunciation: "Bhalo thakben", meaning: "Stay well" }
              ]
            }
          ]
        }
      ]
    }
  ]
};
