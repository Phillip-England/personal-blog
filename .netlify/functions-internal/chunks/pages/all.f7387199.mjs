/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderSlot, e as renderComponent, f as renderHead } from '../astro.49b0c89c.mjs';
import 'html-escaper';
/* empty css                           */
const $$Astro$b = createAstro("https://phillip-england.github.io");
const $$Navigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Navigation;
  const pathname = new URL(Astro2.request.url).pathname;
  const currentPath = pathname.slice(1);
  const { banner } = Astro2.props;
  return renderTemplate`<!-- navbar  -->${maybeRenderHead($$result)}<div class="fixed top-0 z-50 flex h-16 w-screen flex-row justify-between bg-white">
  <!-- navbar title -->
  <div class="flex-grow">
    <h1 class="text-md self-center p-5 font-semibold text-main">
      ${banner}
    </h1>
  </div>
  <!-- navbar icon -->
  <div class="self-center sm:hidden">
    <div id="naviconBars">
      <i class="fa-bars fa-solid p-5"></i>
    </div>
    <div id="naviconX" class="hidden p-5">
      <i class="fa-x fa-solid"></i>
    </div>
  </div>
  <!-- navbar menu (medium and up) -->
  <nav class="hidden w-fit sm:flex sm:pr-5">
    <ul class="flex flex-row items-center gap-8">
      <li>
        <a href="/"${addAttribute(currentPath === "" ? "text-main underline" : "text-black", "class")}>Home</a>
      </li>
      <li>
        <a href="/about"${addAttribute(currentPath === "about" ? "text-main underline" : "text-black", "class")}>About</a>
      </li>
    </ul>
  </nav>
</div>

<!-- mobile nav menu -->
<nav id="navmenu" class="fixed top-16 z-50 hidden h-full w-2/3 flex-col bg-white xs:w-2/5">
  <ul>
    <li class="flex p-4">
      <a href="/"${addAttribute(currentPath === "" ? "text-main underline flex-1" : "text-black flex-1", "class")}>Home</a>
    </li>
    <li class="p-4">
      <a href="/about"${addAttribute(currentPath === "about" ? "text-main underline flex-1" : "text-black flex-1", "class")}>About</a>
    </li>
  </ul>
</nav>

<!-- spacer -->
<div class="h-16"></div>

<!-- overlay -->
<div id="overlay" class="fixed z-40 hidden h-full w-full bg-black opacity-40">
</div>

<!-- footer -->
<footer class="fixed bottom-0 flex h-16 w-full items-center justify-end bg-white">
  <p class="pr-4 text-sm italic text-main">
    I believe everyone has the capcity to change
  </p>
</footer>

<!-- spacer -->`;
}, "C:/Users/19185/Desktop/marijuana-blog/src/components/Navigation.astro");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$a = createAstro("https://phillip-england.github.io");
const $$MainLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title, banner } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html>\n  <head>\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <script src="https://kit.fontawesome.com/ef0709a418.js" crossorigin="anonymous"><\/script>\n    <title>', "</title>\n  ", '</head>\n  <body id="body" class="h-screen bg-white">\n    ', "\n    ", '\n    <!-- footer spacer -->\n    <div class="h-16"></div>\n  </body></html>'])), title, renderHead($$result), renderComponent($$result, "Navigation", $$Navigation, { "banner": banner }), renderSlot($$result, $$slots["default"]));
}, "C:/Users/19185/Desktop/marijuana-blog/src/layouts/MainLayout.astro");

const $$Astro$9 = createAstro("https://phillip-england.github.io");
const $$H2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$H2;
  const { text } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<h2 class="text-lg font-semibold sm:text-xl">${text}</h2>`;
}, "C:/Users/19185/Desktop/marijuana-blog/src/components/H2.astro");

const $$Astro$8 = createAstro("https://phillip-england.github.io");
const $$P = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$P;
  const { text, className } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<p${addAttribute(`${className} text-sm sm:text-base`, "class")}>${text}</p>`;
}, "C:/Users/19185/Desktop/marijuana-blog/src/components/P.astro");

const $$Astro$7 = createAstro("https://phillip-england.github.io");
const $$PostDetail = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$PostDetail;
  const { href, title, sub, date } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<li>
  <a${addAttribute(href, "href")}>
    ${renderComponent($$result, "P", $$P, { "text": title, "className": "mt-3 underline" })}
    ${renderComponent($$result, "P", $$P, { "text": sub, "className": "italic" })}
    ${renderComponent($$result, "P", $$P, { "text": date, "className": "italic" })}
  </a>
</li>`;
}, "C:/Users/19185/Desktop/marijuana-blog/src/components/PostDetail.astro");

const $$Astro$6 = createAstro("https://phillip-england.github.io");
const $$RecentPosts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$RecentPosts;
  return renderTemplate`${maybeRenderHead($$result)}<div class="flex w-fit flex-col p-4">
  ${renderComponent($$result, "H2", $$H2, { "text": "Recent Posts" })}
  <ul>
    ${renderComponent($$result, "PostDetail", $$PostDetail, { "href": "/posts/1", "title": "Evidence of a Deeper Problem", "sub": "10 signs of drug addiction", "date": "03/24/2023" })}
  </ul>
</div>`;
}, "C:/Users/19185/Desktop/marijuana-blog/src/components/RecentPosts.astro");

const $$Astro$5 = createAstro("https://phillip-england.github.io");
const $$TopImage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$TopImage;
  const { image, title, sub, color } = Astro2.props;
  return renderTemplate`

${maybeRenderHead($$result)}<div id="image-container"${addAttribute(`background-image:url(${image}); background-color:${color};`, "style")} class="flex flex-col astro-KEZBDMWW">
  <div class="flex flex-1 flex-col pb-48 xs:py-20 sm:py-24 md:py-28 lg:py-48 astro-KEZBDMWW">
    <h1 class="relative top-4 right-4 self-end text-lg font-bold text-white xs:top-0 xs:right-0 xs:flex xs:self-center xs:text-2xl astro-KEZBDMWW">
      ${title}
    </h1>
    <p class="relative top-4 right-4 self-end italic text-white xs:top-0 xs:right-0 xs:flex xs:self-center xs:text-lg astro-KEZBDMWW">
      ${sub}
    </p>
  </div>
</div>`;
}, "C:/Users/19185/Desktop/marijuana-blog/src/components/TopImage.astro");

const $$Astro$4 = createAstro("https://phillip-england.github.io");
const $$ContentLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ContentLayout;
  return renderTemplate`${maybeRenderHead($$result)}<main class="md:px-18 xs:px-8 xs:pt-8 sm:px-12 lg:px-24">
  ${renderSlot($$result, $$slots["default"])}
</main>`;
}, "C:/Users/19185/Desktop/marijuana-blog/src/layouts/ContentLayout.astro");

const $$Astro$3 = createAstro("https://phillip-england.github.io");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Blunt Truths", "banner": "Blunt Truths" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "TopImage", $$TopImage, { "image": "../public/leaves.jpg", "title": "Fighting Marijuana Addiction", "sub": "One story at a time", "color": "#646464" })}${renderComponent($$result2, "ContentLayout", $$ContentLayout, {}, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "RecentPosts", $$RecentPosts, {})}` })}` })}`;
}, "C:/Users/19185/Desktop/marijuana-blog/src/pages/index.astro");

const $$file$2 = "C:/Users/19185/Desktop/marijuana-blog/src/pages/index.astro";
const $$url$2 = "/personal-blog";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro("https://phillip-england.github.io");
const $$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$1;
  const section1 = `
    Our loved ones are the first impacted by our addiction.
    They may not be perfect, but their love for us makes it difficult for them to remain silent.
    Their critisism is their way of trying to help us avoid the long-term consequences of our actions.
    Our natural response is to defend our addiction.
    We may use anger to intimidate others.
    We may also incite guilt so others feel pity for us.
    These are stradegies to train those around us to leave us and our addiction alone.
    If your loved ones show concern about your repeated behaviour, and you feel the need to defend yourself, you might be struggling with an addiction.
`;
  const section2 = `
    Our finances are a direct reflection of what we value.
    By default, it is easy to spend money without thinking.
    We all want the quickest path to feeling good in the moment.
    Your bank account does not lie.
    Where is all your money going?
    Have you sacraficed planning for your future in order to get high?
    Have you mentally avoided this topic or justified your expenses with an excuse?
    I used to tell myself, "I worked hard for my money, why shouldn't I get to enjoy some of it?"
    Excuses like this are just tools we use to continue our use guilt-free.
    If we truly faced our actions and their consequences, we would feel bad, which completely contradicts why we use in the first place.
`;
  const section3 = `
    Our routines reveal our character.
    Every day, we go through multiple transitions, and these transitions are key to discovering what we value.
    We transition from being asleep to being awake. We transition from the shower into our bedroom. We transition from home to work.
    What is the first thing you do when you transition into a safe place where your actions are not known to others?
    What do you miss the most when you transition into an area where others are watching?
    We all know the anwsers to these questions, and the way we behave when no one is watching is very telling.
`;
  const section4 = `
    Some people can struggle with an addiction and live a seemingly normal life.
    They've learned how to cover their tracks (for the most part) and survive.
    But, not everyone is a functional addict.
    Most addicts latch on to a host in their life and depend on them to survive. I was a leech, and my Mother was a host.
    It took her years to move on and stop enabling me. I would exploit her and guilt trip her.
    I'd say things like, "Just this once," or "I promise I won't do it again."
    So, who is the host in your life? Who are you depending on for your next meal?
    Who is the first person you call when the consequences of your drug-use set in?
    That's your host, and we are the leeches.
`;
  const section5 = `
    You may not be a person of faith, but as humans, we are forced to deal with the issue of God.
    There is something about drug addiction which brings about spritual experiences.
    In The Gospel, there is a story where Jesus eats with the sinners.
    God, as a man, placed himself amongst the most unworthy group of people.
    And in the middle of our drug addiction, you will find him doing the same.
    This aspect of addiction can go unspoken, but if you are activly using, you'll understand exactly what I mean.
    God will show up in the middle of the madness. He will not force us to change, but He will nudge us.
    He will create undeniable coincedences in our lives which will speak directly to us.
    This is evidence of a problem, and God is in pursuit of us to save us and get us out of danger.
`;
  const section6 = `
    Remember the first time you got high? I do, and all it took was a few hits.
    The first time only happens once, and we will never feel like that again.
    Our bodies are designed to filter our containmenets, and they get better with practice.
    This leads to tolerance, where we need more drugs to feel the same effect.
    If our body has become an expert at filtering out harmful chemicals, this is a clear sign of addiction.
    It's evidence we have overloaded ourselves to the point to where our biology is literally warring against our behavour.
    Pay attention to your body, it tells you what it likes, and what it doesn't like.
`;
  const section7 = `
    Imagine going a whole day without getting high. And not because you are working a 12-hour shift.
    Better yet, imagine staying sober.. on your birthday! Sounds like a drag, right?
    Believe it or not, a lot of people can go an entire month without taking a sip, let alone shooting up.
    No judgement, but sometimes our behaviour becomes normal and we assume everyone else is just like us.
    You don't have to use, and if you've forgotten what it's like to enjoy life without getting high, the truth is obvious.
`;
  const section8 = `
    Name the top 5 most important things in you're life. Now, do your actions reflect this?
    None of us are perfect, but if you find a huge gap between what you say you value, and what your actions say you value, this is a problem.
    As addicts, we do not want to feel bad about ourselves. So, we justify our behaviour and create a false mental image of ourselves.
    No one wants to face the how they negativly impact the world around them.
    But living in a lie is not the path to freedom.

`;
  const section9 = `
    If we were 100% honest with everyone around us about our behaviour, they would be floored.
    Addicts do outlandish things to stay high, and staying high 24/7 is an exaughsting task.
    So, we lie.
    You can't find an addict who doesn't have things they will take to the grave with them.
    It's just the nature of addiction. It drives us to do the unthinkable.
    We lie so much we actually start to believe it.
    Lies are like stepping stones which allow us to move forward in our addiction guilt-free.
    They become our safe-haven and caccoon us from the truth: we are broken people who cannot control their behaviour.
`;
  const section10 = `
    Ultimately, addiction leads to death. Engaging in an active addiction does tremendous damage to our physical and mental health.
    Our diet, our education, our fitness, all of these things take the back seat while we drive futher into oblivion.
    We neglect ourselves and those around us to squeeze more dopamine out of our day.
    We may attempt to secure things on the surface, but no amount of pull-ups is going to unravel the damage we are doing.
    Our choices will catch up to us, it is only a matter of time.
`;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Blunt Truths", "banner": "Blunt Truths" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<div class="justify-between">
    ${renderComponent($$result2, "TopImage", $$TopImage, { "image": "../public/1.jpg", "title": "Evidence of a Deeper Problem", "sub": "10 signs of drug addiction", "color": "#333333" })}
    ${renderComponent($$result2, "ContentLayout", $$ContentLayout, {}, { "default": ($$result3) => renderTemplate`<div class="p-4">
        ${renderComponent($$result3, "H2", $$H2, { "text": "1. Our Loved Ones Have Noticed" })}
        ${renderComponent($$result3, "P", $$P, { "className": "pt-2 pl-4 indent-4 pb-4", "text": section1 })}
        ${renderComponent($$result3, "H2", $$H2, { "text": "2. We Have Trouble With Our Finances" })}
        ${renderComponent($$result3, "P", $$P, { "className": "pt-2 pl-4 indent-4 pb-4", "text": section2 })}
        ${renderComponent($$result3, "H2", $$H2, { "text": "3. Our Day Revolves Around Using" })}
        ${renderComponent($$result3, "P", $$P, { "className": "pt-2 pl-4 indent-4 pb-4", "text": section3 })}
        ${renderComponent($$result3, "H2", $$H2, { "text": "4. We Leech Off Of Others" })}
        ${renderComponent($$result3, "P", $$P, { "className": "pt-2 pl-4 indent-4 pb-4", "text": section4 })}
        ${renderComponent($$result3, "H2", $$H2, { "text": "5. God is Pursuing Us" })}
        ${renderComponent($$result3, "P", $$P, { "className": "pt-2 pl-4 indent-4 pb-4", "text": section5 })}
        ${renderComponent($$result3, "H2", $$H2, { "text": "6. We Develop a Tolerance" })}
        ${renderComponent($$result3, "P", $$P, { "className": "pt-2 pl-4 indent-4 pb-4", "text": section6 })}
        ${renderComponent($$result3, "H2", $$H2, { "text": "7. We Cannot Imagine Life Without Using" })}
        ${renderComponent($$result3, "P", $$P, { "className": "pt-2 pl-4 indent-4 pb-4", "text": section7 })}
        ${renderComponent($$result3, "H2", $$H2, { "text": "8. We Stop Focusing On What Matters Most" })}
        ${renderComponent($$result3, "P", $$P, { "className": "pt-2 pl-4 indent-4 pb-4", "text": section8 })}
        ${renderComponent($$result3, "H2", $$H2, { "text": "9. We Lie to Ourselves and Others" })}
        ${renderComponent($$result3, "P", $$P, { "className": "pt-2 pl-4 indent-4 pb-4", "text": section9 })}
        ${renderComponent($$result3, "H2", $$H2, { "text": "10. We Compromise Our Health" })}
        ${renderComponent($$result3, "P", $$P, { "className": "pt-2 pl-4 indent-4 pb-4", "text": section10 })}
      </div>` })}
  </div>` })}`;
}, "C:/Users/19185/Desktop/marijuana-blog/src/pages/posts/1.astro");

const $$file$1 = "C:/Users/19185/Desktop/marijuana-blog/src/pages/posts/1.astro";
const $$url$1 = "/personal-blog/posts/1";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://phillip-england.github.io");
const $$MainHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MainHeader;
  const { text } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<h1 class="text-lg font-semibold">${text}</h1>`;
}, "C:/Users/19185/Desktop/marijuana-blog/src/components/MainHeader.astro");

const $$Astro = createAstro("https://phillip-england.github.io");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "404 Not Found", "banner": "404 Not Found" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<div class="flex flex-col gap-2 p-4">
    ${renderComponent($$result2, "MainHeader", $$MainHeader, { "text": "Oops!" })}
    <p>
      It looks like the page you are trying to access does not exist! Click <a class="font-bold text-blue-700 underline" href="http://localhost:3000/">here</a> to go home
      <span class="font-bold italic">OR</span> click here <a class="font-bold text-blue-700 underline" href="https://www.youtube.com/watch?v=BBJa32lCaaY" target="_blank">here</a> below for a surprise!
    </p>
  </div>` })}`;
}, "C:/Users/19185/Desktop/marijuana-blog/src/pages/404.astro");

const $$file = "C:/Users/19185/Desktop/marijuana-blog/src/pages/404.astro";
const $$url = "/personal-blog/404";

const _page2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, _page1 as a, _page2 as b };
