import AboutHero from "@/components/about/AboutHero";
import SectionTitle from "@/components/common/SectionTitle";

export const metadata = {
  title: "Warranty Policy | Arkar Min Thukha Electro Trading Co., Ltd.",
};

export default function WarrantyPolicyPage() {
  return (
    <main>
      {/* ===================================================== */}
      {/* HERO */}
      {/* ===================================================== */}

      <AboutHero
        title="Warranty Policy"
        subtitle="Official Warranty Coverage, Online Registration & After-Sales Service."
      />

      {/* ===================================================== */}
      {/* MAIN CONTENT */}
      {/* ===================================================== */}

      <section className="bg-gradient-to-b from-white via-slate-50 to-white py-24">
        <div className="mx-auto max-w-7xl px-6">

          <SectionTitle
            badge="OFFICIAL WARRANTY POLICY"
            title="Warranty Coverage & Customer Protection"
            description="Every genuine product supplied by Arkar Min Thukha Electro Trading Co., Ltd. is backed by our official warranty policy and professional after-sales service."
          />

          {/* ===================================================== */}
          {/* WARRANTY OVERVIEW */}
          {/* ===================================================== */}

          <div className="mt-20">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

              {/* Card 1 */}
              <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-xl">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-4xl">
                  🛡
                </div>

                <h3 className="text-3xl font-bold text-slate-900">
                  12 Months
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Official Warranty Coverage
                </p>
              </div>

              {/* Card 2 */}
              <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-xl">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-4xl">
                  🔄
                </div>

                <h3 className="text-3xl font-bold text-slate-900">
                  Unlimited
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Circuit Breaker Replacement
                </p>
              </div>

              {/* Card 3 */}
              <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-xl">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-4xl">
                  ⚡
                </div>

                <h3 className="text-3xl font-bold text-slate-900">
                  One Time
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  SPD & DC Isolator Replacement
                </p>
              </div>

              {/* Card 4 */}
              <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-xl">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-4xl">
                  📲
                </div>

                <h3 className="text-3xl font-bold text-slate-900">
                  Online
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Warranty Registration Required
                </p>
              </div>

            </div>
          </div>

          {/* ===================================================== */}
          {/* SUNTREE CIRCUIT BREAKERS WARRANTY */}
          {/* ===================================================== */}

          <div className="mt-24 rounded-[36px] border border-slate-200 bg-white p-12 shadow-2xl">

            <div className="text-center">

              <span className="inline-flex rounded-full bg-emerald-600 px-6 py-2 text-sm font-bold uppercase tracking-[0.2em] text-white">
                SUNTREE OFFICIAL WARRANTY
              </span>

              <h2 className="mt-8 text-5xl font-bold text-slate-900">
                SUNTREE Circuit Breakers Warranty
              </h2>

              <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-slate-600">
                Genuine <strong>SUNTREE</strong> products officially imported
                and distributed by
                <strong> Arkar Min Thukha Electro Trading Co., Ltd.</strong>
                are protected under our
                <strong> Online Warranty Registration System.</strong>

                Products successfully registered on the purchase date will
                receive a full <strong>12-month official warranty</strong>
                together with professional after-sales support in accordance
                with the company's warranty policy.
              </p>

            </div>  
                        {/* ===================================================== */}
            {/* WARRANTY VISUAL GUIDE */}
            {/* ===================================================== */}

            <div className="mt-16">

              <div className="mb-10 text-center">
                <span className="inline-flex rounded-full bg-slate-100 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-700">
                  Warranty Visual Guide
                </span>

                <h3 className="mt-5 text-4xl font-bold text-slate-900">
                  Warranty Coverage Overview
                </h3>

                <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-slate-600">
                  Please review the following illustrations to understand
                  what is covered and what is excluded under our official
                  warranty policy.
                </p>
              </div>

              <div className="grid gap-10 lg:grid-cols-2">

                {/* Covered */}

                <div className="overflow-hidden rounded-[30px] border border-emerald-200 bg-white shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

                  <div className="bg-gradient-to-r from-emerald-700 to-green-600 px-8 py-5">
                    <h3 className="text-2xl font-bold text-white">
                      ✅ Covered by Warranty
                    </h3>

                    <p className="mt-2 text-emerald-100">
                      Eligible for Official Warranty Service
                    </p>
                  </div>

                  <img
                    src="/images/warranty/warr1.png"
                    alt="Warranty Covered"
                    className="w-full"
                  />

                </div>

                {/* Not Covered */}

                <div className="overflow-hidden rounded-[30px] border border-red-200 bg-white shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

                  <div className="bg-gradient-to-r from-red-700 to-red-500 px-8 py-5">
                    <h3 className="text-2xl font-bold text-white">
                      ❌ Not Covered by Warranty
                    </h3>

                    <p className="mt-2 text-red-100">
                      Excluded from Warranty Coverage
                    </p>
                  </div>

                  <img
                    src="/images/warranty/warr2.png"
                    alt="Warranty Not Covered"
                    className="w-full"
                  />

                </div>

              </div>

            </div>

            {/* ===================================================== */}
            {/* IMPORTANT WARRANTY NOTICE */}
            {/* ===================================================== */}

            <div className="mt-20 rounded-[30px] border-l-[8px] border-amber-500 bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 p-10 shadow-xl">

              <h3 className="mb-6 text-3xl font-bold text-amber-700">
                ⚠ Important Warranty Requirement
              </h3>

              <p className="text-lg leading-9 text-slate-700">

                To qualify for warranty service, the product must be a
                <strong> genuine SUNTREE product </strong>
                officially imported and distributed by
                <strong> Arkar Min Thukha Electro Trading Co., Ltd.</strong>

                Every product must carry an
                <strong> Official Warranty Label </strong>
                together with a valid
                <strong> Warranty Serial Number</strong>.

                The selling dealer must complete
                <strong> Online Warranty Registration </strong>
                on the customer's purchase date.

                Products that do not meet these requirements will
                <strong> not be eligible </strong>
                for warranty service.

              </p>

              <div className="my-8 h-px bg-amber-300"></div>

              <h4 className="mb-5 text-2xl font-bold text-slate-900">
                🇲🇲 အရေးကြီးအသိပေးချက်
              </h4>

              <p className="text-lg leading-10 text-slate-700">

                <strong>
                  Arkar Min Thukha Electro Trading Co., Ltd.
                  မှ တရားဝင်တင်သွင်းဖြန့်ချိထားသော
                  SUNTREE Product ဖြစ်ရမည်ဖြစ်ပြီး
                  Official Warranty Label နှင့်
                  Warranty Serial Number ပါရှိရမည်။
                </strong>

                ထို့အပြင်
                <strong> ဝယ်ယူသည့်နေ့တွင် </strong>
                ဝယ်ယူသောဆိုင်မှ
                <strong> Online Warranty Registration </strong>
                ကို မှန်ကန်စွာပြုလုပ်ထားမှသာ
                အာမခံပေါ်လစီအကျုံးဝင်မည်ဖြစ်ပါသည်။

                <strong>
                  အထက်ပါအချက်များနှင့် မကိုက်ညီသော Product များသည်
                  ကုမ္ပဏီ၏အာမခံဝန်ဆောင်မှုကို ရရှိမည်မဟုတ်ပါ။
                </strong>

              </p>

            </div>

            {/* ===================================================== */}
            {/* WARRANTY ACTIVATION */}
            {/* ===================================================== */}

            <div className="mt-14 rounded-[30px] bg-gradient-to-r from-emerald-700 via-green-600 to-emerald-700 p-10 text-center shadow-2xl">

              <h3 className="text-3xl font-bold text-white">
                ✔ Activate Your Warranty
              </h3>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-emerald-50">
                Please complete the
                <strong> Online Warranty Registration </strong>
                on the purchase date to enjoy your full official warranty
                benefits.
              </p>

              <div className="mx-auto my-8 h-px max-w-md bg-emerald-400"></div>

              <p className="text-lg leading-9 text-white">
                <strong>
                  ✅ ဝယ်ယူသည့်နေ့တွင် Online Warranty Registration
                  ပြုလုပ်ထားခြင်းဖြင့် အာမခံအခွင့်အရေး
                  အပြည့်အဝရရှိနိုင်ပါသည်။
                </strong>
              </p>

            </div>
                        {/* ===================================================== */}
            {/* STANDARD WARRANTY */}
            {/* ===================================================== */}

            <div className="mt-20 rounded-[30px] border border-slate-200 bg-slate-50 p-10">

              <div className="mb-8">
                <span className="rounded-full bg-white px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-700 shadow">
                  Standard Warranty
                </span>

                <h3 className="mt-5 text-4xl font-bold text-slate-900">
                  Standard Warranty Coverage
                </h3>
              </div>

              <div className="grid gap-8 lg:grid-cols-3">

                <div className="rounded-2xl bg-white p-8 shadow-lg">
                  <div className="mb-5 text-5xl">🛡</div>

                  <h4 className="text-2xl font-bold text-slate-900">
                    12 Months
                  </h4>

                  <p className="mt-4 leading-8 text-slate-600">
                    Warranty period starts from the purchase date after
                    successful Online Warranty Registration.
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-8 shadow-lg">
                  <div className="mb-5 text-5xl">🔄</div>

                  <h4 className="text-2xl font-bold text-slate-900">
                    Brand New Replacement
                  </h4>

                  <p className="mt-4 leading-8 text-slate-600">
                    Products approved under the warranty policy will be
                    replaced with a brand-new unit.
                  </p>
                </div>

                <div className="rounded-2xl bg-white p-8 shadow-lg">
                  <div className="mb-5 text-5xl">✔</div>

                  <h4 className="text-2xl font-bold text-slate-900">
                    Genuine Products Only
                  </h4>

                  <p className="mt-4 leading-8 text-slate-600">
                    Warranty applies only to genuine SUNTREE products
                    officially distributed by Arkar Min Thukha Electro
                    Trading Co., Ltd.
                  </p>
                </div>

              </div>

            </div>

            {/* ===================================================== */}
            {/* PRODUCT WARRANTY */}
            {/* ===================================================== */}

            <div className="mt-16">

              <div className="mb-8 text-center">

                <span className="rounded-full bg-slate-100 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-700">
                  Product Warranty
                </span>

                <h3 className="mt-5 text-4xl font-bold text-slate-900">
                  Product Warranty Conditions
                </h3>

              </div>

              <div className="grid gap-8 md:grid-cols-3">

                {/* SPD */}

                <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-xl">

                  <div className="mb-5 text-5xl">⚡</div>

                  <h4 className="text-2xl font-bold">
                    All ATS Model
                  </h4>

                  <p className="mt-5 leading-8 text-slate-600">
                    Eligible for
                    <strong> One Replacement Only </strong>
                    within the warranty period after approval.
                  </p>

                </div>

                {/* Breaker */}

                <div className="rounded-[28px] bg-emerald-600 p-8 text-white shadow-xl">

                  <div className="mb-5 text-5xl">⚙</div>

                  <h4 className="text-2xl font-bold">
                    Circuit Breakers
                  </h4>

                  <p className="mt-5 leading-8 text-emerald-50">
                    MCB, MCCB, RCCB, RCBO, ACB and other circuit breakers
                    are eligible for
                    <strong> Unlimited Warranty Replacement </strong>
                    during the warranty period, subject to company policy.
                  </p>

                </div>

                {/* DC Fuse */}

                <div className="rounded-[28px] bg-red-600 p-8 text-white shadow-xl">

                  <div className="mb-5 text-5xl">🚫</div>

                  <h4 className="text-2xl font-bold">
                    SPD and DC Fuse
                  </h4>

                  <p className="mt-5 leading-8">
                    This product is
                    <strong> NOT COVERED </strong>
                    under the official warranty program.
                  </p>

                </div>

              </div>

            </div>

            {/* ===================================================== */}
            {/* ATS WARRANTY EXCLUSIONS */}
            {/* ===================================================== */}

            <div className="mt-20 rounded-[32px] border-l-[8px] border-red-600 bg-red-50 p-10 shadow-xl">

              <h3 className="text-4xl font-bold text-red-700">
                ATS Warranty Exclusions (User Fault)
              </h3>

              <p className="mt-5 text-lg leading-9 text-slate-700">
                Warranty service will not apply if the damage is caused
                by improper installation, misuse or any of the following
                user-related conditions.
              </p>

              <ol className="mt-8 list-decimal space-y-4 pl-6 text-lg leading-9 text-slate-700">

                <li>Damage caused by overload or electrical shock.</li>

                <li>Damage caused by unstable voltage, over-voltage or under-voltage.</li>

                <li>Damage caused by water, moisture, insects or rodents.</li>

                <li>Damage caused by manual switching without selecting Manual Mode.</li>

                <li>Damage caused by operating the ATS without suitable protection devices.</li>

              </ol>

            </div>

          </div>
                    {/* ===================================================== */}
          {/* SOLAR ENERGY DIVISION */}
          {/* ===================================================== */}

          <section className="mt-28 overflow-hidden rounded-[40px] bg-gradient-to-br from-emerald-700 via-emerald-600 to-green-700 shadow-2xl">

            {/* Solar Hero */}

            <div className="px-12 py-20 text-center text-white">

              <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-6 py-2 text-sm font-semibold uppercase tracking-[0.2em] backdrop-blur">
                ☀ Solar Energy Division
              </span>

              <h2 className="mt-8 text-5xl font-bold">
                Warranty for Solar & Electrical Systems
              </h2>

              <p className="mx-auto mt-6 max-w-4xl text-xl leading-9 text-emerald-50">
                Professional warranty coverage, installation workmanship,
                after-sales service and technical support for Solar Energy
                Systems supplied and installed by Arkar Min Thukha Electro
                Trading Co., Ltd.
              </p>

            </div>

            {/* White Content */}

            <div className="rounded-t-[40px] bg-white px-12 py-20">

              {/* English */}

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-10 shadow-lg">

                
                <h3 className="mt-5 text-4xl font-bold text-slate-900">
                  Warranty Coverage
                </h3>

                <ul className="mt-8 space-y-5 text-lg leading-9 text-slate-700">

                  <li>
                    ✔ <strong>Inverter Warranty</strong> :
                    Standard 2 Years Warranty (Depending on the product
                    model, manufacturer warranty may extend up to
                    <strong> 10 Years</strong>.)
                  </li>

                  <li>
                    ✔ <strong>Lithium Battery Warranty</strong> :
                    Standard 5 Years Warranty (Depending on the product
                    model, manufacturer warranty may extend up to
                    <strong> 10 Years</strong>.)
                  </li>

                  <li>
                    ✔ Battery Warranty includes Battery Pack, BMS,
                    Breaker and Display.
                  </li>
                  
                  <li>
                  ✔ During the warranty period, if an Inverter or Battery is confirmed to
                  have a manufacturing defect and complies with the warranty policy,
                  Arkar Min Thukha Electro Trading Co., Ltd. will provide a replacement
                  unit while the original product is being inspected or serviced,
                  subject to product availability and warranty approval.
                  </li>

                  <li>
                  ✔ Lithium Battery capacity naturally decreases over time.
                  A reduction of approximately 5%–7% State of Health (SOH) per year
                  is considered normal. The battery warranty remains valid until the
                  battery State of Health (SOH) falls below 60% within the applicable
                  warranty period, subject to the manufacturer's warranty policy.
                  </li>

                  <li>
                    ✔ Warranty covers manufacturing defects only.
                  </li>

                  <li>
                    ✔ Installation workmanship includes
                    <strong> 1 Year After-Sales Service.</strong>
                  </li>

                </ul>

              </div>



              {/* Myanmar */}

              <div className="mt-10 rounded-3xl border border-emerald-200 bg-emerald-50 p-10 shadow-lg">

                
                <h3 className="mt-5 text-4xl font-bold text-emerald-700">
                  🇲🇲 အာမခံစည်းမျဉ်းများ
                </h3>

                <ul className="mt-8 space-y-5 text-lg leading-9 text-slate-700">

                  <li>
                    ✔ Inverter များသည် Product Model အလိုက်
                    (2+) နှစ်မှ 10 နှစ်အထိ Warranty ရရှိနိုင်ပါသည်။
                  </li>

                  <li>
                    ✔ Lithium Battery များသည်
                    5 Years Warranty ရရှိပြီး Model အလိုက်
                    10 နှစ်အထိ Warranty ရရှိနိုင်ပါသည်။
                  </li>

                  <li>
                    ✔ Battery Warranty တွင်
                    Battery Pack၊ BMS၊ Breaker နှင့် Display
                    တို့ ပါဝင်ပါသည်။
                  </li>

                  <li>
                  ✔ Warranty ကာလအတွင်း Inverter သို့မဟုတ် Battery တွင်
                  ထုတ်လုပ်မှုဆိုင်ရာချို့ယွင်းချက် (Manufacturing Defect) ဖြစ်ပေါ်ပြီး
                  Warranty Policy နှင့်ကိုက်ညီပါက စစ်ဆေးပြုပြင်နေစဉ်အတွင်း
                  ကုန်ပစ္စည်းလက်ကျန်ရှိမှုနှင့် အာမခံအတည်ပြုချက်အပေါ်မူတည်၍
                  အစားထိုးအသုံးပြုနိုင်သော Unit တစ်လုံးကို
                  Arkar Min Thukha Electro Trading Co., Ltd. မှ
                  ယာယီအစားထိုးတပ်ဆင်ပေးမည်ဖြစ်ပါသည်။
                  </li>

                  <li>
                  ✔ Lithium Battery များ၏ State of Health (SOH) သည်
                  အသုံးပြုမှုအလိုက် နှစ်စဉ်ပျမ်းမျှ 5% မှ 7% အထိ
                  သဘာဝအတိုင်း ကျဆင်းနိုင်ပါသည်။
                  Warranty ကာလအတွင်း Battery ၏ SOH သည်
                  60% အောက်သို့ကျဆင်းသွားပါက
                  Manufacturer Warranty Policy နှင့်ကိုက်ညီသည့်အခြေအနေတွင်
                  Warranty အကျုံးဝင်မည်ဖြစ်ပါသည်။
                  </li>
                  
                  <li>
                    ✔ Warranty သည်
                    ထုတ်လုပ်မှုချို့ယွင်းချက်များအတွက်သာ
                    အကျုံးဝင်ပါသည်။
                  </li>

                  <li>
                    ✔ Installation ပြုလုပ်ပေးသောစနစ်များအတွက်
                    1 Year After-Sales Service
                    ပေးပါသည်။
                  </li>

                </ul>

              </div>



             {/* Important Notes */}

<div className="mt-10 rounded-3xl border-l-[8px] border-red-500 bg-red-50 p-10 shadow-lg">

  <h3 className="text-3xl font-bold text-red-700">
    ⚠ Important Notes
  </h3>

  {/* English */}
  <ul className="mt-8 space-y-5 text-lg leading-9 text-slate-700">

    <li>
      Installation After-Sales Service is provided for the specified service
      period only. Site visits and transportation fees may apply after the
      complimentary service period has expired.
    </li>

    <li>
      Damage caused by unauthorized modification, incorrect installation,
      misuse, negligence or external factors is not covered under the
      warranty policy.
    </li>

    <li>
      Customer confirmation will be obtained before any service visit. Where
      applicable, service charges will be communicated in advance.
    </li>

    <li>
      Warranty terms may vary depending on the manufacturer's warranty policy,
      product model and technical specifications.
    </li>

  </ul>

  <div className="my-8 h-px bg-red-200"></div>

  {/* Myanmar */}
  <h4 className="mb-5 text-2xl font-bold text-slate-900">
    🇲🇲 အရေးကြီးသတိပြုရန်
  </h4>

  <ul className="space-y-5 text-lg leading-9 text-slate-700">

    <li>
      Installation After-Sales Service ပြီးဆုံးပါက Site Visit နှင့်
      Transportation Fees များကို သီးခြားကောက်ခံမည်ဖြစ်ပါသည်။
    </li>

    <li>
      Unauthorized Modification၊ Incorrect Installation၊ Misuse
      သို့မဟုတ် ပြင်ပအကြောင်းအရင်းများကြောင့် ဖြစ်ပေါ်သော
      ပျက်စီးမှုများသည် Warranty အကျုံးမဝင်ပါ။
    </li>

    <li>
      Service Visit မတိုင်မီ Customer Confirmation ရယူပြီး
      လိုအပ်ပါက Service Charges များကို ကြိုတင်အသိပေးပါမည်။
    </li>

    <li>
      Manufacturer Warranty Policy၊ Product Model နှင့်
      Technical Specifications များပေါ်မူတည်၍ Warranty Terms
      များ ပြောင်းလဲနိုင်ပါသည်။
    </li>

  </ul>

</div>

            </div>

          </section>
                    {/* ===================================================== */}
          {/* WARRANTY PROCESS */}
          {/* ===================================================== */}

          <section className="mt-28">

            <div className="text-center">

              <span className="inline-flex rounded-full bg-sky-100 px-6 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                Warranty Process
              </span>

              <h2 className="mt-6 text-5xl font-bold text-slate-900">
                How Your Warranty Works
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                Follow these simple steps to activate and enjoy your official
                warranty protection.
              </p>

            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-5">

              <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-lg">
                <div className="text-5xl">🛒</div>
                <h3 className="mt-5 text-xl font-bold">Purchase</h3>
                <p className="mt-3 text-slate-600">
                  Purchase genuine products from an Authorized Dealer.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-lg">
                <div className="text-5xl">📲</div>
                <h3 className="mt-5 text-xl font-bold">Register</h3>
                <p className="mt-3 text-slate-600">
                  Dealer completes Online Warranty Registration.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-lg">
                <div className="text-5xl">🛡</div>
                <h3 className="mt-5 text-xl font-bold">Warranty Active</h3>
                <p className="mt-3 text-slate-600">
                  Official warranty starts from the purchase date.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-lg">
                <div className="text-5xl">🔍</div>
                <h3 className="mt-5 text-xl font-bold">Inspection</h3>
                <p className="mt-3 text-slate-600">
                  Our technical team inspects the product.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-lg">
                <div className="text-5xl">🔄</div>
                <h3 className="mt-5 text-xl font-bold">Replacement</h3>
                <p className="mt-3 text-slate-600">
                  Approved claims receive a brand-new replacement.
                </p>
              </div>

            </div>

          </section>

          {/* ===================================================== */}
          {/* CONTACT CTA */}
          {/* ===================================================== */}

          <section className="mt-28 rounded-[40px] bg-gradient-to-r from-emerald-700 via-green-600 to-emerald-700 p-14 text-center text-white shadow-2xl">

            <h2 className="text-5xl font-bold">
              Need More Information?
            </h2>

            <p className="mx-auto mt-8 max-w-4xl text-xl leading-9 text-emerald-50">
              If you have any questions regarding Warranty Policy,
              Online Warranty Registration, Product Eligibility or
              After-Sales Service, our Customer Support Team is ready to help.
            </p>

            <div className="mx-auto my-10 h-px max-w-md bg-white/30"></div>

            <p className="mx-auto max-w-4xl text-lg leading-9 text-white">
              <strong>
                မရှင်းလင်းသည်များ၊ အာမခံစည်းမျဉ်းများ၊
                Online Warranty Registration၊ Product Warranty နှင့်
                After-Sales Service များအကြောင်း ပိုမိုသိရှိလိုပါက
                Customer Support Team သို့ ဆက်သွယ်စုံစမ်းနိုင်ပါသည်။
              </strong>
            </p>

            <div className="mt-12">

              <a
                href="/#contact"
                className="inline-flex items-center rounded-2xl bg-white px-10 py-4 text-lg font-bold text-emerald-700 transition hover:bg-slate-100"
              >
                Contact Customer Support →
              </a>

            </div>

          </section>

        </div>
      </section>
    </main>
  );
}