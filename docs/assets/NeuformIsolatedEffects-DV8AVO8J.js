import{r as v,j as C}from"./index-B7lhl4Q5.js";const q=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Aetheris Labs</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital@1&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
</head>
<body class="bg-[#020208] text-white h-[100dvh] w-screen overflow-hidden font-['Inter'] relative flex flex-col justify-between selection:bg-[#00d2ff]/30 select-none antialiased" style="font-family: 'Inter', sans-serif;">
    
    <!-- Ambient Background WebGL -->
    <canvas id="bg-gl" class="absolute inset-0 w-full h-full z-0 opacity-0 transition-opacity duration-1000 ease-in" aria-hidden="true"></canvas>
    
    <!-- Vignette / Gradient Overlay -->
    <div class="absolute inset-0 z-0 pointer-events-none" style="background: radial-gradient(circle at 50% 50%, transparent 0%, #020208 100%); mix-blend-mode: multiply;"></div>

    <!-- Navigation -->
    <nav class="relative z-10 w-full px-8 py-6 flex justify-between items-center gs-fade">
        <div class="font-['Playfair_Display'] italic text-xl tracking-tight text-[#e2f1ff]">Aetheris.</div>
        
        <!-- Premium Gradient Border Pill -->
        <div style="padding: 1px; background: linear-gradient(180deg, rgba(226,241,255,0.15) 0%, rgba(226,241,255,0) 100%); border-radius: 9999px;">
            <div class="bg-[#080a14]/80 backdrop-blur-md rounded-full px-4 py-1.5 flex items-center gap-2" style="box-shadow: inset 0 1px 0 0 rgba(255,255,255,0.05);">
                <div class="w-1.5 h-1.5 rounded-full bg-[#00d2ff]" style="animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;"></div>
                <span class="text-xs font-normal text-[#e2f1ff]/60 tracking-widest uppercase">Drive Engaged</span>
            </div>
        </div>
    </nav>

    <!-- Main Content -->
    <main class="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4">
        
        <div class="gs-fade font-mono text-xs tracking-[0.3em] text-[#00d2ff] uppercase mb-8" style="font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;">
            SYS 09 / Cosmic Void
        </div>

        <!-- Masked Reveal Title -->
        <h1 class="text-5xl md:text-7xl font-medium tracking-tighter text-[#e2f1ff] mb-14 flex flex-col items-center gap-1 md:gap-3 drop-shadow-2xl">
            <div class="overflow-hidden pb-2"><span class="block translate-y-full gs-word">Access</span></div>
            <div class="overflow-hidden pb-2"><span class="block translate-y-full gs-word text-white/90">The Cosmos.</span></div>
        </h1>

        <div class="gs-scale-up">
            <!-- Quantum Aether Button -->
            <button id="btn" type="button" class="group relative flex items-center justify-center w-[250px] h-[70px] border-0 p-0 rounded-2xl overflow-hidden cursor-pointer bg-[#050b1a] outline-none transition-all duration-[220ms] ease-[cubic-bezier(0.34,1.4,0.5,1)] hover:-translate-y-[2px] active:translate-y-[1px] active:scale-[0.985] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00d2ff] focus-visible:outline-offset-[5px]" style="box-shadow: 0 24px 48px rgba(4, 98, 126, 0.2), 0 3px 10px rgba(2, 6, 20, 0.35);">
                <canvas id="gl" class="absolute inset-0 w-full h-full block group-[.nogl]:hidden" aria-hidden="true"></canvas>
                <div class="absolute inset-0 hidden group-[.nogl]:block" style="background: radial-gradient(130% 170% at 50% 118%, #61d3ff 0%, #33a7ff 24%, #084c8e 56%, #050a19 88%);"></div>
                <span class="relative z-10 pointer-events-none font-semibold text-sm tracking-[.26em] indent-[.26em] text-[#e2f1ff]" style="text-shadow: 0 1px 12px rgba(0, 16, 40, .85);">AETHER DRIVE</span>
            </button>
        </div>

        <p class="gs-fade text-sm text-[#e2f1ff]/40 tracking-wide mt-10 max-w-sm" style="line-height: 1.6;">
            Hover to accelerate the drive, press to initiate hyper jump.
        </p>
    </main>

    <!-- Footer -->
    <footer class="relative z-10 w-full px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 gs-fade text-xs text-[#e2f1ff]/30 tracking-wider">
        <span>© 2025 Aetheris Labs</span>
        <div class="flex items-center gap-6">
            <a href="#" class="hover:text-[#e2f1ff]/70 transition-colors flex items-center gap-1.5">
                <iconify-icon icon="solar:document-text-linear" stroke-width="1.5" class="text-sm"></iconify-icon>
                Terms
            </a>
            <a href="#" class="hover:text-[#e2f1ff]/70 transition-colors flex items-center gap-1.5">
                <iconify-icon icon="solar:lock-keyhole-linear" stroke-width="1.5" class="text-sm"></iconify-icon>
                Privacy
            </a>
        </div>
    </footer>

    <!-- GSAP Animations -->
    <script>
        document.addEventListener("DOMContentLoaded", () => {
            gsap.set(".gs-word", { y: "100%" });
            gsap.set(".gs-fade", { opacity: 0, y: 15 });
            gsap.set(".gs-scale-up", { opacity: 0, scale: 0.85, y: 20 });

            const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

            // Reveal words
            tl.to(".gs-word", {
                y: "0%",
                duration: 1.2,
                stagger: 0.15,
                delay: 0.2
            })
            // Fade in nav and tag
            .to(".gs-fade", {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.1
            }, "-=0.8")
            // Pop in the button
            .to(".gs-scale-up", {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 1.2,
                ease: "back.out(1.2)"
            }, "-=0.6");

            // Fade in ambient background
            document.getElementById('bg-gl').style.opacity = '0.45';
        });
    <\/script>

    <!-- WebGL Ambient Cosmic Background -->
    <script>
    (function () {
        var canvas = document.getElementById('bg-gl');
        var gl = canvas.getContext('webgl');
        if (!gl) return;

        var VS = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
        var FS = [
            'precision highp float;',
            'uniform vec2 u_res;',
            'uniform float u_time;',
            'float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);}',
            'float noise(vec2 p){',
            '  vec2 i=floor(p), f=fract(p);',
            '  vec2 u=f*f*(3.0-2.0*f);',
            '  return mix(mix(hash(i),hash(i+vec2(1.,0.)),u.x),',
            '             mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),u.x),u.y);',
            '}',
            'float fbm(vec2 p){',
            '  float v=0.0; float a=0.5;',
            '  for(int i=0;i<5;i++){ v+=a*noise(p); p=p*2.02+vec2(17.3,9.1); a*=0.5; }',
            '  return v;',
            '}',
            'void main(){',
            '  vec2 uv = gl_FragCoord.xy / u_res;',
            '  vec2 p = uv * vec2(u_res.x/u_res.y, 1.0) * 1.5;',
            '  float t = u_time * 0.12;',
            '  vec2 q = vec2(fbm(p + vec2(0.0, t*0.28)), fbm(p + vec2(4.1, t*0.23)));',
            '  vec2 r = vec2(fbm(p + 1.5*q + vec2(2.1, 7.2) + t*0.1),',
            '                fbm(p + 1.4*q + vec2(5.3, 3.1) + t*0.07));',
            '  float v = fbm(p + 1.9*r);',
            '  float m = v*1.3;',
            '  vec3 c1 = vec3(0.002, 0.004, 0.015);',
            '  vec3 c2 = vec3(0.006, 0.018, 0.05);',
            '  vec3 c3 = vec3(0.02, 0.07, 0.18);',
            '  vec3 col = mix(c1, c2, smoothstep(0.1, 0.6, m));',
            '  col = mix(col, c3, smoothstep(0.6, 1.0, m));',
            '  float vein = exp(-abs(q.x - q.y) * 5.0);',
            '  col += c3 * vein * 0.12;',
            '  gl_FragColor = vec4(col, 1.0);',
            '}'
        ].join('\\n');

        function compile(type, src) {
            var s = gl.createShader(type);
            gl.shaderSource(s, src);
            gl.compileShader(s);
            return s;
        }
        var prog = gl.createProgram();
        gl.attachShader(prog, compile(gl.VERTEX_SHADER, VS));
        gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FS));
        gl.linkProgram(prog);
        gl.useProgram(prog);

        var buf = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buf);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
        var locP = gl.getAttribLocation(prog, 'p');
        gl.enableVertexAttribArray(locP);
        gl.vertexAttribPointer(locP, 2, gl.FLOAT, false, 0, 0);

        var uRes = gl.getUniformLocation(prog, 'u_res');
        var uTime = gl.getUniformLocation(prog, 'u_time');

        function resize() {
            var w = canvas.clientWidth;
            var h = canvas.clientHeight;
            if (canvas.width !== w || canvas.height !== h) {
                canvas.width = w;
                canvas.height = h;
                gl.viewport(0, 0, w, h);
            }
        }
        window.addEventListener('resize', resize);
        resize();

        function frame(now) {
            resize();
            gl.uniform2f(uRes, canvas.width, canvas.height);
            gl.uniform1f(uTime, now / 1000);
            gl.drawArrays(gl.TRIANGLES, 0, 3);
            requestAnimationFrame(frame);
        }
        requestAnimationFrame(frame);
    })();
    <\/script>

    <!-- WebGL Aether Engine Button -->
    <script>
    (function () {
        var btn = document.getElementById('btn');
        var canvas = document.getElementById('gl');
        var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        var gl = canvas.getContext('webgl');
        if (!gl) { btn.classList.add('nogl'); return; }

        var hoverStyles = "0 30px 60px rgba(0, 150, 220, 0.35), 0 4px 12px rgba(2, 6, 20, 0.4)";
        var defaultStyles = "0 24px 48px rgba(4, 98, 126, 0.2), 0 3px 10px rgba(2, 6, 20, 0.35)";
        
        btn.addEventListener('mouseenter', () => { if(!reduced) btn.style.boxShadow = hoverStyles; });
        btn.addEventListener('mouseleave', () => { if(!reduced) btn.style.boxShadow = defaultStyles; });
        btn.addEventListener('focus', () => { if(!reduced) btn.style.boxShadow = hoverStyles; });
        btn.addEventListener('blur', () => { if(!reduced) btn.style.boxShadow = defaultStyles; });

        var VS = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
        var FS = [
            'precision highp float;',
            'uniform vec2 u_res;',
            'uniform float u_time;',
            'uniform float u_heat;',
            'uniform float u_flash;',
            'float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);}',
            'float noise(vec2 p){',
            '  vec2 i=floor(p), f=fract(p);',
            '  vec2 u=f*f*(3.0-2.0*f);',
            '  return mix(mix(hash(i),hash(i+vec2(1.,0.)),u.x),',
            '             mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),u.x),u.y);',
            '}',
            'float fbm(vec2 p){',
            '  float v=0.0; float a=0.5;',
            '  for(int i=0;i<5;i++){ v+=a*noise(p); p=p*2.02+vec2(17.3,9.1); a*=0.5; }',
            '  return v;',
            '}',
            'void main(){',
            '  vec2 uv = gl_FragCoord.xy / u_res;',
            '  vec2 p = uv * vec2(u_res.x/u_res.y, 1.0) * 2.1;',
            '  float t = u_time;',
            '  float heat = u_heat + u_flash * 1.3;',
            '  vec2 q = vec2(fbm(p + vec2(0.0, t*0.32)), fbm(p + vec2(5.2, t*0.27)));',
            '  vec2 r = vec2(fbm(p + 1.7*q + vec2(1.7, 9.2) + t*0.12),',
            '                fbm(p + 1.6*q + vec2(8.3, 2.8) + t*0.09));',
            '  float v = fbm(p + 2.1*r);',
            '  float m = v*1.4 + heat*0.22;',
            '  vec3 c1 = vec3(0.004, 0.008, 0.035);',
            '  vec3 c2 = vec3(0.04, 0.08, 0.35);',
            '  vec3 c3 = vec3(0.0, 0.6, 1.0);',
            '  vec3 c4 = vec3(0.7, 0.9, 1.0);',
            '  vec3 col = mix(c1, c2, smoothstep(0.2, 0.52, m));',
            '  col = mix(col, c3, smoothstep(0.52, 0.8, m));',
            '  col = mix(col, c4, smoothstep(0.82, 1.02, m));',
            '  float vein = exp(-abs(q.x - q.y) * 9.0);',
            '  col += c3 * vein * (0.12 + heat * 0.25);',
            '  vec2 e = uv * (1.0 - uv);',
            '  float vig = pow(e.x * e.y * 16.0, 0.28);',
            '  col *= mix(0.5, 1.0, vig);',
            '  col *= 0.78 + heat * 0.5;',
            '  col += vec3(0.82, 0.94, 1.0) * u_flash * 0.4 * (0.3 + v);',
            '  gl_FragColor = vec4(col, 1.0);',
            '}'
        ].join('\\n');

        function compile(type, src) {
            var s = gl.createShader(type);
            gl.shaderSource(s, src);
            gl.compileShader(s);
            return s;
        }
        var prog = gl.createProgram();
        gl.attachShader(prog, compile(gl.VERTEX_SHADER, VS));
        gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FS));
        gl.linkProgram(prog);
        gl.useProgram(prog);

        var buf = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buf);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
        var locP = gl.getAttribLocation(prog, 'p');
        gl.enableVertexAttribArray(locP);
        gl.vertexAttribPointer(locP, 2, gl.FLOAT, false, 0, 0);

        var uRes = gl.getUniformLocation(prog, 'u_res');
        var uTime = gl.getUniformLocation(prog, 'u_time');
        var uHeat = gl.getUniformLocation(prog, 'u_heat');
        var uFlash = gl.getUniformLocation(prog, 'u_flash');

        function resize() {
            var dpr = Math.min(window.devicePixelRatio || 1, 2);
            var w = Math.max(1, Math.round(canvas.clientWidth * dpr));
            var h = Math.max(1, Math.round(canvas.clientHeight * dpr));
            if (canvas.width !== w || canvas.height !== h) {
                canvas.width = w;
                canvas.height = h;
                gl.viewport(0, 0, w, h);
            }
        }
        window.addEventListener('resize', resize);
        resize();

        var heat = 0, heatTarget = 0, erupt = 0;
        var churn = 0;
        var last = performance.now();

        btn.addEventListener('mouseenter', function () { heatTarget = 1; });
        btn.addEventListener('mouseleave', function () { heatTarget = 0; });
        btn.addEventListener('focus', function () { heatTarget = 1; });
        btn.addEventListener('blur', function () { heatTarget = 0; });
        btn.addEventListener('mousedown', function () { erupt = 1; });
        btn.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') erupt = 1;
        });

        function frame(now) {
            var dt = Math.min(0.05, (now - last) / 1000);
            last = now;
            heat += (heatTarget - heat) * Math.min(1, dt * 6);
            erupt *= Math.exp(-3.2 * dt);
            churn += dt * (0.35 + heat * 1.1 + erupt * 2.2);
            resize();
            gl.uniform2f(uRes, canvas.width, canvas.height);
            gl.uniform1f(uTime, reduced ? 6.0 : churn);
            gl.uniform1f(uHeat, heat);
            gl.uniform1f(uFlash, erupt);
            gl.drawArrays(gl.TRIANGLES, 0, 3);
            requestAnimationFrame(frame);
        }
        requestAnimationFrame(frame);
    })();
    <\/script>
</body>
</html>`,O=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Supreme Radio — Graphic Identity</title>
<style>
  *{box-sizing:border-box;margin:0;padding:0}
  html,body{height:100%;background:#000;overflow:hidden}
  body{font-family:"Helvetica Neue",Helvetica,Arial,"Hiragino Sans","Hiragino Kaku Gothic ProN","Yu Gothic",sans-serif;-webkit-font-smoothing:antialiased}
  #stage{
    position:fixed;left:50%;top:50%;width:1080px;height:1350px;
    transform:translate(-50%,-50%);transform-origin:center;
    background:#000;overflow:hidden;color:#E8EEE9;
  }
  .scene{position:absolute;inset:0;opacity:0;pointer-events:none;will-change:opacity}
  .scene.on{pointer-events:auto}
  canvas#viz{position:absolute;inset:0}
  .overlay{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;z-index:2}
  .sr{
    font-weight:800;font-size:54px;letter-spacing:-.045em;line-height:1;
    display:flex;align-items:center;gap:14px;white-space:nowrap;
  }
  .sr .word{display:flex;align-items:baseline;gap:12px}
  .icons{display:flex;align-items:center;gap:10px;margin-left:4px}
  .icons svg{display:block}

  #reelWrap{position:absolute;left:50%;top:50%;width:860px;height:860px;margin:-430px 0 0 -430px}
  #reel{width:860px;height:860px;transform-origin:430px 430px;will-change:transform}

  .lock{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0}
  .lock .top-icons{display:flex;gap:18px;margin-bottom:36px}
  .cat{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;font-size:15px;letter-spacing:.18em;margin-bottom:18px;font-weight:500}
  .bpm{
    font-weight:900;font-size:210px;letter-spacing:-.06em;line-height:.82;
    transform:scaleX(.78);font-stretch:condensed;position:relative;
    color:#E3EDE5;
  }
  .bpm sup{font-size:28px;position:absolute;right:-28px;top:18px;transform:scaleX(1.28);font-weight:700}
  .meta{
    margin-top:28px;text-align:center;
    font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;
    font-size:15px;letter-spacing:.12em;line-height:1.7;font-weight:500;
  }
  .marks{display:flex;align-items:flex-end;justify-content:center;gap:54px;margin-top:64px}
  .jp{margin-top:48px;font-size:18px;letter-spacing:.12em;font-weight:500}

  .venn-wrap{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center}
  .venn{position:relative;width:560px;height:340px;margin:8px 0 28px}
  .ring{
    position:absolute;top:10px;width:320px;height:320px;border-radius:50%;
    border:7px solid #EA3927;box-sizing:border-box;
  }
  .ring.l{left:0}
  .ring.r{right:0}
  .letters{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;gap:0;pointer-events:none}
  .letters span{
    width:186px;text-align:center;font-weight:800;font-size:92px;letter-spacing:-.04em;color:#E8EEE9;
  }
  .foot{text-align:center}
  .foot .sr2{font-weight:800;font-size:52px;letter-spacing:-.045em;margin-bottom:18px}
  .foot .sub{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;font-size:13px;letter-spacing:.22em;color:#c9d4cc;line-height:1.7}
  .ww{margin-top:36px}

  .grain{
    position:absolute;inset:0;pointer-events:none;z-index:8;opacity:.045;mix-blend-mode:overlay;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
  }
</style>
</head>
<body>
<div id="stage">
  <svg width="0" height="0" style="position:absolute">
    <defs>
      <g id="i3">
        <path d="M3 3.2h18.5a1.6 1.6 0 0 1 0 3.2H6.4v4.2h13.2a1.6 1.6 0 0 1 0 3.2H6.4v4.2h15.1a1.6 1.6 0 0 1 0 3.2H3.2A1.6 1.6 0 0 1 1.6 19V4.8A1.6 1.6 0 0 1 3.2 3.2Z" fill="currentColor"/>
      </g>
      <g id="iP">
        <circle cx="12" cy="12" r="10.2" fill="none" stroke="currentColor" stroke-width="1.6"/>
        <text x="12" y="16.2" text-anchor="middle" font-size="12" font-weight="700" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" fill="currentColor">P</text>
      </g>
      <g id="iG">
        <circle cx="12" cy="12" r="10.2" fill="none" stroke="currentColor" stroke-width="1.5"/>
        <ellipse cx="12" cy="12" rx="4.2" ry="10.2" fill="none" stroke="currentColor" stroke-width="1.3"/>
        <path d="M2 12h20M4.2 7.2h15.6M4.2 16.8h15.6" fill="none" stroke="currentColor" stroke-width="1.2"/>
      </g>
      <g id="i1">
        <circle cx="12" cy="12" r="10.4" fill="currentColor"/>
        <text x="12" y="16.4" text-anchor="middle" font-size="12" font-weight="800" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" fill="#000">1</text>
      </g>
    </defs>
  </svg>

  <section class="scene" id="s1">
    <canvas id="viz" width="1080" height="1350"></canvas>
    <div class="overlay">
      <div class="sr" id="sr1">
        <span class="word">supreme radio</span>
        <span class="icons">
          <svg width="22" height="22" viewBox="0 0 24 24"><use href="#i3"/></svg>
          <svg width="22" height="22" viewBox="0 0 24 24"><use href="#iP"/></svg>
          <svg width="22" height="22" viewBox="0 0 24 24"><use href="#iG"/></svg>
          <svg width="22" height="22" viewBox="0 0 24 24"><use href="#i1"/></svg>
        </span>
      </div>
    </div>
  </section>

  <section class="scene" id="s2">
    <div id="reelWrap">
      <svg id="reel" viewBox="-430 -430 860 860">
        <defs>
          <mask id="rmask">
            <circle r="418" fill="#fff"/>
            <circle r="82" fill="#000"/>
            <g id="win">
              <path fill="#000" d="M-48 -148
                C -48 -168 -28 -176 0 -176
                C 28 -176 48 -168 48 -148
                L 70 -312
                C 70 -342 38 -358 0 -358
                C -38 -358 -70 -342 -70 -312 Z"/>
            </g>
            <use href="#win" transform="rotate(120)"/>
            <use href="#win" transform="rotate(240)"/>
            <circle cx="0" cy="-178" r="10" fill="#000"/>
            <circle cx="154" cy="89" r="10" fill="#000"/>
            <circle cx="-154" cy="89" r="10" fill="#000"/>
          </mask>
        </defs>
        <circle r="418" fill="#E3EDE5" mask="url(#rmask)"/>
        <g fill="#000">
          <rect x="-9" y="-98" width="18" height="16" rx="3"/>
          <rect x="-9" y="-98" width="18" height="16" rx="3" transform="rotate(120)"/>
          <rect x="-9" y="-98" width="18" height="16" rx="3" transform="rotate(240)"/>
        </g>
        <g fill="#000" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" text-anchor="middle">
          <g transform="translate(0,-250)">
            <g fill="none" stroke="#000" stroke-width="1.6">
              <circle r="22"/>
              <circle cx="16" r="22"/>
            </g>
            <text y="5" font-size="9" font-weight="800" fill="#000">BPM</text>
            <text y="38" font-size="8" font-weight="700" letter-spacing="1.6">WORLDWIDE</text>
            <text y="78" font-size="28" font-weight="800" letter-spacing="-1.2">supreme radio</text>
            <text y="102" font-size="9" font-weight="500">©2023 bpm supreme</text>
            <text y="124" font-size="13" font-weight="700" fill="#EA3927" font-family="Hiragino Sans, Yu Gothic, sans-serif">毎週の音楽</text>
          </g>
          <g transform="translate(-210,210)" text-anchor="start">
            <text font-size="11" font-weight="500">Catalogue No.</text>
            <text y="22" font-size="15" font-weight="800">℗BPM154—LP2023</text>
            <g transform="translate(0,42)" fill="#EA3927">
              <use href="#i3" transform="scale(.9)"/>
              <use href="#iP" transform="translate(28,0) scale(.9)"/>
              <use href="#iG" transform="translate(56,0) scale(.9)"/>
              <use href="#i1" transform="translate(84,0) scale(.9)"/>
            </g>
          </g>
          <g transform="translate(168,188)" text-anchor="start">
            <g fill="#000" transform="scale(1.35)"><use href="#i3"/></g>
            <text y="48" font-size="12" font-weight="500">Episode No.</text>
            <text y="108" font-size="72" font-weight="800" letter-spacing="-2">154</text>
          </g>
        </g>
      </svg>
    </div>
  </section>

  <section class="scene" id="s3">
    <div class="lock" id="lock">
      <div class="top-icons">
        <svg width="26" height="26" viewBox="0 0 24 24"><use href="#i3"/></svg>
        <svg width="26" height="26" viewBox="0 0 24 24"><use href="#iP"/></svg>
        <svg width="26" height="26" viewBox="0 0 24 24"><use href="#iG"/></svg>
        <svg width="26" height="26" viewBox="0 0 24 24"><use href="#i1"/></svg>
      </div>
      <div class="cat">CATALOGUE SR/1.0</div>
      <div class="bpm">BPM<sup>®</sup></div>
      <div class="meta">HERE FOR THE MUSIC.<br>LOS ANGELES, CALIFORNIA<br>WWW.BPMMUSIC.IO<br>WORLDWIDE © 2023<br>MADE IN USA</div>
      <div class="marks">
        <svg width="120" height="78" viewBox="0 0 120 78">
          <g fill="none" stroke="#E3EDE5" stroke-width="1.7">
            <circle cx="48" cy="28" r="26"/>
            <circle cx="72" cy="28" r="26"/>
            <ellipse cx="60" cy="28" rx="10" ry="26"/>
          </g>
          <text x="60" y="32" text-anchor="middle" fill="#E3EDE5" font-size="11" font-weight="800" font-family="Helvetica Neue, Helvetica, Arial, sans-serif">BPM</text>
          <text x="60" y="72" text-anchor="middle" fill="#E3EDE5" font-size="9" font-weight="700" letter-spacing="2.2" font-family="ui-monospace, Menlo, monospace">WORLDWIDE</text>
        </svg>
        <svg width="44" height="44" viewBox="0 0 24 24"><use href="#i3"/></svg>
        <svg width="148" height="64" viewBox="0 0 148 64">
          <rect x="1" y="1" width="146" height="50" rx="6" fill="none" stroke="#E3EDE5" stroke-width="1.6"/>
          <g transform="translate(10,8)" fill="#E3EDE5"><use href="#i3"/></g>
          <g transform="translate(38,8)" fill="#E3EDE5"><use href="#iP"/></g>
          <g transform="translate(108,6)" fill="#E3EDE5" stroke="#E3EDE5"><use href="#iG"/></g>
          <rect x="10" y="34" width="72" height="14" rx="2" fill="#E3EDE5"/>
          <text x="46" y="45" text-anchor="middle" font-size="9" font-weight="700" fill="#000" font-family="Helvetica Neue, Helvetica, Arial, sans-serif">bpm radio</text>
          <text x="142" y="12" font-size="10" fill="#E3EDE5">®</text>
        </svg>
      </div>
      <div class="jp">毎週の音楽</div>
    </div>
  </section>

  <section class="scene" id="s4">
    <div class="venn-wrap">
      <div class="top-icons" style="display:flex;gap:18px;margin-bottom:28px">
        <svg width="24" height="24" viewBox="0 0 24 24"><use href="#i3"/></svg>
        <svg width="24" height="24" viewBox="0 0 24 24"><use href="#iP"/></svg>
        <svg width="24" height="24" viewBox="0 0 24 24"><use href="#iG"/></svg>
        <svg width="24" height="24" viewBox="0 0 24 24"><use href="#i1"/></svg>
      </div>
      <div class="venn">
        <div class="ring l" id="ringL"></div>
        <div class="ring r" id="ringR"></div>
        <div class="letters" id="bpmLetters"><span>B</span><span>P</span><span>M</span></div>
      </div>
      <div class="foot">
        <div class="sr2" id="sr2">supreme radio</div>
        <div class="sub">ANALOGOUS SOUNDS<br>SR/1.0</div>
        <svg class="ww" width="110" height="70" viewBox="0 0 120 78">
          <g fill="none" stroke="#E3EDE5" stroke-width="1.7">
            <circle cx="48" cy="28" r="26"/>
            <circle cx="72" cy="28" r="26"/>
            <ellipse cx="60" cy="28" rx="10" ry="26"/>
          </g>
          <text x="60" y="32" text-anchor="middle" fill="#E3EDE5" font-size="11" font-weight="800" font-family="Helvetica Neue, Helvetica, Arial, sans-serif">BPM</text>
          <text x="60" y="72" text-anchor="middle" fill="#E3EDE5" font-size="9" font-weight="700" letter-spacing="2.2" font-family="ui-monospace, Menlo, monospace">WORLDWIDE</text>
        </svg>
      </div>
    </div>
  </section>
  <div class="grain"></div>
</div>
<script>
(function(){
  var DUR = 20;
  var HOLD = 4.7;
  var FADE = 0.3;
  var stage = document.getElementById("stage");
  var scenes = [document.getElementById("s1"), document.getElementById("s2"), document.getElementById("s3"), document.getElementById("s4")];
  var canvas = document.getElementById("viz");
  var ctx = canvas.getContext("2d");
  var reel = document.getElementById("reel");
  var lock = document.getElementById("lock");
  var ringL = document.getElementById("ringL");
  var ringR = document.getElementById("ringR");
  var letters = document.getElementById("bpmLetters");
  var sr1 = document.getElementById("sr1");
  var sr2 = document.getElementById("sr2");

  function sat(x){ return x<0?0:x>1?1:x; }
  function lerp(a,b,t){ return a+(b-a)*t; }
  function easeOut(t){ t=sat(t); return 1-Math.pow(1-t,3); }
  function easeInOut(t){ t=sat(t); return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2; }
  function backOut(t){ t=sat(t); var c1=1.70158,c3=c1+1; return 1+c3*Math.pow(t-1,3)+c1*Math.pow(t-1,2); }

  function fit(){
    var s = Math.min(innerWidth/1080, innerHeight/1350);
    stage.style.transform = "translate(-50%,-50%) scale("+s+")";
  }

  function drawViz(t){
    var w=1080,h=1350;
    ctx.clearRect(0,0,w,h);
    ctx.fillStyle="#000";
    ctx.fillRect(0,0,w,h);
    var cx=540, cy=675, r=156, gap=148;
    drawBars(cx-gap, cy, r, t, false);
    drawBars(cx+gap, cy, r, t+1.7, true);
  }

  function drawBars(cx, cy, r, t, inverse){
    var n = inverse ? 16 : 22;
    var pitch = (r*2) / n;
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI*2);
    ctx.clip();
    if (inverse){
      ctx.fillStyle="#EA3927";
      ctx.fill();
      ctx.globalCompositeOperation="destination-out";
      ctx.fillStyle="#000";
    } else {
      ctx.fillStyle="#EA3927";
    }
    for (var i=0;i<n;i++){
      var x = -r + (i+0.5)*pitch;
      var maxH = Math.sqrt(Math.max(0, r*r - x*x)) * 2;
      if (maxH < 6) continue;
      var pulse = 0.78 + 0.22*Math.sin(t*6.4 + i*0.62)*Math.sin(t*2.4 + i*0.17);
      var hh = inverse ? maxH : maxH;
      var bw = (inverse ? pitch*0.38 : pitch*0.62) * (inverse ? 1 : pulse);
      var px = cx + x - bw/2;
      var py = cy - hh/2;
      roundRect(px, py, Math.max(2,bw), hh, Math.min(bw, hh)*0.45);
      ctx.fill();
    }
    ctx.restore();
    ctx.globalCompositeOperation="source-over";
  }

  function roundRect(x,y,w,h,r){
    r=Math.min(r,w/2,h/2);
    ctx.beginPath();
    ctx.moveTo(x+r,y);
    ctx.arcTo(x+w,y,x+w,y+h,r);
    ctx.arcTo(x+w,y+h,x,y+h,r);
    ctx.arcTo(x,y+h,x,y,r);
    ctx.arcTo(x,y,x+w,y,r);
    ctx.closePath();
  }

  function sceneAt(t){
    var slot = HOLD + FADE;
    var i = Math.floor(t / slot) % 4;
    var local = t - i*slot;
    var fadeOut = sat((local - HOLD)/FADE);
    var fadeIn = local < FADE ? sat(local/FADE) : 1;
    return {i:i, local:local, fadeIn:fadeIn, fadeOut:fadeOut, op: fadeIn*(1-fadeOut)};
  }

  function apply(t){
    t = ((t % DUR)+DUR)%DUR;
    var s = sceneAt(t);
    for (var k=0;k<4;k++){
      scenes[k].style.opacity = k===s.i ? String(s.op) : "0";
      scenes[k].classList.toggle("on", k===s.i && s.op>0.02);
    }
    var lt = s.local;

    if (s.i===0){
      drawViz(t);
      var p = easeOut(sat(lt/0.7));
      sr1.style.opacity = String(p);
      sr1.style.letterSpacing = lerp(0.18, -0.045, p) + "em";
    }
    if (s.i===1){
      reel.style.transform = "rotate(" + (lt*36) + "deg)";
    }
    if (s.i===2){
      var kids = lock.children;
      for (var k=0;k<kids.length;k++){
        var u = easeOut(sat((lt - k*0.09)/0.45));
        kids[k].style.opacity = String(u);
        kids[k].style.transform = "translateY(" + ((1-u)*14) + "px)";
      }
    }
    if (s.i===3){
      var u = easeInOut(sat(lt/0.9));
      ringL.style.transform = "translateX(" + lerp(-70,0,u) + "px)";
      ringR.style.transform = "translateX(" + lerp(70,0,u) + "px)";
      var lp = backOut(sat((lt-0.45)/0.5));
      letters.style.opacity = String(lp);
      letters.style.transform = "scale(" + lerp(0.72,1,lp) + ")";
      var tp = easeOut(sat((lt-0.7)/0.5));
      sr2.style.opacity = String(tp);
      sr2.style.letterSpacing = lerp(0.22, -0.045, tp) + "em";
    }
  }

  var tNow=0, playing=true, t0=performance.now();
  var params=new URLSearchParams(location.search);
  if (params.has("t")){ tNow=parseFloat(params.get("t"))||0; playing=false; }
  if (matchMedia("(prefers-reduced-motion: reduce)").matches){ playing=false; tNow=16.2; }

  function frame(now){
    if (playing && !document.hidden){
      tNow = ((now-t0)/1000) % DUR;
      apply(tNow);
    }
    requestAnimationFrame(frame);
  }
  window.addEventListener("resize", fit);
  document.addEventListener("visibilitychange", function(){
    if (!document.hidden && playing) t0=performance.now()-tNow*1000;
  });
  fit(); apply(tNow); requestAnimationFrame(frame);

  window.__DUR = DUR;
  window.__seek = function(t){ tNow=((t%DUR)+DUR)%DUR; playing=false; apply(tNow); };
  window.__play = function(){ t0=performance.now()-tNow*1000; playing=true; };
  window.__pause = function(){ playing=false; };
  window.__time = function(){ return tNow; };
})();
<\/script>
</body>
</html>
`,W=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Component Preview</title>
  <script src="https://cdn.tailwindcss.com"><\/script>
  <style>
    html, body {
      height: 100%;
      margin: 0;
      padding: 0;
    }
    body {
      height: 100%;
      overflow: auto;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #000000;
      color: #ffffff;
    }
    .component-wrapper {
      width: 100%;
      height: 100%;
      padding: 0;
      box-sizing: border-box;
      overflow: auto;
    }
  </style>
</head>
<body>
  <div class="component-wrapper">
    <html><head></head><body><div style="
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000; /* optional, just for visibility */
"><a href="#" class="btn-wrapper" style="--dot-size: 8px; --line-weight: 1px; --line-distance: 0.8rem 1rem; --animation-speed: 0.35s; --dot-color: #fffa; --line-color: #fffa; --grid-color: #fff3; position: relative; display: inline-flex; justify-content: center; align-items: center; width: auto; height: auto; padding: var(--line-distance); background-color: rgba(0, 0, 0, 0); user-select: none">
  <style>
    .btn-wrapper::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      pointer-events: none;
      background-color: #0000;
      background-image: repeating-linear-gradient(45deg, var(--grid-color) 0 1px, transparent 2px 5px);
      opacity: 0;
      z-index: -1;
    }

    .btn-wrapper:has(.btn:hover)::after {
      animation: opacity-anim calc(var(--animation-speed) * 4) ease-in-out forwards;
    }

    @keyframes opacity-anim {
      80% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }

    .btn-wrapper .btn {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.8rem 1.25rem;
      background-color: #fff0;
      border: 1px solid var(--grid-color);
      color: #fffd;
      font-family: "Inter", sans-serif;
      letter-spacing: -0.01em;
      font-size: 1rem;
      font-weight: 600;
      text-transform: capitalize;
      border-radius: 6px;
      cursor: pointer;
      transition: transform .2s ease-in-out, letter-spacing .2s ease-in-out;
    }

    .btn-wrapper .btn:hover {
      background-color: #25358b;
      color: #fff;
      transform: scale(1.05);
      letter-spacing: .06em;
    }

    .btn-wrapper .btn:active {
      background-color: #25358b;
      transform: scale(.98);
      letter-spacing: .02em;
    }

    .btn-wrapper .btn-svg {
      margin-left: .5rem;
      height: 24px;
      stroke-width: 1;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke: #fff4;
      fill: #fff2;
      transition: all .2s ease-in-out;
    }

    .btn-wrapper .btn:hover .btn-svg {
      stroke: #fffa;
      fill: #fff3;
    }

    .btn-wrapper .dot {
      position: absolute;
      width: var(--dot-size);
      aspect-ratio: 1;
      border-radius: 2px;
      background-color: var(--dot-color);
      transition: all .3s ease-in-out;
      opacity: 0;
    }

    .btn-wrapper:has(.btn:hover) .dot.top.left {
      top: 50%;
      left: 20%;
      animation: move-top-left var(--animation-speed) ease-in-out forwards;
    }

    @keyframes move-top-left {
      90% {
        opacity: .6;
      }

      100% {
        top: calc(var(--dot-size) * -0.5);
        left: calc(var(--dot-size) * -0.5);
        opacity: 1;
      }
    }

    .btn-wrapper:has(.btn:hover) .dot.top.right {
      top: 50%;
      right: 20%;
      animation: move-top-right var(--animation-speed) ease-in-out forwards;
      animation-delay: calc(var(--animation-speed)*.6);
    }

    @keyframes move-top-right {
      80% {
        opacity: .6;
      }

      100% {
        top: calc(var(--dot-size) * -0.5);
        right: calc(var(--dot-size) * -0.5);
        opacity: 1;
      }
    }

    .btn-wrapper:has(.btn:hover) .dot.bottom.right {
      bottom: 50%;
      right: 20%;
      animation: move-bottom-right var(--animation-speed) ease-in-out forwards;
      animation-delay: calc(var(--animation-speed)*1.2);
    }

    @keyframes move-bottom-right {
      80% {
        opacity: .6;
      }

      100% {
        bottom: calc(var(--dot-size) * -0.5);
        right: calc(var(--dot-size) * -0.5);
        opacity: 1;
      }
    }

    .btn-wrapper:has(.btn:hover) .dot.bottom.left {
      bottom: 50%;
      left: 20%;
      animation: move-bottom-left var(--animation-speed) ease-in-out forwards;
      animation-delay: calc(var(--animation-speed)*1.8);
    }

    @keyframes move-bottom-left {
      80% {
        opacity: .6;
      }

      100% {
        bottom: calc(var(--dot-size) * -0.5);
        left: calc(var(--dot-size) * -0.5);
        opacity: 1;
      }
    }

    .btn-wrapper .line {
      position: absolute;
      transition: all .3s ease-in-out;
    }

    .btn-wrapper .line.horizontal {
      height: var(--line-weight);
      width: 100%;
      background-image: repeating-linear-gradient(90deg, #0000 0 calc(var(--line-weight)*2), var(--line-color) calc(var(--line-weight)*2) calc(var(--line-weight)*4));
    }

    .btn-wrapper .line.top {
      top: calc(var(--line-weight)*-0.5);
      transform-origin: top left;
      transform: rotate(5deg) scaleX(0);
    }

    .btn-wrapper:has(.btn:hover) .line.top {
      animation: draw-top var(--animation-speed) ease-in-out forwards;
      animation-delay: calc(var(--animation-speed)*.8);
    }

    @keyframes draw-top {
      100% {
        transform: rotate(0deg) scaleX(1);
      }
    }

    .btn-wrapper .line.bottom {
      bottom: calc(var(--line-weight)*-0.5);
      transform-origin: bottom right;
      transform: rotate(5deg) scaleX(0);
    }

    .btn-wrapper:has(.btn:hover) .line.bottom {
      animation: draw-bottom var(--animation-speed) ease-in-out forwards;
      animation-delay: calc(var(--animation-speed)*2);
    }

    @keyframes draw-bottom {
      100% {
        transform: rotate(0deg) scaleX(1);
      }
    }

    .btn-wrapper .line.vertical {
      width: var(--line-weight);
      height: 100%;
      background-image: repeating-linear-gradient(0deg, #0000 0 calc(var(--line-weight)*2), var(--line-color) calc(var(--line-weight)*2) calc(var(--line-weight)*4));
    }

    .btn-wrapper .line.left {
      left: calc(var(--line-weight)*-0.5);
      transform-origin: bottom left;
      transform: rotate(0deg) scaleY(0);
    }

    .btn-wrapper:has(.btn:hover) .line.left {
      animation: draw-left var(--animation-speed) ease-in-out forwards;
      animation-delay: calc(var(--animation-speed)*2.4);
    }

    @keyframes draw-left {
      100% {
        transform: rotate(0deg) scaleY(1);
      }
    }

    .btn-wrapper .line.right {
      right: calc(var(--line-weight)*-0.5);
      transform-origin: top right;
      transform: rotate(5deg) scaleY(0);
    }

    .btn-wrapper:has(.btn:hover) .line.right {
      animation: draw-right var(--animation-speed) ease-in-out forwards;
      animation-delay: calc(var(--animation-speed)*1.4);
    }

    @keyframes draw-right {
      100% {
        transform: rotate(0deg) scaleY(1);
      }
    }
  </style>

  <div class="line horizontal top"></div>
  <div class="line vertical right"></div>
  <div class="line horizontal bottom"></div>
  <div class="line vertical left"></div>

  <div class="dot top left"></div>
  <div class="dot top right"></div>
  <div class="dot bottom right"></div>
  <div class="dot bottom left"></div>

  <button class="btn bg-[#ffffff]">
            <span class="btn-text">Start Creating</span>
            <svg class="btn-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.6744 11.4075L15.7691 17.1233C15.7072 17.309 15.5586 17.4529 15.3709 17.5087L3.69348 20.9803C3.22819 21.1186 2.79978 20.676 2.95328 20.2155L6.74467 8.84131C6.79981 8.67588 6.92419 8.54263 7.08543 8.47624L12.472 6.25822C12.696 6.166 12.9535 6.21749 13.1248 6.38876L17.5294 10.7935C17.6901 10.9542 17.7463 11.1919 17.6744 11.4075Z" class=""></path>
              <path d="M3.2959 20.6016L9.65986 14.2376" class=""></path>
              <path d="M17.7917 11.0557L20.6202 8.22724C21.4012 7.44619 21.4012 6.17986 20.6202 5.39881L18.4989 3.27749C17.7178 2.49645 16.4515 2.49645 15.6704 3.27749L12.842 6.10592" class=""></path>
              <path d="M11.7814 12.1163C11.1956 11.5305 10.2458 11.5305 9.66004 12.1163C9.07426 12.7021 9.07426 13.6519 9.66004 14.2376C10.2458 14.8234 11.1956 14.8234 11.7814 14.2376C12.3671 13.6519 12.3671 12.7021 11.7814 12.1163Z" class=""></path>
            </svg>
          </button>
</a></div></body></html>
  </div>
  
    <script>
      (function() {
        function checkAndCenter() {
          // Use double requestAnimationFrame to ensure DOM is fully painted and layout is stable
          requestAnimationFrame(function() {
            requestAnimationFrame(function() {
              const wrapper = document.querySelector('.component-wrapper');
              if (!wrapper) return;
              
              // Get all child elements
              const children = Array.from(wrapper.children);
              if (children.length === 0) return;
              
              // Temporarily override wrapper styles to shrink-wrap for measurement
              // Set inline styles to shrink-wrap (inline styles override CSS)
              wrapper.style.display = 'inline-block';
              wrapper.style.width = 'auto';
              wrapper.style.height = 'auto';
              wrapper.style.overflow = 'visible';
              wrapper.style.boxSizing = 'content-box';
              
              // Force multiple reflows to ensure styles are fully applied
              void wrapper.offsetHeight;
              void wrapper.offsetWidth;
              void wrapper.offsetHeight;
              
              // Measure the wrapper's content size
              const contentWidth = wrapper.offsetWidth;
              const contentHeight = wrapper.offsetHeight;
              
              // Restore original styles by removing inline styles we added
              wrapper.style.removeProperty('display');
              wrapper.style.removeProperty('width');
              wrapper.style.removeProperty('height');
              wrapper.style.removeProperty('overflow');
              wrapper.style.removeProperty('box-sizing');
              
              // If content is less than 500x500, center it
              if (contentWidth > 0 && contentHeight > 0 && contentWidth < 500 && contentHeight < 500) {
                wrapper.style.display = 'flex';
                wrapper.style.alignItems = 'center';
                wrapper.style.justifyContent = 'center';
              }
            });
          });
        }
        
        // Check immediately and after delays to ensure content is rendered and styled
        function runChecks() {
          checkAndCenter();
          setTimeout(checkAndCenter, 50);
          setTimeout(checkAndCenter, 150);
          setTimeout(checkAndCenter, 300);
          setTimeout(checkAndCenter, 500);
          setTimeout(checkAndCenter, 1000);
        }
        
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', runChecks);
        } else {
          runChecks();
        }
        
        // Also check when images or other resources load
        window.addEventListener('load', () => {
          setTimeout(checkAndCenter, 100);
          setTimeout(checkAndCenter, 300);
        });
        
        // Use ResizeObserver to detect size changes
        if (window.ResizeObserver) {
          setTimeout(() => {
            const wrapper = document.querySelector('.component-wrapper');
            if (wrapper) {
              const observer = new ResizeObserver(() => {
                setTimeout(checkAndCenter, 50);
              });
              observer.observe(wrapper);
            }
          }, 500);
        }
      })();
    <\/script>
  
</body>
</html>
`,G=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>Creator Studio — Keynote Motion Study</title>
<meta name="description" content="Self-contained 30-second keynote-style motion study: twenty-one beats of kinetic type, device mockups and app props on black.">
<style>
  :root{
    --ink:#f5f5f7;
    --font:-apple-system,BlinkMacSystemFont,"SF Pro Display","SF Pro Text","Helvetica Neue",Helvetica,Arial,sans-serif;
  }
  *{box-sizing:border-box;margin:0;padding:0}
  html,body{height:100%;overflow:hidden;background:#000}
  body{display:grid;place-items:center;font-family:var(--font);color:var(--ink)}
  .sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
  #stage{position:relative;width:min(100vw,177.78vh);aspect-ratio:16/9;overflow:hidden;background:#000}
  #comp{position:absolute;left:50%;top:50%;width:1280px;height:720px;margin:-360px 0 0 -640px;transform-origin:50% 50%}
  .scene{position:absolute;inset:0;display:none}
  .scene.on{display:block}

  /* ---------- type ---------- */
  .line{position:absolute;inset:0;pointer-events:none}
  .tx{position:absolute;left:0;right:0;top:50%;text-align:center;white-space:nowrap;
      font-weight:600;letter-spacing:-.012em;line-height:1;transform:translateY(-50%);
      will-change:transform,opacity,filter}
  .tx span{display:inline-block;will-change:transform,opacity,filter}
  #ruler{position:absolute;left:-9999px;top:0;visibility:hidden;white-space:pre;
         font-weight:600;letter-spacing:-.012em;line-height:1;font-size:100px}

  .mark{display:inline-block;vertical-align:-.07em;margin-right:.14em}
  .mark svg{display:block;width:.8em;height:.8em}

  /* ---------- window wall ---------- */
  .win{position:absolute;border-radius:10px;overflow:hidden;background:#0b0b0f;
       box-shadow:0 22px 54px rgba(0,0,0,.72);will-change:transform,opacity}
  .win:after{content:"";position:absolute;inset:0;background:rgba(0,0,0,.34);pointer-events:none}
  .win .pane{position:absolute;left:7%;right:7%;top:14%;bottom:12%;border-radius:4px;overflow:hidden}
  .win .bar{height:15px;background:#26262b;display:flex;align-items:center;gap:4px;padding:0 6px}
  .win .bar i{width:5px;height:5px;border-radius:50%;background:#4a4a52;display:block}
  .win .body{position:absolute;left:0;right:0;top:15px;bottom:0}
  .win .side{position:absolute;left:0;top:0;bottom:0;width:21%;background:#1b1b20}
  .win .side u{display:block;height:6px;margin:6px 5px;border-radius:2px;background:#31313a}
  .win .strip{position:absolute;left:0;right:0;bottom:0;background:#131318}
  .win .strip u{position:absolute;bottom:5px;border-radius:2px}
  .win .bars{position:absolute;left:26%;right:7%;bottom:13%;top:18%;display:flex;align-items:flex-end;gap:6%}
  .win .bars u{flex:1;border-radius:1px}
  .win .txt{position:absolute;left:8%;right:8%;top:12%}
  .win .txt u{display:block;height:5px;border-radius:2px;background:#3c3c46;margin-bottom:7px}
  .win .tiles{position:absolute;inset:6%;display:grid;grid-template-columns:repeat(4,1fr);gap:4px}
  .win .tiles u{border-radius:2px}

  /* ---------- dock ---------- */
  #dockBar{position:absolute;left:125px;top:306px;width:1025px;height:106px;border-radius:26px;
           background:rgba(36,36,42,.74);border:1px solid rgba(255,255,255,.07);
           transform-origin:50% 50%;will-change:transform,opacity}
  .ico{position:absolute;width:65px;height:65px;border-radius:16px;
       background:linear-gradient(180deg,#3a3a43,#1d1d24);border:1px solid rgba(255,255,255,.13);
       box-shadow:inset 0 1px 0 rgba(255,255,255,.14);
       display:grid;place-items:center;will-change:transform,opacity}
  .ico svg{width:58px;height:58px;display:block;filter:saturate(1.15)}

  /* ---------- audio tracks ---------- */
  .track{position:absolute;left:340px;width:600px;border-radius:11px;overflow:hidden;
         transform-origin:50% 100%;will-change:transform,opacity}
  .track b{position:absolute;left:9px;top:5px;font-size:11px;font-weight:500;letter-spacing:.02em;color:rgba(255,255,255,.95)}
  .track .art{position:absolute;left:0;right:0;top:19px;bottom:0}
  .track .art u{position:absolute;background:rgba(255,255,255,.9);border-radius:1px}

  /* ---------- devices ---------- */
  .mac{position:absolute;left:50%;top:123px;width:648px;margin-left:-324px;will-change:transform,opacity}
  .mac .lid{position:relative;border:10px solid #1b1b1f;border-radius:20px;background:#000;
            box-shadow:0 0 0 1px #3d3d44,0 34px 70px rgba(0,0,0,.75)}
  .mac .scr{position:relative;width:100%;padding-top:64%;overflow:hidden;border-radius:9px;background:#000}
  .mac .notch{position:absolute;left:50%;top:-8px;width:78px;height:8px;margin-left:-39px;background:#1b1b1f;border-radius:0 0 6px 6px}
  .mac .base{position:relative;left:50%;width:746px;height:15px;margin-left:-373px;border-radius:0 0 14px 14px;
             background:linear-gradient(180deg,#2c2c33,#0d0d10);box-shadow:0 8px 22px rgba(0,0,0,.75)}
  .mac .base:after{content:"";position:absolute;left:50%;bottom:0;width:96px;height:5px;margin-left:-48px;
                   border-radius:0 0 5px 5px;background:#3a3a42}
  .pad{position:absolute;left:50%;top:157px;width:557px;margin-left:-278.5px;padding:12px;border-radius:26px;
       background:linear-gradient(160deg,#63676f,#2b2d33);box-shadow:0 30px 70px rgba(0,0,0,.75);
       transform-origin:50% 46%;will-change:transform,opacity}
  .pad .scr{position:relative;width:100%;padding-top:73.5%;overflow:hidden;border-radius:15px;background:#000}
  .scrIn{position:absolute;inset:0}

  .grad{position:absolute;inset:0}
  .grad b{position:absolute;border-radius:50%;display:block}
  .canvasType{position:absolute;inset:0;font-weight:600;letter-spacing:-.022em;line-height:.94}
  .canvasType div{position:absolute;white-space:nowrap;will-change:transform,opacity}

  .tbox{position:absolute;border:1px solid rgba(255,255,255,.55);will-change:transform,opacity}
  .tbox i{position:absolute;width:6px;height:6px;background:#fff;border:1px solid #75757c}
  .tbox i:nth-child(1){left:-3px;top:-3px}.tbox i:nth-child(2){right:-3px;top:-3px}
  .tbox i:nth-child(3){left:-3px;bottom:-3px}.tbox i:nth-child(4){right:-3px;bottom:-3px}
  .tbox span{position:absolute;left:10px;top:50%;transform:translateY(-52%);font-weight:600;white-space:nowrap;letter-spacing:-.02em}

  .palette{position:absolute;right:9px;top:9px;bottom:9px;width:28px;border-radius:14px;
           background:rgba(42,42,48,.9);display:flex;flex-direction:column;align-items:center;gap:9px;padding:9px 0}
  .palette u{display:block;width:11px;height:11px;border-radius:3px;background:#71717b}
  .guide{position:absolute;left:0;right:0;height:1px;background:#3ad462;opacity:.75}
  .hand{position:absolute;will-change:transform,opacity}

  /* ---------- edit clip ---------- */
  #clip{position:absolute;border-radius:5px;overflow:hidden;background:#0e1430;
        border:2px solid #6a3af0;box-shadow:0 0 34px rgba(120,60,255,.75),inset 0 0 0 1px rgba(180,150,255,.4);
        will-change:transform,opacity}
  #clip .thumbs{position:absolute;left:0;right:0;top:0;height:74%;display:flex}
  #clip .thumbs u{flex:1;border-right:1px solid rgba(0,0,0,.4);position:relative;overflow:hidden;
                  background:linear-gradient(180deg,#8e9aa8 0%,#c3c9cf 42%,#6d757f 43%,#3c4249 100%)}
  #clip .thumbs u:after{content:"";position:absolute;left:34%;top:26%;width:32%;height:62%;border-radius:44% 44% 12% 12%;background:#14161c}
  #clip .wave{position:absolute;left:0;right:0;bottom:0;height:26%;background:#232a55;display:flex;align-items:flex-end;gap:1px;padding:0 2px}
  #clip .wave u{flex:1;background:rgba(190,200,255,.55);border-radius:1px 1px 0 0}

  /* ---------- prompt ---------- */
  #daisyC{position:absolute;left:0;top:0}
  #liquid{filter:url(#goo);position:absolute;inset:0}
  #liquid .drop{position:absolute;border-radius:50%;background:#8ecfee}
  .gloss{position:absolute;left:0;right:0;top:50%;text-align:center;white-space:nowrap;
         font-weight:700;letter-spacing:-.02em;line-height:1;transform:translateY(-50%);
         color:transparent;background:linear-gradient(180deg,#ffffff 4%,#c8ebfb 32%,#5aa6cf 76%);
         -webkit-background-clip:text;background-clip:text;mix-blend-mode:screen}

  /* ---------- props ---------- */
  .keys{position:absolute;left:351px;top:421px;width:580px;height:123px;display:flex;gap:6px;will-change:opacity}
  .keys u{flex:1;border-radius:9px;background:linear-gradient(180deg,#3c3c43,#26262c);
          box-shadow:inset 0 1px 0 rgba(255,255,255,.1)}
  .bin{position:absolute;left:531px;top:444px;width:219px;height:219px;will-change:transform,opacity}
  .bin .cup{position:absolute;left:0;right:0;top:12px;bottom:0;
    clip-path:polygon(5% 0,95% 0,83% 100%,17% 100%);
    background:linear-gradient(180deg,rgba(206,210,216,.9),rgba(228,232,238,.94) 34%,rgba(244,246,249,.98));
    border-radius:10px 10px 30px 30px}
  .bin .rim{position:absolute;left:0;right:0;top:0;height:36px;border-radius:16px/18px;
    background:linear-gradient(180deg,rgba(250,251,253,.98),rgba(198,203,212,.8));
    box-shadow:inset 0 -7px 12px rgba(255,255,255,.5)}
  .bin .hole{position:absolute;left:16px;right:16px;top:6px;height:22px;border-radius:14px/11px;
    background:linear-gradient(180deg,rgba(90,96,106,.9),rgba(150,156,166,.7))}
  .wad{position:absolute;width:46px;height:46px;will-change:transform,opacity}
  .frag{position:absolute;left:0;right:0;top:50%;text-align:center;white-space:nowrap;font-weight:600;
         letter-spacing:-.012em;line-height:1;color:#9b22f0;transform:translateY(-50%);
         text-shadow:0 0 34px rgba(150,40,255,.95),0 0 70px rgba(150,40,255,.5);will-change:transform,opacity}
  .cursor{position:absolute;width:34px;height:34px;border-radius:50%;border:1px solid rgba(255,255,255,.9);
          background:radial-gradient(circle at 34% 28%,rgba(255,255,255,.55),rgba(0,0,0,.5));will-change:transform,opacity}
  .glowdot{position:absolute;width:16px;height:16px;border-radius:50%;
           background:radial-gradient(circle,#ffe27a,#f0a020 55%,rgba(240,160,32,0) 72%);
           box-shadow:0 0 18px rgba(255,200,80,.9);will-change:transform,opacity}
  .appRow{position:absolute;left:0;right:0;text-align:center;white-space:nowrap;font-weight:600;
          letter-spacing:-.015em;line-height:1;will-change:transform,opacity}
  .appRow em{font-style:normal;display:inline-block;width:.92em;height:.92em;border-radius:.2em;
             vertical-align:-.16em;margin-right:.22em;box-shadow:inset 0 0 0 1px rgba(255,255,255,.12)}
</style>
</head>
<body>
<p class="sr">A thirty-second keynote-style motion study on black. A chromatic wordmark assembles, a wall of creative app windows drifts past, then twenty short type beats follow — one subscription, endless creativity, a dock of apps, a three-track beat, editing a video, taking your design anywhere, and quick verbs from Prompt it to Share it — closing on a price, a scrolling list of app names, and the Creator Studio wordmark.</p>
<div id="stage">
  <div id="comp"></div>
  <svg width="0" height="0" style="position:absolute" aria-hidden="true">
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="b"/>
      <feColorMatrix in="b" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -10" result="g"/>
      <feComposite in="SourceGraphic" in2="g" operator="atop"/>
    </filter>
  </svg>
</div>
<span id="ruler" aria-hidden="true"></span>
<script>
(function(){
  "use strict";
  var DUR=30.122, W=1280, H=720;
  var comp=document.getElementById('comp'), stage=document.getElementById('stage'), ruler=document.getElementById('ruler');

  /* ---------- math ---------- */
  var clamp=function(v,a,b){return v<a?a:(v>b?b:v)};
  var lerp=function(a,b,t){return a+(b-a)*t};
  var seg=function(t,a,b){return clamp((t-a)/(b-a||1e-6),0,1)};
  var smooth=function(t){return t*t*(3-2*t)};
  var eOut=function(t){return 1-Math.pow(1-t,3)};
  var eIn=function(t){return t*t*t};
  var back=function(t){var c=1.6;return 1+(c+1)*Math.pow(t-1,3)+c*Math.pow(t-1,2)};
  function rng(s){var a=s>>>0;return function(){a+=0x6D2B79F5;var t=a;t=Math.imul(t^t>>>15,t|1);t^=t+Math.imul(t^t>>>7,t|61);return((t^t>>>14)>>>0)/4294967296}}

  /* ---------- dom ---------- */
  function el(tag,cls,parent,html){
    var n=document.createElement(tag);
    if(cls)n.className=cls;
    if(html!=null)n.innerHTML=html;
    (parent||comp).appendChild(n);
    return n;
  }
  function setT(n,v){if(n._t!==v){n._t=v;n.style.transform=v}}
  function setO(n,v){var r=clamp(v,0,1).toFixed(3);if(n._o!==r){n._o=r;n.style.opacity=r}}
  function setF(n,v){if(n._f!==v){n._f=v;n.style.filter=v}}
  function setC(n,v){if(n._c!==v){n._c=v;n.style.color=v}}
  var TXY='translateY(-50%) ';

  /* fit a string to a pixel width so every beat matches the reference measurements */
  function fitPx(str,target,weight){
    ruler.style.fontWeight=weight||600;
    ruler.style.fontSize='100px';
    ruler.textContent=str;
    return 100*target/ruler.getBoundingClientRect().width;
  }
  function advances(str,fs,weight){
    ruler.style.fontWeight=weight||600;
    ruler.style.fontSize=fs+'px';
    var out=[];
    for(var i=0;i<str.length;i++){
      ruler.textContent=str[i];
      out.push(ruler.getBoundingClientRect().width);
    }
    return out;
  }
  function letters(node,str){
    node.textContent='';
    var out=[];
    for(var i=0;i<str.length;i++){
      var s=document.createElement('span');
      s.textContent=str[i]===' '?'\\u00a0':str[i];
      node.appendChild(s); out.push(s);
    }
    return out;
  }
  /* one centred line, auto-sized to a reference width */
  function textLine(scene,str,targetW){
    var wrap=el('div','line',scene);
    var tx=el('div','tx',wrap);
    var fs=fitPx(str,targetW);
    tx.style.fontSize=fs.toFixed(2)+'px';
    return {wrap:wrap, tx:tx, chars:letters(tx,str), fs:fs};
  }

  var APPLE='<svg viewBox="0 0 24 24" aria-hidden="true">'+
    '<path fill="currentColor" d="M17.1 12.7c0-2.6 2.1-3.9 2.2-4-1.2-1.8-3.1-2-3.7-2.1-1.7-.1-3.3 1-4.1 1-.8 0-2.1-1-3.5-1-1.8 0-3.6 1.1-4.5 2.8-1.9 3.4-.5 8.4 1.4 11.2 1 1.3 2.1 2.8 3.6 2.7 1.4 0 1.9-.9 3.6-.9s2.1.9 3.6.9c1.5 0 2.4-1.3 3.3-2.7 1.1-1.5 1.5-3 1.5-3.1-.1 0-3.4-1.3-3.4-4.8z"/>'+
    '<path fill="currentColor" d="M14.6 4.9c.8-.9 1.3-2.2 1.1-3.5-1.1.1-2.5.8-3.3 1.7-.7.9-1.3 2.2-1.1 3.4 1.2.1 2.5-.6 3.3-1.6z"/></svg>';

  /* =====================================================================
     1 + 21 · wordmark, chromatic assemble
     ===================================================================== */
  function makeWordmark(){
    var s=el('div','scene');
    var wrap=el('div','line',s);
    var tx=el('div','tx',wrap);
    var fs=fitPx('Creator Studio',678);
    tx.style.fontSize=fs.toFixed(2)+'px';
    var mk=el('span','mark',tx,APPLE);
    var chars=[], str='Creator Studio';
    for(var i=0;i<str.length;i++){
      var sp=document.createElement('span');
      sp.textContent=str[i]===' '?'\\u00a0':str[i];
      tx.appendChild(sp); chars.push(sp);
    }
    var R=rng(7719), jit=chars.map(function(){return [R()*2-1,R()*2-1,R()]});
    return {node:s, update:function(t,p){
      setO(mk,smooth(seg(p,.26,.5)));
      setT(mk,'scale('+lerp(.55,1,eOut(seg(p,.26,.56))).toFixed(3)+')');
      for(var i=0;i<chars.length;i++){
        var j=jit[i];
        var a=eOut(clamp(seg(p,.02,.5)*1.5-j[2]*.5,0,1));
        setT(chars[i],'translate('+(j[0]*62*(1-a)).toFixed(1)+'px,'+(j[1]*34*(1-a)).toFixed(1)+'px) scale('+lerp(1.24,1,a).toFixed(3)+')');
        setO(chars[i],Math.min(1,a*1.6));
        var sep=(1-a)*11;
        chars[i].style.textShadow=sep>.4
          ? (-sep).toFixed(1)+'px 0 rgba(255,64,72,.85),'+sep.toFixed(1)+'px 0 rgba(64,255,190,.8),0 '+(sep*.55).toFixed(1)+'px rgba(96,124,255,.8)'
          : 'none';
        setF(chars[i],sep>.7?'blur('+(sep*.3).toFixed(2)+'px)':'none');
      }
    }};
  }

  /* =====================================================================
     2 · wall of creative app windows
     ===================================================================== */
  var WALLPAL=[
    ['#1c6b47','#93d46b'],['#8a1d3c','#f05a6d'],['#123c70','#4aa8f0'],
    ['#572a86','#c07af0'],['#7d4a12','#f0b45a'],['#0e4f54','#4fd6c8'],
    ['#6b1050','#f05ac0'],['#24406b','#7aa8f0'],['#3a5f10','#b0e05a'],
    ['#6b2a10','#f08a5a'],['#28286b','#8a8af0'],['#0d5a2c','#5ad68a']
  ];
  function makeWall(){
    var s=el('div','scene'), R=rng(4242), wins=[];
    for(var i=0;i<34;i++){
      var w=el('div','win',s);
      var pal=WALLPAL[Math.floor(R()*WALLPAL.length)];
      var variant=i%6;
      var bw=lerp(160,330,R()), bh=bw*lerp(.6,.68,R());
      w.style.width=bw.toFixed(0)+'px'; w.style.height=bh.toFixed(0)+'px';
      el('div','bar',w,'<i></i><i></i><i></i>');
      var body=el('div','body',w);
      body.style.background='#0d0d12';
      var pane=el('div','pane',body);
      pane.style.background='linear-gradient(150deg,'+pal[0]+','+pal[1]+')';
      pane.style.opacity='.82';
      var k;
      if(variant===0){
        el('div','side',body,'<u></u><u></u><u></u><u></u><u></u>');
        var st=el('div','strip',body); st.style.height='26%';
        for(k=0;k<5;k++){var u=el('u','',st);u.style.left=(6+k*18)+'%';u.style.width='15%';u.style.height='11px';u.style.background=k%2?pal[1]:'#3f4a6a'}
      } else if(variant===1){
        pane.style.display='none';
        var st2=el('div','strip',body); st2.style.height='56%';
        for(k=0;k<7;k++){var u2=el('u','',st2);u2.style.left=(3+k*13.6)+'%';u2.style.width='12%';
          u2.style.height=(10+(k%3)*8)+'px';u2.style.bottom=(7+(k%3)*15)+'px';u2.style.background=k%2?pal[1]:pal[0]}
        var th=el('div','',body);
        th.style.cssText='position:absolute;left:6%;top:6%;width:54%;height:34%;border-radius:5px;background:linear-gradient(140deg,'+pal[0]+','+pal[1]+')';
      } else if(variant===2){
        pane.style.display='none';
        body.style.background='#e9e9ee';
        var bars=el('div','bars',body);
        for(k=0;k<6;k++){var b=el('u','',bars);b.style.height=(24+((k*37)%70))+'%';b.style.background=k%2?pal[1]:pal[0]}
        var tx2=el('div','txt',body);
        for(k=0;k<3;k++){var l3=el('u','',tx2);l3.style.background='#cbcbd2';l3.style.width=(80-k*18)+'%'}
      } else if(variant===3){
        pane.style.display='none';
        var ti=el('div','tiles',body);
        for(k=0;k<12;k++){var t4=el('u','',ti);t4.style.background='linear-gradient('+(k*30)+'deg,'+pal[0]+','+pal[1]+')'}
      } else if(variant===4){
        pane.style.display='none';
        for(k=0;k<3;k++){
          var tr=el('div','',body);
          tr.style.cssText='position:absolute;left:6%;right:6%;top:'+(11+k*29)+'%;height:21%;border-radius:4px;background:'+
            (k===0?pal[1]:k===1?pal[0]:'#7a3ad6')+';opacity:.92';
        }
      } else {
        var sh=el('div','',body);
        sh.style.cssText='position:absolute;left:20%;top:16%;width:60%;height:76%;border-radius:42% 42% 28% 28%;background:rgba(0,0,0,.4);filter:blur(7px)';
      }
      wins.push({n:w,rot:(R()*2-1)*2.6,ph:R()*6.283,w:bw,h:bh,d:R()});
      void i;
    }
    return {node:s, update:function(t,p){
      var phase=t<.5?0:(t<1.06?1:2);
      var pp=phase===0?seg(t,0,.5):phase===1?seg(t,.5,1.06):seg(t,1.06,1.92);
      var zoom=lerp(.9,1.16,pp)*(1+phase*.08);
      for(var i=0;i<wins.length;i++){
        var o=wins[i], k=(i+phase*11)%wins.length;
        var gx=((k*137)%13)/12, gy=((k*71)%9)/8;
        var depth=.62+((k*53)%100)/100*.6;
        var x=lerp(-120,1400,gx)+Math.sin(t*.7+o.ph)*18;
        var y=lerp(-80,800,gy)+Math.cos(t*.55+o.ph)*15;
        var sc=depth*zoom;
        var cx=(x-W/2)*lerp(1,1.16,pp)+W/2, cy=(y-H/2)*lerp(1,1.16,pp)+H/2;
        o.n.style.left=(cx-o.w/2).toFixed(1)+'px';
        o.n.style.top=(cy-o.h/2).toFixed(1)+'px';
        setT(o.n,'scale('+sc.toFixed(3)+') rotate('+o.rot.toFixed(2)+'deg)');
        setO(o.n,Math.min(1,smooth(seg(t,0,.24))*1.2)*(1-seg(t,1.8,1.92))*clamp(.5+depth*.5,.4,1));
      }
    }};
  }

  /* =====================================================================
     3 · one subscription / endless creativity
     ===================================================================== */
  function makeLines(){
    var s=el('div','scene');
    function build(str,target){
      var wrap=el('div','line',s), tx=el('div','tx',wrap);
      tx.style.fontSize=fitPx(str,target).toFixed(2)+'px';
      var out=[];
      str.split(' ').forEach(function(word,i){
        var sp=document.createElement('span');
        sp.textContent=(i?'\\u00a0':'')+word;
        tx.appendChild(sp); out.push(sp);
      });
      return {tx:tx,words:out};
    }
    var A=build('One subscription.',705), B=build('Endless creativity.',702);
    function play(o,p,a0,out0){
      var vis=1-smooth(seg(p,out0,out0+.07));
      setO(o.tx,vis);
      for(var i=0;i<o.words.length;i++){
        var q=eOut(clamp(seg(p,a0+i*.135,a0+.2+i*.135),0,1));
        setO(o.words[i],q*vis);
        setT(o.words[i],'translateY('+((1-q)*24).toFixed(1)+'px)');
        setF(o.words[i],q<.97?'blur('+((1-q)*6).toFixed(2)+'px)':'none');
      }
    }
    return {node:s, update:function(t,p){ play(A,p,.02,.44); play(B,p,.5,.94) }};
  }

  /* =====================================================================
     4 · dock
     ===================================================================== */
  var ICONS=[
    '<svg viewBox="0 0 32 32"><rect x="7" y="16" width="4.4" height="10" rx="1" fill="#7fd44a"/><rect x="13.8" y="9" width="4.4" height="17" rx="1" fill="#a6e86a"/><rect x="20.6" y="13" width="4.4" height="13" rx="1" fill="#5fbe32"/><rect x="6" y="27" width="20" height="1.8" fill="#c9f2a0"/></svg>',
    '<svg viewBox="0 0 32 32"><path d="M6 20h20l-4-9H10z" fill="#6fb6f0"/><rect x="15" y="20" width="2" height="7" fill="#8fd0f7"/><rect x="10" y="26" width="12" height="2" rx="1" fill="#4a90d0"/></svg>',
    '<svg viewBox="0 0 32 32"><path d="M8 25c0-10 3-14 6-14s3 7 5 7 3-4 5-4" stroke="#f05ad0" stroke-width="3.2" fill="none" stroke-linecap="round"/><circle cx="23.4" cy="14.6" r="2.6" fill="#f7a0e4"/></svg>',
    '<svg viewBox="0 0 32 32"><rect x="5" y="12" width="22" height="13" rx="3" fill="#a15ff0"/><path d="M5 12l6-4 16 2-4 3z" fill="#c79af7"/></svg>',
    '<svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="12.5" fill="#dce1e9"/><circle cx="16" cy="16" r="7" fill="#9aa3b0"/><circle cx="16" cy="16" r="2" fill="#33373f"/></svg>',
    '<svg viewBox="0 0 32 32"><path d="M16 8l9.5 5-9.5 5-9.5-5z" fill="#e0324a"/><path d="M16 18l9.5 5-9.5 5-9.5-5z" fill="#a81d2c" opacity=".9"/></svg>',
    '<svg viewBox="0 0 32 32"><path d="M8 25l16-17 2.4 3.4-14.4 15z" fill="#f0863a"/><path d="M8 25.6h18.4" stroke="#f0b45a" stroke-width="2.2"/></svg>',
    '<svg viewBox="0 0 32 32"><path d="M16 6v20" stroke="#4fd6b8" stroke-width="2"/><circle cx="16" cy="9.5" r="3.2" fill="#4fd6b8"/><circle cx="21.5" cy="18" r="3.2" fill="#4fd6b8"/><circle cx="10.5" cy="22.5" r="3.2" fill="#4fd6b8"/></svg>',
    '<svg viewBox="0 0 32 32"><path d="M8 9h16l-8 7 8 7H8l8-7z" fill="none" stroke="#f0d05a" stroke-width="2.6"/></svg>',
    '<svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="11.5" fill="#2f7fb8"/><path d="M7.5 17c2-4.4 3 4.4 5 0s3 4.4 5 0 3 3.4 5-1" stroke="#c8eafa" stroke-width="2.2" fill="none" stroke-linecap="round"/></svg>'
  ];
  function makeDock(){
    var s=el('div','scene');
    var bar=el('div','',s); bar.id='dockBar';
    var icos=[];
    for(var i=0;i<ICONS.length;i++){
      var n=el('div','ico',s,ICONS[i]);
      n.style.left=(148+i*101)+'px'; n.style.top='326px';
      icos.push(n);
    }
    return {node:s, update:function(t,p){
      var q0=eOut(seg(p,0,.24));
      setO(bar,q0);
      setT(bar,'scaleX('+lerp(.7,1,q0).toFixed(3)+')');
      for(var i=0;i<icos.length;i++){
        var q=clamp(seg(p,.08+i*.03,.36+i*.03),0,1);
        var lift=(i===4)?eOut(seg(p,.5,.76)):0;
        setO(icos[i],Math.min(1,q*1.7));
        setT(icos[i],'translateY('+((1-back(q))*30-lift*52).toFixed(1)+'px) scale('+(lerp(.6,1,back(q))*(1+lift*.58)).toFixed(3)+')');
        icos[i].style.boxShadow=lift>.02
          ? '0 0 '+(46*lift).toFixed(0)+'px rgba(216,234,255,'+(.85*lift).toFixed(2)+'),inset 0 1px 0 rgba(255,255,255,.2)'
          : 'inset 0 1px 0 rgba(255,255,255,.14)';
        icos[i].style.zIndex=i===4?5:1;
      }
    }};
  }

  /* =====================================================================
     5 · make a beat
     ===================================================================== */
  function makeBeatText(){
    var s=el('div','scene');
    var L=textLine(s,'Make a beat.',469);
    var R=rng(551), jit=L.chars.map(function(){return [R()*2-1,R()*2-1]});
    return {node:s, update:function(t,p){
      setO(L.tx,smooth(seg(p,.02,.14))*(1-smooth(seg(p,.88,1))));
      for(var i=0;i<L.chars.length;i++){
        var q=eOut(clamp(seg(p,.04+i*.028,.34+i*.028),0,1));
        setT(L.chars[i],'translate('+(jit[i][0]*34*(1-q)).toFixed(1)+'px,'+
          (jit[i][1]*18*(1-q)+Math.sin(t*5.4+i)*(1-q)*5).toFixed(1)+'px)');
        setO(L.chars[i],Math.min(1,q*1.5));
      }
    }};
  }

  /* =====================================================================
     6 · three-track beat
     ===================================================================== */
  function makeTracks(){
    var s=el('div','scene'), R=rng(9051);
    var specs=[
      {name:'DRUMS_137BPM', top:112,h:138,g:'linear-gradient(180deg,#84e44e,#5cc832)',glow:'#7fe04a',kind:'roll'},
      {name:'BASS_137BPM',  top:259,h:132,g:'linear-gradient(180deg,#a850f0,#8b2ce0)',glow:'#a24ef0',kind:'ticks'},
      {name:'HARMONY_137BPM',top:400,h:140,g:'linear-gradient(180deg,#d431c2,#6f0d58)',glow:'#d02fc0',kind:'wave'}
    ];
    var tr=specs.map(function(sp){
      var n=el('div','track',s);
      n.style.top=sp.top+'px'; n.style.height=sp.h+'px'; n.style.background=sp.g;
      n.style.boxShadow='0 0 30px '+sp.glow+'70,0 0 5px '+sp.glow+'bb';
      el('b','',n).textContent=sp.name;
      var art=el('div','art',n), i, j;
      if(sp.kind==='roll'){
        for(i=0;i<52;i++){
          var u=el('u','',art);
          u.style.left=(8+i*11.4)+'px'; u.style.width='6px';
          u.style.height=(R()<.3?15:9)+'px'; u.style.top=(34+R()*58)+'px';
        }
      } else if(sp.kind==='ticks'){
        for(i=0;i<28;i++){
          var y=24+R()*54;
          var g=el('u','',art); g.style.left=(16+i*20.4)+'px'; g.style.width='15px'; g.style.height='2px'; g.style.top=y+'px';
          var v=el('u','',art); v.style.left=(16+i*20.4)+'px'; v.style.width='2px'; v.style.height='11px'; v.style.top=(y-4)+'px';
        }
      } else {
        for(i=0;i<2;i++){
          for(j=0;j<126;j++){
            var amp=(Math.sin(j*.2)*.4+Math.sin(j*.06)*.4+.62)*16;
            var wv=el('u','',art);
            wv.style.left=(7+j*4.7)+'px'; wv.style.width='2px';
            wv.style.height=Math.max(2,amp*(.5+R()*.7)).toFixed(1)+'px';
            wv.style.top=(16+i*40+(20-amp/2)).toFixed(1)+'px';
            wv.style.background='rgba(255,255,255,.6)';
          }
        }
      }
      return n;
    });
    var head=el('div','',s);
    head.style.cssText='position:absolute;top:75px;width:6px;height:30px;background:#fff;border-radius:1px';
    return {node:s, update:function(t,p){
      for(var i=0;i<tr.length;i++){
        var q=eOut(clamp(seg(p,.06+i*.2,.32+i*.2),0,1));
        setO(tr[i],q);
        setT(tr[i],'translateY('+((1-q)*30).toFixed(1)+'px) scaleY('+lerp(.68,1,q).toFixed(3)+')');
      }
      setO(head,smooth(seg(p,.02,.12)));
      head.style.left=(516+Math.sin(t*2.4)*7).toFixed(1)+'px';
    }};
  }

  /* =====================================================================
     7 · edit a video
     ===================================================================== */
  function makeEditVideo(){
    var s=el('div','scene');
    var fs=fitPx('Edit a',237);
    // staggered intro pair
    var pre=el('div','line',s);
    var p1=el('div','tx',pre), p2=el('div','tx',pre);
    p1.style.fontSize=p2.style.fontSize=fs.toFixed(2)+'px';
    p1.textContent='Edit a'; p2.textContent='video.';
    p1.style.color='#c98ff5'; p1.style.textShadow='0 0 30px rgba(160,80,255,.8)';
    p2.style.color='#6e6e75';
    // resolved single line with the clip in the middle
    var main=el('div','line',s);
    var mt=el('div','tx',main); mt.style.fontSize=fs.toFixed(2)+'px';
    var a=el('span','',mt); a.textContent='Edit\\u00a0a\\u00a0';
    var gap=el('span','',mt); gap.style.display='inline-block';
    var b=el('span','',mt); b.textContent='\\u00a0video.';
    var clip=el('div','',s); clip.id='clip';
    var th=el('div','thumbs',clip);
    for(var i=0;i<3;i++)el('u','',th);
    var wv=el('div','wave',clip);
    for(i=0;i<64;i++){
      var u=el('u','',wv);
      u.style.height=(22+Math.abs(Math.sin(i*.7))*58+((i*37)%20))+'%';
    }
    return {node:s, update:function(t,p){
      var swap=seg(p,.58,.7);
      // intro pair
      var pv=1-smooth(swap);
      setO(pre,pv);
      var q1=eOut(seg(p,.02,.24)), q2=eOut(seg(p,.14,.42));
      setT(p1,TXY+'translate('+lerp(-40,-118,q1).toFixed(0)+'px,'+lerp(-30,-46,q1).toFixed(0)+'px)');
      setO(p1,q1);
      setT(p2,TXY+'translate('+lerp(160,118,q2).toFixed(0)+'px,'+lerp(58,42,q2).toFixed(0)+'px)');
      setO(p2,q2);
      // resolved line + clip
      var mv=smooth(swap);
      setO(main,mv);
      var open=eOut(seg(p,.66,.84));
      var gw=lerp(0,575,open);
      gap.style.width=gw.toFixed(0)+'px';
      clip.style.width=Math.max(2,gw-6).toFixed(0)+'px';
      clip.style.height='200px';
      clip.style.left=(W/2-gw/2+3).toFixed(0)+'px';
      clip.style.top='262px';
      setO(clip,mv*Math.min(1,open*2.4)*(1-seg(p,.93,1)));
      setT(clip,'scaleY('+lerp(.5,1,eOut(seg(p,.64,.82))).toFixed(3)+')');
    }};
  }

  /* =====================================================================
     8 · macbook, text boxes
     ===================================================================== */
  function macFrame(parent){
    var m=el('div','mac',parent);
    var lid=el('div','lid',m);
    var scr=el('div','scr',lid);
    el('div','notch',lid);
    var inn=el('div','scrIn',scr);
    el('div','base',m);
    return {root:m, screen:inn};
  }
  function makeMac(){
    var s=el('div','scene');
    var mac=macFrame(s);
    var clip=el('div','',mac.screen);
    clip.style.cssText='position:absolute;inset:0;background:linear-gradient(150deg,#2f2118,#c08a5a)';
    var subj=el('div','',clip);
    subj.style.cssText='position:absolute;left:24%;top:26%;width:52%;height:62%;border-radius:44% 44% 28% 28%;background:rgba(18,10,6,.55);filter:blur(4px)';
    var pal=el('div','palette',mac.screen);
    for(var i=0;i<11;i++)el('u','',pal);
    var guide=el('div','guide',mac.screen);
    var b1=el('div','tbox',mac.screen,'<i></i><i></i><i></i><i></i><span>Take</span>');
    var b2=el('div','tbox',mac.screen,'<i></i><i></i><i></i><i></i><span>your</span>');
    b1.querySelector('span').style.fontSize='132px';
    b2.querySelector('span').style.fontSize='86px';
    return {node:s, update:function(t,p){
      setO(mac.root,smooth(seg(p,0,.09)));
      setT(mac.root,'scale('+lerp(.95,1,eOut(seg(p,0,.3))).toFixed(3)+')');
      setO(clip,1-seg(p,.18,.32));
      setO(pal,smooth(seg(p,.22,.4)));
      guide.style.top='64%';
      setO(guide,smooth(seg(p,.34,.48))*(1-seg(p,.92,1)));
      var i1=seg(p,.28,.44);
      b1.style.left='16%'; b1.style.top='30%'; b1.style.width='52%'; b1.style.height='34%';
      setO(b1,smooth(i1));
      setT(b1,'scale('+lerp(.9,1,eOut(i1)).toFixed(3)+')');
      var i2=seg(p,.64,.8);
      b2.style.left='54%'; b2.style.top='36%'; b2.style.width='30%'; b2.style.height='24%';
      setO(b2,smooth(i2));
      setT(b2,'translateX('+((1-eOut(i2))*26).toFixed(1)+'px)');
    }};
  }

  /* =====================================================================
     9 · take your design anywhere
     ===================================================================== */
  var GRADS=[
    {bg:'#3c0a1a', blobs:['#8e1436','#cc1f4c','#f2567c']},
    {bg:'#2a0742', blobs:['#6d1baa','#a92ee2','#da6af2']},
    {bg:'#0f3a10', blobs:['#3f7a18','#82c62c','#dcf24c']}
  ];
  function gradientCanvas(parent){
    var g=el('div','grad',parent), blobs=[];
    for(var i=0;i<3;i++)blobs.push(el('b','',g));
    return {set:function(idx,t){
      var sp=GRADS[idx];
      g.style.background=sp.bg;
      for(var i=0;i<blobs.length;i++){
        var b=blobs[i], sz=lerp(152,112,i/2);
        b.style.width=sz+'%'; b.style.height=(sz*1.35)+'%';
        b.style.left=lerp(-26,6,i/2)+'%';
        b.style.top=(lerp(-8,26,i/2)+Math.sin(t*.7+i)*2)+'%';
        b.style.background='radial-gradient(circle at 42% 36%,'+sp.blobs[i]+',rgba(0,0,0,0) 70%)';
        b.style.opacity=(.96-i*.08).toFixed(2);
      }
    }};
  }
  function makeCanvasScene(){
    var s=el('div','scene');
    var mac=macFrame(s);
    var pad=el('div','pad',s);
    var padIn=el('div','scrIn',el('div','scr',pad));
    var gMac=gradientCanvas(mac.screen), gPad=gradientCanvas(padIn);
    function typeBlock(parent,unit){
      var w=el('div','canvasType',parent);
      var rows=[
        {txt:'Take',     x:'5%',  y:'3%',  s:1.0},
        {txt:'your',     x:'43%', y:'25%', s:1.0},
        {txt:'design',   x:'4%',  y:'47%', s:1.0},
        {txt:'anywhere.',x:'2%',  y:'69%', s:1.0}
      ];
      return {root:w, rows:rows.map(function(r){
        var d=el('div','',w);
        d.textContent=r.txt;
        d.style.left=r.x; d.style.top=r.y;
        d.style.fontSize=(unit*r.s)+'px';
        d.style.color='rgba(255,255,255,.94)';
        return d;
      })};
    }
    var tMac=typeBlock(mac.screen,114), tPad=typeBlock(padIn,110);
    var pencil=el('div','',s);
    pencil.style.cssText='position:absolute;height:8px;border-radius:4px;background:linear-gradient(90deg,#8f939b,#d6dae0);will-change:transform,opacity';
    var hand=el('div','hand',s);
    hand.innerHTML='<svg viewBox="0 0 260 340" aria-hidden="true"><path fill="#b07f5e" d="M124 340V206c0-17-11-30-11-45 0-10 8-14 15-9 8 6 13 19 15 32l4 24 7-95c1-13 6-19 14-18 9 1 12 9 12 20l1 79 9-69c2-12 9-17 16-15 8 2 11 10 10 21l-9 71 15-47c4-12 12-15 19-12 7 4 9 12 5 23l-19 67c-7 24-11 42-11 59v54z"/></svg>';
    return {node:s, update:function(t,p){
      var onPad=p>.42;
      mac.root.style.display=onPad?'none':'block';
      pad.style.display=onPad?'block':'none';
      var idx=p<.18?0:(p<.38?1:2);
      var g=onPad?gPad:gMac, tb=onPad?tPad:tMac;
      g.set(idx,t);
      var host=onPad?pad:mac.root;
      setO(host,smooth(seg(p,0,.08)));
      var grow=eOut(seg(p,.42,1));
      setT(host,onPad
        ? 'scale('+lerp(1,1.44,grow).toFixed(3)+') translate('+lerp(0,-16,grow).toFixed(0)+'px,'+lerp(0,26,grow).toFixed(0)+'px)'
        : 'scale('+lerp(.96,1,eOut(seg(p,0,.3))).toFixed(3)+')');
      setF(host,onPad&&grow>.5?'blur('+((grow-.5)*5.2).toFixed(2)+'px)':'none');
      for(var i=0;i<tb.rows.length;i++){
        var q=eOut(clamp(seg(p,.01+i*.045,.11+i*.045),0,1));
        setO(tb.rows[i],q);
        setT(tb.rows[i],'translateY('+((1-q)*20).toFixed(1)+'px)');
      }
      var pen=smooth(seg(p,.56,.72));
      pencil.style.left='430px'; pencil.style.top='104px'; pencil.style.width='420px';
      setO(pencil,pen*(1-seg(p,.94,1)));
      var hi=seg(p,.72,.98);
      hand.style.left='700px'; hand.style.top='300px';
      setO(hand,Math.min(1,hi*2.4));
      setT(hand,'translate('+lerp(230,26,eOut(hi)).toFixed(0)+'px,'+lerp(120,30,eOut(hi)).toFixed(0)+'px) rotate('+lerp(20,6,eOut(hi)).toFixed(1)+'deg)');
    }};
  }

  /* =====================================================================
     10 · prompt it — clean, daisies, liquid
     ===================================================================== */
  function makePrompt(){
    var s=el('div','scene');
    var L=textLine(s,'Prompt it.',600);
    var cv=document.createElement('canvas');
    cv.id='daisyC'; cv.width=W; cv.height=H; s.appendChild(cv);
    var g2=cv.getContext('2d');
    var liquid=el('div','',s); liquid.id='liquid';
    var lt=el('div','tx',liquid);
    lt.style.fontSize=L.fs.toFixed(2)+'px'; lt.style.fontWeight='700'; lt.style.color='#8ecfee';
    lt.textContent='Prompt it.';
    var gl=el('div','gloss',s); gl.style.fontSize=L.fs.toFixed(2)+'px'; gl.textContent='Prompt it.';
    var R=rng(3131), drops=[];
    for(var i=0;i<28;i++){
      var d=el('div','drop',liquid);
      var sz=lerp(8,26,R());
      d.style.width=sz+'px'; d.style.height=sz+'px';
      drops.push({n:d,x:lerp(340,940,R()),y:lerp(240,470,R()),sz:sz,ph:R()*6.283,sp:.4+R()*.9});
    }
    var pts=null;
    function samplePts(){
      var m=document.createElement('canvas'), mc=m.getContext('2d');
      m.width=W; m.height=200;
      mc.font='700 '+L.fs.toFixed(0)+'px -apple-system,"SF Pro Display",Helvetica,Arial,sans-serif';
      mc.textAlign='center'; mc.textBaseline='middle';
      mc.fillText('Prompt it.',W/2,100);
      var data=mc.getImageData(0,0,W,200).data, out=[];
      for(var y=0;y<200;y+=13){
        for(var x=0;x<W;x+=13){
          if(data[(y*W+x)*4+3]>110) out.push([x,y]);
        }
      }
      return out;
    }
    function daisy(x,y,r,rot,a){
      g2.save(); g2.translate(x,y); g2.rotate(rot); g2.globalAlpha=a;
      g2.fillStyle='#f4f3ef';
      for(var i=0;i<9;i++){
        g2.save(); g2.rotate(i/9*6.2832);
        g2.beginPath(); g2.ellipse(0,-r*.6,r*.25,r*.6,0,0,6.2832); g2.fill();
        g2.restore();
      }
      g2.fillStyle='#e6b229';
      g2.beginPath(); g2.arc(0,0,r*.3,0,6.2832); g2.fill();
      g2.restore();
    }
    return {node:s, update:function(t,p){
      var cq=smooth(seg(p,.01,.07))*(1-smooth(seg(p,.13,.19)));
      var gq=smooth(seg(p,.68,.76))*(1-smooth(seg(p,.92,1)));
      setO(L.tx,Math.max(cq,gq*.6));
      setT(L.tx,TXY+'scale('+lerp(1.04,1,eOut(seg(p,.02,.24))).toFixed(3)+')');
      if(gq>.01){ setC(L.tx,'rgba(198,126,112,1)'); setF(L.tx,'blur('+(3+gq*5).toFixed(1)+'px)') }
      else { setC(L.tx,'#f5f5f7'); setF(L.tx,'none') }

      var dq=smooth(seg(p,.15,.23))*(1-smooth(seg(p,.40,.46)));
      cv.style.opacity=dq.toFixed(3);
      if(dq>.004){
        if(!pts) pts=samplePts();
        g2.clearRect(0,0,W,H);
        var grow=eOut(seg(p,.15,.38));
        for(var i=0;i<pts.length;i++){
          var q=clamp(grow*1.4-((i*37)%100)/100*.4,0,1);
          if(q<=.02) continue;
          daisy(pts[i][0],pts[i][1]+260,lerp(4,15,q)+Math.sin(t*2+i)*.8,(i*1.7)%6.283,q);
        }
      }
      var lq=smooth(seg(p,.4,.48))*(1-smooth(seg(p,.6,.68)));
      setO(liquid,lq); setO(gl,lq*.9);
      var wob=Math.sin(t*2.2)*2.4;
      setT(lt,TXY+'translateY('+wob.toFixed(2)+'px)');
      setT(gl,TXY+'translateY('+wob.toFixed(2)+'px)');
      var burst=eOut(seg(p,.46,.74));
      for(i=0;i<drops.length;i++){
        var d=drops[i];
        d.n.style.left=(d.x+Math.cos(d.ph)*burst*lerp(30,170,d.sp*.7)-d.sz/2).toFixed(1)+'px';
        d.n.style.top=(d.y+Math.sin(d.ph)*burst*lerp(20,120,d.sp*.7)+Math.sin(t*1.6+d.ph)*3-d.sz/2).toFixed(1)+'px';
      }
    }};
  }

  /* =====================================================================
     11 · perform it
     ===================================================================== */
  function makePerform(){
    var s=el('div','scene');
    var keys=el('div','keys',s);
    for(var i=0;i<4;i++)el('u','',keys);
    var L=textLine(s,'Perform it.',575);
    var TINT=['#ffffff','#ffffff','#d8f0ff','#bfe6fb','#cfe8fb','#c46ff5','#a83af0','#ffffff','#f7d79a','#f2c37a','#f0bb6a'];
    var hands=el('div','',s);
    hands.innerHTML='<svg viewBox="0 0 1280 340" aria-hidden="true">'+
      '<g fill="#6f4a32">'+
      '<path d="M196 340V186c0-22 15-38 34-38 18 0 30 16 30 38v78l52-12c22-5 38 6 38 24 0 40-44 64-92 64z"/>'+
      '<path d="M262 340v-96c0-14 9-24 20-24s20 10 20 24v96z" fill="#7d5237"/>'+
      '<path d="M604 340V162c0-24 17-42 37-42 20 0 33 18 33 42v88l58-14c24-5 41 7 41 27 0 44-48 70-100 70z"/>'+
      '<path d="M676 340v-104c0-15 10-26 22-26s22 11 22 26v104z" fill="#7d5237"/>'+
      '</g></svg>';
    hands.style.cssText='position:absolute;left:0;right:0;bottom:0;height:340px;will-change:opacity,transform';
    return {node:s, update:function(t,p){
      var env=smooth(seg(p,.02,.16))*(1-smooth(seg(p,.84,1)));
      setO(L.tx,env);
      L.tx.style.textShadow='0 0 34px rgba(255,255,255,.45)';
      for(var i=0;i<L.chars.length;i++){
        setC(L.chars[i],TINT[i]||'#ffffff');
        setO(L.chars[i],1);
        setT(L.chars[i],'translateY('+(Math.sin(t*9+i*.7)*1.4).toFixed(2)+'px)');
      }
      setO(keys,env*smooth(seg(p,.06,.28)));
      setO(hands,env*smooth(seg(p,.1,.4)));
      setT(hands,'translateY('+((1-eOut(seg(p,.1,.5)))*60).toFixed(0)+'px)');
    }};
  }

  /* =====================================================================
     12 · loop it
     ===================================================================== */
  function makeLoop(){
    var s=el('div','scene');
    var L=textLine(s,'Loop it.',375);
    return {node:s, update:function(t,p){
      setO(L.tx,smooth(seg(p,.02,.14))*(1-smooth(seg(p,.9,1))));
      for(var i=0;i<L.chars.length;i++){
        var q=eOut(clamp(seg(p,.03+i*.03,.3+i*.03),0,1));
        var spin=(i===1||i===2)?Math.sin(t*4.6+i*.7)*140*(1-seg(p,.1,.34)):0;
        setT(L.chars[i],'translateY('+((1-q)*20).toFixed(1)+'px) rotateY('+spin.toFixed(0)+'deg)');
        setO(L.chars[i],q);
      }
    }};
  }

  /* =====================================================================
     13 · select it
     ===================================================================== */
  function makeSelect(){
    var s=el('div','scene');
    var L=textLine(s,'Select it.',499);
    L.chars.forEach(function(c){setC(c,'#48484d')});
    var lime=el('div','line',s);
    var lt=el('div','tx',lime);
    lt.style.fontSize=L.fs.toFixed(2)+'px'; lt.style.color='#a6f024';
    lt.style.textShadow='0 0 34px rgba(160,240,40,.6)';
    lt.innerHTML='<span>S</span><span style="opacity:0">elect it.</span>';
    var first=lt.firstChild;
    var cur=el('div','cursor',s);
    return {node:s, update:function(t,p){
      var env=smooth(seg(p,.02,.14))*(1-smooth(seg(p,.88,1)));
      setO(L.tx,env); setO(lt,env);
      var trace=eOut(seg(p,.08,.44));
      first.style.clipPath='inset('+((1-trace)*100).toFixed(1)+'% 0 0 0)';
      cur.style.left=(400+Math.sin(trace*3.4)*22).toFixed(1)+'px';
      cur.style.top=lerp(300,382,trace).toFixed(1)+'px';
      setO(cur,env*smooth(seg(p,.04,.14))*(1-seg(p,.5,.66)));
    }};
  }

  /* =====================================================================
     14 · write it — letters riding an s-curve
     ===================================================================== */
  function makeWrite(){
    var s=el('div','scene');
    var str='Write it.', fs=fitPx(str,620);
    var adv=advances(str,fs), total=adv.reduce(function(a,b){return a+b},0);
    var wrap=el('div','line',s);
    var svg=document.createElementNS('http://www.w3.org/2000/svg','svg');
    svg.setAttribute('viewBox','0 0 1280 720');
    svg.setAttribute('width','1280'); svg.setAttribute('height','720');
    svg.style.cssText='position:absolute;left:0;top:0;overflow:visible';
    var path=document.createElementNS('http://www.w3.org/2000/svg','path');
    /* steep, flat, steep — the reference baseline is a stepped S */
    function P(u){
      var y=468+(378-468)*smooth(seg(u,0,.32))+(276-378)*smooth(seg(u,.6,1));
      return [336+700*u, y];
    }
    /* arc-length table so letters space evenly along the curve, not along x */
    var N=240, LUT=[0], prev=P(0), arc=0;
    for(var i=1;i<=N;i++){
      var pt=P(i/N);
      arc+=Math.hypot(pt[0]-prev[0],pt[1]-prev[1]);
      LUT.push(arc); prev=pt;
    }
    function uAt(dist){
      var d=clamp(dist,0,arc), lo=0, hi=N;
      while(hi-lo>1){var mid=(lo+hi)>>1; if(LUT[mid]<d)lo=mid; else hi=mid}
      var span=LUT[hi]-LUT[lo]||1;
      return (lo+(d-LUT[lo])/span)/N;
    }
    var dstr='M';
    for(i=0;i<=60;i++){ var q=P(i/60); dstr+=(i?' L':'')+q[0].toFixed(1)+' '+q[1].toFixed(1) }
    path.setAttribute('d',dstr);
    path.setAttribute('fill','none');
    path.setAttribute('stroke','#e0872a');
    path.setAttribute('stroke-width','2.4');
    path.setAttribute('stroke-linecap','round');
    svg.appendChild(path); wrap.appendChild(svg);
    var len=0;
    var glyphs=[];
    for(i=0;i<str.length;i++){
      var g=document.createElement('span');
      g.textContent=str[i]===' '?'\\u00a0':str[i];
      g.style.cssText='position:absolute;font-weight:600;letter-spacing:-.012em;line-height:1;white-space:pre;'+
        'font-size:'+fs.toFixed(2)+'px;transform-origin:0% 100%;will-change:transform,opacity';
      wrap.appendChild(g);
      glyphs.push({n:g, run:len});
      len+=adv[i];
    }
    var pad=(arc-total)/2;
    var dot=el('div','glowdot',s);
    return {node:s, update:function(t,p){
      var env=1-smooth(seg(p,.86,1));
      var draw=eOut(seg(p,.04,.72));
      var pl=path.getTotalLength?path.getTotalLength():1400;
      path.style.strokeDasharray=pl.toFixed(0);
      path.style.strokeDashoffset=(pl*(1-draw)).toFixed(0);
      path.style.opacity=(env*.95).toFixed(2);
      for(var i=0;i<glyphs.length;i++){
        var g=glyphs[i];
        var u=uAt(pad+g.run);
        var a=P(u), b=P(Math.min(1,u+.012));
        var ang=Math.atan2(b[1]-a[1],b[0]-a[0])*180/Math.PI;
        var q=clamp(seg(p,.06+i*.055,.2+i*.055),0,1);
        g.n.style.left=a[0].toFixed(1)+'px';
        g.n.style.top=a[1].toFixed(1)+'px';
        setT(g.n,'rotate('+ang.toFixed(2)+'deg) translate(0,-'+(fs*.78).toFixed(1)+'px) scale('+lerp(.86,1,eOut(q)).toFixed(3)+')');
        setO(g.n,q*env);
      }
      var hp=P(clamp(draw,0,1));
      dot.style.left=(hp[0]-8).toFixed(1)+'px';
      dot.style.top=(hp[1]-8).toFixed(1)+'px';
      setO(dot,env*smooth(seg(p,.04,.14))*(1-seg(p,.78,.9)));
    }};
  }

  /* =====================================================================
     15 · scrap it
     ===================================================================== */
  function makeScrap(){
    var s=el('div','scene');
    var L=textLine(s,'Scrap it.',469);
    var bin=el('div','bin',s);
    el('div','cup',bin); el('div','rim',bin); el('div','hole',bin);
    var bits=el('div','',bin);
    bits.style.cssText='position:absolute;left:22px;right:22px;top:2px;height:18px;overflow:hidden';
    ['#e8e9ec','#f0d24a','#4fb8e0','#e05a8a'].forEach(function(c,i){
      var q=el('div','',bits);
      q.style.cssText='position:absolute;left:'+(i*26+4)+'px;top:'+(3+(i%2)*4)+'px;width:22px;height:14px;'+
        'border-radius:4px;background:'+c+';opacity:.9';
    });
    var wad=el('div','wad',s);
    wad.innerHTML='<svg viewBox="0 0 46 46" aria-hidden="true"><path fill="#eceef2" d="M7 16l10-11 15 4 7 11-5 14-15 7-11-7z"/>'+
      '<path fill="#c8ccd4" d="M17 5l6 15-16-4zM39 20l-5 14-11-14z"/></svg>';
    return {node:s, update:function(t,p){
      var env=smooth(seg(p,.01,.06))*(1-smooth(seg(p,.5,.62)));
      setO(L.tx,env);
      for(var i=0;i<L.chars.length;i++){
        var q=eOut(clamp(seg(p,.01+i*.008,.07+i*.008),0,1));
        setO(L.chars[i],q);
        setT(L.chars[i],'translateY('+((1-q)*16).toFixed(1)+'px)');
      }
      setO(bin,smooth(seg(p,.04,.16))*(1-smooth(seg(p,.92,1))));
      setT(bin,'scale('+lerp(.9,1,eOut(seg(p,.04,.26))).toFixed(3)+')');
      setO(bits,smooth(seg(p,.56,.68)));
      var drop=seg(p,.28,.56);
      wad.style.left=lerp(760,614,drop).toFixed(0)+'px';
      wad.style.top=lerp(300,444,eIn(drop)+drop*.25).toFixed(0)+'px';
      setO(wad,drop>0&&drop<.95?1:0);
      setT(wad,'rotate('+(drop*540).toFixed(0)+'deg) scale('+lerp(1.15,.72,drop).toFixed(2)+')');
    }};
  }

  /* =====================================================================
     16 · move it
     ===================================================================== */
  function makeMove(){
    var s=el('div','scene');
    var L=textLine(s,'Move it.',462);
    return {node:s, update:function(t,p){
      setO(L.tx,smooth(seg(p,.02,.14))*(1-smooth(seg(p,.9,1))));
      for(var i=0;i<L.chars.length;i++){
        var q=eOut(clamp(seg(p,.06+i*.06,.5+i*.06),0,1));
        var dir=i%2?1:-1;
        setT(L.chars[i],'translate('+(dir*86*(1-q)).toFixed(1)+'px,'+(dir*-14*(1-q)).toFixed(1)+'px)');
        setO(L.chars[i],Math.min(1,q*1.6));
      }
    }};
  }

  /* =====================================================================
     17 · upscale it — sharp lime left, pixellated right
     ===================================================================== */
  function makeUpscale(){
    var s=el('div','scene');
    var L=textLine(s,'Upscale it.',598);
    var lime=el('div','line',s);
    var lt=el('div','tx',lime);
    lt.style.fontSize=L.fs.toFixed(2)+'px';
    lt.style.color='#a6f024';
    lt.style.textShadow='0 0 40px rgba(150,240,40,.55)';
    lt.textContent='Upscale it.';
    var cv=document.createElement('canvas');
    cv.width=W; cv.height=H;
    cv.style.cssText='position:absolute;left:0;top:0;image-rendering:pixelated';
    s.appendChild(cv);
    var g2=cv.getContext('2d');
    var lo=document.createElement('canvas');
    var SC=12;
    lo.width=Math.ceil(W/SC); lo.height=Math.ceil(H/SC);
    var lg=lo.getContext('2d');
    lg.font='600 '+(L.fs/SC).toFixed(2)+'px -apple-system,"SF Pro Display",Helvetica,Arial,sans-serif';
    lg.textAlign='center'; lg.textBaseline='middle';
    lg.fillStyle='#f5f5f7';
    lg.fillText('Upscale it.',W/2/SC,H/2/SC);
    var divider=el('div','',s);
    divider.style.cssText='position:absolute;top:177px;width:1.5px;height:365px;background:rgba(255,255,255,.85)';
    return {node:s, update:function(t,p){
      var env=smooth(seg(p,.02,.14))*(1-smooth(seg(p,.86,1)));
      var sweep=seg(p,.04,.96);
      var x=lerp(320,920,sweep*sweep*.6+sweep*.4);
      setO(L.tx,0);
      setO(lt,env);
      lt.style.clipPath='inset(0 '+(W-x).toFixed(0)+'px 0 0)';
      g2.clearRect(0,0,W,H);
      g2.save();
      g2.beginPath(); g2.rect(x,0,W-x,H); g2.clip();
      g2.imageSmoothingEnabled=false;
      g2.globalAlpha=env;
      g2.drawImage(lo,0,0,lo.width,lo.height,0,0,W,H);
      g2.restore();
      divider.style.left=x.toFixed(1)+'px';
      setO(divider,env*(1-seg(p,.8,.94)));
    }};
  }

  /* =====================================================================
     18 · share it — shatters into glowing shards
     ===================================================================== */
  function makeShare(){
    var s=el('div','scene');
    var L=textLine(s,'Share it.',421);
    var TINT=['#eaf4ff','#eaf4ff','#4da6f0','#4da6f0','#4da6f0','#ffffff','#ffffff','#ffffff','#ffffff'];
    /* slice inside the word's own bounds so each shard reads as a fragment */
    var R=rng(8123), frags=[], TW=421, x00=(W-TW)/2;
    for(var i=0;i<9;i++){
      var f=el('div','frag',s);
      f.style.fontSize=L.fs.toFixed(2)+'px';
      f.textContent='Share it.';
      var xa=(x00+i*TW/9)/W*100, xb=(x00+(i+1)*TW/9)/W*100, sk=R()*16-8;
      f.style.clipPath='polygon('+xa.toFixed(2)+'% '+(R()*22).toFixed(0)+'%,'+xb.toFixed(2)+'% 0%,'+
        xb.toFixed(2)+'% '+(78+R()*22).toFixed(0)+'%,'+xa.toFixed(2)+'% 100%)';
      frags.push({n:f,a:(i/8-.5)*2.2+(R()*.5-.25),sp:.5+R()*.9,rot:(R()*2-1)*70,sk:sk});
    }
    return {node:s, update:function(t,p){
      var shat=seg(p,.62,1);
      setO(L.tx,smooth(seg(p,.02,.14))*(1-smooth(seg(p,.6,.7))));
      L.tx.style.textShadow='0 0 46px rgba(190,225,255,.5)';
      for(var i=0;i<L.chars.length;i++){
        var q=eOut(clamp(seg(p,.03+i*.03,.3+i*.03),0,1));
        setC(L.chars[i],TINT[i]||'#ffffff');
        setO(L.chars[i],q);
        setT(L.chars[i],'translateY('+((1-q)*18).toFixed(1)+'px)');
      }
      for(i=0;i<frags.length;i++){
        var f=frags[i], e=eOut(shat);
        setO(f.n,shat>0?smooth(seg(p,.62,.67))*(1-seg(p,.94,1)):0);
        setT(f.n,TXY+'translate('+(f.a*430*e).toFixed(0)+'px,'+((f.sp-.9)*470*e).toFixed(0)+'px) '+
          'rotate('+(f.rot*1.5*e).toFixed(1)+'deg) skewY('+(f.sk*e).toFixed(1)+'deg) scale('+lerp(1,1.9,e).toFixed(2)+')');
      }
    }};
  }

  /* =====================================================================
     19 · price
     ===================================================================== */
  function makePrice(){
    var s=el('div','scene');
    var str='Get it for $12.99/mo.';
    var wrap=el('div','line',s), tx=el('div','tx',wrap);
    tx.style.fontSize=fitPx(str,811).toFixed(2)+'px';
    var chars=letters(tx,str);
    for(var i=11;i<chars.length;i++) chars[i].style.textShadow='0 0 30px rgba(255,255,255,.6)';
    return {node:s, update:function(t,p){
      setO(tx,smooth(seg(p,.02,.14))*(1-smooth(seg(p,.9,1))));
      for(var i=0;i<chars.length;i++){
        var q=i<11?eOut(seg(p,.04,.2)):clamp(seg(p,.16+(i-11)*.028,.24+(i-11)*.028),0,1);
        setO(chars[i],q);
        setT(chars[i],'translateY('+((1-eOut(q))*12).toFixed(1)+'px)');
      }
    }};
  }

  /* =====================================================================
     20 · scrolling app picker
     ===================================================================== */
  function makeApps(){
    var s=el('div','scene');
    var APPS=[
      ['Final Cut Pro','#a24ef0','linear-gradient(160deg,#5b2ba8,#2a1050)'],
      ['Motion','#f04ad0','linear-gradient(160deg,#f07ad8,#7a1060)'],
      ['Pixelmator Pro','#e0324a','linear-gradient(160deg,#c02038,#4a0a14)'],
      ['Compressor','#f0d05a','linear-gradient(160deg,#f0c24a,#5a4210)'],
      ['Numbers','#7fd44a','linear-gradient(160deg,#7fd44a,#1f5a14)'],
      ['Keynote','#5ab4f0','linear-gradient(160deg,#5ab4f0,#12456b)'],
      ['Logic Pro','#d8dde6','linear-gradient(160deg,#d8dde6,#5a5f68)'],
      ['GarageBand','#f0863a','linear-gradient(160deg,#f0a04a,#6b3a10)']
    ];
    var rows=APPS.map(function(a){
      var d=el('div','appRow',s);
      d.innerHTML='<em style="background:'+a[2]+'"></em>'+a[0];
      d.style.color=a[1];
      d.style.fontSize='80px';
      return d;
    });
    return {node:s, update:function(t,p){
      var pos=.2+6*Math.pow(p,2.2);
      var fade=1-smooth(seg(p,.96,1));
      for(var i=0;i<rows.length;i++){
        var d=i-pos;
        var near=clamp(1-Math.abs(d),0,1);
        var sc=lerp(.86,1.42,Math.pow(near,1.5));
        rows[i].style.top='0px';
        rows[i].style.transform='translateY('+(360+d*132-48).toFixed(1)+'px) scale('+sc.toFixed(3)+')';
        setO(rows[i],clamp(1.3-Math.abs(d)*.92,0,1)*fade);
        setF(rows[i],near<.6?'brightness(.6)':'none');
      }
    }};
  }

  /* =====================================================================
     timeline
     ===================================================================== */
  var SCENES=[
    {a:0.00,  b:1.72,  s:makeWordmark()},
    {a:1.72,  b:3.42,  s:makeWall()},
    {a:3.42,  b:5.62,  s:makeLines()},
    {a:5.62,  b:6.92,  s:makeDock()},
    {a:6.92,  b:7.72,  s:makeBeatText()},
    {a:7.72,  b:9.52,  s:makeTracks()},
    {a:9.52,  b:11.42, s:makeEditVideo()},
    {a:11.42, b:13.32, s:makeMac()},
    {a:13.32, b:16.10, s:makeCanvasScene()},
    {a:16.10, b:18.02, s:makePrompt()},
    {a:18.02, b:18.56, s:makePerform()},
    {a:18.56, b:19.42, s:makeLoop()},
    {a:19.42, b:20.26, s:makeSelect()},
    {a:20.26, b:21.34, s:makeWrite()},
    {a:21.34, b:23.10, s:makeScrap()},
    {a:23.10, b:24.20, s:makeMove()},
    {a:24.20, b:24.86, s:makeUpscale()},
    {a:24.86, b:25.82, s:makeShare()},
    {a:25.82, b:27.32, s:makePrice()},
    {a:27.32, b:28.52, s:makeApps()},
    {a:28.52, b:DUR,   s:makeWordmark()}
  ];

  var active=null;
  function render(t){
    var k=Math.min((stage.clientWidth||W)/W,(stage.clientHeight||H)/H);
    comp.style.transform='scale('+k.toFixed(4)+')';
    for(var i=0;i<SCENES.length;i++){
      var sc=SCENES[i];
      if(t>=sc.a && t<sc.b){
        if(active!==sc){
          if(active) active.s.node.classList.remove('on');
          sc.s.node.classList.add('on');
          active=sc;
        }
        sc.s.update(t-sc.a, seg(t,sc.a,sc.b));
        return;
      }
    }
  }

  /* ---------- driver ---------- */
  var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var start=null, raf=0, playing=!reduce, held=false, at=0;
  function seek(t){at=((t%DUR)+DUR)%DUR;render(at);return at}
  function play(){if(playing&&raf)return;playing=true;start=performance.now()-at*1000;if(!raf)raf=requestAnimationFrame(tick)}
  function pause(){playing=false;if(raf){cancelAnimationFrame(raf);raf=0}}
  function tick(now){
    if(!playing){raf=0;return}
    raf=requestAnimationFrame(tick);
    if(start===null)start=now;
    at=((now-start)/1000)%DUR;
    render(at);
  }
  window.addEventListener('resize',function(){render(at)});
  if(reduce){ seek(29.6) } else {
    raf=requestAnimationFrame(tick);
    document.addEventListener('visibilitychange',function(){
      if(document.hidden){ if(playing){held=true;pause()} }
      else if(held){ held=false; play() }
    });
  }
  window.__DUR=DUR;
  window.__seek=function(t){pause();return seek(t)};
  window.__play=play; window.__pause=pause; window.__time=function(){return at};
})();
<\/script>
</body>
</html>
`,j=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Epilude — Footer</title>
<style>
  :root {
    --olive-400: #a9a9ac;
    --olive-500: #7a7a7d;
    --olive-950: #0c0c0d;
    --white: #fff;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body {
    background: var(--olive-950);
    color: var(--white);
    min-height: 100%;
  }
  body {
    font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }
  a { color: inherit; text-decoration: none; }
  ul { list-style: none; }
  h3 { font-size: inherit; font-weight: 400; }

  footer {
    background: var(--olive-950);
    color: var(--white);
    padding-top: 4rem;
  }
  .inner { padding: 4rem 0 2rem; }
  .wrap {
    width: 100%;
    max-width: 42rem;
    margin: 0 auto;
    padding: 0 1.5rem;
  }
  .cols {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.5rem;
    font-size: .875rem;
    line-height: 1.75rem;
  }
  .cols h3 { color: var(--white); }
  .cols ul {
    margin-top: .5rem;
    display: flex;
    flex-direction: column;
    gap: .5rem;
  }
  .cols a { color: var(--olive-400); }
  .cols a:hover { color: #d7d7d9; }

  .storm-wrap {
    margin-top: 4rem;
    user-select: none;
    -webkit-user-select: none;
  }
  .storm {
    position: relative;
    overflow: hidden;
    width: 100%;
    aspect-ratio: 8.541554959785524;
  }
  .storm canvas { display: block; width: 100%; height: 100%; }

  .legal {
    margin-top: 1.5rem;
    font-size: .875rem;
    line-height: 1.75rem;
    color: var(--olive-500);
  }
  .legal-row {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
  .legal-left {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .75rem;
    text-align: center;
  }
  .legal nav {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: .25rem 1rem;
    color: var(--olive-400);
  }
  .legal nav a:hover { color: #d7d7d9; }

  @media (min-width: 640px) {
    .legal-row {
      flex-direction: row;
      justify-content: space-between;
    }
    .legal-left {
      flex-direction: row;
      align-items: center;
      gap: 1rem;
      text-align: left;
    }
    .legal nav { justify-content: flex-start; }
  }
  @media (min-width: 768px) {
    .wrap { max-width: 48rem; }
    .cols { grid-template-columns: repeat(4, minmax(0, 1fr)); }
  }
  @media (min-width: 1024px) {
    .wrap { max-width: 80rem; padding: 0 2.5rem; }
  }
</style>
</head>
<body>
<footer id="footer">
  <div class="inner">
    <div class="wrap">
      <nav class="cols" aria-label="Footer">
        <div>
          <h3>Product</h3>
          <ul>
            <li><a href="https://app.epilude.com">Download</a></li>
            <li><a href="https://www.epilude.com/features/ai-smart-edits">AI Smart Edits</a></li>
            <li><a href="https://www.epilude.com/features/tone-match">Tone Match</a></li>
            <li><a href="https://www.epilude.com/features/vocabulary">Vocabulary</a></li>
            <li><a href="https://www.epilude.com/features/shortcuts">Shortcuts</a></li>
            <li><a href="https://www.epilude.com/features/actions">Actions</a></li>
            <li><a href="https://www.epilude.com/features/privacy">Local Mode</a></li>
            <li><a href="https://www.epilude.com/features/meetings">Meeting Notes</a></li>
          </ul>
        </div>
        <div>
          <h3>Solutions</h3>
          <ul>
            <li><a href="https://www.epilude.com/leaders">For Leaders</a></li>
            <li><a href="https://www.epilude.com/lawyers">For Lawyers</a></li>
            <li><a href="https://www.epilude.com/creators">For Content Creators</a></li>
            <li><a href="https://www.epilude.com/developers">For Developers</a></li>
            <li><a href="https://www.epilude.com/sales">For Sales</a></li>
            <li><a href="https://www.epilude.com/students">For Students</a></li>
            <li><a href="https://www.epilude.com/customer-support">For Customer Support</a></li>
          </ul>
        </div>
        <div>
          <h3>Compare</h3>
          <ul>
            <li><a href="https://www.epilude.com/best-dictation-app-for-mac">Best dictation app for Mac</a></li>
            <li><a href="https://www.epilude.com/compare/wispr-flow">Epilude vs Wispr Flow</a></li>
            <li><a href="https://www.epilude.com/compare/superwhisper">Epilude vs Superwhisper</a></li>
            <li><a href="https://www.epilude.com/compare/macwhisper">Epilude vs MacWhisper</a></li>
            <li><a href="https://www.epilude.com/compare/aqua-voice">Epilude vs Aqua Voice</a></li>
          </ul>
        </div>
        <div>
          <h3>Resources</h3>
          <ul>
            <li><a href="https://www.epilude.com/pricing">Pricing</a></li>
            <li><a href="https://www.epilude.com/news">News</a></li>
            <li><a href="https://www.epilude.com/help">Help Center</a></li>
            <li><a href="https://www.epilude.com/help/changelog">Changelog</a></li>
            <li><a href="https://www.epilude.com/trust">Trust &amp; Security</a></li>
          </ul>
        </div>
      </nav>
    </div>

    <div class="wrap storm-wrap" aria-hidden="true">
      <div class="storm" id="storm">
        <canvas id="storm-canvas"></canvas>
      </div>
    </div>

    <div class="wrap legal">
      <div class="legal-row">
        <div class="legal-left">
          <p>© 2026 Epilude. All rights reserved.</p>
          <nav aria-label="Legal">
            <a href="https://www.epilude.com/terms">Terms</a>
            <a href="https://www.epilude.com/privacy">Privacy</a>
            <a href="https://www.epilude.com/cookie-policy">Cookies</a>
            <a href="https://www.epilude.com/refund">Refund</a>
          </nav>
        </div>
      </div>
    </div>
  </div>
</footer>

<script>
(function () {
  var WORDMARK =
    '<svg width="3186" height="373" viewBox="0 0 3186 373" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<path d="M442.967 0.00610352H769.252L702.801 372.082H376.459L442.967 0.00610352ZM367.675 0.00610352H417.869L351.361 372.082H301.168L367.675 0.00610352ZM225.878 372.08L292.388 0.00708008H254.739L188.232 372.082H150.589L217.094 0.00610352H336.306L269.799 372.081L280.255 372.082H200.781L225.878 372.08ZM141.804 0.00610352H173.176L106.666 372.082H75.2949L141.804 0.00610352ZM66.2705 0.00610352H91.6074L25.1006 372.082H0L66.2705 0.00610352Z" fill="#F4F4F0"/>' +
    '<path d="M2797.67 372.078L2863.05 0H3185.69L3171.87 76.5417H2935.34L2923.11 144.047H3144.23L3130.94 220.057H2909.82L2896.54 295.536H3133.6L3120.31 372.078H2797.67Z" fill="#F4F4F0"/>' +
    '<path d="M2385.62 372.078L2451 0H2630.66C2740.69 0 2795.97 46.244 2795.97 138.732C2795.97 155.21 2794.38 172.75 2790.66 191.886C2769.39 314.14 2699.23 372.078 2570.07 372.078H2385.62ZM2484.49 295.004H2580.7C2656.18 295.004 2692.85 263.112 2706.67 186.039C2709.33 173.282 2709.86 161.056 2709.86 150.957C2709.86 99.3979 2682.22 77.0733 2619.5 77.0733H2523.29L2484.49 295.004Z" fill="#F4F4F0"/>' +
    '<path d="M2154.34 372.112C2045.37 372.112 1990.62 333.807 1990.62 243.445C1990.62 228.03 1991.68 212.084 1994.87 194.543L2028.89 0H2114.47L2079.92 197.733C2077.26 209.958 2076.2 220.589 2076.2 230.688C2076.2 280.653 2103.84 295.039 2162.31 295.039C2232.47 295.039 2268.62 271.085 2281.9 197.733L2316.45 0H2402.03L2366.95 200.39C2345.69 322.113 2274.99 372.112 2154.34 372.112Z" fill="#F4F4F0"/>' +
    '<path d="M1641.99 372.078L1707.36 0H1792.94L1740.85 295.004H1961.97L1948.68 372.078H1641.99Z" fill="#F4F4F0"/>' +
    '<path d="M1498.82 372.078L1564.2 0H1649.78L1584.4 372.078H1498.82Z" fill="#F4F4F0"/>' +
    '<path d="M1113.77 372.078L1179.15 0H1403.99C1477.87 0 1510.83 30.8293 1510.83 91.4249C1510.83 103.119 1509.77 116.407 1507.11 130.227C1492.76 209.958 1453.96 248.761 1365.72 248.761H1221.14L1199.35 372.078H1113.77ZM1234.43 172.75H1362.53C1397.08 172.75 1416.75 156.804 1422.59 123.849C1423.13 119.065 1423.66 114.813 1423.66 111.092C1423.66 87.1725 1408.77 76.0102 1379.54 76.0102H1251.44L1234.43 172.75Z" fill="#F4F4F0"/>' +
    '<path d="M746.362 372.078L811.742 0H1134.39L1120.57 76.5417H884.031L871.806 144.047H1092.93L1079.64 220.057H858.517L845.229 295.536H1082.3L1069.01 372.078H746.362Z" fill="#F4F4F0"/>' +
    "</svg>";

  var PALETTE = [[255, 255, 255], [226, 232, 240], [191, 205, 225]];
  var FORMATS = ["dot", "dot", "square"];
  var SIZE_SMALL = [1.4, 2.8];
  var SIZE_BIG = [3, 4.2];
  var BIG_CHANCE = 0.07;
  var GAP = 6;
  var SPEED = 2;
  var SEED = 1337;
  var GAMMA = 0.8;
  var DUR = 8;
  var TAU = Math.PI * 2;

  function noise(x, y, t) {
    var a = x + 0.7 * Math.sin(1.2 * y + t);
    var r = y + 0.7 * Math.cos(1.1 * x - t);
    return (Math.sin(1.3 * a + 0.6 * t) + Math.cos(1.5 * r - 0.5 * t) + Math.sin((a + r) * 0.9 + 0.3 * t)) / 3;
  }

  function snowfall(p, t, n) {
    var swirl = n.swirl ? n.swirl * noise(3 * p.nx, 3 * p.ny, 0.5 * t) : 0;
    var sway = (n.sway || 0) * Math.sin(0.8 * t + p.offset * TAU + 4 * p.ny) + swirl;
    var i = n.axis === "x" ? p.nx : p.ny;
    var l = n.axis === "x" ? p.ny : p.nx;
    var o = i * n.freq - t * n.fall + p.offset * n.freq + sway + (n.wind || 0) * l;
    var s = o - Math.floor(o);
    return s < n.trail ? 1 - s / n.trail : 0;
  }

  function squall(p, t) {
    var band = 0.35 + 0.65 * Math.pow(0.5 + 0.5 * Math.sin(3 * p.nx - 0.5 * t), 2);
    var flake = snowfall(p, t, { fall: 0.26, freq: 5, trail: 0.4, sway: 0.14, wind: 0.8 });
    return {
      a: 0.04 + 0.95 * band * Math.pow(flake, 1.8),
      p: 0.7 * p.offset
    };
  }

  function lerpRGB(a, b, t) {
    return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
  }

  function mixPalette(p) {
    var e = Math.max(0, Math.min(1, p)) * (PALETTE.length - 1);
    var r = Math.floor(e);
    var s = e - r;
    return lerpRGB(PALETTE[r], PALETTE[Math.min(PALETTE.length - 1, r + 1)], s);
  }

  var canvas = document.getElementById("storm-canvas");
  var host = document.getElementById("storm");
  var ctx = canvas.getContext("2d");
  var particles = [];
  var maskImg = null;
  var maskReady = false;
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var playing = !reduced;
  var tNow = 0;
  var t0 = performance.now();
  var raf = 0;
  var visible = true;

  function lcg(seed) {
    var e = seed >>> 0;
    return function () {
      e = (1664525 * e + 0x3c6ef35f) >>> 0;
      return e / 0xffffffff;
    };
  }

  function makeMask(w, h) {
    if (!maskImg || !maskReady || !maskImg.width || !maskImg.height) return null;
    var off = document.createElement("canvas");
    off.width = w;
    off.height = h;
    var g = off.getContext("2d");
    if (!g) return null;
    var scale = Math.min(w / maskImg.width, h / maskImg.height);
    var dw = maskImg.width * scale;
    var dh = maskImg.height * scale;
    g.drawImage(maskImg, (w - dw) / 2, (h - dh) / 2, dw, dh);
    var data;
    try { data = g.getImageData(0, 0, w, h).data; }
    catch (e) { return null; }
    return function (x, y) {
      var ix = Math.min(w - 1, Math.max(0, Math.round(x)));
      var iy = Math.min(h - 1, Math.max(0, Math.round(y)));
      var i = (iy * w + ix) * 4;
      var lum = (0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]) / 255;
      return Math.pow(lum * (data[i + 3] / 255), GAMMA);
    };
  }

  function rebuild() {
    var w = host.clientWidth;
    var h = host.clientHeight;
    if (!w || !h) return;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, Math.floor(w * dpr));
    canvas.height = Math.max(1, Math.floor(h * dpr));
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    var sample = makeMask(w, h);
    var rand = lcg(SEED);
    var cols = Math.ceil(w / GAP);
    var rows = Math.ceil(h / GAP);
    var ox = (w - (cols - 1) * GAP) / 2;
    var oy = (h - (rows - 1) * GAP) / 2;
    var cx = (cols - 1) / 2;
    var cy = (rows - 1) / 2;
    var maxd = Math.hypot(cx, cy) || 1;
    particles = [];
    for (var y = 0; y < rows; y++) {
      for (var x = 0; x < cols; x++) {
        var format = FORMATS[Math.floor(rand() * FORMATS.length)];
        var range = rand() < BIG_CHANCE ? SIZE_BIG : SIZE_SMALL;
        var size = range[0] + rand() * (range[1] - range[0]);
        var px = ox + x * GAP;
        var py = oy + y * GAP;
        particles.push({
          cx: px,
          cy: py,
          nx: cols > 1 ? x / (cols - 1) : 0.5,
          ny: rows > 1 ? y / (rows - 1) : 0.5,
          dist: Math.hypot(x - cx, y - cy) / maxd,
          format: format,
          size: size,
          phase: rand() * Math.PI * 2,
          speed: 0.6 + 2.6 * rand(),
          offset: rand(),
          mask: sample ? sample(px, py) : 1
        });
      }
    }
  }

  function drawParticle(p, t) {
    var field = squall(p, t);
    var alpha = field.a;
    var rgb = mixPalette(field.p);
    alpha = Math.max(0, Math.min(1, alpha));
    if (p.mask < 1) alpha = p.mask * (0.3 + 0.7 * alpha);
    if (alpha <= 0.005) return;
    ctx.fillStyle = "rgba(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + "," + alpha + ")";
    var hx = p.cx, hy = p.cy, d = p.size, r = d / 2;
    if (p.format === "square") ctx.fillRect(hx - r, hy - r, d, d);
    else {
      ctx.beginPath();
      ctx.arc(hx, hy, r, 0, TAU);
      ctx.fill();
    }
  }

  function render(t) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < particles.length; i++) drawParticle(particles[i], t);
  }

  function apply(t) {
    tNow = ((t % DUR) + DUR) % DUR;
    render(tNow * SPEED);
  }

  function tick(now) {
    if (playing && visible) {
      tNow = ((now - t0) / 1000) % DUR;
      render(tNow * SPEED);
    }
    raf = requestAnimationFrame(tick);
  }

  function play() {
    playing = true;
    t0 = performance.now() - tNow * 1000;
  }

  function pause() {
    playing = false;
  }

  var img = new Image();
  img.onload = function () {
    maskImg = img;
    maskReady = true;
    rebuild();
    apply(tNow);
  };
  img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(WORDMARK);

  rebuild();
  apply(0);
  raf = requestAnimationFrame(tick);

  window.addEventListener("resize", function () {
    rebuild();
    apply(tNow);
  });

  if (typeof ResizeObserver !== "undefined") {
    var lastW = host.clientWidth, lastH = host.clientHeight;
    new ResizeObserver(function () {
      if (host.clientWidth !== lastW || host.clientHeight !== lastH) {
        lastW = host.clientWidth;
        lastH = host.clientHeight;
        rebuild();
        apply(tNow);
      }
    }).observe(host);
  }

  if (typeof IntersectionObserver !== "undefined") {
    new IntersectionObserver(function (entries) {
      var on = entries[0] && entries[0].isIntersecting;
      if (on === visible) return;
      visible = !!on;
      if (visible) t0 = performance.now() - tNow * 1000;
    }, { rootMargin: "120px" }).observe(canvas);
  }

  document.addEventListener("visibilitychange", function () {
    if (!document.hidden && playing) t0 = performance.now() - tNow * 1000;
  });

  window.__DUR = DUR;
  window.__seek = function (t) { pause(); apply(t); };
  window.__play = play;
  window.__pause = pause;
  window.__time = function () { return tNow; };
})();
<\/script>
</body>
</html>
`,N=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Issue 01 — Expanse Field</title>
    
    <!-- Frameworks & Animations -->
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
</head>
<body class="bg-[#f6f5f4] text-neutral-900 antialiased selection:bg-neutral-900 selection:text-white" 
      style="font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">

    <!-- WebGL Background Context -->
    <canvas id="glcanvas" class="fixed inset-0 w-full h-full -z-10 pointer-events-none"></canvas>

    <!-- Subtle Diagonal Texture Overlay -->
    <div class="fixed inset-0 pointer-events-none -z-10" 
         style="background-image: repeating-linear-gradient(45deg, rgba(0,0,0,0.015) 0, rgba(0,0,0,0.015) 1px, transparent 1px, transparent 6px);">
    </div>

    <!-- Global Framed Grid System -->
    <div class="fixed inset-4 md:inset-6 pointer-events-none z-50 flex flex-col justify-between mix-blend-difference text-white/50"
         style="border: 1px solid rgba(255,255,255,0.15); border-image: linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(255,255,255,0.3), rgba(255,255,255,0.1)) 1;">
        
        <!-- Corner Brackets -->
        <div class="absolute -top-[1px] -left-[1px] w-5 h-5 border-t border-l border-white/60"></div>
        <div class="absolute -top-[1px] -right-[1px] w-5 h-5 border-t border-r border-white/60"></div>
        <div class="absolute -bottom-[1px] -left-[1px] w-5 h-5 border-b border-l border-white/60"></div>
        <div class="absolute -bottom-[1px] -right-[1px] w-5 h-5 border-b border-r border-white/60"></div>

        <!-- Structural Guide Lines -->
        <div class="absolute left-[33.33%] top-0 bottom-0 w-[1px] bg-white/10 hidden md:block"></div>
        <div class="absolute right-[33.33%] top-0 bottom-0 w-[1px] bg-white/10 hidden md:block"></div>
    </div>

    <!-- Document Content -->
    <main class="w-full relative z-10">

        <!-- PAGE 01: COVER -->
        <section id="cover" class="relative min-h-screen p-6 md:p-12 flex flex-col pt-16 md:pt-24 pb-12">
            
            <!-- Masthead -->
            <header class="flex justify-between items-start mb-16 md:mb-24 relative z-20 mix-blend-difference text-white">
                <div class="text-xs uppercase tracking-widest font-medium">Issue Nº 01</div>
                <div class="text-xs uppercase tracking-widest font-medium text-right leading-tight">
                    Vol. 1 <br>
                    <span class="text-white/60">Aura Asset Library</span>
                </div>
            </header>

            <!-- Cover Layout Grid -->
            <div class="flex-1 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-20 h-full items-end pb-12 md:pb-0">
                
                <!-- Left: Typography -->
                <div class="col-span-1 md:col-span-2 flex flex-col justify-end order-2 md:order-1">
                    <h1 class="text-6xl md:text-[9vw] leading-[0.8] tracking-tight font-semibold mix-blend-difference text-white uppercase" 
                        style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                        Digital<br>Artifacts
                    </h1>
                    <div class="mt-8 md:mt-12 max-w-sm mix-blend-difference text-white/70">
                        <p class="text-sm font-normal leading-relaxed">
                            Exploring the intersection of generative environments, raw computational textures, and structured grid systems to establish physical presence in the void.
                        </p>
                    </div>
                </div>

                <!-- Right: Featured Asset -->
                <div class="col-span-1 flex items-center justify-center md:justify-end order-1 md:order-2 h-full pb-8 md:pb-0">
                    <div class="relative w-full max-w-sm aspect-[4/5] p-2 bg-black/5 backdrop-blur-md"
                         style="border: 1px solid rgba(255,255,255,0.1); border-image: linear-gradient(to bottom right, rgba(255,255,255,0.4), rgba(255,255,255,0.05)) 1;">
                         <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4f5668c5-fc4a-44e0-bc5e-a664189d3c31_1600w.jpg" 
                              class="w-full h-full object-cover filter grayscale contrast-125 opacity-90 mix-blend-luminosity" 
                              alt="Cover Feature Portrait">
                         
                         <!-- Image Container Corner Details -->
                         <div class="absolute top-2 left-2 w-3 h-3 border-t border-l border-white/60 mix-blend-difference"></div>
                         <div class="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-white/60 mix-blend-difference"></div>
                    </div>
                </div>
            </div>

            <!-- Footer Barcode -->
            <div class="mt-auto flex justify-between items-end relative z-20 mix-blend-difference text-white">
                <div class="text-xs font-mono uppercase tracking-widest flex items-center gap-3">
                    <iconify-icon icon="solar:barcode-line" class="text-3xl opacity-80" stroke-width="1.5"></iconify-icon>
                    <span>978-1-2345-678-0</span>
                </div>
                <div class="text-[10px] md:text-xs uppercase tracking-widest flex items-center gap-2">
                    Scroll <iconify-icon icon="solar:arrow-down-linear" class="text-sm"></iconify-icon>
                </div>
            </div>
        </section>

        <!-- PAGE 02: ARTICLE SPREAD -->
        <section id="page-2" class="relative min-h-screen bg-[#f6f5f4] p-6 md:p-12 flex flex-col justify-center shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
             <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 h-full items-center">
                
                <!-- Left Figure -->
                <div id="figure-img" class="md:col-span-4 flex flex-col justify-between h-full py-12 md:py-24">
                    <div class="text-[10px] uppercase tracking-widest font-medium text-neutral-400 mb-6 border-b border-neutral-300 pb-2 inline-block max-w-fit">
                        [ Fig. 01 ]
                    </div>
                    <div class="relative overflow-hidden aspect-[3/4]">
                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/724142aa-44a6-48d3-9cf3-761e00d05b78_1600w.jpg" 
                             class="w-full h-full object-cover filter grayscale contrast-125" 
                             alt="Deconstructed Pyramid Architecture">
                    </div>
                    <div class="text-[10px] uppercase tracking-widest mt-6 text-neutral-500 flex justify-between">
                        <span>Architecture</span>
                        <span>001</span>
                    </div>
                </div>

                <!-- Right Editorial Text -->
                <div class="md:col-span-8 md:pl-12 pt-8 md:pt-0">
                    <div class="text-xs uppercase tracking-widest font-medium text-neutral-400 mb-8 flex items-center gap-2">
                        <iconify-icon icon="solar:document-text-linear" class="text-base"></iconify-icon> Index Introduction
                    </div>
                    
                    <!-- GSAP Stagger Reveal Target -->
                    <div id="stagger-text" class="text-3xl md:text-5xl lg:text-[3.5vw] leading-[1.05] tracking-tight font-medium text-neutral-900">
                        The evolution of surface interfaces demands a departure from sterile environments. We look towards raw noise and structured grids to ground logic in physical realism.
                    </div>

                    <div class="mt-12 md:mt-20 flex flex-col md:flex-row gap-8 md:gap-12 text-sm font-normal text-neutral-600 leading-relaxed border-t border-neutral-200 pt-8">
                        <p class="flex-1">
                            By manipulating fragments of light through mathematical shaders, we simulate the imperfections of analog film. The resulting grain breathes life into rigid columns, oscillating to mimic a natural rhythm within strict constraints.
                        </p>
                        <p class="flex-1">
                            This intersection of organic distortion and rigid geometry creates a meditative atmosphere. It is not merely a background, but a dynamic environment that continuously responds to time and structure.
                        </p>
                    </div>
                </div>
             </div>
        </section>

    </main>

    <!-- Logic & Shaders -->
    <script>
        document.addEventListener("DOMContentLoaded", () => {
            
            // -----------------------------------------------------
            // 1. WebGL Background Setup (Three.js)
            // -----------------------------------------------------
            const initWebGL = () => {
                const canvas = document.getElementById('glcanvas');
                const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
                renderer.setSize(window.innerWidth, window.innerHeight);
                renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

                const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
                const scene = new THREE.Scene();
                const geometry = new THREE.PlaneGeometry(2, 2);

                const uniforms = {
                    u_time: { value: 0.0 },
                    u_resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
                };

                const material = new THREE.ShaderMaterial({
                    uniforms: uniforms,
                    vertexShader: \`
                        void main() {
                            gl_Position = vec4(position, 1.0);
                        }
                    \`,
                    fragmentShader: \`
                        uniform vec2 u_resolution;
                        uniform float u_time;

                        float random(vec2 st) {
                            return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
                        }

                        void main() {
                            vec2 st = gl_FragCoord.xy / u_resolution.xy;
                            float numBars = 11.0;
                            float barIndex = floor(st.x * numBars);
                            float t = barIndex / (numBars - 1.0);

                            // Breathing pulse animation
                            float anim = sin(u_time * 0.5 + t * 3.0) * 0.025;

                            // Curve for horizon line
                            float targetHeight = 0.15 + pow(t, 1.3) * 0.5 + anim;

                            // Color gradient: Dark base -> Blue/Pink mid -> Cutoff
                            vec3 colorBase = vec3(0.04, 0.04, 0.06);
                            vec3 colorMid = mix(vec3(0.1, 0.3, 0.8), vec3(0.8, 0.2, 0.5), st.x);
                            vec3 color = mix(colorBase, colorMid, smoothstep(0.1, 0.7, st.y));

                            // Stepped horizon cutoff matching body background
                            if (st.y > targetHeight) {
                                gl_FragColor = vec4(0.965, 0.961, 0.957, 1.0); // #f6f5f4
                                return;
                            }

                            // High-frequency film grain
                            float noise = random(st * (u_time * 0.1)) * 0.15;
                            gl_FragColor = vec4(color + noise, 1.0);
                        }
                    \`,
                    transparent: true
                });

                const mesh = new THREE.Mesh(geometry, material);
                scene.add(mesh);

                const animate = (time) => {
                    uniforms.u_time.value = time * 0.001;
                    renderer.render(scene, camera);
                    requestAnimationFrame(animate);
                };
                requestAnimationFrame(animate);

                window.addEventListener('resize', () => {
                    renderer.setSize(window.innerWidth, window.innerHeight);
                    uniforms.u_resolution.value.set(window.innerWidth, window.innerHeight);
                });
            };

            // -----------------------------------------------------
            // 2. GSAP Interactions & Masked Text Reveal
            // -----------------------------------------------------
            const initGSAP = () => {
                gsap.registerPlugin(ScrollTrigger);

                // Entry Animation for Cover
                const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
                tl.fromTo("#cover h1", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 2, delay: 0.2 })
                  .fromTo("#cover p", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5 }, "-=1.5")
                  .fromTo("#cover img", { scale: 1.1, filter: "blur(10px)", opacity: 0 }, { scale: 1, filter: "blur(0px)", opacity: 0.9, duration: 2.5 }, "-=1.8");

                // Text Splitter Utility for Masked Reveal
                const textElement = document.getElementById('stagger-text');
                const words = textElement.innerText.trim().split(' ');
                textElement.innerHTML = '';

                words.forEach(word => {
                    const wordWrap = document.createElement('span');
                    // Style inline to avoid external CSS
                    wordWrap.style.display = 'inline-block';
                    wordWrap.style.overflow = 'hidden';
                    wordWrap.style.marginRight = '0.2em';
                    wordWrap.style.paddingBottom = '0.1em'; // Prevent clipping bottom of letters
                    wordWrap.style.verticalAlign = 'top';

                    const innerSpan = document.createElement('span');
                    innerSpan.innerText = word;
                    innerSpan.style.display = 'inline-block';
                    innerSpan.classList.add('reveal-word');

                    wordWrap.appendChild(innerSpan);
                    textElement.appendChild(wordWrap);
                });

                // ScrollTrigger: Masked Stagger Reveal
                gsap.fromTo('.reveal-word', 
                    { y: '110%', rotationZ: 4 }, 
                    {
                        y: '0%',
                        rotationZ: 0,
                        duration: 1.2,
                        ease: "power4.out",
                        stagger: 0.03,
                        scrollTrigger: {
                            trigger: '#stagger-text',
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );

                // Subtle Image Parallax on Page 2
                gsap.fromTo('#figure-img img', 
                    { yPercent: -15, scale: 1.1 },
                    {
                        yPercent: 15,
                        scale: 1,
                        ease: "none",
                        scrollTrigger: {
                            trigger: '#page-2',
                            start: "top bottom",
                            end: "bottom top",
                            scrub: true
                        }
                    }
                );
            };

            // Initialize
            initWebGL();
            initGSAP();
        });
    <\/script>
</body>
</html>`,U=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Component Preview</title>
  <script src="https://cdn.tailwindcss.com"><\/script>
  <style>
    html, body {
      height: 100%;
      margin: 0;
      padding: 0;
    }
    body {
      height: 100%;
      overflow: auto;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #ffffff;
      color: #000000;
    }
    .component-wrapper {
      width: 100%;
      height: 100%;
      padding: 0;
      box-sizing: border-box;
      overflow: auto;
    }
  </style>
</head>
<body>
  <div class="component-wrapper">
    <html><head></head><body><button type="button" class="button">
  <div class="points_wrapper">
    <i class="point"></i>
    <i class="point"></i>
    <i class="point"></i>
    <i class="point"></i>
    <i class="point"></i>
    <i class="point"></i>
    <i class="point"></i>
    <i class="point"></i>
    <i class="point"></i>
    <i class="point"></i>
  </div>

  <span class="inner">
    Sign Up
    <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
      <path d="M5 12h14"></path>
      <path d="m12 5 7 7-7 7"></path>
    </svg>
  </span>
  <style>
    .button {
      cursor: pointer;
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      transition: all 0.25s ease;
      background: radial-gradient(65.28% 65.28% at 50% 100%,
          rgba(34, 211, 238, 0.8) 0%,
          rgba(34, 211, 238, 0) 100%),
        linear-gradient(0deg, #2563eb, #2563eb);
      border-radius: 0.75rem;
      border: none;
      outline: none;
      padding: 12px 18px;
      min-height: 48px;
      min-width: 102px;
    }
  
    .button::before,
    .button::after {
      content: "";
      position: absolute;
      transition: all 0.5s ease-in-out;
      z-index: 0;
    }
  
    .button::before {
      inset: 1px;
      background: linear-gradient(177.95deg,
          rgba(255, 255, 255, 0.19) 0%,
          rgba(255, 255, 255, 0) 100%);
      border-radius: calc(0.75rem - 1px);
    }
  
    .button::after {
      inset: 2px;
      background: radial-gradient(65.28% 65.28% at 50% 100%,
          rgba(34, 211, 238, 0.8) 0%,
          rgba(34, 211, 238, 0) 100%),
        linear-gradient(0deg, #2563eb, #2563eb);
      border-radius: calc(0.75rem - 2px);
    }
  
    .button:active {
      transform: scale(0.95);
    }
  
    .points_wrapper {
      overflow: hidden;
      width: 100%;
      height: 100%;
      pointer-events: none;
      position: absolute;
      z-index: 1;
    }
  
    .points_wrapper .point {
      bottom: -10px;
      position: absolute;
      animation: floating-points infinite ease-in-out;
      pointer-events: none;
      width: 2px;
      height: 2px;
      background-color: #fff;
      border-radius: 9999px;
    }
  
    @keyframes floating-points {
      0% {
        transform: translateY(0);
      }
  
      85% {
        opacity: 0;
      }
  
      100% {
        transform: translateY(-55px);
        opacity: 0;
      }
    }
  
    .points_wrapper .point:nth-child(1) {
      left: 10%;
      opacity: 1;
      animation-duration: 2.35s;
      animation-delay: 0.2s;
    }
  
    .points_wrapper .point:nth-child(2) {
      left: 30%;
      opacity: 0.7;
      animation-duration: 2.5s;
      animation-delay: 0.5s;
    }
  
    .points_wrapper .point:nth-child(3) {
      left: 25%;
      opacity: 0.8;
      animation-duration: 2.2s;
      animation-delay: 0.1s;
    }
  
    .points_wrapper .point:nth-child(4) {
      left: 44%;
      opacity: 0.6;
      animation-duration: 2.05s;
    }
  
    .points_wrapper .point:nth-child(5) {
      left: 50%;
      opacity: 1;
      animation-duration: 1.9s;
    }
  
    .points_wrapper .point:nth-child(6) {
      left: 75%;
      opacity: 0.5;
      animation-duration: 1.5s;
      animation-delay: 1.5s;
    }
  
    .points_wrapper .point:nth-child(7) {
      left: 88%;
      opacity: 0.9;
      animation-duration: 2.2s;
      animation-delay: 0.2s;
    }
  
    .points_wrapper .point:nth-child(8) {
      left: 58%;
      opacity: 0.8;
      animation-duration: 2.25s;
      animation-delay: 0.2s;
    }
  
    .points_wrapper .point:nth-child(9) {
      left: 98%;
      opacity: 0.6;
      animation-duration: 2.6s;
      animation-delay: 0.1s;
    }
  
    .points_wrapper .point:nth-child(10) {
      left: 65%;
      opacity: 1;
      animation-duration: 2.5s;
      animation-delay: 0.2s;
    }
  
    .inner {
      z-index: 2;
      gap: 6px;
      position: relative;
      width: 100%;
      color: white;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      font-weight: 500;
      line-height: 1.5;
      transition: color 0.2s ease-in-out;
    }
  
    .inner svg.icon {
      width: 18px;
      height: 18px;
      transition: transform 0.3s ease;
      stroke: white;
      fill: none;
    }
  
    .button:hover svg.icon {
      transform: translateX(2px);
    }
  
    .button:hover svg.icon path {
      animation: dash 0.8s linear forwards;
    }
  
    @keyframes dash {
      0% {
        stroke-dasharray: 0, 20;
        stroke-dashoffset: 0;
      }
  
      50% {
        stroke-dasharray: 10, 10;
        stroke-dashoffset: -5;
      }
  
      100% {
        stroke-dasharray: 20, 0;
        stroke-dashoffset: -10;
      }
    }
  </style>
</button></body></html>
  </div>
  
    <script>
      (function() {
        function checkAndCenter() {
          // Use double requestAnimationFrame to ensure DOM is fully painted and layout is stable
          requestAnimationFrame(function() {
            requestAnimationFrame(function() {
              const wrapper = document.querySelector('.component-wrapper');
              if (!wrapper) return;
              
              // Get all child elements
              const children = Array.from(wrapper.children);
              if (children.length === 0) return;
              
              // Temporarily override wrapper styles to shrink-wrap for measurement
              // Set inline styles to shrink-wrap (inline styles override CSS)
              wrapper.style.display = 'inline-block';
              wrapper.style.width = 'auto';
              wrapper.style.height = 'auto';
              wrapper.style.overflow = 'visible';
              wrapper.style.boxSizing = 'content-box';
              
              // Force multiple reflows to ensure styles are fully applied
              void wrapper.offsetHeight;
              void wrapper.offsetWidth;
              void wrapper.offsetHeight;
              
              // Measure the wrapper's content size
              const contentWidth = wrapper.offsetWidth;
              const contentHeight = wrapper.offsetHeight;
              
              // Restore original styles by removing inline styles we added
              wrapper.style.removeProperty('display');
              wrapper.style.removeProperty('width');
              wrapper.style.removeProperty('height');
              wrapper.style.removeProperty('overflow');
              wrapper.style.removeProperty('box-sizing');
              
              // If content is less than 500x500, center it
              if (contentWidth > 0 && contentHeight > 0 && contentWidth < 500 && contentHeight < 500) {
                wrapper.style.display = 'flex';
                wrapper.style.alignItems = 'center';
                wrapper.style.justifyContent = 'center';
              }
            });
          });
        }
        
        // Check immediately and after delays to ensure content is rendered and styled
        function runChecks() {
          checkAndCenter();
          setTimeout(checkAndCenter, 50);
          setTimeout(checkAndCenter, 150);
          setTimeout(checkAndCenter, 300);
          setTimeout(checkAndCenter, 500);
          setTimeout(checkAndCenter, 1000);
        }
        
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', runChecks);
        } else {
          runChecks();
        }
        
        // Also check when images or other resources load
        window.addEventListener('load', () => {
          setTimeout(checkAndCenter, 100);
          setTimeout(checkAndCenter, 300);
        });
        
        // Use ResizeObserver to detect size changes
        if (window.ResizeObserver) {
          setTimeout(() => {
            const wrapper = document.querySelector('.component-wrapper');
            if (wrapper) {
              const observer = new ResizeObserver(() => {
                setTimeout(checkAndCenter, 50);
              });
              observer.observe(wrapper);
            }
          }, 500);
        }
      })();
    <\/script>
  
</body>
</html>
`,Y=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>New Grainient Collection Added — motion</title>
<style>
  html,body{margin:0;height:100%;background:#000;overflow:hidden}
  body{-webkit-font-smoothing:antialiased}
  canvas{display:block;width:100vw;height:100vh}
</style>
</head>
<body>
<canvas id="stage"></canvas>
<script>
(function(){
'use strict';

/* ------------------------------------------------------------------ *
 * Design frame: 2962 x 2160.  Every length below is in that space.
 * ------------------------------------------------------------------ */
var DW = 2962, DH = 2160, DASP = DW / DH;

var RING = {
  cx: 1484, cy: 1108,   /* projected ring centre                        */
  a: 712,               /* projected semi-major axis (px)               */
  ratio: 0.492,         /* semi-minor / semi-major -> plane tilt 60.5deg */
  axis: 25.5,           /* screen angle of the major axis (deg, y down)  */
  n: 12,                /* tiles                                         */
  tile: 346,            /* tile side in ring units (R = a)               */
  radius: 0.22,         /* corner radius as a fraction of the side       */
  dist: 13,             /* camera distance in ring radii                 */
  phase: 93             /* psi of tile 0 at t = 0 (deg)                  */
};

var DUR = 15.015;       /* one full revolution = a seamless loop */

var HEAD = [
  { s:'NEW GRAINIENT',    top:930,  w:1370, fill:'#d0d0d0' },
  { s:'COLLECTION ADDED', top:1114, w:1775, fill:'#ffffff' }
];
var CAP = 142;          /* headline cap height */
var SMALL = 22;         /* small-label cap height */

var SANS = '"Helvetica Neue",Helvetica,"Inter",Arial,system-ui,sans-serif';

/* ------------------------------------------------------------------ *
 * Deterministic noise
 * ------------------------------------------------------------------ */
function rng(seed){
  var s = seed >>> 0;
  return function(){
    s ^= s << 13; s >>>= 0; s ^= s >>> 17; s ^= s << 5; s >>>= 0;
    return s / 4294967296;
  };
}

function mkc(w,h){
  var c = document.createElement('canvas');
  c.width = w; c.height = h;
  return c;
}

/* ------------------------------------------------------------------ *
 * Tile artwork — eleven grainy gradient "wallpapers"
 * ------------------------------------------------------------------ */
var TS = 512;                       /* texture resolution */
var grainTile = (function(){
  var c = mkc(160,160), x = c.getContext('2d'), d = x.createImageData(160,160), r = rng(0x51F3);
  for (var i = 0; i < d.data.length; i += 4){
    var v = 128 + (r() - 0.5) * 116;
    d.data[i] = d.data[i+1] = d.data[i+2] = v;
    d.data[i+3] = 255;
  }
  x.putImageData(d,0,0);
  return c;
})();

function lin(x,x0,y0,x1,y1,stops){
  var g = x.createLinearGradient(x0*TS,y0*TS,x1*TS,y1*TS);
  for (var i=0;i<stops.length;i++) g.addColorStop(stops[i][0],stops[i][1]);
  return g;
}
function rad(x,cx,cy,r,stops,r0){
  var g = x.createRadialGradient(cx*TS,cy*TS,(r0||0)*TS,cx*TS,cy*TS,r*TS);
  for (var i=0;i<stops.length;i++) g.addColorStop(stops[i][0],stops[i][1]);
  return g;
}
function fill(x,style){ x.fillStyle = style; x.fillRect(0,0,TS,TS); }

/* soft blurred stroke: draw off-canvas and keep only its shadow */
function band(x,pts,color,width,blur,passes){
  x.save();
  x.translate(-2*TS,0);
  x.shadowOffsetX = 2*TS; x.shadowBlur = blur*TS; x.shadowColor = color;
  x.strokeStyle = color; x.lineWidth = width*TS; x.lineCap='round'; x.lineJoin='round';
  x.beginPath();
  x.moveTo(pts[0][0]*TS,pts[0][1]*TS);
  for (var i=1;i<pts.length-1;i+=2){
    x.quadraticCurveTo(pts[i][0]*TS,pts[i][1]*TS,pts[i+1][0]*TS,pts[i+1][1]*TS);
  }
  for (var p=0;p<(passes||1);p++) x.stroke();
  x.restore();
}
function glow(x,cx,cy,r,color,mode){
  x.save();
  x.globalCompositeOperation = mode || 'lighter';
  x.fillStyle = rad(x,cx,cy,r,[[0,color],[1,'rgba(0,0,0,0)']]);
  x.fillRect(0,0,TS,TS);
  x.restore();
}

/* a wavy spine across the tile, used for silk bands and chrome folds */
function spine(y0,amp,ph,tilt){
  var p = [], i, u;
  for (i=0;i<5;i++){ u = -0.12 + i*0.31; p.push([u, y0 + amp*Math.sin(ph + u*4.2) + tilt*u]); }
  return p;
}
/* one wavy edge across the tile */
function wavy(x,y0,ph,amp,freq,tilt){
  var i,u,y;
  x.beginPath();
  for (i=0;i<=10;i++){
    u = -0.12 + i*0.124; y = y0 + amp*Math.sin(ph + u*freq) + (tilt||0)*u;
    if (i===0) x.moveTo(u*TS,y*TS); else x.lineTo(u*TS,y*TS);
  }
}
function wavyStroke(x,y0,ph,amp,freq,tilt,color,w,blur){
  x.save();
  x.translate(-2*TS,0);
  x.shadowOffsetX = 2*TS; x.shadowBlur = blur*TS; x.shadowColor = color;
  x.strokeStyle = color; x.lineWidth = w*TS; x.lineCap = 'round';
  wavy(x,y0,ph,amp,freq,tilt); x.stroke(); x.stroke();
  x.restore();
}
/* closed band between two wavy edges */
function bandPath(x,y0,h,ph,amp,freq,tilt){
  var i,u;
  x.beginPath();
  for (i=0;i<=10;i++){
    u = -0.12 + i*0.124;
    x.lineTo(u*TS, (y0 + amp*Math.sin(ph+u*freq) + tilt*u)*TS);
  }
  for (i=10;i>=0;i--){
    u = -0.12 + i*0.124;
    x.lineTo(u*TS, (y0 + h + amp*0.62*Math.sin(ph+1.9+u*freq*0.86) + tilt*u)*TS);
  }
  x.closePath();
}
/* folded liquid-chrome sheet: dark body, hot crest, iridescent underside */
function chrome(x,y0,h,ph,amp,freq,tilt,hot){
  x.save();
  x.translate(-2*TS,0);
  x.shadowOffsetX = 2*TS; x.shadowBlur = 0.06*TS; x.shadowColor = 'rgba(132,12,0,0.9)';
  x.fillStyle = '#000';
  bandPath(x,y0-0.018,h+0.036,ph,amp,freq,tilt); x.fill(); x.fill();
  x.restore();

  x.save();
  bandPath(x,y0,h,ph,amp,freq,tilt); x.clip();
  var g = x.createLinearGradient(0,(y0-0.03)*TS,0,(y0+h+0.03)*TS);
  g.addColorStop(0,   'rgba(8,0,2,1)');
  g.addColorStop(0.12,'rgba(58,2,6,1)');
  g.addColorStop(0.3, 'rgba(146,10,8,1)');
  g.addColorStop(0.43,'rgba(220,42,16,1)');
  g.addColorStop(0.49, hot || 'rgba(255,206,132,1)');
  g.addColorStop(0.56,'rgba(206,28,12,1)');
  g.addColorStop(0.72,'rgba(90,4,6,1)');
  g.addColorStop(0.88,'rgba(26,0,4,1)');
  g.addColorStop(1,   'rgba(5,0,2,1)');
  x.fillStyle = g; x.fillRect(0,0,TS,TS);
  x.restore();

  wavyStroke(x,y0+0.004,ph,amp,freq,tilt,'rgba(255,238,214,0.55)',0.005,0.004);
  wavyStroke(x,y0+h-0.006,ph+1.9,amp*0.62,freq*0.86,tilt,'rgba(40,220,200,0.42)',0.008,0.009);
  wavyStroke(x,y0+h+0.012,ph+1.9,amp*0.62,freq*0.86,tilt,'rgba(170,230,80,0.28)',0.006,0.008);
}
/* sink one side of the tile back into shadow so the mass reads as a fold, not a ribbon */
function shade(x,x0,x1,strength){
  x.save();
  var g = x.createLinearGradient(x0*TS,0,x1*TS,0);
  g.addColorStop(0,'rgba(0,0,0,0)');
  g.addColorStop(0.55,'rgba(0,0,0,'+(strength*0.7).toFixed(2)+')');
  g.addColorStop(1,'rgba(0,0,0,'+strength.toFixed(2)+')');
  x.fillStyle = g; x.fillRect(0,0,TS,TS);
  x.restore();
}

var ART = [
/* 0 — violet field with a dark torus punched through it */
function(x){
  fill(x, rad(x,0.5,0.48,0.82,[
    [0,'#020105'],[0.3,'#030106'],[0.37,'#1d0a48'],[0.46,'#4f2c94'],
    [0.54,'#38167e'],[0.66,'#22084e'],[0.86,'#0a0218'],[1,'#04010a']]));
  glow(x,0.3,0.24,0.4,'rgba(96,66,180,0.4)');
  glow(x,0.76,0.8,0.3,'rgba(52,18,110,0.35)');
},
/* 1 — white silk, magenta + orange flow */
function(x){
  fill(x,'#fbf9fb');
  band(x,spine(0.52,0.09,0.6,-0.18),'rgba(236,44,140,0.92)',0.19,0.055,2);
  band(x,spine(0.66,0.07,2.2,-0.14),'rgba(255,96,26,0.9)',0.16,0.05,2);
  band(x,spine(0.4,0.06,3.4,-0.1),'rgba(70,120,255,0.55)',0.09,0.05,1);
  band(x,spine(0.58,0.08,1.2,-0.16),'rgba(255,255,255,0.9)',0.05,0.03,2);
  band(x,spine(0.86,0.05,0.2,-0.05),'rgba(150,40,200,0.5)',0.1,0.06,1);
  glow(x,0.22,0.14,0.46,'rgba(255,255,255,0.85)');
},
/* 2 — deep blue, near-black in the far corner */
function(x){
  fill(x, lin(x,0.98,0,0.06,1,[
    [0,'#01020e'],[0.3,'#03082e'],[0.56,'#0820c4'],[0.76,'#1a4dff'],[0.95,'#7ea8ff'],[1,'#b6ccff']]));
  glow(x,0.2,0.86,0.3,'rgba(176,206,255,0.8)');
  glow(x,0.06,0.98,0.22,'rgba(226,120,220,0.55)');
  glow(x,0.92,0.06,0.44,'rgba(0,0,8,0.75)','source-over');
},
/* 3 — pale blue horizon crossed by a coral band */
function(x){
  fill(x, lin(x,0.08,0,0,1,[
    [0,'#9dbccd'],[0.14,'#5b87ad'],[0.26,'#245693'],[0.36,'#7793a8'],
    [0.45,'#e2523a'],[0.52,'#e07a5e'],[0.58,'#82aec8'],[0.68,'#2467a8'],
    [0.8,'#0e3970'],[0.92,'#081c40'],[1,'#051026']]));
  band(x,spine(0.42,0.02,1.0,0.03),'rgba(240,140,105,0.45)',0.05,0.03,1);
  band(x,spine(0.63,0.02,2.4,-0.03),'rgba(150,200,235,0.4)',0.05,0.03,1);
},
/* 4 — navy rising into violet-blue */
function(x){
  fill(x, lin(x,0.88,0.04,0.14,0.96,[
    [0,'#010103'],[0.34,'#030316'],[0.58,'#0d066a'],[0.78,'#2a10b8'],[0.93,'#5a38e0'],[1,'#8464f4']]));
  glow(x,0.14,0.92,0.3,'rgba(110,86,210,0.55)');
  glow(x,0.9,0.08,0.42,'rgba(0,0,4,0.75)','source-over');
},
/* 5 — nearly black, a dim red-brown smear */
function(x){
  fill(x,'#020104');
  band(x,spine(0.46,0.07,1.4,-0.1),'rgba(88,30,18,0.7)',0.24,0.13,2);
  band(x,spine(0.44,0.07,1.4,-0.1),'rgba(168,64,36,0.45)',0.08,0.07,1);
  glow(x,0.16,0.2,0.32,'rgba(20,30,64,0.35)');
  glow(x,0.9,0.88,0.22,'rgba(70,64,110,0.3)');
},
/* 6 — pale silk, lavender + amber flow */
function(x){
  fill(x,'#e3dcec');
  band(x,spine(0.42,0.1,2.6,0.16),'rgba(132,58,220,0.9)',0.18,0.055,2);
  band(x,spine(0.6,0.09,1.1,0.2),'rgba(240,104,20,0.92)',0.16,0.05,2);
  band(x,spine(0.5,0.09,2.0,0.18),'rgba(245,40,140,0.65)',0.1,0.045,1);
  band(x,spine(0.55,0.09,1.6,0.18),'rgba(255,255,255,0.8)',0.04,0.03,2);
  glow(x,0.82,0.94,0.36,'rgba(255,255,255,0.7)');
  glow(x,0.08,0.08,0.26,'rgba(60,40,110,0.4)','source-over');
},
/* 7 — amber corner, red chrome fold with cyan fringe */
function(x){
  fill(x,'#12030a');
  glow(x,0.02,0.04,0.42,'rgba(255,142,36,0.85)');
  glow(x,0.5,0.5,0.62,'rgba(178,26,14,0.8)');
  chrome(x,0.18,0.58,1.1,0.07,4.2,-0.1,'rgba(255,216,158,1)');
  shade(x,0.55,1.2,0.45);
  glow(x,0.94,0.94,0.3,'rgba(60,14,96,0.45)');
},
/* 8 — red chrome, cyan and lime fringes, purple shadow */
function(x){
  fill(x,'#040103');
  glow(x,0.4,0.46,0.5,'rgba(48,14,10,0.8)');
  chrome(x,0.3,0.44,2.4,0.06,4.8,0.1,'rgba(255,190,110,1)');
  shade(x,0.3,1.15,0.72);
  band(x,spine(0.9,0.05,0.4,0.1),'rgba(70,16,110,0.45)',0.12,0.08,1);
},
/* 9 — dark navy above, red chrome band below */
function(x){
  fill(x, lin(x,0.4,0,0.6,1,[[0,'#03040e'],[0.42,'#060a22'],[0.72,'#070412'],[1,'#030106']]));
  glow(x,0.28,0.14,0.42,'rgba(18,32,84,0.55)');
  chrome(x,0.6,0.3,0.9,0.05,3.8,-0.08,'rgba(255,198,120,1)');
  shade(x,0.3,1.1,0.8);
},
/* 10 — chrome fold above, blue-pink streaks over a pale plate */
function(x){
  fill(x,'#050208');
  chrome(x,0.02,0.34,2.0,0.045,4.4,-0.07,'rgba(255,206,132,1)');
  shade(x,0.45,1.1,0.7);
  x.save();
  x.beginPath(); x.moveTo(0,TS*0.72); x.lineTo(TS,TS*0.56); x.lineTo(TS,TS); x.lineTo(0,TS); x.closePath();
  x.clip();
  fill(x, lin(x,0,0.5,0.4,1,[[0,'#cfd6dc'],[0.6,'#e8eaee'],[1,'#f4f5f7']]));
  band(x,spine(0.7,0.03,1.0,-0.1),'rgba(245,44,96,0.8)',0.055,0.03,2);
  band(x,spine(0.76,0.03,1.6,-0.1),'rgba(30,146,245,0.75)',0.045,0.026,2);
  band(x,spine(0.82,0.03,2.2,-0.08),'rgba(245,130,54,0.5)',0.035,0.026,1);
  x.restore();
},
/* 11 — pale plate lit by streaks of pink light */
function(x){
  fill(x,'#08050a');
  var i;
  for (i=0;i<9;i++){
    var y0 = 0.06 + i*0.045, a = 0.8 - i*0.06;
    band(x,spine(y0,0.02,0.4+i*0.5,-0.2),
         'rgba('+(250-i*3)+','+(30+i*15)+','+(80+i*5)+','+a.toFixed(2)+')',0.032,0.018,2);
  }
  band(x,spine(0.28,0.02,1.2,-0.18),'rgba(255,120,72,0.55)',0.05,0.035,1);
  band(x,spine(0.14,0.02,2.4,-0.2),'rgba(120,190,255,0.4)',0.03,0.02,1);
  x.save();
  x.beginPath(); x.moveTo(0,TS*0.72); x.lineTo(TS,TS*0.4); x.lineTo(TS,TS); x.lineTo(0,TS); x.closePath();
  x.clip();
  fill(x, lin(x,0.1,0.4,0.6,1,[[0,'#c6c7cd'],[0.5,'#e2e2e6'],[1,'#f2f2f4']]));
  x.restore();
}
];

function roundRectPath(x,w,h,r){
  x.beginPath();
  x.moveTo(-w/2+r,-h/2);
  x.lineTo(w/2-r,-h/2); x.quadraticCurveTo(w/2,-h/2,w/2,-h/2+r);
  x.lineTo(w/2,h/2-r);  x.quadraticCurveTo(w/2,h/2,w/2-r,h/2);
  x.lineTo(-w/2+r,h/2); x.quadraticCurveTo(-w/2,h/2,-w/2,h/2-r);
  x.lineTo(-w/2,-h/2+r);x.quadraticCurveTo(-w/2,-h/2,-w/2+r,-h/2);
  x.closePath();
}

function buildTextures(){
  var front = [], back = [];
  for (var i=0;i<ART.length;i++){
    var c = mkc(TS,TS), x = c.getContext('2d');
    ART[i](x);
    /* film grain */
    x.save();
    x.globalCompositeOperation = 'overlay';
    x.globalAlpha = 0.15;
    var p = x.createPattern(grainTile,'repeat');
    x.fillStyle = p; x.fillRect(0,0,TS,TS);
    x.restore();
    front.push(c);

    /* reverse side: darker and washed out */
    var d = mkc(TS,TS), y = d.getContext('2d');
    y.drawImage(c,0,0);
    y.globalCompositeOperation = 'saturation';
    y.fillStyle = 'rgba(128,128,128,0.2)'; y.fillRect(0,0,TS,TS);
    y.globalCompositeOperation = 'multiply';
    y.fillStyle = 'rgba(6,8,18,0.75)'; y.fillRect(0,0,TS,TS);
    back.push(d);
  }
  return { front: front, back: back };
}
var TEX = buildTextures();

/* ------------------------------------------------------------------ *
 * Ring geometry.  u / v span the ring plane; z points at the viewer.
 * ------------------------------------------------------------------ */
var ax = RING.axis * Math.PI/180, cf = RING.ratio, sf = Math.sqrt(1-cf*cf);
var U = [Math.cos(ax), Math.sin(ax), 0];
var V = [-Math.sin(ax)*cf, Math.cos(ax)*cf, sf];
var AXIS = [                                    /* U x V — the ring's own axis */
  U[1]*V[2]-U[2]*V[1],
  U[2]*V[0]-U[0]*V[2],
  U[0]*V[1]-U[1]*V[0]
];

/* ------------------------------------------------------------------ *
 * Canvas + layout
 * ------------------------------------------------------------------ */
var cv = document.getElementById('stage'), ctx = cv.getContext('2d');
var W = 0, H = 0, K = 1, OX = 0, OY = 0, headLayer = null, labelLayer = null;

function d2sx(x){ return OX + x*K; }
function d2sy(y){ return OY + y*K; }

/* draw text whose inked box matches a target: capHeight and (optional) width */
function fitText(x,str,font,weight,cap,cx,capTop,targetW,color,align){
  var probe = 100;
  x.font = weight+' '+probe+'px '+font;
  var m = x.measureText('H');
  var capUnit = (m.actualBoundingBoxAscent||71) / probe;
  var size = cap / capUnit;
  x.font = weight+' '+size+'px '+font;
  var mm = x.measureText(str);
  var inkW = (mm.actualBoundingBoxRight||mm.width) + (mm.actualBoundingBoxLeft||0);
  var sx = targetW ? targetW / inkW : 1;
  x.save();
  x.fillStyle = color;
  x.textBaseline = 'alphabetic';
  x.translate(cx, capTop + cap);
  x.scale(sx,1);
  x.textAlign = align || 'center';
  var left = (mm.actualBoundingBoxLeft||0);
  x.fillText(str, align === 'left' ? left : 0, 0);
  x.restore();
  return inkW*sx;
}

function buildHead(){
  headLayer = mkc(Math.max(1,W), Math.max(1,H));
  var x = headLayer.getContext('2d');
  for (var i=0;i<HEAD.length;i++){
    var h = HEAD[i];
    fitText(x, h.s, SANS, '700', CAP*K, d2sx(1481), d2sy(h.top), h.w*K, h.fill);
  }
}

function buildLabels(){
  labelLayer = mkc(Math.max(1,W), Math.max(1,H));
  var x = labelLayer.getContext('2d');
  var cap = SMALL*K, dim = '#b0b0b0', pad = 88*K;
  /* corner marks hug the viewport so the frame reads at any aspect */
  x.save();
  x.fillStyle = dim; x.textBaseline = 'alphabetic'; x.textAlign = 'left';
  var f = '400 ' + (cap/0.717) + 'px ' + SANS;
  x.font = f;
  if (x.letterSpacing !== undefined) x.letterSpacing = (0.03*cap)+'px';
  x.fillText('VOID BLUE   /   GRADIENT STRIPS   /   RED AURA', pad, pad + cap);
  x.fillText('2026', pad, H - pad);
  x.textAlign = 'right';
  x.fillText('GRAINIENT.SUPPLY', W - pad, H - pad);
  x.restore();

  /* the two notes flanking the headline sit with the ring */
  var pitch = 33*K;
  var L = ['(50+) Gradients','Backgrounds','Added,'];
  for (var i=0;i<L.length;i++)
    fitText(x, L[i], SANS, '500', cap, d2sx(344), d2sy(1148) + i*pitch, 0, '#ffffff', 'left');
  var Rt = ['Gradients &','AI-Generated','Backgrounds'];
  for (var j=0;j<Rt.length;j++)
    fitText(x, Rt[j], SANS, '500', cap, d2sx(2310), d2sy(932) + j*32.5*K, 0, '#ffffff', 'left');
}

function resize(){
  var dpr = Math.min(window.devicePixelRatio || 1, 2);
  W = Math.round(window.innerWidth * dpr);
  H = Math.round(window.innerHeight * dpr);
  cv.width = W; cv.height = H;
  var S = Math.min(W, H*DASP);           /* effective design width */
  K = S / DW;
  OX = (W - DW*K)/2;
  OY = (H - DH*K)/2;
  buildHead();
  buildLabels();
}

/* ------------------------------------------------------------------ *
 * Frame
 * ------------------------------------------------------------------ */
function project(p){
  var k = RING.a*K*RING.dist / (RING.dist - p[2]);
  return [ d2sx(RING.cx) + k*p[0], d2sy(RING.cy) + k*p[1], k ];
}

function drawTile(i, psi){
  var c = Math.cos(psi), s = Math.sin(psi);
  var C  = [c*U[0]+s*V[0], c*U[1]+s*V[1], c*U[2]+s*V[2]];      /* centre, |C| = 1 */
  var T  = [-s*U[0]+c*V[0], -s*U[1]+c*V[1], -s*U[2]+c*V[2]];   /* tangent          */
  var h  = RING.tile/(2*RING.a);                               /* half side, ring units */
  var p0 = project(C);
  var pT = project([C[0]+T[0]*h, C[1]+T[1]*h, C[2]+T[2]*h]);
  var pA = project([C[0]+AXIS[0]*h, C[1]+AXIS[1]*h, C[2]+AXIS[2]*h]);
  var ex = pT[0]-p0[0], ey = pT[1]-p0[1];
  var fx = pA[0]-p0[0], fy = pA[1]-p0[1];
  if (Math.abs(ex*fy - ey*fx) < 0.4) return;                   /* edge on */

  var facing = C[2] > 0;                                       /* radial normal ~ C */
  var img = (facing ? TEX.front : TEX.back)[i % TEX.front.length];
  ctx.save();
  ctx.setTransform(ex*2/TS, ey*2/TS, fx*2/TS, fy*2/TS, p0[0], p0[1]);
  roundRectPath(ctx, TS, TS, TS*RING.radius);
  ctx.clip();
  ctx.drawImage(img, -TS/2, -TS/2, TS, TS);
  ctx.restore();
  ctx.setTransform(1,0,0,1,0,0);
}

function render(t){
  ctx.setTransform(1,0,0,1,0,0);
  ctx.fillStyle = '#000';
  ctx.fillRect(0,0,W,H);
  ctx.imageSmoothingQuality = 'high';

  var spin = (t/DUR)*Math.PI*2;
  var list = [], i;
  for (i=0;i<RING.n;i++){
    var psi = RING.phase*Math.PI/180 - i*2*Math.PI/RING.n + spin;
    var c = Math.cos(psi), s = Math.sin(psi);
    list.push({ i:i, psi:psi, z: c*U[2] + s*V[2] });
  }
  list.sort(function(a,b){ return a.z - b.z; });

  var drawnText = false;
  for (i=0;i<list.length;i++){
    if (!drawnText && list[i].z > 0){ ctx.drawImage(headLayer,0,0); drawnText = true; }
    drawTile(list[i].i, list[i].psi);
  }
  if (!drawnText) ctx.drawImage(headLayer,0,0);
  ctx.drawImage(labelLayer,0,0);
}

/* ------------------------------------------------------------------ *
 * Clock + public controls
 * ------------------------------------------------------------------ */
var t0 = performance.now(), tNow = 0, playing = true;

function frame(now){
  if (playing){
    tNow = ((now - t0)/1000) % DUR;
    render(tNow);
  }
  requestAnimationFrame(frame);
}

window.addEventListener('resize', function(){ resize(); render(tNow); });
resize();
requestAnimationFrame(frame);

window.__DUR = DUR;
window.__seek = function(t){
  tNow = ((t % DUR) + DUR) % DUR;
  playing = false;
  render(tNow);
};
window.__play = function(){ t0 = performance.now() - tNow*1000; playing = true; };
window.__pause = function(){ playing = false; };
window.__time = function(){ return tNow; };
})();
<\/script>
</body>
</html>
`,V=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Component Preview</title>
  <script src="https://cdn.tailwindcss.com"><\/script>
  <style>
    html, body {
      height: 100%;
      margin: 0;
      padding: 0;
    }
    body {
      height: 100%;
      overflow: auto;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #000000;
      color: #ffffff;
    }
    .component-wrapper {
      width: 100%;
      height: 100%;
      padding: 0;
      box-sizing: border-box;
      overflow: auto;
    }
  </style>
</head>
<body>
  <div class="component-wrapper">
    <html lang="en"><head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- Tailwind (CDN build is fine for quick paste) -->
  <script src="https://cdn.tailwindcss.com"><\/script>

  <!-- Optional font to match the original -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&amp;display=swap" rel="stylesheet">



  <style>
    /* ---------- Core styles that Tailwind can’t express (pseudo-elements, keyframes, multi-shadows) ---------- */
    .btn-wrapper {
      position: relative;
      display: inline-block;
    }

    .btn {
      --border-radius: 24px;
      --padding: 4px;
      --transition: 0.4s;
      --button-color: #101010;
      --highlight-color-hue: 210deg;
      /* Change this hue to recolor the glow */

      user-select: none;
      display: flex;
      justify-content: center;

      background-color: var(--button-color);

      /* Complex layered shadows */
      box-shadow:
        inset 0px 1px 1px rgba(255, 255, 255, 0.2),
        inset 0px 2px 2px rgba(255, 255, 255, 0.15),
        inset 0px 4px 4px rgba(255, 255, 255, 0.1),
        inset 0px 8px 8px rgba(255, 255, 255, 0.05),
        inset 0px 16px 16px rgba(255, 255, 255, 0.05),
        0px -1px 1px rgba(0, 0, 0, 0.02),
        0px -2px 2px rgba(0, 0, 0, 0.03),
        0px -4px 4px rgba(0, 0, 0, 0.05),
        0px -8px 8px rgba(0, 0, 0, 0.06),
        0px -16px 16px rgba(0, 0, 0, 0.08);

      border: solid 1px #ffffff22;
      border-radius: var(--border-radius);
      cursor: pointer;

      transition:
        box-shadow var(--transition),
        border var(--transition),
        background-color var(--transition);
    }

    .btn::before {
      content: "";
      position: absolute;
      top: calc(0px - var(--padding));
      left: calc(0px - var(--padding));
      width: calc(100% + var(--padding) * 2);
      height: calc(100% + var(--padding) * 2);
      border-radius: calc(var(--border-radius) + var(--padding));
      pointer-events: none;
      background-image: linear-gradient(0deg, #0004, #000a);
      z-index: -1;
      transition:
        box-shadow var(--transition),
        filter var(--transition);
      box-shadow:
        0 -8px 8px -6px #0000 inset,
        0 -16px 16px -8px #00000000 inset,
        1px 1px 1px #fff2,
        2px 2px 2px #fff1,
        -1px -1px 1px #0002,
        -2px -2px 2px #0001;
    }

    .btn::after {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: inherit;
      pointer-events: none;
      background-image: linear-gradient(0deg,
          #fff,
          hsl(var(--highlight-color-hue), 100%, 70%),
          hsla(var(--highlight-color-hue), 100%, 70%, 50%),
          8%,
          transparent);
      background-position: 0 0;
      opacity: 0;
      transition: opacity var(--transition), filter var(--transition);
    }

    .btn-letter {
      position: relative;
      display: inline-block;
      color: #ffffff55;
      animation: letter-anim 2s ease-in-out infinite;
      transition: color var(--transition), text-shadow var(--transition), opacity var(--transition);
    }

    @keyframes letter-anim {
      50% {
        text-shadow: 0 0 3px #ffffff88;
        color: #fff;
      }
    }

    .btn-svg {
      flex-grow: 1;
      height: 24px;
      margin-right: 0.5rem;
      fill: #e8e8e8;
      animation: flicker 2s linear infinite;
      animation-delay: 0.5s;
      filter: drop-shadow(0 0 2px #ffffff99);
      transition: fill var(--transition), filter var(--transition), opacity var(--transition);
    }

    @keyframes flicker {
      50% {
        opacity: 0.3;
      }
    }

    .txt-wrapper {
      position: relative;
      display: flex;
      align-items: center;
      min-width: 6.4em;
    }

    .txt-1,
    .txt-2 {
      position: absolute;
      word-spacing: -1em;
    }

    .txt-1 {
      animation: appear-anim 1s ease-in-out forwards;
    }

    .txt-2 {
      opacity: 0;
    }

    @keyframes appear-anim {
      0% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }

    .btn:focus .txt-1,
    .btn:focus-visible .txt-1 {
      animation: opacity-anim 0.3s ease-in-out forwards;
      animation-delay: 1s;
    }

    .btn:focus .txt-2,
    .btn:focus-visible .txt-2 {
      animation: opacity-anim 0.3s ease-in-out reverse forwards;
      animation-delay: 1s;
    }

    @keyframes opacity-anim {
      0% {
        opacity: 1;
      }

      100% {
        opacity: 0;
      }
    }

    .btn:focus .btn-letter,
    .btn:focus-visible .btn-letter {
      animation:
        focused-letter-anim 1s ease-in-out forwards,
        letter-anim 1.2s ease-in-out infinite;
      animation-delay: 0s, 1s;
    }

    @keyframes focused-letter-anim {

      0%,
      100% {
        filter: blur(0px);
      }

      50% {
        transform: scale(2);
        filter: blur(10px) brightness(150%) drop-shadow(-36px 12px 12px hsl(var(--highlight-color-hue), 100%, 70%));
      }
    }

    .btn:focus .btn-svg,
    .btn:focus-visible .btn-svg {
      animation-duration: 1.2s;
      animation-delay: 0.2s;
    }

    .btn:focus::before,
    .btn:focus-visible::before {
      box-shadow:
        0 -8px 12px -6px #fff3 inset,
        0 -16px 16px -8px hsla(var(--highlight-color-hue), 100%, 70%, 20%) inset,
        1px 1px 1px #fff3,
        2px 2px 2px #fff1,
        -1px -1px 1px #0002,
        -2px -2px 2px #0001;
    }

    .btn:focus::after,
    .btn:focus-visible::after {
      opacity: 0.6;
      -webkit-mask-image: linear-gradient(0deg, #fff, transparent);
      mask-image: linear-gradient(0deg, #fff, transparent);
      filter: brightness(100%);
    }

    /* Staggered delays for each letter */
    .btn-letter:nth-child(1),
    .btn:focus .btn-letter:nth-child(1),
    .btn:focus-visible .btn-letter:nth-child(1) {
      animation-delay: 0s;
    }

    .btn-letter:nth-child(2),
    .btn:focus .btn-letter:nth-child(2),
    .btn:focus-visible .btn-letter:nth-child(2) {
      animation-delay: 0.08s;
    }

    .btn-letter:nth-child(3),
    .btn:focus .btn-letter:nth-child(3),
    .btn:focus-visible .btn-letter:nth-child(3) {
      animation-delay: 0.16s;
    }

    .btn-letter:nth-child(4),
    .btn:focus .btn-letter:nth-child(4),
    .btn:focus-visible .btn-letter:nth-child(4) {
      animation-delay: 0.24s;
    }

    .btn-letter:nth-child(5),
    .btn:focus .btn-letter:nth-child(5),
    .btn:focus-visible .btn-letter:nth-child(5) {
      animation-delay: 0.32s;
    }

    .btn-letter:nth-child(6),
    .btn:focus .btn-letter:nth-child(6),
    .btn:focus-visible .btn-letter:nth-child(6) {
      animation-delay: 0.40s;
    }

    .btn-letter:nth-child(7),
    .btn:focus .btn-letter:nth-child(7),
    .btn:focus-visible .btn-letter:nth-child(7) {
      animation-delay: 0.48s;
    }

    .btn-letter:nth-child(8),
    .btn:focus .btn-letter:nth-child(8),
    .btn:focus-visible .btn-letter:nth-child(8) {
      animation-delay: 0.56s;
    }

    .btn-letter:nth-child(9),
    .btn:focus .btn-letter:nth-child(9),
    .btn:focus-visible .btn-letter:nth-child(9) {
      animation-delay: 0.64s;
    }

    .btn-letter:nth-child(10),
    .btn:focus .btn-letter:nth-child(10),
    .btn:focus-visible .btn-letter:nth-child(10) {
      animation-delay: 0.72s;
    }

    .btn-letter:nth-child(11),
    .btn:focus .btn-letter:nth-child(11),
    .btn:focus-visible .btn-letter:nth-child(11) {
      animation-delay: 0.80s;
    }

    .btn-letter:nth-child(12),
    .btn:focus .btn-letter:nth-child(12),
    .btn:focus-visible .btn-letter:nth-child(12) {
      animation-delay: 0.88s;
    }

    .btn-letter:nth-child(13),
    .btn:focus .btn-letter:nth-child(13),
    .btn:focus-visible .btn-letter:nth-child(13) {
      animation-delay: 0.96s;
    }

    /* Active state */
    .btn:active {
      border: solid 1px hsla(var(--highlight-color-hue), 100%, 80%, 0.7);
      background-color: hsla(var(--highlight-color-hue), 50%, 20%, 0.5);
    }

    .btn:active::before {
      box-shadow:
        0 -8px 12px -6px #fffa inset,
        0 -16px 16px -8px hsla(var(--highlight-color-hue), 100%, 70%, 0.8) inset,
        1px 1px 1px #fff4,
        2px 2px 2px #fff2,
        -1px -1px 1px #0002,
        -2px -2px 2px #0001;
    }

    .btn:active::after {
      opacity: 1;
      -webkit-mask-image: linear-gradient(0deg, #fff, transparent);
      mask-image: linear-gradient(0deg, #fff, transparent);
      filter: brightness(200%);
    }

    .btn:active .btn-letter {
      text-shadow: 0 0 1px hsla(var(--highlight-color-hue), 100%, 90%, 0.9);
      animation: none;
    }

    /* Hover state */
    .btn:hover {
      border: solid 1px hsla(var(--highlight-color-hue), 100%, 80%, 0.4);
    }

    .btn:hover::before {
      box-shadow:
        0 -8px 8px -6px #fffa inset,
        0 -16px 16px -8px hsla(var(--highlight-color-hue), 100%, 70%, 0.3) inset,
        1px 1px 1px #fff2,
        2px 2px 2px #fff1,
        -1px -1px 1px #0002,
        -2px -2px 2px #0001;
    }

    .btn:hover::after {
      opacity: 1;
      -webkit-mask-image: linear-gradient(0deg, #fff, transparent);
      mask-image: linear-gradient(0deg, #fff, transparent);
    }

    .btn:hover .btn-svg {
      fill: #fff;
      filter:
        drop-shadow(0 0 3px hsl(var(--highlight-color-hue), 100%, 70%)) drop-shadow(0 -4px 6px #0009);
      animation: none;
    }
  </style>
</head>



<!-- Button -->
<body><div class="btn-wrapper">
  <button class="btn px-3 py-2 md:px-4 md:py-2 focus:outline-none" type="button" aria-label="Generate" title="Generate">
        <svg class="btn-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z">
          </path>
        </svg>

        <div class="txt-wrapper">
          <div class="txt-1">
            <span class="btn-letter">G</span>
            <span class="btn-letter">e</span>
            <span class="btn-letter">n</span>
            <span class="btn-letter">e</span>
            <span class="btn-letter">r</span>
            <span class="btn-letter">a</span>
            <span class="btn-letter">t</span>
            <span class="btn-letter">e</span>
          </div>
          <div class="txt-2">
            <span class="btn-letter">G</span>
            <span class="btn-letter">e</span>
            <span class="btn-letter">n</span>
            <span class="btn-letter">e</span>
            <span class="btn-letter">r</span>
            <span class="btn-letter">a</span>
            <span class="btn-letter">t</span>
            <span class="btn-letter">i</span>
            <span class="btn-letter">n</span>
            <span class="btn-letter">g</span>
          </div>
        </div>
      </button>
</div>





</body></html>
  </div>
  
    <script>
      (function() {
        function checkAndCenter() {
          // Use double requestAnimationFrame to ensure DOM is fully painted and layout is stable
          requestAnimationFrame(function() {
            requestAnimationFrame(function() {
              const wrapper = document.querySelector('.component-wrapper');
              if (!wrapper) return;
              
              // Get all child elements
              const children = Array.from(wrapper.children);
              if (children.length === 0) return;
              
              // Temporarily override wrapper styles to shrink-wrap for measurement
              // Set inline styles to shrink-wrap (inline styles override CSS)
              wrapper.style.display = 'inline-block';
              wrapper.style.width = 'auto';
              wrapper.style.height = 'auto';
              wrapper.style.overflow = 'visible';
              wrapper.style.boxSizing = 'content-box';
              
              // Force multiple reflows to ensure styles are fully applied
              void wrapper.offsetHeight;
              void wrapper.offsetWidth;
              void wrapper.offsetHeight;
              
              // Measure the wrapper's content size
              const contentWidth = wrapper.offsetWidth;
              const contentHeight = wrapper.offsetHeight;
              
              // Restore original styles by removing inline styles we added
              wrapper.style.removeProperty('display');
              wrapper.style.removeProperty('width');
              wrapper.style.removeProperty('height');
              wrapper.style.removeProperty('overflow');
              wrapper.style.removeProperty('box-sizing');
              
              // If content is less than 500x500, center it
              if (contentWidth > 0 && contentHeight > 0 && contentWidth < 500 && contentHeight < 500) {
                wrapper.style.display = 'flex';
                wrapper.style.alignItems = 'center';
                wrapper.style.justifyContent = 'center';
              }
            });
          });
        }
        
        // Check immediately and after delays to ensure content is rendered and styled
        function runChecks() {
          checkAndCenter();
          setTimeout(checkAndCenter, 50);
          setTimeout(checkAndCenter, 150);
          setTimeout(checkAndCenter, 300);
          setTimeout(checkAndCenter, 500);
          setTimeout(checkAndCenter, 1000);
        }
        
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', runChecks);
        } else {
          runChecks();
        }
        
        // Also check when images or other resources load
        window.addEventListener('load', () => {
          setTimeout(checkAndCenter, 100);
          setTimeout(checkAndCenter, 300);
        });
        
        // Use ResizeObserver to detect size changes
        if (window.ResizeObserver) {
          setTimeout(() => {
            const wrapper = document.querySelector('.component-wrapper');
            if (wrapper) {
              const observer = new ResizeObserver(() => {
                setTimeout(checkAndCenter, 50);
              });
              observer.observe(wrapper);
            }
          }, 500);
        }
      })();
    <\/script>
  
</body>
</html>
`,X=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Component Preview</title>
  <script src="https://cdn.tailwindcss.com"><\/script>
  <style>
    html, body {
      height: 100%;
      margin: 0;
      padding: 0;
    }
    body {
      height: 100%;
      overflow: auto;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #000000;
      color: #ffffff;
    }
    .component-wrapper {
      width: 100%;
      height: 100%;
      padding: 0;
      box-sizing: border-box;
      overflow: auto;
    }
  </style>
</head>
<body>
  <div class="component-wrapper">
    <html><head></head><body><a href="#" class="group isolate inline-flex cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(129,140,248,0.35)] rounded-full relative shadow-[0_8px_40px_rgba(129,140,248,0.25)]" style="--spread: 90deg; --shimmer-color: rgba(255,255,255,0.6); --radius: 9999px; --speed: 4s; --cut: 1px; --bg: rgba(255, 255, 255, 0.05);" data-element-locator="html &gt; body:nth-of-type(1) &gt; section:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; a:nth-of-type(1)">
  <div class="absolute inset-0">
    <div class="absolute inset-[-200%] w-[400%] h-[400%] [animation:rotate-gradient_var(--speed)_linear_infinite]">
      <div class="absolute inset-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]">
      </div>
    </div>
  </div>
  <div class="absolute rounded-full [background:var(--bg)] [inset:var(--cut)] backdrop-blur"></div>
  <div class="z-10 flex gap-3 sm:w-auto overflow-hidden text-base font-medium text-white w-full pt-3 pr-4 pb-3 pl-4 relative gap-x-3 gap-y-3 items-center" style="border-radius: 9999px;" data-element-locator="html &gt; body:nth-of-type(1) &gt; section:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; a:nth-of-type(1) &gt; div:nth-of-type(3)">
    <div style="position: absolute; content: ' '; display: block; width: 200%; height: 200%; background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), transparent); animation: borderBeamRotation 4s infinite linear; top: 50%; left: 50%; transform: translate(-50%, -50%);" class=""></div>
    <div style="position: absolute; inset: 1px; background: rgba(10, 11, 20, 0.8); border-radius: 9999px; backdrop-filter: blur(8px);" class="" data-element-locator="html &gt; body:nth-of-type(1) &gt; section:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; a:nth-of-type(1) &gt; div:nth-of-type(3) &gt; div:nth-of-type(2)">
    </div>
    <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3f6038cb-af1c-4483-97bc-dd58d89c36ef_320w.jpg" alt="Advisor headshot" class="ring-2 ring-white/10 z-10 w-8 h-8 object-cover rounded-full relative">
    <span class="whitespace-nowrap relative z-10 font-sans">
                  Generate My Site
                </span>
    <span class="inline-flex items-center justify-center z-10 bg-white/10 w-7 h-7 rounded-full ml-1 relative" data-element-locator="html &gt; body:nth-of-type(1) &gt; section:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; div:nth-of-type(1) &gt; a:nth-of-type(1) &gt; div:nth-of-type(3) &gt; span:nth-of-type(2)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-lucide="wand-sparkles" class="lucide lucide-wand-sparkles lucide-arrow-right w-[24px] h-[16px]" data-icon-replaced="true" style="width: 24px; height: 16px; color: rgb(255, 255, 255);"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72" class=""></path><path d="m14 7 3 3" class=""></path><path d="M5 6v4" class=""></path><path d="M19 14v4" class=""></path><path d="M10 2v2" class=""></path><path d="M7 8H3" class=""></path><path d="M21 16h-4" class=""></path><path d="M11 3H9" class=""></path></svg>
                </span>
    <style>
      @keyframes borderBeamRotation {
        0% {
          transform: translate(-50%, -50%) rotate(0deg);
        }

        100% {
          transform: translate(-50%, -50%) rotate(360deg);
        }
      }
    </style>
  </div>
</a></body></html>
  </div>
  
    <script>
      (function() {
        function checkAndCenter() {
          // Use double requestAnimationFrame to ensure DOM is fully painted and layout is stable
          requestAnimationFrame(function() {
            requestAnimationFrame(function() {
              const wrapper = document.querySelector('.component-wrapper');
              if (!wrapper) return;
              
              // Get all child elements
              const children = Array.from(wrapper.children);
              if (children.length === 0) return;
              
              // Temporarily override wrapper styles to shrink-wrap for measurement
              // Set inline styles to shrink-wrap (inline styles override CSS)
              wrapper.style.display = 'inline-block';
              wrapper.style.width = 'auto';
              wrapper.style.height = 'auto';
              wrapper.style.overflow = 'visible';
              wrapper.style.boxSizing = 'content-box';
              
              // Force multiple reflows to ensure styles are fully applied
              void wrapper.offsetHeight;
              void wrapper.offsetWidth;
              void wrapper.offsetHeight;
              
              // Measure the wrapper's content size
              const contentWidth = wrapper.offsetWidth;
              const contentHeight = wrapper.offsetHeight;
              
              // Restore original styles by removing inline styles we added
              wrapper.style.removeProperty('display');
              wrapper.style.removeProperty('width');
              wrapper.style.removeProperty('height');
              wrapper.style.removeProperty('overflow');
              wrapper.style.removeProperty('box-sizing');
              
              // If content is less than 500x500, center it
              if (contentWidth > 0 && contentHeight > 0 && contentWidth < 500 && contentHeight < 500) {
                wrapper.style.display = 'flex';
                wrapper.style.alignItems = 'center';
                wrapper.style.justifyContent = 'center';
              }
            });
          });
        }
        
        // Check immediately and after delays to ensure content is rendered and styled
        function runChecks() {
          checkAndCenter();
          setTimeout(checkAndCenter, 50);
          setTimeout(checkAndCenter, 150);
          setTimeout(checkAndCenter, 300);
          setTimeout(checkAndCenter, 500);
          setTimeout(checkAndCenter, 1000);
        }
        
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', runChecks);
        } else {
          runChecks();
        }
        
        // Also check when images or other resources load
        window.addEventListener('load', () => {
          setTimeout(checkAndCenter, 100);
          setTimeout(checkAndCenter, 300);
        });
        
        // Use ResizeObserver to detect size changes
        if (window.ResizeObserver) {
          setTimeout(() => {
            const wrapper = document.querySelector('.component-wrapper');
            if (wrapper) {
              const observer = new ResizeObserver(() => {
                setTimeout(checkAndCenter, 50);
              });
              observer.observe(wrapper);
            }
          }, 500);
        }
      })();
    <\/script>
  
</body>
</html>
`,$=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Component Preview</title>
  <script src="https://cdn.tailwindcss.com"><\/script>
  <style>
    html, body {
      height: 100%;
      margin: 0;
      padding: 0;
    }
    body {
      height: 100%;
      overflow: auto;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #000000;
      color: #ffffff;
    }
    .component-wrapper {
      width: 100%;
      height: 100%;
      padding: 0;
      box-sizing: border-box;
      overflow: auto;
    }
  </style>
</head>
<body>
  <div class="component-wrapper">
    <html><head></head><body><button class="group flex overflow-hidden uppercase transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(234,88,12,0.5)] focus:outline-none text-sm font-medium text-white tracking-widest font-geist rounded-full pt-5 pr-12 pb-5 pl-12 relative items-center justify-center">
    <style>
        @keyframes beam-spin { to { transform: rotate(360deg); } }
        @keyframes dots-move { 
            0% { background-position: 0 0; } 
            100% { background-position: 24px 24px; } 
        }
    </style>
    
    <!-- Full Border Beam (Single Beam) -->
    <div class="absolute inset-0 -z-20 rounded-full overflow-hidden p-[1px]">
        <div class="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#ea580c_360deg)]" style="animation: beam-spin 3s linear infinite;"></div>
        <div class="absolute inset-[1px] rounded-full bg-black"></div>
    </div>

    <!-- Inner Background & Effects -->
    <div class="-z-10 overflow-hidden bg-zinc-950 rounded-full absolute top-[2px] right-[2px] bottom-[2px] left-[2px]">
        <!-- Light Monotone Gradient Background -->
        <div class="absolute inset-0 bg-gradient-to-b from-zinc-800/60 to-transparent"></div>
        
        <!-- Animated Dots Pattern -->
        <div class="opacity-30 mix-blend-overlay absolute top-0 right-0 bottom-0 left-0" style="background-image: radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px); background-size: 12px 12px; animation: dots-move 8s linear infinite"></div>
        
        <!-- Orange Glow on Hover -->
        <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-orange-500/10 blur-2xl rounded-full pointer-events-none transition-colors duration-500 group-hover:bg-orange-500/30"></div>
    </div>

    <!-- Content -->
    <span class="relative z-10 text-white/90 transition-colors group-hover:text-white">Start Building</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1"><path d="M5 12h14" class=""></path><path d="m12 5 7 7-7 7" class=""></path></svg>
</button></body></html>
  </div>
  
    <script>
      (function() {
        function checkAndCenter() {
          // Use double requestAnimationFrame to ensure DOM is fully painted and layout is stable
          requestAnimationFrame(function() {
            requestAnimationFrame(function() {
              const wrapper = document.querySelector('.component-wrapper');
              if (!wrapper) return;
              
              // Get all child elements
              const children = Array.from(wrapper.children);
              if (children.length === 0) return;
              
              // Temporarily override wrapper styles to shrink-wrap for measurement
              // Set inline styles to shrink-wrap (inline styles override CSS)
              wrapper.style.display = 'inline-block';
              wrapper.style.width = 'auto';
              wrapper.style.height = 'auto';
              wrapper.style.overflow = 'visible';
              wrapper.style.boxSizing = 'content-box';
              
              // Force multiple reflows to ensure styles are fully applied
              void wrapper.offsetHeight;
              void wrapper.offsetWidth;
              void wrapper.offsetHeight;
              
              // Measure the wrapper's content size
              const contentWidth = wrapper.offsetWidth;
              const contentHeight = wrapper.offsetHeight;
              
              // Restore original styles by removing inline styles we added
              wrapper.style.removeProperty('display');
              wrapper.style.removeProperty('width');
              wrapper.style.removeProperty('height');
              wrapper.style.removeProperty('overflow');
              wrapper.style.removeProperty('box-sizing');
              
              // If content is less than 500x500, center it
              if (contentWidth > 0 && contentHeight > 0 && contentWidth < 500 && contentHeight < 500) {
                wrapper.style.display = 'flex';
                wrapper.style.alignItems = 'center';
                wrapper.style.justifyContent = 'center';
              }
            });
          });
        }
        
        // Check immediately and after delays to ensure content is rendered and styled
        function runChecks() {
          checkAndCenter();
          setTimeout(checkAndCenter, 50);
          setTimeout(checkAndCenter, 150);
          setTimeout(checkAndCenter, 300);
          setTimeout(checkAndCenter, 500);
          setTimeout(checkAndCenter, 1000);
        }
        
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', runChecks);
        } else {
          runChecks();
        }
        
        // Also check when images or other resources load
        window.addEventListener('load', () => {
          setTimeout(checkAndCenter, 100);
          setTimeout(checkAndCenter, 300);
        });
        
        // Use ResizeObserver to detect size changes
        if (window.ResizeObserver) {
          setTimeout(() => {
            const wrapper = document.querySelector('.component-wrapper');
            if (wrapper) {
              const observer = new ResizeObserver(() => {
                setTimeout(checkAndCenter, 50);
              });
              observer.observe(wrapper);
            }
          }, 500);
        }
      })();
    <\/script>
  
</body>
</html>
`,Z=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Component Preview</title>
  <script src="https://cdn.tailwindcss.com"><\/script>
  <style>
    html, body {
      height: 100%;
      margin: 0;
      padding: 0;
    }
    body {
      height: 100%;
      overflow: auto;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #ffffff;
      color: #000000;
    }
    .component-wrapper {
      width: 100%;
      height: 100%;
      padding: 0;
      box-sizing: border-box;
      overflow: auto;
    }
  </style>
</head>
<body>
  <div class="component-wrapper">
    <html><head></head><body><button class="group shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 overflow-hidden font-medium text-orange-900 bg-gradient-to-r from-[#FFEBB1] to-[#FFC438] rounded-xl pt-4 pr-8 pb-4 pl-8 relative shadow-lg" style="box-shadow:0 15px 33px -12px rgba(255,162,42,0.9), inset 0 4px 6.3px rgba(252,220,134,1), inset 0 -5px 6.3px rgba(255,162,38,1); border-radius:9999px">
                        <div class="group-hover:translate-y-0 transition-transform duration-300 bg-white/20 absolute top-0 right-0 bottom-0 left-0 translate-y-full"></div>
                        <span class="relative flex items-center gap-2">
                            Start Free Pilot
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-lucide="send" class="lucide lucide-send w-4 h-4"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" class=""></path><path d="m21.854 2.147-10.94 10.939" class=""></path></svg>
                        </span>
                    </button></body></html>
  </div>
  
    <script>
      (function() {
        function checkAndCenter() {
          // Use double requestAnimationFrame to ensure DOM is fully painted and layout is stable
          requestAnimationFrame(function() {
            requestAnimationFrame(function() {
              const wrapper = document.querySelector('.component-wrapper');
              if (!wrapper) return;
              
              // Get all child elements
              const children = Array.from(wrapper.children);
              if (children.length === 0) return;
              
              // Temporarily override wrapper styles to shrink-wrap for measurement
              // Set inline styles to shrink-wrap (inline styles override CSS)
              wrapper.style.display = 'inline-block';
              wrapper.style.width = 'auto';
              wrapper.style.height = 'auto';
              wrapper.style.overflow = 'visible';
              wrapper.style.boxSizing = 'content-box';
              
              // Force multiple reflows to ensure styles are fully applied
              void wrapper.offsetHeight;
              void wrapper.offsetWidth;
              void wrapper.offsetHeight;
              
              // Measure the wrapper's content size
              const contentWidth = wrapper.offsetWidth;
              const contentHeight = wrapper.offsetHeight;
              
              // Restore original styles by removing inline styles we added
              wrapper.style.removeProperty('display');
              wrapper.style.removeProperty('width');
              wrapper.style.removeProperty('height');
              wrapper.style.removeProperty('overflow');
              wrapper.style.removeProperty('box-sizing');
              
              // If content is less than 500x500, center it
              if (contentWidth > 0 && contentHeight > 0 && contentWidth < 500 && contentHeight < 500) {
                wrapper.style.display = 'flex';
                wrapper.style.alignItems = 'center';
                wrapper.style.justifyContent = 'center';
              }
            });
          });
        }
        
        // Check immediately and after delays to ensure content is rendered and styled
        function runChecks() {
          checkAndCenter();
          setTimeout(checkAndCenter, 50);
          setTimeout(checkAndCenter, 150);
          setTimeout(checkAndCenter, 300);
          setTimeout(checkAndCenter, 500);
          setTimeout(checkAndCenter, 1000);
        }
        
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', runChecks);
        } else {
          runChecks();
        }
        
        // Also check when images or other resources load
        window.addEventListener('load', () => {
          setTimeout(checkAndCenter, 100);
          setTimeout(checkAndCenter, 300);
        });
        
        // Use ResizeObserver to detect size changes
        if (window.ResizeObserver) {
          setTimeout(() => {
            const wrapper = document.querySelector('.component-wrapper');
            if (wrapper) {
              const observer = new ResizeObserver(() => {
                setTimeout(checkAndCenter, 50);
              });
              observer.observe(wrapper);
            }
          }, 500);
        }
      })();
    <\/script>
  
</body>
</html>
`,K=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Component Preview</title>
  <script src="https://cdn.tailwindcss.com"><\/script>
  <style>
    html, body {
      height: 100%;
      margin: 0;
      padding: 0;
    }
    body {
      height: 100%;
      overflow: auto;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #ffffff;
      color: #000000;
    }
    .component-wrapper {
      width: 100%;
      height: 100%;
      padding: 0;
      box-sizing: border-box;
      overflow: auto;
    }
  </style>
</head>
<body>
  <div class="component-wrapper">
    <html><head></head><body><button class="hover:bg-slate-50 hover:text-slate- transition-all flex text-sm font-medium text-slate-600 bg-gradient-to-b from-black/10 via-black/20 to-black/10 rounded-full pt-3 pr-6 pb-3 pl-6 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] gap-x-2 gap-y-2 items-center" style="box-shadow: 0 18px 35px rgba(31, 41, 55, 0.25), 0 0 0 1px rgba(209, 213, 219, 0.3);                  color: #e5e7eb; position: relative; --border-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.4), rgba(255, 255, 255, 0.8)); --border-radius-before: 9999px">

  <span class="text-sm font-medium text-black/60 tracking-tight">
    Demo Lesson
  </span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-[16px] h-[16px]" data-lucide="arrow-right" data-icon-set="lucide" data-icon-replaced="true" style="color: rgb(229, 231, 235); width: 16px; height: 16px;"><path d="M5 12h14" class=""></path><path d="m12 5 7 7-7 7"></path></svg>
  <style id="border-gradient-shared-style">
  [style*="--border-gradient"]::before {
    content: "";
    position: absolute;
    inset: 0;
    padding: 1px;
    border-radius: var(--border-radius-before, inherit);
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    background: var(--border-gradient);
    pointer-events: none;
  }</style>
</button></body></html>
  </div>
  
    <script>
      (function() {
        function checkAndCenter() {
          // Use double requestAnimationFrame to ensure DOM is fully painted and layout is stable
          requestAnimationFrame(function() {
            requestAnimationFrame(function() {
              const wrapper = document.querySelector('.component-wrapper');
              if (!wrapper) return;
              
              // Get all child elements
              const children = Array.from(wrapper.children);
              if (children.length === 0) return;
              
              // Temporarily override wrapper styles to shrink-wrap for measurement
              // Set inline styles to shrink-wrap (inline styles override CSS)
              wrapper.style.display = 'inline-block';
              wrapper.style.width = 'auto';
              wrapper.style.height = 'auto';
              wrapper.style.overflow = 'visible';
              wrapper.style.boxSizing = 'content-box';
              
              // Force multiple reflows to ensure styles are fully applied
              void wrapper.offsetHeight;
              void wrapper.offsetWidth;
              void wrapper.offsetHeight;
              
              // Measure the wrapper's content size
              const contentWidth = wrapper.offsetWidth;
              const contentHeight = wrapper.offsetHeight;
              
              // Restore original styles by removing inline styles we added
              wrapper.style.removeProperty('display');
              wrapper.style.removeProperty('width');
              wrapper.style.removeProperty('height');
              wrapper.style.removeProperty('overflow');
              wrapper.style.removeProperty('box-sizing');
              
              // If content is less than 500x500, center it
              if (contentWidth > 0 && contentHeight > 0 && contentWidth < 500 && contentHeight < 500) {
                wrapper.style.display = 'flex';
                wrapper.style.alignItems = 'center';
                wrapper.style.justifyContent = 'center';
              }
            });
          });
        }
        
        // Check immediately and after delays to ensure content is rendered and styled
        function runChecks() {
          checkAndCenter();
          setTimeout(checkAndCenter, 50);
          setTimeout(checkAndCenter, 150);
          setTimeout(checkAndCenter, 300);
          setTimeout(checkAndCenter, 500);
          setTimeout(checkAndCenter, 1000);
        }
        
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', runChecks);
        } else {
          runChecks();
        }
        
        // Also check when images or other resources load
        window.addEventListener('load', () => {
          setTimeout(checkAndCenter, 100);
          setTimeout(checkAndCenter, 300);
        });
        
        // Use ResizeObserver to detect size changes
        if (window.ResizeObserver) {
          setTimeout(() => {
            const wrapper = document.querySelector('.component-wrapper');
            if (wrapper) {
              const observer = new ResizeObserver(() => {
                setTimeout(checkAndCenter, 50);
              });
              observer.observe(wrapper);
            }
          }, 500);
        }
      })();
    <\/script>
  
</body>
</html>
`,J=`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Ignition Button</title>
<script src="https://cdn.tailwindcss.com"><\/script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
<script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
</head>
<body class="h-screen w-screen flex items-center justify-center overflow-hidden text-stone-800 bg-[#f4f1ea] selection:bg-[#d43d17] selection:text-white" style="font-family: 'Inter', sans-serif;">

  <!-- Ambient WebGL Background -->
  <canvas id="bg-gl" class="absolute inset-0 w-full h-full -z-10 block pointer-events-none" aria-hidden="true"></canvas>

  <main class="relative z-10 flex flex-col items-center text-center w-full max-w-md px-6">
    
    <!-- Company Header -->
    <div class="mb-16 overflow-hidden">
      <div class="reveal-element text-sm font-normal tracking-tight text-stone-700 opacity-0 translate-y-full">
        AETHER SYSTEMS
      </div>
    </div>

    <!-- Component Area -->
    <div class="mb-8 stagger-word text-xs font-mono tracking-[0.3em] uppercase text-[#d43d17] font-normal">
      SYS 07 / IGNITE
    </div>

    <div class="intro-wrapper opacity-0 scale-[0.55] blur-[8px]">
      <button id="btn" type="button" class="group relative block w-[264px] h-[78px] border-0 p-[7px] rounded-[24px] cursor-pointer outline-none transition-all duration-300 ease-[cubic-bezier(.34,1.4,.5,1)] hover:-translate-y-[2px] active:translate-y-[1px] active:scale-[0.985] focus-visible:outline-2 focus-visible:outline-[#d43d17] focus-visible:outline-offset-[5px] bg-[linear-gradient(180deg,#3c3f46_0%,#15171b_55%,#2a2d33_100%)] shadow-[0_26px_52px_rgba(15,12,10,.35),0_3px_10px_rgba(0,0,0,.35),inset_0_1px_0_rgba(255,255,255,.14)] hover:shadow-[0_32px_64px_rgba(160,60,12,.3),0_4px_12px_rgba(0,0,0,.4),inset_0_1px_0_rgba(255,255,255,.16)]">
        <span class="relative block w-full h-full rounded-[17px] overflow-hidden bg-[#06050a] flex items-center justify-center shadow-[inset_0_2px_8px_rgba(0,0,0,.9)]">
          <canvas id="gl" class="absolute inset-0 w-full h-full block" aria-hidden="true"></canvas>
          <span class="relative z-10 pointer-events-none font-medium text-sm tracking-[0.34em] indent-[0.34em] text-[#fdf6ee]" style="text-shadow: 0 0 14px rgba(255, 170, 100, .55), 0 1px 6px rgba(0, 0, 0, .9);">LAUNCH</span>
        </span>
      </button>
    </div>

    <div class="mt-8 stagger-word text-xs text-stone-500 tracking-wide font-light leading-relaxed max-w-[280px]">
      Hover to prime the core accelerator, click to execute initialization.
    </div>

  </main>

  <script>
    // --- GSAP Animations ---
    gsap.registerPlugin(ScrollTrigger);

    // Prepare text for masked staggered reveal
    document.querySelectorAll('.stagger-word').forEach(el => {
      const words = el.innerText.trim().split(' ');
      el.innerHTML = words.map(w => \`<span class="inline-block overflow-hidden align-top"><span class="reveal-word inline-block translate-y-full opacity-0">\${w}&nbsp;</span></span>\`).join('');
    });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Header reveal
    tl.to(".reveal-element", {
      y: "0%",
      opacity: 1,
      duration: 1,
      ease: "expo.out"
    }, "+=0.2");

    // Masked staggered word reveal
    tl.to(".reveal-word", {
      y: "0%",
      opacity: 1,
      duration: 0.8,
      stagger: 0.04,
      ease: "power4.out"
    }, "-=0.6");

    // Intro Button Sequence
    tl.to(".intro-wrapper", {
      scale: 1.05,
      opacity: 1,
      duration: 0.8,
      ease: "back.out(1.5)",
      onUpdate: function() {
        let progress = this.progress();
        let blurAmount = Math.max(0, 8 * (1 - progress * 1.5));
        gsap.set(".intro-wrapper", { filter: \`blur(\${blurAmount}px)\` });
      }
    }, "-=0.8");

    tl.to(".intro-wrapper", {
      scale: 1,
      duration: 0.4,
      ease: "power2.out"
    });

    // Subtle Ambient Parallax
    document.addEventListener("mousemove", (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 12;
      const y = (e.clientY / window.innerHeight - 0.5) * 12;
      gsap.to(".intro-wrapper", {
        x: x,
        y: y,
        duration: 2,
        ease: "power2.out"
      });
    });


    // --- Ambient Background WebGL ---
    (function() {
      var canvas = document.getElementById('bg-gl');
      var gl = canvas.getContext('webgl');
      if (!gl) return;

      var VS = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
      var FS = \`
        precision highp float;
        uniform vec2 u_res;
        uniform float u_time;
        float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);}
        float noise(vec2 p){
          vec2 i=floor(p), f=fract(p);
          vec2 u=f*f*(3.0-2.0*f);
          return mix(mix(hash(i),hash(i+vec2(1.,0.)),u.x),
                     mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),u.x),u.y);
        }
        void main(){
          vec2 uv = gl_FragCoord.xy / u_res;
          float n = noise(uv * 2.5 + vec2(u_time * 0.015, u_time * 0.025));
          n += noise(uv * 5.0 - vec2(u_time * 0.01, u_time * 0.02)) * 0.5;
          // Soft ambient cream tones
          vec3 col1 = vec3(0.957, 0.945, 0.918);
          vec3 col2 = vec3(0.925, 0.910, 0.880);
          vec3 finalCol = mix(col1, col2, n * 0.6 + 0.2);
          gl_FragColor = vec4(finalCol, 1.0);
        }
      \`;

      function compile(type, src) {
        var s = gl.createShader(type);
        gl.shaderSource(s, src);
        gl.compileShader(s);
        return s;
      }
      var prog = gl.createProgram();
      gl.attachShader(prog, compile(gl.VERTEX_SHADER, VS));
      gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FS));
      gl.linkProgram(prog);
      gl.useProgram(prog);

      var buf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
      var locP = gl.getAttribLocation(prog, 'p');
      gl.enableVertexAttribArray(locP);
      gl.vertexAttribPointer(locP, 2, gl.FLOAT, false, 0, 0);

      var uRes = gl.getUniformLocation(prog, 'u_res');
      var uTime = gl.getUniformLocation(prog, 'u_time');

      function resize() {
        var dpr = Math.min(window.devicePixelRatio || 1, 2);
        var w = window.innerWidth * dpr;
        var h = window.innerHeight * dpr;
        if (canvas.width !== w || canvas.height !== h) {
          canvas.width = w;
          canvas.height = h;
          gl.viewport(0, 0, w, h);
        }
      }
      window.addEventListener('resize', resize);
      resize();

      function frame(now) {
        resize();
        gl.uniform2f(uRes, canvas.width, canvas.height);
        gl.uniform1f(uTime, now / 1000);
        gl.drawArrays(gl.TRIANGLES, 0, 3);
        requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    })();


    // --- Portal Button WebGL ---
    (function () {
      var btn = document.getElementById('btn');
      var canvas = document.getElementById('gl');
      var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      var gl = canvas.getContext('webgl');
      if (!gl) { document.body.classList.add('nogl'); return; }

      var VS = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
      var FS = [
        'precision highp float;',
        'uniform vec2 u_res;',
        'uniform float u_time;',
        'uniform float u_warp;',
        'uniform float u_flash;',
        'float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);}',
        'float noise(vec2 p){',
        '  vec2 i=floor(p), f=fract(p);',
        '  vec2 u=f*f*(3.0-2.0*f);',
        '  return mix(mix(hash(i),hash(i+vec2(1.,0.)),u.x),',
        '             mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),u.x),u.y);',
        '}',
        'float fbm(vec2 p){',
        '  float v=0.0; float a=0.5;',
        '  for(int i=0;i<4;i++){ v+=a*noise(p); p=p*2.07+vec2(13.1,5.7); a*=0.5; }',
        '  return v;',
        '}',
        'void main(){',
        '  vec2 sc = gl_FragCoord.xy / u_res;',
        '  vec2 uv = (gl_FragCoord.xy - 0.5 * u_res) / u_res.y;',
        '  float r = length(uv);',
        '  float rr = max(r, 0.08);',
        '  float a = atan(uv.y, uv.x);',
        '  float t = u_time;',
        '  vec3 col = vec3(0.012, 0.011, 0.014);',
        '  float hz = fbm(uv * 2.6 + vec2(t * 0.35, 1.7));',
        '  col += vec3(0.13, 0.06, 0.032) * hz * (0.7 + 0.6 * u_warp);',
        '  for (int i = 0; i < 3; i++) {',
        '    float fi = float(i);',
        '    float ringN = 26.0 + fi * 9.0;',
        '    vec2 sp = vec2((a / 6.28318 + 0.5) * ringN,',
        '                   (0.3 + fi * 0.22) / rr + t * (2.0 + fi * 1.2));',
        '    vec2 cell = floor(sp);',
        '    vec2 f = fract(sp);',
        '    float h = hash(cell + fi * 17.31);',
        '    float on = step(0.68, h);',
        '    vec2 c = vec2(0.2 + 0.6 * hash(cell + 4.7), 0.5);',
        '    vec2 dlt = f - c;',
        '    float sy = mix(130.0, 8.0, u_warp);',
        '    float star = on * exp(-(dlt.x * dlt.x * 150.0 + dlt.y * dlt.y * sy));',
        '    float tw = 0.7 + 0.3 * sin(h * 81.0 + t * 9.0);',
        '    tw = mix(tw, 1.0, u_warp);',
        '    vec3 sCol = mix(vec3(1.0, 0.94, 0.85), vec3(1.0, 0.6, 0.33), step(0.9, h));',
        '    float fade = smoothstep(0.02, 0.25, r);',
        '    col += sCol * star * tw * fade * (1.1 + 0.7 * u_warp);',
        '  }',
        '  col += vec3(1.0, 0.8, 0.58) * u_warp * 0.32 * exp(-r * 4.0);',
        '  vec2 e = sc * (1.0 - sc);',
        '  col *= 0.3 + 0.7 * pow(e.x * e.y * 16.0, 0.3);',
        '  col = mix(col, vec3(1.0, 0.97, 0.92), clamp(u_flash, 0.0, 1.0));',
        '  gl_FragColor = vec4(col, 1.0);',
        '}'
      ].join('\\n');

      function compile(type, src) {
        var s = gl.createShader(type);
        gl.shaderSource(s, src);
        gl.compileShader(s);
        if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
          console.error('shader compile failed:', gl.getShaderInfoLog(s));
        }
        return s;
      }
      var prog = gl.createProgram();
      gl.attachShader(prog, compile(gl.VERTEX_SHADER, VS));
      gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FS));
      gl.linkProgram(prog);
      gl.useProgram(prog);

      var buf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
      var locP = gl.getAttribLocation(prog, 'p');
      gl.enableVertexAttribArray(locP);
      gl.vertexAttribPointer(locP, 2, gl.FLOAT, false, 0, 0);

      var uRes = gl.getUniformLocation(prog, 'u_res');
      var uTime = gl.getUniformLocation(prog, 'u_time');
      var uWarp = gl.getUniformLocation(prog, 'u_warp');
      var uFlash = gl.getUniformLocation(prog, 'u_flash');

      function resize() {
        var dpr = Math.min(window.devicePixelRatio || 1, 2);
        var w = Math.max(1, Math.round(canvas.clientWidth * dpr));
        var h = Math.max(1, Math.round(canvas.clientHeight * dpr));
        if (canvas.width !== w || canvas.height !== h) {
          canvas.width = w;
          canvas.height = h;
          gl.viewport(0, 0, w, h);
        }
      }
      window.addEventListener('resize', resize);
      resize();

      var warp = 0, warpTarget = 0, flash = 0, z = 0;
      var last = performance.now();

      btn.addEventListener('mouseenter', function () { warpTarget = 1; });
      btn.addEventListener('mouseleave', function () { warpTarget = 0; });
      btn.addEventListener('focus', function () { warpTarget = 1; });
      btn.addEventListener('blur', function () { warpTarget = 0; });
      btn.addEventListener('click', function () {
        flash = 1;
        warp = 0;
        z = 0;
      });

      function frame(now) {
        var dt = Math.min(0.05, (now - last) / 1000);
        last = now;
        warp += (warpTarget - warp) * Math.min(1, dt * 2.6);
        flash *= Math.exp(-4.5 * dt);
        z += dt * (0.05 + warp * 1.35);
        resize();
        gl.uniform2f(uRes, canvas.width, canvas.height);
        gl.uniform1f(uTime, reduced ? 4.0 : z);
        gl.uniform1f(uWarp, warp);
        gl.uniform1f(uFlash, flash);
        gl.drawArrays(gl.TRIANGLES, 0, 3);
        requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    })();
  <\/script>
</body>
</html>`,Q=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Component Preview</title>
  <script src="https://cdn.tailwindcss.com"><\/script>
  <style>
    html, body {
      height: 100%;
      margin: 0;
      padding: 0;
    }
    body {
      height: 100%;
      overflow: auto;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #000000;
      color: #ffffff;
    }
    .component-wrapper {
      width: 100%;
      height: 100%;
      padding: 0;
      box-sizing: border-box;
      overflow: auto;
    }
  </style>
</head>
<body>
  <div class="component-wrapper">
    <html><head></head><body><button class="group/btn relative">
                <div class="-inset-1 group-hover/btn:opacity-75 transition duration-500 bg-amber-500/40 opacity-40 rounded-xl absolute blur"></div>
                <div class="relative bg-gradient-to-b from-amber-200 via-amber-300 to-amber-500 text-amber-950 rounded-xl px-8 py-4 flex items-center gap-3 shadow-[0_0_0_1px_rgba(251,191,36,0.5),0_4px_0_#b45309,0_10px_15px_-3px_rgba(0,0,0,0.5)] active:translate-y-[2px] active:shadow-[0_0_0_1px_rgba(251,191,36,0.5),0_2px_0_#b45309] transition-all duration-150">
                    <span class="text-lg font-medium tracking-tight">Initialize Launch</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="zap" class="lucide lucide-zap w-5 h-5 fill-amber-950/20 stroke-[1.5]"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" class=""></path></svg>
                </div>
            </button></body></html>
  </div>
  
    <script>
      (function() {
        function checkAndCenter() {
          // Use double requestAnimationFrame to ensure DOM is fully painted and layout is stable
          requestAnimationFrame(function() {
            requestAnimationFrame(function() {
              const wrapper = document.querySelector('.component-wrapper');
              if (!wrapper) return;
              
              // Get all child elements
              const children = Array.from(wrapper.children);
              if (children.length === 0) return;
              
              // Temporarily override wrapper styles to shrink-wrap for measurement
              // Set inline styles to shrink-wrap (inline styles override CSS)
              wrapper.style.display = 'inline-block';
              wrapper.style.width = 'auto';
              wrapper.style.height = 'auto';
              wrapper.style.overflow = 'visible';
              wrapper.style.boxSizing = 'content-box';
              
              // Force multiple reflows to ensure styles are fully applied
              void wrapper.offsetHeight;
              void wrapper.offsetWidth;
              void wrapper.offsetHeight;
              
              // Measure the wrapper's content size
              const contentWidth = wrapper.offsetWidth;
              const contentHeight = wrapper.offsetHeight;
              
              // Restore original styles by removing inline styles we added
              wrapper.style.removeProperty('display');
              wrapper.style.removeProperty('width');
              wrapper.style.removeProperty('height');
              wrapper.style.removeProperty('overflow');
              wrapper.style.removeProperty('box-sizing');
              
              // If content is less than 500x500, center it
              if (contentWidth > 0 && contentHeight > 0 && contentWidth < 500 && contentHeight < 500) {
                wrapper.style.display = 'flex';
                wrapper.style.alignItems = 'center';
                wrapper.style.justifyContent = 'center';
              }
            });
          });
        }
        
        // Check immediately and after delays to ensure content is rendered and styled
        function runChecks() {
          checkAndCenter();
          setTimeout(checkAndCenter, 50);
          setTimeout(checkAndCenter, 150);
          setTimeout(checkAndCenter, 300);
          setTimeout(checkAndCenter, 500);
          setTimeout(checkAndCenter, 1000);
        }
        
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', runChecks);
        } else {
          runChecks();
        }
        
        // Also check when images or other resources load
        window.addEventListener('load', () => {
          setTimeout(checkAndCenter, 100);
          setTimeout(checkAndCenter, 300);
        });
        
        // Use ResizeObserver to detect size changes
        if (window.ResizeObserver) {
          setTimeout(() => {
            const wrapper = document.querySelector('.component-wrapper');
            if (wrapper) {
              const observer = new ResizeObserver(() => {
                setTimeout(checkAndCenter, 50);
              });
              observer.observe(wrapper);
            }
          }, 500);
        }
      })();
    <\/script>
  
</body>
</html>
`,ee=`<!DOCTYPE html>
<html lang="en"><head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Imaginie — Stay close to your imagination.</title>
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"><\/script>
  <!-- Iconify Icons -->
  <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&amp;family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&amp;display=swap" rel="stylesheet">
  <style>
    .font-serif {
      font-family: 'Playfair Display', Georgia, serif;
    }
    .font-sans {
      font-family: 'Inter', sans-serif;
    }
    /* Smooth custom animations */
    .word-span {
      display: inline-block;
      opacity: 0;
      transform: translateY(12px) translateZ(0);
      filter: blur(4px);
      transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .word-span.visible {
      opacity: 1;
      transform: translateY(0) translateZ(0);
      filter: blur(0);
    }
    /* Holographic button glow */
    .holo-btn {
      position: relative;
      background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,220,205,0.9) 50%, rgba(220,240,255,0.9) 100%);
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.6);
      transition: all 0.4s ease;
    }
    .holo-btn:hover {
      transform: translateY(-1px);
      box-shadow: 0 0 30px rgba(255, 220, 180, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.8);
    }
  </style>
</head>
<body class="bg-[#030303] text-[#f4f4f6] font-sans antialiased overflow-x-hidden min-h-screen flex flex-col justify-between" style="background-image: radial-gradient(circle at 10% 20%, rgba(15, 11, 28, 0.6) 0%, rgba(3, 3, 3, 1) 80%);">

  <!-- Interactive Background Canvas (WebGL/Nebula simulation) -->
  <canvas id="ambient-starfield" class="absolute inset-0 pointer-events-none z-0" style="opacity: 0.45;"></canvas>

  <!-- Header Navigation -->
  <header class="relative z-50 w-full max-w-7xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
    <div class="flex items-center gap-12">
      <!-- Logo -->
      <a href="#" class="text-xl font-semibold tracking-tight text-white hover:opacity-90 transition-opacity">
        Imaginie
      </a>
      <!-- Nav Links -->
      <nav class="hidden md:flex items-center gap-8">
        <a href="#" class="text-[13px] text-[#9a9a9f] hover:text-white transition-colors duration-200">How it works</a>
        <a href="#" class="text-[13px] text-[#9a9a9f] hover:text-white transition-colors duration-200">Features</a>
        <a href="#" class="text-[13px] text-[#9a9a9f] hover:text-white transition-colors duration-200">Pricing</a>
      </nav>
    </div>
    <!-- Log In CTA -->
    <div>
      <a href="#" class="px-5 py-2 text-[13px] font-medium text-white bg-[#ffffff0a] border border-[#ffffff10] rounded-full hover:bg-[#ffffff15] transition-all duration-300">
        Log in
      </a>
    </div>
  </header>

  <!-- Main Hero Workspace Section -->
  <main class="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto py-8">
    
    <!-- Left Copy Column -->
    <div class="lg:col-span-5 flex flex-col space-y-8 text-left max-w-xl lg:max-w-none">
      
      <!-- High-fidelity Headline (Letter/Word animated) -->
      <h1 id="hero-title" class="text-5xl md:text-6xl lg:text-[64px] font-serif leading-[1.08] tracking-tight text-white py-1">
        Stay close to your imagination.
      </h1>

      <!-- Description Subhead -->
      <p id="hero-desc" class="text-[14px] md:text-[15px] text-[#94949a] leading-relaxed max-w-[430px] opacity-0 translate-y-4 transition-all duration-1000 ease-out delay-500">
        Where ideas begin as sparks and emerge as living experiences through the power of AI. We transform what doesn't exist yet into something unforgettable.
      </p>

      <!-- Action Buttons -->
      <div id="hero-actions" class="flex flex-wrap items-center gap-4 pt-2 opacity-0 translate-y-4 transition-all duration-1000 ease-out delay-700">
        <a href="#" class="px-5 py-3 text-[13px] font-medium text-white bg-[#0e0e11] border border-[#ffffff12] rounded-full hover:bg-[#16161b] hover:border-[#ffffff1c] transition-all duration-300 flex items-center gap-2">
          See how it works
        </a>
        <a href="#" class="holo-btn px-6 py-3 text-[13px] font-semibold text-[#0d0a12] rounded-full flex items-center gap-1.5 transition-transform duration-300">
          Begin the journey
          <iconify-icon icon="solar:arrow-right-linear" class="text-base font-semibold" style="stroke-width: 2;"></iconify-icon>
        </a>
      </div>

      <!-- Social Proof / Creators Indicator -->
      <div id="hero-proof" class="flex items-center gap-3.5 pt-8 opacity-0 translate-y-4 transition-all duration-1000 ease-out delay-900">
        <!-- Avatars Stack -->
        <div class="flex -space-x-3.5">
          <img class="w-7 h-7 rounded-full border border-black object-cover filter brightness-95" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2f563338-39fa-47ea-9761-658d4f3f84db_1600w.jpg" alt="Creator">
          <img class="w-7 h-7 rounded-full border border-black object-cover filter brightness-95" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4f5668c5-fc4a-44e0-bc5e-a664189d3c31_1600w.jpg" alt="Creator">
          <img class="w-7 h-7 rounded-full border border-black object-cover filter brightness-95" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eca707cc-a5b7-439a-b4fd-247f6106c2e1_1600w.jpg" alt="Creator">
          <img class="w-7 h-7 rounded-full border border-black object-cover filter brightness-95" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/77415a2e-dcbc-4748-a29d-fced4821881a_1600w.jpg" alt="Creator">
        </div>
        <!-- Copy text -->
        <p class="text-[12px] text-[#86868b] tracking-normal">
          Used by <span class="text-white font-medium">12,000+</span> builders, creators, and professionals
        </p>
      </div>

    </div>

    <!-- Right Artistic Cosmic Portal Column -->
    <div class="lg:col-span-7 flex justify-center lg:justify-end relative w-full h-[480px] md:h-[620px] lg:h-[680px]">
      
      <!-- Outer glowing bronze border frame (Portal Container) -->
      <div class="relative w-full max-w-[500px] h-full rounded-t-[180px] rounded-b-[40px] p-[5px] bg-gradient-to-tr from-[#1b120f] via-[#a3704c] to-[#e6c29e] shadow-[0_0_80px_rgba(163,112,76,0.15)] overflow-hidden flex items-center justify-center transition-transform duration-700 hover:scale-[1.01]">
        
        <!-- Inner shadow & ambient overlay wrapper -->
        <div class="relative w-full h-full rounded-t-[176px] rounded-b-[36px] overflow-hidden bg-black flex items-center justify-center">
          
          <!-- Background Cosmic Dust Image (Aura Asset) -->
          <video src="https://wypspaektjjiccarxrgy.supabase.co/storage/v1/object/public/generated-page-media/302e86e0-80d8-4ba5-82e8-004220675655/2026-05-20/1779252781481-eabde810-981e-4ee8-a143-4bee829a788c.mp4" poster="https://wypspaektjjiccarxrgy.supabase.co/storage/v1/object/public/generated-page-media/302e86e0-80d8-4ba5-82e8-004220675655/2026-05-20/1779245193658-07a4020a-dced-499d-ac91-36b6037f907e.png" data-neuform-generated-video="true" data-neuform-video-preset="loop-in-view" muted="" playsinline="" preload="metadata" loop="" aria-label="Cosmic Window" class="absolute inset-0 w-full h-full object-cover opacity-85 mix-blend-lighten filter brightness-110 saturate-[1.1]"></video>

          <!-- Interactive Star/Nebula Field Canvas inside the window -->
          <canvas id="portal-stars" class="absolute inset-0 w-full h-full z-10 mix-blend-screen pointer-events-none"></canvas>

          <!-- Cosmic Horizon Layer Glow -->
          <div class="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#0e0c15] via-transparent to-transparent z-20"></div>

          <!-- Futuristic Figure Silhouette sitting in deep observation -->
          <div class="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center">
            
            <!-- Glow around head / focal aura -->
            <div class="absolute -top-3 w-10 h-10 rounded-full bg-orange-400 opacity-40 blur-md animate-pulse"></div>
            <div class="absolute -top-1 w-6 h-6 rounded-full bg-yellow-100 opacity-60 blur-sm"></div>

            <!-- Sleek SVG silhouette (Person in circular ergonomic egg-chair) -->
            <svg class="w-24 h-24 text-black filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]" viewBox="0 0 100 100" fill="currentColor">
              <!-- Pod / Chair -->
              <path d="M50,15 C30,15 20,30 20,55 C20,75 32,85 50,85 C68,85 80,75 80,55 C80,30 70,15 50,15 Z" fill="#060608"></path>
              <!-- Inner Cushion Cutout -->
              <path d="M50,22 C35,22 26,33 26,55 C26,70 34,78 50,78 C66,78 74,70 74,55 C74,33 65,22 50,22 Z" fill="#010102"></path>
              <!-- Person Silhouette inside -->
              <!-- Torso & Arms -->
              <path d="M46,68 L54,68 L54,58 L52,50 L48,50 L46,58 Z" fill="#08080c"></path>
              <!-- Head -->
              <circle cx="50" cy="45" r="4.5" fill="#08080c"></circle>
              <!-- Glow back rim on seat -->
              <path d="M26,55 C26,62 30,70 38,74" stroke="#e6c29e" stroke-width="1" fill="none" opacity="0.4"></path>
              <path d="M74,55 C74,62 70,70 62,74" stroke="#a3704c" stroke-width="1" fill="none" opacity="0.3"></path>
            </svg>

          </div>

          <!-- Glass reflection light glare on the screen -->
          <div class="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none z-20" style="mix-blend-mode: overlay;"></div>

        </div>
      </div>

      <!-- Left Bottom soft dark gradient blend for natural shadow -->
      <div class="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#030303] to-transparent z-40 pointer-events-none"></div>

    </div>

  </main>

  <!-- Fine Footer Branding -->
  <footer class="relative z-50 w-full max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between border-t border-[#ffffff05] text-[11px] text-[#636366] gap-4">
    <div class="flex items-center gap-1.5">
      <span>© 2026 Imaginie Inc. All rights reserved.</span>
    </div>
    <div class="flex items-center gap-6">
      <a href="#" class="hover:text-white transition-colors duration-200">Terms of Service</a>
      <a href="#" class="hover:text-white transition-colors duration-200">Privacy Policy</a>
      <a href="#" class="hover:text-white transition-colors duration-200">System Status</a>
    </div>
  </footer>

  <!-- Script for Animations & Live Cosmic Canvas Simulation (WebGL Quality 2D Context) -->
  <script>
    // 1. Text Animation: Splitting the header words cleanly and fading in one by one.
    const title = document.getElementById('hero-title');
    const titleText = title.textContent.trim();
    title.innerHTML = '';
    
    // Split text into words safely
    const words = titleText.split(/\\s+/);
    words.forEach((word, index) => {
      const span = document.createElement('span');
      span.className = 'word-span';
      span.innerHTML = word + '&nbsp;';
      span.style.transitionDelay = \`\${index * 80}ms\`;
      title.appendChild(span);
    });

    // Trigger animations when content loaded
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => {
        const spans = document.querySelectorAll('.word-span');
        spans.forEach(span => span.classList.add('visible'));
      }, 100);

      setTimeout(() => {
        document.getElementById('hero-desc').style.opacity = '1';
        document.getElementById('hero-desc').style.transform = 'translateY(0)';
      }, 400);

      setTimeout(() => {
        document.getElementById('hero-actions').style.opacity = '1';
        document.getElementById('hero-actions').style.transform = 'translateY(0)';
      }, 650);

      setTimeout(() => {
        document.getElementById('hero-proof').style.opacity = '1';
        document.getElementById('hero-proof').style.transform = 'translateY(0)';
      }, 850);
    });

    // 2. Interactive Starfield Canvas inside the Portal Frame
    const portalCanvas = document.getElementById('portal-stars');
    const ctxPortal = portalCanvas.getContext('2d');
    
    let stars = [];
    let portalWidth = 0;
    let portalHeight = 0;

    function resizePortalCanvas() {
      const rect = portalCanvas.getBoundingClientRect();
      portalWidth = rect.width;
      portalHeight = rect.height;
      portalCanvas.width = portalWidth;
      portalCanvas.height = portalHeight;
      initStars();
    }

    function initStars() {
      stars = [];
      const count = 45;
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * portalWidth,
          y: Math.random() * portalHeight,
          radius: Math.random() * 1.5 + 0.5,
          color: getRandomColor(),
          speed: Math.random() * 0.15 + 0.05,
          angle: Math.random() * Math.PI * 2,
          pulse: Math.random() * 0.02
        });
      }
    }

    function getRandomColor() {
      const colors = [
        'rgba(230, 194, 158, ', // Bronze/gold matches frame
        'rgba(244, 244, 246, ', // Pure soft white
        'rgba(173, 140, 255, ', // Purple starlight
        'rgba(135, 206, 250, '  // Cool space blue
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    }

    function drawStars() {
      ctxPortal.clearRect(0, 0, portalWidth, portalHeight);
      
      stars.forEach(s => {
        // Drift movement
        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        
        // Bounce bounds inside space window
        if (s.x < 0 || s.x > portalWidth) s.angle = Math.PI - s.angle;
        if (s.y < 0 || s.y > portalHeight) s.angle = -s.angle;

        // Sparkle fade
        s.speed += (Math.random() - 0.5) * 0.01;
        s.speed = Math.max(0.02, Math.min(s.speed, 0.25));

        // Pulsing glow alpha
        const alpha = 0.3 + Math.abs(Math.sin(Date.now() * s.pulse)) * 0.7;
        ctxPortal.beginPath();
        ctxPortal.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctxPortal.fillStyle = s.color + alpha + ')';
        ctxPortal.shadowBlur = s.radius * 4;
        ctxPortal.shadowColor = s.color + '0.8)';
        ctxPortal.fill();
      });

      requestAnimationFrame(drawStars);
    }

    // 3. Ambient Starfield on Page Background
    const ambientCanvas = document.getElementById('ambient-starfield');
    const ctxAmbient = ambientCanvas.getContext('2d');
    let ambientStars = [];

    function resizeAmbientCanvas() {
      ambientCanvas.width = window.innerWidth;
      ambientCanvas.height = window.innerHeight;
      initAmbientStars();
    }

    function initAmbientStars() {
      ambientStars = [];
      const count = 70;
      for (let i = 0; i < count; i++) {
        ambientStars.push({
          x: Math.random() * ambientCanvas.width,
          y: Math.random() * ambientCanvas.height,
          size: Math.random() * 0.8 + 0.2,
          opacity: Math.random() * 0.6 + 0.1,
          drift: Math.random() * 0.02 + 0.01
        });
      }
    }

    function drawAmbientStars() {
      ctxAmbient.clearRect(0, 0, ambientCanvas.width, ambientCanvas.height);
      ambientStars.forEach(s => {
        s.y -= s.drift;
        if (s.y < 0) s.y = ambientCanvas.height;
        ctxAmbient.fillStyle = \`rgba(255, 255, 255, \${s.opacity})\`;
        ctxAmbient.fillRect(s.x, s.y, s.size, s.size);
      });
      requestAnimationFrame(drawAmbientStars);
    }

    window.addEventListener('resize', () => {
      resizePortalCanvas();
      resizeAmbientCanvas();
    });

    // Initial setups
    resizePortalCanvas();
    resizeAmbientCanvas();
    drawStars();
    drawAmbientStars();
  <\/script>

<script data-neuform-video-controller="true">
(function () {
  function playVideo(video) {
    var promise = video.play();
    if (promise && typeof promise.catch === "function") {
      promise.catch(function () {});
    }
  }
  function setupVideo(video) {
    if (video.__neuformVideoReady === true) return;
    video.__neuformVideoReady = true;
    video.muted = true;
    video.playsInline = true;
    var preset = video.dataset.neuformVideoPreset || "loop-in-view";
    if (preset === "hover") {
      video.addEventListener("mouseenter", function () { playVideo(video); });
      video.addEventListener("mouseleave", function () {
        video.pause();
        video.currentTime = 0;
      });
      return;
    }
    if (!("IntersectionObserver" in window)) {
      playVideo(video);
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          if (preset === "play-once" && video.__neuformVideoPlayed === true) return;
          playVideo(video);
        } else {
          video.pause();
        }
      });
    }, { threshold: 0.35 });
    if (preset === "play-once") {
      video.addEventListener("ended", function () {
        video.__neuformVideoPlayed = true;
      }, { once: true });
    }
    observer.observe(video);
  }
  function setupVideos() {
    document.querySelectorAll("video[data-neuform-video-preset]").forEach(setupVideo);
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupVideos);
  } else {
    setupVideos();
  }
})();<\/script></body></html>`,te=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>N E X U S &mdash; Tactile Fluidics</title>
    
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
</head>
<body class="bg-[#02040a] text-neutral-200 h-screen w-screen overflow-hidden font-['Inter',sans-serif] selection:bg-[#06b6d4] selection:text-black relative">

    <!-- Ambient WebGL Background -->
    <canvas id="bg-canvas" class="absolute inset-0 w-full h-full block pointer-events-none z-0 opacity-0" aria-hidden="true"></canvas>

    <!-- Top Navigation / Logo -->
    <header class="absolute top-0 left-0 w-full p-6 sm:p-10 z-20 flex justify-between items-center opacity-0 nav-reveal">
        <div class="font-light text-sm tracking-[0.4em] uppercase text-neutral-400">
            N E X U S
        </div>
        <div class="flex gap-4">
            <div class="w-2 h-2 rounded-full bg-[#06b6d4] animate-pulse" style="animation-duration: 3s;"></div>
        </div>
    </header>

    <!-- Main Content Layer -->
    <main class="content-layer relative z-10 w-full h-full flex flex-col items-center justify-center px-4">
        
        <div class="tag font-mono text-xs tracking-[0.3em] uppercase text-[#06b6d4] mb-8 sm:mb-12 opacity-0 transform translate-y-4">
            System 07 / Viscosity
        </div>

        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight font-normal text-neutral-100 flex flex-wrap justify-center gap-x-3 gap-y-2 max-w-4xl text-center mb-6 overflow-hidden">
            <span class="overflow-hidden inline-block"><span class="reveal-word inline-block translate-y-full will-change-transform">Viscous</span></span>
            <span class="overflow-hidden inline-block"><span class="reveal-word inline-block translate-y-full will-change-transform text-neutral-400">Fields.</span></span>
            <span class="overflow-hidden inline-block"><span class="reveal-word inline-block translate-y-full will-change-transform">Reengineered.</span></span>
        </h1>

        <p class="subhead text-sm sm:text-base text-neutral-400 font-light tracking-wide max-w-md text-center mb-12 sm:mb-16 opacity-0 transform translate-y-4">
            Delve into high-fidelity tactile feedback arrays. Engineered for continuous adaptive state manipulation.
        </p>

        <!-- CTA Component -->
        <div class="intro opacity-0 transform translate-y-[-20px] scale-95 will-change-transform">
            <!-- Subtle Cyan Gradient Border Wrapper -->
            <div class="p-[1px] rounded-[19px] bg-gradient-to-b from-cyan-500/30 via-neutral-800/20 to-cyan-950/40 shadow-2xl">
                <button class="relative flex items-center justify-center w-[250px] h-[70px] border-0 p-0 rounded-[18px] overflow-hidden cursor-pointer bg-[#050b11] transition-all duration-300 ease-out shadow-[0_22px_44px_rgba(4,24,36,0.35),0_3px_9px_rgba(5,10,15,0.4),inset_0_0_0_1px_rgba(255,255,255,0.05)] hover:-translate-y-[2px] hover:shadow-[0_28px_56px_rgba(6,182,212,0.25),0_4px_11px_rgba(5,10,15,0.45)] active:translate-y-[1px] active:scale-[0.985] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#06b6d4] focus-visible:outline-offset-[5px]" id="btn" type="button">
                    <canvas id="gl" aria-hidden="true" class="absolute inset-0 w-full h-full block"></canvas>
                    <span class="relative z-10 pointer-events-none font-normal text-sm tracking-[0.3em] indent-[0.3em] text-[#e0faff] drop-shadow-[0_1px_10px_rgba(0,18,25,0.85)] flex items-center gap-2">
                        SURGE
                        <iconify-icon icon="solar:arrow-right-linear" width="18" height="18" stroke-width="1.5" class="ml-1 opacity-80"></iconify-icon>
                    </span>
                </button>
            </div>
        </div>

        <p class="note font-light text-xs text-neutral-500 tracking-wide mt-8 sm:mt-10 opacity-0 transform translate-y-4">
            Sweep the cursor to generate turbulence, click to discharge.
        </p>
    </main>

    <script>
        // --------------------------------------------------------
        // GSAP Animations & Parallax
        // --------------------------------------------------------
        document.addEventListener("DOMContentLoaded", () => {
            const tl = gsap.timeline();

            // Background Fade In
            tl.to("#bg-canvas", { opacity: 1, duration: 2, ease: "power2.inOut" }, 0);
            
            // Nav Reveal
            tl.to(".nav-reveal", { opacity: 1, duration: 1, ease: "power2.out" }, 0.5);

            // Tag Reveal
            tl.to(".tag", { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, 0.8);

            // Masked Word Stagger
            tl.to(".reveal-word", {
                y: "0%",
                duration: 1,
                stagger: 0.12,
                ease: "power4.out"
            }, 0.9);

            // Subhead Reveal
            tl.to(".subhead", { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, 1.4);

            // Button Drop/Bounce Effect (Replicating CSS Keyframes)
            tl.to(".intro", {
                y: 0,
                scale: 1,
                opacity: 1,
                duration: 1.2,
                ease: "elastic.out(1, 0.6)"
            }, 1.6);

            // Note Reveal
            tl.to(".note", { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, 1.8);

            // Subtle Mouse Parallax
            document.addEventListener("mousemove", (e) => {
                const x = (e.clientX / window.innerWidth - 0.5) * 15;
                const y = (e.clientY / window.innerHeight - 0.5) * 15;
                
                gsap.to(".content-layer", {
                    x: x,
                    y: y,
                    duration: 1.5,
                    ease: "power2.out",
                    overwrite: "auto"
                });
            });
        });

        // --------------------------------------------------------
        // Ambient Background WebGL
        // --------------------------------------------------------
        (function initAmbientBG() {
            const canvas = document.getElementById('bg-canvas');
            const gl = canvas.getContext('webgl');
            if (!gl) return;

            const vs = 'attribute vec2 p; void main() { gl_Position = vec4(p, 0.0, 1.0); }';
            const fs = \`
                precision mediump float;
                uniform vec2 u_res;
                uniform float u_time;

                float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); }
                float noise(vec2 p) {
                    vec2 i = floor(p);
                    vec2 f = fract(p);
                    vec2 u = f * f * (3.0 - 2.0 * f);
                    return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
                               mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
                }
                float fbm(vec2 p) {
                    float v = 0.0, a = 0.5;
                    for (int i = 0; i < 4; i++) { v += a * noise(p); p = p * 2.0; a *= 0.5; }
                    return v;
                }

                void main() {
                    vec2 uv = gl_FragCoord.xy / u_res;
                    uv.x *= u_res.x / u_res.y;
                    
                    float t = u_time * 0.15;
                    
                    // Slow moving dark liquid
                    vec2 q = vec2(fbm(uv + t), fbm(uv + vec2(1.0) + t));
                    vec2 r = vec2(fbm(uv + 1.0*q + vec2(1.7, 9.2) + 0.15*t),
                                  fbm(uv + 1.0*q + vec2(8.3, 2.8) + 0.126*t));
                    
                    float f = fbm(uv + r);
                    
                    // Core dark colors, subtle icy/cyan hints replacing fiery shades
                    vec3 col = mix(vec3(0.01, 0.02, 0.03), vec3(0.01, 0.04, 0.07), f);
                    col = mix(col, vec3(0.02, 0.07, 0.12), clamp(length(q) * 0.5, 0.0, 1.0));
                    
                    // Vignette
                    vec2 e = gl_FragCoord.xy / u_res * (1.0 - gl_FragCoord.xy / u_res);
                    col *= 0.5 + 0.5 * pow(e.x * e.y * 15.0, 0.3);
                    
                    gl_FragColor = vec4(col, 1.0);
                }
            \`;

            function compile(type, src) {
                const s = gl.createShader(type);
                gl.shaderSource(s, src);
                gl.compileShader(s);
                return s;
            }

            const prog = gl.createProgram();
            gl.attachShader(prog, compile(gl.VERTEX_SHADER, vs));
            gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, fs));
            gl.linkProgram(prog);
            gl.useProgram(prog);

            const buf = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, buf);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
            
            const locP = gl.getAttribLocation(prog, 'p');
            gl.enableVertexAttribArray(locP);
            gl.vertexAttribPointer(locP, 2, gl.FLOAT, false, 0, 0);

            const uRes = gl.getUniformLocation(prog, 'u_res');
            const uTime = gl.getUniformLocation(prog, 'u_time');

            function resize() {
                const dpr = Math.min(window.devicePixelRatio || 1, 2);
                canvas.width = window.innerWidth * dpr;
                canvas.height = window.innerHeight * dpr;
                gl.viewport(0, 0, canvas.width, canvas.height);
            }
            window.addEventListener('resize', resize);
            resize();

            const start = performance.now();
            function render(now) {
                gl.uniform2f(uRes, canvas.width, canvas.height);
                gl.uniform1f(uTime, (now - start) / 1000);
                gl.drawArrays(gl.TRIANGLES, 0, 3);
                requestAnimationFrame(render);
            }
            requestAnimationFrame(render);
        })();

        // --------------------------------------------------------
        // Interactive Liquid Button WebGL (from reference)
        // --------------------------------------------------------
        (function initButtonWebGL() {
            var btn = document.getElementById('btn');
            var canvas = document.getElementById('gl');
            var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            var gl = canvas.getContext('webgl');
            
            if (!gl) { 
                btn.style.background = 'linear-gradient(to top, #0284c7 0%, #06b6d4 52%, #a5f3fc 55%, #050b11 56%)';
                canvas.style.display = 'none';
                return; 
            }

            var VS = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
            var FS = [
                'precision highp float;',
                'uniform vec2 u_res;',
                'uniform float u_time;',
                'uniform float u_level;',
                'uniform float u_tilt;',
                'uniform float u_slosh;',
                'float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);}',
                'float noise(vec2 p){',
                '  vec2 i=floor(p), f=fract(p);',
                '  vec2 u=f*f*(3.0-2.0*f);',
                '  return mix(mix(hash(i),hash(i+vec2(1.,0.)),u.x),',
                '             mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),u.x),u.y);',
                '}',
                'float fbm(vec2 p){',
                '  float v=0.0; float a=0.5;',
                '  for(int i=0;i<4;i++){ v+=a*noise(p); p=p*2.04+vec2(11.3,7.1); a*=0.5; }',
                '  return v;',
                '}',
                'void main(){',
                '  vec2 uv = gl_FragCoord.xy / u_res;',
                '  float ar = u_res.x / u_res.y;',
                '  float x = uv.x * ar;',
                '  float t = u_time;',
                '  float amp = 0.012 + u_slosh * 0.045;',
                '  float surf = u_level',
                '    + u_tilt * (uv.x - 0.5) * 0.34',
                '    + amp * sin(x * 5.1 + t * 4.6)',
                '    + amp * 0.62 * sin(x * 9.7 + t * (-6.8) + 1.7)',
                '    + amp * 0.38 * sin(x * 14.3 + t * 8.9 + 4.2);',
                '  float d = surf - uv.y;',
                '  vec3 col = mix(vec3(0.03, 0.06, 0.1), vec3(0.05, 0.09, 0.15), uv.y);',
                '  col += vec3(0.02, 0.05, 0.1) * pow(max(0.0, 1.0 - abs(uv.y - 0.88) * 6.0), 2.0);',
                '  float inside = smoothstep(0.0, 0.012, d);',
                '  float depth = clamp(d / max(u_level, 0.001), 0.0, 1.0);',
                '  vec3 liq = mix(vec3(0.0, 0.9, 1.0), vec3(0.02, 0.15, 0.45), depth);',
                '  float caust = fbm(vec2(x * 4.2, (uv.y + t * 0.14) * 4.2));',
                '  liq *= 0.8 + 0.42 * caust;',
                '  liq += vec3(0.02, 0.25, 0.35) * pow(max(0.0, d * 3.0), 1.5) * u_slosh;',
                '  col = mix(col, liq, inside);',
                '  col += vec3(0.4, 0.9, 1.0) * exp(-abs(d) * 80.0) * 0.85;',
                '  col += vec3(0.8, 0.98, 1.0) * exp(-abs(d) * 220.0) * 0.5;',
                '  vec2 e = uv * (1.0 - uv);',
                '  col *= 0.55 + 0.45 * pow(e.x * e.y * 16.0, 0.22);',
                '  gl_FragColor = vec4(col, 1.0);',
                '}'
            ].join('\\n');

            function compile(type, src) {
                var s = gl.createShader(type);
                gl.shaderSource(s, src);
                gl.compileShader(s);
                return s;
            }
            
            var prog = gl.createProgram();
            gl.attachShader(prog, compile(gl.VERTEX_SHADER, VS));
            gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FS));
            gl.linkProgram(prog);
            gl.useProgram(prog);

            var buf = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, buf);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
            var locP = gl.getAttribLocation(prog, 'p');
            gl.enableVertexAttribArray(locP);
            gl.vertexAttribPointer(locP, 2, gl.FLOAT, false, 0, 0);

            var uRes = gl.getUniformLocation(prog, 'u_res');
            var uTime = gl.getUniformLocation(prog, 'u_time');
            var uLevel = gl.getUniformLocation(prog, 'u_level');
            var uTilt = gl.getUniformLocation(prog, 'u_tilt');
            var uSlosh = gl.getUniformLocation(prog, 'u_slosh');

            function resize() {
                var dpr = Math.min(window.devicePixelRatio || 1, 2);
                var w = Math.max(1, Math.round(canvas.clientWidth * dpr));
                var h = Math.max(1, Math.round(canvas.clientHeight * dpr));
                if (canvas.width !== w || canvas.height !== h) {
                    canvas.width = w;
                    canvas.height = h;
                    gl.viewport(0, 0, w, h);
                }
            }
            window.addEventListener('resize', resize);
            resize();

            var BASE = 0.56;
            var level = BASE, gulp = 0;
            var slosh = 0.4, tilt = 0, tiltTarget = 0;
            var lastX = null;
            var last = performance.now();

            btn.addEventListener('mousemove', function (e) {
                var rect = btn.getBoundingClientRect();
                var x = (e.clientX - rect.left) / Math.max(1, rect.width);
                if (lastX !== null) {
                    slosh = Math.min(1.4, slosh + Math.abs(x - lastX) * 2.6);
                }
                lastX = x;
                tiltTarget = Math.max(-1, Math.min(1, (x - 0.5) * 2));
            });
            btn.addEventListener('mouseleave', function () { lastX = null; tiltTarget = 0; });
            btn.addEventListener('focus', function () { slosh = Math.min(1.4, slosh + 0.5); });
            btn.addEventListener('click', function () {
                gulp = 1;
                slosh = Math.min(1.4, slosh + 0.7);
            });

            function frame(now) {
                var dt = Math.min(0.05, (now - last) / 1000);
                last = now;
                slosh *= Math.exp(-1.5 * dt);
                gulp *= Math.exp(-1.1 * dt);
                tilt += (tiltTarget - tilt) * Math.min(1, dt * 5);
                var levelTarget = BASE - 0.36 * gulp;
                level += (levelTarget - level) * Math.min(1, dt * 5.5);
                
                resize();
                gl.uniform2f(uRes, canvas.width, canvas.height);
                gl.uniform1f(uTime, reduced ? 2.0 : now / 1000);
                gl.uniform1f(uLevel, level);
                gl.uniform1f(uTilt, tilt);
                gl.uniform1f(uSlosh, reduced ? 0.25 : slosh);
                gl.drawArrays(gl.TRIANGLES, 0, 3);
                requestAnimationFrame(frame);
            }
            requestAnimationFrame(frame);
        })();
    <\/script>
</body>
</html>`,ae=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nexus Architecture - Topology</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"><\/script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400&display=swap" rel="stylesheet">
</head>
<body class="text-gray-100 antialiased selection:bg-zinc-800 selection:text-white" style="font-family: 'Inter', sans-serif; background: radial-gradient(circle at bottom right, #18181b 0%, #000000 50%, #000000 100%); overflow: hidden; margin: 0; padding: 0; height: 100vh; width: 100vw;">

    <div id="canvasGlow" class="absolute pointer-events-none rounded-full blur-[120px] opacity-[0.15] bg-white transition-all duration-1000" style="z-index: 0; transform: translate(-50%, -50%);"></div>
    <canvas id="animationCanvas" class="absolute inset-0 w-full h-full z-0 pointer-events-none"></canvas>

    <header class="absolute top-10 left-12 right-12 z-50 flex justify-between items-center pointer-events-auto">
        <div class="flex items-center gap-3">
            <iconify-icon icon="solar:globus-linear" class="text-3xl text-white"></iconify-icon>
            <span class="text-xl tracking-tighter font-light text-white">Nexus Architecture</span>
        </div>
        <div class="text-xs tracking-widest uppercase text-gray-500 font-normal">System Topology</div>
    </header>

    <main class="relative z-10 w-full h-full flex items-center">
        
        <div class="pl-12 md:pl-20 max-w-[55vw] z-20 pointer-events-none">
            <h1 class="text-[clamp(4rem,8vw,10rem)] tracking-tighter font-light text-white leading-[0.85] mb-10">
                Expand vs<br>Refine
            </h1>
            <div class="text-xl md:text-2xl text-gray-400 font-light max-w-[42vw] leading-snug flex flex-col gap-8">
                <ul class="list-disc pl-6 text-gray-200 flex flex-col gap-3 marker:text-gray-500">
                    <li>Refinement sharpens focus.</li>
                    <li>Expansion broadens scope.</li>
                </ul>
                <p>
                    Understanding this duality is crucial for system architects. When the core logic holds, refine the parameters. When the constraints limit potential, expand the boundaries. Suboptimal scaling often results from misapplying these principles during rapid deployment.
                </p>
            </div>
        </div>

        <div class="absolute inset-0 pointer-events-none hidden md:block z-20">
            
            <div class="absolute top-[28%] left-[58%] pointer-events-auto transition-transform duration-75" data-float data-float-offset="0">
                <div class="relative bg-black/40 backdrop-blur-md shadow-2xl rounded-full px-4 py-1.5 flex items-center justify-center">
                    <div class="absolute inset-0 rounded-full p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none" style="-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude;"></div>
                    <span class="text-xs font-light text-gray-200">48.2 TB/s</span>
                </div>
                <div class="absolute -right-3 top-1/2 -mt-1 w-2 h-2 bg-white rounded-full">
                    <div class="absolute inset-0 rounded-full animate-ping bg-white opacity-75" style="animation-duration: 2s;"></div>
                </div>
            </div>

            <div class="absolute top-[18%] left-[72%] pointer-events-auto transition-transform duration-75" data-float data-float-offset="3">
                <div class="relative bg-black/40 backdrop-blur-md shadow-2xl rounded-full px-4 py-1.5 flex items-center gap-1.5 justify-center">
                    <div class="absolute inset-0 rounded-full p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none" style="-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude;"></div>
                    <iconify-icon icon="solar:users-group-rounded-linear" class="text-gray-300 text-sm"></iconify-icon>
                    <span class="text-xs font-light text-gray-200">+3,420</span>
                </div>
                <div class="absolute -bottom-3 left-1/2 -ml-1 w-2 h-2 bg-white rounded-full">
                    <div class="absolute inset-0 rounded-full animate-ping bg-white opacity-75" style="animation-duration: 2s; animation-delay: 0.5s;"></div>
                </div>
            </div>

            <div class="absolute top-[35%] left-[82%] pointer-events-auto transition-transform duration-75" data-float data-float-offset="0">
                <div class="relative bg-black/40 backdrop-blur-md shadow-2xl rounded-full px-4 py-1.5 flex items-center justify-center">
                    <div class="absolute inset-0 rounded-full p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none" style="-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude;"></div>
                    <span class="text-xs font-light text-gray-200">2.8 TB/s</span>
                </div>
            </div>

            <div class="absolute top-[45%] left-[52%] pointer-events-auto transition-transform duration-75" data-float data-float-offset="0">
                <div class="absolute -top-12 -right-8 bg-black/40 backdrop-blur-md shadow-2xl rounded-2xl px-4 py-2 w-max">
                    <div class="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none" style="-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude;"></div>
                    <span class="text-xs font-light text-gray-300">Ledger synced.</span>
                    <div class="absolute -bottom-2 left-4 w-4 h-4 bg-zinc-900/80 border-b border-r border-white/5 transform rotate-45 backdrop-blur-md"></div>
                </div>
                <div class="bg-black/40 backdrop-blur-md shadow-2xl rounded-full p-1.5 relative z-10">
                    <div class="absolute inset-0 rounded-full p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none" style="-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude;"></div>
                    <img src="https://i.pravatar.cc/150?img=47" alt="Node Operator" class="w-12 h-12 rounded-full object-cover grayscale opacity-80">
                </div>
                <div class="absolute -bottom-4 left-1/2 -ml-1 w-2 h-2 bg-white rounded-full">
                    <div class="absolute inset-0 rounded-full animate-ping bg-white opacity-75" style="animation-duration: 2s; animation-delay: 1s;"></div>
                </div>
            </div>

            <div class="absolute top-[58%] left-[62%] pointer-events-auto transition-transform duration-75" data-float data-float-offset="3">
                <div class="relative bg-black/40 backdrop-blur-md shadow-2xl rounded-2xl p-3 shadow-lg">
                    <div class="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none" style="-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude;"></div>
                    <iconify-icon icon="solar:user-circle-linear" class="text-gray-400 text-3xl"></iconify-icon>
                </div>
                <div class="absolute -bottom-4 left-1/2 -ml-1 w-2 h-2 bg-white rounded-full">
                    <div class="absolute inset-0 rounded-full animate-ping bg-white opacity-75" style="animation-duration: 2s; animation-delay: 0.2s;"></div>
                </div>
            </div>

            <div class="absolute top-[55%] left-[88%] pointer-events-auto transition-transform duration-75" data-float data-float-offset="0">
                <div class="relative bg-black/40 backdrop-blur-md shadow-2xl rounded-full px-4 py-1.5 flex items-center justify-center">
                    <div class="absolute inset-0 rounded-full p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none" style="-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude;"></div>
                    <span class="text-xs font-light text-gray-200">9.12 PB/s</span>
                </div>
            </div>

            <div class="absolute top-[72%] left-[55%] pointer-events-auto transition-transform duration-75" data-float data-float-offset="3">
                <div class="relative bg-black/40 backdrop-blur-md shadow-2xl rounded-2xl px-4 py-3 flex items-center gap-3">
                    <div class="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none" style="-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude;"></div>
                    <div class="rounded-full border border-zinc-700 p-0.5">
                        <iconify-icon icon="solar:user-circle-linear" class="text-gray-300 text-2xl"></iconify-icon>
                    </div>
                    <div>
                        <div class="text-xs font-light text-gray-200">AP-South-2</div>
                        <div class="text-xs font-light text-gray-500">Replicating</div>
                    </div>
                </div>
            </div>

            <div class="absolute top-[80%] left-[75%] pointer-events-auto transition-transform duration-75" data-float data-float-offset="0">
                <div class="relative bg-black/40 backdrop-blur-md shadow-2xl rounded-2xl px-4 py-3 flex items-center gap-3">
                    <div class="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none" style="-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude;"></div>
                    <div class="rounded-full border border-zinc-700 p-0.5">
                        <iconify-icon icon="solar:user-circle-linear" class="text-gray-300 text-2xl"></iconify-icon>
                    </div>
                    <div>
                        <div class="text-xs font-light text-gray-200">EU-North-1</div>
                        <div class="text-xs font-light text-gray-500">Validating</div>
                    </div>
                </div>
                <div class="absolute -bottom-4 left-12 w-2 h-2 bg-white rounded-full">
                    <div class="absolute inset-0 rounded-full animate-ping bg-white opacity-75" style="animation-duration: 2s; animation-delay: 0.8s;"></div>
                </div>
            </div>

            <div class="absolute top-[40%] left-[72%] pointer-events-auto transition-transform duration-75" data-float data-float-offset="0">
                <div class="absolute -top-10 -right-6 bg-black/40 backdrop-blur-md shadow-2xl rounded-2xl px-4 py-2 w-max z-10">
                    <div class="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none" style="-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude;"></div>
                    <span class="text-xs font-light text-gray-300">Payload secured.</span>
                </div>
                <div class="bg-black/40 backdrop-blur-md shadow-2xl rounded-full p-2 relative z-0">
                    <div class="absolute inset-0 rounded-full p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none" style="-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude;"></div>
                    <div class="w-10 h-10 bg-zinc-800/80 rounded-full flex items-center justify-center shadow-inner">
                        <iconify-icon icon="solar:rocket-linear" class="text-white text-xl"></iconify-icon>
                    </div>
                </div>
                <div class="absolute top-12 left-6 w-2 h-2 bg-white rounded-full">
                    <div class="absolute inset-0 rounded-full animate-ping bg-white opacity-75" style="animation-duration: 2s; animation-delay: 1.5s;"></div>
                </div>
            </div>

            <div class="absolute top-[68%] left-[82%] pointer-events-auto transition-transform duration-75" data-float data-float-offset="0">
                <div class="absolute -top-10 -left-12 bg-black/40 backdrop-blur-md shadow-2xl rounded-2xl px-4 py-2 w-max">
                    <div class="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none" style="-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude;"></div>
                    <span class="text-xs font-light text-gray-300">Channel encrypted.</span>
                </div>
                <div class="relative bg-black/40 backdrop-blur-md shadow-2xl rounded-full p-2">
                    <div class="absolute inset-0 rounded-full p-[1px] bg-gradient-to-br from-white/30 via-white/5 to-transparent pointer-events-none" style="-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude;"></div>
                    <div class="w-8 h-8 bg-zinc-800/80 border border-zinc-600/50 rounded-full flex items-center justify-center shadow-sm">
                        <iconify-icon icon="solar:bolt-linear" class="text-gray-200 text-lg"></iconify-icon>
                    </div>
                </div>
                <div class="absolute -bottom-3 left-5 w-2 h-2 bg-white rounded-full">
                    <div class="absolute inset-0 rounded-full animate-ping bg-white opacity-75" style="animation-duration: 2s; animation-delay: 1.1s;"></div>
                </div>
            </div>

        </div>

    </main>

    <footer class="absolute bottom-10 left-12 right-12 z-50 flex justify-between items-center pointer-events-auto">
        <div class="text-xs tracking-widest uppercase text-gray-500 font-normal">Internal Draft & Restricted</div>
        <div class="text-xs tracking-widest uppercase text-gray-500 font-normal">01</div>
    </footer>

    <script>
        const canvas = document.getElementById('animationCanvas');
        const floaters = document.querySelectorAll('[data-float]');
        
        let width = window.innerWidth;
        let height = window.innerHeight;

        const scene = new THREE.Scene();
        scene.fog = new THREE.Fog(0x0a0a0a, 300, 950);

        const camera = new THREE.PerspectiveCamera(60, width / height, 1, 2000);
        camera.position.z = 650;

        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        const group = new THREE.Group();
        scene.add(group);

        const numNodes = 120;
        const nodes = [];
        const nodeGeo = new THREE.SphereGeometry(1, 16, 16);
        
        for(let i = 0; i < numNodes; i++) {
            let phi = Math.acos(-1 + (2 * i) / numNodes);
            let theta = Math.sqrt(numNodes * Math.PI) * phi;
            let x = Math.cos(theta) * Math.sin(phi);
            let y = Math.sin(theta) * Math.sin(phi);
            let z = Math.cos(phi);

            let mesh = new THREE.Mesh(
                nodeGeo,
                new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.9 })
            );
            mesh.position.set(x, y, z);
            mesh.userData = {
                baseSize: Math.random() * 1.5 + 1.0,
                pulseSpeed: Math.random() * 0.02 + 0.015,
                pulseOffset: Math.random() * Math.PI * 2
            };
            group.add(mesh);
            nodes.push(mesh);
        }

        const linePos = [];
        const lineColors = [];
        for(let i = 0; i < numNodes; i++) {
            for(let j = i + 1; j < numNodes; j++) {
                let dist = nodes[i].position.distanceTo(nodes[j].position);
                const threshold = 0.45;
                if(dist < threshold) {
                    linePos.push(nodes[i].position.x, nodes[i].position.y, nodes[i].position.z);
                    linePos.push(nodes[j].position.x, nodes[j].position.y, nodes[j].position.z);
                    
                    let alpha = (1 - dist / threshold) * 0.8;
                    lineColors.push(alpha, alpha, alpha);
                    lineColors.push(alpha, alpha, alpha);
                }
            }
        }
        
        const lineGeo = new THREE.BufferGeometry();
        lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePos, 3));
        lineGeo.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 3));
        const lineMat = new THREE.LineBasicMaterial({
            vertexColors: true,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
            opacity: 0.65
        });
        const lines = new THREE.LineSegments(lineGeo, lineMat);
        group.add(lines);

        function resize() {
            width = window.innerWidth;
            height = window.innerHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
            
            const R = width > 768 ? 380 : 200;
            group.scale.set(R, R, R);
            
            const centerX = width > 768 ? width * 0.2 : 0; 
            const centerY = width > 768 ? -height * 0.05 : -height * 0.2;
            group.position.set(centerX, centerY, 0);

            const glow = document.getElementById('canvasGlow');
            if (glow) {
                glow.style.left = \`\${(width / 2) + centerX}px\`;
                glow.style.top = \`\${(height / 2) - centerY}px\`;
                glow.style.width = \`\${R * 2.8}px\`;
                glow.style.height = \`\${R * 2.8}px\`;
            }
        }

        window.addEventListener('resize', resize);
        resize();

        let time = 0;
        function animate() {
            requestAnimationFrame(animate);
            time += 1;
            
            group.rotation.y = time * 0.0018;
            group.rotation.x = 0.2;
            group.rotation.z = time * 0.0006;

            nodes.forEach(mesh => {
                let p = mesh.userData;
                let pulse = (Math.sin((time * p.pulseSpeed) + p.pulseOffset) + 1) / 2;
                
                let targetRadius = p.baseSize + pulse * 1.8;
                let scale = targetRadius / group.scale.x;
                
                mesh.scale.set(scale, scale, scale);
                mesh.material.opacity = 0.4 + (pulse * 0.6);
            });

            floaters.forEach(el => {
                const offset = Number(el.getAttribute('data-float-offset'));
                const y = Math.sin((time * 0.02) + offset) * 12;
                const rot = Math.cos((time * 0.015) + offset) * 1.5;
                el.style.transform = \`translateY(\${y}px) rotate(\${rot}deg)\`;
            });

            renderer.render(scene, camera);
        }
        
        animate();
    <\/script>
</body>
</html>`,re=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Component Preview</title>
  <script src="https://cdn.tailwindcss.com"><\/script>
  <style>
    html, body {
      height: 100%;
      margin: 0;
      padding: 0;
    }
    body {
      height: 100%;
      overflow: auto;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #000000;
      color: #ffffff;
    }
    .component-wrapper {
      width: 100%;
      height: 100%;
      padding: 0;
      box-sizing: border-box;
      overflow: auto;
    }
  </style>
</head>
<body>
  <div class="component-wrapper">
    <html><head></head><body><button class="group relative inline-flex min-w-[120px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:text-white shadow-[0_2.8px_2.2px_rgba(0,0,0,0.3),_0_6.7px_5.3px_rgba(0,0,0,0.35),_0_12.5px_10px_rgba(0,0,0,0.4)] overflow-hidden font-semibold text-neutral-400 tracking-tight bg-neutral-800 border-neutral-600 border rounded-full pt-[12px] pr-[20px] pb-[12px] pl-[20px] items-center justify-center">
  <!-- Original text (slides down on hover) -->
  <span class="relative z-10 font-medium rounded-full transition-all duration-500 ease-out group-hover:transform group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md">Download Mac app</span>
  
  <!-- Clone text (slides in from top on hover) -->
  <span class="absolute inset-0 z-10 flex items-center justify-center transition-all duration-300 ease-in-out transform -translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none font-medium opacity-0 rounded-full blur-md">Download Mac app</span>

  <!-- replaces the old ::before underline -->
  <span aria-hidden="true" class="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80 bg-gradient-to-r from-transparent via-neutral-200 to-transparent rounded-full blur-[2px]"></span>
  
  <!-- bottom light gradient on hover -->
  <span aria-hidden="true" class="absolute bottom-0 left-0 right-0 h-[100%] group-hover:opacity-60 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] pointer-events-none bg-gradient-to-t from-white/20 via-white/10 to-transparent rounded-full"></span>
</button></body></html>
  </div>
  
    <script>
      (function() {
        function checkAndCenter() {
          // Use double requestAnimationFrame to ensure DOM is fully painted and layout is stable
          requestAnimationFrame(function() {
            requestAnimationFrame(function() {
              const wrapper = document.querySelector('.component-wrapper');
              if (!wrapper) return;
              
              // Get all child elements
              const children = Array.from(wrapper.children);
              if (children.length === 0) return;
              
              // Temporarily override wrapper styles to shrink-wrap for measurement
              // Set inline styles to shrink-wrap (inline styles override CSS)
              wrapper.style.display = 'inline-block';
              wrapper.style.width = 'auto';
              wrapper.style.height = 'auto';
              wrapper.style.overflow = 'visible';
              wrapper.style.boxSizing = 'content-box';
              
              // Force multiple reflows to ensure styles are fully applied
              void wrapper.offsetHeight;
              void wrapper.offsetWidth;
              void wrapper.offsetHeight;
              
              // Measure the wrapper's content size
              const contentWidth = wrapper.offsetWidth;
              const contentHeight = wrapper.offsetHeight;
              
              // Restore original styles by removing inline styles we added
              wrapper.style.removeProperty('display');
              wrapper.style.removeProperty('width');
              wrapper.style.removeProperty('height');
              wrapper.style.removeProperty('overflow');
              wrapper.style.removeProperty('box-sizing');
              
              // If content is less than 500x500, center it
              if (contentWidth > 0 && contentHeight > 0 && contentWidth < 500 && contentHeight < 500) {
                wrapper.style.display = 'flex';
                wrapper.style.alignItems = 'center';
                wrapper.style.justifyContent = 'center';
              }
            });
          });
        }
        
        // Check immediately and after delays to ensure content is rendered and styled
        function runChecks() {
          checkAndCenter();
          setTimeout(checkAndCenter, 50);
          setTimeout(checkAndCenter, 150);
          setTimeout(checkAndCenter, 300);
          setTimeout(checkAndCenter, 500);
          setTimeout(checkAndCenter, 1000);
        }
        
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', runChecks);
        } else {
          runChecks();
        }
        
        // Also check when images or other resources load
        window.addEventListener('load', () => {
          setTimeout(checkAndCenter, 100);
          setTimeout(checkAndCenter, 300);
        });
        
        // Use ResizeObserver to detect size changes
        if (window.ResizeObserver) {
          setTimeout(() => {
            const wrapper = document.querySelector('.component-wrapper');
            if (wrapper) {
              const observer = new ResizeObserver(() => {
                setTimeout(checkAndCenter, 50);
              });
              observer.observe(wrapper);
            }
          }, 500);
        }
      })();
    <\/script>
  
</body>
</html>
`,ie=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Component Preview</title>
  <script src="https://cdn.tailwindcss.com"><\/script>
  <style>
    html, body {
      height: 100%;
      margin: 0;
      padding: 0;
    }
    body {
      height: 100%;
      overflow: auto;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #000000;
      color: #ffffff;
    }
    .component-wrapper {
      width: 100%;
      height: 100%;
      padding: 0;
      box-sizing: border-box;
      overflow: auto;
    }
  </style>
</head>
<body>
  <div class="component-wrapper">
    <html><head></head><body><button class="group inline-flex overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] rounded-full pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative items-center justify-center">
  <!-- Spinning Border Beam (Visible on Hover) -->
  <span class="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#ffffff_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
  
  <!-- Default Static Border -->
  <span class="absolute inset-0 rounded-full bg-zinc-800 transition-opacity duration-300 group-hover:opacity-0"></span>
  
  <!-- 3D Button Surface & Content -->
  <span class="flex items-center justify-center gap-2 uppercase transition-colors duration-300 group-hover:text-white text-xs font-medium text-zinc-400 tracking-widest bg-gradient-to-b from-zinc-800 to-zinc-950 w-full h-full rounded-full pt-2.5 pr-6 pb-2.5 pl-6 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.3)]">
    <span class="relative z-10">Request Demo</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5">
      <path d="M5 12h14" class=""></path>
      <path d="m12 5 7 7-7 7" class=""></path>
    </svg>
  </span>
</button></body></html>
  </div>
  
    <script>
      (function() {
        function checkAndCenter() {
          // Use double requestAnimationFrame to ensure DOM is fully painted and layout is stable
          requestAnimationFrame(function() {
            requestAnimationFrame(function() {
              const wrapper = document.querySelector('.component-wrapper');
              if (!wrapper) return;
              
              // Get all child elements
              const children = Array.from(wrapper.children);
              if (children.length === 0) return;
              
              // Temporarily override wrapper styles to shrink-wrap for measurement
              // Set inline styles to shrink-wrap (inline styles override CSS)
              wrapper.style.display = 'inline-block';
              wrapper.style.width = 'auto';
              wrapper.style.height = 'auto';
              wrapper.style.overflow = 'visible';
              wrapper.style.boxSizing = 'content-box';
              
              // Force multiple reflows to ensure styles are fully applied
              void wrapper.offsetHeight;
              void wrapper.offsetWidth;
              void wrapper.offsetHeight;
              
              // Measure the wrapper's content size
              const contentWidth = wrapper.offsetWidth;
              const contentHeight = wrapper.offsetHeight;
              
              // Restore original styles by removing inline styles we added
              wrapper.style.removeProperty('display');
              wrapper.style.removeProperty('width');
              wrapper.style.removeProperty('height');
              wrapper.style.removeProperty('overflow');
              wrapper.style.removeProperty('box-sizing');
              
              // If content is less than 500x500, center it
              if (contentWidth > 0 && contentHeight > 0 && contentWidth < 500 && contentHeight < 500) {
                wrapper.style.display = 'flex';
                wrapper.style.alignItems = 'center';
                wrapper.style.justifyContent = 'center';
              }
            });
          });
        }
        
        // Check immediately and after delays to ensure content is rendered and styled
        function runChecks() {
          checkAndCenter();
          setTimeout(checkAndCenter, 50);
          setTimeout(checkAndCenter, 150);
          setTimeout(checkAndCenter, 300);
          setTimeout(checkAndCenter, 500);
          setTimeout(checkAndCenter, 1000);
        }
        
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', runChecks);
        } else {
          runChecks();
        }
        
        // Also check when images or other resources load
        window.addEventListener('load', () => {
          setTimeout(checkAndCenter, 100);
          setTimeout(checkAndCenter, 300);
        });
        
        // Use ResizeObserver to detect size changes
        if (window.ResizeObserver) {
          setTimeout(() => {
            const wrapper = document.querySelector('.component-wrapper');
            if (wrapper) {
              const observer = new ResizeObserver(() => {
                setTimeout(checkAndCenter, 50);
              });
              observer.observe(wrapper);
            }
          }, 500);
        }
      })();
    <\/script>
  
</body>
</html>
`,oe=`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>Uploading — glowing border microinteraction</title>
<style>
  :root{ color-scheme: dark; }
  html,body{ margin:0; height:100%; background:#1d1d1d; }
  body{
    display:flex; align-items:center; justify-content:center;
    overflow:hidden; -webkit-font-smoothing:antialiased;
  }
  #stage{
    position:relative;
    width:min(100vw,100svh); height:min(100vw,100svh);
    background:#1d1d1d;
  }
  #c{ position:absolute; inset:0; width:100%; height:100%; display:block; }
</style>
</head>
<body>
<div id="stage"><canvas id="c"></canvas></div>
<script>
(function(){
  'use strict';

  /* ---------- reference frame: everything authored in a 2048px square ---------- */
  var REF = 2048;
  var CX = 1024 - 22, CY = 1024 + 11.5;   /* button centre in the source recording */
  var PW = 976, PH = 345, PR = 100;       /* plate */
  var GAP = 50;                            /* plate edge -> track centre */
  var TW = PW + 2*GAP, TH = PH + 2*GAP, TR = PR + GAP;
  var TRACK_W = 13, CORE_W = 14, GLOW_W = 12;

  var DUR = 2.70;                          /* one lap of the trace = one loop */
  var TAIL = 0.389;                        /* comet length, in laps */
  var SHIM_OFF = 0.898;                    /* lap phase where the text sweep turns at the left */
  var TXT_W = 778, TXT_CAP = 120, TXT_BASE = 1093;
  var FONT = '300 100px -apple-system, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Inter, system-ui, "Segoe UI", Roboto, sans-serif';

  var cv = document.getElementById('c'), ctx = cv.getContext('2d');
  var gl = document.createElement('canvas'), gx = gl.getContext('2d');   /* comet, glow tint */
  var co = document.createElement('canvas'), cox = co.getContext('2d');  /* comet, core tint */
  var S = 0, k = 1, dpr = 1;
  var canFilter = (function(){ var t=document.createElement('canvas').getContext('2d'); t.filter='blur(2px)'; return t.filter!=='none'; })();

  /* ---------- geometry: rounded rect sampled by arc length ---------- */
  function rrPath(c, cx, cy, w, h, r){
    var x = cx - w/2, y = cy - h/2;
    c.beginPath();
    c.moveTo(x+r, y);
    c.lineTo(x+w-r, y);   c.arcTo(x+w, y,     x+w, y+r,     r);
    c.lineTo(x+w, y+h-r); c.arcTo(x+w, y+h,   x+w-r, y+h,   r);
    c.lineTo(x+r, y+h);   c.arcTo(x,   y+h,   x,   y+h-r,   r);
    c.lineTo(x, y+r);     c.arcTo(x,   y,     x+r, y,       r);
    c.closePath();
  }

  /* point on the track outline at arc length s, starting at the top-left corner
     tangent point and running clockwise */
  var SW = TW - 2*TR, SH = TH - 2*TR, ARC = Math.PI*TR/2;
  var PERIM = 2*SW + 2*SH + 4*ARC;
  var L = CX - TW/2, T = CY - TH/2, R = CX + TW/2, B = CY + TH/2;
  function ptAt(s){
    s = s - Math.floor(s/PERIM)*PERIM;
    var a;
    if(s < SW)  return [L+TR+s, T];
    s -= SW;
    if(s < ARC){ a = s/TR; return [R-TR+TR*Math.sin(a), T+TR-TR*Math.cos(a)]; }
    s -= ARC;
    if(s < SH)  return [R, T+TR+s];
    s -= SH;
    if(s < ARC){ a = s/TR; return [R-TR+TR*Math.cos(a), B-TR+TR*Math.sin(a)]; }
    s -= ARC;
    if(s < SW)  return [R-TR-s, B];
    s -= SW;
    if(s < ARC){ a = s/TR; return [L+TR-TR*Math.sin(a), B-TR+TR*Math.cos(a)]; }
    s -= ARC;
    if(s < SH)  return [L, B-TR-s];
    s -= SH;
    a = s/TR; return [L+TR-TR*Math.cos(a), T+TR-TR*Math.sin(a)];
  }

  /* brightness along the comet, sampled off the source clip every 0.0139 lap:
     a hot head, a flat core, then a long uneven fade */
  var TAPER = [1.16,1.09,1.03,1.00,1.02,1.00,1.00,1.00,1.00,0.98,0.97,0.94,0.91,0.89,
               0.84,0.77,0.74,0.65,0.61,0.52,0.43,0.40,0.27,0.23,0.17,0.12,0.075,0.02,0];
  var TSTEP = TAIL/(TAPER.length-1);
  function taper(u){                        /* u = laps behind the head */
    if(u < 0 || u >= TAIL) return 0;
    var f = u/TSTEP, i = Math.floor(f);
    return TAPER[i] + (TAPER[i+1]-TAPER[i])*(f-i);
  }

  /* ---------- sizing ---------- */
  function resize(){
    var st = document.getElementById('stage');
    S = st.clientWidth || 1;
    dpr = Math.min(window.devicePixelRatio || 1, 2.5);
    cv.width = gl.width = co.width = Math.round(S*dpr);
    cv.height = gl.height = co.height = Math.round(S*dpr);
    k = S*dpr/REF;
    fitText();
    render(now);
  }

  /* ---------- text: fit cap-height and total width to the recording ---------- */
  var glyphs = [], fontPx = 169, tracking = 0, textX = 0;
  function fitText(){
    var word = 'Uploading', n = word.length, probe = 200;
    ctx.setTransform(1,0,0,1,0,0);
    ctx.font = FONT.replace('100px', probe+'px');
    var cap = ctx.measureText('U').actualBoundingBoxAscent || probe*0.7;
    fontPx = probe * (TXT_CAP*k) / cap;                 /* cap height matches the source */
    ctx.font = FONT.replace('100px', fontPx+'px');
    glyphs = [];
    var advSum = 0, m;
    for(var i=0;i<n;i++){
      m = ctx.measureText(word[i]);
      glyphs.push({ch:word[i], w:m.width});
      if(i < n-1) advSum += m.width;
    }
    /* the source was measured as ink extents, so lay out to ink, not to advances */
    var lead = ctx.measureText(word[0]).actualBoundingBoxLeft;
    var trail = ctx.measureText(word[n-1]).actualBoundingBoxRight;
    tracking = (TXT_W*k - trail - lead - advSum) / (n-1);
    textX = (CX + 4)*k - TXT_W*k/2 + lead;
  }

  /* ---------- painting ---------- */
  /* the comet is painted opaque into its own layer, then added over the scene, so
     overlapping segments never double-blend */
  function paintComet(c, head, col, hot, width){
    c.setTransform(1,0,0,1,0,0);
    c.clearRect(0,0,c.canvas.width,c.canvas.height);
    c.lineCap = 'round';
    c.lineWidth = width*k;
    var step = 6;                                   /* ref px per segment */
    var n = Math.ceil(TAIL*PERIM/step);
    for(var i=n;i>=1;i--){
      var s1 = head - i*step, s0 = head - (i-1)*step;
      var a = taper((i*step)/PERIM);
      if(a <= 0.002) continue;
      var f = Math.min(a, 1.30), x = Math.max(0, f-1);
      var r = Math.round(Math.min(255, col[0]*f + hot[0]*x));
      var g = Math.round(Math.min(255, col[1]*f + hot[1]*x));
      var b = Math.round(Math.min(255, col[2]*f + hot[2]*x));
      var p1 = ptAt(s1), mid = ptAt((s1+s0)/2), p0 = ptAt(s0);
      c.strokeStyle = 'rgb('+r+','+g+','+b+')';
      c.beginPath();
      c.moveTo(p1[0]*k, p1[1]*k);
      c.lineTo(mid[0]*k, mid[1]*k);
      c.lineTo(p0[0]*k, p0[1]*k);
      c.stroke();
    }
  }

  function plate(c){
    var x = CX - PW/2, y = CY - PH/2;
    var grd = c.createLinearGradient(0, y*k, 0, (y+PH)*k);
    grd.addColorStop(0, '#2e3242');
    grd.addColorStop(0.55, '#2b2f3c');
    grd.addColorStop(1, '#272c36');
    rrPath(c, CX*k, CY*k, PW*k, PH*k, PR*k);
    c.fillStyle = grd;
    c.fill();

    /* neumorphic edges: a hairline of white light just inside the top, a cool
       bounce just inside the bottom */
    c.lineWidth = 5*k;
    var hg = c.createLinearGradient(0, y*k, 0, (y+PH)*k);
    hg.addColorStop(0,    'rgba(226,233,255,0.125)');
    hg.addColorStop(0.10, 'rgba(226,233,255,0)');
    hg.addColorStop(0.90, 'rgba(80,100,255,0)');
    hg.addColorStop(1,    'rgba(80,100,255,0.22)');
    rrPath(c, CX*k, CY*k, (PW-13)*k, (PH-13)*k, (PR-6.5)*k);
    c.strokeStyle = hg;
    c.stroke();
  }

  function label(c, ph){
    /* shimmer: a soft band ping-pongs across the word, twice per lap */
    var q = ph - SHIM_OFF; q -= Math.floor(q);
    var u = q < 0.5 ? q/0.5 : (1-q)/0.5;
    var x0 = textX, w = TXT_W*k;
    var bc = x0 + w*(-0.2375 + 1.475*u);   /* sweeps clear of both ends before turning */
    var bw = w*0.22;
    var g = c.createLinearGradient(bc-bw, 0, bc+bw, 0);
    g.addColorStop(0,    'rgb(83,92,135)');
    g.addColorStop(0.30, 'rgb(97,106,150)');
    g.addColorStop(0.5,  'rgb(133,141,189)');
    g.addColorStop(0.70, 'rgb(97,106,150)');
    g.addColorStop(1,    'rgb(83,92,135)');
    c.fillStyle = g;
    c.strokeStyle = g;
    c.font = FONT.replace('100px', fontPx+'px');
    c.textBaseline = 'alphabetic';
    var x = textX;
    for(var i=0;i<glyphs.length;i++){
      if(glyphs[i].ch === 'g') doubleStoreyG(c);
      else{
        /* the source face sits between Light and Regular, so nudge the stems out */
        c.fillText(glyphs[i].ch, x, TXT_BASE*k);
        c.lineWidth = 1.9*k;
        c.strokeText(glyphs[i].ch, x, TXT_BASE*k);
      }
      x += glyphs[i].w + tracking;
    }
  }

  /* the source sets a double-storey g, which no system face here carries, so it is
     drawn as a monoline: upper bowl, ear, link, lower loop */
  function doubleStoreyG(c){
    c.save();
    c.lineWidth = 11.5*k;
    c.lineCap = 'round';
    c.beginPath();
    c.moveTo(1327*k, 1050*k); c.lineTo(1319*k, 1084*k);              /* link down the left */
    c.stroke();
    c.beginPath();
    c.ellipse(1351.5*k, 1035*k, 30*k, 21*k, 0, 0, Math.PI*2);        /* bowl */
    c.stroke();
    c.beginPath();
    c.ellipse(1353*k, 1100*k, 35*k, 16*k, 0, 0, Math.PI*2);          /* descending loop */
    c.stroke();
    c.beginPath();
    c.moveTo(1352*k, 1011*k);                                        /* ear */
    c.quadraticCurveTo(1382*k, 1003*k, 1390*k, 1017*k);
    c.stroke();
    c.restore();
  }

  function render(t){
    if(!S) return;
    var ph = (t/DUR) % 1; if(ph < 0) ph += 1;
    var head = ph*PERIM;

    ctx.setTransform(1,0,0,1,0,0);
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 1;
    ctx.filter = 'none';
    ctx.fillStyle = '#1d1d1d';
    ctx.fillRect(0,0,cv.width,cv.height);

    /* the faint track the light runs on */
    rrPath(ctx, CX*k, CY*k, TW*k, TH*k, TR*k);
    ctx.lineWidth = TRACK_W*k;
    ctx.strokeStyle = 'rgba(120,140,255,0.048)';
    ctx.stroke();

    /* the travelling light: a blue bloom under a pale core */
    paintComet(gx,  head, [95,125,242], [50,70,120], GLOW_W);
    paintComet(cox, head, [82,90,110],  [70,60,40],  CORE_W);
    ctx.globalCompositeOperation = 'lighter';
    if(canFilter){
      ctx.filter = 'blur('+(28*k)+'px)'; ctx.globalAlpha = 0.62; ctx.drawImage(gl,0,0);
      ctx.filter = 'blur('+(8*k)+'px)';  ctx.globalAlpha = 0.45; ctx.drawImage(gl,0,0);
      ctx.filter = 'blur('+(1.8*k)+'px)';ctx.globalAlpha = 1;    ctx.drawImage(co,0,0);
      ctx.filter = 'none';
    }else{
      ctx.shadowColor = 'rgba(88,122,255,0.9)';
      ctx.shadowBlur = 26*k; ctx.globalAlpha = 0.7; ctx.drawImage(gl,0,0);
      ctx.shadowBlur = 8*k;  ctx.globalAlpha = 0.8; ctx.drawImage(gl,0,0);
      ctx.shadowBlur = 0;    ctx.globalAlpha = 1;   ctx.drawImage(co,0,0);
    }
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = 'source-over';

    /* the button sits over the light, so the inner half of the glow is hidden */
    plate(ctx);
    label(ctx, ph);
  }

  /* ---------- clock ---------- */
  var now = 0, playing = true, last = null;
  function frame(ts){
    if(playing){
      if(last != null) now = (now + (ts-last)/1000) % DUR;
      last = ts;
      render(now);
    }else last = ts;
    requestAnimationFrame(frame);
  }

  window.__DUR = DUR;
  window.__seek = function(t){ playing = false; now = ((t % DUR) + DUR) % DUR; render(now); };
  window.__play = function(){ playing = true; last = null; };
  window.__pause = function(){ playing = false; };
  window.__time = function(){ return now; };

  window.addEventListener('resize', resize);
  if(window.ResizeObserver) new ResizeObserver(resize).observe(document.getElementById('stage'));
  if(document.fonts && document.fonts.ready) document.fonts.ready.then(function(){ fitText(); render(now); });
  resize();
  requestAnimationFrame(frame);
})();
<\/script>
</body>
</html>
`,k=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Performance Diagnostics</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <style>
        :root {
            color-scheme: dark;

            /* procedural noise fields, generated inline so the document stays self-contained.
               fractal noise for print grain, anisotropic noise for brushed metal,
               and a low-frequency field for smudge and dust on the cover glass. */
            --tex-grain: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23g)'/%3E%3C/svg%3E");
            --tex-metal: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='m'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.008 1.5' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='220' height='220' filter='url(%23m)'/%3E%3C/svg%3E");
            --tex-dust: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='d'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.014' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3CfeComponentTransfer%3E%3CfeFuncA type='linear' slope='0.6'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23d)'/%3E%3C/svg%3E");
        }

        /* every dimension inside a gauge is expressed against the card width,
           so one instrument reads identically at 300px and at 900px */
        .gauge-card { container-type: inline-size; }

        /* ---------- mounting plate ---------- */
        .plate {
            position: absolute;
            inset: 0;
            border-radius: 11.5cqw;
            background: radial-gradient(120% 100% at 30% 0%, #121215 0%, #09090A 55%, #060607 100%);
            border: 1px solid rgba(255,255,255,.03);
            box-shadow:
                0px 1px 1px -0.5px rgba(0,0,0,.5),
                0px 3px 3px -1.5px rgba(0,0,0,.4),
                0px 6px 6px -3px rgba(0,0,0,.35),
                0px 12px 12px -6px rgba(0,0,0,.3),
                0px 24px 24px -12px rgba(0,0,0,.25);
            transition: border-color .5s;
        }
        /* fine anodised tooth so the plate is not a flat fill */
        .plate::before {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: inherit;
            background-image: var(--tex-grain), var(--tex-dust);
            background-size: 34cqw 34cqw, 170% 170%;
            background-blend-mode: soft-light, normal;
            mix-blend-mode: screen;
            opacity: .07;
            pointer-events: none;
        }
        .gauge-card:hover .plate { border-color: rgba(255,255,255,.08); }

        /* ---------- instrument shell ---------- */
        .shell {
            position: absolute;
            inset: 13cqw;
            border-radius: 50%;
            padding: 2.2%;
            background:
                var(--tex-metal),
                conic-gradient(from 210deg, #3a3a3d 0deg, #17171a 60deg, #2c2c30 130deg, #0d0d0f 200deg, #313135 280deg, #131316 340deg, #3a3a3d 360deg);
            background-size: 100% 100%, auto;
            background-blend-mode: overlay, normal;
            box-shadow:
                0 18px 40px -12px rgba(0,0,0,.9),
                0 2px 0 rgba(255,255,255,.05),
                inset 0 2px 6px rgba(255,255,255,.10),
                inset 0 -6px 14px rgba(0,0,0,.65);
        }
        .bezel {
            position: relative;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            padding: 3.4%;
            background: radial-gradient(closest-side, #0b0b0d 76%, #212125 92%, #08080a 100%);
            box-shadow: inset 0 1px 1px rgba(255,255,255,.10), inset 0 -3px 8px rgba(0,0,0,.8);
        }
        /* knurled grip ring milled into the bezel edge */
        .bezel::before {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: 50%;
            background: repeating-conic-gradient(from 0deg, rgba(255,255,255,.16) 0deg 0.5deg, rgba(0,0,0,0) 0.5deg 2.2deg);
            -webkit-mask-image: radial-gradient(closest-side, transparent 92%, #000 93.5%, #000 99%, transparent 100%);
            mask-image: radial-gradient(closest-side, transparent 92%, #000 93.5%, #000 99%, transparent 100%);
            opacity: .45;
            pointer-events: none;
        }
        /* brushed tooling marks across the bezel ring */
        .bezel::after {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: 50%;
            background-image: var(--tex-metal);
            background-size: 100% 100%;
            -webkit-mask-image: radial-gradient(closest-side, transparent 95%, #000 96.5%, #000 100%);
            mask-image: radial-gradient(closest-side, transparent 95%, #000 96.5%, #000 100%);
            mix-blend-mode: overlay;
            opacity: .55;
            pointer-events: none;
        }
        /* a turned stainless pan head sunk into a counterbored well */
        .screw {
            position: absolute;
            width: 5cqw;
            aspect-ratio: 1;
            border-radius: 50%;
            background:
                radial-gradient(circle at 34% 26%, rgba(255,255,255,.55) 0%, rgba(255,255,255,.08) 26%, rgba(255,255,255,0) 46%),
                radial-gradient(closest-side, rgba(0,0,0,0) 58%, rgba(0,0,0,.45) 84%, rgba(0,0,0,.7) 100%),
                conic-gradient(from calc(var(--a, 0deg) - 52deg),
                    #9a9ba1 0deg, #43444a 34deg, #c3c4ca 74deg, #4d4e55 118deg,
                    #a7a8ae 168deg, #37383d 214deg, #b2b3b9 262deg, #45464c 312deg, #9a9ba1 360deg);
            box-shadow:
                0 0 0 .16cqw rgba(0,0,0,.6),
                0 .12cqw 0 .16cqw rgba(255,255,255,.05),
                0 .3cqw .6cqw rgba(0,0,0,.75),
                inset 0 -.16cqw .32cqw rgba(0,0,0,.6),
                inset 0 .12cqw .24cqw rgba(255,255,255,.4);
        }
        /* cross drive: dark recess with a lit lower lip so it reads as cut, not printed */
        .screw::before {
            content: "";
            position: absolute;
            inset: 22%;
            transform: rotate(var(--a, 0deg));
            background:
                linear-gradient(#050506, #1e1e23) center / 100% 20% no-repeat,
                linear-gradient(#050506, #1e1e23) center / 20% 100% no-repeat,
                linear-gradient(rgba(255,255,255,.62), rgba(255,255,255,.62)) center calc(50% + .11cqw) / 100% 20% no-repeat,
                linear-gradient(rgba(255,255,255,.62), rgba(255,255,255,.62)) calc(50% + .11cqw) center / 20% 100% no-repeat;
        }
        /* turning marks on the head */
        .screw::after {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: 50%;
            background-image: var(--tex-metal);
            background-size: 100% 100%;
            mix-blend-mode: overlay;
            opacity: .45;
        }

        /* ---------- dial face ---------- */
        .face {
            container-type: inline-size;
            position: relative;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            overflow: hidden;
            box-shadow: inset 0 5px 16px rgba(0,0,0,.5), inset 0 -2px 9px rgba(0,0,0,.4);
        }
        .layer { position: absolute; inset: 0; pointer-events: none; }

        /* a full-bleed square rotated about its centre carries its child around the dial */
        .spoke { position: absolute; inset: 0; }

        .tick {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            border-radius: 1px;
        }
        .tick.minor { top: 9%; width: 0.9%; height: 2.8%; opacity: .5; }
        .tick.major { top: 8%; width: 1.8%; height: 6.4%; }

        .numeral {
            position: absolute;
            left: 50%;
            top: 17.5%;
            line-height: 1;
            white-space: nowrap;
            font-variant-numeric: tabular-nums;
        }

        /* ---------- needle ---------- */
        .needle {
            position: absolute;
            inset: 0;
            transform: rotate(var(--angle, 0deg));
            transition: transform var(--needle-duration, 1200ms) var(--needle-ease, cubic-bezier(.2,.9,.25,1));
            will-change: transform;
        }
        .flutter { position: absolute; inset: 0; }
        .blade {
            position: absolute;
            left: 50%;
            top: 11.5%;
            bottom: 50%;
            width: 3.2%;
            transform: translateX(-50%);
            clip-path: polygon(41% 0, 59% 0, 100% 97%, 100% 100%, 0 100%, 0 97%);
            filter: drop-shadow(0 3px 6px rgba(0,0,0,.55));
        }
        .blade::after {
            content: "";
            position: absolute;
            inset: 7% 40% 20% 40%;
            border-radius: 999px;
            background: linear-gradient(rgba(255,255,255,.34), rgba(255,255,255,0));
        }
        .tail {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 2%;
            height: 9.5%;
            transform: translateX(-50%);
            border-radius: 0 0 999px 999px;
            filter: drop-shadow(0 2px 4px rgba(0,0,0,.5));
        }
        .hub {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            background: radial-gradient(circle at 34% 30%, #5c5c63, #1b1b1f 60%, #050506);
            box-shadow: 0 3px 8px rgba(0,0,0,.75), inset 0 1px 2px rgba(255,255,255,.35);
            display: grid;
            place-items: center;
        }

        /* ---------- glass ---------- */
        .glass {
            position: absolute;
            inset: 0;
            border-radius: 50%;
            background:
                radial-gradient(120% 78% at 22% 6%, rgba(255,255,255,.20) 0%, rgba(255,255,255,.05) 32%, rgba(255,255,255,0) 56%),
                linear-gradient(148deg, rgba(255,255,255,.12) 0%, rgba(255,255,255,0) 40%);
            mix-blend-mode: screen;
            pointer-events: none;
        }
        .glass::after {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: 50%;
            box-shadow: inset 0 0 20px rgba(0,0,0,.5), inset 0 1px 1px rgba(255,255,255,.2);
        }
        /* smudge and settled dust caught by the raking highlight */
        .glass-dust {
            position: absolute;
            inset: 0;
            border-radius: 50%;
            background-image: var(--tex-dust), var(--tex-grain);
            background-size: 130% 130%, 30.03cqw 30.03cqw;
            mix-blend-mode: soft-light;
            opacity: .3;
            pointer-events: none;
        }

        /* printed-dial tooth, held under the ticks and numerals */
        .face-grain {
            position: absolute;
            inset: 0;
            background-image: var(--tex-grain);
            background-size: 25.4cqw 25.4cqw;
            mix-blend-mode: overlay;
            opacity: .13;
            pointer-events: none;
        }

        /* ---------- centre stack typography ---------- */
        .stack { position: absolute; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; }
        .cap { font-size: 2.89cqw; letter-spacing: .42em; text-indent: .42em; line-height: 1; }
        .cap-sm { font-size: 2.43cqw; letter-spacing: .3em; text-indent: .3em; line-height: 1; }
        .readout { font-size: 8.55cqw; font-weight: 300; line-height: 1; font-variant-numeric: tabular-nums; }

        /* ---------- motion ---------- */
        @keyframes flutter { 0%, 100% { transform: rotate(-.4deg); } 50% { transform: rotate(.4deg); } }
        .flutter[data-live] { animation: flutter 2.6s ease-in-out infinite; }

        @keyframes pulse-soft { 0%, 100% { opacity: .35; } 50% { opacity: 1; } }
        .pulse { animation: pulse-soft 1.4s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
            .needle, [data-peak], [data-soc] { transition: none !important; }
            .flutter[data-live], .pulse { animation: none !important; }
            [data-anim] { transition: none !important; }
        }
    </style>
</head>
<body class="bg-black min-h-screen text-white font-sans flex flex-col items-center justify-center p-6 sm:p-12 selection:bg-[#E26226] selection:text-white">

    <!-- Header Section -->
    <div data-anim="true" class="max-w-4xl w-full mb-16 text-center" style="opacity: 0; transform: translateY(20px); filter: blur(4px); transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);">
        <h1 class="text-3xl sm:text-5xl font-extralight tracking-tight mb-4 text-white/90" id="hero-title">
            Performance Diagnostics
        </h1>
        <p class="text-white/40 text-sm sm:text-base max-w-xl mx-auto font-extralight" id="hero-subtitle">
            Advanced tracking interfaces engineered for extreme conditions. Analyze vital statistics instantly with unmatched precision.
        </p>
    </div>

    <!-- Dashboard Container -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 w-full max-w-5xl justify-items-center">

        <!-- Card 1: Tachometer -->
        <div id="gauge-tachometer" data-anim="true" data-gauge="tachometer" class="gauge-card w-full max-w-[340px] aspect-square relative group" style="opacity: 0; transform: translateY(20px); filter: blur(4px); transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1); transition-delay: 100ms;">
            <div class="plate">
                <span class="screw" style="--a:26deg;top:6.4cqw;left:6.4cqw"></span>
                <span class="screw" style="--a:-15deg;top:6.4cqw;right:6.4cqw"></span>
                <span class="screw" style="--a:42deg;bottom:6.4cqw;left:6.4cqw"></span>
                <span class="screw" style="--a:7deg;bottom:6.4cqw;right:6.4cqw"></span>
                <div class="shell">
                    <div class="bezel">
                        <div class="face" style="background: radial-gradient(closest-side at 50% 32%, #F58135 0%, #E76A2A 44%, #D0541B 74%, #B94512 100%);">
                            <!-- machined sunburst -->
                            <div class="layer" style="background: repeating-conic-gradient(from 0deg, rgba(255,255,255,.055) 0deg 1.2deg, rgba(0,0,0,.05) 1.2deg 2.4deg); -webkit-mask-image: radial-gradient(closest-side, #000 0%, #000 58%, transparent 66%); mask-image: radial-gradient(closest-side, #000 0%, #000 58%, transparent 66%); opacity:.6;"></div>
                            <!-- scale band with redline -->
                            <div class="layer" data-zone-band style="-webkit-mask-image: radial-gradient(closest-side, transparent 88%, #000 89%, #000 95.5%, transparent 96.5%); mask-image: radial-gradient(closest-side, transparent 88%, #000 89%, #000 95.5%, transparent 96.5%);"></div>

                            <div class="layer" data-ticks></div>
                            <div class="layer" data-numerals></div>

                            <div class="stack" style="top:31%">
                                <span class="cap-sm text-black/55 font-medium">r/min</span>
                                <span class="cap-sm text-black/40" style="margin-top:0.81cqw">&times;1000</span>
                            </div>

                            <!-- oil-temperature sub-dial -->
                            <div class="absolute left-1/2 top-[69%] -translate-x-1/2 -translate-y-1/2 w-[24%] aspect-square rounded-full overflow-hidden border border-black/45 shadow-[inset_0_3px_8px_rgba(0,0,0,.55)]" style="background: radial-gradient(closest-side at 50% 30%, #8C3A11, #6E2A08);">
                                <div class="layer" data-subticks></div>
                                <span class="absolute left-1/2 bottom-[15%] -translate-x-1/2 text-white/55 whitespace-nowrap" style="font-size:1.96cqw;letter-spacing:.2em;text-indent:.2em">TEMP &deg;C</span>
                                <div class="needle" data-subneedle style="--needle-duration:1700ms">
                                    <i class="blade" style="top:19%;width:5.5%;background:linear-gradient(#FCA5A5,#B91C1C)"></i>
                                </div>
                                <div class="hub" style="width:15%"></div>
                            </div>

                            <div class="needle" data-needle style="--needle-ease:cubic-bezier(.16,1.28,.4,1)">
                                <div class="flutter">
                                    <i class="blade" style="background:linear-gradient(#F87171,#DC2626 50%,#991B1B)"></i>
                                    <i class="tail" style="background:linear-gradient(#7F1D1D,#450A0A)"></i>
                                </div>
                            </div>
                            <div class="hub" style="width:9%">
                                <span class="block w-[40%] aspect-square rounded-full bg-[#DC2626] shadow-[0_0_6px_rgba(220,38,38,.85)]"></span>
                            </div>
                            <div class="face-grain"></div>
                            <div class="glass"></div>
                            <div class="glass-dust"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Card 2: Speedometer -->
        <div id="gauge-speedometer" data-anim="true" data-gauge="speedometer" class="gauge-card w-full max-w-[340px] aspect-square relative group" style="opacity: 0; transform: translateY(20px); filter: blur(4px); transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1); transition-delay: 300ms;">
            <div class="plate">
                <span class="screw" style="--a:-33deg;top:6.4cqw;left:6.4cqw"></span>
                <span class="screw" style="--a:18deg;top:6.4cqw;right:6.4cqw"></span>
                <span class="screw" style="--a:5deg;bottom:6.4cqw;left:6.4cqw"></span>
                <span class="screw" style="--a:-48deg;bottom:6.4cqw;right:6.4cqw"></span>
                <div class="shell">
                    <div class="bezel">
                        <div class="face" style="background: radial-gradient(closest-side at 50% 28%, #1d1d21 0%, #141416 50%, #0a0a0b 100%);">
                            <!-- filled travel: a soft inner wash plus a bright rim arc -->
                            <div class="layer" data-progress-wash style="-webkit-mask-image: radial-gradient(closest-side, transparent 66%, #000 80%, #000 86%, transparent 89%); mask-image: radial-gradient(closest-side, transparent 66%, #000 80%, #000 86%, transparent 89%); opacity:.11;"></div>
                            <div class="layer" data-zone-band style="-webkit-mask-image: radial-gradient(closest-side, transparent 88%, #000 89%, #000 95.5%, transparent 96.5%); mask-image: radial-gradient(closest-side, transparent 88%, #000 89%, #000 95.5%, transparent 96.5%);"></div>
                            <div class="layer" data-progress-arc style="-webkit-mask-image: radial-gradient(closest-side, transparent 88%, #000 89%, #000 95.5%, transparent 96.5%); mask-image: radial-gradient(closest-side, transparent 88%, #000 89%, #000 95.5%, transparent 96.5%);"></div>

                            <div class="layer" data-ticks></div>
                            <div class="layer" data-numerals></div>

                            <!-- peak-hold marker -->
                            <div class="spoke" data-peak style="transition: transform 900ms cubic-bezier(.2,.9,.25,1)">
                                <i class="absolute left-1/2 top-[7.4%] -translate-x-1/2 w-[1.3%] h-[4%] bg-white/85 rounded-[1px] shadow-[0_0_7px_rgba(255,255,255,.7)]"></i>
                            </div>

                            <div class="stack" style="top:29%">
                                <iconify-icon icon="solar:shield-star-linear" class="text-white/25" style="font-size:6.24cqw"></iconify-icon>
                                <span class="cap-sm text-white/30" style="margin-top:1.39cqw">km/h</span>
                            </div>

                            <div class="stack" style="top:58%">
                                <span data-readout class="readout text-[#E26226]" style="text-shadow:0 0 12px rgba(226,98,38,.45)">0</span>
                            </div>

                            <!-- odometer -->
                            <div class="stack items-center" style="top:77%">
                                <div class="bg-black/85 border border-white/10 rounded shadow-[inset_0_1px_3px_rgba(0,0,0,.9)] flex flex-col items-center" style="padding:0.92cqw 1.85cqw">
                                    <div class="text-[#E26226] font-mono flex items-center" style="font-size:3.93cqw;letter-spacing:.14em;gap:0.58cqw">
                                        <span>3</span><span>1</span><span>5</span><span>9</span><span class="bg-[#E26226] text-black rounded-[2px]" style="padding:0 0.81cqw">5</span>
                                    </div>
                                    <span class="text-white/30 uppercase" style="font-size:2.08cqw;letter-spacing:.28em;margin-top:0.81cqw">km total</span>
                                </div>
                            </div>

                            <div class="needle" data-needle style="--needle-ease:cubic-bezier(.16,1.28,.4,1)">
                                <div class="flutter">
                                    <i class="blade" style="background:linear-gradient(#6EE7A0,#22C55E 50%,#15803D); filter: drop-shadow(0 0 7px rgba(74,222,128,.6))"></i>
                                    <i class="tail" style="background:linear-gradient(#166534,#052E16)"></i>
                                </div>
                            </div>
                            <div class="hub" style="width:8.5%">
                                <span class="block w-[38%] aspect-square rounded-full bg-[#4ADE80]/85 shadow-[0_0_6px_rgba(74,222,128,.75)]"></span>
                            </div>
                            <div class="face-grain"></div>
                            <div class="glass"></div>
                            <div class="glass-dust"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Card 3: Turbo Boost -->
        <div id="gauge-boost" data-anim="true" data-gauge="boost" class="gauge-card w-full max-w-[340px] aspect-square relative group" style="opacity: 0; transform: translateY(20px); filter: blur(4px); transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1); transition-delay: 500ms;">
            <div class="plate">
                <span class="screw" style="--a:12deg;top:6.4cqw;left:6.4cqw"></span>
                <span class="screw" style="--a:-40deg;top:6.4cqw;right:6.4cqw"></span>
                <span class="screw" style="--a:29deg;bottom:6.4cqw;left:6.4cqw"></span>
                <span class="screw" style="--a:-6deg;bottom:6.4cqw;right:6.4cqw"></span>
                <div class="shell">
                    <div class="bezel">
                        <div class="face" style="background: radial-gradient(closest-side at 50% 26%, #17324F 0%, #0F172A 48%, #030816 100%);">
                            <div class="layer" style="background: repeating-conic-gradient(from 0deg, rgba(56,189,248,.06) 0deg 1.4deg, rgba(0,0,0,0) 1.4deg 2.8deg); -webkit-mask-image: radial-gradient(closest-side, #000 0%, #000 56%, transparent 64%); mask-image: radial-gradient(closest-side, #000 0%, #000 56%, transparent 64%);"></div>
                            <div class="layer" data-zone-band style="-webkit-mask-image: radial-gradient(closest-side, transparent 88%, #000 89%, #000 95.5%, transparent 96.5%); mask-image: radial-gradient(closest-side, transparent 88%, #000 89%, #000 95.5%, transparent 96.5%);"></div>

                            <div class="layer" data-ticks></div>
                            <div class="layer" data-numerals></div>

                            <div class="stack" style="top:30%">
                                <iconify-icon icon="solar:wind-linear" class="text-cyan-400/80" style="font-size:6.47cqw"></iconify-icon>
                                <span class="cap text-white/45" style="margin-top:1.62cqw">BOOST</span>
                            </div>

                            <div class="stack" style="top:57%">
                                <span data-readout class="readout text-cyan-300" style="text-shadow:0 0 12px rgba(34,211,238,.5)">0.00</span>
                                <span class="cap text-cyan-500/70" style="margin-top:1.85cqw">BAR</span>
                            </div>

                            <div class="stack" style="top:79%">
                                <div class="flex items-center text-white/35" style="gap:1.62cqw;font-size:2.19cqw;letter-spacing:.26em">
                                    <span class="rounded-full bg-red-500 pulse" style="width:1.85cqw;height:1.85cqw" data-overboost hidden></span>
                                    <span>WASTEGATE 1.20</span>
                                </div>
                            </div>

                            <div class="needle" data-needle style="--needle-ease:cubic-bezier(.16,1.32,.4,1)">
                                <div class="flutter">
                                    <i class="blade" style="background:linear-gradient(#4DD9F0,#0EB8D7 50%,#0E7490); filter: drop-shadow(0 0 8px rgba(34,211,238,.65))"></i>
                                    <i class="tail" style="background:linear-gradient(#155E75,#083344)"></i>
                                </div>
                            </div>
                            <div class="hub" style="width:9%">
                                <span class="block w-[38%] aspect-square rounded-full bg-cyan-400/85 shadow-[0_0_6px_rgba(34,211,238,.85)]"></span>
                            </div>
                            <div class="face-grain"></div>
                            <div class="glass"></div>
                            <div class="glass-dust"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Card 4: EV Power / Charge -->
        <div id="gauge-power" data-anim="true" data-gauge="power" class="gauge-card w-full max-w-[340px] aspect-square relative group" style="opacity: 0; transform: translateY(20px); filter: blur(4px); transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1); transition-delay: 700ms;">
            <div class="plate">
                <span class="screw" style="--a:47deg;top:6.4cqw;left:6.4cqw"></span>
                <span class="screw" style="--a:3deg;top:6.4cqw;right:6.4cqw"></span>
                <span class="screw" style="--a:-21deg;bottom:6.4cqw;left:6.4cqw"></span>
                <span class="screw" style="--a:35deg;bottom:6.4cqw;right:6.4cqw"></span>
                <div class="shell">
                    <div class="bezel">
                        <div class="face" style="background: radial-gradient(closest-side at 50% 28%, #191624 0%, #111016 50%, #08070B 100%);">
                            <div class="layer" data-zone-band style="-webkit-mask-image: radial-gradient(closest-side, transparent 88%, #000 89%, #000 95.5%, transparent 96.5%); mask-image: radial-gradient(closest-side, transparent 88%, #000 89%, #000 95.5%, transparent 96.5%);"></div>
                            <div class="layer" data-progress-arc style="-webkit-mask-image: radial-gradient(closest-side, transparent 88%, #000 89%, #000 95.5%, transparent 96.5%); mask-image: radial-gradient(closest-side, transparent 88%, #000 89%, #000 95.5%, transparent 96.5%);"></div>

                            <div class="layer" data-ticks></div>
                            <div class="layer" data-numerals></div>

                            <div class="stack" style="top:29%">
                                <iconify-icon icon="solar:bolt-linear" class="text-purple-400/90" style="font-size:6.47cqw"></iconify-icon>
                                <span class="cap text-white/45" style="margin-top:1.62cqw">POWER</span>
                            </div>

                            <div class="stack" style="top:57%">
                                <span data-readout class="readout text-purple-200" style="text-shadow:0 0 12px rgba(192,132,252,.45)">0</span>
                                <span class="cap text-purple-400/70" style="margin-top:1.85cqw">KW</span>
                            </div>

                            <!-- battery state of charge -->
                            <div class="stack" style="top:76%">
                                <div class="rounded-full bg-white/10 overflow-hidden border border-white/10" style="width:23.1cqw;height:1.96cqw">
                                    <div data-soc class="h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-300 transition-[width] duration-[1400ms] ease-out" style="width:0%"></div>
                                </div>
                                <span class="text-white/35" style="font-size:2.19cqw;letter-spacing:.28em;margin-top:1.39cqw">SOC 72%</span>
                            </div>

                            <div class="needle" data-needle style="--needle-ease:cubic-bezier(.16,1.28,.4,1)">
                                <div class="flutter">
                                    <i class="blade" style="background:linear-gradient(#C88CFA,#9333EA 50%,#6B21A8); filter: drop-shadow(0 0 8px rgba(168,85,247,.6))"></i>
                                    <i class="tail" style="background:linear-gradient(#581C87,#2E1065)"></i>
                                </div>
                            </div>
                            <div class="hub" style="width:9%">
                                <span class="block w-[38%] aspect-square rounded-full bg-purple-400/85 shadow-[0_0_6px_rgba(168,85,247,.85)]"></span>
                            </div>
                            <div class="face-grain"></div>
                            <div class="glass"></div>
                            <div class="glass-dust"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <!-- Script for dial construction, reveal, and instrument motion -->
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

            /* ---------- dial specifications ---------- */
            const SPECS = {
                tachometer: {
                    start: -135, sweep: 270, min: 0, max: 7,
                    majorStep: 1, minorPerMajor: 5,
                    numeral: (v) => String(v),
                    numeralStyle: 'font-size:7.39cqw;font-weight:300;color:rgba(0,0,0,.78)',
                    tickColor: (v) => (v >= 5.5 ? '#7F1D1D' : 'rgba(0,0,0,.7)'),
                    zones: [
                        { from: 0, to: 5.5, color: 'rgba(0,0,0,.22)' },
                        { from: 5.5, to: 7, color: 'rgba(185,28,28,.95)' },
                    ],
                    idle: 0, value: 5.2,
                    sub: { start: -110, sweep: 220, min: 40, max: 130, majorStep: 30, minorPerMajor: 3, value: 92 },
                },
                speedometer: {
                    start: -135, sweep: 270, min: 0, max: 160,
                    majorStep: 20, minorPerMajor: 4,
                    numeral: (v) => String(v),
                    numeralStyle: 'font-size:5.31cqw;font-weight:300;color:rgba(255,255,255,.72)',
                    tickColor: (v) => (v >= 140 ? 'rgba(248,113,113,.95)' : 'rgba(255,255,255,.6)'),
                    zones: [
                        { from: 0, to: 140, color: 'rgba(255,255,255,.09)' },
                        { from: 140, to: 160, color: 'rgba(220,38,38,.6)' },
                    ],
                    progress: '#E26226', wash: '#E26226',
                    idle: 0, value: 118, peak: 143,
                    readout: (v) => String(Math.round(v)),
                },
                boost: {
                    start: -135, sweep: 270, min: -1, max: 1.5,
                    majorStep: 0.5, minorPerMajor: 5,
                    numeral: (v) => v.toFixed(1),
                    numeralStyle: 'font-size:4.85cqw;font-weight:300;color:rgba(255,255,255,.7)',
                    tickColor: (v) => (v >= 1.2 ? 'rgba(248,113,113,.95)' : v < 0 ? 'rgba(148,163,184,.65)' : 'rgba(103,232,249,.85)'),
                    zones: [
                        { from: -1, to: 0, color: 'rgba(148,163,184,.55)' },
                        { from: 0, to: 1.2, color: 'rgba(34,211,238,.6)' },
                        { from: 1.2, to: 1.5, color: 'rgba(220,38,38,.9)' },
                    ],
                    idle: -0.85, value: 0.92,
                    readout: (v) => (v >= 0 ? '+' : '−') + Math.abs(v).toFixed(2),
                },
                power: {
                    start: -135, sweep: 270, min: -30, max: 120,
                    majorStep: 30, minorPerMajor: 3,
                    numeral: (v) => (v === -30 ? 'CHG' : String(v)),
                    numeralStyle: 'font-size:4.85cqw;font-weight:300;color:rgba(255,255,255,.68)',
                    tickColor: (v) => (v < 0 ? 'rgba(52,211,153,.85)' : 'rgba(216,180,254,.75)'),
                    zones: [
                        { from: -30, to: 0, color: 'rgba(16,185,129,.7)' },
                        { from: 0, to: 120, color: 'rgba(168,85,247,.3)' },
                    ],
                    progress: '#C084FC', progressFrom: 0,
                    idle: -22, value: 78, soc: 72,
                    readout: (v) => String(Math.round(v)),
                },
            };

            /* ---------- polar helpers ---------- */
            const angleFor = (spec, value) => spec.start + ((value - spec.min) / (spec.max - spec.min)) * spec.sweep;

            const spoke = (angle) => {
                const wrap = document.createElement('div');
                wrap.className = 'spoke';
                wrap.style.transform = \`rotate(\${angle}deg)\`;
                return wrap;
            };

            const arcGradient = (spec, segments) => segments.map((segment) => {
                const from = angleFor(spec, segment.from);
                const span = ((segment.to - segment.from) / (spec.max - spec.min)) * spec.sweep;
                return \`conic-gradient(from \${from}deg, \${segment.color} 0deg, \${segment.color} \${span}deg, transparent \${span}deg)\`;
            }).join(', ');

            function buildTicks(host, spec, options) {
                if (!host) return;
                const settings = options || {};
                const step = spec.majorStep / spec.minorPerMajor;
                const count = Math.round((spec.max - spec.min) / step);
                for (let index = 0; index <= count; index += 1) {
                    const value = spec.min + index * step;
                    const isMajor = index % spec.minorPerMajor === 0;
                    const wrap = spoke(angleFor(spec, value));
                    const tick = document.createElement('i');
                    tick.className = \`tick \${isMajor ? 'major' : 'minor'}\`;
                    tick.style.background = (settings.color || spec.tickColor)(value);
                    if (settings.scale) {
                        tick.style.top = isMajor ? '9%' : '10.5%';
                        tick.style.height = isMajor ? '10%' : '5%';
                        tick.style.width = isMajor ? '3.6%' : '2.2%';
                    }
                    wrap.appendChild(tick);
                    host.appendChild(wrap);
                }
            }

            function buildNumerals(host, spec) {
                if (!host) return;
                const count = Math.round((spec.max - spec.min) / spec.majorStep);
                for (let index = 0; index <= count; index += 1) {
                    const value = Math.round((spec.min + index * spec.majorStep) * 1000) / 1000;
                    const angle = angleFor(spec, value);
                    const wrap = spoke(angle);
                    const numeral = document.createElement('span');
                    numeral.className = 'numeral';
                    numeral.setAttribute('style', spec.numeralStyle);
                    numeral.textContent = spec.numeral(value);
                    numeral.style.transform = \`translateX(-50%) rotate(\${-angle}deg)\`;
                    wrap.appendChild(numeral);
                    host.appendChild(wrap);
                }
            }

            /* ---------- build every dial ---------- */
            document.querySelectorAll('[data-gauge]').forEach((card) => {
                const spec = SPECS[card.dataset.gauge];
                if (!spec) return;

                buildTicks(card.querySelector('[data-ticks]'), spec);
                buildNumerals(card.querySelector('[data-numerals]'), spec);

                const band = card.querySelector('[data-zone-band]');
                if (band && spec.zones) band.style.background = arcGradient(spec, spec.zones);

                if (spec.sub) {
                    buildTicks(card.querySelector('[data-subticks]'), spec.sub, {
                        scale: true,
                        color: (value) => (value >= 115 ? 'rgba(248,113,113,.95)' : 'rgba(255,255,255,.55)'),
                    });
                    const subNeedle = card.querySelector('[data-subneedle]');
                    if (subNeedle) subNeedle.style.setProperty('--angle', \`\${angleFor(spec.sub, spec.sub.min)}deg\`);
                }

                const needle = card.querySelector('[data-needle]');
                if (needle) needle.style.setProperty('--angle', \`\${angleFor(spec, spec.idle)}deg\`);
            });

            /* ---------- instrument sequence ---------- */
            function setArc(card, selector, spec, value, color) {
                const arc = card.querySelector(selector);
                if (!arc || !color) return;
                const from = spec.progressFrom != null ? spec.progressFrom : spec.min;
                arc.style.background = arcGradient(spec, [{ from, to: Math.max(from, value), color }]);
            }

            function countTo(element, spec, from, to, duration) {
                if (!element || !spec.readout) return;
                if (reduceMotion || duration === 0) { element.textContent = spec.readout(to); return; }
                const started = performance.now();
                const step = (now) => {
                    const progress = Math.min(1, (now - started) / duration);
                    const eased = 1 - Math.pow(1 - progress, 3);
                    element.textContent = spec.readout(from + (to - from) * eased);
                    if (progress < 1) requestAnimationFrame(step);
                };
                requestAnimationFrame(step);
            }

            function sweepTo(card, spec, value, duration) {
                const needle = card.querySelector('[data-needle]');
                if (needle) {
                    needle.style.setProperty('--needle-duration', \`\${duration}ms\`);
                    needle.style.setProperty('--angle', \`\${angleFor(spec, value)}deg\`);
                }
                setArc(card, '[data-progress-arc]', spec, value, spec.progress);
                setArc(card, '[data-progress-wash]', spec, value, spec.wash);

                const overboost = card.querySelector('[data-overboost]');
                if (overboost) overboost.hidden = value < 1.2;
            }

            function runInstrument(card) {
                const spec = SPECS[card.dataset.gauge];
                if (!spec) return;
                const readout = card.querySelector('[data-readout]');
                const flutter = card.querySelector('[data-needle] .flutter');
                const peak = card.querySelector('[data-peak]');
                const soc = card.querySelector('[data-soc]');
                const subNeedle = card.querySelector('[data-subneedle]');
                const peakTo = (value) => { if (peak && spec.peak != null) peak.style.transform = \`rotate(\${angleFor(spec, value)}deg)\`; };

                if (soc && spec.soc != null) soc.style.width = \`\${spec.soc}%\`;
                if (subNeedle && spec.sub) subNeedle.style.setProperty('--angle', \`\${angleFor(spec.sub, spec.sub.value)}deg\`);

                if (reduceMotion) {
                    sweepTo(card, spec, spec.value, 0);
                    countTo(readout, spec, spec.value, spec.value, 0);
                    peakTo(spec.peak);
                    return;
                }

                const cycle = () => {
                    if (flutter) flutter.removeAttribute('data-live');

                    /* instrument self-test: full-scale sweep, fall back to rest, settle on the live reading */
                    sweepTo(card, spec, spec.max, 1100);
                    countTo(readout, spec, spec.idle, spec.max, 1100);
                    peakTo(spec.max);

                    setTimeout(() => {
                        sweepTo(card, spec, spec.idle, 900);
                        countTo(readout, spec, spec.max, spec.idle, 900);
                        peakTo(spec.idle);
                    }, 1350);

                    setTimeout(() => {
                        sweepTo(card, spec, spec.value, 1200);
                        countTo(readout, spec, spec.idle, spec.value, 1200);
                        peakTo(spec.peak);
                    }, 2500);

                    setTimeout(() => { if (flutter) flutter.setAttribute('data-live', ''); }, 3900);
                };

                cycle();
                setInterval(cycle, 8000);
            }

            /* ---------- heading word reveal ---------- */
            const wrapWords = (elementId) => {
                const el = document.getElementById(elementId);
                if (!el) return;
                const text = el.innerText.trim().replace(/\\s+/g, ' ');
                el.innerHTML = '';
                const words = text.split(' ');
                words.forEach((word, index) => {
                    const wordWrap = document.createElement('span');
                    wordWrap.style.display = 'inline-block';
                    wordWrap.style.overflow = 'hidden';
                    wordWrap.style.paddingBottom = '4px';

                    const wordSpan = document.createElement('span');
                    wordSpan.className = 'word';
                    wordSpan.style.display = 'inline-block';
                    wordSpan.style.opacity = '0';
                    wordSpan.style.transform = 'translateY(100%)';
                    wordSpan.style.filter = 'blur(4px)';
                    wordSpan.style.transition = 'all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)';
                    wordSpan.style.transitionDelay = \`\${index * 40}ms\`;
                    wordSpan.innerHTML = word + '&nbsp;';

                    wordWrap.appendChild(wordSpan);
                    el.appendChild(wordWrap);
                });
            };

            wrapWords('hero-title');
            wrapWords('hero-subtitle');

            const observer = new IntersectionObserver((entries, self) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;

                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    entry.target.style.filter = 'blur(0)';

                    entry.target.querySelectorAll('.word').forEach((word) => {
                        word.style.opacity = '1';
                        word.style.transform = 'translateY(0)';
                        word.style.filter = 'blur(0)';
                    });

                    if (entry.target.dataset.gauge) setTimeout(() => runInstrument(entry.target), 500);

                    self.unobserve(entry.target);
                });
            }, { root: null, rootMargin: '0px', threshold: 0.1 });

            document.querySelectorAll('[data-anim="true"]').forEach((el) => observer.observe(el));
        });
    <\/script>
</body>
</html>
`,ne=`<!DOCTYPE html>
<html lang="en" class="antialiased selection:bg-cyan-500/30 selection:text-cyan-50">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Logic Core</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
</head>
<body class="bg-[#050505] text-zinc-300 min-h-screen flex items-center justify-center font-['Inter',sans-serif] overflow-x-hidden m-0 p-0" style="background-color: #050505;">

    <!-- Faint Ambient Grid Background -->
    <div class="fixed inset-0 pointer-events-none flex justify-center items-center overflow-hidden z-0" style="opacity: 0.04;">
        <svg class="absolute w-[200vw] h-[200vh]" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="bg-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" stroke-width="1"/>
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#bg-grid)" />
        </svg>
    </div>

    <!-- Main Content Layout -->
    <main class="relative z-10 w-full max-w-5xl mx-auto p-6 md:p-12 flex flex-col md:flex-row gap-6 lg:gap-8 items-stretch justify-center pt-24 pb-24">
        
        <!-- Left Card: Visual Interface (Design) -->
        <article class="flex-1 rounded-[24px] bg-gradient-to-b from-white/10 to-transparent p-[1px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] group/card">
            <div class="bg-[#0A0A0A] rounded-[23px] overflow-hidden flex flex-col h-full w-full">
                
                <!-- Visual Area -->
                <div class="relative w-full h-64 sm:h-72 border-b border-white/5 flex items-center justify-center overflow-hidden bg-[#0A0A0A]" id="svg-container">
                    
                    <!-- SVG Interactive Scene -->
                    <svg width="100%" height="100%" viewBox="0 0 400 300" class="absolute inset-0 pointer-events-none">
                        <!-- Orbiting Rings -->
                        <g class="origin-center" style="transform-origin: 200px 150px;">
                            <circle cx="200" cy="150" r="130" fill="none" stroke="#ffffff" stroke-width="1" stroke-opacity="0.03" stroke-dasharray="4 4" id="ring-outer"/>
                            <circle cx="200" cy="150" r="90" fill="none" stroke="#ffffff" stroke-width="1" stroke-opacity="0.05" />
                            <circle cx="200" cy="150" r="50" fill="none" stroke="#ffffff" stroke-width="1" stroke-opacity="0.08" />
                        </g>

                        <!-- Central Bounding Box -->
                        <rect x="140" y="120" width="120" height="60" fill="none" stroke="#4F46E5" stroke-width="1" stroke-opacity="0.8" stroke-dasharray="2 2"/>
                        <rect x="138" y="118" width="4" height="4" fill="#4F46E5" />
                        <rect x="258" y="118" width="4" height="4" fill="#4F46E5" />
                        <rect x="138" y="178" width="4" height="4" fill="#4F46E5" />
                        <rect x="258" y="178" width="4" height="4" fill="#4F46E5" />

                        <!-- Animated SVG Cursors -->
                        <g id="cursor-alex" style="transform: translate(110px, 90px);">
                            <g>
                                <animateTransform attributeName="transform" type="translate" values="0,0; 0,-6; 0,0" dur="2s" repeatCount="indefinite" />
                                <path d="M0,0 L12,12 L5,12 L0,18 Z" fill="#F97316" />
                                <rect x="10" y="-8" width="42" height="18" rx="9" fill="#F97316" />
                                <text x="31" y="4" font-family="sans-serif" font-size="9" font-weight="500" fill="white" text-anchor="middle" style="letter-spacing: 0.5px;">Alex</text>
                            </g>
                        </g>

                        <g id="cursor-sam" style="transform: translate(130px, 200px);">
                            <g>
                                <animateTransform attributeName="transform" type="translate" values="0,0; 0,-6; 0,0" dur="2.5s" repeatCount="indefinite" />
                                <path d="M0,0 L12,12 L5,12 L0,18 Z" fill="#EC4899" transform="rotate(-30)" />
                                <rect x="12" y="8" width="40" height="18" rx="9" fill="#EC4899" />
                                <text x="32" y="20" font-family="sans-serif" font-size="9" font-weight="500" fill="white" text-anchor="middle" style="letter-spacing: 0.5px;">Sam</text>
                            </g>
                        </g>

                        <g id="cursor-me" style="transform: translate(270px, 180px);">
                            <g>
                                <animateTransform attributeName="transform" type="translate" values="0,0; 0,-6; 0,0" dur="2.2s" repeatCount="indefinite" />
                                <path d="M0,0 L12,12 L5,12 L0,18 Z" fill="#10B981" transform="rotate(-70)" />
                                <rect x="-4" y="14" width="34" height="18" rx="9" fill="#10B981" />
                                <text x="13" y="26" font-family="sans-serif" font-size="9" font-weight="500" fill="white" text-anchor="middle" style="letter-spacing: 0.5px;">Me</text>
                            </g>
                        </g>
                    </svg>

                    <!-- Avatar Nodes -->
                    <div class="absolute w-5 h-5 rounded-full bg-zinc-800 border border-white/10 overflow-hidden shadow-sm" style="top: 25%; left: 30%;">
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&q=80" class="w-full h-full object-cover" alt="Avatar">
                    </div>
                    <div class="absolute w-6 h-6 rounded-full bg-zinc-800 border border-white/10 overflow-hidden shadow-sm" style="top: 60%; right: 20%;">
                        <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&q=80" class="w-full h-full object-cover" alt="Avatar">
                    </div>
                    <div class="absolute w-5 h-5 rounded-full bg-zinc-800 border border-white/10 overflow-hidden shadow-sm" style="bottom: 20%; left: 20%;">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&q=80" class="w-full h-full object-cover" alt="Avatar">
                    </div>
                </div>

                <!-- Text Content -->
                <div class="p-6 md:p-8 flex-1 flex flex-col justify-start">
                    <h2 class="text-xl tracking-tight font-medium text-zinc-100 mb-3 animate-text">Visual Interface</h2>
                    <p class="text-sm text-zinc-400 leading-relaxed animate-text">Construct dynamic layouts using our intuitive node-based system. Collaborate in real-time with your team across unified environments.</p>
                </div>
            </div>
        </article>

        <!-- Right Card: Core Logic (Develop / ThreeJS) -->
        <article class="flex-1 rounded-[24px] bg-gradient-to-b from-white/10 to-transparent p-[1px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] group/card">
            <div class="bg-[#0A0A0A] rounded-[23px] overflow-hidden flex flex-col h-full w-full">
                
                <!-- Visual Area -->
                <div class="relative w-full h-64 sm:h-72 border-b border-white/5 bg-[#050505] overflow-hidden">
                    
                    <!-- ThreeJS Canvas Container -->
                    <div id="three-canvas-container" class="absolute inset-0"></div>

                    <!-- Overlay Terminal Icon -->
                    <div class="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                        <div class="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#0F0F0F]/90 backdrop-blur-md border border-white/10 flex items-center justify-center" style="box-shadow: 0 8px 32px -8px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255,255,255,0.05);">
                            <div class="text-cyan-400 font-mono text-2xl sm:text-3xl font-light tracking-widest flex items-center gap-1">
                                <span>></span><span id="terminal-cursor" class="block w-3 sm:w-4 h-[2px] bg-cyan-400 mt-2" style="transition: opacity 0.2s;"></span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Text Content -->
                <div class="p-6 md:p-8 flex-1 flex flex-col justify-start relative">
                    <div class="flex items-center gap-2 mb-3">
                        <h2 class="text-xl tracking-tight font-medium text-zinc-100 animate-text">Core Logic</h2>
                        <iconify-icon icon="solar:code-circle-linear" style="stroke-width: 1.5;" class="text-zinc-500 text-lg opacity-0 animate-text-icon"></iconify-icon>
                    </div>
                    <p class="text-sm text-zinc-400 leading-relaxed animate-text">Access the underlying isometric data structures directly. Deploy scalable microservices instantly via our high-performance runtime.</p>
                </div>
            </div>
        </article>

    </main>

    <!-- Application Logic -->
    <script type="module">
        import * as THREE from 'https://cdn.skypack.dev/three@0.136.0';

        // --- 1. ThreeJS Isometric Terminal-Modernism Scene ---
        const initThreeJS = () => {
            const container = document.getElementById('three-canvas-container');
            if (!container) return;

            const scene = new THREE.Scene();
            
            // Isometric Orthographic Camera Configuration
            const aspect = container.clientWidth / container.clientHeight;
            const d = 12; // Camera frustum size
            const camera = new THREE.OrthographicCamera(-d * aspect, d * aspect, d, -d, 1, 1000);
            camera.position.set(20, 20, 20); // Isometric angle
            camera.lookAt(0, 0, 0);

            const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
            renderer.setSize(container.clientWidth, container.clientHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            container.appendChild(renderer.domElement);

            const group = new THREE.Group();
            scene.add(group);

            // Material Definitions
            const basePlatformMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.9, metalness: 0.1 });
            const coreEmissiveMat = new THREE.MeshStandardMaterial({ color: 0x00E5FF, emissive: 0x00E5FF, emissiveIntensity: 0.5, roughness: 0.2 });
            const wireframeMat = new THREE.LineBasicMaterial({ color: 0x333333, transparent: true, opacity: 0.4 });

            // Geometry Build: Base Platform
            const platformGeo = new THREE.BoxGeometry(16, 0.5, 16);
            const platform = new THREE.Mesh(platformGeo, basePlatformMat);
            platform.position.y = -2;
            group.add(platform);

            const platformEdges = new THREE.LineSegments(new THREE.EdgesGeometry(platformGeo), wireframeMat);
            platform.add(platformEdges);

            // Geometry Build: Central Logic Core
            const coreGeo = new THREE.BoxGeometry(2, 4, 2);
            const core = new THREE.Mesh(coreGeo, coreEmissiveMat);
            core.position.y = 0.25;
            group.add(core);

            // Geometry Build: Orbiting Data Nodes
            const nodes = [];
            const nodeCount = 12;
            for(let i = 0; i < nodeCount; i++) {
                const isAccent = Math.random() > 0.7;
                const nodeMat = isAccent ? coreEmissiveMat : new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.8 });
                const size = 0.4 + Math.random() * 0.4;
                const nodeGeo = new THREE.BoxGeometry(size, size, size);
                const node = new THREE.Mesh(nodeGeo, nodeMat);
                
                const angle = (i / nodeCount) * Math.PI * 2;
                const radius = 4 + Math.random() * 4;
                
                node.position.set(Math.cos(angle) * radius, -1 + Math.random() * 4, Math.sin(angle) * radius);
                
                // Add tiny wireframe to nodes for technical look
                node.add(new THREE.LineSegments(new THREE.EdgesGeometry(nodeGeo), new THREE.LineBasicMaterial({ color: 0x555555, transparent: true, opacity: 0.3 })));

                node.userData = { 
                    angle, 
                    radius, 
                    speed: 0.005 + Math.random() * 0.015, 
                    yBase: node.position.y,
                    yOffset: Math.random() * Math.PI * 2 
                };
                group.add(node);
                nodes.push({ mesh: node, isAccent });
            }

            // Lighting Setup
            scene.add(new THREE.AmbientLight(0xffffff, 0.3));
            
            const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
            dirLight.position.set(10, 20, 5);
            scene.add(dirLight);
            
            const pointLight = new THREE.PointLight(0x00E5FF, 1.5, 25);
            pointLight.position.set(0, 1, 0);
            scene.add(pointLight);

            // Animation Loop
            let time = 0;
            const animate3D = () => {
                requestAnimationFrame(animate3D);
                time += 0.016;

                // Subtle environmental drift
                group.rotation.y = Math.sin(time * 0.1) * 0.15;
                group.position.y = Math.sin(time * 0.5) * 0.2;

                // Emissive pulsing logic
                const pulse = (Math.sin(time * 2.5) + 1) * 0.5;
                coreEmissiveMat.emissiveIntensity = 0.4 + pulse * 0.6;
                pointLight.intensity = 1.0 + pulse * 1.5;

                // Node orbital mechanics
                nodes.forEach(nodeObj => {
                    const data = nodeObj.mesh.userData;
                    data.angle += data.speed;
                    nodeObj.mesh.position.x = Math.cos(data.angle) * data.radius;
                    nodeObj.mesh.position.z = Math.sin(data.angle) * data.radius;
                    nodeObj.mesh.position.y = data.yBase + Math.sin(time * 1.5 + data.yOffset) * 0.5;
                    nodeObj.mesh.rotation.x += 0.01;
                    nodeObj.mesh.rotation.y += 0.02;
                });

                renderer.render(scene, camera);
            };
            animate3D();

            // Responsive Handling
            window.addEventListener('resize', () => {
                if(!container) return;
                const newAspect = container.clientWidth / container.clientHeight;
                camera.left = -d * newAspect;
                camera.right = d * newAspect;
                camera.top = d;
                camera.bottom = -d;
                camera.updateProjectionMatrix();
                renderer.setSize(container.clientWidth, container.clientHeight);
            });
        };

        // --- 2. 2D SVG & DOM Animations ---
        
        // Terminal Cursor Blink
        const terminalCursor = document.getElementById('terminal-cursor');
        setInterval(() => {
            if(terminalCursor) {
                terminalCursor.style.opacity = terminalCursor.style.opacity === '0' ? '1' : '0';
            }
        }, 500);

        // SVG Cursor Organic Float
        const cursorAlex = document.getElementById('cursor-alex');
        const cursorSam = document.getElementById('cursor-sam');
        const cursorMe = document.getElementById('cursor-me');
        const outerRing = document.getElementById('ring-outer');
        let svgTime = 0;

        const animateSVG = () => {
            svgTime += 0.015;
            
            // Organic cursor movement formulas
            if(cursorAlex) cursorAlex.setAttribute('transform', \`translate(\${110 + Math.sin(svgTime * 1.2) * 6}, \${90 + Math.cos(svgTime * 0.8) * 6})\`);
            if(cursorSam) cursorSam.setAttribute('transform', \`translate(\${130 + Math.cos(svgTime * 0.9) * 5}, \${200 + Math.sin(svgTime * 1.1) * 5})\`);
            if(cursorMe) cursorMe.setAttribute('transform', \`translate(\${270 + Math.sin(svgTime * 1.5) * 4}, \${180 + Math.cos(svgTime * 1.3) * 7})\`);
            
            // Subtle ring rotation
            if(outerRing) outerRing.style.transform = \`rotate(\${svgTime * 5}deg)\`;

            requestAnimationFrame(animateSVG);
        };

        // --- 3. Staggered Word-by-Word Scroll Reveal ---
        const initTextAnimations = () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Reveal spans
                        const spans = entry.target.querySelectorAll('span');
                        spans.forEach(span => {
                            span.style.opacity = '1';
                            span.style.transform = 'translateY(0) scale(1)';
                            span.style.filter = 'blur(0px)';
                        });
                        
                        // Handle potential icon siblings
                        const icon = entry.target.parentElement?.querySelector('iconify-icon');
                        if(icon) {
                            setTimeout(() => {
                                icon.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
                                icon.style.opacity = '1';
                                icon.style.transform = 'translateY(0) scale(1)';
                            }, 300);
                        }

                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

            document.querySelectorAll('.animate-text').forEach(el => {
                const text = el.textContent;
                el.innerHTML = ''; // Clear original text
                const words = text.split(' ');
                
                words.forEach((word, index) => {
                    const span = document.createElement('span');
                    span.textContent = word + ' '; // Re-add space
                    
                    // Initial hidden state applied inline to respect constraints
                    span.style.opacity = '0';
                    span.style.transform = 'translateY(12px) scale(0.98)';
                    span.style.filter = 'blur(4px)';
                    span.style.display = 'inline-block';
                    span.style.whiteSpace = 'pre-wrap';
                    
                    // Complex transition physics
                    span.style.transition = 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), filter 0.7s cubic-bezier(0.16, 1, 0.3, 1)';
                    span.style.transitionDelay = \`\${index * 35}ms\`;
                    
                    el.appendChild(span);
                });

                // Initial setup for sibling icons
                const icon = el.parentElement?.querySelector('iconify-icon');
                if(icon) {
                    icon.style.opacity = '0';
                    icon.style.transform = 'translateY(10px) scale(0.8)';
                }

                observer.observe(el);
            });
        };

        // Bootstrap
        window.addEventListener('DOMContentLoaded', () => {
            initThreeJS();
            animateSVG();
            initTextAnimations();
        });

    <\/script>
</body>
</html>`,se=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Strata — Cloud Migration Platform</title>
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500&display=swap" rel="stylesheet">
    
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
</head>
<body class="bg-[#050510] text-white font-['Inter',system-ui,sans-serif] overflow-x-hidden antialiased selection:bg-violet-500/30 selection:text-violet-200">

    <!-- WebGL Background Canvas -->
    <canvas id="c" class="fixed inset-0 w-full h-full z-0 pointer-events-none"></canvas>

    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 z-50 flex items-center justify-center py-4 px-6 md:px-10 bg-[#050510]/50 backdrop-blur-xl border-b border-violet-600/10">
        <div class="w-full max-w-[1200px] flex items-center justify-between">
            <div class="flex items-center gap-3 font-medium text-sm tracking-wide">
                <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-violet-400 flex items-center justify-center shadow-[0_0_16px_rgba(124,58,237,0.3)]">
                    <iconify-icon icon="solar:layers-linear" class="text-white text-lg"></iconify-icon>
                </div>
                Strata
            </div>
            
            <div class="hidden md:flex items-center gap-8">
                <a href="#" class="text-white/50 hover:text-white/90 text-sm font-light tracking-wide transition-colors">Platform</a>
                <a href="#" class="text-white/50 hover:text-white/90 text-sm font-light tracking-wide transition-colors">Solutions</a>
                <a href="#" class="text-white/50 hover:text-white/90 text-sm font-light tracking-wide transition-colors">Pricing</a>
                <a href="#" class="text-white/50 hover:text-white/90 text-sm font-light tracking-wide transition-colors">Docs</a>
            </div>
            
            <button class="px-5 py-2.5 rounded-full text-xs font-normal bg-gradient-to-br from-violet-600/20 to-violet-500/10 border border-violet-600/30 text-violet-400 hover:from-violet-600/30 hover:to-violet-500/20 transition-all shadow-[0_0_20px_rgba(124,58,237,0.1)] hover:shadow-[0_0_28px_rgba(124,58,237,0.2)] tracking-wide">
                Start Migration
            </button>
        </div>
    </nav>

    <!-- Hero Section -->
    <main class="relative z-10 flex flex-col items-center justify-center text-center min-h-[100svh] px-6 pt-20">
        <!-- Radial shadow overlay to help text readability over canvas -->
        <div class="absolute inset-0 pointer-events-none z-[-1]" style="background: radial-gradient(ellipse 70% 50% at 50% 55%, rgba(5,5,16,0.6) 0%, transparent 70%);"></div>

        <div class="relative z-1 max-w-3xl mx-auto w-full flex flex-col items-center">
            
            <div class="inline-flex items-center gap-2 px-4 py-1.5 mb-8 bg-violet-600/5 border border-violet-600/20 rounded-full text-xs font-medium tracking-[0.1em] uppercase text-violet-400 backdrop-blur-sm">
                <span class="w-1.5 h-1.5 rounded-full bg-violet-500 shadow-[0_0_8px_#8b5cf6] animate-pulse"></span>
                Now in General Availability
            </div>
            
            <h1 class="text-[clamp(2.4rem,6vw,4rem)] font-thin tracking-tight leading-[1.08] text-white mb-6">
                Migrate to the cloud<br>with <em class="not-italic bg-gradient-to-br from-violet-500 via-violet-400 to-violet-200 bg-clip-text text-transparent">confidence</em>
            </h1>
            
            <p class="text-sm md:text-base font-light leading-relaxed text-white/40 max-w-xl mx-auto mb-10">
                Automated discovery, dependency mapping, and zero-downtime migration for enterprise workloads. Move faster with less risk.
            </p>
            
            <div class="flex flex-wrap justify-center gap-4 mb-16 w-full">
                <button class="relative overflow-hidden px-8 py-3.5 rounded-xl text-sm font-medium border-none text-white tracking-wide bg-gradient-to-br from-violet-700 to-violet-500 shadow-[0_0_30px_rgba(124,58,237,0.3),0_4px_16px_rgba(0,0,0,0.4)] hover:shadow-[0_0_40px_rgba(124,58,237,0.45),0_6px_20px_rgba(0,0,0,0.5)] transition-all hover:-translate-y-[1px] group">
                    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                    Start Free Assessment
                </button>
                <button class="px-8 py-3.5 rounded-xl text-sm font-normal border border-white/10 bg-white/5 text-white/70 backdrop-blur-md hover:border-white/20 hover:text-white hover:bg-white/10 transition-all tracking-wide">
                    Watch Demo
                </button>
            </div>
            
            <div class="flex flex-wrap justify-center gap-8 md:gap-14 w-full">
                <div class="text-center">
                    <div class="text-2xl md:text-3xl font-thin tracking-tight bg-gradient-to-br from-violet-400 to-violet-200 bg-clip-text text-transparent">99.99%</div>
                    <div class="text-xs font-light text-white/30 tracking-[0.08em] uppercase mt-1.5">Uptime SLA</div>
                </div>
                <div class="text-center">
                    <div class="text-2xl md:text-3xl font-thin tracking-tight bg-gradient-to-br from-violet-400 to-violet-200 bg-clip-text text-transparent">8.5M</div>
                    <div class="text-xs font-light text-white/30 tracking-[0.08em] uppercase mt-1.5">Workloads Migrated</div>
                </div>
                <div class="text-center">
                    <div class="text-2xl md:text-3xl font-thin tracking-tight bg-gradient-to-br from-violet-400 to-violet-200 bg-clip-text text-transparent">75%</div>
                    <div class="text-xs font-light text-white/30 tracking-[0.08em] uppercase mt-1.5">Faster Migrations</div>
                </div>
                <div class="hidden sm:block text-center">
                    <div class="text-2xl md:text-3xl font-thin tracking-tight bg-gradient-to-br from-violet-400 to-violet-200 bg-clip-text text-transparent">500+</div>
                    <div class="text-xs font-light text-white/30 tracking-[0.08em] uppercase mt-1.5">Enterprise Clients</div>
                </div>
            </div>

        </div>

        <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 pointer-events-none">
            <div class="w-5 h-[30px] rounded-full border-[1.5px] border-white/40 relative">
                <div id="scroll-dot" class="w-[2px] h-1.5 bg-white/60 rounded-full absolute top-1.5 left-1/2 -translate-x-1/2"></div>
            </div>
            <span class="text-[0.6rem] tracking-[0.14em] uppercase text-white/40">Scroll</span>
        </div>
    </main>

    <!-- Scroll Reveal Section (GSAP Masked Stagger) -->
    <section class="relative z-10 py-32 px-6 min-h-[70svh] flex items-center justify-center bg-[#050510]">
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#050510] to-[#050510] pointer-events-none z-[-1]"></div>
        <div class="max-w-4xl mx-auto w-full text-center">
            <p class="text-xs font-medium tracking-[0.15em] uppercase text-violet-500 mb-8">Intelligent Infrastructure</p>
            <h2 id="reveal-text" class="text-2xl md:text-5xl font-thin tracking-tight leading-[1.3] text-white/90">
                Discover untethered scalability. The platform built to dynamically map, migrate, and optimize your entire infrastructure without lifting a finger.
            </h2>
        </div>
    </section>

    <!-- Feature Section with Premium Gradient Borders & Aura Images -->
    <section class="relative z-10 py-24 px-6 bg-[#050510]">
        <div class="max-w-[1200px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <!-- Card 1 -->
            <div class="p-[1px] rounded-3xl bg-gradient-to-b from-white/10 via-white/5 to-transparent relative group overflow-hidden">
                <div class="absolute inset-0 bg-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl rounded-3xl pointer-events-none"></div>
                <div class="bg-[#080814] rounded-[23px] h-full p-2 relative z-10 flex flex-col">
                    <div class="w-full h-56 md:h-72 rounded-[18px] overflow-hidden mb-6 relative">
                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/724142aa-44a6-48d3-9cf3-761e00d05b78_1600w.jpg" alt="Architecture" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out opacity-80" loading="lazy">
                        <div class="absolute inset-0 bg-gradient-to-t from-[#080814] to-transparent"></div>
                    </div>
                    <div class="px-6 pb-8">
                        <div class="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 text-white/70">
                            <iconify-icon icon="solar:box-minimalistic-linear" class="text-xl"></iconify-icon>
                        </div>
                        <h3 class="text-xl font-light tracking-tight text-white mb-3">Architectural Clarity</h3>
                        <p class="text-sm font-light text-white/40 leading-relaxed">
                            Automatically visualize dependencies across microservices and legacy monolithic structures before execution.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Card 2 -->
            <div class="p-[1px] rounded-3xl bg-gradient-to-b from-white/10 via-white/5 to-transparent relative group overflow-hidden">
                <div class="absolute inset-0 bg-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl rounded-3xl pointer-events-none"></div>
                <div class="bg-[#080814] rounded-[23px] h-full p-2 relative z-10 flex flex-col">
                    <div class="w-full h-56 md:h-72 rounded-[18px] overflow-hidden mb-6 relative">
                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" alt="Abstract" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out opacity-80" loading="lazy">
                        <div class="absolute inset-0 bg-gradient-to-t from-[#080814] to-transparent"></div>
                    </div>
                    <div class="px-6 pb-8">
                        <div class="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 text-white/70">
                            <iconify-icon icon="solar:graph-linear" class="text-xl"></iconify-icon>
                        </div>
                        <h3 class="text-xl font-light tracking-tight text-white mb-3">Dynamic Scaling</h3>
                        <p class="text-sm font-light text-white/40 leading-relaxed">
                            Leverage predictive models to right-size compute resources dynamically as your user traffic shifts.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </section>

    <!-- Footer Spacer -->
    <footer class="relative z-10 bg-[#050510] border-t border-white/5 py-10 text-center">
        <p class="text-xs font-light text-white/30 tracking-wide">© Strata Technologies. All rights reserved.</p>
    </footer>

    <!-- Logic & Animations -->
    <script>
        // --- GSAP Animations ---
        gsap.registerPlugin(ScrollTrigger);

        // Scroll Mouse Dot Animation
        gsap.to("#scroll-dot", {
            y: 8,
            opacity: 0.2,
            duration: 1.2,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });

        // Masked Staggered Text Reveal
        const revealEl = document.getElementById('reveal-text');
        const textContent = revealEl.innerText;
        revealEl.innerHTML = '';
        
        // Wrap words in masked spans
        const words = textContent.split(' ');
        words.forEach(word => {
            const wrapper = document.createElement('span');
            // Using inline styles for structural mask requirements (avoids \`<style>\`)
            wrapper.style.display = 'inline-block';
            wrapper.style.overflow = 'hidden';
            wrapper.style.verticalAlign = 'bottom';
            wrapper.style.marginRight = '0.25em';
            wrapper.style.paddingBottom = '0.1em'; // Prevent clipping of descenders
            
            const inner = document.createElement('span');
            inner.className = 'reveal-word';
            inner.style.display = 'inline-block';
            inner.style.transform = 'translateY(110%)';
            inner.style.transformOrigin = 'top left';
            inner.innerText = word;
            
            wrapper.appendChild(inner);
            revealEl.appendChild(wrapper);
        });

        // Trigger animation
        gsap.to('.reveal-word', {
            y: 0,
            duration: 1.2,
            stagger: 0.03,
            ease: "power4.out",
            scrollTrigger: {
                trigger: revealEl,
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        });


        // --- WebGL Background Canvas ---
        const canvas = document.getElementById('c');
        const gl = canvas.getContext('webgl', { antialias: true, alpha: false, preserveDrawingBuffer: true });

        let W, H, dpr;
        function resize() {
            dpr = Math.min(window.devicePixelRatio, 2);
            W = window.innerWidth;
            H = window.innerHeight;
            canvas.width = W * dpr;
            canvas.height = H * dpr;
            gl.viewport(0, 0, canvas.width, canvas.height);
        }
        window.addEventListener('resize', resize);
        resize();

        const VS = \`
        attribute vec2 a_pos;
        void main(){ gl_Position = vec4(a_pos, 0.0, 1.0); }
        \`;

        const FS = \`
        precision highp float;
        uniform vec2 u_res;
        uniform float u_time;
        uniform vec2 u_mouse;

        float hash(float n){ return fract(sin(n)*43758.5453123); }
        float hash2(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }

        float noise(float x){
            float i = floor(x);
            float f = fract(x);
            f = f*f*(3.0-2.0*f);
            return mix(hash(i), hash(i+1.0), f);
        }

        float fbm(float x, float octaves){
            float val = 0.0;
            float amp = 0.5;
            float freq = 1.0;
            for(int i = 0; i < 6; i++){
                if(float(i) >= octaves) break;
                val += amp * noise(x * freq);
                freq *= 2.17;
                amp *= 0.48;
            }
            return val;
        }

        float meteor(vec2 uv, float t){
            float cycle = mod(t * 0.15, 1.0);
            float seed = floor(t * 0.15);
            float h = hash(seed * 7.31);
            float h2 = hash(seed * 13.17);
            if(h > 0.30) return 0.0;
            vec2 start = vec2(0.2 + h2 * 0.6, 0.7 + h * 0.25);
            vec2 dir = normalize(vec2(1.0, -0.6 - h * 0.3));
            float progress = smoothstep(0.0, 0.7, cycle);
            vec2 pos = start + dir * progress * 0.5;
            vec2 toP = uv - pos;
            float along = dot(toP, dir);
            float perp = length(toP - dir * along);
            float trail = smoothstep(0.0, -0.12, along) * smoothstep(-0.18, -0.04, along);
            float core = smoothstep(0.003, 0.0, perp) * trail;
            float glow = smoothstep(0.012, 0.0, perp) * trail * 0.3;
            float fade = smoothstep(0.0, 0.1, cycle) * smoothstep(0.8, 0.55, cycle);
            return (core + glow) * fade;
        }

        float stars(vec2 uv, float density){
            vec2 cell = floor(uv * density);
            vec2 sub = fract(uv * density);
            float h = hash2(cell);
            float brightness = step(0.975, h);
            float size = 0.025 + h * 0.045;
            float d = length(sub - vec2(hash2(cell + 100.0), hash2(cell + 200.0)));
            float star = brightness * smoothstep(size, 0.0, d);
            star *= 0.5 + 0.5 * sin(u_time * (1.0 + h * 3.0) + h * 6.28);
            return star;
        }

        void main(){
            vec2 uv = gl_FragCoord.xy / u_res;
            float aspect = u_res.x / u_res.y;

            vec2 mouse = u_mouse * 2.0 - 1.0;

            vec3 skyTop    = vec3(0.015, 0.012, 0.045);
            vec3 skyMid    = vec3(0.035, 0.025, 0.085);
            vec3 skyBottom = vec3(0.065, 0.045, 0.14);

            float skyGrad = uv.y;
            vec3 col = mix(skyBottom, skyMid, smoothstep(0.3, 0.6, skyGrad));
            col = mix(col, skyTop, smoothstep(0.6, 1.0, skyGrad));

            float horizonY = 0.35;
            float horizonGlow = exp(-pow((uv.y - horizonY) * 3.8, 2.0));
            col += vec3(0.15, 0.07, 0.26) * horizonGlow * 0.8;

            float centerGlow = exp(-pow((uv.x - 0.5) * 1.5, 2.0)) * exp(-pow((uv.y - horizonY) * 4.0, 2.0));
            col += vec3(0.14, 0.10, 0.24) * centerGlow * 0.6;

            float starField = stars(uv * vec2(aspect, 1.0), 60.0)
                            + stars(uv * vec2(aspect, 1.0) + 500.0, 100.0) * 0.7
                            + stars(uv * vec2(aspect, 1.0) + 900.0, 160.0) * 0.4;

            float starMask = 1.0;
            float xC, yS, prof, mTop, mtn, rDist, rGlow, rAmb;
            vec3 lC;

            // Layer 0
            lC = vec3(0.14, 0.10, 0.24);
            xC = uv.x * aspect * 1.6 + u_time * 0.006 + mouse.x * 0.010;
            yS = mouse.y * 0.003;
            prof = fbm(xC, 5.0) * 0.10 + fbm(xC * 0.3 + 17.0, 3.0) * 0.07;
            mTop = 0.40 + prof + yS;
            mtn = smoothstep(mTop + 0.003, mTop - 0.001, uv.y);
            rDist = abs(uv.y - mTop);
            rGlow = smoothstep(0.012, 0.0, rDist) * 0.18;
            rAmb = smoothstep(0.04, 0.0, rDist) * 0.06;
            col = mix(col, lC, mtn);
            col += vec3(0.20, 0.10, 0.35) * rGlow;
            col += vec3(0.12, 0.06, 0.22) * rAmb;
            starMask *= (1.0 - mtn);

            // Layer 1
            lC = vec3(0.11, 0.07, 0.19);
            xC = uv.x * aspect * 2.0 + u_time * 0.012 + mouse.x * 0.020;
            yS = mouse.y * 0.006;
            prof = fbm(xC, 5.0) * 0.13 + fbm(xC * 0.3 + 34.0, 3.0) * 0.091;
            mTop = 0.33 + prof + yS;
            mtn = smoothstep(mTop + 0.003, mTop - 0.001, uv.y);
            rDist = abs(uv.y - mTop);
            rGlow = smoothstep(0.012, 0.0, rDist) * 0.15;
            rAmb = smoothstep(0.04, 0.0, rDist) * 0.045;
            col = mix(col, lC, mtn);
            col += vec3(0.20, 0.10, 0.35) * rGlow;
            col += vec3(0.12, 0.06, 0.22) * rAmb;
            starMask *= (1.0 - mtn);

            // Layer 2
            lC = vec3(0.08, 0.05, 0.14);
            xC = uv.x * aspect * 2.6 + u_time * 0.020 + mouse.x * 0.034;
            yS = mouse.y * 0.010;
            prof = fbm(xC, 5.0) * 0.16 + fbm(xC * 0.3 + 51.0, 3.0) * 0.112;
            mTop = 0.26 + prof + yS;
            mtn = smoothstep(mTop + 0.003, mTop - 0.001, uv.y);
            rDist = abs(uv.y - mTop);
            rGlow = smoothstep(0.012, 0.0, rDist) * 0.12;
            rAmb = smoothstep(0.04, 0.0, rDist) * 0.03;
            col = mix(col, lC, mtn);
            col += vec3(0.20, 0.10, 0.35) * rGlow;
            col += vec3(0.12, 0.06, 0.22) * rAmb;
            starMask *= (1.0 - mtn);

            // Layer 3
            lC = vec3(0.05, 0.03, 0.09);
            xC = uv.x * aspect * 3.2 + u_time * 0.030 + mouse.x * 0.050;
            yS = mouse.y * 0.015;
            prof = fbm(xC, 5.0) * 0.14 + fbm(xC * 0.3 + 68.0, 3.0) * 0.098;
            mTop = 0.18 + prof + yS;
            mtn = smoothstep(mTop + 0.003, mTop - 0.001, uv.y);
            rDist = abs(uv.y - mTop);
            rGlow = smoothstep(0.012, 0.0, rDist) * 0.09;
            col = mix(col, lC, mtn);
            col += vec3(0.20, 0.10, 0.35) * rGlow;
            starMask *= (1.0 - mtn);

            // Layer 4
            lC = vec3(0.03, 0.018, 0.055);
            xC = uv.x * aspect * 4.0 + u_time * 0.044 + mouse.x * 0.070;
            yS = mouse.y * 0.021;
            prof = fbm(xC, 5.0) * 0.11 + fbm(xC * 0.3 + 85.0, 3.0) * 0.077;
            mTop = 0.09 + prof + yS;
            mtn = smoothstep(mTop + 0.003, mTop - 0.001, uv.y);
            rDist = abs(uv.y - mTop);
            rGlow = smoothstep(0.012, 0.0, rDist) * 0.06;
            col = mix(col, lC, mtn);
            col += vec3(0.20, 0.10, 0.35) * rGlow;
            starMask *= (1.0 - mtn);

            col += vec3(0.9, 0.8, 1.0) * starField * starMask;
            float met = meteor(uv * vec2(aspect, 1.0), u_time);
            col += vec3(0.8, 0.6, 1.0) * met * starMask;

            float vig = 1.0 - 0.3 * pow(length((uv - 0.5) * vec2(1.1, 1.6)), 2.0);
            col *= vig;

            float haze = exp(-pow((uv.y - 0.33) * 5.0, 2.0)) * 0.05;
            col += vec3(0.15, 0.10, 0.30) * haze;

            col = pow(col, vec3(0.95));

            gl_FragColor = vec4(col, 1.0);
        }
        \`;

        function createShader(src, type) {
            const s = gl.createShader(type);
            gl.shaderSource(s, src);
            gl.compileShader(s);
            if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) return null;
            return s;
        }

        const vs = createShader(VS, gl.VERTEX_SHADER);
        const fs = createShader(FS, gl.FRAGMENT_SHADER);
        const prog = gl.createProgram();
        gl.attachShader(prog, vs);
        gl.attachShader(prog, fs);
        gl.linkProgram(prog);
        gl.useProgram(prog);

        const quad = new Float32Array([-1,-1, 1,-1, -1,1, 1,1]);
        const buf = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buf);
        gl.bufferData(gl.ARRAY_BUFFER, quad, gl.STATIC_DRAW);
        const aPos = gl.getAttribLocation(prog, 'a_pos');
        gl.enableVertexAttribArray(aPos);
        gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

        const uRes = gl.getUniformLocation(prog, 'u_res');
        const uTime = gl.getUniformLocation(prog, 'u_time');
        const uMouse = gl.getUniformLocation(prog, 'u_mouse');

        let mx = 0.5, my = 0.5;
        let smx = 0.5, smy = 0.5;
        document.addEventListener('mousemove', e => {
            mx = e.clientX / window.innerWidth;
            my = 1.0 - e.clientY / window.innerHeight;
        });

        function frame(t) {
            t *= 0.001;
            smx += (mx - smx) * 0.04;
            smy += (my - smy) * 0.04;

            gl.uniform2f(uRes, canvas.width, canvas.height);
            gl.uniform1f(uTime, t);
            gl.uniform2f(uMouse, smx, smy);

            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
            requestAnimationFrame(frame);
        }
        requestAnimationFrame(frame);
    <\/script>
</body>
</html>`,le=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VALENCE CORE | Kinetic Induction</title>
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"><\/script>

    <!-- Scripts -->
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
</head>
<body class="bg-neutral-950 text-neutral-50 h-screen w-screen overflow-hidden font-sans selection:bg-cyan-500/30 selection:text-cyan-50 flex flex-col relative antialiased">

    <!-- Ambient WebGL Background -->
    <canvas id="bg-canvas" class="absolute inset-0 w-full h-full z-0 opacity-60 pointer-events-none" aria-hidden="true"></canvas>

    <!-- Overlay Vignette for depth -->
    <div class="absolute inset-0 z-0 pointer-events-none" style="background: radial-gradient(circle at center, transparent 0%, rgba(10,10,10,0.8) 100%);"></div>

    <!-- Navigation -->
    <nav class="absolute top-0 w-full flex justify-between items-center px-6 py-6 z-20" style="opacity: 0; transform: translateY(-20px);" id="main-nav">
        <div class="flex items-center gap-2">
            <iconify-icon icon="solar:atom-linear" class="text-cyan-500 text-xl" style="stroke-width: 1.5px;"></iconify-icon>
            <span class="font-medium text-sm tracking-tight text-neutral-200">VALENCE SYSTEM</span>
        </div>
        
        <!-- Premium Border Gradient Pill -->
        <div class="hidden sm:flex relative p-[1px] rounded-full overflow-hidden items-center justify-center cursor-pointer group transition-transform duration-300 hover:scale-105">
            <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/50 via-neutral-500/10 to-transparent rounded-full group-hover:from-cyan-500/80 transition-colors duration-500"></div>
            <div class="relative bg-neutral-950 rounded-full px-5 py-2 flex items-center gap-2">
                <div class="w-1.5 h-1.5 rounded-full bg-cyan-500" style="box-shadow: 0 0 8px rgba(6, 182, 212, 0.8);"></div>
                <span class="text-xs font-medium tracking-wide text-neutral-300">Induction Active</span>
            </div>
        </div>
    </nav>

    <!-- Main Content Stage -->
    <main class="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 w-full h-full max-w-4xl mx-auto">
        
        <div class="mb-8 flex flex-col items-center" id="intro-tags">
            <div class="font-mono font-medium text-xs tracking-[0.3em] uppercase text-cyan-500 mb-6" style="opacity: 0; transform: translateY(12px);" id="tag-text">
                SYS 12 // Kinetic Pulse
            </div>
            
            <h1 class="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight leading-[1.1] text-neutral-50" data-split>
                Command the momentum.
            </h1>
            <p class="mt-6 text-sm sm:text-base text-neutral-400 max-w-md font-normal leading-relaxed" data-split>
                Initialize the valence induction loop. The kinetic perimeter is optimized and standing by for sequence execution.
            </p>
        </div>

        <!-- WebGL Button Component -->
        <div class="mt-10 relative flex justify-center w-full" id="btn-container" style="opacity: 0; transform: scale(0.92);">
            <button class="relative flex items-center justify-center w-[280px] h-[96px] bg-transparent cursor-pointer rounded-[18px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 group" id="btn" type="button" style="transition: transform .22s cubic-bezier(.34, 1.4, .5, 1);" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'" onmousedown="this.style.transform='translateY(1px) scale(.99)'" onmouseup="this.style.transform='translateY(-2px)'">
                <canvas id="btn-gl" aria-hidden="true" class="absolute inset-0 w-full h-full block rounded-[18px]"></canvas>
                <span class="relative z-10 pointer-events-none font-medium text-sm tracking-[0.3em] indent-[0.3em] text-[#e0f7f8]" style="text-shadow: 0 0 12px rgba(0, 210, 255, .6), 0 1px 4px rgba(0, 0, 0, .8);">VALENCE CORE</span>
            </button>
        </div>

        <p class="mt-8 text-xs text-neutral-500 tracking-wide font-normal" style="opacity: 0; transform: translateY(12px);" id="note-text">
            Hover to trigger neural arcs, click to unleash a synchronized valence discharge.
        </p>

    </main>

    <script>
        // --- GSAP Animations ---
        document.addEventListener("DOMContentLoaded", () => {
            // Masked Text Splitter
            document.querySelectorAll('[data-split]').forEach(el => {
                const text = el.innerText;
                el.innerHTML = '';
                text.split(' ').forEach(word => {
                    if (word.trim() === '') return;
                    const wrapper = document.createElement('span');
                    wrapper.style.display = 'inline-block';
                    wrapper.style.overflow = 'hidden';
                    wrapper.style.verticalAlign = 'top';
                    wrapper.style.marginRight = '0.25em';
                    wrapper.style.paddingBottom = '0.1em';

                    const inner = document.createElement('span');
                    inner.style.display = 'inline-block';
                    inner.style.transform = 'translateY(100%)';
                    inner.style.opacity = '0';
                    inner.className = 'mask-target';
                    inner.innerText = word;

                    wrapper.appendChild(inner);
                    el.appendChild(wrapper);
                });
            });

            const tl = gsap.timeline();

            // Nav Entrance
            tl.to("#main-nav", { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 });

            // Tag Entrance
            tl.to("#tag-text", { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.6");

            // Text Reveal
            tl.to(".mask-target", {
                y: "0%",
                opacity: 1,
                duration: 0.8,
                stagger: 0.04,
                ease: "power3.out"
            }, "-=0.4");

            // Button Flicker Entrance
            tl.to("#btn-container", {
                keyframes: {
                    "0%":   { opacity: 0, scale: 0.92 },
                    "9%":   { opacity: 0.85 },
                    "15%":  { opacity: 0.12 },
                    "24%":  { opacity: 0.92 },
                    "31%":  { opacity: 0.35 },
                    "44%":  { opacity: 1, scale: 1.015 },
                    "100%": { opacity: 1, scale: 1 }
                },
                duration: 1.15,
                ease: "none"
            }, "-=0.2");

            // Note Entrance
            tl.to("#note-text", { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, "-=0.5");
        });

        // --- Core WebGL Logic ---
        (function () {
            const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            
            function compileShader(gl, type, src) {
                const s = gl.createShader(type);
                gl.shaderSource(s, src);
                gl.compileShader(s);
                if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
                    console.error('shader compile failed:', gl.getShaderInfoLog(s));
                }
                return s;
            }

            function createProgram(gl, vsSrc, fsSrc) {
                const prog = gl.createProgram();
                gl.attachShader(prog, compileShader(gl, gl.VERTEX_SHADER, vsSrc));
                gl.attachShader(prog, compileShader(gl, gl.FRAGMENT_SHADER, fsSrc));
                gl.linkProgram(prog);
                if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
                    console.error('program link failed:', gl.getProgramInfoLog(prog));
                }
                return prog;
            }

            const VS = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';

            // --- 1. Ambient Background Canvas ---
            function initBackgroundGL() {
                const canvas = document.getElementById('bg-canvas');
                const gl = canvas.getContext('webgl', { alpha: false, antialias: false });
                if (!gl) return;

                const FS_BG = \`
                    precision highp float;
                    uniform vec2 u_res;
                    uniform float u_time;
                    
                    float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);}
                    float noise(vec2 p){
                        vec2 i=floor(p), f=fract(p);
                        vec2 u=f*f*(3.0-2.0*f);
                        return mix(mix(hash(i),hash(i+vec2(1.,0.)),u.x),
                                   mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),u.x),u.y);
                    }
                    float fbm(vec2 p){
                        float v=0.0; float a=0.5;
                        for(int i=0;i<4;i++){ v+=a*noise(p); p=p*2.05+vec2(9.7,3.1); a*=0.5; }
                        return v;
                    }
                    void main(){
                        vec2 uv = gl_FragCoord.xy / u_res.y;
                        float t = u_time * 0.1;
                        
                        float n1 = fbm(uv * 1.5 + vec2(t * 0.2, t * 0.1));
                        float n2 = fbm(uv * 2.0 - vec2(t * 0.15, -t * 0.2) + n1);
                        
                        vec3 baseCol = vec3(0.039, 0.039, 0.039);
                        // Restyled to Deep Cyan Highlight
                        vec3 highlightCol = vec3(0.01, 0.08, 0.12);
                        
                        vec3 col = mix(baseCol, highlightCol, n2 * 0.4);
                        
                        vec2 grid = fract(uv * 20.0);
                        float line = smoothstep(0.95, 1.0, max(grid.x, grid.y));
                        col += vec3(0.015) * line * (1.0 - n1);
                        
                        gl_FragColor = vec4(col, 1.0);
                    }
                \`;

                const prog = createProgram(gl, VS, FS_BG);
                gl.useProgram(prog);

                const buf = gl.createBuffer();
                gl.bindBuffer(gl.ARRAY_BUFFER, buf);
                gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 3,-1, -1,3]), gl.STATIC_DRAW);
                const locP = gl.getAttribLocation(prog, 'p');
                gl.enableVertexAttribArray(locP);
                gl.vertexAttribPointer(locP, 2, gl.FLOAT, false, 0, 0);

                const uRes = gl.getUniformLocation(prog, 'u_res');
                const uTime = gl.getUniformLocation(prog, 'u_time');

                function resize() {
                    const dpr = Math.min(window.devicePixelRatio || 1, 2);
                    const w = Math.round(canvas.clientWidth * dpr);
                    const h = Math.round(canvas.clientHeight * dpr);
                    if (canvas.width !== w || canvas.height !== h) {
                        canvas.width = w; canvas.height = h;
                        gl.viewport(0, 0, w, h);
                    }
                }
                window.addEventListener('resize', resize);
                resize();

                function render(now) {
                    resize();
                    gl.uniform2f(uRes, canvas.width, canvas.height);
                    gl.uniform1f(uTime, reduced ? 0 : now / 1000);
                    gl.drawArrays(gl.TRIANGLES, 0, 3);
                    requestAnimationFrame(render);
                }
                requestAnimationFrame(render);
            }

            // --- 2. Button WebGL (Remixed to Electric Cyan & Emerald) ---
            function initButtonGL() {
                const btn = document.getElementById('btn');
                const canvas = document.getElementById('btn-gl');
                const gl = canvas.getContext('webgl', { alpha: false, antialias: true });
                if (!gl) { 
                    btn.style.background = '#062630';
                    btn.style.boxShadow = '0 0 0 2px #00f2fe, 0 0 24px rgba(0, 242, 254, .5)';
                    return; 
                }

                const FS_BTN = [
                    'precision highp float;',
                    'uniform vec2 u_res;',
                    'uniform float u_time;',
                    'uniform float u_arcs;',
                    'uniform float u_flash;',
                    'float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);}',
                    'float noise(vec2 p){',
                    '  vec2 i=floor(p), f=fract(p);',
                    '  vec2 u=f*f*(3.0-2.0*f);',
                    '  return mix(mix(hash(i),hash(i+vec2(1.,0.)),u.x),',
                    '             mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),u.x),u.y);',
                    '}',
                    'float fbm(vec2 p){',
                    '  float v=0.0; float a=0.5;',
                    '  for(int i=0;i<4;i++){ v+=a*noise(p); p=p*2.05+vec2(9.7,3.1); a*=0.5; }',
                    '  return v;',
                    '}',
                    'float sdRBox(vec2 p, vec2 b, float r){',
                    '  vec2 q = abs(p) - b + r;',
                    '  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;',
                    '}',
                    'void main(){',
                    '  vec2 p = (gl_FragCoord.xy - 0.5 * u_res) / u_res.y;',
                    '  float ar = u_res.x / u_res.y;',
                    '  vec2 hs = vec2(ar * 0.5 - 0.2, 0.5 - 0.2);',
                    '  float d = sdRBox(p, hs, 0.14);',
                    '  float t = u_time;',
                    '  float hover = clamp(u_arcs / 6.0, 0.0, 1.0);',
                    '  vec3 col = vec3(0.039, 0.039, 0.039);',
                    '  float plate = 1.0 - smoothstep(-0.004, 0.004, d);',
                    '  vec3 plateCol = vec3(0.04, 0.05, 0.055);',
                    '  plateCol += vec3(0.014, 0.022, 0.035) * fbm(p * 9.0);',
                    '  plateCol += vec3(0.0, 0.25, 0.3) * exp(d * 9.0) * (0.25 + hover * 0.6);',
                    '  col = mix(col, plateCol, plate);',
                    '  col *= 1.0 + 0.5 * exp(-max(d, 0.0) * 16.0) * (1.0 - plate);',
                    '  float a = atan(p.y, p.x);',
                    '  vec3 arcCol = vec3(0.0);',
                    '  for (int i = 0; i < 6; i++) {',
                    '    float fi = float(i);',
                    '    float w = clamp(u_arcs - fi, 0.0, 1.0);',
                    '    float n1 = fbm(vec2(a * 2.4 + fi * 11.3, t * (1.6 + fi * 0.27) + fi * 53.1));',
                    '    float off = (n1 - 0.5) * (0.11 + u_flash * 0.1);',
                    '    float seg = smoothstep(0.35, 0.75, noise(vec2(a * 1.8 + fi * 7.7, t * (0.9 + fi * 0.13) + fi * 19.0)));',
                    '    seg = 0.3 + 0.7 * seg;',
                    '    float g = 0.0042 / (abs(d + off) + 0.006);',
                    // Remixed with bright cyan/teal and emerald glow profile
                    '    arcCol += (vec3(0.0, 0.75, 0.9) * g + vec3(0.6, 1.0, 0.95) * g * g * 0.55) * w * seg;',
                    '  }',
                    '  float outerMask = 1.0 - smoothstep(0.04, 0.15, d);',
                    '  col += arcCol * (0.6 + 0.4 * hover) * outerMask;',
                    '  float ring = 0.006 / (abs(d) + 0.006);',
                    '  col += vec3(0.8, 0.98, 1.0) * ring * u_flash * 1.5 * outerMask;',
                    '  col += vec3(0.7, 0.95, 1.0) * u_flash * 0.16 * outerMask;',
                    '  gl_FragColor = vec4(col, 1.0);',
                    '}'
                ].join('\\n');

                const prog = createProgram(gl, VS, FS_BTN);
                gl.useProgram(prog);

                const buf = gl.createBuffer();
                gl.bindBuffer(gl.ARRAY_BUFFER, buf);
                gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 3,-1, -1,3]), gl.STATIC_DRAW);
                const locP = gl.getAttribLocation(prog, 'p');
                gl.enableVertexAttribArray(locP);
                gl.vertexAttribPointer(locP, 2, gl.FLOAT, false, 0, 0);

                const uRes = gl.getUniformLocation(prog, 'u_res');
                const uTime = gl.getUniformLocation(prog, 'u_time');
                const uArcs = gl.getUniformLocation(prog, 'u_arcs');
                const uFlash = gl.getUniformLocation(prog, 'u_flash');

                function resize() {
                    const dpr = Math.min(window.devicePixelRatio || 1, 2);
                    const w = Math.max(1, Math.round(canvas.clientWidth * dpr));
                    const h = Math.max(1, Math.round(canvas.clientHeight * dpr));
                    if (canvas.width !== w || canvas.height !== h) {
                        canvas.width = w; canvas.height = h;
                        gl.viewport(0, 0, w, h);
                    }
                }
                window.addEventListener('resize', resize);
                resize();

                let arcs = 2.4, arcsTarget = 2.4, flash = 0, crawl = 0;
                let last = performance.now();

                btn.addEventListener('mouseenter', () => arcsTarget = 5.8);
                btn.addEventListener('mouseleave', () => arcsTarget = 2.4);
                btn.addEventListener('focus', () => arcsTarget = 5.8);
                btn.addEventListener('blur', () => arcsTarget = 2.4);
                btn.addEventListener('click', () => flash = 1);

                function frame(now) {
                    const dt = Math.min(0.05, (now - last) / 1000);
                    last = now;
                    arcs += (arcsTarget - arcs) * Math.min(1, dt * 5);
                    flash *= Math.exp(-3.6 * dt);
                    crawl += dt * (0.6 + (arcs / 6) * 1.1 + flash * 2.0);
                    resize();
                    gl.uniform2f(uRes, canvas.width, canvas.height);
                    gl.uniform1f(uTime, reduced ? 3.0 : crawl);
                    gl.uniform1f(uArcs, arcs);
                    gl.uniform1f(uFlash, flash);
                    gl.drawArrays(gl.TRIANGLES, 0, 3);
                    requestAnimationFrame(frame);
                }
                requestAnimationFrame(frame);
            }

            initBackgroundGL();
            initButtonGL();
        })();
    <\/script>
</body>
</html>`,ce=`<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vanguard Labs — Dimensional Architecture</title>
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600&display=swap" rel="stylesheet">
    
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
</head>
<body class="bg-[#050505] text-gray-100 font-sans antialiased overflow-hidden selection:bg-cyan-500/20 selection:text-cyan-100" style="font-family: 'Inter', sans-serif;">

    <!-- WebGL Canvas Container -->
    <canvas id="webgl-canvas" class="fixed inset-0 w-full h-full pointer-events-none z-[-30]"></canvas>

    <!-- Technical Grid Overlay (Dark Mode) -->
    <div class="fixed inset-0 w-full h-full pointer-events-none z-[-20] opacity-[0.06]" style="background-image: repeating-linear-gradient(45deg, rgba(255,255,255,0.8) 0, rgba(255,255,255,0.8) 1px, transparent 1px, transparent 56px);"></div>

    <!-- Cinematic Grain Overlay (Dark Mode) -->
    <div class="fixed inset-0 w-full h-full pointer-events-none z-[-10] mix-blend-overlay opacity-[0.15]" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E');"></div>

    <!-- Navigation -->
    <nav class="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-[#050505]/40 backdrop-blur-lg border-b border-white/5 gsap-reveal">
        <a href="#" class="text-sm font-light tracking-wide text-gray-200 hover:text-white transition-colors duration-300 flex items-center gap-3">
            <span class="w-1.5 h-1.5 rounded-full bg-[#00FFCC] shadow-[0_0_12px_#00FFCC]"></span>
            Vanguard Labs
        </a>
        
        <div class="hidden md:flex gap-8 text-sm font-extralight text-gray-400">
            <a href="#" class="hover:text-cyan-400 transition-colors duration-300">Framework</a>
            <a href="#" class="hover:text-cyan-400 transition-colors duration-300">Architecture</a>
            <a href="#" class="hover:text-cyan-400 transition-colors duration-300">Modules</a>
            <a href="#" class="hover:text-cyan-400 transition-colors duration-300">Transmission</a>
        </div>

        <button class="md:hidden text-gray-400 hover:text-white transition-colors" aria-label="Menu">
            <iconify-icon icon="solar:hamburger-menu-linear" class="text-2xl" stroke-width="1.5"></iconify-icon>
        </button>
    </nav>

    <!-- Main Content -->
    <main class="relative h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 z-10 pointer-events-none">
        <div class="max-w-2xl pointer-events-auto">
            
            <div class="overflow-hidden mb-6 flex items-center gap-3">
                <span class="relative inline-flex items-center px-3 py-1.5 text-xs font-light text-cyan-300 gsap-reveal-text group z-0">
                    <span class="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 -z-20"></span>
                    <span class="absolute inset-[1px] rounded-full bg-[#0A0A0A]/90 -z-10 backdrop-blur-sm"></span>
                    <iconify-icon icon="solar:augmented-reality-linear" class="mr-2 text-sm" stroke-width="1.5"></iconify-icon>
                    Dimensional Core v4.5
                </span>
            </div>
            
            <h1 class="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight text-white mb-8">
                <span class="inline-block overflow-hidden align-top pb-1"><span class="inline-block masked-word font-semibold">Immersive</span></span>
                <span class="inline-block overflow-hidden align-top pb-1"><span class="inline-block masked-word font-semibold">environments,</span></span>
                <br class="hidden md:block">
                <span class="inline-block overflow-hidden align-top pb-1"><span class="inline-block masked-word font-semibold">engineered</span></span>
                <span class="inline-block overflow-hidden align-top pb-1"><span class="inline-block masked-word font-semibold">with</span></span>
                <br class="hidden md:block">
                <span class="inline-block overflow-hidden align-top pb-1">
                    <span class="inline-block masked-word text-transparent bg-clip-text font-semibold" style="background-image: linear-gradient(120deg, #F3F4F6, #9CA3AF); -webkit-background-clip: text;">absolute</span>
                </span>
                <span class="inline-block overflow-hidden align-top pb-1">
                    <span class="inline-block masked-word text-transparent bg-clip-text font-semibold" style="background-image: linear-gradient(120deg, #00FFCC, #7000FF); -webkit-background-clip: text;">precision.</span>
                </span>
            </h1>

            <p class="text-sm md:text-base text-gray-400 max-w-md font-extralight leading-relaxed mb-10 gsap-reveal-text">
                We build boundary-pushing, physics-enabled digital topologies that merge advanced WebGL with sleek brutalism, crafting the next frontier of immersive computing.
            </p>

            <div class="flex flex-col sm:flex-row gap-5 gsap-reveal-text">
                <a href="#" class="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-[#050505] bg-white rounded-full hover:bg-gray-200 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                    Initialize Directory
                    <iconify-icon icon="solar:arrow-right-linear" class="ml-2 text-lg group-hover:translate-x-1 transition-transform" stroke-width="1.5"></iconify-icon>
                </a>
                <a href="#" class="group relative inline-flex items-center justify-center px-6 py-3 text-sm font-light text-gray-300 rounded-full transition-all duration-300 hover:scale-[1.02] hover:text-white active:scale-[0.98] z-0">
                    <span class="absolute inset-0 rounded-full bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 group-hover:from-gray-700 group-hover:via-gray-600 group-hover:to-gray-800 transition-colors -z-20"></span>
                    <span class="absolute inset-[1px] rounded-full bg-[#050505]/80 backdrop-blur-md -z-10"></span>
                    Launch Environment
                </a>
            </div>
        </div>
    </main>

    <!-- UI Controls & Indicators -->
    <div class="absolute bottom-0 w-full px-6 py-8 flex justify-between items-end z-10 pointer-events-none gsap-reveal">
        <div class="flex flex-col gap-2">
            <div class="text-xs text-gray-500 font-light tracking-widest uppercase">
                Vector // <span id="coord-display" class="text-cyan-400/80 font-medium tracking-wider">0.0000, 0.0000</span>
            </div>
            
            <!-- Custom Theme Toggle -->
            <div class="flex items-center gap-4 mt-5 pointer-events-auto group cursor-pointer" id="theme-toggle" role="switch" aria-checked="false">
                <span class="text-xs font-light text-gray-500 uppercase tracking-widest group-hover:text-gray-300 transition-colors">Void</span>
                <div class="w-10 h-5 rounded-full bg-gray-800 border border-gray-700 relative transition-all duration-300 flex items-center p-0.5 group-hover:border-gray-500 shadow-inner" id="toggle-track">
                    <div class="w-3.5 h-3.5 rounded-full bg-cyan-400 transform transition-transform duration-300 translate-x-0 shadow-[0_0_8px_#00FFCC]" id="toggle-thumb"></div>
                </div>
                <span class="text-xs font-light text-gray-500 uppercase tracking-widest group-hover:text-gray-300 transition-colors">Aurora</span>
            </div>
        </div>

        <div class="flex flex-col items-center gap-4">
            <span class="text-xs text-gray-500 uppercase tracking-widest font-light" style="writing-mode: vertical-rl;">Descend</span>
            <div class="w-[1px] h-14 bg-gray-800 relative overflow-hidden">
                <div class="scroll-line absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent"></div>
            </div>
        </div>
    </div>

    <script>
        // --- Dark WebGL Architecture ---
        const initWebGL = () => {
            const canvas = document.getElementById('webgl-canvas');
            if (!canvas) return;

            const renderer = new THREE.WebGLRenderer({ 
                canvas, 
                alpha: true, 
                antialias: false 
            });
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
            camera.position.z = 12;

            const uniforms = {
                u_time: { value: 0 },
                u_resolution: { value: new THREE.Vector2() },
                u_color1: { value: new THREE.Color(0.0, 0.8, 0.7) }, // Cyan
                u_color2: { value: new THREE.Color(0.4, 0.0, 0.9) }  // Deep Purple
            };

            const snoiseLogic = \`
                vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
                float snoise(vec2 v){
                    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
                    vec2 i  = floor(v + dot(v, C.yy) );
                    vec2 x0 = v -   i + dot(i, C.xx);
                    vec2 i1;
                    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
                    vec4 x12 = x0.xyxy + C.xxzz;
                    x12.xy -= i1;
                    i = mod(i, 289.0);
                    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
                    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
                    m = m*m ; m = m*m ;
                    vec3 x = 2.0 * fract(p * C.www) - 1.0;
                    vec3 h = abs(x) - 0.5;
                    vec3 ox = floor(x + 0.5);
                    vec3 a0 = x - ox;
                    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
                    vec3 g;
                    g.x  = a0.x  * x0.x  + h.x  * x0.y;
                    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
                    return 130.0 * dot(m, g);
                }
            \`;

            // --- Dark Background Shader Plane ---
            const bgMaterial = new THREE.ShaderMaterial({
                vertexShader: \`void main() { gl_Position = vec4(position, 1.0); }\`,
                fragmentShader: \`
                    uniform float u_time;
                    uniform vec2 u_resolution;
                    uniform vec3 u_color1;
                    uniform vec3 u_color2;
                    \${snoiseLogic}
                    void main() {
                        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
                        uv.x *= u_resolution.x / u_resolution.y;

                        vec3 baseColor = vec3(0.02, 0.02, 0.03);
                        vec2 st = uv * 0.5;
                        st += vec2(snoise(st + u_time * 0.04), snoise(st - u_time * 0.04)) * 0.4;

                        float beam = smoothstep(0.2, 0.9, snoise(vec2(st.x + st.y * 2.0 - u_time * 0.1, u_time * 0.03)));
                        vec3 glow = mix(u_color1, u_color2, snoise(uv * 2.0 + u_time * 0.15) * 0.5 + 0.5);

                        float dist = distance(gl_FragCoord.xy / u_resolution.xy, vec2(0.5));
                        float vignette = smoothstep(1.5, 0.1, dist);
                        
                        vec3 edgeColor = vec3(0.01, 0.01, 0.015);
                        vec3 colorGlow = mix(baseColor, glow, beam * 0.6);

                        gl_FragColor = vec4(mix(edgeColor, colorGlow, vignette), 1.0);
                    }
                \`,
                uniforms,
                depthWrite: false,
                depthTest: false
            });

            const bgMesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), bgMaterial);
            bgMesh.position.z = -15;
            scene.add(bgMesh);

            // --- Dark Glass Sphere Shader ---
            const glassMaterial = new THREE.ShaderMaterial({
                vertexShader: \`
                    varying vec3 vNormal;
                    void main() {
                        vNormal = normalize(normalMatrix * normal);
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    }
                \`,
                fragmentShader: \`
                    uniform float u_time;
                    uniform vec2 u_resolution;
                    uniform vec3 u_color1;
                    uniform vec3 u_color2;
                    varying vec3 vNormal;
                    \${snoiseLogic}
                    void main() {
                        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
                        uv += vNormal.xy * 0.2; 
                        uv.x *= u_resolution.x / u_resolution.y;

                        vec3 baseColor = vec3(0.04, 0.04, 0.06);
                        vec2 st = uv * 0.6;
                        st += vec2(snoise(st + u_time * 0.06), snoise(st - u_time * 0.06)) * 0.35;

                        float beam = smoothstep(0.1, 0.9, snoise(vec2(st.x + st.y * 1.8 - u_time * 0.12, u_time * 0.02)));
                        vec3 glow = mix(u_color1, u_color2, snoise(uv * 1.8 + u_time * 0.12) * 0.5 + 0.5);

                        float fresnel = dot(vec3(0.0, 0.0, 1.0), vNormal);
                        fresnel = clamp(1.0 - fresnel, 0.0, 1.0);
                        fresnel = pow(fresnel, 2.5);

                        vec3 finalColor = mix(baseColor, glow, clamp((beam * 0.5) + (fresnel * 0.8), 0.0, 1.0));
                        gl_FragColor = vec4(finalColor, 0.95);
                    }
                \`,
                uniforms,
                transparent: true
            });

            const sphereGeo = new THREE.SphereGeometry(1, 64, 64);
            const spheres = [];

            // Remixed Coordinates and scales
            const sphereData = [
                { scale: 4.2, x: 6.5, y: -1.2, z: -1.5, speed: 0.002 },   
                { scale: 1.8, x: -6.0, y: -4.0, z: 2.5, speed: 0.004 },  
                { scale: 1.1, x: -4.5, y: 4.2, z: -2.0, speed: 0.005 },  
                { scale: 0.75, x: 3.0, y: 5.5, z: 4.0, speed: 0.008 }      
            ];

            sphereData.forEach(data => {
                const mesh = new THREE.Mesh(sphereGeo, glassMaterial);
                mesh.scale.set(data.scale, data.scale, data.scale);
                mesh.position.set(data.x, data.y, data.z);
                scene.add(mesh);
                spheres.push({
                    mesh,
                    baseY: data.y,
                    speed: data.speed,
                    offset: Math.random() * Math.PI * 2
                });
            });

            // --- Viewport Dynamics ---
            let mouseX = 0, mouseY = 0;
            const windowHalfX = window.innerWidth / 2;
            const windowHalfY = window.innerHeight / 2;
            const coordDisplay = document.getElementById('coord-display');

            document.addEventListener('mousemove', (event) => {
                mouseX = (event.clientX - windowHalfX);
                mouseY = (event.clientY - windowHalfY);
                if(coordDisplay) {
                    // Updating coordinates display format
                    coordDisplay.innerText = \`\${(event.clientX / window.innerWidth).toFixed(4)}, \${(event.clientY / window.innerHeight).toFixed(4)}\`;
                }
            });

            const resize = () => {
                const width = window.innerWidth;
                const height = window.innerHeight;
                renderer.setSize(width, height);
                camera.aspect = width / height;
                camera.updateProjectionMatrix();

                const dist = camera.position.z - bgMesh.position.z;
                const vFov = camera.fov * Math.PI / 180;
                const planeHeight = 2 * Math.tan(vFov / 2) * dist;
                bgMesh.scale.set(planeHeight * camera.aspect / 2, planeHeight / 2, 1);
                
                uniforms.u_resolution.value.set(width, height);
            };

            window.addEventListener('resize', resize);
            resize();

            let isAurora = false;
            const themeToggle = document.getElementById('theme-toggle');
            
            themeToggle.addEventListener('click', () => {
                isAurora = !isAurora;
                themeToggle.setAttribute('aria-checked', isAurora.toString());
                const thumb = document.getElementById('toggle-thumb');
                
                if(isAurora) {
                    thumb.style.transform = 'translateX(20px)';
                    thumb.style.backgroundColor = '#FF007F'; // Neon Pink
                    thumb.style.boxShadow = '0 0 8px #FF007F';
                    gsap.to(uniforms.u_color1.value, { r: 1.0, g: 0.0, b: 0.5, duration: 1.5 });
                    gsap.to(uniforms.u_color2.value, { r: 1.0, g: 0.3, b: 0.0, duration: 1.5 });
                } else {
                    thumb.style.transform = 'translateX(0px)';
                    thumb.style.backgroundColor = '#00FFCC'; // Cyan
                    thumb.style.boxShadow = '0 0 8px #00FFCC';
                    gsap.to(uniforms.u_color1.value, { r: 0.0, g: 0.8, b: 0.7, duration: 1.5 });
                    gsap.to(uniforms.u_color2.value, { r: 0.4, g: 0.0, b: 0.9, duration: 1.5 });
                }
            });

            const clock = new THREE.Clock();
            const animate = () => {
                requestAnimationFrame(animate);
                const time = clock.getElapsedTime();
                
                uniforms.u_time.value = time;

                camera.position.x += (mouseX * 0.005 - camera.position.x) * 0.05;
                camera.position.y += (-mouseY * 0.005 - camera.position.y) * 0.05;
                camera.lookAt(scene.position);

                spheres.forEach(s => {
                    s.mesh.position.y = s.baseY + Math.sin(time * s.speed * 120 + s.offset) * 0.5;
                    s.mesh.rotation.x = time * s.speed * 18;
                    s.mesh.rotation.y = time * s.speed * 24;
                });

                renderer.render(scene, camera);
            };

            animate();
        };

        const initUI = () => {
            gsap.registerPlugin(ScrollTrigger);

            const tl = gsap.timeline({ 
                scrollTrigger: {
                    trigger: "main",
                    start: "top 80%",
                },
                defaults: { ease: "power3.out" } 
            });

            gsap.set('.gsap-reveal-text', { y: 24, opacity: 0 });
            gsap.set('.gsap-reveal', { opacity: 0 });
            gsap.set('.masked-word', { y: "110%" });

            tl.to('.gsap-reveal', { opacity: 1, duration: 1.2, delay: 0.2 })
              .to('.gsap-reveal-text', { y: 0, opacity: 1, duration: 1.0, stagger: 0.12 }, "-=1.0")
              .to('.masked-word', { y: "0%", duration: 1.0, stagger: 0.05 }, "-=0.8");

            gsap.to('.scroll-line', {
                yPercent: 150,
                opacity: 0,
                repeat: -1,
                duration: 2.2,
                ease: "power2.inOut",
                onRepeat: function() { gsap.set(this.targets()[0], { yPercent: -100, opacity: 1 }); }
            });
        };

        document.addEventListener('DOMContentLoaded', () => {
            initWebGL();
            initUI();
        });
    <\/script>

</body>
</html>`,de=`<!doctype html>
<html lang="en"><head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vertex 9 Global Data</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&amp;display=swap" rel="stylesheet">
</head>
<body style="font-family: 'Inter', sans-serif; background-color: #0E100F; margin: 0; min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 1rem;" class="antialiased selection:bg-white/20 text-white">

    <!-- Border Gradient Wrapper -->
    <div class="relative w-full max-w-[1440px] p-[1px] rounded-sm" style="background: linear-gradient(145deg, rgba(200,185,160,0.2) 0%, rgba(200,185,160,0.02) 40%, rgba(255,255,255,0) 100%);">
        
        <!-- Main Container -->
        <div class="relative w-full bg-[#0E100F] grid grid-cols-1 lg:grid-cols-3 min-h-[90vh] lg:min-h-[850px] border overflow-hidden border-white/5">
            
            <!-- Global Subtle Grain/Texture Overlay -->
            <div class="absolute inset-0 pointer-events-none z-40 mix-blend-overlay opacity-30" style="background-image: repeating-linear-gradient(45deg, rgba(200,185,160,0.05) 0px, rgba(200,185,160,0.05) 1px, transparent 1px, transparent 12px);"></div>

            <!-- Corner Accents -->
            <div class="absolute -top-[1px] -left-[1px] w-5 h-5 border-t border-l border-[#C8B9A0]/40 z-50 pointer-events-none"></div>
            <div class="absolute -top-[1px] -right-[1px] w-5 h-5 border-t border-r border-[#C8B9A0]/40 z-50 pointer-events-none"></div>
            <div class="absolute -bottom-[1px] -left-[1px] w-5 h-5 border-b border-l border-[#C8B9A0]/40 z-50 pointer-events-none"></div>
            <div class="absolute -bottom-[1px] -right-[1px] w-5 h-5 border-b border-r border-[#C8B9A0]/40 z-50 pointer-events-none"></div>

            <!-- Panel 1: Elegant Cream -->
            <div class="relative p-8 lg:p-12 flex flex-col justify-between overflow-hidden" style="background-color: #F4F1EB;">
                <div class="relative z-10">
                    <h1 class="text-3xl lg:text-4xl tracking-tight font-normal uppercase text-[#1C1F1D] leading-[1.15] mask-reveal pr-4">
                        REDEFINING THE SCALE OF MODERN CLOUD COMPUTING
                    </h1>
                    <div class="mt-8 flex items-start gap-3 text-[#1C1F1D]/80">
                        <iconify-icon icon="solar:monitor-linear" style="stroke-width: 1.5;" class="text-lg mt-0.5"></iconify-icon>
                        <p class="text-sm font-light max-w-[240px] leading-relaxed">
                            A network designed to elevate your stack, offering 99.99% uptime and 24/7 unwavering security.
                        </p>
                    </div>
                </div>
                
                <!-- Geometric Motif Grid -->
                <div id="motif-container" class="grid grid-cols-4 gap-6 mt-24 text-[#C8B9A0] opacity-40">
                    <!-- Populated by JS -->
                </div>
            </div>

            <!-- Panel 2: Ambient Dark Canvas -->
            <div class="relative min-h-[450px] lg:min-h-full border-y lg:border-y-0 lg:border-x border-[#C8B9A0]/10" style="background-color: #121413;">
                <!-- WebGL Canvas for flowing water/silk effect -->
                <div id="webgl-canvas" class="absolute inset-0 w-full h-full"></div>
                
                <!-- Inner Depth Shadows -->
                <div class="absolute inset-0 pointer-events-none" style="box-shadow: inset 0 0 120px rgba(14, 16, 15, 0.9);"></div>
                
                <!-- Center Emblem -->
                <div class="absolute inset-0 flex items-center justify-center pointer-events-none z-20 mix-blend-plus-lighter">
                    <svg viewBox="0 0 100 100" class="w-28 h-28 text-[#D1C5B4] fill-current drop-shadow-[0_0_20px_rgba(200,185,160,0.15)]">
                        <path d="M50 5 L95 50 L50 95 L5 50 Z" fill="none" stroke="currentColor" stroke-width="2"></path>
                        <path d="M50 20 L80 50 L50 80 L20 50 Z" class="opacity-40"></path>
                        <circle cx="50" cy="50" r="6"></circle>
                    </svg>
                </div>
                
                <!-- Bottom Indicator -->
                <div class="absolute bottom-8 left-8 text-[#D1C5B4]/50 flex items-center gap-3 z-20">
                     <iconify-icon icon="solar:shield-check-line-duotone" style="stroke-width: 1.5;" class="text-base"></iconify-icon>
                     <span class="text-xs tracking-widest uppercase font-light">Tier-4 Datacenters</span>
                </div>
            </div>

            <!-- Panel 3: Warm Sand -->
            <div class="relative p-8 lg:p-12 flex flex-col justify-between" style="background-color: #B5AFA2;">
                <div>
                    <div class="flex items-start gap-4 text-[#1C1F1D]">
                        <svg viewBox="0 0 100 100" class="w-8 h-8 flex-shrink-0 fill-current mt-1">
                            <path d="M50 5 L95 50 L50 95 L5 50 Z" fill="none" stroke="currentColor" stroke-width="4"></path>
                            <circle cx="50" cy="50" r="15" class="opacity-60"></circle>
                        </svg>
                        <h2 class="text-3xl lg:text-4xl tracking-tight font-normal uppercase leading-[1.15] mask-reveal">
                            SCALABLE SYSTEMS WITH SUB-MILLISECOND DETAIL
                        </h2>
                    </div>
                    <p class="mt-8 text-sm text-[#1C1F1D]/80 font-light max-w-[240px] leading-relaxed">
                        Every element of our 300-node clusters is crafted to process 50 petabytes without a single fault.
                    </p>
                </div>
                
                <div class="mt-24 text-[#1C1F1D]">
                    <p class="text-xs mb-5 font-normal uppercase tracking-widest text-[#1C1F1D]/70 flex items-center gap-2">
                        <iconify-icon icon="solar:database-linear" style="stroke-width: 1.5;" class="text-base"></iconify-icon>
                        Analytics, storage, and computing
                    </p>
                    <h3 class="text-3xl lg:text-4xl tracking-tight font-normal uppercase leading-[1.15] mask-reveal">
                        AN ENGINE OF GROWTH ACROSS 12 GLOBAL REGIONS
                    </h3>
                </div>
            </div>

        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            // 1. Generate SVG Motif Grid for Panel 1
            const motifContainer = document.getElementById('motif-container');
            const svgMarkup = \`
                <svg viewBox="0 0 100 100" class="w-full aspect-square fill-current">
                    <polygon points="50,15 65,40 90,50 65,60 50,85 35,60 10,50 35,40" />
                    <circle cx="50" cy="50" r="8" class="opacity-30" />
                </svg>
            \`;
            // Add 12 instances for a 4x3 grid look
            for(let i=0; i<12; i++) {
                motifContainer.innerHTML += svgMarkup;
            }

            // 2. GSAP Masked Reveal for Elegant Typography
            gsap.registerPlugin(ScrollTrigger);
            const revealElements = document.querySelectorAll('.mask-reveal');
            
            revealElements.forEach(el => {
                const text = el.innerText;
                el.innerHTML = '';
                const words = text.split(' ');
                
                words.forEach(word => {
                    if(word.trim() === '') return;
                    
                    const outer = document.createElement('span');
                    outer.className = 'inline-block overflow-hidden align-bottom mr-[0.25em] pb-1';
                    
                    const inner = document.createElement('span');
                    inner.className = 'inline-block translate-y-[110%] will-change-transform';
                    inner.innerText = word;
                    
                    outer.appendChild(inner);
                    el.appendChild(outer);
                });

                gsap.to(el.querySelectorAll('span > span'), {
                    y: '0%',
                    duration: 1.4,
                    ease: 'power3.out',
                    stagger: 0.05,
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 95%'
                    }
                });
            });

            // 3. Three.js Gentle Flowing Silk/Water Animation
            function initThree() {
                const container = document.getElementById('webgl-canvas');
                if(!container || typeof THREE === 'undefined') return;

                const scene = new THREE.Scene();
                const camera = new THREE.PerspectiveCamera(55, container.clientWidth / container.clientHeight, 0.1, 100);
                camera.position.set(0, -2, 9);

                const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
                renderer.setSize(container.clientWidth, container.clientHeight);
                renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
                container.appendChild(renderer.domElement);

                const group = new THREE.Group();
                scene.add(group);

                const numLines = 60;
                const pointsPerLine = 100;
                
                // Elegant warm neutrals
                const colorStart = new THREE.Color('#D1C5B4'); 
                const colorEnd = new THREE.Color('#7A7B76');

                for (let i = 0; i < numLines; i++) {
                    const points = [];
                    const xPos = (i - numLines / 2) * 0.22;
                    for (let j = 0; j < pointsPerLine; j++) {
                        const yPos = (j - pointsPerLine / 2) * 0.2;
                        points.push(new THREE.Vector3(xPos, yPos, 0));
                    }
                    const geometry = new THREE.BufferGeometry().setFromPoints(points);
                    
                    const color = new THREE.Color().lerpColors(colorStart, colorEnd, i / numLines);

                    const material = new THREE.LineBasicMaterial({
                        color: color,
                        transparent: true,
                        opacity: 0.1 + (Math.random() * 0.25),
                        blending: THREE.AdditiveBlending
                    });
                    
                    const line = new THREE.Line(geometry, material);
                    group.add(line);
                }

                // Tilt to create a flowing plane
                group.rotation.x = Math.PI / 3;
                group.rotation.z = -Math.PI / 8;

                const clock = new THREE.Clock();

                function animate() {
                    requestAnimationFrame(animate);
                    const time = clock.getElapsedTime() * 0.4; // Slower, more relaxed pace

                    group.children.forEach((line, i) => {
                        const positions = line.geometry.attributes.position.array;
                        for (let j = 0; j < pointsPerLine; j++) {
                            const idx = j * 3;
                            const x = positions[idx];
                            const y = positions[idx + 1];
                            
                            // Smooth, rolling, gentle waves reminiscent of water or silk
                            const wave1 = Math.sin(y * 1.2 + time + x * 0.8) * 0.8;
                            const wave2 = Math.cos(x * 1.5 - time * 0.8 + y * 0.5) * 0.6;
                            
                            positions[idx + 2] = wave1 + wave2;
                        }
                        line.geometry.attributes.position.needsUpdate = true;
                    });

                    renderer.render(scene, camera);
                }
                animate();

                window.addEventListener('resize', () => {
                    if(container) {
                        camera.aspect = container.clientWidth / container.clientHeight;
                        camera.updateProjectionMatrix();
                        renderer.setSize(container.clientWidth, container.clientHeight);
                    }
                });
            }
            
            initThree();
        });
    <\/script>

</body></html>`,pe=`<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Void Field</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
    <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"><\/script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"><\/script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400&display=swap" rel="stylesheet">
</head>
<body class="antialiased text-purple-200 bg-[#08030c] min-h-screen relative overflow-x-hidden flex items-center justify-center p-4 lg:p-12" style="font-family: 'Inter', sans-serif;">

    <!-- Background decorative text -->
    <div class="fixed top-[-5vh] left-[-10vw] text-[40vw] font-extralight tracking-tight text-purple-400/[0.03] select-none z-0 leading-none">
        042
    </div>

    <!-- Container Lines Directive -->
    <div class="relative w-full max-w-[1100px] mx-auto z-10">
        <!-- Infinite Container Vertical Lines -->
        <div class="absolute top-[-100vh] bottom-[-100vh] left-0 w-px bg-purple-400/10 hidden md:block z-0"></div>
        <div class="absolute top-[-100vh] bottom-[-100vh] right-0 w-px bg-purple-400/10 hidden md:block z-0"></div>
        
        <!-- Container Corner Nodes (6px square) -->
        <div class="absolute top-0 left-[-2.5px] w-[6px] h-[6px] bg-purple-300 border border-purple-800 z-20 hidden md:block"></div>
        <div class="absolute top-0 right-[-2.5px] w-[6px] h-[6px] bg-purple-300 border border-purple-800 z-20 hidden md:block"></div>
        <div class="absolute bottom-0 left-[-2.5px] w-[6px] h-[6px] bg-purple-300 border border-purple-800 z-20 hidden md:block"></div>
        <div class="absolute bottom-0 right-[-2.5px] w-[6px] h-[6px] bg-purple-300 border border-purple-800 z-20 hidden md:block"></div>

        <!-- Thin 16px Frame Brackets -->
        <div class="absolute top-[-16px] left-[-16px] w-[16px] h-[16px] border-t border-l border-purple-400/30 hidden md:block z-20"></div>
        <div class="absolute top-[-16px] right-[-16px] w-[16px] h-[16px] border-t border-r border-purple-400/30 hidden md:block z-20"></div>
        <div class="absolute bottom-[-16px] left-[-16px] w-[16px] h-[16px] border-b border-l border-purple-400/30 hidden md:block z-20"></div>
        <div class="absolute bottom-[-16px] right-[-16px] w-[16px] h-[16px] border-b border-r border-purple-400/30 hidden md:block z-20"></div>

        <div class="py-12 lg:py-24 flex justify-center w-full">
            
            <!-- Main Hardware Housing (2.3:1 Aspect Ratio on lg) -->
            <div class="relative w-full lg:aspect-[2.3/1] rounded-[3rem] bg-[#130a1c] shadow-[0_10px_40px_rgba(0,0,0,0.8),_0_20px_80px_rgba(0,0,0,0.6),inset_0_0_0_1px_rgba(216,180,254,0.15)] p-3 lg:p-5 flex flex-col">
                
                <!-- Premium Gradient Bezel Edge -->
                <div class="absolute inset-0 rounded-[3rem] shadow-[inset_0_2px_4px_rgba(216,180,254,0.05)] pointer-events-none z-10 border border-transparent" style="background: linear-gradient(135deg, rgba(216,180,254,0.15) 0%, rgba(216,180,254,0.02) 40%, transparent 100%) border-box; -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0); -webkit-mask-composite: destination-out; mask-composite: exclude;"></div>

                <!-- Hardware Details (Screws/Rivets top/bottom) -->
                <div class="absolute top-3 left-1/4 w-3 h-3 rounded-full bg-black/90 shadow-[inset_0_1px_1px_rgba(216,180,254,0.2)] z-20"></div>
                <div class="absolute top-3 right-1/4 w-3 h-3 rounded-full bg-black/90 shadow-[inset_0_1px_1px_rgba(216,180,254,0.2)] z-20"></div>
                <div class="absolute bottom-3 left-1/4 w-3 h-3 rounded-full bg-black/90 shadow-[inset_0_1px_1px_rgba(216,180,254,0.2)] z-20"></div>
                <div class="absolute bottom-3 right-1/4 w-3 h-3 rounded-full bg-black/90 shadow-[inset_0_1px_1px_rgba(216,180,254,0.2)] z-20"></div>

                <!-- Inner Housing / Shadow Box -->
                <div class="relative rounded-[2.5rem] bg-[#0a0510] overflow-hidden shadow-[inset_0_20px_50px_rgba(0,0,0,0.9)] border border-purple-400/5 z-10 flex-grow flex flex-col" style="background-image: repeating-linear-gradient(to right, #0a0510, #0a0510 6px, #10081a 6px, #10081a 10px);">
                    
                    <!-- Screen Area -->
                    <div class="relative m-4 lg:m-8 rounded-xl bg-[#0a0510] shadow-[inset_0_5px_20px_rgba(0,0,0,1)] overflow-hidden flex flex-col flex-grow min-h-[400px] lg:min-h-0">
                        
                        <!-- Premium Gradient Screen Border -->
                        <div class="absolute inset-0 rounded-xl pointer-events-none border border-transparent z-30" style="background: linear-gradient(180deg, rgba(216,180,254,0.15) 0%, rgba(216,180,254,0.02) 25%, rgba(0,0,0,0.8) 100%) border-box; -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0); -webkit-mask-composite: destination-out; mask-composite: exclude;"></div>

                        <!-- WebGL Dot Matrix Layer -->
                        <canvas id="webgl-canvas" class="absolute inset-0 w-full h-full opacity-80 mix-blend-screen pointer-events-none z-0"></canvas>

                        <!-- Screen Horizontal Corrugation Overlay -->
                        <div class="absolute inset-0 pointer-events-none z-10 opacity-40" style="background-image: repeating-linear-gradient(to bottom, transparent, transparent 18px, rgba(0,0,0,0.9) 18px, rgba(0,0,0,0.9) 20px);"></div>

                        <!-- Faint Geometric Wireframe -->
                        <svg class="absolute right-0 top-0 h-full w-2/3 opacity-10 pointer-events-none z-10 stroke-purple-500" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M400 50 L550 150 L550 350 L400 450 L250 350 L250 150 Z" stroke-width="2"></path>
                            <path d="M400 50 L400 250 M250 150 L400 250 M550 150 L400 250 M400 450 L400 250 M250 350 L400 250 M550 350 L400 250" stroke-width="1"></path>
                            <circle cx="550" cy="150" r="40" stroke-width="2"></circle>
                        </svg>

                        <!-- Content Container -->
                        <div class="relative z-20 flex flex-col h-full text-purple-100 w-full">
                            
                            <!-- Top Section -->
                            <div class="flex items-center px-6 lg:px-12 py-6 border-b border-purple-400/10 bg-gradient-to-r from-transparent to-black/60">
                                <div class="flex items-center gap-4 border-r border-purple-400/20 pr-8">
                                    <iconify-icon icon="solar:arrow-right-up-linear" class="text-4xl text-purple-400" style="stroke-width: 1.5px;"></iconify-icon>
                                    <div class="flex items-center gap-2">
                                        <div class="w-1 h-6 bg-purple-400/50"></div>
                                        <span class="text-3xl font-extralight tracking-tight">V-72</span>
                                    </div>
                                </div>
                                <div class="pl-8 text-xs font-normal uppercase tracking-widest opacity-70 leading-tight">
                                    Void<br>Protocol
                                </div>
                            </div>

                            <!-- Middle Section (Data Band) -->
                            <div class="bg-purple-500/[0.03] text-purple-100 border-b border-purple-400/10 flex flex-col lg:flex-row relative backdrop-blur-sm">
                                
                                <!-- Inner layout grid -->
                                <div class="grid grid-cols-1 lg:grid-cols-12 w-full">
                                    <!-- Column 1: Core Telemetry -->
                                    <div class="lg:col-span-3 px-6 lg:px-12 py-6 flex items-center border-b lg:border-b-0 lg:border-r border-purple-400/10">
                                        <h2 class="text-3xl lg:text-4xl font-extralight tracking-tight leading-none masked-reveal">
                                            Quantum<br>Metric
                                        </h2>
                                    </div>

                                    <!-- Column 2: Date -->
                                    <div class="lg:col-span-3 px-6 lg:px-8 py-6 flex items-center border-b lg:border-b-0 lg:border-r border-purple-400/10">
                                        <div class="flex items-start gap-1">
                                            <span class="text-4xl lg:text-5xl font-extralight tracking-tight">NET.42</span>
                                            <span class="text-sm font-extralight mt-1 opacity-70">.8192</span>
                                        </div>
                                        <iconify-icon icon="solar:double-alt-arrow-right-linear" class="ml-auto text-2xl opacity-40" style="stroke-width: 1.5px;"></iconify-icon>
                                    </div>

                                    <!-- Column 3: Data Uplink -->
                                    <div class="lg:col-span-3 px-6 lg:px-8 py-6 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-purple-400/10">
                                        <div class="text-4xl lg:text-5xl font-extralight tracking-tight masked-reveal">72</div>
                                        <div class="text-xs font-normal uppercase tracking-widest mt-1 opacity-70">Link Status</div>
                                    </div>

                                    <!-- Column 4: Cycles -->
                                    <div class="lg:col-span-3 px-6 lg:px-8 py-6 flex flex-col justify-center relative">
                                        <div class="flex items-center gap-3">
                                            <iconify-icon icon="solar:atom-linear" class="text-2xl opacity-40" style="stroke-width: 1.5px;"></iconify-icon>
                                            <div class="text-4xl lg:text-5xl font-extralight tracking-tight masked-reveal">1.059</div>
                                        </div>
                                        <div class="text-xs font-normal uppercase tracking-widest mt-1 ml-9 opacity-70">Phases</div>
                                    </div>
                                </div>
                            </div>

                            <!-- Bottom Section -->
                            <div class="flex-grow flex items-end px-6 lg:px-12 py-8 lg:py-12 bg-gradient-to-t from-black/80 to-transparent relative">
                                <div class="flex items-end gap-8 w-full">
                                    <div class="text-8xl lg:text-9xl leading-none font-extralight tracking-tight opacity-90 masked-reveal text-purple-100" style="text-shadow: 0px 0px 20px rgba(216,180,254,0.2);">
                                        99
                                    </div>
                                    <div class="mb-4 lg:mb-8 flex flex-col gap-2">
                                        <div class="text-xs font-normal uppercase tracking-widest leading-tight opacity-70">
                                            System<br>Override
                                        </div>
                                        <iconify-icon icon="solar:target-linear" class="text-2xl opacity-50 text-purple-200" style="stroke-width: 1.5px;"></iconify-icon>
                                    </div>
                                </div>

                                <!-- Bottom Edge Detailing -->
                                <div class="absolute bottom-0 left-0 w-full h-4 flex border-t border-purple-400/10">
                                    <div class="w-16 h-full bg-[#0e0716] border-r border-purple-400/10 flex items-center justify-center gap-1">
                                        <div class="w-1 h-1 bg-purple-400/30 rounded-full"></div>
                                        <div class="w-1 h-1 bg-purple-400/30 rounded-full"></div>
                                    </div>
                                    <div class="w-32 h-full bg-purple-400/5 border-r border-purple-400/10"></div>
                                    <!-- Striped hazard area -->
                                    <div class="w-48 h-full border-r border-purple-400/10" style="background-image: repeating-linear-gradient(45deg, rgba(216,180,254,0.05) 0, rgba(216,180,254,0.05) 4px, transparent 4px, transparent 8px);"></div>
                                    <div class="w-16 h-full bg-[#0e0716] border-r border-purple-400/10 flex items-center justify-center gap-1">
                                        <div class="w-1 h-1 bg-purple-400/30 rounded-full"></div>
                                        <div class="w-1 h-1 bg-purple-400/30 rounded-full"></div>
                                    </div>
                                    <div class="flex-grow h-full bg-purple-400/[0.02]"></div>
                                    <div class="w-16 h-full bg-[#0e0716] border-l border-purple-400/10 flex items-center justify-center gap-1">
                                        <div class="w-1 h-1 bg-purple-400/30 rounded-full"></div>
                                        <div class="w-1 h-1 bg-purple-400/30 rounded-full"></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Scripts for WebGL and GSAP -->
    <script>
        // 1. Masked Reveal via GSAP (TranslateY 100% to 0% with power4.out)
        document.addEventListener("DOMContentLoaded", () => {
            gsap.registerPlugin(ScrollTrigger);

            const revealElements = document.querySelectorAll('.masked-reveal');
            
            revealElements.forEach(el => {
                const text = el.innerHTML;
                const words = text.split(/<br>|\\s+/).filter(w => w.trim() !== '');
                el.innerHTML = '';
                
                words.forEach((word) => {
                    const wrapper = document.createElement('span');
                    wrapper.className = 'inline-block overflow-hidden align-bottom pb-1 -mb-1 mr-2';
                    
                    const inner = document.createElement('span');
                    inner.className = 'inline-block translate-y-[100%] opacity-0';
                    inner.innerHTML = word;
                    
                    if(text.includes(word + '<br>')) {
                        wrapper.appendChild(inner);
                        el.appendChild(wrapper);
                        el.appendChild(document.createElement('br'));
                    } else {
                        wrapper.appendChild(inner);
                        el.appendChild(wrapper);
                    }
                });

                gsap.to(el.querySelectorAll('span > span'), {
                    y: "0%",
                    opacity: 1,
                    duration: 1.2,
                    ease: "power4.out",
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%",
                    }
                });
            });
        });

        // 2. WebGL Dot-Matrix Terminal Shader
        const canvas = document.getElementById('webgl-canvas');
        const gl = canvas.getContext('webgl', { alpha: true, antialias: false });

        if (gl) {
            const resize = () => {
                canvas.width = canvas.clientWidth;
                canvas.height = canvas.clientHeight;
                gl.viewport(0, 0, canvas.width, canvas.height);
            };
            window.addEventListener('resize', resize);
            resize();

            const vertexShaderSource = \`
                attribute vec2 position;
                void main() {
                    gl_Position = vec4(position, 0.0, 1.0);
                }
            \`;

            const fragmentShaderSource = \`
                precision highp float;
                uniform vec2 iResolution;
                uniform float iTime;
                uniform vec2 uMouse;

                vec2 barrel(vec2 uv, float amt) {
                    vec2 cc = uv - 0.5;
                    float r = dot(cc, cc);
                    return uv + cc * r * amt;
                }

                float rand(vec2 co) {
                    return fract(sin(dot(co, vec2(12.9898,78.233))) * 43758.5453);
                }

                void main() {
                    vec2 uv = gl_FragCoord.xy / iResolution.xy;
                    
                    // Parallax drift based on uMouse
                    vec2 mouseOffset = (uMouse - 0.5) * 0.05;
                    uv += mouseOffset;

                    // Barrel distortion curvature
                    uv = barrel(uv, 0.2);

                    // Clamp edges
                    if(uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
                        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
                        return;
                    }

                    // Dot matrix resolution
                    vec2 gridCount = vec2(100.0, 100.0 * (iResolution.y / iResolution.x));
                    vec2 gridUv = fract(uv * gridCount);
                    vec2 id = floor(uv * gridCount);

                    // Radial symmetry distance
                    vec2 cc = id / gridCount - 0.5;
                    float dist = length(cc);
                    
                    // Slow breathing pulse
                    float pulse = sin(iTime * 1.5 - dist * 10.0) * 0.5 + 0.5;

                    // Dot formulation
                    float dotSize = 0.35 * pulse;
                    float d = length(gridUv - 0.5);
                    float circle = smoothstep(dotSize, dotSize - 0.05, d);

                    // Digital scanlines
                    float scanline = sin(uv.y * 800.0) * 0.03;

                    // Randomized flicker
                    float flicker = rand(vec2(iTime, id.y)) > 0.98 ? 0.4 : 1.0;

                    // Base color compilation (Tinted Monotone Purple)
                    vec3 col = vec3(circle * pulse * flicker);
                    col -= scanline;
                    col *= vec3(0.7, 0.3, 1.0); // Purple tint
                    
                    // Vignette edge masking
                    col *= smoothstep(0.8, 0.2, dist);

                    gl_FragColor = vec4(col, 1.0);
                }
            \`;

            const compileShader = (type, source) => {
                const shader = gl.createShader(type);
                gl.shaderSource(shader, source);
                gl.compileShader(shader);
                return shader;
            };

            const vertexShader = compileShader(gl.VERTEX_SHADER, vertexShaderSource);
            const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragmentShaderSource);

            const program = gl.createProgram();
            gl.attachShader(program, vertexShader);
            gl.attachShader(program, fragmentShader);
            gl.linkProgram(program);
            gl.useProgram(program);

            const positionBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
                -1.0, -1.0,  1.0, -1.0, -1.0,  1.0,
                -1.0,  1.0,  1.0, -1.0,  1.0,  1.0
            ]), gl.STATIC_DRAW);

            const positionLocation = gl.getAttribLocation(program, "position");
            gl.enableVertexAttribArray(positionLocation);
            gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

            const iResLoc = gl.getUniformLocation(program, "iResolution");
            const iTimeLoc = gl.getUniformLocation(program, "iTime");
            const uMouseLoc = gl.getUniformLocation(program, "uMouse");

            // Interactive pointer drift tracking
            let mouseX = 0.5, mouseY = 0.5;
            document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX / window.innerWidth;
                mouseY = 1.0 - (e.clientY / window.innerHeight);
            });

            const startTime = performance.now();
            const render = (time) => {
                const elapsedTime = (time - startTime) / 1000.0;
                
                gl.uniform2f(iResLoc, canvas.width, canvas.height);
                gl.uniform1f(iTimeLoc, elapsedTime);
                gl.uniform2f(uMouseLoc, mouseX, mouseY);

                gl.drawArrays(gl.TRIANGLES, 0, 6);
                requestAnimationFrame(render);
            };
            requestAnimationFrame(render);
        }
    <\/script>
</body>
</html>`,ge=`<svg viewBox="0 0 512 512" aria-hidden="true">
  <defs>
    <mask id="threeui-intro-cut" maskUnits="userSpaceOnUse" x="0" y="0" width="512" height="512">
      <rect width="512" height="512" fill="#000"/>
      <circle cx="256" cy="256" r="208" fill="#fff"/>
      <g fill="none" stroke="#000" stroke-linecap="round" stroke-width="28">
        <path d="M36 178C112 252 184 264 260 196C336 128 404 114 482 180"/>
        <path d="M36 292C112 366 184 378 260 310C336 242 404 228 482 294"/>
      </g>
    </mask>
  </defs>
  <rect width="512" height="512" fill="#f5f5f7" mask="url(#threeui-intro-cut)"/>
</svg>`,fe=`<svg width="1600" height="300" viewBox="0 0 1600 300" fill="none" xmlns="http://www.w3.org/2000/svg">
  <text x="800" y="235" text-anchor="middle" fill="#F4F4F0" font-family="'Helvetica Neue', Helvetica, Arial, sans-serif" font-size="240" font-weight="900" letter-spacing="-8">SHADERS</text>
</svg>`,S={mode:"dark",hue:0,saturation:1,brightness:1},_={"rising-diagonal":{title:"Twelve Works in Slow Orbit",headline:["TWELVE WORKS","IN SLOW ORBIT"],headlineWidths:[1846,2e3],axis:25.5,phase:93,direction:1,field:"matte",palette:["#e9e5dd","#20232a","#c25a43","#2f5b4e","#d6cfc2","#3a4763","#dda45c","#14161a","#a7b3a4","#f3f1ec","#5a6670","#8c4b3f"],ink:{dark:["#8d949c","#ffffff","#20232a"],light:["#6b7280","#111827","#e9e5dd"]},type:{font:"sans",weight:"400",headlineSize:1.15,tracking:.1},motion:{spring:!0,ease:.42}},"falling-diagonal":{title:"Signal Lost, Image Holding",headline:["SIGNAL LOST","IMAGE HOLDING"],headlineWidths:[1622,1917],axis:-25.5,phase:87,direction:-1,field:"glitch",palette:["#0b0b12","#ff2f6d","#00e6ff","#13f28a","#f2f2f8","#7a1bff","#101018","#ff7a1a","#141a2e","#e01f52","#1a1a26","#0ac2d8"],ink:{dark:["#ff2f6d","#f2f2f8","#0b0b12"],light:["#c81049","#111827","#f2f2f8"]},type:{font:"sans",weight:"700",headlineSize:1.2,tracking:0},motion:{spring:!1,ease:.12}},"horizontal-sweep":{title:"Prints from the Flat Files",headline:["PRINTS FROM","THE FLAT FILES"],headlineWidths:[1506,1917],axis:0,phase:90,direction:1,field:"riso",palette:["#e0b64a","#b1512a","#6d7638","#ecdfc2","#2f6b66","#8a3a2b","#d69b3e","#3c4630","#c06e3a","#e6d3a8","#546d76","#7a4726"],ink:{dark:["#e0b64a","#f4e9d2","#6d2a16"],light:["#8a3a2b","#2b2018","#e0b64a"]},type:{font:"oldstyle",weight:"700",headlineSize:1.2,tracking:.03},motion:{spring:!1,ease:.9}},"vertical-loop":{title:"One Wall, Twelve Plates",headline:["ONE WALL","TWELVE PLATES"],headlineWidths:[1132,1840],axis:90,phase:0,direction:-1,field:"halftone",palette:["#12110f","#f2efe8","#1c1b18","#e4e0d7","#2b2a26","#d6d1c6","#0a0a09","#faf8f3","#1f1e1a","#eae6dd","#161513","#c0402c"],ink:{dark:["#c0402c","#f2efe8","#12110f"],light:["#c0402c","#12110f","#e4e0d7"]},type:{font:"didone",weight:"400",headlineSize:1.25,tracking:.06},motion:{spring:!1,ease:.55}}},M={serif:'"Times New Roman",Times,"Liberation Serif","Nimbus Roman",serif',didone:'Didot,"Bodoni 72","Bodoni MT","Playfair Display",Georgia,serif',oldstyle:'"Iowan Old Style","Palatino Linotype",Palatino,"Book Antiqua",Georgia,serif',sans:'"Helvetica Neue",Helvetica,"Inter",Arial,system-ui,sans-serif'},he=["400","700"],R={variant:"rising-diagonal"};function ue(e,a){const t=a==="light"?"#f4f7fb":"#111318",o=a==="light"?["#60a5fa","#3b82f6","#2563eb"]:["#2563eb","#1d4ed8","#1e40af"];return e.replace("<title>Uploading — glowing border microinteraction</title>","<title>Thinking — glowing border microinteraction</title>").replace("<style>",`<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap" rel="stylesheet">
<style>`).replaceAll("#1d1d1d",t).replace("var word = 'Uploading'","var word = 'Thinking'").replace(`var FONT = '300 100px -apple-system, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Inter, system-ui, "Segoe UI", Roboto, sans-serif';`,`var FONT = '300 100px Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';`).replace(`      if(glyphs[i].ch === 'g') doubleStoreyG(c);
      else{`,"      {").replace("grd.addColorStop(0, '#2e3242');",`grd.addColorStop(0, '${o[0]}');`).replace("grd.addColorStop(0.55, '#2b2f3c');",`grd.addColorStop(0.55, '${o[1]}');`).replace("grd.addColorStop(1, '#272c36');",`grd.addColorStop(1, '${o[2]}');`).replaceAll("rgb(83,92,135)","rgb(219,234,254)").replaceAll("rgb(97,106,150)","rgb(239,246,255)").replace("rgb(133,141,189)","rgb(255,255,255)").replace("  var CX = 1024 - 22, CY = 1024 + 11.5;   /* button centre in the source recording */",`  var SCL = 0.49;                          /* hero button -> normal button */
  var CX = (1024 - 22)/SCL, CY = (1024 + 11.5)/SCL;`).replace("    k = S*dpr/REF;","    k = S*dpr/REF*SCL;").replace("  var PW = 976, PH = 345, PR = 100;","  var PW = 1010, PH = 345, PR = 100;").replace("  var TXT_W = 778, TXT_CAP = 120, TXT_BASE = 1093;",`  var TXT_W = 450, TXT_CAP = 79, TXT_BASE = CY + 38;
  var BR_R = 13, BR_SP = 40, BR_GAP = 78;   /* braille dot radius, cell pitch, gap to label */
  var BR_W = BR_SP + 2*BR_R, BR_SHIFT = (BR_W + BR_GAP)/2;
  /* the terminal 'dots' spinner, as raised-dot masks: bit 0..2 = left column top->bottom, 3..5 = right */
  var BRAILLE = [0x0B,0x19,0x39,0x38,0x3C,0x34,0x26,0x27,0x07,0x0F];
  var BR_STEPS = 30;                        /* three full spinner cycles per lap, so the loop still joins */`).replace("  var glyphs = [], fontPx = 169, tracking = 0, textX = 0;","  var glyphs = [], fontPx = 169, tracking = 0, textX = 0, brailleX = 0;").replace("    textX = (CX + 4)*k - TXT_W*k/2 + lead;",`    textX = (CX + 4)*k - TXT_W*k/2 + lead + BR_SHIFT*k;
    brailleX = (CX + 4)*k - (BR_W + BR_GAP + TXT_W)*k/2 + BR_R*k;`).replace("  function label(c, ph){",`  /* the spinner is drawn as dots rather than braille glyphs, so it never depends
     on a system face carrying the U+28xx block */
  function braille(c, ph){
    var mask = BRAILLE[Math.floor(ph*BR_STEPS) % BRAILLE.length];
    var cy = (CY - 1.5)*k, r = BR_R*k, sp = BR_SP*k;
    for(var b=0;b<6;b++){
      var on = (mask >> b) & 1;
      c.beginPath();
      c.arc(brailleX + (b < 3 ? 0 : sp), cy + ((b % 3) - 1)*sp, on ? r : r*0.7, 0, Math.PI*2);
      c.fillStyle = on ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.16)';
      c.fill();
    }
  }

  function label(c, ph){`).replace(`    plate(ctx);
    label(ctx, ph);`,`    plate(ctx);
    braille(ctx, ph);
    label(ctx, ph);`)}function me(e,a){return a!=="dark"?e:e.replace("from-black/10 via-black/20 to-black/10","from-white/[0.16] via-white/[0.07] to-white/[0.16]").replace("text-black/60","text-white/70").replace("text-slate-600","text-slate-200").replace('stroke="#666"','stroke="#e5e7eb"').replace("hover:bg-slate-50","hover:bg-white/10")}function ve(e,a){return a!=="light"?e:e.replaceAll("#fffa","#111a").replaceAll("#fffd","#111d").replaceAll("#fff4","#1114").replaceAll("#fff3","#1113").replaceAll("#fff2","#1112")}const xe=/function buildLabels\(\)\{[\s\S]*?\n\}\n\nfunction resize/,be=/function buildHead\(\)\{[\s\S]*?\n\}\n\nfunction buildLabels/,we=/function lin\(x,x0,y0,x1,y1,stops\)\{[\s\S]*?\n\];\n\nfunction roundRectPath/,ye=/    \/\* film grain \*\/\n[\s\S]*?\n    x\.restore\(\);\n    front\.push\(c\);/,ke=/var t0 = performance\.now\(\), tNow = 0, playing = true;[\s\S]*?window\.__play = function\(\)\{ t0 = performance\.now\(\) - tNow\*1000; playing = true; \};/,Se=`function buildHead(){
  headLayer = mkc(Math.max(1,W), Math.max(1,H));
  var x = headLayer.getContext('2d');
  if (x.letterSpacing !== undefined) x.letterSpacing = (HEAD_TRACK*HEAD_CAP*HEAD_SIZE*K).toFixed(2)+'px';
  if (HEAD_STYLE === 'riso'){
    var off = 0.055*HEAD_CAP*HEAD_SIZE*K;
    headPass(x, off, off, HEAD_SHADOW);
  }
  headPass(x, 0, 0, null);
  if (HEAD_STYLE === 'glitch') headGlitch(x);
}

/* one setting of the two headline lines, optionally displaced and forced to
   a single colour, so a style can stack passes into its treatment */
function headPass(x, dx, dy, tint){
  for (var i=0;i<HEAD.length;i++){
    var h = HEAD[i];
    fitText(x, h.s, SANS, HEAD_WEIGHT, HEAD_CAP*HEAD_SIZE*K, d2sx(1481) + dx,
            d2sy(HEAD_MID + (h.top - HEAD_MID)*HEAD_SIZE) + dy, h.w*HEAD_SIZE*K, tint || h.fill);
  }
}

/* the headline as a picture that lost its signal: a few rows slip sideways
   and two colour channels sit out of register behind the letterforms */
function headGlitch(x){
  var w = headLayer.width, h = headLayer.height, i;
  var snap = mkc(w,h);
  snap.getContext('2d').drawImage(headLayer,0,0);
  var r = rng(0x2E51);
  var top = d2sy(HEAD_MID) - HEAD_CAP*HEAD_SIZE*K*2.1, span = HEAD_CAP*HEAD_SIZE*K*4.2;
  for (i=0;i<7;i++){
    var sy = Math.round(top + r()*span);
    var sh = Math.round((0.03 + r()*0.11)*HEAD_CAP*HEAD_SIZE*K);
    var dx = Math.round((r()-0.5)*0.08*w);
    x.clearRect(0,sy,w,sh);
    x.drawImage(snap, 0,sy,w,sh, dx,sy,w,sh);
  }
  var ghost = function(color){
    var g = mkc(w,h), gx = g.getContext('2d');
    gx.drawImage(snap,0,0);
    gx.globalCompositeOperation = 'source-in';
    gx.fillStyle = color; gx.fillRect(0,0,w,h);
    return g;
  };
  var off = 0.05*HEAD_CAP*HEAD_SIZE*K;
  x.save();
  /* the ghosts go under the letterforms, so the headline stays readable */
  x.globalCompositeOperation = 'destination-over';
  x.globalAlpha = 0.9;
  x.drawImage(ghost(HEAD_GHOST[0]), -off, 0);
  x.drawImage(ghost(HEAD_GHOST[1]), off, 0);
  x.restore();
}

function buildLabels`,Te=`function fill(x,style){ x.fillStyle = style; x.fillRect(0,0,TS,TS); }

function rgbOf(hex){
  var v = parseInt(hex.slice(1),16);
  return [(v>>16)&255,(v>>8)&255,v&255];
}
function mixRGB(a,b,t){
  return [a[0]+(b[0]-a[0])*t, a[1]+(b[1]-a[1])*t, a[2]+(b[2]-a[2])*t];
}
function cssRGB(c){
  return 'rgb('+(c[0]|0)+','+(c[1]|0)+','+(c[2]|0)+')';
}
function luma(c){ return (c[0]*0.299 + c[1]*0.587 + c[2]*0.114)/255; }

/* value noise on a 64x64 lattice, smoothstep-interpolated and wrapped */
function noiseField(seed){
  var g = new Float32Array(4096), r = rng(seed), i;
  for (i=0;i<4096;i++) g[i] = r();
  return function(x,y){
    var x0 = Math.floor(x), y0 = Math.floor(y);
    var fx = x - x0, fy = y - y0;
    fx = fx*fx*(3-2*fx); fy = fy*fy*(3-2*fy);
    var ra = (y0 & 63)*64, rb = ((y0+1) & 63)*64, ca = x0 & 63, cb = (x0+1) & 63;
    var a = g[ra+ca], b = g[ra+cb], c = g[rb+ca], d = g[rb+cb];
    return a + (b-a)*fx + (c-a)*fy + (a-b-c+d)*fx*fy;
  };
}
function fbm(n,x,y,oct){
  var v = 0, amp = 0.5, f = 1, tot = 0, i;
  for (i=0;i<oct;i++){ v += amp*n(x*f,y*f); tot += amp; amp *= 0.5; f *= 2; }
  return v/tot;
}
function grain(x, alpha){
  x.save();
  x.globalCompositeOperation = 'overlay';
  x.globalAlpha = alpha;
  x.fillStyle = x.createPattern(grainTile,'repeat');
  x.fillRect(0,0,TS,TS);
  x.restore();
}

/* paint a low-resolution field, then blow it up over the whole tile: smooth
   for a matte plate, nearest wherever the noise has to keep its edges */
function fieldBuffer(N, shade){
  var buf = mkc(N,N), bx = buf.getContext('2d'), d = bx.createImageData(N,N), px, py, o, c;
  for (py=0;py<N;py++){
    for (px=0;px<N;px++){
      c = shade((px+0.5)/N, (py+0.5)/N, px, py);
      o = (py*N+px)*4;
      d.data[o] = c[0]|0; d.data[o+1] = c[1]|0; d.data[o+2] = c[2]|0;
      d.data[o+3] = c.length > 3 ? c[3]|0 : 255;
    }
  }
  bx.putImageData(d,0,0);
  return buf;
}
function blowUp(x, buf, smooth, alpha){
  x.save();
  x.imageSmoothingEnabled = smooth;
  if (alpha !== undefined) x.globalAlpha = alpha;
  x.drawImage(buf, 0, 0, TS, TS);
  x.restore();
}

/* matte — a museum plate: flat colour, one slow rise of noise across it,
   and grain fine enough to read as the surface rather than as an effect */
function paintMatte(x, base, i){
  var n = noiseField(0x2C41 + i*9176);
  var hi = mixRGB(base,[255,255,255],0.13), lo = mixRGB(base,[0,0,0],0.15);
  blowUp(x, fieldBuffer(160, function(u,v){
    var s = 0.5 + (fbm(n, u*6.5, v*6.5, 5) - 0.5)*1.9 + (v - 0.5)*0.07;
    s = s < 0 ? 0 : s > 1 ? 1 : s;
    return s < 0.5 ? mixRGB(lo, base, s*2) : mixRGB(base, hi, (s-0.5)*2);
  }), true);
  grain(x, 0.1);
}

/* glitch — a plate that lost the signal: flat blocks torn out of the
   neighbouring colours, rows slipped sideways, two channels off register */
function paintGlitch(x, base, i){
  var r = rng(0x51B7 + i*30011), k;
  fill(x, cssRGB(base));
  for (k=0;k<4;k++){
    x.fillStyle = cssRGB(rgbOf(PLATES[(i + 1 + ((r()*5)|0)) % PLATES.length]));
    x.fillRect(Math.round((r()-0.2)*TS), Math.round(r()*TS),
               Math.round((0.2 + r()*0.55)*TS), Math.round((0.04 + r()*0.2)*TS));
  }
  blowUp(x, fieldBuffer(64, function(){
    var w = r() < 0.5 ? 250 : 6;
    return [w,w,w, r() < 0.2 ? 200 : 0];
  }), false, 0.5);
  /* rows slip sideways, each one wrapped so no edge is ever left empty */
  var snap = mkc(TS,TS);
  snap.getContext('2d').drawImage(x.canvas,0,0);
  for (k=0;k<11;k++){
    var y0 = Math.round(r()*TS), h = Math.round((0.01 + r()*0.06)*TS);
    var dx = Math.round((r()-0.5)*0.36*TS);
    x.clearRect(0,y0,TS,h);
    x.drawImage(snap, 0,y0,TS,h, dx,y0,TS,h);
    x.drawImage(snap, 0,y0,TS,h, dx + (dx < 0 ? TS : -TS),y0,TS,h);
  }
  var channel = function(color){
    var g = mkc(TS,TS), gx = g.getContext('2d');
    gx.drawImage(x.canvas,0,0);
    gx.globalCompositeOperation = 'multiply';
    gx.fillStyle = color; gx.fillRect(0,0,TS,TS);
    return g;
  };
  var red = channel('#ff3050'), cyan = channel('#30e0ff');
  x.save();
  x.globalCompositeOperation = 'lighter';
  x.globalAlpha = 0.3;
  x.drawImage(red, -0.022*TS, 0);
  x.drawImage(cyan, 0.022*TS, 0);
  x.restore();
  x.save();
  x.fillStyle = 'rgba(0,0,0,0.22)';
  for (k=0;k<TS;k+=4) x.fillRect(0,k,TS,1);
  x.restore();
  grain(x, 0.24);
}

/* riso — the printed plate: a lit corner and a noise field quantised to
   three tones through an ordered dither, then scanlines and heavy grain */
var BAYER = [0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];
function paintRiso(x, base, i){
  var n = noiseField(0x77A3 + i*15731), k;
  var lo = mixRGB(base,[24,14,6],0.66), hi = mixRGB(base,[255,238,196],0.5);
  var cx = 0.22 + (i % 3)*0.28, cy = 0.2 + ((i/3)|0)*0.2;
  blowUp(x, fieldBuffer(100, function(u,v,px,py){
    var d = Math.sqrt((u-cx)*(u-cx) + (v-cy)*(v-cy));
    var s = (1 - d*1.25)*0.72 + fbm(n, u*3.2, v*3.2, 3)*0.52 - 0.1;
    var band = Math.floor(s*2.4 + (BAYER[(py & 3)*4 + (px & 3)] + 0.5)/16);
    return band <= 0 ? lo : band === 1 ? base : hi;
  }), false);
  x.save();
  x.fillStyle = 'rgba(28,14,4,0.18)';
  for (k=0;k<TS;k+=6) x.fillRect(0,k,TS,2);
  x.restore();
  grain(x, 0.22);
}

/* halftone — one ink on one stock, shaded only by the size of the dots on
   a screen rotated a few degrees further for every tile */
function paintHalftone(x, base, i){
  var n = noiseField(0x3F19 + i*21467), gx, gy;
  fill(x, cssRGB(base));
  var dot = luma(base) > 0.5 ? mixRGB(base,[0,0,0],0.88) : mixRGB(base,[255,255,255],0.9);
  var pitch = TS/30, a = (17 + (i % 4)*9)*Math.PI/180;
  var ca = Math.cos(a), sa = Math.sin(a), span = Math.ceil(TS/pitch);
  x.save();
  x.fillStyle = cssRGB(dot);
  x.translate(TS/2, TS/2);
  x.rotate(a);
  for (gy=-span;gy<=span;gy++){
    for (gx=-span;gx<=span;gx++){
      var wx = gx*pitch, wy = gy*pitch;
      var u = (wx*ca - wy*sa)/TS + 0.5, v = (wx*sa + wy*ca)/TS + 0.5;
      if (u < -0.1 || u > 1.1 || v < -0.1 || v > 1.1) continue;
      var s = fbm(n, u*2.7, v*2.7, 4)*0.95 + (0.55 - v)*0.5;
      var rad = pitch*0.66*(s < 0 ? 0 : s > 1 ? 1 : s);
      if (rad < 0.4) continue;
      x.beginPath(); x.arc(wx, wy, rad, 0, Math.PI*2); x.fill();
    }
  }
  x.restore();
  grain(x, 0.12);
}

var PAINTERS = { matte: paintMatte, glitch: paintGlitch, riso: paintRiso, halftone: paintHalftone };
var ART = (function(){
  var painter = PAINTERS[FIELD] || paintMatte, list = [], i;
  for (i=0;i<PLATES.length;i++){
    list.push((function(index){
      return function(x){ painter(x, rgbOf(PLATES[index]), index); };
    })(i));
  }
  return list;
})();

function roundRectPath`,Ce=`var tNow = 0, playing = true, hovering = false, rate = 0, vel = 0, settled = false, last = performance.now();

function setHover(state){
  if (hovering === state) return;
  hovering = state; settled = false;
  /* the host cannot see the pointer arrive over this frame, so tell it — it is
     the one that will see the pointer leave again */
  if (state && window.parent !== window){
    try { window.parent.postMessage({ threeuiPointerOver: true }, '*'); } catch (error) {}
  }
}
var root = document.documentElement;
root.addEventListener('pointerenter', function(){ setHover(true); });
root.addEventListener('pointermove',  function(){ setHover(true); });
root.addEventListener('pointerdown',  function(){ setHover(true); });
root.addEventListener('pointerleave', function(){ setHover(false); });
root.addEventListener('pointercancel',function(){ setHover(false); });
window.addEventListener('blur', function(){ setHover(false); });

function frame(now){
  var dt = Math.min(0.05, Math.max(0, (now - last)/1000));
  last = now;
  if (playing){
    if (SPRING){
      vel += (((hovering ? 1 : 0) - rate)*SPRING_K - vel*SPRING_D)*dt;
      rate += vel*dt;
    } else {
      rate += ((hovering ? 1 : 0) - rate) * (1 - Math.exp(-dt/EASE));
    }
    if (Math.abs(rate) > 0.0004 || Math.abs(vel) > 0.0004){
      tNow = ((tNow + dt*rate) % DUR + DUR) % DUR;
      render(tNow); settled = false;
    } else if (!settled){
      rate = 0; vel = 0; render(tNow); settled = true;
    }
  }
  requestAnimationFrame(frame);
}

/* font family, weight, and headline size arrive live so a control tick never
   rebuilds the document and repaints the twelve tile textures */
window.addEventListener('message', function(event){
  var runtime = event.data && event.data.threeuiRuntime;
  if (!runtime) return;
  if (typeof runtime.font === 'string') SANS = runtime.font;
  if (typeof runtime.weight === 'string') HEAD_WEIGHT = runtime.weight;
  if (typeof runtime.headlineSize === 'number' && runtime.headlineSize > 0){
    HEAD_SIZE = Math.max(0.6, Math.min(1.8, runtime.headlineSize));
  }
  if (typeof runtime.hover === 'number') setHover(runtime.hover > 0);
  buildHead(); settled = false; render(tNow);
});

window.addEventListener('resize', function(){ resize(); settled = false; render(tNow); });
resize();
render(tNow);
requestAnimationFrame(frame);

window.__DUR = DUR;
window.__seek = function(t){
  tNow = ((t % DUR) + DUR) % DUR;
  playing = false;
  render(tNow);
};
window.__play = function(){ last = performance.now(); playing = true; settled = false; };`;function H(e,a,t){const o=a==="light"?"#f4f7fb":"#000000",s=a==="light"?t.ink.light:t.ink.dark,n=M[t.type.font];return e.replace("<title>New Grainient Collection Added — motion</title>",`<title>${t.title} — motion</title>`).replace("html,body{margin:0;height:100%;background:#000;overflow:hidden}",`html,body{margin:0;height:100%;background:${o};overflow:hidden}`).replace("axis: 25.5,",`axis: ${t.axis},`).replace("phase: 93",`phase: ${t.phase}`).replace("  tile: 346,            /* tile side in ring units (R = a)               */",`  tile: 346,            /* tile width in ring units (R = a)              */
  aspect: 0.75,         /* tile height / width — a 4:3 landscape crop    */`).replace("  roundRectPath(ctx, TS, TS, TS*RING.radius);","  roundRectPath(ctx, TS, TS*RING.aspect, TS*RING.aspect*RING.radius);").replace(`var CAP = 142;          /* headline cap height */
var SMALL = 22;         /* small-label cap height */`,`var HEAD_CAP = 142;     /* authored headline cap height */
var HEAD_MID = 1093;    /* authored vertical centre of the two-line block */
var HEAD_SIZE = ${t.type.headlineSize};   /* headline size multiplier */
var HEAD_WEIGHT = '${t.type.weight}'; /* headline weight */
var HEAD_TRACK = ${t.type.tracking};   /* headline tracking, in cap heights */
var HEAD_STYLE = '${t.field}';
var HEAD_SHADOW = '${s[2]}';  /* riso: the plate under the ink */
var HEAD_GHOST = ['#ff2f6d','#00e6ff'];  /* glitch: the two channel ghosts */
var PLATES = ${JSON.stringify(t.palette)};
var FIELD = '${t.field}';       /* which painter shades the plates */
var EASE = ${t.motion.ease};        /* seconds for the orbit to reach hover speed */
var SPRING = ${t.motion.spring?1:0}, SPRING_K = 26, SPRING_D = 5.7;`).replace(`var SANS = '"Helvetica Neue",Helvetica,"Inter",Arial,system-ui,sans-serif';`,`var SANS = '${n}';`).replace("{ s:'NEW GRAINIENT',    top:930,  w:1370, fill:'#d0d0d0' }",`{ s:'${t.headline[0]}', top:930,  w:${t.headlineWidths[0]}, fill:'${s[0]}' }`).replace("{ s:'COLLECTION ADDED', top:1114, w:1775, fill:'#ffffff' }",`{ s:'${t.headline[1]}', top:1114, w:${t.headlineWidths[1]}, fill:'${s[1]}' }`).replace(' * Tile artwork — eleven grainy gradient "wallpapers"'," * Tile artwork — twelve flat plates under a procedural noise field").replace(we,Te).replace(ye,`    /* each field painter lays its own grain, at the weight its style wants */
    front.push(c);`).replace("y.fillStyle = 'rgba(6,8,18,0.75)';","y.fillStyle = 'rgba(10,12,24,0.45)';").replace(be,Se).replace(xe,`function buildLabels(){
  /* the launch poster's corner marks and flanking notes are dropped; the
     layer stays so the compositing order below is untouched */
  labelLayer = mkc(1,1);
}

function resize`).replace("var spin = (t/DUR)*Math.PI*2;",`var spin = (t/DUR)*Math.PI*2*${t.direction};`).replace(`ctx.fillStyle = '#000';
  ctx.fillRect(0,0,W,H);`,`ctx.fillStyle = '${o}';
  ctx.fillRect(0,0,W,H);`).replace(ke,Ce)}function Ee(e,a){const t=a==="light"?"[[8, 10, 15], [40, 48, 62], [85, 96, 116]]":"[[255, 255, 255], [226, 232, 240], [191, 205, 225]]";return e.replace("<title>Epilude — Footer</title>","<title>Shaders Particle Wordmark</title>").replace("aspect-ratio: 8.541554959785524;","aspect-ratio: 5.333333333333333;").replace(/var WORDMARK =[\s\S]*?"<\/svg>";/,`var WORDMARK = ${JSON.stringify(fe)};`).replace("var PALETTE = [[255, 255, 255], [226, 232, 240], [191, 205, 225]];",`var PALETTE = ${t};`).replace("a: 0.04 + 0.95 * band * Math.pow(flake, 1.8)","a: 0.14 + 0.86 * band * Math.pow(flake, 1.8)")}function Ae(e,a){const t=a==="light"?"#f4f7fb":"#000",o=a==="light"?"#172033":"#E8EEE9",s=a==="light"?"#536076":"#c9d4cc",n=a==="light"?"#315efb":"#7080ff";return e.replace("<title>Supreme Radio — Graphic Identity</title>","<title>ThreeUI — Audio Wordmark</title>").replaceAll("supreme radio","ThreeUI").replaceAll("#EA3927",n).replaceAll("#E8EEE9",o).replaceAll("#E3EDE5",o).replaceAll("#c9d4cc",s).replaceAll("#000",t).replace("var DUR = 20;","var DUR = 4.7;")}const r={expanse:{title:"Expanse Field shader background",source:N,background:"#07080b",targets:[{selector:"#glcanvas",role:"background"}]},starfield:{title:"Imaginie star portal",source:ee,background:"#0d0a12",theme:{nativeMode:"dark",lightBackground:"#f4f7fb",darkBackground:"#0d0a12",invertBackground:!0},targets:[{selector:"#ambient-starfield",role:"background"},{selector:"#portal-stars",role:"background"},{selector:".holo-btn",role:"button"}]},performanceGaugesTachometer:{title:"Tachometer diagnostic gauge",source:k,background:"#000000",targets:[{selector:"#gauge-tachometer",role:"visual",fit:"contain-square"}]},performanceGaugesSpeedometer:{title:"Speedometer diagnostic gauge",source:k,background:"#000000",targets:[{selector:"#gauge-speedometer",role:"visual",fit:"contain-square"}]},performanceGaugesBoost:{title:"Turbo boost diagnostic gauge",source:k,background:"#000000",targets:[{selector:"#gauge-boost",role:"visual",fit:"contain-square"}]},performanceGaugesPower:{title:"EV power diagnostic gauge",source:k,background:"#000000",targets:[{selector:"#gauge-power",role:"visual",fit:"contain-square"}]},logicCore:{title:"Logic Core isometric field",source:ne,background:"#050505",targets:[{selector:"#three-canvas-container",role:"background"}]},ignition:{title:"Ignition Button shader button",source:J,background:"#f0ede7",theme:{nativeMode:"light",lightBackground:"#f0ede7",darkBackground:"#121316",invertBackground:!0},targets:[{selector:"#bg-gl",role:"background"},{selector:"#btn",role:"button"}]},induction:{title:"Induction Button kinetic button",source:le,background:"#050505",theme:{nativeMode:"dark",lightBackground:"#f4f7fb",darkBackground:"#050505",invertBackground:!0},targets:[{selector:"#bg-canvas",role:"background"},{selector:"#btn",role:"button"}]},aetherisLabs:{title:"Aetheris Labs plasma button",source:q,background:"#020614",theme:{nativeMode:"dark",lightBackground:"#f4f7fb",darkBackground:"#020614",invertBackground:!0},targets:[{selector:"#bg-gl",role:"background"},{selector:"#btn",role:"button"}]},tactile:{title:"Nexus tactile fluidics button",source:te,background:"#03090d",theme:{nativeMode:"dark",lightBackground:"#f4f7fb",darkBackground:"#03090d",invertBackground:!0},targets:[{selector:"#bg-canvas",role:"background"},{selector:"#btn",role:"button"}]},thinking:{title:"Thinking Button canvas animation",source:oe,background:"#111318",theme:{lightBackground:"#f4f7fb",darkBackground:"#111318"},transformSource:ue,targets:[{selector:"#stage",role:"button"}]},slidingTextCta:{title:"Sliding Text CTA button",source:re,background:"#111318",theme:{lightBackground:"#f4f7fb",darkBackground:"#111318"},targets:[{selector:".component-wrapper button",role:"button",preserveTransform:!0}]},floatingDotsCta:{title:"Floating Dots CTA button",source:U,background:"#111318",theme:{lightBackground:"#f4f7fb",darkBackground:"#111318"},targets:[{selector:".component-wrapper button",role:"button",preserveTransform:!0}]},launchButton:{title:"Gradient Launch button",source:Q,background:"#111318",theme:{lightBackground:"#f4f7fb",darkBackground:"#111318"},targets:[{selector:".component-wrapper button",role:"button",preserveTransform:!0}]},dotBorderButton:{title:"Dot Border button",source:W,background:"#111318",theme:{lightBackground:"#f4f7fb",darkBackground:"#111318"},transformSource:ve,targets:[{selector:".component-wrapper .btn-wrapper",role:"button",preserveTransform:!0}]},gradientCta:{title:"Gradient CTA button",source:Z,background:"#111318",theme:{lightBackground:"#f4f7fb",darkBackground:"#111318"},targets:[{selector:".component-wrapper button",role:"button",preserveTransform:!0}]},spinningBorderButton:{title:"Spinning Border button",source:ie,background:"#111318",theme:{lightBackground:"#f4f7fb",darkBackground:"#111318"},targets:[{selector:".component-wrapper button",role:"button",preserveTransform:!0}]},glassmorphismCta:{title:"Glassmorphism CTA button",source:X,background:"#111318",theme:{lightBackground:"#f4f7fb",darkBackground:"#111318"},targets:[{selector:".component-wrapper a",role:"button",preserveTransform:!0}]},generateButton:{title:"Generate button",source:V,background:"#111318",theme:{lightBackground:"#f4f7fb",darkBackground:"#111318"},targets:[{selector:".component-wrapper .btn-wrapper",role:"button",preserveTransform:!0}]},gradientPillButton:{title:"Gradient Pill button",source:K,background:"#111318",theme:{lightBackground:"#f4f7fb",darkBackground:"#111318"},transformSource:me,targets:[{selector:".component-wrapper button",role:"button",preserveTransform:!0}]},gradientBeamCta:{title:"Gradient Beam CTA button",source:$,background:"#111318",theme:{lightBackground:"#f4f7fb",darkBackground:"#111318"},targets:[{selector:".component-wrapper button",role:"button",preserveTransform:!0}]},threeUIIntro:{title:"ThreeUI chromatic wordmark intro",source:G,background:"#000000",theme:{nativeMode:"dark",lightBackground:"#f4f7fb",darkBackground:"#000000",invertBackground:!0},targets:[{selector:"#stage",role:"background"}],hiddenTargets:[".sr"],introWordmark:{sceneSelector:"#comp .scene:first-child",text:"ThreeUI",fontSize:130,endTime:1.7,holdTime:1.1,logoSvg:ge}},particleWordmark:{title:"Shaders particle wordmark",source:j,background:"#0c0c0d",theme:{lightBackground:"#f4f7fb",darkBackground:"#0c0c0d"},transformSource:Ee,targets:[{selector:"#storm",role:"visual",fit:"wide-wordmark"}]},audioWordmark:{title:"ThreeUI audio wordmark",source:O,background:"#000000",theme:{lightBackground:"#f4f7fb",darkBackground:"#000000"},transformSource:Ae,targets:[{selector:"#stage",role:"visual",fit:"portrait-stage",preserveTransform:!0}]},galleryHeading:{title:"Gallery Heading canvas animation",source:Y,background:"#000000",theme:{lightBackground:"#f4f7fb",darkBackground:"#000000"},transformSource:(e,a)=>H(e,a,_[R.variant]),targets:[{selector:"#stage",role:"background"}]},dimensional:{title:"Vanguard dimensional architecture",source:ce,background:"#050608",targets:[{selector:"#webgl-canvas",role:"background"}]},cloud:{title:"Strata cloud migration field",source:se,background:"#071010",targets:[{selector:"#c",role:"background"}]},vertex9:{title:"Vertex 9 global data field",source:de,background:"#050505",targets:[{selector:"#webgl-canvas",role:"background"}]},topology:{title:"Nexus topology field",source:ae,background:"#070707",targets:[{selector:"#animationCanvas",role:"background"}]},voidField:{title:"Void Field shader background",source:pe,background:"#030305",targets:[{selector:"#webgl-canvas",role:"background"}]}};function T(e,a,t){return Math.min(t,Math.max(a,e))}function I(e,a){var t;return((t=e.theme)==null?void 0:t[`${a}Background`])??e.background}function _e(e,a){var b,w;const t=I(e,a),o=((b=e.theme)==null?void 0:b.invertBackground)===!0&&e.theme.nativeMode!==a,s=((w=e.transformSource)==null?void 0:w.call(e,e.source,a))??e.source,n=JSON.stringify(e.targets).replace(/</g,"\\u003c"),u=JSON.stringify(e.hiddenTargets??[]).replace(/</g,"\\u003c"),x=JSON.stringify(e.introWordmark??null).replace(/</g,"\\u003c"),p=JSON.stringify(a),g=o?"filter: invert(1) hue-rotate(180deg) saturate(.92) brightness(1.02) !important;":"",m=e.introWordmark?`${e.introWordmark.sceneSelector} .tx { font-size: ${e.introWordmark.fontSize}px !important; }`:"",E=`<style data-threeui-focus>
html, body { width: 100% !important; height: 100% !important; min-height: 0 !important; margin: 0 !important; padding: 0 !important; overflow: hidden !important; background: ${t} !important; color-scheme: ${a} !important; }
body { position: relative !important; display: flex !important; align-items: center !important; justify-content: center !important; }
body > * { visibility: hidden !important; }
body[data-threeui-ready] > [data-threeui-role] { visibility: visible !important; }
[data-threeui-residual] { display: none !important; }
[data-threeui-hidden] { display: none !important; }
[data-threeui-role="background"] { position: fixed !important; inset: 0 !important; width: 100% !important; height: 100% !important; max-width: none !important; max-height: none !important; z-index: 0 !important; opacity: 1 !important; pointer-events: none !important; ${g} }
[data-threeui-role="background"][data-threeui-fit="contain-square"] { position: absolute !important; top: 50% !important; right: auto !important; bottom: auto !important; left: 50% !important; width: min(100vw, 100vh) !important; height: min(100vw, 100vh) !important; aspect-ratio: 1 / 1 !important; transform: translate(-50%, -50%) !important; }
[data-threeui-role="button"] { position: relative !important; z-index: 2 !important; opacity: 1 !important; flex: none !important; }
[data-threeui-role="button"]:not([data-threeui-preserve-transform]) { transform: none !important; }
[data-threeui-role="visual"] { position: relative !important; z-index: 1 !important; width: min(100%, 1040px) !important; max-width: 1040px !important; max-height: 100% !important; margin: auto !important; padding: 24px !important; overflow: auto !important; opacity: 1 !important; filter: none !important; }
[data-threeui-role="visual"]:not([data-threeui-preserve-transform]) { transform: none !important; }
[data-threeui-role="visual"][data-threeui-fit="contain-square"] { flex: none !important; width: min(calc(100vw - 32px), calc(100vh - 32px)) !important; max-width: none !important; height: min(calc(100vw - 32px), calc(100vh - 32px)) !important; max-height: none !important; aspect-ratio: 1 / 1 !important; padding: 0 !important; overflow: hidden !important; }
[data-threeui-role="visual"][data-threeui-fit="wide-wordmark"] { width: min(calc(100vw - 48px), 1180px) !important; max-width: calc(100vw - 48px) !important; height: auto !important; max-height: none !important; aspect-ratio: 16 / 3 !important; padding: 0 !important; overflow: hidden !important; }
[data-threeui-role="visual"][data-threeui-fit="portrait-stage"] { position: absolute !important; top: 50% !important; right: auto !important; bottom: auto !important; left: 50% !important; width: 1080px !important; max-width: none !important; height: 1350px !important; max-height: none !important; padding: 0 !important; overflow: hidden !important; transform-origin: center !important; }
${m}
</style>`,y=`<script data-threeui-focus>
(function () {
  document.documentElement.dataset.sfMode = ${p};
  var isolated = false;
  function isolate() {
    if (isolated) return;
    var specs = ${n};
    var hiddenSelectors = ${u};
    var introWordmark = ${x};
    var roots = [];
    hiddenSelectors.forEach(function (selector) {
      document.querySelectorAll(selector).forEach(function (element) {
        element.setAttribute('data-threeui-hidden', '');
        element.setAttribute('aria-hidden', 'true');
        if ('inert' in element) element.inert = true;
      });
    });
    specs.forEach(function (spec) {
      var element = document.querySelector(spec.selector);
      if (!element) return;
      element.setAttribute('data-threeui-role', spec.role);
      if (spec.fit) element.setAttribute('data-threeui-fit', spec.fit);
      if (spec.preserveTransform) element.setAttribute('data-threeui-preserve-transform', '');
      if (!roots.some(function (root) { return root.contains(element); })) roots.push(element);
    });
    if (introWordmark) {
      var introScene = document.querySelector(introWordmark.sceneSelector);
      var introText = introScene && introScene.querySelector('.tx');
      var introMark = introText && introText.querySelector('.mark');
      if (introText && introMark) {
        introMark.innerHTML = introWordmark.logoSvg;
        var introCharacters = Array.from(introText.children).filter(function (element) { return element !== introMark; });
        introCharacters.forEach(function (element, index) {
          element.textContent = introWordmark.text[index] === ' ' ? ' ' : (introWordmark.text[index] || '');
          element.style.display = index < introWordmark.text.length ? 'inline-block' : 'none';
        });
      }
      var introReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      var introStartedAt = performance.now();
      function renderIntroWordmark(now) {
        if (typeof window.__seek !== 'function') return;
        if (introReducedMotion) {
          window.__seek(introWordmark.endTime);
          return;
        }
        var introCycle = introWordmark.endTime + introWordmark.holdTime;
        var introTime = ((now - introStartedAt) / 1000) % introCycle;
        window.__seek(Math.min(introTime, introWordmark.endTime));
        requestAnimationFrame(renderIntroWordmark);
      }
      requestAnimationFrame(renderIntroWordmark);
    }
    if (!roots.length) return;
    isolated = true;
    roots.forEach(function (root) {
      var placeholderLink = root.matches('a[href="#"]') ? root : root.querySelector('a[href="#"]');
      if (placeholderLink) placeholderLink.addEventListener('click', function (event) { event.preventDefault(); });
      document.body.appendChild(root);
    });
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
<\/script>`;return s.replace(/<\/head>/i,`${E}</head>`).replace(/<\/body>/i,`${y}</body>`)}function L({definition:e,mode:a=S.mode,hue:t=S.hue,saturation:o=S.saturation,brightness:s=S.brightness,runtime:n,trackPointerHover:u,className:x,style:p}){const g=v.useRef(null),m=a==="light"?"light":"dark",E=I(e,m),y=v.useMemo(()=>_e(e,m),[e,m]),b=T(t,-180,180),w=T(o,0,2),P=T(s,.35,1.65),D=b===0&&w===1&&P===1?void 0:`hue-rotate(${b}deg) saturate(${w}) brightness(${P})`;v.useEffect(()=>{const l=g.current;if(!u||!l)return;let f=!1;const c=()=>{var d;f&&(f=!1,(d=l.contentWindow)==null||d.postMessage({threeuiRuntime:{hover:0}},"*"))},F=d=>{var h;d.source===l.contentWindow&&((h=d.data)!=null&&h.threeuiPointerOver)&&(f=!0)},z=d=>{if(!f)return;const h=l.getBoundingClientRect();(d.clientX<h.left||d.clientX>h.right||d.clientY<h.top||d.clientY>h.bottom)&&c()};return window.addEventListener("message",F),window.addEventListener("pointermove",z,!0),l.addEventListener("pointerleave",c),document.addEventListener("mouseleave",c),window.addEventListener("blur",c),()=>{window.removeEventListener("message",F),window.removeEventListener("pointermove",z,!0),l.removeEventListener("pointerleave",c),document.removeEventListener("mouseleave",c),window.removeEventListener("blur",c)}},[u]);const A=n?JSON.stringify(n):null;return v.useEffect(()=>{const l=g.current;if(!l||!A)return;const f=()=>{var c;return(c=l.contentWindow)==null?void 0:c.postMessage({threeuiRuntime:JSON.parse(A)},"*")};return f(),l.addEventListener("load",f),()=>l.removeEventListener("load",f)},[A,y]),C.jsx("iframe",{ref:g,className:x,"data-mode":m,title:e.title,srcDoc:y,sandbox:"allow-scripts",loading:"eager",style:{display:"block",width:"100%",height:"100%",border:0,background:E,filter:D,...p}})}function i(e){return function(a){return C.jsx(L,{...a,definition:e})}}const Le=i(r.expanse),Pe=i(r.starfield),B={tachometer:r.performanceGaugesTachometer,speedometer:r.performanceGaugesSpeedometer,boost:r.performanceGaugesBoost,power:r.performanceGaugesPower},Me={variant:"tachometer"};function Fe({variant:e=Me.variant,...a}){const t=B[e]??B.tachometer;return C.jsx(L,{...a,definition:t})}const ze=i(r.logicCore),Be=i(r.ignition),He=i(r.induction),Ie=i(r.aetherisLabs),De=i(r.tactile),qe=i(r.thinking),Oe=i(r.slidingTextCta),We=i(r.floatingDotsCta),Ge=i(r.launchButton),je=i(r.dotBorderButton),Ne=i(r.gradientCta),Ue=i(r.spinningBorderButton),Ye=i(r.glassmorphismCta),Ve=i(r.generateButton),Xe=i(r.gradientPillButton),$e=i(r.gradientBeamCta),Ze=i(r.threeUIIntro),Ke=i(r.particleWordmark),Je=i(r.audioWordmark);function Qe({variant:e=R.variant,font:a,weight:t,headlineSize:o,...s}){const n=_[e]??_[R.variant],u=v.useMemo(()=>({...r.galleryHeading,title:`${n.title} canvas animation`,transformSource:(p,g)=>H(p,g,n)}),[n]),x=v.useMemo(()=>{const p=n.type,g=t&&he.includes(t)?t:p.weight;return{font:(a&&M[a])??M[p.font],weight:g,headlineSize:T(o??p.headlineSize,.6,1.8)}},[n,a,o,t]);return C.jsx(L,{...s,definition:u,runtime:x,trackPointerHover:!0})}const et=i(r.dimensional),tt=i(r.cloud),at=i(r.vertex9),rt=i(r.topology),it=i(r.voidField);export{Je as AudioWordmark,tt as CloudField,at as DataField,et as DimensionalField,je as DotBorderButton,Le as ExpanseField,We as FloatingDotsCta,R as GALLERY_HEADING_DEFAULTS,M as GALLERY_HEADING_FONTS,_ as GALLERY_HEADING_VARIANTS,he as GALLERY_HEADING_WEIGHTS,Qe as GalleryHeading,Ve as GenerateButton,Ye as GlassmorphismCta,$e as GradientBeamCta,Ne as GradientCta,Xe as GradientPillButton,Be as IgnitionButton,He as InductionButton,Ge as LaunchButton,ze as LogicCoreField,S as NEUFORM_ISOLATED_DEFAULTS,Me as PERFORMANCE_GAUGES_DEFAULTS,Ke as ParticleWordmark,Fe as PerformanceGauges,Ie as PlasmaButton,Oe as SlidingTextCta,Ue as SpinningBorderButton,Pe as StarPortal,De as TactileButton,qe as ThinkingButton,Ze as ThreeUIIntro,rt as TopologyField,it as VoidField};
