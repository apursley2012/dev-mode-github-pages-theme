import{j as n}from"../assets/jsx-runtime.js";import{m as d}from"../assets/proxy.js";const g=({color:e="lime",label:a,glow:r=!0,className:t="",...o})=>{const c={purple:"border-arcade-purple text-arcade-purple hover:bg-arcade-purple hover:text-arcade-bg",lime:"border-arcade-lime text-arcade-lime hover:bg-arcade-lime hover:text-arcade-bg",magenta:"border-arcade-magenta text-arcade-magenta hover:bg-arcade-magenta hover:text-arcade-bg",cyan:"border-arcade-cyan text-arcade-cyan hover:bg-arcade-cyan hover:text-arcade-bg"},l={purple:"hover:box-glow-purple",lime:"hover:box-glow-lime",magenta:"hover:box-glow-magenta",cyan:"hover:box-glow-cyan"};return n.jsx(d.button,{whileHover:{scale:1.05},whileTap:{scale:.95},className:`
        font-pixel text-xl uppercase tracking-widest px-6 py-3 
        border-2 transition-all duration-200
        ${c[e]}
        ${r?l[e]:""}
        ${t}
      `,...o,children:a})};export{g as A};
