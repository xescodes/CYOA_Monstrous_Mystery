import  { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface StoryGraphProps {
  visitedNodes: string[];
}

const StoryGraph: React.FC<StoryGraphProps> = ({ visitedNodes }) => {
  const mermaidRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'dark',
      securityLevel: 'loose',
      flowchart: {
        useMaxWidth: false,
        htmlLabels: true,
        curve: 'basis',
      },
    });
    
    updateDiagram();
  }, [visitedNodes]);

  const updateDiagram = () => {
    if (!mermaidRef.current) return;

    // Generate simple progress diagram
    const graph = `
      flowchart LR
        ${visitedNodes.map((node, index) => {
          return index < visitedNodes.length - 1 
            ? `node${index}["${node}"] --> node${index + 1}["${visitedNodes[index + 1]}"]` 
            : `node${index}["${node}"]`;
        }).join('\n        ')}
        
        style node${visitedNodes.length - 1} fill:#6B46C1,stroke:#422D80,color:#FFF
        ${visitedNodes.slice(0, -1).map((_, index) => `style node${index} fill:#2D3748,stroke:#1A202C,color:#E2E8F0`).join('\n        ')}
    `;

    try {
      mermaid.render('mermaid-graph', graph).then(({ svg }) => {
        if (mermaidRef.current) {
          mermaidRef.current.innerHTML = svg;
        }
      });
    } catch (error) {
      console.error('Error rendering mermaid diagram:', error);
    }
  };

  return (
    <div className="mermaid-container">
      <div ref={mermaidRef} id="mermaid-graph"></div>
    </div>
  );
};

export default StoryGraph;
 