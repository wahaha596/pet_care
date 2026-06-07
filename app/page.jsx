"use client";

import { useEffect, useState } from "react";

const spaceIds = ["lounge", "bath", "cat"];

export default function Home() {
  const [activePricePanel, setActivePricePanel] = useState("dogs");
  const [activeSpace, setActiveSpace] = useState("lounge");
  const [confirmation, setConfirmation] = useState("");

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSpace((currentSpace) => {
        const currentIndex = spaceIds.indexOf(currentSpace);
        return spaceIds[(currentIndex + 1) % spaceIds.length];
      });
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  function showSpace(step) {
    setActiveSpace((currentSpace) => {
      const currentIndex = spaceIds.indexOf(currentSpace);
      const nextIndex = (currentIndex + step + spaceIds.length) % spaceIds.length;
      return spaceIds[nextIndex];
    });
  }

  function handleBookingSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const owner = formData.get("owner");
    const pet = formData.get("pet");
    const kind = formData.get("kind");
    const service = formData.get("service");
    const time = `${formData.get("timeDate")} ${formData.get("time")}`;
    const arrival = formData.get("arrival");
    const note = formData.get("note");

    setConfirmation(
      note
        ? `${owner}，已为 ${pet}（${kind}）登记 ${time} 到店，偏好 ${arrival}，预约项目为 ${service}。备注已记录：${note}。门店会通过您填写的电话尽快确认。`
        : `${owner}，已为 ${pet}（${kind}）登记 ${time} 到店，偏好 ${arrival}，预约项目为 ${service}。门店会通过您填写的电话尽快确认。`,
    );

    form.reset();
  }

  return (
    <>
      
        <header className="site-header">
          <div className="container header-inner">
            <a className="brand" href="#top" aria-label="沐爪宠物洗护首页">
              <span className="brand-mark">MZ</span>
              <span className="brand-text">
                <strong>沐爪宠物洗护</strong>
                <span>犬猫分区洗护与轻美容</span>
              </span>
            </a>
            <nav className="site-nav" aria-label="页面导航">
              <a href="#services">服务项目</a>
              <a href="#pricing">参考价目</a>
              <a href="#space">门店环境</a>
              <a href="#booking">预约到店</a>
            </nav>
            <div className="header-contact">
              <span>营业中 10:00-20:00</span>
              <strong>400-888-5200</strong>
            </div>
          </div>
        </header>
      
        <main id="top">
          <section className="hero" aria-label="店铺介绍">
            <div className="container hero-inner">
              <div className="hero-grid">
                <div className="hero-copy">
                  <span className="eyebrow">洗护 / 吹整 / 猫咪安抚护理 / 会员预约</span>
                  <h1>洗护更放心</h1>
                  <p className="hero-desc">分区洗护，干净安心。</p>
                  <div className="cta-row">
                    <a className="btn btn-primary" href="#booking">立即预约</a>
                    <a className="btn btn-secondary" href="#pricing">查看价目</a>
                  </div>
                </div>
                <div className="hero-metrics" aria-label="门店亮点">
                  <div className="hero-metric">
                    <strong>45min</strong>
                    <span>小型犬基础洗护平均时长</span>
                  </div>
                  <div className="hero-metric">
                    <strong>犬猫分区</strong>
                    <span>独立洗护台、独立吹整位</span>
                  </div>
                  <div className="hero-metric">
                    <strong>1v1备注</strong>
                    <span>记录敏感点、习惯和护理建议</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
      
          <section className="quick-band" aria-label="门店信息">
            <div className="container quick-grid">
              <div>
                <strong>今日可约</strong>
                <span>10:30 / 13:00 / 16:30</span>
              </div>
              <div>
                <strong>到店须知</strong>
                <span>首次到店建议提前 10 分钟建档</span>
              </div>
              <div>
                <strong>护理特色</strong>
                <span>敏感肌香波、猫咪安抚流程</span>
              </div>
              <div>
                <strong>会员权益</strong>
                <span>洗护积分、生日月加项折扣</span>
              </div>
            </div>
          </section>
      
          <section className="services" id="services">
            <div className="container">
              <div className="section-head">
                <span>服务项目</span>
                <h2>专业洗护服务</h2>
                <p>犬猫分区护理，按体型、毛量和性格匹配服务方案。</p>
              </div>
              <div className="services-grid">
                <article className="service-card">
                  <div className="service-index">01 / 基础净洗</div>
                  <h3>清洁洗护</h3>
                  <p>适合定期清洁、掉毛季管理和日常气味改善。</p>
                  <ul>
                    <li>温和香波清洗</li>
                    <li>耳部清洁与脚底修整</li>
                    <li>吹干梳顺与基础造型</li>
                  </ul>
                </article>
                <article className="service-card">
                  <div className="service-index">02 / 皮毛调理</div>
                  <h3>护理洗护</h3>
                  <p>针对干燥毛躁、静电、打结和易敏感皮肤。</p>
                  <ul>
                    <li>皮毛调理素护理</li>
                    <li>局部结团开结</li>
                    <li>梳毛建议与居家护理说明</li>
                  </ul>
                </article>
                <article className="service-card">
                  <div className="service-index">03 / 猫咪专属</div>
                  <h3>安抚式猫洗</h3>
                  <p>控制时长与声量，优先稳定状态，再进入清洁。</p>
                  <ul>
                    <li>猫咪独立操作区</li>
                    <li>减压包裹与分段吹干</li>
                    <li>过敏点和应激备注建档</li>
                  </ul>
                </article>
                <article className="service-card">
                  <div className="service-index">04 / 轻美容加项</div>
                  <h3>局部精修</h3>
                  <p>适合洗护后顺带处理指甲、泪痕和局部修圆。</p>
                  <ul>
                    <li>指甲修剪与磨圆</li>
                    <li>眼周和脚底精修</li>
                    <li>口周清洁与香氛收尾</li>
                  </ul>
                </article>
              </div>
            </div>
          </section>
      
          <section id="pricing">
            <div className="container">
              <div className="section-head">
                <span>参考价目</span>
                <h2>清晰透明价目</h2>
                <p>常规价格提前展示，到店后按体型、毛量和打结程度确认。</p>
              </div>
              <div className="pricing-wrap">
                <div className="segmented" role="tablist" aria-label="价目切换">
                  <button className={`segment-btn ${activePricePanel === "dogs" ? "active" : ""}`} type="button" data-panel="dogs" role="tab" aria-selected={activePricePanel === "dogs"} onClick={() => setActivePricePanel("dogs")}>狗狗洗护</button>
                  <button className={`segment-btn ${activePricePanel === "cats" ? "active" : ""}`} type="button" data-panel="cats" role="tab" aria-selected={activePricePanel === "cats"} onClick={() => setActivePricePanel("cats")}>猫咪护理</button>
                  <button className={`segment-btn ${activePricePanel === "extras" ? "active" : ""}`} type="button" data-panel="extras" role="tab" aria-selected={activePricePanel === "extras"} onClick={() => setActivePricePanel("extras")}>单项加购</button>
                </div>
      
                <div className={`price-panel ${activePricePanel === "dogs" ? "active" : ""}`} id="dogs" role="tabpanel">
                  <div className="price-table">
                    <div className="price-row">
                      <div className="price-item">
                        <strong>小型犬基础洗护</strong>
                        <span>5kg 以内，短毛或常规毛量</span>
                      </div>
                      <div className="price-time">约 45-60 分钟</div>
                      <div className="price-value">¥128 起</div>
                    </div>
                    <div className="price-row">
                      <div className="price-item">
                        <strong>中型犬护理洗护</strong>
                        <span>5-15kg，含护毛调理与梳顺</span>
                      </div>
                      <div className="price-time">约 70-90 分钟</div>
                      <div className="price-value">¥188 起</div>
                    </div>
                    <div className="price-row">
                      <div className="price-item">
                        <strong>大型犬深层洗护</strong>
                        <span>15kg 以上，按毛量和时长评估</span>
                      </div>
                      <div className="price-time">约 90-140 分钟</div>
                      <div className="price-value">¥268 起</div>
                    </div>
                  </div>
                </div>
      
                <div className={`price-panel ${activePricePanel === "cats" ? "active" : ""}`} id="cats" role="tabpanel">
                  <div className="price-table">
                    <div className="price-row">
                      <div className="price-item">
                        <strong>短毛猫安抚洗护</strong>
                        <span>含指甲修剪、耳部清洁和分段吹干</span>
                      </div>
                      <div className="price-time">约 60-80 分钟</div>
                      <div className="price-value">¥188 起</div>
                    </div>
                    <div className="price-row">
                      <div className="price-item">
                        <strong>长毛猫护理洗护</strong>
                        <span>含开结评估、毛发梳顺和护理素</span>
                      </div>
                      <div className="price-time">约 80-110 分钟</div>
                      <div className="price-value">¥238 起</div>
                    </div>
                    <div className="price-row">
                      <div className="price-item">
                        <strong>猫咪局部护理</strong>
                        <span>不洗澡，适合脚底、屁股毛和指甲维护</span>
                      </div>
                      <div className="price-time">约 20-30 分钟</div>
                      <div className="price-value">¥69 起</div>
                    </div>
                  </div>
                </div>
      
                <div className={`price-panel ${activePricePanel === "extras" ? "active" : ""}`} id="extras" role="tabpanel">
                  <div className="price-table">
                    <div className="price-row">
                      <div className="price-item">
                        <strong>药浴或敏感肌香波升级</strong>
                        <span>适合皮肤状态不稳定或医生建议护理期</span>
                      </div>
                      <div className="price-time">按体型加时</div>
                      <div className="price-value">¥30 起</div>
                    </div>
                    <div className="price-row">
                      <div className="price-item">
                        <strong>开结与浮毛深梳</strong>
                        <span>适合换毛期、毛量厚和局部缠结</span>
                      </div>
                      <div className="price-time">按 15 分钟计</div>
                      <div className="price-value">¥25 起</div>
                    </div>
                    <div className="price-row">
                      <div className="price-item">
                        <strong>口周修圆 / 泪痕清洁 / 香氛收尾</strong>
                        <span>适合洗后做轻美容细节收尾</span>
                      </div>
                      <div className="price-time">约 10-20 分钟</div>
                      <div className="price-value">¥20 起</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
      
          <section className="experience" id="space">
            <div className="container">
              <div className="section-head">
                <span>门店环境</span>
                <h2>高端门店环境</h2>
                <p>接待、洗护、猫咪护理三区展示，空间分工更清楚。</p>
              </div>
              <div className="experience-grid">
                <div className="carousel-stage" aria-live="polite">
                  <figure className={`carousel-slide ${activeSpace === "lounge" ? "active" : ""}`} data-space-panel="lounge">
                    <img src="/assets/space-lounge-premium.png" alt="高端宠物洗护店接待与等候区" />
                    <figcaption className="carousel-overlay">
                      <strong>接待等候区</strong>
                      <span>偏前场接待与停留体验，适合传达高级感、舒适度和门店第一印象。</span>
                    </figcaption>
                  </figure>
                  <figure className={`carousel-slide ${activeSpace === "bath" ? "active" : ""}`} data-space-panel="bath">
                    <img src="/assets/space-bath-premium.png" alt="高端宠物洗护店独立洗护区" />
                    <figcaption className="carousel-overlay">
                      <strong>独立洗护区</strong>
                      <span>重点展示专业洗护池、排水与动线，一眼看出这是认真做洗护的门店。</span>
                    </figcaption>
                  </figure>
                  <figure className={`carousel-slide ${activeSpace === "cat" ? "active" : ""}`} data-space-panel="cat">
                    <img src="/assets/space-cat-room.png" alt="高端宠物洗护店猫咪安静护理室" />
                    <figcaption className="carousel-overlay">
                      <strong>猫咪安静护理室</strong>
                      <span>更低刺激、更安静、更柔和，明确和狗狗区域区分开来。</span>
                    </figcaption>
                  </figure>
                  <button className="carousel-control carousel-control-prev" type="button" aria-label="上一张门店环境图片" onClick={() => showSpace(-1)}>
                    ‹
                  </button>
                  <button className="carousel-control carousel-control-next" type="button" aria-label="下一张门店环境图片" onClick={() => showSpace(1)}>
                    ›
                  </button>
                  <div className="carousel-dots" aria-label="门店环境轮播进度">
                    {spaceIds.map((spaceId, index) => (
                      <button
                        className={`carousel-dot ${activeSpace === spaceId ? "active" : ""}`}
                        type="button"
                        key={spaceId}
                        aria-label={`切换到第 ${index + 1} 张门店环境图片`}
                        aria-current={activeSpace === spaceId ? "true" : undefined}
                        onClick={() => setActiveSpace(spaceId)}
                      />
                    ))}
                  </div>
                </div>
                <div className="carousel-nav">
                  <button className={`space-card ${activeSpace === "lounge" ? "active" : ""}`} type="button" data-space-target="lounge" onClick={() => setActiveSpace("lounge")}>
                    <span>01 / Front Lounge</span>
                    <strong>接待等候区</strong>
                    <p>强调接待台、休息座位和零售陈列，像精品门店前场，而不是操作间。</p>
                  </button>
                  <button className={`space-card ${activeSpace === "bath" ? "active" : ""}`} type="button" data-space-target="bath" onClick={() => setActiveSpace("bath")}>
                    <span>02 / Wash Zone</span>
                    <strong>独立洗护区</strong>
                    <p>强调不锈钢洗护池、瓷砖墙面和操作效率，让画面更专业、更可信。</p>
                  </button>
                  <button className={`space-card ${activeSpace === "cat" ? "active" : ""}`} type="button" data-space-target="cat" onClick={() => setActiveSpace("cat")}>
                    <span>03 / Cat Quiet Room</span>
                    <strong>猫咪安静护理室</strong>
                    <p>强调猫咪专属护理环境，配色与质感更轻柔，避免整组图太像。</p>
                  </button>
                  <div className="space-meta">
                    <strong>这组图片的设计目标</strong>
                    <div className="detail-list">
                      <div className="detail-item">
                        <strong>前中后场有分工</strong>
                        <span>等候、洗护、猫咪护理分别承担不同任务，展示逻辑更清晰。</span>
                      </div>
                      <div className="detail-item">
                        <strong>高端但真实</strong>
                        <span>更接近中国城市精品宠物洗护店会落地的风格，不走夸张宠物乐园路线。</span>
                      </div>
                      <div className="detail-item">
                        <strong>主动减少重复</strong>
                        <span>用不同空间、不同视角和不同氛围，把“图片太像”这个问题压下去。</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
      
          <section>
            <div className="container">
              <div className="section-head">
                <span>护理流程</span>
                <h2>标准护理流程</h2>
                <p>从到店评估到离店复盘，每一步都有清晰操作标准。</p>
              </div>
              <div className="steps-grid">
                <article className="step-card">
                  <strong>STEP 01</strong>
                  <h3>到店评估</h3>
                  <p>确认体型、毛况、敏感部位和当天情绪，决定时长与护理方案。</p>
                </article>
                <article className="step-card">
                  <strong>STEP 02</strong>
                  <h3>温和清洗</h3>
                  <p>按毛量选择香波和水温，耳部、脚垫和重点脏污区域单独处理。</p>
                </article>
                <article className="step-card">
                  <strong>STEP 03</strong>
                  <h3>吹干梳顺</h3>
                  <p>控制风量和距离，分段吹整，尽量避免长时间连续刺激。</p>
                </article>
                <article className="step-card">
                  <strong>STEP 04</strong>
                  <h3>离店复盘</h3>
                  <p>交代本次护理重点，给出下次预约建议和居家梳洗提醒。</p>
                </article>
              </div>
            </div>
          </section>
      
          <section className="reviews">
            <div className="container">
              <div className="section-head">
                <span>顾客反馈</span>
                <h2>真实到店口碑</h2>
                <p>顾客更关注洗护效果、宠物状态和长期护理建议。</p>
              </div>
              <div className="reviews-grid">
                <article className="review-card">
                  <div className="review-rating" aria-label="5星满分评价">
                    <span>★★★★★</span>
                    <b>5.0</b>
                    <em>满星好评</em>
                  </div>
                  <p>“我家比熊以前很怕吹风，这里会先让它熟悉环境，再慢慢分段吹，回家后没有那种特别紧绷的状态。”</p>
                  <strong>林女士</strong>
                  <span>比熊犬 / 月度洗护会员</span>
                </article>
                <article className="review-card">
                  <div className="review-rating" aria-label="4.9星接近满分评价">
                    <span>★★★★☆</span>
                    <b>4.9</b>
                    <em>接近满星</em>
                  </div>
                  <p>“猫洗最怕赶，他们家流程讲得很清楚，还会备注怕碰脚、怕噪音这些细节，第二次来明显顺很多。”</p>
                  <strong>周先生</strong>
                  <span>英短猫 / 安抚护理预约</span>
                </article>
                <article className="review-card">
                  <div className="review-rating" aria-label="5星满分评价">
                    <span>★★★★★</span>
                    <b>5.0</b>
                    <em>满星好评</em>
                  </div>
                  <p>“洗完不只是香，毛也很顺，店员会直接说哪里有小结、多久需要再梳一次，信息给得很实在。”</p>
                  <strong>陈女士</strong>
                  <span>柯基犬 / 护理洗护</span>
                </article>
              </div>
            </div>
          </section>
      
          <section className="booking" id="booking">
            <div className="container booking-stack">
              <form className="booking-form booking-form-wide" id="bookingForm" onSubmit={handleBookingSubmit}>
                <div className="form-head">
                  <div>
                    <h3>预约信息 <span>填写后生成确认提示，方便展示预约流程。</span></h3>
                  </div>
                  <span className="form-badge">今日可约</span>
                </div>
                <div className="form-grid">
                  <div className="field">
                    <label htmlFor="owner">联系人</label>
                    <input id="owner" name="owner" type="text" placeholder="怎么称呼您" required />
                  </div>
                  <div className="field">
                    <label htmlFor="phone">联系电话</label>
                    <input id="phone" name="phone" type="tel" placeholder="用于确认预约" required />
                  </div>
                  <div className="field">
                    <label htmlFor="pet">宠物昵称</label>
                    <input id="pet" name="pet" type="text" placeholder="毛孩子名字" required />
                  </div>
                  <div className="field">
                    <label htmlFor="kind">宠物类型</label>
                    <select id="kind" name="kind" required>
                      <option value="">请选择</option>
                      <option value="小型犬">小型犬</option>
                      <option value="中大型犬">中大型犬</option>
                      <option value="猫咪">猫咪</option>
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="service">预约项目</label>
                    <select id="service" name="service" required>
                      <option value="">请选择服务</option>
                      <option value="基础洗护">基础洗护</option>
                      <option value="护理洗护">护理洗护</option>
                      <option value="猫咪安抚护理">猫咪安抚护理</option>
                      <option value="单项加购">单项加购</option>
                    </select>
                  </div>
                  <div className="field arrival-field">
                    <label htmlFor="timeDate">期望到店</label>
                    <div className="arrival-pair">
                      <input id="timeDate" name="timeDate" type="date" required />
                      <select id="time" name="time" required>
                        <option value="">请选择时间</option>
                        <option value="10:00">10:00</option>
                        <option value="10:30">10:30</option>
                        <option value="11:00">11:00</option>
                        <option value="11:30">11:30</option>
                        <option value="12:00">12:00</option>
                        <option value="12:30">12:30</option>
                        <option value="13:00">13:00</option>
                        <option value="13:30">13:30</option>
                        <option value="14:00">14:00</option>
                        <option value="14:30">14:30</option>
                        <option value="15:00">15:00</option>
                        <option value="15:30">15:30</option>
                        <option value="16:00">16:00</option>
                        <option value="16:30">16:30</option>
                        <option value="17:00">17:00</option>
                        <option value="17:30">17:30</option>
                        <option value="18:00">18:00</option>
                        <option value="18:30">18:30</option>
                      </select>
                      <select id="arrival" name="arrival" aria-label="到店偏好" required>
                        <option value="">到店偏好</option>
                        <option value="准时到店">准时到店</option>
                        <option value="可能提前 10 分钟">可能提前 10 分钟</option>
                        <option value="需要电话确认后到店">需要电话确认后到店</option>
                      </select>
                    </div>
                  </div>
                  <div className="field full">
                    <label htmlFor="note">备注信息</label>
                    <textarea id="note" name="note" placeholder="例如怕吹风、容易紧张、皮肤敏感、需要修指甲等"></textarea>
                  </div>
                </div>
                <button className="btn btn-primary" type="submit">提交预约</button>
                <p className="form-note">提交后不会真的发送到后台，只会在当前页面生成一条预约确认提示。</p>
                <div className={`confirmation ${confirmation ? "show" : ""}`} id="confirmation" aria-live="polite">{confirmation}</div>
              </form>
      
              <div>
                <div>
                  <div className="section-head">
                    <span>预约到店</span>
                    <h2>快速预约到店</h2>
                    <p>留下宠物信息和意向时段，门店会尽快确认预约。</p>
                  </div>
                  <div className="location-panel">
                  <div className="location-copy">
                    <span>门店地址</span>
                    <strong>杭州市萧山区建设三路与市心北路交叉口西北侧，德意中央广场旁</strong>
                    <p>靠近建设三路站，周边有德意中央广场、中誉万豪广场和绿都百瑞广场。预约成功后，护理师会按宠物体型、毛量和状态提前预留洗护时段。</p>
                  </div>
                  <div className="store-map" aria-label="萧山建设三路门店地图">
                    <img src="/assets/store-location-map.png" alt="沐爪宠物洗护位于杭州市萧山区建设三路与市心北路交叉口西北侧，周边有德意中央广场、中誉万豪广场、绿都百瑞广场和建设三路站" />
                    <div className="store-map-footer">
                      <span>建设三路与市心北路交叉口西北侧，德意中央广场旁。</span>
                      <a href="https://uri.amap.com/search?keyword=%E6%9D%AD%E5%B7%9E%E5%B8%82%E8%90%A7%E5%B1%B1%E5%8C%BA%E5%BB%BA%E8%AE%BE%E4%B8%89%E8%B7%AF%E4%B8%8E%E5%B8%82%E5%BF%83%E5%8C%97%E8%B7%AF%E4%BA%A4%E5%8F%89%E5%8F%A3%E8%A5%BF%E5%8C%97%E4%BE%A7%20%E5%BE%B7%E6%84%8F%E4%B8%AD%E5%A4%AE%E5%B9%BF%E5%9C%BA&amp;callnative=0" target="_blank" rel="noopener">导航到店</a>
                    </div>
                  </div>
                  </div>
                  <div className="contact-blocks">
                    <div className="contact-item">
                      <strong>营业时间</strong>
                      <span>周一至周日 10:00 - 20:00，最晚接宠时间 18:30</span>
                    </div>
                    <div className="contact-item">
                      <strong>预约电话</strong>
                      <span>400-888-5200 / 138-0000-5200</span>
                    </div>
                    <div className="contact-item">
                      <strong>到店提醒</strong>
                      <span>如有疫苗、皮肤问题或应激史，预约时提前备注，护理师会先评估。</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      
        <footer className="site-footer">
          <div className="container footer-inner">
            <span>沐爪宠物洗护 · 单页官网演示</span>
            <span>适合直接作为活动页、门店介绍页或预约落地页基础模板</span>
          </div>
        </footer>
      
        
    </>
  );
}
