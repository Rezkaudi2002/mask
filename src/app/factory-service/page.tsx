"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const FactoryService = () => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("data-animate");
          if (id) {
            setIsVisible((prev) => ({ ...prev, [id]: true }));
          }
        }
      });
    }, observerOptions);

    // Observe elements
    const elementsToObserve = document.querySelectorAll("[data-animate]");
    elementsToObserve.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const toggleFAQ = (index: number) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const problems = [
    "工場を閉鎖したいが、何から手をつければいいか分からない",
    "機械設備の処分費用が心配",
    "複数の業者に依頼するのは手間がかかる",
    "廃業後の建物を原状回復して返却しなければならない",
  ];

  const reasons = [
    "仕事の絶対量が減っていてこれ以上経営が続けられない",
    "代表の後継者がいない",
    "昔の工場だから道路幅が狭くて大型車（搬入車）が出入できない",
    "短期間で片付けなくてはいけない",
    "重量物（2階を含む）が多いが、自分でなんとかすることが出来ない",
  ];

  const equipment = [
    {
      id: 1,
      title: "工作機械（NC旋盤、マシニングセンター、フライス盤）",
      image:
        "https://mac-hadis.s3.ap-northeast-1.amazonaws.com/facotry-services/Equipments/%E5%B7%A5%E4%BD%9C%E6%A9%9F%E6%A2%B0%EF%BC%88NC%E6%97%8B%E7%9B%A4%E3%80%81%E3%83%9E%E3%82%B7%E3%83%8B%E3%83%B3%E3%82%B0%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%E3%80%81%E3%83%95%E3%83%A9%E3%82%A4%E3%82%B9%E7%9B%A4%EF%BC%89.png",
    },
    {
      id: 2,
      title: "プレス機械・板金機械",
      image:
        "https://mac-hadis.s3.ap-northeast-1.amazonaws.com/facotry-services/Equipments/%E3%83%97%E3%83%AC%E3%82%B9%E6%A9%9F%E6%A2%B0%E3%83%BB%E6%9D%BF%E9%87%91%E6%A9%9F%E6%A2%B0.png",
    },
    {
      id: 3,
      title: "産業用ロボット・自動化設備",
      image:
        "https://mac-hadis.s3.ap-northeast-1.amazonaws.com/facotry-services/Equipments/%E7%94%A3%E6%A5%AD%E7%94%A8%E3%83%AD%E3%83%9C%E3%83%83%E3%83%88%E3%83%BB%E8%87%AA%E5%8B%95%E5%8C%96%E8%A8%AD%E5%82%99.png",
    },
    {
      id: 4,
      title: "検査・測定機器",
      image:
        "https://mac-hadis.s3.ap-northeast-1.amazonaws.com/facotry-services/Equipments/%E6%A4%9C%E6%9F%BB%E3%83%BB%E6%B8%AC%E5%AE%9A%E6%A9%9F%E5%99%A8.png",
    },
    {
      id: 5,
      title: "コンプレッサー・発電機",
      image:
        "https://mac-hadis.s3.ap-northeast-1.amazonaws.com/facotry-services/Equipments/%E3%82%B3%E3%83%B3%E3%83%97%E3%83%AC%E3%83%83%E3%82%B5%E3%83%BC%E3%83%BB%E7%99%BA%E9%9B%BB%E6%A9%9F.png",
    },
    {
      id: 6,
      title: "フォークリフト・クレーン",
      image:
        "https://mac-hadis.s3.ap-northeast-1.amazonaws.com/facotry-services/Equipments/%E3%83%95%E3%82%A9%E3%83%BC%E3%82%AF%E3%83%AA%E3%83%95%E3%83%88%E3%83%BB%E3%82%AF%E3%83%AC%E3%83%BC%E3%83%B3.png",
    },
  ];

  const strengths = [
    {
      title: "1. 一括対応で手間削減",
      content:
        "買取・撤去・清掃まですべて当社で対応。（不用品の回収は行っておりません）",
    },
    {
      title: "2. コスト最適化",
      content:
        "買取可能な設備は適正価格で買取し、処分費用から相殺。トータルコストを削減します。",
    },
    {
      title: "3. 豊富な実績",
      content:
        "創業以来、様々な工場整理を手がけ、あらゆる業種・規模に対応してきました。",
    },
    {
      title: "4. 柔軟な対応力",
      content: "営業中の部分撤去 / 段階的な撤去 / 緊急対応",
    },
    {
      title: "5. 安全・安心の作業",
      content: "安全管理の徹底 / 守秘義務契約",
    },
  ];

  const processSteps = [
    {
      title: "STEP 1: お問い合わせ・ご相談",
      content:
        "まずはお電話またはメール、LINE等からご相談ください。概要をお聞かせいただきます。",
    },
    {
      title: "STEP 2: 現地調査・買取査定",
      content:
        "専門スタッフが現地にお伺いし、現地の確認と機械設備や在庫品の査定を行います。",
    },
    {
      title: "STEP 3: お見積もり",
      content: "お見積もりを作成します。",
    },
    {
      title: "STEP 4: ご契約・スケジュール調整",
      content:
        "ご納得いただけましたら、お客様のご都合に合わせて作業日程を決定します。",
    },
    {
      title: "STEP 5: 撤去・搬出作業",
      content: "安全を最優先に、計画的に撤去・搬出作業を実施します。",
    },
    {
      title: "STEP 6: 完了確認・お支払い",
      content: "お客様立会いのもと完了確認を行い、精算させていただきます。",
    },
  ];

  const faqs = [
    {
      question: "Q: 稼働中の工場でも部分的な整理は可能ですか？",
      answer:
        "A: はい、可能です。営業に支障がないよう、エリアを区切って段階的に作業を進めることができます。",
    },
    {
      question: "Q: 土日の作業は可能ですか？",
      answer:
        "A: 基本的には平日営業となりますが、平日が難しい場合は休日作業にも対応いたしますのでご相談ください。",
    },
    {
      question: "Q: 見積もり後のキャンセルは可能ですか？",
      answer:
        "A: もちろん可能です。お見積りは無料ですので、じっくりご検討ください。",
    },
    {
      question: "Q: 機械の買取価格はどのように決まりますか？",
      answer:
        "A: 機種・年式・稼働状況・需要などを総合的に判断し、適正価格をご提示します。",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 leading-relaxed">
      {/* Hero Section */}
      {/* Hero Section */}
      <section
        className="relative overflow-hidden text-white min-h-[80vh]"
        style={{
          backgroundImage: `
      linear-gradient(to right, rgb(153, 27, 27), rgb(127, 29, 29), transparent),
      url("https://mac-hadis.s3.ap-northeast-1.amazonaws.com/facotry-services/factory-hero.png")
    `,
          backgroundSize: "auto",
          backgroundPosition: "left",
        }}
      >
        {/* Background photo on the right */}
        <div className="absolute inset-y-0 right-0 w-[40%] md:w-[35%] lg:w-[40%]">
          <div className="relative h-full w-full">
            {/* <Image
              src="https://mac-hadis.s3.ap-northeast-1.amazonaws.com/facotry-services/factory-hero.png"
              alt="現場スタッフ"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 35vw, 30vw"
            /> */}
          </div>
        </div>

        {/* 🔴 Gradient overlay spanning ENTIRE hero (from left to right, over photo too) */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-red-800 via-red-900 to-transparent"></div> */}

        {/* Content container */}
        <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 lg:px-10 h-full text-center">
          <div className="grid grid-cols-12 gap-6 items-center min-h-[80vh]">
            {/* Left text area */}
            <div className="col-span-12 md:col-span-8 lg:col-span-7">
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
                工場整理・閉鎖支援サービス
              </h1>
              <p className="text-lg md:text-2xl text-yellow-300 mb-6">
                機械撤去から清掃まで、廃業・移転を完全サポート
              </p>
              <p className="text-base md:text-lg/relaxed max-w-3xl">
                ハディズは、工場の閉鎖・移転・廃業に伴うあらゆる作業を一括でお引き受けいたします。
                長年の経験と実績により、機械設備の適正な買取から、最終清掃まで、
                お客様の負担を最小限に抑えながら、スムーズな工場整理を実現します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Image Placeholder */}
      {/* <div className="fs-container max-w-6xl mx-auto px-5 -mt-12 relative z-10">
        <div className="bg-pink-100 border-2 border-dashed border-red-800 rounded-lg h-96 flex items-center justify-center">
          <span className="text-red-800 text-xl font-bold">画像をここに配置</span>
        </div>
      </div> */}

      {/* Problems Section */}
      <section className="bg-white py-20">
        <div className="fs-container max-w-6xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-red-800 mb-4">
              工場整理の課題を解決します
            </h2>
            <p className="text-xl text-gray-600">
              こんなお悩みはありませんか？
            </p>
          </div>

          <div className="bg-pink-100 rounded-xl p-10 mb-8">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="flex items-start mb-5 last:mb-0 animate-fade-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-red-800 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  !
                </div>
                <p className="text-lg">{problem}</p>
              </div>
            ))}
          </div>

          <div className="bg-yellow-400 text-red-800 p-8 rounded-lg text-center text-xl font-bold shadow-lg">
            ハディズなら、これらすべての課題をワンストップで解決いたします。
          </div>
        </div>
      </section>

      {/* Reasons Section */}
      <section className="bg-gray-100 py-20">
        <div className="fs-container max-w-6xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-red-800 mb-4">
              工場の移転・閉鎖廃業による片付けのご依頼理由
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {reasons.map((reason, index) => (
              <div
                key={index}
                data-animate={`reason-${index}`}
                className={`bg-white p-8 rounded-lg shadow-md transition-all duration-700 hover:transform hover:-translate-y-2 hover:shadow-xl ${
                  isVisible[`reason-${index}`]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
              >
                <div className="bg-yellow-400 text-red-800 w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">
                  {index + 1}
                </div>
                <p>{reason}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xl text-gray-600 mb-4">
              このような方へご依頼頂いております
            </p>
            <p className="text-xl">弁護士様 / 事業主様 / 不動産会社様</p>
          </div>
        </div>
      </section>

      {/* Service Content Section */}
      <section className="bg-white py-20">
        <div className="fs-container max-w-6xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-red-800">サービス内容</h2>
          </div>

          <div className="mb-15">
            <div className="bg-red-800 text-white p-6 rounded-t-lg">
              <h3 className="text-2xl font-bold">機械設備買取・撤去</h3>
            </div>
            <div className="bg-gray-50 border-2 border-red-800 border-t-0 p-8 rounded-b-lg">
              <h4 className="text-red-800 text-xl font-bold mb-5">
                高価買取対象設備
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {equipment.map((item) => (
                  <div
                    key={item.id}
                    className="p-[20px_24px_60px_24px] lg:p-[25px_58px_65px_58px] min-h-[240px] lg:min-h-[258px] border-[2px] border-[#B81122] rounded-[4px] bg-white relative flex justify-center items-center"
                  >
                    <Image
                      alt={item.title}
                      src={item.image}
                      width={200}
                      height={200}
                    />
                    <p className="max-h-[100px] px-[10px] lg:px-[6px] py-[7px] lg:py-[12px] absolute bottom-0 left-0 w-full bg-[#B81122] text-white font-semibold text-[12px] lg:text-[15px] leading-[27px] lg:leading-[30px] overflow-hidden text-ellipsis line-clamp-2 text-center flex justify-center items-center">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>

              {/* <div className="bg-pink-100 border-2 border-dashed border-red-800 rounded-lg h-64 flex items-center justify-center mb-8">
                <span className="text-red-800 text-xl font-bold">
                  画像をここに配置
                </span>
              </div> */}

              <h4 className="text-red-800 text-xl font-bold mb-5">
                撤去作業の特徴
              </h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>専門技術者による安全な撤去作業</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>大型機械の搬出にも対応</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>配管・配線の適切な処理</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-3">✓</span>
                  <span>床面アンカーの撤去・補修</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section className="bg-pink-100 py-20">
        <div className="fs-container max-w-6xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-red-800">ハディズの強み</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {strengths.map((strength, index) => (
              <div
                key={index}
                data-animate={`strength-${index}`}
                className={`bg-white p-8 rounded-lg relative border-l-4 border-red-800 transition-all duration-700 ${
                  isVisible[`strength-${index}`]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
              >
                <h3 className="text-red-800 text-xl font-bold mb-3">
                  {strength.title}
                </h3>
                <p>{strength.content}</p>
              </div>
            ))}
          </div>

          <div className="bg-red-800 text-white p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">無料サービス</h3>
            <p className="text-xl">現地調査・見積もり / 買取査定</p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-20">
        <div className="fs-container max-w-6xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-red-800">作業の流れ</h2>
          </div>

          <div className="relative py-10">
            {/* Timeline line - hidden on mobile */}
            <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-0.5 bg-yellow-400 md:transform md:-translate-x-1/2"></div>

            {processSteps.map((step, index) => (
              <div key={index} className="relative mb-12 flex items-center">
                <div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0
                      ? "md:text-right md:pr-8"
                      : "md:ml-auto md:pl-8"
                  }`}
                >
                  <div className="bg-white border-2 border-yellow-400 rounded-lg p-8 shadow-md ml-12 md:ml-0">
                    <h3 className="text-red-800 text-xl font-bold mb-3">
                      {step.title}
                    </h3>
                    <p>{step.content}</p>
                  </div>
                </div>

                {/* Timeline marker */}
                <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-10 h-10 bg-red-800 text-white rounded-full flex items-center justify-center font-bold z-10">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Area Section */}
      <section className="bg-gray-100 py-20">
        <div className="fs-container max-w-6xl mx-auto px-5">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-red-800 mb-8">対応エリア</h2>
            <h3 className="text-red-800 text-2xl font-bold mb-5">
              重点対応エリア
            </h3>
            <p className="text-xl">
              関東全域（東京・神奈川・埼玉・千葉・茨城・栃木・群馬）
            </p>
            <div className="bg-pink-100 border-2 border-dashed border-red-800 rounded-lg h-72 max-w-2xl mx-auto mt-8 flex items-center justify-center">
              <span className="text-red-800 text-xl font-bold">
                地図をここに配置
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-100 py-20">
        <div className="fs-container max-w-6xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-red-800">よくあるご質問</h2>
          </div>

          <div className="space-y-5">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  className="w-full bg-red-800 text-white p-6 text-left flex justify-between items-center hover:bg-red-900 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold">{faq.question}</span>
                  <span
                    className={`text-2xl transition-transform ${
                      activeFAQ === index ? "transform rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`bg-gray-50 transition-all duration-300 overflow-hidden ${
                    activeFAQ === index ? "max-h-96 p-6" : "max-h-0"
                  }`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="bg-white py-20">
        <div className="fs-container max-w-6xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-red-800">
              工場整理成功のポイント
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-pink-100 p-8 rounded-lg">
              <h3 className="text-red-800 text-xl font-bold mb-4">
                早めの相談が成功の鍵
              </h3>
              <ul className="space-y-2">
                <li>• 計画的な撤去でコスト削減</li>
                <li>• 機械の価値が下がる前に買取</li>
                <li>• 余裕を持ったスケジュール調整</li>
              </ul>
            </div>
            <div className="bg-pink-100 p-8 rounded-lg">
              <h3 className="text-red-800 text-xl font-bold mb-4">
                信頼できるパートナー選び
              </h3>
              <ul className="space-y-2">
                <li>• 実績と経験の確認</li>
                <li>• 許可・資格の保有</li>
                <li>• 一括対応能力</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-br from-red-800 to-red-900 text-white py-20">
        <div className="fs-container max-w-6xl mx-auto px-5 text-center">
          <h2 className="text-4xl font-bold mb-6">お問い合わせ</h2>
          <h3 className="text-yellow-300 text-2xl mb-8">まずは無料相談から</h3>

          <div className="max-w-3xl mx-auto mb-10">
            <p className="text-lg leading-relaxed mb-4">
              「工場を閉鎖することになったが、どうすればいいか分からない」
              <br />
              「概算でいいので、費用を知りたい」
              <br />
              「買取可能な設備があるか確認したい」
            </p>
            <p className="text-xl">
              どんなご相談でも結構です。経験豊富なスタッフが丁寧にお答えいたします。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-10">
            <div className="bg-white/10 p-8 rounded-lg hover:bg-white/20 transition-colors hover:transform hover:-translate-y-2">
              <div className="text-4xl mb-4">📞</div>
              <h4 className="text-xl font-bold mb-2">お電話でのご相談</h4>
              <p>[電話番号]</p>
            </div>
            <div className="bg-white/10 p-8 rounded-lg hover:bg-white/20 transition-colors hover:transform hover:-translate-y-2">
              <div className="text-4xl mb-4">✉️</div>
              <h4 className="text-xl font-bold mb-2">メールでのお問い合わせ</h4>
              <p>[メールアドレス]</p>
            </div>
            <div className="bg-white/10 p-8 rounded-lg hover:bg-white/20 transition-colors hover:transform hover:-translate-y-2">
              <div className="text-4xl mb-4">💬</div>
              <h4 className="text-xl font-bold mb-2">LINEでのご相談</h4>
              <p>[LINE ID]</p>
            </div>
          </div>

          <div className="mb-10">
            <h4 className="text-yellow-300 text-xl font-bold mb-2">受付時間</h4>
            <p>平日 10:00～18:00 / 土曜 10:00～18:00</p>
          </div>

          <div className="pt-10 border-t border-white/20">
            <p className="text-lg leading-relaxed">
              工場の整理・閉鎖は、多くの企業様にとって初めての経験です。
              <br />
              ハディズは、お客様の立場に立って、最適な解決策をご提案いたします。
              <br />
              まずはお気軽にご相談ください。
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-in-left {
          animation: fade-in-left 0.5s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default FactoryService;
