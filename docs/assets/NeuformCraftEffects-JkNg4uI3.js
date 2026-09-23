import{j as m,r as y}from"./index-904Z_w1i.js";const k=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AEONIX — Compute scaled in the void</title>
    
    <!-- Fonts: Thinner weights as requested (Syncopate 600 instead of 700, Space Grotesk 400/500/600, Inter 400/500) -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Space+Grotesk:wght@400;500;600&family=Syncopate:wght@400;600&display=swap" rel="stylesheet">
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'system-ui', 'sans-serif'],
                        display: ['Space Grotesk', 'sans-serif'],
                        brand: ['Syncopate', 'sans-serif'],
                    },
                    colors: {
                        ink: '#080503',
                        ash: { DEFAULT: '#d2c3b4', dim: '#8c7d6f', faint: '#5d5249' },
                        ember: { DEFAULT: '#ff5a1e', hot: '#ff8a3a', gold: '#ffcf86' },
                        crimson: '#c11d12',
                    }
                }
            }
        }
    <\/script>
    
    <!-- Iconify -->
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
</head>
<body class="bg-ink font-sans text-ash overflow-hidden relative h-screen w-screen selection:bg-ember/30 selection:text-white">

    <!-- Deep Forge Ground Layer -->
    <div class="ground fixed inset-0 z-0 pointer-events-none" 
         style="background: radial-gradient(60% 60% at 60% 47%, rgba(255,80,24,0.30) 0%, rgba(200,40,12,0.10) 30%, rgba(8,5,3,0) 58%), radial-gradient(120% 90% at 14% 116%, rgba(255,90,26,0.22) 0%, rgba(8,5,3,0) 52%), radial-gradient(140% 130% at 50% 50%, rgba(20,10,6,0) 38%, rgba(4,2,1,0.74) 100%), linear-gradient(180deg,#0b0604 0%,#080403 100%);">
    </div>

    <!-- Aura Asset Image Layer -->
    <div class="fixed inset-0 z-[1] pointer-events-none opacity-[0.12] mix-blend-screen bg-cover bg-center" 
         style="background-image: url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_3840w.jpg');">
    </div>

    <!-- Breathing Core Overlay -->
    <div class="core fixed z-[1] left-[50%] lg:left-[60%] top-[38%] lg:top-[47%] w-[50vmax] lg:w-[34vmax] h-[50vmax] lg:h-[34vmax] -translate-x-1/2 -translate-y-1/2 pointer-events-none mix-blend-screen will-change-transform"
         style="background: radial-gradient(circle,rgba(255,150,70,0.42) 0%,rgba(255,70,20,0.16) 28%,rgba(190,30,10,0.05) 48%,rgba(8,5,3,0) 66%);">
    </div>

    <!-- Rotating Ember Ring -->
    <div class="ring fixed z-[1] left-[50%] lg:left-[60%] top-[38%] lg:top-[47%] w-[45vmax] lg:w-[30vmax] h-[45vmax] lg:h-[30vmax] -translate-x-1/2 -translate-y-1/2 pointer-events-none mix-blend-screen rounded-full will-change-transform opacity-0"
         style="background: conic-gradient(from 0deg,rgba(255,120,40,0) 0deg,rgba(255,140,55,0.18) 60deg,rgba(255,90,30,0) 130deg,rgba(255,150,70,0.12) 220deg,rgba(255,90,30,0) 300deg,rgba(255,120,40,0) 360deg); -webkit-mask: radial-gradient(circle,transparent 60%,#000 61%,#000 70%,transparent 72%); mask: radial-gradient(circle,transparent 60%,#000 61%,#000 70%,transparent 72%);">
    </div>

    <!-- WebGL Canvas for Particle Storm -->
    <canvas id="gl" class="fixed inset-0 z-[2] w-full h-full block pointer-events-none mix-blend-screen"></canvas>

    <!-- Grain Texture Overlay -->
    <div class="grain fixed inset-0 z-[3] pointer-events-none opacity-5"
         style="background-image: url(&quot;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E&quot;);">
    </div>

    <!-- Readability Scrim -->
    <div class="scrim fixed inset-0 z-[3] pointer-events-none bg-gradient-to-b lg:bg-gradient-to-r from-ink/90 lg:from-ink/85 via-ink/40 lg:via-ink/55 to-ink/65 lg:to-transparent"
         style="background: linear-gradient(100deg,rgba(6,3,2,0.86) 0%,rgba(6,3,2,0.55) 28%,rgba(6,3,2,0) 56%);">
    </div>

    <!-- Frame Ticks (Crosshairs) -->
    <span class="frame-tick absolute z-[4] w-3.5 h-3.5 border border-ember/20 pointer-events-none opacity-0 top-[18px] left-[18px] border-r-0 border-b-0"></span>
    <span class="frame-tick absolute z-[4] w-3.5 h-3.5 border border-ember/20 pointer-events-none opacity-0 top-[18px] right-[18px] border-l-0 border-b-0"></span>
    <span class="frame-tick absolute z-[4] w-3.5 h-3.5 border border-ember/20 pointer-events-none opacity-0 bottom-[18px] left-[18px] border-r-0 border-t-0"></span>
    <span class="frame-tick absolute z-[4] w-3.5 h-3.5 border border-ember/20 pointer-events-none opacity-0 bottom-[18px] right-[18px] border-l-0 border-t-0"></span>

    <!-- Floating HUD Readout -->
    <div class="coretemp hidden lg:block fixed z-[4] right-[clamp(20px,9vw,140px)] top-[clamp(96px,21vh,200px)] text-right pointer-events-none opacity-0">
        <div class="k font-display text-[10px] tracking-[0.28em] uppercase text-ash-faint mb-1.5 flex items-center gap-2 justify-end">
            <span class="pip w-1.5 h-1.5 rounded-full bg-ember-hot" style="box-shadow: 0 0 10px 1px #ff5a1e;"></span>
            Core temp
        </div>
        <div class="v font-brand font-semibold text-[clamp(26px,3vw,40px)] leading-[0.9] text-[#fff2e2] tracking-[0.01em]">
            <span data-count="82" data-dec="0">0</span><small class="font-display text-[0.42em] text-ember-hot tracking-[0.06em] ml-1 font-medium">°C</small>
        </div>
    </div>

    <!-- Main UI Shell -->
    <div class="shell relative z-[4] h-dvh h-screen flex flex-col w-full max-w-[1320px] mx-auto px-5 lg:px-[52px]">
        
        <!-- Navigation -->
        <nav class="pt-[clamp(20px,3.2vh,30px)]">
            <div class="nav-row flex items-center justify-between gap-5">
                <div class="brand flex items-center opacity-0">
                    <span class="wordmark font-brand font-semibold text-[15px] lg:text-[18px] tracking-[0.24em] lg:tracking-[0.30em] text-[#fff4e8] uppercase pl-[0.04em]">Aeonix</span>
                </div>
                <div class="nav-links hidden lg:flex items-center gap-[30px]">
                    <a href="#" class="text-[12.5px] tracking-[0.02em] text-ash-dim hover:text-[#fff1e2] relative transition-colors duration-300 opacity-0 after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-ember-hot after:transition-all hover:after:w-full">Platform</a>
                    <a href="#" class="text-[12.5px] tracking-[0.02em] text-ash-dim hover:text-[#fff1e2] relative transition-colors duration-300 opacity-0 after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-ember-hot after:transition-all hover:after:w-full">Infrastructure</a>
                    <a href="#" class="text-[12.5px] tracking-[0.02em] text-ash-dim hover:text-[#fff1e2] relative transition-colors duration-300 opacity-0 after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-ember-hot after:transition-all hover:after:w-full">Models</a>
                    <a href="#" class="text-[12.5px] tracking-[0.02em] text-ash-dim hover:text-[#fff1e2] relative transition-colors duration-300 opacity-0 after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-ember-hot after:transition-all hover:after:w-full">Security</a>
                    <a href="#" class="text-[12.5px] tracking-[0.02em] text-ash-dim hover:text-[#fff1e2] relative transition-colors duration-300 opacity-0 after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-ember-hot after:transition-all hover:after:w-full">Contact</a>
                </div>
                <a href="#" class="nav-cta inline-flex items-center gap-[9px] text-[12.5px] font-medium tracking-[0.02em] text-[#1a0a04] px-[17px] py-2.5 rounded-full whitespace-nowrap opacity-0 transition-all duration-300 hover:-translate-y-[1px]"
                   style="background: linear-gradient(180deg,#ffcf86,#ff7a2a); box-shadow: 0 4px 22px -6px rgba(255,100,40,0.7);">
                    <b class="w-1.5 h-1.5 rounded-full bg-[#3a1202] inline-block"></b>Deploy cluster
                </a>
            </div>
        </nav>

        <!-- Main Content -->
        <main class="flex-1 flex items-end pb-5 lg:pb-[clamp(28px,5vh,58px)] min-h-0">
            <div class="grid w-full grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto] gap-6 lg:gap-[clamp(28px,5vw,72px)] items-end">
                
                <div class="lead max-w-[780px]">
                    <div class="eyebrow flex items-center gap-3.5 mb-[clamp(18px,3vh,30px)]">
                        <span class="rule h-px w-0" style="background: linear-gradient(90deg, #ff5a1e, rgba(255,120,50,0));"></span>
                        <span class="tag font-display text-[11px] tracking-[0.3em] uppercase text-ember-hot whitespace-nowrap opacity-0">Hyperscale Compute</span>
                        <span class="ver text-[11px] tracking-[0.18em] text-ash-faint opacity-0">/ cluster v2.4</span>
                    </div>
                    
                    <h1 class="font-display font-medium text-[clamp(34px,12vw,52px)] lg:text-[clamp(40px,7.4vw,100px)] leading-[0.95] tracking-tight text-[#fff6ec] text-balance">
                        <span class="block">
                            <span class="inline-block overflow-hidden"><span class="word-reveal inline-block will-change-transform pr-2 lg:pr-3">Compute</span></span>
                            <span class="inline-block overflow-hidden"><span class="word-reveal inline-block will-change-transform">scaled</span></span>
                        </span>
                        <span class="block">
                            <span class="inline-block overflow-hidden"><span class="word-reveal inline-block will-change-transform pr-2 lg:pr-3">in</span></span>
                            <span class="inline-block overflow-hidden"><span class="word-reveal inline-block will-change-transform pr-2 lg:pr-3">the</span></span>
                            <span class="inline-block overflow-hidden"><span class="word-reveal inline-block will-change-transform grad bg-clip-text text-transparent" style="background-image: linear-gradient(96deg,#ff7a2a 0%,#ffcf86 46%,#ff4d18 100%);">void.</span></span>
                        </span>
                    </h1>
                    
                    <p class="sub mt-[clamp(14px,3vh,26px)] max-w-[500px] text-[clamp(14px,1.15vw,16px)] leading-[1.62] text-ash-dim opacity-0">
                        <b class="text-[#ead9c8] font-medium">Aeonix</b> orchestrates the hyperscale infrastructure where neural networks are 
                        trained, deployed, and monitored under controlled precision. Distributed compute, 
                        live latency mapping, and parameter tuning traced down to the tensor.
                    </p>
                    
                    <div class="actions flex items-center gap-4 mt-[clamp(18px,3.6vh,36px)] flex-wrap">
                        <a href="#" class="btn btn-prime inline-flex items-center gap-2.5 rounded-full px-6 py-[13px] text-[13.5px] font-medium tracking-[0.01em] text-[#1a0a04] transition-all duration-300 hover:-translate-y-0.5 group"
                           style="background: linear-gradient(180deg,#ffcf86,#ff7322); box-shadow: 0 8px 30px -8px rgba(255,100,40,0.65);">
                            Start a cluster
                            <iconify-icon icon="solar:arrow-right-linear" class="text-lg transition-transform duration-300 group-hover:translate-x-1" style="stroke-width: 1.5;"></iconify-icon>
                        </a>
                        
                        <!-- Gradient Border Treatment -->
                        <div class="relative p-[1px] rounded-full bg-gradient-to-b from-ember/40 to-transparent group hover:from-ember/70 transition-colors duration-300 opacity-0 btn-ghost-wrap">
                            <a href="#" class="btn btn-ghost flex items-center gap-2.5 rounded-full px-6 py-[13px] text-[13.5px] font-medium tracking-[0.01em] text-ash bg-ink transition-colors duration-300 hover:text-[#fff1e2]">
                                Model registry
                            </a>
                        </div>
                    </div>
                </div>

                <aside class="rail relative w-full lg:w-[236px] flex flex-col grid grid-cols-2 lg:flex gap-x-[18px] gap-y-1.5 lg:gap-0 lg:pl-[22px] pt-[18px] lg:pt-0">
                    <!-- Gradient Border Treatments -->
                    <div class="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/20 via-white/5 to-transparent hidden lg:block"></div>
                    <div class="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-white/20 via-white/5 to-transparent lg:hidden"></div>
                    
                    <div class="rail-head col-span-2 lg:col-span-1 flex items-center gap-2 mb-0.5 lg:mb-[18px] opacity-0">
                        <span class="dot w-1.5 h-1.5 rounded-full bg-ember-hot" style="box-shadow: 0 0 9px 1px #ff5a1e;"></span>
                        <span class="lbl font-display text-[10.5px] tracking-[0.26em] uppercase text-ash-faint">Cluster telemetry</span>
                    </div>
                    
                    <div class="metric py-2 lg:py-[13px] border-b-0 lg:border-b border-white/5 opacity-0">
                        <div class="k text-[10.5px] tracking-[0.16em] uppercase text-ash-faint mb-1.5">Peak latency</div>
                        <div class="v font-display text-[25px] font-medium text-[#fff2e2] leading-none flex items-baseline gap-1">
                            <span data-count="12" data-dec="0">0</span><small class="text-[12px] text-ember-hot font-medium tracking-[0.02em]">ms</small>
                        </div>
                    </div>
                    
                    <div class="metric py-2 lg:py-[13px] border-b-0 lg:border-b border-white/5 opacity-0">
                        <div class="k text-[10.5px] tracking-[0.16em] uppercase text-ash-faint mb-1.5">Daily requests</div>
                        <div class="v font-display text-[25px] font-medium text-[#fff2e2] leading-none flex items-baseline gap-1">
                            <span data-count="4.2" data-dec="1">0.0</span><small class="text-[12px] text-ember-hot font-medium tracking-[0.02em]">B</small>
                        </div>
                    </div>
                    
                    <div class="metric py-2 lg:py-[13px] border-b-0 lg:border-b border-white/5 opacity-0">
                        <div class="k text-[10.5px] tracking-[0.16em] uppercase text-ash-faint mb-1.5">Active nodes</div>
                        <div class="v font-display text-[25px] font-medium text-[#fff2e2] leading-none flex items-baseline gap-1">
                            <span data-count="1024" data-dec="0">0</span>
                        </div>
                    </div>
                    
                    <div class="metric py-2 lg:py-[13px] opacity-0">
                        <div class="k text-[10.5px] tracking-[0.16em] uppercase text-ash-faint mb-1.5">Uptime</div>
                        <div class="v font-display text-[25px] font-medium text-[#fff2e2] leading-none flex items-baseline gap-1">
                            <span data-count="99.99" data-dec="2">0.00</span><small class="text-[12px] text-ember-hot font-medium tracking-[0.02em]">%</small>
                        </div>
                    </div>
                    
                    <div class="meter hidden lg:block mt-[18px] opacity-0 col-span-2">
                        <div class="mlbl flex justify-between text-[10px] tracking-[0.14em] uppercase text-ash-faint mb-2">
                            <span>Compute load</span><span>stable</span>
                        </div>
                        <div class="bars flex gap-[3px] h-[30px] items-end" id="bars">
                            <!-- Bars injected by JS -->
                        </div>
                    </div>
                </aside>
            </div>
        </main>

        <!-- Footer Status -->
        <footer class="pb-[clamp(16px,2.6vh,24px)]">
            <div class="status relative flex items-center justify-between gap-[18px] pt-[14px] opacity-0">
                <!-- Gradient Border Treatment -->
                <div class="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-white/20 via-white/5 to-transparent"></div>
                
                <div class="left flex items-center gap-5 flex-wrap">
                    <span class="pill flex items-center gap-2 text-[11px] tracking-[0.04em] text-ash-dim">
                        <span class="gd w-1.5 h-1.5 rounded-full bg-[#ffb347]" style="box-shadow: 0 0 8px 1px rgba(255,150,60,0.7);"></span>
                        All clusters nominal
                    </span>
                    <span class="pill flex items-center gap-2 text-[11px] tracking-[0.04em] text-ash-dim">
                        3 regions · edge + hyperscale
                    </span>
                </div>
                <div class="right hidden md:block font-display text-[11px] tracking-[0.18em] uppercase text-ash-faint whitespace-nowrap">
                    Trained by data, proven by scale
                </div>
            </div>
        </footer>
    </div>

    <!-- Scripts -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/0.160.0/three.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"><\/script>
    
    <script>
        const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        gsap.registerPlugin(ScrollTrigger);

        /* ============ EMBER STORM VORTEX (WebGL / Three.js) ============ */
        (function(){
            const canvas = document.getElementById('gl');
            if(!window.THREE) return;
            const RES = 0.5;
            let renderer;
            try{
                renderer = new THREE.WebGLRenderer({canvas, antialias:false, alpha:true, powerPreference:'high-performance'});
            }catch(e){ return; }
            renderer.setPixelRatio(1);
            renderer.setClearColor(0x000000, 0);

            const scene = new THREE.Scene();
            const camera = new THREE.OrthographicCamera(-1,1,1,-1,0,1);

            const COUNT = 12000;
            const seeds = new Float32Array(COUNT);
            const angs  = new Float32Array(COUNT);
            const rads  = new Float32Array(COUNT);
            for(let i=0;i<COUNT;i++){
                seeds[i] = Math.random();
                angs[i]  = Math.random()*Math.PI*2.0;
                rads[i]  = Math.sqrt(Math.random());
            }
            const geo = new THREE.BufferGeometry();
            geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(COUNT*3), 3));
            geo.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 1));
            geo.setAttribute('aAng',  new THREE.BufferAttribute(angs, 1));
            geo.setAttribute('aRad',  new THREE.BufferAttribute(rads, 1));

            const uniforms = {
                uTime:   { value: 0 },
                uScale:  { value: 1 },
                uAspect: { value: 1.6 },
            };

            const mat = new THREE.ShaderMaterial({
                uniforms,
                transparent:true,
                depthTest:false,
                depthWrite:false,
                blending:THREE.AdditiveBlending,
                vertexShader:\`
                    attribute float aSeed;
                    attribute float aAng;
                    attribute float aRad;
                    uniform float uTime;
                    uniform float uScale;
                    uniform float uAspect;
                    varying float vHeat;
                    varying float vFlick;
                    varying float vCore;
                    float hash(float n){ return fract(sin(n*12.9898)*43758.5453); }
                    void main(){
                        float life = hash(aSeed*7.31);
                        float u = fract(uTime*(0.045 + life*0.06) + aSeed);
                        float rmax = 0.58 + aRad*0.48;
                        float r = max(rmax*(1.0 - u*0.82), 0.018);
                        float omega = (0.55 + life*0.55) / (r*0.9 + 0.12);
                        float spiral = (rmax - r)*5.2;
                        float theta = aAng + uTime*omega*0.34 + spiral;
                        float t1 = sin(theta*3.0 + aSeed*10.0 + uTime*0.8);
                        float t2 = sin(r*9.0 - uTime*1.1 + aSeed*4.0);
                        r += t1*0.022 + t2*0.016;
                        float cx = 0.20, cy = 0.06;
                        float x = cx + (cos(theta)*r)/uAspect;
                        float y = cy + sin(theta)*r;
                        y += u*0.11 + sin(uTime*5.0 + aSeed*30.0)*0.006;
                        x += sin(uTime*3.3 + aSeed*22.0)*0.004/uAspect;

                        vCore  = 1.0 - smoothstep(0.0, 0.17, r);
                        vHeat  = clamp(pow(1.0-u, 1.3) * (0.5 + 0.5*(1.0-r)), 0.0, 1.0);
                        vFlick = 0.55 + 0.45*sin(uTime*9.0 + aSeed*40.0);
                        float sz = (0.7 + hash(aSeed*12.3)*2.7) * (0.45 + vHeat*1.55 + vCore*1.4);
                        gl_Position = vec4(x, y, 0.0, 1.0);
                        gl_PointSize = sz * uScale;
                    }
                \`,
                fragmentShader:\`
                    precision mediump float;
                    varying float vHeat;
                    varying float vFlick;
                    varying float vCore;
                    void main(){
                        vec2 p = gl_PointCoord*2.0 - 1.0;
                        float d = dot(p,p);
                        if(d>1.0) discard;
                        float core = (1.0-d); core *= core;
                        vec3 crimson = vec3(0.72,0.10,0.03);
                        vec3 amber   = vec3(1.0,0.55,0.12);
                        vec3 white   = vec3(1.0,0.93,0.78);
                        vec3 c = mix(crimson, amber, vHeat);
                        c = mix(c, white, vCore*0.85);
                        float a = core*(0.28 + 0.85*vHeat)*vFlick + core*vCore*0.55;
                        gl_FragColor = vec4(c*(1.0 + vHeat*0.5 + vCore*0.7), a);
                    }
                \`
            });

            const points = new THREE.Points(geo, mat);
            points.frustumCulled = false;
            scene.add(points);

            function resize(){
                const w = window.innerWidth, h = window.innerHeight;
                renderer.setSize(Math.round(w*RES), Math.round(h*RES), false);
                canvas.style.width = w+'px';
                canvas.style.height = h+'px';
                uniforms.uAspect.value = Math.max(0.6, w/h);
                uniforms.uScale.value = Math.max(0.6, (h*RES)/900);
            }
            resize();
            window.addEventListener('resize', resize);

            let raf=0, running=true, last=performance.now();
            function frame(now){
                if(!running) return;
                const dt = Math.min(0.05,(now-last)/1000); last=now;
                uniforms.uTime.value += dt;
                renderer.render(scene,camera);
                raf=requestAnimationFrame(frame);
            }
            if(REDUCED){
                uniforms.uTime.value = 9.1;
                renderer.render(scene,camera);
            } else {
                raf=requestAnimationFrame(frame);
            }
            document.addEventListener('visibilitychange',()=>{
                if(document.hidden){ running=false; cancelAnimationFrame(raf); }
                else if(!REDUCED){ running=true; last=performance.now(); raf=requestAnimationFrame(frame); }
            });
        })();

        /* ============ LIVING COMPUTATIONAL-LOAD METER ============ */
        (function(){
            const host = document.getElementById('bars');
            if(!host) return;
            const N=22, bars=[];
            for(let i=0;i<N;i++){ 
                const b=document.createElement('i'); 
                b.className = "flex-1 rounded-sm opacity-85 origin-bottom";
                b.style.background = "linear-gradient(180deg, #ffcf86, #c11d12)";
                b.style.transform = "scaleY(0.3)";
                host.appendChild(b); 
                bars.push(b); 
            }
            if(REDUCED){ bars.forEach((b,i)=>b.style.transform='scaleY('+(0.35+Math.abs(Math.sin(i*0.7))*0.55).toFixed(2)+')'); return; }
            let t=0, acc=0, prev=performance.now();
            function tick(now){
                acc += now-prev; prev=now;
                if(acc>=110){
                    acc=0; t+=0.18;
                    for(let i=0;i<N;i++){
                        const v = 0.30 + 0.55*Math.abs(Math.sin(t + i*0.55) * Math.cos(t*0.6 - i*0.3));
                        bars[i].style.transform = 'scaleY('+v.toFixed(2)+')';
                    }
                }
                requestAnimationFrame(tick);
            }
            requestAnimationFrame(tick);
        })();

        /* ============ COUNT-UP TELEMETRY ============ */
        function runCounters(){
            document.querySelectorAll('[data-count]').forEach(el=>{
                const target=parseFloat(el.dataset.count), dec=parseInt(el.dataset.dec||'0');
                if(REDUCED){ el.textContent=target.toFixed(dec); return; }
                const t0=performance.now(), dur=1500;
                function step(t){
                    const p=Math.min(1,(t-t0)/dur);
                    const e=1-Math.pow(1-p,3);
                    el.textContent=(target*e).toFixed(dec);
                    if(p<1) requestAnimationFrame(step);
                }
                requestAnimationFrame(step);
            });
        }

        /* ============ ENTRANCE CHOREOGRAPHY ============ */
        (function(){
            if(REDUCED || !window.gsap){
                document.querySelectorAll('.brand,.nav-links a,.nav-cta,.eyebrow .tag,.eyebrow .ver,.sub,.rail-head,.metric,.meter,.status,.frame-tick,.coretemp,.ring,.btn-prime,.btn-ghost-wrap')
                    .forEach(e=>{e.style.opacity=1; e.style.transform='none'});
                document.querySelectorAll('.word-reveal').forEach(e=>e.style.transform='none');
                document.querySelector('.eyebrow .rule').style.width='34px';
                runCounters();
                return;
            }
            
            const tl = gsap.timeline({defaults:{ease:'power3.out'}});
            tl.to('.frame-tick',{opacity:1,duration:.4,stagger:.05},0);
            tl.fromTo('.brand',{y:-12,opacity:0},{y:0,opacity:1,duration:.6},.1);
            
            // Masked staggered word reveal hooked to ScrollTrigger
            gsap.fromTo('.word-reveal', 
                {yPercent:115},
                {yPercent:0, duration:.9, ease:'power4.out', stagger:.08, scrollTrigger: { trigger: 'h1', start: "top 95%" }}
            );
            
            tl.to('.eyebrow .rule',{width:34,duration:.5},.3)
              .fromTo('.eyebrow .tag',{x:-10,opacity:0},{x:0,opacity:1,duration:.45},.42)
              .to('.eyebrow .ver',{opacity:1,duration:.45},.55);
              
            tl.fromTo('.nav-links a',{y:-8,opacity:0},{y:0,opacity:1,duration:.5,stagger:.06},.45)
              .fromTo('.nav-cta',{scale:.8,opacity:0},{scale:1,opacity:1,duration:.5,ease:'back.out(2)'},.5);
              
            tl.to('.ring',{opacity:1,duration:1.0},.4);
            tl.fromTo('.coretemp',{opacity:0,x:18},{opacity:1,x:0,duration:.7},.6);
            tl.fromTo('.sub',{opacity:0,y:14,filter:'blur(6px)'},{opacity:1,y:0,filter:'blur(0px)',duration:.7},.72);
            
            tl.fromTo(['.btn-prime','.btn-ghost-wrap'],{opacity:0,y:16},{opacity:1,y:0,duration:.55,stagger:.09},.84);
            
            tl.to('.rail-head',{opacity:1,duration:.45},.55)
              .fromTo('.metric',{x:18,opacity:0},{x:0,opacity:1,duration:.5,stagger:.09,onStart:runCounters},.62)
              .to('.meter',{opacity:1,duration:.45},1.0);
              
            tl.fromTo('.status',{y:10,opacity:0},{y:0,opacity:1,duration:.55},.95);

            // Ambient breathing animations
            gsap.to('.core',{filter:'brightness(1.35)',duration:2.4,repeat:-1,yoyo:true,ease:'sine.inOut'});
            gsap.to('.ring',{rotation:360,duration:46,repeat:-1,ease:'none',transformOrigin:'50% 50%'});
            gsap.to('.rail-head .dot',{opacity:.35,duration:.9,repeat:-1,yoyo:true,ease:'sine.inOut'});
            gsap.to('.coretemp .pip',{opacity:.3,duration:.7,repeat:-1,yoyo:true,ease:'sine.inOut'});
        })();
    <\/script>
</body>
</html>`,_=`<!doctype html>
<html lang="en"><head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Aura UI Builder</title>
    
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&amp;display=swap" rel="stylesheet">
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"><\/script>
    
    <!-- Iconify -->
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    
    <!-- GSAP -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
    
    <!-- Three.js -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"><\/script>
<link id="all-fonts-link-font-geist" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&amp;display=swap"><style id="all-fonts-style-font-geist">.font-geist { font-family: 'Geist', sans-serif !important; }</style></head>
<body class="antialiased min-h-screen flex flex-col relative overflow-x-hidden bg-[#030305] text-white selection:bg-[#2640D9]/40 selection:text-white" style="font-family: 'Inter', sans-serif;">

    <!-- WebGL Background Canvas Layer -->
    <canvas id="bg-canvas" class="fixed inset-0 z-0 pointer-events-none w-full h-full"></canvas>
    
    <!-- Texture Layer: Grain Overlay -->
    <div class="fixed inset-0 z-0 pointer-events-none opacity-[0.08]" style="mix-blend-mode: overlay; background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E');"></div>
    
    <!-- Texture Layer: Blueprint Grid -->
    <div class="fixed inset-0 z-0 pointer-events-none opacity-20" style="background-image: repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 12px);"></div>

    <!-- Navigation -->
    <nav class="w-full flex items-center justify-between py-6 px-8 relative z-10">
        <div class="flex items-center gap-8">
            <a href="#" class="flex items-center gap-2 text-[#EDEDED] font-normal font-geist">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0H16V8H8L16 16H0V0Z" fill="white"></path>
                </svg>
                Aura
            </a>
            <div class="hidden md:flex items-center gap-6 text-sm text-[#A3A3A3] font-light">
                <a href="#" class="hover:text-[#EDEDED] transition-colors font-geist">Product</a>
                <a href="#" class="hover:text-[#EDEDED] transition-colors font-geist">Integrations</a>
                <a href="#" class="hover:text-[#EDEDED] transition-colors font-geist">Resources</a>
                <a href="#" class="hover:text-[#EDEDED] transition-colors font-geist">Enterprise</a>
                <a href="#" class="hover:text-[#EDEDED] transition-colors font-geist">Pricing</a>
            </div>
        </div>
        <div>
            <div class="w-8 h-8 rounded-full bg-[#2640D9] flex items-center justify-center text-xs text-white font-normal shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(25,28,33,0.04),0px_0px_0px_1px_rgba(25,28,33,0.12)] font-geist">
                AL
            </div>
        </div>
    </nav>

    <!-- Main Content -->
    <main class="flex-grow flex flex-col items-center pt-24 px-4 relative z-10 w-full max-w-[1400px] mx-auto">
        
        <!-- Hero Text -->
        <div class="text-center mb-12 max-w-2xl">
            <h1 id="hero-title" class="text-5xl md:text-6xl font-normal tracking-tight leading-tight mb-4 flex flex-col items-center justify-center">
                <div class="flex flex-wrap justify-center gap-[0.25em]">
                    <span class="inline-block overflow-hidden align-bottom text-white"><span class="reveal-text inline-block translate-y-full font-geist font-light tracking-tighter">The</span></span>
                    <span class="inline-block overflow-hidden align-bottom text-white"><span class="reveal-text inline-block translate-y-full font-geist font-light tracking-tighter">intelligent</span></span>
                    <span class="inline-block overflow-hidden align-bottom text-white"><span class="reveal-text inline-block translate-y-full font-geist font-light tracking-tighter">design</span></span>
                    <span class="inline-block overflow-hidden align-bottom text-white"><span class="reveal-text inline-block translate-y-full font-geist font-light tracking-tighter">system</span></span>
                </div>
                <div class="flex flex-wrap justify-center gap-[0.25em] text-[#A3A3A3]">
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-text inline-block translate-y-full font-geist font-light tracking-tighter">for</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-text inline-block translate-y-full font-geist font-light tracking-tighter">industry-leading</span></span>
                    <span class="inline-block overflow-hidden align-bottom"><span class="reveal-text inline-block translate-y-full font-geist font-light tracking-tighter">creators</span></span>
                </div>
            </h1>
            <p class="text-lg text-[#A3A3A3] font-light opacity-0 font-geist" id="hero-subtitle">
                Architect and scale beautiful digital experiences with absolute control.
            </p>
        </div>

        <!-- Glowing Prompt Box -->
        <div class="w-full max-w-3xl relative mb-8 group" id="prompt-container">
            <!-- Atmospheric Glow -->
            <div class="absolute -inset-1 bg-gradient-to-r from-[#2640D9] via-[#6633E6] to-[#2640D9] rounded-2xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>
            
            <!-- Premium Surface with Border Gradient -->
            <div class="relative p-[1px] rounded-[18px] bg-gradient-to-b from-[#6633E6] via-[#2640D9] to-[#030305] shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
                
                <div class="bg-gradient-to-b from-[#0A0A14] to-[#030305] rounded-[17px] flex flex-col overflow-hidden" style="box-shadow: inset 0 2px 10px rgba(102,51,230,0.1), inset 0 -4px 10px rgba(0,0,0,0.8);">
                    
                    <textarea class="w-full bg-transparent text-[#EDEDED] placeholder:text-[#A3A3A3]/50 p-6 min-h-[140px] resize-none outline-none text-lg font-light" placeholder="Create a minimalist dashboard for a next-gen crypto wallet..."></textarea>

                    <div class="flex items-center justify-between px-4 py-3 border-t border-[#2640D9]/30 bg-[#030305]/80 backdrop-blur-sm">
                        
                        <button class="flex items-center gap-2 text-sm text-[#A3A3A3] hover:text-white transition-colors px-2 py-1 rounded-md hover:bg-white/5 font-light font-geist">
                            Model v4
                            <iconify-icon icon="solar:alt-arrow-down-linear" width="16" height="16" stroke-width="1.5"></iconify-icon>
                        </button>

                        <button class="w-8 h-8 rounded-full bg-[#2640D9] flex items-center justify-center text-white hover:bg-[#3B54E6] transition-colors shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(25,28,33,0.04),0px_0px_0px_1px_rgba(25,28,33,0.12)]">
                            <iconify-icon icon="solar:arrow-up-linear" width="18" height="18" stroke-width="1.5"></iconify-icon>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Suggestion Pills -->
        <div class="flex flex-wrap justify-center gap-3 mb-16 opacity-0" id="suggestion-pills">
            <button class="px-4 py-2 rounded-full border border-[#262626] bg-[#161616]/50 text-sm text-[#A3A3A3] hover:text-white hover:border-[#A3A3A3]/50 transition-all backdrop-blur-md font-light font-geist">Build a SaaS landing page</button>
            <button class="px-4 py-2 rounded-full border border-[#262626] bg-[#161616]/50 text-sm text-[#A3A3A3] hover:text-white hover:border-[#A3A3A3]/50 transition-all backdrop-blur-md font-light font-geist">Draft a mobile app UI</button>
            <button class="px-4 py-2 rounded-full border border-[#262626] bg-[#161616]/50 text-sm text-[#A3A3A3] hover:text-white hover:border-[#A3A3A3]/50 transition-all backdrop-blur-md font-light font-geist">Design a newsletter template</button>
            <button class="px-4 py-2 rounded-full border border-[#262626] bg-[#161616]/50 text-sm text-[#A3A3A3] hover:text-white hover:border-[#A3A3A3]/50 transition-all backdrop-blur-md font-light font-geist">Write API documentation</button>
        </div>

        <a href="#mock-app" class="flex items-center gap-2 text-sm text-[#A3A3A3] hover:text-white transition-colors mb-12 opacity-0 font-light font-geist" id="explore-link">
            Explore the builder
            <iconify-icon icon="solar:arrow-down-linear" width="16" height="16" stroke-width="1.5"></iconify-icon>
        </a>

        <!-- Mock App Interface -->
        <div id="mock-app" class="w-full mt-8 rounded-t-2xl overflow-hidden flex flex-col shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] min-h-[600px] opacity-0 translate-y-12 bg-gradient-to-b from-[#161616cc] to-[#0c0c0ce6] backdrop-blur-[12px] border-t border-t-white/10 border-x border-x-white/5 border-b border-b-black/50" style="box-shadow: inset 0 1px 0 0 rgba(255,255,255,0.05);">
            
            <header class="h-14 border-b border-[#262626] flex items-center justify-between px-4 bg-[#111111]">
                <div class="flex items-center gap-2">
                    <button class="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm text-white font-light bg-gradient-to-b from-[#262626] to-[#161616] border-t border-t-[#3a3a3a] border-b border-b-black border-x border-x-[#222] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_1px_2px_rgba(0,0,0,0.5)] transition-all duration-100 active:bg-[#111] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] active:border-t-[#111] font-geist">
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0H16V8H8L16 16H0V0Z" fill="currentColor"></path>
                        </svg>
                        Environment
                        <iconify-icon icon="solar:alt-arrow-down-linear" width="14" height="14" stroke-width="1.5" class="text-[#A3A3A3]"></iconify-icon>
                    </button>
                    <div class="w-[1px] h-4 bg-[#262626] mx-2"></div>
                    <div class="flex items-center gap-1">
                        <button class="w-8 h-8 flex items-center justify-center text-[#A3A3A3] hover:text-white hover:bg-[#161616] rounded-md transition-colors"><iconify-icon icon="solar:add-circle-linear" width="20" height="20" stroke-width="1.5"></iconify-icon></button>
                        <button class="w-8 h-8 flex items-center justify-center text-[#A3A3A3] hover:text-white hover:bg-[#161616] rounded-md transition-colors"><iconify-icon icon="solar:maximize-square-linear" width="20" height="20" stroke-width="1.5"></iconify-icon></button>
                        <button class="w-8 h-8 flex items-center justify-center text-[#A3A3A3] hover:text-white hover:bg-[#161616] rounded-md transition-colors"><iconify-icon icon="solar:text-square-linear" width="20" height="20" stroke-width="1.5"></iconify-icon></button>
                        <button class="w-8 h-8 flex items-center justify-center text-[#A3A3A3] hover:text-white hover:bg-[#161616] rounded-md transition-colors"><iconify-icon icon="solar:pen-linear" width="20" height="20" stroke-width="1.5"></iconify-icon></button>
                    </div>
                </div>

                <div class="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 text-sm text-[#A3A3A3] font-light">
                    <span class="text-white font-geist">Draft</span>
                    <span class="font-geist">·</span>
                    <span class="flex items-center gap-1 bg-[#222] px-2 py-0.5 rounded text-xs font-geist"><iconify-icon icon="solar:link-linear" width="12" height="12" stroke-width="1.5"></iconify-icon> main</span>
                </div>

                <div class="flex items-center gap-3">
                    <div class="flex items-center -space-x-2 mr-2">
                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2f563338-39fa-47ea-9761-658d4f3f84db_1600w.jpg" alt="User" class="w-7 h-7 rounded-full border border-[#111] object-cover">
                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4f5668c5-fc4a-44e0-bc5e-a664189d3c31_1600w.jpg" alt="User" class="w-7 h-7 rounded-full border border-[#111] object-cover">
                        <div class="w-7 h-7 rounded-full border border-[#111] bg-[#222] flex items-center justify-center text-xs text-[#A3A3A3] z-10 font-light font-geist">+12</div>
                    </div>
                    <button class="w-8 h-8 flex items-center justify-center text-[#A3A3A3] bg-[#222] rounded-md hover:text-white transition-colors shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]"><iconify-icon icon="solar:play-linear" width="16" height="16" stroke-width="1.5"></iconify-icon></button>
                    <button class="px-3 py-1.5 rounded-md text-sm text-white font-light bg-gradient-to-b from-[#262626] to-[#161616] border-t border-t-[#3a3a3a] border-b border-b-black border-x border-x-[#222] shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_1px_2px_rgba(0,0,0,0.5)] transition-all duration-100 active:bg-[#111] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] active:border-t-[#111] font-geist">Export</button>
                    <button class="px-4 py-1.5 rounded-md bg-[#2640D9] hover:bg-[#3B54E6] text-sm text-white font-normal shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.2),0px_1px_0px_0px_rgba(25,28,33,0.04),0px_0px_0px_1px_rgba(25,28,33,0.12)] transition-colors font-geist">Publish</button>
                </div>
            </header>

            <div class="flex-grow flex bg-[#0A0A0A]">
                <aside class="w-64 border-r border-[#262626] flex flex-col bg-[#111111]">
                    <div class="flex items-center p-2 border-b border-[#262626] text-xs font-light">
                        <button class="px-3 py-1.5 bg-[#222] text-white rounded shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] font-geist">Pages</button>
                        <button class="px-3 py-1.5 text-[#A3A3A3] hover:text-white font-geist">Layers</button>
                        <button class="px-3 py-1.5 text-[#A3A3A3] hover:text-white font-geist">Assets</button>
                    </div>
                    <div class="p-3">
                        <div class="relative bg-[#0a0a0a] shadow-[inset_0_2px_4px_rgba(0,0,0,0.5),inset_0_0_0_1px_#222] rounded-md flex items-center px-3 py-1.5 mb-4">
                            <iconify-icon icon="solar:magnifer-linear" width="14" height="14" stroke-width="1.5" class="text-[#A3A3A3] absolute"></iconify-icon>
                            <input type="text" placeholder="Search..." class="bg-transparent w-full pl-6 text-sm text-white placeholder:text-[#A3A3A3] outline-none font-light">
                        </div>
                        
                        <div class="flex items-center justify-between text-xs font-normal text-white mb-2 px-1 font-geist">
                            Pages
                            <button class="text-[#A3A3A3] hover:text-white"><iconify-icon icon="solar:add-square-linear" width="14" height="14" stroke-width="1.5"></iconify-icon></button>
                        </div>
                        
                        <div class="space-y-0.5">
                            <div class="flex items-center gap-2 px-2 py-1.5 bg-[#222] rounded-md text-sm text-white cursor-pointer shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] font-light font-geist">
                                <iconify-icon icon="solar:home-2-linear" width="16" height="16" stroke-width="1.5" class="text-[#A3A3A3]"></iconify-icon>
                                Home
                            </div>
                            <div class="flex items-center gap-2 px-2 py-1.5 text-sm text-[#A3A3A3] hover:text-white cursor-pointer font-light font-geist">
                                <iconify-icon icon="solar:alt-arrow-down-linear" width="12" height="12" stroke-width="1.5"></iconify-icon>
                                <iconify-icon icon="solar:document-linear" width="16" height="16" stroke-width="1.5"></iconify-icon>
                                /components
                            </div>
                            <div class="flex items-center gap-2 px-2 py-1.5 pl-8 text-sm text-[#A3A3A3] hover:text-white cursor-pointer font-light font-geist">
                                <iconify-icon icon="solar:database-linear" width="16" height="16" stroke-width="1.5"></iconify-icon>
                                Active Projects
                            </div>
                        </div>
                    </div>
                </aside>

                <div class="flex-grow flex flex-col items-center p-8 overflow-hidden relative">
                    <div class="w-full max-w-4xl flex items-center justify-between bg-[#161616] border border-[#262626] rounded-t-lg px-4 py-2 border-b-0 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06)] bg-gradient-to-b from-[#262626] to-[#161616] border-t-[#3a3a3a] border-x-[#222]">
                        <div class="flex items-center gap-2 text-xs text-[#A3A3A3] font-light">
                            <iconify-icon icon="solar:monitor-linear" width="14" height="14" stroke-width="1.5"></iconify-icon>
                            <span class="text-white font-geist">Desktop</span>
                            <span class="font-geist">1440</span>
                        </div>
                        <button class="w-6 h-6 flex items-center justify-center text-[#A3A3A3] hover:text-white bg-[#222] rounded shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"><iconify-icon icon="solar:add-linear" width="14" height="14" stroke-width="1.5"></iconify-icon></button>
                    </div>

                    <div class="w-full max-w-4xl flex-grow border border-t-0 border-[#262626] bg-black relative overflow-hidden flex flex-col">
                        <div class="flex items-center justify-between p-6">
                            <div class="text-white font-normal text-sm tracking-tight font-geist">Aura™</div>
                            <div class="flex gap-6 text-xs text-[#A3A3A3] font-light">
                                <span class="hover:text-white cursor-pointer font-geist">Product</span>
                                <span class="hover:text-white cursor-pointer font-geist">Services</span>
                                <span class="hover:text-white cursor-pointer font-geist">About</span>
                                <span class="hover:text-white cursor-pointer font-geist">Help</span>
                            </div>
                            <div class="text-xs text-white border-b border-white pb-0.5 cursor-pointer font-light font-geist">Contact</div>
                        </div>

                        <div class="flex-grow flex items-center justify-center relative">
                            <h2 class="text-[12vw] leading-none text-white absolute bottom-0 translate-y-1/4 font-geist font-light tracking-tighter">AURA</h2>
                        </div>
                    </div>
                </div>

                <aside class="w-80 border-l border-[#262626] flex flex-col bg-[#111111]">
                    <div class="flex items-center p-2 border-b border-[#262626] text-xs font-light">
                        <button class="px-3 py-1.5 bg-[#222] text-white rounded shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] font-geist">Copilot</button>
                        <button class="px-3 py-1.5 text-[#A3A3A3] hover:text-white font-geist">Properties</button>
                    </div>
                    
                    <div class="p-4 space-y-4">
                        <div class="flex items-center gap-2">
                            <div class="flex-grow flex items-center justify-between px-3 py-2 rounded-md cursor-pointer text-sm text-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06)] bg-gradient-to-b from-[#262626] to-[#161616] border-t border-t-[#3a3a3a] border-b border-b-black border-x border-x-[#222] font-light font-geist">
                                Add Navigation Bar
                                <iconify-icon icon="solar:alt-arrow-down-linear" width="14" height="14" stroke-width="1.5" class="text-[#A3A3A3]"></iconify-icon>
                            </div>
                            <button class="w-9 h-9 flex items-center justify-center rounded-md text-[#A3A3A3] hover:text-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06)] bg-gradient-to-b from-[#262626] to-[#161616] border-t border-t-[#3a3a3a] border-b border-b-black border-x border-x-[#222]"><iconify-icon icon="solar:add-linear" width="16" height="16" stroke-width="1.5"></iconify-icon></button>
                        </div>

                        <div class="bg-[#1A1A1A] rounded-xl border border-[#262626] p-4 flex flex-col gap-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),_0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048)]">
                            <p class="text-sm text-[#EDEDED] leading-relaxed font-light font-geist">
                                Generate an animated hero section and craft a short tagline for Aura.
                            </p>
                            
                            <div class="flex items-center justify-between mt-2">
                                <div class="flex items-center gap-2">
                                    <div class="w-10 h-10 rounded bg-[#222] border border-[#262626] overflow-hidden">
                                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" class="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all" alt="thumb">
                                    </div>
                                    <div class="w-10 h-10 rounded bg-[#222] border border-[#262626] overflow-hidden">
                                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e534354d-c5f2-4399-a1d9-2f50338e8c47_1600w.jpg" class="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all" alt="thumb">
                                    </div>
                                    <div class="w-10 h-10 rounded bg-[#222] border border-[#262626] overflow-hidden">
                                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d14dc069-558a-4c51-8aad-5cc237f9b61d_1600w.jpg" class="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all" alt="thumb">
                                    </div>
                                </div>
                                <button class="w-7 h-7 flex items-center justify-center rounded-full bg-[#2A2A2A] text-[#A3A3A3] hover:text-white transition-colors">
                                    <iconify-icon icon="solar:reply-outline" width="14" height="14" stroke-width="1.5"></iconify-icon>
                                </button>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    </main>

    <script>
        // GSAP Animations with ScrollTrigger for masked reveal
        document.addEventListener("DOMContentLoaded", () => {
            gsap.registerPlugin(ScrollTrigger);

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '#hero-title',
                    start: 'top 85%'
                }
            });

            tl.to('.reveal-text', {
                y: '0%',
                duration: 1,
                ease: 'power4.out',
                stagger: 0.05
            });

            tl.to('#hero-subtitle', {
                opacity: 1,
                duration: 0.8,
                ease: 'power2.out'
            }, "-=0.6");

            tl.fromTo('#prompt-container', 
                { opacity: 0, scale: 0.95, y: 20 },
                { opacity: 1, scale: 1, y: 0, duration: 1, ease: 'back.out(1.2)' },
                "-=0.4"
            );

            tl.to('#suggestion-pills', {
                opacity: 1,
                duration: 0.5
            }, "-=0.2");
            
            tl.fromTo('#suggestion-pills button',
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: 'power2.out' },
                "-=0.5"
            );

            tl.to('#explore-link', {
                opacity: 1,
                duration: 0.5
            }, "-=0.2");

            gsap.to('#mock-app', {
                scrollTrigger: {
                    trigger: '#mock-app',
                    start: 'top 85%',
                    end: 'top 50%',
                    scrub: 1,
                },
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out'
            });
        });

        // WebGL Dynamic Fluid Fragment Shader Background
        const canvas = document.querySelector('#bg-canvas');
        const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: false });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(window.innerWidth, window.innerHeight);

        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const scene = new THREE.Scene();

        const geometry = new THREE.PlaneGeometry(2, 2);

        const vertexShader = \`
            void main() {
                gl_Position = vec4(position, 1.0);
            }
        \`;

        const fragmentShader = \`
            uniform float u_time;
            uniform vec2 u_resolution;

            // Compact 2D Simplex Noise
            vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
            vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
            vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
            
            float snoise(vec2 v) {
                const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
                vec2 i  = floor(v + dot(v, C.yy));
                vec2 x0 = v -   i + dot(i, C.xx);
                vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
                vec4 x12 = x0.xyxy + C.xxzz;
                x12.xy -= i1;
                i = mod289(i);
                vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
                vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
                m = m*m;
                m = m*m;
                vec3 x = 2.0 * fract(p * C.www) - 1.0;
                vec3 h = abs(x) - 0.5;
                vec3 ox = floor(x + 0.5);
                vec3 a0 = x - ox;
                m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
                vec3 g;
                g.x  = a0.x  * x0.x  + h.x  * x0.y;
                g.yz = a0.yz * x12.xz + h.yz * x12.yw;
                return 130.0 * dot(m, g);
            }

            void main() {
                vec2 uv = gl_FragCoord.xy / u_resolution.xy;
                uv.x *= u_resolution.x / u_resolution.y;

                vec3 baseColor = vec3(0.012, 0.012, 0.02);
                vec2 st = uv * 0.7;
                st += vec2(snoise(st + u_time * 0.05), snoise(st - u_time * 0.05)) * 0.3;

                float beam = smoothstep(0.1, 0.8, snoise(vec2(st.x + st.y * 1.5 - u_time * 0.15, u_time * 0.02)));
                vec3 glow = mix(vec3(0.15, 0.25, 0.85), vec3(0.4, 0.2, 0.9), snoise(uv * 1.5 + u_time * 0.1) * 0.5 + 0.5);

                gl_FragColor = vec4(baseColor + (glow * beam * 0.7), 1.0);
            }
        \`;

        const uniforms = {
            u_time: { value: 0.0 },
            u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
        };

        const material = new THREE.ShaderMaterial({
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
            uniforms: uniforms
        });

        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        const clock = new THREE.Clock();
        function animate() {
            uniforms.u_time.value = clock.getElapsedTime();
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }
        animate();

        window.addEventListener('resize', () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight);
        });
    <\/script>

</body></html>`,A=`<!doctype html>
<html lang="en-GB">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>Glassblown neon</title>
  <style>
    html, body {
      margin: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background: transparent;
    }
    #board {
      position: relative;
      width: min(100%, 1040px);
      aspect-ratio: 16 / 9;
      margin: 0 auto;
      background: transparent;
      border: 0;
      box-shadow: none;
    }
    #neon {
      display: block;
      width: 100%;
      height: 100%;
    }
    h1 {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }
  </style>
</head>
<body>
  <div id="board">
    <canvas id="neon" aria-hidden="true"></canvas>
    <h1>Glass blown</h1>
  </div>

  <script>
    (function () {
      'use strict';

      var board = document.getElementById('board');
      var cv = document.getElementById('neon');
      if (!board || !cv || !cv.getContext) return;
      var ctx = cv.getContext('2d');
      if (!ctx) return;

      var reduce = false;
      try { reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}

      var P = Math.PI;
      var GLYPHS = {
        G: { w: 0.88, sub: [
          { c: [['M', 0.7946, 0.2320], ['E', 0.44, 0.50, 0.42, 0.50, -0.18 * P, -1.87 * P, 1], ['Q', 0.902, 0.606, 0.860, 0.492], ['L', 0.470, 0.492]] }
        ]},
        L: { w: 0.60, sub: [
          { c: [['M', 0.09, 0.00], ['L', 0.09, 0.66], ['R', 0.09, 1.00, 0.60, 1.00, 0.20], ['L', 0.575, 1.00]] }
        ]},
        A: { w: 0.90, sub: [
          { c: [['M', 0.040, 1.00], ['R', 0.450, 0.00, 0.860, 1.00, 0.105], ['L', 0.860, 1.00]] },
          { c: [['M', 0.174, 0.665], ['L', 0.726, 0.665]] }
        ]},
        S: { w: 0.74, sub: [
          { c: [['M', 0.5880, 0.0478], ['E', 0.40, 0.25, 0.32, 0.25, -0.30 * P, 0.50 * P, 1], ['E', 0.40, 0.75, 0.32, 0.25, -0.50 * P, 0.86 * P, 0]] }
        ]},
        B: { w: 0.74, sub: [
          { c: [['M', 0.09, 0.00], ['L', 0.09, 1.00]] },
          { c: [['M', 0.09, 0.00], ['L', 0.28, 0.00], ['E', 0.28, 0.25, 0.34, 0.25, -0.50 * P, 0.50 * P, 0], ['L', 0.09, 0.50]] },
          { c: [['M', 0.09, 0.50], ['L', 0.30, 0.50], ['E', 0.30, 0.75, 0.38, 0.25, -0.50 * P, 0.50 * P, 0], ['L', 0.09, 1.00]] }
        ]},
        O: { w: 0.90, sub: [
          { closed: 1, c: [['M', 0.46, 0.00], ['E', 0.46, 0.50, 0.42, 0.50, -0.50 * P, 1.50 * P, 0]] }
        ]},
        W: { w: 1.09, sub: [
          { c: [['M', 0.030, 0.00], ['R', 0.240, 1.00, 0.545, 0.30, 0.070], ['R', 0.545, 0.30, 0.850, 1.00, 0.070], ['R', 0.850, 1.00, 1.060, 0.00, 0.070], ['L', 1.060, 0.00]] }
        ]},
        N: { w: 0.88, sub: [
          { c: [['M', 0.08, 1.00], ['R', 0.08, 0.00, 0.84, 1.00, 0.075], ['R', 0.84, 1.00, 0.84, 0.00, 0.075], ['L', 0.84, 0.00]] }
        ]}
      };

      var LINES = ['GLASS', 'BLOWN'];
      var MINGAP = 0.17, LINEGAP = 0.46;
      var FLICK = { line: 1, i: 3 };
      var ELECTRODES = [
        { line: 0, i: 0, p: [0.7946, 0.2320], a: -0.95 },
        { line: 0, i: 4, p: [0.1100, 0.8560], a: 2.45 },
        { line: 1, i: 0, p: [0.0900, 1.0000], a: 2.60 },
        { line: 1, i: 4, p: [0.8400, 0.0000], a: -1.45 }
      ];

      function mk(w, h) {
        var c = document.createElement('canvas');
        c.width = Math.max(1, Math.round(w));
        c.height = Math.max(1, Math.round(h));
        return c;
      }
      function emit(x, sp, ox, oy, s) {
        var cs = sp.c;
        for (var i = 0; i < cs.length; i++) {
          var c = cs[i], k = c[0];
          if (k === 'M') x.moveTo(ox + c[1] * s, oy + c[2] * s);
          else if (k === 'L') x.lineTo(ox + c[1] * s, oy + c[2] * s);
          else if (k === 'Q') x.quadraticCurveTo(ox + c[1] * s, oy + c[2] * s, ox + c[3] * s, oy + c[4] * s);
          else if (k === 'R') x.arcTo(ox + c[1] * s, oy + c[2] * s, ox + c[3] * s, oy + c[4] * s, c[5] * s);
          else if (k === 'E') x.ellipse(ox + c[1] * s, oy + c[2] * s, c[3] * s, c[4] * s, 0, c[5], c[6], !!c[7]);
        }
      }
      function trace(x, items) {
        x.beginPath();
        for (var i = 0; i < items.length; i++) {
          var it = items[i], sub = it.g.sub;
          for (var j = 0; j < sub.length; j++) emit(x, sub[j], it.ox, it.oy, it.s);
        }
      }
      function endsOf(sp) {
        if (sp.closed) return [];
        var a = sp.c[0], last = sp.c[sp.c.length - 1], b = null;
        if (last[0] === 'L' || last[0] === 'M') b = [last[1], last[2]];
        else if (last[0] === 'Q') b = [last[3], last[4]];
        else if (last[0] === 'E') b = [last[1] + last[3] * Math.cos(last[6]), last[2] + last[4] * Math.sin(last[6])];
        var out = [[a[1], a[2]]];
        if (b) out.push(b);
        return out;
      }
      function scaleItems(items, k) {
        return items.map(function (it) { return { g: it.g, ox: it.ox * k, oy: it.oy * k, s: it.s * k }; });
      }

      function strokePass(x, items, w, blur, col, alpha, additive) {
        x.save();
        x.lineCap = 'round'; x.lineJoin = 'round';
        if (blur > 0.25) { try { x.filter = 'blur(' + blur.toFixed(2) + 'px)'; } catch (e) {} }
        if (additive !== false) x.globalCompositeOperation = 'lighter';
        x.globalAlpha = (alpha == null) ? 1 : alpha;
        x.lineWidth = w; x.strokeStyle = col;
        trace(x, items); x.stroke();
        x.restore();
      }

      var SPILL_S = 0.34, BLOOM_S = 0.5;

      function buildSpill(items, cap, W, H) {
        var c = mk(W * SPILL_S, H * SPILL_S), x = c.getContext('2d');
        var it = scaleItems(items, SPILL_S), k = cap * SPILL_S;
        strokePass(x, it, k * 0.62, k * 0.30, 'rgba(255,22,118,1)', 0.115);
        strokePass(x, it, k * 0.42, k * 0.11, 'rgba(255,40,140,1)', 0.20);
        return c;
      }
      function buildBloom(items, tube, W, H) {
        var c = mk(W * BLOOM_S, H * BLOOM_S), x = c.getContext('2d');
        var it = scaleItems(items, BLOOM_S), t = tube * BLOOM_S;
        strokePass(x, it, t * 2.60, t * 1.75, 'rgba(255,40,146,1)', 0.30);
        strokePass(x, it, t * 1.34, t * 0.58, 'rgba(255,100,188,1)', 0.48);
        return c;
      }
      function paintCore(x, items, tube) {
        strokePass(x, items, tube * 0.88, tube * 0.10, '#ff2a96', 1);
        strokePass(x, items, tube * 0.54, tube * 0.06, '#ff8ed2', 1);
        strokePass(x, items, tube * 0.24, tube * 0.035, '#fff4fb', 1);
      }
      function buildSpec(items, tube, W, H) {
        var c = mk(W, H), x = c.getContext('2d');
        x.save();
        x.translate(-tube * 0.02, -tube * 0.25);
        x.lineCap = 'round'; x.lineJoin = 'round';
        x.lineWidth = tube * 0.17; x.strokeStyle = 'rgba(255,240,250,.52)';
        try { x.filter = 'blur(' + (tube * 0.11).toFixed(2) + 'px)'; } catch (e) {}
        trace(x, items); x.stroke();
        x.restore();
        x.globalCompositeOperation = 'destination-in';
        x.lineCap = 'round'; x.lineJoin = 'round';
        x.lineWidth = tube * 0.66; x.strokeStyle = '#fff';
        trace(x, items); x.stroke();
        return c;
      }

      function tips(x, items, tube) {
        x.save();
        x.globalCompositeOperation = 'source-over';
        for (var i = 0; i < items.length; i++) {
          var it = items[i], sub = it.g.sub;
          for (var j = 0; j < sub.length; j++) {
            var e = endsOf(sub[j]);
            for (var m = 0; m < e.length; m++) {
              var px = it.ox + e[m][0] * it.s, py = it.oy + e[m][1] * it.s;
              x.beginPath(); x.arc(px, py, tube * 0.47, 0, P * 2);
              x.fillStyle = '#33101f'; x.fill();
              x.beginPath(); x.arc(px, py, tube * 0.47, 0, P * 2);
              x.lineWidth = 1; x.strokeStyle = 'rgba(255,150,205,.20)'; x.stroke();
              x.beginPath(); x.arc(px - tube * 0.06, py - tube * 0.10, tube * 0.20, 0, P * 2);
              x.fillStyle = 'rgba(255,205,235,.14)'; x.fill();
            }
          }
        }
        x.restore();
      }

      function electrodes(x, list, tube) {
        x.save();
        for (var i = 0; i < list.length; i++) {
          var e = list[i], cx = e.x, cy = e.y, a = e.a;
          var sx = cx + Math.cos(a) * tube * 1.55, sy = cy + Math.sin(a) * tube * 1.55;
          x.beginPath(); x.moveTo(cx, cy); x.lineTo(sx, sy);
          x.lineCap = 'round'; x.lineWidth = tube * 0.46; x.strokeStyle = '#120a10'; x.stroke();
          x.beginPath(); x.arc(sx, sy, tube * 0.40, 0, P * 2);
          x.fillStyle = '#0b0509'; x.fill();
          x.beginPath(); x.arc(cx, cy, tube * 0.80, 0, P * 2);
          x.fillStyle = '#180a12'; x.fill();
          x.beginPath(); x.arc(cx, cy, tube * 0.80, 0, P * 2);
          x.lineWidth = 1.4; x.strokeStyle = 'rgba(214,120,164,.30)'; x.stroke();
          var g = x.createRadialGradient(cx, cy, 0, cx, cy, tube * 1.25);
          g.addColorStop(0, 'rgba(255,226,244,.95)');
          g.addColorStop(0.24, 'rgba(255,90,180,.62)');
          g.addColorStop(1, 'rgba(255,50,150,0)');
          x.globalCompositeOperation = 'lighter';
          x.beginPath(); x.arc(cx, cy, tube * 1.25, 0, P * 2);
          x.fillStyle = g; x.fill();
          x.globalCompositeOperation = 'source-over';
        }
        x.restore();
      }

      var W = 0, H = 0, cap = 0, tube = 0;
      var BASE = null, WLIT = null, dirty = { x: 0, y: 0, w: 0, h: 0 };

      function layout() {
        var lines = [], maxW = 0, i, j;
        for (i = 0; i < LINES.length; i++) {
          var s = LINES[i], sum = 0, gl = [];
          for (j = 0; j < s.length; j++) { var g = GLYPHS[s[j]]; gl.push(g); sum += g.w; }
          lines.push({ gl: gl, sum: sum });
          maxW = Math.max(maxW, sum + (gl.length - 1) * MINGAP);
        }
        var blockW = maxW, blockH = 2 + LINEGAP;
        cap = Math.min((W - W * 0.12) / blockW, (H - H * 0.18) / blockH);
        cap = Math.max(10, cap);
        tube = cap * 0.105;
        var x0 = (W - blockW * cap) / 2;
        var y0 = (H - blockH * cap) * 0.48;

        var items = [], flick = null, elec = [];
        for (i = 0; i < lines.length; i++) {
          var L = lines[i];
          var gap = (blockW - L.sum) / (L.gl.length - 1);
          var pen = x0, top = y0 + i * (1 + LINEGAP) * cap;
          for (j = 0; j < L.gl.length; j++) {
            var it = { g: L.gl[j], ox: pen, oy: top, s: cap, line: i, i: j };
            items.push(it);
            if (i === FLICK.line && j === FLICK.i) flick = it;
            for (var e = 0; e < ELECTRODES.length; e++) {
              var E = ELECTRODES[e];
              if (E.line === i && E.i === j) elec.push({ x: pen + E.p[0] * cap, y: top + E.p[1] * cap, a: E.a });
            }
            pen += L.gl[j].w * cap + gap;
          }
        }
        return { items: items, flick: flick, elec: elec };
      }

      function bake() {
        var L = layout();
        var items = L.items, flick = L.flick;
        var steady = items.filter(function (it) { return it !== flick; });
        var one = flick ? [flick] : [];

        var base = mk(W, H), b = base.getContext('2d');
        b.clearRect(0, 0, W, H);
        b.globalCompositeOperation = 'lighter';
        b.drawImage(buildSpill(steady, cap, W, H), 0, 0, W, H);
        b.drawImage(buildBloom(steady, tube, W, H), 0, 0, W, H);
        b.globalCompositeOperation = 'source-over';

        var tl = mk(W, H), t = tl.getContext('2d');
        strokePass(t, items, tube, 0, '#3d162a', 1, false);
        strokePass(t, items, tube * 0.70, 0, '#280c1a', 1, false);
        paintCore(t, steady, tube);
        t.globalCompositeOperation = 'lighter';
        t.drawImage(buildSpec(items, tube, W, H), 0, 0);
        t.globalCompositeOperation = 'source-over';
        tips(t, items, tube);
        electrodes(t, L.elec, tube);
        b.drawImage(tl, 0, 0);
        BASE = base;

        var lit = mk(W, H), w = lit.getContext('2d');
        if (one.length) {
          w.globalCompositeOperation = 'lighter';
          w.drawImage(buildSpill(one, cap, W, H), 0, 0, W, H);
          w.drawImage(buildBloom(one, tube, W, H), 0, 0, W, H);
          w.globalCompositeOperation = 'source-over';
          paintCore(w, one, tube);
          w.globalCompositeOperation = 'destination-out';
          var sub = one[0].g.sub;
          for (var j = 0; j < sub.length; j++) {
            var e = endsOf(sub[j]);
            for (var m = 0; m < e.length; m++) {
              w.beginPath();
              w.arc(one[0].ox + e[m][0] * one[0].s, one[0].oy + e[m][1] * one[0].s, tube * 0.47, 0, P * 2);
              w.fill();
            }
          }
          w.globalCompositeOperation = 'source-over';
          var pad = cap * 1.35;
          var bx = one[0].ox - pad, by = one[0].oy - pad;
          var bw2 = one[0].g.w * cap + pad * 2, bh2 = cap + pad * 2;
          dirty.x = Math.max(0, Math.floor(bx));
          dirty.y = Math.max(0, Math.floor(by));
          dirty.w = Math.min(W - dirty.x, Math.ceil(bw2));
          dirty.h = Math.min(H - dirty.y, Math.ceil(bh2));
        } else {
          dirty = { x: 0, y: 0, w: 0, h: 0 };
        }
        WLIT = lit;
      }

      function compose(f) {
        if (!BASE) return;
        if (dirty.w > 0 && composed) {
          ctx.globalCompositeOperation = 'source-over';
          ctx.globalAlpha = 1;
          ctx.clearRect(dirty.x, dirty.y, dirty.w, dirty.h);
          ctx.drawImage(BASE, dirty.x, dirty.y, dirty.w, dirty.h, dirty.x, dirty.y, dirty.w, dirty.h);
          if (f > 0.002) {
            ctx.globalCompositeOperation = 'lighter';
            ctx.globalAlpha = f;
            ctx.drawImage(WLIT, dirty.x, dirty.y, dirty.w, dirty.h, dirty.x, dirty.y, dirty.w, dirty.h);
          }
        } else {
          ctx.globalCompositeOperation = 'source-over';
          ctx.globalAlpha = 1;
          ctx.clearRect(0, 0, W, H);
          ctx.drawImage(BASE, 0, 0);
          if (f > 0.002 && WLIT) {
            ctx.globalCompositeOperation = 'lighter';
            ctx.globalAlpha = f;
            ctx.drawImage(WLIT, 0, 0);
          }
          composed = true;
        }
        ctx.globalCompositeOperation = 'source-over';
        ctx.globalAlpha = 1;
        lastF = f;
      }
      var composed = false, lastF = -1;

      var fseed = 0x1981;
      function frnd() { fseed = (fseed * 1103515245 + 12345) >>> 0; return fseed / 4294967296; }
      var ev = null, clock = 0;

      function nextEvent(after) {
        var segs = [], n = 1 + (frnd() < 0.42 ? 1 : 0);
        for (var i = 0; i < n; i++) {
          segs.push({ d: 0.20 + frnd() * 0.26, v: 0.22 + frnd() * 0.40 });
          segs.push({ d: 0.24 + frnd() * 0.34, v: 1 });
        }
        var total = 0;
        for (var j = 0; j < segs.length; j++) total += segs[j].d;
        return { t0: after + 5.6 + frnd() * 7.2, dur: total, segs: segs };
      }
      function level(t) {
        if (!ev) ev = nextEvent(4.2);
        while (t > ev.t0 + ev.dur) ev = nextEvent(ev.t0 + ev.dur);
        if (t < ev.t0) return 1;
        var u = t - ev.t0, prev = 1;
        for (var i = 0; i < ev.segs.length; i++) {
          var s = ev.segs[i];
          if (u < s.d) {
            var p = u / s.d;
            p = p * p * (3 - 2 * p);
            return prev + (s.v - prev) * p;
          }
          u -= s.d; prev = s.v;
        }
        return 1;
      }

      function resize() {
        var w = Math.round(board.clientWidth), h = Math.round(board.clientHeight);
        if (!w || !h) return false;
        if (w === W && h === H) return false;
        W = w; H = h;
        cv.width = W; cv.height = H;
        bake();
        composed = false;
        compose(reduce ? 1 : level(clock));
        return true;
      }

      var raf = 0, last = 0, visible = true, shown = true;
      function stop() { if (raf) { cancelAnimationFrame(raf); raf = 0; } }
      function tick(now) {
        raf = requestAnimationFrame(tick);
        var dt = last ? Math.min(0.05, (now - last) / 1000) : 0;
        last = now;
        clock += dt;
        var f = level(clock);
        if (Math.abs(f - lastF) > 0.008) compose(f);
      }
      function start() {
        if (reduce || raf || !visible || !shown) return;
        last = 0;
        raf = requestAnimationFrame(tick);
      }

      if (!resize()) {
        requestAnimationFrame(function () { resize(); });
      }

      var rt = 0;
      window.addEventListener('resize', function () {
        clearTimeout(rt);
        rt = setTimeout(function () { if (resize()) {} }, 180);
      });

      document.addEventListener('visibilitychange', function () {
        shown = !document.hidden;
        if (shown) start(); else stop();
      });

      if ('IntersectionObserver' in window) {
        var io = new IntersectionObserver(function (es) {
          visible = es[0].isIntersecting;
          if (visible) start(); else stop();
        }, { threshold: 0.01 });
        io.observe(board);
      } else {
        start();
      }
      if (!reduce) start();
    })();
  <\/script>
</body>
</html>
`,E=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Julian Vance — Digital Craftsman</title>
<script src="https://cdn.tailwindcss.com"><\/script>
<script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"><\/script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"><\/script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"><\/script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Newsreader:ital,opsz,wght@1,6..72,300;1,6..72,400&display=swap" rel="stylesheet">
</head>
<body class="bg-[#09090b] text-white antialiased bg-fixed" style="font-family:'Inter',ui-sans-serif,system-ui,sans-serif;">

  <!-- WebGL Nebula Background -->
  <canvas id="bg-canvas" class="fixed inset-0 w-full h-full pointer-events-none" style="z-index:0;"></canvas>

  <!-- Grain overlay -->
  <div class="fixed inset-0 pointer-events-none" style="z-index:1; opacity:0.08; mix-blend-mode:overlay; background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22/%3E%3C/filter%3E%3Crect width=%22200%22 height=%22200%22 filter=%22url(%23n)%22/%3E%3C/svg%3E');"></div>

  <!-- Soft readability vignette -->
  <div class="fixed inset-0 pointer-events-none" style="z-index:1; background:radial-gradient(ellipse at 50% 50%, transparent 55%, rgba(9,9,11,0.65) 100%);"></div>

  <!-- Page -->
  <main class="relative flex flex-col justify-between" style="z-index:10; min-height:140vh;">

    <!-- Header containing Nav, CTA, Tagline, and Subheading -->
    <header class="px-6 sm:px-12 pt-8 sm:pt-10 flex flex-col gap-10 sm:gap-14">
      
      <!-- Header Navigation & CTA -->
      <div class="flex items-center justify-between w-full">
        <nav aria-label="Primary navigation" class="flex items-center gap-5 sm:gap-8 text-xs sm:text-sm font-medium uppercase tracking-widest text-neutral-300">
          <span class="inline-flex overflow-hidden"><a href="#" class="header-word inline-block will-change-transform hover:text-indigo-400 transition-colors" style="transition-duration:150ms;">Work</a></span>
          <span class="inline-flex overflow-hidden"><a href="#" class="header-word inline-block will-change-transform hover:text-indigo-400 transition-colors" style="transition-duration:150ms;">Experiments</a></span>
          <span class="inline-flex overflow-hidden"><a href="#" class="header-word inline-block will-change-transform hover:text-indigo-400 transition-colors" style="transition-duration:150ms;">Journal</a></span>
        </nav>

        <div class="inline-flex overflow-hidden rounded-full p-[1px] bg-gradient-to-r from-indigo-500/40 via-purple-500/40 to-indigo-500/40 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] header-word will-change-transform">
          <a href="#" class="px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-gradient-to-b from-[#2a2a2e] to-[#09090b] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),inset_0_-1px_1px_rgba(0,0,0,0.6)] text-xs sm:text-sm font-medium text-white hover:from-[#323236] hover:to-[#121216] transition-colors flex items-center gap-1.5 sm:gap-2 drop-shadow-sm">
            Start Project
            <iconify-icon icon="solar:arrow-right-up-linear" width="16" height="16" stroke-width="1.5"></iconify-icon>
          </a>
        </div>
      </div>

      <!-- Tagline & Subheading -->
      <div class="flex flex-col gap-3">
        <p id="tagline-container" class="text-xs sm:text-sm font-light text-neutral-200 leading-relaxed max-w-xs">
          <span class="inline-flex overflow-hidden pb-0.5 -mb-0.5"><span class="tagline-word inline-block will-change-transform">Creative</span></span>
          <span class="inline-flex overflow-hidden pb-0.5 -mb-0.5"><span class="tagline-word inline-block will-change-transform">developer,</span></span>
          <br>
          <em style="font-family:'Newsreader',serif;" class="italic">
            <span class="inline-flex overflow-hidden pb-0.5 -mb-0.5"><span class="tagline-word inline-block will-change-transform">crafting</span></span>
            <span class="inline-flex overflow-hidden pb-0.5 -mb-0.5"><span class="tagline-word inline-block will-change-transform">digital</span></span>
            <span class="inline-flex overflow-hidden pb-0.5 -mb-0.5"><span class="tagline-word inline-block will-change-transform">spaces</span></span>
            <span class="inline-flex overflow-hidden pb-0.5 -mb-0.5"><span class="tagline-word inline-block will-change-transform">with</span></span>
            <span class="inline-flex overflow-hidden pb-0.5 -mb-0.5"><span class="tagline-word inline-block will-change-transform">intent,</span></span>
          </em>
          <br>
          <span class="inline-flex overflow-hidden pb-0.5 -mb-0.5"><span class="tagline-word inline-block will-change-transform">merging</span></span>
          <span class="inline-flex overflow-hidden pb-0.5 -mb-0.5"><span class="tagline-word inline-block will-change-transform">form</span></span>
          <span class="inline-flex overflow-hidden pb-0.5 -mb-0.5"><span class="tagline-word inline-block will-change-transform">and</span></span>
          <span class="inline-flex overflow-hidden pb-0.5 -mb-0.5"><span class="tagline-word inline-block will-change-transform">function.</span></span>
        </p>

        <p id="subheading-container" class="text-xs sm:text-sm font-light text-neutral-400 leading-relaxed max-w-sm mt-2">
          <span class="inline-flex overflow-hidden pb-0.5 -mb-0.5"><span class="subheading-word inline-block will-change-transform">Specializing</span></span>
          <span class="inline-flex overflow-hidden pb-0.5 -mb-0.5"><span class="subheading-word inline-block will-change-transform">in</span></span>
          <span class="inline-flex overflow-hidden pb-0.5 -mb-0.5"><span class="subheading-word inline-block will-change-transform">kinetic</span></span>
          <span class="inline-flex overflow-hidden pb-0.5 -mb-0.5"><span class="subheading-word inline-block will-change-transform">interfaces</span></span>
          <span class="inline-flex overflow-hidden pb-0.5 -mb-0.5"><span class="subheading-word inline-block will-change-transform">and</span></span>
          <span class="inline-flex overflow-hidden pb-0.5 -mb-0.5"><span class="subheading-word inline-block will-change-transform">highly</span></span>
          <span class="inline-flex overflow-hidden pb-0.5 -mb-0.5"><span class="subheading-word inline-block will-change-transform">interactive</span></span>
          <span class="inline-flex overflow-hidden pb-0.5 -mb-0.5"><span class="subheading-word inline-block will-change-transform">web</span></span>
          <span class="inline-flex overflow-hidden pb-0.5 -mb-0.5"><span class="subheading-word inline-block will-change-transform">experiences.</span></span>
        </p>
      </div>
    </header>

    <!-- Giant name -->
    <section aria-label="Introduction" class="flex-1 flex items-end sm:items-center">
      <h1 class="w-full flex flex-col lg:flex-row lg:items-baseline lg:justify-between px-6 sm:px-12 gap-2 lg:gap-8 select-none tracking-tight">
        <span class="block overflow-hidden pb-2 lg:pb-6">
          <span id="name-first" class="block font-normal text-neutral-100 will-change-transform" style="font-size:clamp(4rem,16vw,15rem); line-height:0.95;">Julian</span>
        </span>
        <span class="block overflow-visible">
          <span class="block overflow-hidden pb-4 lg:pb-8 -mb-4 lg:-mb-8">
            <span id="name-last" class="block italic pr-2 will-change-transform" style="font-family:'Newsreader',serif; font-weight:300; font-size:clamp(4.25rem,17vw,16rem); line-height:0.95; background:linear-gradient(100deg,#818cf8 0%,#c084fc 45%,#e2e8f0 80%); -webkit-background-clip:text; background-clip:text; color:transparent;">Vance<span style="background:linear-gradient(100deg,#cbd5e1,#f1f5f9); -webkit-background-clip:text; background-clip:text; color:transparent;">.</span></span>
          </span>
        </span>
      </h1>
    </section>

    <!-- Bottom bar with Gradient Border -->
    <footer class="relative before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent">
      <div class="flex flex-col sm:flex-row items-center sm:items-center justify-between px-6 sm:px-12 py-5 sm:py-6 gap-4 sm:gap-0">

        <div class="flex items-center gap-2 text-xs sm:text-sm font-medium uppercase" style="letter-spacing:0.1em;">
          <span class="inline-flex overflow-hidden"><iconify-icon icon="solar:arrow-right-linear" width="16" height="16" aria-hidden="true" class="footer-word block will-change-transform"></iconify-icon></span>
          <span class="inline-flex overflow-hidden"><span class="footer-word inline-block will-change-transform">V8.0</span></span>
        </div>

        <nav aria-label="Social links" class="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium uppercase text-neutral-200" style="letter-spacing:0.1em;">
          <a href="#" class="hover:text-indigo-400 transition-colors inline-flex overflow-hidden" style="transition-duration:150ms;">
            <span class="footer-word inline-block will-change-transform">Github</span>
          </a>
          <span class="text-neutral-600 font-light inline-flex overflow-hidden">
            <span class="footer-word inline-block will-change-transform">/</span>
          </span>
          <a href="#" class="hover:text-indigo-400 transition-colors inline-flex overflow-hidden" style="transition-duration:150ms;">
            <span class="footer-word inline-block will-change-transform">Twitter</span>
          </a>
          <span class="text-neutral-600 font-light inline-flex overflow-hidden">
            <span class="footer-word inline-block will-change-transform">/</span>
          </span>
          <a href="#" class="hover:text-indigo-400 transition-colors inline-flex overflow-hidden" style="transition-duration:150ms;">
            <span class="footer-word inline-block will-change-transform">LinkedIn</span>
          </a>
        </nav>

        <nav aria-label="Secondary links" class="flex items-center gap-5 sm:gap-8 text-xs sm:text-sm font-medium uppercase" style="letter-spacing:0.1em;">
          <a href="#" class="hover:text-indigo-400 transition-colors inline-flex overflow-hidden" style="transition-duration:150ms;">
            <span class="footer-word inline-block will-change-transform">Home</span>
          </a>
          <a href="#" class="hover:text-indigo-400 transition-colors inline-flex overflow-hidden" style="transition-duration:150ms;">
            <span class="footer-word inline-block will-change-transform">Archive</span>
          </a>
          <a href="#" class="hover:text-indigo-400 transition-colors inline-flex overflow-hidden" style="transition-duration:150ms;">
            <span class="footer-word inline-block will-change-transform">Contact</span>
          </a>
        </nav>

      </div>
    </footer>
  </main>

  <script>
    // ---------- WebGL indigo nebula background ----------
    (function () {
      const canvas = document.getElementById('bg-canvas');
      const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: false });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(window.innerWidth, window.innerHeight);

      const scene = new THREE.Scene();
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

      const uniforms = {
        u_time: { value: 0 },
        u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        u_mouse: { value: new THREE.Vector2(0.5, 0.5) }
      };

      const fragmentShader = \`
        precision highp float;
        uniform float u_time;
        uniform vec2 u_resolution;
        uniform vec2 u_mouse;

        vec3 mod289(vec3 x){return x - floor(x*(1.0/289.0))*289.0;}
        vec2 mod289(vec2 x){return x - floor(x*(1.0/289.0))*289.0;}
        vec3 permute(vec3 x){return mod289(((x*34.0)+1.0)*x);}
        float snoise(vec2 v){
          const vec4 C = vec4(0.211324865405187,0.366025403784439,-0.577350269189626,0.024390243902439);
          vec2 i = floor(v + dot(v, C.yy));
          vec2 x0 = v - i + dot(i, C.xx);
          vec2 i1 = (x0.x > x0.y) ? vec2(1.0,0.0) : vec2(0.0,1.0);
          vec4 x12 = x0.xyxy + C.xxzz;
          x12.xy -= i1;
          i = mod289(i);
          vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
          vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
          m = m*m; m = m*m;
          vec3 x = 2.0 * fract(p * C.www) - 1.0;
          vec3 h = abs(x) - 0.5;
          vec3 ox = floor(x + 0.5);
          vec3 a0 = x - ox;
          m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
          vec3 g;
          g.x = a0.x * x0.x + h.x * x0.y;
          g.yz = a0.yz * x12.xz + h.yz * x12.yw;
          return 130.0 * dot(m, g);
        }
        float fbm(vec2 p){
          float v = 0.0; float a = 0.55;
          for(int i=0;i<4;i++){ v += a*snoise(p); p *= 2.05; a *= 0.5; }
          return v;
        }

        void main(){
          vec2 uv = gl_FragCoord.xy / u_resolution.xy;
          vec2 p = uv;
          p.x *= u_resolution.x / u_resolution.y;

          float t = u_time * 0.05;
          vec2 drift = (u_mouse - 0.5) * 0.12;

          // warp coordinates for fluid motion
          vec2 st = p * 0.85 + drift;
          st += vec2(fbm(st + t), fbm(st - t)) * 0.35;

          vec3 col = vec3(0.005, 0.005, 0.012); // deep zinc base

          // main indigo mass, weighted to the right / upper-right
          vec2 c1 = vec2(u_resolution.x / u_resolution.y * 0.62, 0.85) + drift;
          float d1 = length(p - c1);
          float n1 = fbm(st * 1.4 + t * 2.0);
          float mass = smoothstep(1.15, 0.05, d1 + n1 * 0.32);

          // vertical sweeping tongue of light
          float tongue = smoothstep(0.55, 0.02, abs(p.x - (u_resolution.x/u_resolution.y*0.58) - n1*0.22)) * smoothstep(1.2, 0.1, abs(uv.y - 0.55));

          // secondary far-right glow
          vec2 c2 = vec2(u_resolution.x / u_resolution.y * 1.05, 0.5);
          float d2 = length(p - c2);
          float mass2 = smoothstep(0.9, 0.0, d2 + fbm(st*1.1 - t)*0.25);

          vec3 deepIndigo = vec3(0.05, 0.02, 0.15);
          vec3 purple = vec3(0.2, 0.1, 0.6);
          vec3 hotViolet = vec3(0.5, 0.3, 1.0);

          col = mix(col, deepIndigo, clamp(mass*0.9 + mass2*0.7, 0.0, 1.0));
          col = mix(col, purple, clamp(mass*mass*1.1 + mass2*0.55, 0.0, 1.0));
          col += hotViolet * tongue * mass * 0.85;

          // breathing pulse
          float pulse = 0.92 + 0.08 * sin(u_time * 0.4);
          col *= pulse;

          // vignette
          float vig = smoothstep(1.6, 0.35, length(uv - vec2(0.45, 0.5)));
          col *= mix(0.55, 1.0, vig);

          // keep left side dark for the sans name
          col *= mix(0.35, 1.0, smoothstep(0.0, 0.55, uv.x));

          gl_FragColor = vec4(col, 1.0);
        }
      \`;

      const material = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: 'void main(){ gl_Position = vec4(position, 1.0); }',
        fragmentShader: fragmentShader
      });

      scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material));

      const mouseTarget = { x: 0.5, y: 0.5 };
      window.addEventListener('pointermove', function (e) {
        mouseTarget.x = e.clientX / window.innerWidth;
        mouseTarget.y = 1.0 - e.clientY / window.innerHeight;
      });

      window.addEventListener('resize', function () {
        renderer.setSize(window.innerWidth, window.innerHeight);
        uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight);
      });

      const clock = new THREE.Clock();
      (function animate() {
        requestAnimationFrame(animate);
        uniforms.u_time.value = clock.getElapsedTime();
        uniforms.u_mouse.value.x += (mouseTarget.x - uniforms.u_mouse.value.x) * 0.03;
        uniforms.u_mouse.value.y += (mouseTarget.y - uniforms.u_mouse.value.y) * 0.03;
        renderer.render(scene, camera);
      })();
    })();

    // ---------- GSAP entrance choreography & ScrollTrigger ----------
    (function () {
      gsap.registerPlugin(ScrollTrigger);

      gsap.set('#name-first, #name-last', { yPercent: 110 });
      gsap.set('.header-word, .tagline-word, .subheading-word, .footer-word', { yPercent: 110 });

      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      // Header Navigation and CTA reveal immediately on load, followed by the Name
      tl.to('.header-word', { yPercent: 0, duration: 1.0, stagger: 0.04 }, 0.1)
        .to('#name-first', { yPercent: 0, duration: 1.4 }, 0.2)
        .to('#name-last', { yPercent: 0, duration: 1.4 }, 0.38);

      // Masked staggered word reveal on scroll (Tagline)
      gsap.to('.tagline-word', {
        scrollTrigger: {
          trigger: '#tagline-container',
          start: 'top 95%'
        },
        yPercent: 0,
        duration: 1.0,
        stagger: 0.04,
        ease: 'power4.out'
      });

      // Masked staggered word reveal on scroll (Subheading)
      gsap.to('.subheading-word', {
        scrollTrigger: {
          trigger: '#subheading-container',
          start: 'top 95%'
        },
        yPercent: 0,
        duration: 1.0,
        stagger: 0.03,
        ease: 'power4.out'
      });

      // Masked staggered word reveal on scroll (Footer)
      gsap.to('.footer-word', {
        scrollTrigger: {
          trigger: 'footer',
          start: 'top 95%'
        },
        yPercent: 0,
        duration: 0.9,
        stagger: 0.03,
        ease: 'power4.out'
      });
    })();
  <\/script>
</body>
</html>`,S=`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>Kinetic Lathe</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
  <style>
    :root {
      --ground: #ded6c2;
      --ground2: #d3cab3;
      --sheet: #f5efdf;
      --sheet2: #efe7d3;
      --ink: #1f3a30;
      --ink-6: rgba(31, 58, 48, 0.62);
      --ink-4: rgba(31, 58, 48, 0.44);
      --rule: rgba(31, 58, 48, 0.22);
    }

    * { box-sizing: border-box; }

    html, body {
      width: 100%;
      height: 100%;
      margin: 0;
      overflow: hidden;
      background:
        radial-gradient(118% 92% at 50% 0%, #e6dfcd 0%, var(--ground) 52%, var(--ground2) 100%);
      color: var(--ink);
      font-family: "Cormorant Garamond", Didot, "Times New Roman", serif;
      -webkit-font-smoothing: antialiased;
    }

    main {
      width: 100%;
      height: 100%;
      display: grid;
      place-items: center;
      padding: clamp(12px, 3vmin, 28px);
    }

    #cert {
      position: relative;
      width: min(100%, 720px);
      aspect-ratio: 1.08 / 1;
      max-height: min(100%, 720px);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: clamp(10px, 2.4vmin, 18px);
      padding: clamp(16px, 4vmin, 36px);
      border-radius: 3px;
      background:
        repeating-linear-gradient(0deg, rgba(31, 58, 48, 0.045) 0 0.5px, transparent 0.5px 6px),
        linear-gradient(168deg, #f8f3e6 0%, var(--sheet) 40%, var(--sheet2) 100%);
      box-shadow:
        0 0 0 1px rgba(31, 58, 48, 0.13),
        0 1px 0 rgba(255, 255, 255, 0.55) inset,
        0 30px 60px -34px rgba(22, 38, 28, 0.62),
        0 3px 8px rgba(22, 38, 28, 0.09);
    }

    #plate {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      display: block;
      border-radius: inherit;
      pointer-events: none;
    }

    .face {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: clamp(10px, 2.2vmin, 16px);
      width: min(100%, 420px);
      text-align: center;
    }

    .mark {
      font-family: "IBM Plex Mono", ui-monospace, monospace;
      font-size: clamp(9px, 1.7vmin, 11px);
      letter-spacing: 0.24em;
      text-transform: uppercase;
      color: var(--ink-4);
    }

    h1 {
      margin: 0;
      font-size: clamp(22px, 4.8vmin, 34px);
      font-weight: 500;
      letter-spacing: 0.02em;
      line-height: 1;
    }

    h1 em {
      font-style: normal;
      color: var(--ink-6);
    }

    #medal {
      position: relative;
      width: min(58vmin, 280px);
      height: min(58vmin, 280px);
      border-radius: 50%;
      flex: none;
    }

    #rosette,
    #drift {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      display: block;
      pointer-events: none;
    }

    .caption {
      font-family: "IBM Plex Mono", ui-monospace, monospace;
      font-size: clamp(9px, 1.7vmin, 11px);
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--ink-4);
    }

    @media (max-width: 520px), (max-height: 560px) {
      #cert {
        aspect-ratio: auto;
        height: 100%;
        max-height: none;
      }

      #medal {
        width: min(62vmin, 240px);
        height: min(62vmin, 240px);
      }
    }
  </style>
</head>
<body>
  <main>
    <article id="cert" aria-label="Kinetic Lathe certificate">
      <canvas id="plate" aria-hidden="true"></canvas>
      <div class="face">
        <div class="mark">Kinetic Lathe</div>
        <figure id="medal">
          <canvas id="rosette" aria-hidden="true"></canvas>
          <canvas id="drift" aria-hidden="true"></canvas>
        </figure>
        <h1>Matrix 92 · Cam <em id="barName">C</em></h1>
        <div class="caption">Primary cam · <span id="capBar">C</span></div>
      </div>
    </article>
  </main>
<script>
(() => {
  "use strict";
  const reduce = matchMedia("(prefers-reduced-motion:reduce)").matches;
  const TAU = Math.PI * 2;
  const INK = "rgba(31,58,48,";
  const ink = (a) => INK + a + ")";
  const SUB = "#f5efdf";

  const cert = document.getElementById("cert");
  const medal = document.getElementById("medal");
  const cPlate = document.getElementById("plate");
  const cRose = document.getElementById("rosette");
  const cDrift = document.getElementById("drift");
  const ctxP = cPlate.getContext("2d");
  const ctxR = cRose.getContext("2d");
  const ctxD = cDrift.getContext("2d");
  if (!ctxP || !ctxR || !ctxD) return;

  const BARS = [
    { id: "A", m: 7, m2: 13, m3: 9 },
    { id: "B", m: 9, m2: 15, m3: 12 },
    { id: "C", m: 11, m2: 19, m3: 14 },
    { id: "D", m: 15, m2: 23, m3: 18 },
  ];
  let sel = 2;

  function fit(canvas, ctx, w, h) {
    const S = Math.min(window.devicePixelRatio || 1, 2);
    const W = Math.max(2, Math.round(w * S));
    const H = Math.max(2, Math.round(h * S));
    if (canvas.width !== W || canvas.height !== H) {
      canvas.width = W;
      canvas.height = H;
    }
    ctx.setTransform(S, 0, 0, S, 0, 0);
    ctx.clearRect(0, 0, w, h);
  }

  function circleOutline(cx, cy, r, samples) {
    const pts = new Array(samples);
    for (let i = 0; i < samples; i++) {
      const th = (i / samples) * TAU;
      pts[i] = [cx + Math.cos(th) * r, cy + Math.sin(th) * r];
    }
    return pts;
  }

  function rectOutline(x, y, w, h, r) {
    const pts = [];
    const push = (px, py) => {
      const l = pts[pts.length - 1];
      if (l && Math.abs(l[0] - px) < 1e-4 && Math.abs(l[1] - py) < 1e-4) return;
      pts.push([px, py]);
    };
    const seg = (x0, y0, xe, ye) => {
      const n = Math.max(2, Math.round(Math.hypot(xe - x0, ye - y0) / 4));
      for (let i = 0; i <= n; i++) push(x0 + ((xe - x0) * i) / n, y0 + ((ye - y0) * i) / n);
    };
    const arc = (cx, cy, a0, a1) => {
      const n = Math.max(7, Math.round((Math.abs(a1 - a0) * r) / 1.6));
      for (let i = 0; i <= n; i++) {
        const a = a0 + ((a1 - a0) * i) / n;
        push(cx + Math.cos(a) * r, cy + Math.sin(a) * r);
      }
    };
    const x1 = x + w;
    const y1 = y + h;
    const HP = Math.PI / 2;
    seg(x + r, y, x1 - r, y);
    arc(x1 - r, y + r, -HP, 0);
    seg(x1, y + r, x1, y1 - r);
    arc(x1 - r, y1 - r, 0, HP);
    seg(x1 - r, y1, x + r, y1);
    arc(x + r, y1 - r, HP, Math.PI);
    seg(x, y1 - r, x, y + r);
    arc(x + r, y + r, Math.PI, Math.PI * 1.5);
    return pts;
  }

  function rail(pts, M) {
    const nP = pts.length;
    const cum = new Float64Array(nP + 1);
    for (let i = 1; i <= nP; i++) {
      const p = pts[i % nP];
      const q = pts[i - 1];
      cum[i] = cum[i - 1] + Math.hypot(p[0] - q[0], p[1] - q[1]);
    }
    const L = cum[nP];
    const out = new Array(M);
    let j = 0;
    for (let i = 0; i < M; i++) {
      const target = (i / M) * L;
      while (j < nP - 1 && cum[j + 1] < target) j++;
      const seg = cum[j + 1] - cum[j] || 1;
      const u = (target - cum[j]) / seg;
      const p = pts[j];
      const q = pts[(j + 1) % nP];
      out[i] = [
        p[0] + (q[0] - p[0]) * u,
        p[1] + (q[1] - p[1]) * u,
        (q[1] - p[1]) / seg,
        -(q[0] - p[0]) / seg,
      ];
    }
    return out;
  }

  function band(ctx, r, o) {
    const M = r.length;
    ctx.lineWidth = o.lw;
    ctx.strokeStyle = ink(o.alpha);
    ctx.beginPath();
    for (let k = 0; k < o.K; k++) {
      const ph = (o.phase || 0) + (k / o.K) * TAU;
      for (let i = 0; i <= M; i++) {
        const p = r[i % M];
        const u = (i % M) / M;
        const off = o.amp * Math.sin(o.waves * u * TAU + ph);
        const x = p[0] + p[2] * off;
        const y = p[1] + p[3] * off;
        if (i) ctx.lineTo(x, y);
        else ctx.moveTo(x, y);
      }
    }
    ctx.stroke();
  }

  function railLine(ctx, r, off, alpha, lw) {
    const M = r.length;
    ctx.lineWidth = lw;
    ctx.strokeStyle = ink(alpha);
    ctx.beginPath();
    for (let i = 0; i <= M; i++) {
      const p = r[i % M];
      const x = p[0] + p[2] * off;
      const y = p[1] + p[3] * off;
      if (i) ctx.lineTo(x, y);
      else ctx.moveTo(x, y);
    }
    ctx.stroke();
  }

  function rosette(ctx, cx, cy, o) {
    const n = o.n;
    const pts = o.pts;
    const m = o.m;
    const d = o.d;
    const dir = o.dir || 1;
    const shrink = o.shrink === undefined ? 0.06 : o.shrink;
    ctx.lineWidth = o.lw;
    ctx.strokeStyle = ink(o.alpha);
    ctx.lineJoin = "round";
    ctx.beginPath();
    for (let k = 0; k < n; k++) {
      const f = k / n;
      const phi = (o.phase || 0) + dir * f * TAU;
      const a = o.A * (1 - shrink * f);
      for (let i = 0; i <= pts; i++) {
        const t = (i / pts) * TAU;
        const x = cx + a * Math.cos(t) + d * Math.cos(m * t + phi);
        const y = cy + a * Math.sin(t) - d * Math.sin(m * t + phi);
        if (i) ctx.lineTo(x, y);
        else ctx.moveTo(x, y);
      }
    }
    ctx.stroke();
  }

  function waveField(ctx, w, h) {
    ctx.lineWidth = 0.5;
    ctx.strokeStyle = ink(0.075);
    const pitch = 6.2;
    const N = Math.ceil(h / pitch) + 2;
    const step = 7;
    ctx.beginPath();
    for (let i = 0; i < N; i++) {
      const y0 = i * pitch - 3;
      const ph = i * 0.44;
      for (let x = 0; x <= w; x += step) {
        const y =
          y0 +
          3.3 * Math.sin(x * 0.0139 + ph) +
          1.9 * Math.sin(x * 0.0327 - ph * 1.7) +
          0.9 * Math.sin(x * 0.0715 + ph * 0.6);
        if (x) ctx.lineTo(x, y);
        else ctx.moveTo(x, y);
      }
    }
    ctx.stroke();
  }

  function rand32(a) {
    return function () {
      a |= 0;
      a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function drawPlate() {
    const w = cert.clientWidth;
    const h = cert.clientHeight;
    if (!w || !h) return;
    fit(cPlate, ctxP, w, h);
    ctxP.fillStyle = SUB;
    ctxP.fillRect(0, 0, w, h);

    let g = ctxP.createRadialGradient(w * 0.28, h * 0.16, 8, w * 0.28, h * 0.16, Math.max(w, h) * 0.95);
    g.addColorStop(0, "rgba(255,252,240,.85)");
    g.addColorStop(1, "rgba(255,252,240,0)");
    ctxP.fillStyle = g;
    ctxP.fillRect(0, 0, w, h);
    g = ctxP.createRadialGradient(w * 0.88, h * 0.94, 8, w * 0.88, h * 0.94, Math.max(w, h) * 0.85);
    g.addColorStop(0, ink(0.06));
    g.addColorStop(1, ink(0));
    ctxP.fillStyle = g;
    ctxP.fillRect(0, 0, w, h);

    const rnd = rand32(4409);
    for (let i = 0; i < 1100; i++) {
      ctxP.fillStyle = ink(0.018 + rnd() * 0.05);
      ctxP.fillRect(rnd() * w, rnd() * h, 1, rnd() < 0.12 ? 2 : 1);
    }

    waveField(ctxP, w, h);

    const narrow = w < 520;
    const inset = narrow ? 7 : 10;
    const half = narrow ? 3.1 : 3.8;
    const br = rail(
      rectOutline(inset + half, inset + half, w - 2 * (inset + half), h - 2 * (inset + half), narrow ? 5 : 7),
      narrow ? 760 : 1240,
    );
    band(ctxP, br, { amp: half, waves: narrow ? 54 : 116, K: 9, alpha: 0.3, lw: 0.5 });
    railLine(ctxP, br, -half - 1.9, 0.34, 0.6);
    railLine(ctxP, br, half + 1.9, 0.3, 0.5);
    railLine(ctxP, br, half + 4.4, 0.13, 0.5);
  }

  function drawRosettes() {
    const w = medal.clientWidth;
    const h = medal.clientHeight;
    if (!w || !h) return;
    fit(cRose, ctxR, w, h);
    const cx = w / 2;
    const cy = h / 2;
    const R = Math.min(w, h) / 2;
    const bar = BARS[sel];
    const small = R < 130;

    const g = ctxR.createRadialGradient(cx, cy, R * 0.06, cx, cy, R);
    g.addColorStop(0, "rgba(249,245,234,.92)");
    g.addColorStop(0.76, "rgba(249,245,234,.84)");
    g.addColorStop(1, "rgba(249,245,234,0)");
    ctxR.fillStyle = g;
    ctxR.beginPath();
    ctxR.arc(cx, cy, R, 0, TAU);
    ctxR.fill();

    const ring = rail(circleOutline(cx, cy, R * 0.93, 640), small ? 460 : 620);
    band(ctxR, ring, { amp: R * 0.036, waves: (bar.m + 1) * 5, K: 7, alpha: 0.3, lw: 0.5 });
    railLine(ctxR, ring, -R * 0.036 - 1.8, 0.34, 0.6);
    railLine(ctxR, ring, R * 0.036 + 1.8, 0.28, 0.5);

    rosette(ctxR, cx, cy, {
      A: R * 0.655,
      d: R * 0.215,
      m: bar.m,
      n: small ? 44 : 58,
      pts: small ? 340 : 470,
      alpha: 0.42,
      lw: 0.5,
      shrink: 0.035,
      phase: 0.2,
    });
    rosette(ctxR, cx, cy, {
      A: R * 0.335,
      d: R * 0.115,
      m: bar.m2,
      n: small ? 34 : 44,
      pts: small ? 280 : 380,
      alpha: 0.38,
      lw: 0.5,
      dir: -1,
      shrink: 0.05,
      phase: 0.9,
    });

    ctxR.beginPath();
    ctxR.arc(cx, cy, R * 0.07, 0, TAU);
    ctxR.fillStyle = "rgba(249,245,234,.86)";
    ctxR.fill();
    ctxR.lineWidth = 0.6;
    ctxR.strokeStyle = ink(0.32);
    ctxR.stroke();
    ctxR.beginPath();
    ctxR.arc(cx, cy, R * 0.04, 0, TAU);
    ctxR.strokeStyle = ink(0.24);
    ctxR.lineWidth = 0.5;
    ctxR.stroke();
  }

  let phase = 0;
  function drawDrift() {
    const w = medal.clientWidth;
    const h = medal.clientHeight;
    if (!w || !h) return;
    fit(cDrift, ctxD, w, h);
    const cx = w / 2;
    const cy = h / 2;
    const R = Math.min(w, h) / 2;
    const bar = BARS[sel];
    const small = R < 130;
    rosette(ctxD, cx, cy, {
      A: R * 0.515,
      d: R * 0.165,
      m: bar.m3,
      n: small ? 26 : 34,
      pts: small ? 240 : 320,
      alpha: 0.3,
      lw: 0.5,
      shrink: 0.03,
      phase,
    });
  }

  const elBarName = document.getElementById("barName");
  const elCapBar = document.getElementById("capBar");

  function paintLabels() {
    const b = BARS[sel];
    elBarName.textContent = b.id;
    elCapBar.textContent = b.id;
  }

  function drawAll() {
    drawPlate();
    drawRosettes();
    drawDrift();
  }

  paintLabels();
  drawAll();

  let timer = 0;
  let onScreen = true;
  let camTimer = 0;

  function tick() {
    timer = 0;
    phase += 0.019;
    if (phase > TAU) phase -= TAU;
    drawDrift();
    schedule();
  }

  function schedule() {
    if (timer || reduce || !onScreen || document.hidden) return;
    timer = setTimeout(tick, 140);
  }

  function halt() {
    if (timer) {
      clearTimeout(timer);
      timer = 0;
    }
  }

  function cycleCam() {
    if (reduce || document.hidden || !onScreen) return;
    sel = (sel + 1) % BARS.length;
    paintLabels();
    drawRosettes();
    drawDrift();
  }

  if ("IntersectionObserver" in window) {
    new IntersectionObserver(
      (entries) => {
        onScreen = entries[0].isIntersecting;
        if (onScreen) schedule();
        else halt();
      },
      { threshold: 0.02 },
    ).observe(cert);
  } else {
    schedule();
  }

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) halt();
    else schedule();
  });
  window.addEventListener("pagehide", halt);

  let rt = 0;
  window.addEventListener("resize", () => {
    clearTimeout(rt);
    rt = setTimeout(drawAll, 120);
  });

  if (!reduce) camTimer = setInterval(cycleCam, 4200);
  schedule();

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(drawAll).catch(() => {});
  }
})();
<\/script>
</body>
</html>
`,T=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
    <title>Lumina Weavers · Kinetic Textiles, Kyoto</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
    <script src="https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.min.js"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
</head>
<body class="text-[#e8dcc4] overflow-hidden antialiased selection:bg-[#b02330] selection:text-white font-serif" style="background: radial-gradient(120% 100% at 50% 30%, #2a1113 0%, #1a0a0c 55%, #0f0607 100%); height: 100dvh; width: 100vw;">

    <!-- Aura Asset Background -->
    <div class="fixed inset-0 pointer-events-none z-0 bg-cover bg-center opacity-[0.15] mix-blend-screen" style="background-image: url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_1600w.jpg');"></div>

    <!-- Stage / Background -->
    <div class="fixed inset-0 overflow-hidden z-0">
        <canvas id="cloth" class="absolute inset-0 w-full h-full block pointer-events-none"></canvas>
        <div class="absolute inset-0 pointer-events-none" style="background: radial-gradient(90% 80% at 50% 46%, transparent 55%, rgba(10,5,6,.72) 100%);"></div>
    </div>

    <!-- UI Overlay -->
    <div class="absolute inset-0 z-10 flex flex-col p-6 md:p-12 pointer-events-none font-sans">
        
        <!-- Header -->
        <header class="flex justify-between items-center w-full pointer-events-auto">
            <div class="overflow-hidden">
                <div class="reveal-item opacity-0 translate-y-8 text-xs tracking-[0.28em] uppercase text-[#b99a8f] font-medium">
                    Est. 2024 · Kyoto, Japan
                </div>
            </div>
            <nav class="hidden md:flex gap-8">
                <div class="overflow-hidden">
                    <a href="#library" class="reveal-item block opacity-0 translate-y-8 text-xs tracking-widest uppercase text-[#e8dcc4]/80 hover:text-white transition-colors duration-300">Material Library</a>
                </div>
                <div class="overflow-hidden">
                    <a href="#trade" class="reveal-item block opacity-0 translate-y-8 text-xs tracking-widest uppercase text-[#e8dcc4]/80 hover:text-white transition-colors duration-300">Partnerships</a>
                </div>
                <div class="overflow-hidden">
                    <a href="#mill" class="reveal-item block opacity-0 translate-y-8 text-xs tracking-widest uppercase text-[#e8dcc4]/80 hover:text-white transition-colors duration-300">The Studio</a>
                </div>
            </nav>
        </header>

        <!-- Footer / Content -->
        <div class="mt-auto flex flex-col sm:flex-row justify-between items-start sm:items-end gap-8 pointer-events-auto w-full">
            
            <div class="max-w-md space-y-6">
                <div>
                    <p class="word-reveal text-sm md:text-base leading-relaxed text-[#e8dcc4]/90">
                        <strong class="text-white font-semibold block mb-1 text-base md:text-lg tracking-tight font-serif">Kinetic textiles, rendered to order.</strong>
                        Every meter is simulated on bespoke kinetic engines. Digital threads, authentic physics, designed for infinite virtual environments.
                    </p>
                </div>
                
                <div class="overflow-hidden pt-2">
                    <div class="reveal-item opacity-0 translate-y-8 inline-block rounded-sm p-[1px] bg-gradient-to-b from-white/30 via-[#e03848]/30 to-[#7c1622]/10 shadow-[0_10px_30px_rgba(124,22,34,0.4)] transition-transform duration-300 hover:-translate-y-0.5 group">
                        <a href="#commission" class="flex items-center gap-3 bg-[#b02330] group-hover:bg-[#961c27] text-white px-6 py-3 rounded-[1px] text-sm font-semibold tracking-wide transition-colors relative overflow-hidden">
                            <span class="relative z-10">Commission a textile</span>
                            <iconify-icon icon="solar:arrow-right-linear" width="18" class="relative z-10 transition-transform group-hover:translate-x-1"></iconify-icon>
                            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                        </a>
                    </div>
                </div>
            </div>

            <div class="text-left sm:text-right mt-8 sm:mt-0">
                <div class="word-reveal text-xs tracking-[0.24em] uppercase text-[#b99a8f] leading-[1.9] font-medium">
                    Vector &amp; matrix<br>
                    No. 42 azure thread<br>
                    Node 7 · Grid 2024
                </div>
            </div>

        </div>
    </div>

    <script>
        // --- GSAP Animation ---
        document.addEventListener("DOMContentLoaded", () => {
            gsap.registerPlugin(ScrollTrigger);
            
            // Standard reveals
            gsap.to(".reveal-item", {
                y: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.1,
                ease: "power3.out",
                delay: 0.2
            });

            // Masked Word Reveal implementation
            document.querySelectorAll('.word-reveal').forEach(node => {
                function wrapWords(el) {
                    const childNodes = Array.from(el.childNodes);
                    childNodes.forEach(child => {
                        if (child.nodeType === 3) {
                            const words = child.nodeValue.split(/(\\s+)/);
                            const fragment = document.createDocumentFragment();
                            words.forEach(word => {
                                if (word.trim().length > 0) {
                                    const wrapper = document.createElement('span');
                                    wrapper.className = 'inline-flex overflow-hidden pb-1 -mb-1';
                                    const inner = document.createElement('span');
                                    inner.className = 'word-anim translate-y-[110%] opacity-0 inline-block';
                                    inner.textContent = word;
                                    wrapper.appendChild(inner);
                                    fragment.appendChild(wrapper);
                                } else {
                                    fragment.appendChild(document.createTextNode(word));
                                }
                            });
                            el.replaceChild(fragment, child);
                        } else if (child.nodeType === 1) {
                            wrapWords(child);
                        }
                    });
                }
                wrapWords(node);

                // ScrollTrigger staggered reveal
                gsap.to(node.querySelectorAll('.word-anim'), {
                    y: 0,
                    opacity: 1,
                    duration: 0.9,
                    stagger: 0.02,
                    ease: "power4.out",
                    delay: 0.3,
                    scrollTrigger: {
                        trigger: node,
                        start: "top 95%",
                    }
                });
            });
        });

        // --- Three.js Cloth Simulation ---
        (() => {
            const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;
            const canvas = document.getElementById('cloth');
            if (!window.THREE) return;

            // Generate Woven Texture
            function makeClothTexture() {
                const W = 1280, H = 800;
                const c = document.createElement('canvas'); 
                c.width = W; 
                c.height = H;
                const x = c.getContext('2d');
                
                // Ivory ground gradient
                const g = x.createLinearGradient(0, 0, 0, H);
                g.addColorStop(0, '#efe6d4'); 
                g.addColorStop(0.5, '#e9dfca'); 
                g.addColorStop(1, '#e3d7bf');
                x.fillStyle = g; 
                x.fillRect(0, 0, W, H);

                // Crimson hem border
                x.strokeStyle = '#a5202c'; 
                x.lineWidth = 10;
                x.strokeRect(46, 46, W-92, H-92);
                x.lineWidth = 3; 
                x.strokeStyle = '#7c1622';
                x.strokeRect(66, 66, W-132, H-132);

                // Typography
                x.fillStyle = '#a5202c';
                x.font = 'bold 78px Georgia, "Times New Roman", serif';
                x.textAlign = 'center'; 
                x.textBaseline = 'middle';
                x.fillText('L W', W/2, 190);
                
                x.font = 'normal 20px "Helvetica Neue", Arial, sans-serif';
                x.fillStyle = '#7c1622';
                x.fillText('· KYOTO ·', W/2, 246);

                x.fillStyle = '#9e1e2a';
                x.font = 'bold 118px Georgia, "Times New Roman", serif';
                x.fillText('LUMINA', W/2, 400);
                x.fillText('WEAVERS', W/2, 520);

                x.fillStyle = '#7c1622';
                x.font = '600 30px "Helvetica Neue", Arial, sans-serif';
                x.fillText('K I N E T I C   T E X T I L E S   ·   2 0 2 4', W/2, 626);

                // Weave overlay (Thread grid)
                x.globalAlpha = 1;
                for(let yy=0; yy<H; yy+=3){
                    x.strokeStyle = 'rgba(60,30,20,0.05)'; 
                    x.lineWidth = 1;
                    x.beginPath(); x.moveTo(0,yy+.5); x.lineTo(W,yy+.5); x.stroke();
                }
                for(let xx=0; xx<W; xx+=3){
                    x.strokeStyle = 'rgba(255,250,235,0.06)'; 
                    x.lineWidth = 1;
                    x.beginPath(); x.moveTo(xx+.5,0); x.lineTo(xx+.5,H); x.stroke();
                }

                // Fabric Slub Noise
                const id = x.getImageData(0, 0, W, H), d = id.data;
                for(let i=0; i<d.length; i+=4){
                    const n = (Math.random()*2-1)*10;
                    d[i]+=n; d[i+1]+=n; d[i+2]+=n;
                }
                x.putImageData(id, 0, 0);

                const tex = new THREE.CanvasTexture(c);
                tex.anisotropy = 4; 
                tex.colorSpace = THREE.SRGBColorSpace;
                return tex;
            }

            // Scene Setup
            const scene = new THREE.Scene();
            const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            let camera;

            const BW = 4.4, BH = 2.75; 
            const GX = 40, GY = 26;
            const geo = new THREE.PlaneGeometry(BW, BH, GX, GY);
            const mat = new THREE.MeshPhongMaterial({
                map: makeClothTexture(), 
                side: THREE.DoubleSide,
                shininess: 6, 
                specular: 0x2a1410, 
                color: 0xffffff
            });
            const mesh = new THREE.Mesh(geo, mat); 
            scene.add(mesh);

            // Lighting
            scene.add(new THREE.AmbientLight(0xffe9d0, 0.62));
            const key = new THREE.DirectionalLight(0xfff0dc, 1.15); 
            key.position.set(-3, 3.5, 3.2); 
            scene.add(key);
            const rim = new THREE.DirectionalLight(0xb02330, 0.42); 
            rim.position.set(3, -1.5, 2.0); 
            scene.add(rim);

            // Verlet Physics Data
            const pos = geo.attributes.position;
            const N = (GX + 1) * (GY + 1);
            const cur = new Float32Array(N * 3), prev = new Float32Array(N * 3), rest = new Float32Array(N * 3);
            const pinned = new Uint8Array(N);
            
            for(let i=0; i<N; i++){
                const ax = pos.getX(i), ay = pos.getY(i), az = 0;
                cur[i*3] = prev[i*3] = rest[i*3] = ax;
                cur[i*3+1] = prev[i*3+1] = rest[i*3+1] = ay;
                cur[i*3+2] = prev[i*3+2] = rest[i*3+2] = az;
            }
            
            for(let ix=0; ix<=GX; ix++){ pinned[ix] = 1; }
            const idx = (ix, iy) => ix + iy * (GX + 1);

            const restH = BW / GX, restV = BH / GY;
            const GRAV = -3.1, DAMP = 0.985, DT = 0.016;

            function wind(ix, iy, t) {
                const cx = ix / GX, cy = iy / GY;
                const travel = t * 1.7 - cy * 4.2;
                const gust = 0.6 + 0.42 * Math.sin(t * 0.6) + 0.18 * Math.sin(t * 1.9 + 1.3);
                const amp = 4.3 * cy;
                const fz = (Math.sin(travel + cx * 3.3) + 0.5 * Math.sin(travel * 1.7 + cx * 6.0)) * amp * gust;
                const fx = Math.sin(t * 0.9 + cy * 2.2) * 0.6 * cy;
                const fy = -0.4 * cy;
                return [fx, fy, fz];
            }

            function step(t) {
                for(let iy=0; iy<=GY; iy++){
                    for(let ix=0; ix<=GX; ix++){
                        const i = idx(ix, iy);
                        if(pinned[i]) continue;
                        const [fx, fy, fz] = wind(ix, iy, t);
                        for(let k=0; k<3; k++){
                            const j = i * 3 + k;
                            const a = (k===0 ? fx : k===1 ? (fy+GRAV) : fz);
                            const v = (cur[j] - prev[j]) * DAMP;
                            prev[j] = cur[j];
                            cur[j] = cur[j] + v + a * DT * DT;
                        }
                    }
                }
                
                for(let it=0; it<3; it++){
                    for(let iy=0; iy<=GY; iy++){
                        for(let ix=0; ix<GX; ix++){ solve(idx(ix,iy), idx(ix+1,iy), restH); }
                    }
                    for(let iy=0; iy<GY; iy++){
                        for(let ix=0; ix<=GX; ix++){ solve(idx(ix,iy), idx(ix,iy+1), restV); }
                    }
                }
                
                for(let ix=0; ix<=GX; ix++){
                    const i = ix;
                    cur[i*3] = rest[i*3]; cur[i*3+1] = rest[i*3+1]; cur[i*3+2] = rest[i*3+2];
                    prev[i*3] = rest[i*3]; prev[i*3+1] = rest[i*3+1]; prev[i*3+2] = rest[i*3+2];
                }
            }

            function solve(a, b, rl) {
                const ax = cur[a*3], ay = cur[a*3+1], az = cur[a*3+2];
                const bx = cur[b*3], by = cur[b*3+1], bz = cur[b*3+2];
                let dx = bx - ax, dy = by - ay, dz = bz - az;
                const d = Math.sqrt(dx*dx + dy*dy + dz*dz) || 1e-6;
                const diff = (d - rl) / d * 0.5;
                dx *= diff; dy *= diff; dz *= diff;
                
                const pa = pinned[a], pb = pinned[b];
                if(!pa && !pb){ 
                    cur[a*3]+=dx; cur[a*3+1]+=dy; cur[a*3+2]+=dz; 
                    cur[b*3]-=dx; cur[b*3+1]-=dy; cur[b*3+2]-=dz; 
                }
                else if(pa && !pb){ cur[b*3]-=dx*2; cur[b*3+1]-=dy*2; cur[b*3+2]-=dz*2; }
                else if(!pa && pb){ cur[a*3]+=dx*2; cur[a*3+1]+=dy*2; cur[a*3+2]+=dz*2; }
            }

            function commit() {
                for(let i=0; i<N; i++){ pos.setXYZ(i, cur[i*3], cur[i*3+1], cur[i*3+2]); }
                pos.needsUpdate = true;
                geo.computeVertexNormals();
            }

            function fit() {
                const w = window.innerWidth, h = window.innerHeight;
                renderer.setSize(w, h, false);
                const aspect = w / h;
                camera = new THREE.PerspectiveCamera(42, aspect, 0.1, 100);
                const vFit = (BH/2) / Math.tan(42 * Math.PI / 360);
                const hFit = (BW/2) / Math.tan(42 * Math.PI / 360) / aspect;
                camera.position.set(0, 0.05, Math.max(vFit, hFit) * 1.16 + 0.4);
                camera.lookAt(0, 0, 0);
            }
            
            window.addEventListener('resize', fit); 
            fit();

            let running = false, raf = 0, t = 0;
            function loop() {
                if(!running) return;
                t += DT; 
                step(t); 
                commit();
                renderer.render(scene, camera);
                raf = requestAnimationFrame(loop);
            }
            
            function start() { if(running)return; running=true; raf=requestAnimationFrame(loop); }
            function stop() { running=false; cancelAnimationFrame(raf); }

            if(reduce) {
                for(let s=0; s<220; s++) step(s*DT);
                commit(); 
                renderer.render(scene, camera);
            } else {
                for(let s=0; s<40; s++) step(s*DT);
                t = 40 * DT;
                start();
                document.addEventListener('visibilitychange', () => document.hidden ? stop() : start());
            }
        })();
    <\/script>
</body>
</html>`,C=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nexus - Unified Ecosystem</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <!-- GSAP for Animations -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
</head>
<body class="bg-black text-white font-sans min-h-screen overflow-x-hidden antialiased selection:bg-red-500/30 flex flex-col relative" style="font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">

    <!-- WebGL Background -->
    <canvas id="glcanvas" class="fixed inset-0 w-full h-full -z-20"></canvas>

    <!-- Overlay structural lines to match reference -->
    <div class="fixed inset-0 pointer-events-none -z-10 w-full h-full">
        <!-- Thin angled lines behind logo area -->
        <div class="absolute top-0 left-0 w-[600px] h-[600px] border-l border-t border-white/5 origin-top-left rotate-[15deg] translate-x-[-100px] translate-y-[-100px]"></div>
        <div class="absolute top-0 left-0 w-[800px] h-[800px] border-l border-white/5 origin-top-left rotate-[-25deg] translate-x-[200px] translate-y-[-50px]"></div>
        <!-- Horizontal grid line -->
        <div class="absolute top-[20%] w-full border-t border-white/5"></div>
    </div>

    <!-- Main Content Layout -->
    <div class="flex-1 flex flex-col relative z-10 w-full max-w-[1600px] mx-auto min-h-screen border-l border-r border-white/10">
        
        <!-- Hero Section -->
        <main class="flex-1 flex flex-col lg:flex-row items-center lg:items-center justify-between px-8 sm:px-16 lg:px-24 py-24 lg:py-0 relative">
            
            <!-- Left: Logo & Title -->
            <div class="flex items-center gap-6 group cursor-default w-full lg:w-1/2 mb-20 lg:mb-0">
                <!-- Abstract Geometric Icon -->
                <svg width="72" height="72" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-white transform group-hover:scale-105 transition-transform duration-500 ease-out" style="flex-shrink: 0;">
                    <path d="M10 20 L50 40 L90 10 L80 50 L95 85 L50 60 L15 90 L25 50 Z" fill="currentColor"/>
                    <path d="M50 40 L50 60" stroke="black" stroke-width="2"/>
                    <path d="M10 20 L50 60" stroke="black" stroke-width="2"/>
                </svg>
                
                <!-- Masked Reveal Title -->
                <h1 class="text-7xl sm:text-8xl lg:text-9xl font-semibold tracking-tighter lowercase leading-none flex flex-wrap gap-x-4 gap-y-2 reveal-text">
                    <span class="inline-block overflow-hidden pt-2">
                        <span class="reveal-word inline-block translate-y-[120%] pb-2">nexus</span>
                    </span>
                    <span class="inline-block overflow-hidden pt-2">
                        <span class="reveal-word inline-block translate-y-[120%] pb-2">flow</span>
                    </span>
                </h1>
            </div>

            <!-- Right: Input & Social Proof -->
            <div class="w-full lg:w-1/2 flex flex-col items-start lg:items-end relative">
                <!-- Offset Input Container -->
                <div class="relative group w-full max-w-md">
                    <!-- Stylized Shadow/Offset with subtle gradient -->
                    <div class="absolute inset-0 bg-gradient-to-br from-[#A63A29] to-[#732215] translate-x-3 translate-y-3 transition-transform duration-300 ease-out group-hover:translate-x-4 group-hover:translate-y-4"></div>
                    
                    <!-- Input Box with Premium Gradient Border Treatment -->
                    <div class="relative z-10 p-[1px] bg-gradient-to-r from-white/40 via-white/10 to-white/30">
                        <div class="bg-white flex items-center justify-between p-1 w-full h-[60px] sm:h-[72px]">
                            <input type="email" placeholder="Join the waitlist..." class="w-full h-full bg-transparent text-black outline-none px-6 text-base sm:text-lg font-medium placeholder:text-gray-500 placeholder:font-normal" />
                        </div>
                    </div>
                </div>

                <!-- Users Proof -->
                <div class="flex flex-row items-center gap-4 mt-10 mr-2">
                    <span class="text-sm font-medium tracking-wide">5,102+ early adopters</span>
                    <div class="flex -space-x-3">
                        <!-- Avatars with Gradient Borders -->
                        <div class="w-8 h-8 rounded-full p-[2px] bg-gradient-to-br from-white/50 to-white/10 bg-black shadow-sm">
                            <img class="w-full h-full rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2f563338-39fa-47ea-9761-658d4f3f84db_1600w.jpg" alt="User avatar">
                        </div>
                        <div class="w-8 h-8 rounded-full p-[2px] bg-gradient-to-br from-white/50 to-white/10 bg-black shadow-sm">
                            <img class="w-full h-full rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4f5668c5-fc4a-44e0-bc5e-a664189d3c31_1600w.jpg" alt="User avatar">
                        </div>
                        <div class="w-8 h-8 rounded-full p-[2px] bg-gradient-to-br from-white/50 to-white/10 bg-black shadow-sm">
                            <img class="w-full h-full rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eca707cc-a5b7-439a-b4fd-247f6106c2e1_1600w.jpg" alt="User avatar">
                        </div>
                        <div class="w-8 h-8 rounded-full p-[2px] bg-gradient-to-br from-white/50 to-white/10 bg-black shadow-sm">
                            <img class="w-full h-full rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/77415a2e-dcbc-4748-a29d-fced4821881a_1600w.jpg" alt="User avatar">
                        </div>
                    </div>
                </div>
            </div>
            
        </main>

        <!-- Structural Horizontal Divider -->
        <div class="w-full border-t border-white/20"></div>

        <!-- Footer Section -->
        <footer class="w-full grid grid-cols-1 lg:grid-cols-12 min-h-[300px]">
            
            <!-- Footer Left: Brand & Desc -->
            <div class="lg:col-span-4 p-8 sm:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-white/20 flex flex-col gap-6">
                <div class="flex items-center gap-3">
                    <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-white">
                        <path d="M10 20 L50 40 L90 10 L80 50 L95 85 L50 60 L15 90 L25 50 Z" fill="currentColor"/>
                    </svg>
                    <span class="text-base font-semibold tracking-tight">Nexus</span>
                </div>
                <p class="text-sm text-gray-400 leading-relaxed max-w-[280px]">
                    Your unified ecosystem to synchronize thoughts, maintain momentum, and build effortlessly.
                </p>
            </div>

            <!-- Footer Right: Links -->
            <div class="lg:col-span-8 p-8 sm:p-12 lg:p-16 grid grid-cols-2 sm:grid-cols-3 gap-12 sm:gap-8">
                <!-- Column 1 -->
                <div class="flex flex-col gap-5">
                    <h3 class="text-sm font-semibold tracking-tight text-white mb-1">Product</h3>
                    <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors duration-200">Capabilities</a>
                    <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors duration-200">Mechanism</a>
                    <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors duration-200">Plans</a>
                </div>
                
                <!-- Column 2 -->
                <div class="flex flex-col gap-5">
                    <h3 class="text-sm font-semibold tracking-tight text-white mb-1">Company</h3>
                    <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors duration-200">Our Story</a>
                    <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors duration-200">Join Us</a>
                    <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors duration-200">Get in Touch</a>
                    <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors duration-200">Media</a>
                </div>

                <!-- Column 3 -->
                <div class="flex flex-col gap-5">
                    <h3 class="text-sm font-semibold tracking-tight text-white mb-1">Resources</h3>
                    <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors duration-200">Support</a>
                    <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors duration-200">Changelog</a>
                    <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors duration-200">Documentation</a>
                </div>
            </div>

        </footer>
    </div>

    <!-- Scripts -->
    <script>
        // --- WebGL Background Animation ---
        const canvas = document.getElementById('glcanvas');
        const gl = canvas.getContext('webgl');

        if (!gl) {
            console.error('WebGL not supported');
        } else {
            // Resize handler
            function resize() {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                gl.viewport(0, 0, canvas.width, canvas.height);
            }
            window.addEventListener('resize', resize);
            resize();

            // Vertex Shader
            const vsSource = \`
                attribute vec4 aVertexPosition;
                void main() {
                    gl_Position = aVertexPosition;
                }
            \`;

            // Fragment Shader (Halftone Flow)
            const fsSource = \`
                precision highp float;
                uniform vec2 u_resolution;
                uniform float u_time;

                mat2 rot(float a) {
                    float s = sin(a), c = cos(a);
                    return mat2(c, -s, s, c);
                }

                void main() {
                    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
                    vec2 p = uv * 2.0 - 1.0;
                    p.x *= u_resolution.x / u_resolution.y;

                    vec2 flow_uv = p;
                    float time = u_time * 0.4;
                    
                    for(float i = 1.0; i < 4.0; i++) {
                        flow_uv *= rot(time * 0.1);
                        flow_uv.x += sin(flow_uv.y * 2.0 * i + time) * 0.5;
                        flow_uv.y += cos(flow_uv.x * 1.5 * i - time * 0.8) * 0.5;
                    }

                    float intensity = sin(flow_uv.x * 2.0 + flow_uv.y * 3.0) * 0.5 + 0.5;
                    
                    vec3 col_dark = vec3(0.02, 0.0, 0.0);
                    vec3 col_red = vec3(0.8, 0.1, 0.05);
                    vec3 col_bright = vec3(1.0, 0.6, 0.2);
                    
                    vec3 fluid_color = mix(col_dark, col_red, smoothstep(0.2, 0.6, intensity));
                    fluid_color = mix(fluid_color, col_bright, smoothstep(0.7, 1.0, intensity));

                    float gridSize = 6.0; 
                    vec2 grid_uv = gl_FragCoord.xy / gridSize;
                    vec2 cell_uv = fract(grid_uv) - 0.5;
                    
                    float dist = length(cell_uv);
                    float radius = intensity * 0.45; 
                    float dot_mask = smoothstep(radius, radius - 0.1, dist);
                    
                    vec3 final_color = mix(vec3(0.0), fluid_color, dot_mask);
                    final_color += fluid_color * 0.15;

                    gl_FragColor = vec4(final_color, 1.0);
                }
            \`;

            function compileShader(gl, type, source) {
                const shader = gl.createShader(type);
                gl.shaderSource(shader, source);
                gl.compileShader(shader);
                if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                    console.error(gl.getShaderInfoLog(shader));
                    gl.deleteShader(shader);
                    return null;
                }
                return shader;
            }

            const vertexShader = compileShader(gl, gl.VERTEX_SHADER, vsSource);
            const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fsSource);

            const program = gl.createProgram();
            gl.attachShader(program, vertexShader);
            gl.attachShader(program, fragmentShader);
            gl.linkProgram(program);
            gl.useProgram(program);

            const positions = new Float32Array([
                -1.0,  1.0,
                 1.0,  1.0,
                -1.0, -1.0,
                 1.0, -1.0,
            ]);
            const positionBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

            const positionLocation = gl.getAttribLocation(program, "aVertexPosition");
            gl.enableVertexAttribArray(positionLocation);
            gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

            const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
            const timeLocation = gl.getUniformLocation(program, "u_time");

            let startTime = Date.now();
            function render() {
                gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
                gl.uniform1f(timeLocation, (Date.now() - startTime) / 1000.0);
                
                gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
                requestAnimationFrame(render);
            }
            render();
        }

        // --- GSAP ScrollTrigger Masked Word Reveal ---
        document.addEventListener("DOMContentLoaded", (event) => {
            gsap.registerPlugin(ScrollTrigger);

            gsap.to(".reveal-word", {
                y: "0%",
                duration: 1.2,
                stagger: 0.15,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: ".reveal-text",
                    start: "top 90%",
                }
            });
        });
    <\/script>
</body>
</html>`,d={hue:0,saturation:1,brightness:1},r={neon:{title:"Animated neon typography",source:A,background:e=>e==="light"?"#f4f4f2":"#090909",targets:[{selector:"#board",role:"ui",width:"1040px"}],presentation:"animated-typography"},luminaWeaversCloth:{title:"Woven Cloth kinetic textile",source:T,background:"#16090b",targets:[{selector:"body > div.fixed.inset-0.overflow-hidden.z-0",role:"background"}],presentation:"woven-cloth-label"},julianVanceNebula:{title:"Julian Vance nebula background",source:E,background:"#09090b",targets:[{selector:"#bg-canvas",role:"background"}]},fluid:{title:"Aura UI fluid background",source:_,background:"#030306",targets:[{selector:"#bg-canvas",role:"background"}]},nexusUnifiedFlow:{title:"Nexus unified halftone flow",source:C,background:"#000000",targets:[{selector:"#glcanvas",role:"background"}]},emberStorm:{title:"Aeonix ember storm",source:k,background:"#080503",targets:[{selector:"#gl",role:"background"}]},engravedCertificate:{title:"Kinetic Lathe certificate",source:S,background:"#ded6c2",targets:[{selector:"#cert",role:"ui",width:"720px"}]}};function p(e,t,i){return Math.min(i,Math.max(t,e))}function h(e,t,i){if(!e.includes(t))throw new Error(`Neuform source adapter could not find: ${t}`);return e.replace(t,i)}function P(e){return[["return { t0: after + 5.6 + frnd() * 7.2, dur: total, segs: segs };","return { t0: after + 1.25 + frnd() * 1.75, dur: total, segs: segs };"],["if (!ev) ev = nextEvent(4.2);","if (!ev) ev = nextEvent(0.55);"],["cap = Math.min((W - W * 0.12) / blockW, (H - H * 0.18) / blockH);","cap = Math.min((W - W * 0.20) / blockW, (H - H * 0.28) / blockH);"],["var y0 = (H - blockH * cap) * 0.48;","var y0 = (H - blockH * cap) / 2;"]].reduce((t,[i,a])=>h(t,i,a),e)}function R(e){return[["x.fillText('L W', W/2, 190);","x.fillText('W C', W/2, 190);"],["x.fillText('· KYOTO ·', W/2, 246);","x.fillText('· WOVEN CLOTH ·', W/2, 246);"],["x.fillText('LUMINA', W/2, 400);","x.fillText('WOVEN', W/2, 400);"],["x.fillText('WEAVERS', W/2, 520);","x.fillText('CLOTH', W/2, 520);"],["x.fillText('K I N E T I C   T E X T I L E S   ·   2 0 2 4', W/2, 626);","x.fillText('T E X T I L E   S I M U L A T I O N', W/2, 626);"]].reduce((t,[i,a])=>h(t,i,a),e)}function u(e,t){return typeof e.background=="function"?e.background(t):e.background}function M(e,t){const i=JSON.stringify(e.targets).replace(/</g,"\\u003c"),a=u(e,t),s=t==="light"?"grayscale(1) invert(1) contrast(1.08)":"grayscale(1) contrast(1.08)",l=e.presentation==="animated-typography"?`
@keyframes sf-neon-type-breathe {
  0%, 100% { transform: translate3d(0, 3px, 0) scale(0.988); opacity: 0.88; }
  45% { transform: translate3d(0, -3px, 0) scale(1); opacity: 1; }
  68% { transform: translate3d(0, 0, 0) scale(0.996); opacity: 0.96; }
}
#board { overflow: visible !important; }
#neon {
  transform-origin: 50% 52%;
  animation: sf-neon-type-breathe 5.6s cubic-bezier(0.22, 1, 0.36, 1) infinite;
  filter: ${s};
  will-change: transform, opacity;
}
@media (prefers-reduced-motion: reduce) {
  #neon { animation: none !important; transform: none !important; opacity: 1 !important; }
}
`:"",c=`<style data-threeui-focus>
html, body { width: 100% !important; height: 100% !important; min-height: 0 !important; margin: 0 !important; padding: 0 !important; overflow: hidden !important; background: ${a} !important; }
body { position: relative !important; display: flex !important; align-items: center !important; justify-content: center !important; }
body > * { visibility: hidden !important; }
body[data-threeui-ready] > [data-threeui-role] { visibility: visible !important; }
[data-threeui-residual] { display: none !important; }
[data-threeui-role="background"] { position: fixed !important; inset: 0 !important; width: 100% !important; height: 100% !important; max-width: none !important; max-height: none !important; z-index: 0 !important; opacity: 1 !important; pointer-events: none !important; }
[data-threeui-role="ui"] { position: relative !important; z-index: 1 !important; width: min(calc(100% - 32px), var(--threeui-target-width, 1040px)) !important; max-width: none !important; max-height: calc(100% - 32px) !important; margin: auto !important; overflow: auto !important; opacity: 1 !important; transform: none !important; filter: none !important; flex: none !important; box-sizing: border-box !important; }
${l}
</style>`,o=`<script data-threeui-focus>
(function () {
  var isolated = false;
  function isolate() {
    if (isolated) return;
    var specs = ${i};
    var roots = [];
    specs.forEach(function (spec) {
      var element = document.querySelector(spec.selector);
      if (!element) return;
      element.setAttribute('data-threeui-role', spec.role);
      if (spec.width) element.style.setProperty('--threeui-target-width', spec.width);
      if (!roots.some(function (root) { return root.contains(element); })) roots.push(element);
    });
    if (!roots.length) return;
    isolated = true;
    roots.forEach(function (root) { document.body.appendChild(root); });
    Array.from(document.body.children).forEach(function (element) {
      if (roots.indexOf(element) !== -1) return;
      element.setAttribute('data-threeui-residual', '');
      element.setAttribute('aria-hidden', 'true');
      if ('inert' in element) element.inert = true;
    });
    document.body.setAttribute('data-threeui-ready', '');
    requestAnimationFrame(function () { window.dispatchEvent(new Event('resize')); });
  }
  function scheduleIsolation() { setTimeout(isolate, 100); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', scheduleIsolation, { once: true });
  else scheduleIsolation();
  window.addEventListener('load', isolate, { once: true });
})();
<\/script>`;return(e.presentation==="animated-typography"?P(e.source):e.presentation==="woven-cloth-label"?R(e.source):e.source).replace(/<\/head>/i,`${c}</head>`).replace(/<\/body>/i,`${o}</body>`)}function j({definition:e,mode:t="dark",hue:i=d.hue,saturation:a=d.saturation,brightness:s=d.brightness,className:l,style:c}){const o=t==="light"?"light":"dark",b=u(e,o),v=y.useMemo(()=>M(e,o),[e,o]),x=p(i,-180,180),f=p(a,0,2),g=p(s,.35,1.65),w=x===0&&f===1&&g===1?void 0:`hue-rotate(${x}deg) saturate(${f}) brightness(${g})`;return m.jsx("iframe",{className:l,"data-mode":o,title:e.title,srcDoc:v,sandbox:"allow-scripts",loading:"eager",style:{display:"block",width:"100%",height:"100%",border:0,background:b,filter:w,...c}})}function n(e){return function(t){return m.jsx(j,{...t,definition:e})}}const H=n(r.neon),W=n(r.luminaWeaversCloth),I=n(r.julianVanceNebula),z=n(r.fluid),D=n(r.nexusUnifiedFlow),B=n(r.emberStorm),F=n(r.engravedCertificate);export{B as EmberStorm,F as EngravedCertificate,z as FluidFieldBackground,D as HalftoneFlow,d as NEUFORM_CRAFT_DEFAULTS,I as NebulaBackground,H as NeonTypography,W as WovenCloth};
