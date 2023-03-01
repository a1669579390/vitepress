import{_ as s,c as n,o as a,b as l}from"./app.d994eacf.js";const E=JSON.parse('{"title":"\u56FE\u7247\u61D2\u52A0\u8F7D","description":"","frontmatter":{},"headers":[],"relativePath":"components/pic-lazy.md","lastUpdated":null}'),p={name:"components/pic-lazy.md"},o=l(`<h1 id="\u56FE\u7247\u61D2\u52A0\u8F7D" tabindex="-1">\u56FE\u7247\u61D2\u52A0\u8F7D</h1><h2 id="\u793A\u4F8B" tabindex="-1">\u793A\u4F8B</h2><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#7EE787;">script</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">setup</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#FF7B72;">import</span><span style="color:#C9D1D9;"> { computed } </span><span style="color:#FF7B72;">from</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">vTest</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#D2A8FF;">mounted</span><span style="color:#C9D1D9;">: (</span><span style="color:#FFA657;">el</span><span style="color:#C9D1D9;">, </span><span style="color:#FFA657;">binding</span><span style="color:#C9D1D9;">) </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">// el\u8868\u793A\u4F7F\u7528\u6307\u4EE4\u7684DOM\u5143\u7D20</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">// bindings\u8868\u793A\u6307\u4EE4\u76F8\u5173\u7684\u4FE1\u606F\u662F\u4E00\u4E2A\u5BF9\u8C61 \u5982v-lazy=&quot;xxx&quot;,bindlings\u5373\u662Fxxx\u5BF9\u5E94\u7684\u5185\u5BB9</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">// \u6307\u4EE4\u7684\u529F\u80FD\uFF1A\u5B9E\u73B0\u56FE\u7247\u7684\u61D2\u52A0\u8F7D</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">// 1\u3001\u76D1\u542C\u56FE\u7247\u662F\u5426\u8FDB\u5165\u53EF\u89C6\u533A</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">oberver</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">new</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">IntersectionObserver</span><span style="color:#C9D1D9;">(([{ </span><span style="color:#FFA657;">isIntersecting</span><span style="color:#C9D1D9;"> }]) </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#8B949E;">// true\uFF1B\u8FDB\u5165\u53EF\u89C6\u533A\u57DF\uFF0Cfalse\uFF1A\u672A\u8FDB\u5165\u53EF\u89C6\u533A\u57DF</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#FF7B72;">if</span><span style="color:#C9D1D9;"> (isIntersecting) {</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#8B949E;">// 1\u3001\u7ED9\u56FE\u7247\u7684src\u5C5E\u6027\u8D4B\u503C\u56FE\u7247\u7684\u5730\u5740</span></span>
<span class="line"><span style="color:#C9D1D9;">        el.src </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> binding.value</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#8B949E;">// 2\u3001\u53D6\u6D88\u56FE\u7247\u7684\u76D1\u542C\uFF0C\u9ED8\u8BA4\u662F\u4F1A\u4E00\u76F4\u76D1\u542C\u7684\uFF0C\u5982\u679C\u4E0D\u53D6\u6D88\u3002\u5C31\u4F1A\u4E00\u76F4\u6267\u884C</span></span>
<span class="line"><span style="color:#C9D1D9;">        oberver.</span><span style="color:#D2A8FF;">unobserve</span><span style="color:#C9D1D9;">(el)</span></span>
<span class="line"><span style="color:#C9D1D9;">        </span><span style="color:#8B949E;">// 3\u3001\u52A0\u8F7D\u7684\u56FE\u7247\u5931\u8D25\u4E86\uFF0C\u663E\u793A\u9ED8\u8BA4\u7684\u56FE\u7247\u5730\u5740</span></span>
<span class="line"><span style="color:#C9D1D9;">        el.</span><span style="color:#D2A8FF;">onerror</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> () </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">          el.src </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#A5D6FF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#C9D1D9;">        }</span></span>
<span class="line"><span style="color:#C9D1D9;">      }</span></span>
<span class="line"><span style="color:#C9D1D9;">    })</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#8B949E;">// \u76D1\u542Cdom\u5143\u7D20</span></span>
<span class="line"><span style="color:#C9D1D9;">    oberver.</span><span style="color:#D2A8FF;">observe</span><span style="color:#C9D1D9;">(el)</span></span>
<span class="line"><span style="color:#C9D1D9;">  },</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"><span style="color:#FF7B72;">const</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">urls</span><span style="color:#C9D1D9;"> </span><span style="color:#FF7B72;">=</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">computed</span><span style="color:#C9D1D9;">(() </span><span style="color:#FF7B72;">=&gt;</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#FF7B72;">return</span><span style="color:#C9D1D9;"> </span><span style="color:#D2A8FF;">Array</span><span style="color:#C9D1D9;">(</span><span style="color:#79C0FF;">10</span><span style="color:#C9D1D9;">).</span><span style="color:#D2A8FF;">fill</span><span style="color:#C9D1D9;">(</span></span>
<span class="line"><span style="color:#C9D1D9;">    </span><span style="color:#A5D6FF;">&#39;https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/7/4/1731a060feb69e7c~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.awebp&#39;</span></span>
<span class="line"><span style="color:#C9D1D9;">  )</span></span>
<span class="line"><span style="color:#C9D1D9;">})</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;/</span><span style="color:#7EE787;">script</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#7EE787;">style</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">scoped</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">lang</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;less&quot;</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#7EE787;">img</span><span style="color:#C9D1D9;"> {</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#79C0FF;">display</span><span style="color:#C9D1D9;">: </span><span style="color:#79C0FF;">block</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#79C0FF;">width</span><span style="color:#C9D1D9;">: </span><span style="color:#79C0FF;">100</span><span style="color:#FF7B72;">%</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">  </span><span style="color:#79C0FF;">height</span><span style="color:#C9D1D9;">: </span><span style="color:#79C0FF;">80</span><span style="color:#FF7B72;">vh</span><span style="color:#C9D1D9;">;</span></span>
<span class="line"><span style="color:#C9D1D9;">}</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;/</span><span style="color:#7EE787;">style</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C9D1D9;">&lt;</span><span style="color:#7EE787;">template</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">  &lt;</span><span style="color:#7EE787;">div</span><span style="color:#C9D1D9;"> </span><span style="color:#79C0FF;">class</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;img-container&quot;</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">    &lt;</span><span style="color:#7EE787;">img</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#79C0FF;">v-test</span><span style="color:#C9D1D9;">=</span><span style="color:#C9D1D9;">&quot;</span><span style="color:#C9D1D9;">url</span><span style="color:#C9D1D9;">&quot;</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#79C0FF;">alt</span><span style="color:#C9D1D9;">=</span><span style="color:#A5D6FF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#C9D1D9;">      </span><span style="color:#79C0FF;">v-for</span><span style="color:#C9D1D9;">=</span><span style="color:#C9D1D9;">&quot;</span><span style="color:#C9D1D9;">url </span><span style="color:#FF7B72;">in</span><span style="color:#C9D1D9;"> urls</span><span style="color:#C9D1D9;">&quot;</span></span>
<span class="line"><span style="color:#C9D1D9;">      :</span><span style="color:#79C0FF;">key</span><span style="color:#C9D1D9;">=</span><span style="color:#C9D1D9;">&quot;</span><span style="color:#C9D1D9;">url</span><span style="color:#C9D1D9;">&quot;</span></span>
<span class="line"><span style="color:#C9D1D9;">      :</span><span style="color:#79C0FF;">style</span><span style="color:#C9D1D9;">=</span><span style="color:#C9D1D9;">&quot;</span><span style="color:#C9D1D9;">{ margin: </span><span style="color:#A5D6FF;">&#39;20px&#39;</span><span style="color:#C9D1D9;"> }</span><span style="color:#C9D1D9;">&quot;</span></span>
<span class="line"><span style="color:#C9D1D9;">    /&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">  &lt;/</span><span style="color:#7EE787;">div</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"><span style="color:#C9D1D9;">&lt;/</span><span style="color:#7EE787;">template</span><span style="color:#C9D1D9;">&gt;</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#24292F;">&lt;</span><span style="color:#116329;">script</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">setup</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#CF222E;">import</span><span style="color:#24292F;"> { computed } </span><span style="color:#CF222E;">from</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;vue&#39;</span></span>
<span class="line"><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">vTest</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#8250DF;">mounted</span><span style="color:#24292F;">: (</span><span style="color:#953800;">el</span><span style="color:#24292F;">, </span><span style="color:#953800;">binding</span><span style="color:#24292F;">) </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#6E7781;">// el\u8868\u793A\u4F7F\u7528\u6307\u4EE4\u7684DOM\u5143\u7D20</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#6E7781;">// bindings\u8868\u793A\u6307\u4EE4\u76F8\u5173\u7684\u4FE1\u606F\u662F\u4E00\u4E2A\u5BF9\u8C61 \u5982v-lazy=&quot;xxx&quot;,bindlings\u5373\u662Fxxx\u5BF9\u5E94\u7684\u5185\u5BB9</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#6E7781;">// \u6307\u4EE4\u7684\u529F\u80FD\uFF1A\u5B9E\u73B0\u56FE\u7247\u7684\u61D2\u52A0\u8F7D</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#6E7781;">// 1\u3001\u76D1\u542C\u56FE\u7247\u662F\u5426\u8FDB\u5165\u53EF\u89C6\u533A</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">oberver</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">new</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">IntersectionObserver</span><span style="color:#24292F;">(([{ </span><span style="color:#953800;">isIntersecting</span><span style="color:#24292F;"> }]) </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">      </span><span style="color:#6E7781;">// true\uFF1B\u8FDB\u5165\u53EF\u89C6\u533A\u57DF\uFF0Cfalse\uFF1A\u672A\u8FDB\u5165\u53EF\u89C6\u533A\u57DF</span></span>
<span class="line"><span style="color:#24292F;">      </span><span style="color:#CF222E;">if</span><span style="color:#24292F;"> (isIntersecting) {</span></span>
<span class="line"><span style="color:#24292F;">        </span><span style="color:#6E7781;">// 1\u3001\u7ED9\u56FE\u7247\u7684src\u5C5E\u6027\u8D4B\u503C\u56FE\u7247\u7684\u5730\u5740</span></span>
<span class="line"><span style="color:#24292F;">        el.src </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> binding.value</span></span>
<span class="line"><span style="color:#24292F;">        </span><span style="color:#6E7781;">// 2\u3001\u53D6\u6D88\u56FE\u7247\u7684\u76D1\u542C\uFF0C\u9ED8\u8BA4\u662F\u4F1A\u4E00\u76F4\u76D1\u542C\u7684\uFF0C\u5982\u679C\u4E0D\u53D6\u6D88\u3002\u5C31\u4F1A\u4E00\u76F4\u6267\u884C</span></span>
<span class="line"><span style="color:#24292F;">        oberver.</span><span style="color:#8250DF;">unobserve</span><span style="color:#24292F;">(el)</span></span>
<span class="line"><span style="color:#24292F;">        </span><span style="color:#6E7781;">// 3\u3001\u52A0\u8F7D\u7684\u56FE\u7247\u5931\u8D25\u4E86\uFF0C\u663E\u793A\u9ED8\u8BA4\u7684\u56FE\u7247\u5730\u5740</span></span>
<span class="line"><span style="color:#24292F;">        el.</span><span style="color:#8250DF;">onerror</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> () </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">          el.src </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#0A3069;">&#39;&#39;</span></span>
<span class="line"><span style="color:#24292F;">        }</span></span>
<span class="line"><span style="color:#24292F;">      }</span></span>
<span class="line"><span style="color:#24292F;">    })</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#6E7781;">// \u76D1\u542Cdom\u5143\u7D20</span></span>
<span class="line"><span style="color:#24292F;">    oberver.</span><span style="color:#8250DF;">observe</span><span style="color:#24292F;">(el)</span></span>
<span class="line"><span style="color:#24292F;">  },</span></span>
<span class="line"><span style="color:#24292F;">}</span></span>
<span class="line"><span style="color:#CF222E;">const</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">urls</span><span style="color:#24292F;"> </span><span style="color:#CF222E;">=</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">computed</span><span style="color:#24292F;">(() </span><span style="color:#CF222E;">=&gt;</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#CF222E;">return</span><span style="color:#24292F;"> </span><span style="color:#8250DF;">Array</span><span style="color:#24292F;">(</span><span style="color:#0550AE;">10</span><span style="color:#24292F;">).</span><span style="color:#8250DF;">fill</span><span style="color:#24292F;">(</span></span>
<span class="line"><span style="color:#24292F;">    </span><span style="color:#0A3069;">&#39;https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/7/4/1731a060feb69e7c~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.awebp&#39;</span></span>
<span class="line"><span style="color:#24292F;">  )</span></span>
<span class="line"><span style="color:#24292F;">})</span></span>
<span class="line"><span style="color:#24292F;">&lt;/</span><span style="color:#116329;">script</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292F;">&lt;</span><span style="color:#116329;">style</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">scoped</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">lang</span><span style="color:#24292F;">=</span><span style="color:#0A3069;">&quot;less&quot;</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#116329;">img</span><span style="color:#24292F;"> {</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#0550AE;">display</span><span style="color:#24292F;">: </span><span style="color:#0550AE;">block</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#0550AE;">width</span><span style="color:#24292F;">: </span><span style="color:#0550AE;">100</span><span style="color:#CF222E;">%</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#24292F;">  </span><span style="color:#0550AE;">height</span><span style="color:#24292F;">: </span><span style="color:#0550AE;">80</span><span style="color:#CF222E;">vh</span><span style="color:#24292F;">;</span></span>
<span class="line"><span style="color:#24292F;">}</span></span>
<span class="line"><span style="color:#24292F;">&lt;/</span><span style="color:#116329;">style</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292F;">&lt;</span><span style="color:#116329;">template</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">  &lt;</span><span style="color:#116329;">div</span><span style="color:#24292F;"> </span><span style="color:#0550AE;">class</span><span style="color:#24292F;">=</span><span style="color:#0A3069;">&quot;img-container&quot;</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">    &lt;</span><span style="color:#116329;">img</span></span>
<span class="line"><span style="color:#24292F;">      </span><span style="color:#0550AE;">v-test</span><span style="color:#24292F;">=</span><span style="color:#24292F;">&quot;</span><span style="color:#24292F;">url</span><span style="color:#24292F;">&quot;</span></span>
<span class="line"><span style="color:#24292F;">      </span><span style="color:#0550AE;">alt</span><span style="color:#24292F;">=</span><span style="color:#0A3069;">&quot;&quot;</span></span>
<span class="line"><span style="color:#24292F;">      </span><span style="color:#0550AE;">v-for</span><span style="color:#24292F;">=</span><span style="color:#24292F;">&quot;</span><span style="color:#24292F;">url </span><span style="color:#CF222E;">in</span><span style="color:#24292F;"> urls</span><span style="color:#24292F;">&quot;</span></span>
<span class="line"><span style="color:#24292F;">      :</span><span style="color:#0550AE;">key</span><span style="color:#24292F;">=</span><span style="color:#24292F;">&quot;</span><span style="color:#24292F;">url</span><span style="color:#24292F;">&quot;</span></span>
<span class="line"><span style="color:#24292F;">      :</span><span style="color:#0550AE;">style</span><span style="color:#24292F;">=</span><span style="color:#24292F;">&quot;</span><span style="color:#24292F;">{ margin: </span><span style="color:#0A3069;">&#39;20px&#39;</span><span style="color:#24292F;"> }</span><span style="color:#24292F;">&quot;</span></span>
<span class="line"><span style="color:#24292F;">    /&gt;</span></span>
<span class="line"><span style="color:#24292F;">  &lt;/</span><span style="color:#116329;">div</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"><span style="color:#24292F;">&lt;/</span><span style="color:#116329;">template</span><span style="color:#24292F;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,3),e=[o];function t(c,r,y,D,F,i){return a(),n("div",null,e)}const u=s(p,[["render",t]]);export{E as __pageData,u as default};