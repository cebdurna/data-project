import React, { useCallback, useEffect } from "react";

const { tableau } = window;

function TableauEmbed(url) {
  const initViz = useCallback(() => {
    const options = { showVizHome: false, showShareOptions: false };

    new tableau.Viz(document.getElementById(url), url, options);
  }, [url]);
  console.log(tableau.VizManager.getVizs(), 444);
  useEffect(() => {
    console.log(tableau.VizManager.getVizs(), 444);
    // const viz = tableau.VizManager.getVizs()[0];
    // if (viz) {
    //   viz.dispose();
    // }
    try {
      initViz();
    } catch {}
  }, [initViz]);
  return <div id={url}></div>;
}

export default TableauEmbed;
