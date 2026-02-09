import { useEffect, useRef } from 'react';

export function PsychedelicShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const gl = canvas.getContext('webgl');
    if (!gl) {
      return;
    }

    const vertexShaderSource = `
      attribute vec2 a_position;
      void main() {
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fragmentShaderSource = `
      precision highp float;

      uniform vec2 u_resolution;
      uniform float u_time;

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);

        float a = hash(i + vec2(0.0, 0.0));
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));

        return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
      }

      void main() {
        vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.x, u_resolution.y);
        float t = u_time * 0.14;

        float waveA = sin(uv.x * 7.0 + t * 3.0) * 0.25;
        float waveB = cos(uv.y * 6.0 - t * 2.2) * 0.25;
        float swirl = sin(length(uv) * 10.0 - t * 4.0) * 0.2;
        float grain = noise(uv * 4.0 + t) * 0.2;
        float mixVal = waveA + waveB + swirl + grain;

        vec3 c1 = vec3(0.0 / 255.0, 23.0 / 255.0, 231.0 / 255.0);   // #0017e7
        vec3 c2 = vec3(91.0 / 255.0, 62.0 / 255.0, 255.0 / 255.0);  // #5b3eff
        vec3 c3 = vec3(141.0 / 255.0, 99.0 / 255.0, 255.0 / 255.0); // #8d63ff
        vec3 c4 = vec3(187.0 / 255.0, 136.0 / 255.0, 255.0 / 255.0);// #bb88ff
        vec3 c5 = vec3(232.0 / 255.0, 174.0 / 255.0, 255.0 / 255.0);// #e8aeff

        float paletteT = clamp(0.5 + 0.5 * sin(mixVal * 5.0 + t * 1.8), 0.0, 1.0);
        vec3 col = mix(c1, c2, smoothstep(0.0, 0.25, paletteT));
        col = mix(col, c3, smoothstep(0.2, 0.5, paletteT));
        col = mix(col, c4, smoothstep(0.45, 0.75, paletteT));
        col = mix(col, c5, smoothstep(0.7, 1.0, paletteT));

        float vignette = smoothstep(1.3, 0.2, length(uv));
        col *= vignette;

        gl_FragColor = vec4(col, 1.0);
      }
    `;

    function compileShader(type: number, source: string) {
      const shader = gl.createShader(type);
      if (!shader) {
        return null;
      }
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vertexShader = compileShader(gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragmentShaderSource);
    if (!vertexShader || !fragmentShader) {
      return;
    }

    const program = gl.createProgram();
    if (!program) {
      return;
    }

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.deleteProgram(program);
      return;
    }

    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1, -1,
        1, -1,
        -1, 1,
        -1, 1,
        1, -1,
        1, 1,
      ]),
      gl.STATIC_DRAW,
    );

    const positionAttributeLocation = gl.getAttribLocation(program, 'a_position');
    gl.enableVertexAttribArray(positionAttributeLocation);
    gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

    const resolutionUniformLocation = gl.getUniformLocation(program, 'u_resolution');
    const timeUniformLocation = gl.getUniformLocation(program, 'u_time');

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.floor(window.innerWidth * dpr);
      const height = Math.floor(window.innerHeight * dpr);
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    resize();
    window.addEventListener('resize', resize);

    let rafId = 0;
    const start = performance.now();
    const render = (now: number) => {
      const seconds = (now - start) / 1000;
      gl.uniform2f(resolutionUniformLocation, canvas.width, canvas.height);
      gl.uniform1f(timeUniformLocation, seconds);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      rafId = window.requestAnimationFrame(render);
    };

    rafId = window.requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      window.cancelAnimationFrame(rafId);
      gl.deleteBuffer(positionBuffer);
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
    };
  }, []);

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-0" aria-hidden="true" />;
}
