import { FC, useEffect } from "react";
import { MultiDirectedGraph } from "graphology";
import { SigmaContainer, useLoadGraph } from "@react-sigma/core";
import { graphType } from "../../types/GlobalTypes";

type GraphProps = {
  data: graphType[];
};

const GraphLoader: FC<GraphProps> = ({ data }) => {
  const loadGraph = useLoadGraph();
  useEffect(() => {
    const graph = new MultiDirectedGraph();
    const addedNodes = new Set();

    data.forEach(({ node_1, node_2 }) => {
      if (!addedNodes.has(node_1)) {
        graph.addNode(node_1, {
          label: node_1,
          size: 10,
          color: "#FF5733",
          x: Math.random() * 100,
          y: Math.random() * 100,
        });
        addedNodes.add(node_1);
      }
      if (!addedNodes.has(node_2)) {
        graph.addNode(node_2, {
          label: node_2,
          size: 10,
          color: "#FF5733",
          x: Math.random() * 100,
          y: Math.random() * 100,
        });
        addedNodes.add(node_2);
      }
    });

    data.forEach(({ node_1, node_2, edge }, index) => {
      graph.addEdgeWithKey(`e${index}`, node_1, node_2, { label: edge });
    });

    loadGraph(graph);
  }, [data, loadGraph]);

  return null;
};

export default function SigmaGraph({ data }: GraphProps) {
  return (
    <>
      {data.length === 0 ? (
        <div className="w-full h-full flex items-center justify-center">
          <p>Input your Data first</p>
        </div>
      ) : (
        <SigmaContainer
          settings={{ allowInvalidContainer: true, renderEdgeLabels: true }}
        >
          <GraphLoader data={data} />
        </SigmaContainer>
      )}
    </>
  );
}
